import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { buttonVariants } from "@/components/ui/button";
import { H1, Lead } from "@/components/ui/typography";
import { cn } from "@/lib/utils";
import { CHIP_CLASS, HERO_TAGS } from "../constants";

export function WorkHero() {
  return (
    <div>
      <div className="flex flex-wrap items-center gap-2 mb-6">
        <Badge className={cn(CHIP_CLASS, "bg-primary text-primary-foreground")}>
          Full-Stack
        </Badge>
        {HERO_TAGS.map((t) => (
          <Badge
            key={t}
            variant="outline"
            className={cn(CHIP_CLASS, "text-foreground/60")}
          >
            {t}
          </Badge>
        ))}
      </div>

      <H1 className="text-4xl sm:text-5xl lg:text-6xl leading-[1.05] mb-6">
        I ship features
        <br />
        that move
        <br />
        <span className="text-primary">revenue.</span>
      </H1>

      <Lead className="mb-8">
        TypeScript, Python, Next.js. 6+ years reading what stakeholders actually
        need, then building the systems that deliver it. I write the
        requirements doc and then I write the code.
      </Lead>

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
  );
}
