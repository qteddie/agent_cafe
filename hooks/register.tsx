// Agent Café: every agent of your Claude Code sessions, main loop and subagents
// alike, seated in a café pane that shows what each one is doing right now.
// `/cafe` opens it.
//
// This file is the only one that talks to Claude Code. It listens (tool calls,
// turns, spawns, permission prompts), keeps a roster of who is doing what,
// shares it with the person's other sessions through the store, and draws the
// pane. What a tool call means is in describe.ts, the roster in tracker.ts,
// who sits where in view.ts, the picture in scene.ts, the words in i18n.ts.
//
// Every hook here only watches: it passes its event on untouched, and a slip
// in the café's own bookkeeping is caught, so it never costs a tool call.
//
// Claude Code reads this file's source to list what the mod calls, so every
// function that is handed `$` is declared here, at the top level, and takes
// the café's state (Shop) as an argument instead of closing over it.

import type { AgentInfo, Elements, EngineInterface, Register, RenderElement, RenderInput, Timer } from 'claude-code'

import { actOfCall, clip, folderName, label, targetOf, tidy } from './describe'
import type { Words } from './i18n'
import { age, wordsFor } from './i18n'
import type { Scene } from './scene'
import { SOURCE_LIMIT, drawScene, fit } from './scene'
import type { Listed, Phase, Roster } from './tracker'
import {
  ask,
  askOver,
  callThrough,
  createRoster,
  mateIdle,
  reset,
  seatsOf,
  spawn,
  subStart,
  subStop,
  sweep,
  sync,
  toolEnd,
  toolStart,
  turnEnd,
  turnStart,
} from './tracker'
import type { Cafe, Line, Snap } from './view'
import { MARKS, TABLE_SEATS, arrange, linesOf, parseSnap, signatureOf, textOf } from './view'
import type { App, Inbox, Post } from './wire'
import { inboxOf, inboxOfFile, isWebSet } from './wire'

/** The pane's id: what `$.ui.open` names and the render hook's `requestId`. */
const PANE = 'agent-cafe'
/** How often the café looks around: lets the finished go, shares, redraws. */
const TICK_MS = 2_000
/** Every this many looks, the roster is checked against `$.agent.list()`. */
const SYNC_EVERY = 3
/** Every this many looks, while the pane is up, the other sessions' tables are read. */
const LISTEN_EVERY = 2
/** Every this many looks, pane or no pane, the store is read and tidied. */
const TIDY_EVERY = 150
/** A look that has not come back after this long is given up on. */
const STUCK_MS = 30_000
/** A session says it is still here at least this often. */
const BEAT_MS = 15_000
/** A session that has not said so for this long is gone from the café. */
const FRESH_MS = 45_000
/** How far ahead of this session's clock another's table may be dated. */
const SKEW_MS = 5_000
/** What nobody has kept up for this long is removed from the store. */
const DROP_MS = 60 * 60_000
/** After the store refused a read or a write, it is left alone for this long. */
const RETRY_MS = 30_000
/** Each session's key in the store is this and its id. */
const PREFIX = 'table:'
/** Seats a table shows in the picture, tried in order until the markup fits. */
const CAPS: readonly number[] = [TABLE_SEATS, 8, 5, 3, 1]
/** This session's table goes to the web page when it changed, and at least this often. */
const WEB_BEAT_MS = 15_000
/**
 * After the web page refused a report or could not be reached, it is left
 * alone for this long: well inside the 45 s the page keeps a table without one.
 */
const WEB_RETRY_MS = 20_000
/** A report that has not come back after this long is given up on: the next one goes. */
const WEB_STUCK_MS = 30_000

/** The theme color of each phase's mark in the list under the picture. */
const TONES: Readonly<Record<Phase, string>> = {
  think: 'claude',
  work: 'success',
  ask: 'warning',
  idle: 'inactive',
  done: 'success',
  fail: 'error',
}

/**
 * The café's state for one load of the mod. It lives in the module, not in
 * `$.state`: a tool call then costs no round trip to the host beyond reading
 * the clock. A reload starts it over, and `$.agent.list()` seats whoever is
 * still running again.
 */
