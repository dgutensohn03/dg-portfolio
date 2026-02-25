"use client";

import { useRef } from "react";
import { useInView } from "framer-motion";
import { Navbar } from "@/components/navigation";

import SectionDots from "@/components/navigation/SectionDots";
import Hero from "./Hero";
import About from "./About";
import Projects from "./Projects";
import Contact from "./Contact";
import FadeSection from "./FadeSection";
import FooterPortal from "./FooterPortal";
import useActiveSection, { SectionId } from "../hooks/useActiveSection";

export default function AppShell() {
  const sectionIds: SectionId[] = ["home", "about", "projects", "contact"];

  // Track active section
  const { active, scrollTo } = useActiveSection(sectionIds, 80, "[data-scroll-container]");

  // Check if contact section is mostly visible
  const contactRef = useRef<HTMLDivElement | null>(null);
  const isContactMostlyVisible = useInView(contactRef, { amount: 0.6 });

  return (
    <div
      className="min-h-screen transition-colors duration-500 relative bg-linear-to-b from-grad-from via-grad-via to-grad-to text-fg"
    >
      {/* Navbar & floating elements */}
<Navbar active={active} scrollToId={scrollTo} />
<SectionDots active={active} scrollToId={scrollTo} />
<FooterPortal visible={active === "contact"} forceHide={!isContactMostlyVisible} />

      {/* Main scrollable container */}
      <main
        data-scroll-container
        className="md:snap-y md:snap-mandatory scroll-smooth overflow-y-auto h-screen touch-pan-y"
      >
        {/* HERO Section */}
        <section id="home" className="md:snap-start h-screen flex items-center justify-center">
          <div className="w-full px-12 sm:px-16 md:px-20 lg:px-28 xl:px-40 mx-auto max-w-6xl">
            <FadeSection>
              <Hero />
            </FadeSection>
          </div>
        </section>

        {/* ABOUT Section */}
        <section
          id="about"
          className="relative min-h-[calc(100vh-60px)] flex md:snap-start pb-12 md:pb-0"
        >
          <div className="w-full px-12 sm:px-16 md:px-20 lg:px-28 xl:px-40 mx-auto max-w-6xl flex flex-col md:items-center md:justify-center pt-15 md:pt-0">
            <FadeSection>
              <About />
            </FadeSection>
          </div>
        </section>

        {/* PROJECTS Section */}
        <section
          id="projects"
          className="relative md:snap-start flex flex-col pb-20 md:pb-36 min-h-[calc(100vh-60px)] pt-15"
        >
          <div className="w-full px-12 sm:px-16 md:px-20 lg:px-28 xl:px-40 mx-auto max-w-6xl">
            <FadeSection>
              <Projects />
            </FadeSection>
          </div>
          <div className="pointer-events-none absolute inset-x-0 bottom-0 h-16 bg-linear-to-t from-bg to-transparent opacity-3" />
        </section>

        {/* CONTACT Section */}
        <section
          id="contact"
          className="md:snap-end flex min-h-[calc(100vh-60px)] pt-15"
        >
          <div
            ref={contactRef}
            className="w-full px-12 sm:px-16 md:px-20 lg:px-28 xl:px-40 mx-auto flex items-center justify-center"
          >
            <FadeSection>
              <Contact />
            </FadeSection>
          </div>
          <div className="pointer-events-none absolute inset-x-0 bottom-0 h-16 bg-linear-to-t from-bg to-transparent opacity-3" />
        </section>
      </main>
    </div>
  );
}