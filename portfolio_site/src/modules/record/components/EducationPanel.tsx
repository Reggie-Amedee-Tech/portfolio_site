import { H2, H4, Small } from "@/components/ui";
import { EDUCATION } from "../constants";

export function EducationPanel() {
  return (
    <section>
      <H2 className="font-mono text-[10px] uppercase tracking-widest text-foreground/40 mb-6 font-normal">
        Education &amp; Collaborators
      </H2>
      <div className="space-y-4">
        {EDUCATION.map((e) => (
          <div
            key={e.name}
            className="flex flex-col gap-1 sm:flex-row sm:items-start sm:justify-between sm:gap-4"
          >
            <div className="min-w-0">
              <H4>{e.name}</H4>
              <Small className="text-foreground/40 mt-0.5 block">
                {e.role}
              </Small>
            </div>
            <Small className="text-foreground/40 shrink-0 normal-case tracking-normal">
              {e.dates}
            </Small>
          </div>
        ))}
      </div>
    </section>
  );
}
