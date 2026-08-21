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
  { value: "tu-dien", label: "Tủ điện công nghiệp (MSB, DB, MCC, VSD, Solar...)" },
  { value: "thang-mang-cap", label: "Thang máng cáp (Máng, Khay, Thang, Phụ kiện...)" },
  { value: "ca-hai", label: "Trọn gói cả Tủ điện & Thang máng cáp" },
  { value: "khac", label: "Gia công cơ khí theo bản vẽ / Khác" },
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
  const [hasStarted, setHasStarted] = useState(false);

  function handleFocus() {
    if (!hasStarted) {
      setHasStarted(true);
      track("lead_form_start", {
        page_path: window.location.pathname,
        source_context: sourcePage,
        lead_type: "form_consultation",
      });
    }
  }

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);

    // Anti-spam honeypot
    const honeypot = String(data.get("website_hp") ?? "").trim();
    if (honeypot) {
      // Bot detected - silently ignore
      setDone(true);
      return;
    }

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
      toast.error("Vui lòng nhập đầy đủ họ tên, công ty và số điện thoại.");
      return;
    }

    track("lead_form_submit", {
      page_path: window.location.pathname,
      source_context: sourcePage,
      product_category: payload.need as never,
      lead_type: "form_consultation",
    });

    setLoading(true);
    const { error } = await supabase.from("leads").insert(payload);
    setLoading(false);

    if (error) {
      toast.error("Gửi yêu cầu chưa thành công. Quý khách vui lòng nhắn trực tiếp qua Zalo hoặc Hotline.");
      return;
    }

    track("lead_form_success", {
      page_path: window.location.pathname,
      source_context: sourcePage,
      product_category: payload.need as never,
      lead_type: "form_consultation",
    });

    setDone(true);
    form.reset();
    toast.success("Cảm ơn quý khách! Kỹ sư PTC sẽ liên hệ trao đổi phương án kỹ thuật sớm nhất.");
  }

  return (
    <div className="border border-border bg-card p-6 md:p-9 shadow-xs">
      <div className="mb-7 border-b border-border pb-5">
        <p className="eyebrow text-primary">Phiếu tiếp nhận yêu cầu kỹ thuật & Báo giá</p>
        <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
          Kỹ sư PTC sẽ bóc tách sơ đồ nguyên lý, kiểm tra thông số dòng Icw/cấp IP và phản hồi phương án cấu hình tối ưu chi phí cho dự án. Mọi thông tin dự án được bảo mật tuyệt đối.
        </p>
        <div className="mt-5 flex flex-wrap items-center gap-3">
          <ZaloButton label="Nhắn Zalo gửi bản vẽ ngay" location={`form-${sourcePage}`} />
          <span className="text-xs text-muted-foreground">
            Khuyến nghị gửi file CAD/PDF hoặc BOQ qua Zalo để được xử lý nhanh nhất.
          </span>
        </div>
      </div>

      {done ? (
        <div className="mb-6 border border-primary/30 bg-primary/[0.04] p-5">
          <p className="font-semibold text-ink">Đã tiếp nhận yêu cầu thành công!</p>
          <p className="mt-1 text-sm text-muted-foreground leading-relaxed">
            Kỹ sư phụ trách dự án của PTC sẽ liên hệ lại với quý khách trong thời gian sớm nhất. Nếu cần xử lý bản vẽ khẩn cấp, quý khách vui lòng nhắn qua Zalo kỹ thuật.
          </p>
        </div>
      ) : null}

      <form onSubmit={onSubmit} onFocus={handleFocus} className="grid gap-5 sm:grid-cols-2 sm:gap-x-5 sm:gap-y-6">
        {/* Honeypot field (hidden from real users) */}
        <input
          type="text"
          name="website_hp"
          tabIndex={-1}
          autoComplete="off"
          style={{ display: "none", position: "absolute", left: "-9999px" }}
          aria-hidden="true"
        />

        <div className="grid gap-2">
          <Label className="text-[12px] font-semibold tracking-wide text-ink uppercase" htmlFor="full_name">
            Họ và tên <span className="text-destructive">*</span>
          </Label>
          <Input className="h-11 rounded-none" id="full_name" name="full_name" required autoComplete="name" placeholder="Nguyễn Văn A" />
        </div>
        <div className="grid gap-2">
          <Label className="text-[12px] font-semibold tracking-wide text-ink uppercase" htmlFor="company">
            Công ty / Nhà thầu / Chủ đầu tư <span className="text-destructive">*</span>
          </Label>
          <Input className="h-11 rounded-none" id="company" name="company" required autoComplete="organization" placeholder="Tên công ty hoặc dự án" />
        </div>
        <div className="grid gap-2">
          <Label className="text-[12px] font-semibold tracking-wide text-ink uppercase" htmlFor="phone">
            Số điện thoại liên hệ <span className="text-destructive">*</span>
          </Label>
          <Input className="h-11 rounded-none" id="phone" name="phone" type="tel" required autoComplete="tel" placeholder="090x xxx xxx" />
        </div>
        <div className="grid gap-2">
          <Label className="text-[12px] font-semibold tracking-wide text-ink uppercase" htmlFor="email">Email công ty (Nhận báo giá)</Label>
          <Input className="h-11 rounded-none" id="email" name="email" type="email" autoComplete="email" placeholder="email@company.vn" />
        </div>
        <div className="grid gap-2 sm:col-span-2">
          <Label className="text-[12px] font-semibold tracking-wide text-ink uppercase" htmlFor="need">Hạng mục cần báo giá / Tư vấn</Label>
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
          <Label className="text-[12px] font-semibold tracking-wide text-ink uppercase" htmlFor="note">Mô tả thông số kỹ thuật & mốc tiến độ</Label>
          <Textarea className="rounded-none text-sm" id="note" name="note" rows={4} placeholder="Ví dụ: 1 tủ MSB 3200A Form 3b thiết bị Schneider, 300m máng cáp 400x100 mạ kẽm nhúng nóng – cần giao đợt 1 trong 4 tuần tại KCN VSIP." />
        </div>
        <div className="sm:col-span-2">
          <Button type="submit" size="xl" disabled={loading} className="w-full sm:w-auto">
            {loading ? "Đang gửi yêu cầu…" : "Gửi yêu cầu kỹ thuật & Báo giá"}
          </Button>
        </div>
      </form>
    </div>
  );
}


