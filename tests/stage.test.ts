// The 3D café's room and its guests' habits: where everything stands, how a
// guest finds its way, and what an agent's state sends it off to do. The
// drawing itself (three.js, the page) is not tested here.

import { describe, expect, test } from 'claude-code/testing'

import type { Point, Rect } from '../web/cafe3d/layout'
import {
  FIXED_OBSTACLES,
  HALF_D,
  HALF_W,
  SLOTS,
  SLOT_ORDER,
  SPOTS,
  TABLE_SEATS,
  chairOf,
  columnsFor,
  decorSpots,
  isInside,
  rugRect,
  slotRect,
  tableRect,
} from '../web/cafe3d/layout'
import { Intent, LINGER_MS, SETTLE_MS, isUrgent, pickPastime, wantOf } from '../web/cafe3d/mind'
import { CLEARANCE, NavGrid } from '../web/cafe3d/nav'

const ROOM: Rect = { x0: -HALF_W, z0: -HALF_D, x1: HALF_W, z1: HALF_D }

/** The room's floor with its fixed furniture on it, as the café starts. */
function furnished(): NavGrid {
  const nav = new NavGrid(ROOM, 0.2)
  for (const rect of FIXED_OBSTACLES) nav.block(rect)
  return nav
}

describe('the room', () => {
  test('gives out every slot once, the row by the counter first', () => {
    expect([...SLOT_ORDER].sort()).toEqual([...Array(SLOTS).keys()])
    expect(SLOT_ORDER.slice(0, 3).every(slot => slot < 3)).toBe(true)
  })

  test('seats every chair beside its table, on its rug, inside its slot, apart from the others', () => {
    for (let slot = 0; slot < SLOTS; slot += 1) {
      const columns = columnsFor(TABLE_SEATS)
      const table = tableRect(slot, columns)
      const chairs = [...Array(TABLE_SEATS).keys()].map(index => chairOf(slot, index))
      for (const chair of chairs) {
        expect(isInside(chair, table)).toBe(false)
        expect(isInside(chair, rugRect(slot, columns))).toBe(true)
        expect(isInside(chair, slotRect(slot))).toBe(true)
      }
      for (let one = 0; one < chairs.length; one += 1) {
        for (let other = one + 1; other < chairs.length; other += 1) {
          const a = chairs[one] as Point
          const b = chairs[other] as Point
          expect(Math.hypot(a.x - b.x, a.z - b.z)).toBeGreaterThan(0.6)
        }
      }
    }
  })

  test('grows a table at its far end only, so a seat once taken never moves', () => {
    const small = tableRect(4, columnsFor(3))
    const large = tableRect(4, columnsFor(TABLE_SEATS))
    expect(large.x0).toBe(small.x0)
    expect(large.x1).toBeGreaterThan(small.x1)
    // The largest table still ends before the next slot's head chair.
    expect(large.x1 + CLEARANCE).toBeLessThan(chairOf(5, 0).x - 0.25)
  })

  test('counts chairs along each side from the seats a table has, the head among them', () => {
    expect(columnsFor(1)).toBe(1)
    expect(columnsFor(3)).toBe(1)
    expect(columnsFor(4)).toBe(2)
    expect(columnsFor(TABLE_SEATS)).toBe(6)
    expect(columnsFor(99)).toBe(6)
  })

  test('leaves every place to stand at on open floor', () => {
    const nav = furnished()
    for (const spot of SPOTS.filter(each => each.sit === 0)) expect(nav.isFree(spot)).toBe(true)
    // A seat in the sofa or at the window bar is reached by a last step from open floor.
    for (const spot of SPOTS.filter(each => each.sit > 0)) {
      const near = nav.nearestPoint(spot)
      expect(Math.hypot(near.x - spot.x, near.z - spot.z)).toBeLessThan(0.95)
    }
    for (let slot = 0; slot < SLOTS; slot += 1) {
      for (const spot of decorSpots(slot)) expect(isInside(spot, slotRect(slot))).toBe(true)
    }
  })
})

