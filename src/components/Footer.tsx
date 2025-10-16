import { FaGithub, FaLinkedin, FaEnvelope, FaFileAlt } from "react-icons/fa";
import { useState } from "react";
import ResumeModal from "./ResumeModal";

export default function Footer() {
  const [isResumeOpen, setIsResumeOpen] = useState(false);

  return (
    <footer className="w-full mt-12 pb-6 pt-10 flex flex-col items-center text-center relative">
      <ResumeModal isOpen={isResumeOpen} onClose={() => setIsResumeOpen(false)} />

      {/* Divider */}
      <div className="h-px w-24 mb-6 bg-[var(--hairline)]/40" />

      {/* Icon Row + Glass Tooltip ABOVE */}
      <div className="flex gap-6 mb-4">
        {[
          { icon: <FaGithub size={20} />, label: "GitHub", action: () => window.open("https://github.com/dgutensohn03/", "_blank") },
          { icon: <FaLinkedin size={20} />, label: "LinkedIn", action: () => window.open("https://https://www.linkedin.com/in/daniel-gutensohn-a2860a71", "_blank") },
          { icon: <FaEnvelope size={20} />, label: "Email", action: () => (window.location.href = "mailto:dgutensohn@icloud.com") },
          { icon: <FaFileAlt size={20} />, label: "Resume", action: () => setIsResumeOpen(true) },
        ].map(({ icon, label, action }, i) => (
          <button
            key={i}
            onClick={action}
            className="relative group text-[var(--fg)]/70 hover:text-[var(--accent)] transition-all hover:scale-110 hover:drop-shadow-[0_0_6px_var(--accent)]"
          >
            {/* Tooltip ABOVE */}
            <span className="absolute left-1/2 -translate-x-1/2 -mt-6 mb-1 px-2 py-[2px] text-[10px] rounded-md backdrop-blur-md bg-[var(--glass)]/60 text-[var(--fg)]/80 opacity-0 -translate-y-1 group-hover:translate-y-0 group-hover:opacity-100 transition-all">
              {label}
            </span>
            {icon}
          </button>
        ))}
      </div>

      {/* Subtle Footer Disclaimer */}
      <p className="text-xs text-[var(--muted)] opacity-60 leading-relaxed max-w-md">
        Designed & built by Daniel Gutensohn.
      </p>
    </footer>
  );
}
