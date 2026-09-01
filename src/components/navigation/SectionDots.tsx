"use client";

import React from "react";
import { Home, User, Folder, Mail } from "lucide-react";
import { SectionId } from "../../hooks/useActiveSection";

interface SectionDotsProps {
  active: SectionId;
  scrollToId: (id: SectionId) => void;
}

// Sections typed explicitly with SectionId
const sections: { id: SectionId; icon: React.ElementType; label: string }[] = [
  { id: "home", icon: Home, label: "Home" },
  { id: "about", icon: User, label: "About" },
  { id: "projects", icon: Folder, label: "Projects" },
  { id: "contact", icon: Mail, label: "Contact" },
];

export default function SectionDots({ active, scrollToId }: SectionDotsProps) {
  return (
    <div className="fixed right-6 top-1/2 -translate-y-1/2 flex flex-col gap-4 z-40">
      {sections.map(({ id, icon: Icon, label }) => {
        const isActive = active === id;
        return (
          <button
            key={id}
            onClick={() => scrollToId(id)}
            className="relative flex items-center cursor-pointer group"
            type="button"
          >
            {/* Label tooltip */}
            <span
              className="
                pointer-events-none absolute right-6 top-1/2 -translate-y-1/2
                px-3 py-0.75 rounded-md backdrop-blur-md bg-(--glass)/70
                border border-(--hairline)
                text-(--fg)/85
                flex items-center gap-1 text-[10px] font-medium
                opacity-0 group-hover:opacity-100
                transition-opacity shadow-sm
              "
            >
              <Icon size={14} /> {label}
            </span>

            {/* Dot */}
            <div
              className={`w-3 h-3 rounded-full ${
                isActive ? "bg-(--accent)" : "bg-(--fg)/50"
              }`}
            />
          </button>
        );
      })}
    </div>
  );
}