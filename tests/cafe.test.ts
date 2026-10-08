// The café against the engine itself: events in, the pane and `/cafe text` out,
// on the terminal and on the desktop.

import { describe, expect, test } from 'claude-code/testing'
import type { Engine } from 'claude-code/testing'

import { COMMAND, HERE, NOW, SPAWN, START, TURN_END, inLoop, pane, seat, snap, stopOf, world } from './world'

const SURFACES = ['terminal', 'desktop'] as const

/** `/cafe text`: this session's table as the list says it, whatever is mounted. */
async function said($: Engine): Promise<string> {
  return (await $.command.run({ ...COMMAND, args: 'text' })).text ?? ''
}

/** Every text the mounted pane shows, joined by a bar (no line break: a test looks for control characters). */
async function shown(ui: { findAll: (query: { type: string }) => Promise<{ text: string }[]> }): Promise<string> {
  return (await ui.findAll({ type: 'Text' })).map(found => found.text).join(' | ')
}

describe('the main loop', () => {
  for (const surface of SURFACES) {
    test(`thinks, works and rests on the ${surface}`, async ($, on) => {
      const w = world(on)
      await $.session.start(START)
      const ui = await $.ui.mount({ ...pane(), surface })
      expect(await ui.find({ type: 'Text', text: /main.*等你的指示/ })).toBeDefined()

      await $.turn.start({ text: 'run the tests', turnId: 'turn-1' })
      expect(await ui.find({ type: 'Text', text: /main.*思考中/ })).toBeDefined()

      w.hold()
      const call = $.tool.call({ tool: 'Bash', command: 'npm test --token=hunter2', description: 'Run the tests' })
      await w.clock.settle()
      expect(await ui.find({ type: 'Text', text: /main.*執行 Run the tests/ })).toBeDefined()

      w.release()
      // The café only watches: the tool's answer comes back as the engine gave it.
      expect(await call).toMatchObject({ result: 'ok' })
      expect(await ui.find({ type: 'Text', text: /main.*思考中/ })).toBeDefined()

      expect(await $.turn.complete(TURN_END)).toMatchObject({ text: 'Done.' })
      expect(await ui.find({ type: 'Text', text: /main.*等你的指示/ })).toBeDefined()
      await ui.unmount()
    })
  }

  test('shows a command by its program alone when the model described none', async ($, on) => {
    const w = world(on)
    await $.session.start(START)
    w.hold()
    const call = $.tool.call({ tool: 'Bash', command: 'curl -H "Authorization: Bearer hunter2" https://example.com' })
    await w.clock.settle()
    const text = await said($)
    expect(text).toContain('執行 curl …')
    expect(text).not.toContain('hunter2')
    // Nor does what the other sessions read hold it.
    expect(JSON.stringify(w.store.get(`table:${HERE}`))).not.toContain('hunter2')
    w.release()
    await call
  })

  test('rests again after a call that ran with no turn running', async ($, on) => {
    // Another plugin's `$.tool.call` between turns: there is no turn to think in after it.
    const w = world(on)
    await $.session.start(START)
    await $.tool.call({ tool: 'Read', file_path: '/repo/README.md' })
    await w.clock.advance(60_000)
    expect(await said($)).toContain('○ main — 等你的指示')
  })

  test('is marked failed when its turn ends on an error, until the next one', async ($, on) => {
    world(on)
    await $.session.start(START)
    await $.turn.start({ text: 'go', turnId: 'turn-1' })
    await $.turn.complete({ ...TURN_END, answer: '', reason: 'error' })
    expect(await said($)).toContain('✗ main — 出錯了')
    await $.turn.start({ text: 'again', turnId: 'turn-2' })
    expect(await said($)).toContain('◐ main — 思考中')
  })
})

