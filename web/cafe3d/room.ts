// The café itself: the floor and the three walls (the fourth is open to the
// camera, as in a doll's house, and a wall the camera goes round behind is
// taken away), the counter with its espresso machine, the bookshelf and the
// corkboard, the sofa, the window bar, the door, the lamps; and in each of
// the nine slots either a session's long table or a small round one.

import * as THREE from 'three'

import type { Grid } from '../../hooks/sprites'
import { INK } from '../../hooks/sprites'
import { Batch, PAINT, UNIT_BOX, canvasTexture, floorTexture, mat, paintGrid } from './kit'
import {
  ARMCHAIR,
  BAR,
  BAR_H,
  BOARD_Z,
  CHAIR_H,
  COFFEE_TABLE,
  COUNTER,
  COUNTER_H,
  DOOR,
  HALF_D,
  HALF_W,
  PLANTS,
  ROOM_D,
  ROOM_W,
  SHELF,
  SHELF_H,
  SIDE_TABLE,
  SLOTS,
  SOFA,
  SPOTS,
  TABLE_H,
  TABLE_SEATS,
  WALL_H,
  WINDOWS,
  chairOf,
  columnOfChair,
  decorSpots,
  decorTable,
  rugRect,
  tableRect,
} from './layout'

const WALL = '#f3e2c3'
const WAINSCOT = '#e8d2ab'
const TRIM = '#b98557'
const COUNTER_TOP = '#ecd6ae'
const COUNTER_FRONT = '#8a623f'
const WOOD = '#8a623f'
const WOOD_DARK = '#6b4a32'
const PLINTH = '#3e2c20'
const BOARD = '#2f3b36'
const CHALK = '#f4f1e6'
const STEEL = '#b9c0c7'
const STEEL_LIGHT = '#dfe4e8'
const STEEL_DARK = '#59616b'
const CUP = '#fbf7ee'
const LAMP = '#3c3a39'
const DESK_TOP = '#c9995f'
const DESK_EDGE = '#e2b684'
const DESK_FRONT = '#9a6c41'
const CHAIR = '#5b4030'
const CHAIR_LIGHT = '#735241'
const CLAUDE = '#d97757'
const LEAVES = ['#4d8f4a', '#3f7d3d', '#5aa356']
const BOOKS = ['#3f6fb0', '#a8452f', '#3d8f5a', '#7b5aa6', '#c48a2a', '#2f6f6a', '#d27aa8', '#e0a03a', '#59616b']
const NOTES = ['#ffd84d', '#f0a58c', '#9ec5e8', '#8fd18f', '#fbf7ee']
/** The rugs of the café picture, one per table in turn. */
const RUGS = ['#9b3d2e', '#2f6f6a', '#5d4a8f', '#8a6d1f']
const BUSY = '#8fd18f'
const ASKING = '#ffd84d'
const IDLE = '#b9bbbf'

/** A small seeded random number source, so the room is furnished the same at every visit. */
function seeded(seed: number): () => number {
  let state = seed
  return () => {
    state = (state * 1_664_525 + 1_013_904_223) >>> 0
    return state / 4_294_967_296
  }
}

/** A wall the camera may go behind: drawn only while the camera is on the room's side of it. */
type Wall = { group: THREE.Group; point: THREE.Vector3; normal: THREE.Vector3 }

/** A chair, facing +z: its seat, legs and back in one geometry. */
function chairGeometry(): THREE.BufferGeometry {
  const batch = new Batch()
  const legH = CHAIR_H - 0.05
  batch.box(CHAIR_LIGHT, 0.42, 0.05, 0.42, 0, CHAIR_H - 0.05, 0)
  for (const [x, z] of [
    [0.17, 0.17],
    [-0.17, 0.17],
    [0.17, -0.17],
    [-0.17, -0.17],
  ] as const) {
    batch.box(CHAIR, 0.045, legH, 0.045, x, 0, z)
  }
  batch.box(CHAIR, 0.42, 0.28, 0.05, 0, CHAIR_H, -0.19)
  batch.box(CHAIR_LIGHT, 0.44, 0.045, 0.07, 0, CHAIR_H + 0.28, -0.19)
  return batch.geometry()
}

const CYLINDER = new THREE.CylinderGeometry(1, 1, 1, 14)
const CONE = new THREE.CylinderGeometry(0.25, 1, 1, 12)
/** Wider at the top than the bottom: a flowerpot, a hopper. */
const POT = new THREE.CylinderGeometry(1, 0.72, 1, 12)
const LEAF = new THREE.IcosahedronGeometry(1, 0)

/** Furniture in one slot: a session's long table, or the small round one while no session sits there. */
class Slot {
  readonly table = new THREE.Group()
  readonly decor: THREE.Mesh
  private readonly top: THREE.Mesh
  private readonly edge: THREE.Mesh
  private readonly apron: THREE.Mesh
  private readonly legs: THREE.Mesh[] = []
  private readonly rug: THREE.Mesh
  private columns = 1
  private target = 1
  /** The columns of chairs along each side in use; 0 while the slot is free. */
  shown = 0

