// The roster by itself: the same calls a session's events make, in an order a
// session might make them, and what each seat then shows.

import { describe, expect, test } from 'claude-code/testing'

import type { Roster, Seat } from '../hooks/tracker'
import {
  CALL_STALE_MS,
  GHOST_MS,
  LINGER_MS,
  MAIN,
  MISS_MS,
  STALE_MS,
  ask,
  askOver,
  callThrough,
  createRoster,
  depthOf,
  mateIdle,
  reset,
  seatsOf,
  spawn,
  subStart,
  subStop,
  sweep,
  sync,
  toolEnd,
  toolStart,
  turnEnd,
  turnStart,
} from '../hooks/tracker'

const T = 1_000_000

function seatOf(roster: Roster, id: string): Seat | undefined {
  return seatsOf(roster).find(seat => seat.id === id)
}

function call(id: string, tool: string, target = '') {
  const act = tool === 'Bash' ? 'run' : tool === 'Read' ? 'read' : tool === 'AskUserQuestion' ? 'ask' : 'write'
  return { id, tool, act, target } as const
}

function sub(id: string, type = 'Explore', parent = '', more: { name?: string; isTeammate?: boolean } = {}) {
  return { id, type, task: `task of ${id}`, parent, name: more.name ?? '', isTeammate: more.isTeammate === true }
}

describe('the main loop', () => {
  test('starts resting, thinks through a turn, and rests after it', () => {
    const roster = createRoster(T)
    expect(seatOf(roster, MAIN)).toMatchObject({ kind: 'main', phase: 'idle', act: 'rest', since: T })

    turnStart(roster, T + 10)
    expect(seatOf(roster, MAIN)).toMatchObject({ phase: 'think', since: T + 10 })

    toolStart(roster, undefined, call('c1', 'Read', 'README.md'), T + 20)
    expect(seatOf(roster, MAIN)).toMatchObject({ phase: 'work', act: 'read', tool: 'Read', target: 'README.md', since: T + 20, calls: 1 })

    toolEnd(roster, undefined, 'c1', T + 30)
    expect(seatOf(roster, MAIN)).toMatchObject({ phase: 'think', tool: '', since: T + 30 })

    turnEnd(roster, undefined, 'answer', T + 40)
    expect(seatOf(roster, MAIN)).toMatchObject({ phase: 'idle', act: 'rest', since: T + 40 })
  })

  test('shows the newest of several calls in flight, then the one still running', () => {
    const roster = createRoster(T)
    turnStart(roster, T)
    toolStart(roster, undefined, call('c1', 'Read', 'a.ts'), T + 1)
    toolStart(roster, undefined, call('c2', 'Bash', 'npm test'), T + 2)
    expect(seatOf(roster, MAIN)).toMatchObject({ phase: 'work', tool: 'Bash' })

    toolEnd(roster, undefined, 'c2', T + 3)
    expect(seatOf(roster, MAIN)).toMatchObject({ phase: 'work', tool: 'Read', since: T + 1 })

    toolEnd(roster, undefined, 'c1', T + 4)
    expect(seatOf(roster, MAIN)).toMatchObject({ phase: 'think' })
  })

  test('is not moved by the end of a call it no longer holds', () => {
    const roster = createRoster(T)
    toolStart(roster, undefined, call('c1', 'Bash'), T + 1)
    turnEnd(roster, undefined, 'aborted', T + 2)
    toolEnd(roster, undefined, 'c1', T + 3)
    expect(seatOf(roster, MAIN)).toMatchObject({ phase: 'idle', since: T + 2 })
  })

  test('rests again after a call that ran with no turn running', () => {
    // Another plugin's `$.tool.call`, say: there is no turn to go back to thinking in.
    const roster = createRoster(T)
    toolStart(roster, undefined, call('c1', 'Read', 'a.ts'), T + 1)
    expect(seatOf(roster, MAIN)).toMatchObject({ phase: 'work' })
    toolEnd(roster, undefined, 'c1', T + 2)
    expect(seatOf(roster, MAIN)).toMatchObject({ phase: 'idle', act: 'rest' })
  })

  test('goes back to failed, not thinking, after a hold that came between turns', () => {
    const roster = createRoster(T)
    turnStart(roster, T + 1)
    turnEnd(roster, undefined, 'error', T + 2)
    ask(roster, undefined, '', '', T + 3)
    expect(seatOf(roster, MAIN)).toMatchObject({ phase: 'ask' })
    askOver(roster, undefined, undefined, T + 4)
    expect(seatOf(roster, MAIN)).toMatchObject({ phase: 'fail' })
  })

  test('fails with its turn and recovers with the next', () => {
    const roster = createRoster(T)
    turnStart(roster, T + 1)
    turnEnd(roster, undefined, 'error', T + 2)
    expect(seatOf(roster, MAIN)).toMatchObject({ phase: 'fail' })
    turnStart(roster, T + 3)
    expect(seatOf(roster, MAIN)).toMatchObject({ phase: 'think' })
  })
})

