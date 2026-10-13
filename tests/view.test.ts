// From seats to what the café shows: the tables, the names, the sentences, the
// lines of text, and how little it trusts what it reads from the store.

import { describe, expect, test } from 'claude-code/testing'

import { age, say, wordsFor } from '../hooks/i18n'
import { arrange, linesOf, parseSnap, signatureOf, tableTitle, textOf } from '../hooks/view'
import { NOW, seat, snap } from './world'

const ZH = wordsFor('zh-TW')
const EN = wordsFor('en')

describe('what a seat says', () => {
  test('a tool call is a verb and what it works on', () => {
    expect(say({ kind: 'sub', phase: 'work', act: 'write', tool: 'Edit', target: 'src/app.ts' }, ZH)).toBe('改 src/app.ts')
    expect(say({ kind: 'sub', phase: 'work', act: 'write', tool: 'Edit', target: 'src/app.ts' }, EN)).toBe('Editing src/app.ts')
    expect(say({ kind: 'sub', phase: 'work', act: 'tool', tool: 'mcp__github__create_issue', target: '' }, ZH)).toBe('用 github・create_issue')
    expect(say({ kind: 'sub', phase: 'work', act: 'tool', tool: 'SomeNewTool', target: '' }, EN)).toBe('Using SomeNewTool')
  })

  test('a tool whose name is an inherited property is still just a tool', () => {
    expect(say({ kind: 'sub', phase: 'work', act: 'tool', tool: 'constructor', target: '' }, EN)).toBe('Using constructor')
  })

  test('a hold says what the person is asked for', () => {
    expect(say({ kind: 'main', phase: 'ask', act: 'run', tool: 'Bash', target: 'git push' }, ZH)).toBe('等你批准：執行 git push')
    expect(say({ kind: 'main', phase: 'ask', act: 'ask', tool: 'AskUserQuestion', target: '' }, ZH)).toBe('有問題想問你')
    expect(say({ kind: 'main', phase: 'ask', act: 'ask', tool: 'ExitPlanMode', target: '' }, EN)).toBe('Plan ready for your review')
    expect(say({ kind: 'main', phase: 'ask', act: 'ask', tool: '', target: '' }, EN)).toBe('Needs you')
  })

  test('the main loop waits for the person, a teammate stands by', () => {
    expect(say({ kind: 'main', phase: 'idle', act: 'rest', tool: '', target: '' }, ZH)).toBe('等你的指示')
    expect(say({ kind: 'mate', phase: 'idle', act: 'rest', tool: '', target: '' }, ZH)).toBe('待命中')
  })

  test('the main loop at rest waits for its agents while they work, not for the person', () => {
    expect(say({ kind: 'main', phase: 'idle', act: 'rest', tool: '', target: '' }, ZH, true)).toBe('等 agent 回報')
    expect(say({ kind: 'main', phase: 'idle', act: 'rest', tool: '', target: '' }, EN, true)).toBe('Waiting on agents')
    // Only at rest, and only the main loop.
    expect(say({ kind: 'main', phase: 'think', act: 'think', tool: '', target: '' }, ZH, true)).toBe('思考中')
    expect(say({ kind: 'mate', phase: 'idle', act: 'rest', tool: '', target: '' }, ZH, true)).toBe('待命中')
  })

  test('ages are coarse', () => {
    expect(age(-5)).toBe('0s')
    expect(age(8_400)).toBe('8s')
    expect(age(59_999)).toBe('59s')
    expect(age(3 * 60_000 + 20_000)).toBe('3m')
    expect(age(65 * 60_000)).toBe('1h 05m')
  })

  test('an unknown language falls back to English', () => {
    expect(wordsFor('zh-TW').thinking).toBe('思考中')
    expect(wordsFor('fr').thinking).toBe(wordsFor('en').thinking)
    expect(wordsFor(undefined).thinking).toBe(wordsFor('en').thinking)
  })
})

