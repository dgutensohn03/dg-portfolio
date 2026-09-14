"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import projects, { Project } from "../data/projects";
import ProjectCard from "./ProjectCard";
import ProjectModal from "./ProjectModal";
import AILifecycleFeature from "./AILifecycleFeature";

const insuranceOperations: Project = {
  id: "insurance-operations",
  title: "InsureOps — Insurance Operations Platform",
  role: "Full-Stack .NET Engineer",
  shortDescription:
    "A production-minded insurance operations dashboard for managing policies, claims, customers, lifecycle workflows, and calculated portfolio metrics.",
  description:
    "Designed and built a full-stack insurance operations product with Blazor WebAssembly, modern C#, ASP.NET Core APIs, typed service boundaries, recoverable domain lifecycle actions, responsive workflows, and automated browser and unit testing.",
  problem:
    "Operational insurance data spans related customers, policies, claims, lifecycle states, and portfolio metrics. The challenge was to make those relationships understandable and maintainable without reducing the experience to a static dashboard.",
  solution:
    "Built an interactive operations application where users can create and maintain records, archive and restore history, inspect operational detail, and see derived portfolio metrics recalculate from the same underlying domain data.",
  tech: ["C#", ".NET", "Blazor WebAssembly", "ASP.NET Core", "REST APIs", "xUnit", "Playwright", "GitHub Actions"],
  architecture: [
    "Blazor WebAssembly component UI with typed service abstraction",
    "ASP.NET Core minimal API with dependency injection and repository boundaries",
    "Shared domain models across client and API projects",
    "Demo data provider for static GitHub Pages deployment",
    "Automated build, unit-test, browser-test, and deployment pipeline"
  ],
  highlights: [
    "Editable claim, policy, and customer workflows with controlled business identifiers",
    "Recoverable archive and restore lifecycle for claims and customers",
    "Calculated premium, exposure, workload, and loss-ratio portfolio signals",
    "Keyboard-aware dialogs, focus management, scroll locking, responsive layouts, and reduced-motion support",
    "Cross-browser Playwright coverage for operational workflows"
  ],
  impact: [
    "Demonstrates end-to-end .NET product architecture rather than isolated UI examples",
    "Connects record mutations to derived operational metrics and downstream views",
    "Makes production tradeoffs explicit without presenting demo constraints as production capabilities"
  ],
  keyTakeaways: [
    "Domain lifecycle matters as much as CRUD in operational software",
    "Derived metrics should come from the same source data users maintain",
    "A typed service boundary lets the UI run against either a demo provider or an ASP.NET Core API",
    "Accessibility and automated verification belong in the architecture, not at the end"
  ],
  link: "/dg-portfolio/insurance-operations/",
  github: "https://github.com/dgutensohn03/dotnet-insurance-dashboard",
  image: "./images/projects/insurance/insureops-dashboard-card.svg",
  featured: true,
  category: "enterprise",
  tags: [".NET", "C#", "Blazor", "ASP.NET Core", "Full-Stack", "Insurance", "Playwright"]
};

export default function Projects() {
  const [modalProject, setModalProject] = useState<string | null>(null);
  const allProjects = [insuranceOperations, ...projects];

  const openModal = (id: string) => setModalProject(id);
  const closeModal = () => setModalProject(null);

  return (
    <div className="w-full flex justify-center">
      <div className="w-full max-w-3xl flex flex-col">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <h2 className="text-4xl md:text-4xl font-semibold mb-4 text-[var(--fg)]">
            Enterprise Platforms & Solutions
          </h2>
          <p className="text-lg text-[var(--muted)] leading-relaxed">
            A selection of platforms, dashboards, and interactive systems I’ve designed and built to support complex workflows and enterprise users. Each project demonstrates scalable architecture, maintainable code, and intuitive experiences optimized for performance, accessibility, and real-world impact.
          </p>
          <p className="text-sm text-[var(--muted)] mt-2 opacity-80">
            From full-stack operational systems and analytics dashboards to scenario-driven engines, I focus on simplifying complex workflows, enabling useful insights, and building products that can evolve.
          </p>
        </motion.div>

        <AILifecycleFeature />

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ staggerChildren: 0.12 }}
          className="flex flex-wrap justify-center gap-6"
        >
          {allProjects.map((project) => (
            <motion.div
              key={project.id}
              variants={{ hidden: { opacity: 0, y: 18 }, visible: { opacity: 1, y: 0 } }}
              transition={{ duration: 0.4, ease: "easeOut" }}
            >
              <ProjectCard project={project} openModal={() => openModal(project.id)} />
            </motion.div>
          ))}
        </motion.div>

        <AnimatePresence>
          {modalProject && (
            <ProjectModal
              key={modalProject}
              project={allProjects.find((p) => p.id === modalProject)!}
              onClose={closeModal}
            />
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
