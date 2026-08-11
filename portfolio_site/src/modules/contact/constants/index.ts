import type { ContactMethod } from "../types";

export const COPY_EMAIL_TIMEOUT_MS = 2000;

export const CONTACT_EMAIL = "jeantechnical1992@gmail.com";

export const CONTACTS: ContactMethod[] = [
  {
    label: "Email",
    value: CONTACT_EMAIL,
    action: "Copy",
    href: null,
  },
  {
    label: "LinkedIn",
    value: "/in/reginaldamedee",
    action: "Open ↗",
    href: "https://www.linkedin.com/in/reginaldamedee/",
  },
  {
    label: "GitHub",
    value: "Reggie-Amedee-Tech",
    sub: "Most production work lives in private repos",
    action: "Open ↗",
    href: "https://github.com/Reggie-Amedee-Tech",
  },
];

export const FOOTER_TECH_TAGS = [
  "TypeScript",
  "Python",
  "Next.js",
  "PostgreSQL",
  "AWS",
] as const;
