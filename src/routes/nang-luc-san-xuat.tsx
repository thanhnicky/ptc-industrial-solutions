import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/site/PageHero";
import { Section, SectionHeading } from "@/components/site/Section";
import { LeadSection } from "@/components/site/LeadSection";
import { ZaloButton, CallButton } from "@/components/site/ZaloButton";
import { IMAGES } from "@/components/site/images";
import { CONTACT } from "@/lib/site";

const TITLE = "Năng lực sản xuất – nhà máy 2.700m² tại TP.HCM | PTC";
const DESC =
  "Nhà máy PTC 2.700m² tại Linh Xuân, TP.HCM: dây chuyền cắt – đột – chấn CNC, buồng sơn tĩnh điện, khu lắp ráp và phòng thử nghiệm tủ điện.";

export const Route = createFileRoute("/nang-luc-san-xuat")({
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

const LINES = [
  { title: "Gia công cơ khí CNC", desc: "Máy cắt laser/plasma, máy đột CNC, máy chấn thủy lực đảm bảo dung sai vỏ tủ và thang máng cáp." },
  { title: "Xử lý bề mặt & sơn tĩnh điện", desc: "Tẩy dầu – photphat hóa – sấy – phun bột – lò sấy, cho lớp sơn bám chắc, đồng màu RAL." },
  { title: "Lắp ráp & đấu nối", desc: "Khu lắp ráp thanh cái đồng, khí cụ, đi dây theo tiêu chuẩn, có kiểm tra chéo từng công đoạn." },
  { title: "Thử nghiệm & QC", desc: "Routine test: kiểm tra cách điện, độ bền điện môi, liên tục mạch bảo vệ, chức năng điều khiển." },
];

const STATS = [
  ["2.700 m²", "Diện tích nhà máy"],
  ["3", "Văn phòng: TP.HCM – Hà Nội – Đà Nẵng"],
  ["6300A", "Dòng định mức tủ MSB tối đa"],
  ["24h", "Thời gian phản hồi báo giá"],
];

function Page() {
  return (
    <>
      <PageHero
        title="Năng lực sản xuất"
        subtitle={`Nhà máy PTC tại ${CONTACT.factory} – khép kín từ gia công cơ khí, sơn tĩnh điện đến lắp ráp và thử nghiệm.`}
        image={IMAGES.hero}
      >
        <ZaloButton size="lg" location="hero-nang-luc" label="Đặt lịch tham quan xưởng" />
        <CallButton size="lg" location="hero-nang-luc" variant="outlineLight" />
      </PageHero>

      <Section>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {STATS.map(([v, k]) => (
            <div key={k} className="rule-top pt-5">
              <p className="text-3xl font-bold text-primary">{v}</p>
              <p className="mt-2 text-sm text-muted-foreground">{k}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section tone="muted">
        <SectionHeading eyebrow="Dây chuyền" title="Bốn khu vực sản xuất chính" />
        <div className="grid gap-6 md:grid-cols-2">
          {LINES.map((l) => (
            <div key={l.title} className="border border-border bg-card p-6">
              <h3 className="text-base font-bold text-ink">{l.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{l.desc}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section>
        <SectionHeading
          eyebrow="Đội ngũ"
          title="Kỹ sư dự án đồng hành từ thiết kế đến nghiệm thu"
          desc="Đội ngũ kỹ sư nòng cốt của PTC đã tham gia các dự án nhà máy FDI quy mô lớn như LEGO VSIP 3, LG 17 MWp và nhiều dự án điện mặt trời công nghiệp."
        />
        <div className="grid gap-6 md:grid-cols-3">
          {[
            ["Kỹ sư thiết kế", "Bóc tách single-line, tính toán thanh cái, phát hành shop drawing để duyệt."],
            ["Quản lý sản xuất", "Lập tiến độ theo block, cập nhật hình ảnh sản xuất định kỳ cho chủ đầu tư."],
            ["Kỹ sư hiện trường", "Hỗ trợ lắp đặt, đấu nối, chạy thử và bàn giao hồ sơ nghiệm thu."],
          ].map(([t, d]) => (
            <div key={t} className="rule-top pt-5">
              <h3 className="text-base font-bold text-ink">{t}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{d}</p>
            </div>
          ))}
        </div>
      </Section>

      <LeadSection title="Tham quan nhà máy hoặc nhận hồ sơ năng lực" sourcePage="nang-luc-san-xuat" />
    </>
  );
}
