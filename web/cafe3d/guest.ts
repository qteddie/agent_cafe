// One guest of the 3D café: an agent, walking the room and doing what its
// state says. At work it sits at its table (or reads at the shelf, plans at
// the corkboard); held for the person it stands and waves at the camera;
// done, it cheers and leaves by the door; at rest it fetches a coffee and
// spends the time as it likes, on the sofa, at the window bar, petting a cat
// or a dog.

import type { Act } from '../../hooks/describe'
import type { Kind, Phase } from '../../hooks/tracker'
import type { BubbleName } from './kit'
import type { Place, Point, Spot, SpotKind } from './layout'
import { CHAIR_H, DOOR, HALF_W, besideChair } from './layout'
import { figureOf } from './figure'
import type { Pastime, Want } from './mind'
import { Intent, LINGER_MS, PACE_AFTER_MS, pickPastime, randomFrom, wantOf } from './mind'
import type { NavGrid } from './nav'
import type { Held, Pose, Screen } from './person'
import { Body } from './person'

/** One seat of the view, as the 3D café reads it. */
export type Line = {
  key: string
  kind: Kind
  phase: Phase
  act: Act
  tool: string
  label: string
  says: string
}

/** What a guest asks of the room it is in. */
export interface World {
  /** 1, or 0 for a page that asks for less motion: then nobody walks, they are just there. */
  readonly motion: number
  /** Milliseconds, on the page's clock. */
  readonly now: number
  readonly nav: NavGrid
  chairOf(guest: Guest): Place | undefined
  /** True while another guest at its table is at work. */
  isCrewBusy(guest: Guest): boolean
  /** The chairs of the guests at its table who are at work. */
  crewChairs(guest: Guest): Place[]
  /** A free spot of one of these kinds (or this very spot) taken for the guest; undefined when none is free. */
  claim(guest: Guest, kinds: readonly SpotKind[], exact?: Spot): Spot | undefined
  hasFree(kinds: readonly SpotKind[]): boolean
  release(guest: Guest): void
  isOpen(spot: Spot): boolean
  /** Where to stand to pet a cat or a dog lying still that nobody else pets, facing it; taken for the guest. */
  petSpot(guest: Guest): Place | undefined
  /** A free point of floor within `radius` of `center`, or anywhere. */
  floorPoint(random: () => number, center?: Point, radius?: number): Point
  /** The way to face from (x, z) to look at the camera. */
  cameraYaw(x: number, z: number): number
}

type Where = 'chair' | 'beside' | 'spot' | 'point' | 'door'

type Doing =
  | 'work'
  | 'think'
  | 'pace'
  | 'read'
  | 'search'
  | 'plan'
  | 'ask'
  | 'fail'
  | 'cheer'
  | 'exit'
  | 'lead'
  | 'watch'
  | 'coffee'
  | 'sip'
  | 'rest'
  | 'browse'
  | 'pet'
  | 'stroll'

const ICON_OF: Readonly<Record<Act, BubbleName>> = {
  read: 'book',
  search: 'lens',
  write: 'pencil',
  run: 'shell',
  web: 'globe',
  delegate: 'people',
  plan: 'list',
  tool: 'gear',
  ask: 'ask',
  think: 'think0',
  rest: 'none',
  done: 'done',
  fail: 'fail',
}

const LOUNGES: readonly SpotKind[] = ['sofa', 'armchair', 'bar', 'decor']
const WALK = 1.6
const HURRY = 2.2
const TURN = 9
/** Nearer than this to the point it walks to, a guest is nudged aside less and less, so it gets there. */
const NEAR = 0.46
/** Who comes in keeps to its right of the door, who goes out to its right: they pass instead of meeting head on. */
const LANE = 0.2
const IN_STEP: Point = { x: DOOR.inside.x, z: DOOR.z - LANE }
const IN_FROM: Point = { x: DOOR.outside.x, z: DOOR.z - LANE }
const OUT_STEP: Point = { x: DOOR.inside.x, z: DOOR.z + LANE }
const OUT_TO: Point = { x: DOOR.outside.x, z: DOOR.z + LANE }

function seconds(random: () => number, low: number, high: number): number {
  return (low + (high - low) * random()) * 1000
}

