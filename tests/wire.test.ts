// What leaves a session for the web page, and how the page reads what comes:
// the hook events trimmed to what the café shows, and every report checked.

import { describe, expect, test } from 'claude-code/testing'

import type { Ev } from '../hooks/wire'
import { appOf, eventOf, eventPostOf, inboxOf, inboxOfFile, isWebSet, linkOf, parsePost, sessionLink, titleFor } from '../hooks/wire'
import { ASKED, BACKGROUND, FAILED, FOREGROUND, NESTED } from './runs'
import { seat, snap } from './world'

const RUNS = { FOREGROUND, BACKGROUND, NESTED, ASKED, FAILED }

const COWORK = {
  CLAUDE_CODE_ENTRYPOINT: 'remote_cowork',
  CLAUDE_CODE_REMOTE: 'true',
  CLAUDE_CODE_SESSION_ORIGIN: 'claude_ai_chat',
  CLAUDE_CODE_REMOTE_SESSION_ID: 'cse_01AbCdEfGhIjKlMnOpQrStUv',
}

describe('trimming a hook event', () => {
  test('every event of every recorded run trims to a report the page takes back as it was', () => {
    for (const run of Object.values(RUNS)) {
      for (const input of run) {
        const post = eventPostOf(input, { CLAUDE_CODE_ENTRYPOINT: 'cli' })
        if (post === undefined) continue
        expect(parsePost(JSON.parse(JSON.stringify(post)))).toEqual(post)
      }
    }
  })

  test('says which tool, the kind of work, and one short word for what it works on', () => {
    const pre = FOREGROUND.find(input => input['hook_event_name'] === 'PreToolUse' && input['tool_name'] === 'Bash')
    expect(eventOf(pre)).toEqual({ e: 'pre', agent: '', type: '', id: 'toolu_mock_2_1', tool: 'Bash', act: 'run', target: 'Wait a little', order: null })
    const search = FOREGROUND.find(input => input['tool_use_id'] === 'toolu_mock_6_0' && input['hook_event_name'] === 'PreToolUse')
    // A subagent's call names the subagent and its type.
    expect(eventOf(search)).toMatchObject({ agent: 'a26f7450ab2512f99', type: 'Explore', act: 'search', target: 'Search for the hooks' })
  })

  test('an Agent call says what it asks for, and its end the agent it started', () => {
    const order = BACKGROUND.find(input => input['tool_use_id'] === 'toolu_mock_2_0' && input['hook_event_name'] === 'PreToolUse')
    expect(eventOf(order)).toMatchObject({ e: 'pre', act: 'delegate', target: 'Watch the build', order: { type: 'general-purpose', task: 'Watch the build', name: 'watcher' } })
    const launched = BACKGROUND.find(input => input['tool_use_id'] === 'toolu_mock_2_0' && input['hook_event_name'] === 'PostToolUse')
    expect(eventOf(launched)).toEqual({ e: 'post', agent: '', id: 'toolu_mock_2_0', child: 'aa6d5ea1b67714935' })
  })

  test("the main loop's stop lists the agents it left at work", () => {
    const stop = BACKGROUND.find(input => input['hook_event_name'] === 'Stop')
    expect(eventOf(stop)).toMatchObject({
      e: 'stop',
      hasFailed: false,
      bg: [
        { id: 'a81d0ed8add2ff74e', type: 'Explore', task: 'Read the docs', isRunning: true },
        { id: 'aa6d5ea1b67714935', type: 'general-purpose', task: 'Watch the build', isRunning: true },
      ],
    })
  })

  test("a subagent's failed turn ends the subagent, the main loop's ends its turn and says nothing of the background", () => {
    const failed = FAILED.find(input => input['hook_event_name'] === 'StopFailure')
    expect(eventOf(failed)).toEqual({ e: 'subend', agent: 'af9621a13e14c0ce2', hasFailed: true })
    expect(eventOf({ hook_event_name: 'StopFailure', prompt_id: 'p-1', error: 'rate_limit' })).toEqual({ e: 'stop', pid: 'p-1', hasFailed: true, bg: null })
  })

  test('a Stop that lists no background work at all says nothing of it, and one that lists some counts any task not over', () => {
    expect(eventOf({ hook_event_name: 'Stop', prompt_id: 'p-1' })).toEqual({ e: 'stop', pid: 'p-1', hasFailed: false, bg: null })
    expect(eventOf({ hook_event_name: 'Stop', prompt_id: 'p-1', background_tasks: [] })).toEqual({ e: 'stop', pid: 'p-1', hasFailed: false, bg: [] })
    const listed = eventOf({
      hook_event_name: 'Stop',
      background_tasks: [
        { id: 'a-1', type: 'subagent', status: 'waiting', agent_type: 'Explore', description: 'Read' },
        { id: 'a-2', type: 'subagent', status: 'completed', agent_type: 'Explore', description: 'Done' },
        { id: 'b-1', type: 'shell', status: 'running', description: 'npm run dev' },
      ],
    })
    expect(listed).toMatchObject({ bg: [{ id: 'a-1', isRunning: true }, { id: 'a-2', isRunning: false }] })
  })

  test('says when the main loop has answered and waits for the person', () => {
    expect(eventOf({ hook_event_name: 'Notification', notification_type: 'idle_prompt', message: 'Claude is waiting for your input' })).toEqual({ e: 'waiting' })
    expect(eventOf({ hook_event_name: 'Notification', notification_type: 'permission_prompt', message: 'needs permission' })).toBeUndefined()
  })

  test('a permission prompt names the call it holds', () => {
    const asked = ASKED.find(input => input['hook_event_name'] === 'PermissionRequest' && input['agent_id'] !== undefined)
    expect(eventOf(asked)).toEqual({ e: 'ask', agent: 'a8be3b919f8321d23', tool: 'Bash', target: 'Create another marker' })
  })

  test('leaves out events the café has no use for, and ones that name nothing', () => {
    expect(eventOf({ hook_event_name: 'Notification', message: 'hi' })).toBeUndefined()
    expect(eventOf({ hook_event_name: 'PreToolUse', tool_name: 'Bash' })).toBeUndefined()
    expect(eventOf({ hook_event_name: 'SubagentStart', agent_type: 'Explore' })).toBeUndefined()
    expect(eventOf('not even an object')).toBeUndefined()
    expect(eventPostOf({ hook_event_name: 'Stop' }, {})).toBeUndefined()
  })
})

