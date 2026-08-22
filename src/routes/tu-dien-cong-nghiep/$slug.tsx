import { createFileRoute, notFound } from "@tanstack/react-router";
import { CheckCircle2, ShieldCheck, Zap } from "lucide-react";
import { PageHero } from "@/components/site/PageHero";
import { Section, SectionHeading } from "@/components/site/Section";
import { Breadcrumbs } from "@/components/site/Breadcrumbs";
import { QuickSummary } from "@/components/site/QuickSummary";
import { TechnicalTable } from "@/components/site/TechnicalTable";
import { ZaloButton, CallButton } from "@/components/site/ZaloButton";
import { LeadSection } from "@/components/site/LeadSection";
import { IMAGES } from "@/components/site/images";
import { ELECTRICAL_PRODUCTS } from "@/lib/site";
import { ProductSchema, FAQSchema } from "@/components/seo/JsonLd";
import { RelatedProducts } from "@/components/site/RelatedProducts";
import { RelatedArticles } from "@/components/site/RelatedArticles";

interface ProductType {
  slug: string;
  name: string;
  shortDesc: string;
  rating: string;
  standard: string;
  ip: string;
  form: string;
  useCases: string[];
}

export const Route = createFileRoute("/tu-dien-cong-nghiep/$slug")({
  loader: ({ params }: { params: { slug: string } }) => {
    const product = ELECTRICAL_PRODUCTS.find((p) => p.slug === params.slug);
    if (!product) {
      throw notFound();
    }
    return { product: product as ProductType };
  },
  head: ({ loaderData }: { loaderData?: { product: ProductType } }) => {
    const product = loaderData?.product;
    if (!product) return {};

    const title = `${product.name} | Sản xuất theo IEC 61439 – PTC`;
    const desc = `${product.shortDesc} Dòng định mức ${product.rating}, tiêu chuẩn ${product.standard}, Form ${product.form}. Báo giá kỹ thuật nhanh chóng từ PTC.`;

    return {
      meta: [
        { title },
        { name: "description", content: desc },
        { property: "og:title", content: title },
        { property: "og:description", content: desc },
        { property: "og:type", content: "product" },
        { name: "twitter:card", content: "summary_large_image" },
        { property: "og:url", content: `https://tudienptc.vn/tu-dien-cong-nghiep/${product.slug}` },
      ],
      links: [{ rel: "canonical", href: `https://tudienptc.vn/tu-dien-cong-nghiep/${product.slug}` }],
    };
  },
  component: Page,
});