  constructor(
    readonly index: number,
    private readonly chairs: THREE.InstancedMesh,
  ) {
    this.top = new THREE.Mesh(UNIT_BOX, mat(DESK_TOP))
    this.edge = new THREE.Mesh(UNIT_BOX, mat(DESK_EDGE))
    this.apron = new THREE.Mesh(UNIT_BOX, mat(DESK_FRONT))
    for (let leg = 0; leg < 4; leg += 1) this.legs.push(new THREE.Mesh(UNIT_BOX, mat(WOOD_DARK)))
    this.rug = new THREE.Mesh(UNIT_BOX, mat('#a0806a'))
    this.rug.receiveShadow = true
    for (const mesh of [this.top, this.edge, this.apron, ...this.legs]) {
      mesh.castShadow = true
      mesh.receiveShadow = true
      this.table.add(mesh)
    }
    this.table.add(this.rug)
    this.table.visible = false

    const round = decorTable(index)
    const batch = new Batch()
    batch.add(DESK_TOP, CYLINDER, round.x, TABLE_H - 0.02, round.z, 0, round.r, 0.04, round.r)
    batch.add(DESK_EDGE, CYLINDER, round.x, TABLE_H + 0.002, round.z, 0, round.r - 0.04, 0.004, round.r - 0.04)
    batch.add(WOOD_DARK, CYLINDER, round.x, (TABLE_H - 0.04) / 2, round.z, 0, 0.05, TABLE_H - 0.04, 0.05)
    batch.add(WOOD_DARK, CYLINDER, round.x, 0.015, round.z, 0, 0.24, 0.03, 0.24)
    batch.add('#9ec5e8', CYLINDER, round.x + 0.08, TABLE_H + 0.07, round.z - 0.05, 0, 0.04, 0.12, 0.04)
    batch.box(LEAVES[0] ?? '#4d8f4a', 0.02, 0.1, 0.02, round.x + 0.08, TABLE_H + 0.12, round.z - 0.05)
    batch.box(['#ffd84d', '#f0a58c', '#d27aa8'][index % 3] ?? '#ffd84d', 0.07, 0.07, 0.07, round.x + 0.08, TABLE_H + 0.21, round.z - 0.05)
    batch.box(CUP, 0.08, 0.08, 0.08, round.x - 0.12, TABLE_H, round.z + 0.08)
    this.decor = batch.build()
    this.place(1)
    this.setChairs()
  }

  /** In use by a session with `columns` chairs a side and the rug of `rugIndex`; `columns` 0 frees it. */
  use(columns: number, rugIndex: number): void {
    const wasFree = this.shown === 0
    this.shown = columns
    this.table.visible = columns > 0
    this.decor.visible = columns === 0
    if (columns === 0) {
      this.setChairs()
      return
    }
    if (wasFree) {
      const rug = new THREE.Color(RUGS[rugIndex % RUGS.length] ?? '#9b3d2e').lerp(new THREE.Color('#c79a6c'), 0.45)
      this.rug.material = mat(`#${rug.getHexString()}`)
      this.columns = columns
      this.place(columns)
    }
    this.target = columns
    this.setChairs()
  }

  /** Grows or shrinks the table toward its columns. */
  update(dt: number, motion: number): void {
    if (Math.abs(this.target - this.columns) < 0.001) return
    const ease = motion > 0 ? 1 - Math.exp(-dt * 6) : 1
    this.columns += (this.target - this.columns) * ease
    if (Math.abs(this.target - this.columns) < 0.005) this.columns = this.target
    this.place(this.columns)
  }

  private place(columns: number): void {
    const rect = tableRect(this.index, columns)
    const x = (rect.x0 + rect.x1) / 2
    const z = (rect.z0 + rect.z1) / 2
    const w = rect.x1 - rect.x0
    const d = rect.z1 - rect.z0
    this.top.scale.set(w, 0.05, d)
    this.top.position.set(x, TABLE_H - 0.025, z)
    this.edge.scale.set(w - 0.06, 0.008, d - 0.06)
    this.edge.position.set(x, TABLE_H + 0.002, z)
    this.apron.scale.set(w - 0.1, 0.08, d - 0.1)
    this.apron.position.set(x, TABLE_H - 0.09, z)
    const legH = TABLE_H - 0.05
    this.legs.forEach((leg, index) => {
      leg.scale.set(0.07, legH, 0.07)
      leg.position.set(index % 2 === 0 ? rect.x0 + 0.08 : rect.x1 - 0.08, legH / 2, index < 2 ? rect.z0 + 0.08 : rect.z1 - 0.08)
    })
    const rug = rugRect(this.index, columns)
    this.rug.scale.set(rug.x1 - rug.x0, 0.012, rug.z1 - rug.z0)
    this.rug.position.set((rug.x0 + rug.x1) / 2, 0.006, (rug.z0 + rug.z1) / 2)
  }

  private setChairs(): void {
    const matrix = new THREE.Matrix4()
    const turn = new THREE.Quaternion()
    const up = new THREE.Vector3(0, 1, 0)
    const base = this.index * (TABLE_SEATS + 2)
    for (let seat = 0; seat < TABLE_SEATS; seat += 1) {
      const chair = chairOf(this.index, seat)
      const isShown = this.shown > 0 && columnOfChair(seat) < this.shown
      turn.setFromAxisAngle(up, chair.yaw)
      matrix.compose(new THREE.Vector3(chair.x, 0, chair.z), turn, new THREE.Vector3().setScalar(isShown ? 1 : 0))
      this.chairs.setMatrixAt(base + seat, matrix)
    }
    decorSpots(this.index).forEach((spot, seat) => {
      turn.setFromAxisAngle(up, spot.yaw)
      matrix.compose(new THREE.Vector3(spot.x, 0, spot.z), turn, new THREE.Vector3().setScalar(this.shown === 0 ? 1 : 0))
      this.chairs.setMatrixAt(base + TABLE_SEATS + seat, matrix)
    })
    this.chairs.instanceMatrix.needsUpdate = true
    this.chairs.computeBoundingSphere()
  }
}

export class Room {
  readonly root = new THREE.Group()
  readonly slots: Slot[] = []
  private readonly walls: Wall[] = []
  private readonly door = new THREE.Group()
  private readonly steam: THREE.Sprite[] = []
  private readonly hourHand = new THREE.Group()
  private readonly minuteHand = new THREE.Group()
  private readonly tally: THREE.CanvasTexture
  private tallyKey = ''
  private doorAngle = 0

