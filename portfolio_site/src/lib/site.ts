/** Canonical site origin for absolute metadata URLs (OG, Twitter, etc.). */
export const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL ??
  (process.env.VERCEL_PROJECT_PRODUCTION_URL
    ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`
    : "http://localhost:3000");

/** Stable public path for the résumé PDF. Overwrite the file on updates. */
export const RESUME_HREF = "/reginald-jean-amedee-software-engineer-resume.pdf";

/** Suggested filename when the browser honors the download attribute. */
export const RESUME_DOWNLOAD_NAME = "RJ-Amedee-Software-Engineer-Resume.pdf";
