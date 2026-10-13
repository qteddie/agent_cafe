// The café's pets, cats and dogs, as many as the page asks for. A cat sleeps
// most of the time, now and then up and off to another of its spots; a dog
// trots about, sits, naps, and goes to sit by a guest at rest. Guests at rest
// come by to pet whichever is lying still. A pet the page adds comes in at
// the door; one it lets go walks out of it.
//
// The person watching plays with them too: a pet clicked perks up and says
// so; called to a point of the floor, it comes (a cat, when it pleases); a
// dog runs after a ball thrown there and brings it back.

import * as THREE from 'three'

import { INK, hash } from '../../hooks/sprites'
import type { Part } from './kit'
import { PAINT, bubbleTexture, mat, partsGeometry } from './kit'
import type { Place, Point } from './layout'
import { DOOR, HALF_D, HALF_W } from './layout'
import { randomFrom } from './mind'
import type { NavGrid } from './nav'

export type Species = 'cat' | 'dog'

/** A coat: the fur, its shade, and a patch of another color (a chest, a mask). */
type Coat = { fur: string; shade: string; patch: string }

const CAT_COATS: readonly Coat[] = [
  { fur: '#e9a34f', shade: '#c47f33', patch: '#f7e6c8' },
  { fur: '#9a9aa2', shade: '#6f6f78', patch: '#e8e6e2' },
  { fur: '#3a3633', shade: '#24211f', patch: '#3a3633' },
  { fur: '#f4f1ea', shade: '#d9d2c6', patch: '#e9a34f' },
  { fur: '#f4f1ea', shade: '#3a3633', patch: '#e9a34f' },
]

const DOG_COATS: readonly Coat[] = [
  { fur: '#d9a25b', shade: '#b8813f', patch: '#f3e3c4' },
  { fur: '#e08a3c', shade: '#b86a2a', patch: '#f7efe2' },
  { fur: '#8a5a3b', shade: '#6b4429', patch: '#d9b48c' },
  { fur: '#2f2b29', shade: '#1f1c1b', patch: '#f4f1ea' },
  { fur: '#f2ece0', shade: '#d8cdb8', patch: '#8a5a3b' },
]

const PINK = '#f0a58c'
const COLLARS = ['#e0564b', '#3f6fb0', '#3d8f5a', '#ffd84d']

/** The names pets go by: the nth of a kind always the same. */
const NAMES: Readonly<Record<Species, readonly string[]>> = {
  cat: ['Mochi', 'Miso', 'Luna', 'Tofu', 'Nori', 'Maple', 'Pudding', 'Sesame'],
  dog: ['Biscuit', 'Latte', 'Mango', 'Peanut', 'Cocoa', 'Bagel', 'Waffle', 'Pepper'],
}
const SAYS: Readonly<Record<Species, readonly string[]>> = {
  cat: ['Meow~', 'Purr…', 'Mrrp?', 'Meow!'],
  dog: ['Woof!', 'Arf!', 'Woof woof!', 'Arf arf!'],
}
/** How long a pet's words stay over it. */
const SAY_MS = 2_200

const RING = new THREE.RingGeometry(0.3, 0.37, 28)
const RING_INK = new THREE.MeshBasicMaterial({ color: '#e98fb0', transparent: true, opacity: 0.9, depthWrite: false })
const BALL_RADIUS = 0.075
const BALL_SHAPE = new THREE.IcosahedronGeometry(BALL_RADIUS, 1)
/** How long a ball flies, and how long it lies about once a dog has brought it back. */
const FLIGHT_MS = 550
const BALL_KEEP_MS = 12_000

/** What a pet is up to. */
type Mood = 'walk' | 'sleep' | 'sit' | 'leave'
/** What the person sent it to do: come to a point, run after a ball, bring the ball back. */
type Errand = 'none' | 'come' | 'fetch' | 'bring'

/** A tennis ball, thrown from the front of the room for a dog to fetch. */
export class Ball {
  readonly mesh: THREE.Mesh
  x = 0
  z = 0
  state: 'flying' | 'lying' | 'carried' = 'lying'
  /** When a dog dropped it after bringing it back; 0 before. */
  droppedAt = 0
  private from: Point = { x: 0, z: 0 }
  private thrownAt = 0

