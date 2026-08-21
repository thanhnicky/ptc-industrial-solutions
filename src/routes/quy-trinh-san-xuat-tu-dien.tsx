import { createFileRoute } from "@tanstack/react-router";
import { CheckCircle2, FileCheck, Layers, ShieldCheck, Zap } from "lucide-react";
import { PageHero } from "@/components/site/PageHero";
import { Section, SectionHeading } from "@/components/site/Section";
import { Breadcrumbs } from "@/components/site/Breadcrumbs";
import { QuickSummary } from "@/components/site/QuickSummary";
import { ZaloButton, CallButton } from "@/components/site/ZaloButton";
import { LeadSection } from "@/components/site/LeadSection";
import { IMAGES } from "@/components/site/images";
import { PRODUCTION_STEPS_7 } from "@/lib/site";
import { OrganizationSchema, FAQSchema } from "@/components/seo/JsonLd";
import { RelatedArticles } from "@/components/site/RelatedArticles";

const TITLE = "Quy trình 7 bước sản xuất tủ điện hạ thế chuẩn IEC 61439 | PTC";
const DESC =
  "Chi tiết 7 bước thiết kế, gia công CNC, sơn tĩnh điện, lắp ráp thanh cái đồng và Routine Test 100% tại nhà máy Tủ bảng điện PTC theo IEC 61439-2 & ISO 9001:2015.";

const FAQS = [
  {
    question: "PTC có thực hiện Routine Test 100% trước khi xuất xưởng không?",
    answer:
      "Có. 100% tủ điện xuất xưởng tại nhà máy PTC đều phải trải qua các hạng mục Routine Test theo tiêu chuẩn IEC 61439-2 gồm: kiểm tra điện trở cách điện (MΩ), thử nghiệm điện áp xoay chiều chịu áp (Dielectric test), kiểm tra liên tục mạch bảo vệ tiếp địa PE và thử nghiệm chức năng đóng cắt điều khiển.",
  },
  {
    question: "Khách hàng/chủ đầu tư có được mời chứng kiến thử nghiệm tại xưởng không?",
    answer:
      "Có. PTC luôn khuyến khích và hỗ trợ chủ đầu tư, tư vấn giám sát và tổng thầu M&E đến nhà máy tại Linh Xuân, TP.HCM để chứng kiến Factory Acceptance Test (FAT) trước khi đóng gói xuất hàng.",
  },
  {
    question: "Hồ sơ nghiệm thu bàn giao kèm theo tủ điện gồm những gì?",
    answer:
      "Trọn bộ hồ sơ nghiệm thu PTC bàn giao gồm: Bản vẽ hoàn công (As-built drawings), Chứng chỉ xuất xưởng và xuất xứ/chất lượng CO/CQ của thiết bị đóng cắt chính hãng, và Biên bản thử nghiệm Routine Test xuất xưởng.",
  },
];

export const Route = createFileRoute("/quy-trinh-san-xuat-tu-dien")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESC },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESC },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { property: "og:url", content: "https://tudienptc.vn/quy-trinh-san-xuat-tu-dien" },
    ],
    links: [{ rel: "canonical", href: "https://tudienptc.vn/quy-trinh-san-xuat-tu-dien" }],
  }),
  component: Page,
});