describe('a subagent', () => {
  for (const surface of SURFACES) {
    test(`sits down, works, finishes and leaves on the ${surface}`, async ($, on) => {
      const w = world(on)
      await $.session.start(START)
      const ui = await $.ui.mount({ ...pane(), surface })

      const started = await $.agent.spawn({ ...SPAWN, description: 'Find the hooks', subagentType: 'Explore' })
      expect(started).toMatchObject({ model: 'haiku', agentId: 'agent-1' })
      await $.classic.SubagentStart({ agent_id: 'agent-1', agent_type: 'Explore' })
      expect(await ui.find({ type: 'Text', text: /Explore「Find the hooks」.*思考中/ })).toBeDefined()

      w.hold()
      const call = $.tool.call(inLoop('agent-1', { tool: 'Read', file_path: '/repo/hooks/register.tsx' }))
      await w.clock.settle()
      expect(await ui.find({ type: 'Text', text: /Explore.*讀 hooks\/register\.tsx/ })).toBeDefined()
      // The main loop's own seat is untouched by its subagent's call: at rest, it waits for it.
      expect(await ui.find({ type: 'Text', text: /main.*等 agent 回報/ })).toBeDefined()
      w.release()
      await call

      await $.classic.SubagentStop(stopOf('agent-1'))
      await $.turn.complete({ ...TURN_END, agentId: 'agent-1' })
      // The end of a row is kept in one piece where the row wraps.
      expect(await ui.find({ type: 'Text', text: /Explore.*完成了.*1\u00a0次工具/ })).toBeDefined()
      expect(await ui.find({ type: 'Text', text: /main.*等你的指示/ })).toBeDefined()

      // It keeps its seat a moment, then leaves.
      await w.clock.advance(10_000)
      expect(await ui.find({ type: 'Text', text: /Explore/ })).toBeDefined()
      await w.clock.advance(12_000)
      expect(await ui.find({ type: 'Text', text: /Explore/ })).toBeUndefined()
      expect(await ui.find({ type: 'Text', text: /main/ })).toBeDefined()
      await ui.unmount()
    })
  }

  test('sits under the agent that spawned it', async ($, on) => {
    world(on)
    await $.session.start(START)
    await $.agent.spawn({ ...SPAWN, description: 'Plan the work', subagentType: 'Plan' })
    await $.agent.spawn({ ...SPAWN, description: 'Read the docs', subagentType: 'Explore', parentAgentId: 'agent-1' })
    await $.agent.spawn({ ...SPAWN, description: 'Read the code', subagentType: 'Explore', parentAgentId: 'agent-1' })
    const text = await said($)
    expect(text).toContain('↳ ◐ Plan「Plan the work」')
    expect(text).toContain('  ↳ ◐ Explore「Read the docs」')
    // Two of a kind are told apart.
    expect(text).toContain('  ↳ ◐ Explore 2「Read the code」')
  })

  test('is not seated while only its tool calls have named it', async ($, on) => {
    // The engine's own forks (compaction, memory) run tools under ids nothing
    // ever spawned: they are not customers.
    world(on)
    await $.session.start(START)
    await $.tool.call(inLoop('fork-compact', { tool: 'Read', file_path: '/tmp/notes.md' }))
    expect((await said($)).split('\n')).toHaveLength(2)
  })

  test('the events missed is seated from the list, and leaves when the list says so', async ($, on) => {
    const w = world(on)
    await $.session.start(START)
    w.agents = [{ id: 'bg-1', description: 'Watch the build', type: 'general-purpose', status: 'running' }]
    expect(await said($)).toContain('general-purpose「Watch the build」')

    w.agents = [{ id: 'bg-1', description: 'Watch the build', type: 'general-purpose', status: 'completed' }]
    await w.clock.advance(6_000)
    expect(await said($)).toContain('✓ general-purpose')
    await w.clock.advance(22_000)
    expect(await said($)).not.toContain('general-purpose')
  })

  test('that finished is not seated again while the list still keeps it', async ($, on) => {
    // The list keeps a finished background agent for a while, as `idle` if it
    // has a name, as `waiting` if a shell of its own still runs.
    const w = world(on)
    await $.session.start(START)
    await $.agent.spawn({ ...SPAWN, description: 'Watch the build', subagentType: 'general-purpose', name: 'watcher', background: true })
    w.agents = [{ id: 'agent-1', description: 'Watch the build', type: 'general-purpose', status: 'running', name: 'watcher' }]
    await w.clock.advance(6_000)
    await $.turn.complete({ ...TURN_END, agentId: 'agent-1' })
    expect(await said($)).toContain('✓ watcher')

    w.agents = [{ id: 'agent-1', description: 'Watch the build', type: 'general-purpose', status: 'idle', name: 'watcher' }]
    await w.clock.advance(40_000)
    expect(await said($)).not.toContain('watcher')
    w.agents = []
    await w.clock.advance(40_000)
    expect(await said($)).not.toContain('watcher')
    expect((await said($)).split('\n')).toHaveLength(2)
  })

  test('keeps going when a hook blocks its stop', async ($, on) => {
    const w = world(on)
    await $.session.start(START)
    await $.agent.spawn({ ...SPAWN, description: 'Find the hooks', subagentType: 'Explore' })
    w.blockStop = 'run the tests first'
    expect(await $.classic.SubagentStop(stopOf('agent-1'))).toEqual({ block: 'run the tests first' })
    expect(await said($)).toContain('◐ Explore')
    w.blockStop = undefined
    await $.classic.SubagentStop(stopOf('agent-1'))
    expect(await said($)).toContain('✓ Explore')
  })

  test('with a name or a task the pane could not show still leaves the pane standing', async ($, on) => {
    // A control character in a text closes the pane: none may get that far.
    const w = world(on)
    await $.session.start(START)
    w.agents = [
      {
        id: 'bg-1',
        // The last of these is the terminal's image placeholder, refused like a control character.
        description: 'Watch\u0007 the\u001b[31m build\u0000 \u{10EEEE}' + 'x'.repeat(500),
        type: 'general\u0085purpose',
        status: 'running',
        name: 'wat\u0000cher‮\u{10EEEE}',
      },
    ]
    // A tool call's own words, and another session's table, are no safer.
    w.store.set('table:other-1', snap('other-1', 'paper\u{10EEEE}notes', [seat('main', { target: 'a\u{10EEEE}b' })]))
    w.hold()
    const call = $.tool.call({ tool: 'Bash', command: 'ls', description: 'List \u{10EEEE}the\u0007 files' })
    await w.clock.settle()
    await $.command.run({ ...COMMAND, args: '' })
    for (const surface of SURFACES) {
      const ui = await $.ui.mount({ ...pane(), surface })
      const text = await shown(ui)
      expect(text).toContain('wat cher「Watch the [31m build xxx')
      expect(text).toContain('執行 List the files')
      expect(text).toContain('papernotes')
      // eslint-disable-next-line no-control-regex
      expect(text).not.toMatch(/[\u0000-\u001f\u007f-\u009f‮\u{10EEEE}]/u)
      await ui.unmount()
    }
    w.release()
    await call
    const stored = JSON.stringify(w.store.get(`table:${HERE}`))
    expect(stored.length).toBeLessThan(1_000)
  })

  test('whose task holds what looks like a key is seated without it', async ($, on) => {
    const key = 'ghp_16C7e42F292c6912E7710c838347Ae178B4a'
    const w = world(on)
    await $.session.start(START)
    await $.agent.spawn({ ...SPAWN, description: `rotate ${key}`, subagentType: 'general-purpose' })
    // The list has its own copy of the description, for an agent the events missed.
    w.agents = [
      { id: 'agent-1', description: `rotate ${key}`, type: 'general-purpose', status: 'running' },
      { id: 'bg-2', description: `use ${key}`, type: 'Explore', status: 'running' },
    ]
    const text = await said($)
    expect(text).toContain('◐ general-purpose —')
    expect(text).toContain('◐ Explore —')
    expect(text).not.toContain('ghp_')
    await w.clock.advance(2_000)
    // Nor is it in what the other sessions read, or in the picture.
    expect(JSON.stringify(w.store.get(`table:${HERE}`))).not.toContain('ghp_')
    const ui = await $.ui.mount({ ...pane(), surface: 'desktop' })
    expect(String((await ui.find({ type: 'Svg' }))?.props['source'])).not.toContain('ghp_')
    await ui.unmount()
  })

  test('still running keeps its seat through a /clear, and the main loop starts over', async ($, on) => {
    // A clear ends the conversation, not the agents it had running.
    const w = world(on)
    await $.session.start(START)
    await $.turn.start({ text: 'go', turnId: 'turn-1' })
    await $.agent.spawn({ ...SPAWN, description: 'Find the hooks', subagentType: 'Explore', background: true })
    w.agents = [{ id: 'agent-1', description: 'Find the hooks', type: 'Explore', status: 'running' }]
    w.hold()
    const call = $.tool.call(inLoop('agent-1', { tool: 'Read', file_path: '/repo/hooks/register.tsx' }))
    await w.clock.advance(2_000)
    expect(w.store.has(`table:${HERE}`)).toBe(true)

    await $.session.end({ reason: 'clear', sessionId: HERE, resume: { id: HERE } })
    // The table under the session's old id is taken away at once.
    expect(w.store.has(`table:${HERE}`)).toBe(false)
    const text = await said($)
    expect(text).toContain('○ main — 等 agent 回報')
    expect(text).toContain('● Explore「Find the hooks」 — 讀 hooks/register.tsx')

    // When it does finish, it leaves as any agent does.
    w.release()
    await call
    await $.classic.SubagentStop(stopOf('agent-1'))
    await $.turn.complete({ ...TURN_END, agentId: 'agent-1' })
    w.agents = [{ id: 'agent-1', description: 'Find the hooks', type: 'Explore', status: 'completed' }]
    expect(await said($)).toContain('✓ Explore')
    await w.clock.advance(22_000)
    expect((await said($)).split('\n')).toHaveLength(2)
  })
})

