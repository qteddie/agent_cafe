// The web café's memory: every session that reports, and what its agents are
// doing. Reports come in two kinds (hooks/wire.ts): a whole table from a
// session's hooks module, or one hook event at a time from scripts/report.mjs,
// which the hall plays into a roster of its own with the same tracker the
// hooks module keeps. A session may send both; while its module's tables keep
// coming, those are what the café shows.
//
// The reporter sends each event the moment its hook runs, and hooks run side
// by side: two events a few milliseconds apart may arrive the other way
// round. So the hall remembers what has ended (calls, turns, sessions), and
// what came early (a prompt before the call it holds, an agent before the call
// that asked for it, an agent's id before the call), and puts each late event
// where it belongs.
//
// Pure: the time is an argument, and nothing is read or written outside the hall.

import type { Agent, Roster } from '../hooks/tracker'
import {
  ask,
  askOver,
  callThrough,
  createRoster,
  mateIdle,
  seatsOf,
  spawn,
  subStart,
  subStop,
  sweep,
  toolEnd,
  toolStart,
  turnEnd,
  turnStart,
} from '../hooks/tracker'
import type { Snap } from '../hooks/view'
import type { App, Bg, Ev, Order, Post } from '../hooks/wire'

/** A hooks module sends its table at least every 15 s: one that has not for this long went quiet. */
export const SNAP_FRESH_MS = 45_000
/** A session heard of only through events is let go after this long without one: at rest or held for the person, */
export const REST_KEEP_MS = 3 * 60 * 60_000
/** in a turn with nothing in flight, */
export const TURN_KEEP_MS = 30 * 60_000
/** with a call in flight: longer than a command may run, the longest call there is. */
export const CALL_KEEP_MS = 45 * 60_000
/** A session that ended stays ended this long: what its hooks sent before the end and lands after it changes nothing. */
export const GONE_KEEP_MS = 30_000
/** The most sessions the hall keeps: past it, the one heard of least recently goes. */
export const MAX_DESKS = 64
/** The most agents one session keeps, and the most calls in flight one agent does. */
export const MAX_AGENTS = 128
export const MAX_OPEN = 32
/** A prompt that came before the call it holds waits this long for the call. */
export const EARLY_ASK_MS = 5_000
/** How long, and how many, ended calls and turns are remembered against a late event. */
const ENDED_KEEP_MS = 10 * 60_000
const ENDED_KEEP = 512
/** How long, and how many, Agent calls (and agents waiting for theirs) are remembered. */
const ORDER_KEEP_MS = 60 * 60_000
const ORDER_KEEP = 256
/** The most ended sessions remembered. */
const GONE_KEEP = 256
/** A table dated further from the hall's clock than this is not moved onto it. */
const MAX_SHIFT_MS = 24 * 60 * 60_000

/** An Agent call: who made it, what it asked for, and the agent it started once known. */
type Ordered = { parent: string; order: Order; at: number; agent: string }

/** A subagent that started before any Agent call of its type was heard of. */
type Unasked = { id: string; type: string; at: number }

/** One session, as the hall keeps it. */
export type Desk = {
  id: string
  app: App
  /** Its folder's name; `''` when its reporter knew none. */
  title: string
  /** Its page on claude.ai, for a session that runs there. */
  link: string
  /** When the hall first heard of it. */
  started: number
  /** The table its hooks module last sent, on the hall's clock, and when it came. */
  snap: Snap | undefined
  snapAt: number
  /** The roster its events made; undefined until one came. */
  roster: Roster | undefined
  /** When an event last came. */
  heard: number
  /** The prompt the main loop's turn answers; `''` before the first. */
  prompt: string
  endedPrompts: Map<string, number>
  endedCalls: Map<string, number>
  /** Agent calls by their id, in the order they came. */
  orders: Map<string, Ordered>
  /** Agent calls whose end, naming the agent each started, came before the call. */
  children: Map<string, { agent: string; at: number }>
  /** Subagents that started before the call that asked for them. */
  unasked: Unasked[]
  /** A prompt that came before the call it holds, by the agent it holds (`''` the main loop). */
  earlyAsks: Map<string, { tool: string; target: string; at: number }>
}

export type Hall = {
  desks: Map<string, Desk>
  /** Sessions that ended, and when. */
  gone: Map<string, number>
}

