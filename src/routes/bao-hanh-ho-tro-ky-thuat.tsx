import { createFileRoute } from "@tanstack/react-router";
import { CheckCircle2, Clock, Headphones, MapPin, ShieldAlert, Wrench } from "lucide-react";
import { PageHero } from "@/components/site/PageHero";
import { Section, SectionHeading } from "@/components/site/Section";
import { Breadcrumbs } from "@/components/site/Breadcrumbs";
import { QuickSummary } from "@/components/site/QuickSummary";
import { ZaloButton, CallButton } from "@/components/site/ZaloButton";
import { LeadSection } from "@/components/site/LeadSection";
import { IMAGES } from "@/components/site/images";
import { CONTACT } from "@/lib/site";
import { OrganizationSchema, FAQSchema } from "@/components/seo/JsonLd";

const TITLE = "Chính sách Bảo hành & Hỗ trợ kỹ thuật hiện trường | PTC Switchboard";
const DESC =
  "Cam kết dịch vụ hậu mãi PTC: Phản hồi bảo hành trong 2 giờ, hỗ trợ kỹ thuật hiện trường trong 24–48 giờ tại khu vực phù hợp, hỗ trợ đấu nối và nghiệm thu.";

const FAQS = [
  {
    question: "Thời gian bảo hành tiêu chuẩn cho tủ điện và thang máng cáp PTC là bao lâu?",
    answer:
      "Thời gian bảo hành tiêu chuẩn là 12 đến 24 tháng kể từ ngày giao hàng hoặc nghiệm thu đóng điện (tùy theo điều khoản cụ thể trong hợp đồng kinh tế và chính sách bảo hành của hãng thiết bị đóng cắt chỉ định).",
  },
  {
    question: "SLA phản hồi sự cố kỹ thuật của PTC được thực hiện như thế nào?",
    answer:
      "Kỹ sư PTC tiếp nhận thông tin và phản hồi giải pháp sơ bộ trong vòng 2 giờ sau khi nhận được thông báo qua Hotline/Zalo/Email. Đối với các sự cố cần xử lý hiện trường, PTC cử kỹ sư có mặt trong vòng 24–48 giờ đối với các khu vực phù hợp theo cam kết hợp đồng.",
  },
  {
    question: "PTC có hỗ trợ kỹ thuật trong giai đoạn đấu nối và đóng điện chạy thử (Commissioning) không?",
    answer:
      "Có. PTC cung cấp tài liệu hướng dẫn lắp đặt, sơ đồ đấu nối hoàn công và cử kỹ sư hỗ trợ kỹ thuật trực tiếp hoặc online khi nhà thầu thực hiện đấu nối cáp, cài đặt rơ-le và đóng điện chạy thử tại công trường.",
  },
];

export const Route = createFileRoute("/bao-hanh-ho-tro-ky-thuat")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESC },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESC },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { property: "og:url", content: "https://tudienptc.vn/bao-hanh-ho-tro-ky-thuat" },
    ],
    links: [{ rel: "canonical", href: "https://tudienptc.vn/bao-hanh-ho-tro-ky-thuat" }],
  }),
  component: Page,
});

