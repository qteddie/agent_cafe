// What the café sends to its web page, and how the page reads what it is sent.
//
// Two reporters write it. The hooks module sends its whole table now and then
// (a snap). scripts/report.mjs, which Claude Code runs for each hook event
// wherever the hooks module does not run (a task in the Claude app, say),
// sends each event as it happens, trimmed here to what the café shows: a
// tool's name, one short word for what it works on, an agent's type and its
// task's few words. Never a prompt, a file's content, a command's arguments or
// what a tool answered.
//
// The server reads both and trusts neither: every field is checked and cut
// to a length here.
//
// Pure: no `$` here and nothing of Node's, so a session, the reporter, the
// server and a test all run the same code.

import type { Act } from './describe'
import { actOfCall, clip, folderName, label, targetOf, tidy } from './describe'
import type { Snap } from './view'
import { parseSnap } from './view'

/** The app a session runs in, as well as its reporter can tell; `''` when it cannot. */
export type App = 'claude' | 'code' | 'cloud' | 'cli' | 'vscode' | 'sdk' | ''

const APPS: readonly App[] = ['claude', 'code', 'cloud', 'cli', 'vscode', 'sdk', '']

/** An agent the main loop left at work in the background, as its Stop event lists it. */
export type Bg = { id: string; type: string; task: string; isRunning: boolean }

/** What an Agent call asks for: the agent's type, its task's few words, and its name. */
export type Order = { type: string; task: string; name: string }

/**
 * One hook event as the café keeps it. `agent` is the subagent whose loop the
 * event comes from, `''` for the main loop.
 */
export type Ev =
  | { e: 'start'; source: string }
  | { e: 'prompt'; pid: string }
  /** `bg` is what Stop lists still at work; null when the event did not say. */
  | { e: 'stop'; pid: string; hasFailed: boolean; bg: Bg[] | null }
  /** `type` is the calling agent's type (`''` for the main loop). */
  | { e: 'pre'; agent: string; type: string; id: string; tool: string; act: Act; target: string; order: Order | null }
  | { e: 'post'; agent: string; id: string; child: string }
  | { e: 'batch'; agent: string; ids: string[] }
  | { e: 'ask'; agent: string; tool: string; target: string }
  | { e: 'denied'; agent: string; id: string }
  | { e: 'sub'; agent: string; type: string }
  | { e: 'subend'; agent: string; hasFailed: boolean }
  | { e: 'idle'; name: string }
  | { e: 'elicit'; agent: string }
  | { e: 'elicited'; agent: string }
  | { e: 'end'; reason: string }
  /** The main loop has answered and waits for the person (a turn that was interrupted has no Stop). */
  | { e: 'waiting' }

/** A whole table, from the hooks module. */
export type SnapPost = { v: 1; kind: 'snap'; app: App; link: string; snap: Snap }
/** A session is over: its table goes. */
export type ByePost = { v: 1; kind: 'bye'; id: string }
/** One hook event of one session, from scripts/report.mjs. */
export type EventPost = { v: 1; kind: 'event'; sid: string; app: App; title: string; link: string; ev: Ev }

export type Post = SnapPost | ByePost | EventPost

/** The most ids one batch carries, and the most background agents one stop lists. */
const MAX_IDS = 64
const MAX_BG = 32

type Fields = Readonly<Record<string, unknown>>

function isRecord(value: unknown): value is Fields {
  return typeof value === 'object' && value !== null && !Array.isArray(value)
}

function fieldsOf(value: unknown): Fields {
  return isRecord(value) ? value : {}
}

/** Text fit to show, cut to `max` widths. */
function word(value: unknown, max: number): string {
  return typeof value === 'string' ? clip(tidy(value), max) : ''
}

/**
 * An id as the engine makes them (a session's, an agent's, a tool call's, a
 * prompt's); `''` for anything else. Ids are never shown, only matched, and
 * this keeps out whatever is no id at all.
 */
export function idOf(value: unknown): string {
  return typeof value === 'string' && /^[A-Za-z0-9_.:-]{1,80}$/.test(value) ? value : ''
}

function oneOf<T extends string>(value: unknown, among: readonly T[], fallback: T): T {
  return among.find(item => item === value) ?? fallback
}

