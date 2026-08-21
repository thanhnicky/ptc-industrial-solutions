import { createFileRoute, notFound } from "@tanstack/react-router";
import { CheckCircle2 } from "lucide-react";
import { PageHero } from "@/components/site/PageHero";
import { Section, SectionHeading } from "@/components/site/Section";
import { Breadcrumbs } from "@/components/site/Breadcrumbs";
import { QuickSummary } from "@/components/site/QuickSummary";
import { TechnicalTable } from "@/components/site/TechnicalTable";
import { ZaloButton, CallButton } from "@/components/site/ZaloButton";
import { LeadSection } from "@/components/site/LeadSection";
import { IMAGES } from "@/components/site/images";
import { CABLE_TRAY_PRODUCTS } from "@/lib/site";
import { ProductSchema, FAQSchema } from "@/components/seo/JsonLd";
import { RelatedProducts } from "@/components/site/RelatedProducts";
import { RelatedArticles } from "@/components/site/RelatedArticles";

interface CableProductType {
  slug: string;
  name: string;
  shortDesc: string;
  width: string;
  height: string;
  thickness: string;
  finish: string;
  useCases: string[];
}

export const Route = createFileRoute("/thang-mang-cap/$slug")({
  loader: ({ params }: { params: { slug: string } }) => {
    const product = CABLE_TRAY_PRODUCTS.find((p) => p.slug === params.slug);
    if (!product) {
      throw notFound();
    }
    return { product: product as CableProductType };
  },
  head: ({ loaderData }: { loaderData?: { product: CableProductType } }) => {
    const product = loaderData?.product;
    if (!product) return {};

    const title = `${product.name} | Gia công theo BOQ dự án – PTC`;
    const desc = `${product.shortDesc} Kích thước W${product.width}, H${product.height}, độ dày ${product.thickness}, lớp phủ ${product.finish}. Báo giá nhanh từ PTC.`;

    return {
      meta: [
        { title },
        { name: "description", content: desc },
        { property: "og:title", content: title },
        { property: "og:description", content: desc },
        { property: "og:type", content: "product" },
        { name: "twitter:card", content: "summary_large_image" },
        { property: "og:url", content: `https://tudienptc.vn/thang-mang-cap/${product.slug}` },
      ],
      links: [{ rel: "canonical", href: `https://tudienptc.vn/thang-mang-cap/${product.slug}` }],
    };
  },
  component: Page,
});

