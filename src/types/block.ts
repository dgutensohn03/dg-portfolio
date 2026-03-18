// /types/block.ts

export type BlockSize = "thumbnail" | "half" | "medium" | "full"

export type BlockDisplayMode = "carousel" | "stack"

export type BlockElementType =
  | "text"
  | "traceText"
  | "image"
  | "button"
  | "container"

export interface TraceTextOptions {
  strokeWidth?: number
  strokeColor?: string
  fillColor?: string
  dropShadow?: string
  sequential?: boolean
  duration?: number
  delayPerLetter?: number
  outlineBox?: boolean
  outlineColor?: string
  outlineWidth?: number
}

export interface BlockElement {
  id: string
  type: BlockElementType

  content?: string
  src?: string
  href?: string

  classes?: string
  style?: React.CSSProperties
  animation?: any

  children?: BlockElement[]

  // Used by special element types like traceText
  options?: TraceTextOptions | Record<string, any>
}

export interface BlockBackground {
  src: string
  size?: string
  position?: string
}

export interface BlockOverlay {
  color?: string
  opacity?: number
}

export interface BlockConfig {
  id: string
  name: string
  version: number

  size: BlockSize
  displayMode?: BlockDisplayMode
  height?: string

  background: BlockBackground
  overlay?: BlockOverlay

  containerClasses?: string

  elements: BlockElement[]
}