/** A table to show, and where it came from. */
export type Seated = { desk: Desk; snap: Snap; via: 'mod' | 'hooks' }

export function createHall(): Hall {
  return { desks: new Map(), gone: new Map() }
}

function lastHeard(desk: Desk): number {
  return Math.max(desk.heard, desk.snapAt, desk.started)
}

/** The desk of a session, opened if the hall has not heard of it; the stalest goes when the hall is full. */
function deskOf(hall: Hall, id: string, now: number): Desk {
  const found = hall.desks.get(id)
  if (found !== undefined) return found
  if (hall.desks.size >= MAX_DESKS) {
    let stalest: Desk | undefined
    for (const desk of hall.desks.values()) {
      if (stalest === undefined || lastHeard(desk) < lastHeard(stalest)) stalest = desk
    }
    if (stalest !== undefined) hall.desks.delete(stalest.id)
  }
  const desk: Desk = {
    id,
    app: '',
    title: '',
    link: '',
    started: now,
    snap: undefined,
    snapAt: 0,
    roster: undefined,
    heard: 0,
    prompt: '',
    endedPrompts: new Map(),
    endedCalls: new Map(),
    orders: new Map(),
    children: new Map(),
    unasked: [],
    earlyAsks: new Map(),
  }
  hall.desks.set(id, desk)
  return desk
}

/** Keeps a map to its most entries, forgetting the oldest. */
function trim<T>(map: Map<string, T>, most: number): void {
  while (map.size > most) {
    const oldest = map.keys().next()
    if (oldest.done === true) break
    map.delete(oldest.value)
  }
}

/** Remembers `key` from now, forgetting the oldest past the most kept. */
function remember(ended: Map<string, number>, key: string, now: number, most: number = ENDED_KEEP): void {
  if (key === '') return
  ended.delete(key)
  ended.set(key, now)
  trim(ended, most)
}

function forget<T>(map: Map<string, T>, isOld: (value: T) => boolean): void {
  for (const [key, value] of map) {
    if (isOld(value)) map.delete(key)
  }
}

function findAgent(roster: Roster, id: string): Agent | undefined {
  return roster.agents.find(agent => agent.id === id)
}

function isGone(hall: Hall, id: string, now: number): boolean {
  const at = hall.gone.get(id)
  return at !== undefined && now - at < GONE_KEEP_MS
}

/**
 * The agent an Agent call started is known: it takes the call's task, type,
 * name and parent. `callId` is the call, `child` the agent.
 */
function name(desk: Desk, roster: Roster, callId: string, child: string, now: number): void {
  const ordered = desk.orders.get(callId)
  if (ordered === undefined) return
  ordered.agent = child
  desk.unasked = desk.unasked.filter(waiting => waiting.id !== child)
  spawn(
    roster,
    {
      id: child,
      type: ordered.order.type,
      task: ordered.order.task,
      parent: ordered.parent,
      name: ordered.order.name,
      isTeammate: false,
    },
    now,
  )
  // The call that asked for it got through: a prompt about that very call is answered.
  callThrough(roster, ordered.parent === '' ? undefined : ordered.parent, callId, now)
}

/** True when an Agent call of `order`'s type could have started an agent of `type`. */
function fits(order: Order, type: string): boolean {
  return order.type === type || order.type === ''
}

/**
 * A subagent started, and SubagentStart names only its type: the oldest
 * Agent call of that type still waiting for its agent is taken to be the one
 * that asked for it. Where two calls of one type wait together the guess may
 * swap their tasks, until the calls' own ends say which was which. True when
 * a call was found.
 */
function matchAgent(desk: Desk, roster: Roster, agentId: string, type: string, now: number): boolean {
  for (const ordered of desk.orders.values()) {
    if (ordered.agent === agentId) return true
  }
  const waiting = [...desk.orders.entries()].filter(([, ordered]) => ordered.agent === '' && ordered.parent !== agentId)
  const found =
    waiting.find(([, ordered]) => ordered.order.type === type) ?? waiting.find(([, ordered]) => ordered.order.type === '')
  if (found === undefined) return false
  name(desk, roster, found[0], agentId, now)
  return true
}

