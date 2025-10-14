import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div
      className="min-h-screen transition-colors duration-500"
      // Gradient via CSS variables (works for both themes)
      style={{
        background:
          "linear-gradient(to bottom, var(--grad-from), var(--grad-via), var(--grad-to))",
      }}
    >
      <Navbar />
      <main className="snap-y snap-mandatory h-screen overflow-y-scroll">
        <section id="home" className="snap-start min-h-screen">
          <Hero />
        </section>
        <section id="about" className="snap-start min-h-screen">
          <About />
        </section>
        <section id="projects" className="snap-start min-h-screen">
          <Projects />
        </section>
        <section id="contact" className="snap-start min-h-screen">
          <Contact />
        </section>
      </main>
      <Footer />
    </div>
  );
}
