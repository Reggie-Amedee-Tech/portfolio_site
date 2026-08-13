"use client";

import { Button, buttonVariants, P } from "@/components/ui";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { NAV_LINKS } from "@/components/shared/constants";
import { RESUME_DOWNLOAD_NAME, RESUME_HREF } from "@/lib/site";
import { cn } from "@/lib/utils";

export function Nav() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    document.addEventListener("keydown", onKey);
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = previousOverflow;
    };
  }, [open]);

  const closeMenu = () => setOpen(false);

  return (
    <header className="sticky top-0 z-50 bg-background border-b border-border">
      <div className="mx-auto max-w-[1280px] page-x h-14 flex items-center gap-3 sm:gap-6 lg:gap-8">
        <Link
          href="/"
          className="flex items-center gap-2.5 shrink-0 min-w-0"
          onClick={closeMenu}
        >
          <span className="w-7 h-7 flex items-center justify-center text-[10px] font-mono font-semibold tracking-widest bg-destructive text-destructive-foreground rounded-[2px] shrink-0">
            RA
          </span>
          <span className="font-mono text-xs font-medium tracking-[0.18em] uppercase text-foreground truncate">
            R.J. Amedee
          </span>
        </Link>

        <nav className="hidden md:flex items-center gap-7 flex-1 justify-center">
          {NAV_LINKS.map(({ href, label }) => {
            const isActive =
              pathname === href || pathname.startsWith(`${href}/`);
            return (
              <Link
                key={href}
                href={href}
                className={cn(
                  "font-mono text-xs uppercase tracking-widest transition-colors",
                  isActive
                    ? "text-foreground"
                    : "text-foreground/60 hover:text-foreground focus-visible:text-foreground",
                )}
              >
                {label}
              </Link>
            );
          })}
        </nav>

        <div className="flex items-center gap-2 sm:gap-4 shrink-0 ml-auto md:ml-0">
          <span className="hidden lg:flex items-center gap-1.5 font-mono text-[10px] uppercase tracking-widest text-primary">
            <span className="w-1.5 h-1.5 rounded-full bg-primary inline-block" />
            Available Now — Full-Time - Software Engineer, Data Engineer
          </span>
          <a
            href={RESUME_HREF}
            download={RESUME_DOWNLOAD_NAME}
            className={cn(
              buttonVariants({ variant: "destructive", size: "cta-sm" }),
            )}
          >
            <span className="sm:hidden">CV ↓</span>
            <span className="hidden sm:inline">Résumé ↓</span>
          </a>
          <Button
            type="button"
            variant="ghost"
            size="icon"
            className="md:hidden relative size-9 rounded-[3px] border border-border text-foreground/70 hover:text-foreground hover:bg-muted focus-visible:text-foreground focus-visible:bg-muted"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
          >
            <span
              className={cn(
                "absolute left-1/2 block h-px w-4 -translate-x-1/2 bg-current transition-all",
                open ? "top-[18px] rotate-45" : "top-[13px]",
              )}
            />
            <span
              className={cn(
                "absolute left-1/2 top-[18px] block h-px w-4 -translate-x-1/2 bg-current transition-opacity",
                open && "opacity-0",
              )}
            />
            <span
              className={cn(
                "absolute left-1/2 block h-px w-4 -translate-x-1/2 bg-current transition-all",
                open ? "top-[18px] -rotate-45" : "top-[23px]",
              )}
            />
          </Button>
        </div>
      </div>

      {open && (
        <div className="md:hidden border-t border-border bg-background max-h-[calc(100vh-3.5rem)] overflow-y-auto">
          <nav className="mx-auto max-w-[1280px] page-x py-4 flex flex-col gap-1">
            {NAV_LINKS.map(({ href, label }) => {
              const isActive =
                pathname === href || pathname.startsWith(`${href}/`);
              return (
                <Link
                  key={href}
                  href={href}
                  onClick={closeMenu}
                  className={cn(
                    "font-mono text-sm uppercase tracking-widest py-3 border-b border-border last:border-0 transition-colors",
                    isActive
                      ? "text-foreground"
                      : "text-foreground/60 hover:text-foreground focus-visible:text-foreground",
                  )}
                >
                  {label}
                </Link>
              );
            })}
            <P className="pt-3 flex items-center gap-1.5 font-mono text-[10px] uppercase tracking-widest text-primary">
              <span className="w-1.5 h-1.5 rounded-full bg-primary inline-block" />
              Available Now — Full-Time - Software Engineer, Data Engineer
            </P>
          </nav>
        </div>
      )}
    </header>
  );
}
