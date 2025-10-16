// src/components/Footer.tsx
import { FaGithub, FaLinkedin, FaEnvelope, FaFileAlt } from "react-icons/fa";
import { useState } from "react";
import ResumeModal from "./ResumeModal";

export default function Footer() {
  const [isResumeOpen, setIsResumeOpen] = useState(false);

  return (
    <footer className="w-full pb-6 pt-2 flex flex-col items-center text-center relative">
      <ResumeModal isOpen={isResumeOpen} onClose={() => setIsResumeOpen(false)} />

      {/* ✅ Divider removed — now controlled only from App.tsx */}

      {/* Icon Row */}
      <div className="flex gap-5 mb-1">
        {[
          { icon: <FaGithub size={20} />, label: "GitHub", action: () => window.open("https://github.com/dgutensohn", "_blank") },
          { icon: <FaLinkedin size={20} />, label: "LinkedIn", action: () => window.open("https://linkedin.com/in/dgutensohn", "_blank") },
          { icon: <FaEnvelope size={20} />, label: "Email", action: () => (window.location.href = "mailto:dgutensohn@icloud.com") },
          { icon: <FaFileAlt size={20} />, label: "Resume", action: () => setIsResumeOpen(true) },
        ].map(({ icon, label, action }, i) => (
          <button
            key={i}
            onClick={action}
            className="relative group text-[var(--fg)]/70 hover:text-[var(--accent)] transition-all hover:scale-110 hover:drop-shadow-[0_0_6px_var(--accent)]"
          >
            {/* Tooltip ABOVE (glass) */}
            <span className="absolute left-1/2 -translate-x-1/2 -mt-6 mb-1 px-2 py-[2px] text-[10px] rounded-md backdrop-blur-md bg-[var(--glass)]/60 text-[var(--fg)]/80 opacity-0 -translate-y-1 group-hover:translate-y-0 group-hover:opacity-100 transition-all">
              {label}
            </span>
            {icon}
          </button>
        ))}
      </div>

      {/* Subtle Disclaimer */}
      <p className="text-[10px] text-[var(--muted)] opacity-50 mt-1">
        Some links open external demos or hosted views.
      </p>
    </footer>
  );
}
