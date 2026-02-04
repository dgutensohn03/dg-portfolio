import type { ProjectItem } from "../data/projects";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

type ProjectCardProps = {
  project: ProjectItem;
  openModal: (project: ProjectItem) => void;
};

export default function ProjectCard({ project, openModal }: ProjectCardProps) {
  const [isDark, setIsDark] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  // ✅ Detect theme (dark / light)
  useEffect(() => {
    const html = document.documentElement;
    const updateTheme = () => setIsDark(html.classList.contains("dark"));
    updateTheme();

    const observer = new MutationObserver(updateTheme);
    observer.observe(html, { attributes: true, attributeFilter: ["class"] });
    return () => observer.disconnect();
  }, []);

  // ✅ Responsive detection that updates on resize
  useEffect(() => {
    const checkScreen = () => setIsMobile(window.matchMedia("(max-width: 767px)").matches);
    checkScreen();

    window.addEventListener("resize", checkScreen);
    return () => window.removeEventListener("resize", checkScreen);
  }, []);

  const glowColor = isDark
    ? "0 0 18px 2px rgba(251,146,60,0.45)" // orange glow in dark
    : "0 0 18px 2px rgba(234,88,12,0.4)";  // subtle orange glow in light

  const handleAction = () => {
    if (isMobile && project.desktopOnly) {
      openModal(project);
    } else {
      window.open(
        project.href,
        "demoWindow",
        "width=1280,height=800,top=50,left=50,toolbar=0,menubar=0,location=0,status=0,scrollbars=1,resizable=1"
      );
    }
  };

  return (
    <motion.div
      whileHover={{
        y: -4,
        boxShadow: glowColor,
        borderColor: "#ea580c",
      }}
      transition={{ type: "spring", stiffness: 220, damping: 18 }}
      className="relative group glass border border-[var(--hairline)] rounded-xl overflow-hidden flex flex-col h-full transition-all duration-300"
    >
      {/* Desktop Only Badge */}
      {project.desktopOnly && (
        <span className="absolute z-10 top-3 right-3 text-[10px] font-medium tracking-wide bg-[var(--bg)]/80 px-2 py-0.5 rounded border border-[var(--hairline)] backdrop-blur-sm">
          Desktop Only
        </span>
      )}

      {/* Thumbnail */}
      <div className="w-full h-44 overflow-hidden relative">
        <img
          src={project.thumb}
          alt={project.title}
          className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-300"
        />
      </div>

      {/* Content */}
      <div className="flex flex-col flex-grow p-4">
        <h3 className="text-lg font-semibold text-[var(--fg)]">{project.title}</h3>
        {project.client && (
          <p className="text-[12px] text-[var(--muted)] mt-1 opacity-70">{project.client}</p>
        )}
        {project.description && (
          <p className="text-sm text-[var(--muted)] mt-3 leading-snug">
            {project.description}
          </p>
        )}

        <div className="mt-auto pt-4">
          <button
            onClick={handleAction}
            className="w-full px-4 py-2 text-sm text-center border border-[var(--hairline)] rounded-lg 
                       hover:border-[#ea580c] hover:text-[#ea580c]
                       transition-colors duration-200 cursor-pointer"
          >
            {isMobile && project.desktopOnly ? "Learn More →" : "Open Demo →"}
          </button>
        </div>
      </div>
    </motion.div>
  );
}
