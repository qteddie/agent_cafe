// The café as a picture: one SVG document drawn from who sits where.
//
// Pure: no `$` here, and nothing in the picture depends on the time, so the
// same café draws the same markup and a surface that already shows it need
// not load it again. What moves, moves by SMIL animation inside the markup.
//
// Units are logical pixels (one sprite pixel); the root scales them to the
// room the pane has.

import { clip, tidy, widthOf } from './describe'
import type { Words } from './i18n'
import type { IconName, Look } from './sprites'
import {
  CAT,
  CAT_INKS,
  CHEST,
  CHEST_ROW,
  EYES_HAPPY,
  EYES_SHUT,
  HEADS,
  ICONS,
  INK,
  MAIN_LOOK,
  box,
  darken,
  hash,
  inksOf,
  lookOf,
  paint,
} from './sprites'
import type { Cafe, Place, Table } from './view'
import { tableTitle } from './view'

export type SceneOptions = {
  /** Seats across the room. */
  columns: number
  /** CSS pixels to one logical pixel. */
  scale: number
  words: Words
  /** False draws the picture still, with no animation in the markup. */
  hasMotion: boolean
}

export type Scene = {
  /** The SVG document. */
  source: string
  /** Its size in CSS pixels. */
  width: number
  height: number
  /** What it shows, in words. */
  alt: string
}

/** One seat's cell, in logical pixels. */
export const TILE_W = 34
export const TILE_H = 48

const MARGIN = 3
const BAND = 32
const PLACARD = 9
const TABLE_GAP = 3
const FOOT = 3

/** A cell of a pane's code font, in CSS pixels, near enough. */
const CELL_PX = 7.5

/** An `Svg` takes at most 131072 characters; the picture stays well inside. */
export const SOURCE_LIMIT = 120_000

const WALL = '#f3e2c3'
const WALL_LINE = '#e4cda3'
const COUNTER_TOP = '#ecd6ae'
const COUNTER_EDGE = '#b98557'
const COUNTER_FRONT = '#8a623f'
const WOOD_DARK = '#6b4a32'
const FLOOR = '#c79a6c'
const FLOOR_SEAM = '#b0845a'
const BOARD = '#2f3b36'
const CHALK = '#f4f1e6'
const STEEL = '#b9c0c7'
const STEEL_LIGHT = '#dfe4e8'
const STEEL_DARK = '#59616b'
const CUP = '#fbf7ee'
const LAMP = '#3c3a39'
const DESK_LIGHT = '#e2b684'
const DESK_TOP = '#c9995f'
const DESK_FRONT = '#9a6c41'
const CHAIR = '#5b4030'
const CHAIR_LIGHT = '#735241'
const LID = '#4a5060'
const LOGO = '#cfd8ea'
const CLAUDE = '#d97757'
const PLATE = '#fff8ea'
const NAME = '#2b2320'
const SAYS = '#5b4636'
const BUSY = '#8fd18f'
const ASK = '#ffd84d'
const IDLE = '#b9bbbf'
const GOOD = '#69b96c'
const BAD = '#e0564b'
const RUGS: readonly string[] = ['#9b3d2e', '#2f6f6a', '#5d4a8f', '#8a6d1f']

function clamp(value: number, low: number, high: number): number {
  return Math.min(high, Math.max(low, value))
}

/**
 * How many seats fit across a pane `bodyColumns` cells wide, and how far to
 * scale the picture so it fills that width.
 */
export function fit(bodyColumns: number): { columns: number; scale: number } {
  // A surface that has not measured hands over no width: take an ordinary one.
  const cells = Number.isFinite(bodyColumns) && bodyColumns > 0 ? bodyColumns : 80
  const room = clamp(cells * CELL_PX, 220, 1000)
  const columns = clamp(Math.floor((room / 3 - 2 * MARGIN) / TILE_W), 2, 6)
  const logical = columns * TILE_W + 2 * MARGIN
  // Rounded down to a quarter, so the picture is never wider than the room.
  return { columns, scale: Math.floor(clamp(room / logical, 2, 4) * 4) / 4 }
}