  constructor(private readonly title: string) {
    this.root.add(this.floor())
    this.tally = canvasTexture(640, 256, () => undefined)
    this.backWall()
    this.leftWall()
    this.rightWall()
    this.root.add(this.furniture())
    this.lamps()
    this.lights()

    const chairs = new THREE.InstancedMesh(chairGeometry(), PAINT, SLOTS * (TABLE_SEATS + 2))
    chairs.castShadow = true
    chairs.receiveShadow = true
    chairs.frustumCulled = false
    this.root.add(chairs)
    for (let index = 0; index < SLOTS; index += 1) {
      const slot = new Slot(index, chairs)
      this.slots.push(slot)
      this.root.add(slot.table, slot.decor)
    }
    this.setTally(0, 0, 0)
  }

  /** The chalkboard over the counter: the name of the place, and who is doing what. */
  setTally(busy: number, asking: number, idle: number): void {
    const key = `${busy}|${asking}|${idle}`
    if (key === this.tallyKey) return
    this.tallyKey = key
    const canvas = this.tally.image as HTMLCanvasElement
    const context = canvas.getContext('2d')
    if (context === null) return
    context.fillStyle = BOARD
    context.fillRect(0, 0, canvas.width, canvas.height)
    context.fillStyle = 'rgba(255,255,255,0.04)'
    for (let index = 0; index < 18; index += 1) context.fillRect((index * 97) % 600, (index * 53) % 230, 60, 3)
    context.fillStyle = CHALK
    context.textAlign = 'center'
    context.textBaseline = 'middle'
    context.font = '700 58px ui-rounded, "Arial Rounded MT Bold", system-ui, sans-serif'
    context.fillText(this.title.toUpperCase(), canvas.width / 2, 70)
    context.fillStyle = 'rgba(244,241,230,0.45)'
    context.fillRect(60, 118, canvas.width - 120, 3)
    const chips: readonly [string, number][] = [
      [BUSY, busy],
      [ASKING, asking],
      [IDLE, idle],
    ]
    context.font = '700 64px ui-rounded, "Arial Rounded MT Bold", system-ui, sans-serif'
    chips.forEach(([color, count], index) => {
      const center = (canvas.width * (2 * index + 1)) / 6
      context.fillStyle = color
      context.fillRect(center - 62, 162, 36, 36)
      context.fillStyle = CHALK
      context.textAlign = 'left'
      context.fillText(String(count), center - 12, 182)
    })
    this.tally.needsUpdate = true
  }

  /** Walls behind the camera out of the way, the door, the steam, the clock. */
  update(dt: number, t: number, motion: number, camera: THREE.Vector3, isDoorWanted: boolean): void {
    for (const wall of this.walls) {
      wall.group.visible = camera.clone().sub(wall.point).dot(wall.normal) > 0
    }
    const doorTarget = isDoorWanted ? 1.25 : 0
    this.doorAngle += (doorTarget - this.doorAngle) * (motion > 0 ? 1 - Math.exp(-dt * 5) : 1)
    this.door.rotation.y = this.doorAngle
    this.steam.forEach((puff, index) => {
      const cycle = ((t * 0.55 + index / this.steam.length) % 1 + 1) % 1
      puff.position.y = 1.62 + cycle * 0.6 * motion
      puff.material.opacity = motion > 0 ? 0.55 * (1 - cycle) : 0
      puff.scale.setScalar(0.14 + cycle * 0.18)
    })
    const now = new Date()
    const minutes = now.getMinutes() + now.getSeconds() / 60
    this.minuteHand.rotation.z = -(minutes / 60) * Math.PI * 2
    this.hourHand.rotation.z = -(((now.getHours() % 12) + minutes / 60) / 12) * Math.PI * 2
    for (const slot of this.slots) slot.update(dt, motion)
  }

  // -------------------------------------------------------------------------

  private floor(): THREE.Group {
    const group = new THREE.Group()
    const texture = floorTexture()
    texture.repeat.set(ROOM_W / 4, ROOM_D / 4)
    const floor = new THREE.Mesh(new THREE.PlaneGeometry(ROOM_W, ROOM_D), new THREE.MeshLambertMaterial({ map: texture }))
    floor.rotation.x = -Math.PI / 2
    floor.receiveShadow = true
    group.add(floor)
    const base = new Batch()
    // The plinth stays clear of the floor's plane: two surfaces that close together flicker as the camera moves.
    base.box(PLINTH, ROOM_W + 0.4, 0.45, ROOM_D + 0.4, 0, -0.5, 0)
    base.box(WOOD_DARK, ROOM_W + 0.44, 0.06, 0.06, 0, -0.09, HALF_D + 0.2)
    // The step outside the door.
    base.box('#a7a29a', 1.9, 0.12, 1.8, HALF_W + 1.05, -0.121, DOOR.z)
    base.box('#8f8a83', 1.9, 0.02, 0.06, HALF_W + 1.05, -0.002, DOOR.z + 0.9)
    // The mat inside it.
    base.box('#8a6d1f', 0.62, 0.012, 0.95, HALF_W - 0.45, 0, DOOR.z)
    group.add(base.build(false, false, true))
    return group
  }

  private wall(normal: THREE.Vector3, point: THREE.Vector3, build: (batch: Batch, group: THREE.Group) => void): void {
    const group = new THREE.Group()
    const batch = new Batch()
    build(batch, group)
    group.add(batch.build(false, false, true))
    this.root.add(group)
    this.walls.push({ group, point, normal })
  }

  private plane(texture: THREE.Texture, w: number, h: number, x: number, y: number, z: number, yaw: number, isGlow = false): THREE.Mesh {
    const mesh = new THREE.Mesh(
      new THREE.PlaneGeometry(w, h),
      isGlow ? new THREE.MeshBasicMaterial({ map: texture }) : new THREE.MeshLambertMaterial({ map: texture }),
    )
    mesh.position.set(x, y, z)
    mesh.rotation.y = yaw
    mesh.receiveShadow = !isGlow
    return mesh
  }

