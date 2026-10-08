// What the web page is sent: the café picture and the list, for one language
// and one width of page. Times are sent as they are (when each seat began
// what it shows), so the page counts the seconds up itself.
//
// Pure: no server here.

import { clip } from '../hooks/describe'
import { wordsFor } from '../hooks/i18n'
import { drawScene } from '../hooks/scene'
import type { Phase } from '../hooks/tracker'
import { TABLE_SEATS, arrangeAll, signatureOf, tableTitle } from '../hooks/view'
import type { Hall } from './hall'
import { MAX_DESKS, seatingOf } from './hall'
import { clockOf, pageWordsFor } from './words'

/** The most tables the picture holds; the list under it has every one. */
export const PICTURE_TABLES = 9
/** The seats across the picture a page may ask for, by how wide it is. */
export const MIN_COLUMNS = 3
export const MAX_COLUMNS = 8
/** The most seats a table lists, as many as a table may carry. */
const LIST_SEATS = 64

export type ViewLine = {
  key: string
  /** 0 for the main loop, 1 for its subagents, 2 for theirs. */
  depth: number
  phase: Phase
  label: string
  /** The subagent's task, quoted; `''` for a seat with none. */
  task: string
  says: string
  /** When the seat began what it shows, on the server's clock. */
  since: number
  /** Its tool calls so far, said; `''` for none. */
  calls: string
}

export type ViewTable = {
  id: string
  title: string
  app: string
  link: string
  via: 'mod' | 'hooks'
  /** When the server first heard of it, as a time of day. */
  started: string
  /** False for a table the picture has no room for. */
  inPicture: boolean
  lines: ViewLine[]
}

export type View = {
  /** The server's clock as it made this view. */
  at: number
  /** Changes when the picture does, and only then. */
  sig: string
  /** The picture, an SVG document; `''` while nobody is here. */
  svg: string
  alt: string
  busy: number
  asking: number
  idle: number
  tables: ViewTable[]
}

export type ViewOptions = {
  lang: unknown
  columns: number
  /** The time zone times of day are shown in; the server's own when unset. */
  timeZone?: string | undefined
  /** False draws the picture still, for a page that asks for less motion. */
  hasMotion?: boolean
}

/** The seats across the picture for a page that asks for `columns`, kept to what the picture can draw. */
export function columnsFor(columns: unknown): number {
  const asked = typeof columns === 'number' ? columns : Number(columns)
  if (!Number.isFinite(asked)) return 6
  return Math.min(MAX_COLUMNS, Math.max(MIN_COLUMNS, Math.floor(asked)))
}

export function viewOf(hall: Hall, now: number, options: ViewOptions): View {
  const words = wordsFor(options.lang)
  const page = pageWordsFor(options.lang)
  const columns = columnsFor(options.columns)
  const seated = seatingOf(hall, now).map(table => ({
    ...table,
    snap: {
      ...table.snap,
      title: table.snap.title || page.untitled(page.apps[table.desk.app], clockOf(table.desk.started, options.timeZone)),
    },
  }))
  const snaps = seated.map(table => table.snap)
  const listed = arrangeAll(snaps, words, LIST_SEATS, MAX_DESKS)
  const pictured = arrangeAll(snaps, words, TABLE_SEATS, PICTURE_TABLES)
  const scene = snaps.length === 0 ? undefined : drawScene(pictured, { columns, scale: 1, words, hasMotion: options.hasMotion !== false })

  const tables = listed.tables.map((table, index): ViewTable => {
    const desk = seated[index]?.desk
    return {
      id: table.id,
      title: tableTitle(table, words),
      app: page.apps[desk?.app ?? ''],
      link: desk?.link ?? '',
      via: seated[index]?.via ?? 'hooks',
      started: page.started(clockOf(desk?.started ?? now, options.timeZone)),
      inPicture: index < PICTURE_TABLES,
      lines: table.places.map(place => ({
        key: place.key,
        depth: place.depth,
        phase: place.seat.phase,
        label: place.label,
        task: place.seat.task === '' ? '' : words.task(clip(place.seat.task, 44)),
        says: place.says,
        since: place.seat.since,
        calls: place.seat.kind !== 'main' && place.seat.calls > 0 ? words.calls(place.seat.calls) : '',
      })),
    }
  })

  return {
    at: now,
    sig: scene === undefined ? '' : `${columns}|${page.lang}|${options.hasMotion === false ? 0 : 1}|${signatureOf(pictured)}`,
    svg: scene?.source ?? '',
    alt: scene?.alt ?? '',
    busy: listed.busy,
    asking: listed.asking,
    idle: listed.idle,
    tables,
  }
}
