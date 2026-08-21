import { useState } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/site/PageHero";
import { Section } from "@/components/site/Section";
import { LeadSection } from "@/components/site/LeadSection";
import { ProjectCard } from "@/components/site/ProjectCard";
import { ZaloButton } from "@/components/site/ZaloButton";
import { IMAGES } from "@/components/site/images";
import { PROJECTS, PROJECT_FILTERS } from "@/lib/site";
import { track } from "@/lib/analytics";

const TITLE = "Dự án tiêu biểu – tủ điện & thang máng cáp | PTC";
const DESC =
  "Các dự án PTC đã triển khai: Ong Biển, ĐMTMN Phú Mỹ 1 1.460 kWp, kho vận DPL, Hải Đức, Lexus, LEGO VSIP 3, LG 17 MWp và nhiều nhà máy KCN.";

export const Route = createFileRoute("/du-an")({
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

function Page() {
  const [filter, setFilter] = useState<string>("all");
  const list = filter === "all" ? PROJECTS : PROJECTS.filter((p) => p.tags.includes(filter as never));

  return (
    <>
      <PageHero
        title="Dự án tiêu biểu"
        subtitle="Tủ điện và thang máng cáp PTC đang vận hành tại các nhà máy, khu công nghiệp và hệ điện mặt trời trên cả nước."
        image={IMAGES.plant}
      >
        <ZaloButton size="lg" location="hero-du-an" label="Nhận hồ sơ năng lực" />
      </PageHero>

      <Section>
        <div className="mb-8 flex flex-wrap gap-2">
          {PROJECT_FILTERS.map((f) => (
            <button
              key={f.value}
              type="button"
              onClick={() => {
                setFilter(f.value);
                track("filter_projects", { filter: f.value });
              }}
              className={`h-10 border px-4 text-sm font-semibold transition-colors ${
                filter === f.value
                  ? "border-primary bg-primary text-primary-foreground"
                  : "border-border bg-card text-ink hover:border-primary hover:text-primary"
              }`}
            >
              {f.label}
            </button>
          ))}
        </div>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {list.map((p) => (
            <ProjectCard key={p.name} project={p} />
          ))}
        </div>
      </Section>

      <LeadSection
        title="Dự án của bạn cần tủ điện hay thang máng cáp?"
        sourcePage="du-an"
      />
    </>
  );
}