  private backWall(): void {
    const z = -HALF_D
    this.wall(new THREE.Vector3(0, 0, 1), new THREE.Vector3(0, 0, z), (batch, group) => {
      // No two faces of the walls share a plane where they meet: the trim stands
      // proud of the wall's top, and the side walls start at this one's face.
      batch.box(WALL, ROOM_W + 0.4, WALL_H, 0.2, 0, 0, z - 0.1)
      batch.box(WAINSCOT, ROOM_W, 0.95, 0.03, 0, 0, z + 0.015)
      batch.box(TRIM, ROOM_W, 0.05, 0.06, 0, 0.93, z + 0.03)
      batch.box(WOOD_DARK, ROOM_W + 0.44, 0.16, 0.26, 0, WALL_H - 0.12, z - 0.07)

      // The chalkboard with the tally, and the menu.
      batch.box(WOOD_DARK, 3.1, 1.3, 0.06, -2.6, 1.5, z + 0.03)
      group.add(this.plane(this.tally, 2.94, 1.14, -2.6, 2.15, z + 0.065, 0))
      batch.box(WOOD_DARK, 3.0, 0.05, 0.12, -2.6, 1.46, z + 0.06)
      batch.box(CHALK, 0.14, 0.03, 0.03, -1.6, 1.51, z + 0.08)
      batch.box(WOOD_DARK, 1.6, 1.05, 0.06, 0.95, 1.62, z + 0.03)
      group.add(this.plane(menuTexture(), 1.48, 0.93, 0.95, 2.145, z + 0.065, 0))

      // Shelves of cups over the machine.
      const cups = [CUP, CLAUDE, CUP, '#2f6f6a', CUP, CUP, '#e0a03a', CUP]
      for (const y of [1.85, 2.4]) {
        batch.box(WOOD, 2.3, 0.04, 0.24, 4.95, y, z + 0.12)
        batch.box(WOOD_DARK, 0.04, 0.14, 0.2, 3.95, y - 0.14, z + 0.1)
        batch.box(WOOD_DARK, 0.04, 0.14, 0.2, 5.95, y - 0.14, z + 0.1)
        cups.forEach((color, index) => batch.box(color, 0.12, 0.13, 0.12, 4.0 + index * 0.27, y + 0.04, z + 0.13))
      }

      // A poster of a cup, and the clock.
      batch.box(DESK_EDGE, 1.05, 1.35, 0.05, -7.4, 1.2, z + 0.025)
      group.add(this.plane(posterTexture(), 0.93, 1.23, -7.4, 1.875, z + 0.055, 0))
      batch.add(WOOD_DARK, CYLINDER, 8.3, 2.25, z + 0.03, 0, 0.34, 0.05, 0.34, Math.PI / 2)
      batch.add(CUP, CYLINDER, 8.3, 2.25, z + 0.06, 0, 0.3, 0.02, 0.3, Math.PI / 2)
      for (let hour = 0; hour < 12; hour += 1) {
        const angle = (hour / 12) * Math.PI * 2
        batch.box(INK, 0.03, hour % 3 === 0 ? 0.06 : 0.03, 0.01, 8.3 + Math.sin(angle) * 0.24, 2.25 + Math.cos(angle) * 0.24 - 0.02, z + 0.075)
      }
      for (const [hand, length, width] of [
        [this.hourHand, 0.15, 0.035],
        [this.minuteHand, 0.23, 0.025],
      ] as const) {
        hand.position.set(8.3, 2.25, z + (hand === this.hourHand ? 0.085 : 0.097))
        const mesh = new THREE.Mesh(UNIT_BOX, mat(INK))
        mesh.scale.set(width, length, 0.01)
        mesh.position.y = length / 2 - 0.02
        hand.add(mesh)
        group.add(hand)
      }

      // The lamps hang from a beam over the counter.
      batch.box(WOOD_DARK, 11.4, 0.14, 0.14, 0.9, WALL_H - 0.3, -5.75)
    })
  }

  private leftWall(): void {
    const x = -HALF_W
    this.wall(new THREE.Vector3(1, 0, 0), new THREE.Vector3(x, 0, 0), batch => {
      const back = -HALF_D
      const front = HALF_D + 0.2
      batch.box(WALL, 0.2, WALL_H, front - back, x - 0.1, 0, (back + front) / 2)
      batch.box(WAINSCOT, 0.03, 0.95, HALF_D - back - 0.03, x + 0.015, 0, (back + 0.03 + HALF_D) / 2)
      batch.box(TRIM, 0.06, 0.05, HALF_D + 0.01 - (back + 0.06), x + 0.03, 0.93, (back + 0.06 + HALF_D + 0.01) / 2)
      batch.box(WOOD_DARK, 0.26, 0.16, front + 0.02 - (back + 0.06), x - 0.07, WALL_H - 0.12, (back + 0.06 + front + 0.02) / 2)
      // The corkboard, for planning, with notes pinned on it.
      const [z0, z1] = BOARD_Z
      const middle = (z0 + z1) / 2
      batch.box(WOOD_DARK, 0.05, 1.05, z1 - z0 + 0.1, x + 0.025, 1.05, middle)
      batch.box('#c8a27a', 0.03, 0.93, z1 - z0 - 0.02, x + 0.05, 1.11, middle)
      const random = seeded(31)
      for (let note = 0; note < 9; note += 1) {
        const nz = z0 + 0.15 + random() * (z1 - z0 - 0.3)
        const ny = 1.2 + random() * 0.65
        // Each note a hair proud of the one before: overlapping notes never share a plane.
        batch.box(NOTES[note % NOTES.length] ?? '#ffd84d', 0.012, 0.17, 0.17, x + 0.07 + note * 0.003, ny, nz)
        batch.box('#e0564b', 0.02, 0.025, 0.025, x + 0.09 + note * 0.003, ny + 0.13, nz)
      }
      // A second poster further along: the café's hours, in pixels.
      batch.box(DESK_EDGE, 0.05, 0.8, 1.1, x + 0.025, 1.45, 4.9)
      batch.box('#2f6f6a', 0.02, 0.68, 0.98, x + 0.05, 1.51, 4.9)
      batch.box('#ffd84d', 0.02, 0.2, 0.2, x + 0.065, 1.95, 4.9)
      batch.box(CHALK, 0.02, 0.04, 0.6, x + 0.065, 1.72, 4.9)
      batch.box(CHALK, 0.02, 0.04, 0.45, x + 0.065, 1.62, 4.9)
    })
  }

