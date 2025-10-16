// src/App.tsx
import Navbar from "./components/Navbar";
import SectionDots from "./components/SectionDots";
import Hero from "./components/Hero";
import About from "./components/About";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div
      className="min-h-screen transition-colors duration-500"
      style={{
        background:
          "linear-gradient(to bottom, var(--grad-from), var(--grad-via), var(--grad-to))",
        color: "var(--fg)",
      }}
    >
      <Navbar />
      <SectionDots />

      {/* Make this the scroll container and add scroll padding for the header */}
      <main
        className="snap-y snap-mandatory overflow-y-scroll h-[100dvh] scroll-pt-[60px]"
        data-scroll-container
      >
        <section id="home" className="snap-start min-h-[100dvh]">
          <Hero />
        </section>

        <section id="about" className="snap-start min-h-[100dvh]">
          <About />
        </section>

        {/* Keep projects id ONLY inside <Projects /> (no nested duplicate id here) */}
        <section className="snap-start">
          <Projects />
        </section>

        <section id="contact" className="snap-start min-h-[100dvh]">
          <Contact />
          <Footer />
        </section>
      </main>
    </div>
  );
}
