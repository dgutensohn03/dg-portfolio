"use client"
import { useState, useEffect, useRef } from "react"
import { motion, AnimatePresence, PanInfo } from "framer-motion"
import { BlockConfig } from "@/types/block"
import BlockRenderer from "./BlockRenderer"
import { LucideChevronLeft, LucideChevronRight } from "lucide-react"

interface CarouselProps {
  data: BlockConfig[]
  height?: string
  interval?: number
  mode?: "loop" | "once"
  showProgress?: boolean
  showNav?: boolean
  showMultiple?: boolean
  className?: string
}

export default function Carousel({
  data,
  height = "min-h-screen",
  interval = 5000,
  mode = "loop",
  showProgress = true,
  showNav = true,
  showMultiple = false,
  className = "",
}: CarouselProps) {
  const [current, setCurrent] = useState(0)
  const containerRef = useRef<HTMLDivElement>(null)
  const progressRef = useRef<HTMLDivElement>(null)

  const carouselBlocks = data.filter((b) => b.displayMode === "carousel")
  const total = carouselBlocks.length

  // Auto advance
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((c) => (c === total - 1 ? (mode === "loop" ? 0 : c) : c + 1))
    }, interval)
    return () => clearInterval(timer)
  }, [total, interval, mode])

  // Drag handlers
  const handleDragEnd = (_: any, info: PanInfo) => {
    if (info.offset.x < -50) setCurrent((c) => (c === total - 1 ? (mode === "loop" ? 0 : c) : c + 1))
    if (info.offset.x > 50) setCurrent((c) => (c === 0 ? (mode === "loop" ? total - 1 : 0) : c - 1))
  }

  return (
    <div className={`relative overflow-hidden ${height} ${className}`} ref={containerRef}>
      <motion.div
        className="flex"
        drag="x"
        dragConstraints={{ left: 0, right: 0 }}
        dragElastic={0.2}
        onDragEnd={handleDragEnd}
        animate={{ x: `-${current * (showMultiple ? 50 : 100)}%` }}
        transition={{ type: "spring", stiffness: 120 }}
      >
        {carouselBlocks.map((block) => (
          <div
            key={block.id}
            className={`flex-shrink-0 ${showMultiple ? "w-1/2" : "w-full"} ${
              block.size === "full"
                ? "min-h-screen"
                : block.size === "half"
                ? "min-h-[50vh]"
                : "h-64"
            }`}
          >
            <BlockRenderer block={block} />
          </div>
        ))}
      </motion.div>

      {/* Navigation Buttons */}
      {showNav && (
        <>
          <button
            onClick={() => setCurrent((c) => (c === 0 ? total - 1 : c - 1))}
            className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-white/20 backdrop-blur-md p-3 rounded-full hover:bg-white/40 transition"
          >
            <LucideChevronLeft className="w-6 h-6 text-white" />
          </button>
          <button
            onClick={() => setCurrent((c) => (c === total - 1 ? 0 : c + 1))}
            className="absolute bottom-4 left-1/2 translate-x-1/2 bg-white/20 backdrop-blur-md p-3 rounded-full hover:bg-white/40 transition"
          >
            <LucideChevronRight className="w-6 h-6 text-white" />
          </button>
        </>
      )}

      {/* Progress Bar */}
      {showProgress && (
        <div className="absolute top-0 left-0 w-full h-1 bg-white/20">
          <motion.div
            className="h-full bg-[#fb923c]"
            style={{ width: `${((current + 1) / total) * 100}%` }}
            transition={{ duration: 0.5 }}
          />
        </div>
      )}
    </div>
  )
}