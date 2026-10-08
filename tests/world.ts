// What every engine-level test of the café stands on: a clock and a store in
// memory, and an answer for each event the café raises or listens to, as the
// engine would give it. Not a test file itself.

import type { AgentInfo, On, PermissionRequestDecision, RenderSurface } from 'claude-code'
import type { MockClock } from 'claude-code/testing'
import { mock } from 'claude-code/testing'

import type { Seat } from '../hooks/tracker'
import type { Snap } from '../hooks/view'

export const NOW = 1_800_000_000_000

/** What `$.session.id()` answers in a test. */
export const HERE = 'session-here'

/** What a session reads at its start. */
export const START = { cwd: '/Users/me/Projects/agent-cafe', surface: 'desktop', isInteractive: true } as const

/** `/cafe`, as the person typing it at the prompt raises it; add `args`. */
export const COMMAND = {
  command: 'cafe',
  origin: { kind: 'composer' },
  presentation: { isFullscreen: false, columns: 120 },
} as const

/** The fields of an `agent.spawn` the Agent tool fills in; add what the test is about. */
export const SPAWN = {
  tool_use_id: 'toolu_spawn',
  prompt: 'Look into it and report back.',
  provider: { plugin: 'engine', tier: 'core' },
  parentModel: 'claude-opus-5-5',
  background: false,
  fork: false,
} as const

/** The fields of a `turn.complete`; add `agentId` for a subagent's. */
export const TURN_END = { answer: 'Done.', durationMs: 1200, isAborted: false, turnId: 'turn-1', reason: 'answer' } as const

/** The fields of a SubagentStop for the agent `id`. */
export function stopOf(id: string, type = 'Explore') {
  return { agent_id: id, agent_type: type, agent_transcript_path: '', stop_hook_active: false }
}

/** The props a surface hands a `Pane` hook, for a pane `bodyColumns` cells wide. */
export function paneProps(bodyColumns = 80, agentId?: string) {
  return {
    title: 'Agent Café',
    isFocused: false,
    bodyColumns,
    placement: 'inline' as const,
    scroll: { offset: 0, bodyRows: 20 },
    view: agentId === undefined ? {} : { agentId },
  }
}

/** What to mount: the café's pane, as a surface asks for it. */
export function pane(bodyColumns = 80, agentId?: string) {
  return { plugin: 'agent-cafe', component: 'Pane', requestId: 'agent-cafe', props: paneProps(bodyColumns, agentId) } as const
}

/** A seat another session shares, for a test's store. */
export function seat(id: string, more: Partial<Seat> = {}): Seat {
  return {
    id,
    kind: id === 'main' ? 'main' : 'sub',
    type: id === 'main' ? 'main' : 'Explore',
    name: '',
    task: '',
    parent: '',
    phase: 'think',
    act: 'think',
    tool: '',
    target: '',
    since: NOW - 30_000,
    calls: 0,
    ...more,
  }
}

/** Another session's table, as it would have written it to the store. */
export function snap(id: string, title: string, seats: Seat[], at = NOW): Snap {
  return { v: 1, id, title, at, seats }
}

/**
 * A tool call as a subagent's loop makes it. The engine's own call carries the
 * loop's `agentId`; the call's type, written for a plugin's `$.tool.call`,
 * leaves it out, so a test adds it here.
 */
export function inLoop<const T extends object>(agentId: string, call: T): T {
  return { ...call, agentId }
}

export type World = {
  clock: MockClock
  /** The store beneath the café, key by key. */
  store: Map<string, unknown>
  /** Set to make the store refuse every call, as a full disk would. */
  storeFails: boolean
  /** How many times the store was written to. */
  writes: number
  /** What `$.agent.list()` answers; a test pushes to it. Undefined: the call is refused. */
  agents: AgentInfo[] | undefined
  /** The surfaces the session draws on. */
  surfaces: RenderSurface[]
  /** What a hook beneath answers a permission request with, when one does. */
  permission: PermissionRequestDecision | undefined
  /** Why a hook beneath blocks a subagent's stop, when one does. */
  blockStop: string | undefined
  /** Holds every tool call open from now until `release()`. */
  hold: () => void
  release: () => void
  /** Ids the next spawns answer, in order; then `agent-1`, `agent-2`, ... */
  spawnIds: string[]
  /** How many times each `$.ui` call was made. */
  opens: { open: number; close: number }
}

