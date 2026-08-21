import type { ReactNode } from "react";
import { IMAGES } from "./images";

export function PageHero({
  title,
  subtitle,
  children,
  image = IMAGES.hero,
}: {
  title: string;
  subtitle?: string;
  children?: ReactNode;
  image?: string;
}) {
  return (
    <header className="relative isolate overflow-hidden bg-steel border-b border-border/60">
      <img
        src={image}
        alt=""
        aria-hidden="true"
        className="absolute inset-0 -z-10 h-full w-full object-cover opacity-25"
        loading="lazy"
      />
      <div className="hairline-grid pointer-events-none absolute inset-0 opacity-40" aria-hidden="true" />
      <div className="container-page py-14 sm:py-16 md:py-20 lg:py-24">
        <h1 className="max-w-3xl text-[2rem] font-bold text-steel-foreground sm:text-4xl md:text-5xl leading-[1.12] tracking-tight">
          {title}
        </h1>
        {subtitle ? (
          <p className="mt-5 max-w-2xl text-[16px] sm:text-[17px] leading-relaxed text-steel-foreground/85">
            {subtitle}
          </p>
        ) : null}
        {children ? <div className="mt-7 flex flex-wrap items-center gap-3">{children}</div> : null}
      </div>
    </header>
  );
}
