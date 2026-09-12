# Daniel Gutensohn — Engineering Portfolio

Senior frontend and full-stack engineering portfolio focused on building clear, scalable, accessible digital products from complex requirements.

**[View the live portfolio →](https://dgutensohn03.github.io/dg-portfolio/)**

## What this portfolio demonstrates

This repository is more than a gallery of finished screens. It is a working example of how I approach product engineering: translating ambiguous requirements into maintainable systems, designing reusable UI patterns, integrating data and authentication, considering accessibility and performance, and iterating on real-world browser and device behavior.

My background spans frontend architecture, full-stack application development, UX engineering, learning platforms, analytics, and interactive systems. The work represented here includes enterprise applications, multi-tenant analytics, certification platforms, mobile-first experiences, simulations, and AI-assisted engineering workflows.

## Selected engineering work

### Enterprise certification platform

A full-stack certification experience supporting multiple learning tracks, user enrollment, scheduled content releases, notifications, real-time leaderboards, progression, and centralized analytics.

**Engineering focus:** React, TypeScript, Node.js, Firebase, PostgreSQL, Cloud Functions, OAuth 2.0, xAPI/SCORM, event-driven workflows.

### Learning analytics platform

A secure analytics system that captures learner activity across multiple course technologies, normalizes interaction data, and presents actionable insights through a multi-client dashboard.

**Engineering focus:** React, TypeScript, Google Cloud Functions, Microsoft 365 OAuth, Plotly, xAPI/SCORM, multi-tenant architecture and data visualization.

### AI-assisted engineering lifecycle

A portfolio case study documenting how AI can be incorporated throughout a modern engineering workflow without replacing engineering judgment — from investigation and planning through implementation, testing, review, and iteration.

**Engineering focus:** structured problem solving, agentic development workflows, architecture decisions, validation, testing and human review.

## Engineering principles

- **Build systems, not one-off screens.** Favor reusable components, clear boundaries, predictable data flow, and maintainable architecture.
- **UX is an engineering concern.** Responsive behavior, accessibility, loading states, interaction details, and browser behavior are part of implementation quality.
- **Use data intentionally.** Analytics should answer product questions and improve decisions rather than simply collect events.
- **Design for real conditions.** Performance, device constraints, authentication, permissions, localization, and failure states belong in the initial solution.
- **Use AI with engineering discipline.** AI accelerates investigation and implementation, while architecture, verification, testing, and final decisions remain deliberate engineering responsibilities.

## Portfolio architecture

The portfolio is built as a component-driven Next.js application with project data separated from presentation logic. It uses static export for GitHub Pages while preserving reusable React components, responsive layouts, animated interactions, and dedicated case-study routes.

```text
src/
├── app/                 # Next.js routes and application shell
├── components/          # Reusable UI and portfolio components
├── data/                # Structured project content
└── hooks/               # Shared interaction and navigation logic

public/
└── images/              # Portfolio and project assets
```

The production build accounts for the GitHub Pages base path, responsive mobile viewport behavior, route-safe assets, and touch-friendly navigation.

## Technology

**Frontend:** Next.js, React, TypeScript, JavaScript, Tailwind CSS, Framer Motion  
**UI / UX:** responsive design, component architecture, accessibility, interaction design, mobile-first behavior  
**Application experience:** Node.js, REST APIs, PostgreSQL, Firebase, OAuth 2.0, Google Cloud Functions  
**Learning systems:** xAPI, SCORM, LRS integrations, learning analytics  
**Visualization:** Plotly and data-rich interfaces  
**Delivery:** Git, GitHub, GitHub Pages, static export and iterative browser/device validation

## Running locally

```bash
npm install
npm run dev
```

Then open `http://localhost:3000`.

Create a production build with:

```bash
npm run build
```

## Why this repository exists

The goal of this portfolio is to make the engineering behind the work visible — not just the final UI. I want a reviewer to be able to see how I think about architecture, product constraints, usability, maintainability, data, and delivery.

I am particularly interested in senior frontend, UX engineering, and full-stack opportunities where engineering quality and user experience are treated as parts of the same problem.

## Connect

**Portfolio:** [dgutensohn03.github.io/dg-portfolio](https://dgutensohn03.github.io/dg-portfolio/)  
**GitHub:** [github.com/dgutensohn03](https://github.com/dgutensohn03)  
**LinkedIn:** [linkedin.com/in/daniel-gutensohn-a2860a71](https://www.linkedin.com/in/daniel-gutensohn-a2860a71)

---

Built and maintained by **Daniel Gutensohn**.