// src/components/ScrollHint.tsx
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export default function ScrollHint() {
  const [hidden, setHidden] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 40) setHidden(true);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: hidden ? 0 : 0.5 }}
      transition={{ duration: 0.4 }}
      className="pointer-events-none absolute bottom-6 left-1/2 -translate-x-1/2"
      aria-hidden
    >
      <motion.div
        animate={{ y: [0, 6, 0] }}
        transition={{ repeat: Infinity, duration: 1.6, ease: "easeInOut" }}
        className="text-[var(--fg)]/60"
      >
        {/* minimal chevron */}
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
          <path d="M6 9l6 6 6-6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </motion.div>
    </motion.div>
  );
}
