// From rosters to what the café shows: the tables (one per session), who sits
// where and under what name, and the same thing as lines of text.
//
// Pure: no `$` here.

import type { Act } from './describe'
import { clip, tidy } from './describe'
import type { Words } from './i18n'
import { age, say } from './i18n'
import type { Kind, Phase, Seat } from './tracker'
import { depthOf } from './tracker'

/**
 * What one session shares with the others through the store: who it is, when
 * it last said so, and its seats.
 */
export type Snap = {
  v: 1
  id: string
  /** The session's folder name, which names its table. */
  title: string
  /** When it was written, in milliseconds: an old one is a session that is gone. */
  at: number
  seats: Seat[]
}

/** One seat as drawn: the roster's seat, its name at the table and what it says. */
export type Place = {
  /** Unique in the café: the table's id and the seat's. */
  key: string
  seat: Seat
  label: string
  says: string
  /** 0 for the main loop, 1 for its subagents, 2 for theirs. */
  depth: number
  /** True for the agent whose transcript the person has on screen. */
  isViewed: boolean
}

export type Table = {
  id: string
  title: string
  /** True for the session the pane is open in. */
  isHere: boolean
  places: Place[]
  /** Seats the table has and does not show. */
  hidden: number
}

export type Cafe = {
  tables: Table[]
  /** Seats thinking or in a tool call, over every table, shown or not. */
  busy: number
  /** Seats held for the person. */
  asking: number
  /** Seats resting, done or failed. */
  idle: number
  /** Seats shown. */
  seats: number
  /** Tables past the ones shown. */
  hiddenTables: number
}

/** The most seats one table shows, and the most tables. */
export const TABLE_SEATS = 12
export const MAX_TABLES = 4

const PHASES: readonly Phase[] = ['think', 'work', 'ask', 'idle', 'done', 'fail']
const KINDS: readonly Kind[] = ['main', 'sub', 'mate']
const ACTS: readonly Act[] = [
  'read',
  'search',
  'write',
  'run',
  'web',
  'delegate',
  'plan',
  'ask',
  'tool',
  'think',
  'rest',
  'done',
  'fail',
]

function isRecord(value: unknown): value is Readonly<Record<string, unknown>> {
  return typeof value === 'object' && value !== null && !Array.isArray(value)
}

function word(value: unknown, max: number): string {
  return typeof value === 'string' ? clip(tidy(value), max) : ''
}

function oneOf<T extends string>(value: unknown, among: readonly T[], fallback: T): T {
  return among.find(item => item === value) ?? fallback
}

function count(value: unknown): number {
  return typeof value === 'number' && Number.isFinite(value) && value >= 0 ? Math.floor(value) : 0
}

function parseSeat(value: unknown): Seat | undefined {
  if (!isRecord(value)) return undefined
  const id = word(value['id'], 80)
  if (id === '') return undefined
  return {
    id,
    kind: oneOf(value['kind'], KINDS, 'sub'),
    type: word(value['type'], 40),
    name: word(value['name'], 40),
    task: word(value['task'], 80),
    parent: word(value['parent'], 80),
    phase: oneOf(value['phase'], PHASES, 'think'),
    act: oneOf(value['act'], ACTS, 'think'),
    tool: word(value['tool'], 80),
    target: word(value['target'], 60),
    since: count(value['since']),
    calls: count(value['calls']),
  }
}

/**
 * Reads what another session left in the store. The store is shared by every
 * session of the machine, so nothing in it is taken on trust: a value of
 * another shape is no snap, and every string is cut to a length.
 */
export function parseSnap(value: unknown): Snap | undefined {
  if (!isRecord(value) || value['v'] !== 1) return undefined
  const id = word(value['id'], 80)
  const seats = value['seats']
  if (id === '' || !Array.isArray(seats)) return undefined
  const parsed: Seat[] = []
  for (const item of seats.slice(0, 64)) {
    const seat = parseSeat(item)
    if (seat !== undefined) parsed.push(seat)
  }
  return { v: 1, id, title: word(value['title'], 40), at: count(value['at']), seats: parsed }
}

function baseLabel(seat: Seat, words: Words): string {
  if (seat.kind === 'main') return words.main
  return seat.name || seat.type || words.agent
}

function isOver(phase: Phase): boolean {
  return phase === 'done' || phase === 'fail'
}

/** At work: thinking, in a tool call, or held in one for the person. */
function isLive(phase: Phase): boolean {
  return phase === 'think' || phase === 'work' || phase === 'ask'
}

function seatTable(snap: Snap, isHere: boolean, words: Words, viewed: string | undefined, cap: number): Table {
  // When the table is full, the ones still here keep their seats.
  const ranked = snap.seats.map((seat, index) => ({ seat, index }))
  const kept =
    ranked.length <= cap
      ? ranked
      : [...ranked]
          .sort(
            (one, other) =>
              Number(other.seat.kind === 'main') - Number(one.seat.kind === 'main') ||
              Number(isOver(one.seat.phase)) - Number(isOver(other.seat.phase)) ||
              one.index - other.index,
          )
          .slice(0, cap)
          .sort((one, other) => one.index - other.index)

  // A main loop at rest waits for its own agents while any of them is at work.
  const hasCrew = snap.seats.some(seat => seat.kind !== 'main' && isLive(seat.phase))
  const seen = new Map<string, number>()
  const places = kept.map(({ seat }): Place => {
    const base = baseLabel(seat, words)
    const nth = (seen.get(base) ?? 0) + 1
    seen.set(base, nth)
    return {
      key: `${snap.id}/${seat.id}`,
      seat,
      label: nth === 1 ? base : `${base} ${nth}`,
      says: say(seat, words, hasCrew),
      depth: depthOf(snap.seats, seat),
      isViewed: isHere && viewed !== undefined && viewed === seat.id,
    }
  })
  return { id: snap.id, title: snap.title, isHere, places, hidden: snap.seats.length - kept.length }
}

