import * as React from "react";
import { cn } from "@/lib/utils";

function H1({ className, ...props }: React.ComponentProps<"h1">) {
  return (
    <h1
      className={cn(
        "text-3xl sm:text-4xl lg:text-5xl font-bold leading-[1.1] tracking-tight",
        className,
      )}
      {...props}
    />
  );
}

function H2({ className, ...props }: React.ComponentProps<"h2">) {
  return (
    <h2
      className={cn("text-xl sm:text-2xl font-bold tracking-tight", className)}
      {...props}
    />
  );
}

function H3({ className, ...props }: React.ComponentProps<"h3">) {
  return (
    <h3
      className={cn(
        "font-semibold text-base sm:text-lg text-foreground",
        className,
      )}
      {...props}
    />
  );
}

function H4({ className, ...props }: React.ComponentProps<"h4">) {
  return (
    <h4
      className={cn("text-sm font-medium text-foreground", className)}
      {...props}
    />
  );
}

function P({ className, ...props }: React.ComponentProps<"p">) {
  return (
    <p
      className={cn("text-muted-foreground leading-relaxed", className)}
      {...props}
    />
  );
}

function Lead({ className, ...props }: React.ComponentProps<"p">) {
  return (
    <p
      className={cn(
        "text-muted-foreground leading-relaxed max-w-md",
        className,
      )}
      {...props}
    />
  );
}

function Small({ className, ...props }: React.ComponentProps<"span">) {
  return (
    <span
      className={cn(
        "font-mono text-[10px] uppercase tracking-widest text-foreground/50",
        className,
      )}
      {...props}
    />
  );
}

function Muted({ className, ...props }: React.ComponentProps<"span">) {
  return (
    <span
      className={cn("text-sm text-muted-foreground", className)}
      {...props}
    />
  );
}

export { H1, H2, H3, H4, P, Lead, Small, Muted };
