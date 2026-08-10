import { Button, H1, Small } from "@/components/ui";
import Link from "next/link";
import { RECORD_VIEW_FILTERS } from "../constants";

export function RecordHeader() {
  return (
    <>
      <div className="flex items-center gap-2 mb-6">
        <Link href="/" className="hover:text-foreground/70 transition-colors">
          <Small className="text-foreground/40">← Work</Small>
        </Link>
        <Small className="text-foreground/40">/</Small>
        <Small className="text-foreground/60">Record</Small>
        <Small className="hidden sm:inline text-foreground/40">/</Small>
        <Small className="hidden sm:inline text-foreground/40">All</Small>
      </div>

      <div className="flex items-start justify-between gap-4 mb-8 sm:mb-10">
        <H1 className="leading-tight max-w-xl">
          Everything I&apos;ve shipped,
          <br />
          with the receipts.
        </H1>
        <div className="hidden lg:flex items-center gap-1 mt-2">
          {RECORD_VIEW_FILTERS.map((f) => (
            <Button
              key={f}
              type="button"
              variant="ghost"
              size="sm"
              className="font-mono text-[10px] uppercase tracking-widest text-foreground/40"
            >
              {f}
            </Button>
          ))}
        </div>
      </div>
    </>
  );
}
