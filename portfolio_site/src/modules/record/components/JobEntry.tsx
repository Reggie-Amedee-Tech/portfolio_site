import { Badge, H3, Muted, Small } from "@/components/ui";
import { cn } from "@/lib/utils";
import { CHIP_CLASS, type Job } from "../constants";

type JobEntryProps = {
  job: Job;
  index: number;
};

export function JobEntry({ job, index }: JobEntryProps) {
  return (
    <div id={job.id} className="scroll-mt-20 py-6 sm:py-8">
      <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between mb-4">
        <div className="min-w-0">
          <div className="flex flex-wrap items-center gap-x-3 gap-y-1.5 mb-0.5">
            <Small className="text-foreground/60">
              {String(index + 1).padStart(2, "0")}
            </Small>
            <H3>{job.company}</H3>
            <Badge
              className={cn(
                CHIP_CLASS,
                job.isHeadline
                  ? "bg-primary text-primary-foreground"
                  : "bg-muted text-foreground",
              )}
            >
              {job.outcome}
            </Badge>
          </div>
          <Small className="text-foreground/60">{job.role}</Small>
        </div>
        <div className="flex flex-wrap items-center gap-x-4 gap-y-1 sm:justify-end shrink-0">
          <Small className="text-foreground/60 normal-case tracking-normal">
            {job.location}
          </Small>
          <Small className="text-foreground/60 normal-case tracking-normal">
            {job.dates}
          </Small>
        </div>
      </div>

      <ul className="space-y-1 pl-0 sm:pl-8">
        {job.bullets.map((b, bulletIndex) => (
          <li
            key={`${job.company}-${job.dates}-bullet-${bulletIndex}`}
            className="group flex items-start gap-3 rounded-[3px] px-2.5 py-1.5 -mx-2.5 cursor-default transition-colors hover:bg-primary/10"
          >
            <span className="mt-2 w-1 h-1 rounded-full shrink-0 bg-primary motion-safe:transition-transform motion-safe:group-hover:scale-150" />
            <Muted className="leading-relaxed transition-colors group-hover:text-foreground/80">
              {b}
            </Muted>
          </li>
        ))}
      </ul>
    </div>
  );
}
