import { useEffect, useState } from "react";
import { BsMoon, BsSun } from "react-icons/bs";

export default function ThemeToggle() {
  const [theme, setTheme] = useState<"light" | "dark">(
    (localStorage.getItem("theme") as "light" | "dark") || "dark"
  );

  useEffect(() => {
    const root = document.documentElement;
    if (theme === "dark") {
      root.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      root.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [theme]);

  return (
    <button
      aria-label="Toggle theme"
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      className="btn"
    >
      {theme === "dark" ? <BsSun /> : <BsMoon />}
      <span className="text-sm">{theme === "dark" ? "Light" : "Dark"}</span>
    </button>
  );
}
