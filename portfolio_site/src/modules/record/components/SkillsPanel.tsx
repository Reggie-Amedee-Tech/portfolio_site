import { Badge } from "@/components/ui/badge";
import { Small } from "@/components/ui/typography";
import { SKILLS } from "../constants";

export function SkillsPanel() {
  return (
    <div>
      <Small className="text-foreground/40 mb-6 block">
        Skills &amp; Technologies
      </Small>
      <div className="space-y-4">
        {Object.entries(SKILLS).map(([cat, tags]) => (
          <div
            key={cat}
            className="flex flex-col gap-2 sm:flex-row sm:flex-wrap sm:items-center"
          >
            <Small className="text-foreground/40 sm:w-20 shrink-0">{cat}</Small>
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
  );
}
