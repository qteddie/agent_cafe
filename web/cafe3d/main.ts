// Agent Café in 3D: the café of the web page as a room you can turn and zoom,
// where every agent of every session is a little person who walks about and
// does what its agent is doing. The page loads this file before app.js,
// which mounts it and hands it each view as it comes.
//
// Built into public/cafe3d.js by Bun (see web/package.json):
//   cd web && bun install && bun run build:3d

import * as THREE from 'three'
import { OrbitControls } from 'three/addons/controls/OrbitControls.js'

import { hash } from '../../hooks/sprites'
import type { View, ViewLine, ViewTable } from '../look'
import type { Line, World } from './guest'
import { Guest } from './guest'
import { heartTexture } from './kit'
import type { Place, Point, Rect, Spot, SpotKind } from './layout'
import {
  DOOR,
  FIXED_OBSTACLES,
  FLOOR,
  HALF_D,
  HALF_W,
  SLOTS,
  SLOT_COLUMNS,
  SPOTS,
  CAT_BEDS,
  TABLE_SEATS,
  WALL_H,
  chairOf,
  columnsOf,
  decorSpots,
  decorTable,
  pickSlot,
  rugRect,
  tableRect,
} from './layout'
import { NavGrid } from './nav'
import type { PetWorld, Species } from './pets'
import { Ball, Pet } from './pets'
import { Room } from './room'
import type { TagPhase } from './tags'
import { Tags } from './tags'

export type StageOptions = {
  /** The café's name, for the chalkboard. */
  title: string
  /** The page asks for less motion: nobody walks, they are just there. */
  reducedMotion: boolean
  /** What the stage's buttons and hint say. */
  reset: string
  hint: string
  /** A click on the room: the key of the guest clicked (as the view names it), `''` for none. */
  onPick: (key: string) => void
  /** What a pet picked out says it can be asked to do, by kind. */
  petHint: Readonly<Record<Species, string>>
}

export type Stage = {
  update: (view: View) => void
  /** Marks the guest with this key, or none. */
  highlight: (key: string | null) => void
  pause: () => void
  resume: () => void
  setReducedMotion: (isReduced: boolean) => void
  /** How many cats and dogs the café keeps: new ones come in at the door, the ones let go walk out. */
  setPets: (counts: Readonly<Record<Species, number>>) => void
}

/** The most pets of each kind. */
export const MAX_PETS = 8
/** A pet picked out is let go after this long without a word from the person. */
const CHOSEN_MS = 45_000
/** How long a heart floats up, and how long the mark of a click on the floor shows. */
const HEART_MS = 1_300
const MARK_MS = 900

type Table = {
  id: string
  slot: number
  title: string
  app: string
  isAsking: boolean
  /** Which chair each of its guests has, by key: 0 is the head. */
  chairs: Map<string, number>
  isClosing: boolean
}

const VIEW_POLAR = 0.72
const VIEW_FOV = 34

function lineOf(line: ViewLine): Line {
  return {
    key: line.key,
    kind: line.kind,
    phase: line.phase,
    act: line.act,
    tool: line.tool,
    label: line.label,
    says: line.says,
  }
}

function isOver(line: ViewLine): boolean {
  return line.phase === 'done' || line.phase === 'fail'
}

/** The seats a table shows: its main loop, then those still at work, up to a table's chairs. */
function seatsOf(table: ViewTable): ViewLine[] {
  if (table.lines.length <= TABLE_SEATS) return table.lines
  return table.lines
    .map((line, index) => ({ line, index }))
    .sort(
      (one, other) =>
        Number(other.line.depth === 0) - Number(one.line.depth === 0) ||
        Number(isOver(one.line)) - Number(isOver(other.line)) ||
        one.index - other.index,
    )
    .slice(0, TABLE_SEATS)
    .sort((one, other) => one.index - other.index)
    .map(({ line }) => line)
}

