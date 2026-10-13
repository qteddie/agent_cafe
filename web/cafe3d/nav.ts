// How a guest finds the way across the café: the floor as a grid of small
// cells, the furniture marked on it, and the shortest way between two points
// that keeps clear of it (A*, then pulled straight wherever the way is open).
//
// Pure: no three.js here.

import type { Point, Rect } from './layout'

/** How far from furniture a guest keeps: about half a guest's width. */
export const CLEARANCE = 0.22

export class NavGrid {
  readonly cell: number
  readonly cols: number
  readonly rows: number
  private readonly x0: number
  private readonly z0: number
  private readonly blocked: Uint8Array
  // The search's scratch, kept between searches.
  private readonly cost: Float64Array
  private readonly from: Int32Array
  private readonly state: Uint8Array
  private readonly heap: Int32Array
  private readonly heapScore: Float64Array

  constructor(bounds: Rect, cell = 0.2) {
    this.cell = cell
    this.x0 = bounds.x0
    this.z0 = bounds.z0
    this.cols = Math.max(1, Math.ceil((bounds.x1 - bounds.x0) / cell))
    this.rows = Math.max(1, Math.ceil((bounds.z1 - bounds.z0) / cell))
    const size = this.cols * this.rows
    this.blocked = new Uint8Array(size)
    this.cost = new Float64Array(size)
    this.from = new Int32Array(size)
    this.state = new Uint8Array(size)
    this.heap = new Int32Array(size * 8)
    this.heapScore = new Float64Array(size * 8)
  }

  clear(): void {
    this.blocked.fill(0)
  }

  /** Marks the rectangle, grown by `pad`, as furniture. */
  block(rect: Rect, pad = CLEARANCE): void {
    const c0 = Math.max(0, Math.floor((rect.x0 - pad - this.x0) / this.cell))
    const c1 = Math.min(this.cols - 1, Math.floor((rect.x1 + pad - this.x0) / this.cell))
    const r0 = Math.max(0, Math.floor((rect.z0 - pad - this.z0) / this.cell))
    const r1 = Math.min(this.rows - 1, Math.floor((rect.z1 + pad - this.z0) / this.cell))
    for (let row = r0; row <= r1; row += 1) this.blocked.fill(1, row * this.cols + c0, row * this.cols + c1 + 1)
  }

  /** Marks a round thing, grown by `pad`, as furniture. */
  blockCircle(center: Point, radius: number, pad = CLEARANCE): void {
    const reach = radius + pad
    const c0 = Math.max(0, Math.floor((center.x - reach - this.x0) / this.cell))
    const c1 = Math.min(this.cols - 1, Math.floor((center.x + reach - this.x0) / this.cell))
    const r0 = Math.max(0, Math.floor((center.z - reach - this.z0) / this.cell))
    const r1 = Math.min(this.rows - 1, Math.floor((center.z + reach - this.z0) / this.cell))
    for (let row = r0; row <= r1; row += 1) {
      for (let column = c0; column <= c1; column += 1) {
        const x = this.x0 + (column + 0.5) * this.cell
        const z = this.z0 + (row + 0.5) * this.cell
        if (Math.hypot(x - center.x, z - center.z) <= reach) this.blocked[row * this.cols + column] = 1
      }
    }
  }

  private indexOf(point: Point): number {
    const column = Math.floor((point.x - this.x0) / this.cell)
    const row = Math.floor((point.z - this.z0) / this.cell)
    if (column < 0 || row < 0 || column >= this.cols || row >= this.rows) return -1
    return row * this.cols + column
  }

  private centerOf(index: number): Point {
    return {
      x: this.x0 + ((index % this.cols) + 0.5) * this.cell,
      z: this.z0 + (Math.floor(index / this.cols) + 0.5) * this.cell,
    }
  }

  /** True when a guest may stand here. */
  isFree(point: Point): boolean {
    const index = this.indexOf(point)
    return index >= 0 && this.blocked[index] === 0
  }

  /** The free cell nearest the point, searched ring by ring; -1 when none is near. */
  private nearestFree(point: Point, reach = 24): number {
    const column = Math.floor((point.x - this.x0) / this.cell)
    const row = Math.floor((point.z - this.z0) / this.cell)
    let best = -1
    let bestDistance = Infinity
    for (let ring = 0; ring <= reach; ring += 1) {
      for (let dz = -ring; dz <= ring; dz += 1) {
        for (let dx = -ring; dx <= ring; dx += 1) {
          if (Math.max(Math.abs(dx), Math.abs(dz)) !== ring) continue
          const c = column + dx
          const r = row + dz
          if (c < 0 || r < 0 || c >= this.cols || r >= this.rows) continue
          const index = r * this.cols + c
          if (this.blocked[index] !== 0) continue
          const center = this.centerOf(index)
          const distance = Math.hypot(center.x - point.x, center.z - point.z)
          if (distance < bestDistance) {
            best = index
            bestDistance = distance
          }
        }
      }
      // A ring further out cannot hold a nearer cell than one a ring in by more than a cell.
      if (best >= 0 && bestDistance < (ring + 0.5) * this.cell) break
    }
    return best
  }

  /** The nearest point a guest may stand at, or the point itself when it is free. */
  nearestPoint(point: Point): Point {
    if (this.isFree(point)) return point
    const index = this.nearestFree(point)
    return index < 0 ? point : this.centerOf(index)
  }