describe('waiting for the person', () => {
  test('a prompt is pinned on the call it holds and ends with it', () => {
    const roster = createRoster(T)
    turnStart(roster, T)
    toolStart(roster, undefined, call('c1', 'Read', 'a.ts'), T + 1)
    toolStart(roster, undefined, call('c2', 'Bash', 'git push'), T + 2)
    toolStart(roster, undefined, call('c3', 'Read', 'b.ts'), T + 3)
    ask(roster, undefined, 'Bash', 'git push', T + 4)
    // The held call is the one to see, though a newer one is running.
    expect(seatOf(roster, MAIN)).toMatchObject({ phase: 'ask', tool: 'Bash', target: 'git push', since: T + 4 })

    toolEnd(roster, undefined, 'c2', T + 5)
    expect(seatOf(roster, MAIN)).toMatchObject({ phase: 'work', tool: 'Read', target: 'b.ts' })
  })

  test('of two calls of one tool, the prompt is pinned on the one it is about', () => {
    const roster = createRoster(T)
    toolStart(roster, undefined, call('c1', 'Bash', 'git push'), T + 1)
    toolStart(roster, undefined, call('c2', 'Bash', 'npm test'), T + 2)
    expect(ask(roster, undefined, 'Bash', 'git push', T + 3)).toBe('c1')
    // The newer call ending leaves the hold where it is.
    toolEnd(roster, undefined, 'c2', T + 4)
    expect(seatOf(roster, MAIN)).toMatchObject({ phase: 'ask', target: 'git push' })
    toolEnd(roster, undefined, 'c1', T + 5)
    expect(seatOf(roster, MAIN)).toMatchObject({ phase: 'idle' })
  })

  test('a prompt that names no open call is pinned on the one in flight', () => {
    const roster = createRoster(T)
    turnStart(roster, T)
    toolStart(roster, undefined, call('c1', 'Bash', 'curl …'), T + 1)
    ask(roster, undefined, 'SandboxNetworkAccess', '', T + 2)
    expect(seatOf(roster, MAIN)).toMatchObject({ phase: 'ask', tool: 'Bash' })
    toolEnd(roster, undefined, 'c1', T + 3)
    expect(seatOf(roster, MAIN)).toMatchObject({ phase: 'think' })
  })

  test('a second prompt for a call already held changes nothing', () => {
    const roster = createRoster(T)
    turnStart(roster, T)
    toolStart(roster, undefined, call('c1', 'Bash'), T + 1)
    ask(roster, undefined, 'Bash', '', T + 2)
    ask(roster, undefined, '', '', T + 3)
    toolEnd(roster, undefined, 'c1', T + 4)
    // Nothing is left holding the agent once the call is through.
    expect(seatOf(roster, MAIN)).toMatchObject({ phase: 'think' })
  })

  test('a prompt with no call open stands until the agent moves again', () => {
    const roster = createRoster(T)
    turnStart(roster, T + 1)
    ask(roster, undefined, '', '', T + 2)
    expect(seatOf(roster, MAIN)).toMatchObject({ phase: 'ask', tool: '' })
    toolStart(roster, undefined, call('c1', 'Read'), T + 3)
    expect(seatOf(roster, MAIN)).toMatchObject({ phase: 'work' })
  })

  test('a denial lifts the hold without the call having run', () => {
    const roster = createRoster(T)
    toolStart(roster, undefined, call('c1', 'Bash'), T + 1)
    expect(ask(roster, undefined, 'Bash', '', T + 2)).toBe('c1')
    askOver(roster, undefined, 'c1', T + 3)
    expect(seatOf(roster, MAIN)).toMatchObject({ phase: 'work', tool: 'Bash' })
  })

  test('a call that got through is held no longer by the prompt that was about it', () => {
    // An Agent call goes on for as long as its agent runs; the agent starting answers the prompt.
    const roster = createRoster(T)
    turnStart(roster, T)
    toolStart(roster, undefined, call('c1', 'Agent', 'Ship it'), T + 1)
    ask(roster, undefined, 'Agent', 'Ship it', T + 2)
    expect(seatOf(roster, MAIN)).toMatchObject({ phase: 'ask' })
    callThrough(roster, undefined, 'c1', T + 3)
    expect(seatOf(roster, MAIN)).toMatchObject({ phase: 'work', tool: 'Agent', since: T + 1 })
  })

  test('a call that got through leaves the holds that were not about it', () => {
    // A hold on the agent itself, with no call to pin it on.
    const loose = createRoster(T)
    turnStart(loose, T)
    ask(loose, undefined, '', '', T + 1)
    toolStart(loose, 'a1', call('c9', 'Read'), T + 2)
    callThrough(loose, undefined, 'c-other', T + 3)
    expect(seatOf(loose, MAIN)).toMatchObject({ phase: 'ask', tool: '' })

    // A hold pinned on the Agent call for want of a better one: the prompt named no tool.
    const pinned = createRoster(T)
    turnStart(pinned, T)
    toolStart(pinned, undefined, call('c1', 'Agent', 'Side task'), T + 1)
    ask(pinned, undefined, '', '', T + 2)
    callThrough(pinned, undefined, 'c1', T + 3)
    expect(seatOf(pinned, MAIN)).toMatchObject({ phase: 'ask', tool: 'Agent' })
    // It ends with the call, as every pinned hold does.
    toolEnd(pinned, undefined, 'c1', T + 4)
    expect(seatOf(pinned, MAIN)).toMatchObject({ phase: 'think' })

    // A call of another agent, or one that is not held, is not touched.
    callThrough(pinned, 'nobody', 'c1', T + 5)
    callThrough(pinned, undefined, 'c-gone', T + 5)
    expect(seatOf(pinned, MAIN)).toMatchObject({ phase: 'think' })
  })

  test('a question is a hold from the start', () => {
    const roster = createRoster(T)
    toolStart(roster, undefined, call('c1', 'AskUserQuestion', 'Auth method'), T + 1)
    expect(seatOf(roster, MAIN)).toMatchObject({ phase: 'ask', tool: 'AskUserQuestion', target: 'Auth method' })
  })
})

