// Who a guest of the 3D café is: a whole person, picked once from its agent's
// key and the same at every visit. Each trait has a roll of its own (the key
// and the trait's name, hashed), so the traits are independent of each other
// and adding a trait never changes the people already in the café.
//
// The main loop of every session wears Claude's orange, in one of three
// shades and four cuts; nobody else wears orange, not even a shoe or a hat.
// Everything else (skin, hair, hats, glasses, beards, build) is the person's own.
//
// This is the 3D café's own look. The pixel-art café in the pane keeps its
// simpler looks (hooks/sprites.ts lookOf) on purpose, so the same agent looks
// different there.

import { INK, blushOf, darken, hash, lighten } from '../../hooks/sprites'
import type { Kind } from '../../hooks/tracker'
import type { Part } from './kit'

export type Garment = 'tee' | 'sweater' | 'hoodie' | 'cardigan' | 'apron' | 'stripes' | 'vest' | 'overalls'
export type Headwear = 'none' | 'cap' | 'beanie' | 'beret' | 'bucket' | 'flatcap' | 'sunhat' | 'tophat' | 'headphones' | 'headband'
export type Legs = 'trousers' | 'shorts' | 'skirt'
export type Eyewear = 'none' | 'glasses' | 'shades'
export type Beard = 'none' | 'mustache' | 'full'

/** How one guest looks: what the body is built from. */
export type Figure = {
  skin: string
  hair: string
  style: number
  headwear: Headwear
  hat: string
  eyewear: Eyewear
  frame: string
  beard: Beard
  garment: Garment
  top: string
  /** The second colour of the garment: an apron, a shirt under a vest, a cardigan's front. */
  trim: string
  scarf: string | undefined
  pants: string
  legs: Legs
  shoes: string
  /** The torso's width, depth and height: the build. */
  width: number
  depth: number
  torso: number
  /** The whole body's size, legs and all: 1 is the café's usual guest. */
  scale: number
}

// ---------------------------------------------------------------------------
// The rolls.

/**
 * A stable number for one trait of one key: FNV-1a, then mixed once more
 * (murmur3's last step) so that keys differing only in their last characters
 * still land on different picks.
 */
export function roll(key: string, trait: string): number {
  let value = hash(`${trait}|${key}`)
  value ^= value >>> 16
  value = Math.imul(value, 0x85ebca6b)
  value ^= value >>> 13
  value = Math.imul(value, 0xc2b2ae35)
  value ^= value >>> 16
  return value >>> 0
}

function pick<T>(items: readonly T[], key: string, trait: string): T {
  const item = items[roll(key, trait) % items.length]
  if (item === undefined) throw new Error('empty table')
  return item
}

/** One of the items, each as likely as its weight. */
function weighted<T>(items: readonly (readonly [T, number])[], key: string, trait: string): T {
  const total = items.reduce((sum, [, weight]) => sum + weight, 0)
  let at = ((roll(key, trait) % 10_000) / 10_000) * total
  for (const [item, weight] of items) {
    if (at < weight) return item
    at -= weight
  }
  const last = items[items.length - 1]
  if (last === undefined) throw new Error('empty table')
  return last[0]
}

/** One of the items other than `not`, when there is another. */
function pickOther(items: readonly string[], not: string, key: string, trait: string): string {
  const others = items.filter(item => item !== not)
  return pick(others.length > 0 ? others : items, key, trait)
}

// ---------------------------------------------------------------------------
// The palettes.

export const SKINS: readonly string[] = ['#f8dcc2', '#f1c6a0', '#e2ab80', '#c98f65', '#a8714e', '#8a5a3d', '#694330']

export const HAIR_COLORS: readonly (readonly [string, number])[] = [
  ['#2b2320', 4], // black
  ['#4a2f1d', 4], // dark brown
  ['#7a4a26', 3], // brown
  ['#b8692e', 1.2], // ginger
  ['#d9b45b', 2], // blond
  ['#ece3cf', 0.8], // platinum
  ['#b9b4ac', 1.2], // silver
  ['#8e74c4', 0.6], // lavender, dyed
  ['#3e8f8f', 0.5], // teal, dyed
  ['#e08aa8', 0.6], // pink, dyed
]

