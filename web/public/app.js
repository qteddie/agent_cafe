// Agent Café, the web page's script: listens to /events and hands each view
// to the café in 3D (/cafe3d.js), keeps the tally and the tab's title up to
// date, and shows the card of the guest last clicked, its time counting up.
//
// Everything a session reported is put on the page as text, never as markup.

;(() => {
  'use strict'

  const words = JSON.parse(document.getElementById('words').textContent)
  const byId = id => document.getElementById(id)
  const stageHost = byId('stage')
  const tally = byId('tally')
  const live = byId('live')
  const empty = byId('empty')
  const noStage = byId('nostage')
  const card = byId('card')
  const petBar = byId('pets')
  const musicButton = byId('music')
  const volumeInput = byId('volume')
  const MARKS = { think: '◐', work: '●', ask: '◆', idle: '○', done: '✓', fail: '✗' }
  const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)')

  /** The server's clock less this one's, from the last view. */
  let skew = 0
  let source = null
  let stage = null
  let lastView = null
  /** The guest whose card is open; `''` for none. */
  let cardKey = ''

  // The café's cats and dogs: as many as this browser last asked for.
  const PETS_KEY = 'agent-cafe-pets'
  const MAX_PETS = 8

  function petCount(value, fallback) {
    const count = Number(value)
    return Number.isFinite(count) ? Math.max(0, Math.min(MAX_PETS, Math.floor(count))) : fallback
  }

  function savedPets() {
    try {
      const saved = JSON.parse(window.localStorage.getItem(PETS_KEY) || 'null')
      if (saved !== null && typeof saved === 'object') return { cat: petCount(saved.cat, 1), dog: petCount(saved.dog, 1) }
    } catch {
      // Nothing kept, or nothing readable: the café's own cat and dog.
    }
    return { cat: 1, dog: 1 }
  }

  let pets = savedPets()

  // The café's music: made by the browser, so it plays only once the person asks (or, if they
  // left it on last time, from their first click on the page: browsers wait for one).
  const MUSIC_KEY = 'agent-cafe-music'
  let music = null

  function savedMusic() {
    try {
      const saved = JSON.parse(window.localStorage.getItem(MUSIC_KEY) || 'null')
      if (saved !== null && typeof saved === 'object') {
        const level = Number(saved.volume)
        return { on: saved.on === true, volume: Number.isFinite(level) ? Math.max(0, Math.min(1, level)) : 0.6 }
      }
    } catch {
      // Nothing kept, or nothing readable: quiet, at the usual volume.
    }
    return { on: false, volume: 0.6 }
  }

  let musicChoice = savedMusic()

  function keepMusic() {
    try {
      window.localStorage.setItem(MUSIC_KEY, JSON.stringify(musicChoice))
    } catch {
      // Not remembered, then.
    }
  }

  function showMusic() {
    const isOn = music !== null && music.isPlaying
    musicButton.setAttribute('aria-pressed', String(isOn))
    musicButton.title = isOn ? words.musicOff : words.musicOn
    volumeInput.hidden = !isOn
    volumeInput.value = String(musicChoice.volume)
  }

  function playMusic(isOn) {
    if (music === null) music = (window.AgentCafe3D && window.AgentCafe3D.music()) || null
    if (music === null) {
      musicButton.hidden = true
      return
    }
    music.setVolume(musicChoice.volume)
    musicChoice = { ...musicChoice, on: isOn }
    keepMusic()
    if (isOn) music.start().then(showMusic, () => showMusic())
    else music.stop()
    showMusic()
  }

  function showPets() {
    for (const count of petBar.querySelectorAll('.pet-count')) count.textContent = String(pets[count.dataset.kind])
    for (const button of petBar.querySelectorAll('.pet-step')) {
      const next = pets[button.dataset.kind] + Number(button.dataset.step)
      button.disabled = next < 0 || next > MAX_PETS
    }
  }

  function stepPets(kind, step) {
    pets = { ...pets, [kind]: petCount(pets[kind] + step, pets[kind]) }
    try {
      window.localStorage.setItem(PETS_KEY, JSON.stringify(pets))
    } catch {
      // Not remembered, then: the café still has them until the page is closed.
    }
    showPets()
    if (stage !== null) stage.setPets(pets)
  }

  /** How long something has lasted, as the café says it: 8s, 3m, 1h 05m. */
  function age(ms) {
    const seconds = Math.max(0, Math.floor(ms / 1000))
    if (seconds < 60) return `${seconds}s`
    const minutes = Math.floor(seconds / 60)
    if (minutes < 60) return `${minutes}m`
    return `${Math.floor(minutes / 60)}h ${String(minutes % 60).padStart(2, '0')}m`
  }

  function element(tag, className, text) {
    const node = document.createElement(tag)
    if (className) node.className = className
    if (text !== undefined) node.textContent = text
    return node
  }

  function setLive(isOn) {
    live.dataset.state = isOn ? 'on' : 'wait'
    live.textContent = isOn ? words.live : words.retrying
  }

  function drawTally(view) {
    const parts = [
      ['work', view.busy, words.tally[0], '{b}'],
      ['ask', view.asking, words.tally[1], '{a}'],
      ['idle', view.idle, words.tally[2], '{i}'],
    ]
    tally.replaceChildren()
    for (const [phase, count, phrase, slot] of parts) {
      const [before, after] = phrase.split(slot)
      const group = element('span', 'chip')
      group.dataset.phase = phase
      group.append(element('span', 'word', before), element('span', 'count', String(count)), element('span', 'word', after))
      tally.append(group)
    }
    document.title = view.asking > 0 ? `(${view.asking}) ${words.title}` : words.title
  }

  /** The café in words, for a reader that cannot see the room. */
  function summary(view) {
    const lines = []
    for (const table of view.tables) {
      for (const line of table.lines) lines.push(`${line.label} (${table.title}): ${line.says}`)
    }
    const head = parts => words.tally.map((phrase, index) => phrase.replace(/\{[bai]\}/, String(parts[index]))).join(', ')
    return `${words.title}. ${head([view.busy, view.asking, view.idle])}. ${lines.slice(0, 40).join('; ')}`.slice(0, 1200)
  }

  function find(view, key) {
    for (const table of view.tables) {
      for (const line of table.lines) if (line.key === key) return { table, line }
    }
    return undefined
  }

  /** The card of the guest clicked: its table, what it is doing, for how long, and how many tool calls. */
  function drawCard() {
    const found = cardKey === '' || lastView === null ? undefined : find(lastView, cardKey)
    if (found === undefined) {
      card.hidden = true
      return
    }
    const { table, line } = found
    const head = element('header', 'card-head')
    head.append(element('h2', 'card-title', table.title), element('span', 'app', table.app))
    const close = element('button', 'card-close', '×')
    close.type = 'button'
    close.setAttribute('aria-label', words.close)
    close.addEventListener('click', () => pick(''))
    head.append(close)

    const meta = element('p', 'card-meta')
    meta.append(element('span', '', table.started))
    if (table.link !== '' && table.link.startsWith('https://claude.ai/')) {
      const link = element('a', '', words.open)
      link.href = table.link
      link.target = '_blank'
      link.rel = 'noopener noreferrer'
      meta.append(link)
    }

    const who = element('p', 'card-who')
    const mark = element('span', 'mark', MARKS[line.phase] || '·')
    mark.dataset.phase = line.phase
    mark.setAttribute('aria-hidden', 'true')
    who.append(mark, element('strong', '', line.label))
    if (line.task !== '') who.append(element('span', 'task', line.task))

    const says = element('p', 'card-says', line.says)
    says.dataset.phase = line.phase
    const when = element('p', 'card-when')
    const clock = element('span', '', age(Date.now() + skew - line.since))
    clock.dataset.since = String(line.since)
    when.append(clock)
    if (line.calls !== '') when.append(` · ${line.calls}`)

    card.replaceChildren(head, meta, who, says, when)
    card.dataset.phase = line.phase
    card.hidden = false
  }

  /** A guest clicked in the café, or the floor (`''`): its card opens, or the card closes. */
  function pick(key) {
    cardKey = key
    if (stage !== null) stage.highlight(key === '' ? null : key)
    drawCard()
  }

  function draw(view) {
    skew = view.at - Date.now()
    lastView = view
    drawTally(view)
    empty.hidden = view.tables.length > 0 || stage === null
    stageHost.setAttribute('aria-label', summary(view))
    if (stage !== null) stage.update(view)
    drawCard()
  }

  function countUp() {
    const now = Date.now() + skew
    for (const clock of card.querySelectorAll('[data-since]')) {
      const text = age(now - Number(clock.dataset.since))
      if (clock.textContent !== text) clock.textContent = text
    }
  }

  let retry = 0
  let retryDelay = 1000

  /**
   * After a stream the browser gave up on (an answer other than 200: the
   * server restarting behind the tunnel, a pass that ran out), the page asks
   * whether it may still look, and goes back to the door if not.
   */
  function recover() {
    clearTimeout(retry)
    retry = setTimeout(() => {
      fetch(`/api/view?pic=0&lang=${encodeURIComponent(words.lang)}`, { credentials: 'same-origin', cache: 'no-store' })
        .then(answer => {
          if (answer.status === 401) window.location.reload()
          else connect()
        })
        .catch(() => connect())
    }, retryDelay)
    retryDelay = Math.min(retryDelay * 2, 30000)
  }

  function connect() {
    clearTimeout(retry)
    if (source !== null) source.close()
    // The café draws itself in 3D: it needs no picture from the server.
    const query = new URLSearchParams({ lang: words.lang, pic: '0' })
    const stream = new EventSource(`/events?${query}`)
    source = stream
    stream.addEventListener('view', event => {
      retryDelay = 1000
      setLive(true)
      draw(JSON.parse(event.data))
    })
    stream.addEventListener('error', () => {
      if (source !== stream) return
      setLive(false)
      // While CONNECTING the browser tries again by itself; CLOSED is for good.
      if (stream.readyState === EventSource.CLOSED) recover()
    })
  }

  stage =
    (window.AgentCafe3D &&
      window.AgentCafe3D.mount(stageHost, {
        title: words.title,
        reducedMotion: reducedMotion.matches,
        reset: words.resetView,
        hint: words.stageHint,
        onPick: pick,
        petHint: { dog: words.throwBall, cat: words.callCat },
      })) ||
    null
  noStage.hidden = stage !== null
  petBar.hidden = stage === null
  if (stage !== null) stage.setPets(pets)
  showPets()
  musicButton.addEventListener('click', () => playMusic(!(music !== null && music.isPlaying)))
  volumeInput.addEventListener('input', () => {
    musicChoice = { ...musicChoice, volume: Number(volumeInput.value) }
    keepMusic()
    if (music !== null) music.setVolume(musicChoice.volume)
  })
  if (musicChoice.on) {
    // Left on last time: it comes back with the first click or key on the page (but not the switch, which decides by itself).
    const resume = event => {
      if (event.target instanceof Element && event.target.closest('#music')) return
      document.removeEventListener('pointerdown', resume, true)
      document.removeEventListener('keydown', resume, true)
      if (music === null || !music.isPlaying) playMusic(true)
    }
    document.addEventListener('pointerdown', resume, true)
    document.addEventListener('keydown', resume, true)
  }
  showMusic()
  petBar.addEventListener('click', event => {
    const button = event.target instanceof Element ? event.target.closest('.pet-step') : null
    if (button !== null && !button.disabled) stepPets(button.dataset.kind, Number(button.dataset.step))
  })

  reducedMotion.addEventListener('change', () => {
    if (stage !== null) stage.setReducedMotion(reducedMotion.matches)
  })
  document.addEventListener('keydown', event => {
    if (event.key === 'Escape' && cardKey !== '') pick('')
  })

  setInterval(countUp, 1000)
  connect()
})()
