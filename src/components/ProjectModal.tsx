"use client";

import { cloneElement, ReactElement, useRef, useEffect, useState } from "react";
import BaseModal from "./BaseModal";
import CloseButton from "./CloseButton";
import { Project } from "../data/projects";
import {
  Puzzle,
  Lightbulb,
  ToolCase,
  Trophy,
  BarChart,
  Clipboard,
  ExternalLink,
  ChevronDown,
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

type Props = {
  project: Project | null;
  onClose: () => void;
};

const sectionIcons: Record<string, ReactElement<{ size?: number }>> = {
  overview: <Lightbulb />,
  challenges: <Puzzle />,
  problem: <Puzzle />,
  solution: <Lightbulb />,
  architecture: <ToolCase />,
  highlights: <Trophy />,
  impact: <BarChart />,
  keyTakeaways: <Clipboard />,
};

export default function ProjectModal({ project, onClose }: Props) {
  const titleCategoryRef = useRef<HTMLDivElement>(null);
  const bodyRef = useRef<HTMLDivElement>(null);
  const [titleGap, setTitleGap] = useState(4);
  const [showArrow, setShowArrow] = useState(true);

  // Adjust title-category gap
  useEffect(() => {
    const el = titleCategoryRef.current;
    if (!el) return;

    const updateGap = () => {
      const children = Array.from(el.children) as HTMLElement[];
      if (children.length < 2) return;

      const titleBottom = children[0].getBoundingClientRect().bottom;
      const categoryTop = children[1].getBoundingClientRect().top;

      setTitleGap(categoryTop > titleBottom + 2 ? 2 : 4);
    };

    updateGap();
    const resizeObserver = new ResizeObserver(updateGap);
    resizeObserver.observe(el);
    window.addEventListener("resize", updateGap);

    return () => {
      resizeObserver.disconnect();
      window.removeEventListener("resize", updateGap);
    };
  }, [project?.title, project?.category]);

  // Show/hide arrow based on scroll position
  useEffect(() => {
    const el = bodyRef.current;
    if (!el) return;

    const handleScroll = () => {
      const scrollTop = el.scrollTop;
      const scrollHeight = el.scrollHeight;
      const clientHeight = el.clientHeight;
      const atBottom = scrollTop + clientHeight >= scrollHeight - 2;
      setShowArrow(!atBottom);
    };

    el.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => el.removeEventListener("scroll", handleScroll);
  }, [project]);

  if (!project) return null;

  const sections = [
    "overview",
    "challenges",
    "problem",
    "solution",
    "architecture",
    "highlights",
    "impact",
    "keyTakeaways",
  ];

  const filledSections = sections.filter((key) => {
    const value = (project as any)[key];
    return value && (Array.isArray(value) ? value.length > 0 : true);
  });

  return (
    <BaseModal isOpen={!!project} onClose={onClose}>
      <div
        className={`
          relative
          w-[92vw] max-w-5xl max-h-[96vh]
          rounded-2xl shadow-xl border border-(--modal-border)
          flex flex-col overflow-hidden
          bg-(--modal-surface) text-(--modal-text)
        `}
      >
        {/* HEADER */}
        <div
          className="sticky top-0 z-20 px-8 py-6 pr-16 border-b
            bg-(--modal-header) border-(--modal-border)"
        >
          <CloseButton
            onClick={onClose}
            isDark={document.documentElement.classList.contains("dark")}
          />

          <div ref={titleCategoryRef} className={`flex flex-wrap items-center gap-${titleGap}`}>
            <h2 className="text-3xl sm:text-4xl font-bold wrap-break-word">
              {project.title}
            </h2>
            {project.category && (
              <span className="uppercase tracking-wide font-semibold text-sm px-3 py-1 rounded-full bg-(--accent) text-white whitespace-nowrap">
                {project.category}
              </span>
            )}
          </div>

          {/* TECH */}
          {project.tech?.length > 0 && (
            <div className="flex flex-wrap gap-2 mt-4">
              {project.tech.map((tech) => (
                <span
                  key={tech}
                  className="text-xs sm:text-sm px-3 py-1 rounded-md border bg-(--modal-techtag) border-(--modal-border)"
                >
                  {tech}
                </span>
              ))}
            </div>
          )}

          {/* CLIENT + ROLE + BUTTON */}
          <div className="mt-4 flex flex-wrap items-center gap-3">
            {(project.client || project.role) && (
              <span className="flex items-center gap-1 flex-wrap text-sm text-(--modal-text-secondary)">
                {project.client && <span className="font-semibold">{project.client}</span>}
                {project.client && project.role && <span>·</span>}
                {project.role && <span className="font-normal">{project.role}</span>}
              </span>
            )}

            {project.link && (
              <button
                title="View Project"
                onClick={() => window.open(project.link, "_blank")}
                className="flex items-center gap-2 px-4 py-1 text-sm sm:text-base rounded-md border border-(--modal-button-border) text-(--modal-accent) hover:bg-(--accent) hover:text-white cursor-pointer"
              >
                View Project
                <ExternalLink size={16} />
              </button>
            )}
          </div>
        </div>

        {/* SCROLLABLE BODY */}
        <div
          ref={bodyRef}
          className="flex-1 overflow-y-auto relative"
          style={{ paddingBottom: 60 }} // space for arrow container
        >
          {/* IMAGE FULL WIDTH */}
          {project.image && (
            <div className="w-full">
              <img
                src={project.image}
                alt={project.title}
                className="w-full object-contain"
              />
            </div>
          )}

          {/* CONTENT SECTIONS */}
          <div className="px-8 py-10 grid grid-cols-1 md:grid-cols-2 gap-8">
            {filledSections.map((key) => {
              const value: any = (project as any)[key];
              const isKeyTakeaway = key === "keyTakeaways";

              return (
                <div
                  key={key}
                  className={`relative p-6 rounded-xl border shadow-sm
                    ${
                      isKeyTakeaway
                        ? "bg-(--modal-keytakeaway) border-(--modal-accent)"
                        : "bg-(--modal-card) border-(--modal-border)"
                    }`}
                >
                  <div className="absolute top-4 right-4 opacity-20 pointer-events-none">
                    {sectionIcons[key] &&
                      cloneElement(sectionIcons[key], { size: 42 })}
                  </div>

                  <div className="relative z-10">
                    <h3 className="text-xl sm:text-2xl font-bold uppercase mb-3">
                      {key === "keyTakeaways"
                        ? "Key Takeaways"
                        : key.charAt(0).toUpperCase() + key.slice(1)}
                    </h3>

                    <div className="w-14 h-1 mb-5 bg-(--accent)"></div>

                    {Array.isArray(value) ? (
                      <ul className="list-disc ml-5 space-y-2">
                        {value.map((item: string) => (
                          <li key={item}>{item}</li>
                        ))}
                      </ul>
                    ) : (
                      <p className="leading-relaxed">{value}</p>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* ARROW CONTAINER FIXED AT BOTTOM */}
        <AnimatePresence>
          {showArrow && (
            <motion.div
              className="
                absolute bottom-0 left-0 w-full h-10
                bg-(--modal-header) border-t border-(--modal-border)
                flex items-center justify-center z-50
                pointer-events-none
              "
              initial={{ opacity: 1 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              {/* Arrow motion only */}
              <motion.div
                animate={{ y: [0, 6, 0] }}
                transition={{ repeat: Infinity, duration: 1.2 }}
              >
                <ChevronDown size={28} className="text-(--accent)" />
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </BaseModal>
  );
}