function Page() {
  return (
    <>
      <OrganizationSchema />
      <FAQSchema items={FAQS} />

      <PageHero
        title="Quy trình sản xuất tủ điện hạ thế"
        subtitle="7 bước khép kín từ thiết kế kỹ thuật, gia công cơ khí CNC, sơn tĩnh điện đến Routine Test 100% theo IEC 61439-2 và ISO 9001:2015 tại nhà máy PTC."
        image={IMAGES.switchboard}
      >
        <ZaloButton size="lg" location="hero-quy-trinh" />
        <CallButton size="lg" location="hero-quy-trinh" variant="outlineLight" />
      </PageHero>

      <Section>
        <div className="mx-auto max-w-4xl space-y-10">
          <Breadcrumbs items={[{ name: "Quy trình sản xuất tủ điện", item: "/quy-trinh-san-xuat-tu-dien" }]} />

          <div className="space-y-4">
            <h1 className="text-2xl font-bold tracking-tight text-ink sm:text-3xl">
              Quy trình sản xuất & kiểm soát chất lượng tủ điện công nghiệp tại PTC
            </h1>
            <p className="text-base leading-relaxed text-muted-foreground">
              Mỗi tủ điện hạ thế xuất xưởng từ nhà máy PTC đều tuân thủ nghiêm ngặt quy trình 7 bước kiểm soát chất lượng theo hệ thống quản lý ISO 9001:2015 và tiêu chuẩn kỹ thuật điện quốc tế IEC 61439-1 & 2.
            </p>
          </div>

          <QuickSummary
            title="Điểm mấu chốt trong quy trình sản xuất của PTC"
            bullets={[
              "Bóc tách bản vẽ kỹ lưỡng: Rà soát dòng định mức, dòng chịu ngắn mạch Icw, Form ngăn khoang và cấp IP trước khi sản xuất.",
              "Dây chuyền cơ khí CNC: Cắt laser, đột CNC và chấn định hình đảm bảo dung sai lắp ghép kín khít.",
              "Thanh cái đồng điện phân (Cu >= 99.9%): Tính toán tiết diện chịu phát nhiệt và lực điện động ngắn mạch, bọc co nhiệt màu theo quy chuẩn.",
              "100% Routine Test: Thử nghiệm cách điện, cao áp, liên tục tiếp địa và chức năng nhị thứ trước khi xuất xưởng.",
              "Hồ sơ nghiệm thu đầy đủ: Bản vẽ As-built, CO/CQ thiết bị, biên bản Routine Test sẵn sàng phục vụ nghiệm thu.",
            ]}
          />

          {/* Chi tiết 7 bước */}
          <div className="space-y-8">
            {PRODUCTION_STEPS_7.map((step, idx) => (
              <div key={step.step} className="rounded-lg border border-border bg-card p-6 shadow-xs">
                <div className="flex items-center gap-3">
                  <span className="grid size-10 place-items-center rounded-md bg-primary font-mono text-base font-bold text-primary-foreground">
                    {step.step}
                  </span>
                  <div>
                    <span className="text-xs font-semibold tracking-wider text-primary uppercase">Bước {idx + 1}</span>
                    <h2 className="text-lg font-bold text-ink">{step.title}</h2>
                  </div>
                </div>
                <p className="mt-4 text-sm leading-relaxed text-muted-foreground">{step.desc}</p>
              </div>
            ))}
          </div>

          {/* Chi tiết Routine Test theo IEC 61439-2 */}
          <div className="rounded-lg border border-border bg-card p-6">
            <h2 className="text-lg font-bold text-ink">Các hạng mục Routine Test bắt buộc trước khi xuất xưởng</h2>
            <div className="mt-4 grid gap-4 sm:grid-cols-2 text-xs leading-relaxed text-muted-foreground">
              <div className="rounded-md border border-border/80 p-4">
                <div className="flex items-center gap-2 font-semibold text-ink">
                  <ShieldCheck className="size-4 text-primary" aria-hidden="true" />
                  <span>1. Kiểm tra cách điện (Insulation Test)</span>
                </div>
                <p className="mt-2">Đo điện trở cách điện bằng Megohmmeter ở điện áp thử nghiệm 1000VDC giữa các pha và giữa pha với vỏ đất (Yêu cầu {">= 1 MΩ"}).</p>
              </div>
              <div className="rounded-md border border-border/80 p-4">
                <div className="flex items-center gap-2 font-semibold text-ink">
                  <Zap className="size-4 text-primary" aria-hidden="true" />
                  <span>2. Thử nghiệm điện áp chịu đựng (Dielectric Test)</span>
                </div>
                <p className="mt-2">Thử nghiệm cao áp xoay chiều tần số công nghiệp (50Hz) trong thời gian 1 giây/1 phút theo giá trị điện áp cách điện định mức Ui của tủ.</p>
              </div>
              <div className="rounded-md border border-border/80 p-4">
                <div className="flex items-center gap-2 font-semibold text-ink">
                  <Layers className="size-4 text-primary" aria-hidden="true" />
                  <span>3. Kiểm tra liên tục mạch bảo vệ (PE)</span>
                </div>
                <p className="mt-2">Xác nhận độ liên tục dẫn điện giữa tất cả các cánh tủ, khung kim loại và thanh cái tiếp địa PE chính (điện trở tiếp xúc bé hơn 0.1 Ω).</p>
              </div>
              <div className="rounded-md border border-border/80 p-4">
                <div className="flex items-center gap-2 font-semibold text-ink">
                  <FileCheck className="size-4 text-primary" aria-hidden="true" />
                  <span>4. Kiểm tra chức năng điện & khóa liên động</span>
                </div>
                <p className="mt-2">Mô phỏng cấp nguồn mạch điều khiển nhị thứ, kiểm tra hoạt động đóng/cắt/trip của máy cắt ACB, MCCB, contactor, rơ-le và khóa interlock cơ-điện.</p>
              </div>
            </div>
          </div>

          {/* FAQs */}
          <div>
            <SectionHeading eyebrow="Hỏi đáp kỹ thuật" title="Câu hỏi thường gặp về quy trình sản xuất tại PTC" />
            <div className="mt-6 space-y-4">
              {FAQS.map((faq, idx) => (
                <div key={idx} className="rounded-lg border border-border bg-card p-5">
                  <h3 className="text-sm font-semibold text-ink">{faq.question}</h3>
                  <p className="mt-2 text-xs leading-relaxed text-muted-foreground">{faq.answer}</p>
                </div>
              ))}
            </div>
          </div>

          <RelatedArticles currentSlug="tieu-chuan-iec-61439-la-gi" />
        </div>
      </Section>

      <LeadSection
        title="Gửi bản vẽ đơn tuyến để nhận tư vấn kỹ thuật từ PTC"
        intro="Đội ngũ kỹ sư thiết kế PTC sẽ hỗ trợ bóc tách, rà soát thông số và lập báo giá kỹ thuật nhanh chóng."
        sourcePage="quy-trinh-san-xuat"
      />
    </>
  );
}
