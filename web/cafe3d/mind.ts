// What a guest of the 3D café wants to be doing, from what its agent is
// doing: where to go, and what to do there.
//
// An agent's state can change several times a second (a read, a thought, the
// next read), and a guest who crossed the room at each change would never
// sit still. So a guest only goes somewhere else for a want that has lasted
// a moment, and thinking keeps a guest where it is; the person's turn
// (asking, failing, finishing, a new turn after a rest) moves at once.
//
// Pure: no three.js here.

import type { Act } from '../../hooks/describe'
import type { Kind, Phase } from '../../hooks/tracker'

/**
 * - `ask`: held for the person: up beside the chair, waving.
 * - `fail`: slumped at the table.
 * - `done`: a cheer, then out of the door.
 * - `seat`: at work at the table.
 * - `shelf`: reading or searching, at the bookshelf.
 * - `board`: planning, at the corkboard.
 * - `lead`: delegating, among its agents.
 * - `think`: between calls, wherever it is.
 * - `idle`: no turn running: coffee, and the café.
 * - `await`: the main loop at rest while its own agents work: coffee, and an eye on them.
 */
export type Want = 'ask' | 'fail' | 'done' | 'seat' | 'shelf' | 'board' | 'lead' | 'think' | 'idle' | 'await'

/** How long a want must last before a guest gets up for it. */
export const SETTLE_MS = 1_800
/** How long a guest who went to the shelf or the corkboard stays there at least, unless the person needs it. */
export const LINGER_MS = 6_000
/** How long a guest thinks sitting down before it gets up and paces. */
export const PACE_AFTER_MS = 8_000

export function wantOf(phase: Phase, act: Act, kind: Kind, isCrewBusy: boolean): Want {
  switch (phase) {
    case 'ask':
      return 'ask'
    case 'fail':
      return 'fail'
    case 'done':
      return 'done'
    case 'idle':
      return kind === 'main' && isCrewBusy ? 'await' : 'idle'
    case 'think':
      return 'think'
    case 'work':
      if (act === 'read' || act === 'search') return 'shelf'
      if (act === 'plan') return 'board'
      if (act === 'delegate') return 'lead'
      return 'seat'
  }
}

function isRest(want: Want): boolean {
  return want === 'idle' || want === 'await'
}

/** True for a change a guest acts on at once, without waiting for it to last. */
export function isUrgent(next: Want, current: Want): boolean {
  if (next === 'ask' || next === 'fail' || next === 'done') return true
  // Back to work from a rest, or up from a hold: a new turn began.
  if (isRest(current) && !isRest(next)) return true
  if (current === 'ask' || current === 'fail' || current === 'done') return true
  return false
}

/** A guest's want, as it settles: `feed` it every state seen, and act when it says so. */
export class Intent {
  want: Want
  private seen: Want
  private seenSince: number

  constructor(want: Want, now: number) {
    this.want = want
    this.seen = want
    this.seenSince = now
  }

  /**
   * Takes the want seen now; true when the guest's want changed. Before
   * `holdUntil` only an urgent change is taken: a guest who just got to the
   * shelf reads a while before it goes back.
   */
  feed(seen: Want, now: number, holdUntil = 0): boolean {
    if (seen !== this.seen) {
      this.seen = seen
      this.seenSince = now
    }
    if (seen === this.want) return false
    if (isUrgent(seen, this.want) || (now - this.seenSince >= SETTLE_MS && now >= holdUntil)) {
      this.want = seen
      return true
    }
    return false
  }
}

/** What a guest does with a free moment, and how much it likes to. */
export type Pastime = 'lounge' | 'seat' | 'browse' | 'gaze' | 'pet' | 'stroll'

const PASTIMES: readonly (readonly [Pastime, number])[] = [
  ['lounge', 0.34],
  ['seat', 0.2],
  ['browse', 0.14],
  ['gaze', 0.12],
  ['pet', 0.12],
  ['stroll', 0.1],
]

/** The next pastime, by its weight, among those `can` allows; `seat` when it allows none. */
export function pickPastime(roll: number, can: (pastime: Pastime) => boolean): Pastime {
  const open = PASTIMES.filter(([pastime]) => can(pastime))
  const total = open.reduce((sum, [, weight]) => sum + weight, 0)
  if (total <= 0) return 'seat'
  let left = Math.min(Math.max(roll, 0), 0.999999) * total
  for (const [pastime, weight] of open) {
    left -= weight
    if (left < 0) return pastime
  }
  return open[open.length - 1]?.[0] ?? 'seat'
}

/** A small seeded random number source, so a guest's habits are its own. */
export function randomFrom(seed: number): () => number {
  let state = seed >>> 0 || 1
  return () => {
    state ^= state << 13
    state ^= state >>> 17
    state ^= state << 5
    return (state >>> 0) / 4_294_967_296
  }
}