/**
 * Text made safe for XML: the five characters escaped, a lone surrogate
 * replaced, and the characters no XML document may hold left out.
 */
export function escapeXml(text: string): string {
  return text
    .replace(/\p{Cs}/gu, '\ufffd')
    .replace(/[\u0000-\u0008\u000b\u000c\u000e-\u001f\ufffe\uffff]/g, '')
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;')
}

function words2(
  x: number,
  y: number,
  size: number,
  fill: string,
  text: string,
  weight = 400,
  anchor: 'start' | 'middle' | 'end' = 'middle',
): string {
  return `<text x="${x}" y="${y}" font-size="${size}" font-weight="${weight}" fill="${fill}" text-anchor="${anchor}">${escapeXml(text)}</text>`
}

/** Draws the animations, or nothing when the picture is to stand still. */
type Motion = {
  /** An `<animate>` of one attribute through `values`, stepped. */
  step: (attribute: string, values: string, seconds: number, lead?: number) => string
  /** An `<animate>` of one attribute through `values`, eased. */
  ease: (attribute: string, values: string, seconds: number, lead?: number) => string
  /** An `<animateTransform>` translating through `values`, stepped. */
  shift: (values: string, seconds: number, lead?: number) => string
}

function motionOf(hasMotion: boolean): Motion {
  if (!hasMotion) return { step: () => '', ease: () => '', shift: () => '' }
  const begin = (lead: number): string => (lead > 0 ? ` begin="-${lead.toFixed(1)}s"` : '')
  return {
    step: (attribute, values, seconds, lead = 0) =>
      `<animate attributeName="${attribute}" values="${values}" dur="${seconds}s"${begin(lead)} calcMode="discrete" repeatCount="indefinite"/>`,
    ease: (attribute, values, seconds, lead = 0) =>
      `<animate attributeName="${attribute}" values="${values}" dur="${seconds}s"${begin(lead)} repeatCount="indefinite"/>`,
    shift: (values, seconds, lead = 0) =>
      `<animateTransform attributeName="transform" type="translate" values="${values}" dur="${seconds}s"${begin(lead)} calcMode="discrete" repeatCount="indefinite"/>`,
  }
}

// ---------------------------------------------------------------------------
// The back wall: the chalkboard with the tally, the counter, the machine, a
// lamp and the cat.