class Cafe3D implements World, PetWorld, Stage {
  motion: number
  now = performance.now()
  readonly nav = new NavGrid({ x0: -HALF_W, z0: -HALF_D, x1: HALF_W, z1: HALF_D }, 0.2)
  private readonly renderer: THREE.WebGLRenderer
  private readonly scene = new THREE.Scene()
  private readonly camera = new THREE.PerspectiveCamera(VIEW_FOV, 1, 0.5, 140)
  private readonly controls: OrbitControls
  private readonly room: Room
  private readonly pets: Pet[] = []
  private hasPets = false
  private readonly tags: Tags
  private readonly guests = new Map<string, Guest>()
  private readonly tables = new Map<string, Table>()
  private readonly slotOwners: (string | undefined)[] = new Array<string | undefined>(SLOTS).fill(undefined)
  /** Who holds each spot, by the spot's id. */
  private readonly taken = new Map<string, string>()
  /** The guests who went out of the door while their seat was still in the view (done, on the list a while yet): not seated again. */
  private readonly departed = new Set<string>()
  private readonly timer = new THREE.Timer()
  private readonly pointer = new THREE.Vector2(9, 9)
  private readonly raycaster = new THREE.Raycaster()
  private readonly box = new THREE.Box3()
  private readonly projected = new THREE.Vector3()
  private hasView = false
  private isRunning = true
  private isOnScreen = true
  private frame = 0
  private hovered = ''
  private marked = ''
  private hoveredPet: Pet | undefined
  /** The pet the person clicked last: a click on the floor sends it there. */
  private chosenPet: Pet | undefined
  private chosenAt = 0
  /** Each dog's ball, by the dog's id. */
  private readonly balls = new Map<string, Ball>()
  private readonly hearts: { sprite: THREE.Sprite; born: number }[] = []
  private readonly heartMaterial = new THREE.SpriteMaterial({ map: heartTexture(), transparent: true, depthWrite: false })
  /** Where the person last sent a pet, marked a moment on the floor. */
  private readonly mark = new THREE.Mesh(
    new THREE.RingGeometry(0.16, 0.24, 24),
    new THREE.MeshBasicMaterial({ color: '#fff8ea', transparent: true, opacity: 0, depthWrite: false }),
  )
  private markAt = -Infinity
  private readonly floorPlane = new THREE.Plane(new THREE.Vector3(0, 1, 0), 0)
  /** Where the primary button or finger went down: a click if it comes up near there. */
  private pressedAt: { x: number; y: number; id: number } | undefined
  /** How much the tags say now; changed only past a margin, so a small camera move never flips it. */
  private tagSize: 'full' | 'compact' | 'tiny' = 'full'
  private hasUserMoved = false
  private flight: { from: THREE.Vector3; fromTarget: THREE.Vector3; to: THREE.Vector3; toTarget: THREE.Vector3; t: number } | undefined
  private readonly hint: HTMLElement

