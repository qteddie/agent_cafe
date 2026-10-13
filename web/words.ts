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
  /** Closes the card of a guest. */
  close: string
  /** The 3D café's button that puts the whole room back in view, and how to move about in it. */
  resetView: string
  stageHint: string
  /** Said where the browser cannot draw the café in 3D. */
  noStage: string
  noStageHint: string
  /** What a pet picked out in the café can be asked to do: a dog fetches, a cat may come. */
  throwBall: string
  callCat: string
  /** The café's music: the switch, what it does each way, and its volume. */
  music: string
  musicOn: string
  musicOff: string
  volume: string
  /** The café's cats and dogs: the controls that add one and let one go home. */
  pets: string
  cats: string
  dogs: string
  moreCats: string
  fewerCats: string
  moreDogs: string
  fewerDogs: string
  /** The login form. */
  password: string
  enter: string
  wrong: string
  tooMany: string
  signOut: string
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
  close: '關閉',
  resetView: '回到全景',
  stageHint: '拖曳旋轉、滾輪或兩指縮放・點人看他在做什麼・點寵物再點地板，跟牠玩',
  noStage: '這個瀏覽器畫不出立體的咖啡廳',
  noStageHint: '需要 WebGL：換一個瀏覽器，或在設定裡打開硬體加速。',
  music: '音樂',
  musicOn: '放點悠閒的咖啡廳音樂',
  musicOff: '關掉音樂',
  volume: '音量',
  throwBall: '點地板丟球給牠',
  callCat: '點地板叫牠過來',
  pets: '貓狗',
  cats: '貓',
  dogs: '狗',
  moreCats: '多一隻貓',
  fewerCats: '讓一隻貓回家',
  moreDogs: '多一隻狗',
  fewerDogs: '讓一隻狗回家',
  password: '密碼',
  enter: '進入',
  wrong: '密碼不對',
  tooMany: '試太多次了，請過幾分鐘再試',
  signOut: '登出',
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
  close: 'Close',
  resetView: 'Whole room',
  stageHint: 'Drag to turn, scroll or pinch to zoom · click a person to see what they are doing · click a pet, then the floor, to play',
  noStage: 'This browser cannot draw the café in 3D',
  noStageHint: 'It needs WebGL: try another browser, or turn on hardware acceleration in its settings.',
  music: 'Music',
  musicOn: 'Play some chill café music',
  musicOff: 'Stop the music',
  volume: 'Volume',
  throwBall: 'Click the floor to throw a ball',
  callCat: 'Click the floor to call it over',
  pets: 'Pets',
  cats: 'Cats',
  dogs: 'Dogs',
  moreCats: 'Add a cat',
  fewerCats: 'Send a cat home',
  moreDogs: 'Add a dog',
  fewerDogs: 'Send a dog home',
  password: 'Password',
  enter: 'Enter',
  wrong: 'Wrong password',
  tooMany: 'Too many tries. Try again in a few minutes.',
  signOut: 'Sign out',
}

/** The page's words: English, unless Traditional Chinese is asked for by name. */
export function pageWordsFor(language: unknown): PageWords {
  return language === 'zh-TW' ? ZH : EN
}

/** A time of day, `14:05`, in the server's time zone (TZ). */
export function clockOf(at: number, timeZone: string | undefined): string {
  try {
    return new Intl.DateTimeFormat('en-GB', { hour: '2-digit', minute: '2-digit', hour12: false, timeZone }).format(at)
  } catch {
    return new Intl.DateTimeFormat('en-GB', { hour: '2-digit', minute: '2-digit', hour12: false }).format(at)
  }
}
