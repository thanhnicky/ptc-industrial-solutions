import { createFileRoute } from "@tanstack/react-router";
import { CheckCircle2, Factory, ShieldCheck, Users, Wrench } from "lucide-react";
import { PageHero } from "@/components/site/PageHero";
import { Section, SectionHeading } from "@/components/site/Section";
import { Breadcrumbs } from "@/components/site/Breadcrumbs";
import { QuickSummary } from "@/components/site/QuickSummary";
import { ZaloButton, CallButton } from "@/components/site/ZaloButton";
import { LeadSection } from "@/components/site/LeadSection";
import { IMAGES } from "@/components/site/images";
import { CONTACT, STATS, PRODUCTION_STEPS_7 } from "@/lib/site";
import { OrganizationSchema, LocalBusinessSchema } from "@/components/seo/JsonLd";

const TITLE = "Giới thiệu Công ty Cổ phần Tủ bảng điện PTC | Năng lực & Pháp nhân";
const DESC =
  "Công ty Cổ phần Tủ bảng điện PTC chuyên sản xuất tủ điện hạ thế và thang máng cáp theo chuẩn IEC 61439, ISO 9001:2015. Nhà máy ~ 3.000 m² tại Linh Xuân, TP.HCM.";

export const Route = createFileRoute("/gioi-thieu-ptc")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESC },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESC },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { property: "og:url", content: "https://tudienptc.vn/gioi-thieu-ptc" },
    ],
    links: [{ rel: "canonical", href: "https://tudienptc.vn/gioi-thieu-ptc" }],
  }),
  component: Page,
});