  constructor(
    private readonly host: HTMLElement,
    private readonly options: StageOptions,
  ) {
    this.motion = options.reducedMotion ? 0 : 1
    this.renderer = new THREE.WebGLRenderer({ antialias: true, powerPreference: 'high-performance' })
    this.renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 2))
    this.renderer.shadowMap.enabled = true
    this.renderer.shadowMap.type = THREE.PCFShadowMap
    this.renderer.domElement.className = 'stage-canvas'
    this.renderer.domElement.addEventListener('webglcontextlost', event => event.preventDefault())
    host.append(this.renderer.domElement)

    this.scene.background = new THREE.Color('#1c2521')
    this.room = new Room(options.title)
    this.scene.add(this.room.root)
    this.tags = new Tags(host)
    this.mark.rotation.x = -Math.PI / 2
    this.mark.visible = false
    this.scene.add(this.mark)
    this.rebuildNav()

    this.controls = new OrbitControls(this.camera, this.renderer.domElement)
    this.controls.enableDamping = true
    this.controls.dampingFactor = 0.08
    this.controls.minDistance = 5
    this.controls.maxDistance = 46
    this.controls.minPolarAngle = 0.2
    this.controls.maxPolarAngle = 1.38
    this.controls.minAzimuthAngle = -1.7
    this.controls.maxAzimuthAngle = 1.7
    this.controls.screenSpacePanning = false
    this.controls.addEventListener('start', () => {
      this.hasUserMoved = true
      this.flight = undefined
      this.hint.classList.add('is-gone')
    })

    const reset = document.createElement('button')
    reset.type = 'button'
    reset.className = 'stage-reset'
    reset.textContent = options.reset
    reset.addEventListener('click', () => {
      this.hasUserMoved = false
      this.frameRoom(false)
    })
    this.hint = document.createElement('p')
    this.hint.className = 'stage-hint'
    this.hint.textContent = options.hint
    host.append(reset, this.hint)

    const canvas = this.renderer.domElement
    canvas.addEventListener('pointermove', event => this.aim(event))
    canvas.addEventListener('pointerleave', () => this.pointer.set(9, 9))
    canvas.addEventListener('pointerdown', event => {
      // A second finger (a pinch) or another button is no click: it cancels the one begun.
      this.pressedAt = event.isPrimary && event.button === 0 ? { x: event.clientX, y: event.clientY, id: event.pointerId } : undefined
    })
    canvas.addEventListener('pointerup', event => {
      const pressed = this.pressedAt
      this.pressedAt = undefined
      if (pressed === undefined || event.pointerId !== pressed.id || Math.hypot(event.clientX - pressed.x, event.clientY - pressed.y) > 6) return
      this.aim(event)
      this.click()
    })
    window.addEventListener('keydown', event => {
      if (event.key === 'Escape') this.choosePet(undefined)
    })

    new ResizeObserver(() => this.resize()).observe(host)
    new IntersectionObserver(entries => {
      this.isOnScreen = entries.some(entry => entry.isIntersecting)
      this.wake()
    }).observe(host)
    this.resize()
    this.frameRoom(true)
    this.wake()
  }

  // -------------------------------------------------------------------------
  // The page's side.

  update(view: View): void {
    this.now = performance.now()
    const isFirst = !this.hasView
    this.hasView = true
    this.room.setTally(view.busy, view.asking, view.idle)
    let isMoved = false

    const seen = new Set<string>()
    const kept = new Set<string>()
    const listed = new Set<string>()
    for (const table of view.tables.filter(each => each.inPicture)) {
      let state = this.tables.get(table.id)
      if (state === undefined) {
        const taken = [...Array(SLOTS).keys()].filter(index => this.slotOwners[index] !== undefined)
        const slot = pickSlot(taken)
        if (slot === undefined) continue
        state = { id: table.id, slot, title: '', app: '', isAsking: false, chairs: new Map(), isClosing: false }
        this.tables.set(table.id, state)
        this.slotOwners[slot] = table.id
        isMoved = true
      }
      seen.add(table.id)
      state.title = table.title
      state.app = table.app
      state.isClosing = false
      state.isAsking = table.lines.some(line => line.phase === 'ask')
      for (const line of seatsOf(table)) {
        listed.add(line.key)
        if (this.departed.has(line.key)) continue
        kept.add(line.key)
        const guest = this.guests.get(line.key)
        if (guest !== undefined && !guest.isLeaving) {
          guest.line = lineOf(line)
          continue
        }
        if (guest !== undefined) continue
        // One that finished before the café saw it at work does not come in just to leave.
        if (!isFirst && isOver(line)) continue
        if (!this.seat(state, line)) continue
        const made = new Guest(lineOf(line), this.now, hash(line.key))
        this.guests.set(line.key, made)
        this.scene.add(made.body.root, made.body.laptop)
        made.arrive(this, !isFirst)
        isMoved = true
      }
    }
    for (const table of this.tables.values()) {
      if (!seen.has(table.id)) table.isClosing = true
    }
    for (const guest of this.guests.values()) {
      if (!kept.has(guest.key) && !guest.isLeaving) guest.leave(this)
    }
    for (const key of this.departed) if (!listed.has(key)) this.departed.delete(key)
    if (this.layTables() || isMoved) this.rebuildNav()
    this.wake()
  }

  highlight(key: string | null): void {
    this.marked = key ?? ''
    this.wake()
  }

  pause(): void {
    this.isRunning = false
  }

  resume(): void {
    this.isRunning = true
    this.timer.reset()
    this.wake()
  }

  setReducedMotion(isReduced: boolean): void {
    this.motion = isReduced ? 0 : 1
  }

  setPets(counts: Readonly<Record<Species, number>>): void {
    this.now = performance.now()
    const isFirst = !this.hasPets
    this.hasPets = true
    for (const species of ['cat', 'dog'] as const) {
      const wanted = Math.max(0, Math.min(MAX_PETS, Math.floor(counts[species] || 0)))
      const staying = this.pets.filter(pet => pet.species === species && !pet.isLeaving)
      // The nth pet of a kind is always the same pet: the same coat, at every visit.
      for (let index = 0; staying.length < wanted; index += 1) {
        const id = `${species}:${index}`
        if (this.pets.some(pet => pet.id === id)) continue
        const pet = new Pet(species, id, this.now)
        this.pets.push(pet)
        staying.push(pet)
        this.scene.add(pet.root)
        pet.enter(this, !isFirst)
      }
      // Let go the last ones first.
      staying.sort((one, other) => one.id.localeCompare(other.id, undefined, { numeric: true }))
      for (const pet of staying.slice(wanted)) pet.leave(this)
    }
    this.wake()
  }

  // -------------------------------------------------------------------------
  // The world's side, as a guest asks it.

  private tableOf(guest: Guest): Table | undefined {
    for (const table of this.tables.values()) if (table.chairs.has(guest.key)) return table
    return undefined
  }

  chairOf(guest: Guest): Place | undefined {
    const table = this.tableOf(guest)
    const index = table?.chairs.get(guest.key)
    return table === undefined || index === undefined ? undefined : chairOf(table.slot, index)
  }

  private crewOf(guest: Guest): Guest[] {
    const table = this.tableOf(guest)
    if (table === undefined) return []
    const crew: Guest[] = []
    for (const key of table.chairs.keys()) {
      const other = this.guests.get(key)
      if (other === undefined || other === guest || other.isLeaving || other.line.kind === 'main') continue
      if (other.line.phase === 'think' || other.line.phase === 'work' || other.line.phase === 'ask') crew.push(other)
    }
    return crew
  }

  isCrewBusy(guest: Guest): boolean {
    return this.crewOf(guest).length > 0
  }

  crewChairs(guest: Guest): Place[] {
    return this.crewOf(guest)
      .filter(other => other.want === 'seat' || other.want === 'think')
      .map(other => this.chairOf(other))
      .filter((chair): chair is Place => chair !== undefined)
  }

  private spots(): Spot[] {
    const all = [...SPOTS]
    for (let slot = 0; slot < SLOTS; slot += 1) if (this.slotOwners[slot] === undefined) all.push(...decorSpots(slot))
    return all
  }

  claim(guest: Guest, kinds: readonly SpotKind[], exact?: Spot): Spot | undefined {
    const free = this.spots().filter(spot => {
      if (!kinds.includes(spot.kind)) return false
      const holder = this.taken.get(spot.id)
      return holder === undefined || holder === guest.key
    })
    const chosen = exact === undefined ? free[Math.floor(Math.random() * free.length)] : free.find(spot => spot.id === exact.id)
    if (chosen !== undefined) this.taken.set(chosen.id, guest.key)
    return chosen
  }

  hasFree(kinds: readonly SpotKind[]): boolean {
    return this.spots().some(spot => kinds.includes(spot.kind) && !this.taken.has(spot.id))
  }

  release(guest: Guest): void {
    for (const [id, holder] of this.taken) if (holder === guest.key) this.taken.delete(id)
  }

  isOpen(spot: Spot): boolean {
    return spot.slot < 0 || this.slotOwners[spot.slot] === undefined
  }

  petSpot(guest: Guest): Place | undefined {
    const near = this.pets
      .filter(pet => !pet.isLeaving && pet.isStill && (pet.petter === '' || pet.petter === guest.key))
      .sort((one, other) => Math.hypot(one.x - guest.x, one.z - guest.z) - Math.hypot(other.x - guest.x, other.z - guest.z))
    for (const pet of near) {
      const place = pet.pettingPlace(this.nav)
      if (place === undefined) continue
      for (const other of this.pets) if (other.petter === guest.key) other.petter = ''
      pet.petter = guest.key
      return place
    }
    return undefined
  }

  freeBed(pet: Pet): Point | undefined {
    const taken = this.pets.filter(other => other !== pet && other.species === 'cat' && !other.isLeaving).map(other => other.goal)
    const free = CAT_BEDS.filter(bed => !taken.some(goal => Math.hypot(goal.x - bed.x, goal.z - bed.z) < 0.3))
    const bed = free[Math.floor(Math.random() * free.length)]
    return bed === undefined ? undefined : this.nav.nearestPoint(bed)
  }

  besideResting(random: () => number): Point | undefined {
    const resting = [...this.guests.values()].filter(
      guest => !guest.isLeaving && !guest.isWalking && (guest.want === 'idle' || guest.want === 'await'),
    )
    const guest = resting[Math.floor(random() * resting.length)]
    if (guest === undefined) return undefined
    const angle = random() * Math.PI * 2
    return this.nav.nearestPoint({ x: guest.x + Math.sin(angle) * 0.65, z: guest.z + Math.cos(angle) * 0.65 })
  }

  floorPoint(random: () => number, center?: Point, radius = 2): Point {
    for (let attempt = 0; attempt < 40; attempt += 1) {
      const point =
        center === undefined
          ? { x: FLOOR.x0 + random() * (FLOOR.x1 - FLOOR.x0), z: FLOOR.z0 + random() * (FLOOR.z1 - FLOOR.z0) }
          : { x: center.x + (random() * 2 - 1) * radius, z: center.z + (random() * 2 - 1) * radius }
      if (point.x < FLOOR.x0 || point.x > FLOOR.x1 || point.z < FLOOR.z0 || point.z > FLOOR.z1) continue
      if (!this.nav.isFree(point)) continue
      let isCrowded = false
      for (const other of this.guests.values()) {
        if (Math.hypot(other.x - point.x, other.z - point.z) < 0.6) isCrowded = true
      }
      if (!isCrowded) return point
    }
    return this.nav.nearestPoint(center ?? { x: 0, z: 2 })
  }

  /** Where a dog brings a ball back to: the edge of the floor nearest the camera, a little in. */
  bringBack(pet: Pet): Point {
    const camera = this.camera.position
    const x = THREE.MathUtils.clamp(camera.x, FLOOR.x0 + 1, FLOOR.x1 - 1)
    const z = THREE.MathUtils.clamp(camera.z, FLOOR.z0 + 1, FLOOR.z1 - 1)
    // Toward the camera from where the dog is, but not all the way to the edge.
    return this.nav.nearestPoint({ x: pet.x + (x - pet.x) * 0.75, z: pet.z + (z - pet.z) * 0.75 })
  }

  cameraYaw(x: number, z: number): number {
    return Math.atan2(this.camera.position.x - x, this.camera.position.z - z)
  }

  // -------------------------------------------------------------------------
  // Tables and the floor.

  /** Gives the guest of `line` a chair at its table: the head for the main loop. */
  private seat(table: Table, line: ViewLine): boolean {
    const taken = new Set(table.chairs.values())
    let chair = line.kind === 'main' && !taken.has(0) ? 0 : -1
    for (let index = 1; chair < 0 && index < TABLE_SEATS; index += 1) if (!taken.has(index)) chair = index
    if (chair < 0) return false
    table.chairs.set(line.key, chair)
    return true
  }

  /** Each slot's furniture as its table now needs it; true when anything moved. */
  private layTables(): boolean {
    let isMoved = false
    for (let slot = 0; slot < SLOTS; slot += 1) {
      const owner = this.slotOwners[slot]
      const table = owner === undefined ? undefined : this.tables.get(owner)
      const furniture = this.room.slots[slot]
      if (furniture === undefined) continue
      const columns = table === undefined ? 0 : columnsOf(table.chairs.values())
      if (furniture.shown !== columns) {
        // Rug colours by the slot's place on the grid: no two neighbours alike, across or along.
        furniture.use(columns, (slot % SLOT_COLUMNS) + 2 * Math.floor(slot / SLOT_COLUMNS))
        isMoved = true
      }
    }
    return isMoved
  }

  private rebuildNav(): void {
    this.nav.clear()
    for (const rect of FIXED_OBSTACLES) this.nav.block(rect)
    for (let slot = 0; slot < SLOTS; slot += 1) {
      const furniture = this.room.slots[slot]
      if (furniture === undefined) continue
      if (furniture.shown > 0) this.nav.block(tableRect(slot, furniture.shown))
      else this.nav.blockCircle(decorTable(slot), decorTable(slot).r)
    }
    for (const guest of this.guests.values()) guest.reroute(this)
  }

  /** Lets go of the guests through the door, and the tables whose guests have all gone. */
  private tidy(): void {
    let isMoved = false
    for (const guest of [...this.guests.values()]) {
      if (!guest.isGone) continue
      this.release(guest)
      for (const pet of this.pets) if (pet.petter === guest.key) pet.petter = ''
      this.scene.remove(guest.body.root, guest.body.laptop)
      guest.body.dispose()
      this.tags.remove(guest.key)
      this.guests.delete(guest.key)
      if (!guest.isLeaving) this.departed.add(guest.key)
      for (const table of this.tables.values()) if (table.chairs.delete(guest.key)) isMoved = true
    }
    for (const table of [...this.tables.values()]) {
      if (!table.isClosing || table.chairs.size > 0) continue
      this.tables.delete(table.id)
      this.slotOwners[table.slot] = undefined
      this.tags.remove(`table:${table.id}`)
      isMoved = true
    }
    if (isMoved && this.layTables()) this.rebuildNav()
  }

  // -------------------------------------------------------------------------
  // The camera.

  private resize(): void {
    const width = Math.max(1, this.host.clientWidth)
    const height = Math.max(1, this.host.clientHeight)
    this.renderer.setSize(width, height, false)
    this.camera.aspect = width / height
    this.camera.updateProjectionMatrix()
    if (!this.hasUserMoved) this.frameRoom(true)
    this.wake()
  }

  /**
   * Puts the whole room in view, from above: from the open front on a wide
   * screen, from the door's side on a narrow one, where the room's length
   * then runs up the screen. At once, or by a short flight.
   */
  private frameRoom(isAtOnce: boolean): void {
    const target = new THREE.Vector3(0.3, 0.4, 0.2)
    const azimuth = this.camera.aspect < 1.15 ? Math.PI / 2 : 0
    const direction = new THREE.Vector3(
      Math.sin(azimuth) * Math.sin(VIEW_POLAR),
      Math.cos(VIEW_POLAR),
      Math.cos(azimuth) * Math.sin(VIEW_POLAR),
    )
    const corners: THREE.Vector3[] = []
    // The floor's corners, and the tops of the walls over them (the open front has none).
    for (const x of [-HALF_W - 0.2, HALF_W + 0.2]) {
      for (const z of [-HALF_D - 0.2, HALF_D + 0.2]) corners.push(new THREE.Vector3(x, -0.3, z), new THREE.Vector3(x, WALL_H, Math.min(z, HALF_D)))
    }
    const probe = this.camera.clone()
    let low = 4
    let high = 120
    for (let step = 0; step < 24; step += 1) {
      const distance = (low + high) / 2
      probe.position.copy(target).addScaledVector(direction, distance)
      probe.lookAt(target)
      probe.updateMatrixWorld()
      const fits = corners.every(corner => {
        const point = corner.clone().project(probe)
        return Math.abs(point.x) <= 0.97 && Math.abs(point.y) <= 0.95
      })
      if (fits) high = distance
      else low = distance
    }
    // A narrow screen needs the camera further off than a wide one: never kept nearer than that.
    this.controls.maxDistance = Math.max(46, high * 1.3)
    const position = target.clone().addScaledVector(direction, high)
    if (isAtOnce || this.motion === 0) {
      this.flight = undefined
      this.camera.position.copy(position)
      this.controls.target.copy(target)
      this.controls.update()
    } else {
      this.flight = { from: this.camera.position.clone(), fromTarget: this.controls.target.clone(), to: position, toTarget: target, t: 0 }
    }
    this.wake()
  }

  // -------------------------------------------------------------------------
  // Pointing at guests.

  private aim(event: PointerEvent): void {
    const rect = this.renderer.domElement.getBoundingClientRect()
    this.pointer.set(((event.clientX - rect.left) / rect.width) * 2 - 1, -((event.clientY - rect.top) / rect.height) * 2 + 1)
    this.wake()
  }

  /** The guest or the pet under the pointer, the nearest of them; neither for the floor. */
  private pick(): { key: string; pet: Pet | undefined } {
    const none = { key: '', pet: undefined }
    if (Math.abs(this.pointer.x) > 1 || Math.abs(this.pointer.y) > 1) return none
    this.raycaster.setFromCamera(this.pointer, this.camera)
    let best: { key: string; pet: Pet | undefined } = none
    let bestDistance = Infinity
    const hit = new THREE.Vector3()
    const consider = (found: { key: string; pet: Pet | undefined }): void => {
      if (this.raycaster.ray.intersectBox(this.box, hit) === null) return
      const distance = hit.distanceTo(this.raycaster.ray.origin)
      if (distance < bestDistance) {
        bestDistance = distance
        best = found
      }
    }
    for (const guest of this.guests.values()) {
      if (guest.isLeaving || guest.body.presence < 0.5) continue
      this.box.min.set(guest.x - 0.3, 0, guest.z - 0.3)
      this.box.max.set(guest.x + 0.3, guest.body.headTop() + 0.1, guest.z + 0.3)
      consider({ key: guest.key, pet: undefined })
    }
    for (const pet of this.pets) {
      if (pet.isLeaving || !pet.isPresent) continue
      // The pet's own outline, turned as it stands: a dog's snout is as good as its back.
      pet.hitBox(this.box)
      consider({ key: '', pet })
    }
    return best
  }

  /**
   * A click on the room: a pet clicked perks up and is picked out; a guest
   * clicked opens its card; the floor clicked sends the pet picked out there
   * (a dog after a ball), or else closes the card.
   */
  private click(): void {
    const { key, pet } = this.pick()
    if (pet !== undefined) {
      pet.poke(this)
      this.choosePet(pet)
      this.cheer(pet)
      return
    }
    if (key !== '') {
      this.choosePet(undefined)
      this.options.onPick(key)
      return
    }
    const chosen = this.chosenPet
    if (chosen !== undefined) {
      const point = this.raycaster.ray.intersectPlane(this.floorPlane, new THREE.Vector3())
      if (point !== null && point.x > FLOOR.x0 && point.x < FLOOR.x1 && point.z > FLOOR.z0 && point.z < FLOOR.z1) {
        this.send(chosen, { x: point.x, z: point.z })
        return
      }
    }
    // Anywhere else (a wall, outside the room): the pet picked out is let go, and the card closed.
    this.choosePet(undefined)
    this.options.onPick('')
  }

  private choosePet(pet: Pet | undefined): void {
    this.chosenPet = pet
    this.chosenAt = this.now
    this.wake()
  }

  /** The pet picked out, sent to a point of the floor: a dog runs after a ball thrown there. */
  private send(pet: Pet, point: Point): void {
    const target = this.nav.nearestPoint(point)
    this.chosenAt = this.now
    this.markAt = this.now
    this.mark.position.set(target.x, 0.02, target.z)
    if (pet.species === 'dog') {
      let ball = this.balls.get(pet.id)
      if (ball === undefined) {
        ball = new Ball()
        this.balls.set(pet.id, ball)
        this.scene.add(ball.mesh)
      }
      ball.throwTo(target, this.now)
      pet.fetch(ball, this)
    } else if (pet.call(target, this)) {
      this.cheer(pet)
    }
    this.wake()
  }

  /** Hearts float up from a pet the person was kind to. */
  private cheer(pet: Pet): void {
    for (let index = 0; index < 3; index += 1) {
      const sprite = new THREE.Sprite(this.heartMaterial.clone())
      sprite.scale.setScalar(0.16)
      sprite.position.set(pet.x + (index - 1) * 0.14, pet.height + 0.05 + index * 0.05, pet.z)
      this.scene.add(sprite)
      this.hearts.push({ sprite, born: this.now + index * 120 })
    }
  }

  // -------------------------------------------------------------------------
  // Each frame.

  private wake(): void {
    if (this.frame !== 0 || !this.isRunning || !this.isOnScreen) return
    this.frame = requestAnimationFrame(() => this.tick())
  }

  private tick(): void {
    this.frame = 0
    if (!this.isRunning || !this.isOnScreen) return
    this.timer.update()
    const dt = Math.min(0.05, this.timer.getDelta())
    const t = this.timer.getElapsed()
    this.now = performance.now()

    if (this.flight !== undefined) {
      const flight = this.flight
      flight.t = Math.min(1, flight.t + dt / 0.9)
      const ease = flight.t * flight.t * (3 - 2 * flight.t)
      this.camera.position.lerpVectors(flight.from, flight.to, ease)
      this.controls.target.lerpVectors(flight.fromTarget, flight.toTarget, ease)
      if (flight.t >= 1) this.flight = undefined
    }
    this.controls.target.x = THREE.MathUtils.clamp(this.controls.target.x, -HALF_W, HALF_W)
    this.controls.target.z = THREE.MathUtils.clamp(this.controls.target.z, -HALF_D, HALF_D)
    this.controls.target.y = THREE.MathUtils.clamp(this.controls.target.y, 0, 2)
    this.controls.update()

    for (const guest of this.guests.values()) guest.update(dt, t, this)
    this.keepApart(dt)
    let isDoorWanted = false
    for (const pet of [...this.pets]) {
      if (pet.petter !== '') {
        const petter = this.guests.get(pet.petter)
        if (petter === undefined || !petter.isPetting) pet.petter = ''
      }
      pet.update(dt, t, this)
      if (pet.x > HALF_W - 1.2 && Math.abs(pet.z - DOOR.z) < 1.5) isDoorWanted = true
      if (!pet.isGone) continue
      this.scene.remove(pet.root)
      pet.dispose()
      this.pets.splice(this.pets.indexOf(pet), 1)
    }
    for (const guest of this.guests.values()) {
      if (Math.hypot(guest.x - DOOR.inside.x, guest.z - DOOR.inside.z) < 1.6 && guest.isWalking) isDoorWanted = true
      if (guest.x > HALF_W - 0.2 && guest.body.presence > 0) isDoorWanted = true
    }
    // A guest whose pet the person called away, or that went home, stops petting the air.
    for (const guest of this.guests.values()) {
      if (guest.isPetting && !this.pets.some(pet => pet.petter === guest.key)) guest.stopPetting(this)
    }
    this.room.update(dt, t, this.motion, this.camera.position, isDoorWanted)
    this.tidy()
    this.play()

    const { key: hovered, pet: hoveredPet } = this.pick()
    if (hovered !== this.hovered || hoveredPet !== this.hoveredPet) {
      this.hovered = hovered
      this.hoveredPet = hoveredPet
      this.renderer.domElement.style.cursor = hovered === '' && hoveredPet === undefined ? '' : 'pointer'
    }
    for (const guest of this.guests.values()) {
      const isMarked = guest.key === this.hovered || guest.key === this.marked
      guest.body.setRing(isMarked)
      this.tags.mark(guest.key, isMarked)
    }
    for (const pet of this.pets) pet.setRing(pet === this.chosenPet || pet === this.hoveredPet)

    this.renderer.render(this.scene, this.camera)
    this.placeTags()
    this.wake()
  }

  /** The person's play with the pets: the balls, the hearts, the mark on the floor, and the pet picked out. */
  private play(): void {
    const chosen = this.chosenPet
    if (chosen !== undefined && (chosen.isLeaving || chosen.isGone || this.now - this.chosenAt > CHOSEN_MS)) this.chosenPet = undefined
    for (const [id, ball] of [...this.balls]) {
      ball.update(this.now, this.motion)
      const dog = this.pets.find(pet => pet.id === id && !pet.isLeaving)
      if (ball.state !== 'carried' && (ball.isOld(this.now) || dog === undefined)) {
        this.scene.remove(ball.mesh)
        this.balls.delete(id)
      }
    }
    for (const heart of [...this.hearts]) {
      const age = (this.now - heart.born) / HEART_MS
      heart.sprite.visible = age >= 0
      if (age < 0) continue
      heart.sprite.position.y += 0.012 * this.motion
      heart.sprite.material.opacity = Math.max(0, 1 - age)
      if (age < 1) continue
      this.scene.remove(heart.sprite)
      heart.sprite.material.dispose()
      this.hearts.splice(this.hearts.indexOf(heart), 1)
    }
    const markAge = (this.now - this.markAt) / MARK_MS
    this.mark.visible = markAge < 1
    if (markAge < 1) {
      this.mark.scale.setScalar(1 + markAge * 0.8)
      ;(this.mark.material as THREE.MeshBasicMaterial).opacity = 0.9 * (1 - markAge)
    }
  }

  /** Guests walking into each other step aside. */
  private keepApart(dt: number): void {
    const all = [...this.guests.values()].filter(guest => !guest.isGone && guest.body.presence > 0.5)
    for (let one = 0; one < all.length; one += 1) {
      for (let other = one + 1; other < all.length; other += 1) {
        const a = all[one] as Guest
        const b = all[other] as Guest
        if (!a.isWalking && !b.isWalking) continue
        const dx = b.x - a.x
        const dz = b.z - a.z
        const distance = Math.hypot(dx, dz)
        if (distance >= 0.46 || distance < 1e-4) continue
        const push = Math.min(0.5 * dt * 4, (0.46 - distance) / 2)
        const nx = dx / distance
        const nz = dz / distance
        if (a.isWalking) a.nudge(-nx * push, -nz * push, this.nav)
        if (b.isWalking) b.nudge(nx * push, nz * push, this.nav)
      }
    }
  }

  private placeTags(): void {
    const width = this.host.clientWidth
    const height = this.host.clientHeight
    const toScreen = (x: number, y: number, z: number): { sx: number; sy: number; depth: number; isIn: boolean } => {
      this.projected.set(x, y, z).project(this.camera)
      const isIn = this.projected.z < 1 && Math.abs(this.projected.x) < 1.05 && Math.abs(this.projected.y) < 1.05
      return {
        sx: ((this.projected.x + 1) / 2) * width,
        sy: ((1 - this.projected.y) / 2) * height,
        depth: THREE.MathUtils.clamp(this.camera.position.distanceTo(new THREE.Vector3(x, y, z)) / 80, 0, 1),
        isIn,
      }
    }
    // Small guests on the screen get their names alone, tiny ones no tag unless they need the person.
    const foot = toScreen(this.controls.target.x, 0, this.controls.target.z)
    const head = toScreen(this.controls.target.x, 1, this.controls.target.z)
    const metre = Math.abs(foot.sy - head.sy)
    // Each step is taken a few pixels past its mark, and given back a few pixels short of it: a
    // camera settling after a click never flips every tag back and forth.
    const margin = 3
    const fullAt = this.tagSize === 'full' ? 36 - margin : 36 + margin
    const compactAt = this.tagSize === 'tiny' ? 22 + margin : 22 - margin
    this.tagSize = metre >= fullAt ? 'full' : metre >= compactAt ? 'compact' : 'tiny'
    this.tags.setSize(this.tagSize)

    const live = new Set<string>()
    for (const guest of this.guests.values()) {
      live.add(guest.key)
      const { line } = guest
      this.tags.set(guest.key, 'guest', line.label, line.says, line.phase as TagPhase)
      const at = toScreen(guest.x, guest.body.headTop() + 0.48, guest.z)
      this.tags.place(guest.key, at.sx, at.sy, at.depth, at.isIn && guest.body.presence > 0.6 && !guest.isLeaving)
    }
    for (const table of this.tables.values()) {
      const key = `table:${table.id}`
      live.add(key)
      const furniture = this.room.slots[table.slot]
      const columns = Math.max(1, furniture?.shown ?? 1)
      const rug: Rect = rugRect(table.slot, columns)
      this.tags.set(key, 'table', table.title, table.app, table.isAsking ? 'ask' : '')
      const at = toScreen(rug.x0 + 0.05, 0.02, rug.z1)
      this.tags.place(key, at.sx, at.sy, 0.99, at.isIn && !table.isClosing)
    }
    // A pet's name, over it while it is pointed at or picked out, and what it says.
    for (const pet of this.pets) {
      const key = `pet:${pet.id}`
      live.add(key)
      const isTalking = this.now < pet.saidUntil
      const isShown = pet === this.chosenPet || pet === this.hoveredPet || isTalking
      if (!isShown) {
        this.tags.place(key, 0, 0, 1, false)
        continue
      }
      const says = isTalking ? pet.said : pet === this.chosenPet ? this.options.petHint[pet.species] : ''
      this.tags.set(key, 'pet', pet.name, says, '')
      this.tags.mark(key, pet === this.chosenPet)
      const at = toScreen(pet.x, pet.height + 0.3, pet.z)
      this.tags.place(key, at.sx, at.sy, at.depth, at.isIn && pet.isPresent && !pet.isLeaving)
    }
    for (const key of this.tags.keys()) if (!live.has(key)) this.tags.remove(key)
  }
}

/** Whether this browser can draw the café in 3D. */
function canDraw(): boolean {
  try {
    const canvas = document.createElement('canvas')
    return canvas.getContext('webgl2') !== null || canvas.getContext('webgl') !== null
  } catch {
    return false
  }
}

declare global {
  interface Window {
    AgentCafe3D?: { mount: (host: HTMLElement, options: StageOptions) => Stage | undefined }
  }
}

window.AgentCafe3D = {
  mount(host, options) {
    if (!canDraw()) return undefined
    try {
      return new Cafe3D(host, options)
    } catch (error) {
      console.error('Agent Café: the 3D café could not be drawn', error)
      return undefined
    }
  },
}
