import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import { FaGithub, FaLinkedin, FaEnvelope, FaFileAlt } from "react-icons/fa";
import { useState } from "react";
import ResumeModal from "./ResumeModal";

export default function Hero() {
  const [isResumeOpen, setIsResumeOpen] = useState(false);

  return (
    <section
      id="home"
      data-section="home"
      className="min-h-screen flex flex-col justify-center items-center text-center px-4"
    >
      <ResumeModal isOpen={isResumeOpen} onClose={() => setIsResumeOpen(false)} />

      <motion.h1
  initial={{ opacity: 0, y: 20 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true, amount: 0.2 }}
  transition={{ duration: 0.5 }}
        className="text-4xl md:text-6xl font-bold text-[var(--fg)]"
      >
        Hello, I'm Daniel.
      </motion.h1>

      <TypeAnimation
        sequence={[
          "Full-Stack Engineer", 2000,
          "Learning Technologist", 2000,
          "UX Developer", 2000,
        ]}
        wrapper="span"
        speed={50}
        repeat={Infinity}
        className="mt-4 text-xl md:text-2xl text-[var(--accent)] font-medium"
      />

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4 }}
        className="mt-6 max-w-xl text-[var(--muted)] text-lg leading-relaxed"
      >
        I design and build interactive learning platforms and data-rich web applications.
      </motion.p>

      {/* ✅ Icon Row + Glass Tooltip BELOW */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6 }}
        className="flex gap-6 mt-8"
      >
        {[
          { icon: <FaGithub size={22} />, label: "GitHub", action: () => window.open("https://github.com/dgutensohn03/", "_blank") },
          { icon: <FaLinkedin size={22} />, label: "LinkedIn", action: () => window.open("https://https://www.linkedin.com/in/daniel-gutensohn-a2860a71", "_blank") },
          { icon: <FaEnvelope size={22} />, label: "Email", action: () => (window.location.href = "mailto:dgutensohn@icloud.com") },
          { icon: <FaFileAlt size={22} />, label: "Resume", action: () => setIsResumeOpen(true) },
        ].map(({ icon, label, action }, i) => (
          <button
            key={i}
            onClick={action}
            className="relative group text-[var(--fg)]/70 hover:text-[var(--accent)] transition-all hover:scale-110 hover:drop-shadow-[0_0_6px_var(--accent)]"
          >
            {icon}
            {/* Tooltip BELOW */}
            <span className="absolute left-1/2 -translate-x-1/2 mt-2 px-2 py-[2px] text-[10px] rounded-md backdrop-blur-md bg-[var(--glass)]/60 text-[var(--fg)]/80 opacity-0 translate-y-1 group-hover:translate-y-0 group-hover:opacity-100 transition-all">
              {label}
            </span>
          </button>
        ))}
      </motion.div>
    </section>
  );
}
