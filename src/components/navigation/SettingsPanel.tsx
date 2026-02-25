"use client";

import { Sun, Moon } from "lucide-react";

interface Props {
  theme: "light" | "dark";
  toggleTheme: () => void;
}

export default function SettingsPanel({ theme, toggleTheme }: Props) {
  return (
    <div className="grid gap-4">
      <h2 className={`text-sm font-semibold ${theme === "light" ? "text-gray-800" : "text-gray-300"}`}>
        Appearance
      </h2>

      <div className="flex items-center justify-between">
        <span className={theme === "light" ? "text-gray-800" : "text-gray-300"}>Theme</span>
        <div className="flex items-center gap-3">
          <Sun size={16} className={theme === "light" ? "text-gray-500" : "text-gray-400"} />
          <button
            onClick={toggleTheme}
            aria-label="Toggle dark mode"
            className={`cursor-pointer relative w-12 h-6 rounded-full ${theme === "light" ? "bg-white/30" : "bg-gray-700/50"}`}
          >
            <div
              className={`absolute top-1 left-1 w-4 h-4 rounded-full bg-orange-400 transition-transform duration-300 ${
                theme === "dark" ? "translate-x-6" : ""
              }`}
            />
          </button>
          <Moon size={16} className={theme === "light" ? "text-gray-500" : "text-gray-400"} />
        </div>
      </div>
    </div>
  );
}