type Shop = {
  readonly words: Words
  /** Whether the person's other sessions are seated too (`share_sessions`). */
  readonly isSharing: boolean
  /** Whether the picture moves (`motion`). */
  readonly hasMotion: boolean
  /** This session's agents; made at the first event, when the time is known. */
  roster: Roster | undefined
  /** This session's table name: its folder. */
  title: string
  sessionId: string
  /** True once the session has ended: nothing more is written to the store. */
  isClosed: boolean
  /** The other sessions' tables, as last read from the store. */
  others: Snap[]
  othersMark: string
  /** What this session last wrote to the store, and when. */
  sharedMark: string
  sharedAt: number
  /** The store is left alone until this time, after it refused a call. */
  storeAfter: number
  /** Keys under the café's prefix that it cannot use, and since when. */
  readonly strangers: Map<string, number>
  /** The timer behind `tick`, kept so a second start replaces it. */
  timer: Timer | undefined
  looks: number
  isLooking: boolean
  /** When the look in progress began, on the process's own clock. */
  lookingSince: number
  /** The ages the list last showed: the pane is drawn again when they move on. */
  agesDrawn: string
  /** The last picture drawn for each width, kept while the café looks the same. */
  readonly pictures: Map<string, { mark: string; scene: Scene | undefined }>
  /** Where the café's web page takes reports, as web.json sets it up; undefined without one. */
  web: Inbox | undefined
  /** The app this session runs in, as the web page names it. */
  app: App
  /** What this session last reported to the web page, and when. */
  webMark: string
  webAt: number
  /** The web page is left alone until this time, after it refused a report. */
  webAfter: number
  /** True while a report is on its way, since `reportingSince`: the next waits for it. */
  isReporting: boolean
  reportingSince: number
}

function openShop(language: unknown, isSharing: boolean, hasMotion: boolean): Shop {
  return {
    words: wordsFor(language),
    isSharing,
    hasMotion,
    roster: undefined,
    title: '',
    sessionId: '',
    isClosed: false,
    others: [],
    othersMark: '',
    sharedMark: '',
    sharedAt: 0,
    storeAfter: 0,
    strangers: new Map(),
    timer: undefined,
    looks: 0,
    isLooking: false,
    lookingSince: 0,
    agesDrawn: '',
    pictures: new Map(),
    web: undefined,
    app: '',
    webMark: '',
    webAt: 0,
    webAfter: 0,
    isReporting: false,
    reportingSince: 0,
  }
}

/** The app a session runs in, from the surfaces it draws on. */
function appOfSurfaces(surfaces: readonly string[]): App {
  if (surfaces.includes('desktop')) return 'code'
  if (surfaces.includes('vscode')) return 'vscode'
  if (surfaces.includes('terminal')) return 'cli'
  return ''
}

/** A name as the café keeps one: fit to show, and no longer than a name is. */
function nameOf(text: string): string {
  return label(text, 40)
}

/** A task's few words as the café keeps them. */
function taskOf(text: string): string {
  return label(text, 80)
}

/** A tool call's arguments as a record, whatever was handed over. */
function inputOf(value: unknown): Readonly<Record<string, unknown>> {
  return typeof value === 'object' && value !== null ? (value as Readonly<Record<string, unknown>>) : {}
}

/** One agent of the engine's list, its strings made fit to show. */
function tame(info: AgentInfo): Listed {
  return {
    id: info.id,
    type: nameOf(info.type),
    description: taskOf(info.description),
    status: info.status,
    ...(info.parentId === undefined ? {} : { parentId: info.parentId }),
    ...(info.name === undefined ? {} : { name: nameOf(info.name) }),
    ...(info.teammateId === undefined ? {} : { teammateId: info.teammateId }),
  }
}

function seated(shop: Shop, now: number): Roster {
  shop.roster ??= createRoster(now)
  return shop.roster
}

/** This session's table as the others will read it. */
function here(shop: Shop, now: number): Snap {
  return {
    v: 1,
    id: shop.sessionId === '' ? 'here' : shop.sessionId,
    title: shop.title,
    at: now,
    seats: seatsOf(seated(shop, now)),
  }
}

/** Everyone seated: this session's table, then the others'. */
function cafeOf(shop: Shop, now: number, viewed?: string, cap: number = TABLE_SEATS): Cafe {
  return arrange(here(shop, now), shop.isSharing ? shop.others : [], shop.words, viewed, cap)
}

/**
 * The café as text. A command's text is read by the model as well as the
 * person, so it tells of this session alone and only counts the others: what
 * another session's agents wrote stays out of this one's conversation.
 */
