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
    <header className="relative isolate overflow-hidden bg-steel">
      <img
        src={image}
        alt=""
        aria-hidden="true"
        className="absolute inset-0 -z-10 h-full w-full object-cover opacity-30"
        loading="lazy"
      />
      <div className="container-page py-16 md:py-24">
        <h1 className="max-w-4xl text-3xl font-bold text-steel-foreground md:text-5xl md:leading-[1.1]">
          {title}
        </h1>
        {subtitle ? (
          <p className="mt-5 max-w-2xl text-base text-steel-foreground/85 md:text-lg">{subtitle}</p>
        ) : null}
        {children ? <div className="mt-8 flex flex-wrap gap-3">{children}</div> : null}
      </div>
    </header>
  );
}
