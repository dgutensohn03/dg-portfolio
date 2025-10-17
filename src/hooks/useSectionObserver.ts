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
            if (id) {
              setActive(id);
              // console.log("✔ Detected section:", id)
            }
          }
        });
      },
      {
        // ✅ Detect as soon as section *enters* 10% from top of viewport
        rootMargin: "-10% 0px -70% 0px",
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