/**
 * Seats everyone: this session's table first, then the others by name.
 *
 * @param viewed the agent whose transcript is on screen here, if one is
 * @param cap the most seats a table shows
 */
export function arrange(
  here: Snap,
  others: readonly Snap[],
  words: Words,
  viewed?: string,
  cap: number = TABLE_SEATS,
  maxTables: number = MAX_TABLES,
): Cafe {
  const rest = others
    .filter(snap => snap.id !== here.id && snap.seats.length > 0)
    .sort((one, other) => one.title.localeCompare(other.title) || one.id.localeCompare(other.id))
  const all = [here, ...rest]
  const shown = all.slice(0, Math.max(1, maxTables))
  const tables = shown.map(snap => seatTable(snap, snap === here, words, viewed, Math.max(1, cap)))
  return tallied(all, tables)
}

/**
 * Seats every table in the order given, none of them the viewer's own: the
 * café as the web page shows it, with every session a guest.
 *
 * @param cap the most seats a table shows
 * @param maxTables the most tables the picture holds
 */
export function arrangeAll(
  snaps: readonly Snap[],
  words: Words,
  cap: number = TABLE_SEATS,
  maxTables: number = MAX_TABLES,
): Cafe {
  const all = snaps.filter(snap => snap.seats.length > 0)
  const tables = all.slice(0, Math.max(1, maxTables)).map(snap => seatTable(snap, false, words, undefined, Math.max(1, cap)))
  return tallied(all, tables)
}

/** The café over `all` tables, `tables` of them shown: the tally counts every seat. */
function tallied(all: readonly Snap[], tables: Table[]): Cafe {
  let busy = 0
  let asking = 0
  let idle = 0
  for (const snap of all) {
    for (const seat of snap.seats) {
      if (seat.phase === 'ask') asking += 1
      else if (seat.phase === 'think' || seat.phase === 'work') busy += 1
      else idle += 1
    }
  }
  return {
    tables,
    busy,
    asking,
    idle,
    seats: tables.reduce((sum, table) => sum + table.places.length, 0),
    hiddenTables: all.length - tables.length,
  }
}

/** A table's name on its placard and in the list. */
export function tableTitle(table: Table, words: Words): string {
  const name = table.title === '' ? table.id.slice(0, 8) : table.title
  const here = table.isHere ? words.here(name) : name
  return table.hidden > 0 ? `${here} · ${words.more(table.hidden)}` : here
}

/** One line of the café as text: a table's name, or a seat. */
export type Line =
  | { type: 'table'; key: string; text: string }
  | {
      type: 'seat'
      key: string
      indent: string
      phase: Phase
      label: string
      /** The subagent's task, quoted as the language quotes; `''` for a seat with none. */
      note: string
      says: string
      /** How long it has been at it, and its tool calls. */
      tail: string
    }

/** The café as lines, in the order the picture seats it. */
export function linesOf(cafe: Cafe, words: Words, now: number): Line[] {
  const lines: Line[] = []
  const hasPlacards = cafe.tables.length > 1 || cafe.tables.some(table => table.hidden > 0)
  for (const table of cafe.tables) {
    if (hasPlacards) lines.push({ type: 'table', key: `t:${table.id}`, text: tableTitle(table, words) })
    for (const place of table.places) {
      const { seat } = place
      const parts = [age(now - seat.since)]
      if (seat.kind !== 'main' && seat.calls > 0) parts.push(words.calls(seat.calls))
      lines.push({
        type: 'seat',
        key: `s:${place.key}`,
        indent: place.depth === 0 ? '' : '  '.repeat(place.depth - 1) + '↳ ',
        phase: seat.phase,
        label: place.label,
        note: seat.task === '' ? '' : words.task(clip(seat.task, 44)),
        says: place.says,
        tail: parts.join(' · '),
      })
    }
  }
  return lines
}

/** The mark that stands for a phase; with a color where one can be drawn, alone where none can. */
export const MARKS: Readonly<Record<Phase, string>> = {
  think: '◐',
  work: '●',
  ask: '◆',
  idle: '○',
  done: '✓',
  fail: '✗',
}

/** The café as plain text, for a surface that draws no pane. */
export function textOf(cafe: Cafe, words: Words, now: number): string {
  const head = `${words.title} — ${words.tally(cafe.busy, cafe.asking, cafe.idle)}`
  const body = linesOf(cafe, words, now).map(line =>
    line.type === 'table'
      ? line.text
      : `${line.indent}${MARKS[line.phase]} ${line.label}${line.note} — ${line.says} · ${line.tail}`,
  )
  return [head, ...body].join('\n')
}

/**
 * Everything the picture depends on, as one string: two views with the same
 * signature draw the same picture, so the last one drawn can stand.
 */
export function signatureOf(cafe: Cafe): string {
  const tables = cafe.tables.map(table =>
    [
      table.id,
      table.title,
      table.isHere ? 1 : 0,
      table.hidden,
      ...table.places.map(place =>
        [place.key, place.label, place.seat.kind, place.seat.phase, place.seat.act, place.seat.tool, place.says, place.seat.task, place.isViewed ? 1 : 0].join('\u001f'),
      ),
    ].join('\u001e'),
  )
  return [cafe.busy, cafe.asking, cafe.idle, cafe.hiddenTables, ...tables].join('\u001d')
}
