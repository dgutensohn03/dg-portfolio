// src/components/Navbar.tsx
import ThemeToggle from "./ThemeToggle";
import useSectionObserver, { SectionId } from "../hooks/useSectionObserver";

const NAV_HEIGHT = 60;

const sections: { id: SectionId; label: string }[] = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "projects", label: "Projects" },
  { id: "contact", label: "Contact" },
];

export default function Navbar() {
  const active = useSectionObserver(sections.map((s) => s.id));

  const scrollToSection = (id: SectionId) => {
    const el = document.getElementById(id);
    const container = document.querySelector<HTMLElement>("[data-scroll-container]");
    if (!el || !container) return;

    const target =
      el.offsetTop /* section top inside container */ - NAV_HEIGHT;

    container.scrollTo({ top: target, behavior: "smooth" });
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      {/* ✅ OUTER gutters control outside padding; tweak px here */}
      <div className="px-6 md:px-8 lg:px-10">
        <nav
          className="max-w-7xl mx-auto glass rounded-2xl px-3 py-2 mt-4
                     flex items-center justify-between"
          aria-label="Primary"
        >
          <div
            className="text-sm font-medium opacity-80 select-none"
            style={{ color: "var(--muted)" }}
          >
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
                      "relative px-1 py-1 text-sm transition-colors cursor-pointer", // ✅ pointer
                      isActive
                        ? "text-[var(--accent)]"
                        : "text-[var(--fg)]/80 hover:text-[var(--fg)]",
                      "after:absolute after:left-0 after:-bottom-[6px] after:h-[2px] after:w-full",
                      "after:origin-left after:scale-x-0 after:bg-[var(--accent)] after:transition-transform",
                      isActive ? "after:scale-x-100" : "",
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