describe('waiting for the person', () => {
  test('a permission prompt marks the call it holds, and its end clears it', async ($, on) => {
    const w = world(on)
    await $.session.start(START)
    await $.turn.start({ text: 'clean up', turnId: 'turn-1' })
    w.hold()
    const call = $.tool.call({ tool: 'Bash', command: 'rm -rf build', description: 'Remove the build folder' })
    await w.clock.settle()
    await $.classic.PermissionRequest({ tool_name: 'Bash', tool_input: { command: 'rm -rf build', description: 'Remove the build folder' } })
    const text = await said($)
    expect(text).toContain('◆ main — 等你批准：執行 Remove the build folder')
    expect(text).toContain('等你 1')

    w.release()
    await call
    expect(await said($)).toContain('◐ main — 思考中')
  })

  test('a prompt a hook answers in the person place leaves nobody waiting', async ($, on) => {
    const w = world(on)
    await $.session.start(START)
    await $.turn.start({ text: 'build', turnId: 'turn-1' })
    w.hold()
    const call = $.tool.call({ tool: 'Bash', command: 'make all', description: 'Build everything' })
    await w.clock.settle()
    w.permission = { behavior: 'allow' }
    // The hook's answer is handed on as it came.
    expect(await $.classic.PermissionRequest({ tool_name: 'Bash', tool_input: { command: 'make all' } })).toEqual({
      decision: { behavior: 'allow' },
    })
    const text = await said($)
    expect(text).toContain('● main — 執行 Build everything')
    expect(text).toContain('等你 0')
    w.release()
    await call
  })

  test('of two calls of one tool, the prompt marks the one it is about', async ($, on) => {
    const w = world(on)
    await $.session.start(START)
    await $.turn.start({ text: 'fetch', turnId: 'turn-1' })
    w.hold()
    const first = $.tool.call({ tool: 'WebFetch', url: 'https://one.example.com/a', prompt: 'p' })
    await w.clock.settle()
    const second = $.tool.call({ tool: 'WebFetch', url: 'https://two.example.com/b', prompt: 'p' })
    await w.clock.settle()
    await $.classic.PermissionRequest({ tool_name: 'WebFetch', tool_input: { url: 'https://one.example.com/a', prompt: 'p' } })
    expect(await said($)).toContain('等你批准：瀏覽 one.example.com')
    w.release()
    await Promise.all([first, second])
  })

  test('a held Agent call is held no longer once its agent has started', async ($, on) => {
    // No event says a prompt was answered; an agent starting says so for its call,
    // which then goes on for as long as the agent runs.
    const w = world(on)
    await $.session.start(START)
    await $.turn.start({ text: 'ship', turnId: 'turn-1' })
    w.hold()
    const call = $.tool.call({ tool: 'Agent', tool_use_id: 'toolu_ship', description: 'Ship it', prompt: 'Ship it.' })
    await w.clock.settle()
    await $.classic.PermissionRequest({ tool_name: 'Agent', tool_input: { description: 'Ship it', prompt: 'Ship it.' } })
    expect(await said($)).toContain('◆ main — 等你批准：交辦 Ship it')

    await $.agent.spawn({ ...SPAWN, tool_use_id: 'toolu_ship', description: 'Ship it', subagentType: 'release' })
    const text = await said($)
    expect(text).toContain('● main — 交辦 Ship it')
    expect(text).toContain('等你 0')
    w.release()
    await call
  })

  test('a hold that was not about the Agent call stands when an agent starts', async ($, on) => {
    world(on)
    await $.session.start(START)
    await $.turn.start({ text: 'go', turnId: 'turn-1' })
    await $.classic.Elicitation({ mcp_server_name: 'srv', message: 'Need input' })
    expect(await said($)).toContain('◆ main — 需要你看一下')
    await $.agent.spawn({ ...SPAWN, tool_use_id: 'toolu_other', description: 'Side task', subagentType: 'Explore' })
    expect(await said($)).toContain('◆ main — 需要你看一下')
  })

  test('a question is the person to answer', async ($, on) => {
    const w = world(on)
    await $.session.start(START)
    w.hold()
    const call = $.tool.call({
      tool: 'AskUserQuestion',
      questions: [{ question: 'Which one?', header: 'Auth method', options: [], multiSelect: false }],
    })
    await w.clock.settle()
    expect(await said($)).toContain('◆ main — 有問題想問你：Auth method')
    w.release()
    await call
  })

  test('a subagent that waits is the one marked', async ($, on) => {
    const w = world(on)
    await $.session.start(START)
    await $.agent.spawn({ ...SPAWN, description: 'Ship it', subagentType: 'release' })
    w.hold()
    const call = $.tool.call(inLoop('agent-1', { tool: 'Bash', command: 'git push' }))
    await w.clock.settle()
    await $.classic.PermissionRequest({ tool_name: 'Bash', tool_input: {}, agent_id: 'agent-1', agent_type: 'release' })
    const text = await said($)
    expect(text).toContain('◆ release「Ship it」 — 等你批准：執行 git push')
    expect(text).toContain('○ main — 等 agent 回報')
    w.release()
    await call
  })
})

