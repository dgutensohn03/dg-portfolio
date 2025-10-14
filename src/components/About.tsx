export default function About() {
  return (
    <section className="h-[100dvh] flex items-center">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-semibold text-[var(--fg)]">
          About Me
        </h2>
        <p className="mt-4 max-w-3xl text-[var(--muted)] leading-relaxed text-lg">
          I’m a <span className="font-medium text-brand-400">Full-Stack Engineer and Learning Experience Technologist</span> 
          with a passion for building interactive platforms that make complex ideas feel simple and engaging.
          With experience across <strong>React, TypeScript, Node, xAPI, and SCORM</strong>, I design systems that 
          don't just deliver content—they create measurable impact.
        </p>

        <p className="mt-4 max-w-3xl text-[var(--muted)] leading-relaxed text-lg">
          I bridge the gap between <strong>learning science and product engineering</strong>, crafting digital experiences 
          that are fast, accessible, and delightfully intentional. Whether shipping production-grade applications or 
          architecting scalable learning ecosystems, I care deeply about performance, usability, and purposeful design.
        </p>

        <p className="mt-4 max-w-3xl text-[var(--muted)] leading-relaxed text-lg">
          Right now, I’m focused on building tools and interfaces that empower creators and learners — pushing the 
          boundaries of what educational technology can do.
        </p>
      </div>
    </section>
  );
}
