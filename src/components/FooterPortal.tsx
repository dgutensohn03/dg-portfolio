"use client";

import Footer from "./Footer";
import { motion } from "framer-motion";

export default function FooterPortal({
  visible,
  forceHide,
}: {
  visible: boolean;
  forceHide: boolean;
}) {
  const showFooter = visible && !forceHide;

  return (
    <motion.div
      initial={false}
      animate={{ y: showFooter ? "0%" : "100%", opacity: showFooter ? 1 : 0 }}
      transition={{ duration: 0.32, ease: [0.25, 0.1, 0.25, 1] }}
      className="fixed inset-x-0 bottom-0 z-[9999] pointer-events-auto bg-[var(--bg)]/95 backdrop-blur-md border-t border-[var(--hairline)]/50"
      style={{
        paddingBottom: "env(safe-area-inset-bottom)",
        pointerEvents: showFooter ? "auto" : "none",
      }}
      data-visible={showFooter ? "true" : "false"}
      aria-hidden={!showFooter}
    >
      <Footer />
    </motion.div>
  );
}