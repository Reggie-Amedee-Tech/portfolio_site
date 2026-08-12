export const CHIP_CLASS =
  "h-auto rounded-[3px] px-2 py-0.5 font-mono text-[10px] uppercase tracking-widest";

export const HERO_TAGS = ["TypeScript", "Python", "NLP", "YAML"] as const;

export const IMPACT_METRICS = [
  {
    metric: "$100K",
    desc: "new revenue from a multi-provider SIP layer",
    source: "Goodcall — Twilio decouple → 5+ enterprise sign-ups",
  },
  {
    metric: "+40%",
    desc: "engagement after a UX rebuild in Next.js",
    source: "Goodcall — Figma wireframes → TypeScript UI",
  },
  {
    metric: "+34%",
    desc: "sign-up rate on a redesigned front end",
    source: "HiTide Capital — campaign site rebuilt to Figma specs",
  },
] as const;

export const TECH_TAGS = [
  "TypeScript",
  "Python",
  "Next.js",
  "NestJS",
  "PostgreSQL",
  "Prisma",
  "Redis",
  "AWS",
  "Docker",
  "Cypress",
];

export const PROJECTS = [
  {
    tag: "VOICE",
    year: "2025",
    title: "Provider-agnostic voice",
    desc: "Decoupled Goodcall from Twilio onto a multi-provider SIP layer — $100K in new revenue.",
    file: "001",
    recordId: "goodcall",
    filter: "backend",
    image: "/goodcall-technology.png",
    imageAlt: "Good Call Technologies homepage",
  },
  {
    tag: "SCALE",
    year: "2024",
    title: "Schemas that survive clients",
    desc: "Prisma models, RBAC, Redis caching, and Cypress coverage at WeBuild.",
    file: "002",
    recordId: "webuild",
    filter: "backend",
    image: "/webuild-solutions.png",
    imageAlt: "WeBuild Solutions property management dashboard",
  },
  {
    tag: "GROWTH",
    year: "2024",
    title: "Campaign front end, rebuilt",
    desc: "Next.js rebuild to Figma specs at HiTide Capital — 34% surge in sign-ups.",
    file: "003",
    recordId: "hitide",
    filter: "frontend",
    image: "/hitide.png",
    imageAlt: "HiTide Capital campaign homepage",
  },
];

export const FILTERS = [
  { label: "All", value: "all" },
  { label: "Database", value: "backend" },
  { label: "Frontend", value: "frontend" },
] as const;

export type ProjectFilter = (typeof FILTERS)[number]["value"];
export type Project = (typeof PROJECTS)[number];
