# HƯỚNG DẪN CẤU HÌNH NHẬN EMAIL THÔNG BÁO BÁO GIÁ
**Email nhận thông báo:** `nguyenxuanthanh2009@gmail.com`  
**Website:** https://tudienptc.vn

---

## 1. Cấu hình đã thiết lập sẵn trong Hệ thống

1. **Edge Function:** Đã tạo hàm `supabase/functions/send-lead-email/index.ts` nhận dữ liệu form và gửi email định dạng HTML chuyên nghiệp (đầy đủ: Họ tên, Công ty, Số điện thoại, Email, Hạng mục báo giá, Ghi chú yêu cầu kỹ thuật, Nút nhắn Zalo / Gọi lại ngay).
2. **Form Client:** Đã cập nhật `src/components/site/LeadForm.tsx` tự động gọi Edge Function ngay khi khách hàng nhấn gửi form thành công.

---

## 2. Kích hoạt gửi Email trực tiếp qua Resend (Khuyên dùng - Miễn phí 3.000 email/tháng)

Để email gửi thẳng vào hộp thư đến `nguyenxuanthanh2009@gmail.com`:

1. Đăng ký tài khoản miễn phí tại [https://resend.com](https://resend.com)
2. Vào mục **API Keys** -> Bấm **Create API Key** -> Copy khóa API (dạng `re_xxxxxxxxx`).
3. Thêm Secret vào Supabase / Lovable:
   - Tên biến: `RESEND_API_KEY`
   - Giá trị: Mã API Key vừa copy từ Resend.

---

## 3. Quản lý trực tiếp dữ liệu khách hàng
Ngoài việc nhận email, toàn bộ thông tin khách điền form luôn được lưu trữ vĩnh viễn và an toàn trong bảng `leads` của cơ sở dữ liệu Supabase. Bạn có thể đăng nhập vào Dashboard Supabase để xem, lọc và xuất file Excel bất kỳ lúc nào.
