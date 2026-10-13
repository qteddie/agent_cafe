// The 3D café's building blocks: one material per color, a unit box every
// block is scaled from, a batch that merges the furniture that never moves
// into a few meshes, and the textures painted on canvases (the floor, the
// bubbles, the chalkboard).

import * as THREE from 'three'
import { mergeGeometries } from 'three/addons/utils/BufferGeometryUtils.js'

import type { Grid, Inks } from '../../hooks/sprites'
import { ICONS, INK } from '../../hooks/sprites'

const materials = new Map<string, THREE.MeshLambertMaterial>()

/** The one matte material of this color. */
export function mat(color: string): THREE.MeshLambertMaterial {
  let made = materials.get(color)
  if (made === undefined) {
    made = new THREE.MeshLambertMaterial({ color })
    materials.set(color, made)
  }
  return made
}

const glows = new Map<string, THREE.MeshBasicMaterial>()

/** A material that lights itself: a screen, a bulb, a window. */
export function glow(color: string): THREE.MeshBasicMaterial {
  let made = glows.get(color)
  if (made === undefined) {
    made = new THREE.MeshBasicMaterial({ color })
    glows.set(color, made)
  }
  return made
}

export const UNIT_BOX = new THREE.BoxGeometry(1, 1, 1)

/** The material of everything painted in vertex colors: most of the café, in one. */
export const PAINT = new THREE.MeshLambertMaterial({ vertexColors: true })
/** The same, lighting itself: windows, bulbs. */
export const PAINT_GLOW = new THREE.MeshBasicMaterial({ vertexColors: true })

/** A box of this size whose middle is at (x, y, z). */
export function block(
  material: THREE.Material,
  w: number,
  h: number,
  d: number,
  x = 0,
  y = 0,
  z = 0,
): THREE.Mesh {
  const mesh = new THREE.Mesh(UNIT_BOX, material)
  mesh.scale.set(w, h, d)
  mesh.position.set(x, y, z)
  return mesh
}

/** One box of a merged shape: its color, size and middle, and a turn about y. */
export type Part = { color: string; w: number; h: number; d: number; x: number; y: number; z: number; yaw?: number }

/**
 * Shapes gathered and merged into one geometry, each painted its color in
 * the vertices: a whole room of boxes drawn at once.
 */
export class Batch {
  private readonly parts: THREE.BufferGeometry[] = []
  private readonly matrix = new THREE.Matrix4()
  private readonly turn = new THREE.Quaternion()
  private readonly euler = new THREE.Euler()
  private readonly color = new THREE.Color()

  add(color: string, geometry: THREE.BufferGeometry, x: number, y: number, z: number, yaw = 0, sx = 1, sy = 1, sz = 1, pitch = 0): void {
    this.turn.setFromEuler(this.euler.set(pitch, yaw, 0, 'YXZ'))
    this.matrix.compose(new THREE.Vector3(x, y, z), this.turn, new THREE.Vector3(sx, sy, sz))
    const placed = geometry.index === null ? geometry.clone() : geometry.toNonIndexed()
    placed.applyMatrix4(this.matrix)
    for (const name of Object.keys(placed.attributes)) {
      if (name !== 'position' && name !== 'normal') placed.deleteAttribute(name)
    }
    this.color.set(color)
    const count = placed.getAttribute('position').count
    const colors = new Float32Array(count * 3)
    for (let index = 0; index < count; index += 1) {
      colors[index * 3] = this.color.r
      colors[index * 3 + 1] = this.color.g
      colors[index * 3 + 2] = this.color.b
    }
    placed.setAttribute('color', new THREE.BufferAttribute(colors, 3))
    this.parts.push(placed)
  }

  /** A box whose middle is at (x, y, z). */
  part(part: Part): void {
    this.add(part.color, UNIT_BOX, part.x, part.y, part.z, part.yaw ?? 0, part.w, part.h, part.d)
  }

  /** A box whose bottom middle is at (x, y, z): furniture stands on the floor. */
  box(color: string, w: number, h: number, d: number, x: number, y: number, z: number, yaw = 0): void {
    this.add(color, UNIT_BOX, x, y + h / 2, z, yaw, w, h, d)
  }

  /** Everything added, as one geometry; the batch is empty again after. */
  geometry(): THREE.BufferGeometry {
    const merged = this.parts.length === 0 ? new THREE.BufferGeometry() : mergeGeometries(this.parts, false)
    for (const part of this.parts) part.dispose()
    this.parts.length = 0
    return merged ?? new THREE.BufferGeometry()
  }

  /** Everything added, as one mesh. */
  build(isGlow = false, castShadow = true, receiveShadow = true): THREE.Mesh {
    const mesh = new THREE.Mesh(this.geometry(), isGlow ? PAINT_GLOW : PAINT)
    mesh.castShadow = castShadow && !isGlow
    mesh.receiveShadow = receiveShadow && !isGlow
    return mesh
  }
}

/** Boxes merged into one geometry. */
export function partsGeometry(parts: readonly Part[]): THREE.BufferGeometry {
  const batch = new Batch()
  for (const part of parts) batch.part(part)
  return batch.geometry()
}

/** A texture painted on a canvas by `paint`. */
export function canvasTexture(
  width: number,
  height: number,
  paint: (context: CanvasRenderingContext2D) => void,
  isPixelArt = false,
): THREE.CanvasTexture {
  const canvas = document.createElement('canvas')
  canvas.width = width
  canvas.height = height
  const context = canvas.getContext('2d')
  if (context !== null) paint(context)
  const texture = new THREE.CanvasTexture(canvas)
  texture.colorSpace = THREE.SRGBColorSpace
  if (isPixelArt) {
    texture.magFilter = THREE.NearestFilter
    texture.minFilter = THREE.NearestFilter
    texture.generateMipmaps = false
  }
  return texture
}

