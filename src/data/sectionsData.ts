// src/data/sectionsData.ts
export interface DocLink {
  label: string;
  link: string;
}

export interface SectionData {
  title: string;
  description?: string;
  examples?: string[];
  snippets?: string[];
  bullets?: string[];
  docs?: DocLink[];
}

export const sectionsData: SectionData[] = [
  {
    title: "React Mental Model (Foundation)",
    description:
      "React separates rendering from side effects. Understanding the render and commit phases is critical for debugging UI updates.",
    bullets: [
      "Render phase computes UI from props and state (pure, repeatable).",
      "Commit phase applies changes to the DOM.",
      "Effects run after commit, may run more than once in development (Strict Mode).",
      "Identity (keys, references) controls reconciliation.",
    ],
    snippets: [
      `// Correct way to update state
setTodos(prev => [...prev, newTodo]);`,
    ],
    docs: [
      { label: "React Render & Commit", link: "https://react.dev/learn/render-and-commit" },
    ],
  },
  {
    title: "Event Handling",
    description:
      "Event handlers can fail silently if closures are stale or DOM overlays block clicks.",
    bullets: [
      "Check stale closures when using state inside handlers.",
      "Ensure no CSS overlays or pointer-events: none blocking events.",
      "Remove debounce/throttle temporarily to debug.",
    ],
    snippets: [
      `// Example: Proper event handler
const handleClick = () => setCount(prev => prev + 1);`,
    ],
    docs: [
      { label: "MDN Events", link: "https://developer.mozilla.org/docs/Web/Events" },
    ],
  },
  {
    title: "State Management & Async Flow",
    description:
      "Async requests can cause race conditions where older responses overwrite newer state. Logging and cancellation is key.",
    bullets: [
      "Use timestamps or request IDs to ignore outdated responses.",
      "Always update a single source of truth (avoid derived state).",
    ],
    snippets: [
      `// Cancel outdated fetch
const controller = new AbortController();
fetch(url, { signal: controller.signal });
// Later
controller.abort();`,
    ],
    docs: [
      { label: "React Effects Guide", link: "https://react.dev/learn/you-might-not-need-an-effect" },
    ],
  },
  {
    title: "Rendering & Reconciliation",
    description: "UI may fail to update if keys are unstable or memoization is overused.",
    bullets: [
      "Check that list items have stable keys.",
      "Temporarily remove React.memo/useMemo to debug.",
      "Verify state changes are immutable.",
    ],
    snippets: [
      `// Stable key example
{items.map(item => <Item key={item.id} data={item} />)}`,
    ],
    docs: [
      { label: "React Lists & Keys", link: "https://react.dev/learn/rendering-lists" },
    ],
  },
  {
    title: "React Strict Mode",
    description: "Strict Mode intentionally double-invokes render and effects in development.",
    bullets: ["Confirm Strict Mode is enabled.", "Make effects idempotent.", "Add cleanup functions."],
    examples: ["API request fires twice in development."],
    docs: [
      { label: "React Strict Mode", link: "https://react.dev/reference/react/StrictMode" },
    ],
  },
  {
    title: "Networking & API Contracts",
    description: "Ensure API requests match backend expectations and handle errors gracefully.",
    bullets: [
      "Malformed URLs or missing headers can cause silent failures.",
      "Contract drift between frontend and backend can break UI.",
    ],
    examples: ["Frontend shows 500 but backend claims endpoint exists."],
    docs: [
      { label: "Fetch API", link: "https://developer.mozilla.org/docs/Web/API/Fetch_API" },
    ],
  },
  {
    title: "Performance & Main Thread",
    description: "React performance issues can manifest as janky scrolling or slow renders.",
    bullets: [
      "Large unvirtualized lists impact rendering.",
      "Expensive computations in render should be memoized.",
      "Use React Profiler to identify bottlenecks.",
    ],
    examples: ["Scrolling is janky and CPU spikes."],
    docs: [
      { label: "React Profiler", link: "https://react.dev/reference/react/Profiler" },
    ],
  },
  {
    title: "Error Handling & Resilience",
    description: "UI should fail gracefully and provide fallback UIs.",
    bullets: [
      "Use Error Boundaries to catch rendering failures.",
      "Log errors for observability.",
      "Provide fallback UI for users.",
    ],
    docs: [
      {
        label: "React Error Boundaries",
        link: "https://react.dev/reference/react/Component#catching-rendering-errors-with-an-error-boundary",
      },
    ],
  },
  {
    title: "Testing as Debugging",
    bullets: [
      "Write a failing test to reproduce a bug.",
      "Fix the underlying logic.",
      "Keep the test as regression coverage.",
    ],
    docs: [
      { label: "React Testing Library", link: "https://testing-library.com/docs/react-testing-library/intro" },
    ],
  },
];
