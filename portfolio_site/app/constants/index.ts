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