  private rightWall(): void {
    const x = HALF_W
    const doorFrom = DOOR.z - DOOR.width / 2
    const doorTo = DOOR.z + DOOR.width / 2
    const doorH = 2.15
    this.wall(new THREE.Vector3(-1, 0, 0), new THREE.Vector3(x, 0, 0), (batch, group) => {
      const back = -HALF_D
      const front = HALF_D + 0.2
      batch.box(WALL, 0.2, WALL_H, doorFrom - back, x + 0.1, 0, (back + doorFrom) / 2)
      batch.box(WALL, 0.2, WALL_H, front - doorTo, x + 0.1, 0, (doorTo + front) / 2)
      batch.box(WALL, 0.2, WALL_H - doorH, DOOR.width, x + 0.1, doorH, DOOR.z)
      batch.box(WAINSCOT, 0.03, 0.95, doorFrom - 0.1 - (back + 0.03), x - 0.015, 0, (back + 0.03 + doorFrom - 0.1) / 2)
      batch.box(WAINSCOT, 0.03, 0.95, HALF_D - (doorTo + 0.1), x - 0.015, 0, (doorTo + 0.1 + HALF_D) / 2)
      batch.box(WOOD_DARK, 0.26, 0.16, front + 0.02 - (back + 0.06), x + 0.07, WALL_H - 0.12, (back + 0.06 + front + 0.02) / 2)

      // The windows over the bar: a frame, the panes, and the sky.
      const sky = skyTexture()
      for (const [z0, z1] of WINDOWS) {
        const middle = (z0 + z1) / 2
        const width = z1 - z0
        group.add(this.plane(sky, 0.01 + width - 0.12, 1.28, x - 0.012, 1.74, middle, -Math.PI / 2, true))
        // The frame's pieces each stand out a little further than the one they cross.
        batch.box(DESK_EDGE, 0.08, 0.07, width + 0.06, x - 0.04, 2.38, middle)
        batch.box(DESK_EDGE, 0.14, 0.06, width + 0.16, x - 0.07, 1.04, middle)
        batch.box(DESK_EDGE, 0.09, 1.36, 0.07, x - 0.045, 1.06, z0)
        batch.box(DESK_EDGE, 0.09, 1.36, 0.07, x - 0.045, 1.06, z1)
        batch.box(DESK_EDGE, 0.05, 1.3, 0.04, x - 0.03, 1.08, middle)
        batch.box(DESK_EDGE, 0.06, 0.04, width, x - 0.035, 1.72, middle)
      }

      // The door, in its frame, swinging out.
      // The frame stands into the doorway and under the lintel, never flush with the wall.
      batch.box(WOOD_DARK, 0.28, doorH + 0.05, 0.1, x + 0.05, 0, doorFrom - 0.03)
      batch.box(WOOD_DARK, 0.28, doorH + 0.05, 0.1, x + 0.05, 0, doorTo + 0.03)
      batch.box(WOOD_DARK, 0.27, 0.1, DOOR.width + 0.2, x + 0.04, doorH - 0.02, DOOR.z)
      this.door.position.set(x + 0.12, 0, doorFrom + 0.01)
      const panel = new Batch()
      panel.box(WOOD, 0.06, doorH - 0.02, DOOR.width - 0.03, 0, 0, (DOOR.width - 0.03) / 2)
      panel.box(WOOD_DARK, 0.07, 0.05, DOOR.width - 0.15, 0, 0.5, (DOOR.width - 0.03) / 2)
      panel.box(STEEL, 0.1, 0.04, 0.12, -0.05, 1.0, DOOR.width - 0.16)
      panel.box(CUP, 0.075, 0.24, 0.5, 0, 1.25, (DOOR.width - 0.03) / 2)
      panel.box(BUSY, 0.08, 0.06, 0.3, 0, 1.33, (DOOR.width - 0.03) / 2)
      this.door.add(panel.build())
      const pane = new Batch()
      pane.box('#bfe3f2', 0.07, 0.42, 0.62, 0, 1.55, (DOOR.width - 0.03) / 2)
      this.door.add(pane.build(true))
      group.add(this.door)
    })
  }