describe('what never leaves the session', () => {
  const secrets = {
    title: 'Refund Jane Doe order 4411',
    prompt: 'PROMPT-TEXT-never-sent',
    content: 'FILE-CONTENT-never-sent',
    answer: 'ANSWER-never-sent',
    output: 'OUTPUT-never-sent',
    task: 'AGENT-PROMPT-never-sent',
    token: 'sk-ant-api03-abcdefghijklmnop1234567890',
  }
  const inputs: Record<string, unknown>[] = [
    { hook_event_name: 'UserPromptSubmit', session_id: 's', prompt: secrets.prompt, prompt_id: 'p-1', session_title: secrets.title },
    { hook_event_name: 'SessionStart', session_id: 's', cwd: '/Users/me/work/demo', source: 'startup', session_title: secrets.title },
    { hook_event_name: 'PreToolUse', session_id: 's', tool_name: 'Write', tool_use_id: 't-1', tool_input: { file_path: '/Users/me/notes/plan.md', content: secrets.content } },
    { hook_event_name: 'PostToolUse', session_id: 's', tool_name: 'Bash', tool_use_id: 't-2', tool_input: { command: 'make' }, tool_response: { stdout: secrets.output } },
    { hook_event_name: 'PreToolUse', session_id: 's', tool_name: 'Bash', tool_use_id: 't-3', tool_input: { command: `curl -H "Authorization: Bearer ${secrets.token}" https://api.example.com` } },
    { hook_event_name: 'PreToolUse', session_id: 's', tool_name: 'Agent', tool_use_id: 't-4', tool_input: { description: 'Read the docs', prompt: secrets.task, subagent_type: 'Explore' } },
    { hook_event_name: 'PostToolUse', session_id: 's', tool_name: 'Agent', tool_use_id: 't-4', tool_response: { agentId: 'a-1', prompt: secrets.task, content: [{ type: 'text', text: secrets.answer }] } },
    { hook_event_name: 'Stop', session_id: 's', prompt_id: 'p-1', last_assistant_message: secrets.answer },
    { hook_event_name: 'SubagentStop', session_id: 's', agent_id: 'a-1', last_assistant_message: secrets.answer },
    { hook_event_name: 'PostToolBatch', session_id: 's', tool_calls: [{ tool_use_id: 't-2', tool_response: secrets.output }] },
    { hook_event_name: 'PermissionRequest', session_id: 's', tool_name: 'Write', tool_input: { file_path: '/x/y.md', content: secrets.content } },
    { hook_event_name: 'PreToolUse', session_id: 's', tool_name: 'Grep', tool_use_id: 't-5', tool_input: { pattern: secrets.token } },
    { hook_event_name: 'PreToolUse', session_id: 's', tool_name: 'Agent', tool_use_id: 't-6', tool_input: { description: `use ${secrets.token}`, subagent_type: 'Explore' } },
  ]

  test('no prompt, title written from one, file content, answer, output or key is in any report', () => {
    for (const env of [COWORK, { CLAUDE_CODE_ENTRYPOINT: 'cli' }]) {
      const sent = JSON.stringify(inputs.map(input => eventPostOf(input, env)))
      for (const secret of Object.values(secrets)) expect(sent).not.toContain(secret)
    }
    // A session in a folder is named by the folder, whatever its title.
    expect(eventPostOf(inputs.find(input => input['hook_event_name'] === 'SessionStart'), { CLAUDE_CODE_ENTRYPOINT: 'cli' })?.title).toBe('demo')
  })

  test('a command shows as its program, and a file as its name', () => {
    expect(eventOf(inputs.find(input => input['tool_use_id'] === 't-3'))).toMatchObject({ target: 'curl …' })
    expect(eventOf(inputs.find(input => input['tool_use_id'] === 't-1'))).toMatchObject({ act: 'write', target: 'notes/plan.md' })
  })
})

