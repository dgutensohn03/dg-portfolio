// src/components/Modal.tsx
import { motion, AnimatePresence } from "framer-motion";
import type { ProjectItem } from "../data/projects";

type ModalProps = {
  project: ProjectItem;
  onClose: () => void;
};

export default function Modal({ project, onClose }: ModalProps) {
  // Close on ESC key
  if (typeof window !== "undefined") {
    window.onkeydown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
  }

  return (
    <AnimatePresence>
      {project && (
        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          {/* Backdrop */}
          <div
            className="absolute inset-0 bg-black/50 backdrop-blur-md"
            onClick={onClose}
          ></div>

          {/* Modal Content */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96, y: 10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.96, y: 10 }}
            transition={{ duration: 0.2 }}
            className="relative z-50 bg-[var(--bg)]/90 border border-[var(--hairline)] rounded-xl shadow-2xl p-6 max-w-md w-[90%]"
          >
            {/* Close Button */}
            <button
              onClick={onClose}
              className="absolute top-3 right-3 text-[var(--muted)] hover:text-[var(--fg)] transition"
            >
              ✕
            </button>

            {/* Title + Client */}
            <h3 className="text-xl font-semibold text-[var(--fg)]">
              {project.title}
            </h3>
            {project.client && (
              <p className="text-sm text-[var(--muted)] mt-1 opacity-70">
                {project.client}
              </p>
            )}

            {/* Description */}
            <p className="mt-4 text-[var(--muted)] text-sm leading-relaxed">
              {project.modalDescription}
            </p>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