function tellOf(shop: Shop, now: number): string {
  const own = here(shop, now)
  const text = textOf(arrange(own, [], shop.words), shop.words, now)
  const others = shop.isSharing ? shop.others.filter(snap => snap.id !== own.id && snap.seats.length > 0) : []
  if (others.length === 0) return text
  const seats = others.reduce((sum, snap) => sum + snap.seats.length, 0)
  return `${text}\n${shop.words.elsewhere(others.length, seats)}`
}

/** How long every seat has been at what it does, as the list words it. */
function agesOf(shop: Shop, now: number): string {
  return [here(shop, now), ...(shop.isSharing ? shop.others : [])]
    .flatMap(snap => snap.seats.map(seat => age(now - seat.since)))
    .join(' ')
}

/** The picture for a pane this wide, drawn again only when the café changed. */
function pictureOf(
  shop: Shop,
  cafe: Cafe,
  now: number,
  bodyColumns: number,
  viewed: string | undefined,
): Scene | undefined {
  const { columns, scale } = fit(bodyColumns)
  const slot = `${columns}@${scale}`
  const mark = signatureOf(cafe)
  const kept = shop.pictures.get(slot)
  if (kept !== undefined && kept.mark === mark) return kept.scene

  let scene: Scene | undefined
  for (const cap of CAPS) {
    const shown = cap === TABLE_SEATS ? cafe : cafeOf(shop, now, viewed, cap)
    const drawn = drawScene(shown, { columns, scale, words: shop.words, hasMotion: shop.hasMotion })
    if (drawn.source.length <= SOURCE_LIMIT) {
      scene = drawn
      break
    }
  }
  if (shop.pictures.size >= 8) shop.pictures.clear()
  shop.pictures.set(slot, { mark, scene })
  return scene
}

function whisper($: EngineInterface, error: unknown): void {
  try {
    $.ui.log(`could not keep up: ${String(error)}`, { to: 'debug' })
  } catch {
    // Nothing left to tell.
  }
}

/** Applies one change to the roster and asks for a redraw. Never throws. */
async function note(
  $: EngineInterface,
  shop: Shop,
  change: (roster: Roster, now: number) => void,
): Promise<void> {
  try {
    const now = await $.clock.now()
    change(seated(shop, now), now)
    $.ui.invalidate('ui.render')
  } catch (error) {
    whisper($, error)
  }
}

/**
 * Checks the roster against the engine's own list of agents. True when it
 * changed; false, too, when the list could not be read.
 */
async function look($: EngineInterface, shop: Shop, now: number): Promise<boolean> {
  try {
    const roster = seated(shop, now)
    const before = JSON.stringify(seatsOf(roster))
    sync(roster, (await $.agent.list()).map(tame), now)
    return JSON.stringify(seatsOf(roster)) !== before
  } catch (error) {
    whisper($, error)
    return false
  }
}

/**
 * Writes this session's table to the store, when it changed or a beat is due.
 * A store that refuses is left alone for a while, and nothing else waits on it.
 */
async function share($: EngineInterface, shop: Shop, now: number): Promise<void> {
  if (shop.isClosed || now < shop.storeAfter) return
  try {
    const seats = seatsOf(seated(shop, now))
    const mark = JSON.stringify([shop.title, seats])
    if (mark === shop.sharedMark && now - shop.sharedAt < BEAT_MS) return
    // Read each time: a /clear or a resume carries the session on under a new id.
    const id = await $.session.id()
    // The session may have ended while that was asked: its table is not written back.
    if (shop.isClosed) return
    if (shop.sessionId !== '' && shop.sessionId !== id) await $.store.delete(PREFIX + shop.sessionId)
    shop.sessionId = id
    // `web`: when this session's table last reached the web page. The hook
    // reporter (scripts/report.mjs) reads it and leaves the reporting to this
    // module while it is recent.
    const snap: Snap & { web?: number } = {
      v: 1,
      id,
      title: shop.title,
      at: now,
      seats,
      ...(shop.web === undefined ? {} : { web: shop.webAt }),
    }
    await $.store.set(PREFIX + id, snap)
    shop.sharedMark = mark
    shop.sharedAt = now
  } catch (error) {
    shop.storeAfter = now + RETRY_MS
    whisper($, error)
  }
}

/**
 * Reads the other sessions' tables from the store, and clears away what
 * nobody keeps up. True when the tables changed; false when they could not be
 * read.
 */
