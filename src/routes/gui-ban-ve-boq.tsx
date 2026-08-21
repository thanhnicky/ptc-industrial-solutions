import { createFileRoute } from "@tanstack/react-router";
import { CheckCircle2, FileSpreadsheet, FileText, Send, ShieldCheck, UploadCloud } from "lucide-react";
import { PageHero } from "@/components/site/PageHero";
import { Section, SectionHeading } from "@/components/site/Section";
import { Breadcrumbs } from "@/components/site/Breadcrumbs";
import { QuickSummary } from "@/components/site/QuickSummary";
import { ZaloButton } from "@/components/site/ZaloButton";
import { LeadForm } from "@/components/site/LeadForm";
import { IMAGES } from "@/components/site/images";
import { CONTACT } from "@/lib/site";
import { OrganizationSchema } from "@/components/seo/JsonLd";

const TITLE = "Gửi bản vẽ & BOQ nhận báo giá kỹ thuật nhanh chóng | PTC";
const DESC =
  "Gửi sơ đồ đơn tuyến (Single-line), bản vẽ mặt bằng hoặc file BOQ vật tư cho PTC Switchboard để nhận báo giá kỹ thuật và bản vẽ bố trí sơ bộ nhanh chóng.";

export const Route = createFileRoute("/gui-ban-ve-boq")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESC },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESC },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { property: "og:url", content: "https://tudienptc.vn/gui-ban-ve-boq" },
    ],
    links: [{ rel: "canonical", href: "https://tudienptc.vn/gui-ban-ve-boq" }],
  }),
  component: Page,
});

function Page() {
  return (
    <>
      <OrganizationSchema />

      <PageHero
        title="Gửi bản vẽ & BOQ dự án"
        subtitle="Kênh tiếp nhận sơ đồ nguyên lý đơn tuyến (Single-line diagram), bản vẽ CAD/PDF và file BOQ khối lượng cho đội ngũ kỹ sư PTC."
        image={IMAGES.switchboard}
      >
        <ZaloButton size="lg" location="hero-gui-boq" label="Nhắn Zalo gửi bản vẽ ngay" />
      </PageHero>

      <Section>
        <div className="mx-auto max-w-4xl space-y-10">
          <Breadcrumbs items={[{ name: "Gửi bản vẽ & BOQ", item: "/gui-ban-ve-boq" }]} />

          <div className="space-y-4">
            <h1 className="text-2xl font-bold tracking-tight text-ink sm:text-3xl">
              Gửi hồ sơ kỹ thuật để PTC bóc tách khối lượng và lập báo giá
            </h1>
            <p className="text-base leading-relaxed text-muted-foreground">
              Để nhận được phương án kỹ thuật tối ưu chi phí và báo giá chính xác, quý nhà thầu / chủ đầu tư có thể gửi trực tiếp file bản vẽ qua Zalo kỹ thuật hoặc điền form yêu cầu bên dưới.
            </p>
          </div>

          <QuickSummary
            title="Khách hàng cần gửi những gì để nhận báo giá kỹ thuật?"
            bullets={[
              "1. Sơ đồ nguyên lý đơn tuyến (Single-line diagram): Bản vẽ PDF/DWG thể hiện dòng định mức máy cắt chính, dòng nhánh và cấu hình tụ bù/ATS.",
              "2. Bảng tiên lượng khối lượng (BOQ): Danh mục số lượng tủ điện hoặc khối lượng mét thang máng cáp (kèm kích thước rộng x cao x dày).",
              "3. Yêu cầu thương hiệu thiết bị: Chỉ định hãng khí cụ đóng cắt (Schneider, ABB, Mitsubishi, LS, Socomec...) nếu có.",
              "4. Yêu cầu Form tủ & Cấp IP: Form 1 đến 4b; IP31/IP42/IP54 (trong nhà) hoặc IP55/IP65 (ngoài trời).",
              "5. Mốc tiến độ giao hàng & Địa điểm công trình.",
            ]}
          />

          <div className="grid gap-10 lg:grid-cols-[1fr_1.15fr] lg:items-start">
            <div className="space-y-6">
              <div className="rounded-lg border border-primary/20 bg-primary/[0.03] p-6">
                <h2 className="flex items-center gap-2 text-base font-bold text-ink">
                  <Send className="size-5 text-primary" aria-hidden="true" />
                  Kênh gửi nhanh nhất: Nhắn Zalo
                </h2>
                <p className="mt-2 text-xs leading-relaxed text-muted-foreground">
                  Gửi file trực tiếp qua Zalo để kỹ sư PTC kiểm tra file CAD/PDF ngay lập tức và trao đổi làm rõ các chi tiết kỹ thuật:
                </p>
                <div className="mt-4">
                  <ZaloButton size="lg" location="gui-boq-sidebar" label="Nhắn Zalo gửi file bản vẽ" />
                </div>
              </div>

              <div className="rounded-lg border border-border bg-card p-6">
                <h3 className="text-sm font-semibold text-ink">Định dạng file hỗ trợ</h3>
                <ul className="mt-3 space-y-2 text-xs text-muted-foreground">
                  <li className="flex items-center gap-2">
                    <FileText className="size-4 text-primary" aria-hidden="true" />
                    <span>File bản vẽ: PDF, DWG, DXF, hình ảnh sơ đồ</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <FileSpreadsheet className="size-4 text-primary" aria-hidden="true" />
                    <span>Bảng khối lượng: Excel (.xlsx, .xls), CSV</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <ShieldCheck className="size-4 text-primary" aria-hidden="true" />
                    <span>Cam kết bảo mật 100% thông tin dự án và bản vẽ</span>
                  </li>
                </ul>
              </div>
            </div>

            <LeadForm defaultNeed="tu-dien" sourcePage="gui-ban-ve-boq" />
          </div>
        </div>
      </Section>
    </>
  );
}
