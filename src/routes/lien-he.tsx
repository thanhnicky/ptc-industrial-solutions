import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/site/PageHero";
import { Section, SectionHeading } from "@/components/site/Section";
import { LeadForm } from "@/components/site/LeadForm";
import { ZaloButton, CallButton } from "@/components/site/ZaloButton";
import { IMAGES } from "@/components/site/images";
import { CONTACT } from "@/lib/site";

const TITLE = "Liên hệ PTC – hotline 0836 97 77 99, báo giá 24h";
const DESC =
  "Liên hệ Công ty Cổ phần Tủ bảng điện PTC: hotline 0836 97 77 99, Zalo, email hi@tudienptc.vn. Nhà máy tại Linh Xuân, TP.HCM.";

export const Route = createFileRoute("/lien-he")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESC },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESC },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { property: "og:url", content: "https://tudienptc.vn/lien-he" },
    ],
    links: [{ rel: "canonical", href: "https://tudienptc.vn/lien-he" }],
  }),
  component: Page,
});

function Page() {
  return (
    <>
      <PageHero
        title="Liên hệ PTC"
        subtitle="Gọi hotline hoặc nhắn Zalo để được kỹ sư PTC tư vấn ngay. Yêu cầu báo giá gửi qua form sẽ được phản hồi trong vòng 24h."
        image={IMAGES.warehouse}
      >
        <ZaloButton size="lg" location="hero-lien-he" />
        <CallButton size="lg" location="hero-lien-he" variant="outlineLight" />
      </PageHero>

      <Section>
        <div className="grid gap-10 lg:grid-cols-[1fr_1.15fr] lg:items-start">
          <div>
            <SectionHeading eyebrow="Thông tin công ty" title={CONTACT.companyVi} />
            <dl className="space-y-5 text-sm">
              <div>
                <dt className="font-semibold text-ink">Hotline kỹ thuật (24/7)</dt>
                <dd className="text-muted-foreground">{CONTACT.hotline}</dd>
              </div>
              <div>
                <dt className="font-semibold text-ink">Email</dt>
                <dd className="text-muted-foreground">{CONTACT.email}</dd>
              </div>
              <div>
                <dt className="font-semibold text-ink">Trụ sở chính</dt>
                <dd className="text-muted-foreground">{CONTACT.headOffice}</dd>
              </div>
              <div>
                <dt className="font-semibold text-ink">Nhà máy sản xuất</dt>
                <dd className="text-muted-foreground">{CONTACT.factory}</dd>
              </div>
              <div>
                <dt className="font-semibold text-ink">Văn phòng</dt>
                <dd className="text-muted-foreground">{CONTACT.offices.join(" · ")}</dd>
              </div>
            </dl>
          </div>
          <LeadForm sourcePage="lien-he" />
        </div>
      </Section>

      <Section tone="muted">
        <SectionHeading eyebrow="Bản đồ" title="Nhà máy PTC tại TP. Hồ Chí Minh" />
        <div className="border border-border">
          <iframe
            src={CONTACT.mapEmbed}
            title="Bản đồ nhà máy PTC"
            className="h-[380px] w-full"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </Section>
    </>
  );
}