  constructor() {
    this.mesh = new THREE.Mesh(BALL_SHAPE, mat('#cfe34a'))
    this.mesh.castShadow = true
  }

  throwTo(point: Point, now: number): void {
    this.from = { x: point.x * 0.6, z: HALF_D + 1.2 }
    this.x = point.x
    this.z = point.z
    this.thrownAt = now
    this.state = 'flying'
    this.droppedAt = 0
  }

  get hasLanded(): boolean {
    return this.state !== 'flying'
  }

  /** Gone a while after it was brought back. */
  isOld(now: number): boolean {
    return this.droppedAt > 0 && now - this.droppedAt > BALL_KEEP_MS
  }

  carry(x: number, y: number, z: number): void {
    this.state = 'carried'
    this.mesh.position.set(x, y, z)
  }

  drop(x: number, z: number, now: number): void {
    this.state = 'lying'
    this.x = x
    this.z = z
    this.droppedAt = now
  }

  update(now: number, motion: number): void {
    if (this.state === 'carried') return
    let y = 0
    let x = this.x
    let z = this.z
    if (this.state === 'flying') {
      const t = now - this.thrownAt
      if (motion === 0 || t >= FLIGHT_MS + 500) {
        this.state = 'lying'
      } else if (t < FLIGHT_MS) {
        // An arc from the front of the room down to where it lands.
        const k = t / FLIGHT_MS
        x = this.from.x + (this.x - this.from.x) * k
        z = this.from.z + (this.z - this.from.z) * k
        y = 1.2 * (1 - k) + 1.6 * 4 * k * (1 - k)
      } else {
        // A bounce or two.
        const after = (t - FLIGHT_MS) / 500
        y = Math.abs(Math.sin(after * Math.PI * 2)) * 0.2 * (1 - after)
      }
    }
    this.mesh.position.set(x, y + BALL_RADIUS, z)
  }
}

function part(color: string, w: number, h: number, d: number, x: number, y: number, z: number): Part {
  return { color, w, h, d, x, y, z }
}

function shape(geometry: THREE.BufferGeometry): THREE.Mesh {
  const mesh = new THREE.Mesh(geometry, PAINT)
  mesh.castShadow = true
  return mesh
}

/** What a pet asks of the room. */
export interface PetWorld {
  /** The pets' floor: the guests', less the chairs. */
  readonly petNav: NavGrid
  readonly motion: number
  readonly now: number
  /** A spot for a cat to sleep on that no other cat has; undefined when all are taken. */
  freeBed(pet: Pet): Point | undefined
  /** A point of floor beside a guest at rest, for a dog to sit by; undefined when nobody rests. */
  besideResting(random: () => number): Point | undefined
  /** A free point of floor anywhere. */
  floorPoint(random: () => number): Point
  /** Where a dog brings a ball back to: the front of the room, toward the person. */
  bringBack(pet: Pet): Point
}

export class Pet {
  readonly root = new THREE.Group()
  private readonly body = new THREE.Group()
  private readonly head = new THREE.Group()
  private readonly tail = new THREE.Group()
  private readonly legs: THREE.Mesh[] = []
  private readonly dream: THREE.Sprite
  private readonly dreamMaterial: THREE.SpriteMaterial
  private readonly owned: THREE.BufferGeometry[] = []
  private readonly random: () => number
  private readonly size: number
  private path: Point[] = []
  private mood: Mood = 'sleep'
  private moodUntil = 0
  /** Where it means to sleep, sit, or leave by. */
  goal: Point = { x: 0, z: 0 }
  x = 0
  z = 0
  private yaw = 0.6
  private presence = 1
  /** The guest petting it now, if one is. */
  petter = ''
  isGone = false
  readonly name: string
  /** What it said last, shown over it until `saidUntil`. */
  said = ''
  saidUntil = 0
  private excitedUntil = 0
  private errand: Errand = 'none'
  private ball: Ball | undefined
  private readonly ring: THREE.Mesh

