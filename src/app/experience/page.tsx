import type { Metadata } from "next";
import Link from "next/link";
import {
  Accessibility,
  ArrowLeft,
  ArrowRight,
  Blocks,
  Braces,
  BriefcaseBusiness,
  ChartNoAxesCombined,
  CheckCircle2,
  Code2,
  GraduationCap,
  Layers3,
  Mail,
  Network,
  Sparkles,
  Users,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Experience | Daniel Gutensohn",
  description:
    "Daniel Gutensohn's engineering experience, impact, capabilities, and career history across frontend, full-stack, UX, and learning technology.",
};

const impact = [
  {
    icon: Layers3,
    title: "From ambiguity to architecture",
    copy: "I translate business goals and user needs into practical system designs, delivery plans, and maintainable component patterns.",
  },
  {
    icon: ChartNoAxesCombined,
    title: "Data people can act on",
    copy: "I turn complex activity and performance data into clear dashboards, workflows, and decisions—not just visualizations.",
  },
  {
    icon: Accessibility,
    title: "Quality built into the system",
    copy: "Accessibility, responsive behavior, performance, and resilient states are engineering requirements from the start.",
  },
  {
    icon: Users,
    title: "Leadership through clarity",
    copy: "I strengthen teams through estimation, code review, mentoring, technical direction, and close collaboration with clients and product partners.",
  },
];

const roles = [
  {
    company: "LHT Learning",
    title: "Lead Full-Stack Engineer",
    dates: "2019 — 2025",
    location: "Remote · Westerville, Ohio",
    summary:
      "Led the architecture and delivery of web applications and digital learning platforms from early discovery through production support.",
    highlights: [
      "Designed reusable frontend architecture and scalable UI patterns for data-rich, personalized experiences.",
      "Built an LRS analytics platform that transformed xAPI activity into progress, completion, assessment, and engagement insights.",
      "Delivered a React and TypeScript training portal with authentication, user data, progress, challenges, rewards, and notifications.",
      "Defined solutions, estimated work, reviewed code, mentored teammates, and partnered with clients, UX, product, QA, and engineering.",
    ],
    stack: ["React", "Next.js", "TypeScript", "Node.js", "PostgreSQL", "Firebase", "OAuth 2.0", "xAPI"],
  },
  {
    company: "Xcelerate Media",
    title: "Frontend Developer / UI Designer",
    dates: "2014 — 2019",
    location: "Hybrid · Dublin, Ohio",
    summary:
      "Built responsive digital experiences at the intersection of interface design, frontend engineering, and learning technology.",
    highlights: [
      "Developed responsive, mobile-first web applications and reusable interface components.",
      "Integrated REST services and CRUD workflows into clear, task-focused user experiences.",
      "Improved accessibility, cross-browser reliability, and performance across client-facing products.",
      "Worked across the lifecycle from requirements and interface design through implementation and release.",
    ],
    stack: ["JavaScript", "Vue.js", "HTML5", "CSS / Sass", "REST APIs", "SCORM", "Storyline 360"],
  },
];

const capabilities = [
  {
    icon: Code2,
    label: "Frontend & UX engineering",
    items: ["React", "Next.js", "TypeScript", "JavaScript", "Vue.js", "Responsive UI", "Design systems", "WCAG 2.1 AA"],
  },
  {
    icon: Network,
    label: "Platforms & data",
    items: ["Node.js", "Express", "REST APIs", "PostgreSQL / SQL", "Firebase / NoSQL", "OAuth 2.0", "Google Cloud Functions"],
  },
  {
    icon: Blocks,
    label: "Learning technology",
    items: ["xAPI", "SCORM 1.2 / 2004", "AICC", "LMS / LRS integration", "Learning analytics", "Adaptive experiences"],
  },
  {
    icon: Braces,
    label: "Quality & delivery",
    items: ["Jest", "Vitest", "Playwright", "GitHub Actions", "Docker", "CI/CD", "Performance", "Cross-browser testing"],
  },
];

