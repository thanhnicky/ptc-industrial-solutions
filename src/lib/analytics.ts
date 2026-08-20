declare global {
  interface Window {
    dataLayer?: Record<string, unknown>[];
  }
}

/**
 * Đẩy sự kiện vào dataLayer (Google Tag Manager / GA4).
 * Thay GTM_ID trong src/routes/__root.tsx bằng mã container thật để bắt đầu đo.
 */
export function track(event: string, params: Record<string, unknown> = {}) {
  if (typeof window === "undefined") return;
  window.dataLayer = window.dataLayer || [];
  window.dataLayer.push({ event, ...params });
}
