export type LearnArticle = {
  slug: string;
  category: "Tutorial" | "Case Study" | "Technical Guide" | "Visual Explainer";
  title: string;
  summary: string;
  readTime: string;
};

export const learnArticles: LearnArticle[] = [
  {
    slug: "learning-standards-field-guide",
    category: "Technical Guide",
    title: "A Field Guide to Learning Standards",
    summary:
      "Compare SCORM 1.2 and 2004, AICC, xAPI/Tin Can, and cmi5; see where LTI, QTI, Common Cartridge, and Caliper fit.",
    readTime: "18 min",
  },
  {
    slug: "activity-to-insight",
    category: "Tutorial",
    title: "From Activity to Insight",
    summary:
      "Follow one learning event from a user interaction through xAPI, an LRS, a service layer, and an analytics dashboard.",
    readTime: "11 min",
  },
  {
    slug: "missing-completion",
    category: "Case Study",
    title: "The Case of the Missing Completion",
    summary:
      "A practical investigation into how a successful learning event can disappear between the experience and the dashboard.",
    readTime: "10 min",
  },
  {
    slug: "enterprise-system-training",
    category: "Case Study",
    title: "Designing Training for a Complex Enterprise System",
    summary:
      "Follow one administrator support scenario from performance evidence through practice, assessment, and maintained job support.",
    readTime: "12 min",
  },
];
