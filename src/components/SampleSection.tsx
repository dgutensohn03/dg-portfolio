// src/components/SampleSections.tsx
"use client";

import { motion } from "framer-motion";

const sections = [
  { id: "home", label: "Home", color: "bg-orange-100 dark:bg-orange-900" },
  { id: "about", label: "About", color: "bg-blue-100 dark:bg-blue-900" },
  { id: "projects", label: "Projects", color: "bg-green-100 dark:bg-green-900" },
  { id: "contact", label: "Contact", color: "bg-purple-100 dark:bg-purple-900" },
];

export default function SampleSections() {
  return (
    <main data-scroll-container className="relative">
      {sections.map(({ id, label, color }) => (
        <motion.section
          key={id}
          id={id}
          className={`min-h-screen flex items-center justify-center ${color}`}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-20% 0px" }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-5xl font-bold">{label}</h1>
        </motion.section>
      ))}
    </main>
  );
}