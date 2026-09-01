"use client";

import React, { useRef, useState, useEffect } from "react";
import FadeSection from "./FadeSection";
import FooterPortal from "./FooterPortal";
import { sectionsData } from "../data/sectionsData";
import ThemeToggle from "./ThemeToggle";

// Mobile Sidebar Toggle
import { HiMenu, HiX } from "react-icons/hi";

const ReactDebugGuidePage: React.FC = () => {
  const pageRef = useRef<HTMLDivElement | null>(null);
  const sectionRefs = useRef<{ [key: string]: HTMLDivElement | null }>({});
  const [currentSection, setCurrentSection] = useState<string>(sectionsData[0]?.id || "");
  const [mobileTOCOpen, setMobileTOCOpen] = useState(false);

  // IntersectionObserver to track active section
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setCurrentSection(entry.target.id);
          }
        });
      },
      { threshold: 0.6 }
    );

    Object.values(sectionRefs.current).forEach((ref) => ref && observer.observe(ref));

    return () => observer.disconnect();
  }, []);

  const scrollToSection = (id: string) => {
    const ref = sectionRefs.current[id];
    if (ref) {
      setCurrentSection(id); // update immediately
      ref.scrollIntoView({ behavior: "smooth", block: "start" });
      setMobileTOCOpen(false);
    }
  };

  return (
    <div
      className="min-h-screen relative transition-colors duration-500 bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-gray-100"
    >
      {/* Topbar */}
      <div className="fixed top-0 left-0 right-0 h-16 flex items-center justify-between px-4 md:px-8 z-50 bg-white dark:bg-gray-900 shadow-md">
        <h1 className="text-xl font-bold">React Debug Guide</h1>
        <div className="flex items-center space-x-4">
          <ThemeToggle />
          <button
            className="md:hidden p-2 rounded-md hover:bg-gray-200 dark:hover:bg-gray-800"
            onClick={() => setMobileTOCOpen(!mobileTOCOpen)}
          >
            {mobileTOCOpen ? <HiX size={24} /> : <HiMenu size={24} />}
          </button>
        </div>
      </div>

      {/* Sidebar for desktop */}
      <aside className="hidden md:flex flex-col fixed top-16 left-6 h-[calc(100vh-64px)] overflow-auto space-y-2 z-40">
        {sectionsData.map((sec) => {
          const isActive = currentSection === sec.id;
          return (
            <button
              key={sec.id}
              onClick={() => scrollToSection(sec.id)}
              className={`
                flex flex-col justify-center px-3 py-2 rounded-lg text-left transition-colors duration-200
                ${isActive ? "bg-blue-500 text-white" : "hover:bg-blue-100 dark:hover:bg-gray-700 dark:hover:text-white"}
              `}
            >
              <span className="truncate">{sec.title}</span>
            </button>
          );
        })}
      </aside>

      {/* Mobile TOC */}
      {mobileTOCOpen && (
        <div className="md:hidden fixed top-16 left-0 right-0 bg-white dark:bg-gray-900 z-50 shadow-lg p-4 space-y-2">
          {sectionsData.map((sec) => (
            <button
              key={sec.id}
              onClick={() => scrollToSection(sec.id)}
              className={`block w-full text-left px-3 py-2 rounded-md ${currentSection === sec.id ? "bg-blue-500 text-white" : "hover:bg-blue-100 dark:hover:bg-gray-700 dark:hover:text-white"
                }`}
            >
              {sec.title}
            </button>
          ))}
        </div>
      )}

      {/* Footer */}
      <FooterPortal visible={true} forceHide={false} />

      {/* Main Content */}
      <main
        ref={pageRef}
        className="md:snap-y md:snap-mandatory scroll-smooth overflow-y-auto h-screen touch-pan-y pt-20"
      >
        {sectionsData.map((sec) => {
          const [open, setOpen] = useState(true);
          return (
            <FadeSection key={sec.id}>
              <section
                ref={(el) => {
                  if (el instanceof HTMLDivElement) {
                    sectionRefs.current[sec.id] = el;
                  }
                }}
                id={sec.id}
                className="relative md:snap-start min-h-[calc(100vh-80px)] flex flex-col pb-12 md:pb-36 pt-6"
              >
                <div className="w-full px-6 sm:px-12 md:px-20 lg:px-28 xl:px-40 mx-auto max-w-6xl">
                  <div className="bg-white dark:bg-gray-800 shadow-lg rounded-xl p-6 mb-8">
                    <div
                      className="flex items-center justify-between cursor-pointer"
                      onClick={() => setOpen(!open)}
                    >
                      <h2 className="text-2xl md:text-3xl font-bold mb-2">{sec.title}</h2>
                      <span className="text-gray-500 dark:text-gray-400">{open ? "−" : "+"}</span>
                    </div>

                    {open && (
                      <>
                        {sec.description && <p className="mb-4">{sec.description}</p>}

                        {sec.examples?.map((ex, i) => (
                          <div
                            key={i}
                            className="bg-gray-100 dark:bg-gray-700 border-l-4 border-blue-500 p-4 mb-4"
                          >
                            <strong>Example Issue:</strong> {ex}
                          </div>
                        ))}

                        {sec.snippets?.map((snip, i) => (
                          <pre
                            key={i}
                            className="bg-gray-900 text-green-300 p-4 mb-4 overflow-x-auto rounded font-mono"
                          >
                            <code>{snip}</code>
                          </pre>
                        ))}

                        {sec.bullets?.length && (
                          <ul className="list-disc list-inside mb-4">
                            {sec.bullets.map((b, i) => (
                              <li key={i}>{b}</li>
                            ))}
                          </ul>
                        )}

                        {sec.docs?.length && (
                          <p className="mb-4">
                            Docs:{" "}
                            {sec.docs.map((d, i) => (
                              <a
                                key={i}
                                href={d.link}
                                target="_blank"
                                rel="noreferrer"
                                className="text-blue-600 hover:underline mr-2"
                              >
                                {d.label}
                              </a>
                            ))}
                          </p>
                        )}
                      </>
                    )}
                  </div>
                </div>
              </section>
            </FadeSection>
          );
        })}
      </main>
    </div>
  );
};

export default ReactDebugGuidePage;