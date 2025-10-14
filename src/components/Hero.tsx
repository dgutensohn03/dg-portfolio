import { useEffect, useMemo, useRef, useState } from "react";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

const WORDS = ["Builder", "Engineer", "Technologist", "Creator"];

// Simple, dependency-free typing loop: type → pause → backspace → next
function useTyping(words: string[], typeMs = 75, pauseMs = 900, backspaceMs = 45) {
  const [text, setText] = useState("");
  const [index, setIndex] = useState(0);
  const [phase, setPhase] = useState<"typing" | "pause" | "backspace">("typing");
  const word = useMemo(() => words[index % words.length], [index, words]);
  const timeoutRef = useRef<number>();

  useEffect(() => {
    const clear = () => timeoutRef.current && window.clearTimeout(timeoutRef.current);

    if (phase === "typing") {
      if (text.length < word.length) {
        timeoutRef.current = window.setTimeout(
          () => setText(word.slice(0, text.length + 1)),
          typeMs
        );
      } else {
        setPhase("pause");
      }
    } else if (phase === "pause") {
      timeoutRef.current = window.setTimeout(() => setPhase("backspace"), pauseMs);
    } else {
      // backspace
      if (text.length > 0) {
        timeoutRef.current = window.setTimeout(
          () => setText(text.slice(0, -1)),
          backspaceMs
        );
      } else {
        setIndex((i) => (i + 1) % words.length);
        setPhase("typing");
      }
    }

    return clear;
  }, [text, word, phase, typeMs, pauseMs, backspaceMs]);

  return text;
}

export default function Hero() {
  const typed = useTyping(WORDS, 70, 1100, 40);

  return (
    <section className="w-full h-[100dvh] flex items-center">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 w-full">
        {/* top spacer so the fixed navbar doesn't overlap */}
        <div className="h-20" />
        <div className="text-center">
          {/* Greeting, smaller than the headline */}
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-base md:text-lg text-[var(--muted)]"
          >
            Hello, I’m <span className="font-medium text-[var(--fg)]">Daniel</span>.
          </motion.p>

          {/* Strong static headline (doesn't resize when typing changes) */}
          <motion.h1
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.05 }}
            className="mt-2 font-extrabold tracking-tight text-4xl md:text-6xl text-[var(--fg)]"
          >
            Full-Stack Engineer & eLearning Technologist
          </motion.h1>

          {/* Subheader with typing line */}
          <motion.p
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-4 text-lg md:text-xl text-[var(--muted)]"
          >
            I design and build interactive learning platforms and data-rich web apps.
            <br className="hidden sm:block" />
            <span className="inline-block mt-2">
              I’m a{" "}
              <span className="font-semibold"
                style={{ color: "var(--accent)" }}
              >
                {typed || "\u00A0"}
              </span>
              <span className="inline-block w-3 align-baseline border-l-2 border-[var(--accent)] ml-1 animate-pulse" />
            </span>
          </motion.p>

          {/* Social / CTA row */}
          <motion.div
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.35 }}
            className="mt-8 flex items-center justify-center gap-3 sm:gap-4"
          >
            <a
              href="https://github.com/dgutensohn03"
              target="_blank"
              rel="noopener noreferrer"
              className="btn"
            >
              <FaGithub aria-hidden className="text-xl" />
              <span>GitHub</span>
            </a>
            <a
              href="https://www.linkedin.com/in/daniel-gutensohn-a2860a71"
              target="_blank"
              rel="noopener noreferrer"
              className="btn"
            >
              <FaLinkedin aria-hidden className="text-xl" />
              <span>LinkedIn</span>
            </a>
            <a href="mailto:dgutensohn@icloud.com" className="btn-solid">
              <FaEnvelope aria-hidden className="text-xl" />
              <span>Contact Me</span>
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
