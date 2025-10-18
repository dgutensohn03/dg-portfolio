// src/components/Hero.tsx
import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import { Github, Linkedin, Mail, FileText } from "lucide-react";
import { useState } from "react";
import ResumeModal from "./ResumeModal";

export default function Hero() {
  const [isResumeOpen, setIsResumeOpen] = useState(false);

  const actions = [
    {
      icon: <Github size={22} strokeWidth={1.6} />,
      label: "GitHub",
      action: () => window.open("https://github.com/dgutensohn03", "_blank"),
    },
    {
      icon: <Linkedin size={22} strokeWidth={1.6} />,
      label: "LinkedIn",
      action: () => window.open("https://www.linkedin.com/in/daniel-gutensohn-a2860a71", "_blank"),
    },
    {
      icon: <Mail size={22} strokeWidth={1.6} />,
      label: "Contact",
      action: () => (window.location.href = "mailto:dgutensohn@icloud.com"),
    },
    {
      icon: <FileText size={22} strokeWidth={1.6} />,
      label: "View Resume",
      action: () => setIsResumeOpen(true),
    },
  ];

  return (
    <section
      id="home"
      data-section="home"
      className="min-h-[calc(100vh-60px)] flex flex-col justify-center items-center text-left  md:px-8 lg:px-12 pt-16"
    >
      <ResumeModal isOpen={isResumeOpen} onClose={() => setIsResumeOpen(false)} />

      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-4xl md:text-6xl font-bold text-[var(--fg)]"
      >
        Hello, I'm Daniel.
      </motion.h1>

      {/* ✅ Updated Type Animation Roles */}
      <TypeAnimation
        sequence={[
          "Full-Stack Engineer",  2000,
"UX-Obsessed Builder",  2000,
"Platform & Workflow Architect",  2000,
"Learning Tools Developer",  2000,
"Data-Driven Interface Architect", 2000,
        ]}
        wrapper="span"
        speed={50}
        repeat={Infinity}
        className="mt-4 text-xl md:text-2xl text-[var(--accent)] font-medium"
      />

      {/* ✅ Refined tagline — short, high impact */}
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4 }}
        className="mt-6 max-w-xl text-[var(--muted)] text-lg text-center leading-relaxed px-8 sm:px-12 md:px-0"
      >
        I don’t just build. I turn ideas into systems with intent, insight, and craft.
      </motion.p>

      {/* ✅ Icon row (unchanged except consistent spacing retention) */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6 }}
        className="flex gap-7 mt-8"
      >
        {actions.map(({ icon, label, action }, i) => (
          <button
            key={i}
            onClick={action}
            type="button"
            aria-label={label}
            className="relative group p-3 rounded-xl transition-colors text-[var(--fg)]/70 
                       hover:text-[var(--fg)] cursor-pointer focus:outline-none 
                       focus-visible:ring-2 focus-visible:ring-[var(--accent)]/50"
          >
            {icon}
            <span
              className="pointer-events-none absolute left-1/2 -translate-x-1/2 mt-3 px-3 py-[3px] text-[11px] rounded-md
                         backdrop-blur-md bg-[var(--glass)]/70 text-[var(--fg)]/85 opacity-0
                         group-hover:opacity-100 transition-opacity shadow-sm border border-[var(--hairline)]"
              role="tooltip"
            >
              {label}
            </span>
          </button>
        ))}
      </motion.div>
    </section>
  );
}
