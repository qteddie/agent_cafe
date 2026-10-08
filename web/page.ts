// The web page's two documents: the café, and the door (a password, before
// the café). Their content comes in afterwards, from /events, and app.js
// draws it; what is here is the frame and the words app.js needs.
//
// Pure: no server here.

import type { Words } from '../hooks/i18n'
import { MARKS } from '../hooks/view'
import type { PageWords } from './words'

/** Text made safe inside HTML, in text and in attribute values alike. */
export function escapeHtml(text: string): string {
  return text
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;')
}

/** JSON made safe inside a script element: nothing in it can close the element. */
function scriptJson(value: unknown): string {
  return JSON.stringify(value).replace(/</g, '\\u003c').replace(/>/g, '\\u003e').replace(/&/g, '\\u0026')
}

function head(page: PageWords, title: string): string {
  return (
    '<!doctype html>' +
    `<html lang="${page.lang === 'en' ? 'en' : 'zh-Hant'}">` +
    '<head>' +
    '<meta charset="utf-8">' +
    '<meta name="viewport" content="width=device-width, initial-scale=1">' +
    '<meta name="color-scheme" content="dark">' +
    '<meta name="referrer" content="no-referrer">' +
    `<title>${escapeHtml(title)}</title>` +
    '<link rel="icon" href="/icon.svg" type="image/svg+xml">' +
    '<link rel="stylesheet" href="/style.css">'
  )
}

/** The words app.js says things with. */
function wordsForClient(words: Words, page: PageWords): Record<string, unknown> {
  return {
    lang: page.lang,
    live: page.live,
    retrying: page.retrying,
    open: page.open,
    viaMod: page.viaMod,
    viaHooks: page.viaHooks,
    offPicture: page.offPicture,
    asking: page.asking,
    tally: page.lang === 'en' ? ['{b} busy', '{a} waiting for you', '{i} resting'] : ['{b} 位在忙', '{a} 位等你', '{i} 位休息中'],
    title: words.title,
  }
}

/** The café: the chalkboard, the window with the picture, the tickets. */
export function cafePage(words: Words, page: PageWords): string {
  const [think, work, held, idle] = words.legend
  const other = page.lang === 'en' ? 'zh-TW' : 'en'
  return (
    head(page, words.title) +
    '<script src="/app.js" defer></script>' +
    '</head>' +
    `<body data-lang="${page.lang}">` +
    '<header class="board">' +
    '<div class="sign">' +
    `<h1>${escapeHtml(words.title)}</h1>` +
    `<p class="tagline">${escapeHtml(page.tagline)}</p>` +
    '</div>' +
    '<p class="tally" id="tally" aria-live="polite"></p>' +
    '<div class="tools">' +
    `<span class="live" id="live" data-state="wait">${escapeHtml(page.retrying)}</span>` +
    `<a class="lang" href="/?lang=${other}" lang="${other === 'en' ? 'en' : 'zh-Hant'}">${escapeHtml(page.other)}</a>` +
    '</div>' +
    '</header>' +
    '<main class="room">' +
    '<figure class="window" id="window">' +
    '<img id="scene" alt="" hidden>' +
    '<figcaption class="empty" id="empty" hidden>' +
    `<strong>${escapeHtml(page.empty)}</strong>` +
    `<span>${escapeHtml(page.emptyHint)}</span>` +
    '</figcaption>' +
    '</figure>' +
    '<section class="rail" id="rail" aria-label="sessions"></section>' +
    '</main>' +
    '<footer class="foot">' +
    '<p class="legend">' +
    `<span class="mark" data-phase="think">${MARKS.think}</span> ${escapeHtml(think)}` +
    `<span class="mark" data-phase="work">${MARKS.work}</span> ${escapeHtml(work)}` +
    `<span class="mark" data-phase="ask">${MARKS.ask}</span> ${escapeHtml(held)}` +
    `<span class="mark" data-phase="idle">${MARKS.idle}</span> ${escapeHtml(idle)}` +
    '</p>' +
    '<form method="post" action="/logout">' +
    `<button type="submit" class="out">${escapeHtml(page.signOut)}</button>` +
    '</form>' +
    '</footer>' +
    `<script type="application/json" id="words">${scriptJson(wordsForClient(words, page))}</script>` +
    '</body></html>'
  )
}

/** The door: one password, and what went wrong with the last one. */
export function doorPage(words: Words, page: PageWords, problem: '' | 'wrong' | 'tooMany'): string {
  const said = problem === 'wrong' ? page.wrong : problem === 'tooMany' ? page.tooMany : ''
  return (
    head(page, words.title) +
    '</head>' +
    `<body class="door" data-lang="${page.lang}">` +
    '<main class="door-card">' +
    `<h1>${escapeHtml(words.title)}</h1>` +
    `<p class="tagline">${escapeHtml(page.tagline)}</p>` +
    '<form method="post" action="/login">' +
    `<label for="key">${escapeHtml(page.password)}</label>` +
    '<input id="key" name="key" type="password" autocomplete="current-password" required autofocus>' +
    `<input type="hidden" name="lang" value="${page.lang}">` +
    (said === '' ? '' : `<p class="problem" role="alert">${escapeHtml(said)}</p>`) +
    `<button type="submit">${escapeHtml(page.enter)}</button>` +
    '</form>' +
    '</main>' +
    '</body></html>'
  )
}

/** The tab's icon: a cup on a saucer, steam rising. */
export const ICON =
  '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" shape-rendering="crispEdges">' +
  '<rect width="16" height="16" rx="3" fill="#26312c"/>' +
  '<rect x="5" y="2" width="1" height="3" fill="#f1efe6" opacity=".7"/>' +
  '<rect x="8" y="1" width="1" height="4" fill="#f1efe6" opacity=".7"/>' +
  '<rect x="3" y="6" width="8" height="6" fill="#f7f0e1"/>' +
  '<rect x="11" y="7" width="2" height="3" fill="#f7f0e1"/>' +
  '<rect x="4" y="7" width="6" height="2" fill="#8a623f"/>' +
  '<rect x="2" y="12" width="11" height="1" fill="#8fd18f"/>' +
  '</svg>'
