// A guest's body: a little voxel person built from its figure (figure.ts: who
// it is, rolled from its agent's key), and the poses it takes. A pose names
// where each joint should be; the joints ease there, so one pose melts into
// the next.
//
// The look is not the café picture's: the pixel-art café in the pane keeps its
// own, simpler looks (hooks/sprites.ts lookOf) on purpose, so the same agent
// looks different there.

import * as THREE from 'three'

import { hash } from '../../hooks/sprites'
import type { Figure } from './figure'
import { HIP_X, armParts, headParts, legParts, seatOf, torsoParts } from './figure'
import type { BubbleName, Part } from './kit'
import { PAINT, UNIT_BOX, bubbleTexture, glow, partsGeometry } from './kit'
import { TABLE_H } from './layout'

/** The length of a leg, and so the height of the hips. */
export const LEG = 0.28

export type Pose =
  | 'stand'
  | 'look'
  | 'walk'
  | 'type'
  | 'think'
  | 'read'
  | 'search'
  | 'board'
  | 'ask'
  | 'sip'
  | 'rest'
  | 'cheer'
  | 'slump'
  | 'beckon'
  | 'watch'
  | 'pet'

export type Held = 'none' | 'cup' | 'book' | 'lens' | 'note'
export type Screen = 'none' | 'on' | 'off' | 'error'

type Joints = {
  legL: number
  legR: number
  armLx: number
  armLz: number
  armRx: number
  armRz: number
  headX: number
  headY: number
  headZ: number
  lean: number
  lift: number
  turn: number
}

function rest(): Joints {
  return { legL: 0, legR: 0, armLx: 0, armLz: 0, armRx: 0, armRz: 0, headX: 0, headY: 0, headZ: 0, lean: 0, lift: 0, turn: 0 }
}

const COVERS = ['#3f6fb0', '#a8452f', '#3d8f5a', '#7b5aa6', '#c48a2a']
const SITTING = -Math.PI / 2

function part(color: string, w: number, h: number, d: number, x: number, y: number, z: number): Part {
  return { color, w, h, d, x, y, z }
}

// Shared by every guest: what a hand may hold, the laptop, and the ring under a guest picked out.
const CUP = partsGeometry([
  part('#fbf7ee', 0.09, 0.1, 0.09, 0, 0.02, 0.05),
  part('#6b4a32', 0.07, 0.01, 0.07, 0, 0.071, 0.05),
  part('#fbf7ee', 0.02, 0.05, 0.04, -0.055, 0.02, 0.05),
])
const LENS = partsGeometry([
  part('#6b4a32', 0.03, 0.1, 0.03, 0, 0, 0.03),
  part('#b9c0c7', 0.15, 0.025, 0.03, 0, 0.175, 0.03),
  part('#b9c0c7', 0.15, 0.025, 0.03, 0, 0.055, 0.03),
  part('#b9c0c7', 0.025, 0.12, 0.03, 0.065, 0.115, 0.03),
  part('#b9c0c7', 0.025, 0.12, 0.03, -0.065, 0.115, 0.03),
  part('#cfe8f5', 0.11, 0.1, 0.01, 0, 0.115, 0.03),
])
const NOTE = partsGeometry([part('#ffd84d', 0.11, 0.11, 0.012, 0, 0.02, 0.06)])
const LAPTOP_BASE = partsGeometry([part('#4a5060', 0.32, 0.022, 0.22, 0, 0.011, 0), part('#2b2320', 0.26, 0.004, 0.12, 0, 0.024, -0.02)])
const LAPTOP_LID = partsGeometry([part('#4a5060', 0.32, 0.21, 0.016, 0, 0.105, 0), part('#cfd8ea', 0.05, 0.05, 0.004, 0, 0.12, 0.01)])
const RING = new THREE.RingGeometry(0.3, 0.38, 28)
const RING_INK = new THREE.MeshBasicMaterial({ color: '#d97757', transparent: true, opacity: 0.9, depthWrite: false })

function shape(geometry: THREE.BufferGeometry): THREE.Mesh {
  const mesh = new THREE.Mesh(geometry, PAINT)
  mesh.castShadow = true
  return mesh
}

