export type BlockElementType =
  | "text"
  | "image"
  | "button"
  | "container"

export interface AnimationConfig {
  initial?: any
  animate?: any
  whileInView?: any
  exit?: any
  transition?: {
    duration?: number
    delay?: number
    ease?: string
  }
}

export interface BlockElement {
  id: string
  type: BlockElementType

  content?: string
  src?: string
  href?: string

  classes?: string
  style?: React.CSSProperties

  animation?: AnimationConfig

  children?: BlockElement[]

  // Forward-thinking for editor
  locked?: boolean
  label?: string
}

export interface BlockConfig {
  id: string
  name: string
  version: number

  displayMode?: "carousel" | "stack" // optional, defaults to stack
  size?: "full" | "half" | "medium" | "small" | "thumbnail"
  height?: string                     // e.g., "min-h-screen"
  containerClasses?: string

  background: {
    src: string
    size?: string
    position?: string
  }

  overlay?: {
    color?: string
    opacity?: number
  }

  elements: BlockElement[]
}