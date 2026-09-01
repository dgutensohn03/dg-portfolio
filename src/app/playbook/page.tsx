"use client";

import { useEffect, useRef, useState } from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { materialLight } from "react-syntax-highlighter/dist/esm/styles/prism";
import { motion } from "framer-motion";
import SidebarNav from "@/components/architecture/SidebarNav";
import playbookContent from "@/data/playbookContent.json";

export default function PlaybookTemplate() {
  const { title, sections } = playbookContent;
  const [active, setActive] = useState(sections[0].id);
  const sectionRefs = useRef<Record<string, HTMLElement | null>>({});
  const mobileNavRef = useRef<HTMLDivElement | null>(null);

  const registerSection = (id: string, el: HTMLElement | null) => {
    sectionRefs.current[id] = el;
  };

  const scrollToSection = (id: string) => {
    sectionRefs.current[id]?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

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

  useEffect(() => {
    if (!mobileNavRef.current) return;
    const activeEl = mobileNavRef.current.querySelector<HTMLElement>(`[data-id='${active}']`);
    activeEl?.scrollIntoView({ behavior: "smooth", block: "nearest", inline: "center" });
  }, [active]);

  return (
    <div className="min-h-screen bg-gray-50 text-gray-900 scroll-smooth">
      {/* HERO */}
      <header className="h-screen flex flex-col justify-center items-center text-center px-6 sm:px-8 border-b border-gray-200 relative">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight">{title}</h1>
        <p className="mt-6 max-w-2xl text-base sm:text-lg text-gray-600">
          {sections[0].content.join(" ")}
        </p>
        <motion.div
          className="absolute bottom-10 text-3xl text-gray-400 animate-bounce cursor-pointer"
          onClick={() => scrollToSection(sections[0].id)}
        >
          ↓
        </motion.div>
      </header>

      {/* MOBILE NAV */}
      <nav className="lg:hidden sticky top-0 z-40 bg-gray-50 border-b border-gray-200" aria-label="Section navigation">
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

      {/* MAIN CONTENT */}
      <div className="max-w-7xl mx-auto flex gap-10 px-6 py-16">
        <aside className="hidden lg:block w-64 sticky top-32 self-start">
          <SidebarNav sections={sections} active={active} onSelect={scrollToSection} />
        </aside>

        <main className="flex-1 space-y-24">
          {sections.map((s) => (
            <section
              key={s.id}
              id={s.id}
              ref={(el) => registerSection(s.id, el)}
              className="min-h-[85vh] flex flex-col items-center justify-center scroll-mt-32"
            >
              <div className="w-full max-w-4xl bg-white p-8 md:p-14 rounded-2xl shadow-sm border border-gray-200">
                <h2 className="text-2xl md:text-3xl font-semibold mb-6">{s.title}</h2>
                
                {s.content.map((para, idx) => (
                  <p key={idx} className="text-gray-600 leading-relaxed mb-4">{para}</p>
                ))}

                {s.list && (
                  <ul className="list-disc list-inside space-y-2 mb-4">
                    {s.list.map((item, idx) => <li key={idx}>{item}</li>)}
                  </ul>
                )}

                {s.code && s.code.map((block, idx) => (
                  <div key={idx} className="my-6 rounded-lg overflow-hidden border border-gray-200">
                    <SyntaxHighlighter language={block.language} style={materialLight} customStyle={{ padding: "1rem" }}>
                      {block.snippet}
                    </SyntaxHighlighter>
                  </div>
                ))}

              </div>
            </section>
          ))}
        </main>
      </div>
    </div>
  );
}
