"use client"
import { useEffect, useState } from "react"
import { motion } from "framer-motion"

interface BuildWordProps {
  word: string
  fontSize?: string // Tailwind or raw CSS
  lineWidth?: number
  lineColor?: string
  fillColor?: string
  shadow?: string
  staggerLetters?: boolean
  speed?: number
  outlineAllAtOnce?: boolean
  rotateOutline?: boolean
  containerClasses?: string
}

export default function BuildWord({
  word,
  fontSize = "text-[18vw]",
  lineWidth = 2,
  lineColor = "#fff",
  fillColor = "rgba(255,255,255,0.05)",
  shadow = "drop-shadow-lg",
  staggerLetters = true,
  speed = 150,
  outlineAllAtOnce = false,
  rotateOutline = true,
  containerClasses = "",
}: BuildWordProps) {
  const letters = word.split("")
  const [currentLetter, setCurrentLetter] = useState(0)
  const [outlineComplete, setOutlineComplete] = useState(false)

  // Animate letters one by one
  useEffect(() => {
    if (!staggerLetters || outlineAllAtOnce) return
    if (currentLetter >= letters.length) {
      // Start rectangle animation after last letter
      setTimeout(() => setOutlineComplete(true), 200)
      return
    }
    const timeout = setTimeout(() => setCurrentLetter(currentLetter + 1), speed)
    return () => clearTimeout(timeout)
  }, [currentLetter, letters.length, staggerLetters, speed, outlineAllAtOnce])

  return (
    <div
      className={`relative inline-flex items-center justify-center ${containerClasses}`}
      style={{ perspective: 1000 }}
    >
      {/* BUILD letters */}
      {letters.map((letter, i) => {
        const showOutline = outlineAllAtOnce || i < currentLetter
        return (
          <motion.span
            key={i}
            className={`${fontSize} font-black tracking-[0.15em] relative inline-block`}
            style={{
              WebkitTextStroke: `${lineWidth}px ${lineColor}`,
              color: fillColor,
              textShadow: shadow,
            }}
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              delay: outlineAllAtOnce ? 0 : i * (speed / 1000),
              type: "spring",
              stiffness: 120,
            }}
          >
            {letter}
          </motion.span>
        )
      })}

      {/* Rotating rectangle outline */}
      {outlineComplete && (
        <motion.div
          className="absolute border pointer-events-none"
          style={{
            borderColor: lineColor,
            borderWidth: lineWidth,
            width: "100%",
            height: "100%",
            borderRadius: 4,
          }}
          initial={{ rotate: -90, scale: 0 }}
          animate={{
            rotate: rotateOutline ? 270 : 0,
            scale: 1,
          }}
          transition={{ duration: 1.5, ease: "easeInOut" }}
        />
      )}
    </div>
  )
}