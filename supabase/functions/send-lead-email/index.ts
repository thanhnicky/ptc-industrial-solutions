import { serve } from "https://deno.land/std@0.168.0/http/server.ts";

const RECIPIENT_EMAIL = "nguyenxuanthanh2009@gmail.com";
const SENDER_EMAIL = "onboarding@resend.dev"; // Or verified domain email

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
};

interface LeadPayload {
  full_name: string;
  company: string;
  phone: string;
  email?: string | null;
  need: string;
  note?: string | null;
  source_page?: string | null;
}

const NEED_LABELS: Record<string, string> = {
  "tu-dien": "Tủ điện công nghiệp (MSB, DB, MCC, VSD, Solar...)",
  "thang-mang-cap": "Thang máng cáp (Máng, Khay, Thang, Phụ kiện...)",
  "ca-hai": "Trọn gói cả Tủ điện & Thang máng cáp",
  "khac": "Gia công cơ khí theo bản vẽ / Khác",
};

serve(async (req) => {
  // Handle CORS preflight
  if (req.method === "OPTIONS") {
    return new Response("ok", { headers: corsHeaders });
  }

  try {
    const payload: LeadPayload = await req.json();

    const needLabel = NEED_LABELS[payload.need] || payload.need || "Chưa xác định";
    const timestamp = new Date().toLocaleString("vi-VN", { timeZone: "Asia/Ho_Chi_Minh" });

    const htmlContent = `
      <div style="font-family: 'Segoe UI', Arial, sans-serif; max-width: 600px; margin: 0 auto; background-color: #ffffff; border: 1px solid #e5e7eb; border-radius: 8px; overflow: hidden;">
        <div style="background-color: #0F172A; padding: 24px; text-align: center;">
          <h1 style="color: #ffffff; margin: 0; font-size: 20px; font-weight: 700;">THÔNG BÁO YÊU CẦU BÁO GIÁ MỚI</h1>
          <p style="color: #94A3B8; margin: 6px 0 0 0; font-size: 14px;">Website tudienptc.vn · PTC Switchboard</p>
        </div>

        <div style="padding: 24px 32px;">
          <div style="background-color: #F8FAFC; border-left: 4px solid #EA580C; padding: 16px; margin-bottom: 24px; border-radius: 4px;">
            <p style="margin: 0; font-size: 14px; color: #475569;">Thời gian gửi: <strong>${timestamp}</strong></p>
            <p style="margin: 4px 0 0 0; font-size: 14px; color: #475569;">Trang nguồn: <strong>${payload.source_page || "Trang chủ"}</strong></p>
          </div>

          <table style="width: 100%; border-collapse: collapse; margin-bottom: 24px;">
            <tbody>
              <tr style="border-bottom: 1px solid #E2E8F0;">
                <td style="padding: 12px 0; font-size: 14px; color: #64748B; width: 35%;">Họ và tên:</td>
                <td style="padding: 12px 0; font-size: 15px; font-weight: 600; color: #0F172A;">${payload.full_name}</td>
              </tr>
              <tr style="border-bottom: 1px solid #E2E8F0;">
                <td style="padding: 12px 0; font-size: 14px; color: #64748B;">Công ty / Dự án:</td>
                <td style="padding: 12px 0; font-size: 15px; font-weight: 600; color: #0F172A;">${payload.company}</td>
              </tr>
              <tr style="border-bottom: 1px solid #E2E8F0;">
                <td style="padding: 12px 0; font-size: 14px; color: #64748B;">Số điện thoại:</td>
                <td style="padding: 12px 0; font-size: 16px; font-weight: 700; color: #EA580C;">
                  <a href="tel:${payload.phone}" style="color: #EA580C; text-decoration: none;">${payload.phone}</a>
                </td>
              </tr>
              <tr style="border-bottom: 1px solid #E2E8F0;">
                <td style="padding: 12px 0; font-size: 14px; color: #64748B;">Email:</td>
                <td style="padding: 12px 0; font-size: 15px; color: #0F172A;">
                  ${payload.email ? `<a href="mailto:${payload.email}" style="color: #2563EB;">${payload.email}</a>` : '<span style="color: #94A3B8;">(Không cung cấp)</span>'}
                </td>
              </tr>
              <tr style="border-bottom: 1px solid #E2E8F0;">
                <td style="padding: 12px 0; font-size: 14px; color: #64748B;">Hạng mục quan tâm:</td>
                <td style="padding: 12px 0; font-size: 15px; font-weight: 600; color: #0F172A;">${needLabel}</td>
              </tr>
              <tr>
                <td style="padding: 12px 0; font-size: 14px; color: #64748B; vertical-align: top;">Ghi chú / Yêu cầu:</td>
                <td style="padding: 12px 0; font-size: 14px; color: #334155; line-height: 1.5; white-space: pre-wrap;">${payload.note || '<span style="color: #94A3B8;">(Không có ghi chú thêm)</span>'}</td>
              </tr>
            </tbody>
          </table>

          <div style="text-align: center; margin-top: 24px; padding-top: 20px; border-top: 1px solid #E2E8F0;">
            <a href="https://zalo.me/${payload.phone.replace(/[^0-9]/g, '')}" style="display: inline-block; background-color: #0068FF; color: #ffffff; padding: 12px 24px; font-weight: 600; font-size: 14px; text-decoration: none; border-radius: 6px; margin-right: 8px;">Nhắn Zalo khách hàng</a>
            <a href="tel:${payload.phone}" style="display: inline-block; background-color: #EA580C; color: #ffffff; padding: 12px 24px; font-weight: 600; font-size: 14px; text-decoration: none; border-radius: 6px;">Gọi lại ngay</a>
          </div>
        </div>

        <div style="background-color: #F1F5F9; padding: 16px; text-align: center; font-size: 12px; color: #64748B;">
          Email tự động được gửi từ hệ thống tiếp nhận khách hàng tudienptc.vn
        </div>
      </div>
    `;

    const RESEND_API_KEY = Deno.env.get("RESEND_API_KEY");

    if (RESEND_API_KEY) {
      const res = await fetch("https://api.resend.com/emails", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${RESEND_API_KEY}`,
        },
        body: JSON.stringify({
          from: `PTC Lead Alert <${SENDER_EMAIL}>`,
          to: [RECIPIENT_EMAIL],
          subject: `[BÁO GIÁ MỚI] ${payload.full_name} - ${payload.company} (${payload.phone})`,
          html: htmlContent,
        }),
      });

      const data = await res.json();
      return new Response(JSON.stringify({ success: true, data }), {
        headers: { ...corsHeaders, "Content-Type": "application/json" },
        status: 200,
      });
    }

    // If RESEND_API_KEY is not set yet, log payload and return response
    console.log(`[Lead Notification] To: ${RECIPIENT_EMAIL}`, payload);
    return new Response(
      JSON.stringify({
        success: true,
        message: `Lead recorded for ${RECIPIENT_EMAIL}. Set RESEND_API_KEY in Supabase secrets to enable direct SMTP delivery.`,
      }),
      {
        headers: { ...corsHeaders, "Content-Type": "application/json" },
        status: 200,
      }
    );
  } catch (error: any) {
    console.error("Error processing lead email:", error);
    return new Response(JSON.stringify({ error: error.message }), {
      headers: { ...corsHeaders, "Content-Type": "application/json" },
      status: 500,
    });
  }
});
