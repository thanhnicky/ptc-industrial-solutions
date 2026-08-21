import { createFileRoute, notFound } from "@tanstack/react-router";
import { Calendar, Clock, ShieldCheck, UserCheck } from "lucide-react";
import { PageHero } from "@/components/site/PageHero";
import { Section, SectionHeading } from "@/components/site/Section";
import { Breadcrumbs } from "@/components/site/Breadcrumbs";
import { QuickSummary } from "@/components/site/QuickSummary";
import { ZaloButton, CallButton } from "@/components/site/ZaloButton";
import { LeadSection } from "@/components/site/LeadSection";
import { IMAGES } from "@/components/site/images";
import { KNOWLEDGE_ARTICLES } from "@/lib/site";
import { ArticleSchema, FAQSchema } from "@/components/seo/JsonLd";
import { RelatedProducts } from "@/components/site/RelatedProducts";
import { RelatedArticles } from "@/components/site/RelatedArticles";

interface ArticleType {
  slug: string;
  title: string;
  category: string;
  readTime: string;
  author: string;
  reviewer: string;
  datePublished: string;
  dateModified: string;
  quickAnswer: string;
  summary: string[];
}

export const Route = createFileRoute("/kien-thuc/$slug")({
  loader: ({ params }: { params: { slug: string } }) => {
    const article = KNOWLEDGE_ARTICLES.find((a) => a.slug === params.slug);
    if (!article) {
      throw notFound();
    }
    return { article: article as ArticleType };
  },
  head: ({ loaderData }: { loaderData?: { article: ArticleType } }) => {
    const article = loaderData?.article;
    if (!article) return {};

    const title = `${article.title} | Ban Kỹ thuật PTC`;
    const desc = `${article.quickAnswer} Xem phân tích kỹ thuật chi tiết từ kỹ sư PTC.`;

    return {
      meta: [
        { title },
        { name: "description", content: desc },
        { property: "og:title", content: title },
        { property: "og:description", content: desc },
        { property: "og:type", content: "article" },
        { name: "twitter:card", content: "summary_large_image" },
        { property: "og:url", content: `https://tudienptc.vn/kien-thuc/${article.slug}` },
        { property: "article:published_time", content: article.datePublished },
        { property: "article:modified_time", content: article.dateModified },
        { property: "article:author", content: article.author },
      ],
      links: [{ rel: "canonical", href: `https://tudienptc.vn/kien-thuc/${article.slug}` }],
    };
  },
  component: Page,
});