  constructor(
    readonly species: Species,
    readonly id: string,
    now: number,
  ) {
    const seed = hash(id)
    this.random = randomFrom(seed)
    const nth = Number(id.split(':')[1]) || 0
    const names = NAMES[species]
    this.name = `${names[nth % names.length] ?? species}${nth >= names.length ? ` ${Math.floor(nth / names.length) + 1}` : ''}`
    const coats = species === 'cat' ? CAT_COATS : DOG_COATS
    const coat = coats[seed % coats.length] ?? (coats[0] as Coat)
    this.size = species === 'cat' ? 0.95 + this.random() * 0.15 : 0.85 + this.random() * 0.45
    if (species === 'cat') this.buildCat(coat)
    else this.buildDog(coat, COLLARS[(seed >>> 4) % COLLARS.length] ?? '#e0564b')
    this.root.add(this.body)
    this.root.scale.setScalar(this.size)
    this.dreamMaterial = new THREE.SpriteMaterial({ map: bubbleTexture('zzz'), transparent: true, depthWrite: false })
    this.dream = new THREE.Sprite(this.dreamMaterial)
    this.dream.scale.set(0.26, 0.24, 1)
    this.dream.center.set(0.2, 0)
    this.root.add(this.dream)
    this.ring = new THREE.Mesh(RING, RING_INK)
    this.ring.rotation.x = -Math.PI / 2
    // At one height in the room whatever the pet's size: clear of the rugs and the door mat.
    this.ring.position.y = 0.024 / this.size
    this.ring.visible = false
    this.root.add(this.ring)
    this.moodUntil = now + 5_000 + this.random() * 20_000
  }

  private buildCat(coat: Coat): void {
    const torso = partsGeometry([
      part(coat.fur, 0.2, 0.17, 0.38, 0, 0.165, 0),
      part(coat.shade, 0.205, 0.04, 0.2, 0, 0.235, -0.02),
      part(coat.patch, 0.12, 0.08, 0.06, 0, 0.13, 0.17),
    ])
    const leg = partsGeometry([part(coat.fur, 0.06, 0.09, 0.06, 0, -0.045, 0)])
    const head = partsGeometry([
      part(coat.fur, 0.21, 0.17, 0.17, 0, 0, 0),
      part(coat.shade, 0.05, 0.07, 0.04, 0.065, 0.11, -0.02),
      part(coat.shade, 0.05, 0.07, 0.04, -0.065, 0.11, -0.02),
      part(PINK, 0.03, 0.04, 0.01, 0.065, 0.1, 0.0),
      part(PINK, 0.03, 0.04, 0.01, -0.065, 0.1, 0.0),
      part(coat.patch, 0.1, 0.05, 0.01, 0, -0.04, 0.086),
      part(INK, 0.03, 0.02, 0.01, 0.045, 0.02, 0.087),
      part(INK, 0.03, 0.02, 0.01, -0.045, 0.02, 0.087),
      part(PINK, 0.025, 0.02, 0.01, 0, -0.02, 0.088),
    ])
    const tail = partsGeometry([part(coat.shade, 0.05, 0.05, 0.24, 0, 0, -0.11)])
    this.assemble(torso, leg, head, tail, { legY: 0.09, legX: 0.06, legZ: 0.13, head: [0, 0.25, 0.2], tail: [0, 0.2, -0.19] })
  }

