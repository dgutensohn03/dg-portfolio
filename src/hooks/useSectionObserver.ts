import { useEffect, useState } from "react";

export type SectionId = "home" | "about" | "projects" | "contact";

export default function useSectionObserver(sectionIds: SectionId[]) {
  const [active, setActive] = useState<SectionId>("home");

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const id = entry.target.getAttribute("id") as SectionId;
            if (id) setActive(id);
          }
        });
      },
      {
        // ✅ Activates section as soon as ~25% of it enters viewport
        // Shifts detection zone upward so Projects is recognized immediately
        rootMargin: "-25% 0px -65% 0px",
        threshold: 0, // Trigger on first pixel entering instead of waiting for area coverage
      }
    );

    sectionIds.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, [sectionIds]);

  return active;
}
