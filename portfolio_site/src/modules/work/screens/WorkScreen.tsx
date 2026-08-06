"use client";

import { useState } from "react";
import { SiteCtaFooter } from "@/components/shared";
import { Separator } from "@/components/ui/separator";
import {
  ImpactCard,
  ProjectCard,
  ProjectFilters,
  TechTagsBar,
  WorkHero,
} from "../components";
import { PROJECTS, type ProjectFilter } from "../constants";

export function WorkScreen() {
  const [filter, setFilter] = useState<ProjectFilter>("all");

  const visible =
    filter === "all" ? PROJECTS : PROJECTS.filter((p) => p.filter === filter);

  return (
    <main>
      <section className="mx-auto max-w-[1280px] page-x pt-10 sm:pt-16 pb-10 sm:pb-12 grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
        <WorkHero />
        <ImpactCard />
      </section>

      <Separator />
      <TechTagsBar />
      <Separator />

      <section className="mx-auto max-w-[1280px] page-x py-10 sm:py-14">
        <ProjectFilters filter={filter} onFilterChange={setFilter} />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {visible.map((p) => (
            <ProjectCard key={p.file} project={p} />
          ))}
        </div>
      </section>

      <SiteCtaFooter
        title="Hiring for full-stack?"
        body="The résumé is in the top-right on every page. Otherwise, just email me."
      />
    </main>
  );
}