function drawBand(width: number, cafe: Cafe, words: Words, motion: Motion): string {
  let out = box(0, 0, width, BAND, WALL) + box(0, 19, width, 1, WALL_LINE)

  // The counter runs the width of the room.
  out += box(0, 23, width, 2, COUNTER_TOP) + box(0, 25, width, 1, COUNTER_EDGE)
  out += box(0, 26, width, BAND - 26, COUNTER_FRONT)
  let seams = ''
  for (let x = 9; x < width; x += 12) seams += `M${x} 26h1v${BAND - 26}h-1z`
  out += `<path fill="${WOOD_DARK}" d="${seams}"/>`

  // The chalkboard: the name of the place, and who is doing what.
  const boardW = clamp(width - 34, 38, 72)
  const boardX = 4
  const boardY = 2
  const boardH = 18
  out += box(boardX - 1, boardY - 1, boardW + 2, boardH + 2, WOOD_DARK) + box(boardX, boardY, boardW, boardH, BOARD)
  out += words2(boardX + boardW / 2, boardY + 7.2, 5, CHALK, words.title.toUpperCase(), 700)
  out += box(boardX + 4, boardY + 9, boardW - 8, 0.5, '#6f7d76')
  const chips: readonly [string, number][] = [
    [BUSY, cafe.busy],
    [ASK, cafe.asking],
    [IDLE, cafe.idle],
  ]
  chips.forEach(([color, count], index) => {
    const center = boardX + (boardW * (2 * index + 1)) / 6
    out += box(Math.round(center) - 5, boardY + 11.5, 3, 3, color)
    out += words2(Math.round(center) - 0.5, boardY + 14.7, 4.2, CHALK, String(count), 700, 'start')
  })

  // The espresso machine, at the far end of the counter.
  const machineX = width - 21
  out += box(machineX + 1, 9, 14, 2, STEEL_DARK)
  out += box(machineX + 3, 7, 3, 2, CUP) + box(machineX + 7, 7, 3, 2, CUP) + box(machineX + 11, 7, 3, 2, CUP)
  out += box(machineX, 11, 16, 8, STEEL) + box(machineX, 11, 16, 1, STEEL_LIGHT)
  out += box(machineX + 2, 13, 4, 3, '#2f343b') + box(machineX + 3, 14, 2, 1, BAD)
  out += box(machineX + 8, 13, 6, 1, STEEL_DARK) + box(machineX + 8, 15, 6, 1, STEEL_DARK)
  out += box(machineX + 5, 19, 6, 1, STEEL_DARK) + box(machineX + 7, 20, 2, 1, STEEL_DARK)
  out += box(machineX + 6, 21, 4, 2, CUP) + box(machineX + 10, 21, 1, 1, CUP)
  out += box(machineX + 1, 19, 2, 4, STEEL_DARK) + box(machineX + 13, 19, 2, 4, STEEL_DARK)
  out +=
    `<rect x="${machineX + 4}" y="4" width="1" height="2" fill="#fff" opacity=".7">` +
    motion.step('y', '5;4;3;2', 1.6) +
    motion.step('opacity', '.8;.6;.3;0', 1.6) +
    '</rect>'
  out +=
    `<rect x="${machineX + 9}" y="3" width="1" height="2" fill="#fff" opacity=".5">` +
    motion.step('y', '5;4;3;2', 1.6, 0.8) +
    motion.step('opacity', '.8;.6;.3;0', 1.6, 0.8) +
    '</rect>'

  // Between the board and the machine: a lamp, and the cat asleep under it.
  const gapLeft = boardX + boardW + 2
  const gapRight = machineX - 2
  if (gapRight - gapLeft >= 15) {
    const middle = Math.floor((gapLeft + gapRight) / 2)
    const catX = middle - 6
    out += paint(CAT, CAT_INKS, catX, 17)
    out +=
      `<rect x="${catX + 12}" y="19" width="1" height="1" fill="${INK}">` +
      motion.step('y', '19;19;18;19', 2.4) +
      '</rect>'
    out +=
      `<text x="${catX + 1}" y="15" font-size="3.4" font-weight="700" fill="${WOOD_DARK}" opacity=".8">z` +
      motion.ease('y', '16;12', 2.8) +
      motion.ease('opacity', '.9;0', 2.8) +
      '</text>'
    out += box(middle, 0, 1, 4, INK) + box(middle - 2, 4, 5, 1, LAMP) + box(middle - 3, 5, 7, 2, LAMP)
    out += box(middle - 1, 7, 3, 1, '#ffe9a8')
    out +=
      `<circle cx="${middle + 0.5}" cy="9" r="8" fill="#ffd27a" opacity=".2" shape-rendering="auto">` +
      motion.ease('opacity', '.2;.26;.2', 3.2) +
      '</circle>'
  }

  // The counter's shadow on the floor.
  out += `<rect x="0" y="${BAND}" width="${width}" height="2" fill="#000" opacity=".12"/>`
  return out
}

function drawFloor(width: number, height: number): string {
  let seams = ''
  let row = 0
  for (let y = BAND; y < height; y += 8, row += 1) {
    if (y > BAND) seams += `M0 ${y}h${width}v1h${-width}z`
    for (let x = (row % 2) * 14 + 6; x < width; x += 28) seams += `M${x} ${y + 1}h1v7h-1z`
  }
  return box(0, BAND, width, height - BAND, FLOOR) + `<path fill="${FLOOR_SEAM}" d="${seams}"/>`
}

