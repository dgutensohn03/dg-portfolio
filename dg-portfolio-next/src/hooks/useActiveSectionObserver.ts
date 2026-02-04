import { useEffect, useState } from "react";

export type SectionId = "home" | "about" | "projects" | "contact";

/**
 * Hook to detect which section is currently in view.
 * Threshold lowered from 0.6 → 0.4 to improve section activation accuracy,
 * especially for Projects which may not fill enough vertical height to trigger 60%.
 */
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
        threshold: 0.4, // 👈 more responsive, activates earlier
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