/** An Agent call was heard of after an agent of its type started: that agent is taken to be its own. */
function matchCall(desk: Desk, roster: Roster, callId: string, now: number): void {
  const ordered = desk.orders.get(callId)
  if (ordered === undefined || ordered.agent !== '') return
  const found = desk.unasked.find(waiting => waiting.id !== ordered.parent && fits(ordered.order, waiting.type))
  if (found !== undefined) name(desk, roster, callId, found.id, now)
}

/** True when an agent works for one of `running`, however far down. */
function worksFor(roster: Roster, agent: Agent, running: ReadonlySet<string>): boolean {
  const walked = new Set<string>([agent.id])
  let parent = agent.parent
  while (parent !== '' && !walked.has(parent)) {
    if (running.has(parent)) return true
    walked.add(parent)
    const above = findAgent(roster, parent)
    if (above === undefined) return false
    parent = above.parent
  }
  return false
}

/**
 * The main loop stopped, and Stop lists the agents it left at work in the
 * background. Those stay (and take a seat if the events missed one); any
 * other subagent that has not said it ended is over, save those working for
 * one that stays. One taken for over that calls a tool again is back at work.
 */
function settle(roster: Roster, bg: readonly Bg[], now: number): void {
  const running = new Set<string>()
  for (const task of bg) {
    if (!task.isRunning) continue
    running.add(task.id)
    const known = findAgent(roster, task.id)
    if (known !== undefined && known.isKnown) {
      // Stop says what the events may have missed.
      if (known.task === '') known.task = task.task
      if (known.type === '') known.type = task.type
      continue
    }
    spawn(
      roster,
      {
        id: task.id,
        type: known?.type || task.type,
        task: known?.task || task.task,
        parent: known?.parent ?? '',
        name: known?.name ?? '',
        isTeammate: false,
      },
      now,
    )
  }
  for (const agent of [...roster.agents]) {
    if (agent.kind !== 'sub' || agent.ended !== 0 || running.has(agent.id)) continue
    if (worksFor(roster, agent, running)) continue
    subStop(roster, agent.id, now)
  }
}

/** Keeps a roster to its most agents and calls in flight: whoever is still at work stays. */
function bound(roster: Roster): void {
  for (const agent of roster.agents) {
    if (agent.open.length > MAX_OPEN) agent.open = agent.open.slice(-MAX_OPEN)
  }
  if (roster.agents.length <= MAX_AGENTS) return
  const standing = (agent: Agent): number => (agent.kind === 'main' ? 0 : agent.ended !== 0 ? 3 : agent.isKnown ? 1 : 2)
  const kept = new Set(
    [...roster.agents]
      .sort((one, other) => standing(one) - standing(other) || other.seen - one.seen)
      .slice(0, MAX_AGENTS)
      .map(agent => agent.id),
  )
  roster.agents = roster.agents.filter(agent => kept.has(agent.id))
}