const OATMEAL = '#e6dcc6'
const LEMON = '#e3cf62'
/** The main loop's orange: Claude's own, and a lighter and a deeper one. */
export const MAIN_TOPS: readonly string[] = ['#d97757', '#e58b5d', '#c4613f']
/** Everyone else's: no orange, no red or amber that reads as orange from across the room. */
export const TOPS: readonly string[] = [
  '#4f86c6', // blue
  '#2f4a6d', // navy
  '#58a55c', // green
  '#7d8f4e', // olive
  '#3aa7a3', // teal
  '#8e6bbf', // violet
  '#d27aa8', // pink
  '#9b3d55', // berry
  '#6b7c93', // slate
  '#3b3b45', // charcoal
  OATMEAL,
  LEMON,
]
const SHIRTS: readonly string[] = ['#f4efe6', '#cfe0ef', '#f2e3c4']
const APRONS: readonly string[] = ['#5a4032', '#3f5a7a', '#c9b48f', '#3d5a45', '#2f2a28']
const SCARVES: readonly string[] = ['#b8323a', '#d8b13a', '#f4efe6', '#3f6fb0', '#5f8f5a', '#8e6bbf']
const HATS: readonly string[] = ['#b8323a', '#3f6fb0', '#3d8f5a', '#d8b13a', '#2f2a28', OATMEAL, '#8e6bbf', '#d27aa8', '#5a4032']
const PANTS: readonly string[] = ['#3b4252', '#4a3f35', '#2f3e46', '#55463a', '#36454f', '#40394a', '#3f5f86', '#8a7d62']
const SHOES: readonly (readonly [string, number])[] = [
  ['#2b2320', 4],
  ['#f2efe8', 2],
  ['#6b4a32', 2],
  ['#8a3b4a', 0.7], // oxblood: a red that never reads as the main's orange
]
const FRAMES: readonly string[] = [INK, INK, '#7a4a26', '#9b3d55']
const DENIM = '#3f5f86'
/** How far each leg hangs from the middle. */
export const HIP_X = 0.09
const STRAW = '#e3c98f'
const CREAM = '#f4efe6'

/** The builds: slim, average, broad; short, average, tall. */
const BUILDS: readonly (readonly [readonly [number, number], number])[] = [
  [[0.33, 0.2], 1],
  [[0.36, 0.22], 2],
  [[0.4, 0.23], 1],
]
const TORSOS: readonly (readonly [number, number])[] = [
  [0.28, 1],
  [0.32, 2],
  [0.36, 1],
]
/** Sizes, each as likely: at most 1.08, so a broad guest seated still fits between the chair back and the table. */
export const SCALES: readonly number[] = [0.92, 0.96, 1, 1.04, 1.08]

// ---------------------------------------------------------------------------
// Hair, in the head's own units: the head is 0.42 wide, 0.38 tall and deep,
// its bottom at y 0 and its face at z 0.19.

type Box = { w: number; h: number; d: number; x: number; y: number; z: number }
type Ink = 'hair' | 'hairDark' | 'hat' | 'hatDark' | 'band' | 'straw' | 'pom' | 'frame' | 'lens' | 'mouth'
type Piece = Box & { ink: Ink }

function piece(ink: Ink, w: number, h: number, d: number, x: number, y: number, z: number): Piece {
  return { ink, w, h, d, x, y, z }
}

/** Both sides: the piece and its mirror across the face. */
function pair(ink: Ink, w: number, h: number, d: number, x: number, y: number, z: number): Piece[] {
  return [piece(ink, w, h, d, x, y, z), piece(ink, w, h, d, -x, y, z)]
}

const CROWN = piece('hair', 0.46, 0.11, 0.43, 0, 0.38, -0.01)
const BACK = piece('hair', 0.47, 0.3, 0.08, 0, 0.24, -0.2)
const SIDES = pair('hair', 0.05, 0.16, 0.29, 0.215, 0.28, -0.035)

