// Who the guests of the 3D café are: every agent a person of its own, the
// main loops in Claude's orange, and nothing that pokes through a hat or a chair.

import { describe, expect, test } from 'claude-code/testing'

import { BANDS, MAIN_TOPS, SCALES, STYLES, TOPS, figureOf, headParts, legParts, torsoParts } from '../web/cafe3d/figure'
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

/** The hue, in degrees, and the saturation of a colour. */
function hueOf(hex: string): { hue: number; saturation: number } {
  const value = Number.parseInt(hex.slice(1), 16)
  const [r, g, b] = [(value >> 16) & 255, (value >> 8) & 255, value & 255].map(channel => channel / 255) as [number, number, number]
  const high = Math.max(r, g, b)
  const low = Math.min(r, g, b)
  if (high === low) return { hue: 0, saturation: 0 }
  const delta = high - low
  const hue = high === r ? ((g - b) / delta) % 6 : high === g ? (b - r) / delta + 2 : (r - g) / delta + 4
  return { hue: (hue * 60 + 360) % 360, saturation: delta / high }
}

describe('who a guest is', () => {
  test('the same key is the same person, every time', () => {
    for (const session of SESSIONS) {
      expect(figureOf(`${session}/main`, 'main')).toEqual(figureOf(`${session}/main`, 'main'))
      expect(figureOf(`${session}/a1b2c3`, 'sub')).toEqual(figureOf(`${session}/a1b2c3`, 'sub'))
    }
  })

  test('every main loop wears orange, and nobody else does', () => {
    for (const session of SESSIONS) {
      expect(MAIN_TOPS).toContain(figureOf(`${session}/main`, 'main').top)
      for (const seat of ['a1', 'b2', 'c3', 'tester']) {
        expect(MAIN_TOPS).not.toContain(figureOf(`${session}/${seat}`, 'sub').top)
        expect(MAIN_TOPS).not.toContain(figureOf(`${session}/${seat}`, 'mate').top)
      }
    }
    for (const top of TOPS) {
      const { hue, saturation } = hueOf(top)
      // Orange and its neighbours, red-orange to amber, saturated enough to read as one.
      expect(saturation > 0.35 && hue >= 5 && hue <= 45).toBe(false)
    }
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

  test('the top of the head counts the hat: the bubble and the hit box go over it', () => {
    expect(Math.abs(headParts({ ...base, headwear: 'none', style: 0 }).top - 0.435) < 1e-9).toBe(true)
    expect(headParts({ ...base, headwear: 'beanie', style: 0 }).top).toBeGreaterThan(0.59)
    for (const headwear of Object.keys(BANDS) as Headwear[]) {
      for (let style = 0; style < STYLES.length; style += 1) {
        expect(headParts({ ...base, headwear, style }).top).toBeLessThan(headwear === 'tophat' ? 0.7 : 0.65)
      }
    }
  })

  test('seated, nothing a guest wears goes through the back of the chair', () => {
    // A seated guest's hips are 0.04 forward of the chair's middle, the chair back's front face 0.165 behind it.
    for (const garment of ['tee', 'sweater', 'hoodie', 'cardigan', 'apron', 'stripes', 'vest', 'overalls'] as const) {
      for (const [width, depth] of [[0.33, 0.2], [0.36, 0.22], [0.4, 0.23]] as const) {
        const parts = torsoParts({ ...base, garment, width, depth, scarf: '#3f6fb0' })
        // The body group is scaled about the hips' foot, which sits 0.04 forward of the chair's middle.
        const scale = Math.max(...SCALES)
        const back = Math.min(...parts.map(part => part.z - part.d / 2)) * scale
        expect(back - 0.04 >= -0.215).toBe(true)
        const body = parts[0]
        expect(body !== undefined && (body.z - body.d / 2) * scale - 0.04).toBeGreaterThan(-0.165)
      }
    }
  })
})

const GOLDEN: readonly unknown[] = ['#c4613f', '#e2ab80', '#e08aa8', 10, 'none', 'sweater', 'trousers', 1]

describe('how a guest is built', () => {
  test('every kind of legs ends in a shoe at the floor, and a skirt covers both hips', () => {
    const base = figureOf('base/main', 'main')
    for (const legs of ['trousers', 'shorts', 'skirt'] as const) {
      const parts = legParts({ ...base, legs })
      expect(Math.abs(Math.min(...parts.map(part => part.y - part.h / 2)) + 0.28) < 1e-9).toBe(true)
      // Nothing reaches past the hip into the torso by more than a hair.
      expect(Math.max(...parts.map(part => part.y + part.h / 2))).toBeLessThanOrEqual(0.01 + 1e-9)
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
