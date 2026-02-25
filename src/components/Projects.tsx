"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import projects from "../data/projects";
import ProjectCard from "./ProjectCard";
import ProjectModal from "./ProjectModal";

export default function Projects() {
  const [modalProject, setModalProject] = useState<string | null>(null);

  const openModal = (id: string) => setModalProject(id);
  const closeModal = () => setModalProject(null);

  return (
    <div className="w-full flex justify-center">
      {/* Center container matches About section width exactly, no side padding */}
      <div className="w-full max-w-3xl flex flex-col">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <h2 className="text-4xl md:text-4xl font-semibold mb-4 text-[var(--fg)]">
            Featured Learning Systems & Platforms
          </h2>
          <p className="text-lg text-[var(--muted)] leading-relaxed">
            A selection of course portals, interactive learning systems, and
            custom-built training platforms. Each project was designed to improve
            clarity, reduce friction in user flow, and make learning feel more
            guided and intuitive.
          </p>
          <p className="text-sm text-[var(--muted)] mt-2 opacity-80">
            I focus on building learning experiences that feel seamless on the
            surface — while the system handles structure, progression, and logic
            behind the scenes.
          </p>
        </motion.div>

        {/* Projects Grid */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ staggerChildren: 0.12 }}
          className="flex flex-wrap justify-center gap-6"
        >
          {projects.map((project) => (
            <motion.div
              key={project.id}
              variants={{ hidden: { opacity: 0, y: 18 }, visible: { opacity: 1, y: 0 } }}
              transition={{ duration: 0.4, ease: "easeOut" }}
            >
              <ProjectCard project={project} openModal={() => openModal(project.id)} />
            </motion.div>
          ))}
        </motion.div>

        {/* Modal */}
        <AnimatePresence>
          {modalProject && (
            <ProjectModal
              key={modalProject}
              project={projects.find((p) => p.id === modalProject)!}
              onClose={closeModal}
            />
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