async function listen($: EngineInterface, shop: Shop, now: number): Promise<boolean> {
  if (now < shop.storeAfter) return false
  try {
    const found: Snap[] = []
    const strange = new Set<string>()
    for (const key of await $.store.keys()) {
      if (!key.startsWith(PREFIX) || key === PREFIX + shop.sessionId) continue
      const snap = parseSnap(await $.store.get(key))
      // How long ago it was written; no number at all for what cannot be read.
      const since = snap === undefined ? Number.NaN : now - snap.at
      if (snap !== undefined && since >= -SKEW_MS && since < FRESH_MS) {
        found.push(snap)
      } else if (since > DROP_MS) {
        // Its session is long gone and did not get to remove it.
        await $.store.delete(key)
      } else if (!(since >= FRESH_MS)) {
        // Unreadable, or dated ahead of this clock: no telling how old it is.
        // It is given an hour from when the café first saw it so.
        strange.add(key)
        const first = shop.strangers.get(key) ?? now
        shop.strangers.set(key, first)
        if (now - first > DROP_MS) await $.store.delete(key)
      }
    }
    for (const key of [...shop.strangers.keys()]) {
      if (!strange.has(key)) shop.strangers.delete(key)
    }
    const mark = JSON.stringify(found.map(snap => [snap.id, snap.title, snap.seats]))
    const hasNews = mark !== shop.othersMark
    shop.others = found
    shop.othersMark = mark
    return hasNews
  } catch (error) {
    shop.storeAfter = now + RETRY_MS
    whisper($, error)
    return false
  }
}

/**
 * Where the café's web page takes reports: the plugin's settings (`web_url`
 * and `web_key`, set with `claude plugin configure`) once `web_url` is filled
 * in, or else web.json, beside the plugin's manifest folder, as
 * `{ "url": "https://…", "key": "…" }`. Undefined without either, or with one
 * that does not say both.
 */
async function readInbox($: EngineInterface, url: unknown, key: unknown): Promise<Inbox | undefined> {
  try {
    if (isWebSet(url)) {
      const inbox = inboxOf(url, key)
      if (inbox === undefined) whisper($, 'the web_url and web_key settings do not name an https address and a key')
      return inbox
    }
    const path = `${$.plugin.root}/web.json`
    if (!(await $.fs.exists(path))) return undefined
    const inbox = inboxOfFile(JSON.parse(String(await $.fs.read(path))))
    if (inbox === undefined) whisper($, 'web.json does not name an https address and a key')
    return inbox
  } catch (error) {
    whisper($, error)
    return undefined
  }
}

/** Posts one report to the web page. True when the page took it. Never throws. */
async function send($: EngineInterface, web: Inbox, post: Post): Promise<boolean> {
  try {
    const answer = await $.http.fetch(web.url, {
      method: 'POST',
      headers: { authorization: `Bearer ${web.key}`, 'content-type': 'application/json' },
      body: JSON.stringify(post),
    })
    if (!answer.ok) whisper($, `the web page answered ${answer.status}`)
    return answer.ok
  } catch (error) {
    whisper($, error)
    return false
  }
}

/**
 * Sends this session's table to the café's web page, when it changed or a
 * beat is due. Nobody waits on it: a page slow to answer holds up nothing
 * here, and one that refuses is left alone for a while.
 */
async function report($: EngineInterface, shop: Shop, now: number): Promise<void> {
  const { web } = shop
  if (web === undefined || shop.isClosed || now < shop.webAfter) return
  if (shop.isReporting && now - shop.reportingSince < WEB_STUCK_MS) return
  shop.isReporting = true
  shop.reportingSince = now
  try {
    const seats = seatsOf(seated(shop, now))
    const mark = JSON.stringify([shop.title, seats])
    if (mark === shop.webMark && now - shop.webAt < WEB_BEAT_MS) return
    // Read each time: a /clear or a resume carries the session on under a new id.
    const id = await $.session.id()
    if (shop.app === '') shop.app = appOfSurfaces(await $.session.surfaces())
    if (shop.isClosed) return
    const snap: Snap = { v: 1, id, title: shop.title, at: now, seats }
    if (await send($, web, { v: 1, kind: 'snap', app: shop.app, link: '', snap })) {
      shop.webMark = mark
      shop.webAt = now
    } else {
      shop.webAfter = now + WEB_RETRY_MS
    }
  } catch (error) {
    whisper($, error)
  } finally {
    // A report given up on that comes back late leaves the newer one's mark alone.
    if (shop.reportingSince === now) shop.isReporting = false
  }
}

