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

      <main
        className="snap-y snap-mandatory overflow-y-scroll h-[100dvh] scroll-pt-[60px]"
        data-scroll-container
      >
        <section id="home" className="snap-start min-h-[100dvh] px-6 md:px-8 lg:px-12">
          <Hero />
        </section>

        <section id="about" className="snap-start min-h-[100dvh] px-6 md:px-8 lg:px-12 pt-12 pb-16">
          <About />
        </section>

        <section className="snap-start min-h-[100dvh] px-6 md:px-8 lg:px-12 pt-12 pb-16">
          <Projects />
        </section>

        <section id="contact" className="snap-start min-h-[100dvh] px-6 md:px-8 lg:px-12 pt-12 pb-20">
          <Contact />
          <Footer />
        </section>
      </main>
    </div>
  );
}