function Eyebrow({ children }: { children: React.ReactNode }) {
  return (
    <p className="flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.18em] text-[var(--accent)]">
      <span className="h-px w-8 bg-[var(--accent)]" />
      {children}
    </p>
  );
}

export default function ExperiencePage() {
  return (
    <div className="case-study min-h-screen text-[var(--fg)]">
      <header className="sticky top-0 z-50 px-4 py-4 sm:px-6">
        <nav className="glass mx-auto flex max-w-6xl items-center justify-between rounded-2xl px-4 py-3" aria-label="Experience navigation">
          <Link href="/" className="inline-flex items-center gap-2 text-sm text-[var(--muted)] transition-colors hover:text-[var(--accent)]">
            <ArrowLeft size={17} /> Back to portfolio
          </Link>
          <span className="hidden text-xs text-[var(--muted)] sm:block">DG · Experience</span>
        </nav>
      </header>

      <main>
        <section className="px-6 pb-20 pt-16 sm:pt-24 lg:pb-28">
          <div className="mx-auto max-w-6xl">
            <div className="inline-flex items-center gap-2 rounded-full border border-[var(--hairline)] bg-[var(--case-card)] px-3 py-1.5 text-[11px] font-semibold uppercase tracking-[0.14em] text-[var(--accent)]">
              <BriefcaseBusiness size={15} /> Career · Capabilities · Impact
            </div>
            <h1 className="mt-8 max-w-5xl text-4xl font-semibold leading-[1.04] tracking-[-0.04em] sm:text-6xl lg:text-7xl">
              Engineering useful systems
              <span className="block text-[var(--accent)]">from idea through impact.</span>
            </h1>
            <p className="mt-7 max-w-3xl text-lg leading-relaxed text-[var(--muted)] sm:text-xl">
              I’m a senior frontend and full-stack engineer with 10+ years of experience turning complex, people-centered problems into accessible products, scalable platforms, and clearer ways of working.
            </p>
            <div className="mt-10 flex flex-wrap gap-3">
              <Link href="/#projects" className="btn-solid">Explore selected work <ArrowRight size={16} /></Link>
              <a href="mailto:dgutensohn@icloud.com" className="btn"><Mail size={17} /> Start a conversation</a>
            </div>
          </div>
        </section>

        <section className="case-band border-y border-[var(--hairline)] px-6 py-16 lg:py-20">
          <div className="mx-auto max-w-6xl">
            <Eyebrow>How I create value</Eyebrow>
            <div className="mt-9 grid gap-px overflow-hidden rounded-2xl border border-[var(--hairline)] bg-[var(--hairline)] md:grid-cols-2 lg:grid-cols-4">
              {impact.map(({ icon: Icon, title, copy }) => (
                <article key={title} className="bg-[var(--case-card)] p-6">
                  <span className="grid h-11 w-11 place-items-center rounded-xl bg-[var(--accent)]/10 text-[var(--accent)]"><Icon size={21} /></span>
                  <h2 className="mt-6 text-lg font-semibold">{title}</h2>
                  <p className="mt-3 text-sm leading-relaxed text-[var(--muted)]">{copy}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="px-6 py-20 lg:py-28">
          <div className="mx-auto max-w-6xl">
            <Eyebrow>Career experience</Eyebrow>
            <div className="mt-10 space-y-8">
              {roles.map((role, index) => (
                <article key={role.company} className="grid gap-8 rounded-2xl border border-[var(--hairline)] bg-[var(--case-card)] p-6 sm:p-8 lg:grid-cols-[.7fr_1.3fr] lg:p-10">
                  <div>
                    <p className="font-mono text-xs text-[var(--accent)]">0{index + 1}</p>
                    <h2 className="mt-5 text-2xl font-semibold sm:text-3xl">{role.title}</h2>
                    <p className="mt-2 font-medium">{role.company}</p>
                    <p className="mt-4 text-sm text-[var(--muted)]">{role.dates}</p>
                    <p className="mt-1 text-sm text-[var(--muted)]">{role.location}</p>
                  </div>
                  <div>
                    <p className="text-lg leading-relaxed text-[var(--muted)]">{role.summary}</p>
                    <ul className="mt-7 space-y-4">
                      {role.highlights.map((highlight) => (
                        <li key={highlight} className="flex gap-3 text-sm leading-relaxed text-[var(--muted)]">
                          <CheckCircle2 size={18} className="mt-0.5 shrink-0 text-[var(--accent)]" />
                          <span>{highlight}</span>
                        </li>
                      ))}
                    </ul>
                    <div className="mt-7 flex flex-wrap gap-2">
                      {role.stack.map((item) => <span key={item} className="rounded-full border border-[var(--hairline)] px-3 py-1 text-xs text-[var(--muted)]">{item}</span>)}
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="case-band border-y border-[var(--hairline)] px-6 py-20 lg:py-28">
          <div className="mx-auto max-w-6xl">
            <Eyebrow>Capabilities</Eyebrow>
            <div className="mt-10 grid gap-5 md:grid-cols-2">
              {capabilities.map(({ icon: Icon, label, items }) => (
                <article key={label} className="rounded-2xl border border-[var(--hairline)] bg-[var(--case-card)] p-6 sm:p-7">
                  <div className="flex items-center gap-3"><Icon size={21} className="text-[var(--accent)]" /><h2 className="text-lg font-semibold">{label}</h2></div>
                  <div className="mt-5 flex flex-wrap gap-2">
                    {items.map((item) => <span key={item} className="rounded-lg bg-[var(--accent)]/8 px-3 py-2 text-sm text-[var(--muted)]">{item}</span>)}
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="px-6 py-20 lg:py-28">
          <div className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-[1.2fr_.8fr] lg:items-center">
            <div>
              <Eyebrow>What guides the work</Eyebrow>
              <h2 className="mt-6 max-w-3xl text-3xl font-semibold leading-tight sm:text-5xl">Technology is most valuable when it helps people move forward.</h2>
              <p className="mt-6 max-w-3xl text-lg leading-relaxed text-[var(--muted)]">I care about the details because they shape trust: a workflow that makes sense, an interface everyone can use, architecture a team can extend, and a solution that continues creating value after launch.</p>
            </div>
            <aside className="rounded-2xl border border-[var(--hairline)] bg-[var(--case-card)] p-7">
              <Sparkles size={23} className="text-[var(--accent)]" />
              <p className="mt-5 text-sm font-semibold uppercase tracking-[0.14em] text-[var(--muted)]">Education</p>
              <div className="mt-4 flex gap-3"><GraduationCap size={21} className="mt-0.5 shrink-0 text-[var(--accent)]" /><div><p className="font-semibold">Bachelor of Science</p><p className="mt-1 text-sm text-[var(--muted)]">Computer Science</p></div></div>
              <p className="mt-7 border-t border-[var(--hairline)] pt-6 text-sm leading-relaxed text-[var(--muted)]">Based in Littleton, Colorado · Available for remote engineering opportunities.</p>
            </aside>
          </div>
        </section>

        <section className="case-band border-t border-[var(--hairline)] px-6 py-20 text-center">
          <div className="mx-auto max-w-3xl">
            <h2 className="text-3xl font-semibold sm:text-5xl">Have a complex problem worth solving?</h2>
            <p className="mx-auto mt-5 max-w-2xl text-lg leading-relaxed text-[var(--muted)]">I’m interested in thoughtful teams building products and platforms with meaningful, lasting impact.</p>
            <div className="mt-9 flex flex-wrap justify-center gap-3"><a href="mailto:dgutensohn@icloud.com" className="btn-solid"><Mail size={17} /> Let’s talk</a><Link href="/" className="btn"><ArrowLeft size={17} /> Return to portfolio</Link></div>
          </div>
        </section>
      </main>
    </div>
  );
}