  /** True when the straight way between the two points crosses no furniture. */
  isClear(one: Point, other: Point): boolean {
    const distance = Math.hypot(other.x - one.x, other.z - one.z)
    const steps = Math.max(1, Math.ceil(distance / (this.cell * 0.4)))
    for (let step = 0; step <= steps; step += 1) {
      const t = step / steps
      const index = this.indexOf({ x: one.x + (other.x - one.x) * t, z: one.z + (other.z - one.z) * t })
      if (index < 0 || this.blocked[index] !== 0) return false
    }
    return true
  }

  /**
   * The way from `start` to `goal`, as the points to walk to after `start`,
   * the last of them `goal` itself. A start or goal inside furniture (a seat
   * in a sofa, a guest the table grew around) is left and reached by a straight
   * step to or from the nearest free floor. When no way is found, the goal
   * alone: the guest walks straight there.
   */
  path(start: Point, goal: Point): Point[] {
    const startIndex = this.isFree(start) ? this.indexOf(start) : this.nearestFree(start)
    const goalIndex = this.isFree(goal) ? this.indexOf(goal) : this.nearestFree(goal)
    if (startIndex < 0 || goalIndex < 0) return [goal]
    const cells = this.search(startIndex, goalIndex)
    if (cells === undefined) return [goal]

    const points: Point[] = []
    const entry = this.centerOf(startIndex)
    if (!this.isFree(start)) points.push(entry)
    const corridor = [this.isFree(start) ? start : entry, ...cells.slice(1, -1).map(index => this.centerOf(index))]
    const exit = this.isFree(goal) ? goal : this.centerOf(goalIndex)
    corridor.push(exit)

    // Pulled straight: from each point, on to the furthest one in plain sight.
    let at = 0
    while (at < corridor.length - 1) {
      let next = corridor.length - 1
      const here = corridor[at] as Point
      while (next > at + 1 && !this.isClear(here, corridor[next] as Point)) next -= 1
      points.push(corridor[next] as Point)
      at = next
    }
    if (!this.isFree(goal)) points.push(goal)
    return points.filter((point, index) => index === 0 || !isSame(point, points[index - 1] as Point))
  }

  /** A* over the cells, eight ways, never cutting a corner of furniture. */
  private search(start: number, goal: number): number[] | undefined {
    if (start === goal) return [start]
    const { cols, rows } = this
    this.cost.fill(Infinity)
    this.state.fill(0)
    const goalColumn = goal % cols
    const goalRow = Math.floor(goal / cols)
    const guess = (index: number): number => {
      const dx = Math.abs((index % cols) - goalColumn)
      const dz = Math.abs(Math.floor(index / cols) - goalRow)
      return Math.max(dx, dz) + (Math.SQRT2 - 1) * Math.min(dx, dz)
    }

    // A binary heap of (cell, score); a cell found again by a cheaper way is
    // pushed again, and its older entry passed over when it comes up.
    const { heap, heapScore } = this
    let size = 0
    const push = (index: number, value: number): void => {
      if (size >= heap.length) return
      let at = size
      size += 1
      while (at > 0) {
        const parent = (at - 1) >> 1
        if ((heapScore[parent] as number) <= value) break
        heap[at] = heap[parent] as number
        heapScore[at] = heapScore[parent] as number
        at = parent
      }
      heap[at] = index
      heapScore[at] = value
    }
    const pop = (): number => {
      const top = heap[0] as number
      size -= 1
      const last = heap[size] as number
      const value = heapScore[size] as number
      let at = 0
      for (;;) {
        let child = at * 2 + 1
        if (child >= size) break
        const right = child + 1
        if (right < size && (heapScore[right] as number) < (heapScore[child] as number)) child = right
        if ((heapScore[child] as number) >= value) break
        heap[at] = heap[child] as number
        heapScore[at] = heapScore[child] as number
        at = child
      }
      heap[at] = last
      heapScore[at] = value
      return top
    }

    this.cost[start] = 0
    this.from[start] = -1
    push(start, guess(start))
    this.state[start] = 1
    while (size > 0) {
      const current = pop()
      if (this.state[current] === 2) continue
      this.state[current] = 2
      if (current === goal) {
        const cells: number[] = []
        for (let index = goal; index >= 0; index = this.from[index] as number) cells.push(index)
        return cells.reverse()
      }
      const column = current % cols
      const row = Math.floor(current / cols)
      for (let dz = -1; dz <= 1; dz += 1) {
        for (let dx = -1; dx <= 1; dx += 1) {
          if (dx === 0 && dz === 0) continue
          const c = column + dx
          const r = row + dz
          if (c < 0 || r < 0 || c >= cols || r >= rows) continue
          const next = r * cols + c
          if (this.blocked[next] !== 0 || this.state[next] === 2) continue
          if (dx !== 0 && dz !== 0 && (this.blocked[row * cols + c] !== 0 || this.blocked[r * cols + column] !== 0)) continue
          const cost = (this.cost[current] as number) + (dx !== 0 && dz !== 0 ? Math.SQRT2 : 1)
          if (cost >= (this.cost[next] as number)) continue
          this.cost[next] = cost
          this.from[next] = current
          this.state[next] = 1
          push(next, cost + guess(next))
        }
      }
    }
    return undefined
  }
}

function isSame(one: Point, other: Point): boolean {
  return Math.abs(one.x - other.x) < 1e-6 && Math.abs(one.z - other.z) < 1e-6
}
