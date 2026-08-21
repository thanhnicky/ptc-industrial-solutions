import { createFileRoute } from "@tanstack/react-router";
import { CheckCircle2 } from "lucide-react";
import { PageHero } from "@/components/site/PageHero";
import { Section, SectionHeading } from "@/components/site/Section";
import { LeadSection } from "@/components/site/LeadSection";
import { ZaloButton, CallButton } from "@/components/site/ZaloButton";
import { IMAGES } from "@/components/site/images";

const TITLE = "Tủ điện công nghiệp – MSB, MCC, ATS, tủ solar | PTC";
const DESC =
  "Sản xuất tủ điện hạ thế theo IEC 61439: tủ MSB/MDB, tủ DB, tủ tụ bù, ATS, MCC, VSD và tủ điện cho hệ solar. Thử nghiệm routine test tại xưởng PTC.";

export const Route = createFileRoute("/tu-dien-cong-nghiep")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESC },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESC },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
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
  return (
    <>
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

      <LeadSection
        title="Nhận báo giá tủ điện trong 24h"
        defaultNeed="tu-dien"
        sourcePage="tu-dien-cong-nghiep"
      />
    </>
  );
}
