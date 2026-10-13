// The café's pixel art: each sprite a small grid of characters, one character
// a color, drawn as one SVG path per color, so a whole seat costs about three
// thousand characters of markup rather than a rectangle per pixel.
//
// Pure: no `$` here. A grid's unit is one logical pixel; the scene scales it.

/** A sprite: rows of equal length, `.` for a pixel left clear. */
export type Grid = readonly string[]

/** Which color each character of a grid stands for. */
export type Inks = Readonly<Record<string, string>>

/** The outline every sprite shares. */
export const INK = '#2b2320'

/**
 * One path's `d` for every pixel of `char` in the grid, as rectangles (a run
 * along a row, taken down every row that repeats it), offset by (`dx`, `dy`);
 * the empty string when the grid has none.
 */
export function runs(grid: Grid, char: string, dx = 0, dy = 0): string {
  const width = grid.reduce((most, row) => Math.max(most, row.length), 0)
  const taken = new Uint8Array(width * grid.length)
  const isFree = (x: number, y: number): boolean => grid[y]?.[x] === char && taken[y * width + x] === 0
  let d = ''
  for (let y = 0; y < grid.length; y += 1) {
    for (let x = 0; x < width; x += 1) {
      if (!isFree(x, y)) continue
      let end = x
      while (end < width && isFree(end, y)) end += 1
      let bottom = y + 1
      for (; bottom < grid.length; bottom += 1) {
        let isWhole = true
        for (let column = x; column < end && isWhole; column += 1) isWhole = isFree(column, bottom)
        if (!isWhole) break
      }
      for (let row = y; row < bottom; row += 1) taken.fill(1, row * width + x, row * width + end)
      d += `M${x + dx} ${y + dy}h${end - x}v${bottom - y}h${x - end}z`
      x = end - 1
    }
  }
  return d
}

/** A grid as paths, one per color the inks name, in the inks' order. */
export function paint(grid: Grid, inks: Inks, dx = 0, dy = 0): string {
  let out = ''
  for (const [char, color] of Object.entries(inks)) {
    const d = runs(grid, char, dx, dy)
    if (d !== '') out += `<path fill="${color}" d="${d}"/>`
  }
  return out
}

/** A filled rectangle of whole pixels. */
export function box(x: number, y: number, width: number, height: number, fill: string, extra = ''): string {
  return `<rect x="${x}" y="${y}" width="${width}" height="${height}" fill="${fill}"${extra}/>`
}

// ---------------------------------------------------------------------------
// People. A head and shoulders seen from the front, 16 wide and 20 tall: two
// rows of headroom for a bun or a cap, the head, and the chest down to where
// the desk hides the rest.
//   o outline   H hair   S skin   B blush   E eye   M mouth
//   T top       c collar

const HEAD_SHORT: Grid = [
  '................',
  '................',
  '....oooooooo....',
  '...oHHHHHHHHo...',
  '..oHHHHHHHHHHo..',
  '.oHHHHHHHHHHHHo.',
  '.oHHSSSSSSSSHHo.',
  '.oHSSSSSSSSSSHo.',
  '.oHSSESSSSESSHo.',
  '.oHSSESSSSESSHo.',
  '.oSBSSSSSSSSBSo.',
  '..oSSSSMMSSSSo..',
  '...oSSSSSSSSo...',
]

const HEAD_FRINGE: Grid = [
  '................',
  '................',
  '....oooooooo....',
  '...oHHHHHHHHo...',
  '..oHHHHHHHHHHo..',
  '.oHHHHHHHHHHHHo.',
  '.oHHHHHHHSSHHHo.',
  '.oHHHHSSSSSSHHo.',
  '.oHSSESSSSESSHo.',
  '.oHSSESSSSESSHo.',
  '.oSBSSSSSSSSBSo.',
  '..oSSSSMMSSSSo..',
  '...oSSSSSSSSo...',
]

const HEAD_LONG: Grid = [
  '................',
  '................',
  '....oooooooo....',
  '...oHHHHHHHHo...',
  '..oHHHHHHHHHHo..',
  '.oHHHHHHHHHHHHo.',
  '.oHHSSSSSSSSHHo.',
  '.oHSSSSSSSSSSHo.',
  '.oHSSESSSSESSHo.',
  '.oHSSESSSSESSHo.',
  '.oHBSSSSSSSSBHo.',
  '.oHSSSSMMSSSSHo.',
  '.oHHSSSSSSSSHHo.',
]

