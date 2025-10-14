import { motion } from "framer-motion";
import type { Project } from "../data/projects";

export default function ProjectCard({ title, description, tech, image, link }: Project) {
  return (
    <motion.a
      href={link}
      target="_blank"
      rel="noreferrer"
      whileHover={{ scale: 1.02 }}
      className="block overflow-hidden rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm transition"
      aria-label={`Open project: ${title}`}
    >
      <div className="h-48 w-full overflow-hidden">
        <img src={image} alt={title} className="object-cover w-full h-full" />
      </div>
      <div className="p-6">
        <h3 className="text-2xl font-semibold mb-2">{title}</h3>
        <p className="text-gray-300 mb-4">{description}</p>
        <ul className="flex flex-wrap gap-2 text-xs text-brand-300">
          {tech.map((t) => (
            <li key={t} className="rounded-full border border-white/10 px-3 py-1 bg-white/5">
              {t}
            </li>
          ))}
        </ul>
        <span className="mt-4 inline-block text-brand-300">View project →</span>
      </div>
    </motion.a>
  );
}
