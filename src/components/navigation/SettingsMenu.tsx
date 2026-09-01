"use client";

import { useState, useEffect } from "react";
import { createPortal } from "react-dom";
import { motion, AnimatePresence } from "framer-motion";
import SettingsPanel from "./SettingsPanel";

interface Props {
  open: boolean;
  onClose: () => void;
  anchorRef: React.RefObject<HTMLButtonElement | null>; // ✅ allow null
  theme: "light" | "dark";
  toggleTheme: () => void;
  width?: number;
}

export default function SettingsMenu({ open, onClose, anchorRef, theme, toggleTheme, width = 225 }: Props) {
  const [mounted, setMounted] = useState(false);
  const [panelStyle, setPanelStyle] = useState({ top: 0, left: 0 });
  const [ready, setReady] = useState(false);

  // Only render portal client-side
  useEffect(() => setMounted(true), []);

  const updatePosition = () => {
    if (!anchorRef.current) return;
    const navbar = anchorRef.current.closest("header") as HTMLElement;
    if (!navbar) return;

    const navbarRect = navbar.getBoundingClientRect();
    setPanelStyle({ top: navbarRect.bottom + 6, left: navbarRect.right - width });
    setReady(true); // mark ready after calculation
  };

  // Update on open, resize, scroll
  useEffect(() => {
    if (open) {
      setReady(false);
      updatePosition();

      window.addEventListener("resize", updatePosition);
      window.addEventListener("scroll", updatePosition, true);
    }
    return () => {
      window.removeEventListener("resize", updatePosition);
      window.removeEventListener("scroll", updatePosition, true);
    };
  }, [open, width, anchorRef]);

  if (!mounted) return null;

  return createPortal(
    <AnimatePresence>
      {open && (
        <>
          {/* Overlay */}
          <motion.div
            key="overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.25 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className={`fixed inset-0 z-40 backdrop-blur-2xl ${
              theme === "light" ? "bg-white/10" : "bg-neutral-900/40"
            }`}
            onClick={onClose}
          />

          {/* Panel */}
          {ready && (
            <motion.div
              key="panel"
              initial={{ opacity: 0, scale: 0.7, x: 20, y: -10 }}
              animate={{ opacity: 1, scale: 1, x: 0, y: 0 }}
              exit={{ opacity: 0, scale: 0.7, x: 20, y: -10 }}
              transition={{ type: "spring", stiffness: 400, damping: 22 }}
              style={{
                top: panelStyle.top,
                left: panelStyle.left,
                width,
              }}
              className={`fixed z-50 rounded-3xl border shadow-[0_25px_80px_rgba(0,0,0,0.25)] p-6 backdrop-blur-2xl ${
                theme === "light" ? "bg-white/30 border-white/20" : "bg-neutral-800/80 border-neutral-700/40"
              }`}
            >
              <SettingsPanel theme={theme} toggleTheme={toggleTheme} />
            </motion.div>
          )}
        </>
      )}
    </AnimatePresence>,
    document.body
  );
}