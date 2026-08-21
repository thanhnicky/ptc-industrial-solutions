import { Link } from "@tanstack/react-router";
import { ChevronRight, Home } from "lucide-react";
import { BreadcrumbSchema, type BreadcrumbItem } from "@/components/seo/JsonLd";

interface BreadcrumbsProps {
  items: BreadcrumbItem[];
  className?: string;
}

export function Breadcrumbs({ items, className = "" }: BreadcrumbsProps) {
  const allItems: BreadcrumbItem[] = [{ name: "Trang chủ", item: "/" }, ...items];

  return (
    <>
      <BreadcrumbSchema items={allItems} />
      <nav aria-label="Breadcrumb" className={`text-xs text-muted-foreground ${className}`}>
        <ol className="flex flex-wrap items-center gap-1.5 sm:gap-2">
          {allItems.map((crumb, idx) => {
            const isLast = idx === allItems.length - 1;
            return (
              <li key={crumb.item} className="flex items-center gap-1.5 sm:gap-2">
                {idx > 0 && <ChevronRight className="size-3 text-muted-foreground/60" aria-hidden="true" />}
                {isLast ? (
                  <span className="font-semibold text-ink" aria-current="page">
                    {crumb.name}
                  </span>
                ) : (
                  <Link
                    to={crumb.item}
                    className="flex items-center gap-1 transition-colors hover:text-primary"
                  >
                    {idx === 0 && <Home className="size-3" aria-hidden="true" />}
                    <span>{crumb.name}</span>
                  </Link>
                )}
              </li>
            );
          })}
        </ol>
      </nav>
    </>
  );
}
