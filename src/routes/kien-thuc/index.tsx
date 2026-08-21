import { useState } from "react";
import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, BookOpen, Calendar, UserCheck } from "lucide-react";
import { PageHero } from "@/components/site/PageHero";
import { Section, SectionHeading } from "@/components/site/Section";
import { Breadcrumbs } from "@/components/site/Breadcrumbs";
import { QuickSummary } from "@/components/site/QuickSummary";
import { ZaloButton } from "@/components/site/ZaloButton";
import { LeadSection } from "@/components/site/LeadSection";
import { IMAGES } from "@/components/site/images";
import { KNOWLEDGE_ARTICLES } from "@/lib/site";
import { OrganizationSchema } from "@/components/seo/JsonLd";

const TITLE = "Kiến thức kỹ thuật Tủ điện công nghiệp & Thang máng cáp | PTC";
const DESC =
  "Thư viện kiến thức chuyên sâu về thiết kế, tiêu chuẩn IEC 61439, cách chọn tủ MSB/MCC, phân biệt thang máng cáp và quy trình nghiệm thu cơ điện M&E từ Ban Kỹ thuật PTC.";

export const Route = createFileRoute("/kien-thuc/")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESC },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESC },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { property: "og:url", content: "https://tudienptc.vn/kien-thuc" },
    ],
    links: [{ rel: "canonical", href: "https://tudienptc.vn/kien-thuc" }],
  }),
  component: Page,
});

function Page() {
  const [selectedCategory, setSelectedCategory] = useState<string>("all");

  const categories = ["all", ...Array.from(new Set(KNOWLEDGE_ARTICLES.map((a) => a.category)))];

  const filteredArticles =
    selectedCategory === "all"
      ? KNOWLEDGE_ARTICLES
      : KNOWLEDGE_ARTICLES.filter((a) => a.category === selectedCategory);

  return (
    <>
      <OrganizationSchema />

      <PageHero
        title="Kiến thức kỹ thuật cơ điện M&E"
        subtitle="Tổng hợp các bài viết chuyên môn, phân tích tiêu chuẩn IEC 61439, hướng dẫn bóc tách BOQ và lưu ý kỹ thuật thực tế được biên soạn bởi Ban Kỹ thuật PTC."
        image={IMAGES.switchboard}
      >
        <ZaloButton size="lg" location="hero-kien-thuc" label="Nhắn Zalo trao đổi kỹ thuật" />
      </PageHero>

      <Section>
        <div className="mx-auto max-w-5xl space-y-10">
          <Breadcrumbs items={[{ name: "Kiến thức kỹ thuật", item: "/kien-thuc" }]} />

          <div className="space-y-4">
            <h1 className="text-2xl font-bold tracking-tight text-ink sm:text-3xl">
              Cẩm nang kỹ thuật Tủ điện hạ thế & Hệ thống dẫn cáp
            </h1>
            <p className="text-base leading-relaxed text-muted-foreground">
              Mục kiến thức cung cấp các thông tin chuẩn xác, có cơ sở kỹ thuật rõ ràng giúp các kỹ sư thiết kế MEP, nhà thầu thi công và chủ đầu tư dễ dàng tra cứu, lựa chọn giải pháp phù hợp với tiêu chuẩn quốc tế và quy định hiện hành tại Việt Nam.
            </p>
          </div>

          <QuickSummary
            title="Định hướng nội dung từ Ban Kỹ thuật PTC"
            bullets={[
              "100% nội dung được biên soạn và kiểm duyệt bởi các kỹ sư điện & cơ khí giàu kinh nghiệm thực tế.",
              "Trích dẫn đúng các tiêu chuẩn kỹ thuật: IEC 61439-1/2, TCVN 7994, ASTM A123, ISO 9001:2015.",
              "Tập trung vào giải pháp thực tế: Cách tính dòng Icw, chọn Form tủ, phân biệt mạ kẽm nhúng nóng và lưu ý nghiệm thu.",
              "Không viết nội dung sáo rỗng hay dịch máy; cập nhật liên tục các quy chuẩn mới.",
            ]}
          />

          {/* Bộ lọc chuyên mục */}
          <div className="flex flex-wrap items-center gap-2 border-b border-border pb-4">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`rounded-full px-4 py-1.5 text-xs font-semibold transition-colors ${
                  selectedCategory === cat
                    ? "bg-primary text-primary-foreground"
                    : "bg-muted/70 text-muted-foreground hover:bg-muted hover:text-ink"
                }`}
              >
                {cat === "all" ? "Tất cả bài viết" : cat}
              </button>
            ))}
          </div>

          {/* Danh sách bài viết */}
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {filteredArticles.map((article) => (
              <Link
                key={article.slug}
                to={`/kien-thuc/${article.slug}` as never}
                className="group flex flex-col justify-between rounded-lg border border-border/80 bg-card p-5 transition-all duration-200 hover:border-primary/50 hover:shadow-md"
              >
                <div>
                  <div className="flex items-center justify-between text-[11px] font-semibold text-primary">
                    <span className="rounded bg-primary/10 px-2 py-0.5">{article.category}</span>
                    <span className="text-muted-foreground">{article.readTime}</span>
                  </div>
                  <h2 className="mt-3 text-sm font-bold leading-snug text-ink transition-colors group-hover:text-primary">
                    {article.title}
                  </h2>
                  <p className="mt-2 text-xs leading-relaxed text-muted-foreground line-clamp-3">
                    {article.quickAnswer}
                  </p>
                </div>

                <div className="mt-5 border-t border-border/60 pt-3">
                  <div className="flex items-center justify-between text-[11px] text-muted-foreground">
                    <span className="flex items-center gap-1">
                      <UserCheck className="size-3 text-primary" aria-hidden="true" />
                      {article.reviewer}
                    </span>
                    <span className="flex items-center gap-1">
                      <Calendar className="size-3" aria-hidden="true" />
                      {article.dateModified}
                    </span>
                  </div>
                  <span className="mt-3 inline-flex items-center gap-1 text-xs font-semibold text-primary">
                    Đọc toàn bộ bài viết <ArrowRight className="size-3 transition-transform group-hover:translate-x-1" aria-hidden="true" />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </Section>

      <LeadSection
        title="Bạn có câu hỏi kỹ thuật cần giải đáp?"
        intro="Gửi câu hỏi hoặc liên hệ trực tiếp với Ban Kỹ thuật PTC để được hỗ trợ chuyên sâu."
        sourcePage="hub-kien-thuc"
      />
    </>
  );
}
