import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { Button, buttonVariants } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { cn } from "@/lib/utils";
import { EDUCATION, JOBS, SKILLS } from "./constants";

const chipClass =
  "h-auto rounded-[2px] px-1.5 py-0.5 font-mono text-[9px] uppercase tracking-widest font-semibold";

export default function RecordPage() {
  return (
    <main>
      <div className="mx-auto max-w-[1280px] page-x pt-8 pb-4">
        <div className="flex items-center gap-2 font-mono text-[10px] uppercase tracking-widest text-foreground/40 mb-6">
          <Link href="/" className="hover:text-foreground/70 transition-colors">
            ← Work
          </Link>
          <span>/</span>
          <span className="text-foreground/60">Record</span>
          <span className="hidden sm:inline">/</span>
          <span className="hidden sm:inline text-foreground/40">All</span>
        </div>

        <div className="flex items-start justify-between gap-4 mb-8 sm:mb-10">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight max-w-xl">
            Everything I&apos;ve shipped,
            <br />
            with the receipts.
          </h1>
          <div className="hidden lg:flex items-center gap-1 mt-2">
            {["All", "Description", "Dates"].map((f) => (
              <Button
                key={f}
                type="button"
                variant="ghost"
                size="sm"
                className="font-mono text-[10px] uppercase tracking-widest text-foreground/40"
              >
                {f}
              </Button>
            ))}
          </div>
        </div>

        <div>
          {JOBS.map((job, i) => (
            <div key={job.company}>
              <div className="py-6 sm:py-8">
                <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between mb-4">
                  <div className="min-w-0">
                    <div className="flex flex-wrap items-center gap-x-3 gap-y-1.5 mb-0.5">
                      <span className="font-mono text-[10px] uppercase tracking-widest text-foreground/40">
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      <h2 className="font-semibold text-base sm:text-lg text-foreground">
                        {job.company}
                      </h2>
                      <Badge
                        className={cn(
                          chipClass,
                          job.outcomeCyan
                            ? "bg-primary text-primary-foreground"
                            : "bg-muted text-foreground",
                        )}
                      >
                        {job.outcome}
                      </Badge>
                    </div>
                    <p className="font-mono text-[10px] uppercase tracking-widest text-foreground/40">
                      {job.role}
                    </p>
                  </div>
                  <div className="flex flex-wrap items-center gap-x-4 gap-y-1 sm:justify-end shrink-0">
                    <span className="font-mono text-[10px] text-foreground/40">
                      {job.location}
                    </span>
                    <span className="font-mono text-[10px] text-foreground/40">
                      {job.dates}
                    </span>
                  </div>
                </div>

                <ul className="space-y-2 pl-0 sm:pl-8">
                  {job.bullets.map((b) => (
                    <li key={b} className="flex items-start gap-3">
                      <span className="mt-2 w-1 h-1 rounded-full shrink-0 bg-primary" />
                      <span className="text-sm text-muted-foreground leading-relaxed">
                        {b}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
              {i < JOBS.length - 1 && <Separator />}
            </div>
          ))}
        </div>

        <Separator className="mt-0" />
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 py-10 sm:py-12">
          <div>
            <p className="font-mono text-[10px] uppercase tracking-widest text-foreground/40 mb-6">
              Skills &amp; Technologies
            </p>
            <div className="space-y-4">
              {Object.entries(SKILLS).map(([cat, tags]) => (
                <div key={cat} className="flex flex-col gap-2 sm:flex-row sm:flex-wrap sm:items-center">
                  <span className="font-mono text-[10px] uppercase tracking-widest text-foreground/40 sm:w-20 shrink-0">
                    {cat}
                  </span>
                  <div className="flex flex-wrap gap-1.5">
                    {tags.map((t) => (
                      <Badge
                        key={t}
                        variant="outline"
                        className="h-auto rounded-[3px] px-2 py-0.5 font-mono text-[10px] uppercase tracking-widest text-foreground/70"
                      >
                        {t}
                      </Badge>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div>
            <p className="font-mono text-[10px] uppercase tracking-widest text-foreground/40 mb-6">
              Education &amp; Collaborators
            </p>
            <div className="space-y-4">
              {EDUCATION.map((e) => (
                <div
                  key={e.name}
                  className="flex flex-col gap-1 sm:flex-row sm:items-start sm:justify-between sm:gap-4"
                >
                  <div className="min-w-0">
                    <p className="text-sm font-medium text-foreground">
                      {e.name}
                    </p>
                    <p className="font-mono text-[10px] uppercase tracking-widest text-foreground/40 mt-0.5">
                      {e.role}
                    </p>
                  </div>
                  <span className="font-mono text-[10px] text-foreground/40 shrink-0">
                    {e.dates}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <footer className="bg-card border-t border-border">
        <div className="mx-auto max-w-[1280px] page-x py-8 sm:py-10 flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-6">
          <div>
            <h2 className="text-xl sm:text-2xl font-bold mb-1">Want this as one page?</h2>
            <p className="text-sm text-muted-foreground">
              The PDF is in the top-right on every page. Same data,
              printer-friendly.
            </p>
          </div>
          <Link
            href="/contact"
            className={cn(
              buttonVariants({ size: "cta" }),
              "shrink-0 w-full sm:w-auto text-center",
            )}
          >
            Email Me →
          </Link>
        </div>
      </footer>
    </main>
  );
}