/** A link to a session on claude.ai, the one kind of link the page shows; `''` for anything else. */
export function sessionLink(value: unknown): string {
  return typeof value === 'string' && /^https:\/\/claude\.ai\/code\/session_[A-Za-z0-9]{8,64}$/.test(value) ? value : ''
}

function isAgentTool(tool: string): boolean {
  return tool === 'Agent' || tool === 'Task'
}

/** The words Stop uses for a background task that is over. */
const OVER: ReadonlySet<string> = new Set(['completed', 'failed', 'killed', 'stopped', 'cancelled', 'canceled', 'error'])

/** What Stop lists still at work; null when it lists nothing at all (an older Claude Code). */
function backgroundOf(value: unknown): Bg[] | null {
  if (!Array.isArray(value)) return null
  const out: Bg[] = []
  for (const item of value.slice(0, MAX_BG)) {
    const task = fieldsOf(item)
    const id = idOf(task['id'])
    // Stop lists background shells too: only agents take a seat.
    if (id === '' || (task['type'] !== undefined && task['type'] !== 'subagent')) continue
    out.push({
      id,
      type: label(String(task['agent_type'] ?? ''), 40),
      task: label(String(task['description'] ?? ''), 80),
      // Any word but one for an end: an agent Stop lists as still there is.
      isRunning: !OVER.has(String(task['status'] ?? '')),
    })
  }
  return out
}

/**
 * One hook event's input, as Claude Code hands it to a hook on stdin, trimmed
 * to what the café shows; undefined for an event the café has no use for.
 *
 * This runs in the session, before anything leaves it.
 */
export function eventOf(input: unknown): Ev | undefined {
  const fields = fieldsOf(input)
  const agent = idOf(fields['agent_id'])
  const tool = clip(tidy(String(fields['tool_name'] ?? '')), 80)
  const toolInput = fieldsOf(fields['tool_input'])
  switch (fields['hook_event_name']) {
    case 'SessionStart':
      return { e: 'start', source: word(fields['source'], 16) }
    case 'UserPromptSubmit':
      return { e: 'prompt', pid: idOf(fields['prompt_id']) }
    case 'Stop':
      return { e: 'stop', pid: idOf(fields['prompt_id']), hasFailed: false, bg: backgroundOf(fields['background_tasks']) }
    case 'StopFailure':
      // A subagent's turn that failed ends the subagent; the main loop's ends
      // its turn, and says nothing of the agents it left at work.
      if (agent !== '') return { e: 'subend', agent, hasFailed: true }
      return { e: 'stop', pid: idOf(fields['prompt_id']), hasFailed: true, bg: null }
    case 'PreToolUse': {
      const id = idOf(fields['tool_use_id'])
      if (id === '' || tool === '') return undefined
      const order = isAgentTool(tool)
        ? {
            type: label(String(toolInput['subagent_type'] ?? ''), 40),
            task: label(String(toolInput['description'] ?? ''), 80),
            name: label(String(toolInput['name'] ?? ''), 40),
          }
        : null
      const type = agent === '' ? '' : label(String(fields['agent_type'] ?? ''), 40)
      return { e: 'pre', agent, type, id, tool, act: actOfCall(tool, toolInput), target: targetOf(tool, toolInput), order }
    }
    case 'PostToolUse':
    case 'PostToolUseFailure': {
      const id = idOf(fields['tool_use_id'])
      if (id === '') return undefined
      // An Agent call answers with the id of the agent it started: only that is read of it.
      const child = isAgentTool(tool) ? idOf(fieldsOf(fields['tool_response'])['agentId']) : ''
      return { e: 'post', agent, id, child }
    }
    case 'PostToolBatch': {
      const calls = Array.isArray(fields['tool_calls']) ? fields['tool_calls'] : []
      const ids = calls
        .slice(0, MAX_IDS)
        .map(call => idOf(fieldsOf(call)['tool_use_id']))
        .filter(id => id !== '')
      return { e: 'batch', agent, ids }
    }
    case 'PermissionRequest':
      return { e: 'ask', agent, tool, target: targetOf(tool, toolInput) }
    case 'PermissionDenied': {
      const id = idOf(fields['tool_use_id'])
      return id === '' ? undefined : { e: 'denied', agent, id }
    }
    case 'SubagentStart':
      return agent === '' ? undefined : { e: 'sub', agent, type: label(String(fields['agent_type'] ?? ''), 40) }
    case 'SubagentStop':
      return agent === '' ? undefined : { e: 'subend', agent, hasFailed: false }
    case 'TeammateIdle': {
      const name = label(String(fields['teammate_name'] ?? ''), 40)
      return name === '' ? undefined : { e: 'idle', name }
    }
    case 'Elicitation':
      return { e: 'elicit', agent }
    case 'ElicitationResult':
      return { e: 'elicited', agent }
    case 'SessionEnd':
      return { e: 'end', reason: word(fields['reason'], 24) }
    case 'Notification':
      return fields['notification_type'] === 'idle_prompt' ? { e: 'waiting' } : undefined
    default:
      return undefined
  }
}