// ---------------------------------------------------------------------------
// One seat: a chair, a person, a desk with what they work at, a bubble that
// says what kind of work it is, and a name card.

type Pose = 'type' | 'read' | 'note' | 'think' | 'ask' | 'rest' | 'done' | 'fail'

function poseOf(place: Place): Pose {
  const { phase, act } = place.seat
  if (phase === 'think') return 'think'
  if (phase === 'ask') return 'ask'
  if (phase === 'idle') return 'rest'
  if (phase === 'done') return 'done'
  if (phase === 'fail') return 'fail'
  if (act === 'read' || act === 'search') return 'read'
  if (act === 'plan') return 'note'
  return 'type'
}

const ICON_OF: Readonly<Record<string, IconName>> = {
  read: 'book',
  search: 'lens',
  write: 'pencil',
  run: 'shell',
  web: 'globe',
  delegate: 'people',
  plan: 'list',
  tool: 'gear',
}

function frame(x: number, y: number, fill: string): string {
  const edge =
    `M${x + 1} ${y}h11v1h-11z` +
    `M${x} ${y + 1}h1v8h-1z` +
    `M${x + 12} ${y + 1}h1v8h-1z` +
    `M${x + 1} ${y + 9}h11v1h-11z` +
    `M${x + 2} ${y + 10}h2v1h-2z` +
    `M${x + 1} ${y + 11}h1v1h-1z`
  return box(x + 1, y + 1, 11, 8, fill) + `<path fill="${INK}" d="${edge}"/>`
}

function drawBubble(place: Place, motion: Motion, lead: number): string {
  const x = 20
  const y = 0
  const { phase, act, tool } = place.seat
  if (phase === 'idle') return ''
  if (phase === 'think') {
    let dots = ''
    for (let index = 0; index < 3; index += 1) {
      dots +=
        `<rect x="${x + 3 + index * 3}" y="${y + 4}" width="2" height="2" fill="${INK}">` +
        motion.step('opacity', index === 0 ? '1;.25;.25' : index === 1 ? '.25;1;.25' : '.25;.25;1', 1.2, lead) +
        '</rect>'
    }
    return frame(x, y, '#fff') + dots
  }
  if (phase === 'ask') {
    const icon = tool === 'AskUserQuestion' ? ICONS.query : ICONS.bang
    return (
      `<g>${motion.shift('0 0;0 -1', 0.6, lead)}` +
      frame(x, y, ASK) +
      paint(icon, { '#': INK, a: INK }, x + 3, y + 1) +
      '</g>'
    )
  }
  if (phase === 'done') return frame(x, y, GOOD) + paint(ICONS.check, { '#': '#fff' }, x + 3, y + 1)
  if (phase === 'fail') return frame(x, y, BAD) + paint(ICONS.cross, { '#': '#fff' }, x + 3, y + 1)
  const name = ICON_OF[act] ?? 'gear'
  return frame(x, y, '#fff') + paint(ICONS[name], { '#': INK, a: CLAUDE }, x + 3, y + 1)
}

function laptop(isLit: boolean, glow: string, motion: Motion, lead: number): string {
  return (
    box(13, 20, 8, 6, INK) +
    box(14, 21, 6, 4, LID) +
    `<rect x="16" y="22" width="2" height="2" fill="${glow}">` +
    (isLit ? motion.ease('opacity', '1;.35;1', 1.8, lead) : '') +
    '</rect>'
  )
}

function closedLaptop(): string {
  return box(12, 24, 10, 2, INK) + box(13, 24, 8, 1, LID)
}

function hand(x: number, y: number, skin: string, inner = ''): string {
  return `<rect x="${x}" y="${y}" width="2" height="2" fill="${skin}">${inner}</rect>`
}

