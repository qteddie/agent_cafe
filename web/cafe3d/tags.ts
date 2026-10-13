// The words over the 3D café: a name tag over each guest (its name, and what
// it is doing) and a placard for each table, laid over the canvas where
// their point of the room falls on the screen. Everything a session reported
// is set as text, never as markup.

export type TagPhase = 'think' | 'work' | 'ask' | 'idle' | 'done' | 'fail'

type Tag = {
  root: HTMLDivElement
  name: HTMLSpanElement
  says: HTMLSpanElement
  x: number
  y: number
  depth: number
  isShown: boolean
}

export class Tags {
  private readonly layer: HTMLDivElement
  private readonly tags = new Map<string, Tag>()

  constructor(host: HTMLElement) {
    this.layer = document.createElement('div')
    this.layer.className = 'tags'
    this.layer.setAttribute('aria-hidden', 'true')
    host.append(this.layer)
  }

  /** The tag for `key`, made the first time it is asked for. */
  private tag(key: string, kind: 'guest' | 'table'): Tag {
    let tag = this.tags.get(key)
    if (tag === undefined) {
      const root = document.createElement('div')
      root.className = kind === 'guest' ? 'tag' : 'placard'
      const name = document.createElement('span')
      name.className = 'tag-name'
      const says = document.createElement('span')
      says.className = 'tag-says'
      root.append(name, says)
      root.hidden = true
      this.layer.append(root)
      tag = { root, name, says, x: NaN, y: NaN, depth: NaN, isShown: false }
      this.tags.set(key, tag)
    }
    return tag
  }

  /** Sets what a tag says; `phase` colors it. */
  set(key: string, kind: 'guest' | 'table', name: string, says: string, phase: TagPhase | ''): void {
    const tag = this.tag(key, kind)
    if (tag.name.textContent !== name) tag.name.textContent = name
    if (tag.says.textContent !== says) tag.says.textContent = says
    if ((tag.root.dataset['phase'] ?? '') !== phase) tag.root.dataset['phase'] = phase
  }

  /** Marks a tag: picked out, or plain. */
  mark(key: string, isMarked: boolean): void {
    const tag = this.tags.get(key)
    if (tag !== undefined) tag.root.classList.toggle('is-marked', isMarked)
  }

  /** Where a tag goes, in pixels of the layer; `depth` 0 is nearest. Off screen when `isShown` is false. */
  place(key: string, x: number, y: number, depth: number, isShown: boolean): void {
    const tag = this.tags.get(key)
    if (tag === undefined) return
    if (isShown !== tag.isShown) {
      tag.isShown = isShown
      tag.root.hidden = !isShown
    }
    if (!isShown) return
    if (!(Math.abs(x - tag.x) <= 0.3 && Math.abs(y - tag.y) <= 0.3)) {
      tag.x = x
      tag.y = y
      tag.root.style.transform = `translate3d(${x.toFixed(1)}px, ${y.toFixed(1)}px, 0)`
    }
    const order = Math.round((1 - depth) * 1000)
    if (order !== tag.depth) {
      tag.depth = order
      tag.root.style.zIndex = String(order)
    }
  }

  /**
   * How much the tags say, by how big the guests are on the screen: `full`,
   * `compact` (the name alone), or `tiny` (only for those who need the person).
   */
  setSize(size: 'full' | 'compact' | 'tiny'): void {
    if (this.layer.dataset['size'] !== size) this.layer.dataset['size'] = size
  }

  remove(key: string): void {
    const tag = this.tags.get(key)
    if (tag === undefined) return
    tag.root.remove()
    this.tags.delete(key)
  }

  keys(): string[] {
    return [...this.tags.keys()]
  }
}
