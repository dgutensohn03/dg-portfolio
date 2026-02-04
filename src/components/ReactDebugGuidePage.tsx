// src/components/ReactDebugGuidePage.tsx
import React, { useRef, useState } from "react";
import Navbar from "./Navbar";
import SectionDots from "./SectionDots";
import FooterPortal from "./FooterPortal";
import FadeSection from "./FadeSection";
import { useInView } from "framer-motion";

import { sectionsData } from "../data/sectionsData";

const ReactDebugGuidePage: React.FC = () => {
  const pageRef = useRef<HTMLDivElement | null>(null);
  const isPageMostlyVisible = useInView(pageRef, { amount: 0.6 });
  const activeSection = "debug-guide";

  return (
    <div
      className="min-h-screen transition-colors duration-500 relative bg-gradient-to-b from-gray-50 via-gray-100 to-gray-200 dark:from-gray-900 dark:via-gray-800 dark:to-gray-700 text-gray-900 dark:text-gray-100"
    >
      <Navbar />
      <SectionDots />
      <FooterPortal visible={activeSection === "debug-guide"} forceHide={!isPageMostlyVisible} />

      <main
        ref={pageRef}
        className="md:snap-y md:snap-mandatory scroll-smooth overflow-y-auto h-screen touch-pan-y pt-[80px]"
      >
        {sectionsData.map((sec, idx) => {
          const [open, setOpen] = useState(true); // collapsible
          return (
            <FadeSection key={idx}>
              <section
                className="relative md:snap-start min-h-[calc(100vh-80px)] flex flex-col pb-12 md:pb-36 pt-[40px]"
              >
                <div className="w-full px-12 sm:px-16 md:px-20 lg:px-28 xl:px-40 mx-auto max-w-6xl">
                  <div
                    className="bg-white dark:bg-gray-800 shadow-lg rounded-xl p-6 mb-8"
                  >
                    <div
                      className="flex items-center justify-between cursor-pointer"
                      onClick={() => setOpen(!open)}
                    >
                      <h2 className="text-2xl md:text-3xl font-bold mb-2">{sec.title}</h2>
                      <span className="text-gray-500 dark:text-gray-400">
                        {open ? "−" : "+"}
                      </span>
                    </div>

                    {open && (
                      <>
                        {sec.description && <p className="mb-4">{sec.description}</p>}

                        {sec.examples?.map((ex, i) => (
                          <div key={i} className="bg-gray-100 dark:bg-gray-700 border-l-4 border-blue-500 p-4 mb-4">
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
