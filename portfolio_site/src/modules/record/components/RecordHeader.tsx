import { H1, Small } from "@/components/ui";
import Link from "next/link";

export function RecordHeader() {
  return (
    <>
      <div className="flex items-center gap-2 mb-6">
        <Link
          href="/"
          className="hover:text-foreground/70 focus-visible:text-foreground/70 transition-colors"
        >
          <Small className="text-foreground/60">← Work</Small>
        </Link>
        <Small className="text-foreground/60">/</Small>
        <Small>Record</Small>
      </div>

      <div className="mb-8 sm:mb-10">
        <H1 className="leading-tight max-w-xl">
          Everything I&apos;ve shipped,
          <br />
          with the receipts.
        </H1>
      </div>
    </>
  );
}