export class Guest {
  readonly key: string
  readonly body: Body
  line: Line
  x = 0
  z = 0
  yaw = 0
  /** Out of the view: on its way to the door. */
  isLeaving = false
  /** Through the door: to be taken out of the room. */
  isGone = false
  private path: Point[] = []
  private where: Where = 'chair'
  private goal: Place & { sit: number } = { x: 0, z: 0, yaw: 0, sit: 0 }
  private spot: Spot | undefined
  private doing: Doing = 'rest'
  /** How long to stay once there, in ms; 0 for as long as the want lasts. */
  private stay = 0
  /** When the stay is over; 0 while walking, or for a stay with no end. */
  private until = 0
  private isThere = false
  private isPlacing = false
  private readonly intent: Intent
  private readonly random: () => number
  private hasCup = false
  private sips = 0
  private thinkSince = 0
  /** Until when it stays at the shelf or the corkboard it walked to. */
  private lingerUntil = 0

  constructor(line: Line, now: number, seed: number) {
    this.key = line.key
    this.line = line
    this.body = new Body(figureOf(line.key, line.kind), line.key)
    this.intent = new Intent(wantOf(line.phase, line.act, line.kind, false), now)
    this.random = randomFrom(seed)
  }

  get want(): Want {
    return this.intent.want
  }

  /** How fast it walks, in metres a second: hurrying to the person. */
  private get speed(): number {
    return this.doing === 'ask' ? HURRY : WALK
  }

  get isWalking(): boolean {
    return this.path.length > 0
  }

  /** On its way to a pet, or petting it. */
  get isPetting(): boolean {
    return this.doing === 'pet' && !this.isLeaving
  }

  /** Puts the guest in the room: at the door, coming in, or (when the café first opens) already where it belongs. */
  arrive(world: World, isNew: boolean): void {
    if (isNew && world.motion > 0) {
      this.x = IN_FROM.x
      this.z = IN_FROM.z
      this.yaw = -Math.PI / 2
      this.body.presence = 0
      this.decide(world)
      return
    }
    // Whoever is resting when the café opens has a coffee already.
    this.hasCup = this.random() < 0.75
    this.sips = 1 + Math.floor(this.random() * 2)
    this.isPlacing = true
    this.decide(world)
    this.isPlacing = false
    this.yaw = this.goal.yaw
  }

  /** Out of the view: through the door, or gone at once for a page that asks for less motion. */
  leave(world: World): void {
    if (this.isLeaving) return
    this.isLeaving = true
    world.release(this)
    this.spot = undefined
    if (world.motion === 0) {
      this.isGone = true
      return
    }
    this.goTo(world, 'door', { ...OUT_TO, yaw: Math.PI / 2 }, 0, 'exit', 0)
  }

  update(dt: number, t: number, world: World): void {
    const { now } = world
    if (!this.isLeaving) {
      const seen = wantOf(this.line.phase, this.line.act, this.line.kind, world.isCrewBusy(this))
      if (this.intent.feed(seen, now, this.lingerUntil)) this.decide(world)
      else if (this.spot !== undefined && !world.isOpen(this.spot)) this.next(world)
      else if (this.isThere && this.until > 0 && now >= this.until) {
        this.until = 0
        this.next(world)
      } else if (
        this.want === 'think' &&
        this.doing === 'think' &&
        this.where === 'chair' &&
        this.isThere &&
        world.motion > 0 &&
        now - this.thinkSince > PACE_AFTER_MS
      ) {
        this.goTo(world, 'point', { ...world.floorPoint(this.random, this.goal, 1.6), yaw: this.yaw }, 0, 'pace', seconds(this.random, 2.5, 4))
      }
    }
    this.move(dt, world)
    this.show(dt, t, world)
  }

  /** Its pet was taken off (called, sent after a ball, gone home): it finds something else to do. */
  stopPetting(world: World): void {
    if (this.isPetting) this.next(world)
  }

  /**
   * Nudged aside by the guests it was about to walk into (all of this frame's
   * pushes, summed), where the floor allows. Held back at most half a step:
   * what would push it back further moves it aside instead, away from the
   * others (to its right when they are straight ahead), less and less as it
   * nears the point it walks to. Pushed straight back as hard as it walks,
   * two who meet head on, or close in on the same point from either side of
   * it (the step inside the door), would stand face to face for good.
   */
  nudge(dx: number, dz: number, dt: number, nav: NavGrid): void {
    const ahead = this.path[0]
    if (ahead !== undefined) {
      const ax = ahead.x - this.x
      const az = ahead.z - this.z
      const distance = Math.hypot(ax, az)
      const most = 0.5 * this.speed * dt
      const along = distance > 1e-4 ? (dx * ax + dz * az) / distance : 0
      if (along < -most) {
        const ux = ax / distance
        const uz = az / distance
        const sx = dx - along * ux
        const sz = dz - along * uz
        const side = Math.hypot(sx, sz)
        const aside = (-along - most) * Math.min(1, distance / NEAR)
        const ox = side < 1e-6 ? -uz : sx / side
        const oz = side < 1e-6 ? ux : sz / side
        dx = sx - most * ux + ox * aside
        dz = sz - most * uz + oz * aside
      }
    }
    const next = { x: this.x + dx, z: this.z + dz }
    if (nav.isFree(next)) {
      this.x = next.x
      this.z = next.z
    }
  }

