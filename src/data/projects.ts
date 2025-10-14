export type Project={
  title:string
  description:string
  tech:string[]
  image:string
  link:string
}

export const projects:Project[]=[
  {
    title:"LearnKit Builder (Public Demo)",
    description:"Modular course builder with GrapesJS, live variables, and xAPI tracking; SCORM export via JSZip.",
    tech:["React","GrapesJS","xAPI","JSZip"],
    image:"https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=1200&auto=format&fit=crop",
    link:"https://github.com/dgutensohn03/LearnKit"
  },
  {
    title:"xAPI Analytics Dashboard",
    description:"Full‑stack dashboard visualizing learner interactions. REST API + Postgres + Plotly charts.",
    tech:["React","Express","PostgreSQL","Plotly"],
    image:"https://images.unsplash.com/photo-1454165205744-3b78555e5572?q=80&w=1200&auto=format&fit=crop",
    link:"https://github.com/dgutensohn03"
  },
  {
    title:"OilMaster Course (Case Study)",
    description:"Large‑scale multi‑language eLearning with custom SCORM/xAPI integration and performance optimizations.",
    tech:["Storyline","JavaScript","SCORM","xAPI"],
    image:"https://images.unsplash.com/photo-1515879218367-8466d910aaa4?q=80&w=1200&auto=format&fit=crop",
    link:"https://github.com/dgutensohn03/OilMaster"
  },
  {
    title:"Valvoline VCert (Case Study)",
    description:"Training course with tracking and analytics; responsive UI.",
    tech:["React","SCORM","xAPI"],
    image:"https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=1200&auto=format&fit=crop",
    link:"https://github.com/dgutensohn03/VCert"
  }
]
