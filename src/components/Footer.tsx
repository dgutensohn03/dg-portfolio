"use client";

import { Github, Linkedin, Mail, FileText } from "lucide-react";
import { useState } from "react";
import ResumeModal from "./ResumeModal";

export default function Footer() {
  const [isResumeOpen, setIsResumeOpen] = useState(false);

  const actions = [
    {
      icon: <Github size={20} strokeWidth={1.6} />,
      label: "GitHub",
      action: () => window.open("https://github.com/dgutensohn03/", "_blank"),
    },
    {
      icon: <Linkedin size={20} strokeWidth={1.6} />,
      label: "LinkedIn",
      action: () =>
        window.open("https://www.linkedin.com/in/daniel-gutensohn-a2860a71", "_blank"),
    },
    {
      icon: <Mail size={20} strokeWidth={1.6} />,
      label: "Email",
      action: () => (window.location.href = "mailto:dgutensohn@icloud.com"),
    },
    {
      icon: <FileText size={20} strokeWidth={1.6} />,
      label: "Resume",
      action: () => setIsResumeOpen(true),
    },
  ];

  return (
    <>
      <ResumeModal isOpen={isResumeOpen} onClose={() => setIsResumeOpen(false)} />

      <footer className="w-full px-4 pt-3 pb-3 sm:pt-4 sm:pb-4 flex flex-col items-center justify-center text-center">
        <div className="flex flex-col items-center justify-center">
          <div className="flex items-center justify-center gap-5 sm:gap-6 mb-2">
            {actions.map(({ icon, label, action }, i) => (
              <button
                key={i}
                onClick={action}
                aria-label={label}
                title={label}
                className="relative group text-[var(--fg)]/70 hover:text-[var(--accent)] cursor-pointer p-2 rounded-lg hover:-translate-y-[2px] hover:drop-shadow-[0_0_6px_rgba(var(--accent-rgb),0.45)] flex items-center justify-center"
              >
                <span className="pointer-events-none absolute left-1/2 -translate-x-1/2 -mt-[60px] px-3 py-[3px] text-[11px] rounded-md backdrop-blur-md bg-[var(--glass)]/70 text-[var(--fg)]/85 border border-[var(--hairline)] shadow-sm opacity-0 group-hover:opacity-100 transition-opacity duration-200 hidden sm:block">
                  {label}
                </span>
                {icon}
              </button>
            ))}
          </div>

          <p className="text-[10px] text-[var(--muted)] opacity-60 px-4 leading-snug max-w-lg">
            *Demo links open in a secure external window and are provided strictly for demonstration purposes. All content remains the property of the respective clients.
          </p>
        </div>
      </footer>
    </>
  );
}