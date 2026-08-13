import type { Metadata } from "next";
import type { ReactNode } from "react";
import { JetBrains_Mono, Space_Grotesk } from "next/font/google";
import { NuqsAdapter } from "nuqs/adapters/next/app";
import { Toaster } from "sonner";
import { Nav } from "@/components/shared";
import { SITE_URL } from "@/lib/site";
import { cn } from "@/lib/utils";
import "./globals.css";

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: "R.J. Amedee — Full-Stack Engineer",
  description:
    "TypeScript, Python, Next.js. Full-stack engineer shipping features that move revenue.",
  openGraph: {
    title: "R.J. Amedee — Full-Stack Engineer",
    description:
      "TypeScript, Python, Next.js. Full-stack engineer shipping features that move revenue.",
    images: [{ url: "/og.jpg", width: 1200, height: 630, alt: "R.J. Amedee" }],
  },
  twitter: {
    card: "summary_large_image",
    images: ["/og.jpg"],
  },
};

console.log("SITE_URL", SITE_URL);

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={cn(
        "dark h-full antialiased font-sans",
        spaceGrotesk.variable,
        jetbrainsMono.variable,
      )}
    >
      <body className="min-h-full flex flex-col bg-background text-foreground">
        <NuqsAdapter>
          <Nav />
          {children}
          <Toaster theme="dark" position="bottom-right" richColors />
        </NuqsAdapter>
      </body>
    </html>
  );
}
