export type ProjectItem = {
  id: string;
  title: string;
  client?: string;
  href?: string;
  thumb?: string;
  tech?: string[];
  tags?: string[];
  description?: string;
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
    description: "Interactive cybersecurity training experience."
  },
  {
    id: "valvoline-napa-oils",
    title: "NAPA Engine Oils",
    client: "Valvoline",
    href: "https://lhtclients.com/Projects/Valvoline/VGO/vmobile/NAPA/EngineOils/Page_1/a5/",
    thumb: "images/projects/valvoline/valvoline-napa-oils-thumb-title.jpg",
    tech: ["SCORM", "JS"],
    tags: ["Sales Enablement"],
    description: "Mobile-focused product education for NAPA oils."
  },
  {
    id: "envision-emtala",
    title: "EMTALA Training",
    client: "Envision",
    href: "https://lhtclients.com/Projects/Envision/EMTALA_Training/f4/",
    thumb: "images/projects/envision/envision-emtala-thumb-title.jpg",
    tech: ["SCORM"],
    tags: ["Healthcare", "Compliance"]
  },
  {
    id: "acadia-adverse-events",
    title: "Adverse Events (Live Course)",
    client: "Acadia",
    href: "https://lhtclients.com/Projects/Live_Courses/Acadia/Adverse_Events/Live/",
    thumb: "images/projects/acadia/acadia-adverse-events-thumb-title.jpg",
    tech: ["Live Course"],
    tags: ["Pharma", "Safety"]
  },
  {
    id: "jj-dawn-raid",
    title: "Dawn Raid",
    client: "Johnson & Johnson",
    href: "https://lhtclients.com/Projects/JJ/Dawn_Raid/final_40/",
    thumb: "images/projects/jj/jj-dawn-raid-thumb-title.jpg",
    tech: ["SCORM"],
    tags: ["Legal", "Compliance"]
  },
  {
    id: "valvoline-selling-convo",
    title: "Selling Through Conversation",
    client: "Valvoline",
    href: "https://lhtclients.com/Projects/Valvoline/ExpressCare/PCW_INTLExpressCare/_translation/Selling_Through_Conversation/a12/",
    thumb: "images/projects/valvoline/valvoline-selling-conversation-thumb-title.jpg",
    tech: ["SCORM"],
    tags: ["Sales Enablement"]
  },
  {
    id: "janssen-hcc-annual",
    title: "HCC Annual Canada GSCO",
    client: "Janssen",
    href: "https://lhtclients.com/Projects/Janssen/HCC_Annual_Canada_GSCO/final/",
    thumb: "images/projects/janssen/janssen-hcc-annual-thumb-title.jpg",
    tech: ["Compliance"],
    tags: ["Healthcare"]
  },
  {
    id: "jj-automation-101",
    title: "HT Automation 101 (Module 4)",
    client: "Johnson & Johnson",
    href: "https://www.lhtclients.com/Projects/JJ/HT_Automation_101/module_4/final/",
    thumb: "images/projects/jj/jj-automation101-thumb-title.jpg",
    tech: ["Training"],
    tags: ["Manufacturing"]
  },
  {
    id: "jj-bcm-portal",
    title: "BCM Portal",
    client: "Johnson & Johnson",
    href: "https://lhtclients.com/Projects/JJ/BCM_Portal/f1/",
    thumb: "images/projects/jj/jj-bcm-portal-thumb-title.jpg",
    tech: ["Portal"],
    tags: ["Business Continuity"]
  },
  {
    id: "valvoline-mapanything",
    title: "MapAnything Best Practices",
    client: "Valvoline",
    href: "https://lhtclients.com/Projects/Valvoline/SFDC/MapAnything/BestPractices/v2/story.html",
    thumb: "images/projects/valvoline/valvoline-mapanything-thumb-title.jpg",
    tech: ["SFDC"],
    tags: ["Field Ops"]
  },
  {
    id: "aep-sexual-harassment",
    title: "Sexual Harassment Training",
    client: "AEP",
    href: "https://lhtclients.com/Projects/AEP/Sexual_Harassment/f1/",
    thumb: "images/projects/aep/aep-sexual-harassment-thumb-title.jpg",
    tech: ["Compliance"],
    tags: ["HR"]
  },
  {
    id: "umo-compliance101",
    title: "Compliance 101",
    client: "UMO",
    href: "https://lhtclients.com/Projects/UMO/Compliance101/final_v5/",
    thumb: "images/projects/umo/umo-compliance101-thumb-title.jpg",
    tech: ["Compliance"],
    tags: ["Foundations"]
  },
  {
    id: "tg-legal-compliance",
    title: "Legal & Compliance Overview",
    client: "TG Therapeutics",
    href: "https://lhtclients.com/Projects/TG/Therapeutics/Legal_and_Compliance_Overview/f5/story.html",
    thumb: "images/projects/tg/tg-legal-compliance-thumb-title.jpg",
    tech: ["SCORM"],
    tags: ["Pharma", "Compliance"]
  },
  {
    id: "om-gdpr",
    title: "GDPR Data Protection",
    client: "Owens & Minor",
    href: "https://www.lhtclients.com/Projects/OM/GDPR_Data_Protection/f3/",
    thumb: "images/projects/owens-minor/om-gdpr-thumb-title.jpg",
    tech: ["Compliance"],
    tags: ["Privacy"]
  },
  {
    id: "jj-export-controls",
    title: "Export Controls",
    client: "Johnson & Johnson",
    href: "https://lhtclients.com/Projects/JJ/Export_Controls/Final2/index.html",
    thumb: "images/projects/jj/jj-export-controls-thumb-title.jpg",
    tech: ["SCORM"],
    tags: ["Trade", "Legal"]
  },
  {
    id: "jj-passport-innovation",
    title: "Passport Innovation",
    client: "Johnson & Johnson",
    href: "https://lhtclients.com/Projects/JJ/Passport_Innovation/f3/",
    thumb: "images/projects/jj/jj-passport-innovation-thumb-title.jpg",
    tech: ["Learning"],
    tags: ["Innovation"]
  },
  {
    id: "jj-3dprinting",
    title: "3D Printing",
    client: "Johnson & Johnson",
    href: "https://lhtclients.com/Projects/JJ/3DPrinting/final/",
    thumb: "images/projects/jj/jj-3dprinting-thumb-title.jpg",
    tech: ["Training"],
    tags: ["Tech"]
  },
  {
    id: "valvoline-v813",
    title: "VIOC V813 Updates",
    client: "Valvoline",
    href: "https://lhtclients.com/Projects/Valvoline/VIOC/V813/updates/a1/",
    thumb: "images/projects/valvoline/valvoline-v813-thumb-title.jpg",
    tech: ["Ops"],
    tags: ["Quick Lube"]
  },
  {
    id: "valvoline-vcert-2024",
    title: "VCert (2024)",
    client: "Valvoline",
    href: "https://lhtclients.com/Projects/Valvoline/VCert/2024/dev/",
    thumb: "images/projects/valvoline/valvoline-vcert-thumb-title.jpg",
    tech: ["Certification"],
    tags: ["Internal Enablement"]
  },
  {
    id: "om-ethics-portal",
    title: "Ethics & Compliance Portal",
    client: "Owens & Minor",
    href: "https://compliance.owens-minor.com/",
    thumb: "images/projects/owens-minor/om-ethics-portal-thumb-title.jpg",
    tech: ["Portal"],
    tags: ["Ethics", "Compliance"]
  }
];
