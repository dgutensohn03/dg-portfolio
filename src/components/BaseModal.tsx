"use client";

import { createPortal } from "react-dom";
import { motion, AnimatePresence } from "framer-motion";

interface BaseModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
  overlayClass?: string;
}

export default function BaseModal({
  isOpen,
  onClose,
  children,
  overlayClass = "bg-black/30 dark:bg-gray-600/50",
}: BaseModalProps) {
  return createPortal(
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed inset-0 z-[9999] flex items-center justify-center px-4 sm:px-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, transition: { duration: 0.15 } }}
          exit={{ opacity: 0, transition: { duration: 0.15 } }}
        >
          {/* Overlay (opacity only, no blur) */}
          <motion.div
            onClick={onClose}
            className={`absolute inset-0 ${overlayClass}`}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1, transition: { duration: 0.2 } }}
            exit={{ opacity: 0, transition: { duration: 0.15 } }}
          />

          {/* Modal container (opacity only, no scale) */}
          <motion.div
            onClick={(e) => e.stopPropagation()}
            className="relative z-10"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1, transition: { duration: 0.2 } }}
            exit={{ opacity: 0, transition: { duration: 0.15 } }}
          >
            {children}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>,
    document.body
  );
}