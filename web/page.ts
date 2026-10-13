// The web page's two documents: the café, and the door (a password, before
// the café). Their content comes in afterwards, from /events, and app.js and
// cafe3d.js draw it; what is here is the frame and the words they need.
//
// Pure: no server here.

import type { Words } from '../hooks/i18n'
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

/** The control that adds a cat or a dog, and lets one go home. */
function petControl(kind: 'cat' | 'dog', name: string, fewer: string, more: string): string {
  return (
    `<span class="pet-kind">` +
    `<span class="pet-name">${escapeHtml(name)}</span>` +
    `<button type="button" class="pet-step" data-kind="${kind}" data-step="-1" aria-label="${escapeHtml(fewer)}" title="${escapeHtml(fewer)}">−</button>` +
    `<span class="pet-count" data-kind="${kind}" aria-live="polite">0</span>` +
    `<button type="button" class="pet-step" data-kind="${kind}" data-step="1" aria-label="${escapeHtml(more)}" title="${escapeHtml(more)}">+</button>` +
    '</span>'
  )
}

/** The words app.js says things with. */
function wordsForClient(words: Words, page: PageWords): Record<string, unknown> {
  return {
    lang: page.lang,
    title: words.title,
    live: page.live,
    retrying: page.retrying,
    open: page.open,
    close: page.close,
    asking: page.asking,
    resetView: page.resetView,
    stageHint: page.stageHint,
    throwBall: page.throwBall,
    callCat: page.callCat,
    tally: page.lang === 'en' ? ['{b} busy', '{a} waiting for you', '{i} resting'] : ['{b} 位在忙', '{a} 位等你', '{i} 位休息中'],
  }
}

/**
 * The café: the room in 3D, filling the window, and over it no more than the
 * tally, whether it is live, the way out, the café's cats and dogs, and the
 * card of a guest clicked.
 * /cafe3d.js draws the room; app.js brings it what /events says.
 */
export function cafePage(words: Words, page: PageWords): string {
  return (
    head(page, words.title) +
    '<script src="/cafe3d.js" defer></script>' +
    '<script src="/app.js" defer></script>' +
    '</head>' +
    `<body class="cafe" data-lang="${page.lang}">` +
    `<h1 class="sr-only">${escapeHtml(words.title)}</h1>` +
    '<main class="stage" id="stage" role="img"></main>' +
    '<header class="hud">' +
    '<p class="tally" id="tally" aria-live="polite"></p>' +
    `<span class="live" id="live" data-state="wait">${escapeHtml(page.retrying)}</span>` +
    '<form method="post" action="/logout">' +
    `<button type="submit" class="out">${escapeHtml(page.signOut)}</button>` +
    '</form>' +
    '</header>' +
    `<div class="pets" id="pets" role="group" aria-label="${escapeHtml(page.pets)}">` +
    petControl('cat', page.cats, page.fewerCats, page.moreCats) +
    petControl('dog', page.dogs, page.fewerDogs, page.moreDogs) +
    '</div>' +
    '<aside class="card" id="card" hidden></aside>' +
    '<div class="notice" id="empty" hidden>' +
    `<strong>${escapeHtml(page.empty)}</strong>` +
    `<span>${escapeHtml(page.emptyHint)}</span>` +
    '</div>' +
    '<div class="notice" id="nostage" hidden>' +
    `<strong>${escapeHtml(page.noStage)}</strong>` +
    `<span>${escapeHtml(page.noStageHint)}</span>` +
    '</div>' +
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
