"use client";

import { Badge } from "@/components/ui/badge";
import { Small } from "@/components/ui/typography";
import {
  ContactAvailability,
  ContactChannels,
  ContactForm,
  ContactHero,
} from "../components";
import { FOOTER_TECH_TAGS } from "../constants";

export function ContactScreen() {
  return (
    <main>
      <div className="mx-auto max-w-[1280px] page-x pt-8 pb-16">
        <div className="flex items-center gap-2 mb-6">
          <Small className="text-primary">Contact</Small>
          <Small className="text-foreground/40">→</Small>
          <Small className="text-foreground/40">Open Channel</Small>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-12">
          <div>
            <ContactHero />
            <ContactChannels />
            <ContactAvailability />
          </div>
          <ContactForm />
        </div>
      </div>

      <footer className="border-t border-border">
        <div className="mx-auto max-w-[1280px] page-x py-4 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
          <div className="flex flex-wrap items-center gap-x-4 gap-y-1">
            <Small className="text-foreground/40">R.J. Amedee</Small>
            <span className="text-foreground/20 hidden sm:inline">·</span>
            <Small className="text-foreground/40">Software Engineer</Small>
            <span className="text-foreground/20 hidden sm:inline">·</span>
            <Small className="text-foreground/40">New York</Small>
          </div>
          <div className="flex flex-wrap gap-2">
            {FOOTER_TECH_TAGS.map((t) => (
              <Badge
                key={t}
                variant="outline"
                className="h-auto rounded-[2px] px-2 py-0.5 font-mono text-[9px] uppercase tracking-widest text-foreground/40"
              >
                {t}
              </Badge>
            ))}
          </div>
        </div>
      </footer>
    </main>
  );
}
