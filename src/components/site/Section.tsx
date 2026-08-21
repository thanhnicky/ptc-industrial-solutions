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
          className={`mb-3 eyebrow ${light ? "text-steel-foreground/70" : "text-primary"}`}
        >
          {eyebrow}
        </p>
      ) : null}
      <h2
        className={`text-2xl font-bold leading-snug md:text-[2.15rem] tracking-tight ${light ? "text-steel-foreground" : "text-ink"}`}
      >
        {title}
      </h2>
      {desc ? (
        <p className={`mt-3.5 text-[15px] sm:text-[16px] leading-relaxed ${light ? "text-steel-foreground/80" : "text-muted-foreground"}`}>
          {desc}
        </p>
      ) : null}
    </div>
  );
}
