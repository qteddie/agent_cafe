// The web café's memory: sessions played event by event from what Claude Code
// really sent in five recorded runs, events that arrive out of turn, tables
// from hooks modules, and who leaves when.

import { describe, expect, test } from 'claude-code/testing'

import type { Seat } from '../hooks/tracker'
import { LINGER_MS } from '../hooks/tracker'
import type { EventPost, Post } from '../hooks/wire'
import { eventPostOf } from '../hooks/wire'
import type { Hall } from '../web/hall'
import {
  CALL_KEEP_MS,
  EARLY_ASK_MS,
  GONE_KEEP_MS,
  MAX_AGENTS,
  MAX_DESKS,
  REST_KEEP_MS,
  SNAP_FRESH_MS,
  createHall,
  receive,
  seatingOf,
  tidyHall,
} from '../web/hall'
import type { HookInput } from './runs'
import { ASKED, BACKGROUND, FAILED, FOREGROUND, NESTED } from './runs'
import { NOW, seat, snap } from './world'

const ENV = { CLAUDE_CODE_ENTRYPOINT: 'cli' }
/** Time between two events as a run is played. */
const STEP = 100

function postOf(input: HookInput): EventPost {
  const post = eventPostOf(input, ENV)
  if (post === undefined) throw new Error(`no report for ${String(input['hook_event_name'])}`)
  return post
}

/** Plays events `from` to `to` of a run into the hall, one STEP apart; returns the time after the last. */
function play(hall: Hall, run: readonly HookInput[], from: number, to: number, start = NOW): number {
  let now = start
  for (const input of run.slice(from, to + 1)) {
    const post = eventPostOf(input, ENV)
    if (post !== undefined) receive(hall, post, now)
    now += STEP
  }
  return now
}

/** The seats the café shows for a session, by agent id. */
function seatsOf(hall: Hall, sid: string, now: number): Map<string, Seat> {
  const table = seatingOf(hall, now).find(seated => seated.desk.id === sid)
  return new Map((table?.snap.seats ?? []).map(found => [found.id, found]))
}

const EXPLORE = 'a26f7450ab2512f99'
const TESTER = 'a7b51ed2681c3ec7e'