/** An arm raised beside the head, on the left as the picture is seen. */
function raisedArm(look: Look, motion: Motion, lead: number): string {
  return (
    `<g>${motion.shift('0 0;-1 0;0 0;1 0', 0.9, lead)}` +
    box(6, 12, 4, 10, INK) +
    box(7, 12, 2, 10, look.top) +
    box(6, 8, 4, 4, INK) +
    box(7, 9, 2, 3, look.skin) +
    '</g>'
  )
}

function eyes(grid: readonly string[], look: Look): string {
  // Paint over the open eyes, then draw the others in their rows.
  return box(14, 14, 1, 2, look.skin) + box(19, 14, 1, 2, look.skin) + paint(grid, { E: INK }, 9, 14)
}

function drawPerson(look: Look, pose: Pose, motion: Motion, lead: number): string {
  const inks = inksOf(look)
  let out = box(9, 16, 16, 1, CHAIR) + box(8, 17, 18, 10, CHAIR) + box(9, 17, 16, 1, CHAIR_LIGHT)
  out += paint(CHEST, inks, 9, 6 + CHEST_ROW)
  out += paint(HEADS[look.head] ?? HEADS[0] ?? [], inks, 9, 6)

  if (pose === 'done') out += eyes(EYES_HAPPY, look)
  else if (pose === 'fail') out += eyes(EYES_SHUT, look)
  else {
    // A blink, now and then.
    out +=
      `<path fill="${look.skin}" opacity="0" d="M14 14h1v2h-1zM19 14h1v2h-1z">` +
      motion.step('opacity', '0;0;0;0;0;0;0;0;0;0;0;1', 4.8, lead * 3) +
      '</path>'
  }
  return out
}

function drawDesk(): string {
  return (
    box(1, 26, 32, 1, DESK_LIGHT) +
    box(1, 27, 32, 2, DESK_TOP) +
    box(2, 29, 30, 5, DESK_FRONT) +
    box(2, 34, 30, 1, WOOD_DARK) +
    box(3, 35, 2, 3, WOOD_DARK) +
    box(29, 35, 2, 3, WOOD_DARK) +
    '<rect x="2" y="38" width="30" height="1" fill="#000" opacity=".12"/>'
  )
}

/** What is on the desk and where the hands are, drawn over the person. */
function drawWork(look: Look, pose: Pose, motion: Motion, lead: number): string {
  const { skin } = look
  switch (pose) {
    case 'type':
      return (
        laptop(true, LOGO, motion, lead) +
        hand(11, 24, skin, motion.step('y', '24;23', 0.32, lead)) +
        hand(21, 24, skin, motion.step('y', '23;24', 0.32, lead))
      )
    case 'read': {
      const cover = '#3f6fb0'
      return (
        `<g>${motion.shift('0 0;0 -1', 2.2, lead)}` +
        box(11, 19, 12, 7, INK) +
        box(12, 20, 10, 5, cover) +
        box(12, 20, 10, 1, CUP) +
        box(16, 21, 2, 4, darken(cover)) +
        hand(10, 22, skin) +
        hand(22, 22, skin) +
        '</g>'
      )
    }
    case 'note':
      return (
        box(11, 19, 12, 7, INK) +
        box(12, 20, 10, 5, '#e8d5a8') +
        box(15, 18, 4, 2, STEEL_DARK) +
        box(13, 22, 6, 1, '#9a8660') +
        box(13, 24, 4, 1, '#9a8660') +
        hand(10, 22, skin) +
        hand(22, 23, skin, motion.step('x', '22;21;22;23', 0.9, lead))
      )
    case 'think':
      return (
        closedLaptop() +
        box(19, 20, 2, 4, look.collar) +
        box(18, 18, 3, 2, skin) +
        box(18, 20, 3, 1, INK) +
        hand(12, 24, skin)
      )
    case 'ask':
      return laptop(false, LOGO, motion, lead) + raisedArm(look, motion, lead) + hand(21, 24, skin)
    case 'rest':
      return (
        box(22, 21, 5, 5, INK) +
        box(23, 22, 3, 3, CUP) +
        box(27, 22, 1, 3, INK) +
        `<rect x="24" y="18" width="1" height="2" fill="#fff" opacity=".7">` +
        motion.step('y', '19;18;17;16', 2, lead) +
        motion.step('opacity', '.8;.6;.3;0', 2, lead) +
        '</rect>' +
        hand(13, 24, skin) +
        hand(18, 24, skin)
      )
    case 'done':
      return (
        closedLaptop() +
        hand(11, 24, skin) +
        hand(21, 24, skin) +
        `<path fill="${ASK}" d="M5 11h1v3h-1zM4 12h3v1h-3zM28 15h1v3h-1zM27 16h3v1h-3z">` +
        motion.step('opacity', '1;.2', 0.7, lead) +
        '</path>'
      )
    case 'fail':
      return (
        laptop(false, BAD, motion, lead) +
        hand(11, 24, skin) +
        hand(21, 24, skin) +
        `<rect x="24" y="10" width="1" height="2" fill="#7cc7ee">` +
        motion.step('y', '10;11;12;13', 1.2, lead) +
        '</rect>'
      )
  }
}

