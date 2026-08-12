import { H3, P } from "@/components/ui";
import { SECTIONS } from "../constants";

export function AboutSections() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 py-10">
      {SECTIONS.map((s) => (
        <section key={s.num}>
          <H3 className="font-mono text-[10px] uppercase tracking-widest text-primary mb-3 font-normal">
            {s.num} — {s.label}
          </H3>
          <P className="text-sm">{s.body}</P>
        </section>
      ))}
    </div>
  );
}
