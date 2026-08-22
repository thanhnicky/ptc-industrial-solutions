import { createFileRoute } from "@tanstack/react-router";
import { Headphones, ShieldCheck, Wrench } from "lucide-react";
import { PageHero } from "@/components/site/PageHero";
import { Section } from "@/components/site/Section";
import { Breadcrumbs } from "@/components/site/Breadcrumbs";
import { QuickSummary } from "@/components/site/QuickSummary";
import { ZaloButton, CallButton } from "@/components/site/ZaloButton";
import { LeadForm } from "@/components/site/LeadForm";
import { IMAGES } from "@/components/site/images";
import { CONTACT } from "@/lib/site";
import { OrganizationSchema } from "@/components/seo/JsonLd";

const TITLE = "Yêu cầu tư vấn kỹ thuật Tủ điện & Thang máng cáp | PTC";
const DESC =
  "Kết nối trực tiếp với đội ngũ kỹ sư điện & cơ khí PTC Switchboard để được tư vấn thiết kế, chọn Form tủ, tính toán thanh cái đồng và tối ưu tuyến cáp cho công trình.";

export const Route = createFileRoute("/yeu-cau-tu-van-ky-thuat")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESC },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESC },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { property: "og:url", content: "https://tudienptc.vn/yeu-cau-tu-van-ky-thuat" },
    ],
    links: [{ rel: "canonical", href: "https://tudienptc.vn/yeu-cau-tu-van-ky-thuat" }],
  }),
  component: Page,
});

function Page() {
  return (
    <>
      <OrganizationSchema />

      <PageHero
        title="Tư vấn giải pháp kỹ thuật"
        subtitle="Đội ngũ kỹ sư giàu kinh nghiệm thực tế của PTC sẵn sàng cùng đội ngũ MEP của bạn làm rõ bài toán kỹ thuật từ giai đoạn thiết kế cơ sở."
        image={IMAGES.plant}
      >
        <ZaloButton size="lg" location="hero-tu-van" label="Nhắn Zalo gặp Kỹ sư PTC" />
        <CallButton size="lg" location="hero-tu-van" variant="outlineLight" />
      </PageHero>

      <Section>
        <div className="mx-auto max-w-4xl space-y-10">
          <Breadcrumbs items={[{ name: "Tư vấn kỹ thuật", item: "/yeu-cau-tu-van-ky-thuat" }]} />

          <div className="space-y-4">
            <h1 className="text-2xl font-bold tracking-tight text-ink sm:text-3xl">
              Tư vấn kỹ thuật chuyên sâu về Tủ điện hạ thế & Hệ dẫn cáp
            </h1>
            <p className="text-base leading-relaxed text-muted-foreground">
              Quý nhà thầu, tư vấn thiết kế hoặc chủ đầu tư đang cần rà soát lại thông số kỹ thuật sơ đồ đơn tuyến, lựa chọn cấp cách ly Form tủ theo IEC 61439 hoặc giải quyết bài toán không gian phòng kỹ thuật điện chật hẹp hãy liên hệ trực tiếp cùng ban kỹ thuật PTC.
            </p>
          </div>

          <QuickSummary
            title="Các nội dung PTC hỗ trợ tư vấn kỹ thuật miễn phí"
            bullets={[
              "Tính toán và kiểm tra dòng ngắn mạch Icw cho thanh cái đồng chính.",
              "Lựa chọn Form ngăn khoang (Form 1 đến Form 4b) phù hợp mức độ an toàn liên tục của nhà máy.",
              "Tư vấn giải pháp bảo vệ ngoài trời IP55 / IP65 và chống đọng sương nhiệt đới.",
              "Khớp nối kích thước tuyến thang máng cáp và bản vẽ bố trí (Layout 2D/3D) phòng trạm điện.",
            ]}
          />

          <div className="grid gap-10 lg:grid-cols-[1fr_1.15fr] lg:items-start">
            <div className="space-y-6">
              <div className="rounded-lg border border-border bg-card p-6">
                <h2 className="text-base font-bold text-ink">Kênh kết nối kỹ thuật trực tiếp:</h2>
                <div className="mt-4 space-y-4 text-xs text-muted-foreground">
                  <div>
                    <span className="font-semibold text-ink">Hotline CSKH:</span>
                    <p className="mt-0.5 text-sm font-bold text-primary">{CONTACT.hotline}</p>
                  </div>
                  <div>
                    <span className="font-semibold text-ink">Email tiếp nhận hồ sơ:</span>
                    <p className="mt-0.5 font-medium text-ink">{CONTACT.email}</p>
                  </div>
                  <div>
                    <span className="font-semibold text-ink">Nhà máy sản xuất:</span>
                    <p className="mt-0.5">{CONTACT.factoryAddress}</p>
                  </div>
                </div>
                <div className="mt-6 border-t border-border pt-4">
                  <ZaloButton size="default" location="tu-van-sidebar" label="Nhắn Zalo trao đổi trực tiếp" />
                </div>
              </div>
            </div>

            <LeadForm defaultNeed="khac" sourcePage="tu-van-ky-thuat" />
          </div>
        </div>
      </Section>
    </>
  );
}