function Page() {
  return (
    <>
      <OrganizationSchema />
      <FAQSchema items={FAQS} />

      <PageHero
        title="Bảo hành & Hỗ trợ kỹ thuật"
        subtitle="Cam kết đồng hành trọn đời dự án: Phản hồi kỹ thuật trong 2 giờ, hỗ trợ hiện trường trong 24–48 giờ, bàn giao trọn bộ hồ sơ nghiệm thu."
        image={IMAGES.warehouse}
      >
        <ZaloButton size="lg" location="hero-bao-hanh" />
        <CallButton size="lg" location="hero-bao-hanh" variant="outlineLight" />
      </PageHero>

      <Section>
        <div className="mx-auto max-w-4xl space-y-10">
          <Breadcrumbs items={[{ name: "Bảo hành & Hỗ trợ kỹ thuật", item: "/bao-hanh-ho-tro-ky-thuat" }]} />

          <div className="space-y-4">
            <h1 className="text-2xl font-bold tracking-tight text-ink sm:text-3xl">
              Chính sách bảo hành và cam kết hỗ trợ kỹ thuật của PTC Switchboard
            </h1>
            <p className="text-base leading-relaxed text-muted-foreground">
              PTC Switchboard cam kết trách nhiệm đồng hành cùng tổng thầu M&E và chủ đầu tư từ giai đoạn thiết kế, giao hàng, đấu nối đến vận hành ổn định lâu dài. Mọi yêu cầu hỗ trợ kỹ thuật đều được xử lý theo quy trình SLA rõ ràng.
            </p>
          </div>

          <QuickSummary
            title="Cam kết SLA dịch vụ hậu mãi của PTC"
            bullets={[
              "Phản hồi kỹ thuật trong 2 giờ: Tiếp nhận thông tin và hướng dẫn xử lý sơ bộ nhanh chóng.",
              "Hiện trường trong 24–48 giờ: Có mặt tại công trình đối với các khu vực phù hợp theo chính sách dự án.",
              "Bảo hành chính hãng: Thiết bị đóng cắt được bảo hành theo tiêu chuẩn nhà sản xuất (Schneider, ABB, Mitsubishi, LS...).",
              "Lưu trữ hồ sơ dự án: Bản vẽ As-built và cấu hình tủ được lưu trữ để phục vụ bảo trì, nâng cấp mở rộng sau này.",
            ]}
          />

          {/* 3 Hạng mục hỗ trợ chính */}
          <div className="grid gap-6 sm:grid-cols-3">
            <div className="rounded-lg border border-border bg-card p-5">
              <Clock className="size-6 text-primary" aria-hidden="true" />
              <h2 className="mt-3 text-sm font-semibold text-ink">Phản hồi 2 giờ</h2>
              <p className="mt-2 text-xs leading-relaxed text-muted-foreground">
                Kênh tiếp nhận trực tiếp qua Hotline kỹ thuật và Zalo kỹ sư phụ trách dự án, giải đáp thắc mắc đấu nối 24/7.
              </p>
            </div>
            <div className="rounded-lg border border-border bg-card p-5">
              <MapPin className="size-6 text-primary" aria-hidden="true" />
              <h2 className="mt-3 text-sm font-semibold text-ink">Hiện trường 24–48h</h2>
              <p className="mt-2 text-xs leading-relaxed text-muted-foreground">
                Cử kỹ sư giàu kinh nghiệm trực tiếp kiểm tra, phối hợp xử lý sự cố tại hiện trường dự án.
              </p>
            </div>
            <div className="rounded-lg border border-border bg-card p-5">
              <Wrench className="size-6 text-primary" aria-hidden="true" />
              <h2 className="mt-3 text-sm font-semibold text-ink">Hỗ trợ Commissioning</h2>
              <p className="mt-2 text-xs leading-relaxed text-muted-foreground">
                Tư vấn thử nghiệm liên động, kiểm tra cách điện và hỗ trợ đóng điện chạy thử an toàn.
              </p>
            </div>
          </div>

          {/* Quy trình tiếp nhận bảo hành 4 bước */}
          <div>
            <SectionHeading eyebrow="Quy trình xử lý" title="4 bước tiếp nhận và xử lý yêu cầu bảo hành" />
            <div className="mt-6 space-y-4">
              <div className="flex gap-4 rounded-lg border border-border/80 bg-card p-4">
                <span className="grid size-8 shrink-0 place-items-center rounded bg-primary font-mono text-xs font-bold text-primary-foreground">
                  1
                </span>
                <div>
                  <h3 className="text-sm font-semibold text-ink">Tiếp nhận thông tin sự cố</h3>
                  <p className="mt-1 text-xs leading-relaxed text-muted-foreground">
                    Khách hàng gửi mã tủ, mô tả hiện tượng, hình ảnh/video qua Zalo hoặc Hotline <strong>{CONTACT.hotline}</strong>.
                  </p>
                </div>
              </div>

              <div className="flex gap-4 rounded-lg border border-border/80 bg-card p-4">
                <span className="grid size-8 shrink-0 place-items-center rounded bg-primary font-mono text-xs font-bold text-primary-foreground">
                  2
                </span>
                <div>
                  <h3 className="text-sm font-semibold text-ink">Chẩn đoán và phản hồi sơ bộ (Trong 2 giờ)</h3>
                  <p className="mt-1 text-xs leading-relaxed text-muted-foreground">
                    Kỹ sư PTC tra cứu hồ sơ hoàn công của tủ, phân tích nguyên nhân và hướng dẫn biện pháp an toàn/cách ly phụ tải.
                  </p>
                </div>
              </div>

              <div className="flex gap-4 rounded-lg border border-border/80 bg-card p-4">
                <span className="grid size-8 shrink-0 place-items-center rounded bg-primary font-mono text-xs font-bold text-primary-foreground">
                  3
                </span>
                <div>
                  <h3 className="text-sm font-semibold text-ink">Xử lý hiện trường (24–48 giờ)</h3>
                  <p className="mt-1 text-xs leading-relaxed text-muted-foreground">
                    Kỹ sư kỹ thuật PTC có mặt tại công trình cùng thiết bị đo kiểm và linh kiện thay thế dự phòng để xử lý dứt điểm.
                  </p>
                </div>
              </div>

              <div className="flex gap-4 rounded-lg border border-border/80 bg-card p-4">
                <span className="grid size-8 shrink-0 place-items-center rounded bg-primary font-mono text-xs font-bold text-primary-foreground">
                  4
                </span>
                <div>
                  <h3 className="text-sm font-semibold text-ink">Lập biên bản & Bàn giao</h3>
                  <p className="mt-1 text-xs leading-relaxed text-muted-foreground">
                    Kiểm tra lại toàn bộ chức năng sau khi khắc phục, lập biên bản xác nhận dịch vụ với đại diện ban quản lý dự án.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* FAQs */}
          <div>
            <SectionHeading eyebrow="Hỏi đáp dịch vụ" title="Câu hỏi thường gặp về bảo hành & hỗ trợ kỹ thuật" />
            <div className="mt-6 space-y-4">
              {FAQS.map((faq, idx) => (
                <div key={idx} className="rounded-lg border border-border bg-card p-5">
                  <h3 className="text-sm font-semibold text-ink">{faq.question}</h3>
                  <p className="mt-2 text-xs leading-relaxed text-muted-foreground">{faq.answer}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Section>

      <LeadSection
        title="Cần hỗ trợ kỹ thuật hoặc tư vấn dự án?"
        intro="Liên hệ ngay với bộ phận kỹ thuật PTC để được giải đáp mọi vướng mắc kỹ thuật."
        sourcePage="bao-hanh"
      />
    </>
  );
}