/** A hair style: its name, how often it is worn and its pieces. */
type Style = { name: string; weight: number; pieces: readonly Piece[] }

/** The hair styles, each as likely as its weight; the first four are those of the café picture. */
export const STYLES: readonly Style[] = [
  { name: 'short', weight: 3, pieces: [CROWN, BACK, ...SIDES] },
  // Swept to one side.
  { name: 'fringe', weight: 2, pieces: [CROWN, BACK, ...pair('hair', 0.05, 0.2, 0.33, 0.215, 0.26, -0.015), piece('hair', 0.3, 0.08, 0.05, -0.07, 0.32, 0.2)] },
  // To the shoulders.
  { name: 'long', weight: 2, pieces: [CROWN, piece('hair', 0.47, 0.56, 0.09, 0, 0.12, -0.2), ...pair('hair', 0.05, 0.46, 0.3, 0.218, 0.16, -0.05)] },
  // A bun on top.
  { name: 'bun', weight: 1.2, pieces: [CROWN, BACK, ...SIDES, piece('hair', 0.18, 0.17, 0.17, 0, 0.5, -0.08)] },
  // Tied at the back.
  { name: 'ponytail', weight: 1.5, pieces: [CROWN, BACK, ...SIDES, piece('hairDark', 0.11, 0.07, 0.06, 0, 0.3, -0.265), piece('hair', 0.12, 0.3, 0.09, 0, 0.13, -0.29)] },
  // One behind each ear.
  {
    name: 'pigtails',
    weight: 0.7,
    pieces: [
      CROWN,
      piece('hair', 0.47, 0.24, 0.08, 0, 0.27, -0.2),
      ...SIDES,
      ...pair('hairDark', 0.08, 0.08, 0.08, 0.27, 0.31, -0.05),
      ...pair('hair', 0.12, 0.28, 0.12, 0.31, 0.14, -0.05),
    ],
  },
  // Big and round.
  { name: 'afro', weight: 1, pieces: [piece('hair', 0.54, 0.2, 0.5, 0, 0.42, -0.02), ...pair('hair', 0.05, 0.26, 0.42, 0.235, 0.25, -0.03), piece('hair', 0.54, 0.36, 0.1, 0, 0.23, -0.22)] },
  // Buzzed close.
  { name: 'buzz', weight: 1.2, pieces: [piece('hair', 0.44, 0.05, 0.41, 0, 0.385, -0.005), piece('hair', 0.44, 0.2, 0.04, 0, 0.27, -0.195), ...pair('hair', 0.03, 0.12, 0.24, 0.215, 0.3, -0.04)] },
  // Bald on top, a ring of hair round the back.
  { name: 'bald', weight: 0.8, pieces: [piece('hair', 0.44, 0.16, 0.05, 0, 0.2, -0.195), ...pair('hair', 0.035, 0.14, 0.22, 0.215, 0.21, -0.06)] },
  // With a straight fringe.
  { name: 'bob', weight: 1.5, pieces: [CROWN, piece('hair', 0.48, 0.36, 0.09, 0, 0.2, -0.2), ...pair('hair', 0.06, 0.3, 0.36, 0.225, 0.21, -0.01), piece('hair', 0.44, 0.08, 0.05, 0, 0.33, 0.2)] },
  // Swept up at the front.
  { name: 'quiff', weight: 1.2, pieces: [CROWN, BACK, ...SIDES, piece('hair', 0.34, 0.11, 0.26, 0, 0.47, 0.06)] },
  { name: 'mohawk', weight: 0.4, pieces: [piece('hair', 0.12, 0.14, 0.46, 0, 0.44, -0.02), piece('hair', 0.12, 0.24, 0.06, 0, 0.27, -0.2)] },
  // Tufts standing up all over.
  {
    name: 'spiky',
    weight: 0.8,
    pieces: [
      CROWN,
      BACK,
      ...SIDES,
      piece('hair', 0.11, 0.13, 0.11, -0.14, 0.49, 0.08),
      piece('hair', 0.11, 0.17, 0.11, 0, 0.51, 0.1),
      piece('hair', 0.11, 0.13, 0.11, 0.14, 0.49, 0.06),
      piece('hair', 0.11, 0.14, 0.11, -0.08, 0.5, -0.1),
      piece('hair', 0.11, 0.13, 0.11, 0.09, 0.49, -0.12),
    ],
  },
  // Two buns on top.
  { name: 'spacebuns', weight: 0.8, pieces: [CROWN, BACK, ...SIDES, ...pair('hair', 0.16, 0.15, 0.16, 0.15, 0.49, -0.04)] },
]