describe('a session played event by event', () => {
  test('two subagents side by side, each with its own task, then done', () => {
    const hall = createHall()
    let now = play(hall, FOREGROUND, 0, 13)
    let seats = seatsOf(hall, 'session-hp1', now)
    expect(seats.get('main')).toMatchObject({ phase: 'work', act: 'delegate' })
    expect(seats.get(EXPLORE)).toMatchObject({ type: 'Explore', task: 'Find the hooks', parent: '', phase: 'work', act: 'search', target: 'Search for the hooks' })
    expect(seats.get(TESTER)).toMatchObject({ type: 'general-purpose', task: 'Run the tests', phase: 'work', act: 'run', target: 'Run the test suite' })

    now = play(hall, FOREGROUND, 14, 16, now)
    seats = seatsOf(hall, 'session-hp1', now)
    expect(seats.get(EXPLORE)?.phase).toBe('done')
    expect(seats.get(TESTER)?.phase).toBe('work')

    now = play(hall, FOREGROUND, 17, 26, now)
    seats = seatsOf(hall, 'session-hp1', now)
    expect(seats.get('main')).toMatchObject({ phase: 'idle', act: 'rest' })
    expect(seats.get(TESTER)?.phase).toBe('done')

    // The finished leave after a while; the session goes when it ends.
    tidyHall(hall, now + LINGER_MS + 1)
    expect([...seatsOf(hall, 'session-hp1', now + LINGER_MS + 1).keys()]).toEqual(['main'])
    play(hall, FOREGROUND, 27, 27, now)
    expect(hall.desks.has('session-hp1')).toBe(false)
  })

  test('agents left at work in the background stay at work after the main loop stops', () => {
    const hall = createHall()
    let now = play(hall, BACKGROUND, 0, 17)
    let seats = seatsOf(hall, 'session-hp2', now)
    expect(seats.get('main')).toMatchObject({ phase: 'idle' })
    expect(seats.get('aa6d5ea1b67714935')).toMatchObject({ name: 'watcher', task: 'Watch the build', phase: 'work', target: 'Build the project' })
    expect(seats.get('a81d0ed8add2ff74e')).toMatchObject({ type: 'Explore', task: 'Read the docs', phase: 'work', target: 'Search the docs' })

    // One reports back: the main loop wakes for it and rests again; the other works on.
    now = play(hall, BACKGROUND, 18, 25, now)
    seats = seatsOf(hall, 'session-hp2', now)
    expect(seats.get('aa6d5ea1b67714935')?.phase).toBe('done')
    expect(seats.get('a81d0ed8add2ff74e')?.phase).toBe('work')
    expect(seats.get('main')?.phase).toBe('idle')

    now = play(hall, BACKGROUND, 26, 30, now)
    seats = seatsOf(hall, 'session-hp2', now)
    expect(seats.get('a81d0ed8add2ff74e')?.phase).toBe('done')
    expect(seats.get('main')?.phase).toBe('idle')
  })

  test("a subagent's own subagent sits under it", () => {
    const hall = createHall()
    const now = play(hall, NESTED, 0, 6)
    const seats = seatingOf(hall, now)[0]?.snap.seats ?? []
    expect(seats.map(found => [found.id, found.parent, found.task])).toEqual([
      ['main', '', ''],
      ['a43077102e43e75a2', '', 'Plan the work'],
      ['ab55707aad4f8e0b4', 'a43077102e43e75a2', 'Read the code'],
    ])
    expect(seats[1]).toMatchObject({ phase: 'work', act: 'delegate', target: 'Read the code' })
  })

  test('a call held at a permission prompt waits for the person until its batch is over', () => {
    const hall = createHall()
    let now = play(hall, ASKED, 0, 3)
    expect(seatsOf(hall, 'session-hp4', now).get('main')).toMatchObject({ phase: 'ask', tool: 'Bash', target: 'Create a marker file' })
    now = play(hall, ASKED, 4, 4, now)
    expect(seatsOf(hall, 'session-hp4', now).get('main')).toMatchObject({ phase: 'think' })
    now = play(hall, ASKED, 5, 8, now)
    expect(seatsOf(hall, 'session-hp4', now).get('a8be3b919f8321d23')).toMatchObject({ phase: 'ask', target: 'Create another marker' })
    now = play(hall, ASKED, 9, 9, now)
    expect(seatsOf(hall, 'session-hp4', now).get('a8be3b919f8321d23')).toMatchObject({ phase: 'think' })
  })

  test('a subagent whose model call fails is shown failed', () => {
    const hall = createHall()
    // Up to the main loop's Stop; the next event ends the session.
    const now = play(hall, FAILED, 0, 10)
    const seats = seatsOf(hall, 'session-hp5', now)
    expect(seats.get('af9621a13e14c0ce2')?.phase).toBe('fail')
    expect(seats.get('main')?.phase).toBe('idle')
  })
})

