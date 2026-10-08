// Agent Café, the web page's server. Sessions report to /in (with the
// reporting key); a person who knows the password watches the café at /, which
// /events keeps up to date as it changes.
//
//   CAFE_INGEST_KEY=… CAFE_VIEW_KEY=… bun web/server.ts
//
// Settings, all from the environment:
//   CAFE_INGEST_KEY  the key reports must carry; web.json's `key` (16+ characters)
//   CAFE_VIEW_KEY    the password for the page; a different one (16+ characters)
//   PORT             where it listens, 8080 by default; HOST, 0.0.0.0 by default
//   TZ               the time zone times of day are shown in (Asia/Taipei, say)
//   CAFE_DEBUG=1     log every report that comes in (what the café is told, not who sent it)
//
// It keeps everything in memory: after a restart the café fills again as the
// sessions next report.

import { createHash, createHmac, timingSafeEqual } from 'node:crypto'
import { readFileSync } from 'node:fs'
import type { IncomingMessage, ServerResponse } from 'node:http'
import { createServer } from 'node:http'
import { fileURLToPath } from 'node:url'

import { wordsFor } from '../hooks/i18n'
import type { Post } from '../hooks/wire'
import { parsePost } from '../hooks/wire'
import { createHall, receive, tidyHall } from './hall'
import type { View } from './look'
import { columnsFor, viewOf } from './look'
import { ICON, cafePage, doorPage } from './page'
import { pageWordsFor } from './words'

const PORT = Number(process.env['PORT'] ?? 8080)
const HOST = process.env['HOST'] ?? '0.0.0.0'
const INGEST_KEY = (process.env['CAFE_INGEST_KEY'] ?? '').trim()
const VIEW_KEY = (process.env['CAFE_VIEW_KEY'] ?? '').trim()
const TIME_ZONE = process.env['TZ'] || undefined
const DEBUG = process.env['CAFE_DEBUG'] === '1'

/** The shortest key the server starts with. */
const MIN_KEY = 16
/** How often the café is tidied: the finished leave, the quiet go. */
const TIDY_MS = 2_000
/** Reports that come close together are drawn once. */
const SETTLE_MS = 150
/** A page's stream gets a word at least this often, so nothing between closes it as idle. */
const PING_MS = 25_000
/** The most of a report read. */
const MAX_BODY = 256 * 1024
/** The most pages watching at once. */
const MAX_WATCHERS = 64
/** A pass to the café lasts this long. */
const PASS_DAYS = 30
/** Wrong passwords from one address, and from everyone together, before the door stays shut a while. */
const MAX_MISSES = 8
const MAX_ALL_MISSES = 40
const MISS_WINDOW_MS = 15 * 60_000
/** The most addresses whose wrong passwords are counted one by one. */
const MAX_COUNTED = 2_000

const PASS = 'cafe_pass'
const LANG = 'cafe_lang'

if (INGEST_KEY.length < MIN_KEY || VIEW_KEY.length < MIN_KEY || INGEST_KEY === VIEW_KEY) {
  console.error(
    `Agent Café: set CAFE_INGEST_KEY and CAFE_VIEW_KEY, two different keys of ${MIN_KEY} characters or more ` +
      '(openssl rand -hex 24 makes one).',
  )
  process.exit(1)
}

const ASSETS: ReadonlyMap<string, { type: string; body: string }> = new Map([
  ['/style.css', { type: 'text/css; charset=utf-8', body: readFileSync(fileURLToPath(new URL('public/style.css', import.meta.url)), 'utf8') }],
  ['/app.js', { type: 'text/javascript; charset=utf-8', body: readFileSync(fileURLToPath(new URL('public/app.js', import.meta.url)), 'utf8') }],
  ['/icon.svg', { type: 'image/svg+xml', body: ICON }],
])

const SECURITY_HEADERS: Readonly<Record<string, string>> = {
  'content-security-policy':
    "default-src 'none'; script-src 'self'; style-src 'self'; img-src 'self' blob:; connect-src 'self'; " +
    "base-uri 'none'; form-action 'self'; frame-ancestors 'none'",
  'x-content-type-options': 'nosniff',
  'referrer-policy': 'no-referrer',
  'x-frame-options': 'DENY',
  'cross-origin-opener-policy': 'same-origin',
}

const hall = createHall()
/** Bumped at every change: views are made once per change for each kind of page. */
let version = 0
const views = new Map<string, { version: number; view: View; body: string }>()

