import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
} from "@/components/ui/card";
import { Small } from "@/components/ui/typography";
import { AT_A_GLANCE } from "../constants";

export function AtAGlanceCard() {
  return (
    <Card className="rounded gap-0 py-0 ring-border">
      <CardHeader className="px-5 pt-5 pb-0">
        <CardDescription className="font-mono text-[10px] uppercase tracking-widest text-foreground/40">
          At a Glance
        </CardDescription>
      </CardHeader>
      <CardContent className="px-5 py-4 space-y-3">
        {AT_A_GLANCE.map(({ label, value }) => (
          <div key={label} className="flex items-center justify-between gap-4">
            <Small className="text-foreground/40 shrink-0">{label}</Small>
            <span className="text-sm font-medium text-foreground text-right">
              {value}
            </span>
          </div>
        ))}
      </CardContent>
    </Card>
  );
}
