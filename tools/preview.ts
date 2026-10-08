// Draws sample cafés to preview/*.svg and preview/index.html, so the picture
// can be worked on in a browser without starting Claude Code.
//
//   npx tsx tools/preview.ts      (or: bun tools/preview.ts)
//
// Not part of the mod: the hooks module never imports this file, and it is
// the only one here that uses Node.

import { mkdirSync, writeFileSync } from 'node:fs'
import { dirname, join } from 'node:path'
import { fileURLToPath } from 'node:url'

import type { Act } from '../hooks/describe'
import { wordsFor } from '../hooks/i18n'
import { drawScene, fit } from '../hooks/scene'
import type { Kind, Phase, Seat } from '../hooks/tracker'
import type { Snap } from '../hooks/view'
import { arrange, textOf } from '../hooks/view'

const NOW = 1_800_000_000_000

function seat(
  id: string,
  kind: Kind,
  phase: Phase,
  act: Act,
  tool: string,
  target: string,
  more: Partial<Seat> = {},
): Seat {
  return {
    id,
    kind,
    type: kind === 'main' ? 'main' : 'general-purpose',
    name: '',
    task: '',
    parent: '',
    phase,
    act,
    tool,
    target,
    since: NOW - 42_000,
    calls: 7,
    ...more,
  }
}

function snap(id: string, title: string, seats: Seat[]): Snap {
  return { v: 1, id, title, at: NOW, seats }
}

const CREW: Seat[] = [
  seat('a1', 'sub', 'work', 'search', 'Grep', 'PermissionRequest', { type: 'Explore', task: 'Find the permission events' }),
  seat('a2', 'sub', 'work', 'run', 'Bash', 'Run the test suite', { task: 'Run and fix the tests' }),
  seat('a3', 'sub', 'ask', 'run', 'Bash', 'git push', { type: 'release', task: 'Ship v0.1.0' }),
  seat('a4', 'sub', 'think', 'think', '', '', { type: 'Plan', task: 'Plan the cross-session view' }),
  seat('a5', 'sub', 'done', 'done', '', '', { type: 'Explore', task: 'Map the hooks folder' }),
]

/** The main loop in a call of its own while its agents work. */
const BUSY = snap('s-here', 'agent-cafe', [seat('main', 'main', 'work', 'write', 'Edit', 'hooks/scene.ts'), ...CREW])

/** The usual sight: the main loop's turn is over, and it waits for its background agents. */
const WAITING = snap('s-here', 'agent-cafe', [seat('main', 'main', 'idle', 'rest', '', ''), ...CREW])

const OTHERS: Snap[] = [
  snap('s-2', 'paper-notes', [
    seat('main', 'main', 'work', 'write', 'Edit', 'extract/tables.py'),
    seat('b1', 'sub', 'work', 'read', 'Read', 'docs/schema.md', { type: 'Explore' }),
    seat('b2', 'sub', 'work', 'web', 'WebFetch', 'arxiv.org', { name: 'scout' }),
  ]),
  snap('s-3', 'photo-sorter', [seat('main', 'main', 'idle', 'rest', '', '')]),
  snap('s-4', 'chat-bot', [
    seat('main', 'main', 'ask', 'ask', 'AskUserQuestion', 'Deploy target'),
    seat('c1', 'mate', 'idle', 'rest', '', '', { name: 'tester', type: 'teammate' }),
  ]),
]

const PHASES: readonly [Phase, Act, string, string][] = [
  ['think', 'think', '', ''],
  ['work', 'read', 'Read', 'README.md'],
  ['work', 'search', 'Glob', '**/*.tsx'],
  ['work', 'write', 'Write', 'hooks/scene.ts'],
  ['work', 'run', 'Bash', 'npm test'],
  ['work', 'web', 'WebSearch', 'SMIL animation'],
  ['work', 'delegate', 'Agent', 'Check the types'],
  ['work', 'plan', 'TodoWrite', ''],
  ['work', 'tool', 'mcp__github__create_issue', ''],
  ['ask', 'run', 'Bash', 'rm …'],
  ['ask', 'ask', 'AskUserQuestion', 'Auth method'],
  ['ask', 'ask', 'ExitPlanMode', ''],
  ['idle', 'rest', '', ''],
  ['done', 'done', '', ''],
  ['fail', 'fail', '', ''],
]

const GALLERY = snap(
  's-gallery',
  'every-state',
  PHASES.map(([phase, act, tool, target], index) =>
    seat(index === 0 ? 'main' : `g${index}`, index === 0 ? 'main' : 'sub', phase, act, tool, target, {
      type: index === 0 ? 'main' : `${phase}-${act}`,
    }),
  ),
)

type Sample = { name: string; here: Snap; others: Snap[]; bodyColumns: number; language: 'zh-TW' | 'en'; cap?: number }

const SAMPLES: Sample[] = [
  { name: 'one-session', here: WAITING, others: [], bodyColumns: 70, language: 'zh-TW' },
  { name: 'several-sessions', here: BUSY, others: OTHERS, bodyColumns: 96, language: 'zh-TW' },
  { name: 'narrow-pane', here: BUSY, others: OTHERS.slice(0, 1), bodyColumns: 38, language: 'en' },
  { name: 'quiet', here: snap('s-q', 'my-app', [seat('main', 'main', 'idle', 'rest', '', '')]), others: [], bodyColumns: 70, language: 'zh-TW' },
  { name: 'every-state', here: GALLERY, others: [], bodyColumns: 110, language: 'en', cap: 20 },
]

const out = join(dirname(fileURLToPath(import.meta.url)), '..', 'preview')
mkdirSync(out, { recursive: true })

let page =
  '<!doctype html><meta charset="utf-8"><title>Agent Café preview</title>' +
  '<style>body{font:14px system-ui;margin:24px;background:#1f1f1e;color:#eee}' +
  'section{margin-bottom:32px}pre{color:#bbb;white-space:pre-wrap}h2{font-size:15px}</style>'

for (const sample of SAMPLES) {
  const words = wordsFor(sample.language)
  const cafe = arrange(sample.here, sample.others, words, undefined, sample.cap)
  const { columns, scale } = fit(sample.bodyColumns)
  const scene = drawScene(cafe, { columns, scale, words, hasMotion: true })
  writeFileSync(join(out, `${sample.name}.svg`), scene.source)
  page +=
    `<section><h2>${sample.name} — ${sample.bodyColumns} columns, ${scene.width}×${scene.height}px, ` +
    `${scene.source.length} characters</h2>${scene.source}<pre>${textOf(cafe, words, NOW)
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')}</pre></section>`
  console.log(`${sample.name}: ${scene.width}x${scene.height}px, ${scene.source.length} chars, ${cafe.seats} seats`)
}

writeFileSync(join(out, 'index.html'), page)
console.log(`wrote ${join(out, 'index.html')}`)
