// src/components/About.tsx
import { motion } from "framer-motion";

const tech = [
  "React",
  "TypeScript",
  "Node.js",
  "API & Data Architecture",
  "xAPI / SCORM Integration",
  "UX Engineering",
  "Performance Optimization",
  "Full-Stack Delivery",
  "Data-Driven Interfaces",
];

export default function About() {
  return (
    <div className="w-full flex justify-center">
      <div className="max-w-3xl flex flex-col items-start text-left">

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          viewport={{ once: true }}
          className="text-[11px] tracking-wider uppercase text-[var(--accent)]/80 mb-2"
        >
          Thoughtful Engineering with Purpose
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-semibold text-[var(--fg)]"
        >
          About Me
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.15, duration: 0.4 }}
          viewport={{ once: true }}
          className="mt-6 text-[var(--muted)] text-lg leading-snug"
        >
          I build tools and platforms designed to make things clearer, faster, and easier to use. I like software that respects the user's time — clean interfaces, logical flows, and systems that communicate well without getting in the way.
        </motion.p>

        <motion.blockquote
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.28, duration: 0.4 }}
          viewport={{ once: true }}
          className="mt-6 pl-4 border-l border-[var(--hairline)] text-[var(--accent)]/90 italic text-base"
        >
          “Good engineering is invisible — it gets out of the way so people can work clearly.”
        </motion.blockquote>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.35, duration: 0.4 }}
          viewport={{ once: true }}
          className="mt-6 text-[var(--muted)] text-lg leading-snug"
        >
          My background spans across the stack, but I'm most interested in the moment where design meets logic — when code turns into something someone can actually use.
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.45, duration: 0.4 }}
          viewport={{ once: true }}
          className="mt-4 text-[var(--muted)] text-lg leading-snug"
        >
          To bring that thinking into real products, these are the capabilities and technologies I work with:
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.7, duration: 0.4 }}
          className="mt-8"
        >
          <p className="text-sm text-[var(--muted)] mb-3 uppercase tracking-wide">
            Capabilities & Stack
          </p>
          <div className="flex flex-wrap gap-2 max-w-3xl">
            {tech.map((item, i) => (
              <motion.span
                key={i}
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.15 }}
                className="px-3 py-1 text-sm rounded-full glass border border-[var(--hairline)] hover:border-[var(--accent)]/50 transition-colors duration-200"
              >
                {item}
              </motion.span>
            ))}
          </div>
        </motion.div>

      </div>
    </div>
  );
}
