"use client";

import { motion, AnimatePresence } from "framer-motion";

export default function FloatingSectionTitle({ title }: { title: string }) {
  return (
    <div className="pointer-events-none fixed top-20 left-1/2 z-40 -translate-x-1/2">
      <AnimatePresence mode="wait">
        <motion.div
          key={title}
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 10 }}
          transition={{ duration: 0.35 }}
          className="rounded-full bg-white/80 backdrop-blur px-6 py-2 shadow-md text-sm font-medium"
        >
          {title}
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
