import { Button } from "@/components/ui/button";
import { CONTACT } from "@/lib/site";
import { track } from "@/lib/analytics";
import { MessageSquare, Phone } from "lucide-react";

type Props = {
  label?: string;
  size?: "default" | "sm" | "lg" | "xl";
  location: string;
  className?: string;
};

export function ZaloButton({ label = "Nhắn Zalo ngay", size = "default", location, className }: Props) {
  return (
    <Button asChild variant="zalo" size={size} className={className}>
      <a
        href={CONTACT.zalo}
        target="_blank"
        rel="noopener noreferrer"
        onClick={() => track("click_zalo", { location })}
      >
        <MessageSquare aria-hidden="true" />
        {label}
      </a>
    </Button>
  );
}

export function CallButton({
  size = "default",
  location,
  variant = "outline",
}: {
  size?: "default" | "sm" | "lg" | "xl";
  location: string;
  variant?: "outline" | "outlineLight" | "secondary";
}) {
  return (
    <Button asChild variant={variant} size={size}>
      <a href={`tel:${CONTACT.hotlineRaw}`} onClick={() => track("click_call", { location })}>
        <Phone aria-hidden="true" />
        {CONTACT.hotline}
      </a>
    </Button>
  );
}