describe('reading the store', () => {
  test('takes a well-formed table', () => {
    const table = snap('s1', 'project', [seat('main'), seat('a1', { name: 'scout' })])
    expect(parseSnap(JSON.parse(JSON.stringify(table)))).toEqual(table)
  })

  test('refuses anything of another shape', () => {
    for (const value of [undefined, null, 'text', 42, [], {}, { v: 2, id: 's', seats: [] }, { v: 1, id: '', seats: [] }, { v: 1, id: 's' }, { v: 1, id: 7, seats: [] }]) {
      expect(parseSnap(value)).toBeUndefined()
    }
  })

  test('drops seats it cannot read and repairs fields it can', () => {
    const parsed = parseSnap({
      v: 1,
      id: 's1',
      title: 12,
      at: 'yesterday',
      seats: [null, 'x', { id: '' }, { id: 'a1', kind: 'boss', phase: 'dancing', act: 'jig', since: -4, calls: 2.9, name: ['x'] }],
    })
    expect(parsed).toEqual({
      v: 1,
      id: 's1',
      title: '',
      at: 0,
      seats: [{ id: 'a1', kind: 'sub', type: '', name: '', task: '', parent: '', phase: 'think', act: 'think', tool: '', target: '', since: 0, calls: 2 }],
    })
  })

  test('cuts every string to a length and the seats to a number', () => {
    const long = 'x'.repeat(5_000)
    const parsed = parseSnap({
      v: 1,
      id: 's1',
      title: long,
      at: NOW,
      seats: Array.from({ length: 500 }, (_, index) => ({ id: `a${index}`, name: long, task: long, target: `line one\nline two ${long}` })),
    })
    expect(parsed?.seats).toHaveLength(64)
    expect(parsed?.title.length).toBeLessThanOrEqual(40)
    expect(parsed?.seats[0]?.task.length).toBeLessThanOrEqual(80)
    expect(parsed?.seats[0]?.target).toStartWith('line one line two')
    expect(JSON.stringify(parsed).length).toBeLessThan(30_000)
  })
})

describe('seating', () => {
  const here = snap('here', 'agent-cafe', [
    seat('main', { phase: 'work', act: 'delegate', tool: 'Agent', target: 'Find the hooks' }),
    seat('a1', { task: 'Find the hooks' }),
    seat('a2', { phase: 'ask', act: 'run', tool: 'Bash', target: 'git push', type: 'release' }),
    seat('a3', { phase: 'done', act: 'done' }),
  ])
  const others = [
    snap('z', 'zeta', [seat('main', { phase: 'idle', act: 'rest' })]),
    snap('a', 'alpha', [seat('main'), seat('x1')]),
    snap('empty', 'nobody', []),
    snap('here', 'a copy of this session', [seat('main')]),
  ]

  test('puts this session first, then the others by name, and counts everyone', () => {
    const cafe = arrange(here, others, ZH)
    expect(cafe.tables.map(table => table.title)).toEqual(['agent-cafe', 'alpha', 'zeta'])
    expect(cafe.tables[0]?.isHere).toBe(true)
    expect(cafe).toMatchObject({ busy: 4, asking: 1, idle: 2, seats: 7, hiddenTables: 0 })
  })

  test('tells two of a kind apart', () => {
    const cafe = arrange(here, [], ZH)
    expect(cafe.tables[0]?.places.map(place => place.label)).toEqual(['main', 'Explore', 'release', 'Explore 2'])
  })

  test('keeps whoever is still here when a table is over its cap', () => {
    const cafe = arrange(here, [], ZH, undefined, 3)
    expect(cafe.tables[0]?.places.map(place => place.seat.id)).toEqual(['main', 'a1', 'a2'])
    expect(cafe.tables[0]?.hidden).toBe(1)
    expect(tableTitle(cafe.tables[0]!, ZH)).toBe('agent-cafe（這個 session） · 還有 1 位')
    // The tally still counts the one without a seat in the picture.
    expect(cafe.idle).toBe(1)
  })

  test('shows so many tables and says how many it left out', () => {
    const many = Array.from({ length: 9 }, (_, index) => snap(`s${index}`, `p${index}`, [seat('main')]))
    const cafe = arrange(here, many, ZH)
    expect(cafe.tables).toHaveLength(4)
    expect(cafe.hiddenTables).toBe(6)
  })

  test('has a main loop at rest wait for its agents for as long as one of them is at work', () => {
    const resting = seat('main', { phase: 'idle', act: 'rest' })
    const saysOf = (...crew: ReturnType<typeof seat>[]) =>
      arrange(snap('here', 'p', [resting, ...crew]), [], ZH).tables[0]?.places[0]?.says
    expect(saysOf()).toBe('等你的指示')
    expect(saysOf(seat('a1', { phase: 'work', act: 'run', tool: 'Bash' }))).toBe('等 agent 回報')
    expect(saysOf(seat('a1', { phase: 'ask', act: 'run', tool: 'Bash' }))).toBe('等 agent 回報')
    // One that is done, or a teammate standing by, is nobody to wait for.
    expect(saysOf(seat('a1', { phase: 'done', act: 'done' }), seat('m1', { kind: 'mate', phase: 'idle', act: 'rest' }))).toBe('等你的指示')
    // Another session's agents are not this one's to wait for.
    const cafe = arrange(snap('here', 'p', [resting]), [snap('o', 'other', [seat('main'), seat('x1')])], ZH)
    expect(cafe.tables[0]?.places[0]?.says).toBe('等你的指示')
  })

  test('marks the agent whose transcript is on screen, at this table only', () => {
    const cafe = arrange(here, [snap('o', 'other', [seat('main'), seat('a1')])], ZH, 'a1')
    expect(cafe.tables[0]?.places.map(place => place.isViewed)).toEqual([false, true, false, false])
    expect(cafe.tables[1]?.places.map(place => place.isViewed)).toEqual([false, false])
  })
})

