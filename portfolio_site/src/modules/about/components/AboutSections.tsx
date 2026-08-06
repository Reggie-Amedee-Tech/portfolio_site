import { P, Small } from "@/components/ui/typography";
import { SECTIONS } from "../constants";

export function AboutSections() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 py-10">
      {SECTIONS.map((s) => (
        <div key={s.num}>
          <Small className="text-primary mb-3 block">
            {s.num} — {s.label}
          </Small>
          <P className="text-sm">{s.body}</P>
        </div>
      ))}
    </div>
  );
}
