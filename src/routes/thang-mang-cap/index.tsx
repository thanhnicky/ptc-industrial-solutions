import { createFileRoute, Link } from "@tanstack/react-router";
import { CheckCircle2, ArrowRight, BookOpen } from "lucide-react";
import { PageHero } from "@/components/site/PageHero";
import { Section, SectionHeading } from "@/components/site/Section";
import { LeadSection } from "@/components/site/LeadSection";
import { ZaloButton, CallButton } from "@/components/site/ZaloButton";
import { IMAGES } from "@/components/site/images";
import { OrganizationSchema, CollectionPageSchema } from "@/components/seo/JsonLd";
import { KNOWLEDGE_ARTICLES } from "@/lib/site";

const TITLE = "Thang máng cáp mạ kẽm nhúng nóng, sơn tĩnh điện | PTC";
const DESC =
  "PTC sản xuất thang cáp, máng cáp, khay cáp và phụ kiện theo kích thước dự án: mạ kẽm nhúng nóng, mạ điện phân hoặc sơn tĩnh điện, giao hàng đúng tiến độ.";

export const Route = createFileRoute("/thang-mang-cap/")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESC },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESC },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { property: "og:url", content: "https://www.tudienptc.vn/thang-mang-cap" },
    ],
    links: [{ rel: "canonical", href: "https://www.tudienptc.vn/thang-mang-cap" }],
  }),
  component: Page,
});

const PRODUCTS = [
  { name: "Thang cáp (Cable Ladder)", desc: "Dùng cho tuyến cáp trục chính, tải trọng lớn, thoáng nhiệt; bề rộng 100–1200mm." },
  { name: "Máng cáp (Cable Trunking)", desc: "Máng có nắp đậy, bảo vệ cáp khỏi bụi và va đập, phù hợp khu vực kỹ thuật và tòa nhà." },
  { name: "Khay cáp (Cable Tray)", desc: "Khay đục lỗ thoát nhiệt, dễ rẽ nhánh, giúp tiết kiệm chi phí cho tuyến cáp phân phối." },
  { name: "Phụ kiện đồng bộ", desc: "Co ngang/đứng, tê, chữ thập, giảm, nắp đậy, thanh treo, ty ren và bulong liên kết." },
];

function Page() {
  const cableTrayArticles = KNOWLEDGE_ARTICLES.filter((a) =>
    [
      "thang-mang-cap-la-gi",
      "phan-biet-thang-cap-khay-cap-mang-cap",
      "chon-kich-thuoc-thang-mang-cap-he-so-lap-day",
      "so-sanh-ma-kem-nhung-nong-vs-dien-phan",
    ].includes(a.slug)
  );

  return (
    <>
      <OrganizationSchema />
      <CollectionPageSchema
        name="Danh mục Thang máng cáp PTC"
        description="Thư viện kiến thức kỹ thuật về thang máng cáp: cách chọn kích thước, phân biệt thang/khay/máng, so sánh mạ kẽm nhúng nóng và điện phân."
        url="/thang-mang-cap"
        itemCount={cableTrayArticles.length}
      />

      <PageHero
        title="Thang máng cáp công nghiệp"
        subtitle="Sản xuất theo kích thước và lớp phủ bề mặt của từng dự án: mạ kẽm nhúng nóng, mạ kẽm điện phân, sơn tĩnh điện hoặc inox 304."
        image={IMAGES.cabletray}
      >
        <ZaloButton size="lg" location="hero-tmc" />
        <CallButton size="lg" location="hero-tmc" variant="outlineLight" />
      </PageHero>

      <Section>
        <SectionHeading eyebrow="Danh mục" title="Sản phẩm thang máng cáp" />
        <div className="grid gap-6 md:grid-cols-2">
          {PRODUCTS.map((p) => (
            <div key={p.name} className="rule-top bg-card pt-5">
              <h3 className="text-base font-bold text-ink">{p.name}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{p.desc}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section tone="muted">
        <div className="grid gap-10 lg:grid-cols-2 lg:items-start">
          <div>
            <SectionHeading eyebrow="Quy cách" title="Thông số sản xuất" />
            <dl className="divide-y divide-border border-y border-border text-sm">
              {[
                ["Vật liệu", "Thép cán nguội CRC, thép mạ kẽm, inox 304/316"],
                ["Độ dày", "0.8 – 2.5 mm theo tải trọng thiết kế"],
                ["Bề rộng", "50 – 1200 mm"],
                ["Chiều cao thành", "50 / 75 / 100 / 150 mm"],
                ["Chiều dài cây", "2.500 mm hoặc 3.000 mm"],
                ["Lớp phủ", "Mạ kẽm nhúng nóng, mạ điện phân, sơn tĩnh điện"],
              ].map(([k, v]) => (
                <div key={k} className="grid grid-cols-2 gap-4 py-3">
                  <dt className="font-semibold text-ink">{k}</dt>
                  <dd className="text-muted-foreground">{v}</dd>
                </div>
              ))}
            </dl>
          </div>
          <div>
            <SectionHeading eyebrow="Lợi ích" title="Vì sao đặt thang máng cáp tại PTC" />
            <ul className="space-y-4">
              {[
                "Cùng nhà cung cấp với tủ điện – một đầu mối, một hồ sơ nghiệm thu",
                "Gia công theo bản vẽ dự án, hạn chế cắt gọt tại công trường",
                "Kho thép và dây chuyền đột dập chủ động, rút ngắn thời gian giao hàng",
                "Đóng bó theo từng tuyến/tầng, thuận tiện thi công cuốn chiếu",
              ].map((i) => (
                <li key={i} className="flex gap-3 text-sm text-muted-foreground">
                  <CheckCircle2 className="mt-0.5 size-4 shrink-0 text-primary" aria-hidden="true" />
                  {i}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Section>

      <Section tone="muted">
        <SectionHeading
          eyebrow="Kiến thức kỹ thuật"
          title="Tài liệu tham khảo về thang máng cáp"
          description="Bài viết chuyên sâu về cách chọn kích thước, phân biệt thang/khay/máng, so sánh phương pháp mạ kẽm và tiêu chuẩn IEC 61537."
        />
        <div className="mt-6 grid gap-4 md:grid-cols-2">
          {cableTrayArticles.map((article) => (
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
        title="Gửi bản vẽ – nhận báo giá thang máng cáp"
        intro="Gửi khối lượng hoặc bản vẽ tuyến cáp, kỹ sư PTC sẽ bóc tách khối lượng và gửi báo giá."
        defaultNeed="thang-mang-cap"
        sourcePage="thang-mang-cap"
      />
    </>
  );
}
