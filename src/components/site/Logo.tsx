import { Link } from "@tanstack/react-router";

export function Logo({ variant = "dark" }: { variant?: "dark" | "light" }) {
  const main = variant === "light" ? "text-steel-foreground" : "text-ink";
  const sub = variant === "light" ? "text-steel-foreground/60" : "text-muted-foreground";
  return (
    <Link to="/" className="group flex items-center gap-3" aria-label="PTC Switchboard - Trang chủ">
      <span
        className={`grid h-9 w-9 place-items-center bg-primary font-display text-[13px] font-bold tracking-tight text-primary-foreground`}
      >
        PTC
      </span>
      <span className="leading-tight">
        <span className={`block font-display text-sm font-semibold tracking-[0.2em] ${main}`}>
          SWITCHBOARD
        </span>
        <span className={`block text-[10.5px] tracking-wide ${sub}`}>
          Tủ điện hạ thế &amp; thang máng cáp
        </span>
      </span>
    </Link>
  );
}
