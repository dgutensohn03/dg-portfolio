import { useEffect, useState } from "react";
import { BsMoon, BsSun } from "react-icons/bs";

export default function ThemeToggle() {
  const [theme, setTheme] = useState<"light" | "dark">(() => {
    const saved = localStorage.getItem("theme") as "light" | "dark" | null;
    if (saved) return saved;
    const prefersDark =
      window.matchMedia &&
      window.matchMedia("(prefers-color-scheme: dark)").matches;
    return prefersDark ? "dark" : "light";
  });

  useEffect(() => {
    const root = document.documentElement;
    if (theme === "dark") {
      root.classList.add("dark");
    } else {
      root.classList.remove("dark");
    }
    localStorage.setItem("theme", theme);
  }, [theme]);

  return (
    <button
      aria-label="Toggle theme"
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      className="inline-flex items-center gap-2 rounded-lg border border-[var(--hairline)] px-3 py-2 hover:border-[var(--accent)] transition-colors"
    >
      {theme === "dark" ? (
        <>
          <BsSun className="text-yellow-300 text-xl" />
          <span className="sr-only">Switch to light theme</span>
        </>
      ) : (
        <>
          <BsMoon className="text-blue-500 text-xl" />
          <span className="sr-only">Switch to dark theme</span>
        </>
      )}
    </button>
  );
}