/** One look around: runs on a timer for as long as the mod is loaded. */
async function tick($: EngineInterface, shop: Shop): Promise<void> {
  // One look at a time; one that never came back is given up on after a while.
  const started = performance.now()
  if (shop.isLooking && started - shop.lookingSince < STUCK_MS) return
  shop.isLooking = true
  shop.lookingSince = started
  try {
    shop.looks += 1
    const now = await $.clock.now()
    const roster = seated(shop, now)
    let hasNews = sweep(roster, now)
    // With the main loop resting alone there is nobody to check on.
    const isQuiet = roster.agents.every(
      agent => agent.kind === 'main' && (agent.phase === 'idle' || agent.phase === 'fail'),
    )
    if (!isQuiet && shop.looks % SYNC_EVERY === 0) hasNews = (await look($, shop, now)) || hasNews

    let isUp = false
    try {
      isUp = (await $.ui.panes()).some(pane => pane.id === PANE)
    } catch (error) {
      whisper($, error)
    }
    if (shop.isSharing) {
      await share($, shop, now)
      const isDue = (isUp && shop.looks % LISTEN_EVERY === 0) || shop.looks % TIDY_EVERY === 0
      if (isDue) hasNews = (await listen($, shop, now)) || hasNews
    }
    // On its own: the look goes on while the report is under way.
    void report($, shop, now)
    if (hasNews || (isUp && agesOf(shop, now) !== shop.agesDrawn)) $.ui.invalidate('ui.render')
  } catch (error) {
    whisper($, error)
  } finally {
    shop.isLooking = false
  }
}

