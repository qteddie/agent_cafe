// Who the guests of the 3D café are: every agent a person of its own, the
// main loops in Claude's orange, and nothing that pokes through a hat or a chair.

import { describe, expect, test } from 'claude-code/testing'

import { INK, blushOf, darken } from '../hooks/sprites'
import { BANDS, HIP_X, MAIN_TOPS, SCALES, STYLES, armParts, figureOf, headParts, legParts, seatOf, torsoParts } from '../web/cafe3d/figure'
import type { Figure, Headwear } from '../web/cafe3d/figure'

const SESSIONS = [
  '5d0c1f2e-7a3b-4c9d-8e1f-2a3b4c5d6e7f',
  '9e8d7c6b-5a49-4382-9170-6f5e4d3c2b1a',
  '1f2e3d4c-5b6a-4798-8a9b-0c1d2e3f4a5b',
  'a0b1c2d3-e4f5-4a6b-9c7d-8e9f0a1b2c3d',
  '7c6b5a49-3827-4165-9f4e-3d2c1b0a9f8e',
  'c3d2e1f0-a9b8-4c7d-8e6f-5a4b3c2d1e0f',
  '2b3c4d5e-6f70-4182-93a4-b5c6d7e8f901',
  'e1d2c3b4-a596-4877-8695-a4b3c2d1e0f9',
  '4a5b6c7d-8e9f-4a0b-8c1d-2e3f4a5b6c7d',
]

/** A colour as the eye sees it (CIELAB): its lightness, then how red or green, how yellow or blue. */
function labOf(hex: string): [number, number, number] {
  const value = Number.parseInt(hex.slice(1), 16)
  const linear = (channel: number): number => {
    const share = channel / 255
    return share <= 0.04045 ? share / 12.92 : ((share + 0.055) / 1.055) ** 2.4
  }
  const [r, g, b] = [linear((value >> 16) & 255), linear((value >> 8) & 255), linear(value & 255)]
  const f = (t: number): number => (t > 216 / 24389 ? Math.cbrt(t) : ((24389 / 27) * t + 16) / 116)
  const x = f((0.4124 * r + 0.3576 * g + 0.1805 * b) / 0.95047)
  const y = f(0.2126 * r + 0.7152 * g + 0.0722 * b)
  const z = f((0.0193 * r + 0.1192 * g + 0.9505 * b) / 1.08883)
  return [116 * y - 16, 500 * (x - y), 200 * (y - z)]
}

/** How far apart two colours look: 0 for the same, about 2 for just told apart. */
function distance(one: string, other: string): number {
  const [a, b] = [labOf(one), labOf(other)]
  return Math.hypot(a[0] - b[0], a[1] - b[1], a[2] - b[2])
}

/** The place of a hair style in STYLES, by its name. */
function styleOf(name: string): number {
  const index = STYLES.findIndex(each => each.name === name)
  if (index < 0) throw new Error(`no style ${name}`)
  return index
}