type Watcher = { res: ServerResponse; lang: string; columns: number; hasMotion: boolean; sent: string }
const watchers = new Set<Watcher>()
const misses = new Map<string, { count: number; since: number }>()
/** Every wrong password of the last while, the addresses taken together. */
let allMisses: number[] = []

function digest(text: string): Buffer {
  return createHash('sha256').update(text).digest()
}

/** Compares two secrets in time that does not depend on where they differ. */
function isSame(given: string, expected: string): boolean {
  return timingSafeEqual(digest(given), digest(expected))
}

/**
 * A pass: when it was given, signed with a key derived from the password.
 * It lasts PASS_DAYS from then, and a new password ends every pass.
 */
const PASS_KEY = createHmac('sha256', VIEW_KEY).update('agent-cafe pass v2').digest()

function signed(issued: string): string {
  return createHmac('sha256', PASS_KEY).update(issued).digest('base64url')
}

function passToken(now: number): string {
  const issued = String(now)
  return `${issued}.${signed(issued)}`
}

function cookiesOf(req: IncomingMessage): Map<string, string> {
  const found = new Map<string, string>()
  for (const part of (req.headers.cookie ?? '').split(';')) {
    const at = part.indexOf('=')
    if (at < 0) continue
    found.set(part.slice(0, at).trim(), part.slice(at + 1).trim())
  }
  return found
}

function hasPass(req: IncomingMessage): boolean {
  const token = cookiesOf(req).get(PASS) ?? ''
  const [issued = '', signature = ''] = token.split('.')
  if (!/^\d{1,15}$/.test(issued) || !isSame(signature, signed(issued))) return false
  const age = Date.now() - Number(issued)
  return age >= -60_000 && age < PASS_DAYS * 86_400_000
}

function langOf(req: IncomingMessage, url: URL): string {
  const asked = url.searchParams.get('lang') ?? cookiesOf(req).get(LANG)
  return asked === 'en' ? 'en' : 'zh-TW'
}

/** True when the page is reached over this machine's own address: cookies then go without `Secure`. */
function isLocal(req: IncomingMessage): boolean {
  const host = (req.headers.host ?? '').replace(/:\d+$/, '')
  return host === 'localhost' || host === '127.0.0.1' || host === '[::1]'
}

function cookie(req: IncomingMessage, name: string, value: string, maxAge: number, httpOnly: boolean): string {
  return (
    `${name}=${value}; Path=/; Max-Age=${maxAge}; SameSite=Lax` +
    (httpOnly ? '; HttpOnly' : '') +
    (isLocal(req) ? '' : '; Secure')
  )
}

/**
 * Who is knocking: the address Cloudflare's tunnel says, else the socket's.
 * Anyone who reaches the port directly can say any address; the count of
 * every wrong password together holds the door for them.
 */
function clientOf(req: IncomingMessage): string {
  const forwarded = req.headers['cf-connecting-ip']
  const said = (Array.isArray(forwarded) ? forwarded[0] : forwarded)?.trim().slice(0, 64)
  const address = said || req.socket.remoteAddress || '?'
  // An IPv6 address is one of many its holder has: counted by its /64.
  return address.includes(':') ? address.split(':').slice(0, 4).join(':') : address
}

/** True for a form sent from another site, which the café takes no orders from. */
function isCrossSite(req: IncomingMessage): boolean {
  const site = req.headers['sec-fetch-site']
  if (site !== undefined) return site !== 'same-origin' && site !== 'none'
  const origin = req.headers.origin
  if (origin === undefined) return false
  try {
    return new URL(origin).host !== req.headers.host
  } catch {
    return true
  }
}

function send(
  res: ServerResponse,
  status: number,
  type: string,
  body: string,
  extra: Readonly<Record<string, string | string[]>> = {},
): void {
  res.writeHead(status, {
    ...SECURITY_HEADERS,
    'content-type': type,
    'cache-control': 'no-store',
    ...extra,
  })
  res.end(body)
}

function readBody(req: IncomingMessage, max: number): Promise<string> {
  return new Promise((resolve, reject) => {
    const chunks: Buffer[] = []
    let size = 0
    req.on('data', (chunk: Buffer) => {
      size += chunk.length
      if (size > max) {
        reject(new Error('too large'))
        req.destroy()
        return
      }
      chunks.push(chunk)
    })
    req.on('end', () => resolve(Buffer.concat(chunks).toString('utf8')))
    req.on('error', reject)
  })
}

