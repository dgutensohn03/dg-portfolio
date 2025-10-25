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
    <footer className="w-full pb-6 pt-4 flex flex-col items-center text-center relative">
      <ResumeModal isOpen={isResumeOpen} onClose={() => setIsResumeOpen(false)} />

      {/* Icons */}
      <div className="flex gap-5 mb-2">
        {actions.map(({ icon, label, action }, i) => (
          <button
            key={i}
            onClick={action}
            aria-label={label}
            title={label}
            className="relative group text-[var(--fg)]/70 hover:text-[var(--accent)] 
                       transition-all duration-200 cursor-pointer p-2 rounded-lg
                       hover:-translate-y-[2px] hover:drop-shadow-[0_0_6px_rgba(var(--accent-rgb),0.45)]"
          >
            {/* ✅ Tooltip ABOVE — matches hero section style */}
            <span
              className="pointer-events-none absolute left-1/2 -translate-x-1/2 -mt-[30px] px-3 py-[3px] text-[11px] 
                         rounded-md backdrop-blur-md bg-[var(--glass)]/70 text-[var(--fg)]/85 
                         border border-[var(--hairline)] shadow-sm opacity-0 
                         group-hover:opacity-100 transition-opacity duration-200"
            >
              {label}
            </span>
            {icon}
          </button>
        ))}
      </div>

      {/* Disclaimer */}
      <p className="text-[10px] text-[var(--muted)] opacity-60 mt-1 px-8 leading-snug max-w-lg">
        *Demo links open in a secure external window and are provided strictly for demonstration
        purposes. All content remains the property of the respective clients.
      </p>
    </footer>
  );
}