describe('other sessions', () => {
  const OTHER = snap('other-1', 'paper-notes', [
    seat('main', { phase: 'work', act: 'write', tool: 'Edit', target: 'extract/tables.py' }),
    seat('x1', { phase: 'work', act: 'web', tool: 'WebFetch', target: 'arxiv.org', name: 'scout' }),
  ])

  for (const surface of SURFACES) {
    test(`sit at their own tables on the ${surface}`, async ($, on) => {
      const w = world(on, {
        'table:other-1': OTHER,
        // A session that stopped saying it is here is gone.
        'table:gone': snap('gone', 'old-project', [seat('main')], NOW - 10 * 60_000),
        // So is one whose table is dated in a time yet to come.
        'table:ahead': snap('ahead', 'time-traveller', [seat('main')], NOW + 60 * 60_000),
        // Nothing in the store is taken on trust.
        'table:junk': { v: 1, id: 7, seats: 'nope' },
        'unrelated': 'left alone',
      })
      await $.session.start(START)
      expect(await $.command.run({ ...COMMAND, args: '' })).toEqual({})
      expect(w.opens.open).toBe(1)

      const ui = await $.ui.mount({ ...pane(), surface })
      expect(await ui.find({ type: 'Text', text: 'agent-cafe（這個 session）' })).toBeDefined()
      expect(await ui.find({ type: 'Text', text: 'paper-notes' })).toBeDefined()
      expect(await ui.find({ type: 'Text', text: /main.*改 extract\/tables\.py/ })).toBeDefined()
      expect(await ui.find({ type: 'Text', text: /scout.*瀏覽 arxiv\.org/ })).toBeDefined()
      expect(await shown(ui)).not.toMatch(/old-project|time-traveller/)

      // This session's own table is in the store for the others to read.
      expect(w.store.get(`table:${HERE}`)).toMatchObject({ v: 1, id: HERE, title: 'agent-cafe' })
      expect(w.store.get('unrelated')).toBe('left alone')

      // The other session moves on, and the pane follows within two looks.
      w.store.set('table:other-1', snap('other-1', 'paper-notes', [seat('main', { phase: 'idle', act: 'rest' })], NOW + 1_000))
      await w.clock.advance(4_000)
      expect(await ui.find({ type: 'Text', text: /scout/ })).toBeUndefined()
      await ui.unmount()
    })
  }

  test('are counted, not told, where the café is text the model reads', async ($, on) => {
    world(on, { 'table:other-1': OTHER })
    await $.session.start(START)
    const text = await said($)
    expect(text).toContain('其他 session：1 桌、2 位')
    expect(text).not.toMatch(/paper-notes|scout|arxiv/)
  })

  test('are left out, and nothing is shared, with share_sessions off', { options: { share_sessions: false } }, async ($, on) => {
    const w = world(on, { 'table:other-1': OTHER })
    await $.session.start(START)
    await $.tool.call({ tool: 'Read', file_path: '/repo/README.md' })
    await $.command.run({ ...COMMAND, args: '' })
    await w.clock.advance(4_000)
    const ui = await $.ui.mount({ ...pane(), surface: 'terminal' })
    expect(await shown(ui)).not.toMatch(/paper-notes|scout/)
    await ui.unmount()
    expect(await said($)).not.toContain('其他 session')
    expect(w.store.has(`table:${HERE}`)).toBe(false)
    expect(w.writes).toBe(0)
  })

  test('a long-gone session is cleared out of the store', async ($, on) => {
    const w = world(on, { 'table:ancient': snap('ancient', 'old', [seat('main')], NOW - 2 * 60 * 60_000) })
    await $.session.start(START)
    await $.command.run({ ...COMMAND, args: '' })
    expect(w.store.has('table:ancient')).toBe(false)
  })

  test('what the café cannot read is cleared out too, an hour after it first saw it', async ($, on) => {
    const w = world(on, {
      'table:junk': { v: 9, something: 'else' },
      'table:ahead': snap('ahead', 'time-traveller', [seat('main')], NOW + 24 * 60 * 60_000),
    })
    await $.session.start(START)
    await $.command.run({ ...COMMAND, args: '' })
    await w.clock.advance(30 * 60_000)
    expect(w.store.has('table:junk')).toBe(true)
    expect(w.store.has('table:ahead')).toBe(true)
    await w.clock.advance(31 * 60_000)
    expect(w.store.has('table:junk')).toBe(false)
    expect(w.store.has('table:ahead')).toBe(false)
  })

  test('a session says it is still here while nothing changes', async ($, on) => {
    const w = world(on)
    await $.session.start(START)
    await w.clock.advance(2_000)
    const first = w.store.get(`table:${HERE}`) as { at: number }
    await w.clock.advance(20_000)
    const later = w.store.get(`table:${HERE}`) as { at: number }
    expect(later.at).toBeGreaterThan(first.at)
  })

  test('a session that ended does not write its table back', async ($, on) => {
    const w = world(on)
    await $.session.start(START)
    await $.turn.start({ text: 'go', turnId: 'turn-1' })
    await $.tool.call({ tool: 'Read', file_path: '/repo/README.md' })
    await w.clock.advance(2_000)
    expect(w.store.has(`table:${HERE}`)).toBe(true)

    // The roster has just changed, and the timer is still running.
    await $.turn.complete(TURN_END)
    await $.session.end({ reason: 'prompt_input_exit', sessionId: HERE, resume: { id: HERE } })
    expect(w.store.has(`table:${HERE}`)).toBe(false)
    await w.clock.advance(60_000)
    expect(w.store.has(`table:${HERE}`)).toBe(false)
  })
})