describe('who a guest is', () => {
  test('the same key is the same person, every time', () => {
    for (const session of SESSIONS) {
      expect(figureOf(`${session}/main`, 'main')).toEqual(figureOf(`${session}/main`, 'main'))
      expect(figureOf(`${session}/a1b2c3`, 'sub')).toEqual(figureOf(`${session}/a1b2c3`, 'sub'))
    }
  })

  test('every main loop wears orange, and nobody else wears anything that looks like it', () => {
    for (const session of SESSIONS) expect(MAIN_TOPS).toContain(figureOf(`${session}/main`, 'main').top)
    // Every colour a subagent or a teammate is built from (top, trim, scarf, trousers, shoes, hat, pom,
    // glasses), all but its own skin, cheeks and hair, its eyes and its mouth.
    const worn = new Set<string>()
    for (let index = 0; index < 2000; index += 1) {
      for (const kind of ['sub', 'mate'] as const) {
        const figure = figureOf(`${SESSIONS[index % SESSIONS.length]}/s${index}`, kind)
        const own = new Set([figure.skin, blushOf(figure.skin), figure.hair, darken(figure.hair), INK, '#b5574f'])
        for (const { color } of [...headParts(figure).parts, ...torsoParts(figure), ...armParts(figure), ...legParts(figure)]) {
          if (!own.has(color)) worn.add(color)
        }
      }
    }
    // The three oranges are at most 16 apart from each other; anything else stays 20 away from all of them.
    const orange = [...worn].filter(color => MAIN_TOPS.some(top => distance(color, top) < 20))
    expect(orange).toEqual([])
  })

  test('the main loops of nine sessions are nine people', () => {
    const looks = SESSIONS.map(session => figureOf(`${session}/main`, 'main'))
    const outline = (figure: Figure): string => [figure.top, figure.hair, figure.headwear === 'none' ? figure.style : figure.headwear, figure.skin].join('|')
    expect(new Set(looks.map(outline)).size).toBe(SESSIONS.length)
  })

  test('a look never changes: adding a trait must not reshuffle the people already in the café', () => {
    const figure = figureOf('5d0c1f2e-7a3b-4c9d-8e1f-2a3b4c5d6e7f/main', 'main')
    expect([figure.top, figure.skin, figure.hair, figure.style, figure.headwear, figure.garment, figure.legs, figure.scale]).toEqual(GOLDEN)
  })
})

describe('what a guest wears', () => {
  const unique = '#123456'
  const base = figureOf('base/main', 'main')
  const covering = (Object.keys(BANDS) as Headwear[]).filter(headwear => Number.isFinite(BANDS[headwear]))

  test('no hair shows above a hat, whatever the style', () => {
    for (const headwear of covering) {
      for (let style = 0; style < STYLES.length; style += 1) {
        const { parts } = headParts({ ...base, hair: unique, headwear, style, beard: 'none' })
        for (const part of parts.filter(each => each.color === unique)) expect(part.y + part.h / 2).toBeLessThanOrEqual(BANDS[headwear] + 1e-9)
      }
    }
  })

  test('the top of the head counts the hat, and no hat stands too tall', () => {
    expect(Math.abs(headParts({ ...base, headwear: 'none', style: 0 }).top - 0.435) < 1e-9).toBe(true)
    expect(headParts({ ...base, headwear: 'beanie', style: 0 }).top).toBeGreaterThan(0.59)
    for (const headwear of Object.keys(BANDS) as Headwear[]) {
      for (let style = 0; style < STYLES.length; style += 1) {
        expect(headParts({ ...base, headwear, style }).top).toBeLessThan(headwear === 'tophat' ? 0.7 : 0.65)
      }
    }
  })

  test('headphones sit on the ears, whatever the hair', () => {
    for (let style = 0; style < STYLES.length; style += 1) {
      const cups = headParts({ ...base, hat: unique, headwear: 'headphones', style }).parts.filter(each => each.color === unique)
      expect(cups.length).toBe(2)
      // The head's side is 0.21 out: a cup sits snug on it (1 cm in, on a bare head), or on the hair over
      // the ears, never more than 5 cm out from it.
      for (const cup of cups) {
        expect(Math.abs(cup.x) - cup.w / 2).toBeGreaterThanOrEqual(0.2 - 1e-9)
        expect(Math.abs(cup.x) - cup.w / 2).toBeLessThanOrEqual(0.26 + 1e-9)
      }
    }
  })

  test("a headband goes round the hair, a ponytail's or pigtails' ties outside it", () => {
    const band = (style: number): unknown[] => {
      const found = headParts({ ...base, hat: unique, headwear: 'headband', style }).parts.find(each => each.color === unique)
      return [found?.w, found?.d, found?.z]
    }
    expect(band(styleOf('ponytail'))).toEqual(band(styleOf('short')))
    expect(band(styleOf('pigtails'))).toEqual(band(styleOf('short')))
  })

  test('a hat rests on the head or on the hair: nothing floats above it', () => {
    const floating: string[] = []
    for (const headwear of Object.keys(BANDS) as Headwear[]) {
      for (let style = 0; style < STYLES.length; style += 1) {
        const { parts } = headParts({ ...base, headwear, style, eyewear: 'none', beard: 'none' })
        // Each part above the head's top (0.38) comes down to it, or onto another part below it.
        for (const each of parts) {
          const bottom = each.y - each.h / 2
          if (bottom <= 0.38 + 1e-9) continue
          const isResting = parts.some(other => other !== each && other.y - other.h / 2 < bottom && other.y + other.h / 2 >= bottom - 1e-9)
          if (!isResting) floating.push(`${headwear} on ${STYLES[style]?.name}: from ${bottom.toFixed(3)}`)
        }
      }
    }
    expect(floating).toEqual([])
  })

  test('seated, nothing a guest wears goes into the back of the chair, and the feet stay clear of the table', () => {
    // From the chair's middle: the front of its back (the top rail) is 0.155 behind, the table's edge 0.35 in front.
    // The body is scaled about the floor under its hips, which sit `seatOf` from the chair's middle.
    for (const garment of ['tee', 'sweater', 'hoodie', 'cardigan', 'apron', 'stripes', 'vest', 'overalls'] as const) {
      for (const [width, depth] of [[0.33, 0.2], [0.36, 0.22], [0.4, 0.23]] as const) {
        for (const torso of [0.28, 0.32, 0.36]) {
          for (const scale of SCALES) {
            for (const scarf of [undefined, '#3f6fb0']) {
              const figure = { ...base, garment, width, depth, torso, scale, scarf }
              const back = Math.min(...torsoParts(figure).map(part => part.z - part.d / 2))
              expect(seatOf(figure) + back * scale).toBeGreaterThan(-0.155)
              // Seated, a leg points forward: the sole of its shoe is a leg's length, 0.28, in front of the hips.
              expect(seatOf(figure) + 0.28 * scale).toBeLessThan(0.35)
            }
          }
        }
      }
    }
  })
})

