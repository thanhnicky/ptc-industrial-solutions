import { IMAGES } from "./images";
import type { Project } from "@/lib/site";

export function ProjectCard({ project }: { project: Project }) {
  return (
    <article className="group flex flex-col border border-border bg-card">
      <img
        src={IMAGES[project.image]}
        alt={project.name}
        loading="lazy"
        width={1200}
        height={800}
        className="aspect-[3/2] w-full object-cover"
      />
      <div className="rule-top flex flex-1 flex-col p-5">
        <h3 className="text-base font-bold text-ink">{project.name}</h3>
        <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{project.desc}</p>
      </div>
    </article>
  );
}