/** What a hat covers: no hair shows above this. Headphones and a headband cover none. */
export const BANDS: Readonly<Record<Headwear, number>> = {
  none: Infinity,
  cap: 0.31,
  beanie: 0.28,
  beret: 0.38,
  bucket: 0.34,
  flatcap: 0.35,
  sunhat: 0.36,
  tophat: 0.38,
  headphones: Infinity,
  headband: Infinity,
}

const HEADWEAR: readonly (readonly [Headwear, number])[] = [
  ['none', 9],
  ['cap', 2],
  ['beanie', 2],
  ['beret', 1.2],
  ['bucket', 1.2],
  ['flatcap', 1],
  ['sunhat', 0.8],
  ['tophat', 0.5],
  ['headphones', 2],
  ['headband', 1],
]

const top = (box: Box): number => box.y + box.h / 2
const bottom = (box: Box): number => box.y - box.h / 2

/** The hair under a hat: what would show above its band cut off there. */
function trimmed(hair: readonly Piece[], band: number): Piece[] {
  const kept: Piece[] = []
  for (const each of hair) {
    if (top(each) <= band) kept.push(each)
    else if (bottom(each) < band - 0.01) kept.push({ ...each, h: band - bottom(each), y: (band + bottom(each)) / 2 })
  }
  return kept
}

/** The box round the head and its hair between heights `y0` and `y1`, and how high it goes between depths `z0` and `z1`. */
function wrap(hair: readonly Piece[], y0: number, y1: number, z0 = -1, z1 = 1): { x: number; front: number; back: number; top: number } {
  let x = 0.21
  let front = 0.19
  let back = -0.19
  let high = 0.38
  for (const each of hair) {
    if (each.z + each.d / 2 <= z0 || each.z - each.d / 2 >= z1) continue
    high = Math.max(high, top(each))
    if (top(each) <= y0 || bottom(each) >= y1) continue
    x = Math.max(x, Math.abs(each.x) + each.w / 2)
    front = Math.max(front, each.z + each.d / 2)
    back = Math.min(back, each.z - each.d / 2)
  }
  return { x, front, back, top: high }
}

