// src/components/DemoModal.tsx
import { useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, MoveHorizontal } from "lucide-react";

type DemoModalProps = {
  isOpen: boolean;
  onClose: () => void;
  src: string;        // demo URL or local path
  title?: string;
  allowResizeHandle?: boolean; // default true
};

export default function DemoModal({
  isOpen,
  onClose,
  src,
  title = "Live Demo",
  allowResizeHandle = true,
}: DemoModalProps) {
  const panelRef = useRef<HTMLDivElement | null>(null);

  // Close on ESC
  useEffect(() => {
    function onKey(e: KeyboardEvent) {
      if (e.key === "Escape") onClose();
    }
    if (isOpen) document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [isOpen, onClose]);

  // Prevent background scroll while modal open
  useEffect(() => {
    if (!isOpen) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = prev;
    };
  }, [isOpen]);

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed inset-0 z-[1000] flex items-center justify-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          aria-modal="true"
          role="dialog"
        >
          {/* Backdrop */}
          <div
            className="absolute inset-0 bg-black/50 backdrop-blur-[2px]"
            onClick={onClose}
          />

          {/* Window-like panel (90% viewport) */}
          <motion.div
            ref={panelRef}
            className="relative z-10 w-[90vw] h-[90vh] max-w-[1400px] max-h-[95vh]
                       rounded-2xl border border-[var(--hairline)] shadow-2xl
                       bg-[var(--bg)] overflow-hidden"
            initial={{ scale: 0.98, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.98, opacity: 0 }}
            transition={{ type: "spring", stiffness: 220, damping: 26 }}
          >
            {/* Header (no URL bar; just minimal title) */}
            <div
              className="flex items-center justify-between px-4 py-2 border-b border-[var(--hairline)]
                         bg-[color-mix(in oklab, var(--bg) 92%, transparent)]"
            >
              <div className="flex items-center gap-2 text-sm text-[var(--muted)]">
                <MoveHorizontal size={16} aria-hidden />
                <span className="truncate max-w-[50vw]" title={title}>
                  {title}
                </span>
              </div>

              <button
                onClick={onClose}
                type="button"
                className="p-1.5 rounded-md text-[var(--fg)]/70 hover:text-[var(--fg)]
                           focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent)]/60"
                aria-label="Close"
              >
                <X size={18} />
              </button>
            </div>

            {/* Content: sandboxed iframe — behaves like a real window, no URL chrome */}
            <div className="w-full h-[calc(100%-40px)] bg-[var(--bg)]">
              <iframe
                title={title}
                src={src}
                // No browser chrome; safe sandbox
                sandbox="allow-same-origin allow-scripts allow-popups allow-forms allow-downloads allow-modals allow-top-navigation-by-user-activation"
                allow="fullscreen; clipboard-read; clipboard-write; geolocation; microphone; camera"
                referrerPolicy="no-referrer"
                // Window-like scaling
                className="w-full h-full block"
                // Important: Avoid scrolling cut-offs from nested scroll — let the demo control its own scroll
                style={{ border: "0" }}
              />
            </div>

            {/* Optional resize handle: feels like a real window */}
            {allowResizeHandle && (
              <div
                className="absolute bottom-2 right-2 select-none text-[var(--muted)]/70 pointer-events-none"
                aria-hidden
              >
                {/* purely decorative grip; container scales by viewport, but this communicates resizable affordance */}
                <svg width="22" height="22" viewBox="0 0 24 24">
                  <path
                    d="M7 17h2v2H7zM11 17h2v2h-2zM15 17h2v2h-2zM15 13h2v2h-2zM15 9h2v2h-2z"
                    fill="currentColor"
                  />
                </svg>
              </div>
            )}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