const GOLDEN: readonly unknown[] = ['#c4613f', '#e2ab80', '#e08aa8', 10, 'none', 'sweater', 'trousers', 1]

describe('how a guest is built', () => {
  const base = figureOf('base/main', 'main')

  test('every kind of legs ends in a shoe at the floor, and a skirt covers both hips', () => {
    for (const legs of ['trousers', 'shorts', 'skirt'] as const) {
      const parts = legParts({ ...base, legs })
      expect(Math.abs(Math.min(...parts.map(part => part.y - part.h / 2)) + 0.28) < 1e-9).toBe(true)
      // Nothing reaches past the hip into the torso by more than a hair.
      expect(Math.max(...parts.map(part => part.y + part.h / 2))).toBeLessThanOrEqual(0.01 + 1e-9)
    }
    // Each leg's half of the skirt reaches past the middle, so the two halves meet.
    const skirt = Math.max(...legParts({ ...base, legs: 'skirt' }).map(part => part.w))
    expect(skirt / 2).toBeGreaterThan(HIP_X)
  })

  test('seated, trousers, shorts and a skirt all lie on the lap', () => {
    // Seated, a leg turns forward, and what stands out in front of it standing stands up above the hips:
    // no more than shorts do, 0.09. Only the shoe, at the end of the leg, stands up further.
    const shoes = '#123456'
    for (const legs of ['trousers', 'shorts', 'skirt'] as const) {
      for (const part of legParts({ ...base, legs, shoes }).filter(each => each.color !== shoes)) {
        expect(part.z + part.d / 2).toBeLessThanOrEqual(0.09 + 1e-9)
      }
    }
  })

  test('sizes stay between 0.92 and 1.08, and every size is worn', () => {
    const seen = new Set<number>()
    for (let index = 0; index < 400; index += 1) seen.add(figureOf(`s${index}/main`, 'main').scale)
    expect([...seen].sort()).toEqual([...SCALES].sort())
  })

  test('overalls come with trousers', () => {
    for (let index = 0; index < 2000; index += 1) {
      const figure = figureOf(`s${index}/a${index}`, 'sub')
      if (figure.garment === 'overalls') expect(figure.legs).toBe('trousers')
    }
  })
})
