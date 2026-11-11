import { createFileRoute, Link } from "@tanstack/react-router";
import { CheckCircle2, ArrowRight, BookOpen } from "lucide-react";
import { PageHero } from "@/components/site/PageHero";
import { Section, SectionHeading } from "@/components/site/Section";
import { LeadSection } from "@/components/site/LeadSection";
import { ZaloButton, CallButton } from "@/components/site/ZaloButton";
import { IMAGES } from "@/components/site/images";
import { OrganizationSchema, CollectionPageSchema } from "@/components/seo/JsonLd";
import { KNOWLEDGE_ARTICLES } from "@/lib/site";

const TITLE = "Tủ điện công nghiệp – MSB, MCC, ATS, tủ solar | PTC";
const DESC =
  "Sản xuất tủ điện hạ thế theo IEC 61439: tủ MSB/MDB, tủ DB, tủ tụ bù, ATS, MCC, VSD và tủ điện cho hệ solar. Thử nghiệm routine test tại xưởng PTC.";

export const Route = createFileRoute("/tu-dien-cong-nghiep/")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESC },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESC },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { property: "og:url", content: "https://www.tudienptc.vn/tu-dien-cong-nghiep" },
    ],
    links: [{ rel: "canonical", href: "https://www.tudienptc.vn/tu-dien-cong-nghiep" }],
  }),
  component: Page,
});

const TYPES = [
  { name: "Tủ phân phối tổng MSB / MDB", desc: "Dòng định mức đến 6300A, dạng form 2/3b/4b, thanh cái đồng chịu ngắn mạch theo tính toán Icw." },
  { name: "Tủ phân phối nhánh DB / SDB", desc: "Tủ phân phối tầng, tủ khu vực cho nhà máy, kho vận, tòa nhà; vỏ sơn tĩnh điện IP42–IP65." },
  { name: "Tủ tụ bù công suất phản kháng", desc: "Tủ bù tự động 6–12 cấp, có/không cuộn kháng lọc sóng hài, bảo vệ nhiệt cho tụ." },
  { name: "Tủ ATS / chuyển nguồn", desc: "Chuyển nguồn tự động lưới – máy phát, dùng khí cụ ABB/Schneider/Socomec theo yêu cầu chủ đầu tư." },
  { name: "Tủ điều khiển động cơ MCC & tủ VSD", desc: "Điều khiển bơm, quạt, băng tải; tích hợp biến tần, soft starter, PLC/HMI và giám sát từ xa." },
  { name: "Tủ điện cho hệ solar", desc: "Tủ DC combiner, tủ AC inverter, tủ hòa lưới cho ĐMTMN và trang trại điện mặt trời quy mô MWp." },
];

const PROCESS = [
  "Tiếp nhận yêu cầu, bóc tách single-line & khí cụ",
  "Thiết kế kỹ thuật, bản vẽ shop drawing – duyệt với chủ đầu tư",
  "Gia công cơ khí vỏ tủ, sơn tĩnh điện",
  "Lắp ráp thanh cái, khí cụ, đi dây theo tiêu chuẩn",
  "Thử nghiệm routine test, ghi biên bản",
  "Đóng gói – giao hàng – hỗ trợ lắp đặt & nghiệm thu",
];

