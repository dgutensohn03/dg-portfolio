// src/hooks/useSectionObserver.ts
import { useEffect, useState } from "react";

export type SectionId = "home" | "about" | "projects" | "contact";

/**
 * Lightweight IntersectionObserver hook for top-level sections.
 * Tuned margins: early activation without skipping sections on snap.
 */
export default function useSectionObserver(sectionIds: SectionId[]) {
  const [active, setActive] = useState<SectionId>("home");

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        // Prefer the entry with the highest intersection ratio
        const byRatio = [...entries].sort((a, b) => b.intersectionRatio - a.intersectionRatio);
        for (const entry of byRatio) {
          if (entry.isIntersecting) {
            const id = entry.target.getAttribute("id") as SectionId | null;
            if (id) {
              setActive(id);
              break;
            }
          }
        }
      },
      {
        // 10% from top, 25% from bottom: plays nicely with snap-start/end and tall sections
        root: null,
        rootMargin: "-10% 0px -25% 0px",
        threshold: [0.01, 0.1, 0.25, 0.5, 0.75, 0.99],
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