function Page() {
  return (
    <>
      <OrganizationSchema />
      <LocalBusinessSchema />

      <PageHero
        title="Về PTC Switchboard"
        subtitle="Nhà sản xuất tủ điện hạ thế và hệ thống thang máng cáp công nghiệp tại TP.HCM. Đồng hành cùng tổng thầu M&E, chủ đầu tư nhà máy và đơn vị EPC."
        image={IMAGES.hero}
      >
        <ZaloButton size="lg" location="hero-gioi-thieu" />
        <CallButton size="lg" location="hero-gioi-thieu" variant="outlineLight" />
      </PageHero>

      <Section>
        <div className="mx-auto max-w-4xl space-y-10">
          <Breadcrumbs items={[{ name: "Giới thiệu PTC", item: "/gioi-thieu-ptc" }]} />

          {/* GEO/AIO Answer First */}
          <div className="space-y-4">
            <h1 className="text-2xl font-bold tracking-tight text-ink sm:text-3xl">
              Giới thiệu Công ty Cổ phần Tủ bảng điện PTC
            </h1>
            <p className="text-base leading-relaxed text-muted-foreground">
              <strong>Công ty Cổ phần Tủ bảng điện PTC (PTC Switchboard)</strong> là đơn vị chuyên thiết kế, chế tạo, thử nghiệm và cung cấp trọn gói các giải pháp tủ điện hạ thế (tủ tổng MSB đến 6300A, tủ DB, tủ MCC, tủ VSD, tủ hòa đồng bộ, tủ solar) và hệ thống thang máng cáp mạ kẽm nhúng nóng / sơn tĩnh điện cho các công trình công nghiệp, nhà xưởng, khu chế xuất và tòa nhà cao tầng.
            </p>
          </div>

          <QuickSummary
            title="Hồ sơ năng lực cốt lõi của PTC"
            bullets={[
              "Pháp nhân: CÔNG TY CỔ PHẦN TỦ BẢNG ĐIỆN PTC (Thương hiệu PTC Switchboard).",
              "Nhà máy sản xuất: ~ 3.000 m² khép kín tại Số 15, Đường 15, Khu Phố 13, P. Linh Xuân, TP.HCM.",
              "Đội ngũ kỹ thuật: Kế thừa hơn 10 năm kinh nghiệm trong mảng cơ điện và năng lượng của đội ngũ tiền thân Powertech.",
              "Tiêu chuẩn công bố: ISO 9001:2015, IEC 61439-1/2, TCVN 7994-1:2009; thử nghiệm QUATEST 3.",
              "Quy trình sản xuất 7 bước: 100% Routine Test trước khi xuất xưởng và bàn giao hồ sơ nghiệm thu hoàn chỉnh.",
            ]}
          />

          {/* Pháp nhân & Trụ sở */}
          <div className="grid gap-6 rounded-lg border border-border bg-card p-6 sm:grid-cols-2">
            <div>
              <h2 className="text-sm font-semibold tracking-wide text-ink uppercase">Thông tin pháp nhân</h2>
              <dl className="mt-4 space-y-3 text-sm">
                <div>
                  <dt className="text-xs text-muted-foreground">Tên pháp lý</dt>
                  <dd className="font-semibold text-ink">{CONTACT.legalName}</dd>
                </div>
                <div>
                  <dt className="text-xs text-muted-foreground">Tên thương hiệu</dt>
                  <dd className="font-medium text-ink">{CONTACT.brand} ({CONTACT.brandShort})</dd>
                </div>
                <div>
                  <dt className="text-xs text-muted-foreground">Email chính thức</dt>
                  <dd className="font-medium text-ink">{CONTACT.email}</dd>
                </div>
                <div>
                  <dt className="text-xs text-muted-foreground">Hotline CSKH</dt>
                  <dd className="font-medium text-ink">{CONTACT.hotline}</dd>
                </div>
              </dl>
            </div>
            <div>
              <h2 className="text-sm font-semibold tracking-wide text-ink uppercase">Địa điểm hoạt động</h2>
              <dl className="mt-4 space-y-3 text-sm">
                <div>
                  <dt className="text-xs text-muted-foreground">Nhà máy sản xuất (~ 3.000 m²)</dt>
                  <dd className="font-medium text-ink">{CONTACT.factoryAddress}</dd>
                </div>
                <div>
                  <dt className="text-xs text-muted-foreground">Trụ sở công ty</dt>
                  <dd className="font-medium text-ink">{CONTACT.headOffice}</dd>
                </div>
                <div>
                  <dt className="text-xs text-muted-foreground">Phạm vi phục vụ</dt>
                  <dd className="font-medium text-ink">Giao hàng và hỗ trợ kỹ thuật 34 tỉnh thành trên toàn quốc</dd>
                </div>
              </dl>
            </div>
          </div>

          {/* 4 Trụ cột năng lực */}
          <div>
            <SectionHeading
              eyebrow="Năng lực cạnh tranh"
              title="Lý do tổng thầu và chủ đầu tư lựa chọn PTC"
            />
            <div className="mt-6 grid gap-6 sm:grid-cols-2">
              <div className="flex gap-4 rounded-lg border border-border p-5">
                <Factory className="size-6 shrink-0 text-primary" aria-hidden="true" />
                <div>
                  <h3 className="font-semibold text-ink">Nhà máy ~ 3.000 m² khép kín</h3>
                  <p className="mt-1.5 text-xs leading-relaxed text-muted-foreground">
                    Sở hữu dây chuyền cắt đột CNC, buồng phun sơn tĩnh điện công nghiệp, khu vực gia công uốn thanh cái đồng và phòng kiểm tra thử nghiệm tại xưởng.
                  </p>
                </div>
              </div>
              <div className="flex gap-4 rounded-lg border border-border p-5">
                <ShieldCheck className="size-6 shrink-0 text-primary" aria-hidden="true" />
                <div>
                  <h3 className="font-semibold text-ink">Chuẩn IEC 61439 & ISO 9001</h3>
                  <p className="mt-1.5 text-xs leading-relaxed text-muted-foreground">
                    Kiểm soát chất lượng nghiêm ngặt từ khâu bóc tách bản vẽ đến 100% Routine Test: đo cách điện, thử cao áp, kiểm tra liên tục mạch bảo vệ PE.
                  </p>
                </div>
              </div>
              <div className="flex gap-4 rounded-lg border border-border p-5">
                <Wrench className="size-6 shrink-0 text-primary" aria-hidden="true" />
                <div>
                  <h3 className="font-semibold text-ink">Một đầu mối cho Tủ điện & Máng cáp</h3>
                  <p className="mt-1.5 text-xs leading-relaxed text-muted-foreground">
                    Khớp nối 100% giữa quy cách tủ điện và hệ thống thang máng cáp, loại bỏ xung đột giao diện vật tư tại công trường, đồng bộ mốc tiến độ giao hàng.
                  </p>
                </div>
              </div>
              <div className="flex gap-4 rounded-lg border border-border p-5">
                <Users className="size-6 shrink-0 text-primary" aria-hidden="true" />
                <div>
                  <h3 className="font-semibold text-ink">Đội ngũ kỹ sư giàu kinh nghiệm</h3>
                  <p className="mt-1.5 text-xs leading-relaxed text-muted-foreground">
                    Đội ngũ nòng cốt kế thừa kinh nghiệm từ các dự án tiêu chuẩn khắt khe như LEGO VSIP 3, LG Electronics 17 MWp và showroom Lexus.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Quy trình sản xuất 7 bước */}
          <div>
            <SectionHeading
              eyebrow="Quy trình sản xuất"
              title="7 bước chế tạo và kiểm tra chất lượng tại xưởng PTC"
            />
            <div className="mt-6 space-y-4">
              {PRODUCTION_STEPS_7.map((step) => (
                <div key={step.step} className="flex gap-4 rounded-lg border border-border/80 bg-card p-4 sm:p-5">
                  <span className="grid size-9 shrink-0 place-items-center rounded-md bg-primary font-mono text-sm font-bold text-primary-foreground">
                    {step.step}
                  </span>
                  <div>
                    <h3 className="text-sm font-semibold text-ink">{step.title}</h3>
                    <p className="mt-1 text-xs leading-relaxed text-muted-foreground">{step.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Cam kết SLA Hậu Mãi */}
          <div className="rounded-lg border border-primary/20 bg-primary/[0.02] p-6">
            <h2 className="text-base font-semibold text-ink">Cam kết bảo hành & Hỗ trợ kỹ thuật (SLA)</h2>
            <div className="mt-4 grid gap-4 sm:grid-cols-2 text-xs leading-relaxed text-muted-foreground">
              <div className="flex items-start gap-2">
                <CheckCircle2 className="mt-0.5 size-4 shrink-0 text-primary" aria-hidden="true" />
                <span><strong>Phản hồi trong 2 giờ:</strong> Tiếp nhận thông tin sự cố kỹ thuật và đưa ra phương án xử lý sơ bộ qua điện thoại/Zalo.</span>
              </div>
              <div className="flex items-start gap-2">
                <CheckCircle2 className="mt-0.5 size-4 shrink-0 text-primary" aria-hidden="true" />
                <span><strong>Hiện trường trong 24–48 giờ:</strong> Cử kỹ sư trực tiếp hỗ trợ xử lý tại hiện trường cho các dự án theo thỏa thuận hợp đồng.</span>
              </div>
            </div>
          </div>
        </div>
      </Section>

      <LeadSection
        title="Gửi bản vẽ hoặc BOQ để nhận tư vấn kỹ thuật từ PTC"
        intro="Kỹ sư PTC sẵn sàng hỗ trợ bóc tách hồ sơ, tối ưu cấu hình và phát hành báo giá kỹ thuật nhanh chóng."
        sourcePage="gioi-thieu"
      />
    </>
  );
}