/** Plays one event into the session's roster. */
function apply(desk: Desk, ev: Ev, now: number): void {
  const roster = (desk.roster ??= createRoster(now))
  const agent = 'agent' in ev && ev.agent !== '' ? ev.agent : undefined
  switch (ev.e) {
    case 'start':
    case 'end':
      return
    case 'prompt':
      // Its Stop came first: the turn is already over.
      if (ev.pid !== '' && desk.endedPrompts.has(ev.pid)) return
      desk.prompt = ev.pid
      turnStart(roster, now)
      return
    case 'stop':
      remember(desk.endedPrompts, ev.pid, now)
      // The Stop of another turn than the one running ends nothing: one of a
      // turn before came late, and one of the turn after came early (its
      // prompt, when it comes, finds that turn over).
      if (ev.pid !== '' && desk.prompt !== '' && ev.pid !== desk.prompt) return
      turnEnd(roster, undefined, ev.hasFailed ? 'error' : 'answer', now)
      // A Stop that does not list what is still at work says nothing of it.
      if (ev.bg !== null) settle(roster, ev.bg, now)
      return
    case 'waiting':
      // The main loop answered a while ago and waits for the person: its
      // turn is over, Stop or no Stop (an interrupted turn has none).
      turnEnd(roster, undefined, 'answer', now)
      return
    case 'pre': {
      // A subagent heard of through a call of its own is a real one, whatever
      // was missed before: its start, or its end and leaving.
      if (agent !== undefined && ev.type !== '') subStart(roster, agent, ev.type, now)
      if (ev.order !== null && !desk.orders.has(ev.id)) {
        desk.orders.set(ev.id, { parent: ev.agent, order: ev.order, at: now, agent: '' })
        trim(desk.orders, ORDER_KEEP)
        const early = desk.children.get(ev.id)
        if (early !== undefined) name(desk, roster, ev.id, early.agent, now)
        else matchCall(desk, roster, ev.id, now)
      }
      // Its end came first: the call is already over.
      if (desk.endedCalls.has(ev.id)) return
      toolStart(roster, agent, { id: ev.id, tool: ev.tool, act: ev.act, target: ev.target }, now)
      // The prompt that holds it came first: it holds it now.
      const held = desk.earlyAsks.get(ev.agent)
      if (held !== undefined && held.tool === ev.tool && now - held.at <= EARLY_ASK_MS) {
        desk.earlyAsks.delete(ev.agent)
        ask(roster, agent, held.tool, held.target, now)
      }
      return
    }
    case 'post':
      remember(desk.endedCalls, ev.id, now)
      toolEnd(roster, agent, ev.id, now)
      if (ev.child !== '') {
        if (desk.orders.has(ev.id)) name(desk, roster, ev.id, ev.child, now)
        else {
          desk.children.set(ev.id, { agent: ev.child, at: now })
          trim(desk.children, ORDER_KEEP)
        }
      }
      return
    case 'batch':
      for (const id of ev.ids) {
        remember(desk.endedCalls, id, now)
        toolEnd(roster, agent, id, now)
      }
      // A batch is over when all its calls are, so is any prompt held in it:
      // a call the person turned down has no end of its own.
      desk.earlyAsks.delete(ev.agent)
      askOver(roster, agent, undefined, now)
      return
    case 'ask': {
      const pinned = ask(roster, agent, ev.tool, ev.target, now)
      // No call of that tool yet: the one it holds may be on its way.
      if (pinned === undefined) desk.earlyAsks.set(ev.agent, { tool: ev.tool, target: ev.target, at: now })
      return
    }
    case 'denied':
      desk.earlyAsks.delete(ev.agent)
      askOver(roster, agent, ev.id, now)
      return
    case 'sub':
      subStart(roster, ev.agent, ev.type, now)
      // A loop with no type is the engine's own (a summary, a fork): no call asked for it.
      if (ev.type !== '' && !matchAgent(desk, roster, ev.agent, ev.type, now)) {
        desk.unasked.push({ id: ev.agent, type: ev.type, at: now })
        if (desk.unasked.length > ORDER_KEEP) desk.unasked.shift()
      }
      return
    case 'subend':
      desk.unasked = desk.unasked.filter(waiting => waiting.id !== ev.agent)
      if (ev.hasFailed) turnEnd(roster, ev.agent, 'error', now)
      else subStop(roster, ev.agent, now)
      return
    case 'idle':
      mateIdle(roster, ev.name, now)
      return
    case 'elicit':
      ask(roster, agent, '', '', now)
      return
    case 'elicited':
      askOver(roster, agent, undefined, now)
      return
  }
}

/** A table moved onto the hall's clock: a session's clock may run apart from the server's. */
function onHallClock(snap: Snap, now: number): Snap {
  const shift = snap.at > 0 && Math.abs(now - snap.at) <= MAX_SHIFT_MS ? now - snap.at : 0
  return {
    ...snap,
    at: now,
    seats: snap.seats.map(seat => ({ ...seat, since: Math.min(now, Math.max(0, seat.since + shift)) })),
  }
}

/** A session is over: its table goes, and nothing it sent before the end brings it back. */
function end(hall: Hall, id: string, now: number): boolean {
  remember(hall.gone, id, now, GONE_KEEP)
  return hall.desks.delete(id)
}

/**
 * Takes one report into the hall. True when what the café shows may have changed.
 */