describe('subagents', () => {
  test('a spawn seats one, thinking, with what the spawn said of it', () => {
    const roster = createRoster(T)
    spawn(roster, sub('a1', 'Explore'), T + 1)
    expect(seatOf(roster, 'a1')).toMatchObject({ kind: 'sub', type: 'Explore', task: 'task of a1', phase: 'think', since: T + 1 })
  })

  test('one only its own events have named stays unseen, then is forgotten', () => {
    const roster = createRoster(T)
    toolStart(roster, 'fork-1', call('c1', 'Read'), T + 1)
    toolEnd(roster, 'fork-1', 'c1', T + 2)
    expect(seatsOf(roster)).toHaveLength(1)
    expect(roster.agents).toHaveLength(2)

    sweep(roster, T + 2 + GHOST_MS)
    expect(roster.agents).toHaveLength(1)
  })

  test('one a loop event seated is named by the spawn that follows, keeping what it does', () => {
    const roster = createRoster(T)
    toolStart(roster, 'a1', call('c1', 'Bash', 'npm test'), T + 1)
    spawn(roster, sub('a1', 'general-purpose'), T + 2)
    expect(seatOf(roster, 'a1')).toMatchObject({ type: 'general-purpose', phase: 'work', tool: 'Bash', calls: 1 })
  })

  test('SubagentStart alone is enough to seat one', () => {
    const roster = createRoster(T)
    subStart(roster, 'a1', 'Explore', T + 1)
    expect(seatOf(roster, 'a1')).toMatchObject({ type: 'Explore', phase: 'think' })
  })

  test('a start that names no type seats nobody', () => {
    // The engine's own loops (a summary, a suggestion) start and stop untyped.
    const roster = createRoster(T)
    subStart(roster, 'f1', '', T + 1)
    subStop(roster, 'f1', T + 2)
    expect(seatsOf(roster)).toHaveLength(1)
    // One a spawn names afterwards is seated all the same.
    subStart(roster, 'a1', '', T + 3)
    spawn(roster, sub('a1', 'Explore'), T + 4)
    expect(seatOf(roster, 'a1')).toMatchObject({ type: 'Explore', phase: 'think' })
  })

  test('finishes once, keeps its seat a while, then leaves', () => {
    const roster = createRoster(T)
    spawn(roster, sub('a1'), T)
    turnEnd(roster, 'a1', 'answer', T + 100)
    subStop(roster, 'a1', T + 200)
    expect(seatOf(roster, 'a1')).toMatchObject({ phase: 'done', since: T + 100 })

    expect(sweep(roster, T + 100 + LINGER_MS - 1)).toBe(false)
    expect(sweep(roster, T + 100 + LINGER_MS)).toBe(true)
    expect(seatOf(roster, 'a1')).toBeUndefined()
  })

  test('fails when its turn ends on an error', () => {
    const roster = createRoster(T)
    spawn(roster, sub('a1'), T)
    turnEnd(roster, 'a1', 'error', T + 1)
    expect(seatOf(roster, 'a1')).toMatchObject({ phase: 'fail' })
  })

  test('interrupted, has nothing to show and leaves at the next sweep', () => {
    const roster = createRoster(T)
    spawn(roster, sub('a1'), T)
    spawn(roster, sub('a2'), T)
    turnEnd(roster, 'a1', 'aborted', T + 100)
    turnEnd(roster, 'a2', 'answer', T + 100)
    expect(sweep(roster, T + 101)).toBe(true)
    expect(seatOf(roster, 'a1')).toBeUndefined()
    expect(seatOf(roster, 'a2')).toMatchObject({ phase: 'done' })
  })

  test('whose call never ended is kept a long while, not for ever', () => {
    const roster = createRoster(T)
    spawn(roster, sub('a1'), T)
    toolStart(roster, 'a1', call('c1', 'Bash', 'sleep'), T + 1)
    expect(sweep(roster, T + 1 + STALE_MS)).toBe(false)
    expect(sweep(roster, T + 1 + CALL_STALE_MS)).toBe(true)
  })

  test('a late spawn does not wake one that already finished', () => {
    const roster = createRoster(T)
    toolStart(roster, 'a1', call('c1', 'Read'), T + 1)
    toolEnd(roster, 'a1', 'c1', T + 2)
    turnEnd(roster, 'a1', 'answer', T + 3)
    spawn(roster, sub('a1'), T + 4)
    expect(seatOf(roster, 'a1')).toMatchObject({ phase: 'done', type: 'Explore' })
  })

  test('works again under its id when it is resumed', () => {
    const roster = createRoster(T)
    spawn(roster, sub('a1'), T)
    turnEnd(roster, 'a1', 'answer', T + 1)
    toolStart(roster, 'a1', call('c9', 'Read', 'more.md'), T + 2)
    expect(seatOf(roster, 'a1')).toMatchObject({ phase: 'work', tool: 'Read' })
    expect(sweep(roster, T + 2 + LINGER_MS)).toBe(false)
  })

  test('a quiet one nothing lists is let go in the end', () => {
    const roster = createRoster(T)
    spawn(roster, sub('a1'), T)
    expect(sweep(roster, T + STALE_MS - 1)).toBe(false)
    expect(sweep(roster, T + STALE_MS)).toBe(true)
  })

  test('sit in the order of who spawned whom', () => {
    const roster = createRoster(T)
    spawn(roster, sub('a1', 'Plan'), T + 1)
    spawn(roster, sub('a2', 'Explore'), T + 2)
    spawn(roster, sub('a3', 'Explore', 'a1'), T + 3)
    spawn(roster, sub('a4', 'Explore', 'a3'), T + 4)
    const seats = seatsOf(roster)
    expect(seats.map(seat => seat.id)).toEqual([MAIN, 'a1', 'a3', 'a4', 'a2'])
    expect(seats.map(seat => depthOf(seats, seat))).toEqual([0, 1, 2, 3, 1])
  })

  test('whose parent has left sit under the main loop', () => {
    const roster = createRoster(T)
    spawn(roster, sub('a2', 'Explore', 'gone'), T + 1)
    const seats = seatsOf(roster)
    expect(seats.map(seat => seat.id)).toEqual([MAIN, 'a2'])
    expect(depthOf(seats, seats[1] as Seat)).toBe(1)
  })
})

