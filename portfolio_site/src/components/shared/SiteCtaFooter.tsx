import { buttonVariants, H2, P } from "@/components/ui";
import Link from "next/link";
import { cn } from "@/lib/utils";

type SiteCtaFooterProps = {
  title: string;
  body: string;
  href?: string;
  ctaLabel?: string;
  className?: string;
};

export function SiteCtaFooter({
  title,
  body,
  href = "/contact",
  ctaLabel = "Email Me →",
  className,
}: SiteCtaFooterProps) {
  return (
    <footer className={cn("bg-card border-t border-border", className)}>
      <div className="mx-auto max-w-[1280px] page-x py-8 sm:py-10 flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-6">
        <div>
          <H2 className="mb-1">{title}</H2>
          <P className="text-sm">{body}</P>
        </div>
        <Link
          href={href}
          className={cn(
            buttonVariants({ size: "cta" }),
            "shrink-0 w-full sm:w-auto text-center",
          )}
        >
          {ctaLabel}
        </Link>
      </div>
    </footer>
  );
}
