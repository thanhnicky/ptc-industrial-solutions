import { Link } from "@tanstack/react-router";

interface LogoProps {
  variant?: "dark" | "light";
  className?: string;
}

export function Logo({ className }: LogoProps) {
  return (
    <Link to="/" className="group flex items-center gap-2 shrink-0" aria-label="PTC Switchboard - Trang chủ">
      <img
        src="/logo-ptc.png"
        alt="PTC Switchboard"
        width={96}
        height={90}
        className={className || "h-10 w-auto max-h-10 md:h-11 md:max-h-11 object-contain"}
      />
    </Link>
  );
}
