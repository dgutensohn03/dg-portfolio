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