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
  link: string
  github?: string
  image?: string
  featured?: boolean
  category?: "enterprise" | "simulation" | "mobile" | "portal" | "innovation"
}

export const projects: Project[] = [
  {
    id: "vcert",
    title: "VCert — Enterprise Certification Platform",
    client: "Valvoline",
    role: "Senior Front-End Systems Engineer",
    shortDescription:
      "Enterprise certification ecosystem with real-time leaderboards, multi-track progression, and standards-compliant LMS analytics.",
    description:
      "Architected and led front-end development of a modular enterprise certification ecosystem supporting multi-track challenges, real-time competitive leaderboards, and SCORM/xAPI-compliant analytics. Designed for scalability across distributed teams while maintaining performance, security, and long-term extensibility.",
    problem:
      "Legacy certification systems lacked real-time engagement mechanisms, scalable multi-track management, and centralized performance visibility. Administrators faced reporting inconsistencies and limited control over dynamic certification paths.",
    solution:
      "Designed a component-driven React architecture supporting lessons, assessments, and parallel certification tracks. Integrated Firebase Realtime Database for deterministic leaderboard synchronization, OAuth 2.0 for secure role-based authentication, and Cloud Functions for ranking logic and notification workflows. Abstracted SCORM/xAPI reporting into a reusable analytics layer to ensure consistent LMS compliance across modules.",
    tech: [
      "React",
      "TypeScript",
      "Firebase Realtime Database (NoSQL)",
      "OAuth 2.0",
      "Cloud Functions",
      "Modular UI Architecture",
      "State Management",
      "Gamification Systems",
      "Responsive Design"
    ],
    architecture: [
      "Component-driven lesson, assessment, and challenge framework",
      "Parallel multi-track certification architecture",
      "Realtime NoSQL schema for leaderboard and progress synchronization",
      "Cloud Functions for deterministic ranking calculations",
      "Role-based OAuth authentication model",
      "Abstracted SCORM/xAPI analytics layer"
    ],
    highlights: [
      "Engineered real-time enterprise leaderboard system",
      "Established scalable multi-track certification architecture",
      "Built role-aware administrative dashboard",
      "Standardized LMS analytics reporting through abstraction",
      "Optimized performance for enterprise-scale concurrency"
    ],
    impact: [
      "Standardized certification delivery across distributed teams",
      "Enabled real-time performance visibility for leadership",
      "Increased learner engagement through gamified mechanics",
      "Reduced future development overhead via modular system design"
    ],
    keyTakeaways: [
      "Real-time feedback systems significantly increase engagement",
      "Architect modular systems for long-term scalability",
      "Abstract standards integrations to avoid duplication",
      "Design certification platforms with extensibility in mind"
    ],
    link: "https://lhtclients.com/Projects/Valvoline/VCert/dev/",
    image: "./images/projects/valvoline/valvoline-vcert-thumb-title.jpg",
    featured: true,
    category: "enterprise"
  },

  {
    id: "owens-minor",
    title: "Ethics & Compliance Portal",
    client: "Owens & Minor",
    role: "Front-End Systems Engineer",
    shortDescription:
      "Centralized compliance portal unifying distributed modules under role-aware dashboards with standardized reporting.",
    description:
      "Architected a scalable compliance portal consolidating multiple distributed learning modules into a unified, role-aware dashboard system with centralized LMS reporting and navigation control.",
    problem:
      "Compliance training was fragmented across siloed modules with inconsistent UX and limited centralized reporting, reducing executive visibility and increasing administrative overhead.",
    solution:
      "Designed a modular portal framework with dynamic role-based rendering and centralized navigation logic. Abstracted LMS tracking at the platform layer to ensure reporting consistency across independently developed modules.",
    tech: ["React", "Dashboard UI", "Role-Based Rendering", "SCORM Integration"],
    architecture: [
      "Portal-based modular framework",
      "Dynamic role-aware rendering layer",
      "Cross-module LMS reporting abstraction",
      "Scalable routing and navigation system"
    ],
    highlights: [
      "Unified previously siloed compliance modules",
      "Implemented dynamic role-based dashboard rendering",
      "Standardized analytics reporting across portal modules"
    ],
    impact: [
      "Improved executive visibility into compliance metrics",
      "Reduced system fragmentation",
      "Established reusable portal framework for future initiatives"
    ],
    keyTakeaways: [
      "Portal abstraction reduces operational complexity",
      "Role-aware rendering improves scalability",
      "System-level reporting integration increases reliability"
    ],
    link: "https://compliance.owens-minor.com/",
    image: "./images/projects/owens-minor/om-ethics-portal-thumb-title.jpg",
    featured: true,
    category: "portal"
  },

  {
    id: "v813",
    title: "VIOC V813 Scenario Training",
    client: "Valvoline Instant Oil Change",
    role: "Front-End Systems Engineer",
    shortDescription:
      "Enterprise scenario-based training engine with persistent branching logic and measurable analytics.",
    description:
      "Developed a reusable scenario-based training engine enabling complex branching simulations with persistent learner state and SCORM/xAPI-compliant analytics reporting.",
    problem:
      "Operational training required realistic decision-tree simulations capable of tracking multi-path outcomes while remaining fully LMS compatible.",
    solution:
      "Architected a modular branching engine supporting dynamic decision trees and cross-screen state persistence. Decoupled analytics event dispatching into a dedicated abstraction layer to ensure measurable and consistent LMS reporting regardless of scenario complexity.",
    tech: ["React", "SCORM", "xAPI", "Branching Logic", "State Persistence"],
    architecture: [
      "Reusable decision-tree simulation framework",
      "Persistent cross-screen state controller",
      "Decoupled LMS analytics abstraction layer",
      "Template-driven scenario system"
    ],
    highlights: [
      "Engineered reusable branching simulation framework",
      "Maintained persistent state across multi-step flows",
      "Accelerated future builds through scenario templating"
    ],
    impact: [
      "Enabled measurable scenario-based performance analytics",
      "Improved realism in operational training",
      "Reduced development time for subsequent simulation projects"
    ],
    keyTakeaways: [
      "Simulation engines should prioritize reusability",
      "Persistent state improves continuity and retention",
      "Analytics abstraction simplifies complex interaction tracking"
    ],
    link: "https://lhtclients.com/Projects/Valvoline/VIOC/V813/updates/a1/",
    image: "./images/projects/valvoline/valvoline-v813-thumb-title.jpg",
    featured: true,
    category: "simulation"
  },

  {
    id: "passport-innovation",
    title: "Passport Innovation — Training System",
    client: "Johnson & Johnson",
    role: "Front-End Systems Engineer",
    shortDescription:
      "Modular innovation training platform with scalable content architecture and LMS analytics integration.",
    description:
      "Designed and implemented a modular innovation training system enabling interactive navigation, branching challenges, and measurable progress tracking within enterprise LMS environments.",
    problem:
      "Innovation training required engaging, modular delivery with measurable outcomes and scalable UI reuse across initiatives.",
    solution:
      "Built a reusable component architecture with SCORM/xAPI abstraction for standardized analytics reporting. Implemented branching navigation and dashboard-driven progress tracking to increase engagement and measurement visibility.",
    tech: ["React", "SCORM", "xAPI", "Modular UI Components", "Dashboard Systems"],
    architecture: [
      "Reusable modular interaction system",
      "SCORM/xAPI analytics abstraction layer",
      "Dashboard-driven progress tracking controller"
    ],
    highlights: [
      "Established reusable component system adopted across modules",
      "Integrated measurable analytics into innovation workflows",
      "Designed scalable branching navigation patterns"
    ],
    impact: [
      "Improved engagement in innovation-focused training",
      "Enabled measurable cohort-based tracking",
      "Reduced duplication via modular design strategy"
    ],
    keyTakeaways: [
      "Modular systems increase velocity and consistency",
      "Analytics visibility drives measurable learning outcomes",
      "Reusable frameworks scale training portfolios"
    ],
    link: "https://lhtclients.com/Projects/JJ/Passport_Innovation/f3/",
    image: "./images/projects/jj/jj-passport-innovation-thumb-title.jpg",
    featured: true,
    category: "innovation"
  },

  {
    id: "valvoline-napa-oils",
    title: "NAPA Engine Oils — Mobile Training",
    client: "Valvoline",
    role: "Front-End Systems Engineer",
    shortDescription:
      "Mobile-first SCORM training optimized for bandwidth-constrained field environments.",
    description:
      "Designed and implemented a mobile-first enterprise training module optimized for field sales teams operating in constrained network environments while maintaining SCORM standards compliance.",
    problem:
      "Existing modules were not optimized for mobile delivery, creating usability friction and inconsistent learner experiences in field conditions.",
    solution:
      "Implemented responsive, touch-first interaction patterns and optimized asset loading strategies to minimize performance bottlenecks. Maintained LMS compatibility while ensuring consistent cross-device usability.",
    tech: ["React", "SCORM", "Responsive Design", "Performance Optimization"],
    architecture: [
      "Mobile-first layout architecture",
      "Custom navigation controller",
      "Optimized asset loading pipeline"
    ],
    highlights: [
      "Designed touch-first interaction patterns",
      "Improved performance under constrained bandwidth",
      "Ensured consistent LMS delivery across device types"
    ],
    impact: [
      "Increased accessibility for field-based learners",
      "Reduced friction in mobile consumption",
      "Improved training reliability in low-bandwidth environments"
    ],
    keyTakeaways: [
      "Mobile-first design is critical for distributed teams",
      "Performance optimization improves adoption",
      "Consistency across devices ensures delivery reliability"
    ],
    link: "https://lhtclients.com/Projects/Valvoline/VGO/vmobile/NAPA/EngineOils/Page_1/a5/",
    image: "./images/projects/valvoline/valvoline-napa-oils-thumb-title.jpg",
    featured: true,
    category: "mobile"
  },

  {
    id: "umo-compliance101",
    title: "Compliance 101 — Foundational Training",
    client: "UMO",
    role: "Front-End Systems Engineer",
    shortDescription:
      "Foundational compliance training system with gated progression and measurable LMS analytics.",
    description:
      "Developed a standardized compliance training system featuring modular components, gated progression control, and analytics-ready LMS reporting abstraction.",
    problem:
      "Compliance knowledge required consistent delivery across teams with measurable completion tracking and scalable component reuse.",
    solution:
      "Implemented reusable SCORM modules with gated progression logic and xAPI event abstraction to ensure consistent reporting and standardized UX delivery.",
    tech: ["React", "SCORM", "xAPI"],
    architecture: [
      "Reusable modular SCORM components",
      "Gated progression controller",
      "Analytics abstraction for LMS reporting"
    ],
    highlights: [
      "Standardized compliance training framework",
      "Built reusable component library",
      "Integrated measurable LMS analytics"
    ],
    impact: [
      "Improved reporting accuracy across teams",
      "Reduced duplication in future compliance initiatives",
      "Increased consistency in foundational training delivery"
    ],
    keyTakeaways: [
      "Standardization strengthens compliance consistency",
      "Gated progression enhances retention",
      "Abstraction layers simplify reporting integration"
    ],
    link: "https://lhtclients.com/Projects/UMO/Compliance101/final_v5/",
    image: "./images/projects/umo/umo-compliance101-thumb-title.jpg",
    featured: true,
    category: "portal"
  },

  {
    id: "jj-dawn-raid",
    title: "Dawn Raid Compliance Simulation",
    client: "Johnson & Johnson",
    role: "Front-End Systems Engineer",
    shortDescription:
      "High-risk legal compliance simulation with reusable branching engine and measurable decision analytics.",
    description:
      "Engineered a scenario-based compliance simulation modeling high-risk legal response workflows with persistent branching logic and standards-compliant LMS analytics.",
    problem:
      "Required realistic legal response simulations capable of tracking complex decision paths while maintaining strict LMS compatibility requirements.",
    solution:
      "Built a reusable branching simulation engine with persistent state management and SCORM/xAPI analytics abstraction to capture measurable learner decisions across multi-path scenarios.",
    tech: ["React", "SCORM", "xAPI", "Branching Decision Trees"],
    architecture: [
      "Reusable branching scenario engine",
      "Persistent cross-screen state management",
      "LMS analytics abstraction layer"
    ],
    highlights: [
      "Engineered scalable compliance simulation framework",
      "Captured measurable decision-path analytics",
      "Enabled expansion into additional compliance scenarios"
    ],
    impact: [
      "Enhanced experiential learning in legal compliance training",
      "Provided measurable scenario-based analytics",
      "Reduced development time for subsequent simulation initiatives"
    ],
    keyTakeaways: [
      "Experiential simulations drive retention",
      "Reusable engines scale complex training portfolios",
      "Analytics abstraction simplifies standards compliance"
    ],
    link: "https://lhtclients.com/Projects/JJ/Dawn_Raid/final_40/",
    image: "./images/projects/jj/jj-dawn-raid-thumb-title.jpg",
    featured: true,
    category: "simulation"
  }
];

export default projects;
