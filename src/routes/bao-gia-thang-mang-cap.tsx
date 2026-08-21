import { createFileRoute } from "@tanstack/react-router";
import { CheckCircle2 } from "lucide-react";
import { PageHero } from "@/components/site/PageHero";
import { Section } from "@/components/site/Section";
import { Breadcrumbs } from "@/components/site/Breadcrumbs";
import { QuickSummary } from "@/components/site/QuickSummary";
import { ZaloButton } from "@/components/site/ZaloButton";
import { LeadForm } from "@/components/site/LeadForm";
import { IMAGES } from "@/components/site/images";
import { OrganizationSchema } from "@/components/seo/JsonLd";
import { RelatedProducts } from "@/components/site/RelatedProducts";

const TITLE = "Báo giá Thang máng cáp theo quy cách & BOQ dự án | PTC";
const DESC =
  "Báo giá thang cáp, máng cáp, khay cáp mạ kẽm nhúng nóng / sơn tĩnh điện tại xưởng PTC. Khớp kích thước, đồng bộ phụ kiện, giao hàng đúng tiến độ.";

export const Route = createFileRoute("/bao-gia-thang-mang-cap")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESC },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESC },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { property: "og:url", content: "https://tudienptc.vn/bao-gia-thang-mang-cap" },
    ],
    links: [{ rel: "canonical", href: "https://tudienptc.vn/bao-gia-thang-mang-cap" }],
  }),
  component: Page,
});

function Page() {
  return (
    <>
      <OrganizationSchema />

      <PageHero
        title="Báo giá thang máng cáp"
        subtitle="Sản xuất trực tiếp trên dây chuyền cơ khí CNC PTC: Cán – đột – chấn và xử lý bề mặt theo đúng quy cách, chiều dày và lớp phủ dự án."
        image={IMAGES.cabletray}
      >
        <ZaloButton size="lg" location="hero-bao-gia-mang-cap" label="Nhắn Zalo gửi BOQ máng cáp" />
      </PageHero>

      <Section>
        <div className="mx-auto max-w-4xl space-y-10">
          <Breadcrumbs items={[{ name: "Báo giá thang máng cáp", item: "/bao-gia-thang-mang-cap" }]} />

          <div className="space-y-4">
            <h1 className="text-2xl font-bold tracking-tight text-ink sm:text-3xl">
              Yêu cầu báo giá thang máng cáp theo bản vẽ & bảng khối lượng
            </h1>
            <p className="text-base leading-relaxed text-muted-foreground">
              Báo giá thang máng cáp tại xưởng PTC được tính toán dựa trên: chủng loại (Thang / Máng / Khay), quy cách (Chiều rộng W x Chiều cao H x Chiều dày T), loại vật liệu / lớp phủ hoàn thiện (Mạ kẽm nhúng nóng ASTM A123, Sơn tĩnh điện RAL, Tôn mạ kẽm, Inox 304) và khối lượng phụ kiện co, tê, giảm đồng bộ.
            </p>
          </div>

          <QuickSummary
            title="Lợi thế khi đặt thang máng cáp tại PTC"
            bullets={[
              "Gia công linh hoạt theo BOQ: Đáp ứng mọi kích thước đặc thù từ W50mm đến W1200mm, chiều dày 0.8mm – 2.5mm.",
              "Đồng bộ phụ kiện 100%: Cung cấp trọn gói co ngang, tê, giảm, nắp đậy, ty treo, khớp chính xác từng khúc cua tuyến cáp.",
              "Đồng bộ cùng gói tủ điện: Đặt chung tủ điện và thang máng cáp giúp khớp mốc tiến độ giao hàng và giảm rủi ro chờ vật tư.",
              "Báo giá nhanh chóng: Phản hồi bảng bóc tách chi tiết theo từng hạng mục.",
            ]}
          />

          <div className="grid gap-10 lg:grid-cols-[1fr_1.15fr] lg:items-start">
            <div className="space-y-6">
              <div className="rounded-lg border border-border bg-card p-6">
                <h2 className="text-base font-bold text-ink">Các dòng thang máng cáp sản xuất:</h2>
                <ul className="mt-4 space-y-2.5 text-xs text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="mt-0.5 size-4 shrink-0 text-primary" aria-hidden="true" />
                    <span>Máng cáp (Cable Trunking) – Đáy kín bảo vệ tuyệt đối</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="mt-0.5 size-4 shrink-0 text-primary" aria-hidden="true" />
                    <span>Khay cáp (Cable Tray) – Đục lỗ tản nhiệt linh hoạt</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="mt-0.5 size-4 shrink-0 text-primary" aria-hidden="true" />
                    <span>Thang cáp (Cable Ladder) – Chuyên dụng cáp trục chính</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="mt-0.5 size-4 shrink-0 text-primary" aria-hidden="true" />
                    <span>Sàn thao tác & giá đỡ MEP gia công kết cấu thép</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="mt-0.5 size-4 shrink-0 text-primary" aria-hidden="true" />
                    <span>Mạ kẽm nhúng nóng chuẩn ASTM A123 cho môi trường ngoài trời</span>
                  </li>
                </ul>
                <div className="mt-6 border-t border-border pt-4">
                  <ZaloButton size="default" location="bao-gia-mang-cap-sidebar" />
                </div>
              </div>
            </div>

            <LeadForm defaultNeed="thang-mang-cap" sourcePage="bao-gia-thang-mang-cap" />
          </div>

          <RelatedProducts currentSlug="mang-cap" type="cable-tray" />
        </div>
      </Section>
    </>
  );
}
