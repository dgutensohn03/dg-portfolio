// src/hooks/useSectionObserver.ts
"use client";

import { useEffect, useState } from "react";

export type SectionId = "home" | "about" | "projects" | "contact";

export default function useSectionObserver(
  sectionIds: SectionId[],
  lock?: boolean // prevents updates while scrolling programmatically
) {
  const [active, setActive] = useState<SectionId | null>(null);

  useEffect(() => {
    if (lock) return;

    const container = document.querySelector<HTMLElement>("[data-scroll-container]") || null;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const id = entry.target.getAttribute("id") as SectionId;
          if (!id) return;

          if (entry.intersectionRatio > 0.5) {
            setActive(id);
          }
        });
      },
      { root: container, threshold: [0.5] }
    );

    sectionIds.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, [sectionIds, lock]);

  return active;
}