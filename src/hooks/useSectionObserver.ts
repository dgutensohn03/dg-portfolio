// src/hooks/useSectionObserver.ts
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
        // ✅ Projects and Contact activate slightly EARLIER to prevent fallback snap
        rootMargin: "-20% 0px -70% 0px", // tuned margin for smoother transitions
        threshold: 0.01,
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
