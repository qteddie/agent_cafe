// The café's music: a slow, warm lo-fi jazz loop that the browser plays by
// itself (Web Audio), so the page carries no recording and no licence comes
// with it. An electric piano comps jazz chords, a double bass walks under
// them, brushes keep time, a vibraphone wanders in now and then, a record
// crackles; once in a while the espresso machine hisses or a cup clinks.
//
// Every few minutes the tune moves to another key and another progression.
// Notes are scheduled a little ahead of the audio clock (a whole minute ahead
// while the tab is hidden, where timers slow down), so the music never stumbles.
//
// Browsers allow sound only after the person does something on the page:
// `start` is called from a click.

export type Music = {
  readonly isPlaying: boolean
  start: () => Promise<void>
  stop: () => void
  /** 0 to 1. */
  setVolume: (volume: number) => void
}

const BPM = 72
const BEAT = 60 / BPM
const BAR = BEAT * 4
/** Where a swung off-beat eighth falls within its beat: 0.5 is straight, 0.67 a triplet. */
const SWING = 0.63
/** Bars before the tune moves to another key and progression. */
const SONG_BARS = 16

/** Chord voicings, as semitones above the root: rootless and close, as a pianist plays them. */
const VOICINGS = {
  maj9: [4, 7, 11, 14],
  m9: [3, 7, 10, 14],
  m11: [3, 10, 14, 17],
  dom13: [4, 10, 14, 21],
  dom7b9: [4, 10, 13, 19],
  sixNine: [4, 9, 14, 19],
} as const

type Quality = keyof typeof VOICINGS
/** A chord: its root, in semitones above the key, and its quality. */
type Step = readonly [number, Quality]

/** Four-bar progressions, one chord a bar: the staples of a slow café afternoon. */
const PROGRESSIONS: readonly (readonly Step[])[] = [
  [[2, 'm9'], [7, 'dom13'], [0, 'maj9'], [9, 'dom7b9']],
  [[5, 'maj9'], [4, 'm9'], [2, 'm9'], [0, 'maj9']],
  [[0, 'maj9'], [9, 'm9'], [2, 'm11'], [7, 'dom13']],
  [[4, 'm9'], [9, 'dom7b9'], [2, 'm9'], [7, 'dom13']],
  [[2, 'm11'], [7, 'dom13'], [4, 'm9'], [9, 'm9']],
  [[0, 'sixNine'], [5, 'maj9'], [2, 'm9'], [7, 'dom13']],
]

/** Keys, as pitch classes: E♭, F, A♭, B♭, D, C. */
const KEYS = [3, 5, 8, 10, 2, 0]

/** How the piano comps a bar: when each chord is struck, in eighths, and for how many. */
const COMPS: readonly (readonly (readonly [number, number])[])[] = [
  [[0, 7.5]],
  [[0, 3], [3, 4.5]],
  [[0, 2], [5, 2.5]],
  [[1, 6.5]],
  [[0, 1.5], [3, 1], [6, 1.5]],
]

function frequency(midi: number): number {
  return 440 * 2 ** ((midi - 69) / 12)
}

