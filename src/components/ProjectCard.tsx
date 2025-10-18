// src/components/ProjectCard.tsx
import type { ProjectItem } from "../data/projects";
import { motion } from "framer-motion";

type ProjectCardProps = {
  project: ProjectItem;
  openModal: (project: ProjectItem) => void;
};

export default function ProjectCard({ project, openModal }: ProjectCardProps) {
  const isMobile = typeof window !== "undefined" && window.innerWidth < 768;

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
    <div className="relative group glass border border-[var(--hairline)] rounded-xl overflow-hidden flex flex-col h-full">

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
            className="w-full px-4 py-2 text-sm text-center border border-[var(--hairline)] rounded-lg hover:border-[var(--accent)] hover:text-[var(--accent)] transition cursor-pointer"
          >
            {isMobile && project.desktopOnly ? "Learn More →" : "Open Demo →"}
          </button>
        </div>
      </div>
    </div>
  );
}
