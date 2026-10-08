// The hook-event reporter. Claude Code runs it for each hook event that
// hooks/hooks.json names, once web.json sets up the café's web page: it reads
// the event on stdin, keeps only what the café shows (hooks/wire.ts says what
// that is) and posts it to the page.
//
// It runs wherever the plugin's hooks run, the places the hooks module does
// not reach included (a task in the Claude app). Where the module does run
// and its own reports reach the page, this one leaves the reporting to it.
//
// It is built into scripts/report.mjs, which needs Node 18.17 or later and no
// packages (Node 22.21 or later behind a proxy, as in a Claude app task):
//
//   bun build web/report.ts --target=node --format=esm --outfile=scripts/report.mjs
//
// It prints nothing and always exits 0: a report that cannot be made is not
// worth a word in the session.

import { createHash } from 'node:crypto'
import { readFileSync, readdirSync, rmSync, statSync, writeFileSync } from 'node:fs'
import { homedir, tmpdir } from 'node:os'
import { join } from 'node:path'

import { eventPostOf, inboxOf } from '../hooks/wire'

/** How long a report may take before it is given up on. */
const TIMEOUT_MS = 3_000
/**
 * The same for the events whose hooks the session waits on (hooks.json runs
 * them in the foreground, so they are sent before a session that ends exits).
 */
const WAITED_ON_MS = 2_000
const WAITED_ON: ReadonlySet<unknown> = new Set(['Stop', 'StopFailure', 'SessionEnd'])
/**
 * After a report the page did not answer in time, the next ones wait this
 * long before trying again. Only a page that hangs trips it: one that answers
 * at once, even with an error (a restart, the tunnel saying its server is
 * away), costs a reporter nothing, and the events of that moment are worth
 * the try.
 */
const DOWN_MS = 15_000
/** The hooks module's report counts as recent for this long (it reports at least every 15 s). */
const MODULE_FRESH_MS = 45_000
/** The most of an event read from stdin: a Write carries its whole file, none of which is sent. */
const MAX_INPUT = 32 * 1024 * 1024

async function readInput(): Promise<string> {
  const chunks: Buffer[] = []
  let size = 0
  for await (const chunk of process.stdin) {
    const bytes = Buffer.isBuffer(chunk) ? chunk : Buffer.from(String(chunk))
    size += bytes.length
    if (size > MAX_INPUT) throw new Error('the event is larger than the reporter reads')
    chunks.push(bytes)
  }
  return Buffer.concat(chunks).toString('utf8')
}

/**
 * True when the hooks module runs in this session and its own reports reach
 * the page: it notes when they last did in its store, a file of its own under
 * Claude Code's settings folder.
 */
function moduleReports(sid: string, now: number): boolean {
  try {
    const dir = join(process.env['CLAUDE_CONFIG_DIR'] || join(homedir(), '.claude'), 'plugins', 'store')
    for (const name of readdirSync(dir)) {
      if (!name.startsWith('agent-cafe') || !name.endsWith('.json')) continue
      const store: unknown = JSON.parse(readFileSync(join(dir, name), 'utf8'))
      const entry = typeof store === 'object' && store !== null ? (store as Record<string, unknown>)[`table:${sid}`] : undefined
      const web = typeof entry === 'object' && entry !== null ? (entry as Record<string, unknown>)['web'] : undefined
      if (typeof web === 'number' && now - web >= 0 && now - web < MODULE_FRESH_MS) return true
    }
  } catch {
    // No store, or one that cannot be read: the module is not reporting here.
  }
  return false
}

/** The file that says the page did not answer a moment ago, one for each page. */
function downFile(url: string): string {
  return join(tmpdir(), `agent-cafe-down-${createHash('sha256').update(url).digest('hex').slice(0, 12)}`)
}

function isDown(file: string, now: number): boolean {
  try {
    return now - statSync(file).mtimeMs < DOWN_MS
  } catch {
    return false
  }
}

async function main(): Promise<void> {
  const root = process.env['CLAUDE_PLUGIN_ROOT']
  if (root === undefined || root === '') return
  const config: unknown = JSON.parse(readFileSync(join(root, 'web.json'), 'utf8'))
  const fields = typeof config === 'object' && config !== null ? (config as Record<string, unknown>) : {}
  const inbox = inboxOf(fields['url'], fields['key'])
  if (inbox === undefined) return

  const now = Date.now()
  const down = downFile(inbox.url)
  // A page that hung a moment ago is not asked again yet: a session at work
  // would start a pile of reporters waiting on it.
  if (isDown(down, now)) return

  const input: unknown = JSON.parse(await readInput())
  const post = eventPostOf(input, process.env)
  if (post === undefined || moduleReports(post.sid, now)) return
  const event = typeof input === 'object' && input !== null ? (input as Record<string, unknown>)['hook_event_name'] : undefined
  try {
    await fetch(inbox.url, {
      method: 'POST',
      headers: { authorization: `Bearer ${inbox.key}`, 'content-type': 'application/json' },
      body: JSON.stringify(post),
      signal: AbortSignal.timeout(WAITED_ON.has(event) ? WAITED_ON_MS : TIMEOUT_MS),
    })
    rmSync(down, { force: true })
  } catch (error) {
    const name = error instanceof Error ? error.name : ''
    if (name === 'TimeoutError' || name === 'AbortError') writeFileSync(down, String(now))
  }
}

main().then(
  () => process.exit(0),
  () => process.exit(0),
)