/** The view for one kind of page, made once per change of the café. */
function viewFor(lang: string, columns: number, hasMotion: boolean): { view: View; body: string } {
  const key = `${lang}|${columns}|${hasMotion ? 1 : 0}`
  const kept = views.get(key)
  if (kept !== undefined && kept.version === version) return kept
  const view = viewOf(hall, Date.now(), { lang, columns, timeZone: TIME_ZONE, hasMotion })
  // What a page is sent again only when this changed: the clock alone is no news.
  const body = JSON.stringify({ ...view, at: 0 })
  const made = { version, view, body }
  views.set(key, made)
  return made
}

function tell(watcher: Watcher): void {
  const { view, body } = viewFor(watcher.lang, watcher.columns, watcher.hasMotion)
  if (body === watcher.sent) return
  watcher.sent = body
  // The clock as it is sent, not as the view was made: the page counts ages from it.
  watcher.res.write(`event: view\ndata: ${JSON.stringify({ ...view, at: Date.now() })}\n\n`)
}

function changed(): void {
  version += 1
  for (const watcher of watchers) tell(watcher)
}

let settling: ReturnType<typeof setTimeout> | undefined
function changedSoon(): void {
  if (settling !== undefined) return
  settling = setTimeout(() => {
    settling = undefined
    changed()
  }, SETTLE_MS)
}

/** One report in one line, for CAFE_DEBUG. */
function describePost(post: Post): string {
  if (post.kind === 'bye') return `bye ${post.id.slice(0, 8)}`
  if (post.kind === 'snap') return `snap ${post.snap.id.slice(0, 8)} ${post.app} seats=${post.snap.seats.map(seat => `${seat.id.slice(0, 6)}:${seat.phase}`).join(',')}`
  const { ev } = post
  const detail = Object.entries(ev)
    .filter(([key]) => key !== 'e')
    .map(([key, value]) => `${key}=${typeof value === 'string' ? value.slice(0, 24) : JSON.stringify(value)}`)
    .join(' ')
  return `event ${post.sid.slice(0, 8)} ${post.app} ${ev.e} ${detail}`
}

async function takeReport(req: IncomingMessage, res: ServerResponse): Promise<void> {
  const auth = req.headers.authorization ?? ''
  const given = auth.startsWith('Bearer ') ? auth.slice(7).trim() : ''
  if (given === '' || !isSame(given, INGEST_KEY)) {
    send(res, 401, 'text/plain; charset=utf-8', 'unauthorized')
    return
  }
  let raw: string
  try {
    raw = await readBody(req, MAX_BODY)
  } catch {
    send(res, 413, 'text/plain; charset=utf-8', 'too large')
    return
  }
  let value: unknown
  try {
    value = JSON.parse(raw)
  } catch {
    send(res, 400, 'text/plain; charset=utf-8', 'not json')
    return
  }
  const post = parsePost(value)
  if (post === undefined) {
    send(res, 400, 'text/plain; charset=utf-8', 'not a report')
    return
  }
  if (DEBUG) console.log(`report ${describePost(post)}`)
  if (receive(hall, post, Date.now())) changedSoon()
  res.writeHead(204, SECURITY_HEADERS)
  res.end()
}

async function login(req: IncomingMessage, res: ServerResponse): Promise<void> {
  // The whole form first: every count below is read and written after it, in one go.
  const fields = new URLSearchParams(await readBody(req, 4096).catch(() => ''))
  const lang = fields.get('lang') === 'en' ? 'en' : 'zh-TW'
  const page = pageWordsFor(lang)
  if (isCrossSite(req)) {
    send(res, 403, 'text/plain; charset=utf-8', 'not from here')
    return
  }
  const client = clientOf(req)
  const now = Date.now()
  allMisses = allMisses.filter(at => now - at < MISS_WINDOW_MS)
  let record = misses.get(client)
  if (record !== undefined && now - record.since >= MISS_WINDOW_MS) {
    misses.delete(client)
    record = undefined
  }
  if ((record !== undefined && record.count >= MAX_MISSES) || allMisses.length >= MAX_ALL_MISSES) {
    send(res, 429, 'text/html; charset=utf-8', doorPage(wordsFor(lang), page, 'tooMany'))
    return
  }
  if (!isSame(fields.get('key') ?? '', VIEW_KEY)) {
    allMisses.push(now)
    if (record === undefined) {
      if (misses.size >= MAX_COUNTED) misses.delete(misses.keys().next().value ?? '')
      misses.set(client, { count: 1, since: now })
    } else {
      record.count += 1
    }
    send(res, 401, 'text/html; charset=utf-8', doorPage(wordsFor(lang), page, 'wrong'))
    return
  }
  misses.delete(client)
  res.writeHead(303, {
    ...SECURITY_HEADERS,
    location: '/',
    'set-cookie': [cookie(req, PASS, passToken(now), PASS_DAYS * 86_400, true), cookie(req, LANG, lang, 365 * 86_400, false)],
  })
  res.end()
}

