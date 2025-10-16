// src/components/About.tsx
import { motion } from "framer-motion";

export default function About() {
  return (
    <div className="mx-auto max-w-6xl w-full text-center">
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
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        viewport={{ once: true }}
        className="mt-4 max-w-3xl mx-auto text-[var(--muted)] leading-relaxed text-lg"
      >
        I’m a <span style={{ color: "var(--accent)" }} className="font-medium">Full-Stack Engineer & Learning Experience Technologist</span> focused on building
        interactive learning platforms that bridge <strong>education, data, and web engineering</strong>.
      </motion.p>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4, duration: 0.4 }}
        viewport={{ once: true }}
        className="mt-6 flex flex-wrap gap-2 justify-center"
      >
        {["React", "TypeScript", "Node.js", "xAPI", "SCORM", "Performance", "UX Engineering"].map((tech, i) => (
          <span key={i} className="px-3 py-1 text-sm rounded-full glass">
            {tech}
          </span>
        ))}
      </motion.div>
    </div>
  );
}