function Page() {
  const { product } = Route.useLoaderData() as { product: CableProductType };

  const faqs = [
    {
      question: `Độ dày tiêu chuẩn của ${product.name} tại PTC là bao nhiêu?`,
      answer: `PTC gia công độ dày theo đúng bảng BOQ và yêu cầu tải trọng của dự án, thông thường từ 0.8mm đến 2.5mm đối với sơn tĩnh điện/tôn mạ kẽm, và từ 1.5mm đến 2.5mm đối với mạ kẽm nhúng nóng để chống cong vênh khi nhúng bể kẽm nhiệt độ cao.`,
    },
    {
      question: `PTC có cung cấp trọn bộ phụ kiện co, tê, giảm cho ${product.name} không?`,
      answer: `Có. PTC sản xuất đồng bộ 100% phụ kiện đi kèm gồm co ngang 90°, tê, chữ thập, co lên/co xuống, giảm đều/lệch, nắp đậy, nối máng, ty treo, quang treo khớp chính xác kích thước tuyến máng.`,
    },
    {
      question: `Tiêu chuẩn mạ kẽm nhúng nóng áp dụng cho ${product.name} là gì?`,
      answer: `Đối với các sản phẩm mạ kẽm nhúng nóng, PTC áp dụng theo tiêu chuẩn ASTM A123 / ISO 1461 với chiều dày lớp mạ trung bình đạt từ 65 đến 85 µm, đảm bảo khả năng chống gỉ sét bền bỉ trong môi trường công nghiệp ngoài trời và vùng biển.`,
    },
  ];

  const tableHeaders = ["Thông số kỹ thuật", "Quy cách chế tạo tại xưởng PTC"];
  const tableRows = [
    ["Chiều rộng tiêu chuẩn (W)", product.width],
    ["Chiều cao thành máng (H)", product.height],
    ["Độ dày vật liệu (T)", product.thickness],
    ["Bề mặt hoàn thiện", product.finish],
    ["Chiều dài tiêu chuẩn cây", "2.5m – 3.0m / cây (hoặc theo yêu cầu lắp đặt)"],
    ["Phụ kiện đồng bộ", "Co vuông, Tê, Chữ thập, Co đứng, Nối máng, Nắp đậy, Ty treo"],
    ["Tiêu chuẩn kỹ thuật", "TCVN 10688, ASTM A123 (với mạ nhúng nóng), ISO 9001:2015"],
  ];

  return (
    <>
      <ProductSchema
        name={product.name}
        description={product.shortDesc}
        category="Thang máng cáp công nghiệp"
        url={`/thang-mang-cap/${product.slug}`}
        image="/logo-ptc.png"
      />
      <FAQSchema items={faqs} />

      <PageHero
        title={product.name}
        subtitle={`${product.shortDesc} Gia công chính xác trên dây chuyền cơ khí CNC PTC, giao hàng cuốn chiếu đúng mốc tiến độ thi công MEP.`}
        image={IMAGES.cabletray}
      >
        <ZaloButton size="lg" location={`hero-${product.slug}`} label="Nhắn Zalo gửi BOQ máng cáp" />
        <CallButton size="lg" location={`hero-${product.slug}`} variant="outlineLight" />
      </PageHero>

      <Section>
        <div className="mx-auto max-w-4xl space-y-10">
          <Breadcrumbs
            items={[
              { name: "Thang máng cáp", item: "/thang-mang-cap" },
              { name: product.name, item: `/thang-mang-cap/${product.slug}` },
            ]}
          />

          {/* GEO/AIO Direct Answer */}
          <div className="space-y-4">
            <h1 className="text-2xl font-bold tracking-tight text-ink sm:text-3xl">
              {product.name} – Sản xuất theo quy cách & BOQ dự án
            </h1>
            <p className="text-base leading-relaxed text-muted-foreground">
              <strong>{product.name}</strong> của PTC Switchboard là giải pháp dẫn hướng, phân phối và bảo vệ tuyến cáp điện lực & điều khiển tối ưu cho các công trình công nghiệp. Sản phẩm được đột dập CNC chính xác, chấn góc cứng vững, xử lý bề mặt chuyên sâu giúp chịu tải trọng lớn, chống võng và chống ăn mòn hiệu quả.
            </p>
          </div>

          <QuickSummary
            title="Đặc tính quy cách nổi bật"
            bullets={[
              `Quy cách kích thước: Chiều rộng ${product.width}, chiều cao ${product.height}.`,
              `Độ dày tôn thép: ${product.thickness}.`,
              `Bề mặt hoàn thiện: ${product.finish}.`,
              "Đồng bộ phụ kiện: Co ngang, tê, giảm, co đứng, nắp đậy và thanh giằng gá đỡ ăn khớp 100%.",
              "Tiến độ linh hoạt: Giao hàng cuốn chiếu bám sát tiến độ lắp đặt của tổng thầu M&E.",
            ]}
          />

          {/* Ứng dụng thực tế */}
          <div>
            <SectionHeading eyebrow="Ứng dụng dự án" title="Phạm vi công trình phù hợp" />
            <div className="mt-4 grid gap-3 sm:grid-cols-2">
              {product.useCases.map((useCase, idx) => (
                <div key={idx} className="flex items-center gap-2.5 rounded-lg border border-border bg-card p-4">
                  <CheckCircle2 className="size-4 shrink-0 text-primary" aria-hidden="true" />
                  <span className="text-xs font-semibold text-ink">{useCase}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Bảng thông số */}
          <div>
            <SectionHeading eyebrow="Bảng thông số" title="Quy cách chi tiết & Tùy chọn bề mặt" />
            <div className="mt-4">
              <TechnicalTable headers={tableHeaders} rows={tableRows} />
            </div>
          </div>

          {/* Quy trình gửi BOQ */}
          <div className="rounded-lg border border-border bg-card p-6">
            <h2 className="text-base font-bold text-ink">Quy trình bóc tách BOQ thang máng cáp tại PTC</h2>
            <ol className="mt-4 space-y-3 text-xs leading-relaxed text-muted-foreground">
              <li className="flex gap-2.5">
                <span className="font-bold text-primary">1.</span>
                <span><strong>Gửi bảng khối lượng (BOQ):</strong> Danh mục chiều rộng, chiều cao, độ dày, bề mặt và số lượng phụ kiện co, tê, giảm.</span>
              </li>
              <li className="flex gap-2.5">
                <span className="font-bold text-primary">2.</span>
                <span><strong>Bóc tách & Khớp phụ kiện:</strong> Kỹ sư PTC kiểm tra sự ăn khớp giữa phụ kiện và tuyến máng chính để tránh phát sinh tại công trường.</span>
              </li>
              <li className="flex gap-2.5">
                <span className="font-bold text-primary">3.</span>
                <span><strong>Gia công CNC & Xử lý bề mặt:</strong> Cắt laser, đột lỗ tản nhiệt, chấn thủy lực và sơn tĩnh điện / mạ kẽm nhúng nóng.</span>
              </li>
              <li className="flex gap-2.5">
                <span className="font-bold text-primary">4.</span>
                <span><strong>Giao hàng theo block thi công:</strong> Bọc màng PE bảo vệ, đánh mã phụ kiện rõ ràng, giao cuốn chiếu đến công trường.</span>
              </li>
            </ol>
          </div>

          {/* FAQs */}
          <div>
            <SectionHeading eyebrow="Hỏi đáp kỹ thuật" title="Câu hỏi thường gặp về thang máng cáp" />
            <div className="mt-4 space-y-4">
              {faqs.map((faq, idx) => (
                <div key={idx} className="rounded-lg border border-border bg-card p-5">
                  <h3 className="text-sm font-semibold text-ink">{faq.question}</h3>
                  <p className="mt-2 text-xs leading-relaxed text-muted-foreground">{faq.answer}</p>
                </div>
              ))}
            </div>
          </div>

          <RelatedProducts currentSlug={product.slug} type="cable-tray" />
          <RelatedArticles currentSlug="phan-biet-thang-cap-khay-cap-mang-cap" />
        </div>
      </Section>

      <LeadSection
        title={`Yêu cầu báo giá cho ${product.name}`}
        intro="Gửi bảng BOQ hoặc quy cách tuyến cáp để kỹ sư PTC bóc tách phụ kiện và gửi báo giá nhanh chóng."
        defaultNeed="thang-mang-cap"
        sourcePage={`product-${product.slug}`}
      />
    </>
  );
}