/** Where joints go in a pose at time `t`, for a guest whose own rhythm is offset by `phase`. */
function poseJoints(pose: Pose, isSeated: boolean, t: number, phase: number, motion: number): Joints {
  const joints = rest()
  if (isSeated) {
    joints.legL = SITTING
    joints.legR = SITTING
    joints.armLx = -0.35
    joints.armRx = -0.35
  }
  const wave = (speed: number, shift = 0): number => Math.sin(t * speed + phase + shift) * motion
  switch (pose) {
    case 'stand':
      break
    case 'look':
      joints.headY = 0.35 * wave(0.45)
      joints.headX = 0.05
      break
    case 'walk': {
      const swing = Math.sin(t * 9 + phase)
      joints.legL = 0.6 * swing
      joints.legR = -0.6 * swing
      joints.armLx = -0.5 * swing
      joints.armRx = 0.5 * swing
      joints.lift = Math.abs(Math.cos(t * 9 + phase)) * 0.035
      break
    }
    case 'type':
      joints.armLx = -1.2 + 0.08 * wave(16)
      joints.armRx = -1.2 + 0.08 * wave(16, Math.PI)
      joints.armLz = -0.2
      joints.armRz = 0.2
      joints.headX = 0.2
      joints.headY = 0.06 * wave(0.7)
      break
    case 'think':
      joints.armLx = isSeated ? -0.55 : -0.15
      joints.armLz = -0.12
      joints.armRx = -2.3
      joints.armRz = 0.6
      joints.headX = -0.06
      joints.headZ = 0.14 + 0.05 * wave(1.4)
      joints.headY = 0.18 * wave(0.6)
      break
    case 'read':
      joints.armLx = -1.05
      joints.armLz = -0.42
      joints.armRx = -1.05
      joints.armRz = 0.42
      joints.headX = 0.42
      joints.headY = 0.05 * wave(0.5)
      break
    case 'search':
      joints.armLx = -0.2
      joints.armRx = -1.25 + 0.12 * wave(2.2)
      joints.armRz = 0.18
      joints.headX = 0.1
      joints.turn = 0.32 * wave(1.1)
      joints.headY = 0.22 * wave(1.1)
      break
    case 'board':
      joints.armLx = -0.15
      joints.armRx = -2.15 + 0.14 * wave(7)
      joints.armRz = 0.12 * Math.cos(t * 7 + phase) * motion
      joints.headX = -0.2
      break
    case 'ask':
      joints.armLx = isSeated ? -0.35 : 0
      joints.armRz = -2.75 + 0.32 * wave(9)
      joints.lift = 0.045 * Math.abs(wave(4.5))
      joints.headZ = 0.1 * wave(4.5)
      break
    case 'sip': {
      // A sip now and then: the cup up to the mouth, the head back.
      const cycle = (t + phase) % 5.5
      const isSipping = motion > 0 && cycle < 1.3
      joints.armLx = isSeated ? -0.4 : -0.1
      joints.armRx = isSipping ? -2.05 : -0.95
      joints.armRz = isSipping ? 0.42 : 0.25
      joints.headX = isSipping ? -0.28 : 0.04
      joints.headY = isSipping ? 0 : 0.28 * wave(0.4)
      break
    }
    case 'rest':
      joints.armLx = -0.95
      joints.armRx = -0.95
      joints.armLz = -0.15
      joints.armRz = 0.15
      joints.headX = 0.1
      joints.headY = 0.32 * wave(0.35)
      joints.headZ = 0.06 * wave(0.25)
      break
    case 'cheer':
      joints.armLz = 2.55 + 0.18 * wave(11)
      joints.armRz = -2.55 - 0.18 * wave(11)
      joints.lift = 0.2 * Math.abs(wave(7))
      joints.headX = -0.15
      break
    case 'slump':
      joints.lean = 0.42
      joints.headX = 0.55
      joints.armLx = -1.45
      joints.armRx = -1.45
      joints.armLz = -0.3
      joints.armRz = 0.3
      break
    case 'beckon':
      joints.armLx = -0.15
      joints.armRx = -1.35 + 0.38 * wave(5)
      joints.armRz = 0.1
      joints.headY = 0.22 * wave(0.8)
      break
    case 'watch':
      joints.armLx = 0.38
      joints.armRx = 0.38
      joints.lean = 0.14
      joints.headX = 0.32 + 0.09 * wave(2)
      break
    case 'pet':
      // Bent at the hips down to the pet, the feet on the floor.
      joints.lean = 0.6
      joints.armLx = -0.3
      joints.armRx = -0.85 + 0.25 * wave(5)
      joints.armRz = 0.12
      joints.headX = 0.4
      break
  }
  return joints
}

