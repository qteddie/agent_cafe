// Where everything in the 3D café stands, in metres of its floor: x runs
// from the left wall to the right one, z from the back wall (the counter)
// to the open front where the camera is, y is up.
//
// A session's table stands in one of nine slots, three by three, as far from
// the other tables as a free slot allows. The main loop sits at the head of
// it; its subagents along both sides, in a checkerboard (one facing the
// camera, the next across the table and one further along), so nobody sits
// elbow to elbow while there is room. A table grows at its far end as
// subagents come, so a seat once taken never moves.
//
// Pure: no three.js here, so the tests can walk the room too.

export const ROOM_W = 22.4
export const ROOM_D = 13.6
export const HALF_W = ROOM_W / 2
export const HALF_D = ROOM_D / 2
export const WALL_H = 3

export const SLOT_COLUMNS = 3
export const SLOT_ROWS = 3
export const SLOTS = SLOT_COLUMNS * SLOT_ROWS
/** The most seats one table has: the head, and five along each side. */
export const TABLE_SEATS = 11
/** Chairs along each side of the longest table. */
export const SIDE_COLUMNS = 5

export const TABLE_H = 0.5
/** A chair's seat, about the length of a leg. */
export const CHAIR_H = 0.27

const SLOT_W = 5.8
const SLOT_D = 3.4
const SLOTS_LEFT = -HALF_W + 2.4
const SLOTS_TOP = -HALF_D + 2.6
/** From one side chair to the next. */
const PITCH = 0.9
const TABLE_DEPTH = 0.9
/** From the table's middle line to a side chair. */
const CHAIR_OUT = 0.8
/** From the slot's left edge to the head chair, and to the table's head end. */
const HEAD_X = 0.5
const TABLE_X = 0.85

/** An area of floor, axis-aligned. */
export type Rect = { x0: number; z0: number; x1: number; z1: number }
export type Point = { x: number; z: number }
/** A place to be, and which way to face there: `yaw` is atan2 of the facing direction's x and z. */
export type Place = Point & { yaw: number }

export const FACE_BACK = Math.PI
export const FACE_FRONT = 0
export const FACE_RIGHT = Math.PI / 2
export const FACE_LEFT = -Math.PI / 2

/** Which slot is liked best, other things equal: the middle of the room, then the middle row and column, then the corners. */
export const SLOT_ORDER: readonly number[] = [4, 1, 7, 3, 5, 0, 2, 6, 8]

export function slotRect(slot: number): Rect {
  const column = slot % SLOT_COLUMNS
  const row = Math.floor(slot / SLOT_COLUMNS)
  const x0 = SLOTS_LEFT + column * SLOT_W
  const z0 = SLOTS_TOP + row * SLOT_D
  return { x0, z0, x1: x0 + SLOT_W, z1: z0 + SLOT_D }
}

export function slotCenter(slot: number): Point {
  const rect = slotRect(slot)
  return { x: (rect.x0 + rect.x1) / 2, z: (rect.z0 + rect.z1) / 2 }
}

/**
 * The free slot for a new table: the one furthest from the tables already
 * standing, so the café fills evenly; the best liked of those that are as far.
 */
export function pickSlot(taken: readonly number[]): number | undefined {
  let best: number | undefined
  let bestDistance = -1
  for (const slot of SLOT_ORDER) {
    if (taken.includes(slot)) continue
    const here = slotCenter(slot)
    let nearest = Infinity
    for (const other of taken) {
      const there = slotCenter(other)
      nearest = Math.min(nearest, Math.hypot(here.x - there.x, here.z - there.z))
    }
    if (nearest > bestDistance + 1e-6) {
      best = slot
      bestDistance = nearest
    }
  }
  return best
}

/**
 * Where side chair `side` (0 for the first after the head) stands: its column
 * along the table, and whether across it, facing the camera. The first round
 * takes every column once, crossing the table each time; the second fills
 * the chairs left between.
 */
export function sideSeat(side: number): { column: number; isFar: boolean } {
  const round = Math.floor(side / SIDE_COLUMNS)
  const column = side % SIDE_COLUMNS
  return { column, isFar: (column + round) % 2 === 0 }
}

/** The column of chair `index` (0 is the head, at no column). */
export function columnOfChair(index: number): number {
  return index <= 0 ? -1 : sideSeat(index - 1).column
}

/** Chairs along each side of a table whose chairs `indices` are taken: as many as the furthest of them needs. */
export function columnsOf(indices: Iterable<number>): number {
  let columns = 1
  for (const index of indices) columns = Math.max(columns, columnOfChair(index) + 1)
  return Math.min(SIDE_COLUMNS, columns)
}