function hatPieces(headwear: Headwear, hair: readonly Piece[]): Piece[] {
  switch (headwear) {
    case 'none':
      return []
    case 'cap':
      return [piece('hat', 0.47, 0.13, 0.45, 0, 0.375, -0.01), piece('hatDark', 0.4, 0.035, 0.2, 0, 0.325, 0.27), piece('hatDark', 0.06, 0.03, 0.06, 0, 0.455, -0.01)]
    case 'beanie':
      return [piece('hat', 0.47, 0.19, 0.45, 0, 0.395, -0.01), piece('hatDark', 0.485, 0.07, 0.465, 0, 0.315, -0.01), piece('pom', 0.13, 0.11, 0.13, 0, 0.54, -0.01)]
    case 'beret':
      // Down on the head, so no gap shows under it on a bald head.
      return [piece('hat', 0.5, 0.07, 0.47, 0.03, 0.415, -0.02), piece('hat', 0.04, 0.04, 0.04, 0.03, 0.47, -0.02)]
    case 'bucket':
      return [piece('hat', 0.44, 0.15, 0.42, 0, 0.435, -0.01), piece('hatDark', 0.58, 0.03, 0.56, 0, 0.355, -0.01)]
    case 'flatcap':
      return [piece('hat', 0.48, 0.09, 0.46, 0, 0.395, -0.02), piece('hatDark', 0.42, 0.04, 0.12, 0, 0.37, 0.24)]
    case 'sunhat':
      return [piece('straw', 0.42, 0.13, 0.4, 0, 0.445, -0.01), piece('hat', 0.43, 0.035, 0.41, 0, 0.4, -0.01), piece('straw', 0.66, 0.025, 0.62, 0, 0.372, -0.01)]
    case 'tophat':
      return [piece('hatDark', 0.56, 0.03, 0.52, 0, 0.395, -0.01), piece('hat', 0.34, 0.27, 0.32, 0, 0.545, -0.01), piece('band', 0.35, 0.05, 0.33, 0, 0.44, -0.01)]
    case 'headphones': {
      // The cups on the ears, the band over the crown just ahead of a bun or a ponytail. Only the hair
      // beside the ears' front counts, so pigtails, tied just behind the ears, hang behind the cups.
      const cupX = wrap(hair, 0.15, 0.3, 0.02, 0.12).x + 0.02
      const bandY = wrap(hair, 0, 1, 0.01, 0.08).top + 0.02
      return [
        ...pair('hat', 0.06, 0.15, 0.15, cupX, 0.21, 0.045),
        ...pair('hatDark', 0.03, bandY - 0.27, 0.06, cupX, (bandY + 0.27) / 2, 0.045),
        piece('hatDark', cupX * 2 + 0.03, 0.035, 0.07, 0, bandY, 0.045),
      ]
    }
    case 'headband': {
      // The band goes round the head and its hair; a tie stays outside it.
      const round = wrap(hair.filter(each => each.ink === 'hair'), 0.305, 0.355)
      const front = round.front + 0.006
      const back = round.back - 0.006
      return [piece('hat', round.x * 2 + 0.012, 0.05, front - back, 0, 0.33, (front + back) / 2)]
    }
  }
}

function eyewearPieces(eyewear: Eyewear): Piece[] {
  switch (eyewear) {
    case 'none':
      return []
    case 'glasses':
      return [
        ...pair('frame', 0.13, 0.022, 0.012, 0.09, 0.224, 0.197),
        ...pair('frame', 0.13, 0.016, 0.012, 0.09, 0.122, 0.197),
        ...pair('frame', 0.018, 0.118, 0.012, 0.146, 0.173, 0.197),
        ...pair('frame', 0.018, 0.118, 0.012, 0.034, 0.173, 0.197),
        piece('frame', 0.05, 0.016, 0.012, 0, 0.19, 0.197),
        ...pair('frame', 0.012, 0.02, 0.16, 0.214, 0.21, 0.11),
      ]
    case 'shades':
      return [
        ...pair('lens', 0.15, 0.09, 0.014, 0.09, 0.175, 0.198),
        piece('lens', 0.34, 0.025, 0.014, 0, 0.215, 0.198),
        ...pair('lens', 0.012, 0.022, 0.16, 0.214, 0.21, 0.11),
      ]
  }
}

function beardPieces(beard: Beard): Piece[] {
  switch (beard) {
    case 'none':
      return []
    case 'mustache':
      return [piece('hair', 0.15, 0.035, 0.014, 0, 0.093, 0.197)]
    case 'full':
      return [
        piece('hair', 0.4, 0.13, 0.02, 0, 0.065, 0.196),
        ...pair('hair', 0.03, 0.16, 0.08, 0.2, 0.11, 0.155),
        piece('hair', 0.3, 0.05, 0.1, 0, 0.005, 0.15),
        piece('mouth', 0.07, 0.025, 0.01, 0, 0.06, 0.209),
      ]
  }
}

// ---------------------------------------------------------------------------
// The figure of a key.

/**
 * The look of the agent with this key. The main loop's key carries its
 * session, so every session's main is a different person, all in orange.
 */
