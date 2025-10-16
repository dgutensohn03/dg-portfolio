// src/components/ProjectCard.tsx
import { motion } from "framer-motion";
import { getAssetPath } from "../utils/getAssetPath";

export default function ProjectCard({ project }) {
  const openDemo = () => {
    if (project.href) {
      window.open(
        project.href,
        "_blank",
        "width=1280,height=720,toolbar=no,menubar=no,location=no,status=no"
      );
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 15 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.35 }}
      className="rounded-xl overflow-hidden border border-[var(--hairline)] bg-[var(--bg)] shadow-md hover:shadow-xl hover:-translate-y-1 transition-all"
    >
      <div className="aspect-video overflow-hidden">
        <img
          src={getAssetPath(project.thumb)}
          alt={project.title}
          className="w-full h-full object-cover"
        />
      </div>

      <div className="p-4">
        <h3 className="text-lg font-semibold text-[var(--fg)]">{project.title}</h3>
        <p className="text-sm text-[var(--muted)]">{project.client}</p>

        <button
          onClick={openDemo}
          className="mt-4 inline-flex items-center gap-2 px-3 py-1.5 rounded-md text-sm border border-[var(--hairline)] hover:border-[var(--accent)] hover:text-[var(--accent)] transition-colors"
        >
          Open Demo ↗
        </button>
      </div>
    </motion.div>
  );
}