describe('finding the way', () => {
  test('goes round furniture, every step of it clear, to the very point asked', () => {
    const nav = new NavGrid({ x0: 0, z0: 0, x1: 10, z1: 10 }, 0.2)
    nav.block({ x0: 4.5, z0: 0, x1: 5.5, z1: 8 })
    const start = { x: 1, z: 1 }
    const goal = { x: 9, z: 1 }
    const path = nav.path(start, goal)
    expect(path[path.length - 1]).toEqual(goal)
    let from: Point = start
    for (const point of path) {
      expect(nav.isClear(from, point)).toBe(true)
      from = point
    }
    // Round the end of the wall, not through it.
    expect(path.some(point => point.z > 8)).toBe(true)
  })

  test('walks straight where nothing is in the way', () => {
    const nav = new NavGrid({ x0: 0, z0: 0, x1: 10, z1: 10 }, 0.2)
    expect(nav.path({ x: 1, z: 1 }, { x: 8, z: 7 })).toEqual([{ x: 8, z: 7 }])
  })

  test('reaches a seat inside furniture by a last step, and leaves it by a first', () => {
    const nav = new NavGrid({ x0: 0, z0: 0, x1: 10, z1: 10 }, 0.2)
    nav.block({ x0: 4, z0: 4, x1: 6, z1: 6 })
    const seat = { x: 5, z: 5 }
    const there = nav.path({ x: 1, z: 1 }, seat)
    expect(there[there.length - 1]).toEqual(seat)
    expect(nav.isFree(there[there.length - 2] as Point)).toBe(true)
    const back = nav.path(seat, { x: 1, z: 1 })
    expect(nav.isFree(back[0] as Point)).toBe(true)
    expect(back[back.length - 1]).toEqual({ x: 1, z: 1 })
  })

  test('with no way through, heads straight for the goal', () => {
    const nav = new NavGrid({ x0: 0, z0: 0, x1: 10, z1: 10 }, 0.2)
    nav.block({ x0: 4.5, z0: 0, x1: 5.5, z1: 10 })
    expect(nav.path({ x: 1, z: 1 }, { x: 9, z: 1 })).toEqual([{ x: 9, z: 1 }])
  })

  test('crosses the café from the door to the bookshelf', () => {
    const nav = furnished()
    const shelf = SPOTS.find(spot => spot.kind === 'shelf') as Point
    const door = { x: HALF_W - 0.55, z: 4.4 }
    const path = nav.path(door, shelf)
    expect(path[path.length - 1]).toEqual(shelf)
    let from: Point = door
    for (const point of path) {
      expect(nav.isClear(from, point)).toBe(true)
      from = point
    }
  })
})

describe('what a guest wants to do', () => {
  test('follows what its agent does', () => {
    expect(wantOf('work', 'read', 'sub', false)).toBe('shelf')
    expect(wantOf('work', 'search', 'sub', false)).toBe('shelf')
    expect(wantOf('work', 'plan', 'main', false)).toBe('board')
    expect(wantOf('work', 'delegate', 'main', false)).toBe('lead')
    expect(wantOf('work', 'write', 'sub', false)).toBe('seat')
    expect(wantOf('work', 'run', 'sub', false)).toBe('seat')
    expect(wantOf('think', 'think', 'sub', false)).toBe('think')
    expect(wantOf('ask', 'run', 'main', false)).toBe('ask')
    expect(wantOf('done', 'done', 'sub', false)).toBe('done')
    expect(wantOf('fail', 'fail', 'main', false)).toBe('fail')
  })

  test('at rest, the main loop keeps an eye on its agents while they work; anyone else takes a break', () => {
    expect(wantOf('idle', 'rest', 'main', true)).toBe('await')
    expect(wantOf('idle', 'rest', 'main', false)).toBe('idle')
    expect(wantOf('idle', 'rest', 'mate', true)).toBe('idle')
  })

  test('gets up for a new want only once it has lasted a moment', () => {
    const intent = new Intent('seat', 0)
    expect(intent.feed('shelf', 100)).toBe(false)
    expect(intent.feed('seat', 400)).toBe(false)
    expect(intent.want).toBe('seat')
    expect(intent.feed('shelf', 1_000)).toBe(false)
    expect(intent.feed('shelf', 1_000 + SETTLE_MS)).toBe(true)
    expect(intent.want).toBe('shelf')
  })

  test('moves at once for the person, a finish, a failure, or a new turn after a rest', () => {
    expect(isUrgent('ask', 'seat')).toBe(true)
    expect(isUrgent('done', 'think')).toBe(true)
    expect(isUrgent('fail', 'shelf')).toBe(true)
    expect(isUrgent('seat', 'idle')).toBe(true)
    expect(isUrgent('think', 'ask')).toBe(true)
    expect(isUrgent('shelf', 'seat')).toBe(false)
    const intent = new Intent('idle', 0)
    expect(intent.feed('seat', 10)).toBe(true)
  })

  test('reads a while at the shelf before going back, unless the person needs it', () => {
    const intent = new Intent('shelf', 0)
    const hold = LINGER_MS
    expect(intent.feed('seat', 100, hold)).toBe(false)
    expect(intent.feed('seat', 100 + SETTLE_MS, hold)).toBe(false)
    expect(intent.feed('seat', hold, hold)).toBe(true)
    const held = new Intent('shelf', 0)
    expect(held.feed('ask', 100, hold)).toBe(true)
  })

  test('spends a free moment on what the café allows', () => {
    expect(pickPastime(0, () => true)).toBe('lounge')
    expect(pickPastime(0.5, pastime => pastime === 'pet')).toBe('pet')
    expect(pickPastime(0.99, pastime => pastime !== 'stroll')).not.toBe('stroll')
    expect(pickPastime(0.3, () => false)).toBe('seat')
  })
})
