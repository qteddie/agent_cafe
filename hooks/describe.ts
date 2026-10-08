// What a tool call is, for the café: the kind of work it stands for (its act,
// which picks the pose and the bubble) and one short word for what it works on
// (its target: a file name, a search pattern, a host).
//
// Pure: no `$` here, so it runs the same in a session and in a test.

/**
 * The kinds of work a seat can show. The tools' own, then the four a seat
 * shows between tool calls: thinking, resting, done and failed.
 */
export type Act =
  | 'read'
  | 'search'
  | 'write'
  | 'run'
  | 'web'
  | 'delegate'
  | 'plan'
  | 'ask'
  | 'tool'
  | 'think'
  | 'rest'
  | 'done'
  | 'fail'

const ACTS: Readonly<Record<string, Act>> = {
  Read: 'read',
  NotebookRead: 'read',
  LSP: 'read',
  TaskGet: 'read',
  TaskList: 'read',
  GetTask: 'read',
  ListMcpResourcesTool: 'read',
  ReadMcpResourceTool: 'read',
  ReadMcpResourceDirTool: 'read',

  Grep: 'search',
  Glob: 'search',
  LS: 'search',
  ToolSearch: 'search',

  Edit: 'write',
  MultiEdit: 'write',
  Write: 'write',
  NotebookEdit: 'write',

  Bash: 'run',
  PowerShell: 'run',
  Monitor: 'run',
  BashOutput: 'run',
  KillShell: 'run',
  TaskStop: 'run',

  WebFetch: 'web',
  WebSearch: 'web',

  Agent: 'delegate',
  Task: 'delegate',
  Workflow: 'delegate',
  SendMessage: 'delegate',

  TodoWrite: 'plan',
  TaskCreate: 'plan',
  TaskUpdate: 'plan',
  EnterPlanMode: 'plan',
  Skill: 'plan',

  AskUserQuestion: 'ask',
  ExitPlanMode: 'ask',
}

/** The kind of work a tool stands for; a tool the café does not know is `tool`. */
export function actOf(tool: string): Act {
  // Its own entries only: `constructor` is a name like any other.
  return (Object.hasOwn(ACTS, tool) ? ACTS[tool] : undefined) ?? 'tool'
}

// A shell command is a search, a read or a fetch when the program it runs is
// one: where a build has no search tool of its own, this is how agents search.
const SEARCHES: ReadonlySet<string> = new Set([
  'grep', 'egrep', 'fgrep', 'rg', 'ag', 'ack', 'ugrep', 'find', 'fd', 'fdfind', 'bfs', 'locate', 'ls', 'tree',
  'select-string', 'get-childitem', 'gci', 'dir',
])
const READS: ReadonlySet<string> = new Set([
  'cat', 'head', 'tail', 'less', 'more', 'bat', 'wc', 'nl', 'stat', 'file', 'get-content', 'gc', 'type',
])
const FETCHES: ReadonlySet<string> = new Set(['curl', 'wget', 'invoke-webrequest', 'iwr', 'invoke-restmethod', 'irm'])
/** Steps that only set the scene: the part of the command after them says what it is for. */
const SCENE: ReadonlySet<string> = new Set(['cd', 'pushd', 'popd', 'export', 'set', 'source', '.', 'true', ':'])
/** Words in front of a program that run it and say nothing themselves. */
const WRAPPERS: ReadonlySet<string> = new Set(['sudo', 'time', 'nohup', 'command', 'exec'])

/**
 * The kind of work a shell command stands for, by the first program in it
 * that says: `cd src && rg TODO` is a search. Anything it cannot read is `run`.
 *
 * Only the kind leaves here, never a word of the command.
 */