  /** The way is to be found again: the furniture moved. */
  reroute(world: World): void {
    if (this.path.length === 0 || world.motion === 0) return
    const goal = this.path[this.path.length - 1] as Point
    if (this.where === 'door') this.path = this.wayOut(world)
    else if (this.x <= HALF_W) this.path = world.nav.path(this, goal)
  }

  // -------------------------------------------------------------------------
  // Deciding.

  /** Acts on the guest's want, which just changed. */
  private decide(world: World): void {
    const { line } = this
    switch (this.want) {
      case 'ask':
        this.toChair(world, 'beside', 'ask')
        return
      case 'fail':
        this.toChair(world, 'chair', 'fail')
        return
      case 'done':
        if (world.motion > 0) this.stop(world, 'cheer', 2600)
        else this.toChair(world, 'chair', 'cheer')
        return
      case 'seat':
        this.toChair(world, 'chair', 'work')
        return
      case 'shelf':
        this.toStation(world, 'shelf', line.act === 'search' ? 'search' : 'read')
        return
      case 'board':
        this.toStation(world, 'board', 'plan')
        return
      case 'lead':
        this.lead(world)
        return
      case 'think':
        this.thinkSince = world.now
        // Thinking between reads stays at the shelf, between notes at the board.
        if (this.spot !== undefined && (this.spot.kind === 'shelf' || this.spot.kind === 'board')) {
          this.doing = 'think'
          this.stay = 0
          this.until = 0
          return
        }
        this.toChair(world, 'chair', 'think')
        return
      case 'idle':
      case 'await':
        if (world.motion === 0) this.toChair(world, 'chair', 'rest')
        else this.freeTime(world)
        return
    }
  }

  /** What comes after a stay that ended, or a spot that went away. */
  private next(world: World): void {
    switch (this.doing) {
      case 'coffee':
        this.hasCup = true
        this.sips = 2 + Math.floor(this.random() * 2)
        this.freeTime(world)
        return
      case 'cheer':
        world.release(this)
        this.spot = undefined
        this.goTo(world, 'door', { ...OUT_TO, yaw: Math.PI / 2 }, 0, 'exit', 0)
        return
      case 'pace':
        this.toChair(world, 'chair', 'think')
        this.thinkSince = world.now
        return
      case 'sip':
      case 'rest':
        if (this.hasCup) {
          this.sips -= 1
          if (this.sips <= 0) this.hasCup = false
        }
        this.freeTime(world)
        return
      case 'browse':
      case 'pet':
      case 'stroll':
      case 'watch':
        if (this.want === 'idle' || this.want === 'await') this.freeTime(world)
        else this.decide(world)
        return
      default:
        this.decide(world)
    }
  }

  /** At rest: coffee first, then the café. */
  private freeTime(world: World): void {
    if (this.want !== 'idle' && this.want !== 'await') {
      this.decide(world)
      return
    }
    if (!this.hasCup && !this.isPlacing) {
      const counter = world.claim(this, ['counter'])
      if (counter !== undefined) {
        this.goTo(world, 'spot', counter, 0, 'coffee', 2400, counter)
        return
      }
      this.hasCup = true
      this.sips = 2
    }
    if (this.want === 'await') {
      // The main loop waiting on its agents sips at the head of the table, and looks in on them now and then.
      const crew = world.crewChairs(this)
      const crewChair = crew[Math.floor(this.random() * crew.length)]
      if (this.doing === 'rest' && this.where === 'chair' && crewChair !== undefined) {
        this.goTo(world, 'beside', { ...besideChair(crewChair), yaw: crewChair.yaw }, 0, 'watch', seconds(this.random, 5, 8))
      } else {
        this.toChair(world, 'chair', 'rest', seconds(this.random, 12, 20))
      }
      return
    }
    const pastime = pickPastime(this.random(), (option: Pastime) => {
      if (option === 'lounge') return world.hasFree(LOUNGES)
      if (option === 'browse') return world.hasFree(['shelf'])
      if (option === 'pet') return world.petSpot(this) !== undefined
      return true
    })
    switch (pastime) {
      case 'lounge': {
        const spot = world.claim(this, LOUNGES)
        if (spot !== undefined) {
          this.goTo(world, 'spot', spot, spot.sit, 'sip', seconds(this.random, 16, 32), spot)
          return
        }
        break
      }
      case 'browse': {
        const spot = world.claim(this, ['shelf'])
        if (spot !== undefined) {
          this.goTo(world, 'spot', spot, 0, 'browse', seconds(this.random, 7, 12), spot)
          return
        }
        break
      }
      case 'pet': {
        const place = world.petSpot(this)
        if (place !== undefined) {
          this.goTo(world, 'point', place, 0, 'pet', seconds(this.random, 5, 8))
          return
        }
        break
      }
      case 'gaze':
      case 'stroll': {
        const point = world.floorPoint(this.random)
        this.goTo(world, 'point', { ...point, yaw: world.cameraYaw(point.x, point.z) + (this.random() - 0.5) * 2 }, 0, 'stroll', seconds(this.random, 3, 6))
        return
      }
      case 'seat':
        break
    }
    this.toChair(world, 'chair', 'rest', seconds(this.random, 14, 24))
  }

