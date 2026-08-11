import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  Small,
} from "@/components/ui";
import { AT_A_GLANCE } from "../constants";

export function AtAGlanceCard() {
  return (
    <Card className="rounded gap-0 py-0 ring-border transition-all hover:ring-primary/40 motion-safe:hover:-translate-y-0.5 focus-within:ring-primary/40 motion-safe:focus-within:-translate-y-0.5">
      <CardHeader className="px-5 pt-5 pb-0">
        <CardTitle className="font-mono text-[10px] uppercase tracking-widest text-foreground/60 font-normal">
          At a Glance
        </CardTitle>
      </CardHeader>
      <CardContent className="px-5 py-4 space-y-3">
        {AT_A_GLANCE.map(({ label, value, href }) => (
          <div key={label} className="flex items-center justify-between gap-4">
            <Small className="text-foreground/60 shrink-0">{label}</Small>
            {href ? (
              <a
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm font-medium text-foreground text-right hover:text-primary focus-visible:text-primary transition-colors"
              >
                {value}
              </a>
            ) : (
              <span className="text-sm font-medium text-foreground text-right">
                {value}
              </span>
            )}
          </div>
        ))}
      </CardContent>
    </Card>
  );
}
