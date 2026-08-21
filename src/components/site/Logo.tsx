import { Link } from "@tanstack/react-router";

export function Logo({ variant = "dark" }: { variant?: "dark" | "light" }) {
  return (
    <Link to="/" className="group flex items-center gap-3" aria-label="PTC Switchboard - Trang chủ">
      <img
        src="/logo-ptc.png"
        alt="PTC Switchboard"
        width={120}
        height={112}
        className="h-auto w-28 object-contain"
      />
    </Link>
  );
}