function Page() {
  const electricalArticles = KNOWLEDGE_ARTICLES.filter((a) =>
    [
      "tu-dien-cong-nghiep-la-gi",
      "tieu-chuan-iec-61439-la-gi",
      "cach-tinh-dong-ngan-mach-icw-tu-msb",
      "roi-tu-mcc-dung-vsd-cho-bom-quat",
      "so-sanh-form-tu-dien-form-1-2b-3b-4b",
      "tham-dinh-shop-drawing-tu-dien-ha-the",
    ].includes(a.slug)
  );

  return (
    <>
      <OrganizationSchema />
      <CollectionPageSchema
        name="Danh mục Tủ điện công nghiệp PTC"
        description="Thư viện kiến thức kỹ thuật về tủ điện hạ thế: tiêu chuẩn IEC 61439, cách tính dòng ngắn mạch, chọn Form tủ, ROI biến tần và quy trình nghiệm thu."
        url="/tu-dien-cong-nghiep"
        itemCount={electricalArticles.length}
      />

      <PageHero
        title="Tủ điện công nghiệp hạ thế"
        subtitle="Thiết kế, sản xuất và thử nghiệm tủ bảng điện hạ thế theo IEC 61439-1&2 và TCVN 7994-1:2009 cho nhà máy, khu công nghiệp, tòa nhà và dự án điện mặt trời."
        image={IMAGES.switchboard}
      >
        <ZaloButton size="lg" location="hero-tu-dien" />
        <CallButton size="lg" location="hero-tu-dien" variant="outlineLight" />
      </PageHero>

      <Section>
        <SectionHeading eyebrow="Danh mục sản phẩm" title="Các loại tủ điện PTC sản xuất" />
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {TYPES.map((t) => (
            <div key={t.name} className="rule-top bg-card pt-5">
              <h3 className="text-base font-bold text-ink">{t.name}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{t.desc}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section tone="muted">
        <div className="grid gap-10 lg:grid-cols-2 lg:items-start">
          <div>
            <SectionHeading eyebrow="Thông số kỹ thuật" title="Dải thông số tiêu biểu" />
            <dl className="divide-y divide-border border-y border-border text-sm">
              {[
                ["Điện áp định mức", "≤ 1000V AC, 50/60Hz"],
                ["Dòng định mức", "100A – 6300A"],
                ["Dòng chịu ngắn mạch Icw", "25kA – 100kA / 1s"],
                ["Cấp bảo vệ", "IP42 – IP65 (trong nhà / ngoài trời)"],
                ["Dạng phân tách", "Form 1, 2b, 3b, 4b"],
                ["Vỏ tủ", "Thép tấm 1.2–2.0mm, sơn tĩnh điện RAL 7032/7035"],
              ].map(([k, v]) => (
                <div key={k} className="grid grid-cols-2 gap-4 py-3">
                  <dt className="font-semibold text-ink">{k}</dt>
                  <dd className="text-muted-foreground">{v}</dd>
                </div>
              ))}
            </dl>
          </div>
          <div>
            <SectionHeading eyebrow="Quy trình" title="Từ bản vẽ đến nghiệm thu" />
            <ol className="space-y-4">
              {PROCESS.map((step, i) => (
                <li key={step} className="flex gap-4">
                  <span className="grid size-8 shrink-0 place-items-center bg-primary text-sm font-bold text-primary-foreground">
                    {i + 1}
                  </span>
                  <span className="pt-1 text-sm text-muted-foreground">{step}</span>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </Section>

      <Section>
        <SectionHeading eyebrow="Vì sao chọn PTC" title="Cam kết chất lượng thật – tiến độ thật" />
        <ul className="grid gap-4 md:grid-cols-2">
          {[
            "Đội ngũ kỹ sư giàu kinh nghiệm dự án nhà máy FDI và KCN",
            "Thử nghiệm routine test đầy đủ, có biên bản kèm hồ sơ nghiệm thu",
            "Khí cụ điện chính hãng ABB, Schneider, Mitsubishi, LS, Socomec",
            "Hỗ trợ kỹ thuật tại công trường và bảo hành 12–24 tháng",
          ].map((i) => (
            <li key={i} className="flex gap-3 border border-border bg-card p-5 text-sm text-muted-foreground">
              <CheckCircle2 className="mt-0.5 size-4 shrink-0 text-primary" aria-hidden="true" />
              {i}
            </li>
          ))}
        </ul>
      </Section>

      <Section tone="muted">
        <SectionHeading
          eyebrow="Kiến thức kỹ thuật"
          title="Tài liệu tham khảo về tủ điện hạ thế"
          description="Bài viết chuyên sâu về tiêu chuẩn IEC 61439, cách tính dòng ngắn mạch, chọn Form tủ và quy trình nghiệm thu."
        />
        <div className="mt-6 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {KNOWLEDGE_ARTICLES
            .filter((a) =>
              [
                "tu-dien-cong-nghiep-la-gi",
                "tieu-chuan-iec-61439-la-gi",
                "cach-tinh-dong-ngan-mach-icw-tu-msb",
                "roi-tu-mcc-dung-vsd-cho-bom-quat",
                "so-sanh-form-tu-dien-form-1-2b-3b-4b",
                "tham-dinh-shop-drawing-tu-dien-ha-the",
              ].includes(a.slug)
            )
            .map((article) => (
              <Link
                key={article.slug}
                to={`/kien-thuc/${article.slug}` as never}
                className="group flex flex-col justify-between rounded-lg border border-border bg-card p-5 transition-all duration-200 hover:border-primary/50 hover:shadow-md"
              >
                <div>
                  <div className="flex items-center justify-between text-xs font-semibold text-primary">
                    <span className="rounded bg-primary/10 px-2 py-0.5">{article.category}</span>
                    <span className="text-muted-foreground">{article.readTime}</span>
                  </div>
                  <h3 className="mt-3 text-sm font-bold leading-snug text-ink transition-colors group-hover:text-primary">
                    {article.title}
                  </h3>
                  <p className="mt-2 text-xs leading-relaxed text-muted-foreground line-clamp-2">
                    {article.quickAnswer}
                  </p>
                </div>
                <div className="mt-4 flex items-center gap-1 text-xs font-semibold text-primary">
                  Đọc bài viết <ArrowRight className="size-3 transition-transform group-hover:translate-x-1" aria-hidden="true" />
                </div>
              </Link>
            ))}
        </div>
        <div className="mt-6 text-center">
          <Link
            to="/kien-thuc" as never
            className="inline-flex items-center gap-2 text-sm font-semibold text-primary hover:underline"
          >
            <BookOpen className="size-4" aria-hidden="true" />
            Xem tất cả bài viết kiến thức kỹ thuật
            <ArrowRight className="size-4" aria-hidden="true" />
          </Link>
        </div>
      </Section>

      <LeadSection
        title="Nhận báo giá tủ điện theo SLD/BOQ"
        defaultNeed="tu-dien"
        sourcePage="tu-dien-cong-nghiep"
      />
    </>
  );
}
