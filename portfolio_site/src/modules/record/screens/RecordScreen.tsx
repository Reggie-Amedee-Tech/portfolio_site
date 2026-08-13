import { Separator } from "@/components/ui";
import { SiteCtaFooter } from "@/components/shared";
import {
  EducationPanel,
  JobEntry,
  RecordHeader,
  SkillsPanel,
} from "../components";
import { JOBS } from "../constants";

export function RecordScreen() {
  return (
    <main>
      <div className="mx-auto max-w-[1280px] page-x pt-8 pb-4">
        <RecordHeader />

        <div>
          {JOBS.map((job, i) => (
            <div key={job.id}>
              <JobEntry job={job} index={i} />
              {i < JOBS.length - 1 && <Separator />}
            </div>
          ))}
        </div>

        <Separator className="mt-0" />
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 py-10 sm:py-12">
          <SkillsPanel />
          <EducationPanel />
        </div>
      </div>

      <SiteCtaFooter
        title="Want this as one page?"
        body="Download my résumé as a PDF at the top right corner of every page."
      />
    </main>
  );
}
