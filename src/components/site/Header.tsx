import { useState } from "react";
import { Link } from "@tanstack/react-router";
import { Menu, X, Phone } from "lucide-react";
import { CONTACT, NAV } from "@/lib/site";
import { track } from "@/lib/analytics";
import { Logo } from "./Logo";
import { ZaloButton } from "./ZaloButton";

export function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-border/80 bg-background/90 backdrop-blur-md">
      <div className="container-wide grid h-16 grid-cols-[minmax(0,1fr)_auto] items-center gap-6 md:h-[74px] xl:grid-cols-[auto_1fr_auto]">
        <Logo className="h-10 w-auto max-h-10 md:h-11 md:max-h-11 object-contain" />

        <nav className="hidden justify-center gap-7 xl:flex" aria-label="Điều hướng chính">
          {NAV.filter((n) => n.to !== "/").map((item) => (
            <Link
              key={item.to}
              to={item.to}
              activeProps={{ className: "text-ink font-semibold after:scale-x-100" }}
              className="relative py-2 text-[14px] font-medium tracking-normal text-muted-foreground transition-colors after:absolute after:inset-x-0 after:bottom-0 after:h-0.5 after:origin-left after:scale-x-0 after:bg-primary after:transition-transform hover:text-ink hover:after:scale-x-100"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2 sm:gap-4">
          <a
            href={`tel:${CONTACT.hotlineRaw}`}
            onClick={() => track("click_call", { location: "header" })}
            className="hidden items-center gap-2 text-[13.5px] font-semibold text-ink transition-colors hover:text-primary lg:flex tech-value"
          >
            <Phone className="size-3.5 text-primary" aria-hidden="true" />
            <span>{CONTACT.hotline}</span>
          </a>
          <ZaloButton label="Nhắn Zalo gửi bản vẽ" size="sm" location="header" className="hidden sm:inline-flex" />
          <button
            type="button"
            aria-label={open ? "Đóng menu" : "Mở menu"}
            onClick={() => setOpen((v) => !v)}
            className="grid size-11 shrink-0 place-items-center rounded-md border border-border text-ink xl:hidden focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
          >
            {open ? <X className="size-5" /> : <Menu className="size-5" />}
          </button>
        </div>
      </div>

      {open ? (
        <nav className="border-t border-border bg-background xl:hidden" aria-label="Điều hướng di động">
          <div className="container-wide flex flex-col py-2">
            {NAV.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                onClick={() => setOpen(false)}
                activeProps={{ className: "font-semibold text-primary bg-muted/40" }}
                className="flex min-h-[48px] items-center border-b border-border/70 px-2 text-[15px] font-medium text-ink transition-colors last:border-0"
              >
                {item.label}
              </Link>
            ))}
            <div className="flex items-center gap-3 py-4">
              <ZaloButton label="Nhắn Zalo gửi bản vẽ" size="lg" location="mobile-menu" className="w-full" />
            </div>
          </div>
        </nav>
      ) : null}
    </header>
  );
}