  private buildDog(coat: Coat, collar: string): void {
    const torso = partsGeometry([
      part(coat.fur, 0.24, 0.2, 0.42, 0, 0.25, 0),
      part(coat.shade, 0.245, 0.05, 0.24, 0, 0.33, -0.04),
      part(coat.patch, 0.16, 0.12, 0.05, 0, 0.22, 0.2),
      part(collar, 0.2, 0.05, 0.05, 0, 0.33, 0.2),
    ])
    const leg = partsGeometry([part(coat.fur, 0.075, 0.14, 0.075, 0, -0.07, 0), part(coat.patch, 0.08, 0.03, 0.08, 0, -0.125, 0.005)])
    const head = partsGeometry([
      part(coat.fur, 0.22, 0.2, 0.2, 0, 0, 0),
      part(coat.patch, 0.13, 0.09, 0.12, 0, -0.05, 0.14),
      part(INK, 0.05, 0.035, 0.02, 0, -0.02, 0.205),
      part(INK, 0.035, 0.035, 0.01, 0.055, 0.04, 0.101),
      part(INK, 0.035, 0.035, 0.01, -0.055, 0.04, 0.101),
      part(coat.shade, 0.05, 0.15, 0.1, 0.13, -0.01, -0.02),
      part(coat.shade, 0.05, 0.15, 0.1, -0.13, -0.01, -0.02),
      part(PINK, 0.04, 0.05, 0.01, 0, -0.1, 0.17),
    ])
    const tail = partsGeometry([part(coat.fur, 0.05, 0.05, 0.2, 0, 0, -0.09)])
    this.assemble(torso, leg, head, tail, { legY: 0.14, legX: 0.07, legZ: 0.14, head: [0, 0.42, 0.24], tail: [0, 0.32, -0.2] })
  }

  private assemble(
    torso: THREE.BufferGeometry,
    leg: THREE.BufferGeometry,
    head: THREE.BufferGeometry,
    tail: THREE.BufferGeometry,
    at: { legY: number; legX: number; legZ: number; head: readonly [number, number, number]; tail: readonly [number, number, number] },
  ): void {
    this.owned.push(torso, leg, head, tail)
    this.body.add(shape(torso))
    for (const [x, z] of [
      [at.legX, at.legZ],
      [-at.legX, at.legZ],
      [at.legX, -at.legZ],
      [-at.legX, -at.legZ],
    ] as const) {
      const mesh = shape(leg)
      mesh.position.set(x, at.legY, z)
      this.legs.push(mesh)
      this.body.add(mesh)
    }
    this.head.position.set(...at.head)
    this.head.add(shape(head))
    this.body.add(this.head)
    this.tail.position.set(...at.tail)
    this.tail.add(shape(tail))
    this.body.add(this.tail)
  }

  get isLeaving(): boolean {
    return this.mood === 'leave'
  }

  /** Lying still: a sleeping cat, a dog sitting or asleep, on no errand. Only such a pet is petted. */
  get isStill(): boolean {
    return this.path.length === 0 && this.errand === 'none' && (this.mood === 'sleep' || this.mood === 'sit')
  }

  /** How tall it stands, for its words and for pointing at it. */
  get height(): number {
    return (this.species === 'dog' ? 0.55 : 0.4) * this.size
  }

  get isPresent(): boolean {
    return this.presence > 0.5
  }

  /** The box around its body as it stands now, turned and sized: what pointing at it hits. */
  hitBox(target: THREE.Box3): THREE.Box3 {
    this.root.updateMatrixWorld(true)
    return target.setFromObject(this.body).expandByScalar(0.04)
  }

  setRing(isOn: boolean): void {
    this.ring.visible = isOn
  }

  private say(words: string, now: number): void {
    this.said = words
    this.saidUntil = now + SAY_MS
  }

  /** Clicked by the person: it wakes, perks up, and says so. */
  poke(world: PetWorld): void {
    if (this.isLeaving) return
    const { now } = world
    this.say(SAYS[this.species][Math.floor(this.random() * SAYS[this.species].length)] ?? '', now)
    // On an errand, or still on its way in at the door: it answers, and goes on.
    if (this.errand !== 'none' || this.x > DOOR.inside.x) return
    this.path = []
    this.mood = 'sit'
    this.moodUntil = now + 6_000 + this.random() * 4_000
    this.excitedUntil = now + 1_600
  }

  /** Called over to a point of the floor. A cat comes when it pleases: false when it does not. */
  call(point: Point, world: PetWorld): boolean {
    if (this.isLeaving) return false
    if (this.species === 'cat' && this.random() < 0.3) {
      this.say('…', world.now)
      return false
    }
    this.letGoOfBall(world.now)
    this.errand = 'come'
    this.send(world.petNav.nearestPoint(point), world)
    return true
  }