/** One guest's body, its props, its bubble and the ring under it. */
export class Body {
  readonly root = new THREE.Group()
  private readonly body = new THREE.Group()
  private readonly upper = new THREE.Group()
  private readonly legL = new THREE.Group()
  private readonly legR = new THREE.Group()
  private readonly armL = new THREE.Group()
  private readonly armR = new THREE.Group()
  private readonly head = new THREE.Group()
  private readonly cup: THREE.Mesh
  private readonly lens: THREE.Mesh
  private readonly note: THREE.Mesh
  private readonly book: THREE.Mesh
  /** The geometries this guest alone has, given back when it leaves. */
  private readonly owned: THREE.BufferGeometry[]
  private readonly ring: THREE.Mesh
  private readonly bubble: THREE.Sprite
  private readonly bubbleMaterial: THREE.SpriteMaterial
  /** The laptop stands on the table, not in the guest's hands: placed in the room by `placeLaptop`. */
  readonly laptop = new THREE.Group()
  private readonly lid = new THREE.Group()
  private readonly screen: THREE.Mesh
  private readonly joints = rest()
  private readonly phase: number
  /** How big it is: the body group's scale. */
  private readonly scale: number
  /** The top of its head (or hat) standing, from the floor. */
  private readonly height: number
  /** Seated, how far forward of the chair's middle its hips are. */
  private readonly seat: number
  private pose: Pose = 'stand'
  private isSeated = false
  private seatLift = 0
  private bubbleName: BubbleName = 'none'
  private shown: BubbleName = 'none'
  private screenState: Screen = 'none'
  /** How far it has grown in: 0 outside the door, 1 in the room. */
  presence = 1

  constructor(figure: Figure, seed: string) {
    const code = hash(seed)
    this.phase = (code % 628) / 100

    // Each limb is one mesh, its parts painted in: a guest is six draws.
    const leg = partsGeometry(legParts(figure))
    const arm = partsGeometry(armParts(figure))
    const torso = partsGeometry(torsoParts(figure))
    const face = headParts(figure)
    const head = partsGeometry(face.parts)
    this.owned = [leg, arm, torso, head]
    this.scale = figure.scale
    this.height = figure.scale * (LEG + figure.torso + face.top)
    this.seat = seatOf(figure)
    const shoulder = figure.torso - 0.02
    const reach = figure.width / 2 + 0.055

    // Legs, from the hips down.
    this.legL.position.set(HIP_X, LEG, 0)
    this.legR.position.set(-HIP_X, LEG, 0)
    this.legL.add(shape(leg))
    this.legR.add(shape(leg))
    this.body.add(this.legL, this.legR)

    // The upper body turns about the hips.
    this.upper.position.set(0, LEG, 0)
    this.upper.add(shape(torso))
    this.armL.position.set(reach, shoulder, 0)
    this.armR.position.set(-reach, shoulder, 0)
    this.armL.add(shape(arm))
    this.armR.add(shape(arm))
    this.upper.add(this.armL, this.armR)
    this.head.position.set(0, figure.torso, 0)
    this.head.add(shape(head))
    this.upper.add(this.head)

    // What a hand may hold: a cup, a magnifier, a note; a book is held in both.
    this.cup = shape(CUP)
    this.lens = shape(LENS)
    this.note = shape(NOTE)
    for (const prop of [this.cup, this.lens, this.note]) {
      prop.position.y = -0.27
      this.armR.add(prop)
    }
    // Open toward its reader: the pages face the guest, the cover the room.
    this.book = shape(
      partsGeometry([
        part(COVERS[(code >>> 5) % COVERS.length] ?? '#3f6fb0', 0.3, 0.22, 0.025, 0, 0, 0),
        part('#fbf7ee', 0.28, 0.2, 0.02, 0, 0, -0.015),
        part('#d9cfb8', 0.012, 0.206, 0.025, 0, 0, -0.016),
      ]),
    )
    this.owned.push(this.book.geometry)
    this.book.position.set(0, 0.2, 0.3)
    this.book.rotation.x = 0.75
    this.upper.add(this.book)

    this.body.add(this.upper)
    this.body.scale.setScalar(this.scale)
    this.root.add(this.body)

    // The ring that marks the guest picked out on the list.
    this.ring = new THREE.Mesh(RING, RING_INK)
    this.ring.rotation.x = -Math.PI / 2
    this.ring.position.y = 0.015
    this.ring.visible = false
    this.root.add(this.ring)

    this.bubbleMaterial = new THREE.SpriteMaterial({ transparent: true, depthWrite: false })
    this.bubble = new THREE.Sprite(this.bubbleMaterial)
    this.bubble.scale.set(0.36, 0.33, 1)
    this.bubble.center.set(0.2, 0)
    this.bubble.visible = false
    this.root.add(this.bubble)

    // The laptop: a base, and a lid that opens toward its guest.
    this.laptop.add(shape(LAPTOP_BASE))
    this.lid.position.set(0, 0.022, 0.11)
    this.lid.add(shape(LAPTOP_LID))
    this.screen = new THREE.Mesh(UNIT_BOX, glow('#cfd8ea'))
    this.screen.scale.set(0.28, 0.17, 0.004)
    this.screen.position.set(0, 0.105, -0.01)
    this.lid.add(this.screen)
    this.laptop.add(this.lid)
    this.laptop.visible = false
    this.setHeld('none')
  }

