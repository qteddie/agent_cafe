// The café's words, in Traditional Chinese and in English, and the sentence a
// seat's state reads as. Pure: no `$` here.

import type { Act } from './describe'
import { clip, mcpParts } from './describe'

export type Lang = 'zh-TW' | 'en'

export type Words = {
  /** The pane's title and the sign on the wall. */
  title: string
  /** What the main loop is called at its seat. */
  main: string
  /** A subagent nothing names. */
  agent: string
  /** The name of the table of the session the pane is open in. */
  here: (name: string) => string
  /** A subagent's task, set after its name. */
  task: (text: string) => string
  /** A seat between tool calls. */
  thinking: string
  /** The main loop with no turn running. */
  waiting: string
  /** The main loop with no turn running while agents of its own are still at work. */
  awaiting: string
  /** A teammate between turns. */
  standby: string
  done: string
  failed: string
  /** AskUserQuestion: the dialog is the person's to answer; `topic` is its header. */
  question: (topic: string) => string
  /** ExitPlanMode: the plan is the person's to approve. */
  planReady: string
  /** A notification asked for the person and named no tool. */
  needsYou: string
  /** A tool call held at a permission prompt; `what` is the call, said. */
  needsOk: (what: string) => string
  /** The verb for a tool, by name; `acts` is the fallback, by kind. */
  verbs: Readonly<Record<string, string>>
  acts: Readonly<Record<Act, string>>
  /** An MCP tool, and a tool the café has no verb for. */
  mcp: (server: string, tool: string) => string
  using: (tool: string) => string
  /** Joins a verb and what it works on. */
  join: (verb: string, target: string) => string
  /** The tally on the chalkboard: who works, who waits on the person, who rests. */
  tally: (busy: number, asking: number, idle: number) => string
  /** Seats past the ones a table shows. */
  more: (count: number) => string
  /** A subagent's tool calls so far. */
  calls: (count: number) => string
  /** The legend under the picture: thinking, working, held for the person, resting or done. */
  legend: readonly [think: string, work: string, ask: string, idle: string]
  /** How `/cafe` is used, said when its argument is not one it knows. */
  usage: string
  /** What `/cafe` is said to do in the command list. */
  command: string
  /** Tables past the ones the café shows. */
  moreTables: (count: number) => string
  /** The other sessions' tables, where the café is told as text and leaves them out. */
  elsewhere: (tables: number, seats: number) => string
  /** Said when the surface placed no pane. */
  noPane: string
  /** The alt of the picture, for a reader that cannot see it. */
  alt: (seats: number, tables: number) => string
}

const ZH: Words = {
  title: 'Agent Café',
  main: 'main',
  agent: 'agent',
  here: name => `${name}（這個 session）`,
  task: text => `「${text}」`,
  thinking: '思考中',
  waiting: '等你的指示',
  awaiting: '等 agent 回報',
  standby: '待命中',
  done: '完成了',
  failed: '出錯了',
  question: topic => (topic === '' ? '有問題想問你' : `有問題想問你：${topic}`),
  planReady: '等你看計畫',
  needsYou: '需要你看一下',
  needsOk: what => (what === '' ? '等你批准' : `等你批准：${what}`),
  verbs: {
    Read: '讀',
    NotebookRead: '讀',
    Edit: '改',
    MultiEdit: '改',
    Write: '寫',
    NotebookEdit: '改',
    Grep: '搜尋',
    Glob: '找檔案',
    LS: '看資料夾',
    LSP: '查程式碼',
    Bash: '執行',
    PowerShell: '執行',
    Monitor: '監看',
    TaskStop: '停掉背景工作',
    WebFetch: '瀏覽',
    WebSearch: '上網查',
    Agent: '交辦',
    Task: '交辦',
    Workflow: '跑流程',
    SendMessage: '傳話給',
    TodoWrite: '整理待辦',
    TaskCreate: '新增待辦',
    TaskUpdate: '更新待辦',
    TaskList: '看待辦',
    TaskGet: '看待辦',
    EnterPlanMode: '開始規劃',
    Skill: '用技能',
    ToolSearch: '找工具',
  },
  acts: {
    read: '讀取',
    search: '搜尋',
    write: '編輯',
    run: '執行',
    web: '上網',
    delegate: '交辦',
    plan: '規劃',
    ask: '等你',
    tool: '用工具',
    think: '思考中',
    rest: '休息中',
    done: '完成了',
    fail: '出錯了',
  },
  mcp: (server, tool) => (tool === '' ? `用 ${server}` : `用 ${server}・${tool}`),
  using: tool => `用 ${tool}`,
  join: (verb, target) => (target === '' ? verb : `${verb} ${target}`),
  tally: (busy, asking, idle) => `忙 ${busy}　等你 ${asking}　閒 ${idle}`,
  more: count => `還有 ${count} 位`,
  calls: count => `${count} 次工具`,
  legend: ['思考', '工作', '等你', '休息／完成'],
  usage: '用法：/cafe 開啟咖啡廳，/cafe text 用文字列出，/cafe close 關閉。',
  command: '打開 Agent Café：看每個 agent 現在在做什麼',
  moreTables: count => `還有 ${count} 桌沒畫出來`,
  elsewhere: (tables, seats) => `其他 session：${tables} 桌、${seats} 位（/cafe 打開咖啡廳可以看到）`,
  noPane: '這個畫面放不下咖啡廳的 pane，先用文字告訴你：',
  alt: (seats, tables) => `咖啡廳裡有 ${seats} 位 agent，分坐 ${tables} 桌。`,
}