describe('teammates', () => {
  test('rest between turns and keep their seat', () => {
    const roster = createRoster(T)
    spawn(roster, sub('m1', 'teammate', '', { name: 'tester', isTeammate: true }), T)
    toolStart(roster, 'm1', call('c1', 'Bash'), T + 1)
    toolEnd(roster, 'm1', 'c1', T + 2)
    turnEnd(roster, 'm1', 'answer', T + 3)
    expect(seatOf(roster, 'm1')).toMatchObject({ kind: 'mate', phase: 'idle' })
    expect(sweep(roster, T + 3 + LINGER_MS)).toBe(false)

    toolStart(roster, 'm1', call('c2', 'Bash'), T + 4)
    mateIdle(roster, 'tester', T + 5)
    expect(seatOf(roster, 'm1')).toMatchObject({ phase: 'idle', since: T + 5 })
  })
})

describe('the list of agents', () => {
  test('seats one the events missed, and never one that was over before the café looked', () => {
    const roster = createRoster(T)
    sync(
      roster,
      [
        { id: 'b1', type: 'general-purpose', description: 'Watch the build', status: 'running', name: 'watcher' },
        { id: 'b2', type: 'Explore', description: 'Old news', status: 'completed' },
      ],
      T + 1,
    )
    expect(seatOf(roster, 'b1')).toMatchObject({ type: 'general-purpose', task: 'Watch the build', name: 'watcher', phase: 'think' })
    expect(seatOf(roster, 'b2')).toBeUndefined()
  })

  test('seats one only its own events had named, once the list has it running', () => {
    const roster = createRoster(T)
    toolStart(roster, 'a1', call('c1', 'Bash', 'npm test'), T + 1)
    expect(seatOf(roster, 'a1')).toBeUndefined()
    sync(roster, [{ id: 'a1', type: 'Explore', description: 'Find it', status: 'running' }], T + 2)
    expect(seatOf(roster, 'a1')).toMatchObject({ type: 'Explore', task: 'Find it', phase: 'work', tool: 'Bash' })
  })

  test('seats one only its own events had named that waits on an agent of its own', () => {
    // The mod loaded mid-run: the parent was missed, then called Agent and is listed `waiting` on its child.
    const roster = createRoster(T)
    toolStart(roster, 'p1', call('c1', 'Agent', 'Child task'), T + 1)
    spawn(roster, sub('k1', 'Explore', 'p1'), T + 2)
    sync(
      roster,
      [
        { id: 'p1', type: 'general-purpose', description: 'Parent task', status: 'waiting' },
        { id: 'k1', type: 'Explore', description: 'Child task', status: 'running', parentId: 'p1' },
      ],
      T + 3,
    )
    expect(seatOf(roster, 'p1')).toMatchObject({ type: 'general-purpose', task: 'Parent task', phase: 'work', tool: 'Agent' })
    const seats = seatsOf(roster)
    expect(seats.map(seat => seat.id)).toEqual([MAIN, 'p1', 'k1'])
    expect(sweep(roster, T + 3 + GHOST_MS)).toBe(false)
  })

  test('does not seat one that was finishing as the café opened, as its last events come in', () => {
    // The mod loaded (or was reloaded) with an agent on its last moves: it ends
    // a call, stops and completes, and the list keeps it a while.
    for (const status of ['running', 'idle', 'waiting', 'completed', 'killed']) {
      const roster = createRoster(T)
      toolStart(roster, 'a1', call('c2', 'Read', 'a.ts'), T + 3)
      toolEnd(roster, 'a1', 'c2', T + 4)
      subStop(roster, 'a1', T + 5)
      turnEnd(roster, 'a1', 'answer', T + 6)
      sync(roster, [{ id: 'a1', type: 'Explore', description: 'task of a1', status }], T + 1_000)
      expect(seatsOf(roster)).toHaveLength(1)
    }
  })

  test('fills in what the events did not say and leaves what they did', () => {
    const roster = createRoster(T)
    subStart(roster, 'a1', 'Explore', T)
    toolStart(roster, 'a1', call('c1', 'Read', 'a.ts'), T + 1)
    sync(roster, [{ id: 'a1', type: 'other', description: 'Find the hooks', status: 'running', parentId: 'p0' }], T + 2)
    expect(seatOf(roster, 'a1')).toMatchObject({ type: 'Explore', task: 'Find the hooks', parent: 'p0', phase: 'work', tool: 'Read' })
  })

  test('ends one the list says is over, as failed when it says so', () => {
    const roster = createRoster(T)
    spawn(roster, sub('a1'), T)
    spawn(roster, sub('a2'), T)
    sync(
      roster,
      [
        { id: 'a1', type: 'Explore', description: '', status: 'killed' },
        { id: 'a2', type: 'Explore', description: '', status: 'failed' },
      ],
      T + 1,
    )
    expect(seatOf(roster, 'a2')).toMatchObject({ phase: 'fail' })
    sweep(roster, T + 2)
    expect(seatOf(roster, 'a1')).toBeUndefined()
    expect(seatOf(roster, 'a2')).toBeDefined()
  })

  test('lets go of one it named and then dropped, once a later look agrees', () => {
    const roster = createRoster(T)
    sync(roster, [{ id: 'b1', type: 'Explore', description: '', status: 'running' }], T)
    sync(roster, [], T + 1)
    // Two looks in the same moment (a tick beside a /cafe) are one look.
    sync(roster, [], T + 2)
    expect(seatOf(roster, 'b1')).toMatchObject({ phase: 'think' })
    sync(roster, [], T + 1 + MISS_MS)
    expect(seatOf(roster, 'b1')).toMatchObject({ phase: 'done' })
  })

  test('comes back onto the list in time and is kept', () => {
    const roster = createRoster(T)
    const listed = [{ id: 'b1', type: 'Explore', description: '', status: 'running' }]
    sync(roster, listed, T)
    sync(roster, [], T + 1)
    sync(roster, listed, T + 2)
    sync(roster, [], T + 2 + MISS_MS - 1)
    expect(seatOf(roster, 'b1')).toMatchObject({ phase: 'think' })
  })

  test('does not drop one it never named', () => {
    // A workflow's agents run without ever being listed.
    const roster = createRoster(T)
    spawn(roster, sub('w1'), T)
    sync(roster, [], T + 1)
    sync(roster, [], T + 2)
    expect(seatOf(roster, 'w1')).toMatchObject({ phase: 'think' })
  })

  test('is not believed over an end the events reported a moment ago', () => {
    const roster = createRoster(T)
    spawn(roster, sub('a1'), T)
    turnEnd(roster, 'a1', 'answer', T + 1_000)
    const running = [{ id: 'a1', type: 'Explore', description: '', status: 'running' }]
    sync(roster, running, T + 3_000)
    expect(seatOf(roster, 'a1')).toMatchObject({ phase: 'done' })
    // Still running well after: it was resumed.
    sync(roster, running, T + 12_000)
    expect(seatOf(roster, 'a1')).toMatchObject({ phase: 'think' })
  })

  test('a finished agent the list still keeps, as idle or waiting, stays finished and is not seated again', () => {
    // The list keeps a finished background agent a while: `idle` while it can
    // be messaged, `waiting` while a shell of its own still runs.
    for (const status of ['idle', 'waiting']) {
      const roster = createRoster(T)
      spawn(roster, sub('a1'), T)
      turnEnd(roster, 'a1', 'answer', T + 1_000)
      const listed = [{ id: 'a1', type: 'Explore', description: '', status, name: 'scout' }]
      sync(roster, listed, T + 2_000)
      sync(roster, listed, T + 15_000)
      expect(seatOf(roster, 'a1')).toMatchObject({ phase: 'done', since: T + 1_000 })

      sweep(roster, T + 1_000 + LINGER_MS)
      expect(seatOf(roster, 'a1')).toBeUndefined()
      sync(roster, listed, T + 30_000)
      sync(roster, [], T + 40_000)
      sync(roster, [], T + 50_000)
      expect(seatOf(roster, 'a1')).toBeUndefined()
    }
  })

  test('a teammate that rests is still seated from the list', () => {
    const roster = createRoster(T)
    sync(roster, [{ id: 'm1', type: 'teammate', description: '', status: 'idle', teammateId: 'tester@team', name: 'tester' }], T + 1)
    expect(seatOf(roster, 'm1')).toMatchObject({ kind: 'mate', phase: 'idle', name: 'tester' })
  })

  test('does not rest one with a call in flight, whatever word the list has for it', () => {
    // A subagent waiting on a child agent of its own is listed `waiting`.
    const roster = createRoster(T)
    spawn(roster, sub('a1'), T)
    toolStart(roster, 'a1', call('c1', 'Bash', 'npm test'), T + 1)
    sync(roster, [{ id: 'a1', type: 'Explore', description: '', status: 'waiting' }], T + 2)
    expect(seatOf(roster, 'a1')).toMatchObject({ phase: 'work', tool: 'Bash' })
  })

  test('a killed agent is gone at the next sweep', () => {
    const roster = createRoster(T)
    spawn(roster, sub('a1'), T)
    sync(roster, [{ id: 'a1', type: 'Explore', description: '', status: 'killed' }], T + 1)
    sweep(roster, T + 2)
    expect(seatOf(roster, 'a1')).toBeUndefined()
  })

  test('rests one that waits for a message', () => {
    const roster = createRoster(T)
    spawn(roster, sub('a1'), T)
    sync(roster, [{ id: 'a1', type: 'Explore', description: '', status: 'idle' }], T + 1)
    expect(seatOf(roster, 'a1')).toMatchObject({ phase: 'idle' })
    sync(roster, [{ id: 'a1', type: 'Explore', description: '', status: 'running' }], T + 2)
    expect(seatOf(roster, 'a1')).toMatchObject({ phase: 'think' })
  })
})