describe('when something fails beneath it', () => {
  test('a store that refuses does not keep the café from opening, moving or letting go', async ($, on) => {
    const w = world(on)
    w.storeFails = true
    await $.session.start(START)
    expect(await $.command.run({ ...COMMAND, args: '' })).toEqual({})
    expect(w.opens.open).toBe(1)

    const ui = await $.ui.mount({ ...pane(), surface: 'desktop' })
    await $.agent.spawn({ ...SPAWN, description: 'Find the hooks', subagentType: 'Explore' })
    await $.turn.complete({ ...TURN_END, agentId: 'agent-1' })
    expect(await ui.find({ type: 'Text', text: /Explore.*完成了/ })).toBeDefined()
    await w.clock.advance(22_000)
    // Swept from the roster and from the screen, and the ages moved on.
    expect(await ui.find({ type: 'Text', text: /Explore/ })).toBeUndefined()
    expect(await ui.find({ type: 'Text', text: /main.*22s/ })).toBeDefined()

    // The tool calls of the session never notice.
    expect(await $.tool.call({ tool: 'Read', file_path: '/repo/README.md' })).toMatchObject({ result: 'ok' })

    // When the store is back, so is the sharing.
    w.storeFails = false
    await w.clock.advance(40_000)
    expect(w.store.has(`table:${HERE}`)).toBe(true)
    await ui.unmount()
  })

  test('a store that refuses does not keep a /clear from starting the main loop over', async ($, on) => {
    const w = world(on)
    await $.session.start(START)
    await $.turn.start({ text: 'go', turnId: 'turn-1' })
    w.hold()
    const call = $.tool.call({ tool: 'Bash', command: 'sleep 100', description: 'Sleep' })
    await w.clock.settle()
    expect(await said($)).toContain('● main — 執行 Sleep')
    w.storeFails = true
    await $.session.end({ reason: 'clear', sessionId: HERE, resume: { id: HERE } })
    expect(await said($)).toContain('○ main — 等你的指示')
    w.release()
    await call
  })

  test('a list of agents that cannot be read does not keep the café from opening', async ($, on) => {
    const w = world(on)
    w.agents = undefined
    await $.session.start(START)
    expect(await $.command.run({ ...COMMAND, args: '' })).toEqual({})
    expect(w.opens.open).toBe(1)
    expect(await said($)).toContain('○ main — 等你的指示')
  })
})

