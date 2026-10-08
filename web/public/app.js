// Agent Café, the web page's script: listens to /events and draws what comes,
// the picture in the window and a ticket for each session, and counts each
// seat's time up between one view and the next.
//
// Everything a session reported is put on the page as text, never as markup;
// the picture is an image, which runs nothing.

;(() => {
  'use strict'

  const words = JSON.parse(document.getElementById('words').textContent)
  const byId = id => document.getElementById(id)
  const windowFrame = byId('window')
  const scene = byId('scene')
  const empty = byId('empty')
  const rail = byId('rail')
  const tally = byId('tally')
  const live = byId('live')
  const MARKS = { think: '◐', work: '●', ask: '◆', idle: '○', done: '✓', fail: '✗' }
  const TILTS = ['-0.5deg', '0.35deg', '-0.2deg', '0.55deg', '0deg', '-0.4deg']
  const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)')

  /** The server's clock less this one's, from the last view. */
  let skew = 0
  let shownSig = null
  let pictureUrl = null
  let source = null
  let columns = 0

  /** How long something has lasted, as the café says it: 8s, 3m, 1h 05m. */
  function age(ms) {
    const seconds = Math.max(0, Math.floor(ms / 1000))
    if (seconds < 60) return `${seconds}s`
    const minutes = Math.floor(seconds / 60)
    if (minutes < 60) return `${minutes}m`
    return `${Math.floor(minutes / 60)}h ${String(minutes % 60).padStart(2, '0')}m`
  }

  /** Seats across the picture for a window this wide. */
  function columnsFor(width) {
    if (width < 420) return 3
    if (width < 600) return 4
    if (width < 760) return 5
    if (width < 940) return 6
    if (width < 1120) return 7
    return 8
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
    parts.forEach(([phase, count, phrase, slot], index) => {
      if (index > 0) tally.append(element('span', 'sep', ' '))
      const [before, after] = phrase.split(slot)
      const group = element('span')
      group.dataset.phase = phase
      group.append(before, element('span', 'count', String(count)), after)
      tally.append(group)
    })
    document.title = view.asking > 0 ? `(${view.asking}) ${words.title}` : words.title
  }

  function drawPicture(view) {
    if (view.sig === shownSig) return
    shownSig = view.sig
    if (view.svg === '') {
      scene.hidden = true
      empty.hidden = false
      return
    }
    const url = URL.createObjectURL(new Blob([view.svg], { type: 'image/svg+xml' }))
    const next = new Image()
    next.onload = () => {
      // Only the newest picture is shown; one overtaken on the way is let go.
      if (shownSig !== view.sig) {
        URL.revokeObjectURL(url)
        return
      }
      scene.src = url
      scene.alt = view.alt
      scene.hidden = false
      empty.hidden = true
      if (pictureUrl !== null) URL.revokeObjectURL(pictureUrl)
      pictureUrl = url
    }
    next.onerror = () => URL.revokeObjectURL(url)
    next.src = url
  }

  function drawSeat(line) {
    const seat = element('li', 'seat')
    seat.dataset.phase = line.phase
    seat.style.setProperty('--depth', String(Math.max(0, line.depth - 1)))
    const branch = element('span', 'branch', line.depth > 0 ? '↳' : '')
    branch.setAttribute('aria-hidden', 'true')
    seat.append(branch)
    const mark = element('span', 'mark', MARKS[line.phase] || '·')
    mark.dataset.phase = line.phase
    mark.setAttribute('aria-hidden', 'true')
    seat.append(mark)

    const who = element('span', 'who')
    who.append(element('span', 'name', line.label))
    if (line.task !== '') who.append(element('span', 'task', line.task))
    seat.append(who)

    const when = element('span', 'when')
    const clock = element('span', 'age', age(Date.now() + skew - line.since))
    clock.dataset.since = String(line.since)
    when.append(clock)
    if (line.calls !== '') when.append(` · ${line.calls}`)
    seat.append(when)

    seat.append(element('span', 'says', line.says))
    return seat
  }

  function drawTicket(table, index) {
    const ticket = element('article', 'ticket')
    ticket.style.setProperty('--tilt', TILTS[index % TILTS.length])
    const asking = table.lines.filter(line => line.phase === 'ask').length
    if (asking > 0) ticket.append(element('span', 'flag', words.asking))

    const head = element('header', 'ticket-head')
    head.append(element('h2', 'ticket-title', table.title))
    const app = element('span', 'app', table.app)
    app.dataset.app = table.app === 'Claude' ? 'claude' : ''
    app.title = table.via === 'mod' ? words.viaMod : words.viaHooks
    head.append(app)
    const meta = element('div', 'meta')
    meta.append(element('span', '', table.started))
    if (table.link !== '' && table.link.startsWith('https://claude.ai/')) {
      const link = element('a', '', words.open)
      link.href = table.link
      link.target = '_blank'
      link.rel = 'noopener noreferrer'
      meta.append(link)
    }
    head.append(meta)
    ticket.append(head)

    const seats = element('ul', 'seats')
    for (const line of table.lines) seats.append(drawSeat(line))
    ticket.append(seats)
    if (!table.inPicture) ticket.append(element('p', 'note', words.offPicture))
    return ticket
  }

  function draw(view) {
    skew = view.at - Date.now()
    drawTally(view)
    drawPicture(view)
    rail.replaceChildren(...view.tables.map(drawTicket))
  }

  function countUp() {
    const now = Date.now() + skew
    for (const clock of rail.querySelectorAll('[data-since]')) {
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
      fetch('/api/view?cols=3', { credentials: 'same-origin', cache: 'no-store' })
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
    columns = columnsFor(windowFrame.clientWidth || window.innerWidth)
    const query = new URLSearchParams({
      cols: String(columns),
      lang: words.lang,
      motion: reducedMotion.matches ? '0' : '1',
    })
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

  let resizing = 0
  window.addEventListener('resize', () => {
    clearTimeout(resizing)
    resizing = setTimeout(() => {
      if (columnsFor(windowFrame.clientWidth || window.innerWidth) !== columns) {
        shownSig = null
        connect()
      }
    }, 400)
  })
  reducedMotion.addEventListener('change', () => {
    shownSig = null
    connect()
  })

  setInterval(countUp, 1000)
  connect()
})()
