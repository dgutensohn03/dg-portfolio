import ThemeToggle from "./ThemeToggle";

const navItems = [
  { href: "#home", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#projects", label: "Projects" },
  { href: "#contact", label: "Contact" },
];

export default function Navbar() {
  return (
    <header className="fixed top-0 left-0 w-full z-50">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-3">
        <div className="glass row items-center justify-between rounded-xl px-4 py-2">
          <a
            href="#home"
            className="font-semibold tracking-tight text-[var(--fg)]"
          >
            Daniel&nbsp;Gutensohn
          </a>
          <nav className="hidden sm:flex items-center gap-6">
            {navItems.map((n) => (
              <a
                key={n.href}
                href={n.href}
                className="text-sm text-[var(--muted)] hover:text-[var(--accent)] transition-colors"
              >
                {n.label}
              </a>
            ))}
          </nav>
          <div className="flex items-center gap-3">
            <ThemeToggle />
          </div>
        </div>
      </div>
    </header>
  );
}
