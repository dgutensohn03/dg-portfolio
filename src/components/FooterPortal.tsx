import Footer from "./Footer";
import { motion, AnimatePresence } from "framer-motion";

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
    <AnimatePresence mode="wait">
      {showFooter ? (
        <motion.div
          key="footer"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 20 }}
          transition={{ duration: 0.25, ease: "easeOut" }}
          className="fixed bottom-0 left-0 w-full z-[9999] pointer-events-auto"
          data-visible="true"
          style={{ minHeight: `${FOOTER_PX}px` }}
        >
          <div className="h-px w-20 mx-auto mb-3 bg-[var(--hairline)]/30" />
          <Footer />
        </motion.div>
      ) : (
        <motion.div
          key="footer-hidden"
          initial={{ opacity: 0 }}
          animate={{ opacity: 0 }}
          exit={{ opacity: 0 }}
          className="fixed bottom-0 left-0 w-full z-[-10] pointer-events-none"
          data-visible="false"
          style={{ minHeight: `${FOOTER_PX}px` }}
        />
      )}
    </AnimatePresence>
  );
}