  setPose(pose: Pose, isSeated: boolean, seatHeight: number): void {
    this.pose = pose
    this.isSeated = isSeated
    this.seatLift = isSeated ? seatHeight - LEG * this.scale + 0.01 : 0
  }

  setHeld(held: Held): void {
    this.cup.visible = held === 'cup'
    this.lens.visible = held === 'lens'
    this.note.visible = held === 'note'
    this.book.visible = held === 'book'
  }

  setBubble(name: BubbleName): void {
    this.bubbleName = name
  }

  setRing(isOn: boolean): void {
    this.ring.visible = isOn
  }

  /** The laptop on the table in front of `chair`, in the state its screen is in; `none` puts it away. */
  placeLaptop(state: Screen, chair?: { x: number; z: number; yaw: number }): void {
    this.laptop.visible = state !== 'none' && chair !== undefined
    if (chair === undefined || state === 'none') return
    const reach = 0.52
    this.laptop.position.set(chair.x + Math.sin(chair.yaw) * reach, TABLE_H, chair.z + Math.cos(chair.yaw) * reach)
    this.laptop.rotation.y = chair.yaw
    if (state === this.screenState) return
    this.screenState = state
    this.screen.material = glow(state === 'error' ? '#e0564b' : state === 'on' ? '#cfd8ea' : '#3a4050')
  }

  /** Moves every joint toward the pose, `dt` seconds on, at time `t`. */
  update(dt: number, t: number, motion: number): void {
    const target = poseJoints(this.pose, this.isSeated, t, this.phase, motion)
    const ease = 1 - Math.exp(-dt * (motion > 0 ? 14 : 60))
    const joints = this.joints
    for (const key of Object.keys(joints) as (keyof Joints)[]) joints[key] += (target[key] - joints[key]) * ease

    this.legL.rotation.x = joints.legL
    this.legR.rotation.x = joints.legR
    this.armL.rotation.set(joints.armLx, 0, joints.armLz)
    this.armR.rotation.set(joints.armRx, 0, joints.armRz)
    this.head.rotation.set(joints.headX, joints.headY, joints.headZ)
    this.upper.rotation.set(joints.lean, joints.turn, 0)
    this.body.position.y = this.seatLift + joints.lift
    // Seated, the hips sit back on the seat, as far back as what it wears allows.
    this.body.position.z = this.isSeated ? this.seat : 0
    // A cup, a magnifier or a note stays upright whatever the arm does.
    this.cup.rotation.x = -joints.armRx - joints.lean
    this.lens.rotation.x = -joints.armRx - 0.4
    this.note.rotation.x = -joints.armRx
    // The lid: open while the guest works, shut while it rests.
    const lidTarget = this.screenState === 'off' ? -Math.PI / 2 + 0.08 : 0.25
    this.lid.rotation.x += (lidTarget - this.lid.rotation.x) * ease

    // The bubble, over the head; thinking dots take turns.
    let name = this.bubbleName
    if (name === 'think0' || name === 'think1' || name === 'think2') {
      name = motion > 0 ? (['think0', 'think1', 'think2'] as const)[Math.floor(t * 2.6) % 3] ?? 'think0' : 'think1'
    }
    if (name !== this.shown) {
      this.shown = name
      const map = bubbleTexture(name)
      this.bubble.visible = map !== undefined
      if (map !== undefined) {
        this.bubbleMaterial.map = map
        this.bubbleMaterial.needsUpdate = true
      }
    }
    const bob = name === 'ask' || name === 'query' ? 0.05 * Math.abs(Math.sin(t * 5 + this.phase)) * motion : 0
    this.bubble.position.set(0, this.body.position.y + this.height + 0.08 + bob, 0)

    const scale = Math.max(0.001, this.presence)
    this.root.scale.setScalar(scale)
  }

  /** How high the top of its head is now. */
  headTop(): number {
    return this.body.position.y + this.height
  }

  dispose(): void {
    this.bubbleMaterial.dispose()
    for (const geometry of this.owned) geometry.dispose()
  }
}
