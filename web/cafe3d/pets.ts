// The café's pets, cats and dogs, as many as the page asks for. A cat sleeps
// most of the time, now and then up and off to another of its spots; a dog
// trots about, sits, naps, and goes to sit by a guest at rest. Guests at rest
// come by to pet whichever is lying still. A pet the page adds comes in at
// the door; one it lets go walks out of it.

import * as THREE from 'three'

import { INK, hash } from '../../hooks/sprites'
import type { Part } from './kit'
import { PAINT, bubbleTexture, partsGeometry } from './kit'
import type { Place, Point } from './layout'
import { DOOR, HALF_W } from './layout'
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

/** What a pet is up to. */
type Mood = 'walk' | 'sleep' | 'sit' | 'leave'

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
  readonly nav: NavGrid
  readonly motion: number
  readonly now: number
  /** A spot for a cat to sleep on that no other cat has; undefined when all are taken. */
  freeBed(pet: Pet): Point | undefined
  /** A point of floor beside a guest at rest, for a dog to sit by; undefined when nobody rests. */
  besideResting(random: () => number): Point | undefined
  /** A free point of floor anywhere. */
  floorPoint(random: () => number): Point
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

  constructor(
    readonly species: Species,
    readonly id: string,
    now: number,
  ) {
    const seed = hash(id)
    this.random = randomFrom(seed)
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
      part(coat.fur, 0.2, 0.17, 0.17, 0, 0, 0),
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

  /** Lying still: a sleeping cat, a dog sitting or asleep. Only such a pet is petted. */
  get isStill(): boolean {
    return this.path.length === 0 && (this.mood === 'sleep' || this.mood === 'sit')
  }

  /** Into the room: at the door, coming in, or (when the café first opens) already where it likes to be. */
  arrive(world: PetWorld, isNew: boolean): void {
    const spot = this.species === 'cat' ? world.freeBed(this) : world.floorPoint(this.random)
    const start = spot ?? world.floorPoint(this.random)
    if (isNew && world.motion > 0) {
      this.x = DOOR.outside.x
      this.z = DOOR.outside.z
      this.yaw = -Math.PI / 2
      this.presence = 0
      this.goal = start
      this.path = [DOOR.inside, ...world.nav.path(DOOR.inside, start)]
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
    this.mood = 'leave'
    this.petter = ''
    if (world.motion === 0) {
      this.isGone = true
      return
    }
    this.path = this.x > HALF_W ? [DOOR.outside] : [...world.nav.path(this, DOOR.inside), DOOR.outside]
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
      if (this.mood === 'walk' || this.path.length > 0) {
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
      this.path = world.nav.path(this, bed)
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
    this.path = world.nav.path(this, goal)
    this.mood = 'walk'
  }

  update(dt: number, t: number, world: PetWorld): void {
    const { now, motion } = world
    if (this.mood !== 'leave' && motion > 0 && this.path.length === 0 && this.petter === '' && now >= this.moodUntil) this.choose(world)

    const isWalking = this.path.length > 0
    if (isWalking) {
      let step = (this.species === 'dog' ? 1.25 : 0.75) * dt * (this.mood === 'leave' ? 1.2 : 1)
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
      if (this.path.length === 0 && this.mood !== 'leave') this.choose(world)
    }

    // In at the door, out of it.
    if (this.mood === 'leave' && this.path.length === 0) {
      this.presence = Math.max(0, this.presence - dt * 3)
      if (this.presence <= 0) this.isGone = true
    } else if (this.presence < 1) {
      this.presence = Math.min(1, this.presence + dt * 3)
    }

    this.pose(dt, t, motion, isWalking)
    this.root.position.set(this.x, 0, this.z)
    this.root.rotation.y = this.yaw
    this.root.scale.setScalar(this.size * Math.max(0.001, this.presence))
  }

  private pose(dt: number, t: number, motion: number, isWalking: boolean): void {
    const ease = 1 - Math.exp(-dt * 6)
    const swing = Math.sin(t * (this.species === 'dog' ? 13 : 10)) * motion
    const isAsleep = !isWalking && this.mood === 'sleep'
    const isSitting = !isWalking && this.mood === 'sit'
    const isPetted = this.petter !== ''
    // Lying down, the body sinks; a dog sitting tips back on its hind legs.
    const squash = isAsleep ? 0.6 : 1
    this.body.scale.y += (squash - this.body.scale.y) * ease
    const tilt = isSitting && this.species === 'dog' ? -0.35 : 0
    this.body.rotation.x += (tilt - this.body.rotation.x) * ease
    this.body.position.y = isWalking ? Math.abs(swing) * 0.015 : 0
    this.legs.forEach((leg, index) => {
      leg.rotation.x = isWalking ? (index % 3 === 0 ? swing : -swing) * 0.55 : 0
      leg.visible = !isAsleep || this.species === 'dog'
    })
    if (isAsleep) {
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
