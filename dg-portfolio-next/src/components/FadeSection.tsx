// src/components/FadeSection.tsx
import { motion, useInView } from "framer-motion";
import { useRef, useEffect, useState } from "react";

/**
 * Reusable fade/slide reveal that respects the main scroll container.
 * Simplified: no special footer logic here (FooterPortal handles that).
 */
export default function FadeSection({ children }: { children: React.ReactNode }) {
  const ref = useRef<HTMLDivElement | null>(null);
  const rootRef = useRef<HTMLElement | null>(null);
  const [hasRoot, setHasRoot] = useState(false);

  useEffect(() => {
    const container = document.querySelector<HTMLElement>("[data-scroll-container]");
    if (container) {
      rootRef.current = container;
      setHasRoot(true);
    }
  }, []);

  const isInView = useInView(ref, {
    root: hasRoot ? (rootRef as any) : undefined,
    margin: "-10% 0% -20% 0%", // earlier trigger so content fades even with snap momentum
    once: true,
  });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 22 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.45, ease: "easeOut" }}
    >
      {children}
    </motion.div>
  );
}
