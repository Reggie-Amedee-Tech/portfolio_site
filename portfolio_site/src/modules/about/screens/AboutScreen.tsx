import Image from "next/image";
import { SiteCtaFooter } from "@/components/shared";
import { Separator } from "@/components/ui/separator";
import { Small } from "@/components/ui/typography";
import { AboutHero, AboutSections, AtAGlanceCard } from "../components";

export function AboutScreen() {
  return (
    <main>
      <div className="mx-auto max-w-[1280px] page-x pt-8">
        <div className="flex items-center gap-2 mb-6">
          <Small className="text-primary">About</Small>
          <Small className="text-foreground/40">→</Small>
          <Small className="text-foreground/40">File 000</Small>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-12 mb-12 sm:mb-16">
          <AboutHero />

          <div className="flex flex-col gap-5">
            <div className="relative overflow-hidden rounded border border-border aspect-[4/5] w-full">
              <Image
                src="/rj-amedee.jpg"
                alt="R.J. Amedee"
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 40vw"
                className="object-cover object-[50%_20%]"
              />
            </div>
            <AtAGlanceCard />
          </div>
        </div>

        <Separator />
        <AboutSections />
      </div>

      <SiteCtaFooter
        className="mt-14"
        title="Questions I didn't answer here?"
        body="I reply within a day."
      />
    </main>
  );
}
