import { createFileRoute } from "@tanstack/react-router";
import { ShieldCheck } from "lucide-react";
import { PageHero } from "@/components/site/PageHero";
import { Section, SectionHeading } from "@/components/site/Section";
import { LeadSection } from "@/components/site/LeadSection";
import { ZaloButton } from "@/components/site/ZaloButton";
import { IMAGES } from "@/components/site/images";

const TITLE = "Tiêu chuẩn & chất lượng – ISO 9001:2015, IEC 61439 | PTC";
const DESC =
  "PTC sản xuất theo ISO 9001:2015, IEC 61439-1&2, TCVN 7994-1:2009 và QCVN 16:2023/BXD, kèm quy trình QC và hồ sơ nghiệm thu đầy đủ cho từng dự án.";

export const Route = createFileRoute("/tieu-chuan-chat-luong")({
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

const STANDARDS = [
  ["ISO 9001:2015", "Hệ thống quản lý chất lượng áp dụng cho toàn bộ quá trình thiết kế và sản xuất."],
  ["IEC 61439-1 & 61439-2", "Tiêu chuẩn quốc tế cho cụm thiết bị đóng cắt và điều khiển hạ áp."],
  ["TCVN 7994-1:2009", "Tương đương IEC 60439-1, áp dụng cho tủ điện hạ thế tại Việt Nam."],
  ["QCVN 16:2023/BXD", "Quy chuẩn kỹ thuật quốc gia về sản phẩm, hàng hóa vật liệu xây dựng."],
];

const TESTS = [
  "Kiểm tra kích thước, độ dày tôn và chất lượng lớp sơn/mạ",
  "Kiểm tra thanh cái, mô-men siết bulong theo bảng tiêu chuẩn",
  "Đo điện trở cách điện và thử độ bền điện môi",
  "Kiểm tra liên tục mạch bảo vệ (PE) toàn tủ",
  "Chạy thử chức năng điều khiển, bảo vệ, tín hiệu",
  "Lập biên bản test kèm hình ảnh, bàn giao cùng tủ",
];

function Page() {
  return (
    <>
      <PageHero
        title="Tiêu chuẩn & chất lượng"
        subtitle="Chất lượng thật được chứng minh bằng tiêu chuẩn áp dụng, quy trình kiểm soát và hồ sơ nghiệm thu minh bạch."
        image={IMAGES.switchboard}
      >
        <ZaloButton size="lg" location="hero-tieu-chuan" label="Yêu cầu chứng chỉ & hồ sơ" />
      </PageHero>

      <Section>
        <SectionHeading eyebrow="Tiêu chuẩn áp dụng" title="Sản xuất theo chuẩn quốc tế và Việt Nam" />
        <div className="grid gap-6 md:grid-cols-2">
          {STANDARDS.map(([t, d]) => (
            <div key={t} className="flex gap-4 border border-border bg-card p-6">
              <ShieldCheck className="size-6 shrink-0 text-primary" aria-hidden="true" />
              <div>
                <h3 className="text-base font-bold text-ink">{t}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{d}</p>
              </div>
            </div>
          ))}
        </div>
      </Section>

      <Section tone="muted">
        <SectionHeading eyebrow="Kiểm soát chất lượng" title="Hạng mục kiểm tra trước khi xuất xưởng" />
        <ol className="grid gap-4 md:grid-cols-2">
          {TESTS.map((t, i) => (
            <li key={t} className="flex gap-4 border border-border bg-card p-5">
              <span className="grid size-8 shrink-0 place-items-center bg-primary text-sm font-bold text-primary-foreground">
                {i + 1}
              </span>
              <span className="pt-1 text-sm text-muted-foreground">{t}</span>
            </li>
          ))}
        </ol>
      </Section>

      <Section>
        <SectionHeading
          eyebrow="Hồ sơ bàn giao"
          title="Bộ hồ sơ nghiệm thu đầy đủ cho chủ đầu tư"
          desc="Mỗi lô hàng bàn giao kèm bản vẽ as-built, catalogue khí cụ, chứng chỉ CO/CQ vật tư chính, biên bản thử nghiệm và phiếu bảo hành."
        />
      </Section>

      <LeadSection title="Nhận chứng chỉ & hồ sơ kỹ thuật" sourcePage="tieu-chuan-chat-luong" />
    </>
  );
}
