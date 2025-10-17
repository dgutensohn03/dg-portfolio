import useSectionObserver, { SectionId } from "../hooks/useSectionObserver";

const sections: SectionId[] = ["home", "about", "projects", "contact"];

export default function SectionDots() {
  const active = useSectionObserver(sections);

  const scrollToSection = (id: SectionId) => {
    const el = document.getElementById(id);
    const container = document.querySelector<HTMLElement>("[data-scroll-container]");
    if (!el || !container) return;
    const target =
      el.getBoundingClientRect().top -
      container.getBoundingClientRect().top +
      container.scrollTop -
      60;
    container.scrollTo({ top: target, behavior: "smooth" });
  };

  return (
    <div className="fixed top-1/2 -translate-y-1/2 right-5 flex flex-col gap-2.5 z-40 pointer-events-auto">
      {sections.map((id) => {
        const isActive = active === id;
        return (
          <div key={id} className="relative w-24 sm:w-28 h-4 flex items-center justify-end group">
            {/* ✅ Glass Tooltip Label */}
            <span
              className={[
                "ui-tooltip ui-tooltip--left",
                "right-4 sm:right-5",
                isActive ? "text-[var(--accent)]" : "text-[var(--fg)]/60",
              ].join(" ")}
            >
              {id.charAt(0).toUpperCase() + id.slice(1)}
            </span>

            {/* ✅ Smaller Dot Size */}
            <button
              onClick={() => scrollToSection(id)}
              aria-label={id}
              className={[
                "w-2.5 h-2.5 rounded-full transition-all duration-200 cursor-pointer",
                isActive
                  ? "bg-[var(--accent)] ring-2 ring-[var(--accent)]/50 scale-[1.15]"
                  : "bg-[var(--hairline)] hover:bg-[var(--accent)]/70",
              ].join(" ")}
            />
          </div>
        );
      })}
    </div>
  );
}