  private furniture(): THREE.Mesh {
    const batch = new Batch()
    const random = seeded(11)

    // The counter.
    const cx = (COUNTER.x0 + COUNTER.x1) / 2
    const cz = (COUNTER.z0 + COUNTER.z1) / 2
    const cw = COUNTER.x1 - COUNTER.x0
    const cd = COUNTER.z1 - COUNTER.z0
    batch.box(PLINTH, cw - 0.04, 0.08, cd - 0.06, cx, 0, cz)
    batch.box(COUNTER_FRONT, cw, COUNTER_H - 0.08, cd, cx, 0.06, cz)
    batch.box(COUNTER_TOP, cw + 0.1, 0.07, cd + 0.12, cx, COUNTER_H - 0.07, cz + 0.04)
    batch.box(TRIM, cw + 0.1, 0.03, 0.04, cx, COUNTER_H - 0.1, COUNTER.z1 + 0.09)
    for (let x = COUNTER.x0 + 0.45; x < COUNTER.x1; x += 0.9) batch.box(WOOD_DARK, 0.03, 0.8, 0.02, x, 0.1, COUNTER.z1 + 0.005)
    const onTop = COUNTER_H

    // The espresso machine, and the grinder by it.
    const mx = 5.3
    const mz = -6.45
    batch.box(STEEL, 0.85, 0.5, 0.5, mx, onTop, mz)
    batch.box(STEEL_LIGHT, 0.86, 0.03, 0.51, mx, onTop + 0.5, mz)
    for (let cup = 0; cup < 3; cup += 1) batch.box(CUP, 0.1, 0.09, 0.1, mx - 0.25 + cup * 0.25, onTop + 0.53, mz)
    batch.box('#2f343b', 0.24, 0.16, 0.02, mx - 0.22, onTop + 0.26, mz + 0.255)
    batch.box('#e0564b', 0.05, 0.04, 0.02, mx - 0.22, onTop + 0.3, mz + 0.265)
    batch.box(STEEL_DARK, 0.11, 0.08, 0.14, mx + 0.08, onTop + 0.12, mz + 0.3)
    batch.box(STEEL_DARK, 0.11, 0.08, 0.14, mx + 0.3, onTop + 0.12, mz + 0.3)
    batch.box(STEEL_DARK, 0.6, 0.03, 0.2, mx + 0.1, onTop, mz + 0.33)
    batch.box(CUP, 0.08, 0.07, 0.08, mx + 0.08, onTop + 0.03, mz + 0.32)
    batch.box(CUP, 0.08, 0.07, 0.08, mx + 0.3, onTop + 0.03, mz + 0.32)
    batch.box(STEEL_DARK, 0.24, 0.32, 0.26, 4.4, onTop, mz)
    batch.add('#6b4a32', POT, 4.4, onTop + 0.44, mz, 0, 0.13, 0.24, 0.13)

    // A case of cakes, the till, jars of biscuits, a stack of cups.
    batch.box(DESK_EDGE, 1.2, 0.06, 0.55, 2.2, onTop, -6.35)
    for (const [index, color] of ['#f0a58c', '#8a623f', '#e9c46a', '#d27aa8'].entries()) {
      batch.box(CUP, 0.2, 0.02, 0.2, 1.8 + index * 0.27, onTop + 0.06, -6.35)
      batch.box(color, 0.15, 0.1, 0.15, 1.8 + index * 0.27, onTop + 0.08, -6.35)
      batch.box(CUP, 0.15, 0.02, 0.15, 1.8 + index * 0.27, onTop + 0.18, -6.35)
    }
    batch.box(LAMP, 0.38, 0.2, 0.3, -1.5, onTop, -6.4)
    batch.box(LAMP, 0.3, 0.2, 0.05, -1.5, onTop + 0.24, -6.48)
    batch.box('#cfd8ea', 0.24, 0.13, 0.01, -1.5, onTop + 0.28, -6.45)
    for (let jar = 0; jar < 3; jar += 1) {
      batch.add('#e8d5a8', CYLINDER, -3.7 + jar * 0.3, onTop + 0.13, -6.4, 0, 0.09, 0.26, 0.09)
      batch.add(WOOD, CYLINDER, -3.7 + jar * 0.3, onTop + 0.28, -6.4, 0, 0.095, 0.04, 0.095)
    }
    for (let cup = 0; cup < 4; cup += 1) batch.box(CUP, 0.13, 0.08, 0.13, 0.3, onTop + cup * 0.085, -6.35)
    batch.box(CLAUDE, 0.2, 0.2, 0.2, -4.25, onTop, -6.4)
    leaves(batch, -4.25, onTop + 0.35, -6.4, 0.16, random)

    // The bookshelf.
    const sx = (SHELF.x0 + SHELF.x1) / 2
    const sz = (SHELF.z0 + SHELF.z1) / 2
    const sd = SHELF.z1 - SHELF.z0
    batch.box(CHAIR, 0.03, SHELF_H - 0.01, sd - 0.1, SHELF.x0 + 0.02, 0, sz)
    batch.box(WOOD_DARK, 0.45, SHELF_H, 0.05, sx, 0, SHELF.z0 + 0.025)
    batch.box(WOOD_DARK, 0.45, SHELF_H, 0.05, sx, 0, SHELF.z1 - 0.025)
    for (const y of [0.04, 0.55, 1.05, 1.55, 2.05]) {
      batch.box(WOOD, 0.44, 0.04, sd - 0.1, sx, y, sz)
      if (y > 2) continue
      let z = SHELF.z0 + 0.07
      while (z < SHELF.z1 - 0.12) {
        const thick = 0.05 + random() * 0.07
        const tall = 0.26 + random() * 0.16
        if (random() < 0.08) {
          z += thick + 0.08
          continue
        }
        batch.box(BOOKS[Math.floor(random() * BOOKS.length)] ?? '#3f6fb0', 0.3, tall, thick - 0.006, sx + 0.03, y + 0.04, z + thick / 2)
        z += thick
      }
    }
    batch.box(WOOD_DARK, 0.47, 0.05, sd, sx, SHELF_H, sz)
    batch.box('#b5653a', 0.18, 0.16, 0.18, sx, SHELF_H + 0.05, SHELF.z0 + 0.4)
    leaves(batch, sx, SHELF_H + 0.32, SHELF.z0 + 0.4, 0.14, random)

    // The armchair, a lamp on the table by it, the sofa and its coffee table.
    const ax = (ARMCHAIR.x0 + ARMCHAIR.x1) / 2
    const az = (ARMCHAIR.z0 + ARMCHAIR.z1) / 2
    batch.box('#2f6f6a', 0.8, 0.3, 0.8, ax, 0.03, az)
    batch.box('#3a8580', 0.6, 0.08, 0.62, ax + 0.08, 0.3, az)
    batch.box('#2f6f6a', 0.18, 0.8, 0.78, ARMCHAIR.x0 + 0.09, 0.03, az)
    batch.box('#28605b', 0.83, 0.52, 0.13, ax + 0.015, 0.03, ARMCHAIR.z0 + 0.055)
    batch.box('#28605b', 0.83, 0.52, 0.13, ax + 0.015, 0.03, ARMCHAIR.z1 - 0.055)
    const tx = (SIDE_TABLE.x0 + SIDE_TABLE.x1) / 2
    const tz = (SIDE_TABLE.z0 + SIDE_TABLE.z1) / 2
    batch.add(WOOD, CYLINDER, tx, 0.55, tz, 0, 0.22, 0.03, 0.22)
    batch.add(WOOD_DARK, CYLINDER, tx, 0.27, tz, 0, 0.03, 0.54, 0.03)
    batch.add(WOOD_DARK, CYLINDER, tx, 0.01, tz, 0, 0.14, 0.02, 0.14)
    batch.add(LAMP, CYLINDER, tx, 0.62, tz, 0, 0.06, 0.1, 0.06)
    batch.add(STEEL_DARK, CYLINDER, tx, 0.75, tz, 0, 0.012, 0.2, 0.012)

    const fx = (SOFA.x0 + SOFA.x1) / 2
    const fz = (SOFA.z0 + SOFA.z1) / 2
    const fd = SOFA.z1 - SOFA.z0
    batch.box('#a8523e', 0.85, 0.3, fd, fx, 0.03, fz)
    for (const z of [1.95, 2.7, 3.45]) batch.box('#bf6650', 0.6, 0.1, 0.72, fx + 0.13, 0.3, z)
    batch.box('#a8523e', 0.22, 0.82, fd - 0.02, SOFA.x0 + 0.11, 0.03, fz)
    batch.box('#934634', 0.87, 0.52, 0.16, fx + 0.01, 0.03, SOFA.z0 + 0.07)
    batch.box('#934634', 0.87, 0.52, 0.16, fx + 0.01, 0.03, SOFA.z1 - 0.07)
    batch.add('#ffd84d', UNIT_BOX, SOFA.x0 + 0.3, 0.52, SOFA.z1 - 0.38, 0.3, 0.1, 0.3, 0.3)
    for (const [x, z] of [
      [SOFA.x0 + 0.08, SOFA.z0 + 0.08],
      [SOFA.x1 - 0.08, SOFA.z0 + 0.08],
      [SOFA.x0 + 0.08, SOFA.z1 - 0.08],
      [SOFA.x1 - 0.08, SOFA.z1 - 0.08],
    ] as const) {
      batch.box(WOOD_DARK, 0.06, 0.03, 0.06, x, 0, z)
    }
    const kx = (COFFEE_TABLE.x0 + COFFEE_TABLE.x1) / 2
    const kz = (COFFEE_TABLE.z0 + COFFEE_TABLE.z1) / 2
    batch.box(WOOD, COFFEE_TABLE.x1 - COFFEE_TABLE.x0, 0.04, COFFEE_TABLE.z1 - COFFEE_TABLE.z0, kx, 0.32, kz)
    for (const [x, z] of [
      [COFFEE_TABLE.x0 + 0.05, COFFEE_TABLE.z0 + 0.05],
      [COFFEE_TABLE.x1 - 0.05, COFFEE_TABLE.z0 + 0.05],
      [COFFEE_TABLE.x0 + 0.05, COFFEE_TABLE.z1 - 0.05],
      [COFFEE_TABLE.x1 - 0.05, COFFEE_TABLE.z1 - 0.05],
    ] as const) {
      batch.box(WOOD_DARK, 0.05, 0.32, 0.05, x, 0, z)
    }
    batch.box('#3f6fb0', 0.22, 0.04, 0.3, kx, 0.36, kz - 0.2, 0.3)
    batch.box(CUP, 0.09, 0.09, 0.09, kx + 0.05, 0.36, kz + 0.22)

    // The window bar and its stools.
    const bx = (BAR.x0 + BAR.x1) / 2
    const bz = (BAR.z0 + BAR.z1) / 2
    const bd = BAR.z1 - BAR.z0
    batch.box(DESK_FRONT, 0.4, BAR_H - 0.05, bd - 0.1, bx + 0.02, 0, bz)
    batch.box(DESK_TOP, BAR.x1 - BAR.x0 + 0.06, 0.06, bd, bx - 0.03, BAR_H - 0.05, bz)
    for (const spot of SPOTS) {
      if (spot.kind !== 'bar') continue
      batch.add(CHAIR_LIGHT, CYLINDER, spot.x, spot.sit - 0.03, spot.z, 0, 0.18, 0.06, 0.18)
      batch.add(STEEL_DARK, CYLINDER, spot.x, (spot.sit - 0.06) / 2, spot.z, 0, 0.03, spot.sit - 0.06, 0.03)
      batch.add(STEEL_DARK, CYLINDER, spot.x, 0.01, spot.z, 0, 0.15, 0.02, 0.15)
      batch.add(STEEL, CYLINDER, spot.x, 0.22, spot.z, 0, 0.13, 0.015, 0.13)
    }

    // Plants in the corners, and one by the door outside.
    for (const plant of [...PLANTS, { x: HALF_W + 1.65, z: DOOR.z + 0.6 }]) {
      batch.add('#b5653a', POT, plant.x, 0.19, plant.z, 0, 0.21, 0.38, 0.21)
      batch.add('#5b4030', CYLINDER, plant.x, 0.385, plant.z, 0, 0.17, 0.03, 0.17)
      batch.add('#6b4a32', CYLINDER, plant.x, 0.6, plant.z, 0, 0.025, 0.5, 0.025)
      leaves(batch, plant.x, 0.75, plant.z, 0.3, random)
    }
    return batch.build()
  }

