export default function About() {
  return (
    <section className="h-[100dvh] flex items-center">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-semibold text-[var(--fg)]">
          About
        </h2>
        <p className="mt-4 max-w-3xl text-[var(--muted)]">
          I specialize in React, TypeScript, Node, xAPI, and SCORM — building
          experiences that blend learning science with modern product craft.
        </p>
      </div>
    </section>
  );
}
