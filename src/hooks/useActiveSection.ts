"use client";
import { useState, useEffect, useRef } from "react";

export type SectionId = "home" | "about" | "projects" | "contact";

export default function useActiveSection(
  sectionIds: SectionId[],
  offset = 80,
  containerSelector = "[data-scroll-container]"
) {
  const [active, setActive] = useState<SectionId>(sectionIds[0]);
  const scrollLockRef = useRef<{ target?: SectionId }>({});

  useEffect(() => {
    const elementContainer =
      document.querySelector<HTMLElement>(containerSelector);

    const isWindow = !elementContainer;
    const container = elementContainer ?? window;

    const getScrollTop = () =>
      isWindow
        ? window.scrollY
        : elementContainer!.scrollTop;

    const handleScroll = () => {
      const targetId = scrollLockRef.current.target;

      if (targetId) {
        setActive(targetId);
        return;
      }

      let current: SectionId = sectionIds[0];

      for (const id of sectionIds) {
        const el = document.getElementById(id);
        if (!el) continue;

        const top = el.offsetTop - offset;

        if (getScrollTop() >= top - 1) {
          current = id;
        }
      }

      setActive(current);
    };

    container.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    return () =>
      container.removeEventListener("scroll", handleScroll);
  }, [sectionIds, offset, containerSelector]);

  const scrollTo = (id: SectionId, animationDelay = 50) => {
    const elementContainer =
      document.querySelector<HTMLElement>(containerSelector);
    const el = document.getElementById(id);
    if (!el) return;

    const isWindow = !elementContainer;
    const container = elementContainer ?? window;

    scrollLockRef.current.target = id;
    setActive(id);

    const target = el.offsetTop - offset;

    if (isWindow) {
      window.scrollTo({ top: target, behavior: "smooth" });
    } else {
      elementContainer.scrollTo({ top: target, behavior: "smooth" });
    }

    const getScrollTop = () =>
      isWindow
        ? window.scrollY
        : elementContainer!.scrollTop;

    const checkScroll = () => {
      if (Math.abs(getScrollTop() - target) <= 2) {
        setTimeout(() => {
          scrollLockRef.current.target = undefined;
        }, animationDelay);
      } else {
        requestAnimationFrame(checkScroll);
      }
    };

    requestAnimationFrame(checkScroll);
  };

  return { active, scrollTo };
}