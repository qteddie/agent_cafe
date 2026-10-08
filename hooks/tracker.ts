// Who is in the café and what each one is doing: the roster one session keeps
// of its own agents, moved along by the session's events.
//
// The hooks module owns one roster and calls these functions from its hooks;
// every function takes the time as an argument and touches nothing else, so
// the same calls in a test give the same roster.

import type { Act } from './describe'

/**
 * Where a seat stands: between tool calls, in one, held for the person,
 * resting with no turn running, or gone (done, failed).
 */
export type Phase = 'think' | 'work' | 'ask' | 'idle' | 'done' | 'fail'

/** The main loop, a subagent, or a teammate (which rests between its turns). */
export type Kind = 'main' | 'sub' | 'mate'

/** The main loop's id in the roster: its events carry no `agentId`. */
export const MAIN = 'main'

/** How long a subagent that finished keeps its seat before it leaves. */
export const LINGER_MS = 20_000
/** How long a loop nothing has named is remembered before it is forgotten. */
export const GHOST_MS = 60_000
/** How long a quiet agent the list never named is kept. */
export const STALE_MS = 30 * 60_000
/** How long a call in flight keeps an agent nothing else has been heard of. */
export const CALL_STALE_MS = 12 * 60 * 60_000
/** How long the list must go on leaving an agent out before the café believes it. */
export const MISS_MS = 4_000
/** The list may be a moment behind the events: an end this recent stands against it. */
const SETTLE_MS = 10_000

/** One tool call in flight. */
type Call = {
  id: string
  tool: string
  act: Act
  target: string
  at: number
  /** Held at a permission prompt since `askAt`. */
  isAsking: boolean
  askAt: number
  /** The tool the prompt that holds it named; `''` when it named none. */
  askedFor: string
}

/** One agent of this session, as the roster keeps it. */
export type Agent = {
  id: string
  kind: Kind
  /** `main`, the subagent type, or `''` until something says. */
  type: string
  /** What SendMessage addresses it by, when it has a name. */
  name: string
  /** The few words its spawn described the task in. */
  task: string
  /** The agent whose loop spawned it; `''` when the main loop did. */
  parent: string
  phase: Phase
  act: Act
  tool: string
  target: string
  /** When what it shows now began. */
  since: number
  born: number
  /** When it finished; 0 while it is here. */
  ended: number
  /** Tool calls so far. */
  calls: number
  open: Call[]
  /** The person is asked for, with no open call to pin it on. */
  needsPerson: boolean
  /**
   * True while a turn of its own runs: with nothing in flight it is thinking.
   * False between turns, where with nothing in flight it rests.
   */
  inTurn: boolean
  /** True when the main loop's last turn ended on an error: it rests as failed. */
  hasFailed: boolean
  /** False while only loop events have named it: such a seat is not shown. */
  isKnown: boolean
  /** True once `$.agent.list()` named it: its absence there then means it left. */
  isListed: boolean
  /** When the list first left it out, having named it before; 0 while it is listed. */
  missedAt: number
  /** When an event last named it. */
  seen: number
}

export type Roster = { agents: Agent[] }

/** What a seat shows, the part of an agent the café draws and shares. */
export type Seat = {
  id: string
  kind: Kind
  type: string
  name: string
  task: string
  parent: string
  phase: Phase
  act: Act
  tool: string
  target: string
  since: number
  calls: number
}

/** One agent as `$.agent.list()` answers it: the fields the roster reads. */
export type Listed = {
  id: string
  type: string
  description: string
  status: string
  parentId?: string
  name?: string
  teammateId?: string
}

/** What a spawn says of the agent it started. */
export type Spawned = {
  id: string
  type: string
  task: string
  parent: string
  name: string
  isTeammate: boolean
}

/** Why a turn ended, as `turn.complete` says it. */
export type EndReason = 'answer' | 'aborted' | 'refusal' | 'error'

function blank(id: string, kind: Kind, now: number): Agent {
  return {
    id,
    kind,
    type: kind === 'main' ? MAIN : '',
    name: '',
    task: '',
    parent: '',
    phase: kind === 'main' ? 'idle' : 'think',
    act: kind === 'main' ? 'rest' : 'think',
    tool: '',
    target: '',
    since: now,
    born: now,
    ended: 0,
    calls: 0,
    open: [],
    needsPerson: false,
    // The main loop is met between turns; anyone else is met at work.
    inTurn: kind !== 'main',
    hasFailed: false,
    isKnown: kind === 'main',
    isListed: false,
    missedAt: 0,
    seen: now,
  }
}

