import { Badge, H2, Small } from "@/components/ui";
import { SKILLS } from "../constants";

export function SkillsPanel() {
  return (
    <section>
      <H2 className="font-mono text-[10px] uppercase tracking-widest text-foreground/60 mb-6 font-normal">
        Skills &amp; Technologies
      </H2>
      <div className="space-y-4">
        {Object.entries(SKILLS).map(([cat, tags]) => (
          <div
            key={cat}
            className="flex flex-col gap-2 sm:flex-row sm:flex-wrap sm:items-center"
          >
            <Small className="text-foreground/60 sm:w-20 shrink-0">{cat}</Small>
            <div className="flex flex-wrap gap-1.5">
              {tags.map((t) => (
                <Badge
                  key={t}
                  variant="outline"
                  className="h-auto rounded-[3px] px-2 py-0.5 font-mono text-[10px] uppercase tracking-widest text-foreground/70 cursor-default transition-colors hover:border-primary/50 hover:text-foreground"
                >
                  {t}
                </Badge>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
