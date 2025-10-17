// src/App.tsx
import Navbar from "./components/Navbar";
import SectionDots from "./components/SectionDots";
import Hero from "./components/Hero";
import About from "./components/About";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import FadeSection from "./components/FadeSection";
import FooterPortal from "./components/FooterPortal";
import useSectionObserver from "./hooks/useSectionObserver";
import { useInView } from "framer-motion";
import { useRef } from "react";

export default function App() {
  const activeSection = useSectionObserver(["home", "about", "projects", "contact"]);
  const contactRef = useRef<HTMLDivElement | null>(null);
  const isContactMostlyVisible = useInView(contactRef, { amount: 0.6 }); // ✅ Triggers early fade out

  return (
    <div
      className="min-h-screen transition-colors duration-500 relative"
      style={{
        background:
          "linear-gradient(to bottom, var(--grad-from), var(--grad-via), var(--grad-to))",
        color: "var(--fg)",
      }}
    >
      <Navbar />
      <SectionDots />

      {/* ✅ Fixed footer overlay now fades OUT early when scrolling up */}
      <FooterPortal visible={activeSection === "contact"} forceHide={!isContactMostlyVisible} />

      <main
        data-scroll-container
        className="snap-y snap-mandatory overflow-y-scroll h-[100dvh] scroll-smooth"
        style={{ scrollSnapStop: "always" }}
      >
        {/* HERO */}
        <section
          id="home"
          className="snap-start min-h-[100vh] flex items-center justify-center"
          style={{ paddingTop: "60px" }}
        >
          <div className="w-full px-6 md:px-8 lg:px-12">
            <FadeSection>
              <Hero />
            </FadeSection>
          </div>
        </section>

        {/* ABOUT */}
        <section
          id="about"
          className="snap-start min-h-[100vh] flex items-center justify-center"
        >
          <div className="w-full px-6 md:px-8 lg:px-12">
            <FadeSection>
              <About />
            </FadeSection>
          </div>
        </section>

        {/* PROJECTS */}
        <section
          id="projects"
          className="snap-start flex justify-center"
          style={{ paddingTop: "60px" }}
        >
          <div className="w-full">
            <FadeSection>
              <Projects />
            </FadeSection>
          </div>
        </section>

        {/* CONTACT — observe this to fade footer early */}
        <section
          id="contact"
          className="snap-end min-h-[100vh] flex items-center justify-center"
        >
          <div ref={contactRef} className="w-full px-6 md:px-8 lg:px-12">
            <FadeSection>
              <Contact />
            </FadeSection>
          </div>
        </section>
      </main>
    </div>
  );
}
