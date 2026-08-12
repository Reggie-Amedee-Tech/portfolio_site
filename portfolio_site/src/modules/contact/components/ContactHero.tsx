import { H1, Lead } from "@/components/ui";

export function ContactHero() {
  return (
    <div>
      <H1 className="mb-6">
        Hiring for full-stack?
        <br />
        Let&apos;s talk.
      </H1>

      <Lead className="mb-10">
        Fastest route is email — I answer within a day. If you&apos;d rather
        just take the résumé and read it later, it&apos;s in the top-right on
        every page.
      </Lead>
    </div>
  );
}
