"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

export default function FadeSection({ children }: { children: React.ReactNode }) {
  const { ref, inView } = useInView({
    threshold: 0.15,
    triggerOnce: true,
  });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 22 }}
      animate={inView ? { opacity: 1, y: 0 } : undefined}
      transition={{ duration: 0.45, ease: "easeOut" }}
      style={{
        willChange: "transform, opacity",
        transform: "translateZ(0)", // GPU acceleration
      }}
    >
      {children}
    </motion.div>
  );
}