// src/components/Footer.tsx
export default function Footer() {
  return (
    <footer className="w-full py-4 text-center text-xs border-t border-[var(--hairline)] bg-[var(--bg)]">
      <p className="text-[var(--muted)]">© {new Date().getFullYear()} Daniel Gutensohn</p>
      <p className="text-[var(--muted)] mt-1 opacity-70">
        *Disclaimer: These projects were created for clients as part of professional work and are shown here
        strictly to demonstrate experience.
      </p>
    </footer>
  );
}