describe('the list', () => {
  const here = snap('here', 'agent-cafe', [
    seat('main', { phase: 'idle', act: 'rest', since: NOW - 5_000 }),
    seat('a1', { task: 'Find the hooks', phase: 'work', act: 'search', tool: 'Grep', target: 'TODO', calls: 3, since: NOW - 65_000 }),
    seat('a2', { parent: 'a1', since: NOW - 1_000 }),
  ])

  test('has one line a seat, with no table name while there is one table', () => {
    const lines = linesOf(arrange(here, [], ZH), ZH, NOW)
    expect(lines.map(line => line.type)).toEqual(['seat', 'seat', 'seat'])
    expect(lines[1]).toMatchObject({ indent: '↳ ', label: 'Explore', note: '「Find the hooks」', says: '搜尋 TODO', tail: '1m · 3 次工具', phase: 'work' })
    expect(lines[2]).toMatchObject({ indent: '  ↳ ', label: 'Explore 2' })
  })

  test('names each table once there are several', () => {
    const cafe = arrange(here, [snap('o', 'other', [seat('main')])], EN)
    expect(textOf(cafe, EN, NOW)).toBe(
      [
        'Agent Café — 3 busy · 0 need you · 1 idle',
        'agent-cafe (this session)',
        '○ main — Waiting on agents · 5s',
        '↳ ● Explore “Find the hooks” — Searching for TODO · 1m · 3 tool calls',
        '  ↳ ◐ Explore 2 — Thinking · 1s',
        'other',
        '◐ main — Thinking · 30s',
      ].join('\n'),
    )
  })
})

describe('the signature', () => {
  const at = (now: number, phase: 'think' | 'idle' = 'think') =>
    arrange(snap('here', 'p', [seat('main', { phase, act: phase === 'idle' ? 'rest' : 'think', since: now - 1 })], now), [], ZH)

  test('does not change with the time alone', () => {
    expect(signatureOf(at(NOW))).toBe(signatureOf(at(NOW + 60_000)))
  })

  test('changes with what a seat does', () => {
    expect(signatureOf(at(NOW))).not.toBe(signatureOf(at(NOW, 'idle')))
  })
})
