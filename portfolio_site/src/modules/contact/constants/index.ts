export const COPY_EMAIL_TIMEOUT_MS = 2000;
export const FORM_SUCCESS_TIMEOUT_MS = 3000;

export const CONTACT_EMAIL = "jeantechnical1992@gmail.com";

export const CONTACTS = [
  {
    label: "Email",
    value: CONTACT_EMAIL,
    action: "Copy",
    href: null as string | null,
  },
  {
    label: "LinkedIn",
    value: "/in/reginaldamedee",
    action: "Open ↗",
    href: "https://linkedin.com/in/reginaldamedee",
  },
  {
    label: "GitHub",
    value: "Reggie-Amedee-Tech",
    sub: "Most production work lives in private repos",
    action: "Open ↗",
    href: "https://github.com/Reggie-Amedee-Tech",
  },
];

export type ContactItem = (typeof CONTACTS)[number];

export const FOOTER_TECH_TAGS = [
  "TypeScript",
  "Python",
  "Next.js",
  "PostgreSQL",
  "AWS",
] as const;