/** A roster with the main loop at its seat, resting. */
export function createRoster(now: number): Roster {
  return { agents: [blank(MAIN, 'main', now)] }
}

function find(roster: Roster, id: string): Agent | undefined {
  return roster.agents.find(agent => agent.id === id)
}

/** The agent an event names, seated unseen when nothing has named it before. */
function ensure(roster: Roster, agentId: string | undefined, now: number): Agent {
  const id = agentId ?? MAIN
  let agent = find(roster, id)
  if (agent === undefined) {
    agent = blank(id, id === MAIN ? 'main' : 'sub', now)
    roster.agents.push(agent)
  }
  agent.seen = now
  return agent
}

function put(agent: Agent, phase: Phase, act: Act, tool: string, target: string, since: number): void {
  if (agent.phase === phase && agent.act === act && agent.tool === tool && agent.target === target) return
  agent.phase = phase
  agent.act = act
  agent.tool = tool
  agent.target = target
  agent.since = since
}

function lastWhere<T>(items: readonly T[], test: (item: T) => boolean): T | undefined {
  for (let index = items.length - 1; index >= 0; index -= 1) {
    const item = items[index]
    if (item !== undefined && test(item)) return item
  }
  return undefined
}

/** Works out what a live agent shows from its calls in flight and whether a turn runs. */
function show(agent: Agent, now: number): void {
  if (agent.ended !== 0) return
  // A call held for the person outranks the rest: that is the one to see.
  const held = lastWhere(agent.open, call => call.isAsking || call.act === 'ask')
  const top = held ?? agent.open[agent.open.length - 1]
  if (top !== undefined) {
    const isHeld = top.isAsking || top.act === 'ask'
    put(agent, isHeld ? 'ask' : 'work', top.act, top.tool, top.target, top.isAsking ? top.askAt : top.at)
    return
  }
  if (agent.needsPerson) {
    put(agent, 'ask', 'ask', '', '', now)
    return
  }
  if (agent.inTurn) {
    put(agent, 'think', 'think', '', '', now)
    return
  }
  // Between turns there is nothing to think about: a call that ran there (a
  // plugin's own, say) leaves the agent as its last turn did.
  if (agent.hasFailed) put(agent, 'fail', 'fail', '', '', now)
  else put(agent, 'idle', 'rest', '', '', now)
}

/**
 * An agent is over: done, failed, or cut short (stopped by the person or
 * killed), which has nothing to show for it and so leaves at the next sweep.
 */
function leave(agent: Agent, how: 'done' | 'fail' | 'cut', now: number): void {
  agent.open = []
  agent.needsPerson = false
  agent.inTurn = false
  const phase = how === 'fail' ? 'fail' : 'done'
  put(agent, phase, phase, '', '', now)
  agent.ended = how === 'cut' ? now - LINGER_MS : now
}

function rest(agent: Agent, now: number): void {
  agent.open = []
  agent.needsPerson = false
  agent.inTurn = false
  agent.hasFailed = false
  put(agent, 'idle', 'rest', '', '', now)
}

/** A main-loop turn began: the main loop is thinking, whatever it showed. */
export function turnStart(roster: Roster, now: number): void {
  const agent = ensure(roster, undefined, now)
  agent.open = []
  agent.needsPerson = false
  agent.ended = 0
  agent.inTurn = true
  agent.hasFailed = false
  put(agent, 'think', 'think', '', '', now)
}

/** A tool call began in an agent's loop. */
export function toolStart(
  roster: Roster,
  agentId: string | undefined,
  call: { id: string; tool: string; act: Act; target: string },
  now: number,
): void {
  const agent = ensure(roster, agentId, now)
  // An agent that finished, or rested, and works again was resumed under its
  // id. Not so the main loop: a call may run there with no turn (a plugin's).
  agent.ended = 0
  if (agent.kind !== 'main') agent.inTurn = true
  agent.needsPerson = false
  agent.calls += 1
  agent.open = agent.open.filter(open => open.id !== call.id)
  agent.open.push({ ...call, at: now, isAsking: false, askAt: 0, askedFor: '' })
  show(agent, now)
}

