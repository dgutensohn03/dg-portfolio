"use client"
import { useEffect, useRef } from "react"
import { motion, useAnimation } from "framer-motion"

interface TraceTextProps {
  word: string
  strokeWidth?: number
  strokeColor?: string
  fillColor?: string
  duration?: number
  delayPerLetter?: number
  sequential?: boolean
  dropShadow?: string
  outlineBox?: boolean
  outlineColor?: string
  outlineWidth?: number
  className?: string
}

export default function TraceText({
  word,
  strokeWidth = 1,
  strokeColor = "white",
  fillColor = "transparent",
  duration = 1,
  delayPerLetter = 0.2,
  sequential = true,
  dropShadow,
  outlineBox,
  outlineColor = "white",
  outlineWidth = 1,
  className = "",
}: TraceTextProps) {
  const textRef = useRef<SVGTextElement>(null)
  const controls = useAnimation()

  useEffect(() => {
    const letters = word.split("")
    const paths: any[] = []

    if (!textRef.current) return
    const svg = textRef.current.ownerSVGElement

    // Animate each letter sequentially
    letters.forEach((_, i) => {
      controls.start({
        strokeDashoffset: [1, 0],
        transition: {
          duration,
          delay: sequential ? i * delayPerLetter : 0,
          ease: "easeInOut",
        },
      })
    })
  }, [word, controls, duration, delayPerLetter, sequential])

  return (
    <svg
      className={`w-full h-auto ${className}`}
      viewBox={`0 0 ${word.length * 120} 150`}
      xmlns="http://www.w3.org/2000/svg"
    >
      {outlineBox && (
        <motion.rect
          x={0}
          y={0}
          width={word.length * 120}
          height={150}
          fill="transparent"
          stroke={outlineColor}
          strokeWidth={outlineWidth}
          strokeDasharray={outlineWidth * 4}
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 1.5 }}
        />
      )}

      {word.split("").map((letter, idx) => (
        <motion.text
          key={idx}
          x={idx * 100 + 10}
          y={100}
          fill={fillColor}
          stroke={strokeColor}
          strokeWidth={strokeWidth}
          style={{ filter: dropShadow ? `drop-shadow(${dropShadow})` : undefined }}
          initial={{ opacity: 0, pathLength: 0 }}
          animate={{ opacity: 1, pathLength: 1 }}
          transition={{
            duration,
            delay: sequential ? idx * delayPerLetter : 0,
            ease: "easeInOut",
          }}
        >
          {letter}
        </motion.text>
      ))}
    </svg>
  )
}