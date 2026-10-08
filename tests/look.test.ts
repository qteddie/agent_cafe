// What the web page is sent and shown: the view of the hall, and the two
// documents, with whatever a session reported kept as text.

import { describe, expect, test } from 'claude-code/testing'

import { wordsFor } from '../hooks/i18n'
import type { Post } from '../hooks/wire'
import { createHall, receive } from '../web/hall'
import { PICTURE_TABLES, columnsFor, viewOf } from '../web/look'
import { cafePage, doorPage, escapeHtml } from '../web/page'
import { pageWordsFor } from '../web/words'
import { NOW, seat, snap } from './world'

function event(sid: string, app: 'claude' | 'cli', title: string, ev: Extract<Post, { kind: 'event' }>['ev']): Post {
  return { v: 1, kind: 'event', sid, app, title, link: app === 'claude' ? 'https://claude.ai/code/session_01AbCdEfGh' : '', ev }
}

describe('the view', () => {
  test('of an empty café has no picture and no tables', () => {
    const view = viewOf(createHall(), NOW, { lang: 'zh-TW', columns: 6 })
    expect(view).toMatchObject({ svg: '', sig: '', busy: 0, asking: 0, idle: 0, tables: [] })
  })

  test('names a task in the Claude app by its app and when it began, in the time zone asked for', () => {
    const hall = createHall()
    receive(hall, event('task-1', 'claude', '', { e: 'prompt', pid: 'p' }), NOW)
    const [table] = viewOf(hall, NOW, { lang: 'zh-TW', columns: 6, timeZone: 'UTC' }).tables
    expect(table).toMatchObject({ title: 'Claude · 08:00', app: 'Claude', link: 'https://claude.ai/code/session_01AbCdEfGh', via: 'hooks', started: '08:00 入座' })
    expect(viewOf(hall, NOW, { lang: 'en', columns: 6, timeZone: 'Asia/Taipei' }).tables[0]?.title).toBe('Claude · 16:00')
  })

  test('lists every seat with what it says, when it began and its tool calls', () => {
    const hall = createHall()
    receive(hall, event('s1', 'cli', 'demo', { e: 'prompt', pid: 'p' }), NOW - 5_000)
    receive(hall, event('s1', 'cli', 'demo', { e: 'pre', agent: '', type: '', id: 't1', tool: 'Agent', act: 'delegate', target: 'Find the hooks', order: { type: 'Explore', task: 'Find the hooks', name: '' } }), NOW - 4_000)
    receive(hall, event('s1', 'cli', 'demo', { e: 'sub', agent: 'a1', type: 'Explore' }), NOW - 3_000)
    receive(hall, event('s1', 'cli', 'demo', { e: 'pre', agent: 'a1', type: 'Explore', id: 't2', tool: 'Grep', act: 'search', target: 'TODO', order: null }), NOW - 2_000)
    const view = viewOf(hall, NOW, { lang: 'zh-TW', columns: 6 })
    expect(view).toMatchObject({ busy: 2, asking: 0, idle: 0 })
    expect(view.tables[0]?.lines).toEqual([
      { key: 's1/main', depth: 0, phase: 'work', label: 'main', task: '', says: '交辦 Find the hooks', since: NOW - 4_000, calls: '' },
      { key: 's1/a1', depth: 1, phase: 'work', label: 'Explore', task: '「Find the hooks」', says: '搜尋 TODO', since: NOW - 2_000, calls: '1 次工具' },
    ])
  })

  test('changes its picture only when the café changes', () => {
    const hall = createHall()
    receive(hall, event('s1', 'cli', 'demo', { e: 'prompt', pid: 'p' }), NOW)
    const first = viewOf(hall, NOW, { lang: 'zh-TW', columns: 6 })
    expect(viewOf(hall, NOW + 60_000, { lang: 'zh-TW', columns: 6 }).sig).toBe(first.sig)
    expect(viewOf(hall, NOW, { lang: 'zh-TW', columns: 5 }).sig).not.toBe(first.sig)
    expect(viewOf(hall, NOW, { lang: 'zh-TW', columns: 6, hasMotion: false }).sig).not.toBe(first.sig)
    receive(hall, event('s1', 'cli', 'demo', { e: 'stop', pid: 'p', hasFailed: false, bg: [] }), NOW)
    expect(viewOf(hall, NOW, { lang: 'zh-TW', columns: 6 }).sig).not.toBe(first.sig)
  })

  test('lists the tables the picture has no room for, and says so', () => {
    const hall = createHall()
    for (let index = 0; index < PICTURE_TABLES + 2; index += 1) {
      receive(hall, event(`s${index}`, 'cli', `p${index}`, { e: 'start', source: 'startup' }), NOW + index)
    }
    const view = viewOf(hall, NOW + 100, { lang: 'en', columns: 8 })
    expect(view.tables).toHaveLength(PICTURE_TABLES + 2)
    expect(view.tables.map(table => table.inPicture).filter(Boolean)).toHaveLength(PICTURE_TABLES)
  })

  test('keeps what a session sent as text in the picture', () => {
    const hall = createHall()
    const table = snap('s-x', '<script>alert(1)</script>', [seat('main', { phase: 'work', act: 'run', tool: 'Bash', target: '"><img src=x onerror=alert(1)>' })])
    receive(hall, { v: 1, kind: 'snap', app: 'cli', link: '', snap: table }, NOW)
    // A second table, so the tables carry their names on placards.
    receive(hall, { v: 1, kind: 'snap', app: 'cli', link: '', snap: snap('s-y', 'other', [seat('main')]) }, NOW)
    const { svg } = viewOf(hall, NOW, { lang: 'en', columns: 6 })
    expect(svg).toStartWith('<svg')
    expect(svg).not.toContain('<script')
    expect(svg).not.toContain('<img')
    expect(svg).toContain('&lt;script&gt;')
    expect(svg).toContain('&quot;&gt;&lt;img')
  })

  test('asks for as many seats across as the picture can draw', () => {
    expect(columnsFor('5')).toBe(5)
    expect(columnsFor(1)).toBe(3)
    expect(columnsFor(99)).toBe(8)
    expect(columnsFor('wide')).toBe(6)
    expect(columnsFor(null)).toBe(3)
  })
})

describe('the documents', () => {
  test('the café page carries its words as data, closed to markup', () => {
    const html = cafePage(wordsFor('zh-TW'), pageWordsFor('zh-TW'))
    expect(html).toContain('<script type="application/json" id="words">')
    expect(html).toContain('<script src="/app.js" defer></script>')
    // Only the two script elements: the page's code and its words.
    expect(html.match(/<script/g)).toHaveLength(2)
  })

  test('the door says what went wrong', () => {
    expect(doorPage(wordsFor('en'), pageWordsFor('en'), 'wrong')).toContain('role="alert">Wrong password<')
    expect(doorPage(wordsFor('zh-TW'), pageWordsFor('zh-TW'), '')).not.toContain('role="alert"')
  })

  test('text is escaped for HTML', () => {
    expect(escapeHtml(`<a href="x">'&'</a>`)).toBe('&lt;a href=&quot;x&quot;&gt;&#39;&amp;&#39;&lt;/a&gt;')
  })
})
