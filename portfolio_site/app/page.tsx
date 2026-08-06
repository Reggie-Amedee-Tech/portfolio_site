"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { Badge } from "@/components/ui/badge";
import { Button, buttonVariants } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { cn } from "@/lib/utils";
import { FILTERS, PROJECTS, TECH_TAGS } from "./constants";

const chipClass =
  "h-auto rounded-[3px] px-2 py-0.5 font-mono text-[10px] uppercase tracking-widest";

export default function Home() {
  const [filter, setFilter] = useState("all");

  const visible =
    filter === "all" ? PROJECTS : PROJECTS.filter((p) => p.filter === filter);

  return (
    <main>
      <section className="mx-auto max-w-[1280px] page-x pt-10 sm:pt-16 pb-10 sm:pb-12 grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
        <div>
          <div className="flex flex-wrap items-center gap-2 mb-6">
            <Badge className={cn(chipClass, "bg-primary text-primary-foreground")}>
              Full-Stack
            </Badge>
            {["TypeScript", "Python", "NLP", "YAML"].map((t) => (
              <Badge key={t} variant="outline" className={cn(chipClass, "text-foreground/60")}>
                {t}
              </Badge>
            ))}
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-[1.05] tracking-tight mb-6">
            I ship features
            <br />
            that move
            <br />
            <span className="text-primary">revenue.</span>
          </h1>

          <p className="text-muted-foreground leading-relaxed mb-8 max-w-md">
            TypeScript, Python, Next.js. 6+ years reading what stakeholders
            actually need, then building the systems that deliver it. I write
            the requirements doc and then I write the code.
          </p>

          <div className="flex flex-wrap gap-3">
            <a
              href="https://github.com/Reggie-Amedee-Tech"
              target="_blank"
              rel="noopener noreferrer"
              className={cn(
                buttonVariants({ variant: "outline", size: "cta" }),
                "w-full sm:w-auto text-center",
              )}
            >
              GitHub →
            </a>
            <Link
              href="/contact"
              className={cn(
                buttonVariants({ size: "cta" }),
                "w-full sm:w-auto text-center",
              )}
            >
              Email Me →
            </Link>
          </div>
        </div>

        <Card className="rounded gap-0 py-0 ring-border">
          <CardHeader className="border-b border-border px-4 sm:px-6 py-4">
            <div className="flex justify-between items-center gap-3">
              <CardDescription className="font-mono text-[10px] uppercase tracking-widest text-foreground/50">
                Impact — Sourced
              </CardDescription>
              <span className="font-mono text-[10px] uppercase tracking-widest text-foreground/40 shrink-0">
                Sources Below
              </span>
            </div>
          </CardHeader>
          <CardContent className="px-4 sm:px-6 pt-5 pb-2">
            {[
              {
                metric: "$100K",
                desc: "new revenue from a multi-provider SIP layer",
                source:
                  "Goodcall — Twilio decouple → 5+ enterprise sign-ups",
              },
              {
                metric: "+40%",
                desc: "engagement after a UX rebuild in Next.js",
                source:
                  "Goodcall — Figma wireframes → TypeScript UI",
              },
              {
                metric: "+34%",
                desc: "sign-up rate on a redesigned front end",
                source:
                  "HiTide Capital — campaign site rebuilt to Figma specs",
              },
            ].map(({ metric, desc, source }) => (
              <div key={metric} className="mb-5">
                <div className="flex items-start gap-3 sm:gap-4">
                  <span
                    className="text-2xl sm:text-3xl font-bold text-foreground shrink-0 leading-none"
                    style={{ fontVariantNumeric: "tabular-nums" }}
                  >
                    {metric}
                  </span>
                  <span className="text-sm text-muted-foreground leading-snug">
                    {desc}
                  </span>
                </div>
                <div className="mt-1.5 flex items-start gap-2">
                  <span className="inline-block w-3 h-px mt-2.5 shrink-0 bg-primary" />
                  <span className="font-mono text-[10px] text-foreground/40 tracking-wide leading-relaxed break-words">
                    {source}
                  </span>
                </div>
              </div>
            ))}
          </CardContent>
          <CardFooter className="border-t border-border bg-transparent px-4 sm:px-6 py-4">
            <div className="flex items-start gap-2">
              <Image
                src="/rj-amedee.jpg"
                alt="R.J. Amedee"
                width={20}
                height={20}
                className="mt-0.5 w-5 h-5 rounded-[2px] object-cover object-[50%_20%] shrink-0"
              />
              <span className="font-mono text-[10px] text-foreground/40 leading-relaxed">
                Currently apprenticing at{" "}
                <span className="text-foreground/60">718 Digital Labs</span>,
                The Knowledge House.
              </span>
            </div>
          </CardFooter>
        </Card>
      </section>

      <Separator />
      <div className="mx-auto max-w-[1280px] page-x py-3 flex flex-wrap gap-x-4 sm:gap-x-6 gap-y-2">
        {TECH_TAGS.map((t) => (
          <span
            key={t}
            className="font-mono text-[10px] uppercase tracking-widest text-foreground/50"
          >
            {t}
          </span>
        ))}
      </div>
      <Separator />

      <section className="mx-auto max-w-[1280px] page-x py-10 sm:py-14">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between mb-8">
          <span className="font-mono text-[10px] uppercase tracking-widest text-foreground/50">
            Selected Work
          </span>
          <div className="flex items-center gap-1 flex-wrap">
            {FILTERS.map((f) => (
              <Button
                key={f.value}
                type="button"
                variant="ghost"
                size="sm"
                onClick={() => setFilter(f.value)}
                className={cn(
                  "font-mono text-[10px] uppercase tracking-widest rounded-[3px]",
                  filter === f.value
                    ? "bg-muted text-foreground"
                    : "text-foreground/40",
                )}
              >
                {f.label}
              </Button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {visible.map((p) => (
            <Card key={p.file} className="rounded gap-0 py-0 ring-border overflow-hidden">
              <div className="relative h-44 bg-muted">
                <Image
                  src={p.image}
                  alt={p.imageAlt}
                  fill
                  className="object-cover object-top"
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
              </div>
              <CardHeader className="px-5 pt-5 pb-0">
                <div className="flex items-center justify-between mb-3">
                  <Badge
                    className={cn(
                      chipClass,
                      "bg-primary text-primary-foreground text-[9px] px-1.5 rounded-[2px]",
                    )}
                  >
                    {p.tag}
                  </Badge>
                  <span className="font-mono text-[10px] text-foreground/30">
                    {p.year}
                  </span>
                </div>
                <CardTitle className="font-semibold text-base text-foreground">
                  {p.title}
                </CardTitle>
                <CardDescription className="text-sm text-muted-foreground leading-snug">
                  {p.desc}
                </CardDescription>
              </CardHeader>
              <CardContent className="px-5 pb-5 pt-4">
                <Link
                  href="/record"
                  className="font-mono text-[10px] uppercase tracking-widest text-primary hover:text-foreground/80 transition-colors"
                >
                  Open File 00{p.file} →
                </Link>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      <footer className="bg-card border-t border-border">
        <div className="mx-auto max-w-[1280px] page-x py-8 sm:py-10 flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-6">
          <div>
            <h2 className="text-xl sm:text-2xl font-bold mb-1">Hiring for full-stack?</h2>
            <p className="text-sm text-muted-foreground">
              The résumé is in the top-right on every page. Otherwise, just
              email me.
            </p>
          </div>
          <Link
            href="/contact"
            className={cn(buttonVariants({ size: "cta" }), "shrink-0 w-full sm:w-auto text-center")}
          >
            Email Me →
          </Link>
        </div>
      </footer>
    </main>
  );
}
