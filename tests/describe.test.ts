// What a tool call is shown as: its kind, and the one short word for what it
// works on, which must never be more than is safe to put on a wall.

import { describe, expect, test } from 'claude-code/testing'

import { actOf, actOfCall, clip, hostOf, label, looksSecret, mcpParts, safeCommand, shortPath, targetOf, tidy, widthOf } from '../hooks/describe'

describe('a shell command', () => {
  test('is shown by the line the model wrote about it', () => {
    expect(targetOf('Bash', { command: 'npm test -- --watch=false', description: 'Run the test suite' })).toBe('Run the test suite')
  })

  test('without one, by its program and subcommand alone', () => {
    expect(safeCommand('git status')).toBe('git status')
    expect(safeCommand('git commit -m "wip: secret plan"')).toBe('git commit …')
    expect(safeCommand('npm test')).toBe('npm test')
    expect(safeCommand('/usr/local/bin/python3 train.py --lr 0.1')).toBe('python3 …')
    expect(safeCommand('ls')).toBe('ls')
    // A make target is whatever the project named it: an argument like any other.
    expect(safeCommand('make deploy-prod')).toBe('make …')
    // A program named like a key is no name to show.
    expect(safeCommand('./sk-live-abcdefghij1234567890 --now')).toBe('')
  })

  test('never by an argument, where a secret would be', () => {
    const commands = [
      'curl -H "Authorization: Bearer sk-live-123" https://api.example.com',
      'API_KEY=sk-live-123 node deploy.js --token sk-live-123',
      'mysql -u root -psk-live-123 prod',
      'docker login -p sk-live-123',
      'echo sk-live-123 | gh auth login --with-token',
    ]
    for (const command of commands) {
      expect(targetOf('Bash', { command })).not.toContain('sk-live-123')
      expect(safeCommand(command)).not.toContain('sk-live-123')
    }
    expect(safeCommand('API_KEY=sk-live-123 node deploy.js')).toBe('node …')
  })

  test('nor by a word of a quoted value set before the program', () => {
    // Split on spaces, `"my hunter2 pass"` would hand `hunter2` over as the program.
    expect(safeCommand('MYSQL_PWD="my hunter2 pass" mysql -u root')).toBe('mysql …')
    expect(safeCommand("TOKEN='a hunter2 b' A=1 B=x/y.z git push origin main")).toBe('git push …')
    for (const command of [
      'PASS="unclosed hunter2 mysql',
      'PASS="$(cat secret) hunter2 x" mysql',
      'PASS=$(echo hunter2 x) mysql',
      'PASS=`echo hunter2 x` mysql',
      'PASS=a\\ hunter2 mysql',
      "PASS='x' 'hunter2' mysql",
    ]) {
      expect(safeCommand(command)).not.toContain('hunter2')
      expect(targetOf('Bash', { command })).not.toContain('hunter2')
    }
  })

  test('that is no plain program name shows nothing', () => {
    expect(safeCommand('$(cat ~/.ssh/id_rsa)')).toBe('')
    expect(safeCommand('"quoted thing" arg')).toBe('')
    expect(safeCommand('   ')).toBe('')
  })
})