export function figureOf(key: string, kind: Kind): Figure {
  const isMain = kind === 'main'
  const garment: Garment = isMain
    ? weighted<Garment>([['sweater', 3], ['hoodie', 2], ['tee', 2], ['cardigan', 1.5]], key, 'garment')
    : weighted<Garment>([['sweater', 3], ['tee', 3], ['hoodie', 2], ['cardigan', 1.2], ['apron', 1.2], ['stripes', 1], ['vest', 1], ['overalls', 0.6]], key, 'garment')
  const topColor = pick(isMain ? MAIN_TOPS : TOPS, key, 'top')
  const trim =
    garment === 'apron' ? pickOther(APRONS, topColor, key, 'trim') : garment === 'overalls' ? DENIM : garment === 'stripes' ? CREAM : pick(SHIRTS, key, 'trim')
  const [width, depth] = weighted(BUILDS, key, 'build')
  const headwear = weighted(HEADWEAR, key, 'headwear')
  return {
    skin: pick(SKINS, key, 'skin'),
    hair: weighted(HAIR_COLORS, key, 'hair'),
    style: weighted(
      STYLES.map((each, index) => [index, each.weight] as const),
      key,
      'style',
    ),
    headwear,
    hat: pickOther(HATS, topColor, key, 'hat'),
    eyewear: weighted<Eyewear>([['none', 10], ['glasses', 4], ['shades', 1.2]], key, 'eyewear'),
    frame: pick(FRAMES, key, 'frame'),
    beard: weighted<Beard>([['none', 14], ['mustache', 1.5], ['full', 2.5]], key, 'beard'),
    garment,
    top: topColor,
    trim,
    scarf: roll(key, 'scarf') % 100 < 12 && garment !== 'overalls' ? pickOther(SCARVES, topColor, key, 'scarf color') : undefined,
    pants: garment === 'overalls' ? DENIM : pick(PANTS, key, 'pants'),
    legs: garment === 'overalls' ? 'trousers' : weighted<Legs>([['trousers', 7], ['shorts', 2], ['skirt', 1.5]], key, 'legs'),
    shoes: weighted(SHOES, key, 'shoes'),
    width,
    depth,
    torso: weighted(TORSOS, key, 'torso'),
    scale: pick(SCALES, key, 'scale'),
  }
}

// ---------------------------------------------------------------------------
// The figure as parts: the head, the torso, an arm and a leg, each to be
// merged into one geometry and painted in its vertices.

/** The head's parts (the head itself, its face, hair, hat, glasses and beard) and how high its top is. */
export function headParts(figure: Figure): { parts: Part[]; top: number } {
  const blush = blushOf(figure.skin)
  const style = STYLES[figure.style] ?? STYLES[0]
  const hair = trimmed(style?.pieces ?? [], BANDS[figure.headwear])
  const pieces = [...hair, ...hatPieces(figure.headwear, hair), ...eyewearPieces(figure.eyewear), ...beardPieces(figure.beard)]
  const inks: Readonly<Record<Ink, string>> = {
    hair: figure.hair,
    hairDark: darken(figure.hair),
    hat: figure.hat,
    hatDark: darken(figure.hat),
    band: lighten(figure.hat),
    straw: STRAW,
    // Red on an oatmeal hat, cream on the rest.
    pom: figure.hat === OATMEAL ? '#b8323a' : CREAM,
    frame: figure.frame,
    lens: '#1d1f24',
    mouth: '#b5574f',
  }
  const parts: Part[] = [
    { color: figure.skin, w: 0.42, h: 0.38, d: 0.38, x: 0, y: 0.19, z: 0 },
    { color: INK, w: 0.05, h: 0.08, d: 0.02, x: 0.09, y: 0.17, z: 0.191 },
    { color: INK, w: 0.05, h: 0.08, d: 0.02, x: -0.09, y: 0.17, z: 0.191 },
    { color: blush, w: 0.07, h: 0.03, d: 0.01, x: 0.145, y: 0.1, z: 0.191 },
    { color: blush, w: 0.07, h: 0.03, d: 0.01, x: -0.145, y: 0.1, z: 0.191 },
    { color: '#b5574f', w: 0.06, h: 0.025, d: 0.01, x: 0, y: 0.065, z: 0.191 },
    ...pieces.map(each => ({ color: inks[each.ink], w: each.w, h: each.h, d: each.d, x: each.x, y: each.y, z: each.z })),
  ]
  const high = parts.reduce((most, each) => Math.max(most, each.y + each.h / 2), 0.38)
  return { parts, top: high }
}