const EN: Words = {
  title: 'Agent Café',
  main: 'main',
  agent: 'agent',
  here: name => `${name} (this session)`,
  task: text => ` “${text}”`,
  thinking: 'Thinking',
  waiting: 'Waiting for you',
  awaiting: 'Waiting on agents',
  standby: 'On standby',
  done: 'Done',
  failed: 'Failed',
  question: topic => (topic === '' ? 'Has a question for you' : `Has a question for you: ${topic}`),
  planReady: 'Plan ready for your review',
  needsYou: 'Needs you',
  needsOk: what => (what === '' ? 'Needs your OK' : `Needs your OK: ${what}`),
  verbs: {
    Read: 'Reading',
    NotebookRead: 'Reading',
    Edit: 'Editing',
    MultiEdit: 'Editing',
    Write: 'Writing',
    NotebookEdit: 'Editing',
    Grep: 'Searching for',
    Glob: 'Finding',
    LS: 'Listing',
    LSP: 'Inspecting',
    Bash: 'Running',
    PowerShell: 'Running',
    Monitor: 'Watching',
    TaskStop: 'Stopping a background task',
    WebFetch: 'Browsing',
    WebSearch: 'Searching the web for',
    Agent: 'Delegating',
    Task: 'Delegating',
    Workflow: 'Running workflow',
    SendMessage: 'Messaging',
    TodoWrite: 'Updating to-dos',
    TaskCreate: 'Adding task',
    TaskUpdate: 'Updating task',
    TaskList: 'Checking tasks',
    TaskGet: 'Checking a task',
    EnterPlanMode: 'Starting a plan',
    Skill: 'Using skill',
    ToolSearch: 'Looking for tools',
  },
  acts: {
    read: 'Reading',
    search: 'Searching',
    write: 'Editing',
    run: 'Running',
    web: 'Browsing',
    delegate: 'Delegating',
    plan: 'Planning',
    ask: 'Waiting on you',
    tool: 'Using a tool',
    think: 'Thinking',
    rest: 'Resting',
    done: 'Done',
    fail: 'Failed',
  },
  mcp: (server, tool) => (tool === '' ? `Using ${server}` : `Using ${server}: ${tool}`),
  using: tool => `Using ${tool}`,
  join: (verb, target) => (target === '' ? verb : `${verb} ${target}`),
  tally: (busy, asking, idle) => `${busy} busy · ${asking} need you · ${idle} idle`,
  more: count => `+${count} more`,
  calls: count => (count === 1 ? '1 tool call' : `${count} tool calls`),
  legend: ['thinking', 'working', 'needs you', 'idle / done'],
  usage: 'Usage: /cafe opens the café, /cafe text lists it as text, /cafe close closes it.',
  command: 'Open the Agent Café: see what every agent is doing right now',
  moreTables: count => (count === 1 ? '1 more table not shown' : `${count} more tables not shown`),
  elsewhere: (tables, seats) =>
    `Other sessions: ${tables} ${tables === 1 ? 'table' : 'tables'}, ${seats} ${seats === 1 ? 'agent' : 'agents'} (open the café with /cafe to see them)`,
  noPane: 'This surface places no pane for the café, so here it is as text:',
  alt: (seats, tables) =>
    `A café with ${seats} ${seats === 1 ? 'agent' : 'agents'} at ${tables} ${tables === 1 ? 'table' : 'tables'}.`,
}

/** The words for a language; Traditional Chinese for one the café does not have. */
export function wordsFor(language: unknown): Words {
  return language === 'en' ? EN : ZH
}

/** What a seat's state takes to say: the fields of a seat the sentence reads. */
export type Saying = {
  kind: 'main' | 'sub' | 'mate'
  phase: 'think' | 'work' | 'ask' | 'idle' | 'done' | 'fail'
  act: Act
  tool: string
  target: string
}

/** A tool call as a verb and what it works on: `改 src/app.ts`. */
export function sayCall(tool: string, act: Act, target: string, words: Words): string {
  const verb = Object.hasOwn(words.verbs, tool) ? words.verbs[tool] : undefined
  if (verb !== undefined) return words.join(verb, target)
  const mcp = mcpParts(tool)
  if (mcp !== undefined) return words.mcp(mcp.server, clip(mcp.tool, 24))
  if (tool !== '') return words.using(clip(tool, 24))
  return words.join(words.acts[act], target)
}

/**
 * What a seat is doing right now, as one sentence.
 *
 * @param hasCrew true for a main loop whose own agents are still at work: at
 *   rest it waits for them, not for the person
 */
export function say(seat: Saying, words: Words, hasCrew = false): string {
  switch (seat.phase) {
    case 'think':
      return words.thinking
    case 'idle':
      if (seat.kind !== 'main') return words.standby
      return hasCrew ? words.awaiting : words.waiting
    case 'done':
      return words.done
    case 'fail':
      return words.failed
    case 'ask':
      if (seat.tool === 'AskUserQuestion') return words.question(seat.target)
      if (seat.tool === 'ExitPlanMode') return words.planReady
      if (seat.tool === '') return words.needsYou
      return words.needsOk(sayCall(seat.tool, seat.act, seat.target, words))
    case 'work':
      return sayCall(seat.tool, seat.act, seat.target, words)
  }
}

/** How long something has lasted, coarsely: `8s`, `3m`, `1h 05m`. */
export function age(ms: number): string {
  const seconds = Math.max(0, Math.floor(ms / 1000))
  if (seconds < 60) return `${seconds}s`
  const minutes = Math.floor(seconds / 60)
  if (minutes < 60) return `${minutes}m`
  return `${Math.floor(minutes / 60)}h ${String(minutes % 60).padStart(2, '0')}m`
}
