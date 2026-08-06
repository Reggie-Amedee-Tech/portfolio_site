import { Button } from "@/components/ui/button";
import { Small } from "@/components/ui/typography";
import { cn } from "@/lib/utils";
import { FILTERS, type ProjectFilter } from "../constants";

type ProjectFiltersProps = {
  filter: ProjectFilter;
  onFilterChange: (value: ProjectFilter) => void;
};

export function ProjectFilters({
  filter,
  onFilterChange,
}: ProjectFiltersProps) {
  return (
    <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between mb-8">
      <Small>Selected Work</Small>
      <div className="flex items-center gap-1 flex-wrap">
        {FILTERS.map((f) => (
          <Button
            key={f.value}
            type="button"
            variant="ghost"
            size="sm"
            onClick={() => onFilterChange(f.value)}
            className={cn(
              "font-mono text-[10px] uppercase tracking-widest rounded-[3px]",
              filter === f.value
                ? "bg-muted text-foreground"
                : "text-foreground/40",
            )}
          >
            {f.label}
          </Button>
        ))}
      </div>
    </div>
  );
}