describe('the picture', () => {
  test('is drawn on the desktop and not on the terminal', async ($, on) => {
    world(on)
    await $.session.start(START)
    await $.agent.spawn({ ...SPAWN, description: 'Find <the> "hooks" & more', subagentType: 'Explore' })

    const terminal = await $.ui.mount({ ...pane(), surface: 'terminal' })
    expect(await terminal.find({ type: 'Svg' })).toBeUndefined()
    await terminal.unmount()

    const desktop = await $.ui.mount({ ...pane(), surface: 'desktop' })
    const svg = await desktop.find({ type: 'Svg' })
    const source = String(svg?.props['source'])
    expect(source).toStartWith('<svg xmlns="http://www.w3.org/2000/svg"')
    expect(source).toEndWith('</svg>')
    expect(source).toContain('Explore')
    // What a model wrote never reaches the markup unescaped.
    expect(source).toContain('Find &lt;the&gt; &quot;hooks&quot; &amp; more')
    expect(svg?.props['isInteractive']).toBe(true)
    expect(String(svg?.props['alt'])).toContain('2 位 agent')
    await desktop.unmount()
  })

  test('stays the same markup while only time passes', async ($, on) => {
    const w = world(on)
    await $.session.start(START)
    await $.command.run({ ...COMMAND, args: '' })
    const ui = await $.ui.mount({ ...pane(), surface: 'desktop' })
    const before = (await ui.find({ type: 'Svg' }))?.props['source']
    expect(await ui.find({ type: 'Text', text: /main.*0s/ })).toBeDefined()

    await w.clock.advance(8_000)
    // The list's ages moved on, the picture did not.
    expect(await ui.find({ type: 'Text', text: /main.*8s/ })).toBeDefined()
    expect((await ui.find({ type: 'Svg' }))?.props['source']).toBe(before)

    await $.turn.start({ text: 'go', turnId: 'turn-1' })
    expect((await ui.find({ type: 'Svg' }))?.props['source']).not.toBe(before)
    await ui.unmount()
  })

  test('is a plain still image with motion off', { options: { motion: false } }, async ($, on) => {
    world(on)
    await $.session.start(START)
    const ui = await $.ui.mount({ ...pane(), surface: 'desktop' })
    const svg = await ui.find({ type: 'Svg' })
    expect(svg?.props['isInteractive']).toBeUndefined()
    expect(String(svg?.props['source'])).not.toContain('<animate')
    await ui.unmount()
  })

  test('fits the markup limit however full the café is', async ($, on) => {
    const crowd = (id: string) =>
      snap(
        id,
        `project-${id}`,
        Array.from({ length: 40 }, (_, index) =>
          seat(index === 0 ? 'main' : `s${index}`, { phase: 'work', act: 'write', tool: 'Edit', target: `src/file-${index}.ts`, task: 'A long enough task description' }),
        ),
      )
    world(on, { 'table:a': crowd('a'), 'table:b': crowd('b'), 'table:c': crowd('c'), 'table:d': crowd('d') })
    await $.session.start(START)
    for (let index = 0; index < 30; index += 1) {
      await $.agent.spawn({ ...SPAWN, description: `Task number ${index}`, subagentType: 'general-purpose' })
    }
    await $.command.run({ ...COMMAND, args: '' })
    const ui = await $.ui.mount({ ...pane(140), surface: 'desktop' })
    const source = String((await ui.find({ type: 'Svg' }))?.props['source'])
    expect(source.length).toBeGreaterThan(1_000)
    expect(source.length).toBeLessThanOrEqual(131_072)
    // The list still says who the picture had no room for.
    expect(await ui.find({ type: 'Text', text: /還有 \d+ 位/ })).toBeDefined()
    expect(await ui.find({ type: 'Text', text: /還有 1 桌沒畫出來/ })).toBeDefined()
    await ui.unmount()
  })

  test('still draws for a surface that hands over fewer props than this build knows', async ($, on) => {
    world(on)
    await $.session.start(START)
    // An older client: no `view`, no width.
    const props = { title: 'Agent Café', isFocused: false, placement: 'inline', scroll: { offset: 0, bodyRows: 20 } }
    const ui = await $.ui.mount({ plugin: 'agent-cafe', surface: 'desktop', component: 'Pane', requestId: 'agent-cafe', props: props as never })
    expect(await ui.find({ type: 'Svg' })).toBeDefined()
    expect(await ui.find({ type: 'Text', text: /main.*等你的指示/ })).toBeDefined()
    await ui.unmount()
  })

  test('marks the agent whose transcript is on screen', async ($, on) => {
    world(on)
    await $.session.start(START)
    await $.agent.spawn({ ...SPAWN, description: 'Find the hooks', subagentType: 'Explore' })
    const plain = await $.ui.mount({ ...pane(), surface: 'desktop' })
    const before = String((await plain.find({ type: 'Svg' }))?.props['source'])
    await plain.unmount()
    const viewing = await $.ui.mount({ ...pane(80, 'agent-1'), surface: 'desktop' })
    const after = String((await viewing.find({ type: 'Svg' }))?.props['source'])
    expect(after).not.toBe(before)
    await viewing.unmount()
  })
})

