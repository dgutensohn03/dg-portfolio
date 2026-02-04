import { Github, Linkedin, Mail, FileText } from "lucide-react";
import { useState, useRef } from "react";
import { motion, useInView } from "framer-motion";
import ResumeModal from "./ResumeModal";

export default function Footer() {
  const [isResumeOpen, setIsResumeOpen] = useState(false);
  const footerRef = useRef<HTMLDivElement | null>(null);
  const isInView = useInView(footerRef, { amount: 0.3, once: false });

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

      <footer
        ref={footerRef}
        className="
          w-full py-8 flex flex-col items-center justify-center text-center
          relative -z-10 pointer-events-none overflow-hidden
        "
      >
        <motion.div
          className="pointer-events-auto flex flex-col items-center justify-center"
          initial={{ opacity: 0, y: 32 }}
          animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : 32 }}
          transition={{ duration: 0.5, ease: [0.25, 0.1, 0.25, 1] }}
        >
          {/* Centered icons */}
          <div className="flex items-center justify-center gap-6 mb-3">
            {actions.map(({ icon, label, action }, i) => (
              <button
                key={i}
                onClick={action}
                aria-label={label}
                title={label}
                className="
                  relative group text-[var(--fg)]/70 hover:text-[var(--accent)]
                  transition-all duration-200 cursor-pointer p-2 rounded-lg
                  hover:-translate-y-[2px]
                  hover:drop-shadow-[0_0_6px_rgba(var(--accent-rgb),0.45)]
                  flex items-center justify-center
                "
              >
                {/* Tooltip */}
                <span
                  className="
                    pointer-events-none absolute left-1/2 -translate-x-1/2 -mt-[60px]
                    px-3 py-[3px] text-[11px] rounded-md backdrop-blur-md
                    bg-[var(--glass)]/70 text-[var(--fg)]/85 border border-[var(--hairline)]
                    shadow-sm opacity-0 group-hover:opacity-100
                    transition-opacity duration-200
                  "
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
        </motion.div>
      </footer>
    </>
  );
}
