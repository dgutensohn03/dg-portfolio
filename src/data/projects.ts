export type ProjectItem = {
  id: string;
  title: string;
  client?: string;
  href?: string;
  thumb?: string;
  tech?: string[];
  tags?: string[];
  description?: string;
  desktopOnly?: boolean;
  modalDescription?: string;
};

export const projects: ProjectItem[] = [
  {
    id: "kenvue-cybersecurity",
    title: "Cybersecurity Training",
    client: "Kenvue",
    href: "https://lhtclients.com/Projects/Kenvue/Cyber_Training/final_v15/story.html",
    thumb: "images/projects/kenvue/kenvue-cybersecurity-thumb-title.jpg",
    tech: ["SCORM", "xAPI", "React"],
    tags: ["Security", "Compliance"],
    description: "Interactive cybersecurity training experience.",
    desktopOnly: false,
    modalDescription: "Designed to enhance cybersecurity awareness through scenario-based training. Built as a SCORM package using custom navigation logic and xAPI tracking to capture decision-based metrics."
  },
  {
    id: "valvoline-napa-oils",
    title: "NAPA Engine Oils",
    client: "Valvoline",
    href: "https://lhtclients.com/Projects/Valvoline/VGO/vmobile/NAPA/EngineOils/Page_1/a5/",
    thumb: "images/projects/valvoline/valvoline-napa-oils-thumb-title.jpg",
    tech: ["SCORM", "JS"],
    tags: ["Sales Enablement"],
    description: "Mobile-focused product education for NAPA oils.",
    desktopOnly: false,
    modalDescription: "Developed to streamline sales enablement for NAPA Engine Oils. Built with SCORM-compliance and custom JS navigation to deliver mobile-optimized product training."
  },
  {
    id: "envision-emtala",
    title: "EMTALA Training",
    client: "Envision",
    href: "https://lhtclients.com/Projects/Envision/EMTALA_Training/f4/",
    thumb: "images/projects/envision/envision-emtala-thumb-title.jpg",
    tech: ["SCORM"],
    tags: ["Healthcare", "Compliance"],
    desktopOnly: false,
    modalDescription: "Created to reinforce EMTALA compliance within healthcare workflows. Built as a SCORM module with gated progression and assessment logic for measurable tracking."
  },
  {
    id: "acadia-adverse-events",
    title: "Adverse Events (Live Course)",
    client: "Acadia",
    href: "https://lhtclients.com/Projects/Live_Courses/Acadia/Adverse_Events/Live/",
    thumb: "images/projects/acadia/acadia-adverse-events-thumb-title.jpg",
    tech: ["Live Course"],
    tags: ["Pharma", "Safety"],
    desktopOnly: true,
    modalDescription: "Engineered as a live-course experience to manage adverse event training in pharma. Built with interactive branching scenarios and custom assessment logic to ensure regulatory compliance."
  },
  {
    id: "jj-dawn-raid",
    title: "Dawn Raid",
    client: "Johnson & Johnson",
    href: "https://lhtclients.com/Projects/JJ/Dawn_Raid/final_40/",
    thumb: "images/projects/jj/jj-dawn-raid-thumb-title.jpg",
    tech: ["SCORM"],
    tags: ["Legal", "Compliance"],
    desktopOnly: true,
    modalDescription: "Designed for J&J’s legal compliance training around dawn-raid readiness. Built as a SCORM training module with scenario-based decision points and analytics tracking."
  },
  {
    id: "valvoline-selling-convo",
    title: "Selling Through Conversation",
    client: "Valvoline",
    href: "https://lhtclients.com/Projects/Valvoline/ExpressCare/PCW_INTLExpressCare/_translation/Selling_Through_Conversation/a12/",
    thumb: "images/projects/valvoline/valvoline-selling-conversation-thumb-title.jpg",
    tech: ["SCORM"],
    tags: ["Sales Enablement"],
    desktopOnly: false,
    modalDescription: "Built to help ExpressCare sales teams sell more effectively through structured conversation flows. Developed as a SCORM training experience with interactive role-play branching."
  },
  {
    id: "janssen-hcc-annual",
    title: "HCC Annual Canada GSCO",
    client: "Janssen",
    href: "https://lhtclients.com/Projects/Janssen/HCC_Annual_Canada_GSCO/final/",
    thumb: "images/projects/janssen/janssen-hcc-annual-thumb-title.jpg",
    tech: ["Compliance"],
    tags: ["Healthcare"],
    desktopOnly: true,
    modalDescription: "Created for HCC Annual compliance education within the Canadian GSCO team. Developed with interactive modules, assessment logic and completion tracking for regulatory alignment."
  },
  {
    id: "jj-automation-101",
    title: "HT Automation 101 (Module 4)",
    client: "Johnson & Johnson",
    href: "https://www.lhtclients.com/Projects/JJ/HT_Automation_101/module_4/final/",
    thumb: "images/projects/jj/jj-automation101-thumb-title.jpg",
    tech: ["Training"],
    tags: ["Manufacturing"],
    desktopOnly: true,
    modalDescription: "Designed to instruct manufacturing teams on automation basics in Module 4. Built with a streamlined workflow interface, gated content, and SCORM packaging for LMS integration."
  },
  {
    id: "jj-bcm-portal",
    title: "BCM Portal",
    client: "Johnson & Johnson",
    href: "https://lhtclients.com/Projects/JJ/BCM_Portal/f1/",
    thumb: "images/projects/jj/jj-bcm-portal-thumb-title.jpg",
    tech: ["Portal"],
    tags: ["Business Continuity"],
    desktopOnly: true,
    modalDescription: "Engineered as a central BCM portal to manage business continuity training and workflows. Built with a modular UI framework, role-based access and real-time status dashboards."
  },
  {
    id: "valvoline-mapanything",
    title: "MapAnything Best Practices",
    client: "Valvoline",
    href: "https://lhtclients.com/Projects/Valvoline/SFDC/MapAnything/BestPractices/v2/story.html",
    thumb: "images/projects/valvoline/valvoline-mapanything-thumb-title.jpg",
    tech: ["SFDC"],
    tags: ["Field Ops"],
    desktopOnly: false,
    modalDescription: "Built for field operations at Valvoline to drive best practices using MapAnything. Developed as an interactive guide with embedded SFDC data and navigation logic."
  },
  {
    id: "aep-sexual-harassment",
    title: "Sexual Harassment Training",
    client: "AEP",
    href: "https://lhtclients.com/Projects/AEP/Sexual_Harassment/f1/",
    thumb: "images/projects/aep/aep-sexual-harassment-thumb-title.jpg",
    tech: ["Compliance"],
    tags: ["HR"],
    desktopOnly: false,
    modalDescription: "Designed to deliver essential sexual harassment training for AEP’s workforce. Built as a SCORM-compliant module with scenario branching, authoring logic and data capture."
  },
  {
    id: "umo-compliance101",
    title: "Compliance 101",
    client: "UMO",
    href: "https://lhtclients.com/Projects/UMO/Compliance101/final_v5/",
    thumb: "images/projects/umo/umo-compliance101-thumb-title.jpg",
    tech: ["Compliance"],
    tags: ["Foundations"],
    desktopOnly: false,
    modalDescription: "Created to provide foundational compliance knowledge for UMO. Built with interactive content, gated progression and analytics ready for reporting."
  },
  {
    id: "tg-legal-compliance",
    title: "Legal & Compliance Overview",
    client: "TG Therapeutics",
    href: "https://lhtclients.com/Projects/TG/Therapeutics/Legal_and_Compliance_Overview/f5/story.html",
    thumb: "images/projects/tg/tg-legal-compliance-thumb-title.jpg",
    tech: ["SCORM"],
    tags: ["Pharma", "Compliance"],
    desktopOnly: false,
    modalDescription: "Engineered to provide a comprehensive legal and compliance overview for TG Therapeutics. Built as a SCORM module with instructional design elements and interaction tracking."
  },
  {
    id: "om-gdpr",
    title: "GDPR Data Protection",
    client: "Owens & Minor",
    href: "https://www.lhtclients.com/Projects/OM/GDPR_Data_Protection/f3/",
    thumb: "images/projects/owens-minor/om-gdpr-thumb-title.jpg",
    tech: ["Compliance"],
    tags: ["Privacy"],
    desktopOnly: true,
    modalDescription: "Designed for Owens & Minor to train on GDPR data protection standards. Built with branching scenarios and data logging for audit readiness in SCORM format."
  },
  {
    id: "jj-export-controls",
    title: "Export Controls",
    client: "Johnson & Johnson",
    href: "https://lhtclients.com/Projects/JJ/Export_Controls/Final2/index.html",
    thumb: "images/projects/jj/jj-export-controls-thumb-title.jpg",
    tech: ["SCORM"],
    tags: ["Trade", "Legal"],
    desktopOnly: true,
    modalDescription: "Built to educate teams on export controls compliance at J&J. Developed as a SCORM-based module with decision-logic, tracking states and interactive navigation."
  },
  {
    id: "jj-passport-innovation",
    title: "Passport Innovation",
    client: "Johnson & Johnson",
    href: "https://lhtclients.com/Projects/JJ/Passport_Innovation/f3/",
    thumb: "images/projects/jj/jj-passport-innovation-thumb-title.jpg",
    tech: ["Learning"],
    tags: ["Innovation"],
    desktopOnly: true,
    modalDescription: "Engineered as a passport innovation training system for J&J. Built with modular architecture, content branching and analytics-ready tracking in a SCORM wrapper."
  },
  {
    id: "jj-3dprinting",
    title: "3D Printing",
    client: "Johnson & Johnson",
    href: "https://lhtclients.com/Projects/JJ/3DPrinting/final/",
    thumb: "images/projects/jj/jj-3dprinting-thumb-title.jpg",
    tech: ["Training"],
    tags: ["Tech"],
    desktopOnly: true,
    modalDescription: "Designed a 3D printing training module for J&J’s tech teams. Built as a SCORM training experience with interactive content and progress tracking."
  },
  {
    id: "valvoline-v813",
    title: "VIOC V813 Updates",
    client: "Valvoline",
    href: "https://lhtclients.com/Projects/Valvoline/VIOC/V813/updates/a1/",
    thumb: "images/projects/valvoline/valvoline-v813-thumb-title.jpg",
    tech: ["Ops"],
    tags: ["Quick Lube"],
    desktopOnly: false,
    modalDescription: "Created to deliver V813 updates training for Valvoline’s operations team. Built with a streamlined interface and SCORM delivery to support large-scale rollout."
  },
  {
    id: "valvoline-vcert-2024",
    title: "VCert (2024)",
    client: "Valvoline",
    href: "https://lhtclients.com/Projects/Valvoline/VCert/2024/dev/",
    thumb: "images/projects/valvoline/valvoline-vcert-thumb-title.jpg",
    tech: ["Certification"],
    tags: ["Internal Enablement"],
    desktopOnly: false,
    modalDescription: "Engineered the VCert upskilling platform for Valvoline’s internal certification program. Built with analytics integration, workflow gating and SCORM-compliant packaging."
  },
  {
    id: "om-ethics-portal",
    title: "Ethics & Compliance Portal",
    client: "Owens & Minor",
    href: "https://compliance.owens-minor.com/",
    thumb: "images/projects/owens-minor/om-ethics-portal-thumb-title.jpg",
    tech: ["Portal"],
    tags: ["Ethics", "Compliance"],
    desktopOnly: false,
    modalDescription: "Designed a full ethics & compliance portal for Owens & Minor. Built as a multi-module web application with dashboarding, user management and data-driven tracking."
  }
];