describe('/cafe', () => {
  test('answers as text where the surface places no pane', async ($, on) => {
    const w = world(on, {}, false)
    await $.session.start(START)
    const answer = await $.command.run({ ...COMMAND, args: '' })
    expect(w.opens.open).toBe(1)
    expect(answer.text).toContain('先用文字告訴你')
    expect(answer.text).toContain('○ main — 等你的指示')
  })

  test('answers as text where nothing draws at all', async ($, on) => {
    // A headless run places every pane and shows none.
    const w = world(on)
    w.surfaces = []
    await $.session.start(START)
    expect((await $.command.run({ ...COMMAND, args: '' })).text).toContain('○ main — 等你的指示')
  })

  test('close closes the pane and says nothing', async ($, on) => {
    const w = world(on)
    await $.session.start(START)
    await $.command.run({ ...COMMAND, args: '' })
    expect(await $.command.run({ ...COMMAND, args: 'close' })).toEqual({})
    expect(w.opens.close).toBe(1)
  })

  test('says how it is used for a word it does not know', async ($, on) => {
    const w = world(on)
    await $.session.start(START)
    expect((await $.command.run({ ...COMMAND, args: 'espresso' })).text).toContain('/cafe text')
    expect(w.opens.open).toBe(0)
  })

  test('speaks English when asked to', { options: { language: 'en' } }, async ($, on) => {
    const w = world(on)
    await $.session.start(START)
    await $.agent.spawn({ ...SPAWN, description: 'Find the hooks', subagentType: 'Explore' })
    w.hold()
    const call = $.tool.call(inLoop('agent-1', { tool: 'Read', file_path: '/repo/hooks/scene.ts' }))
    await w.clock.settle()
    const text = await said($)
    expect(text).toContain('○ main — Waiting on agents')
    expect(text).toContain('● Explore “Find the hooks” — Reading hooks/scene.ts')
    w.release()
    await call
  })
})
