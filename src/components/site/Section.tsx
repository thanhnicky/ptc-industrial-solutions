import type { ReactNode } from "react";

export function Section({
  children,
  className = "",
  id,
  tone = "default",
}: {
  children: ReactNode;
  className?: string;
  id?: string;
  tone?: "default" | "muted" | "dark";
}) {
  const bg =
    tone === "muted" ? "bg-secondary" : tone === "dark" ? "bg-steel text-steel-foreground" : "";
  return (
    <section id={id} className={`section-y md:py-20 ${bg} ${className}`}>
      <div className="container-page">{children}</div>
    </section>
  );
}

export function SectionHeading({
  eyebrow,
  title,
  desc,
  light = false,
}: {
  eyebrow?: string;
  title: string;
  desc?: string;
  light?: boolean;
}) {
  return (
    <div className="mb-10 max-w-3xl">
      {eyebrow ? (
        <p
          className={`mb-3 text-xs font-semibold tracking-[0.22em] uppercase ${light ? "text-steel-foreground/70" : "text-primary"}`}
        >
          {eyebrow}
        </p>
      ) : null}
      <h2
        className={`text-2xl font-bold md:text-3xl ${light ? "text-steel-foreground" : "text-ink"}`}
      >
        {title}
      </h2>
      {desc ? (
        <p className={`mt-4 ${light ? "text-steel-foreground/80" : "text-muted-foreground"}`}>
          {desc}
        </p>
      ) : null}
    </div>
  );
}
