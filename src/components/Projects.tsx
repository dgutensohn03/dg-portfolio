import { useState } from "react";
import { projects } from "../data/projects";
import type { ProjectItem } from "../data/projects";
import ProjectCard from "./ProjectCard";
import Modal from "./Modal";
import { motion } from "framer-motion";

export default function Projects() {
  const [modalProject, setModalProject] = useState<ProjectItem | null>(null);

  // Open modal with selected project
  const openModal = (project: ProjectItem) => {
    setModalProject(project);
  };

  // Close modal
  const closeModal = () => {
    setModalProject(null);
  };

  return (
    <div className="w-full">
      {/* ✅ Modal Mount */}
      {modalProject && <Modal project={modalProject} onClose={closeModal} />}

      <div className="flex flex-col md:items-start items-center text-left">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-semibold text-[var(--fg)]"
        >
          Featured Learning Systems & Platforms
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.15, duration: 0.4 }}
          viewport={{ once: true }}
          className="mt-4 max-w-3xl text-[var(--muted)] leading-snug text-lg"
        >
          A selection of course portals, interactive learning systems, and custom-built training platforms. Each project was designed to improve clarity, reduce friction in user flow, and make learning feel more guided and intuitive.
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.4 }}
          viewport={{ once: true }}
          className="mt-2 max-w-3xl text-[var(--muted)] leading-snug text-sm opacity-80"
        >
          I focus on building learning experiences that feel seamless on the surface — while the system handles structure, progression, and logic behind the scenes.
        </motion.p>
      </div>

      {/* ✅ Project Grid */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        transition={{ staggerChildren: 0.12 }}
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-10 pb-12"
      >
        {projects.map((project: ProjectItem) => (
          <motion.div
            key={project.id}
            variants={{
              hidden: { opacity: 0, y: 18 },
              visible: { opacity: 1, y: 0 },
            }}
            transition={{ duration: 0.4, ease: "easeOut" }}
          >
            <ProjectCard project={project} openModal={openModal} />
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}
