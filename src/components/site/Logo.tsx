import { Link } from "@tanstack/react-router";

export function Logo({ variant = "dark" }: { variant?: "dark" | "light" }) {
  const main = variant === "light" ? "text-steel-foreground" : "text-ink";
  return (
    <Link to="/" className="flex items-center gap-3" aria-label="PTC Switchboard - Trang chủ">
      <span className="grid h-10 w-10 place-items-center rounded-xs bg-primary font-bold tracking-tight text-primary-foreground">
        PTC
      </span>
      <span className="leading-tight">
        <span className={`block text-sm font-bold tracking-[0.18em] ${main}`}>SWITCHBOARD</span>
        <span className="block text-[11px] text-muted-foreground">
          Tủ điện &amp; Thang máng cáp
        </span>
      </span>
    </Link>
  );
}