function Page() {
  const { article } = Route.useLoaderData() as { article: ArticleType };

  const faqs = [
    {
      question: `Làm sao để áp dụng các tiêu chuẩn trong bài viết này vào dự án thực tế?`,
      answer: `Quý kỹ sư hoặc nhà thầu có thể gửi sơ đồ đơn tuyến hoặc yêu cầu kỹ thuật trực tiếp cho Ban Kỹ thuật PTC qua Zalo hoặc Hotline để được hỗ trợ tính toán, rà soát dung sai và lựa chọn cấu hình thiết bị phù hợp nhất.`,
    },
    {
      question: `PTC có hỗ trợ cung cấp bản vẽ mẫu hoặc tài liệu kỹ thuật tham khảo không?`,
      answer: `Có. PTC sẵn sàng chia sẻ các bản vẽ bố trí Layout mẫu, sơ đồ nguyên lý điển hình và tài liệu tính toán thanh cái đồng cho các đơn vị tư vấn thiết kế và tổng thầu M&E.`,
    },
  ];

  return (
    <>
      <ArticleSchema
        title={article.title}
        description={article.quickAnswer}
        url={`/kien-thuc/${article.slug}`}
        datePublished={article.datePublished}
        dateModified={article.dateModified}
        authorName={article.author}
        reviewerName={article.reviewer}
        image="/logo-ptc.png"
      />
      <FAQSchema items={faqs} />

      <PageHero
        title={article.title}
        subtitle={`Chuyên mục: ${article.category} · Biên soạn bởi ${article.author} · Kiểm duyệt kỹ thuật bởi ${article.reviewer}`}
        image={IMAGES.switchboard}
      >
        <ZaloButton size="lg" location={`hero-article-${article.slug}`} label="Nhắn Zalo trao đổi với Kỹ sư" />
        <CallButton size="lg" location={`hero-article-${article.slug}`} variant="outlineLight" />
      </PageHero>

      <Section>
        <div className="mx-auto max-w-4xl space-y-10">
          <Breadcrumbs
            items={[
              { name: "Kiến thức kỹ thuật", item: "/kien-thuc" },
              { name: article.title, item: `/kien-thuc/${article.slug}` },
            ]}
          />

          {/* E-E-A-T Author & Reviewer Metadata */}
          <div className="flex flex-wrap items-center justify-between gap-4 rounded-lg border border-border bg-card p-4 text-xs text-muted-foreground">
            <div className="flex flex-wrap items-center gap-4">
              <span className="flex items-center gap-1.5 font-medium text-ink">
                <ShieldCheck className="size-4 text-primary" aria-hidden="true" />
                Tác giả: {article.author}
              </span>
              <span className="flex items-center gap-1.5 font-medium text-ink">
                <UserCheck className="size-4 text-primary" aria-hidden="true" />
                Kiểm duyệt: {article.reviewer}
              </span>
            </div>
            <div className="flex items-center gap-4">
              <span className="flex items-center gap-1">
                <Clock className="size-3.5" aria-hidden="true" />
                {article.readTime}
              </span>
              <span className="flex items-center gap-1">
                <Calendar className="size-3.5" aria-hidden="true" />
                Cập nhật: {article.dateModified}
              </span>
            </div>
          </div>

          {/* GEO/AIO Direct Answer (40-70 words) */}
          <div className="space-y-4">
            <h1 className="text-2xl font-bold tracking-tight text-ink sm:text-3xl">
              {article.title}
            </h1>
            <div className="rounded-r-lg border-l-4 border-primary bg-muted/40 p-4 text-sm leading-relaxed text-ink">
              <strong className="block font-semibold text-primary">Câu trả lời cốt lõi:</strong>
              <p className="mt-1">{article.quickAnswer}</p>
            </div>
          </div>

          <QuickSummary
            title="Tóm tắt nhanh các điểm quan trọng"
            bullets={article.summary}
          />

          {/* Nội dung chuyên sâu */}
          <div className="prose prose-neutral max-w-none space-y-6 text-sm leading-relaxed text-muted-foreground">
            <h2 className="text-lg font-bold text-ink">1. Bối cảnh kỹ thuật và tầm quan trọng trong hệ thống</h2>
            <p>
              Trong quá trình thiết kế và thi công hệ thống cơ điện (M&E) cho các công trình công nghiệp, việc nắm vững các quy định tiêu chuẩn và đặc tính kỹ thuật của từng loại thiết bị đóng vai trò quyết định đến độ an toàn, chi phí đầu tư ban đầu cũng như chi phí vận hành bảo trì lâu dài của nhà máy.
            </p>

            <h2 className="text-lg font-bold text-ink">2. Phân tích chi tiết và các lưu ý thiết kế từ kỹ sư PTC</h2>
            <p>
              Theo tiêu chuẩn <strong>IEC 61439-1/2</strong> và <strong>TCVN 7994</strong>, các thông số dòng định mức (In), dòng cắt ngắn mạch (Icu/Ics) và dòng ngắn mạch chịu đựng trong thời gian ngắn (Icw) của hệ thanh cái đồng chính là những chỉ số cốt lõi không thể bỏ qua. Việc tính toán chuẩn xác tiết diện đồng điện phân giúp ngăn ngừa nguy cơ phát nhiệt quá mức và biến dạng thanh cái khi có sự cố ngắn mạch xảy ra trên lưới điện.
            </p>

            <h2 className="text-lg font-bold text-ink">3. Khuyến nghị ứng dụng thực tế cho nhà thầu và chủ đầu tư</h2>
            <ul className="space-y-2 list-disc pl-5">
              <li>Luôn yêu cầu nhà sản xuất cung cấp biên bản Routine Test xuất xưởng 100% trước khi nhận hàng.</li>
              <li>Kiểm tra tính đồng bộ giữa kích thước tủ điện và hệ thống thang máng cáp để tránh xung đột không gian khi kéo cáp tại hiện trường.</li>
              <li>Lựa chọn cấp bảo vệ vỏ tủ IP phù hợp với môi trường lắp đặt thực tế (IP31/IP42 cho phòng điện trong nhà, IP55/IP65 cho khu vực ngoài trời).</li>
            </ul>

            <div className="rounded-lg border border-border/80 bg-muted/30 p-5 not-prose">
              <h3 className="text-xs font-semibold tracking-wider text-muted-foreground uppercase">Tuyên bố miễn trừ trách nhiệm kỹ thuật (Disclaimer)</h3>
              <p className="mt-1.5 text-xs text-muted-foreground leading-relaxed">
                Các thông tin và hướng dẫn kỹ thuật trong bài viết được biên soạn nhằm mục đích tham khảo chung dựa trên các tiêu chuẩn hiện hành. Đối với từng dự án cụ thể, kỹ sư thiết kế cần đối chiếu với điều kiện thực tế của lưới điện và yêu cầu riêng của chủ đầu tư.
              </p>
            </div>
          </div>

          {/* FAQs */}
          <div>
            <SectionHeading eyebrow="Hỏi đáp kỹ thuật" title="Câu hỏi thường gặp liên quan đến chủ đề này" />
            <div className="mt-4 space-y-4">
              {faqs.map((faq, idx) => (
                <div key={idx} className="rounded-lg border border-border bg-card p-5">
                  <h3 className="text-sm font-semibold text-ink">{faq.question}</h3>
                  <p className="mt-2 text-xs leading-relaxed text-muted-foreground">{faq.answer}</p>
                </div>
              ))}
            </div>
          </div>

          <RelatedProducts currentSlug={article.slug} />
          <RelatedArticles currentSlug={article.slug} category={article.category} />
        </div>
      </Section>

      <LeadSection
        title="Cần hỗ trợ tư vấn kỹ thuật chuyên sâu?"
        intro="Gửi bản vẽ hoặc câu hỏi kỹ thuật để các kỹ sư của PTC hỗ trợ làm rõ nhanh chóng."
        sourcePage={`article-${article.slug}`}
      />
    </>
  );
}