function watch(req: IncomingMessage, res: ServerResponse, url: URL): void {
  if (watchers.size >= MAX_WATCHERS) {
    send(res, 503, 'text/plain; charset=utf-8', 'too many pages open')
    return
  }
  res.writeHead(200, {
    ...SECURITY_HEADERS,
    'content-type': 'text/event-stream; charset=utf-8',
    'cache-control': 'no-store, no-transform',
    'x-accel-buffering': 'no',
    connection: 'keep-alive',
  })
  res.write('retry: 3000\n\n')
  const watcher: Watcher = {
    res,
    lang: url.searchParams.get('lang') === 'en' ? 'en' : 'zh-TW',
    columns: columnsFor(url.searchParams.get('cols')),
    hasMotion: url.searchParams.get('motion') !== '0',
    sent: '',
  }
  watchers.add(watcher)
  tell(watcher)
  req.on('close', () => watchers.delete(watcher))
}

async function route(req: IncomingMessage, res: ServerResponse): Promise<void> {
  const url = new URL(req.url ?? '/', 'http://cafe')
  const { pathname } = url
  const method = req.method ?? 'GET'

  if (method === 'POST' && pathname === '/in') return takeReport(req, res)
  if (method === 'GET' && pathname === '/healthz') return send(res, 200, 'text/plain; charset=utf-8', 'ok')
  const asset = ASSETS.get(pathname)
  if (method === 'GET' && asset !== undefined) {
    return send(res, 200, asset.type, asset.body, { 'cache-control': 'no-cache' })
  }
  if (method === 'POST' && pathname === '/login') return login(req, res)
  if (method === 'POST' && pathname === '/logout') {
    if (isCrossSite(req)) return send(res, 403, 'text/plain; charset=utf-8', 'not from here')
    res.writeHead(303, { ...SECURITY_HEADERS, location: '/', 'set-cookie': cookie(req, PASS, '', 0, true) })
    res.end()
    return
  }
  if (method === 'GET' && pathname === '/') {
    const lang = langOf(req, url)
    const words = wordsFor(lang)
    const page = pageWordsFor(lang)
    const remember: Record<string, string> = url.searchParams.has('lang')
      ? { 'set-cookie': cookie(req, LANG, lang, 365 * 86_400, false) }
      : {}
    if (!hasPass(req)) return send(res, 200, 'text/html; charset=utf-8', doorPage(words, page, ''), remember)
    return send(res, 200, 'text/html; charset=utf-8', cafePage(words, page), remember)
  }
  if (method === 'GET' && (pathname === '/events' || pathname === '/api/view')) {
    if (!hasPass(req)) return send(res, 401, 'text/plain; charset=utf-8', 'sign in first')
    if (pathname === '/events') return watch(req, res, url)
    const lang = url.searchParams.get('lang') === 'en' ? 'en' : 'zh-TW'
    const { view } = viewFor(lang, columnsFor(url.searchParams.get('cols')), url.searchParams.get('motion') !== '0')
    return send(res, 200, 'application/json; charset=utf-8', JSON.stringify({ ...view, at: Date.now() }))
  }
  send(res, 404, 'text/plain; charset=utf-8', 'not here')
}

const server = createServer((req, res) => {
  route(req, res).catch(error => {
    console.error('Agent Café:', error)
    if (!res.headersSent) send(res, 500, 'text/plain; charset=utf-8', 'something went wrong')
    else res.end()
  })
})

setInterval(() => {
  const now = Date.now()
  if (tidyHall(hall, now)) changed()
  for (const [client, record] of misses) {
    if (now - record.since >= MISS_WINDOW_MS) misses.delete(client)
  }
}, TIDY_MS)

setInterval(() => {
  for (const watcher of watchers) watcher.res.write(': ping\n\n')
}, PING_MS)

server.listen(PORT, HOST, () => {
  console.log(`Agent Café is open on http://${HOST}:${PORT}`)
})
