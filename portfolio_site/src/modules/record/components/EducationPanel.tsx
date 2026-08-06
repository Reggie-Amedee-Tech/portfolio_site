import { H4, Small } from "@/components/ui/typography";
import { EDUCATION } from "../constants";

export function EducationPanel() {
  return (
    <div>
      <Small className="text-foreground/40 mb-6 block">
        Education &amp; Collaborators
      </Small>
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
    </div>
  );
}
