"use client";

import React, { useRef, useState } from "react";
import { Home, User, Folder, Mail, Settings } from "lucide-react";
import { motion } from "framer-motion";
import Monogram from "../Monogram";
import SettingsMenu from "./SettingsMenu";
import { useTheme } from "../ThemeProvider";
import { SectionId } from "../../hooks/useActiveSection";

interface NavbarProps {
  active: SectionId;
  scrollToId: (id: SectionId) => void;
  variant?: "underline" | "default";
}

const sections: { id: SectionId; icon: any; label: string }[] = [
  { id: "home", icon: Home, label: "Home" },
  { id: "about", icon: User, label: "About" },
  { id: "projects", icon: Folder, label: "Projects" },
  { id: "contact", icon: Mail, label: "Contact" },
];

export default function ({ active, scrollToId, variant = "default" }: NavbarProps) {
  const { theme, toggleTheme } = useTheme();
  // ✅ Specific button ref
  const gearRef = useRef<HTMLButtonElement>(null);
  const [settingsOpen, setSettingsOpen] = useState(false);

  return (
    <header className="fixed top-6 left-1/2 -translate-x-1/2 z-50 w-[95%] max-w-5xl">
      <div
        className={`
          flex items-center justify-between rounded-3xl px-6 py-3
          border ${theme === "light" ? "border-white/20 bg-white/30" : "border-neutral-700/40 bg-neutral-800/80"}
          backdrop-blur-2xl
          shadow-[0_20px_60px_rgba(0,0,0,0.2)]
        `}
      >
        <Monogram />

        <div className="flex gap-3 items-center">
          {sections.map(({ id, icon: Icon, label }) => {
            const isActive = active === id;
            return (
              <motion.button
                key={id}
                onClick={() => scrollToId(id)}
                whileHover={{ scale: 1.15 }}
                className={`
                  cursor-pointer flex flex-col items-center justify-center w-12 h-12 rounded-xl
                  ${theme === "light" ? "bg-white/90" : "bg-neutral-700/90"}
                  ${isActive ? "ring-2 ring-orange-400 shadow-[0_4px_20px_rgba(255,165,0,0.35)]" : ""}
                `}
              >
                <Icon
                  size={22}
                  strokeWidth={1.8}
                  className={isActive ? "text-orange-400" : theme === "light" ? "text-gray-800" : "text-neutral-200"}
                />
                <span
                  className={`text-[10px] font-medium mt-0.5 ${isActive ? "text-orange-400" : theme === "light" ? "text-gray-800" : "text-neutral-200"
                    }`}
                >
                  {label}
                </span>
              </motion.button>
            );
          })}
        </div>

        {/* Settings Gear */}
        <motion.button
          ref={gearRef}
          onClick={() => setSettingsOpen((p) => !p)}
          className={`cursor-pointer w-10 h-10 flex items-center justify-center rounded-full hover:${theme === "light" ? "bg-white/20" : "bg-neutral-600/40"
            } transition`}
          animate={{ rotate: settingsOpen ? 20 : 0 }}
          transition={{ type: "spring", stiffness: 300, damping: 15 }}
        >
          <Settings
            size={20}
            className={settingsOpen ? "text-orange-400" : theme === "light" ? "text-gray-800" : "text-neutral-200"}
          />
        </motion.button>

        {/* Settings Menu */}
        <SettingsMenu
          open={settingsOpen}
          onClose={() => setSettingsOpen(false)}
          anchorRef={gearRef} // ✅ passes correctly now
          theme={theme}
          toggleTheme={toggleTheme}
          width={225}
        />
      </div>
    </header>
  );
}