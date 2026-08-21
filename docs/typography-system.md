# HỆ THỐNG TYPOGRAPHY & DESIGN TOKENS — tudienptc.vn
**Precision Industrial Premium Design System**

---

## 1. Font Pairing

Hệ thống sử dụng đúng 2 font families chính + 1 font monospace kỹ thuật:

| Vai trò | Font Family | Trọng lượng (Weights) | Ứng dụng |
| :--- | :--- | :--- | :--- |
| **Heading / Display** | `IBM Plex Sans` | 500, 600, 700 | H1, H2, H3, H4, Product Titles, Section Headings |
| **Body / UI / Form** | `Inter` | 400, 500, 600, 700 | Paragraphs, Form Labels, Inputs, Navigation, Buttons, Footers |
| **Technical / Monospace** | `IBM Plex Mono` | 400, 500, 600 | Eyebrows, Thông số kỹ thuật (A, kA, IP, Icw), Tiêu chuẩn (IEC, ISO, TCVN), Tabular Numbers |

### Tối ưu hóa tải font
- Nạp qua Google Fonts với preconnect đến `https://fonts.googleapis.com` và `https://fonts.gstatic.com`.
- Thuộc tính `display=swap` chống blocking render.
- Hỗ trợ đầy đủ bộ ký tự Latin và Tiếng Việt chuẩn dấu kỹ thuật.

---

## 2. CSS Design Tokens (`src/styles.css`)

### A. Fluid Typography Scale (`clamp`)

```css
:root {
  --text-overline: clamp(0.70rem, 0.68rem + 0.08vw, 0.75rem); /* 11.2–12px */
  --text-label:    clamp(0.75rem, 0.72rem + 0.12vw, 0.8125rem); /* 12–13px */
  --text-small:    clamp(0.8125rem, 0.78rem + 0.15vw, 0.875rem); /* 13–14px */
  --text-ui:       clamp(0.875rem, 0.84rem + 0.15vw, 0.9375rem); /* 14–15px */
  --text-body:     clamp(1.00rem, 0.96rem + 0.18vw, 1.0625rem); /* 16–17px */
  --text-lead:     clamp(1.0625rem, 1.00rem + 0.35vw, 1.1875rem); /* 17–19px */
  --text-h4:       clamp(1.125rem, 1.05rem + 0.40vw, 1.25rem);   /* 18–20px */
  --text-h3:       clamp(1.25rem, 1.12rem + 0.60vw, 1.50rem);   /* 20–24px */
  --text-h2:       clamp(1.75rem, 1.35rem + 1.15vw, 2.50rem);   /* 28–40px */
  --text-h1:       clamp(2.25rem, 1.55rem + 2.30vw, 3.75rem);   /* 36–60px */
}
```

### B. Spacing System (4px Grid)

```css
:root {
  --space-1: 0.25rem;  /* 4px */
  --space-2: 0.5rem;   /* 8px */
  --space-3: 0.75rem;  /* 12px */
  --space-4: 1rem;     /* 16px */
  --space-5: 1.25rem;  /* 20px */
  --space-6: 1.5rem;   /* 24px */
  --space-8: 2rem;     /* 32px */
  --space-10: 2.5rem;  /* 40px */
  --space-12: 3rem;    /* 48px */
  --space-16: 4rem;    /* 64px */
  --space-20: 5rem;    /* 80px */
  --space-24: 6rem;    /* 96px */
}
```

### C. Precision Text Contrast Colors

```css
:root {
  --text-primary: oklch(0.16 0.012 250);   /* #111827 deep charcoal */
  --text-secondary: oklch(0.46 0.012 250); /* #4B5563 technical slate */
  --text-tertiary: oklch(0.60 0.010 250);  /* #6B7280 subtle metadata */
  --text-on-dark: oklch(0.97 0.004 106);   /* #F9FAFB crisp white/ice */
  --text-on-dark-muted: oklch(0.80 0.010 250); /* #CBD5E1 technical muted */
}
```

---

## 3. Quy tắc áp dụng & Hierarchy

### A. Desktop (1024px – 1440px+)
- **Hero H1:** 52–60px, weight 700, line-height 1.08, max-width 14–18ch.
- **Section H2:** 32–40px, weight 650–700, line-height 1.14.
- **Card H3:** 20–24px, weight 600, line-height 1.22.
- **Hero Lead:** 18–19px, weight 400, max-width 58ch.
- **Body Content:** 16–17px, weight 400, line-height 1.6, max-width 65–72ch.
- **Button / Nav:** 14–15px, weight 600.
- **Overline / Eyebrow:** 11.2–12px, font-mono, uppercase, tracking 0.10em.
- **Tech Values / Numbers:** tabular numbers `font-variant-numeric: tabular-nums`.

### B. Mobile (375px – 768px)
- **Hero H1:** 36–42px, line-height 1.10.
- **Section H2:** 28–32px.
- **Card H3:** 19–21px.
- **Body Text:** Tối thiểu 16px (tránh zoom trên iOS Safari).
- **Button / Nav Touch Targets:** Tối thiểu 48px – 52px.
- **Form Inputs:** Font size 16px, chiều cao 48px – 52px.

---

## 4. Component Rules

1. **Buttons (`src/components/ui/button.tsx`):** Bo góc `rounded-md` (6px), không bo tròn kiểu bubble/pill; hiệu ứng hover 150ms border & background.
2. **Cards (`src/components/ui/card.tsx`):** Bo góc 8px, viền mỏng `border-border`, đổ bóng tinh tế `shadow-2xs`, padding 24–32px.
3. **Forms (`src/components/site/LeadForm.tsx`):** Input cao 48px (`h-12`), text 16px, label uppercase 13–14px font-semibold.
4. **Technical Tables (`src/components/site/TechnicalTable.tsx`):** Header 12px uppercase tracking-wider, row height 48px, dữ liệu hiển thị bằng font mono tabular-nums, thanh cuộn ngang affordance trên mobile.
