import { Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { ELECTRICAL_PRODUCTS, CABLE_TRAY_PRODUCTS } from "@/lib/site";

interface RelatedProductsProps {
  currentSlug: string;
  type?: "electrical" | "cable-tray" | "all";
  title?: string;
  limit?: number;
}

export function RelatedProducts({
  currentSlug,
  type = "all",
  title = "Sản phẩm & Giải pháp liên quan",
  limit = 3,
}: RelatedProductsProps) {
  let items: Array<{ slug: string; name: string; shortDesc: string; path: string }> = [];

  if (type === "electrical" || type === "all") {
    items = items.concat(
      ELECTRICAL_PRODUCTS.map((p) => ({
        slug: p.slug,
        name: p.name,
        shortDesc: p.shortDesc,
        path: `/tu-dien-cong-nghiep/${p.slug}`,
      }))
    );
  }

  if (type === "cable-tray" || type === "all") {
    items = items.concat(
      CABLE_TRAY_PRODUCTS.map((p) => ({
        slug: p.slug,
        name: p.name,
        shortDesc: p.shortDesc,
        path: `/thang-mang-cap/${p.slug}`,
      }))
    );
  }

  const filtered = items.filter((item) => item.slug !== currentSlug).slice(0, limit);

  if (filtered.length === 0) return null;

  return (
    <div className="mt-12 border-t border-border pt-10">
      <h3 className="text-lg font-semibold tracking-tight text-ink font-heading">{title}</h3>
      <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {filtered.map((item) => (
          <Link
            key={item.path}
            to={item.path}
            className="group flex flex-col justify-between rounded-lg border border-border bg-card p-6 transition-all duration-150 hover:border-primary/50 hover:shadow-2xs"
          >
            <div>
              <h4 className="text-[15px] font-semibold text-ink transition-colors group-hover:text-primary">
                {item.name}
              </h4>
              <p className="mt-2 text-[13.5px] leading-relaxed text-muted-foreground line-clamp-3">
                {item.shortDesc}
              </p>
            </div>
            <span className="mt-5 inline-flex items-center gap-1.5 text-[13px] font-semibold text-primary">
              Xem chi tiết kỹ thuật <ArrowRight className="size-3.5 transition-transform group-hover:translate-x-1" aria-hidden="true" />
            </span>
          </Link>
        ))}
      </div>
    </div>
  );
}
