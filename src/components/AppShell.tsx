"use client";

import { useInView } from "react-intersection-observer";
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

  const { active, scrollTo } = useActiveSection(
    sectionIds,
    80,
    "[data-scroll-container]"
  );

  const { ref: contactRef, inView: isContactMostlyVisible } = useInView({
    threshold: 0.6,
  });

  return (
    <div className="relative min-h-dvh transition-colors duration-500 bg-linear-to-b from-grad-from via-grad-via to-grad-to text-fg">
      <Navbar active={active} scrollToId={scrollTo} />
      <SectionDots active={active} scrollToId={scrollTo} />

      <FooterPortal
        visible={active === "contact"}
        forceHide={!isContactMostlyVisible}
      />

      <main
        data-scroll-container
        className="
          h-screen h-dvh
          overflow-y-auto overflow-x-hidden
          pb-[80px]
          md:snap-y md:snap-proximity
          scroll-smooth
        "
        style={{
          WebkitOverflowScrolling: "touch",
          scrollBehavior: "smooth",
        }}
      >
        <section
          id="home"
          className="h-screen h-dvh flex items-center justify-center md:snap-start"
        >
          <div className="w-full pl-6 pr-14 sm:px-16 md:px-20 lg:px-28 xl:px-40 mx-auto max-w-6xl">
            <FadeSection>
              <Hero />
            </FadeSection>
          </div>
        </section>

        <section
          id="about"
          className="relative flex min-h-[calc(100vh-60px)] min-h-[calc(100dvh-60px)] pt-15 pb-12 md:pb-0 md:snap-start"
        >
          <div className="w-full pl-6 pr-14 sm:px-16 md:px-20 lg:px-28 xl:px-40 mx-auto flex flex-col md:items-center md:justify-center">
            <FadeSection>
              <About />
            </FadeSection>
          </div>
        </section>

        <section
          id="projects"
          className="relative flex flex-col min-h-[calc(100vh-60px)] min-h-[calc(100dvh-60px)] pt-15 pb-20 md:pb-36 md:snap-start"
        >
          <div className="w-full pl-5 pr-14 sm:px-16 md:px-20 lg:px-28 xl:px-40 mx-auto">
            <FadeSection>
              <Projects />
            </FadeSection>
          </div>

          <div className="pointer-events-none absolute inset-x-0 bottom-0 h-16 bg-linear-to-t from-bg to-transparent opacity-3" />
        </section>

        <section
          id="contact"
          className="relative flex min-h-[calc(100vh-60px)] min-h-[calc(100dvh-60px)] pt-15 md:snap-end"
        >
          <div
            ref={contactRef}
            className="w-full pl-6 pr-14 sm:px-16 md:px-20 lg:px-28 xl:px-40 mx-auto flex items-center justify-center"
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