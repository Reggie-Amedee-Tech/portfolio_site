import { Small } from "@/components/ui/typography";
import { TECH_TAGS } from "../constants";

export function TechTagsBar() {
  return (
    <div className="mx-auto max-w-[1280px] page-x py-3 flex flex-wrap gap-x-4 sm:gap-x-6 gap-y-2">
      {TECH_TAGS.map((t) => (
        <Small key={t}>{t}</Small>
      ))}
    </div>
  );
}
