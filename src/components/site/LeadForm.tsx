import { useState } from "react";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { supabase } from "@/integrations/supabase/client";
import { track } from "@/lib/analytics";
import { ZaloButton } from "./ZaloButton";

const NEEDS = [
  { value: "tu-dien", label: "Tủ điện" },
  { value: "thang-mang-cap", label: "Thang máng cáp" },
  { value: "ca-hai", label: "Cả hai" },
  { value: "khac", label: "Khác" },
];

export function LeadForm({
  defaultNeed = "khac",
  sourcePage,
}: {
  defaultNeed?: string;
  sourcePage: string;
}) {
  const [loading, setLoading] = useState(false);
  const [done, setDone] = useState(false);

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    const payload = {
      full_name: String(data.get("full_name") ?? "").trim(),
      company: String(data.get("company") ?? "").trim(),
      phone: String(data.get("phone") ?? "").trim(),
      email: String(data.get("email") ?? "").trim() || null,
      need: String(data.get("need") ?? defaultNeed),
      note: String(data.get("note") ?? "").trim() || null,
      source_page: sourcePage,
    };

    if (!payload.full_name || !payload.company || !payload.phone) {
      toast.error("Vui lòng nhập họ tên, công ty và số điện thoại.");
      return;
    }

    setLoading(true);
    const { error } = await supabase.from("leads").insert(payload);
    setLoading(false);

    if (error) {
      toast.error("Gửi yêu cầu chưa thành công. Vui lòng gọi hotline hoặc nhắn Zalo.");
      return;
    }

    track("form_submit", { form: "lead", need: payload.need, page: sourcePage });
    setDone(true);
    form.reset();
    toast.success("Cảm ơn, chúng tôi sẽ liên hệ trong 24h.");
  }

  return (
    <div className="border border-border bg-card p-6 md:p-9">
      <div className="mb-7 flex items-baseline justify-between gap-4 border-b border-border pb-5">
        <div>
          <p className="eyebrow text-primary">Phiếu yêu cầu kỹ thuật</p>
          <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
            Kỹ sư PTC phản hồi trong 24h làm việc. Thông tin dự án được bảo mật.
          </p>
        </div>
        <span className="hidden shrink-0 font-display text-xs font-semibold tracking-widest text-muted-foreground sm:block">
          01 / 02
        </span>
      </div>
      {done ? (
        <div className="rule-top -mx-6 -mt-6 mb-6 bg-secondary px-6 py-4 md:-mx-8 md:-mt-8 md:px-8">
          <p className="font-semibold text-ink">Cảm ơn, chúng tôi sẽ liên hệ trong 24h.</p>
          <p className="mt-1 text-sm text-muted-foreground">
            Cần gấp hơn? Nhắn Zalo để được kỹ sư PTC hỗ trợ ngay.
          </p>
        </div>
      ) : null}

      <form onSubmit={onSubmit} className="grid gap-5 sm:grid-cols-2 sm:gap-x-5 sm:gap-y-6">
        <div className="grid gap-2">
          <Label className="text-[12px] font-semibold tracking-wide text-ink uppercase" htmlFor="full_name">
            Họ tên <span className="text-destructive">*</span>
          </Label>
          <Input className="h-11 rounded-none" id="full_name" name="full_name" required autoComplete="name" />
        </div>
        <div className="grid gap-2">
          <Label className="text-[12px] font-semibold tracking-wide text-ink uppercase" htmlFor="company">
            Công ty <span className="text-destructive">*</span>
          </Label>
          <Input className="h-11 rounded-none" id="company" name="company" required autoComplete="organization" />
        </div>
        <div className="grid gap-2">
          <Label className="text-[12px] font-semibold tracking-wide text-ink uppercase" htmlFor="phone">
            Số điện thoại <span className="text-destructive">*</span>
          </Label>
          <Input className="h-11 rounded-none" id="phone" name="phone" type="tel" required autoComplete="tel" />
        </div>
        <div className="grid gap-2">
          <Label className="text-[12px] font-semibold tracking-wide text-ink uppercase" htmlFor="email">Email</Label>
          <Input className="h-11 rounded-none" id="email" name="email" type="email" autoComplete="email" />
        </div>
        <div className="grid gap-2 sm:col-span-2">
          <Label className="text-[12px] font-semibold tracking-wide text-ink uppercase" htmlFor="need">Hạng mục cần báo giá</Label>
          <select
            id="need"
            name="need"
            defaultValue={defaultNeed}
            className="h-11 w-full rounded-none border border-input bg-background px-3 text-sm focus-visible:ring-1 focus-visible:ring-ring focus-visible:outline-none"
          >
            {NEEDS.map((n) => (
              <option key={n.value} value={n.value}>
                {n.label}
              </option>
            ))}
          </select>
        </div>
        <div className="grid gap-2 sm:col-span-2">
          <Label className="text-[12px] font-semibold tracking-wide text-ink uppercase" htmlFor="note">Mô tả kỹ thuật (khối lượng, quy cách, tiến độ mong muốn)</Label>
          <Textarea className="rounded-none" id="note" name="note" rows={4} />
        </div>
        <div className="sm:col-span-2">
          <Button type="submit" size="xl" disabled={loading} className="w-full sm:w-auto">
            {loading ? "Đang gửi…" : "Yêu cầu báo giá kỹ thuật"}
          </Button>
        </div>
      </form>

      <div className="mt-7 flex flex-wrap items-center gap-3 border-t border-border pt-5">
        <span className="text-sm text-muted-foreground">Có bản vẽ sẵn? Gửi trực tiếp qua Zalo để xử lý nhanh hơn:</span>
        <ZaloButton label="Nhắn Zalo gửi bản vẽ" size="sm" location={`form-${sourcePage}`} />
      </div>
    </div>
  );
}