function shellAct(command: string): Act {
  for (const part of command.split(/&&|\|\||[;|\n]/)) {
    const rest = pastAssignments(tidy(part))
    if (rest === undefined) return 'run'
    const words = rest.split(' ').filter(word => word !== '')
    let at = 0
    while (WRAPPERS.has(words[at] ?? '')) {
      at += 1
      while (words[at]?.startsWith('-') === true) at += 1
    }
    const word = words[at]
    if (word === undefined) continue
    const name = (word.split(/[\\/]/).pop() ?? word).toLowerCase()
    if (SCENE.has(name)) continue
    if (SEARCHES.has(name)) return 'search'
    if (READS.has(name)) return 'read'
    if (FETCHES.has(name)) return 'web'
    return 'run'
  }
  return 'run'
}

/**
 * The kind of work one tool call stands for: the tool's own, and for a shell
 * command the kind of command it is.
 */
export function actOfCall(tool: string, input: Readonly<Record<string, unknown>>): Act {
  if (tool !== 'Bash' && tool !== 'PowerShell') return actOf(tool)
  const command = input['command']
  return typeof command === 'string' ? shellAct(command) : 'run'
}

/** An MCP tool's two halves, `mcp__<server>__<tool>`; undefined for any other tool. */
export function mcpParts(tool: string): { server: string; tool: string } | undefined {
  if (!tool.startsWith('mcp__')) return undefined
  const rest = tool.slice(5)
  const cut = rest.indexOf('__')
  if (cut <= 0) return { server: rest, tool: '' }
  return { server: rest.slice(0, cut), tool: rest.slice(cut + 2) }
}

/**
 * Text made fit to show: control characters and line breaks become one space,
 * runs of white space collapse, the ends are trimmed, and what draws nothing
 * but steers the text around it (direction marks, halves of a surrogate pair,
 * noncharacters, the private-use planes) is dropped.
 *
 * Everything the café shows or shares passes through here first: a surface
 * refuses a tree whose text holds a control character or the terminal's image
 * placeholder (U+10EEEE, in a private-use plane), and XML one that holds a
 * noncharacter.
 */
export function tidy(text: string): string {
  let out = ''
  let isGap = false
  for (const char of text) {
    const code = char.codePointAt(0) ?? 0
    if (isUnseen(code)) continue
    const isBlank =
      code <= 0x20 || code === 0x7f || (code >= 0x80 && code <= 0x9f) || code === 0x2028 || code === 0x2029
    if (isBlank) {
      isGap = out.length > 0
      continue
    }
    if (isGap) out += ' '
    isGap = false
    out += char
  }
  return out
}

function isUnseen(code: number): boolean {
  return (
    code === 0x200e ||
    code === 0x200f ||
    (code >= 0x202a && code <= 0x202e) ||
    (code >= 0x2066 && code <= 0x2069) ||
    code === 0xfeff ||
    (code >= 0xd800 && code <= 0xdfff) ||
    (code >= 0xfdd0 && code <= 0xfdef) ||
    (code & 0xfffe) === 0xfffe ||
    // Planes 15 and 16 are private use: no text of anyone's, and where a
    // terminal's own placeholders live.
    code >= 0xf0000
  )
}

/**
 * How wide a string draws, in halves of a full-width character: a CJK
 * character or an emoji counts two, anything else one.
 */
export function widthOf(text: string): number {
  let width = 0
  for (const char of text) width += isWide(char.codePointAt(0) ?? 0) ? 2 : 1
  return width
}

function isWide(code: number): boolean {
  return (
    (code >= 0x1100 && code <= 0x115f) ||
    (code >= 0x2e80 && code <= 0xa4cf) ||
    (code >= 0xac00 && code <= 0xd7a3) ||
    (code >= 0xf900 && code <= 0xfaff) ||
    (code >= 0xfe30 && code <= 0xfe4f) ||
    (code >= 0xff00 && code <= 0xff60) ||
    (code >= 0xffe0 && code <= 0xffe6) ||
    (code >= 0x1f300 && code <= 0x1faff) ||
    (code >= 0x20000 && code <= 0x3fffd)
  )
}

/** Cuts a string to `max` widths (widthOf), an ellipsis standing for the rest. */
export function clip(text: string, max: number): string {
  if (widthOf(text) <= max) return text
  let out = ''
  let width = 0
  for (const char of text) {
    const step = isWide(char.codePointAt(0) ?? 0) ? 2 : 1
    if (width + step > max - 1) break
    out += char
    width += step
  }
  return out.trimEnd() + '…'
}