export function receive(hall: Hall, post: Post, now: number): boolean {
  switch (post.kind) {
    case 'bye':
      return end(hall, post.id, now)
    case 'snap': {
      if (isGone(hall, post.snap.id, now)) return false
      const desk = deskOf(hall, post.snap.id, now)
      if (post.app !== '') desk.app = post.app
      if (post.link !== '') desk.link = post.link
      desk.snap = onHallClock(post.snap, now)
      desk.snapAt = now
      return true
    }
    case 'event': {
      const { ev } = post
      // However it ended (a /clear or a resume carries the process on under
      // another id, which reports as a session of its own).
      if (ev.e === 'end') return end(hall, post.sid, now)
      if (isGone(hall, post.sid, now)) {
        // Only a session starting again under the same id (a resume) comes back.
        if (ev.e !== 'start') return false
        hall.gone.delete(post.sid)
      }
      const desk = deskOf(hall, post.sid, now)
      if (post.app !== '') desk.app = post.app
      if (post.link !== '') desk.link = post.link
      if (post.title !== '') desk.title = post.title
      desk.heard = now
      apply(desk, ev, now)
      if (desk.roster !== undefined) bound(desk.roster)
      return true
    }
  }
}

/** True for a hooks module whose tables still come. */
function hasFreshSnap(desk: Desk, now: number): boolean {
  return desk.snap !== undefined && now - desk.snapAt < SNAP_FRESH_MS
}

/** How long a session heard of only through events is kept without one. */
function keepFor(roster: Roster): number {
  const live = roster.agents.filter(agent => agent.ended === 0)
  if (live.some(agent => agent.phase === 'ask')) return REST_KEEP_MS
  if (live.some(agent => agent.open.length > 0)) return CALL_KEEP_MS
  if (live.some(agent => agent.inTurn || agent.needsPerson)) return TURN_KEEP_MS
  return REST_KEEP_MS
}

/**
 * Lets go of what is over: the agents that finished a while ago, the tables
 * whose module went quiet, the sessions not heard of for too long. True when
 * what the café shows may have changed.
 */
export function tidyHall(hall: Hall, now: number): boolean {
  let hasChanged = false
  forget(hall.gone, at => now - at >= GONE_KEEP_MS)
  for (const [id, desk] of [...hall.desks]) {
    if (desk.roster !== undefined) hasChanged = sweep(desk.roster, now) || hasChanged
    forget(desk.endedCalls, at => now - at > ENDED_KEEP_MS)
    forget(desk.endedPrompts, at => now - at > ENDED_KEEP_MS)
    forget(desk.orders, ordered => now - ordered.at > ORDER_KEEP_MS)
    forget(desk.children, child => now - child.at > ORDER_KEEP_MS)
    forget(desk.earlyAsks, held => now - held.at > EARLY_ASK_MS)
    desk.unasked = desk.unasked.filter(waiting => now - waiting.at <= ORDER_KEEP_MS)

    if (hasFreshSnap(desk, now)) continue
    if (desk.snap !== undefined) {
      // Its module went quiet: the events, if any came, say the rest.
      desk.snap = undefined
      hasChanged = true
    }
    if (desk.roster === undefined || now - desk.heard > keepFor(desk.roster)) {
      hall.desks.delete(id)
      hasChanged = true
    }
  }
  return hasChanged
}

/** Where a table stands in line: someone waiting for the person first, then those at work, then the rest. */
function rankOf(snap: Snap): number {
  if (snap.seats.some(seat => seat.phase === 'ask')) return 0
  if (snap.seats.some(seat => seat.phase === 'think' || seat.phase === 'work')) return 1
  return 2
}

/**
 * Every session's table as the café shows it: a session waiting for the
 * person first, then those at work, then those at rest, each in the order the
 * hall first heard of them.
 */
export function seatingOf(hall: Hall, now: number): Seated[] {
  const out: Seated[] = []
  for (const desk of hall.desks.values()) {
    const isFresh = hasFreshSnap(desk, now)
    const seats = isFresh && desk.snap !== undefined ? desk.snap.seats : desk.roster === undefined ? [] : seatsOf(desk.roster)
    if (seats.length === 0) continue
    const title = (isFresh ? desk.snap?.title : '') || desk.title
    out.push({ desk, via: isFresh ? 'mod' : 'hooks', snap: { v: 1, id: desk.id, title, at: now, seats } })
  }
  return out.sort(
    (one, other) =>
      rankOf(one.snap) - rankOf(other.snap) || one.desk.started - other.desk.started || one.desk.id.localeCompare(other.desk.id),
  )
}
