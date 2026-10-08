// The web page's own words, in Traditional Chinese and in English. The café's
// words (what a seat is doing, the tally) are hooks/i18n.ts's.

import type { Lang } from '../hooks/i18n'
import type { App } from '../hooks/wire'

export type PageWords = {
  lang: Lang
  /** The page's subtitle. */
  tagline: string
  busy: string
  asking: string
  idle: string
  /** Said while no session has reported. */
  empty: string
  emptyHint: string
  /** The live dot's states. */
  live: string
  retrying: string
  /** The app a session runs in. */
  apps: Readonly<Record<App, string>>
  /** A session whose reporter knew no name: its app and when it took a seat. */
  untitled: (app: string, time: string) => string
  /** When the café first heard of a session. */
  started: (time: string) => string
  /** The link to a session on claude.ai. */
  open: string
  /** How a session reports, in a tooltip. */
  viaMod: string
  viaHooks: string
  /** Said of tables the picture has no room for. */
  offPicture: string
  /** The login form. */
  password: string
  enter: string
  wrong: string
  tooMany: string
  signOut: string
  /** The other language, as its toggle reads. */
  other: string
}

const ZH: PageWords = {
  lang: 'zh-TW',
  tagline: '每個 session 的每個 agent，現在在做什麼',
  busy: '忙',
  asking: '等你',
  idle: '閒',
  empty: '咖啡廳還沒有客人',
  emptyHint: '開一個 session 開始工作，這裡就會有人坐下。',
  live: '即時',
  retrying: '重新連線中…',
  apps: {
    claude: 'Claude',
    code: 'Code 桌面',
    cloud: 'Code 雲端',
    cli: '終端機',
    vscode: 'VS Code',
    sdk: 'SDK',
    '': 'Claude Code',
  },
  untitled: (app, time) => `${app} · ${time}`,
  started: time => `${time} 入座`,
  open: '開啟',
  viaMod: '由 mod 回報整桌狀態',
  viaHooks: '由 hooks 逐筆回報',
  offPicture: '畫面放不下，只列在這裡',
  password: '密碼',
  enter: '進入',
  wrong: '密碼不對',
  tooMany: '試太多次了，請過幾分鐘再試',
  signOut: '登出',
  other: 'EN',
}

const EN: PageWords = {
  lang: 'en',
  tagline: 'What every agent in every session is doing right now',
  busy: 'busy',
  asking: 'need you',
  idle: 'idle',
  empty: 'No one here yet',
  emptyHint: 'Start a session and its agents take a seat here.',
  live: 'Live',
  retrying: 'Reconnecting…',
  apps: {
    claude: 'Claude',
    code: 'Code desktop',
    cloud: 'Code cloud',
    cli: 'Terminal',
    vscode: 'VS Code',
    sdk: 'SDK',
    '': 'Claude Code',
  },
  untitled: (app, time) => `${app} · ${time}`,
  started: time => `seated ${time}`,
  open: 'Open',
  viaMod: 'Reported table by table by the mod',
  viaHooks: 'Reported event by event by the hooks',
  offPicture: 'No room in the picture: listed here only',
  password: 'Password',
  enter: 'Enter',
  wrong: 'Wrong password',
  tooMany: 'Too many tries. Try again in a few minutes.',
  signOut: 'Sign out',
  other: '中文',
}

export function pageWordsFor(language: unknown): PageWords {
  return language === 'en' ? EN : ZH
}

/** A time of day, `14:05`, in the server's time zone (TZ). */
export function clockOf(at: number, timeZone: string | undefined): string {
  try {
    return new Intl.DateTimeFormat('en-GB', { hour: '2-digit', minute: '2-digit', hour12: false, timeZone }).format(at)
  } catch {
    return new Intl.DateTimeFormat('en-GB', { hour: '2-digit', minute: '2-digit', hour12: false }).format(at)
  }
}
