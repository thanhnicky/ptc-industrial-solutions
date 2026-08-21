import { createFileRoute } from "@tanstack/react-router";
import { Download, FileText, CheckCircle2 } from "lucide-react";
import { PageHero } from "@/components/site/PageHero";
import { Section } from "@/components/site/Section";
import { Breadcrumbs } from "@/components/site/Breadcrumbs";
import { QuickSummary } from "@/components/site/QuickSummary";
import { ZaloButton } from "@/components/site/ZaloButton";
import { LeadForm } from "@/components/site/LeadForm";
import { IMAGES } from "@/components/site/images";
import { OrganizationSchema } from "@/components/seo/JsonLd";

const TITLE = "Tải Catalogue Tủ điện & Thang máng cáp PTC Switchboard";
const DESC =
  "Tải trọn bộ Catalogue kỹ thuật và Hồ sơ năng lực Công ty Cổ phần Tủ bảng điện PTC: thông số tủ MSB, DB, MCC, quy cách thang máng cáp và tiêu chuẩn sản xuất.";

export const Route = createFileRoute("/tai-catalogue")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESC },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESC },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { property: "og:url", content: "https://tudienptc.vn/tai-catalogue" },
    ],
    links: [{ rel: "canonical", href: "https://tudienptc.vn/tai-catalogue" }],
  }),
  component: Page,
});

function Page() {
  return (
    <>
      <OrganizationSchema />

      <PageHero
        title="Tải Catalogue & Hồ sơ năng lực"
        subtitle="Tài liệu kỹ thuật tổng hợp quy cách sản phẩm tủ điện hạ thế, thang máng cáp và quy trình kiểm soát chất lượng của PTC."
        image={IMAGES.hero}
      >
        <ZaloButton size="lg" location="hero-catalogue" label="Nhắn Zalo nhận Catalogue PDF" />
      </PageHero>

      <Section>
        <div className="mx-auto max-w-4xl space-y-10">
          <Breadcrumbs items={[{ name: "Tải Catalogue", item: "/tai-catalogue" }]} />

          <div className="space-y-4">
            <h1 className="text-2xl font-bold tracking-tight text-ink sm:text-3xl">
              Tài liệu kỹ thuật và Catalogue sản phẩm PTC Switchboard
            </h1>
            <p className="text-base leading-relaxed text-muted-foreground">
              Bộ tài liệu cung cấp đầy đủ thông số kích thước, bảng chọn dung sai, tiêu chuẩn Form tủ theo IEC 61439 và bảng tải trọng thang máng cáp giúp kỹ sư tư vấn thiết kế MEP dễ dàng bóc tách và đưa vào hồ sơ mời thầu.
            </p>
          </div>

          <QuickSummary
            title="Nội dung trong bộ tài liệu kỹ thuật PTC"
            bullets={[
              "Catalogue Tủ điện hạ thế: Tủ tổng MSB đến 6300A, Form 1–4b, tủ điều khiển động cơ MCC, tủ biến tần VSD, tủ solar.",
              "Catalogue Thang máng cáp: Quy cách máng cáp, khay cáp, thang cáp, phụ kiện co, tê, giảm và tiêu chuẩn mạ kẽm nhúng nóng ASTM A123.",
              "Hồ sơ năng lực công ty (Company Profile): Giới thiệu máy móc CNC, buồng sơn tĩnh điện, năng lực nhân sự và danh mục dự án tiêu biểu.",
              "Quy trình kiểm tra chất lượng & Tiêu chuẩn: Chứng chỉ ISO 9001:2015, quy trình Routine Test theo IEC 61439-2.",
            ]}
          />

          <div className="grid gap-10 lg:grid-cols-[1fr_1.15fr] lg:items-start">
            <div className="space-y-6">
              <div className="rounded-lg border border-primary/20 bg-primary/[0.03] p-6">
                <h2 className="flex items-center gap-2 text-base font-bold text-ink">
                  <Download className="size-5 text-primary" aria-hidden="true" />
                  Nhận Catalogue bản cập nhật mới nhất qua Zalo
                </h2>
                <p className="mt-2 text-xs leading-relaxed text-muted-foreground">
                  Do tài liệu dung lượng lớn và thường xuyên cập nhật theo tiêu chuẩn mới, quý khách vui lòng nhắn Zalo để được gửi trực tiếp file PDF chất lượng cao:
                </p>
                <div className="mt-4">
                  <ZaloButton size="lg" location="catalogue-sidebar" label="Nhắn Zalo nhận file Catalogue PDF" />
                </div>
              </div>
            </div>

            <LeadForm defaultNeed="khac" sourcePage="tai-catalogue" />
          </div>
        </div>
      </Section>
    </>
  );
}
