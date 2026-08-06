import Image from "next/image";
import Link from "next/link";
import { buttonVariants } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
} from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { cn } from "@/lib/utils";
import { AT_A_GLANCE, SECTIONS } from "./constants";

export default function AboutPage() {
  return (
    <main>
      <div className="mx-auto max-w-[1280px] page-x pt-8">
        <div className="flex items-center gap-2 font-mono text-[10px] uppercase tracking-widest text-foreground/40 mb-6">
          <span className="text-primary">About</span>
          <span>→</span>
          <span>File 000</span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-12 mb-12 sm:mb-16">
          <div>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-[1.1] mb-6 sm:mb-8">
              I came to engineering
              <br />
              through the business side,
              <br />
              and it shows.
            </h1>

            <div className="space-y-5 text-muted-foreground leading-relaxed mb-10 max-w-lg">
              <p>
                For three years at Vimeo I sat with enterprise customers and
                worked out what they actually needed — then watched the gap
                between that and what got built. I learned to read a
                requirement, and I got tired of handing it off.
              </p>
              <p>
                So I learned to build. Two years in, I&apos;ve shipped a
                multi-provider SIP layer that unlocked six figures of revenue,
                data models that hold up across a dozen client use cases, and
                front ends that moved sign-up rates by a third. The habit from
                account management stuck: I ask what the number is before I
                write the ticket.
              </p>
              <p>
                Right now I&apos;m apprenticing at 718 Digital Labs, the product
                team inside The Knowledge House, building real internal tools.
                I&apos;m looking for a full-stack role where requirements are
                messy and someone has to own both halves of the problem.
              </p>
            </div>

            <div className="flex flex-wrap gap-3">
              <Link
                href="/record"
                className={cn(
                  buttonVariants({ variant: "outline", size: "cta" }),
                  "w-full sm:w-auto text-center",
                )}
              >
                See the Record →
              </Link>
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

          <div className="flex flex-col gap-5">
            <div className="relative overflow-hidden rounded border border-border aspect-[4/5] w-full">
              <Image
                src="/rj-amedee.jpg"
                alt="R.J. Amedee"
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 40vw"
                className="object-cover object-[50%_20%]"
              />
            </div>

            <Card className="rounded gap-0 py-0 ring-border">
              <CardHeader className="px-5 pt-5 pb-0">
                <CardDescription className="font-mono text-[10px] uppercase tracking-widest text-foreground/40">
                  At a Glance
                </CardDescription>
              </CardHeader>
              <CardContent className="px-5 py-4 space-y-3">
                {AT_A_GLANCE.map(({ label, value }) => (
                  <div
                    key={label}
                    className="flex items-center justify-between gap-4"
                  >
                    <span className="font-mono text-[10px] uppercase tracking-widest text-foreground/40 shrink-0">
                      {label}
                    </span>
                    <span className="text-sm font-medium text-foreground text-right">
                      {value}
                    </span>
                  </div>
                ))}
              </CardContent>
            </Card>
          </div>
        </div>

        <Separator />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 py-10">
          {SECTIONS.map((s) => (
            <div key={s.num}>
              <p className="font-mono text-[10px] uppercase tracking-widest text-primary mb-3">
                {s.num} — {s.label}
              </p>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {s.body}
              </p>
            </div>
          ))}
        </div>
      </div>

      <footer className="bg-card border-t border-border mt-14">
        <div className="mx-auto max-w-[1280px] page-x py-8 sm:py-10 flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-6">
          <div>
            <h2 className="text-xl sm:text-2xl font-bold mb-1">
              Questions I didn&apos;t answer here?
            </h2>
            <p className="text-sm text-muted-foreground">
              I reply within a day.
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
