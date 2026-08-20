import { useState } from "react";
import { Link } from "@tanstack/react-router";
import { Menu, X, Phone } from "lucide-react";
import { CONTACT, NAV } from "@/lib/site";
import { track } from "@/lib/analytics";
import { Logo } from "./Logo";
import { LanguageToggle } from "./LanguageToggle";
import { ZaloButton } from "./ZaloButton";

export function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-background/95 backdrop-blur">
      <div className="container-page flex h-16 items-center justify-between gap-4 md:h-20">
        <Logo />

        <nav className="hidden items-center gap-5 xl:flex" aria-label="Điều hướng chính">
          {NAV.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              activeOptions={{ exact: item.to === "/" }}
              activeProps={{ className: "text-primary" }}
              className="text-sm font-medium text-foreground transition-colors hover:text-primary"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <LanguageToggle className="hidden sm:flex" />
          <a
            href={`tel:${CONTACT.hotlineRaw}`}
            onClick={() => track("click_call", { location: "header" })}
            className="hidden items-center gap-2 text-sm font-semibold text-ink lg:flex"
          >
            <Phone className="size-4 text-primary" aria-hidden="true" />
            {CONTACT.hotline}
          </a>
          <ZaloButton label="Zalo" location="header" className="hidden sm:inline-flex" />
          <button
            type="button"
            aria-label={open ? "Đóng menu" : "Mở menu"}
            onClick={() => setOpen((v) => !v)}
            className="grid size-10 place-items-center border border-border xl:hidden"
          >
            {open ? <X className="size-5" /> : <Menu className="size-5" />}
          </button>
        </div>
      </div>

      {open ? (
        <nav className="border-t border-border bg-background xl:hidden" aria-label="Điều hướng di động">
          <div className="container-page flex flex-col py-2">
            {NAV.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                onClick={() => setOpen(false)}
                className="border-b border-border py-3 text-sm font-medium last:border-0"
              >
                {item.label}
              </Link>
            ))}
            <div className="flex items-center gap-3 py-3">
              <ZaloButton label="Nhắn Zalo" location="mobile-menu" />
              <LanguageToggle />
            </div>
          </div>
        </nav>
      ) : null}
    </header>
  );
}
