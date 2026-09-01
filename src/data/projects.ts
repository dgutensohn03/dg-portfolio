export interface Project {
  id: string
  title: string
  client?: string
  role: string
  description: string
  shortDescription?: string
  problem?: string
  solution?: string
  tech: string[]
  architecture?: string[]
  highlights: string[]
  impact?: string[]
  keyTakeaways?: string[]
  link?: string
  github?: string
  image?: string
  featured?: boolean
  category?: "enterprise" | "simulation" | "mobile" | "portal" | "innovation"
  tags?: string[]
}

export const projects: Project[] = [
  {
  id: "vcert",
  title: "VCert — Enterprise Certification Platform",
  client: "Valvoline",
  role: "Full-Stack Systems Engineer",
  shortDescription:
    "Enterprise certification platform with real-time leaderboards, multi-track progression, admin controls, and automated engagement systems.",
  description:
    "Architected and developed a scalable certification platform supporting multi-track learning paths, real-time leaderboards, admin enrollment workflows, and automated notification systems. Included time-based challenge releases and centralized analytics across modules.",
  problem:
    "Legacy certification systems lacked real-time engagement, structured progression, admin control, and reliable reporting.",
  solution:
    "Built a full-stack platform with modular certification tracks, admin-controlled enrollment, scheduled content releases, and automated email notifications to drive engagement.",
  tech: [
    "React",
    "TypeScript",
    "Node.js",
    "Firebase Realtime Database",
    "PostgreSQL",
    "Cloud Functions",
    "OAuth 2.0",
    "xAPI / SCORM Integration"
  ],
  architecture: [
    "Multi-track certification system with parallel progression",
    "Admin dashboard for user enrollment and track management",
    "Time-based challenge release system (scheduled triggers)",
    "Event-driven email notification system (release + reminders)",
    "Real-time leaderboard scoped by track",
    "Centralized analytics pipeline"
  ],
  highlights: [
    "Built admin dashboard for managing users and certification tracks",
    "Implemented scheduled challenge releases with automated email notifications",
    "Engineered real-time leaderboard system per certification track",
    "Designed multi-track enrollment system for parallel learning paths",
    "Standardized analytics tracking across all modules"
  ],
  impact: [
    "Increased learner engagement by ~45% via competition and notifications",
    "Improved completion rates through scheduled releases and reminders",
    "Supported 10,000+ concurrent users with <200ms response time",
    "Reduced manual admin overhead through automation",
    "Enabled scalable rollout of new certification tracks"
  ],
  keyTakeaways: [
    "Event-driven systems increase engagement and completion",
    "Admin tooling is critical for scalable platforms",
    "Real-time data and competition drive user behavior",
    "Automation reduces operational overhead"
  ],
  link: "https://lhtclients.com/Projects/Valvoline/VCert/dev/",
  image: "./images/projects/valvoline/valvoline-vcert-thumb-title.jpg",
  featured: true,
  category: "enterprise",
  tags: [
    "Full-Stack",
    "SaaS",
    "Analytics",
    "Admin Systems",
    "Real-Time",
    "Event-Driven",
    "xAPI",
    "SCORM"
  ]
},

  {
    id: "learning-analytics-platform",
    title: "Learning Analytics Platform",
    client: "Multiple Clients",
    role: "Full-Stack Engineer",
    shortDescription:
      "Cloud-based analytics system capturing learner interactions across Storyline and Lectora courses, with a secure multi-client React dashboard.",
    description:
      "Built a full-stack learning analytics platform integrating with Storyline and Lectora courses. Google Cloud Functions captured user progress, activity interactions, assessment stats, hyperlink and document clicks. Data fed into a React/TypeScript dashboard with role-based access via Microsoft 365 OAuth, supporting multiple clients and courses. Visualizations provided actionable insights for course improvements.",
    problem:
      "Clients lacked a unified way to track learner engagement and performance across multiple eLearning platforms, with secure access control for multi-tenant data.",
    solution:
      "Developed cloud function hooks for course integration, normalized event data, and built a multi-client, secure dashboard with interactive visualizations using Plotly.",
    tech: [
      "React",
      "TypeScript",
      "Google Cloud Functions",
      "Microsoft 365 OAuth",
      "Plotly",
      "SCORM / xAPI",
      "Multi-tenant analytics"
    ],
    architecture: [
      "Cloud function event capture from multiple authoring tools",
      "Data normalization and analytics pipeline",
      "Secure multi-tenant dashboard with role-based access",
      "Interactive visualization layer using Plotly"
    ],
    highlights: [
      "Integrated Storyline and Lectora course events into a unified analytics system",
      "Implemented secure multi-client access via MS365 OAuth",
      "Built scalable dashboard visualizations to analyze learner engagement",
      "Enabled identification of user pain points for course improvement"
    ],
    impact: [
      "Provided actionable insights to improve course design and engagement",
      "Enabled detailed tracking of interactions and assessments across multiple courses",
      "Supported secure multi-client, multi-course analytics access",
      "Streamlined decision-making for course iterations"
    ],
    keyTakeaways: [
      "Full-stack engineering bridges eLearning and analytics",
      "Secure, multi-tenant architecture increases client confidence",
      "Event tracking across tools drives data-informed course design"
    ],
    image: "./images/projects/analytics/learning-analytics-thumb.jpg",
    featured: true,
    category: "enterprise",
    tags: ["Full-Stack", "Analytics", "Multi-Tenant", "SCORM", "xAPI", "React", "Guided Learning"]
  },

  {
    id: "owens-minor",
    title: "Ethics & Compliance Portal",
    client: "Owens & Minor",
    role: "Learning Systems Engineer",
    shortDescription:
      "Multi-page, multi-language compliance portal with centralized analytics and course integration.",
    description:
      "Rebuilt a multi-page, multi-language compliance portal following client branding guidelines. Integrated courses, documents, and PDFs in multiple languages, with analytics reporting to a centralized LRS.",
    problem:
      "Training content was fragmented across multiple languages and siloed documents with inconsistent reporting.",
    solution:
      "Created structured JSON content pipelines for multi-language support, integrated all courses and documents, and implemented analytics tracking to the LRS for learner progress and engagement.",
    tech: ["Multi-page Web Platform", "JavaScript", "SCORM / xAPI Integration", "Multi-language JSON content", "PDF and document management", "Analytics to LRS"],
    highlights: [
      "Structured multi-language JSON content pipeline",
      "Integrated courses and supporting documents across languages",
      "Configured analytics reporting to LRS",
      "Maintained consistent branding and UX across languages"
    ],
    impact: [
      "Enabled multilingual compliance training at scale",
      "Improved reporting accuracy and visibility",
      "Simplified future content updates"
    ],
    keyTakeaways: [
      "Structured content pipelines simplify multi-language delivery",
      "Analytics provide actionable insights for leadership",
      "Consistency builds learner trust"
    ],
    link: "https://compliance.owens-minor.com/",
    image: "./images/projects/owens-minor/om-ethics-portal-thumb-title.jpg",
    featured: true,
    category: "portal",
    tags: ["LMS Integration", "Multi-language", "Portal", "SCORM", "xAPI"]
  },

  {
    id: "v813",
    title: "VIOC V813 — Gamified Scenario Training",
    client: "Valvoline Instant Oil Change",
    role: "Interactive Learning Engineer",
    shortDescription:
      "Gamified, interactive course with guided learning, branching scenarios, and analytics tracking.",
    description:
      "Developed a gamified course using Lectora with branching scenarios, responsive animations (GIFs and spritesheets), and a 'backpack' system for collectible items. Integrated analytics to track learner progress and engagement.",
    problem:
      "Traditional eLearning lacked engagement and measurable behavioral outcomes.",
    solution:
      "Built guided interactive learning experiences with gamification, visual cues, and analytics to enhance engagement and retention.",
    tech: ["Lectora / Authoring Tool", "SCORM / xAPI Integration", "Gamification", "Guided Learning", "Responsive Animations"],
    architecture: [
      "Branching scenario engine",
      "Interactive animations and click cues",
      "Gamification with collectible items",
      "Analytics integration for learner tracking"
    ],
    highlights: [
      "Interactive guided learning with pulsing click cues",
      "Full-page responsive animations using GIFs and spritesheets",
      "Gamification mechanics (collectibles, backpack system)",
      "Integrated analytics for learner engagement"
    ],
    impact: [
      "Increased engagement by ~50%",
      "Enabled measurable tracking of learner interactions",
      "Delivered immersive, cartoon-style learning experience"
    ],
    keyTakeaways: [
      "Guided learning and gamification increase retention",
      "Interactive cues improve learner behavior",
      "Analytics provide actionable insights"
    ],
    link: "https://lhtclients.com/Projects/Valvoline/VIOC/V813/updates/a1/",
    image: "./images/projects/valvoline/valvoline-v813-thumb-title.jpg",
    featured: true,
    category: "simulation",
    tags: ["Gamification", "Guided Learning", "Interactive Learning", "Analytics", "SCORM", "xAPI"]
  },

  {
    id: "passport-innovation",
    title: "Passport Innovation — Interactive Training",
    client: "Johnson & Johnson",
    role: "Interactive Learning Engineer",
    shortDescription:
      "Interactive course with guided learning, drag-and-drop, sliders, and analytics integration.",
    description:
      "Built a guided interactive course using Lectora with multiple activity types (drag-and-drop, sliders) and branching logic. Integrated analytics to track learner progress and outcomes.",
    problem:
      "Training lacked interactive, measurable learner engagement.",
    solution:
      "Implemented branching scenarios and interactive activities, with analytics pipelines to the LRS for progress tracking.",
    tech: ["Lectora / Authoring Tool", "SCORM / xAPI Integration", "Interactive Activities", "Guided Learning"],
    highlights: [
      "Reusable interactive modules with branching scenarios",
      "Multiple activity types (drag-and-drop, sliders, quizzes)",
      "Integrated analytics for learner tracking"
    ],
    impact: [
      "Improved learner engagement and retention",
      "Enabled real-time tracking of learner progress",
      "Reduced development time for future courses"
    ],
    keyTakeaways: [
      "Interactive, guided learning increases engagement",
      "Analytics enable actionable insights",
      "Modular design scales across courses"
    ],
    link: "https://lhtclients.com/Projects/JJ/Passport_Innovation/f3/",
    image: "./images/projects/jj/jj-passport-innovation-thumb-title.jpg",
    featured: true,
    category: "innovation",
    tags: ["Interactive Learning", "Guided Learning", "Branching Scenarios", "SCORM", "xAPI"]
  },

  {
    id: "valvoline-napa-oils",
    title: "NAPA Engine Oils — Mobile Training System",
    client: "Valvoline",
    role: "Full-Stack Engineer",
    shortDescription:
      "Mobile-first interactive training system optimized for low-bandwidth field environments.",
    description:
      "Engineered a mobile-first training platform with modular components, responsive design, and optimized asset delivery pipelines.",
    problem:
      "Training systems were not optimized for mobile or low-bandwidth usage.",
    solution:
      "Implemented responsive architecture, optimized assets, and touch-friendly interactions to ensure reliable delivery in field conditions.",
    tech: ["React", "TypeScript", "Node.js", "xAPI / SCORM Integration", "PostgreSQL"],
    architecture: [
      "Mobile-first architecture",
      "Optimized asset pipeline",
      "Touch interaction system",
      "Centralized analytics"
    ],
    highlights: [
      "Designed for field conditions and low-bandwidth environments",
      "Improved performance and usability",
      "Ensured cross-device consistency"
    ],
    impact: [
      "Reduced load times by ~40%",
      "Increased adoption among field teams",
      "Improved training completion rates",
      "Reduced drop-off during sessions"
    ],
    keyTakeaways: [
      "Performance drives adoption",
      "Design for real-world conditions",
      "Consistency builds user trust"
    ],
    link: "https://lhtclients.com/Projects/Valvoline/VGO/vmobile/NAPA/EngineOils/Page_1/a5/",
    image: "./images/projects/valvoline/valvoline-napa-oils-thumb-title.jpg",
    featured: true,
    category: "mobile",
    tags: ["Full-Stack", "Mobile", "Performance", "Analytics", "Field Optimization"]
  },

  {
    id: "umo-compliance101",
    title: "Compliance 101 — Gamified Training",
    client: "UMO",
    role: "Interactive Learning Engineer",
    shortDescription:
      "Gamified, guided learning course with interactive elements, pulsing cues, and AI audio integration.",
    description:
      "Built a gamified guided-learning course with pulsing click cues, interactive activities, and AI-generated audio. Integrated analytics to track learner progress and performance.",
    problem:
      "Training lacked engagement and interactive guidance.",
    solution:
      "Implemented interactive, gamified modules with visual and audio cues and analytics pipelines for learner tracking.",
    tech: ["Lectora / Authoring Tool", "SCORM / xAPI Integration", "Gamification", "Guided Learning", "AI Audio"],
    architecture: [
      "Interactive branching modules",
      "Visual and audio guidance for learners",
      "Gamified elements and progress tracking",
      "Analytics reporting via LRS"
    ],
    highlights: [
      "Guided learning with pulsing interactive cues",
      "Integrated AI audio for narration and feedback",
      "Gamification mechanics with assessments and tracking",
      "Analytics integration for learner insights"
    ],
    impact: [
      "Increased engagement and retention",
      "Enabled measurable tracking of interactions and assessments",
      "Delivered immersive, interactive learning experience"
    ],
    keyTakeaways: [
      "Guided gamification drives engagement",
      "Audio and visual cues reinforce learning",
      "Analytics provide actionable insights"
    ],
    link: "https://lhtclients.com/Projects/UMO/Compliance101/final_v5/",
    image: "./images/projects/umo/umo-compliance101-thumb-title.jpg",
    featured: true,
    category: "portal",
    tags: ["Gamification", "Guided Learning", "Interactive Learning", "SCORM", "xAPI", "AI Audio"]
  },

  {
    id: "jj-dawn-raid",
    title: "Dawn Raid — Compliance Simulation",
    client: "Johnson & Johnson",
    role: "Interactive Learning Engineer",
    shortDescription:
      "Scenario-based guided learning course with gamification, animations, and analytics tracking.",
    description:
      "Developed a simulation course using Lectora with branching scenarios, GIF animations, pulsing cues, and gamified elements. Integrated analytics tracking for learner decision-making and performance.",
    problem:
      "Training required realistic, measurable simulations with engaging interactions.",
    solution:
      "Implemented guided, interactive simulations with gamified mechanics and integrated analytics pipelines to track progress and outcomes.",
    tech: ["Lectora / Authoring Tool", "SCORM / xAPI Integration", "Gamification", "Guided Learning", "Animations"],
    architecture: [
      "Branching scenario simulation engine",
      "Interactive animations and pulsing click cues",
      "Gamification mechanics",
      "Analytics reporting via LRS"
    ],
    highlights: [
      "Built immersive guided simulations with visual feedback",
      "Gamified learner experience with branching decisions",
      "Tracked interactions and assessments in analytics"
    ],
    impact: [
      "Increased engagement and knowledge retention",
      "Enabled measurable tracking of learner behavior",
      "Reduced development time for similar simulations"
    ],
    keyTakeaways: [
      "Gamified guided learning improves retention",
      "Interactive cues reinforce learner actions",
      "Analytics enable actionable insights"
    ],
    link: "https://lhtclients.com/Projects/JJ/Dawn_Raid/final_40/",
    image: "./images/projects/jj/jj-dawn-raid-thumb-title.jpg",
    featured: true,
    category: "simulation",
    tags: ["Gamification", "Guided Learning", "Interactive Learning", "Animations", "SCORM", "xAPI"]
  }
]

export default projects;