describe('events that arrive out of turn', () => {
  /** A run with events `one` and `two` swapped. */
  function swapped(run: readonly HookInput[], one: number, two: number): HookInput[] {
    const copy = [...run]
    const first = copy[one]
    const second = copy[two]
    if (first === undefined || second === undefined) throw new Error('no such events')
    copy[one] = second
    copy[two] = first
    return copy
  }

  test("a call's end before its start leaves no call in flight", () => {
    // The main loop's last Read: PreToolUse (23) and PostToolUse (24) a moment apart.
    const hall = createHall()
    const now = play(hall, swapped(FOREGROUND, 23, 24), 0, 24)
    expect(seatsOf(hall, 'session-hp1', now).get('main')).toMatchObject({ phase: 'think' })
  })

  test("a turn's end before its start leaves the main loop at rest", () => {
    // A report from the watcher wakes the main loop (24) and it stops (25) a moment later.
    const hall = createHall()
    const now = play(hall, swapped(BACKGROUND, 24, 25), 0, 25)
    expect(seatsOf(hall, 'session-hp2', now).get('main')?.phase).toBe('idle')
  })

  test("a turn's end that comes after the next turn began ends nothing", () => {
    const hall = createHall()
    let now = play(hall, BACKGROUND, 0, 16)
    // The next turn's prompt (24) overtakes the first Stop (17).
    now = play(hall, BACKGROUND, 24, 24, now)
    now = play(hall, BACKGROUND, 17, 17, now)
    expect(seatsOf(hall, 'session-hp2', now).get('main')?.phase).toBe('think')
  })

  test('a subagent heard of before its start, and an agent end heard before its call ends, sort themselves out', () => {
    const hall = createHall()
    // The Explore's first Read (9) before SubagentStart (7).
    const now = play(hall, swapped(FOREGROUND, 7, 9), 0, 13)
    const seats = seatsOf(hall, 'session-hp1', now)
    expect(seats.get(EXPLORE)).toMatchObject({ task: 'Find the hooks', phase: 'work' })
  })
})

describe('tables from a hooks module', () => {
  const table = snap('s-mod', 'agent-cafe', [seat('main', { phase: 'work', act: 'run', tool: 'Bash', since: NOW - 5_000 }), seat('a1')], NOW - 2_000)

  test('stand while they keep coming, moved onto the hall clock', () => {
    const hall = createHall()
    receive(hall, { v: 1, kind: 'snap', app: 'code', link: '', snap: table }, NOW)
    const [seated] = seatingOf(hall, NOW)
    expect(seated?.via).toBe('mod')
    expect(seated?.desk.app).toBe('code')
    // Written two seconds before it came: its times move two seconds on.
    expect(seated?.snap.seats[0]?.since).toBe(NOW - 3_000)
  })

  test('win over the same session’s events, and give way to them once they stop', () => {
    const hall = createHall()
    const event: Post = { v: 1, kind: 'event', sid: 's-mod', app: 'claude', title: '', link: 'https://claude.ai/code/session_01AbCdEfGh', ev: { e: 'prompt', pid: 'p' } }
    receive(hall, event, NOW)
    receive(hall, { v: 1, kind: 'snap', app: '', link: '', snap: table }, NOW)
    expect(seatingOf(hall, NOW)[0]?.via).toBe('mod')
    expect(seatingOf(hall, NOW)[0]?.desk).toMatchObject({ app: 'claude', link: 'https://claude.ai/code/session_01AbCdEfGh' })

    const later = NOW + SNAP_FRESH_MS + 1
    tidyHall(hall, later)
    const [seated] = seatingOf(hall, later)
    expect(seated?.via).toBe('hooks')
    expect(seated?.snap.seats.map(found => found.id)).toEqual(['main'])
  })

  test('go when their session says goodbye, or a while after they stop coming', () => {
    const hall = createHall()
    receive(hall, { v: 1, kind: 'snap', app: '', link: '', snap: table }, NOW)
    expect(receive(hall, { v: 1, kind: 'bye', id: 's-mod' }, NOW)).toBe(true)
    expect(hall.desks.size).toBe(0)

    receive(hall, { v: 1, kind: 'snap', app: '', link: '', snap: table }, NOW)
    tidyHall(hall, NOW + SNAP_FRESH_MS + 1)
    expect(hall.desks.size).toBe(0)
  })
})