export const register: Register = (on, options) => {
  const shop = openShop(options['language'], options['share_sessions'] !== false, options['motion'] !== false)
  const { words } = shop

  // ---------------------------------------------------------------------------
  // The session: set up, and clean up.

  on('session.start', async ($, e, next) => {
    // Each step stands on its own: one that fails leaves the rest working.
    try {
      shop.isClosed = false
      shop.title = folderName(e.cwd)
      const now = await $.clock.now()
      seated(shop, now)
      shop.sessionId = await $.session.id()
      shop.app = appOfSurfaces(await $.session.surfaces())
      // Whoever was already running when the mod loaded takes a seat.
      await look($, shop, now)
    } catch (error) {
      whisper($, error)
    }
    // Read at each start: a reload, or a new web.json, takes effect there.
    shop.web = await readInbox($, options['web_url'], options['web_key'])
    try {
      shop.timer?.cancel()
      shop.timer = $.clock.every(TICK_MS, () => {
        void tick($, shop)
      })
    } catch (error) {
      whisper($, error)
    }
    try {
      await $.command.register({
        name: 'cafe',
        description: words.command,
        argumentHint: '[text|close]',
        immediate: true,
      })
    } catch (error) {
      whisper($, error)
    }
    return next(e)
  })

  on('session.end', async ($, e, next) => {
    // Each step stands on its own: a store that refuses does not keep the roster as it was.
    const carriesOn = e.reason === 'clear' || e.reason === 'resume'
    // Any other end is the process's own: from here on nothing is shared, so
    // that no look still under way writes the table back once it is removed.
    if (!carriesOn) shop.isClosed = true
    try {
      if (carriesOn) {
        // The process goes on under another id, with a new conversation. The
        // agents it had running are still its own, and go on or stop as they will.
        const now = await $.clock.now()
        reset(seated(shop, now), now)
        shop.sharedMark = ''
        $.ui.invalidate('ui.render')
      }
    } catch (error) {
      whisper($, error)
    }
    try {
      if (shop.isSharing) await $.store.delete(PREFIX + e.sessionId)
    } catch (error) {
      whisper($, error)
    }
    // The web page clears this table now rather than when its reports stop.
    // A clear or a resume reports again, under the new id, at the next look.
    if (shop.web !== undefined) {
      shop.webMark = ''
      await send($, shop.web, { v: 1, kind: 'bye', id: e.sessionId })
    }
    return next(e)
  })

  on('command.run', { command: 'cafe' }, async ($, e) => {
    let now = 0
    try {
      now = await $.clock.now()
      const wish = e.args.trim().toLowerCase()
      if (wish === 'close') {
        await $.ui.close({ id: PANE })
        return {}
      }
      if (wish !== '' && wish !== 'open' && wish !== 'text') return { text: words.usage }

      // Catch up first, so the café opens with everyone in it. Each of these
      // keeps its own failure to itself: none is worth the command.
      await look($, shop, now)
      if (shop.isSharing) {
        await share($, shop, now)
        await listen($, shop, now)
      }
      if (wish === 'text') return { text: tellOf(shop, now) }

      const opened = await $.ui.open({ id: PANE, title: words.title })
      $.ui.invalidate('ui.render')
      if (!opened.isPlaced) return { text: `${words.noPane}\n${tellOf(shop, now)}` }
      // Where nothing draws (a headless run) a pane is placed and never seen.
      const surfaces = await $.session.surfaces()
      return surfaces.length === 0 ? { text: tellOf(shop, now) } : {}
    } catch (error) {
      whisper($, error)
      return { text: tellOf(shop, now) }
    }
  })

  // ---------------------------------------------------------------------------
  // What the agents do. `agentId` names a subagent's loop; the main loop has none.

  on('turn.start', async ($, e, next) => {
    // A turn is proof enough that the session lives, whatever ended before.
    shop.isClosed = false
    await note($, shop, (roster, now) => turnStart(roster, now))
    return next(e)
  })

  on('turn.complete', async ($, e, next) => {
    await note($, shop, (roster, now) => turnEnd(roster, e.agentId, e.reason, now))
    return next(e)
  })

  on('tool.call', async ($, e, next) => {
    const id = e.tool_use_id
    const agentId = e.agentId
    await note($, shop, (roster, now) => {
      const tool = clip(tidy(String(e.tool)), 80)
      const input = inputOf(e)
      toolStart(roster, agentId, { id, tool, act: actOfCall(tool, input), target: targetOf(tool, input) }, now)
    })
    try {
      return await next(e)
    } finally {
      await note($, shop, (roster, now) => toolEnd(roster, agentId, id, now))
    }
  })

  on('agent.spawn', async ($, e, next) => {
    const started = await next(e)
    const id = 'agentId' in started ? started.agentId : undefined
    if (id !== undefined) {
      await note($, shop, (roster, now) => {
        spawn(
          roster,
          {
            id,
            type: nameOf(e.subagentType),
            task: taskOf(e.description),
            parent: e.parentAgentId ?? '',
            name: nameOf(e.name ?? ''),
            isTeammate: e.isTeammate === true,
          },
          now,
        )
        // The Agent call that asked for it got through: a prompt about it is answered.
        if (typeof e.tool_use_id === 'string') callThrough(roster, e.parentAgentId, e.tool_use_id, now)
      })
    }
    return started
  })

  on('classic.SubagentStart', async ($, e, next) => {
    await note($, shop, (roster, now) => subStart(roster, e.agent_id, nameOf(e.agent_type), now))
    return next(e)
  })

  on('classic.SubagentStop', async ($, e, next) => {
    const answer = await next(e)
    // A hook that blocks the stop keeps the subagent going.
    if (answer.block === undefined) await note($, shop, (roster, now) => subStop(roster, e.agent_id, now))
    return answer
  })

  on('classic.TeammateIdle', async ($, e, next) => {
    await note($, shop, (roster, now) => mateIdle(roster, nameOf(e.teammate_name), now))
    return next(e)
  })

  // ---------------------------------------------------------------------------
  // Who is waiting for the person.

  on('classic.PermissionRequest', async ($, e, next) => {
    // The event fires when the person is about to be asked: mark the call now,
    // and take the mark back if a hook beneath answers in their place.
    let hasMarked = false
    let held: string | undefined
    await note($, shop, (roster, now) => {
      const tool = clip(tidy(e.tool_name), 80)
      held = ask(roster, e.agent_id, tool, targetOf(tool, inputOf(e.tool_input)), now)
      hasMarked = true
    })
    const answer = await next(e)
    if (hasMarked && (answer.decision !== undefined || answer.block !== undefined)) {
      await note($, shop, (roster, now) => askOver(roster, e.agent_id, held, now))
    }
    return answer
  })

  on('classic.PermissionDenied', async ($, e, next) => {
    await note($, shop, (roster, now) => askOver(roster, e.agent_id, e.tool_use_id, now))
    return next(e)
  })

  on('classic.Elicitation', async ($, e, next) => {
    await note($, shop, (roster, now) => {
      ask(roster, e.agent_id, '', '', now)
    })
    return next(e)
  })

  on('classic.ElicitationResult', async ($, e, next) => {
    await note($, shop, (roster, now) => askOver(roster, e.agent_id, undefined, now))
    return next(e)
  })

  // ---------------------------------------------------------------------------
  // The pane: the picture where the surface draws one, and the list under it.

  on('ui.render', { component: 'Pane', requestId: PANE }, async ($, e) => {
    try {
      return await paneOf($, e, shop)
    } catch (error) {
      // A pane whose drawing throws is closed: draw the name alone instead.
      whisper($, error)
      const { Text } = $.ui.resolve(e)
      return <Text dimColor>{words.title}</Text>
    }
  })
}

