"use client";

import { useEffect, useState } from "react";

export type SectionId = "home" | "about" | "projects" | "contact";

export default function useScrollObserver(
  sectionIds: SectionId[],
  offset: number,
  containerSelector: string
) {
  const [active, setActive] = useState<SectionId>("home");

  useEffect(() => {
    const container = document.querySelector<HTMLElement>(containerSelector);
    if (!container) return;

    const handleScroll = () => {
      const scrollPosition = container.scrollTop + offset + 1;

      let current: SectionId = sectionIds[0];

      for (const id of sectionIds) {
        const el = document.getElementById(id);
        if (!el) continue;

        if (el.offsetTop <= scrollPosition) {
          current = id;
        }
      }

      setActive(current);
    };

    container.addEventListener("scroll", handleScroll);
    handleScroll(); // initialize

    return () => {
      container.removeEventListener("scroll", handleScroll);
    };
  }, [sectionIds, offset, containerSelector]);

  return active;
}