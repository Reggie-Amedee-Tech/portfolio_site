import { Small } from "@/components/ui";
import { TECH_TAGS } from "../constants";

const TAG_STAGGER_MS = 20;

export function TechTagsBar() {
  return (
    <div className="mx-auto max-w-[1280px] page-x py-3 flex flex-wrap gap-x-4 sm:gap-x-6 gap-y-2">
      {TECH_TAGS.map((t, i) => (
        <Small
          key={t}
          className="cursor-default transition-colors hover:text-primary motion-safe:animate-tag-fade-in"
          style={{ animationDelay: `${i * TAG_STAGGER_MS}ms` }}
        >
          {t}
        </Small>
      ))}
    </div>
  );
}