/**
 * Registers the bottom of every chain the café touches.
 *
 * @param entries what the store holds at the start
 * @param isPlaced what `$.ui.open` answers: whether the surface placed the pane
 */
export function world(on: On, entries: Readonly<Record<string, unknown>> = {}, isPlaced = true): World {
  let spawned = 0
  let gate: Promise<void> | undefined
  let open: (() => void) | undefined
  let isOpen = false

  const w: World = {
    clock: mock.clock(on, { now: NOW }),
    store: new Map<string, unknown>(Object.entries(entries)),
    storeFails: false,
    writes: 0,
    agents: [],
    surfaces: ['desktop'],
    permission: undefined,
    blockStop: undefined,
    spawnIds: [],
    opens: { open: 0, close: 0 },
    hold: () => {
      gate = new Promise<void>(resolve => {
        open = resolve
      })
    },
    release: () => {
      open?.()
      gate = undefined
      open = undefined
    },
  }
  const refused = { deny: 'the store is not available' }

  // The store, as the engine keeps a plugin's own: JSON in, JSON out.
  on('store.get', (_$, e) => (w.storeFails ? refused : { value: w.store.get(e.key) }))
  on('store.set', (_$, e) => {
    if (w.storeFails) return refused
    w.writes += 1
    w.store.set(e.key, JSON.parse(JSON.stringify(e.value)))
    return { value: undefined }
  })
  on('store.delete', (_$, e) => {
    if (w.storeFails) return refused
    w.store.delete(e.key)
    return { value: undefined }
  })
  on('store.keys', () => (w.storeFails ? refused : { value: [...w.store.keys()] }))

  on('session.start', (_$, e) => ({ cwd: e.cwd }))
  on('session.end', (_$, e) => ({ sessionId: e.sessionId }))
  on('session.id', () => ({ value: HERE }))
  on('session.surfaces', () => ({ value: w.surfaces }))
  on('command.register', (_$, e) => ({ value: { command: e.name } }))
  on('agent.list', () => (w.agents === undefined ? { deny: 'no list today' } : { value: w.agents }))
  on('ui.open', () => {
    w.opens.open += 1
    isOpen = true
    return { value: isPlaced ? { isPlaced: true } : { isPlaced: false, reason: 'too narrow' } }
  })
  on('ui.close', () => {
    w.opens.close += 1
    isOpen = false
    return { value: undefined }
  })
  on('ui.panes', () => ({
    value: isOpen ? [{ id: 'agent-cafe', title: 'Agent Café', isShown: true, isFocused: false, isPlaced }] : [],
  }))

  on('turn.start', (_$, e) => ({ turnId: e.turnId }))
  on('turn.complete', (_$, e) => ({ text: e.answer }))
  on('tool.call', async () => {
    if (gate !== undefined) await gate
    return { result: 'ok' }
  })
  on('agent.spawn', () => {
    spawned += 1
    return { model: 'haiku', agentId: w.spawnIds.shift() ?? `agent-${spawned}` }
  })

  // The settings hooks beneath the plugins: none, unless the test set one up.
  on('classic.PermissionRequest', () => (w.permission === undefined ? {} : { decision: w.permission }))
  on('classic.SubagentStop', () => (w.blockStop === undefined ? {} : { block: w.blockStop }))
  on('classic.SubagentStart', () => ({}))
  on('classic.TeammateIdle', () => ({}))
  on('classic.PermissionDenied', () => ({}))
  on('classic.Elicitation', () => ({}))
  on('classic.ElicitationResult', () => ({}))

  return w
}
