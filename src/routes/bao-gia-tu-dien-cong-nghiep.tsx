import { createFileRoute } from "@tanstack/react-router";
import { CheckCircle2, ShieldAlert } from "lucide-react";
import { PageHero } from "@/components/site/PageHero";
import { Section } from "@/components/site/Section";
import { Breadcrumbs } from "@/components/site/Breadcrumbs";
import { QuickSummary } from "@/components/site/QuickSummary";
import { ZaloButton } from "@/components/site/ZaloButton";
import { LeadForm } from "@/components/site/LeadForm";
import { IMAGES } from "@/components/site/images";
import { OrganizationSchema } from "@/components/seo/JsonLd";
import { RelatedProducts } from "@/components/site/RelatedProducts";

const TITLE = "Yêu cầu báo giá Tủ điện công nghiệp theo bản vẽ & BOQ | PTC";
const DESC =
  "Quy trình báo giá tủ điện công nghiệp (MSB, SDB, DB, MCC, VSD, Solar) từ PTC. Bóc tách single-line diagram, tối ưu chi phí, báo giá nhanh chóng.";

export const Route = createFileRoute("/bao-gia-tu-dien-cong-nghiep")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESC },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESC },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { property: "og:url", content: "https://tudienptc.vn/bao-gia-tu-dien-cong-nghiep" },
    ],
    links: [{ rel: "canonical", href: "https://tudienptc.vn/bao-gia-tu-dien-cong-nghiep" }],
  }),
  component: Page,
});

function Page() {
  return (
    <>
      <OrganizationSchema />

      <PageHero
        title="Báo giá tủ điện công nghiệp"
        subtitle="PTC không áp dụng bảng giá niêm yết đại trà mà tính toán chi phí chính xác theo sơ đồ đơn tuyến, cấu hình thiết bị và yêu cầu kỹ thuật từng dự án."
        image={IMAGES.switchboard}
      >
        <ZaloButton size="lg" location="hero-bao-gia-tu-dien" label="Nhắn Zalo gửi bản vẽ báo giá" />
      </PageHero>

      <Section>
        <div className="mx-auto max-w-4xl space-y-10">
          <Breadcrumbs items={[{ name: "Báo giá tủ điện", item: "/bao-gia-tu-dien-cong-nghiep" }]} />

          <div className="space-y-4">
            <h1 className="text-2xl font-bold tracking-tight text-ink sm:text-3xl">
              Yêu cầu báo giá kỹ thuật tủ điện hạ thế cho công trình
            </h1>
            <p className="text-base leading-relaxed text-muted-foreground">
              Báo giá tủ điện công nghiệp tại PTC phụ thuộc vào: dòng định mức máy cắt chính, dòng chịu ngắn mạch Icw của thanh cái đồng, Form ngăn khoang (Form 1 đến 4b), cấp bảo vệ vỏ tủ IP, nhãn hiệu khí cụ đóng cắt chỉ định và mốc tiến độ thi công.
            </p>
          </div>

          <QuickSummary
            title="Nguyên tắc báo giá kỹ thuật tại PTC"
            bullets={[
              "Bóc tách theo đúng bản vẽ: Kỹ sư PTC rà soát từng ngăn lộ, tính toán độ phát nhiệt và khả năng chịu ngắn mạch.",
              "Đề xuất tối ưu chi phí: Đưa ra các tùy chọn vật tư tương đương giúp nhà thầu tiết kiệm ngân sách mà vẫn đảm bảo tiêu chuẩn IEC 61439.",
              "Phản hồi nhanh chóng: Gửi báo giá chi tiết kèm bảng bóc tách khối lượng và mốc tiến độ giao hàng.",
              "Cam kết thiết bị chính hãng: Đầy đủ chứng nhận CO/CQ từ nhà sản xuất khí cụ (Schneider, ABB, Mitsubishi, LS...).",
            ]}
          />

          <div className="grid gap-10 lg:grid-cols-[1fr_1.15fr] lg:items-start">
            <div className="space-y-6">
              <div className="rounded-lg border border-border bg-card p-6">
                <h2 className="text-base font-bold text-ink">Các hạng mục tủ điện PTC sản xuất:</h2>
                <ul className="mt-4 space-y-2.5 text-xs text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="mt-0.5 size-4 shrink-0 text-primary" aria-hidden="true" />
                    <span>Tủ điện tổng MSB đến 6300A (Form 1 đến 4b)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="mt-0.5 size-4 shrink-0 text-primary" aria-hidden="true" />
                    <span>Tủ phân phối trung gian SDB & tủ phân phối nhánh DB</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="mt-0.5 size-4 shrink-0 text-primary" aria-hidden="true" />
                    <span>Tủ điều khiển động cơ MCC & tủ biến tần VSD</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="mt-0.5 size-4 shrink-0 text-primary" aria-hidden="true" />
                    <span>Tủ hòa đồng bộ máy phát điện & lưới</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="mt-0.5 size-4 shrink-0 text-primary" aria-hidden="true" />
                    <span>Tủ điện năng lượng mặt trời Solar (DC/AC/Hòa lưới)</span>
                  </li>
                </ul>
                <div className="mt-6 border-t border-border pt-4">
                  <ZaloButton size="default" location="bao-gia-tu-dien-sidebar" />
                </div>
              </div>
            </div>

            <LeadForm defaultNeed="tu-dien" sourcePage="bao-gia-tu-dien" />
          </div>

          <RelatedProducts currentSlug="tu-dien" type="electrical" />
        </div>
      </Section>
    </>
  );
}
