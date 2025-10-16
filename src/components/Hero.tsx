// src/components/Hero.tsx
import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";

export default function Hero() {
  return (
    <section
      id="home"
      data-section="home"
      className="min-h-screen flex flex-col justify-center items-center text-center px-4"
    >
      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
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
    </section>
  );
}
