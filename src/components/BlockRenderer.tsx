"use client"
import { motion } from "framer-motion"
import { BlockConfig, BlockElement } from "@/types/block"
import TraceText from "./TraceText"

interface Props {
  block: BlockConfig
}

function RenderElement(el: BlockElement) {
  const MotionTag: any = motion.div

  if (el.type === "text")
    return (
      <MotionTag key={el.id} className={el.classes} style={el.style} {...el.animation}>
        {el.content}
      </MotionTag>
    )

  if (el.type === "traceText")
    return (
      <TraceText
        key={el.id}
        word={el.content || ""}
        {...el.options}
        className={el.classes}
      />
    )

  if (el.type === "image")
    return (
      <motion.img
        key={el.id}
        src={el.src}
        className={el.classes}
        style={el.style}
        {...el.animation}
      />
    )

  if (el.type === "button")
    return (
      <motion.a key={el.id} href={el.href} className={el.classes} {...el.animation}>
        {el.content}
      </motion.a>
    )

  if (el.type === "container")
    return (
      <motion.div key={el.id} className={el.classes} style={el.style} {...el.animation}>
        {el.children?.map(RenderElement)}
      </motion.div>
    )

  return null
}

export default function BlockRenderer({ block }: Props) {
  const heightClass =
    block.size === "thumbnail"
      ? "h-64"
      : block.size === "half"
      ? "min-h-[50vh]"
      : block.size === "full"
      ? "min-h-screen"
      : block.size === "medium"
      ? "min-h-[60vh]"
      : "min-h-[40vh]"

  const containerClasses =
    block.containerClasses ||
    (block.size === "thumbnail"
      ? "flex flex-col justify-end items-start p-4 relative text-white"
      : "absolute inset-0 flex flex-col items-center justify-center text-center px-6")

  return (
    <section className={`relative overflow-hidden text-white ${heightClass}`}>
      <div
        className={`absolute inset-0 bg-cover bg-center ${
          block.size !== "thumbnail" ? "scale-105" : ""
        }`}
        style={{
          backgroundImage: `url(${block.background.src})`,
          backgroundSize: block.background.size || "cover",
          backgroundPosition: block.background.position || "center",
        }}
      />
      {block.overlay && (
        <div
          className="absolute inset-0"
          style={{
            backgroundColor: block.overlay.color || "black",
            opacity: block.overlay.opacity ?? 0.4,
          }}
        />
      )}
      <div className={containerClasses}>{block.elements.map(RenderElement)}</div>
    </section>
  )
}