  /** Delegating: among its agents, looking over their shoulders; at its own seat, beckoning, while none has come. */
  private lead(world: World): void {
    const crew = world.crewChairs(this)
    const chair = crew[Math.floor(this.random() * crew.length)]
    if (chair !== undefined && world.motion > 0) {
      this.goTo(world, 'beside', { ...besideChair(chair), yaw: chair.yaw }, 0, 'watch', seconds(this.random, 6, 10))
      return
    }
    this.toChair(world, 'beside', 'lead', 3000)
  }

  private toStation(world: World, kind: 'shelf' | 'board', doing: Doing): void {
    if (this.spot?.kind === kind) {
      this.doing = doing
      this.stay = 0
      this.until = 0
      return
    }
    const spot = world.claim(this, [kind])
    if (spot === undefined) {
      this.toChair(world, 'chair', doing)
      return
    }
    this.goTo(world, 'spot', spot, 0, doing, 0, spot)
  }

  private toChair(world: World, where: 'chair' | 'beside', doing: Doing, stay = 0): void {
    const chair = world.chairOf(this)
    if (chair === undefined) {
      this.stop(world, doing, stay)
      return
    }
    if (where === 'chair') this.goTo(world, 'chair', chair, CHAIR_H, doing, stay)
    else this.goTo(world, 'beside', { ...besideChair(chair), yaw: chair.yaw }, 0, doing, stay)
  }

  /** Stays where it is, doing this. */
  private stop(world: World, doing: Doing, stay: number): void {
    this.path = []
    this.doing = doing
    this.stay = stay
    this.isThere = true
    this.until = stay > 0 ? world.now + stay : 0
    if (this.goal.sit > 0 && Math.hypot(this.goal.x - this.x, this.goal.z - this.z) > 0.05) this.goal = { ...this.goal, sit: 0 }
  }

  private goTo(world: World, where: Where, place: Place, sit: number, doing: Doing, stay: number, spot?: Spot): void {
    if (spot !== this.spot) {
      if (this.spot !== undefined) world.release(this)
      this.spot = spot
      // Released along with the old one: taken again.
      if (spot !== undefined) world.claim(this, [spot.kind], spot)
    }
    this.where = where
    this.goal = { x: place.x, z: place.z, yaw: place.yaw, sit }
    this.doing = doing
    this.stay = stay
    this.until = 0
    this.lingerUntil = 0
    this.isThere = false
    if (world.motion === 0 || this.isPlacing) {
      if (where === 'door') {
        this.isGone = true
        return
      }
      this.x = place.x
      this.z = place.z
      this.path = []
      this.reach(world)
      return
    }
    if (where === 'door') {
      this.path = this.wayOut(world)
      return
    }
    if (Math.hypot(place.x - this.x, place.z - this.z) < 0.05) {
      this.path = []
      this.reach(world)
      return
    }
    this.path = this.x > HALF_W - 0.05 ? [IN_STEP, ...world.nav.path(IN_STEP, place)] : world.nav.path(this, place)
  }

  /** The way out: to the step inside the door, then through it; straight through from the doorway or past it, never back in. */
  private wayOut(world: World): Point[] {
    const isInDoorway = this.x >= DOOR.inside.x - 0.05 && Math.abs(this.z - DOOR.z) < DOOR.width / 2
    return this.x > HALF_W || isInDoorway ? [OUT_TO] : [...world.nav.path(this, OUT_STEP), OUT_TO]
  }