/** A stripe on cream: the top's colour, or navy when that is too pale to show. */
function stripeOf(top: string): string {
  return top === OATMEAL || top === LEMON ? '#2f4a6d' : top
}

/** The torso's parts, from the hips (y 0) up to the neck (y `figure.torso`). */
export function torsoParts(figure: Figure): Part[] {
  const w = figure.width
  const d = figure.depth
  const h = figure.torso
  const front = d / 2
  const back = -d / 2
  const top = figure.top
  const part = (color: string, pw: number, ph: number, pd: number, x: number, y: number, z: number): Part => ({ color, w: pw, h: ph, d: pd, x, y, z })
  const parts: Part[] = []
  switch (figure.garment) {
    case 'tee':
    case 'sweater':
      parts.push(part(top, w, h, d, 0, h / 2, 0), part(lighten(top), 0.18, 0.05, 0.02, 0, h - 0.03, front + 0.002))
      break
    case 'hoodie': {
      const dark = darken(top)
      parts.push(
        part(top, w, h, d, 0, h / 2, 0),
        // The hood lies flat on the back: seated, the guest sits forward by as much as it sticks out (seatOf).
        part(dark, 0.3, 0.11, 0.03, 0, h - 0.075, back - 0.012),
        part(dark, 0.22, 0.08, 0.012, 0, 0.08, front + 0.004),
        part(CREAM, 0.015, 0.08, 0.012, 0.045, h - 0.08, front + 0.004),
        part(CREAM, 0.015, 0.08, 0.012, -0.045, h - 0.08, front + 0.004),
      )
      break
    }
    case 'cardigan':
      parts.push(part(top, w, h, d, 0, h / 2, 0), part(figure.trim, 0.1, h - 0.01, 0.012, 0, h / 2, front + 0.004), part(darken(top), 0.02, 0.02, 0.012, 0.065, h * 0.6, front + 0.004), part(darken(top), 0.02, 0.02, 0.012, 0.065, h * 0.3, front + 0.004))
      break
    case 'apron':
      parts.push(
        part(top, w, h, d, 0, h / 2, 0),
        part(figure.trim, w - 0.08, h - 0.05, 0.012, 0, (h - 0.05) / 2, front + 0.006),
        part(figure.trim, 0.03, 0.06, 0.012, 0.09, h - 0.03, front + 0.006),
        part(figure.trim, 0.03, 0.06, 0.012, -0.09, h - 0.03, front + 0.006),
        part(figure.trim, w + 0.012, 0.035, d + 0.012, 0, 0.09, 0),
        part(darken(figure.trim), 0.13, 0.06, 0.01, 0, 0.08, front + 0.014),
      )
      break
    case 'stripes':
      parts.push(part(CREAM, w, h, d, 0, h / 2, 0))
      for (const at of [0.2, 0.45, 0.7]) parts.push(part(stripeOf(top), w + 0.01, 0.04, d + 0.01, 0, h * at, 0))
      break
    case 'vest':
      parts.push(part(figure.trim, w, h, d, 0, h / 2, 0), part(top, w + 0.01, h - 0.05, d + 0.01, 0, (h - 0.05) / 2, 0), part(figure.trim, 0.09, 0.12, 0.012, 0, h - 0.08, front + 0.01), part(darken(top), 0.02, 0.02, 0.01, 0, h * 0.35, front + 0.012))
      break
    case 'overalls':
      parts.push(
        part(top, w, h, d, 0, h / 2, 0),
        part(DENIM, w + 0.012, 0.09, d + 0.012, 0, 0.045, 0),
        part(DENIM, w - 0.1, h * 0.5, 0.012, 0, h * 0.25, front + 0.006),
        part(DENIM, 0.04, h * 0.5, 0.012, 0.09, h * 0.75, front + 0.006),
        part(DENIM, 0.04, h * 0.5, 0.012, -0.09, h * 0.75, front + 0.006),
        part(DENIM, 0.04, h * 0.9, 0.012, 0.09, h * 0.5, back - 0.006),
        part(DENIM, 0.04, h * 0.9, 0.012, -0.09, h * 0.5, back - 0.006),
        part(STRAW, 0.03, 0.03, 0.008, 0.09, h * 0.5, front + 0.014),
        part(STRAW, 0.03, 0.03, 0.008, -0.09, h * 0.5, front + 0.014),
      )
      break
  }
  if (figure.scarf !== undefined) {
    parts.push(part(figure.scarf, w + 0.04, 0.06, d + 0.04, 0, h - 0.03, 0), part(figure.scarf, 0.075, 0.17, 0.02, 0.07, h - 0.12, front + 0.02), part(lighten(figure.scarf), 0.077, 0.02, 0.022, 0.07, h - 0.17, front + 0.02))
  }
  return parts
}