/** Where reports go, and the key that lets them in. */
export type Inbox = { url: string; key: string }

/**
 * The inbox of the café's web page at `base` (the page's address, as the
 * person set it up); undefined when either is missing or the address is not
 * one a report may go to: https, or http to this very machine.
 */
export function inboxOf(base: unknown, key: unknown): Inbox | undefined {
  if (typeof base !== 'string' || typeof key !== 'string') return undefined
  const address = base.trim()
  const secret = key.trim()
  if (address === '' || secret === '' || !URL.canParse(address)) return undefined
  const url = new URL(address)
  const isHere = url.hostname === 'localhost' || url.hostname === '127.0.0.1' || url.hostname === '[::1]'
  if (url.protocol !== 'https:' && !(url.protocol === 'http:' && isHere)) return undefined
  if (url.username !== '' || url.password !== '') return undefined
  url.search = ''
  url.hash = ''
  if (!url.pathname.endsWith('/')) url.pathname += '/'
  return { url: new URL('in', url).toString(), key: secret }
}

/** The app a hook runs in, from the environment Claude Code gives it. */
export function appOf(env: Readonly<Record<string, string | undefined>>): App {
  const entry = env['CLAUDE_CODE_ENTRYPOINT'] ?? ''
  if (entry === 'remote_cowork' || env['CLAUDE_CODE_SESSION_ORIGIN'] === 'claude_ai_chat') return 'claude'
  if (env['CLAUDE_CODE_REMOTE'] === 'true') return 'cloud'
  if (entry.includes('desktop')) return 'code'
  if (entry.includes('vscode')) return 'vscode'
  if (entry === 'cli') return 'cli'
  if (entry.startsWith('sdk')) return 'sdk'
  return ''
}

/** The claude.ai link to a session that runs in the cloud; `''` for one that does not. */
export function linkOf(env: Readonly<Record<string, string | undefined>>): string {
  const remote = env['CLAUDE_CODE_REMOTE_SESSION_ID'] ?? ''
  const found = /^cse_([A-Za-z0-9]{8,64})$/.exec(remote)
  return found === null ? '' : sessionLink(`https://claude.ai/code/session_${found[1]}`)
}

/**
 * A session's table name: its folder's name. Not its title, which is written
 * from the person's first prompt. A task in the Claude app runs in a
 * workspace whose folder says nothing of it: it has no name here.
 */
export function titleFor(app: App, cwd: unknown): string {
  if (app === 'claude') return ''
  return typeof cwd === 'string' ? folderName(cwd) : ''
}

/**
 * The report of one hook event: the event trimmed (eventOf), and which
 * session of which app it comes from. Undefined for an event the café has no
 * use for, or one that names no session.
 *
 * @param input the hook's input, as Claude Code hands it over on stdin
 * @param env the environment Claude Code runs the hook in
 */
export function eventPostOf(input: unknown, env: Readonly<Record<string, string | undefined>>): EventPost | undefined {
  const ev = eventOf(input)
  if (ev === undefined) return undefined
  const fields = fieldsOf(input)
  const sid = idOf(fields['session_id']) || idOf(env['CLAUDE_CODE_SESSION_ID'])
  if (sid === '') return undefined
  const app = appOf(env)
  return { v: 1, kind: 'event', sid, app, title: titleFor(app, fields['cwd']), link: linkOf(env), ev }
}

