"use client" 

import { useState } from "react"
import BlockRenderer from "@/components/BlockRenderer"
import { blocks } from "@/data/blocks"
import { motion, AnimatePresence } from "framer-motion"

export default function GridPage() {
  const [selected, setSelected] = useState<string | null>(null)

  return (
    <>
      <div className="grid md:grid-cols-2 gap-8 p-12">
        {blocks.map((block) => (
          <div key={block.id} onClick={() => setSelected(block.id)}>
            <div className="cursor-pointer overflow-hidden rounded-xl shadow-xl">
              <BlockRenderer block={block} />
            </div>
          </div>
        ))}
      </div>

      <AnimatePresence>
        {selected && (
          <motion.div
            className="fixed inset-0 z-50 bg-black/80 flex items-center justify-center p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelected(null)}
          >
            <BlockRenderer
              block={blocks.find((b) => b.id === selected)!}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}