/** The front face of a chair's back, behind the chair's middle (room.ts, chairGeometry: its top rail). */
const CHAIR_BACK = -0.155

/**
 * Seated, where the hips sit from the chair's middle toward its front: back on
 * the seat (0.04 behind the middle), but no further back than what the guest
 * wears allows, so a hood, a scarf or a broad back stays out of the chair back.
 */
export function seatOf(figure: Figure): number {
  const back = torsoParts(figure).reduce((most, each) => Math.max(most, each.d / 2 - each.z), 0)
  return Math.max(-0.04, CHAIR_BACK + 0.005 + figure.scale * back)
}

/** An arm's parts, from the shoulder (y 0) down to the hand. */
export function armParts(figure: Figure): Part[] {
  const sleeve = figure.garment === 'vest' ? figure.trim : figure.garment === 'stripes' ? CREAM : figure.top
  const part = (color: string, w: number, h: number, d: number, y: number): Part => ({ color, w, h, d, x: 0, y, z: 0 })
  const parts: Part[] = []
  if (figure.garment === 'tee' || figure.garment === 'overalls') {
    parts.push(part(sleeve, 0.1, 0.09, 0.12, -0.045), part(figure.skin, 0.085, 0.12, 0.1, -0.15))
  } else {
    parts.push(part(sleeve, 0.1, 0.2, 0.12, -0.1))
    if (figure.garment === 'stripes') parts.push(part(stripeOf(figure.top), 0.11, 0.04, 0.13, -0.09))
    if (figure.garment === 'cardigan' || figure.garment === 'sweater') parts.push(part(darken(sleeve), 0.104, 0.025, 0.124, -0.19))
  }
  parts.push(part(figure.skin, 0.1, 0.07, 0.11, -0.235))
  return parts
}

/** A leg's parts, from the hip (y 0) down to the shoe. */
export function legParts(figure: Figure): Part[] {
  const part = (color: string, w: number, h: number, d: number, y: number, z = 0): Part => ({ color, w, h, d, x: 0, y, z })
  const shoe = part(figure.shoes, 0.16, 0.05, 0.21, -0.255, 0.02)
  switch (figure.legs) {
    case 'trousers':
      return [part(figure.pants, 0.15, 0.23, 0.17, -0.115), shoe]
    case 'shorts':
      return [part(figure.pants, 0.16, 0.11, 0.18, -0.055), part(figure.skin, 0.12, 0.13, 0.14, -0.17), shoe]
    case 'skirt':
      // Each leg carries the half of the skirt on its side and a little past the middle. Seated, the leg turns
      // forward and the skirt's depth stands up above the hips, so it is no deeper than shorts: it lies on the lap.
      return [part(figure.pants, 2 * HIP_X + 0.04, 0.15, 0.18, -0.065), part(figure.skin, 0.12, 0.1, 0.14, -0.18), shoe]
  }
}
