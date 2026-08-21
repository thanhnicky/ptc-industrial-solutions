declare global {
  interface Window {
    dataLayer?: Record<string, unknown>[];
    gtag?: (...args: unknown[]) => void;
  }
}

export type TrackEventName =
  | "zalo_click"
  | "lead_form_start"
  | "lead_form_submit"
  | "lead_form_success"
  | "phone_click"
  | "email_click"
  | "catalog_download"
  | "file_upload"
  | "cta_click"
  | "view_product"
  | "view_case_study"
  | "scroll_depth"
  | "time_engaged";

export interface TrackParams {
  page_type?: "home" | "product_hub" | "product_detail" | "solution" | "commercial" | "knowledge" | "company" | "contact" | "project";
  page_path?: string;
  product_category?: "tu-dien-ha-the" | "thang-mang-cap" | "solar" | "co-khi-me";
  product_name?: string;
  cta_label?: string;
  cta_location?: "header" | "hero" | "sticky_bar" | "lead_section" | "footer" | "product_card" | "mobile_menu" | "content_inline";
  lead_type?: "zalo" | "form_boq" | "form_consultation" | "phone" | "email";
  source_context?: string;
  scroll_percent?: 50 | 75 | 90;
  time_seconds?: number;
  [key: string]: unknown;
}

/**
 * Đẩy sự kiện chuẩn hóa vào window.dataLayer (Google Tag Manager / GA4).
 */
export function track(event: TrackEventName | string, params: TrackParams = {}) {
  if (typeof window === "undefined") return;

  const enrichedParams = {
    event,
    page_path: window.location.pathname,
    timestamp: new Date().toISOString(),
    ...params,
  };

  window.dataLayer = window.dataLayer || [];
  window.dataLayer.push(enrichedParams);

  if (typeof process !== "undefined" && process.env && process.env["NODE_ENV"] === "development") {
    // eslint-disable-next-line no-console
    console.debug("[Analytics DataLayer]", enrichedParams);
  }
}

/**
 * Hook/Listener theo dõi độ sâu cuộn trang (Scroll Depth 50%, 75%, 90%) và Time Engaged > 60s
 */
export function initEngagementTracking(pageType: TrackParams["page_type"] = "home") {
  if (typeof window === "undefined") return () => {};

  const triggeredDepths = new Set<number>();
  let timeEngagedTriggered = false;

  const handleScroll = () => {
    const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
    if (scrollHeight <= 0) return;
    const scrollPercent = Math.round((window.scrollY / scrollHeight) * 100);

    const thresholds: (50 | 75 | 90)[] = [50, 75, 90];
    for (const threshold of thresholds) {
      if (scrollPercent >= threshold && !triggeredDepths.has(threshold)) {
        triggeredDepths.add(threshold);
        track("scroll_depth", {
          page_type: pageType,
          scroll_percent: threshold,
        });
      }
    }
  };

  const timer = setTimeout(() => {
    if (!timeEngagedTriggered) {
      timeEngagedTriggered = true;
      track("time_engaged", {
        page_type: pageType,
        time_seconds: 60,
      });
    }
  }, 60000);

  window.addEventListener("scroll", handleScroll, { passive: true });

  return () => {
    window.removeEventListener("scroll", handleScroll);
    clearTimeout(timer);
  };
}

