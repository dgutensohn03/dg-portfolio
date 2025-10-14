export default function Contact() {
  return (
    <section className="h-[100dvh] flex items-center">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-semibold text-[var(--fg)]">
          Contact
        </h2>
        <p className="mt-4 max-w-3xl text-[var(--muted)]">
          Want to build something together? Reach me at{" "}
          <a
            href="mailto:daniel.gutensohn@gmail.com"
            className="underline hover:opacity-80"
            style={{ color: "var(--accent)" }}
          >
            daniel.gutensohn@gmail.com
          </a>
          .
        </p>
      </div>
    </section>
  );
}
