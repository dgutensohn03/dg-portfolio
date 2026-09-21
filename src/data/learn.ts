export type LearnArticle = {
  slug: string;
  category: "Tutorial" | "Case Study" | "Technical Guide" | "Visual Explainer";
  title: string;
  summary: string;
  readTime: string;
  number: string;
};

export const learnArticles: LearnArticle[] = [
  {
    slug: "activity-to-insight",
    category: "Tutorial",
    title: "From Activity to Insight",
    summary: "Follow one learning event from a user interaction through xAPI, an LRS, a service layer, and an analytics dashboard.",
    readTime: "7 min",
    number: "01",
  },
  {
    slug: "missing-completion",
    category: "Case Study",
    title: "The Case of the Missing Completion",
    summary: "A practical investigation into how a successful learning event can disappear between the experience and the dashboard.",
    readTime: "6 min",
    number: "02",
  },
  {
    slug: "analytics-people-trust",
    category: "Case Study",
    title: "Designing Analytics People Can Trust",
    summary: "How shared definitions, traceable data, accessible interfaces, and visible freshness turn reporting into a dependable product.",
    readTime: "8 min",
    number: "03",
  },
];