/** A tool call ended, however it ended. */
export function toolEnd(roster: Roster, agentId: string | undefined, id: string, now: number): void {
  const agent = find(roster, agentId ?? MAIN)
  if (agent === undefined) return
  agent.seen = now
  const before = agent.open.length
  agent.open = agent.open.filter(open => open.id !== id)
  // A call the roster no longer holds ended a turn ago: nothing to show for it.
  if (agent.open.length === before) return
  // A call got through, so the agent is moving again: nothing unpinned holds it.
  agent.needsPerson = false
  show(agent, now)
}

/**
 * An agent is held for the person: `tool` names the call a prompt holds and
 * `target` what that call works on, each `''` when the prompt does not say.
 *
 * The hold is pinned on the newest open call of that name and target, else of
 * that name, else on the newest open call, and ends with that call. With no
 * call open it stands on the agent itself until its next call, the end of its
 * turn, or `askOver`.
 *
 * @returns the id of the call the hold was pinned on, if it was pinned on one
 */
export function ask(
  roster: Roster,
  agentId: string | undefined,
  tool: string,
  target: string,
  now: number,
): string | undefined {
  const agent = ensure(roster, agentId, now)
  if (agent.ended !== 0) return undefined
  const call =
    lastWhere(agent.open, open => !open.isAsking && open.tool === tool && open.target === target) ??
    lastWhere(agent.open, open => !open.isAsking && open.tool === tool) ??
    lastWhere(agent.open, open => !open.isAsking)
  if (call !== undefined) {
    call.isAsking = true
    call.askAt = now
    call.askedFor = tool
  } else if (!agent.open.some(open => open.isAsking)) {
    agent.needsPerson = true
  }
  show(agent, now)
  return call?.id
}

/** The hold is over without the call having run: one call's by id, or all. */
export function askOver(roster: Roster, agentId: string | undefined, id: string | undefined, now: number): void {
  const agent = find(roster, agentId ?? MAIN)
  if (agent === undefined) return
  agent.seen = now
  agent.needsPerson = false
  for (const call of agent.open) {
    if (id === undefined || call.id === id) call.isAsking = false
  }
  show(agent, now)
}

/**
 * A call got through without having ended, as an Agent call does when its
 * agent starts: the hold a prompt about that very call pinned on it is over.
 *
 * A hold pinned there for want of a better call, and one on the agent itself,
 * stand: the agent starting says nothing about those.
 */
export function callThrough(roster: Roster, agentId: string | undefined, id: string, now: number): void {
  const agent = find(roster, agentId ?? MAIN)
  if (agent === undefined) return
  const call = agent.open.find(open => open.id === id)
  if (call === undefined || !call.isAsking || call.askedFor !== call.tool) return
  call.isAsking = false
  show(agent, now)
}

/** A subagent or a teammate started: seat it, or name the one a loop event seated. */
export function spawn(roster: Roster, info: Spawned, now: number): void {
  let agent = find(roster, info.id)
  if (agent === undefined) {
    agent = blank(info.id, info.isTeammate ? 'mate' : 'sub', now)
    roster.agents.push(agent)
  }
  agent.kind = info.isTeammate ? 'mate' : 'sub'
  agent.isKnown = true
  agent.seen = now
  if (info.type !== '') agent.type = info.type
  if (info.task !== '') agent.task = info.task
  if (info.name !== '') agent.name = info.name
  agent.parent = info.parent
  // One that has already finished stays finished: a spawn names an agent, it
  // does not wake one. A later tool call, or the list, says it runs again.
}

/**
 * The SubagentStart event: the agent is real, and this is its type.
 *
 * One that starts with no type is a loop of the engine's own (a summary, a
 * suggestion): it takes no seat unless a spawn or the list names it.
 */
export function subStart(roster: Roster, id: string, type: string, now: number): void {
  const agent = ensure(roster, id, now)
  if (type === '') return
  agent.isKnown = true
  if (agent.type === '') agent.type = type
}

/**
 * A turn ended: the main loop and a teammate rest, a subagent is done, or
 * failed, or (interrupted) simply gone.
 */
