import type { Metadata } from "next";
import { JetBrains_Mono, Space_Grotesk } from "next/font/google";
import Nav from "@/components/Nav";
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
  title: "R.J. Amedee — Full-Stack Engineer",
  description:
    "TypeScript, Python, Next.js. Full-stack engineer shipping features that move revenue.",
  openGraph: {
    title: "R.J. Amedee — Full-Stack Engineer",
    description:
      "TypeScript, Python, Next.js. Full-stack engineer shipping features that move revenue.",
    images: [{ url: "/rj-amedee.jpg", width: 1024, height: 1024, alt: "R.J. Amedee" }],
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
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
        <Nav />
        {children}
      </body>
    </html>
  );
}
