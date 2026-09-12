"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

export default function FadeSection({ children }: { children: React.ReactNode }) {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
    fallbackInView: true,
  });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 22 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 22 }}
      transition={{ duration: 0.45, ease: "easeOut" }}
    >
      {children}
    </motion.div>
  );
}