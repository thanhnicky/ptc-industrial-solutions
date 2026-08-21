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
        <h3 className="text-lg font-semibold tracking-tight text-ink font-heading">{title}</h3>
        <Link
          to="/kien-thuc"
          className="inline-flex items-center gap-1 text-[13px] font-semibold text-primary hover:underline"
        >
          Xem tất cả bài viết <ArrowRight className="size-3.5" aria-hidden="true" />
        </Link>
      </div>
      <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {items.map((article) => (
          <Link
            key={article.slug}
            to={`/kien-thuc/${article.slug}`}
            className="group flex flex-col justify-between rounded-lg border border-border bg-card p-6 transition-all duration-150 hover:border-primary/50 hover:shadow-2xs"
          >
            <div>
              <div className="flex items-center gap-2 text-[12px] font-semibold text-primary font-mono uppercase tracking-wide">
                <BookOpen className="size-3" aria-hidden="true" />
                <span>{article.category}</span>
                <span className="text-muted-foreground/50">·</span>
                <span className="text-muted-foreground font-sans lowercase">{article.readTime}</span>
              </div>
              <h4 className="mt-2.5 text-[15px] font-semibold leading-snug text-ink transition-colors group-hover:text-primary">
                {article.title}
              </h4>
              <p className="mt-2 text-[13.5px] leading-relaxed text-muted-foreground line-clamp-2">
                {article.quickAnswer}
              </p>
            </div>
            <span className="mt-5 inline-flex items-center gap-1.5 text-[13px] font-semibold text-primary">
              Đọc tiếp <ArrowRight className="size-3.5 transition-transform group-hover:translate-x-1" aria-hidden="true" />
            </span>
          </Link>
        ))}
      </div>
    </div>
  );
}