/** A path's last segment, with its folder in front when the two are short; a long one is cut. */
export function shortPath(path: string): string {
  const parts = tidy(path).split(/[\\/]+/).filter(part => part !== '')
  const last = parts[parts.length - 1]
  if (last === undefined) return ''
  const folder = parts[parts.length - 2]
  if (folder !== undefined && widthOf(folder) + widthOf(last) <= 26) return `${folder}/${last}`
  return clip(last, 40)
}

/** A folder's name: the last segment of its path, cut to a table's placard. */
export function folderName(path: string): string {
  const parts = tidy(path)
    .split(/[\\/]+/)
    .filter(part => part !== '')
  return clip(parts[parts.length - 1] ?? '', 40)
}

/**
 * A URL's host, without `www.`; nothing for text that is no URL, since what
 * it holds (a name and password before the host, a token after it) is unknown.
 */
export function hostOf(url: string): string {
  const text = tidy(url)
  if (!URL.canParse(text)) return ''
  return clip(new URL(text).hostname.replace(/^www\./, ''), 40)
}

const PROGRAM = /^[A-Za-z0-9_.+-]{1,24}$/
const SUBCOMMAND = /^[a-z][a-z0-9:_-]{0,19}$/

// Programs whose first argument is a subcommand from a fixed set, never data.
// Not make or just: their targets are whatever a project named them.
const WITH_SUBCOMMAND: ReadonlySet<string> = new Set([
  'git', 'gh', 'npm', 'npx', 'pnpm', 'yarn', 'bun', 'deno', 'cargo', 'rustup', 'go',
  'pip', 'pip3', 'uv', 'poetry', 'conda', 'docker', 'kubectl', 'helm', 'terraform', 'brew', 'apt',
  'apt-get', 'dotnet', 'gradle', 'mvn', 'swift', 'flutter', 'composer', 'bundle', 'rake', 'turbo', 'nx',
])

/** What an assignment's value may hold outside quotes and still be skipped over. */
const PLAIN_VALUE = /^[A-Za-z0-9_.,:/@%+=~-]$/

/**
 * What is left of a command line after the `NAME=value` assignments it opens
 * with; undefined when a value is more than the café can read past.
 *
 * A value may be quoted and hold spaces (`PASSWORD="two words" mysql`), so a
 * split on spaces would take a word of it for the program. Anything in a
 * value that could hide a space another way (a substitution, an escape, an
 * open quote) ends the reading: better nothing shown than a word of a secret.
 */
