import {
  Badge,
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui";
import Image from "next/image";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { CHIP_CLASS, type Project } from "../constants";

type ProjectCardProps = {
  project: Project;
};

export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <Card className="rounded gap-0 py-0 ring-border overflow-hidden">
      <div className="relative h-44 bg-muted">
        <Image
          src={project.image}
          alt={project.imageAlt}
          fill
          className="object-cover object-top"
          sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
        />
      </div>
      <CardHeader className="px-5 pt-5 pb-0">
        <div className="flex items-center justify-between mb-3">
          <Badge
            className={cn(
              CHIP_CLASS,
              "bg-primary text-primary-foreground text-[9px] px-1.5 rounded-[2px]",
            )}
          >
            {project.tag}
          </Badge>
          <span className="font-mono text-[10px] text-foreground/30">
            {project.year}
          </span>
        </div>
        <CardTitle className="font-semibold text-base text-foreground">
          {project.title}
        </CardTitle>
        <CardDescription className="text-sm text-muted-foreground leading-snug">
          {project.desc}
        </CardDescription>
      </CardHeader>
      <CardContent className="px-5 pb-5 pt-4">
        <Link
          href="/record"
          className="font-mono text-[10px] uppercase tracking-widest text-primary hover:text-foreground/80 transition-colors"
        >
          Open File 00{project.file} →
        </Link>
      </CardContent>
    </Card>
  );
}