describe('what a tool works on', () => {
  test('a file is its name, with its folder when both are short', () => {
    expect(targetOf('Read', { file_path: '/Users/me/Projects/agent-cafe/hooks/scene.ts' })).toBe('hooks/scene.ts')
    expect(targetOf('Edit', { file_path: 'C:\\repo\\src\\index.ts' })).toBe('src/index.ts')
    expect(shortPath('/a/a-very-long-folder-name-indeed/another-long-file-name.tsx')).toBe('another-long-file-name.tsx')
    expect(shortPath('README.md')).toBe('README.md')
    expect(shortPath('')).toBe('')
    // A file named after a key it holds is not named on the wall.
    expect(targetOf('Read', { file_path: '/Users/me/ghp_abcdefghijklmnopqrstuvwxyz0123456789.txt' })).toBe('')
    expect(targetOf('Write', { file_path: '/Users/me/notes/plan.md' })).toBe('notes/plan.md')
    // A name of any length is cut to one a card can hold.
    expect(widthOf(shortPath(`/repo/${'x'.repeat(400_000)}.ts`))).toBeLessThanOrEqual(40)
    expect(targetOf('Read', { file_path: `/repo/${'長'.repeat(5_000)}` }).length).toBeLessThanOrEqual(40)
  })

  test('a search is its pattern, a page its host, a web search its words', () => {
    expect(targetOf('Grep', { pattern: 'PermissionRequest' })).toBe('PermissionRequest')
    expect(targetOf('WebFetch', { url: 'https://www.example.com/a/b?token=abc' })).toBe('example.com')
    expect(targetOf('WebSearch', { query: 'SMIL animation in img' })).toBe('SMIL animation in img')
  })

  test('text that is no URL shows nothing: there is no telling what it holds', () => {
    expect(hostOf('not a url?x=1')).toBe('')
    expect(hostOf('//user:hunter2@host/x')).toBe('')
    expect(hostOf('https://user:hunter2@example.com/x?key=hunter2')).toBe('example.com')
  })

  test('a search for what looks like a key does not show the key', () => {
    const keys = [
      'sk-ant-api03-abcdefghijklmnop',
      'ghp_16C7e42F292c6912E7710c838347Ae178B4a',
      'AKIAIOSFODNN7EXAMPLE',
      'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.e30.abc',
      'xoxb-2048-1234-abcdef',
      'a3f9c2e17b4d8f6019e2c7a5d4b3e1f0',
      '-----BEGIN RSA PRIVATE KEY-----',
    ]
    for (const key of keys) {
      expect(looksSecret(key)).toBe(true)
      expect(targetOf('Grep', { pattern: key })).toBe('')
      expect(targetOf('WebSearch', { query: `what is ${key}` })).toBe('')
      expect(targetOf('Agent', { description: `rotate ${key}` })).toBe('')
    }
    // A description that looks to hold one gives way to the bare program.
    expect(targetOf('Bash', { description: 'Use ghp_16C7e42F292c6912E7710c838347Ae178B4a', command: 'gh auth status' })).toBe('gh auth …')
  })

  test('ordinary searches are shown as they are', () => {
    for (const text of ['PermissionRequestHookInput', 'TODO|FIXME', 'src/**/*.test.ts', 'useState\\(', 'risk-assessment and task-list', 'how to center a div in 2026', 'v2.1.292']) {
      expect(looksSecret(text)).toBe(false)
    }
    expect(targetOf('Grep', { pattern: 'PermissionRequestHookInput' })).toBe('PermissionRequestHookInput')
  })

  test('a delegation is its description, a question its header', () => {
    expect(targetOf('Agent', { description: 'Find the hooks', prompt: 'a long private prompt' })).toBe('Find the hooks')
    expect(targetOf('AskUserQuestion', { questions: [{ header: 'Auth method', question: 'Which?' }] })).toBe('Auth method')
    expect(targetOf('AskUserQuestion', { questions: 'nope' })).toBe('')
  })

  test('arguments of the wrong shape are no reason to fail', () => {
    expect(targetOf('Read', {})).toBe('')
    expect(targetOf('Read', { file_path: 42 })).toBe('')
    expect(targetOf('Bash', { command: null })).toBe('')
    expect(targetOf('mcp__github__create_issue', { title: 'x' })).toBe('')
  })
})

