import { Small } from "@/components/ui/typography";

export function ContactAvailability() {
  return (
    <div className="flex flex-wrap items-center gap-3 font-mono text-[10px] uppercase tracking-widest">
      <span className="flex items-center gap-1.5 text-primary">
        <span className="w-1.5 h-1.5 rounded-full bg-primary" />
        Available Now — Full-Time
      </span>
      <span className="text-foreground/30">·</span>
      <Small className="text-foreground/50">New York · UTC-5</Small>
      <span className="text-foreground/30">·</span>
      <Small className="text-foreground/50">Replies Within 24H</Small>
    </div>
  );
}