function drawSeat(place: Place, x: number, y: number, words: Words, motion: Motion): string {
  const { seat } = place
  const look = seat.kind === 'main' ? MAIN_LOOK : lookOf(place.key)
  const pose = poseOf(place)
  const lead = (hash(place.key) % 16) / 10
  const title = seat.task === '' ? `${place.label} — ${place.says}` : `${place.label}${words.task(seat.task)} — ${place.says}`

  let out = `<g transform="translate(${x} ${y})"><title>${escapeXml(title)}</title>`
  if (place.isViewed) {
    out += `<rect x=".5" y=".5" width="33" height="47" rx="2" fill="${CLAUDE}" opacity=".22" shape-rendering="auto"/>`
  }
  out += drawPerson(look, pose, motion, lead)
  out += drawDesk()
  out += drawWork(look, pose, motion, lead)
  out += drawBubble(place, motion, lead)

  // The name card: who, and what they are doing.
  out += `<rect x=".5" y="39.2" width="33" height="8.4" rx="1.4" fill="${PLATE}" opacity=".86" shape-rendering="auto"/>`
  // A long name is set smaller and bold text cut sooner, so both stay on the card.
  const isHeld = seat.phase === 'ask'
  const name = clip(place.label, 16)
  out += words2(17, 42.9, widthOf(name) > 12 ? 3.3 : 3.9, seat.kind === 'main' ? '#b0502f' : NAME, name, 700)
  out += words2(17, 46.6, 3.2, isHeld ? '#a8321e' : SAYS, clip(place.says, isHeld ? 16 : 18), isHeld ? 700 : 400)
  return out + '</g>'
}

// ---------------------------------------------------------------------------
// Tables, and the room.

/** Where one table stands: which columns of the room, and how far down. */
type Spot = {
  table: Table
  /** Its place among the tables, which picks its rug. */
  index: number
  /** Its first column, its width in columns, and its top in logical pixels. */
  column: number
  span: number
  top: number
}

/**
 * Stands the tables in the room: small ones side by side in a row, one with
 * more seats than the room is wide across it, on as many rows as it needs.
 *
 * A table takes at least two columns where the room has them, so that its
 * name fits on its placard.
 */
export function placeTables(
  tables: readonly Table[],
  columns: number,
  hasPlacard: boolean,
): { spots: Spot[]; bottom: number } {
  const head = hasPlacard ? PLACARD : 0
  const spots: Spot[] = []
  let top = BAND + 4
  let column = 0
  let tall = 0
  tables.forEach((table, index) => {
    const seats = Math.max(1, table.places.length)
    const rows = Math.ceil(seats / columns)
    const span = rows > 1 ? columns : Math.min(columns, Math.max(seats, 2))
    if (column > 0 && column + span > columns) {
      top += tall + TABLE_GAP
      column = 0
      tall = 0
    }
    spots.push({ table, index, column, span, top })
    tall = Math.max(tall, head + rows * TILE_H)
    column += span
  })
  return { spots, bottom: top + tall }
}

