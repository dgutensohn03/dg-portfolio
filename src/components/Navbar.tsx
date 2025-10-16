import { useEffect, useState } from "react";
import ThemeToggle from "./ThemeToggle";
import useSectionObserver, { SectionId } from "../hooks/useSectionObserver";

const sections: { id: SectionId; label: string }[] = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "projects", label: "Projects" },
  { id: "contact", label: "Contact" },
];

export default function Navbar() {
  const active = useSectionObserver(sections.map((s) => s.id));
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollToSection = (id: SectionId) => {
    const el = document.getElementById(id);
    const container = document.querySelector<HTMLElement>("[data-scroll-container]");
    if (!el || !container) return;

    // Scroll the container precisely so section top sits 60px below the header
    const target =
      el.getBoundingClientRect().top - container.getBoundingClientRect().top + container.scrollTop - 60;

    container.scrollTo({ top: target, behavior: "smooth" });
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      <div className="px-8 lg:px-12">
        <nav
          className={[
            "max-w-7xl mx-auto mt-4",
            "glass rounded-2xl px-4 py-3",
            "flex items-center justify-between",
            "transition-all duration-300",
            scrolled ? "backdrop-blur-md shadow-lg scale-[1.005]" : "backdrop-blur-sm shadow-sm",
          ].join(" ")}
        >
          <div className="text-sm font-medium opacity-80" style={{ color: "var(--muted)" }}>
            DG • Portfolio
          </div>

          <ul className="hidden sm:flex items-center gap-6">
            {sections.map(({ id, label }) => {
              const isActive = active === id;
              return (
                <li key={id}>
                  <button
                    onClick={() => scrollToSection(id)}
                    className={[
                      "relative px-1 py-1 text-sm cursor-pointer transition-colors",
                      isActive ? "text-[var(--accent)]" : "text-[var(--fg)]/80 hover:text-[var(--fg)]",
                      "after:absolute after:left-0 after:-bottom-[6px] after:h-[2px] after:w-full",
                      "after:origin-left after:scale-x-0 after:bg-[var(--accent)] after:transition-transform after:duration-300",
                      isActive ? "after:scale-x-100 after:pulse-active" : "",
                    ].join(" ")}
                    aria-current={isActive ? "page" : undefined}
                  >
                    {label}
                  </button>
                </li>
              );
            })}
          </ul>

          <div className="flex items-center gap-3">
            <ThemeToggle />
          </div>
        </nav>
      </div>
    </header>
  );
}
