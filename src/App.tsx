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
  const isContactMostlyVisible = useInView(contactRef, { amount: 0.6 });

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
      <FooterPortal visible={activeSection === "contact"} forceHide={!isContactMostlyVisible} />

      {/* ✅ Global Snap Container */}
      <main data-scroll-container className="snap-y snap-mandatory scroll-smooth overflow-y-auto h-screen">

        {/* ✅ HERO — Snap Start */}
        <section id="home" className="snap-start h-screen flex items-center justify-center">
          <div className="w-full px-12 sm:px-16 md:px-20 lg:px-28 xl:px-40 mx-auto max-w-6xl">
            <FadeSection>
              <Hero />
            </FadeSection>
          </div>
        </section>

        <section
  id="about"
  className="relative min-h-[calc(100vh-60px)] flex snap-start md:snap-center"
>
  <div className="w-full px-12 sm:px-16 md:px-20 lg:px-28 xl:px-40 mx-auto max-w-6xl flex flex-col md:items-center md:justify-center pt-[60px] md:pt-0">
    <FadeSection>
      <About />
    </FadeSection>
  </div>
</section>


        {/* ✅ PROJECTS — Snap Start under navbar */}
        <section
          id="projects"
          className="relative snap-start flex flex-col pb-24 md:pb-36"
          style={{ minHeight: "calc(100vh - 60px)", paddingTop: "60px" }}
        >
          <div className="w-full px-12 sm:px-16 md:px-20 lg:px-28 xl:px-40 mx-auto max-w-6xl">
            <FadeSection>
              <Projects />
            </FadeSection>
          </div>
          <div className="pointer-events-none absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-[var(--bg)] to-transparent opacity-[0.03]" />
        </section>

        {/* ✅ CONTACT — Also vertically stable and navbar-safe */}
        <section id="contact" className="snap-center flex" style={{ minHeight: "calc(100vh - 60px)" }}>
          <div
            ref={contactRef}
            className="w-full px-12 sm:px-16 md:px-20 lg:px-28 xl:px-40 mx-auto max-w-6xl flex items-center"
          >
            <FadeSection>
              <Contact />
            </FadeSection>
          </div>
          <div className="pointer-events-none absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-[var(--bg)] to-transparent opacity-[0.03]" />
        </section>

      </main>
    </div>
  );
}
