<div align="center">

# Daniel Gutensohn — Engineering Portfolio

**Senior Frontend · UX Engineering · Full-Stack Systems**

Building clear, scalable, accessible digital products from complex requirements.

[![Live Portfolio](https://img.shields.io/badge/Live_Portfolio-View_Site-111827?style=for-the-badge)](https://dgutensohn03.github.io/dg-portfolio/)
[![Next.js](https://img.shields.io/badge/Next.js-16-000000?style=flat-square&logo=nextdotjs&logoColor=white)](https://nextjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5-3178C6?style=flat-square&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![React](https://img.shields.io/badge/React-18-20232A?style=flat-square&logo=react&logoColor=61DAFB)](https://react.dev/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4-06B6D4?style=flat-square&logo=tailwindcss&logoColor=white)](https://tailwindcss.com/)

</div>

![Daniel Gutensohn — Senior Frontend, UX and Full-Stack Engineering](public/images/assets/Linkedin_Banner.png)

## Recruiter-first redesign: safe review workflow

This repository has two independent tracks:

| Track | Branch / URL | Purpose |
| --- | --- | --- |
| **Original portfolio (unchanged)** | [`main`](https://github.com/dgutensohn03/dg-portfolio/tree/main) · [live production](https://dgutensohn03.github.io/dg-portfolio/) | Current published portfolio; safety baseline |
| **Redesign in progress** | [`redesign/recruiter-first-portfolio`](https://github.com/dgutensohn03/dg-portfolio/tree/redesign/recruiter-first-portfolio) · [live preview](https://dgutensohn03.github.io/dg-portfolio/preview/) | Curated homepage and project archive; review before merging |

**Do not merge the redesign branch into `main` until reviewed.** Edits and commits on the redesign branch do not alter the original source files on `main`.

### What changes in the redesign

- Preserves the animated typewriter hero and **“Thoughtful engineering, real-world impact.”** tagline.
- Puts selected React/TypeScript work front and center: LRS Analytics, High Colorado and VCert.
- Moves the full inventory of existing projects to [All Projects](https://dgutensohn03.github.io/dg-portfolio/preview/projects/) rather than deleting anything.
- Retains existing [Learn articles](https://dgutensohn03.github.io/dg-portfolio/preview/learn/), [Experience](https://dgutensohn03.github.io/dg-portfolio/preview/experience/) and case studies.
- Uses direct links and less scrolling friction to make evidence visible quickly.
- Keeps production GitHub Pages at `/dg-portfolio/` while building the preview under `/dg-portfolio/preview/`.

### How the live preview works

Pushing to `redesign/recruiter-first-portfolio` triggers [`preview-redesign.yml`](.github/workflows/preview-redesign.yml), which runs `npm ci` and a static Next.js build with `NEXT_PUBLIC_BASE_PATH=/dg-portfolio/preview`. The workflow publishes **only** the `preview/` directory on the `gh-pages` branch, with `keep_files: true` to preserve existing production files.

The preview exists only after a successful workflow run. Check [GitHub Actions](https://github.com/dgutensohn03/dg-portfolio/actions) if it is missing or outdated. This preview is public, but it is not the production homepage.

### How to review and approve

1. Open the [preview](https://dgutensohn03.github.io/dg-portfolio/preview/) on desktop and mobile, alongside the [original](https://dgutensohn03.github.io/dg-portfolio/).
2. Check the typing effect, first-screen messaging, the three featured projects, the project archive, article links, responsive layout and contact buttons.
3. Log changes on the redesign branch. Continue iterating without touching `main`.
4. When approved and deployment checks pass, merge the redesign branch into `main` in a normal pull request. The existing production deployment workflow then publishes the approved design.

### Rollback

- **Before merge:** no rollback is needed; `main` and the original live homepage remain unchanged.
- **After merge:** revert the redesign merge commit or restore the prior `main` commit and push. The existing production workflow republished that version. Avoid force-pushing or deleting the original branch history.
- To remove the preview without modifying the production homepage, remove the preview deployment workflow and the `preview/` directory from `gh-pages` in a separately reviewed operation.

### Local development

```bash
git switch redesign/recruiter-first-portfolio
npm ci
npm run dev
```

To simulate the preview's static export locally:

```bash
NEXT_PUBLIC_BASE_PATH=/dg-portfolio/preview npm run build
```

---

## What this portfolio demonstrates

This repository is more than a gallery of finished screens. It is a working example of how I approach product engineering: translating ambiguous requirements into maintainable systems, designing reusable UI patterns, integrating data and authentication, considering accessibility and performance, and iterating on real-world browser and device behavior.

My background spans frontend architecture, full-stack application development, UX engineering, learning platforms, analytics, and interactive systems. The work represented here includes enterprise applications, multi-tenant analytics, certification platforms, mobile-first experiences, simulations, and AI-assisted engineering workflows.

> **The goal: make the engineering behind the work as visible as the finished interface.**

## Selected engineering work

| System | Problem / Outcome | Engineering focus |
| --- | --- | --- |
| **Enterprise Certification Platform** | Multi-track certification, enrollment, scheduled releases, notifications, real-time leaderboards, progression and centralized analytics. | React, TypeScript, Node.js, Firebase, PostgreSQL, Cloud Functions, OAuth 2.0, xAPI / SCORM |
| **Learning Analytics Platform** | Captures and normalizes learner activity across course technologies and turns it into actionable, securely segmented client insights. | React, TypeScript, Google Cloud Functions, Microsoft 365 OAuth, Plotly, multi-tenant architecture |
| **AI-Assisted Engineering Lifecycle** | Demonstrates an AI-supported workflow from investigation and planning through implementation, testing, review and iteration without outsourcing engineering judgment. | Agentic workflows, architecture, validation, testing, human review |

## Engineering principles

- **Build systems, not one-off screens.** Favor reusable components, clear boundaries, predictable data flow, and maintainable architecture.
- **UX is an engineering concern.** Responsive behavior, accessibility, loading states, interaction details, and browser behavior are part of implementation quality.
- **Use data intentionally.** Analytics should answer product questions and improve decisions rather than simply collect events.
- **Design for real conditions.** Performance, device constraints, authentication, permissions, localization, and failure states belong in the initial solution.
- **Use AI with engineering discipline.** AI accelerates investigation and implementation, while architecture, verification, testing, and final decisions remain deliberate engineering responsibilities.

## Portfolio architecture

The portfolio is a component-driven Next.js application with structured project data separated from presentation logic. It uses static export for GitHub Pages while preserving reusable React components, responsive layouts, animated interactions, and dedicated case-study routes.

```text
src/
├── app/                 # Next.js routes and application shell
├── components/          # Reusable UI and portfolio components
├── data/                # Structured project content
└── hooks/               # Shared interaction and navigation logic

public/
└── images/              # Portfolio and project assets
```

The production implementation accounts for the GitHub Pages base path, route-safe assets, dynamic mobile viewport behavior, touch-friendly navigation, and responsive content alignment.

## Technology

| Area | Technologies / Practices |
| --- | --- |
| **Frontend** | Next.js, React, TypeScript, JavaScript, Tailwind CSS, Framer Motion |
| **UX Engineering** | Responsive design, component architecture, accessibility, interaction design, mobile-first behavior |
| **Application Systems** | Node.js, REST APIs, PostgreSQL, Firebase, OAuth 2.0, Google Cloud Functions |
| **Learning Systems** | xAPI, SCORM, LRS integrations, learning analytics |
| **Data Visualization** | Plotly, analytics dashboards, data-rich interfaces |
| **Delivery** | Git, GitHub, GitHub Pages, static export, browser and device validation |

## Running locally

```bash
npm install
npm run dev
```

Open `http://localhost:3000`.

For a production build:

```bash
npm run build
```

## What I want reviewers to see

The interesting part of this repository is not the framework choice. It is the decision-making behind the implementation: how components are structured, how project data is modeled, how route and deployment constraints are handled, how mobile/browser issues are resolved, and how UX details are treated as engineering requirements rather than final-pass decoration.

I am particularly interested in senior frontend, UX engineering, and full-stack opportunities where engineering quality and user experience are treated as parts of the same problem.

## Connect

**[Portfolio](https://dgutensohn03.github.io/dg-portfolio/)** · **[GitHub](https://github.com/dgutensohn03)** · **[LinkedIn](https://www.linkedin.com/in/daniel-gutensohn-a2860a71)**

---

<div align="center">
  <sub>Designed, engineered, and maintained by <strong>Daniel Gutensohn</strong>.</sub>
</div>