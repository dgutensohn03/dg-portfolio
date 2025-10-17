// src/components/Contact.tsx
import { motion } from "framer-motion";
import { Mail } from "lucide-react";

export default function Contact() {
  return (
    <div className="flex flex-col md:items-start items-center justify-center text-left">
      <motion.h2
        initial={{ opacity: 0, y: 18 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.4 }}
        className="text-3xl md:text-4xl font-semibold text-[var(--fg)]"
      >
        Let’s Build Something
      </motion.h2>

      <motion.p
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ delay: 0.12, duration: 0.4 }}
        className="mt-4 max-w-md text-[var(--muted)] leading-snug text-lg"
      >
        If you’re working on something that needs clarity, performance, and thoughtful engineering, I’d be happy to talk.
      </motion.p>

      <motion.div
        initial={{ opacity: 0, y: 8 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ delay: 0.28, duration: 0.4 }}
        className="mt-6"
      >
        <a
          href="mailto:dgutensohn@icloud.com?subject=Let's%20Talk"
          className="inline-flex items-center gap-2 px-6 py-3 rounded-lg border border-[var(--hairline)]
                     hover:border-[var(--accent)] hover:text-[var(--accent)]
                     transition-colors duration-200 cursor-pointer text-[var(--fg)]/80"
        >
          <Mail size={18} strokeWidth={1.5} />
          <span>Let’s Talk</span>
        </a>
      </motion.div>
    </div>
  );
}
