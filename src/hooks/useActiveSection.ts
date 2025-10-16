// src/hooks/useActiveSection.ts
import { useEffect } from "react";

export default function useActiveSection(setActive) {
  useEffect(() => {
    const sections = document.querySelectorAll("[data-section]");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActive(entry.target.getAttribute("data-section"));
          }
        });
      },
      { threshold: 0.6 }
    );
    sections.forEach((sec) => observer.observe(sec));
    return () => observer.disconnect();
  }, [setActive]);
}