/** Paints a sprite grid at (x, y), `size` canvas pixels to one of its pixels. */
export function paintGrid(context: CanvasRenderingContext2D, grid: Grid, inks: Inks, x: number, y: number, size: number): void {
  grid.forEach((row, rowIndex) => {
    for (let column = 0; column < row.length; column += 1) {
      const color = inks[row[column] ?? '.']
      if (color === undefined) continue
      context.fillStyle = color
      context.fillRect(x + column * size, y + rowIndex * size, size, size)
    }
  })
}

/** A small seeded random number source, so the room looks the same at every visit. */
function seeded(seed: number): () => number {
  let state = seed
  return () => {
    state = (state * 1_664_525 + 1_013_904_223) >>> 0
    return state / 4_294_967_296
  }
}

/** The floor: warm planks, staggered, each a shade of its own. */
export function floorTexture(): THREE.CanvasTexture {
  const random = seeded(7)
  const texture = canvasTexture(512, 512, context => {
    const tones = ['#c79a6c', '#c99d70', '#c3956a', '#cca174', '#c09168']
    const rows = 8
    const height = 512 / rows
    for (let row = 0; row < rows; row += 1) {
      let x = -Math.floor(random() * 160)
      while (x < 512) {
        const length = 140 + Math.floor(random() * 120)
        context.fillStyle = tones[Math.floor(random() * tones.length)] ?? '#c79a6c'
        context.fillRect(x, row * height, length, height)
        context.fillStyle = 'rgba(255,255,255,0.06)'
        context.fillRect(x, row * height + 2, length, 2)
        context.fillStyle = '#a97c52'
        context.fillRect(x + length - 2, row * height, 2, height)
        x += length
      }
      context.fillStyle = '#ab7f55'
      context.fillRect(0, row * height + height - 3, 512, 3)
    }
  })
  texture.wrapS = THREE.RepeatWrapping
  texture.wrapT = THREE.RepeatWrapping
  return texture
}

// ---------------------------------------------------------------------------
// Bubbles: the pixel bubble of the café picture, over a guest's head.

export type BubbleName =
  | 'none'
  | 'think0'
  | 'think1'
  | 'think2'
  | 'ask'
  | 'query'
  | 'done'
  | 'fail'
  | 'pencil'
  | 'shell'
  | 'globe'
  | 'gear'
  | 'people'
  | 'book'
  | 'lens'
  | 'list'
  | 'cup'
  | 'zzz'

const ASK = '#ffd84d'
const GOOD = '#69b96c'
const BAD = '#e0564b'
const CLAUDE = '#d97757'

const CUP_ICON: Grid = ['.a.a...', '..a.a..', '.......', '#####..', '#ccc###', '#ccc#.#', '.###...']
const ZZZ_ICON: Grid = ['....###', '.....#.', '....###', '###....', '.#.....', '###....', '.......']

const ICON_GRIDS: Partial<Record<BubbleName, Grid>> = {
  ask: ICONS.bang,
  query: ICONS.query,
  done: ICONS.check,
  fail: ICONS.cross,
  pencil: ICONS.pencil,
  shell: ICONS.shell,
  globe: ICONS.globe,
  gear: ICONS.gear,
  people: ICONS.people,
  book: ICONS.book,
  lens: ICONS.lens,
  list: ICONS.list,
  cup: CUP_ICON,
  zzz: ZZZ_ICON,
}

const bubbles = new Map<BubbleName, THREE.CanvasTexture>()

/** The bubble's texture: a frame 13 by 12 pixels, its tail down-left, and an icon in it. */
export function bubbleTexture(name: BubbleName): THREE.CanvasTexture | undefined {
  if (name === 'none') return undefined
  const kept = bubbles.get(name)
  if (kept !== undefined) return kept
  const size = 8
  const texture = canvasTexture(
    13 * size,
    12 * size,
    context => {
      const fill = name === 'ask' || name === 'query' ? ASK : name === 'done' ? GOOD : name === 'fail' ? BAD : '#ffffff'
      const frame: Grid = [
        '.ooooooooooo.',
        'offfffffffffo',
        'offfffffffffo',
        'offfffffffffo',
        'offfffffffffo',
        'offfffffffffo',
        'offfffffffffo',
        'offfffffffffo',
        'offfffffffffo',
        '.ooooooooooo.',
        '..oo.........',
        '.o...........',
      ]
      paintGrid(context, frame, { o: INK, f: fill }, 0, 0, size)
      if (name.startsWith('think')) {
        const lit = Number(name.slice(5))
        for (let index = 0; index < 3; index += 1) {
          context.fillStyle = index === lit ? INK : 'rgba(43,35,32,0.28)'
          context.fillRect((3 + index * 3) * size, 4 * size, 2 * size, 2 * size)
        }
        return
      }
      const icon = ICON_GRIDS[name] ?? ICONS.gear
      const ink = name === 'done' || name === 'fail' ? '#ffffff' : INK
      paintGrid(context, icon, { '#': ink, a: name === 'cup' ? '#c9c9c9' : CLAUDE, c: '#8a623f' }, 3 * size, 1 * size, size)
    },
    true,
  )
  bubbles.set(name, texture)
  return texture
}
