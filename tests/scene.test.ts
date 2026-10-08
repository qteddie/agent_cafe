// The picture as markup: that it is one well-formed SVG document, that
// nothing a model or another session wrote can change its structure, and that
// the room is laid out as it should be.

import { describe, expect, test } from 'claude-code/testing'

import { wordsFor } from '../hooks/i18n'
import { SOURCE_LIMIT, TILE_H, drawScene, escapeXml, fit, placeTables } from '../hooks/scene'
import { paint, runs } from '../hooks/sprites'
import type { Phase } from '../hooks/tracker'
import type { Snap } from '../hooks/view'
import { arrange } from '../hooks/view'
import { seat, snap } from './world'

const ZH = wordsFor('zh-TW')
const OPTIONS = { columns: 4, scale: 3, words: ZH, hasMotion: true }

/**
 * Checks tags open and close in order, the way an XML parser would refuse them
 * otherwise. Returns the names of the elements, in document order.
 */
function wellFormed(source: string): string[] {
  // eslint-disable-next-line no-control-regex
  const forbidden = /[\u0000-\u0008\u000b\u000c\u000e-\u001f\ufffe\uffff]|[\ud800-\udbff](?![\udc00-\udfff])|(?<![\ud800-\udbff])[\udc00-\udfff]/.exec(source)
  if (forbidden !== null) throw new Error(`a character XML forbids, U+${forbidden[0].charCodeAt(0).toString(16)}, at ${forbidden.index}`)
  const names: string[] = []
  const open: string[] = []
  const tag = /<(\/?)([A-Za-z][A-Za-z0-9]*)((?:\s+[A-Za-z:-]+="[^"<]*")*)\s*(\/?)>/g
  let last = 0
  for (const match of source.matchAll(tag)) {
    const between = source.slice(last, match.index)
    if (between.includes('<') || between.includes('>')) throw new Error(`stray markup before ${match[0]}: ${between.slice(0, 60)}`)
    last = match.index + match[0].length
    const [, closing, name = '', , selfClosing] = match
    if (closing === '/') {
      const top = open.pop()
      if (top !== name) throw new Error(`</${name}> closes <${top}>`)
    } else {
      names.push(name)
      if (selfClosing !== '/') open.push(name)
    }
  }
  if (source.slice(last).trim() !== '') throw new Error(`text after the document: ${source.slice(last, last + 60)}`)
  if (open.length > 0) throw new Error(`unclosed: ${open.join(', ')}`)
  return names
}

function cafeOf(seats: Parameters<typeof snap>[2], others: Snap[] = []) {
  return arrange(snap('here', 'agent-cafe', seats), others, ZH, undefined, 20)
}

const EVERY_STATE: readonly [Phase, Parameters<typeof seat>[1]][] = [
  ['think', { act: 'think' }],
  ['work', { act: 'read', tool: 'Read', target: 'README.md' }],
  ['work', { act: 'search', tool: 'Grep', target: 'TODO' }],
  ['work', { act: 'write', tool: 'Edit', target: 'a.ts' }],
  ['work', { act: 'run', tool: 'Bash', target: 'npm test' }],
  ['work', { act: 'web', tool: 'WebFetch', target: 'example.com' }],
  ['work', { act: 'delegate', tool: 'Agent', target: 'Check it' }],
  ['work', { act: 'plan', tool: 'TodoWrite' }],
  ['work', { act: 'tool', tool: 'mcp__github__create_issue' }],
  ['ask', { act: 'run', tool: 'Bash', target: 'rm …' }],
  ['ask', { act: 'ask', tool: 'AskUserQuestion', target: 'Auth method' }],
  ['idle', { act: 'rest' }],
  ['done', { act: 'done' }],
  ['fail', { act: 'fail' }],
]

describe('the markup', () => {
  test('is one well-formed svg for every state a seat can be in', () => {
    const seats = EVERY_STATE.map(([phase, more], index) => seat(index === 0 ? 'main' : `a${index}`, { phase, ...more }))
    for (const hasMotion of [true, false]) {
      const scene = drawScene(cafeOf(seats), { ...OPTIONS, hasMotion })
      const names = wellFormed(scene.source)
      expect(names[0]).toBe('svg')
      expect(names.filter(name => name === 'svg')).toHaveLength(1)
      expect(names.filter(name => name === 'title')).toHaveLength(seats.length)
      // Only what a picture needs: shapes, text, groups and their animation.
      expect([...new Set(names)].sort()).toEqual(
        hasMotion
          ? ['animate', 'animateTransform', 'circle', 'g', 'path', 'rect', 'svg', 'text', 'title']
          : ['circle', 'g', 'path', 'rect', 'svg', 'text', 'title'],
      )
    }
  })

  test('holds no script, handler, link or outside reference', () => {
    const scene = drawScene(cafeOf([seat('main'), seat('a1')]), OPTIONS)
    expect(scene.source).not.toMatch(/<script|<foreignObject|<style|<image|<use|<a\s|\son[a-z]+=|href=|url\(|javascript:/i)
  })

  test('escapes whatever text it is given', () => {
    const hostile = `</text></svg><script>alert(1)</script> "q" 'a' & <b>`
    const scene = drawScene(
      arrange(snap('here', hostile, [seat('main'), seat('a1', { name: hostile, task: hostile, type: hostile, phase: 'work', act: 'tool', tool: hostile, target: hostile })]), [snap('o', hostile, [seat('main')])], ZH),
      OPTIONS,
    )
    wellFormed(scene.source)
    expect(scene.source).not.toContain('<script')
    expect(scene.source).not.toContain('<b>')
    expect(escapeXml(`a<b>&"c'`)).toBe('a&lt;b&gt;&amp;&quot;c&#39;')
    // Characters no XML document may hold are left out, whatever let them through.
    expect(escapeXml('a\u0000b\u0008c\u001fd\ufffee\ufffff\tg')).toBe('abcdef\tg')
    // Half of a surrogate pair, as a cut through an emoji leaves, is no XML character.
    expect(escapeXml('ok \ud83d')).toBe('ok �')
  })

  test('stays well-formed whatever characters a seat is given', () => {
    // As another session's table might hold them: nothing here went through `tidy`.
    const odd = 'a\u0000b\u001bc\ufffed\uffffe\ud83df\u202eg'
    const scene = drawScene(
      arrange(snap('here', odd, [seat('main'), seat('a1', { name: odd, task: odd, type: odd, phase: 'work', act: 'tool', tool: odd, target: odd })]), [snap('o', odd, [seat('main')])], ZH),
      OPTIONS,
    )
    wellFormed(scene.source)
    expect(scene.alt).not.toMatch(/[\u0000-\u001f\ufffe\uffff]/)
  })

  test('is the same for the same café, and carries its size', () => {
    const cafe = cafeOf([seat('main'), seat('a1', { phase: 'work', act: 'run', tool: 'Bash', target: 'npm test' })])
    const one = drawScene(cafe, OPTIONS)
    const two = drawScene(cafe, OPTIONS)
    expect(one.source).toBe(two.source)
    expect(one.source).toContain(`width="${one.width}" height="${one.height}"`)
    expect(one.width).toBe((4 * 34 + 6) * 3)
    expect(one.alt).toContain('2 位 agent')
  })

  test('draws no animation with motion off', () => {
    const still = drawScene(cafeOf([seat('main'), seat('a1')]), { ...OPTIONS, hasMotion: false })
    expect(still.source).not.toContain('<animate')
  })

  test('for a full table stays inside the limit', () => {
    const seats = Array.from({ length: 12 }, (_, index) =>
      seat(index === 0 ? 'main' : `a${index}`, { phase: 'work', act: 'write', tool: 'Edit', target: 'src/a-rather-long-file-name.ts', task: 'A task described at some length' }),
    )
    const scene = drawScene(cafeOf(seats), { ...OPTIONS, columns: 6 })
    expect(scene.source.length).toBeLessThan(SOURCE_LIMIT / 2)
  })
})

describe('the room', () => {
  test('is as many seats across as the pane has room for', () => {
    expect(fit(20)).toEqual({ columns: 2, scale: 2.75 })
    expect(fit(38).columns).toBe(2)
    expect(fit(70).columns).toBe(4)
    expect(fit(96).columns).toBe(6)
    expect(fit(400)).toEqual({ columns: 6, scale: 4 })
    // A surface that has not measured its pane hands over no width at all.
    expect(fit(Number.NaN)).toEqual(fit(80))
    expect(fit(0)).toEqual(fit(80))
    // Never wider than the room it measured.
    for (const bodyColumns of [30, 45, 60, 75, 90, 120]) {
      const { columns, scale } = fit(bodyColumns)
      expect((columns * 34 + 6) * scale).toBeLessThanOrEqual(bodyColumns * 7.5 + 1)
    }
  })

  test('stands small tables side by side and a big one across', () => {
    const table = (id: string, seats: number) => snap(id, id, Array.from({ length: seats }, (_, index) => seat(index === 0 ? 'main' : `a${index}`)))
    const cafe = arrange(table('here', 5), [table('b', 1), table('c', 2), table('d', 3), table('e', 9)], ZH, undefined, 12, 5)
    const { spots, bottom } = placeTables(cafe.tables, 6, true)
    // here: five of six columns. b: a lone seat still takes two columns, so the next row.
    expect(spots.map(spot => [spot.table.title, spot.column, spot.span])).toEqual([
      ['here', 0, 5],
      ['b', 0, 2],
      ['c', 2, 2],
      ['d', 0, 3],
      ['e', 0, 6],
    ])
    const tops = spots.map(spot => spot.top)
    expect(tops[1]).toBe(tops[2])
    expect(tops[0]).toBeLessThan(tops[1] as number)
    expect(tops[2]).toBeLessThan(tops[3] as number)
    expect(tops[3]).toBeLessThan(tops[4] as number)
    // The nine-seat table takes two rows of the room.
    expect(bottom - (tops[4] as number)).toBeGreaterThan(2 * TILE_H)
  })

  test('gives a table alone the whole room and no placard', () => {
    const cafe = cafeOf([seat('main')])
    const { spots } = placeTables(cafe.tables, 4, false)
    expect(spots).toHaveLength(1)
    expect(drawScene(cafe, OPTIONS).source).not.toContain('這個 session')
    const two = arrange(snap('here', 'p', [seat('main')]), [snap('o', 'q', [seat('main')])], ZH)
    expect(drawScene(two, OPTIONS).source).toContain('這個 session')
  })
})

describe('sprites', () => {
  test('a grid becomes rectangles: a run along a row, taken down the rows that repeat it', () => {
    expect(runs(['##.', '##.', '..#'], '#')).toBe('M0 0h2v2h-2zM2 2h1v1h-1z')
    expect(runs(['...'], '#')).toBe('')
    expect(runs(['#'], '#', 5, 7)).toBe('M5 7h1v1h-1z')
  })

  test('one path a color, in the inks order', () => {
    expect(paint(['ab', 'ba'], { a: '#111', b: '#222' })).toBe(
      '<path fill="#111" d="M0 0h1v1h-1zM1 1h1v1h-1z"/><path fill="#222" d="M1 0h1v1h-1zM0 1h1v1h-1z"/>',
    )
  })
})
