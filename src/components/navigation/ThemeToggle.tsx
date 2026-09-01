"use client";

import { Sun, Moon } from "lucide-react";

interface Props {
  theme: "light" | "dark";
  setTheme: (theme: "light" | "dark") => void;
}

export default function ThemeToggle({ theme, setTheme }: Props) {
  const toggle = () => {
    const next = theme === "light" ? "dark" : "light";
    setTheme(next);
    localStorage.setItem("theme", next);
    document.documentElement.classList.toggle("dark", next === "dark");
  };

  return (
    <div className="flex items-center justify-between">
      <Sun size={16} className="text-(--muted)" />

      <button
        onClick={toggle}
        aria-label="Toggle dark/light theme"
        className="relative w-12 h-6 rounded-full bg-(--hairline)"
      >
        <div
          className={`absolute top-1 left-1 w-4 h-4 rounded-full 
                      bg-linear-to-br from-orange-400 to-orange-600
                      transition-transform duration-300 ${
                        theme === "dark" ? "translate-x-6" : ""
                      }`}
        />
      </button>

      <Moon size={16} className="text-(--muted)" />
    </div>
  );
}