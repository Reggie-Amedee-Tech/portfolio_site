export const CHIP_CLASS =
  "h-auto rounded-[2px] px-1.5 py-0.5 font-mono text-[9px] uppercase tracking-widest font-semibold";

export const JOBS = [
  {
    id: "goodcall",
    company: "Goodcall Technology",
    role: "Software Engineer (Contract)",
    dates: "Feb 2025 – Present",
    location: "Remote",
    outcome: "$100K",
    isHeadline: true,
    bullets: [
      "Developed and implemented UI in Next.js using TypeScript components based on Figma wireframes, improving website engagement by 40% through data-driven UX optimizations.",
      "Architected and led the delivery of custom product features by performing rigorous requirement analysis, directly increasing platform retention and adoption across high-value enterprise accounts.",
      "Refactored platform architecture to decouple core services from Twilio, engineering a multi-provider SIP integration layer; this expanded API compatibility, resulting in $100,000 in new revenue and 5+ enterprise sign-ups.",
    ],
  },
  {
    id: "webuild",
    company: "WeBuild Solutions",
    role: "Software Engineer (Contract)",
    dates: "Sep 2024 – Present",
    location: "Remote",
    outcome: "SCALE",
    isHeadline: true,
    bullets: [
      "Architected robust data models using Prisma ORM and PostgreSQL, tailoring schema designs to meet diverse client use cases and ensure data integrity.",
      "Engineered end-to-end features, developing scalable backend services and responsive front-end components to fulfill all defined user stories.",
      "Implemented Role-Based Access Control (RBAC) principles to secure application layers and manage complex user permission levels.",
      "Enhanced software reliability by integrating comprehensive testing suites, including Cypress for end-to-end workflows and dedicated backend unit testing.",
      "Refactored core services to include Redis caching, rate limiting, and pagination, significantly improving application scalability for high-traffic endpoints.",
    ],
  },
  {
    id: "hitide",
    company: "HiTide Capital",
    role: "Software Engineer (Contract)",
    dates: "May 2024 – Aug 2024",
    location: "Remote",
    outcome: "+34%",
    isHeadline: true,
    bullets: [
      "Revamped front-end application written in Next.js to meet marketing campaign needs using Figma specs, resulting in a 34% surge in sign-up rates.",
      "Resolved critical bugs throughout the application and added new features and Firebase integrations to the NestJS backend, leading to a notable uptick in feature integrations.",
      "Refactored stale code modules to enhance code readability, reusability, and security — improving application performance and modularity.",
    ],
  },
  {
    id: "afreebird",
    company: "AFreeBird.org",
    role: "Software Engineer (Volunteer)",
    dates: "Feb 2023 – Jun 2023",
    location: "Remote",
    outcome: "$10K+",
    isHeadline: false,
    bullets: [
      "Spearheaded the development of a newsletter generator application, achieving annual cost savings of over $10,000.",
      "Managed the entire product development lifecycle, ensuring seamless execution of deadlines and key milestones.",
      "Partnered with stakeholders to translate requirements into Python data models to align the back-end architecture with system design documentation.",
    ],
  },
  {
    id: "vimeo",
    company: "Vimeo",
    role: "Account Manager",
    dates: "Jul 2019 – Jun 2022",
    location: "New York City",
    outcome: "$1M+",
    isHeadline: false,
    bullets: [
      "Strategically recommended brand products based on historical usage data, effectively showcasing ROI and overcoming objections to drive over $1,000,000 in upsell revenue.",
      "Performed deep-dive analysis on account data, including usage trends, sales metrics, and client feedback, to optimize account health and align technical solutions with customer needs.",
      "Led quarterly business reviews for high-value clients, translating complex performance datasets into strategic recommendations and actionable KPIs to drive measurable year-over-year growth.",
    ],
  },
];

export type Job = (typeof JOBS)[number];

export const SKILLS = {
  Languages: ["TypeScript", "Python", "SQL", "HTML", "CSS"],
  Stack: [
    "React",
    "Next.js",
    "NestJS",
    "Node.js",
    "Flask",
    "Tailwind",
    "PostgreSQL",
    "MongoDB",
    "Prisma",
    "Redis",
  ],
  Tools: ["AWS", "Docker", "Git", "Postman", "Storybook", "Cypress", "Jupyter"],
};

export const EDUCATION = [
  {
    name: "The Knowledge House",
    role: "Innovation Fellowship — Data Science",
    dates: "Sep 2026",
  },
  {
    name: "Major League Hacking / Meta",
    role: "Production Engineer Fellowship",
    dates: "Jun 2023",
  },
  {
    name: "Coding Dojo",
    role: "Certificate of Completion — MERN Stack",
    dates: "Jun 2021",
  },
  {
    name: "St. John's University",
    role: "B.A. English Studies",
    dates: "Dec 2015",
  },
];