describe('a cleared conversation', () => {
  test('starts the main loop over, at rest', () => {
    const roster = createRoster(T)
    turnStart(roster, T)
    toolStart(roster, undefined, call('c1', 'Bash'), T + 1)
    reset(roster, T + 2)
    expect(seatOf(roster, MAIN)).toMatchObject({ phase: 'idle', calls: 0, since: T + 2 })
    // The call it was in ended with the conversation: its end moves nothing.
    toolEnd(roster, undefined, 'c1', T + 3)
    expect(seatOf(roster, MAIN)).toMatchObject({ phase: 'idle', since: T + 2 })
  })

  test('leaves the agents still running in their seats, with what they were doing', () => {
    // A clear does not end a background agent: it goes on, and reports to the new conversation.
    const roster = createRoster(T)
    spawn(roster, sub('a1'), T)
    spawn(roster, sub('a2'), T)
    toolStart(roster, 'a1', call('c1', 'Bash', 'npm test'), T + 1)
    reset(roster, T + 2)
    expect(seatOf(roster, 'a1')).toMatchObject({ phase: 'work', tool: 'Bash', target: 'npm test', calls: 1 })

    // One the clear did stop says so itself, and leaves as any finished agent does.
    subStop(roster, 'a2', T + 3)
    turnEnd(roster, 'a2', 'answer', T + 4)
    expect(seatOf(roster, 'a2')).toMatchObject({ phase: 'done' })
    sweep(roster, T + 3 + LINGER_MS)
    expect(seatsOf(roster).map(seat => seat.id)).toEqual([MAIN, 'a1'])
  })
})