function parseBg(value: unknown): Bg[] {
  if (!Array.isArray(value)) return []
  const out: Bg[] = []
  for (const item of value.slice(0, MAX_BG)) {
    const fields = fieldsOf(item)
    const id = idOf(fields['id'])
    if (id === '') continue
    out.push({ id, type: word(fields['type'], 40), task: word(fields['task'], 80), isRunning: fields['isRunning'] === true })
  }
  return out
}

function parseOrder(value: unknown): Order | null {
  if (!isRecord(value)) return null
  return { type: word(value['type'], 40), task: word(value['task'], 80), name: word(value['name'], 40) }
}

const ACTS: readonly Act[] = [
  'read',
  'search',
  'write',
  'run',
  'web',
  'delegate',
  'plan',
  'ask',
  'tool',
  'think',
  'rest',
  'done',
  'fail',
]

/** Reads one event of a post; undefined for one of a shape the café does not know. */
export function parseEv(value: unknown): Ev | undefined {
  if (!isRecord(value)) return undefined
  const agent = idOf(value['agent'])
  switch (value['e']) {
    case 'start':
      return { e: 'start', source: word(value['source'], 16) }
    case 'prompt':
      return { e: 'prompt', pid: idOf(value['pid']) }
    case 'stop':
      return {
        e: 'stop',
        pid: idOf(value['pid']),
        hasFailed: value['hasFailed'] === true,
        bg: Array.isArray(value['bg']) ? parseBg(value['bg']) : null,
      }
    case 'pre': {
      const id = idOf(value['id'])
      const tool = word(value['tool'], 80)
      if (id === '' || tool === '') return undefined
      return {
        e: 'pre',
        agent,
        type: agent === '' ? '' : word(value['type'], 40),
        id,
        tool,
        act: oneOf(value['act'], ACTS, 'tool'),
        target: word(value['target'], 60),
        order: parseOrder(value['order']),
      }
    }
    case 'post': {
      const id = idOf(value['id'])
      return id === '' ? undefined : { e: 'post', agent, id, child: idOf(value['child']) }
    }
    case 'batch': {
      const ids = Array.isArray(value['ids']) ? value['ids'].slice(0, MAX_IDS).map(idOf).filter(id => id !== '') : []
      return { e: 'batch', agent, ids }
    }
    case 'ask':
      return { e: 'ask', agent, tool: word(value['tool'], 80), target: word(value['target'], 60) }
    case 'denied': {
      const id = idOf(value['id'])
      return id === '' ? undefined : { e: 'denied', agent, id }
    }
    case 'sub':
      return agent === '' ? undefined : { e: 'sub', agent, type: word(value['type'], 40) }
    case 'subend':
      return agent === '' ? undefined : { e: 'subend', agent, hasFailed: value['hasFailed'] === true }
    case 'idle': {
      const name = word(value['name'], 40)
      return name === '' ? undefined : { e: 'idle', name }
    }
    case 'elicit':
      return { e: 'elicit', agent }
    case 'elicited':
      return { e: 'elicited', agent }
    case 'end':
      return { e: 'end', reason: word(value['reason'], 24) }
    case 'waiting':
      return { e: 'waiting' }
    default:
      return undefined
  }
}

/**
 * Reads what a reporter posted. Anything of another shape is no post, and
 * every string is cut to a length, whatever the reporter sent.
 */
export function parsePost(value: unknown): Post | undefined {
  if (!isRecord(value) || value['v'] !== 1) return undefined
  switch (value['kind']) {
    case 'snap': {
      const snap = parseSnap(value['snap'])
      if (snap === undefined) return undefined
      return { v: 1, kind: 'snap', app: oneOf(value['app'], APPS, ''), link: sessionLink(value['link']), snap }
    }
    case 'bye': {
      const id = idOf(value['id'])
      return id === '' ? undefined : { v: 1, kind: 'bye', id }
    }
    case 'event': {
      const sid = idOf(value['sid'])
      const ev = parseEv(value['ev'])
      if (sid === '' || ev === undefined) return undefined
      return {
        v: 1,
        kind: 'event',
        sid,
        app: oneOf(value['app'], APPS, ''),
        title: word(value['title'], 40),
        link: sessionLink(value['link']),
        ev,
      }
    }
    default:
      return undefined
  }
}