describe('who leaves when', () => {
  function event(sid: string, ev: EventPost['ev']): Post {
    return { v: 1, kind: 'event', sid, app: 'cli', title: sid, link: '', ev }
  }

  test('a session is let go after a quiet that says it is gone: soon mid-call, later at rest or held for the person', () => {
    const hall = createHall()
    receive(hall, event('resting', { e: 'start', source: 'startup' }), NOW)
    receive(hall, event('building', { e: 'prompt', pid: 'p' }), NOW)
    receive(hall, event('building', { e: 'pre', agent: '', type: '', id: 't', tool: 'Bash', act: 'run', target: 'make', order: null }), NOW)
    receive(hall, event('asking', { e: 'prompt', pid: 'p' }), NOW)
    receive(hall, event('asking', { e: 'pre', agent: '', type: '', id: 't', tool: 'Bash', act: 'run', target: 'git push', order: null }), NOW)
    receive(hall, event('asking', { e: 'ask', agent: '', tool: 'Bash', target: 'git push' }), NOW)
    tidyHall(hall, NOW + CALL_KEEP_MS + 1)
    expect([...hall.desks.keys()].sort()).toEqual(['asking', 'resting'])
    tidyHall(hall, NOW + REST_KEEP_MS + 1)
    expect(hall.desks.size).toBe(0)
  })

  test('a session that ended stays ended: what its hooks sent before the end changes nothing', () => {
    const hall = createHall()
    receive(hall, event('old', { e: 'prompt', pid: 'p' }), NOW)
    receive(hall, event('old', { e: 'end', reason: 'clear' }), NOW)
    expect(hall.desks.has('old')).toBe(false)
    // Async reports that left before the end and land after it.
    receive(hall, event('old', { e: 'batch', agent: '', ids: ['t'] }), NOW + 50)
    receive(hall, event('old', { e: 'prompt', pid: 'q' }), NOW + 60)
    receive(hall, { v: 1, kind: 'snap', app: 'cli', link: '', snap: snap('old', 'demo', [seat('main')]) }, NOW + 70)
    expect(hall.desks.has('old')).toBe(false)
    // A session started again under the same id (a resume) comes back.
    receive(hall, event('old', { e: 'start', source: 'resume' }), NOW + 80)
    expect(hall.desks.has('old')).toBe(true)
    // And long after an end, the id is free again.
    receive(hall, { v: 1, kind: 'bye', id: 'other' }, NOW)
    receive(hall, event('other', { e: 'prompt', pid: 'p' }), NOW + GONE_KEEP_MS + 1)
    expect(hall.desks.has('other')).toBe(true)
  })

  test('a full hall lets the session heard of least recently go for a new one', () => {
    const hall = createHall()
    for (let index = 0; index < MAX_DESKS; index += 1) {
      receive(hall, event(`s${index}`, { e: 'start', source: 'startup' }), NOW + index)
    }
    receive(hall, event('newcomer', { e: 'start', source: 'startup' }), NOW + MAX_DESKS)
    expect(hall.desks.size).toBe(MAX_DESKS)
    expect(hall.desks.has('s0')).toBe(false)
    expect(hall.desks.has('newcomer')).toBe(true)
  })

  test('a session waiting for the person comes first, then those at work, then those at rest, each in the order they came', () => {
    const hall = createHall()
    receive(hall, event('first', { e: 'start', source: 'startup' }), NOW)
    receive(hall, event('second', { e: 'prompt', pid: 'p' }), NOW + 1)
    receive(hall, event('third', { e: 'start', source: 'startup' }), NOW + 2)
    receive(hall, event('fourth', { e: 'prompt', pid: 'p' }), NOW + 3)
    receive(hall, event('fourth', { e: 'ask', agent: '', tool: 'Bash', target: 'git push' }), NOW + 3)
    expect(seatingOf(hall, NOW + 4).map(seated => seated.desk.id)).toEqual(['fourth', 'second', 'first', 'third'])
  })
})

