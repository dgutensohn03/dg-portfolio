// src/components/About.tsx
import { motion } from "framer-motion";

const tech = [
  "React",
  "Next.js",
  "TypeScript",
  "Node.js",
  "PostgreSQL",
  "xAPI / SCORM Integration",
  "Event-Driven Architecture",
  "Cloud Functions & CI/CD",
  "Performance Optimization",
  "Accessibility (WCAG 2.1 AA)",
  "Design Systems",
  "Modular Component Architecture",
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
          I build platforms and systems that turn complex ideas into intuitive, reliable experiences. My work spans frontend and backend development, cloud services, and analytics — always with an eye on performance, accessibility, and scale.
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.25, duration: 0.4 }}
          viewport={{ once: true }}
          className="mt-4 text-[var(--muted)] text-lg leading-snug"
        >
          Over the past decade, I’ve led engineering for learning platforms serving hundreds of thousands of users, architecting APIs, databases, and real-time systems, mentoring teammates, and defining standards for scalable, maintainable codebases.
        </motion.p>

        <motion.blockquote
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.35, duration: 0.4 }}
          viewport={{ once: true }}
          className="mt-6 pl-4 border-l border-[var(--hairline)] text-[var(--accent)]/90 italic text-base"
        >
          “Good engineering is invisible — it gets out of the way so people can work clearly.”
        </motion.blockquote>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.45, duration: 0.4 }}
          viewport={{ once: true }}
          className="mt-6 text-[var(--muted)] text-lg leading-snug"
        >
          I thrive at the intersection of design, logic, and data — building systems that are performant, maintainable, and future-proof. These are the capabilities and technologies I work with regularly:
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