"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import SidebarNav from "@/components/architecture/SidebarNav";

// Section metadata
const sections = [
  { id: "overview", title: "Overview" },
  { id: "frontend", title: "Frontend Architecture" },
  { id: "backend", title: "Backend & API" },
  { id: "performance", title: "Performance Strategy" },
  { id: "scaling", title: "Scaling Mindset" },
  { id: "architecture-flow", title: "Interactive Architecture Flow" },
];

export default function Page() {
  const [active, setActive] = useState(sections[0].id);
  const sectionRefs = useRef<Record<string, HTMLElement | null>>({});
  const mobileNavRef = useRef<HTMLDivElement | null>(null);

  // Register section refs
  const registerSection = (id: string, el: HTMLElement | null) => {
    sectionRefs.current[id] = el;
  };

  // Smooth scroll to a section
  const scrollToSection = (id: string) => {
    sectionRefs.current[id]?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  // Track active section via IntersectionObserver
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top)[0];
        if (visible) setActive(visible.target.id);
      },
      { rootMargin: "-40% 0px -50% 0px", threshold: 0.1 }
    );

    Object.values(sectionRefs.current).forEach((el) => el && observer.observe(el));

    return () => observer.disconnect();
  }, []);

  // Auto-scroll active mobile pill into view
  useEffect(() => {
    if (!mobileNavRef.current) return;
    const activeEl = mobileNavRef.current.querySelector<HTMLElement>(`[data-id='${active}']`);
    activeEl?.scrollIntoView({ behavior: "smooth", block: "nearest", inline: "center" });
  }, [active]);

  return (
    <div className="min-h-screen bg-gray-50 text-gray-900 scroll-smooth">
      {/* HERO */}
      <header className="h-screen flex flex-col justify-center items-center text-center px-6 sm:px-8 border-b border-gray-200 relative">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight">
          Full-Stack Architecture Playbook
        </h1>

        <p className="mt-6 max-w-2xl text-base sm:text-lg text-gray-600">
          A visual guide to scalable systems, architecture decisions, and production-ready engineering strategy.
        </p>

        <Link
          href="/"
          className="mt-8 rounded-xl border border-gray-300 px-6 py-3 text-sm hover:bg-gray-100 transition"
        >
          ← Back to Portfolio
        </Link>

        <motion.div
          className="absolute bottom-10 text-3xl text-gray-400 animate-bounce cursor-pointer"
          onClick={() => scrollToSection("overview")}
        >
          ↓
        </motion.div>
      </header>

      {/* MOBILE NAV */}
      <nav
        className="lg:hidden sticky top-0 z-40 bg-gray-50 border-b border-gray-200 relative"
        aria-label="Section navigation"
      >
        {/* Gradient fades for visual polish */}
        <div className="absolute inset-y-0 left-0 w-6 bg-gradient-to-r from-gray-50 pointer-events-none z-10" />
        <div className="absolute inset-y-0 right-0 w-6 bg-gradient-to-l from-gray-50 pointer-events-none z-10" />

        <div ref={mobileNavRef} className="overflow-x-auto no-scrollbar relative z-0">
          <div className="flex flex-nowrap min-w-max px-6 sm:px-8 py-4 gap-3 snap-x snap-mandatory">
            {sections.map((s) => {
              const isActive = active === s.id;
              return (
                <button
                  key={s.id}
                  data-id={s.id}
                  onClick={() => scrollToSection(s.id)}
                  aria-current={isActive ? "true" : undefined}
                  className={`flex-shrink-0 snap-start px-5 py-2 rounded-full text-sm font-medium transition-all border whitespace-nowrap
                    ${isActive
                      ? "bg-gray-900 text-white border-gray-900 shadow-md"
                      : "bg-gray-200 text-gray-700 border-gray-200 hover:bg-gray-300 hover:shadow-sm"
                    }`}
                >
                  {s.title}
                </button>
              );
            })}
          </div>
        </div>
      </nav>

      {/* MAIN LAYOUT */}
      <div className="max-w-7xl mx-auto flex gap-10 px-6 py-16">
        {/* DESKTOP SIDEBAR */}
        <aside className="hidden lg:block w-64 sticky top-32 self-start">
          <SidebarNav sections={sections} active={active} onSelect={scrollToSection} />
        </aside>

        {/* CONTENT */}
        <main className="flex-1 space-y-24">
          {sections.map((s) => (
            <section
              key={s.id}
              id={s.id}
              ref={(el) => registerSection(s.id, el)}
              className="min-h-[85vh] flex items-center justify-center scroll-mt-32"
            >
              <div className="w-full max-w-4xl bg-white p-8 md:p-14 rounded-2xl shadow-sm border border-gray-200">
                <h2 className="text-2xl md:text-3xl font-semibold mb-6">{s.title}</h2>
                <p className="text-gray-600 leading-relaxed">
                  Content for the {s.title} section. This section fills the viewport naturally and remains centered. If content grows taller than the screen, it scrolls normally without layout shift.
                </p>
              </div>
            </section>
          ))}
        </main>
      </div>
    </div>
  );
}