function drawTable(spot: Spot, options: SceneOptions, hasPlacard: boolean, motion: Motion): string {
  const { columns, words } = options
  const { table } = spot
  const left = MARGIN + spot.column * TILE_W
  const room = spot.span * TILE_W
  let out = ''
  let y = spot.top
  if (hasPlacard) {
    const text = clip(tableTitle(table, words), Math.floor((room - 10) / 2.1))
    const plate = Math.min(room - 2, widthOf(text) * 2.1 + 8)
    out += box(left, y + 1, plate, 7, WOOD_DARK) + box(left, y + 1, 2, 7, table.isHere ? CLAUDE : '#8fb39b')
    out += words2(left + 4.5, y + 6.2, 3.8, CHALK, text, 700, 'start')
    y += PLACARD
  }
  // The rug under the table: out to the wall at the room's edges, a seam's
  // width short of the table beside it.
  const rows = Math.max(1, Math.ceil(table.places.length / columns))
  const rug = RUGS[spot.index % RUGS.length] ?? '#9b3d2e'
  const rugLeft = left - (spot.column === 0 ? 1.5 : -0.5)
  const rugRight = left + room + (spot.column + spot.span >= columns ? 1.5 : -0.5)
  out += `<rect x="${rugLeft}" y="${y}" width="${rugRight - rugLeft}" height="${rows * TILE_H - 1}" rx="3" fill="${rug}" opacity=".13" shape-rendering="auto"/>`
  table.places.forEach((place, seat) => {
    out += drawSeat(place, left + (seat % columns) * TILE_W, y + Math.floor(seat / columns) * TILE_H, words, motion)
  })
  return out
}

/** The picture of a café, sized for `options.columns` seats across. */
export function drawScene(cafe: Cafe, options: SceneOptions): Scene {
  const columns = clamp(Math.floor(options.columns), 1, 8)
  const width = columns * TILE_W + 2 * MARGIN
  const motion = motionOf(options.hasMotion)
  const hasPlacard = cafe.tables.length > 1 || cafe.tables.some(table => table.hidden > 0) || cafe.hiddenTables > 0

  const { spots, bottom } = placeTables(cafe.tables, columns, hasPlacard)
  let body = ''
  for (const spot of spots) body += drawTable(spot, { ...options, columns }, hasPlacard, motion)
  const height = bottom + FOOT

  const says: string[] = []
  for (const table of cafe.tables) {
    for (const place of table.places) says.push(`${place.label}: ${place.says}`)
  }
  // The alt is drawn as text by a surface that shows no picture, and a surface
  // refuses a text that holds a control character: tidied here, whatever came in.
  const alt = clip(tidy(`${options.words.alt(cafe.seats, cafe.tables.length)} ${says.join('; ')}`), 600)

  const cssWidth = Math.round(width * options.scale)
  const cssHeight = Math.round(height * options.scale)
  const source =
    `<svg xmlns="http://www.w3.org/2000/svg" width="${cssWidth}" height="${cssHeight}" viewBox="0 0 ${width} ${height}" ` +
    `font-family="ui-sans-serif, system-ui, -apple-system, 'PingFang TC', 'Noto Sans TC', 'Microsoft JhengHei', sans-serif" ` +
    `shape-rendering="crispEdges" role="img" aria-label="${escapeXml(alt)}">` +
    drawFloor(width, height) +
    drawBand(width, cafe, options.words, motion) +
    body +
    '</svg>'
  return { source, width: cssWidth, height: cssHeight, alt }
}
