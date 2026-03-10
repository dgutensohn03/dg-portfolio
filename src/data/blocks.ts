import { BlockConfig } from "@/types/block"

export const blocks: BlockConfig[] = [
  {
    id: "hero-build",
    name: "Hero Build",
    version: 1,
    size: "full",
    displayMode: "carousel",
    height: "min-h-screen",
    background: {
      src: "/images/assets/Linkedin_Banner.png",
      size: "cover",
      position: "center",
    },
    overlay: { color: "black", opacity: 0.35 },
    containerClasses:
      "absolute inset-0 flex flex-col items-center justify-center text-center px-6",
    elements: [
      {
        id: "build-word",
        type: "traceText",
        content: "BUILD",
        classes:
          "pointer-events-none font-black tracking-[0.15em] text-white/20 text-[18vw]",
        style: {},
        animation: {
          initial: {},
          animate: {},
        },
        options: {
          strokeWidth: 1.5,
          strokeColor: "white",
          fillColor: "transparent",
          dropShadow: "0 0 8px rgba(255,255,255,0.15)",
          sequential: true,
          duration: 1.5,
          delayPerLetter: 0.2,
          outlineBox: true,
          outlineColor: "white",
          outlineWidth: 1,
        },
      },
      {
        id: "headline",
        type: "text",
        content: "We Don’t Just Build Products.",
        classes: "mb-4 text-3xl font-light uppercase tracking-[0.15em] md:text-5xl",
        style: {},
      },
      {
        id: "subheadline",
        type: "text",
        content: "We Build Impact.",
        classes: "text-5xl font-extrabold tracking-tight md:text-7xl",
      },
      {
        id: "description",
        type: "text",
        content:
          "Thoughtful design. Intentional engineering. Solutions that move businesses forward.",
        classes:
          "mx-auto mt-8 max-w-2xl text-sm font-light tracking-[0.2em] text-white/80 md:text-base",
      },
    ],
  },
  {
    id: "floating-accent",
    name: "Floating Accent",
    version: 1,
    size: "full",
    displayMode: "carousel",
    height: "min-h-screen",
    background: {
      src: "https://images.unsplash.com/photo-1612831455541-1d12e0a8e3aa?auto=format&fit=crop&w=1600&q=80",
      size: "cover",
    },
    overlay: { color: "black", opacity: 0.45 },
    containerClasses:
      "absolute inset-0 flex flex-col items-center justify-center text-center px-6",
    elements: [
      {
        id: "accent-circle",
        type: "container",
        classes:
          "absolute w-72 h-72 bg-[#fb923c]/20 rounded-full blur-3xl",
        style: { top: "25%", left: "10%" },
      },
      {
        id: "floating-title",
        type: "text",
        content: "Precision. Motion. Control.",
        classes: "text-4xl md:text-6xl font-extrabold text-center",
      },
    ],
  },
  {
    id: "split-feature",
    name: "Split Feature",
    version: 1,
    size: "half",
    displayMode: "stack",
    height: "min-h-[80vh]",
    background: { src: "" },
    containerClasses:
      "grid md:grid-cols-2 items-center gap-12 px-12 py-20 bg-black text-white",
    elements: [
      {
        id: "left-content",
        type: "container",
        label: "Left Column",
        classes: "space-y-6",
        children: [
          {
            id: "title",
            type: "text",
            content: "Design Meets Engineering.",
            classes: "text-4xl md:text-5xl font-bold",
          },
          {
            id: "desc",
            type: "text",
            content:
              "A system-driven approach to building scalable web experiences.",
            classes: "text-white/70",
          },
          {
            id: "cta",
            type: "button",
            content: "Explore System",
            href: "#",
            classes:
              "inline-block px-6 py-3 rounded-full bg-[#fb923c] text-black font-semibold",
          },
        ],
      },
      {
        id: "right-image",
        type: "image",
        label: "Feature Image",
        src: "/images/assets/Linkedin_Banner.png",
        classes: "rounded-2xl shadow-2xl",
      },
    ],
  },
  {
    id: "minimal-cta",
    name: "Minimal CTA",
    version: 1,
    size: "half",
    displayMode: "stack",
    height: "min-h-[50vh]",
    background: { src: "" },
    containerClasses:
      "flex flex-col items-center justify-center text-center px-6 py-24 bg-neutral-900 text-white",
    elements: [
      {
        id: "cta-title",
        type: "text",
        content: "Let’s Build Something Meaningful.",
        classes: "text-3xl md:text-5xl font-semibold",
      },
      {
        id: "cta-button",
        type: "button",
        content: "Start a Project",
        href: "#",
        classes:
          "mt-8 px-8 py-3 border border-white rounded-full hover:bg-white hover:text-black transition",
      },
    ],
  },
  {
    id: "grid-thumbnail-1",
    name: "Grid Thumbnail 1",
    version: 1,
    size: "thumbnail",
    displayMode: "stack",
    height: "h-64",
    background: {
      src: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=600&q=80",
      size: "cover",
    },
    overlay: { color: "black", opacity: 0.25 },
    containerClasses:
      "absolute bottom-0 left-0 w-full p-4 flex flex-col justify-end text-left",
    elements: [
      {
        id: "thumbnail-title",
        type: "text",
        content: "Thumbnail Block",
        classes: "text-lg font-bold text-white",
      },
      {
        id: "thumbnail-sub",
        type: "text",
        content: "Quick description here.",
        classes: "text-sm text-white/80",
      },
    ],
  },
  {
    id: "trace-word-example",
    name: "Trace Word Example",
    version: 1,
    size: "full",
    displayMode: "carousel",
    height: "min-h-screen",
    background: {
      src: "/images/assets/Linkedin_Banner.png",
      size: "cover",
    },
    overlay: { color: "black", opacity: 0.35 },
    containerClasses:
      "absolute inset-0 flex flex-col items-center justify-center text-center px-6",
    elements: [
      {
        id: "trace-word",
        type: "traceText",
        content: "INSPIRE",
        classes: "text-[16vw] font-extrabold text-white/20",
        options: {
          strokeWidth: 2,
          strokeColor: "#fb923c",
          fillColor: "transparent",
          sequential: true,
          duration: 1,
          delayPerLetter: 0.15,
          dropShadow: "0 0 6px rgba(255,185,50,0.3)",
          outlineBox: false,
        },
      },
      {
        id: "headline",
        type: "text",
        content: "Reach New Heights.",
        classes: "mt-8 text-4xl font-bold text-white",
      },
      {
        id: "subheadline",
        type: "text",
        content: "Where creativity and impact collide.",
        classes: "text-2xl text-white/80 mt-2",
      },
    ],
  },
]