function pastAssignments(line: string): string | undefined {
  let at = 0
  for (;;) {
    while (line[at] === ' ') at += 1
    const name = /^[A-Za-z_][A-Za-z0-9_]*=/.exec(line.slice(at))
    if (name === null) return line.slice(at)
    at += name[0].length
    while (at < line.length && line[at] !== ' ') {
      const char = line[at] ?? ''
      if (char === "'") {
        const close = line.indexOf("'", at + 1)
        if (close < 0) return undefined
        at = close + 1
      } else if (char === '"') {
        const close = line.indexOf('"', at + 1)
        if (close < 0 || /[$`\\]/.test(line.slice(at + 1, close))) return undefined
        at = close + 1
      } else if (PLAIN_VALUE.test(char)) {
        at += 1
      } else {
        return undefined
      }
    }
  }
}

/**
 * A shell command cut down to what is safe to show: the program's name and,
 * for a program that takes one, its subcommand (`npm test`, `git status`).
 *
 * Every other argument is left out, since that is where a token, a password
 * or a connection string would be.
 */
export function safeCommand(command: string): string {
  // Leading `VAR=value` assignments say nothing about what runs.
  const rest = pastAssignments(tidy(command))
  if (rest === undefined) return ''
  const words = rest.split(' ').filter(word => word !== '')
  const program = words[0]
  if (program === undefined) return ''
  const name = program.split('/').pop() ?? program
  if (!PROGRAM.test(name) || looksSecret(name)) return ''
  const after = words[1]
  if (after === undefined) return name
  if (!WITH_SUBCOMMAND.has(name) || !SUBCOMMAND.test(after)) return `${name} …`
  return words.length <= 2 ? `${name} ${after}` : `${name} ${after} …`
}

const KEY_PREFIX =
  /(?:^|[^A-Za-z0-9])(?:sk-|rk-|ghp_|gho_|ghu_|ghs_|ghr_|github_pat_|glpat-|xox[abprs]-|AKIA|ASIA|AIza|ya29\.|eyJ[A-Za-z0-9_-]{8})|-----BEGIN/

/**
 * True for text that holds what looks like a credential: the opening of a
 * well-known kind of key, or a long unbroken run that mixes letters and
 * digits, as a token, a hash or an id does.
 *
 * A guess, and one that errs toward hiding: a search for a key should not put
 * the key on the wall.
 */
export function looksSecret(text: string): boolean {
  if (KEY_PREFIX.test(text)) return true
  for (const run of text.match(/[A-Za-z0-9_+=-]{20,}/g) ?? []) {
    const digits = run.replace(/[^0-9]/g, '').length
    const letters = run.replace(/[^A-Za-z]/g, '').length
    if (digits >= 4 && letters >= 4) return true
  }
  return false
}

/** Free text a model wrote, cut to `max` widths; nothing when it looks to hold a secret. */
function plain(text: string, max: number): string {
  return looksSecret(text) ? '' : clip(text, max)
}

/**
 * A few words someone wrote (a task, a name), made fit to show and cut to
 * `max` widths; nothing when they look to hold a secret.
 */
export function label(text: string, max: number): string {
  return plain(tidy(text), max)
}

function text(input: Readonly<Record<string, unknown>>, key: string): string {
  const value = input[key]
  return typeof value === 'string' ? tidy(value) : ''
}

/**
 * One short word for what a tool call works on, from the call's arguments; the
 * empty string when the café has nothing safe or useful to say.
 */
export function targetOf(tool: string, input: Readonly<Record<string, unknown>>): string {
  switch (tool) {
    // A file's name can hold a secret too (a key saved under its own value).
    case 'Read':
    case 'Edit':
    case 'MultiEdit':
    case 'Write':
    case 'NotebookRead':
      return plain(shortPath(text(input, 'file_path')), 40)
    case 'NotebookEdit':
      return plain(shortPath(text(input, 'notebook_path')), 40)
    case 'LSP':
      return plain(shortPath(text(input, 'filePath')), 40)
    case 'LS':
      return plain(shortPath(text(input, 'path')), 40)
    case 'Grep':
    case 'Glob':
      return plain(text(input, 'pattern'), 30)
    case 'Bash':
    case 'PowerShell':
    case 'Monitor':
      // The model's own line about the command reads better than the command,
      // and does not hold what the command's arguments might.
      return plain(text(input, 'description'), 40) || safeCommand(text(input, 'command'))
    case 'WebFetch':
      return hostOf(text(input, 'url'))
    case 'WebSearch':
    case 'ToolSearch':
      return plain(text(input, 'query'), 34)
    case 'Agent':
    case 'Task':
      return plain(text(input, 'description') || text(input, 'subagent_type'), 40)
    case 'Workflow':
      return plain(text(input, 'title') || text(input, 'name') || text(input, 'description'), 40)
    case 'Skill':
      return plain(text(input, 'skill'), 30)
    case 'SendMessage':
      return plain(text(input, 'to'), 24)
    case 'TaskCreate':
    case 'TaskUpdate':
      return plain(text(input, 'subject'), 36)
    case 'AskUserQuestion': {
      const questions = input['questions']
      const first: unknown = Array.isArray(questions) ? questions[0] : undefined
      if (typeof first !== 'object' || first === null) return ''
      const header = (first as Readonly<Record<string, unknown>>)['header']
      return typeof header === 'string' ? plain(tidy(header), 24) : ''
    }
    default:
      return ''
  }
}