/** The pane's tree: the picture where the surface draws one, and the list under it. */
async function paneOf($: EngineInterface, e: RenderInput<'Pane'>, shop: Shop): Promise<RenderElement> {
  const { words } = shop
  const now = await $.clock.now()
  // Read with care: an older surface may hand over fewer props than this build's.
  const viewed = e.props.view?.agentId
  const cafe = cafeOf(shop, now, viewed)
  const lines = linesOf(cafe, words, now)
  const tally = words.tally(cafe.busy, cafe.asking, cafe.idle)
  shop.agesDrawn = agesOf(shop, now)

  if (e.surface === 'terminal') {
    const { Box, Text } = $.ui.resolve(e)
    return (
      <Box flexDirection="column">
        <Text wrap="wrap">
          <Text bold color="claude">
            {words.title}
          </Text>
          <Text dimColor>{`  ${tally}`}</Text>
        </Text>
        {lines.map(line => rowOf(Text, line))}
        {cafe.hiddenTables > 0 && <Text dimColor>{words.moreTables(cafe.hiddenTables)}</Text>}
        {legendOf(Text, words.legend)}
      </Box>
    )
  }

  const { Box, Text, Svg } = $.ui.resolve(e)
  const scene = pictureOf(shop, cafe, now, e.props.bodyColumns, viewed)
  return (
    <Box flexDirection="column" rowGap={1}>
      {scene === undefined ? (
        <Text bold color="claude">
          {`${words.title}  ${tally}`}
        </Text>
      ) : (
        // The frame lets the picture move and its seats show a tooltip; without
        // motion it is a plain image, the surest thing a surface draws.
        <Svg source={scene.source} alt={scene.alt} {...(shop.hasMotion ? { isInteractive: true } : {})} />
      )}
      <Box flexDirection="column">
        {lines.map(line => rowOf(Text, line))}
        {cafe.hiddenTables > 0 && <Text dimColor>{words.moreTables(cafe.hiddenTables)}</Text>}
      </Box>
      {legendOf(Text, words.legend)}
    </Box>
  )
}

/** `Text`, as every surface's table has it. */
type TextTag = Elements['terminal']['Text']

/** One line of the list: a table's name, or a seat with its mark in its phase's color. */
function rowOf(Text: TextTag, line: Line): RenderElement {
  if (line.type === 'table') {
    return (
      <Text bold wrap="wrap">
        {line.text}
      </Text>
    )
  }
  return (
    <Text wrap="wrap">
      <Text color={TONES[line.phase]}>{`${line.indent}${MARKS[line.phase]} `}</Text>
      <Text bold>{line.label}</Text>
      {line.note !== '' && <Text dimColor>{line.note}</Text>}
      {line.phase === 'ask' ? <Text color="warning">{`  ${line.says}`}</Text> : <Text>{`  ${line.says}`}</Text>}
      <Text dimColor>{`  ${whole(line.tail)}`}</Text>
    </Text>
  )
}

/** Text that wraps as one word: its spaces are no place to break a line. */
function whole(text: string): string {
  return text.replaceAll(' ', '\u00a0')
}

/** What the marks mean, in one dim line. */
function legendOf(Text: TextTag, legend: readonly [string, string, string, string]): RenderElement {
  const [think, work, held, idle] = legend
  return (
    <Text dimColor wrap="wrap">
      <Text color={TONES.think}>{MARKS.think}</Text>
      {` ${think}  `}
      <Text color={TONES.work}>{MARKS.work}</Text>
      {` ${work}  `}
      <Text color={TONES.ask}>{MARKS.ask}</Text>
      {` ${held}  `}
      <Text color={TONES.idle}>{MARKS.idle}</Text>
      {` ${idle}`}
    </Text>
  )
}