describe('what the review found', () => {
  function event(sid: string, ev: EventPost['ev']): Post {
    return { v: 1, kind: 'event', sid, app: 'cli', title: sid, link: '', ev }
  }

  test("a failed turn of the main loop leaves its background agents at work", () => {
    const hall = createHall()
    let now = play(hall, BACKGROUND, 0, 16)
    receive(hall, event('session-hp2', { e: 'stop', pid: '', hasFailed: true, bg: null }), now)
    now += STEP
    const seats = seatsOf(hall, 'session-hp2', now)
    expect(seats.get('main')?.phase).toBe('fail')
    expect(seats.get('a81d0ed8add2ff74e')?.phase).toBe('work')
    expect(seats.get('aa6d5ea1b67714935')?.phase).toBe('work')
  })

  test('a Stop that lists background work fills in what the events missed of it', () => {
    const hall = createHall()
    receive(hall, event('s', { e: 'prompt', pid: 'p' }), NOW)
    receive(hall, event('s', { e: 'pre', agent: 'a-1', type: 'Explore', id: 't', tool: 'Read', act: 'read', target: 'a.ts', order: null }), NOW)
    receive(hall, event('s', { e: 'stop', pid: 'p', hasFailed: false, bg: [{ id: 'a-1', type: 'Explore', task: 'Read the docs', isRunning: true }] }), NOW)
    expect(seatsOf(hall, 's', NOW).get('a-1')).toMatchObject({ task: 'Read the docs', phase: 'work' })
  })

  test('a subagent whose end was lost is let go at the next Stop that does not list it', () => {
    const hall = createHall()
    receive(hall, event('s', { e: 'prompt', pid: 'p' }), NOW)
    receive(hall, event('s', { e: 'pre', agent: 'a-1', type: 'Explore', id: 't', tool: 'Bash', act: 'run', target: 'x', order: null }), NOW)
    receive(hall, event('s', { e: 'stop', pid: 'p', hasFailed: false, bg: [] }), NOW + 1)
    expect(seatsOf(hall, 's', NOW + 1).get('a-1')?.phase).toBe('done')
  })

  test('a prompt that lands before the call it holds still shows the person is needed', () => {
    const hall = createHall()
    receive(hall, event('s', { e: 'prompt', pid: 'p' }), NOW)
    receive(hall, event('s', { e: 'ask', agent: '', tool: 'Bash', target: 'git push' }), NOW + 1)
    receive(hall, event('s', { e: 'pre', agent: '', type: '', id: 't', tool: 'Bash', act: 'run', target: 'git push', order: null }), NOW + 2)
    expect(seatsOf(hall, 's', NOW + 2).get('main')).toMatchObject({ phase: 'ask', tool: 'Bash' })
    // Not when the call comes too long after: that prompt was about something else.
    const later = createHall()
    receive(later, event('s', { e: 'prompt', pid: 'p' }), NOW)
    receive(later, event('s', { e: 'ask', agent: '', tool: 'Bash', target: 'git push' }), NOW)
    receive(later, event('s', { e: 'batch', agent: '', ids: [] }), NOW + 1)
    receive(later, event('s', { e: 'pre', agent: '', type: '', id: 't', tool: 'Bash', act: 'run', target: 'ls', order: null }), NOW + 2)
    expect(seatsOf(later, 's', NOW + 2).get('main')?.phase).toBe('work')
    expect(EARLY_ASK_MS).toBeGreaterThan(0)
  })

  test('a subagent that starts before the call that asked for it still gets its task', () => {
    const hall = createHall()
    receive(hall, event('s', { e: 'prompt', pid: 'p' }), NOW)
    receive(hall, event('s', { e: 'sub', agent: 'a-1', type: 'Explore' }), NOW + 1)
    receive(hall, event('s', { e: 'pre', agent: '', type: '', id: 'c-1', tool: 'Agent', act: 'delegate', target: 'Find X', order: { type: 'Explore', task: 'Find X', name: '' } }), NOW + 2)
    receive(hall, event('s', { e: 'pre', agent: '', type: '', id: 'c-2', tool: 'Agent', act: 'delegate', target: 'Find Y', order: { type: 'Explore', task: 'Find Y', name: '' } }), NOW + 3)
    receive(hall, event('s', { e: 'sub', agent: 'a-2', type: 'Explore' }), NOW + 4)
    const seats = seatsOf(hall, 's', NOW + 4)
    expect(seats.get('a-1')?.task).toBe('Find X')
    expect(seats.get('a-2')?.task).toBe('Find Y')
  })

  test("a background agent's launch answered before its call was heard of keeps its task", () => {
    const hall = createHall()
    receive(hall, event('s', { e: 'prompt', pid: 'p' }), NOW)
    receive(hall, event('s', { e: 'post', agent: '', id: 'c-1', child: 'a-1' }), NOW + 1)
    receive(hall, event('s', { e: 'pre', agent: '', type: '', id: 'c-1', tool: 'Agent', act: 'delegate', target: 'Watch', order: { type: 'general-purpose', task: 'Watch the build', name: 'watcher' } }), NOW + 2)
    receive(hall, event('s', { e: 'sub', agent: 'a-1', type: 'general-purpose' }), NOW + 3)
    const seats = seatsOf(hall, 's', NOW + 3)
    expect(seats.get('a-1')).toMatchObject({ task: 'Watch the build', name: 'watcher' })
    // The call itself is over.
    expect(seats.get('main')?.phase).toBe('think')
  })

  test('an interrupted turn ends when the main loop waits for the person', () => {
    const hall = createHall()
    receive(hall, event('s', { e: 'prompt', pid: 'p' }), NOW)
    receive(hall, event('s', { e: 'pre', agent: '', type: '', id: 't', tool: 'Bash', act: 'run', target: 'x', order: null }), NOW)
    receive(hall, event('s', { e: 'waiting' }), NOW + 60_000)
    expect(seatsOf(hall, 's', NOW + 60_000).get('main')?.phase).toBe('idle')
  })

  test('an agent heard of again after it left takes a seat again', () => {
    const hall = createHall()
    receive(hall, event('s', { e: 'prompt', pid: 'p' }), NOW)
    receive(hall, event('s', { e: 'pre', agent: 'a-1', type: 'Explore', id: 't1', tool: 'Read', act: 'read', target: 'a.ts', order: null }), NOW)
    receive(hall, event('s', { e: 'stop', pid: 'p', hasFailed: false, bg: [] }), NOW + 1)
    tidyHall(hall, NOW + 60_000)
    expect(seatsOf(hall, 's', NOW + 60_000).has('a-1')).toBe(false)
    receive(hall, event('s', { e: 'pre', agent: 'a-1', type: 'Explore', id: 't2', tool: 'Read', act: 'read', target: 'b.ts', order: null }), NOW + 61_000)
    expect(seatsOf(hall, 's', NOW + 61_000).get('a-1')).toMatchObject({ phase: 'work', target: 'b.ts' })
  })

  test('a session keeps at most so many agents and calls, the ones at work first', () => {
    const hall = createHall()
    receive(hall, event('s', { e: 'prompt', pid: 'p' }), NOW)
    for (let index = 0; index < MAX_AGENTS + 50; index += 1) {
      receive(hall, event('s', { e: 'pre', agent: `a-${index}`, type: 'Explore', id: `t-${index}`, tool: 'Read', act: 'read', target: 'x', order: null }), NOW + index)
    }
    for (let index = 0; index < 100; index += 1) {
      receive(hall, event('s', { e: 'pre', agent: 'a-0', type: 'Explore', id: `u-${index}`, tool: 'Read', act: 'read', target: 'x', order: null }), NOW + 1_000 + index)
    }
    const roster = hall.desks.get('s')?.roster
    expect(roster?.agents.length).toBeLessThanOrEqual(MAX_AGENTS)
    expect(roster?.agents.find(agent => agent.id === 'a-0')?.open.length).toBeLessThanOrEqual(32)
    expect(roster?.agents.some(agent => agent.kind === 'main')).toBe(true)
  })
})