export function createMusic(): Music | undefined {
  const Context = window.AudioContext ?? (window as unknown as { webkitAudioContext?: typeof AudioContext }).webkitAudioContext
  if (Context === undefined) return undefined

  let context: AudioContext | undefined
  let master: GainNode | undefined
  let pianoBus: GainNode | undefined
  let bassBus: GainNode | undefined
  let drumBus: GainNode | undefined
  let reverb: GainNode | undefined
  let wobble: GainNode | undefined
  let noise: AudioBuffer | undefined
  let timer = 0
  let volume = 0.6
  let isPlaying = false
  let nextBar = 0
  let bar = 0
  let key = KEYS[1] ?? 5
  let progression = PROGRESSIONS[0] ?? []
  let lastVoicing: number[] = []

  const random = Math.random
  const pick = <T>(items: readonly T[]): T => items[Math.floor(random() * items.length)] as T

  /** The swung time of eighth `n` (0 to 7) of the bar that begins at `start`, a touch off the grid as a person plays. */
  const eighth = (start: number, n: number): number => {
    const beat = Math.floor(n / 2)
    const isOff = n % 2 === 1
    return start + (beat + (isOff ? SWING : 0)) * BEAT + (random() - 0.5) * 0.012
  }

  function build(audio: AudioContext): void {
    master = audio.createGain()
    master.gain.value = 0
    const squeeze = audio.createDynamicsCompressor()
    squeeze.threshold.value = -20
    squeeze.ratio.value = 3
    squeeze.attack.value = 0.02
    squeeze.release.value = 0.3
    master.connect(squeeze).connect(audio.destination)

    // Warm and a little worn: the top rolled off, as from an old record.
    const warmth = audio.createBiquadFilter()
    warmth.type = 'lowpass'
    warmth.frequency.value = 3600
    warmth.Q.value = 0.4
    warmth.connect(master)

    // A small room: a reverb from an impulse of fading noise.
    const room = audio.createConvolver()
    const length = Math.floor(audio.sampleRate * 2.4)
    const impulse = audio.createBuffer(2, length, audio.sampleRate)
    for (let channel = 0; channel < 2; channel += 1) {
      const data = impulse.getChannelData(channel)
      for (let index = 0; index < length; index += 1) data[index] = (random() * 2 - 1) * (1 - index / length) ** 2.6
    }
    room.buffer = impulse
    reverb = audio.createGain()
    reverb.gain.value = 0.22
    reverb.connect(room).connect(warmth)

    // The piano, its tremolo, and a slow wobble of pitch as on worn tape.
    pianoBus = audio.createGain()
    pianoBus.gain.value = 0.9
    const tremolo = audio.createGain()
    tremolo.gain.value = 0.85
    const tremoloLfo = audio.createOscillator()
    tremoloLfo.frequency.value = 4.2
    const tremoloDepth = audio.createGain()
    tremoloDepth.gain.value = 0.12
    tremoloLfo.connect(tremoloDepth).connect(tremolo.gain)
    tremoloLfo.start()
    pianoBus.connect(tremolo)
    tremolo.connect(warmth)
    tremolo.connect(reverb)
    const wobbleLfo = audio.createOscillator()
    wobbleLfo.frequency.value = 0.45
    wobble = audio.createGain()
    wobble.gain.value = 6
    wobbleLfo.connect(wobble)
    wobbleLfo.start()

    bassBus = audio.createGain()
    bassBus.gain.value = 0.85
    const bassTone = audio.createBiquadFilter()
    bassTone.type = 'lowpass'
    bassTone.frequency.value = 520
    bassBus.connect(bassTone).connect(warmth)

    drumBus = audio.createGain()
    drumBus.gain.value = 0.7
    drumBus.connect(warmth)
    drumBus.connect(reverb)

    noise = audio.createBuffer(1, audio.sampleRate, audio.sampleRate)
    const white = noise.getChannelData(0)
    for (let index = 0; index < white.length; index += 1) white[index] = random() * 2 - 1

    // The record's crackle and hiss, all the while.
    const crackleLength = audio.sampleRate * 6
    const crackle = audio.createBuffer(1, crackleLength, audio.sampleRate)
    const grain = crackle.getChannelData(0)
    let hiss = 0
    for (let index = 0; index < crackleLength; index += 1) {
      hiss = hiss * 0.92 + (random() * 2 - 1) * 0.08
      grain[index] = hiss * 0.05
      if (random() < 0.00018) {
        const pop = (random() * 0.5 + 0.2) * (random() < 0.5 ? -1 : 1)
        for (let tail = 0; tail < 40 && index + tail < crackleLength; tail += 1) grain[index + tail] = (grain[index + tail] ?? 0) + pop * Math.exp(-tail / 6)
      }
    }
    const record = audio.createBufferSource()
    record.buffer = crackle
    record.loop = true
    const recordTone = audio.createBiquadFilter()
    recordTone.type = 'highpass'
    recordTone.frequency.value = 700
    const recordLevel = audio.createGain()
    recordLevel.gain.value = 0.22
    record.connect(recordTone).connect(recordLevel).connect(master)
    record.start()
  }

  // -------------------------------------------------------------------------
  // The players.

  function piano(audio: AudioContext, time: number, midi: number, velocity: number, length: number): void {
    if (pianoBus === undefined || wobble === undefined) return
    const pitch = frequency(midi)
    const end = time + length
    const carrier = audio.createOscillator()
    carrier.frequency.value = pitch
    // A modulator at the same pitch gives the electric piano its bark; it mellows as the note rings.
    const modulator = audio.createOscillator()
    modulator.frequency.value = pitch
    const depth = audio.createGain()
    depth.gain.setValueAtTime(pitch * 1.1 * velocity, time)
    depth.gain.exponentialRampToValueAtTime(pitch * 0.06 + 0.01, time + 1.1)
    modulator.connect(depth).connect(carrier.frequency)
    wobble.connect(carrier.detune)
    // The tine: a bright ping two octaves up, gone at once.
    const tine = audio.createOscillator()
    tine.frequency.value = pitch * 4
    const tineLevel = audio.createGain()
    tineLevel.gain.setValueAtTime(0.05 * velocity, time)
    tineLevel.gain.exponentialRampToValueAtTime(0.0001, time + 0.22)
    const amp = audio.createGain()
    amp.gain.setValueAtTime(0, time)
    amp.gain.linearRampToValueAtTime(0.16 * velocity, time + 0.008)
    amp.gain.setTargetAtTime(0.06 * velocity, time + 0.01, 0.7)
    amp.gain.setTargetAtTime(0, end, 0.12)
    carrier.connect(amp)
    tine.connect(tineLevel).connect(amp)
    amp.connect(pianoBus)
    for (const oscillator of [carrier, modulator, tine]) {
      oscillator.start(time)
      oscillator.stop(end + 0.8)
    }
    // The shared wobble lets go of the note once it is over: else every note ever played would stay alive.
    const tape = wobble
    carrier.onended = () => tape.disconnect(carrier.detune)
  }

  function bass(audio: AudioContext, time: number, midi: number, velocity: number, length: number): void {
    if (bassBus === undefined) return
    const end = time + length
    const amp = audio.createGain()
    amp.gain.setValueAtTime(0, time)
    amp.gain.linearRampToValueAtTime(0.42 * velocity, time + 0.012)
    amp.gain.setTargetAtTime(0.2 * velocity, time + 0.02, 0.25)
    amp.gain.setTargetAtTime(0, end, 0.06)
    for (const [type, level] of [
      ['triangle', 0.7],
      ['sine', 1],
    ] as const) {
      const oscillator = audio.createOscillator()
      oscillator.type = type
      oscillator.frequency.value = frequency(midi)
      const gain = audio.createGain()
      gain.gain.value = level
      oscillator.connect(gain).connect(amp)
      oscillator.start(time)
      oscillator.stop(end + 0.4)
    }
    amp.connect(bassBus)
  }

  function vibes(audio: AudioContext, time: number, midi: number, velocity: number): void {
    if (pianoBus === undefined) return
    const amp = audio.createGain()
    amp.gain.setValueAtTime(0, time)
    amp.gain.linearRampToValueAtTime(0.07 * velocity, time + 0.01)
    amp.gain.setTargetAtTime(0, time + 0.05, 0.55)
    const motor = audio.createGain()
    motor.gain.value = 0.75
    const lfo = audio.createOscillator()
    lfo.frequency.value = 5.5
    const lfoDepth = audio.createGain()
    lfoDepth.gain.value = 0.25
    lfo.connect(lfoDepth).connect(motor.gain)
    for (const [ratio, level] of [
      [1, 1],
      [4, 0.12],
    ] as const) {
      const oscillator = audio.createOscillator()
      oscillator.frequency.value = frequency(midi) * ratio
      const gain = audio.createGain()
      gain.gain.value = level
      oscillator.connect(gain).connect(amp)
      oscillator.start(time)
      oscillator.stop(time + 3)
    }
    lfo.start(time)
    lfo.stop(time + 3)
    amp.connect(motor).connect(pianoBus)
  }

  /** A burst of noise through a filter: a brush, a hat, steam. */
  function hush(
    audio: AudioContext,
    time: number,
    level: number,
    decay: number,
    filter: BiquadFilterType,
    at: number,
    q = 0.7,
    bus: AudioNode | undefined = drumBus,
  ): void {
    if (noise === undefined || bus === undefined) return
    const source = audio.createBufferSource()
    source.buffer = noise
    source.playbackRate.value = 0.8 + random() * 0.4
    const shape = audio.createBiquadFilter()
    shape.type = filter
    shape.frequency.value = at
    shape.Q.value = q
    const amp = audio.createGain()
    amp.gain.setValueAtTime(0, time)
    amp.gain.linearRampToValueAtTime(level, time + Math.min(0.01, decay / 4))
    amp.gain.exponentialRampToValueAtTime(0.0001, time + decay)
    source.connect(shape).connect(amp).connect(bus)
    source.start(time, random() * 0.5)
    source.stop(time + decay + 0.05)
  }

  function kick(audio: AudioContext, time: number, velocity: number): void {
    if (drumBus === undefined) return
    const oscillator = audio.createOscillator()
    oscillator.frequency.setValueAtTime(115, time)
    oscillator.frequency.exponentialRampToValueAtTime(46, time + 0.1)
    const amp = audio.createGain()
    amp.gain.setValueAtTime(0.5 * velocity, time)
    amp.gain.exponentialRampToValueAtTime(0.0001, time + 0.34)
    oscillator.connect(amp).connect(drumBus)
    oscillator.start(time)
    oscillator.stop(time + 0.4)
  }

  /** A cup set down on a saucer, somewhere in the room. */
  function clink(audio: AudioContext, time: number): void {
    if (reverb === undefined || master === undefined) return
    for (const [pitch, level] of [
      [2350, 0.02],
      [3720, 0.012],
      [5180, 0.006],
    ] as const) {
      const oscillator = audio.createOscillator()
      oscillator.frequency.value = pitch * (0.97 + random() * 0.06)
      const amp = audio.createGain()
      amp.gain.setValueAtTime(level, time)
      amp.gain.exponentialRampToValueAtTime(0.0001, time + 0.5)
      oscillator.connect(amp)
      amp.connect(reverb)
      amp.connect(master)
      oscillator.start(time)
      oscillator.stop(time + 0.55)
    }
  }

  // -------------------------------------------------------------------------
  // The tune.

  /** The chord's notes, kept near the last chord's so the hands barely move. */
  function voice(root: number, quality: Quality): number[] {
    const base = 48 + ((key + root) % 12)
    const notes = VOICINGS[quality].map(step => base + step)
    const centre = lastVoicing.length === 0 ? 62 : lastVoicing.reduce((sum, note) => sum + note, 0) / lastVoicing.length
    let best = notes
    let bestDistance = Infinity
    for (const shift of [-12, 0, 12]) {
      const moved = notes.map(note => note + shift)
      const mean = moved.reduce((sum, note) => sum + note, 0) / moved.length
      const distance = Math.abs(mean - centre) + Math.abs(mean - 62) * 0.5
      if (distance < bestDistance) {
        best = moved
        bestDistance = distance
      }
    }
    lastVoicing = best.map(note => (note > 77 ? note - 12 : note)).sort((one, other) => one - other)
    return lastVoicing
  }

  function playBar(audio: AudioContext, start: number): void {
    if (bar % SONG_BARS === 0 && bar > 0) {
      key = pick(KEYS)
      progression = pick(PROGRESSIONS)
    }
    const [root, quality] = progression[bar % progression.length] ?? [0, 'maj9']
    const [nextRoot] = progression[(bar + 1) % progression.length] ?? [0, 'maj9']
    const phrase = bar % 8
    const chord = voice(root, quality)

    // The piano: the chord, rolled from the bottom up, in one of a few comping rhythms.
    for (const [at, length] of pick(COMPS)) {
      const velocity = 0.7 + random() * 0.3
      chord.forEach((note, index) => piano(audio, eighth(start, at) + index * (0.012 + random() * 0.01), note, velocity * (index === 0 ? 0.9 : 1), length * BEAT * 0.5))
    }

    // The bass: the root on one, the fifth or the root again on three, and a step toward the next chord.
    const bassRoot = 36 + ((key + root) % 12)
    const fifth = bassRoot + 7 > 47 ? bassRoot - 5 : bassRoot + 7
    bass(audio, eighth(start, 0), bassRoot, 1, BEAT * 1.8)
    bass(audio, eighth(start, 4), random() < 0.6 ? fifth : bassRoot + 12 > 50 ? bassRoot : bassRoot + 12, 0.85, BEAT * 1.3)
    if (random() < 0.55) {
      const target = 36 + ((key + nextRoot) % 12)
      const approach = random() < 0.5 ? target + 1 : target - 1
      bass(audio, eighth(start, 7), approach, 0.7, BEAT * 0.45)
    }

    // The brushes: a soft kick, a swish on two and four, the hat swung.
    kick(audio, eighth(start, 0), 1)
    if (random() < 0.45) kick(audio, eighth(start, 5), 0.6)
    for (const at of [2, 6]) {
      hush(audio, eighth(start, at), 0.11, 0.2, 'bandpass', 2400, 0.6)
      hush(audio, eighth(start, at) - 0.04, 0.035, 0.32, 'bandpass', 1500, 0.4)
    }
    for (let at = 0; at < 8; at += 1) {
      if (random() < 0.1) continue
      hush(audio, eighth(start, at), at % 2 === 1 ? 0.05 : 0.032, 0.05, 'highpass', 7000)
    }
    if (random() < 0.25) hush(audio, eighth(start, 1 + Math.floor(random() * 6)), 0.03, 0.12, 'bandpass', 2800, 0.6)

    // Now and then, toward the end of a phrase, a few notes on the vibraphone.
    if (phrase >= 4 && random() < 0.45) {
      const scale = [0, 2, 4, 7, 9].map(step => 72 + ((key + step) % 12))
      let at = 1 + Math.floor(random() * 3)
      const count = 2 + Math.floor(random() * 3)
      for (let note = 0; note < count && at < 8; note += 1) {
        vibes(audio, eighth(start, at), pick([...scale, ...chord.map(tone => tone + 12)].filter(tone => tone <= 86)), 0.6 + random() * 0.4)
        at += 1 + Math.floor(random() * 2)
      }
    }

    // The café: a cup now and then, the espresso machine's steam once in a long while.
    if (random() < 0.12) clink(audio, start + random() * BAR)
    if (random() < 0.04) hush(audio, start + random() * BAR, 0.025, 2.4, 'bandpass', 4200, 0.8, master)
  }

  function schedule(): void {
    const audio = context
    if (audio === undefined) return
    // A hidden tab's timers fire once a minute at worst: then the music is written out further ahead.
    const ahead = document.hidden ? 65 : 0.4
    while (nextBar < audio.currentTime + ahead) {
      playBar(audio, nextBar)
      nextBar += BAR
      bar += 1
    }
  }

  return {
    get isPlaying() {
      return isPlaying
    },

    async start() {
      if (isPlaying) return
      isPlaying = true
      const audio = new Context()
      context = audio
      build(audio)
      await audio.resume()
      // Stopped again while the browser was starting the sound: let it go.
      if (context !== audio) {
        void audio.close()
        return
      }
      key = pick(KEYS)
      progression = pick(PROGRESSIONS)
      bar = 0
      lastVoicing = []
      nextBar = audio.currentTime + 0.15
      master?.gain.setValueAtTime(0, audio.currentTime)
      master?.gain.linearRampToValueAtTime(volume, audio.currentTime + 2.5)
      schedule()
      timer = window.setInterval(schedule, 120)
    },

    stop() {
      if (!isPlaying) return
      isPlaying = false
      window.clearInterval(timer)
      const audio = context
      const gain = master
      context = undefined
      if (audio === undefined) return
      gain?.gain.cancelScheduledValues(audio.currentTime)
      gain?.gain.setTargetAtTime(0, audio.currentTime, 0.15)
      window.setTimeout(() => void audio.close(), 800)
    },

    setVolume(next) {
      volume = Math.max(0, Math.min(1, next))
      const audio = context
      if (audio !== undefined && master !== undefined) master.gain.setTargetAtTime(volume, audio.currentTime, 0.08)
    },
  }
}