function Page() {
  const { product } = Route.useLoaderData() as { product: ProductType };

  const faqs = [
    {
      question: `Thời gian sản xuất và giao hàng ${product.name} tại PTC là bao lâu?`,
      answer: `Thời gian sản xuất phụ thuộc vào quy mô tủ và tính sẵn có của thiết bị đóng cắt chỉ định, thông thường từ 10 đến 25 ngày làm việc. Với các dự án gấp, PTC hỗ trợ giao cuốn chiếu theo từng mốc tiến độ thi công công trường.`,
    },
    {
      question: `PTC sử dụng thiết bị đóng cắt của những thương hiệu nào cho ${product.name}?`,
      answer: `PTC lắp đặt theo đúng chỉ định của hồ sơ thiết kế và chủ đầu tư, bao gồm các hãng phổ biến: Schneider Electric, ABB, Mitsubishi Electric, LS Electric, Socomec, Fuji, Siemens... Tất cả khí cụ đều có đầy đủ chứng chỉ CO/CQ chính hãng.`,
    },
    {
      question: `Cần cung cấp những thông tin gì để nhận báo giá kỹ thuật cho ${product.name}?`,
      answer: `Khách hàng chỉ cần gửi sơ đồ nguyên lý đơn tuyến (Single-line diagram), yêu cầu về hãng thiết bị (nếu có), cấp Form ngăn khoang, cấp bảo vệ IP và mốc tiến độ giao hàng mong muốn. Kỹ sư PTC sẽ bóc tách và phản hồi nhanh chóng.`,
    },
  ];

  const tableHeaders = ["Thông số kỹ thuật", "Giá trị tiêu chuẩn / Tùy chọn"];
  const tableRows = [
    ["Tiêu chuẩn áp dụng", product.standard],
    ["Dòng điện định mức (In)", product.rating],
    ["Cấp bảo vệ vỏ tủ (IP)", product.ip],
    ["Cấp phân chia khoang (Form)", product.form],
    ["Vật liệu vỏ tủ", "Tôn thép cán nguội sơn tĩnh điện RAL / Inox 304 theo yêu cầu"],
    ["Thanh cái dẫn điện (Busbar)", "Đồng điện phân Cu >= 99.9%, bọc co nhiệt phân pha màu"],
    ["Kiểm tra xuất xưởng", "100% Routine Test theo IEC 61439-2 trước khi xuất xưởng"],
    ["Hồ sơ nghiệm thu", "Bản vẽ As-built, chứng chỉ CO/CQ thiết bị, biên bản Routine Test"],
  ];

  return (
    <>
      <ProductSchema
        name={product.name}
        description={product.shortDesc}
        category="Tủ điện hạ thế công nghiệp"
        url={`/tu-dien-cong-nghiep/${product.slug}`}
        image="/logo-ptc.png"
      />
      <FAQSchema items={faqs} />

      <PageHero
        title={product.name}
        subtitle={`${product.shortDesc} Thiết kế và thử nghiệm tại nhà máy ~ 3.000 m² của PTC theo tiêu chuẩn IEC 61439-1 & 2 và ISO 9001:2015.`}
        image={IMAGES.switchboard}
      >
        <ZaloButton size="lg" location={`hero-${product.slug}`} label="Nhắn Zalo gửi bản vẽ báo giá" />
        <CallButton size="lg" location={`hero-${product.slug}`} variant="outlineLight" />
      </PageHero>

      <Section>
        <div className="mx-auto max-w-4xl space-y-10">
          <Breadcrumbs
            items={[
              { name: "Tủ điện công nghiệp", item: "/tu-dien-cong-nghiep" },
              { name: product.name, item: `/tu-dien-cong-nghiep/${product.slug}` },
            ]}
          />

          {/* GEO/AIO Direct Answer */}
          <div className="space-y-4">
            <h1 className="text-2xl font-bold tracking-tight text-ink sm:text-3xl">
              {product.name} – Thiết kế & Chế tạo theo tiêu chuẩn IEC 61439
            </h1>
            <p className="text-base leading-relaxed text-muted-foreground">
              <strong>{product.name}</strong> do PTC Switchboard chế tạo là giải pháp phân phối/điều khiển điện an toàn, vận hành tin cậy cho các dự án nhà máy, khu công nghiệp và tòa nhà. Tủ được thiết kế chuyên biệt theo sơ đồ đơn tuyến phê duyệt, gia công cơ khí CNC chính xác, thanh cái đồng tính toán theo dòng định mức và dòng ngắn mạch Icw, trải qua 100% Routine Test trước khi xuất xưởng.
            </p>
          </div>

          <QuickSummary
            title="Đặc tính kỹ thuật cốt lõi"
            bullets={[
              `Tiêu chuẩn thiết kế & thử nghiệm: ${product.standard}.`,
              `Dòng điện định mức: ${product.rating} (Tùy cấu hình và yêu cầu dự án).`,
              `Cấp cách ly khoang Form tủ: ${product.form}.`,
              `Cấp bảo vệ vỏ tủ: ${product.ip}.`,
              "Kiểm soát chất lượng: Thử nghiệm Routine test 100% từng tủ và bàn giao kèm đầy đủ hồ sơ nghiệm thu, CO/CQ.",
            ]}
          />

          {/* Ứng dụng thực tế */}
          <div>
            <SectionHeading eyebrow="Phạm vi ứng dụng" title="Khi nào nên sử dụng giải pháp này?" />
            <div className="mt-4 grid gap-3 sm:grid-cols-2">
              {product.useCases.map((useCase, idx) => (
                <div key={idx} className="flex items-center gap-2.5 rounded-lg border border-border bg-card p-4">
                  <CheckCircle2 className="size-4 shrink-0 text-primary" aria-hidden="true" />
                  <span className="text-xs font-semibold text-ink">{useCase}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Bảng thông số kỹ thuật */}
          <div>
            <SectionHeading eyebrow="Quy cách chi tiết" title="Bảng thông số kỹ thuật & Tùy chọn cấu hình" />
            <div className="mt-4">
              <TechnicalTable headers={tableHeaders} rows={tableRows} />
            </div>
          </div>

          {/* Quy trình đặt hàng theo bản vẽ */}
          <div className="rounded-lg border border-border bg-card p-6">
            <h2 className="text-base font-bold text-ink">Quy trình báo giá & sản xuất tại PTC</h2>
            <ol className="mt-4 space-y-3 text-xs leading-relaxed text-muted-foreground">
              <li className="flex gap-2.5">
                <span className="font-bold text-primary">1.</span>
                <span><strong>Tiếp nhận hồ sơ:</strong> Quý khách gửi sơ đồ đơn tuyến (Single-line diagram) và bảng BOQ khối lượng.</span>
              </li>
              <li className="flex gap-2.5">
                <span className="font-bold text-primary">2.</span>
                <span><strong>Bóc tách & Tối ưu:</strong> Kỹ sư PTC rà soát thông số, tính toán Icw và phát hành báo giá kỹ thuật kèm tiến độ.</span>
              </li>
              <li className="flex gap-2.5">
                <span className="font-bold text-primary">3.</span>
                <span><strong>Trình duyệt bản vẽ:</strong> Phát hành bản vẽ Shop drawing bố trí thiết bị (Layout 2D/3D) để tư vấn phê duyệt.</span>
              </li>
              <li className="flex gap-2.5">
                <span className="font-bold text-primary">4.</span>
                <span><strong>Sản xuất & Routine Test:</strong> Gia công CNC, sơn tĩnh điện, lắp ráp thanh cái và thử nghiệm 100% tại xưởng.</span>
              </li>
            </ol>
          </div>

          {/* FAQ */}
          <div>
            <SectionHeading eyebrow="Hỏi đáp chuyên môn" title="Câu hỏi thường gặp về sản phẩm" />
            <div className="mt-4 space-y-4">
              {faqs.map((faq, idx) => (
                <div key={idx} className="rounded-lg border border-border bg-card p-5">
                  <h3 className="text-sm font-semibold text-ink">{faq.question}</h3>
                  <p className="mt-2 text-xs leading-relaxed text-muted-foreground">{faq.answer}</p>
                </div>
              ))}
            </div>
          </div>

          <RelatedProducts currentSlug={product.slug} type="electrical" />
          <RelatedArticles currentSlug="tu-dien-cong-nghiep-la-gi" />
        </div>
      </Section>

      <LeadSection
        title={`Yêu cầu báo giá kỹ thuật cho ${product.name}`}
        intro="Gửi bản vẽ đơn tuyến hoặc thông số phụ tải để kỹ sư PTC tính toán cấu hình và gửi báo giá tối ưu."
        defaultNeed="tu-dien"
        sourcePage={`product-${product.slug}`}
      />
    </>
  );
}
