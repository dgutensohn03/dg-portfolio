// src/components/Projects.tsx
import { projects } from "../data/projects";
import ProjectCard from "./ProjectCard";
import { motion } from "framer-motion";

export default function Projects() {
  return (
    <section
      id="projects"
      className="section flex items-center min-h-[100dvh] relative"
      data-section="projects"
    >
      {/* Invisible activation marker */}
      <div className="absolute top-0 left-0 h-[1px] w-full -mt-1 pointer-events-none" />

      <div className="mx-auto max-w-6xl w-full">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-semibold text-[var(--fg)]"
        >
          Featured Projects
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.4 }}
          viewport={{ once: true }}
          className="mt-3 mb-6 max-w-3xl text-[var(--muted)]"
        >
          A collection of work demonstrating full-stack development and digital learning experiences.
          <span className="block mt-2 text-sm opacity-70">
            *Demo links open external popups.
          </span>
        </motion.p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 pb-6">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}