describe('reading a report', () => {
  test('takes a table, and keeps only a claude.ai session link', () => {
    const table = snap('s1', 'project', [seat('main'), seat('a1')])
    expect(parsePost({ v: 1, kind: 'snap', app: 'code', link: 'https://claude.ai/code/session_01AbCdEfGh', snap: table })).toEqual({
      v: 1,
      kind: 'snap',
      app: 'code',
      link: 'https://claude.ai/code/session_01AbCdEfGh',
      snap: table,
    })
    expect(parsePost({ v: 1, kind: 'snap', app: 'nope', link: 'javascript:alert(1)', snap: table })).toMatchObject({ app: '', link: '' })
    expect(parsePost({ v: 1, kind: 'snap', app: 'code', link: 'https://claude.ai.evil.example/code/session_01AbCdEfGh', snap: table })).toMatchObject({ link: '' })
  })

  test('refuses anything of another shape', () => {
    const shapes: unknown[] = [
      undefined,
      null,
      [],
      'text',
      { v: 2, kind: 'bye', id: 's' },
      { v: 1, kind: 'dance' },
      { v: 1, kind: 'bye', id: '' },
      { v: 1, kind: 'bye', id: 'has spaces' },
      { v: 1, kind: 'event', sid: 's', ev: { e: 'unknown' } },
      { v: 1, kind: 'event', sid: '', ev: { e: 'start', source: 'x' } },
      { v: 1, kind: 'event', sid: 's', ev: { e: 'pre', id: 't' } },
      { v: 1, kind: 'event', sid: 's', ev: { e: 'sub', type: 'Explore' } },
      { v: 1, kind: 'snap', snap: { v: 1, id: '', seats: [] } },
    ]
    for (const shape of shapes) expect(parsePost(shape)).toBeUndefined()
  })

  test('cuts every string and every list to a length', () => {
    const long = 'x'.repeat(5_000)
    const post = parsePost({
      v: 1,
      kind: 'event',
      sid: 's',
      app: 'claude',
      title: long,
      link: '',
      ev: { e: 'stop', pid: 'p', hasFailed: true, bg: Array.from({ length: 500 }, (_, index) => ({ id: `a${index}`, type: long, task: long, isRunning: true })) },
    })
    expect(post?.kind === 'event' ? post.title.length : -1).toBeLessThanOrEqual(40)
    const ev = post?.kind === 'event' ? post.ev : undefined
    expect(ev?.e === 'stop' ? ev.bg?.length : -1).toBe(32)
    expect(JSON.stringify(post).length).toBeLessThan(10_000)
  })

  test('an event of each kind reads back as it was sent', () => {
    const events: Ev[] = [
      { e: 'start', source: 'startup' },
      { e: 'prompt', pid: 'p-1' },
      { e: 'stop', pid: 'p-1', hasFailed: false, bg: [] },
      { e: 'stop', pid: 'p-2', hasFailed: true, bg: null },
      { e: 'pre', agent: 'a-1', type: 'Explore', id: 't-1', tool: 'Read', act: 'read', target: 'a.ts', order: null },
      { e: 'pre', agent: '', type: '', id: 't-9', tool: 'Agent', act: 'delegate', target: 'x', order: { type: 'Explore', task: 'x', name: '' } },
      { e: 'post', agent: '', id: 't-1', child: 'a-2' },
      { e: 'batch', agent: 'a-1', ids: ['t-1', 't-2'] },
      { e: 'ask', agent: '', tool: 'Bash', target: 'npm test' },
      { e: 'denied', agent: '', id: 't-3' },
      { e: 'sub', agent: 'a-1', type: 'Explore' },
      { e: 'subend', agent: 'a-1', hasFailed: false },
      { e: 'idle', name: 'scout' },
      { e: 'elicit', agent: '' },
      { e: 'elicited', agent: '' },
      { e: 'end', reason: 'other' },
      { e: 'waiting' },
    ]
    for (const ev of events) {
      expect(parsePost({ v: 1, kind: 'event', sid: 's', app: 'cli', title: 't', link: '', ev })).toEqual({ v: 1, kind: 'event', sid: 's', app: 'cli', title: 't', link: '', ev })
    }
  })
})

