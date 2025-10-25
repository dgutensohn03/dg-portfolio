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
    <div className="section-dots pointer-events-auto">
      <ul>
        {sections.map((id) => {
          const isActive = active === id;
          return (
            <li key={id} className="dot-wrap group">
              <button
                onClick={() => scrollToSection(id)}
                aria-label={id}
                className={[
                  "dot transition-all duration-200 cursor-pointer",
                  isActive
                    ? "bg-[var(--dot-active)] scale-110 ring-[1.5px] ring-[var(--accent)] ring-offset-2 pulse-active"
                    : "bg-[var(--dot)] hover:bg-[var(--dot-hover)]",
                ].join(" ")}
              />
              <span className="dot-tip opacity-0 group-hover:opacity-100 group-hover:translate-x-0">
                {id.charAt(0).toUpperCase() + id.slice(1)}
              </span>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