  /** A dog runs after a ball thrown, to bring it back. */
  fetch(ball: Ball, world: PetWorld): void {
    if (this.isLeaving || this.species !== 'dog') return
    this.letGoOfBall(world.now)
    this.ball = ball
    this.errand = 'fetch'
    this.say(SAYS.dog[0] ?? '', world.now)
    this.send(world.petNav.nearestPoint(ball), world)
  }

  /** Off on an errand to `goal`: at once, for a page that asks for less motion. */
  private send(goal: Point, world: PetWorld): void {
    this.excitedUntil = 0
    this.petter = ''
    this.goal = goal
    this.mood = 'walk'
    if (world.motion === 0) {
      this.x = goal.x
      this.z = goal.z
      this.path = []
      return
    }
    this.path = world.petNav.path(this, goal)
  }

  /** Drops a ball it carries where it stands, and forgets about it. */
  private letGoOfBall(now: number): void {
    if (this.ball?.state === 'carried') {
      this.ball.drop(this.x + Math.sin(this.yaw) * 0.35 * this.size, this.z + Math.cos(this.yaw) * 0.35 * this.size, now)
    }
    this.ball = undefined
  }

  /** At the end of an errand: the ball picked up, brought back, or the pet there and glad of it. */
  private arrive(world: PetWorld): void {
    const { now } = world
    switch (this.errand) {
      case 'fetch': {
        const ball = this.ball
        if (ball === undefined || ball.state === 'carried') {
          this.errand = 'none'
          break
        }
        // It waits for the ball to land, then picks it up and turns back.
        if (!ball.hasLanded) return
        ball.state = 'carried'
        this.errand = 'bring'
        this.send(world.bringBack(this), world)
        return
      }
      case 'bring':
        this.letGoOfBall(now)
        this.errand = 'none'
        this.mood = 'sit'
        this.moodUntil = now + 6_000
        this.excitedUntil = now + 1_400
        this.say(SAYS.dog[2] ?? '', now)
        return
      case 'come':
        this.errand = 'none'
        this.mood = 'sit'
        this.moodUntil = now + 7_000 + this.random() * 4_000
        this.excitedUntil = now + 1_200
        this.say(SAYS[this.species][Math.floor(this.random() * SAYS[this.species].length)] ?? '', now)
        return
      case 'none':
        break
    }
    this.choose(world)
  }

  /** Into the room: at the door, coming in, or (when the café first opens) already where it likes to be. */
  enter(world: PetWorld, isNew: boolean): void {
    const spot = this.species === 'cat' ? world.freeBed(this) : world.floorPoint(this.random)
    const start = spot ?? world.floorPoint(this.random)
    if (isNew && world.motion > 0) {
      this.x = DOOR.outside.x
      this.z = DOOR.outside.z
      this.yaw = -Math.PI / 2
      this.presence = 0
      this.goal = start
      this.path = [DOOR.inside, ...world.petNav.path(DOOR.inside, start)]
      this.mood = 'walk'
      this.moodUntil = 0
      return
    }
    this.x = start.x
    this.z = start.z
    this.goal = start
    this.mood = this.species === 'cat' ? 'sleep' : 'sit'
  }

  /** Home time: out of the door. */
  leave(world: PetWorld): void {
    if (this.mood === 'leave') return
    this.letGoOfBall(world.now)
    this.mood = 'leave'
    this.errand = 'none'
    this.excitedUntil = 0
    this.petter = ''
    if (world.motion === 0) {
      this.isGone = true
      return
    }
    this.path = this.x > HALF_W ? [DOOR.outside] : [...world.petNav.path(this, DOOR.inside), DOOR.outside]
  }

  /**
   * The furniture moved (a table came, grew, or went): the way is found again, and a pet a
   * table or a chair just came down on gets up and goes to the free floor nearest it.
   */
  reroute(world: PetWorld): void {
    const nav = world.petNav
    if (this.mood === 'leave') {
      if (world.motion > 0 && this.path.length > 0 && this.x <= HALF_W) this.path = [...nav.path(this, DOOR.inside), DOOR.outside]
      return
    }
    if (this.path.length > 0) {
      if (world.motion === 0 || this.x > HALF_W) return
      // A ball lies where it fell; anywhere else it goes to the free floor nearest where it meant to.
      if (this.errand !== 'fetch') this.goal = nav.nearestPoint(this.goal)
      this.path = nav.path(this, this.goal)
      return
    }
    if (nav.isFree(this)) return
    const spot = nav.nearestPoint(this)
    this.petter = ''
    this.excitedUntil = 0
    this.goal = spot
    if (world.motion === 0) {
      this.x = spot.x
      this.z = spot.z
      return
    }
    // Up, over, and down again there.
    this.mood = 'walk'
    this.path = [spot]
  }

