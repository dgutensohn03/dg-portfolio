// src/hooks/useSmoothScroll.ts
"use client";

import { SectionId } from "./useSectionObserver";

export default function useSmoothScroll(navHeight: number) {
  return (id: SectionId) => {
    const el = document.getElementById(id);
    const container = document.querySelector<HTMLElement>("[data-scroll-container]");

    if (!el || !container) return;

    const target =
      el.getBoundingClientRect().top -
      container.getBoundingClientRect().top +
      container.scrollTop -
      navHeight;

    container.scrollTo({ top: target, behavior: "smooth" });
  };
}