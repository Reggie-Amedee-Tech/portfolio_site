import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui";
import Image from "next/image";
import { IMPACT_METRICS } from "../constants";

export function ImpactCard() {
  return (
    <Card className="rounded gap-0 py-0 ring-border">
      <CardHeader className="border-b border-border px-4 sm:px-6 py-4">
        <div className="flex justify-between items-center gap-3">
          <CardTitle className="font-mono text-[10px] uppercase tracking-widest text-foreground/50 font-normal">
            Impact — Sourced
          </CardTitle>
          <span className="font-mono text-[10px] uppercase tracking-widest text-foreground/40 shrink-0">
            Sources Below
          </span>
        </div>
      </CardHeader>
      <CardContent className="px-4 sm:px-6 pt-5 pb-2">
        {IMPACT_METRICS.map(({ metric, desc, source }, index) => (
          <div key={`${metric}-${source}-${index}`} className="mb-5">
            <div className="flex items-start gap-3 sm:gap-4">
              <span
                className="text-2xl sm:text-3xl font-bold text-foreground shrink-0 leading-none"
                style={{ fontVariantNumeric: "tabular-nums" }}
              >
                {metric}
              </span>
              <span className="text-sm text-muted-foreground leading-snug">
                {desc}
              </span>
            </div>
            <div className="mt-1.5 flex items-start gap-2">
              <span className="inline-block w-3 h-px mt-2.5 shrink-0 bg-primary" />
              <span className="font-mono text-[10px] text-foreground/40 tracking-wide leading-relaxed break-words">
                {source}
              </span>
            </div>
          </div>
        ))}
      </CardContent>
      <CardFooter className="border-t border-border bg-transparent px-4 sm:px-6 py-4">
        <div className="flex items-start gap-2">
          <Image
            src="/rj-amedee.jpg"
            alt="R.J. Amedee"
            width={20}
            height={20}
            className="mt-0.5 w-5 h-5 rounded-[2px] object-cover object-[50%_20%] shrink-0"
          />
          <span className="font-mono text-[10px] text-foreground/40 leading-relaxed">
            Currently apprenticing at{" "}
            <span className="text-foreground/60">718 Digital Labs</span>, The
            Knowledge House.
          </span>
        </div>
      </CardFooter>
    </Card>
  );
}