  /** Where a guest stands to pet it: beside it, facing it. */
  pettingPlace(nav: NavGrid): Place | undefined {
    if (!this.isStill) return undefined
    for (const angle of [Math.PI / 2, -Math.PI / 2, 0, Math.PI]) {
      const reach = this.species === 'cat' ? 0.5 : 0.58
      const x = this.x + Math.sin(this.yaw + angle) * reach
      const z = this.z + Math.cos(this.yaw + angle) * reach
      if (nav.isFree({ x, z })) return { x, z, yaw: Math.atan2(this.x - x, this.z - z) }
    }
    return undefined
  }

  /** What next, now that it got where it was going or grew tired of being there. */
  private choose(world: PetWorld): void {
    const { now } = world
    if (this.species === 'cat') {
      // Arrived, or sat up a while for the person: back to sleep, right here.
      if (this.mood === 'walk' || this.mood === 'sit' || this.path.length > 0) {
        this.mood = 'sleep'
        this.moodUntil = now + 40_000 + this.random() * 50_000
        return
      }
      const bed = world.freeBed(this)
      if (bed === undefined) {
        this.moodUntil = now + 20_000
        return
      }
      this.goal = bed
      this.path = world.petNav.path(this, bed)
      this.mood = 'walk'
      return
    }
    // A dog: on arriving, sits or lies down; after sitting a while, off somewhere.
    if (this.mood === 'walk') {
      this.mood = this.random() < 0.3 ? 'sleep' : 'sit'
      this.moodUntil = now + (this.mood === 'sleep' ? 15_000 + this.random() * 25_000 : 4_000 + this.random() * 8_000)
      return
    }
    const visit = this.random() < 0.45 ? world.besideResting(this.random) : undefined
    const goal = visit ?? world.floorPoint(this.random)
    this.goal = goal
    this.path = world.petNav.path(this, goal)
    this.mood = 'walk'
  }

  update(dt: number, t: number, world: PetWorld): void {
    const { now, motion } = world
    const isExcited = now < this.excitedUntil
    if (this.mood !== 'leave' && this.path.length === 0 && !isExcited) {
      if (this.errand !== 'none') this.arrive(world)
      // With less motion nobody walks, but a cat sat up still lies back down where it is.
      else if ((motion > 0 || (this.species === 'cat' && this.mood === 'sit')) && this.petter === '' && now >= this.moodUntil) this.choose(world)
    }

    const isWalking = this.path.length > 0 && !isExcited
    if (isWalking) {
      // On an errand for the person it hurries: a dog runs.
      const pace = this.errand === 'none' ? (this.species === 'dog' ? 1.25 : 0.75) : this.species === 'dog' ? 2.3 : 1.1
      let step = pace * dt * (this.mood === 'leave' ? 1.2 : 1)
      while (step > 0 && this.path.length > 0) {
        const next = this.path[0] as Point
        const dx = next.x - this.x
        const dz = next.z - this.z
        const distance = Math.hypot(dx, dz)
        if (distance > 1e-4) {
          let turn = Math.atan2(dx, dz) - this.yaw
          turn = Math.atan2(Math.sin(turn), Math.cos(turn))
          this.yaw += turn * (1 - Math.exp(-dt * 9))
        }
        if (distance <= step) {
          this.x = next.x
          this.z = next.z
          this.path.shift()
          step -= distance
        } else {
          this.x += (dx / distance) * step
          this.z += (dz / distance) * step
          step = 0
        }
      }
      if (this.path.length === 0 && this.mood !== 'leave') this.arrive(world)
    }

    // A ball in its mouth goes where it goes.
    if (this.ball?.state === 'carried') {
      const reach = (this.species === 'dog' ? 0.38 : 0.3) * this.size
      this.ball.carry(this.x + Math.sin(this.yaw) * reach, 0.36 * this.size, this.z + Math.cos(this.yaw) * reach)
    }

    // In at the door, out of it.
    if (this.mood === 'leave' && this.path.length === 0) {
      this.presence = Math.max(0, this.presence - dt * 3)
      if (this.presence <= 0) this.isGone = true
    } else if (this.presence < 1) {
      this.presence = Math.min(1, this.presence + dt * 3)
    }

    this.pose(dt, t, motion, isWalking, isExcited)
    this.root.position.set(this.x, 0, this.z)
    this.root.rotation.y = this.yaw
    this.root.scale.setScalar(this.size * Math.max(0.001, this.presence))
  }

