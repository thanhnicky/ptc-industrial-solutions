import { IMAGES } from "./images";
import type { Project } from "@/lib/site";

export function ProjectCard({ project }: { project: Project }) {
  return (
    <article className="group flex flex-col rounded-lg border border-border bg-card overflow-hidden shadow-2xs transition-all duration-150 hover:border-primary/40">
      <div className="overflow-hidden">
        <img
          src={project.photo ?? IMAGES[project.image]}
          alt={project.photoAlt ?? project.name}
          loading="lazy"
          width={1200}
          height={800}
          className="aspect-[3/2] w-full object-cover transition-transform duration-500 group-hover:scale-[1.02]"
        />
        {project.gallery && project.gallery.length > 0 && (
          <div className="flex gap-px border-t border-border">
            {project.gallery.slice(0, 3).map((g) => (
              <img
                key={g.src}
                src={g.src}
                alt={g.alt}
                loading="lazy"
                width={400}
                height={267}
                className="aspect-[3/2] w-full min-w-0 flex-1 object-cover"
              />
            ))}
          </div>
        )}
      </div>
      <div className="rule-top flex flex-1 flex-col p-6">
        <h3 className="text-[16px] font-bold text-ink leading-snug">{project.name}</h3>
        <p className="mt-2 text-[14px] leading-relaxed text-muted-foreground">{project.desc}</p>
      </div>
    </article>
  );
}