const HEAD_BUN: Grid = [
  '......oooo......',
  '.....oHHHHo.....',
  '....ooHHHHoo....',
  '...oHHHHHHHHo...',
  '..oHHHHHHHHHHo..',
  '.oHHHHHHHHHHHHo.',
  '.oHHSSSSSSSSHHo.',
  '.oHSSSSSSSSSSHo.',
  '.oHSSESSSSESSHo.',
  '.oHSSESSSSESSHo.',
  '.oSBSSSSSSSSBSo.',
  '..oSSSSMMSSSSo..',
  '...oSSSSSSSSo...',
]

const HEAD_CAP: Grid = [
  '................',
  '................',
  '....oooooooo....',
  '...oCCCCCCCCo...',
  '..oCCCCCCCCCCo..',
  '.oCCCCCCCCCCCCoo',
  '.oooooooooooooKo',
  '.oHSSSSSSSSSSHoo',
  '.oHSSESSSSESSHo.',
  '.oHSSESSSSESSHo.',
  '.oSBSSSSSSSSBSo.',
  '..oSSSSMMSSSSo..',
  '...oSSSSSSSSo...',
]

/** The heads, by style. A long style's hair reaches the shoulders. */
export const HEADS: readonly Grid[] = [HEAD_SHORT, HEAD_FRINGE, HEAD_LONG, HEAD_BUN, HEAD_CAP]

/** The chest, under any head: rows 13 to 19 of the 16 by 20 grid. */
export const CHEST: Grid = [
  '....ooSSSSoo....',
  '..ooTTccccTToo..',
  '.oTTTTTTTTTTTTo.',
  '.oTTTTTTTTTTTTo.',
  '.oTTTTTTTTTTTTo.',
  '.oTTTTTTTTTTTTo.',
  '.oTTTTTTTTTTTTo.',
]

/** Where the chest starts in the person grid. */
export const CHEST_ROW = 13

/** Eyes shut and smiling, over rows 8 and 9: what a seat that is done wears. */
export const EYES_HAPPY: Grid = ['...E.E....E.E...', '....E......E....']

/** Eyes shut tight, over rows 8 and 9: what a seat that failed wears. */
export const EYES_SHUT: Grid = ['................', '...EEE....EEE...']

export const SKINS: readonly string[] = ['#f6d3b3', '#eebd94', '#c98f65', '#8f5d3f']
export const HAIRS: readonly string[] = ['#2b2320', '#4a2f1d', '#7a4a26', '#b5651d', '#d9b45b', '#8f8f9a', '#6b4fa3']
export const TOPS: readonly string[] = [
  '#4f86c6',
  '#58a55c',
  '#c9534a',
  '#8e6bbf',
  '#3aa7a3',
  '#d27aa8',
  '#6b7c93',
  '#e0a03a',
]
export const CAPS: readonly string[] = ['#c9534a', '#3f6fb0', '#3d8f5a', '#e0a03a']

/** How one person looks: picked once from the agent's id, the same every draw. */
export type Look = {
  head: number
  skin: string
  hair: string
  top: string
  collar: string
  cap: string
}

/** The main loop's look, the same in every session: Claude's own orange. */
export const MAIN_LOOK: Look = {
  head: 1,
  skin: '#f6d3b3',
  hair: '#4a2f1d',
  top: '#d97757',
  collar: '#f0a58c',
  cap: '#d97757',
}

/** A small stable hash of a string (FNV-1a), for picking a look. */
export function hash(text: string): number {
  let value = 0x811c9dc5
  for (let index = 0; index < text.length; index += 1) {
    value ^= text.charCodeAt(index)
    value = Math.imul(value, 0x01000193)
  }
  return value >>> 0
}

function pick<T>(items: readonly T[], seed: number, fallback: T): T {
  return items[seed % items.length] ?? fallback
}

/** The look of the agent with this id. */
export function lookOf(id: string): Look {
  const seed = hash(id)
  const top = pick(TOPS, seed >>> 3, '#4f86c6')
  return {
    head: (seed >>> 1) % HEADS.length,
    skin: pick(SKINS, seed >>> 7, '#f6d3b3'),
    hair: pick(HAIRS, seed >>> 11, '#2b2320'),
    top,
    collar: lighten(top),
    cap: pick(CAPS, seed >>> 17, '#c9534a'),
  }
}