describe('where a report goes, and where it comes from', () => {
  test('a report goes over https, or over http to this very machine', () => {
    expect(inboxOf('https://cafe.example.com', 'k')).toEqual({ url: 'https://cafe.example.com/in', key: 'k' })
    expect(inboxOf('https://example.com/cafe', ' k ')).toEqual({ url: 'https://example.com/cafe/in', key: 'k' })
    expect(inboxOf('https://example.com/cafe/?x=1#y', 'k')?.url).toBe('https://example.com/cafe/in')
    expect(inboxOf('http://localhost:8787', 'k')?.url).toBe('http://localhost:8787/in')
    expect(inboxOf('http://cafe.example.com', 'k')).toBeUndefined()
    expect(inboxOf('https://me:pw@cafe.example.com', 'k')).toBeUndefined()
    expect(inboxOf('ftp://cafe.example.com', 'k')).toBeUndefined()
    expect(inboxOf('https://cafe.example.com', '')).toBeUndefined()
    expect(inboxOf(undefined, 'k')).toBeUndefined()
  })

  test('the settings name the page once either is filled in; web.json names it otherwise', () => {
    expect(isWebSet('https://cafe.example.com', '')).toBe(true)
    expect(isWebSet(undefined, 'k')).toBe(true)
    expect(isWebSet('', ' ')).toBe(false)
    expect(isWebSet(undefined, undefined)).toBe(false)
    expect(inboxOfFile({ url: 'https://cafe.example.com', key: 'k' })).toEqual({ url: 'https://cafe.example.com/in', key: 'k' })
    expect(inboxOfFile({ url: 'https://cafe.example.com' })).toBeUndefined()
    expect(inboxOfFile(null)).toBeUndefined()
    expect(inboxOfFile('https://cafe.example.com')).toBeUndefined()
  })

  test('tells the apps apart by what Claude Code puts in the environment', () => {
    expect(appOf(COWORK)).toBe('claude')
    expect(appOf({ CLAUDE_CODE_ENTRYPOINT: 'cli', CLAUDE_CODE_REMOTE: 'true' })).toBe('cloud')
    expect(appOf({ CLAUDE_CODE_ENTRYPOINT: 'claude-desktop' })).toBe('code')
    expect(appOf({ CLAUDE_CODE_ENTRYPOINT: 'claude-vscode' })).toBe('vscode')
    expect(appOf({ CLAUDE_CODE_ENTRYPOINT: 'cli' })).toBe('cli')
    expect(appOf({ CLAUDE_CODE_ENTRYPOINT: 'sdk-cli' })).toBe('sdk')
    expect(appOf({})).toBe('')
  })

  test('links a session in the cloud to its page on claude.ai', () => {
    expect(linkOf(COWORK)).toBe('https://claude.ai/code/session_01AbCdEfGhIjKlMnOpQrStUv')
    expect(linkOf({ CLAUDE_CODE_REMOTE_SESSION_ID: 'cse_../../evil' })).toBe('')
    expect(linkOf({})).toBe('')
    expect(sessionLink('https://claude.ai/code/session_01AbCdEfGh')).toBe('https://claude.ai/code/session_01AbCdEfGh')
  })

  test('names a table by its folder, but never by a Claude task workspace', () => {
    expect(titleFor('cli', '/Users/me/work/demo')).toBe('demo')
    expect(titleFor('claude', '/home/claude')).toBe('')
    expect(titleFor('cli', undefined)).toBe('')
  })

  test('a report names its session, app, table and link', () => {
    const post = eventPostOf({ hook_event_name: 'SessionStart', session_id: 'abc-123', cwd: '/home/claude', source: 'startup' }, COWORK)
    expect(post).toEqual({
      v: 1,
      kind: 'event',
      sid: 'abc-123',
      app: 'claude',
      title: '',
      link: 'https://claude.ai/code/session_01AbCdEfGhIjKlMnOpQrStUv',
      ev: { e: 'start', source: 'startup' },
    })
  })
})