describe('kinds of work', () => {
  test('each known tool has one, and an unknown one is a tool', () => {
    expect(actOf('Read')).toBe('read')
    expect(actOf('Grep')).toBe('search')
    expect(actOf('Write')).toBe('write')
    expect(actOf('Bash')).toBe('run')
    expect(actOf('WebSearch')).toBe('web')
    expect(actOf('Agent')).toBe('delegate')
    expect(actOf('TodoWrite')).toBe('plan')
    expect(actOf('AskUserQuestion')).toBe('ask')
    expect(actOf('mcp__github__create_issue')).toBe('tool')
    // A name that is also a property of every object is still just a name.
    expect(actOf('constructor')).toBe('tool')
    expect(actOf('toString')).toBe('tool')
  })

  test('a shell command is the kind of work its program is', () => {
    // Where a build has no search tool of its own, this is how an agent searches.
    const kind = (command: string) => actOfCall('Bash', { command })
    expect(kind('rg -n "TODO" src')).toBe('search')
    expect(kind('grep -rn PermissionRequest hooks | head -20')).toBe('search')
    expect(kind('find . -name "*.ts" -newer package.json')).toBe('search')
    expect(kind('ls -la')).toBe('search')
    expect(kind('cat package.json')).toBe('read')
    expect(kind('/usr/bin/tail -n 50 build.log')).toBe('read')
    expect(kind('curl -s https://example.com/api')).toBe('web')
    expect(kind('npm test')).toBe('run')
    expect(kind('git grep TODO')).toBe('run')
    // The first program that says, past what only sets the scene.
    expect(kind('cd packages/app && rg useState')).toBe('search')
    expect(kind('export NODE_ENV=test; set -e\nLC_ALL=C sudo -n grep -c x /var/log/syslog')).toBe('search')
    expect(kind('cd src && npm run build && cat dist/index.js')).toBe('run')
    // What it cannot read is a command like any other.
    expect(kind('')).toBe('run')
    expect(kind('TOKEN="$(cat secret)" grep x y')).toBe('run')
    expect(kind('"quoted program" arg')).toBe('run')
    expect(actOfCall('Bash', {})).toBe('run')
    expect(actOfCall('Bash', { command: 42 })).toBe('run')
    expect(actOfCall('PowerShell', { command: 'Get-ChildItem -Recurse | Select-String TODO' })).toBe('search')
  })

  test('any other tool call is the kind its tool is', () => {
    expect(actOfCall('Read', { command: 'grep x' })).toBe('read')
    expect(actOfCall('Edit', {})).toBe('write')
    expect(actOfCall('mcp__github__search_code', { command: 'grep x' })).toBe('tool')
  })

  test('an MCP tool splits into its server and its tool', () => {
    expect(mcpParts('mcp__github__create_issue')).toEqual({ server: 'github', tool: 'create_issue' })
    expect(mcpParts('mcp__plugin_my-plugin_db__query')).toEqual({ server: 'plugin_my-plugin_db', tool: 'query' })
    expect(mcpParts('mcp__solo')).toEqual({ server: 'solo', tool: '' })
    expect(mcpParts('Bash')).toBeUndefined()
  })
})

describe('text', () => {
  test('is tidied of control characters and runs of space', () => {
    expect(tidy('  a\n\tb\u0000c  \u001b[31m d ')).toBe('a b c [31m d')
    expect(tidy('one\u2028two\u0085three')).toBe('one two three')
  })

  test('is tidied of what draws nothing and only steers the text around it', () => {
    // Direction marks and overrides, a byte order mark, half a surrogate pair, noncharacters.
    expect(tidy('safe\u202egnp.exe\u202c')).toBe('safegnp.exe')
    expect(tidy('\ufeffa\u200eb\u2066c\u2069')).toBe('abc')
    expect(tidy('half \ud83d pair')).toBe('half pair')
    expect(tidy('[\u4e00-\uffff] and \ufffe')).toBe('[\u4e00-] and')
    // What is meant to be seen stays: an emoji with its joiner, full-width text.
    expect(tidy('咖啡廳 👩‍💻')).toBe('咖啡廳 👩‍💻')
  })

  test('is tidied of the private-use planes, where a terminal keeps its image placeholder', () => {
    // A surface refuses a text that holds U+10EEEE as it does a control character.
    expect(tidy('Watch the \u{10EEEE} build')).toBe('Watch the build')
    expect(tidy('a\u{F0000}b\u{10FFFD}c')).toBe('abc')
    // The private-use area of the first plane is where icon fonts draw: left alone.
    expect(tidy('branch \ue0a0 main')).toBe('branch \ue0a0 main')
  })

  test('a few words someone wrote are tidied, cut, and not shown when they look to hold a key', () => {
    expect(label('  Find\n the\thooks ', 80)).toBe('Find the hooks')
    expect(widthOf(label('word '.repeat(100), 80))).toBeLessThanOrEqual(80)
    expect(label('rotate ghp_16C7e42F292c6912E7710c838347Ae178B4a', 80)).toBe('')
    expect(label('general-purpose', 40)).toBe('general-purpose')
  })

  test('is measured and cut by width, a full-width character counting two', () => {
    expect(widthOf('abc')).toBe(3)
    expect(widthOf('咖啡廳')).toBe(6)
    expect(clip('short', 10)).toBe('short')
    expect(clip('a long line of text', 10)).toBe('a long li…')
    expect(widthOf(clip('這是一段很長的中文說明文字', 10))).toBeLessThanOrEqual(10)
    expect(clip('這是一段很長的中文說明文字', 10)).toEndWith('…')
  })
})
