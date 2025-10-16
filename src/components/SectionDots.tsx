import useSectionObserver, { SectionId } from "../hooks/useSectionObserver";

const sections: SectionId[] = ["home", "about", "projects", "contact"];

export default function SectionDots() {
  const active = useSectionObserver(sections);

  const scrollToSection = (id: SectionId) => {
    const el = document.getElementById(id);
    const container = document.querySelector<HTMLElement>("[data-scroll-container]");
    if (!el || !container) return;

    const target =
      el.getBoundingClientRect().top - container.getBoundingClientRect().top + container.scrollTop - 60;

    container.scrollTo({ top: target, behavior: "smooth" });
  };

  return (
    <div className="fixed top-1/2 -translate-y-1/2 right-8 sm:right-10 flex flex-col gap-2.5 z-40 pointer-events-auto">
      {sections.map((id) => {
        const isActive = active === id;
        return (
          <div key={id} className="relative w-24 sm:w-28 h-4 flex items-center justify-end group">
            {/* Floating glass label on the left */}
            <span
              className={[
                "pointer-events-none absolute right-4 sm:right-5",
                "px-2 py-[1px] rounded-md text-[10px] sm:text-[11px] font-medium select-none",
                "backdrop-blur-md bg-[var(--glass)]/50 shadow-sm",
                "opacity-0 translate-x-2 group-hover:translate-x-0 group-hover:opacity-100",
                "transition-all duration-200",
                isActive ? "text-[var(--accent)]" : "text-[var(--fg)]/60",
              ].join(" ")}
            >
              {id.charAt(0).toUpperCase() + id.slice(1)}
            </span>

            <button
              onClick={() => scrollToSection(id)}
              aria-label={id}
              className={[
                "w-2 h-2 rounded-full transition-all",
                isActive
                  ? "bg-[var(--accent)] scale-110 ring-[1.5px] ring-[var(--accent)] ring-offset-2 pulse-active"
                  : "bg-[var(--hairline)] hover:bg-[var(--accent-weak)]",
              ].join(" ")}
            />
          </div>
        );
      })}
    </div>
  );
}