  private reach(world: World): void {
    this.isThere = true
    this.x = this.goal.x
    this.z = this.goal.z
    this.until = this.stay > 0 ? world.now + this.stay : 0
    const isStation = this.spot?.kind === 'shelf' || this.spot?.kind === 'board'
    this.lingerUntil = isStation && this.want !== 'idle' && this.want !== 'await' ? world.now + LINGER_MS : 0
  }

  // -------------------------------------------------------------------------
  // Moving and showing.

  private move(dt: number, world: World): void {
    let facing: number | undefined
    if (this.path.length > 0) {
      let step = this.speed * dt
      while (step > 0 && this.path.length > 0) {
        const next = this.path[0] as Point
        const dx = next.x - this.x
        const dz = next.z - this.z
        const distance = Math.hypot(dx, dz)
        if (distance > 1e-4) facing = Math.atan2(dx, dz)
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
      if (this.path.length === 0) this.reach(world)
    }

    // Coming in at the door, going out of it.
    if (this.where === 'door' && this.isThere) {
      this.body.presence = Math.max(0, this.body.presence - dt * 3)
      if (this.body.presence <= 0) this.isGone = true
    } else if (this.body.presence < 1) {
      this.body.presence = Math.min(1, this.body.presence + dt * 3)
    }

    if (facing === undefined && this.isThere) {
      facing = this.doing === 'ask' || this.doing === 'cheer' ? world.cameraYaw(this.x, this.z) : this.goal.yaw
    }
    if (facing !== undefined) {
      let turn = facing - this.yaw
      turn = Math.atan2(Math.sin(turn), Math.cos(turn))
      this.yaw += world.motion > 0 ? turn * (1 - Math.exp(-dt * TURN)) : turn
    }
  }

  private show(dt: number, t: number, world: World): void {
    const isSeated = this.isThere && this.goal.sit > 0
    let pose: Pose = 'stand'
    let held: Held = 'none'
    if (!this.isThere) {
      pose = 'walk'
      if (this.hasCup) held = 'cup'
    } else {
      switch (this.doing) {
        case 'work':
          pose = 'type'
          break
        case 'think':
        case 'pace':
          pose = 'think'
          break
        case 'read':
        case 'browse':
          pose = 'read'
          held = 'book'
          break
        case 'search':
          pose = 'search'
          held = 'lens'
          break
        case 'plan':
          pose = this.where === 'spot' ? 'board' : 'type'
          held = this.where === 'spot' ? 'note' : 'none'
          break
        case 'ask':
          pose = 'ask'
          break
        case 'fail':
          pose = 'slump'
          break
        case 'cheer':
          pose = 'cheer'
          break
        case 'exit':
          pose = 'walk'
          break
        case 'lead':
          pose = 'beckon'
          break
        case 'watch':
          pose = 'watch'
          break
        case 'coffee':
          pose = 'look'
          break
        case 'pet':
          pose = 'pet'
          break
        case 'sip':
        case 'rest':
        case 'stroll':
          pose = this.hasCup ? 'sip' : this.doing === 'rest' && isSeated ? 'rest' : 'look'
          held = this.hasCup ? 'cup' : 'none'
          break
      }
    }
    this.body.setPose(pose, isSeated, this.goal.sit)
    this.body.setHeld(held)
    this.body.setBubble(this.bubbleName())

    // The laptop stays on the table, shut while its guest is away.
    const isAtTable = this.isThere && (this.where === 'chair' || (this.where === 'beside' && this.doing !== 'watch'))
    let screen: Screen = 'off'
    if (this.isLeaving || this.doing === 'cheer') screen = 'none'
    else if (isAtTable && this.doing === 'fail') screen = 'error'
    else if (isAtTable && (this.doing === 'work' || this.doing === 'think' || this.doing === 'ask' || this.doing === 'lead' || this.doing === 'plan')) screen = 'on'
    this.body.placeLaptop(screen, screen === 'none' ? undefined : world.chairOf(this))

    this.body.update(dt, t, world.motion)
    this.body.root.position.set(this.x, 0, this.z)
    this.body.root.rotation.y = this.yaw
  }

  private bubbleName(): BubbleName {
    const { phase, act, tool } = this.line
    switch (phase) {
      case 'ask':
        return tool === 'AskUserQuestion' ? 'query' : 'ask'
      case 'done':
        return 'done'
      case 'fail':
        return 'fail'
      case 'think':
        return 'think0'
      case 'idle':
        return 'none'
      case 'work':
        return ICON_OF[act] === 'none' ? 'gear' : ICON_OF[act]
    }
  }
}
