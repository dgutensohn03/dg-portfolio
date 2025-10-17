// src/components/FooterPortal.tsx
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
  const FOOTER_PX = 70;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={showFooter ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      transition={{ duration: 0.25, ease: "easeOut" }}
      className="fixed bottom-0 left-0 w-full z-[9999]"
      style={{ minHeight: `${FOOTER_PX}px`, pointerEvents: "auto" }}
    >
      <div className="h-px w-20 mx-auto mb-3 bg-[var(--hairline)]/30" />
      <Footer />
    </motion.div>
  );
}
