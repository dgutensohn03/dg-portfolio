export default function Footer() {
  return (
    <footer className="py-8">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 text-center">
        <p className="text-sm text-[var(--muted)]">
          © {new Date().getFullYear()} Daniel Gutensohn. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
