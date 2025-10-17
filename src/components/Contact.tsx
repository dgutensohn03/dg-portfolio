// src/components/Contact.tsx
import { motion } from "framer-motion";

export default function Contact() {
  return (
    <div className="w-full text-center">
      <motion.h2
        initial={{ opacity: 0, y: 18 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.4 }}
        className="text-3xl md:text-4xl font-semibold text-[var(--fg)]"
      >
        Let’s Connect
      </motion.h2>

      <motion.p
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ delay: 0.12, duration: 0.4 }}
        className="mt-4 max-w-md mx-auto text-[var(--muted)]"
      >
        Open to collaborations, freelance work, or full-time opportunities.
      </motion.p>

      <a
        href="mailto:dgutensohn@icloud.com"
        className="mt-6 inline-flex px-6 py-3 rounded-lg border border-[var(--hairline)] hover:border-[var(--accent)] hover:text-[var(--accent)] transition cursor-pointer"
      >
        Email Me →
      </a>
    </div>
  );
}