  private pose(dt: number, t: number, motion: number, isWalking: boolean, isExcited: boolean): void {
    const ease = 1 - Math.exp(-dt * 6)
    const swing = Math.sin(t * (this.species === 'dog' ? 13 : 10)) * motion
    const isAsleep = !isWalking && !isExcited && this.mood === 'sleep'
    const isSitting = !isWalking && !isExcited && this.mood === 'sit'
    const isPetted = this.petter !== ''
    // Lying down, the body sinks; a dog sitting tips back on its hind legs.
    const squash = isAsleep ? 0.6 : 1
    this.body.scale.y += (squash - this.body.scale.y) * ease
    const tilt = isSitting && this.species === 'dog' ? -0.35 : 0
    this.body.rotation.x += (tilt - this.body.rotation.x) * ease
    // Glad: a dog hops on the spot, a cat bobs.
    const hop = isExcited ? Math.abs(Math.sin(t * (this.species === 'dog' ? 11 : 6))) * (this.species === 'dog' ? 0.09 : 0.04) * motion : 0
    this.body.position.y = (isWalking ? Math.abs(swing) * 0.015 : 0) + hop
    this.legs.forEach((leg, index) => {
      leg.rotation.x = isWalking ? (index % 3 === 0 ? swing : -swing) * 0.55 : 0
      leg.visible = !isAsleep || this.species === 'dog'
    })
    if (isExcited) {
      const wag = (this.species === 'dog' ? 1.2 : 0.3) * Math.sin(t * (this.species === 'dog' ? 24 : 5)) * motion
      this.tail.rotation.set(this.species === 'dog' ? -0.8 : -1.1, wag, 0)
      this.head.rotation.set(-0.25, 0, this.species === 'cat' ? 0.3 * Math.sin(t * 3) * motion : 0)
    } else if (isAsleep) {
      this.head.rotation.set(0.35 + 0.03 * Math.sin(t * 1.2) * motion, 0.5, 0)
      this.tail.rotation.set(0, this.species === 'cat' ? 1.2 + 0.1 * Math.sin(t * 0.8) * motion : 0.6, 0)
    } else if (this.species === 'dog') {
      // A dog's tail wags, harder while it is petted; its head looks about.
      const wag = (isPetted ? 1.1 : isWalking ? 0.5 : 0.7) * Math.sin(t * (isPetted ? 22 : 14)) * motion
      this.tail.rotation.set(-0.7, wag, 0)
      this.head.rotation.set(isSitting ? 0.2 : 0, isWalking ? 0 : 0.4 * Math.sin(t * 0.7 + this.size * 9) * motion, isPetted ? 0.2 : 0)
    } else {
      this.tail.rotation.set(isWalking ? -0.5 : -0.2, 0.35 * Math.sin(t * 4) * motion, 0)
      this.head.rotation.set(0, isPetted ? 0.25 * Math.sin(t * 2) * motion : 0, isPetted ? 0.25 : 0)
    }
    this.dream.visible = isAsleep && !isPetted
    this.dream.position.y = (this.species === 'dog' ? 0.45 : 0.38) + 0.03 * Math.sin(t * 1.5) * motion
  }

  dispose(): void {
    this.dreamMaterial.dispose()
    for (const geometry of this.owned) geometry.dispose()
  }
}