export function turnEnd(roster: Roster, agentId: string | undefined, reason: EndReason, now: number): void {
  const agent = find(roster, agentId ?? MAIN)
  if (agent === undefined) return
  agent.seen = now
  const hasFailed = reason === 'error' || reason === 'refusal'
  if (agent.kind === 'main') {
    agent.open = []
    agent.needsPerson = false
    agent.inTurn = false
    agent.hasFailed = hasFailed
    show(agent, now)
    return
  }
  if (agent.kind === 'mate') {
    rest(agent, now)
    return
  }
  if (agent.ended === 0) leave(agent, hasFailed ? 'fail' : reason === 'aborted' ? 'cut' : 'done', now)
}

/** The SubagentStop event: a subagent is done, a teammate rests. */
export function subStop(roster: Roster, id: string, now: number): void {
  const agent = find(roster, id)
  if (agent === undefined || agent.ended !== 0) return
  agent.seen = now
  if (agent.kind === 'mate') rest(agent, now)
  else if (agent.kind === 'sub') leave(agent, 'done', now)
}

/** The TeammateIdle event names the teammate, not its id. */
export function mateIdle(roster: Roster, name: string, now: number): void {
  const agent = roster.agents.find(mate => mate.kind === 'mate' && mate.name === name && mate.ended === 0)
  if (agent === undefined) return
  agent.seen = now
  rest(agent, now)
}

/**
 * What the list's word for an agent means to the café: at work, over, or
 * parked between turns.
 *
 * `idle` and `waiting` are the parked ones. A teammate parks between its turns
 * and is still here. Any other agent is listed under those words once its turn
 * has ended, for as long as it can still be sent a message or a shell of its
 * own still runs, and also while it waits on an agent of its own: by
 * themselves they are no sign of life, and a call in flight is.
 */
function standingOf(status: string): 'live' | 'parked' | 'over' {
  if (status === 'completed' || status === 'failed' || status === 'killed') return 'over'
  if (status === 'running' || status === 'pending') return 'live'
  return 'parked'
}

/**
 * Reconciles the roster with `$.agent.list()`: seats whoever the events missed,
 * fills in what an event did not say, and lets go of whoever the list dropped.
 *
 * The events stay the authority on what a running agent is doing; the list
 * says who exists and who is over.
 */
export function sync(roster: Roster, list: readonly Listed[], now: number): void {
  const ids = new Set<string>()
  for (const info of list) {
    ids.add(info.id)
    const standing = standingOf(info.status)
    let agent = find(roster, info.id)
    const isMate = info.teammateId !== undefined || agent?.kind === 'mate'
    if (agent === undefined || !agent.isKnown) {
      // Whoever was over, or parked with its turn behind it, before the café
      // looked never sits down: neither one nothing has named, nor one only
      // its loop's last events have (an agent that was finishing as the mod
      // loaded). A teammate that rests is still one of the team.
      // One with a call in flight is at work whatever the list calls it: a
      // subagent waiting on an agent of its own is listed `waiting`.
      const isMidCall = agent !== undefined && agent.ended === 0 && agent.open.length > 0
      if (standing === 'over' || (standing === 'parked' && !isMate && !isMidCall)) continue
      // Nor one the events saw end a moment ago, which the list has yet to hear.
      if (agent !== undefined && agent.ended !== 0 && now - agent.ended <= SETTLE_MS) continue
    }
    if (agent === undefined) {
      agent = blank(info.id, isMate ? 'mate' : 'sub', now)
      roster.agents.push(agent)
    }
    agent.isKnown = true
    agent.isListed = true
    agent.missedAt = 0
    if (info.teammateId !== undefined) agent.kind = 'mate'
    if (agent.type === '' && info.type !== '') agent.type = info.type
    if (agent.task === '' && info.description !== '') agent.task = info.description
    if (agent.name === '' && info.name !== undefined) agent.name = info.name
    if (agent.parent === '' && info.parentId !== undefined) agent.parent = info.parentId

    if (standing === 'over') {
      if (agent.ended === 0) leave(agent, info.status === 'failed' ? 'fail' : info.status === 'killed' ? 'cut' : 'done', now)
    } else if (standing === 'parked') {
      // Its turn is behind it. One the events still had at work, with nothing
      // in flight, rests; one that finished stays finished.
      if (agent.ended === 0 && agent.open.length === 0 && agent.kind !== 'main') rest(agent, now)
    } else if (agent.ended !== 0) {
      // Running again under its id, unless the list is only a moment behind.
      if (now - agent.ended > SETTLE_MS) {
        agent.ended = 0
        agent.inTurn = true
        show(agent, now)
      }
    } else if (!agent.inTurn && agent.kind !== 'main') {
      // It rested, and runs again.
      agent.inTurn = true
      show(agent, now)
    }
  }

  // Whoever the list named and has since dropped is gone, once a later look agrees.
  for (const agent of roster.agents) {
    if (agent.kind === 'main' || !agent.isListed || agent.ended !== 0 || ids.has(agent.id)) continue
    if (agent.missedAt === 0) agent.missedAt = now
    else if (now - agent.missedAt >= MISS_MS) leave(agent, 'done', now)
  }
}