/** Chairs along each side of a table that has `seats` in all, the head among them, taken in order. */
export function columnsFor(seats: number): number {
  return columnsOf([...Array(Math.max(0, Math.min(TABLE_SEATS, seats))).keys()])
}

/** The table top, for `columns` chairs along each side. */
export function tableRect(slot: number, columns: number): Rect {
  const { x0 } = slotRect(slot)
  const { z } = slotCenter(slot)
  return { x0: x0 + TABLE_X, z0: z - TABLE_DEPTH / 2, x1: x0 + TABLE_X + columns * PITCH + 0.3, z1: z + TABLE_DEPTH / 2 }
}

/**
 * Chair `index` of a slot's table: 0 is the head, facing along the table;
 * then the sides, in the checkerboard of `sideSeat`.
 */
export function chairOf(slot: number, index: number): Place {
  const { x0 } = slotRect(slot)
  const { z } = slotCenter(slot)
  if (index <= 0) return { x: x0 + HEAD_X, z, yaw: FACE_RIGHT }
  const { column, isFar } = sideSeat(index - 1)
  return {
    x: x0 + TABLE_X + 0.15 + PITCH / 2 + column * PITCH,
    z: z + (isFar ? -CHAIR_OUT : CHAIR_OUT),
    yaw: isFar ? FACE_FRONT : FACE_BACK,
  }
}

/** Where one stands who gets up from a chair: a step back from it, away from the table. */
export function besideChair(chair: Place): Point {
  return { x: chair.x - Math.sin(chair.yaw) * 0.42, z: chair.z - Math.cos(chair.yaw) * 0.42 }
}

/** The rug under a table and its chairs. */
export function rugRect(slot: number, columns: number): Rect {
  const table = tableRect(slot, columns)
  const { x0 } = slotRect(slot)
  return { x0: x0 + 0.12, z0: table.z0 - 0.8, x1: table.x1 + 0.12, z1: table.z1 + 0.8 }
}

// ---------------------------------------------------------------------------
// The furniture that never moves, and the places in the room to go to.

export type SpotKind = 'counter' | 'shelf' | 'board' | 'armchair' | 'sofa' | 'bar' | 'decor'

/** A place a guest may take: `sit` is the height of its seat, 0 to stand. */
export type Spot = Place & { id: string; kind: SpotKind; sit: number; slot: number }

export const COUNTER: Rect = { x0: -4.6, z0: -HALF_D, x1: 6.4, z1: -HALF_D + 0.8 }
export const COUNTER_H = 1.0
export const SHELF: Rect = { x0: -HALF_W, z0: -6.4, x1: -HALF_W + 0.45, z1: -3.8 }
export const SHELF_H = 2.3
/** The corkboard on the left wall, and the planning it is for: z from and to. */
export const BOARD_Z: readonly [number, number] = [-3.1, -1.7]
export const ARMCHAIR: Rect = { x0: -HALF_W, z0: -0.85, x1: -HALF_W + 0.8, z1: -0.05 }
export const SIDE_TABLE: Rect = { x0: -HALF_W, z0: 0.1, x1: -HALF_W + 0.5, z1: 0.6 }
export const SOFA: Rect = { x0: -HALF_W, z0: 1.5, x1: -HALF_W + 0.85, z1: 3.9 }
export const COFFEE_TABLE: Rect = { x0: -HALF_W + 1.75, z0: 2.25, x1: -HALF_W + 2.3, z1: 3.15 }
/** The window bar along the right wall, and its windows: z from and to. */
export const BAR: Rect = { x0: HALF_W - 0.45, z0: -5.8, x1: HALF_W, z1: 0.6 }
export const BAR_H = 0.95
export const WINDOWS: readonly (readonly [number, number])[] = [
  [-5.6, -3.3],
  [-2.1, 0.3],
]
export const PLANTS: readonly Point[] = [
  { x: -HALF_W + 0.4, z: HALF_D - 0.4 },
  { x: HALF_W - 0.4, z: -HALF_D + 0.4 },
  { x: HALF_W - 0.4, z: 2.4 },
  { x: -HALF_W + 0.4, z: -3.35 },
]

/** The door, in the right wall near the front: its middle, its width, and a step in and out of it. */
export const DOOR = {
  z: 4.4,
  width: 1.1,
  inside: { x: HALF_W - 0.55, z: 4.4 },
  outside: { x: HALF_W + 1.5, z: 4.4 },
} as const

