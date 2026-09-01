"use client";

import React, { useState, useEffect } from "react";
import { Project } from "../data/projects";

type Props = {
  project: Project;
  openModal: () => void;
};

export default function ProjectCard({ project, openModal }: Props) {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    const checkDark = () =>
      setIsDark(document.documentElement.classList.contains("dark"));
    checkDark();

    const observer = new MutationObserver(checkDark);
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["class"],
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div
      onClick={openModal}
      className={`
        cursor-pointer group flex flex-col rounded-xl overflow-hidden border shadow-sm hover:shadow-lg
        w-80 h-full min-h-[28rem]
        ${
          isDark
            ? "bg-[#1e1e1e] text-gray-100 border-gray-700"
            : "bg-white text-gray-900 border-gray-200"
        }
      `}
    >
      {/* Image */}
      {project.image && (
        <div className="relative w-full h-52 overflow-hidden">
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
          />
          {project.category && (
            <span className="absolute top-3 left-3 text-xs sm:text-sm font-semibold uppercase px-2 py-1 rounded-full bg-[var(--accent)] text-white">
              {project.category}
            </span>
          )}
        </div>
      )}

      {/* Text Content */}
      <div className="flex flex-col flex-1 p-4 sm:p-5">
        <h3 className="text-lg sm:text-xl font-bold leading-snug mb-3 break-words">
          {project.title}
        </h3>

        {project.client && (
          <p className="text-sm font-semibold mb-1">{project.client}</p>
        )}

        {project.role && (
          <p className="text-sm font-normal mb-2">{project.role}</p>
        )}

        {project.shortDescription && (
          <p className={isDark ? "text-gray-300" : "text-gray-600"}>
            {project.shortDescription}
          </p>
        )}
      </div>
    </div>
  );
}