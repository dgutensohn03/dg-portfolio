// src/components/Projects.tsx
import { projects } from "../data/projects";
import ProjectCard from "./ProjectCard";
import { motion } from "framer-motion";

export default function Projects() {
  return (
    <div className="w-full">
      <div className="flex flex-col md:items-start items-center text-left">
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
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.15, duration: 0.4 }}
          viewport={{ once: true }}
          className="mt-4 max-w-3xl text-[var(--muted)] leading-snug text-lg"
        >
          A selection of platforms, dashboards, and interactive systems I’ve built — each focused on clarity,
          performance, and helping users do something with less friction.
        </motion.p>
      </div>

      {/* ✅ Responsive dot-safe padding system */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        transition={{ staggerChildren: 0.12 }}
        className="
          grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-10 pb-12
          sm:px-0
                    /* mobile offset for dots */
          md:pr-0  /* tablet offset for dots */
          lg:mr-0
        "
      >
        {projects.map((project) => (
          <motion.div
            key={project.id}
            variants={{
              hidden: { opacity: 0, y: 18 },
              visible: { opacity: 1, y: 0 },
            }}
            transition={{ duration: 0.4, ease: "easeOut" }}
          >
            <ProjectCard project={project} />
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}