/** Where the cat likes to sleep. */
export const CAT_BEDS: readonly Point[] = [
  { x: -HALF_W + 1.45, z: 4.7 },
  { x: HALF_W - 1.5, z: 1.6 },
  { x: -4.9, z: -5.55 },
  { x: -HALF_W + 1.2, z: -3.35 },
  { x: 0.3, z: 6.25 },
  { x: HALF_W - 1.4, z: -6.0 },
]

export const SPOTS: readonly Spot[] = [
  ...[-0.8, 1.2, 3.1, 4.9].map((x, index): Spot => ({ id: `counter${index}`, kind: 'counter', x, z: -HALF_D + 1.25, yaw: FACE_BACK, sit: 0, slot: -1 })),
  ...[-5.85, -5.1, -4.35].map((z, index): Spot => ({ id: `shelf${index}`, kind: 'shelf', x: -HALF_W + 0.95, z, yaw: FACE_LEFT, sit: 0, slot: -1 })),
  ...[-2.75, -2.05].map((z, index): Spot => ({ id: `board${index}`, kind: 'board', x: -HALF_W + 0.6, z, yaw: FACE_LEFT, sit: 0, slot: -1 })),
  { id: 'armchair', kind: 'armchair', x: -HALF_W + 0.42, z: -0.45, yaw: FACE_RIGHT, sit: 0.3, slot: -1 },
  ...[1.95, 2.7, 3.45].map((z, index): Spot => ({ id: `sofa${index}`, kind: 'sofa', x: -HALF_W + 0.5, z, yaw: FACE_RIGHT, sit: 0.3, slot: -1 })),
  ...[-5.0, -3.9, -1.55, -0.35].map((z, index): Spot => ({ id: `bar${index}`, kind: 'bar', x: HALF_W - 0.85, z, yaw: FACE_RIGHT, sit: 0.58, slot: -1 })),
]

/** The furniture no one walks through. */
export const FIXED_OBSTACLES: readonly Rect[] = [
  COUNTER,
  SHELF,
  ARMCHAIR,
  SIDE_TABLE,
  SOFA,
  COFFEE_TABLE,
  BAR,
  ...PLANTS.map(plant => ({ x0: plant.x - 0.28, z0: plant.z - 0.28, x1: plant.x + 0.28, z1: plant.z + 0.28 })),
]

/** The small round table a slot has while no session sits there: its middle and radius. */
export function decorTable(slot: number): Point & { r: number } {
  const { x, z } = slotCenter(slot)
  return { x, z, r: 0.42 }
}

/** The two chairs at a slot's small table, for a guest who wants to sit down a while. */
export function decorSpots(slot: number): Spot[] {
  const { x, z } = decorTable(slot)
  return [
    { id: `decor${slot}a`, kind: 'decor', x: x - 0.78, z, yaw: FACE_RIGHT, sit: CHAIR_H, slot },
    { id: `decor${slot}b`, kind: 'decor', x: x + 0.78, z, yaw: FACE_LEFT, sit: CHAIR_H, slot },
  ]
}

/** Half a chair's width and depth: its seat is 0.42 square, the rail along its back 0.44 wide. */
export const CHAIR_HALF = 0.22

/** The chairs standing in a slot: its table's, for `columns` chairs along each side; the small table's two while it is free. */
export function chairsOf(slot: number, columns: number): Place[] {
  if (columns <= 0) return decorSpots(slot)
  return [...Array(TABLE_SEATS).keys()].filter(seat => columnOfChair(seat) < columns).map(seat => chairOf(slot, seat))
}

/** The floor a chair stands on. */
export function chairRect(chair: Point): Rect {
  return { x0: chair.x - CHAIR_HALF, z0: chair.z - CHAIR_HALF, x1: chair.x + CHAIR_HALF, z1: chair.z + CHAIR_HALF }
}

/** The walkable floor: the room less a margin along its walls. */
export const FLOOR: Rect = { x0: -HALF_W + 0.25, z0: -HALF_D + 0.25, x1: HALF_W - 0.25, z1: HALF_D - 0.3 }

/** True when the point is inside the rectangle grown by `pad` on every side. */
export function isInside(point: Point, rect: Rect, pad = 0): boolean {
  return point.x >= rect.x0 - pad && point.x <= rect.x1 + pad && point.z >= rect.z0 - pad && point.z <= rect.z1 + pad
}

/** The smallest rectangle around them all. */
export function around(rects: readonly Rect[]): Rect | undefined {
  if (rects.length === 0) return undefined
  return rects.reduce((all, rect) => ({
    x0: Math.min(all.x0, rect.x0),
    z0: Math.min(all.z0, rect.z0),
    x1: Math.max(all.x1, rect.x1),
    z1: Math.max(all.z1, rect.z1),
  }))
}
