// src/App.tsx
import Navbar from "./components/Navbar";
import SectionDots from "./components/SectionDots";
import Hero from "./components/Hero";
import About from "./components/About";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import FadeSection from "./components/FadeSection";

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
      >
        {/* ✅ HERO - clean snap, padding inside div */}
        <section id="home" className="snap-start min-h-[100vh] flex items-center">
          <div className="w-full px-6 md:px-8 lg:px-12 pt-16">
            <FadeSection><Hero /></FadeSection>
          </div>
        </section>

        {/* ✅ ABOUT - perfectly centered, no padding on wrapper */}
        <section id="about" className="snap-start min-h-[100vh] flex items-center">
          <div className="w-full px-6 md:px-8 lg:px-12 py-12">
            <FadeSection><About /></FadeSection>
          </div>
        </section>

        {/* ✅ PROJECTS - centered like About */}
        <section className="snap-start min-h-[100vh] flex items-center">
          <div className="w-full px-6 md:px-8 lg:px-12 py-12">
            <FadeSection><Projects /></FadeSection>
          </div>
        </section>

        {/* ✅ CONTACT + FOOTER - Footer LOCKS to bottom, content centered above */}
        <section
          id="contact"
          className="snap-end min-h-[100vh] flex flex-col"
        >
          {/* Contact content area */}
          <div className="flex-1 flex items-center">
            <div className="w-full px-6 md:px-8 lg:px-12 pt-12">
              <FadeSection><Contact /></FadeSection>
            </div>
          </div>

          {/* Footer anchored to bottom */}
          <FadeSection>
            <div className="px-6 md:px-8 lg:px-12 pb-2">
              <div className="h-px w-20 mx-auto mb-3 bg-[var(--hairline)]/30" />
              <Footer />
            </div>
          </FadeSection>
        </section>
      </main>
    </div>
  );
}