/** A color a third of the way to white. */
export function lighten(hex: string): string {
  const value = Number.parseInt(hex.slice(1), 16)
  const mix = (channel: number): number => Math.round(channel + (255 - channel) / 3)
  const red = mix((value >> 16) & 255)
  const green = mix((value >> 8) & 255)
  const blue = mix(value & 255)
  return '#' + ((red << 16) | (green << 8) | blue).toString(16).padStart(6, '0')
}

/** A color a quarter of the way to black. */
export function darken(hex: string): string {
  const value = Number.parseInt(hex.slice(1), 16)
  const mix = (channel: number): number => Math.round(channel * 0.75)
  const red = mix((value >> 16) & 255)
  const green = mix((value >> 8) & 255)
  const blue = mix(value & 255)
  return '#' + ((red << 16) | (green << 8) | blue).toString(16).padStart(6, '0')
}

/** The inks of a person's grid for a look. */
export function inksOf(look: Look): Inks {
  return {
    o: INK,
    H: look.hair,
    C: look.cap,
    K: darken(look.cap),
    S: look.skin,
    B: blushOf(look.skin),
    E: INK,
    M: '#b5574f',
    T: look.top,
    c: look.collar,
  }
}

/** A touch redder than the skin: the cheeks. */
export function blushOf(skin: string): string {
  // A touch redder than the skin, so it reads on every tone.
  const value = Number.parseInt(skin.slice(1), 16)
  const red = Math.min(255, ((value >> 16) & 255) + 6)
  const green = Math.round(((value >> 8) & 255) * 0.82)
  const blue = Math.round((value & 255) * 0.82)
  return '#' + ((red << 16) | (green << 8) | blue).toString(16).padStart(6, '0')
}

// ---------------------------------------------------------------------------
// Bubble icons, 7 by 7. `#` is the icon's own ink, `a` its accent.

export type IconName =
  | 'pencil'
  | 'shell'
  | 'globe'
  | 'gear'
  | 'people'
  | 'book'
  | 'lens'
  | 'list'
  | 'bang'
  | 'query'
  | 'check'
  | 'cross'

export const ICONS: Readonly<Record<IconName, Grid>> = {
  pencil: ['.....aa', '....a#a', '...###.', '..###..', '.###...', '###....', '##.....'],
  shell: ['.......', '#......', '.#.....', '..#....', '.#.....', '#..aaa.', '.......'],
  globe: ['..###..', '.#a#a#.', '#aa#aa#', '#######', '#aa#aa#', '.#a#a#.', '..###..'],
  gear: ['.#.#.#.', '#######', '.##a##.', '##aaa##', '.##a##.', '#######', '.#.#.#.'],
  people: ['.##....', '.##..aa', '####.aa', '####aaa', '####aaa', '....aaa', '.......'],
  book: ['.......', '###.###', '#aa#aa#', '#aa#aa#', '#aa#aa#', '###.###', '.......'],
  lens: ['.###...', '#aaa#..', '#aaa#..', '#aaa#..', '.###...', '....##.', '.....##'],
  list: ['a.####.', '.......', 'a.####.', '.......', 'a.###..', '.......', 'a.####.'],
  bang: ['..###..', '..###..', '..###..', '..###..', '.......', '..###..', '..###..'],
  query: ['.####..', '##..##.', '....##.', '...##..', '..##...', '.......', '..##...'],
  check: ['.......', '......#', '.....##', '#...##.', '##.##..', '.###...', '..#....'],
  cross: ['#.....#', '##...##', '.##.##.', '..###..', '.##.##.', '##...##', '#.....#'],
}

// ---------------------------------------------------------------------------
// The café's cat, asleep on the counter: 13 by 6.
//   o outline   F fur   f fur shade   p paw and ear pink

export const CAT: Grid = [
  '.o.o.........',
  'oFoFo..ooooo.',
  'oFFFFooFFFFFo',
  'oFfFFFFFFFFFo',
  '.oFFFFFFFFFFo',
  '..ooooooooooo',
]

export const CAT_INKS: Inks = { o: INK, F: '#e9a34f', f: '#c47f33' }