  private lamps(): void {
    const batch = new Batch()
    const glowing = new Batch()
    for (const x of [-2.6, 0.9, 4.4]) {
      batch.box(INK, 0.02, 0.52, 0.02, x, 2.18, -5.75)
      batch.add(LAMP, CONE, x, 2.12, -5.75, 0, 0.28, 0.24, 0.28)
      glowing.box('#ffe9a8', 0.12, 0.08, 0.12, x, 1.96, -5.75)
    }
    // The lamp by the armchair.
    const tx = (SIDE_TABLE.x0 + SIDE_TABLE.x1) / 2
    const tz = (SIDE_TABLE.z0 + SIDE_TABLE.z1) / 2
    glowing.add('#ffe2a8', CONE, tx, 0.92, tz, 0, 0.15, 0.18, 0.15)
    this.root.add(batch.build(), glowing.build(true))
    // The steam over the machine.
    const puff = canvasTexture(64, 64, context => {
      const gradient = context.createRadialGradient(32, 32, 2, 32, 32, 30)
      gradient.addColorStop(0, 'rgba(255,255,255,0.9)')
      gradient.addColorStop(1, 'rgba(255,255,255,0)')
      context.fillStyle = gradient
      context.fillRect(0, 0, 64, 64)
    })
    for (let index = 0; index < 4; index += 1) {
      const sprite = new THREE.Sprite(new THREE.SpriteMaterial({ map: puff, transparent: true, depthWrite: false }))
      sprite.position.set(5.1 + (index % 2) * 0.25, 1.7, -6.45)
      this.steam.push(sprite)
      this.root.add(sprite)
    }
  }

