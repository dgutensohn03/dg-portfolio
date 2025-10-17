// src/components/ProjectCard.tsx
import { motion } from "framer-motion";

export default function ProjectCard({ project }) {
  return (
    <div className="glass border border-[var(--hairline)] rounded-xl overflow-hidden flex flex-col h-full">
      {/* Thumbnail */}
      <div className="w-full h-44 overflow-hidden">
        <img
          src={project.thumb}
          alt={project.title}
          className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-300"
        />
      </div>

      {/* Content */}
      <div className="flex flex-col flex-grow p-4">
        <h3 className="text-lg font-semibold text-[var(--fg)]">{project.title}</h3>
        {project.client && (
          <p className="text-[12px] text-[var(--muted)] mt-1 opacity-70">
            {project.client}
          </p>
        )}
        {project.description && (
          <p className="text-sm text-[var(--muted)] mt-3 leading-snug">{project.description}</p>
        )}

        {/* Sticky footer area */}
        <div className="mt-auto pt-4">
          <button
            onClick={() => window.open(
              project.href,
              "demoWindow",
              "width=1280,height=800,top=50,left=50,toolbar=0,menubar=0,location=0,status=0,scrollbars=1,resizable=1"
            )
            }
            className="inline-block w-full px-4 py-2 text-sm text-center border border-[var(--hairline)] rounded-lg 
                       hover:border-[var(--accent)] hover:text-[var(--accent)] transition cursor-pointer"
          >
            Open Demo →
          </button>
        </div>
      </div>
    </div>
  );
}
