import { CONTACT } from "@/lib/site";
import { track } from "@/lib/analytics";
import { MessageSquare, Phone } from "lucide-react";

/** Thanh liên hệ cố định trên mobile: Zalo (chính) + gọi hotline. */
export function StickyContact() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-50 grid grid-cols-2 border-t border-border bg-background pb-[env(safe-area-inset-bottom)] sm:hidden shadow-lg">
      <a
        href={CONTACT.zalo}
        target="_blank"
        rel="noopener noreferrer"
        onClick={() => track("click_zalo", { location: "sticky-mobile" })}
        className="flex h-14 items-center justify-center gap-2 bg-zalo text-[15px] font-semibold text-zalo-foreground active:opacity-90"
      >
        <MessageSquare className="size-4" aria-hidden="true" />
        <span>Nhắn Zalo</span>
      </a>
      <a
        href={`tel:${CONTACT.hotlineRaw}`}
        onClick={() => track("click_call", { location: "sticky-mobile" })}
        className="flex h-14 items-center justify-center gap-2 text-[15px] font-semibold text-ink active:bg-muted/50 tech-value"
      >
        <Phone className="size-4 text-primary" aria-hidden="true" />
        <span>Gọi hotline</span>
      </a>
    </div>
  );
}
