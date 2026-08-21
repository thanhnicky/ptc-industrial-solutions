import { Link } from "@tanstack/react-router";
import { ArrowRight, BookOpen } from "lucide-react";
import { KNOWLEDGE_ARTICLES } from "@/lib/site";

interface RelatedArticlesProps {
  currentSlug?: string;
  category?: string;
  title?: string;
  limit?: number;
}

export function RelatedArticles({
  currentSlug,
  category,
  title = "Tài liệu & Kiến thức kỹ thuật liên quan",
  limit = 3,
}: RelatedArticlesProps) {
  let list = KNOWLEDGE_ARTICLES;

  if (currentSlug) {
    list = list.filter((a) => a.slug !== currentSlug);
  }

  if (category) {
    const sameCat = list.filter((a) => a.category === category);
    if (sameCat.length >= limit) {
      list = sameCat;
    }
  }

  const items = list.slice(0, limit);
  if (items.length === 0) return null;

  return (
    <div className="mt-12 border-t border-border pt-10">
      <div className="flex items-center justify-between gap-4">
        <h3 className="text-lg font-semibold tracking-tight text-ink">{title}</h3>
        <Link
          to="/kien-thuc"
          className="inline-flex items-center gap-1 text-xs font-semibold text-primary hover:underline"
        >
          Xem tất cả bài viết <ArrowRight className="size-3" aria-hidden="true" />
        </Link>
      </div>
      <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {items.map((article) => (
          <Link
            key={article.slug}
            to={`/kien-thuc/${article.slug}`}
            className="group flex flex-col justify-between rounded-lg border border-border/80 bg-card p-5 transition-all duration-200 hover:border-primary/50 hover:shadow-sm"
          >
            <div>
              <div className="flex items-center gap-2 text-[11px] font-semibold text-primary">
                <BookOpen className="size-3" aria-hidden="true" />
                <span>{article.category}</span>
                <span className="text-muted-foreground/50">·</span>
                <span className="text-muted-foreground">{article.readTime}</span>
              </div>
              <h4 className="mt-2 text-sm font-semibold leading-snug text-ink transition-colors group-hover:text-primary">
                {article.title}
              </h4>
              <p className="mt-2 text-xs leading-relaxed text-muted-foreground line-clamp-2">
                {article.quickAnswer}
              </p>
            </div>
            <span className="mt-4 inline-flex items-center gap-1 text-xs font-semibold text-primary">
              Đọc tiếp <ArrowRight className="size-3 transition-transform group-hover:translate-x-1" aria-hidden="true" />
            </span>
          </Link>
        ))}
      </div>
    </div>
  );
}