  private lights(): void {
    this.root.add(new THREE.HemisphereLight('#fff6ea', '#8a6a4a', 1.5))
    const sun = new THREE.DirectionalLight('#fff0d6', 2.1)
    sun.position.set(9, 15, 7)
    sun.target.position.set(0, 0, -0.5)
    sun.castShadow = true
    sun.shadow.mapSize.set(2048, 2048)
    const reach = 15
    sun.shadow.camera.left = -reach
    sun.shadow.camera.right = reach
    sun.shadow.camera.top = reach
    sun.shadow.camera.bottom = -reach
    sun.shadow.camera.near = 1
    sun.shadow.camera.far = 45
    sun.shadow.bias = -0.0004
    sun.shadow.normalBias = 0.02
    this.root.add(sun, sun.target)
    for (const x of [-1.2, 3.6]) {
      const lamp = new THREE.PointLight('#ffc875', 5, 9, 1.6)
      lamp.position.set(x, 2.0, -5.5)
      this.root.add(lamp)
    }
  }
}

/** A cluster of low-poly leaves around (x, y, z). */
function leaves(batch: Batch, x: number, y: number, z: number, size: number, random: () => number): void {
  for (let leaf = 0; leaf < 4; leaf += 1) {
    const angle = leaf * 1.7 + random()
    const reach = leaf === 0 ? 0 : size * 0.7
    const r = size * (0.7 + random() * 0.4)
    batch.add(
      LEAVES[leaf % LEAVES.length] ?? '#4d8f4a',
      LEAF,
      x + Math.sin(angle) * reach,
      y + (leaf === 0 ? size * 0.9 : random() * size * 0.6),
      z + Math.cos(angle) * reach,
      random() * 3,
      r,
      r * 1.1,
      r,
    )
  }
}

/** The menu by the chalkboard: cups and prices in chalk, no words. */
function menuTexture(): THREE.CanvasTexture {
  return canvasTexture(
    296,
    186,
    context => {
      context.fillStyle = BOARD
      context.fillRect(0, 0, 296, 186)
      const cup: Grid = ['.a.a...', '..a.a..', '.......', '#####..', '#ccc###', '#ccc#.#', '.###...']
      const inks = [
        { '#': CHALK, a: '#b4bdb6', c: '#8a623f' },
        { '#': CHALK, a: '#b4bdb6', c: '#e9c46a' },
        { '#': CHALK, a: '#b4bdb6', c: '#8fd18f' },
      ]
      inks.forEach((ink, row) => {
        paintGrid(context, cup, ink, 26, 20 + row * 56, 5)
        context.fillStyle = 'rgba(244,241,230,0.75)'
        context.fillRect(76, 42 + row * 56, 120, 4)
        context.fillRect(76, 52 + row * 56, 70, 3)
        context.fillStyle = CHALK
        context.fillRect(222, 36 + row * 56, 8, 22)
        context.fillRect(236, 36 + row * 56, 22, 6)
        context.fillRect(236, 52 + row * 56, 22, 6)
      })
    },
    true,
  )
}

/** The poster on the back wall: a big pixel cup, steaming. */
function posterTexture(): THREE.CanvasTexture {
  return canvasTexture(
    186,
    246,
    context => {
      context.fillStyle = '#f7f0e1'
      context.fillRect(0, 0, 186, 246)
      context.fillStyle = '#e9a34f'
      context.fillRect(0, 170, 186, 76)
      const cup: Grid = [
        '...a...a....',
        '....a...a...',
        '...a...a....',
        '............',
        '#########...',
        '#ccccccc####',
        '#ccccccc#..#',
        '#ccccccc#..#',
        '#ccccccc####',
        '.#ccccc#....',
        '..#####.....',
      ]
      paintGrid(context, cup, { '#': INK, c: '#d97757', a: '#b4bdb6' }, 33, 60, 11)
      context.fillStyle = INK
      context.fillRect(30, 196, 126, 8)
      context.fillRect(54, 214, 78, 6)
    },
    true,
  )
}

/** What the windows look out on: a clear sky over a row of trees. */
function skyTexture(): THREE.CanvasTexture {
  return canvasTexture(256, 160, context => {
    const sky = context.createLinearGradient(0, 0, 0, 160)
    sky.addColorStop(0, '#9fd3ee')
    sky.addColorStop(0.75, '#e6f4f3')
    context.fillStyle = sky
    context.fillRect(0, 0, 256, 160)
    context.fillStyle = 'rgba(255,255,255,0.85)'
    context.fillRect(30, 30, 60, 12)
    context.fillRect(46, 22, 30, 10)
    context.fillRect(160, 50, 54, 10)
    context.fillStyle = '#7fb79a'
    for (let x = 0; x < 256; x += 22) context.fillRect(x, 112 - ((x * 7) % 20), 26, 60)
    context.fillStyle = '#5e9a7c'
    for (let x = 11; x < 256; x += 30) context.fillRect(x, 128 - ((x * 5) % 14), 22, 40)
  })
}