/**
 * Lets go of whoever has stayed long enough: the finished after a while, the
 * unnamed and the long quiet after longer. True when someone left.
 */
export function sweep(roster: Roster, now: number): boolean {
  const before = roster.agents.length
  roster.agents = roster.agents.filter(agent => {
    if (agent.kind === 'main') return true
    if (agent.ended !== 0) return now - agent.ended < LINGER_MS
    if (!agent.isKnown) return now - agent.seen < GHOST_MS
    if (agent.isListed) return true
    // A call in flight keeps its agent, unless neither has been heard of for
    // half a day: then the call's end was lost.
    if (agent.open.length > 0) return now - agent.seen < CALL_STALE_MS
    return now - agent.seen < STALE_MS
  })
  return roster.agents.length !== before
}

/**
 * The conversation was cleared: the main loop starts over, at rest.
 *
 * Its agents keep their seats. A clear does not end them: one still running
 * goes on and reports to the new conversation, and one the clear stops says
 * so itself, as any agent that stops does.
 */
export function reset(roster: Roster, now: number): void {
  let main = find(roster, MAIN)
  if (main === undefined) {
    main = blank(MAIN, 'main', now)
    roster.agents.unshift(main)
  }
  rest(main, now)
  // Rested already, it still starts over: its time at rest counts from now.
  main.since = now
  main.calls = 0
}

function toSeat(agent: Agent): Seat {
  return {
    id: agent.id,
    kind: agent.kind,
    type: agent.type,
    name: agent.name,
    task: agent.task,
    parent: agent.parent,
    phase: agent.phase,
    act: agent.act,
    tool: agent.tool,
    target: agent.target,
    since: agent.since,
    calls: agent.calls,
  }
}

/**
 * The seats to draw, in table order: the main loop, then each agent it
 * spawned in the order they came, each followed by the agents it spawned.
 */
export function seatsOf(roster: Roster): Seat[] {
  const shown = roster.agents.filter(agent => agent.isKnown)
  const ids = new Set(shown.map(agent => agent.id))
  const childrenOf = (parent: string): Agent[] =>
    shown
      .filter(agent => agent.kind !== 'main' && (agent.parent === parent || (parent === '' && !ids.has(agent.parent))))
      .sort((one, other) => one.born - other.born)

  const out: Seat[] = []
  const placed = new Set<string>()
  const place = (agent: Agent): void => {
    if (placed.has(agent.id)) return
    placed.add(agent.id)
    out.push(toSeat(agent))
    for (const child of childrenOf(agent.id)) place(child)
  }
  for (const agent of shown) {
    if (agent.kind === 'main') {
      placed.add(agent.id)
      out.push(toSeat(agent))
    }
  }
  for (const agent of childrenOf('')) place(agent)
  // A cycle of parents would leave agents unplaced: seat them all the same.
  for (const agent of shown) place(agent)
  return out
}

/** How deep a seat sits under the main loop: 1 for its own subagents, 2 for theirs. */
export function depthOf(seats: readonly Seat[], seat: Seat): number {
  if (seat.kind === 'main') return 0
  let depth = 1
  let parent = seat.parent
  const walked = new Set<string>([seat.id])
  while (parent !== '' && !walked.has(parent)) {
    const above = seats.find(other => other.id === parent)
    if (above === undefined || above.kind === 'main') break
    walked.add(parent)
    depth += 1
    parent = above.parent
  }
  return depth
}
