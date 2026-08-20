import { CONTACT } from "@/lib/site";
import { track } from "@/lib/analytics";
import { MessageSquare, Phone } from "lucide-react";

/** Thanh liên hệ cố định trên mobile: Zalo (chính) + gọi hotline. */
export function StickyContact() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-50 grid grid-cols-2 border-t border-border bg-background sm:hidden">
      <a
        href={CONTACT.zalo}
        target="_blank"
        rel="noopener noreferrer"
        onClick={() => track("click_zalo", { location: "sticky-mobile" })}
        className="flex h-14 items-center justify-center gap-2 bg-zalo text-sm font-semibold text-zalo-foreground"
      >
        <MessageSquare className="size-4" aria-hidden="true" />
        Nhắn Zalo
      </a>
      <a
        href={`tel:${CONTACT.hotlineRaw}`}
        onClick={() => track("click_call", { location: "sticky-mobile" })}
        className="flex h-14 items-center justify-center gap-2 text-sm font-semibold text-ink"
      >
        <Phone className="size-4 text-primary" aria-hidden="true" />
        Gọi ngay
      </a>
    </div>
  );
}
