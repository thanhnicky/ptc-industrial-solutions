import { useState, useMemo } from "react";
import { Calculator, Plus, Ruler, Trash2 } from "lucide-react";

const CABLE_PRESETS = [
  { label: "Cu/XLPE/PVC 1×95", od: 18 },
  { label: "Cu/XLPE/PVC 1×120", od: 20 },
  { label: "Cu/XLPE/PVC 1×150", od: 22 },
  { label: "Cu/XLPE/PVC 1×185", od: 24 },
  { label: "Cu/XLPE/PVC 1×240", od: 27 },
  { label: "Cu/XLPE/PVC 1×300", od: 30 },
  { label: "Cu/XLPE/PVC 4×16", od: 21 },
  { label: "Cu/XLPE/PVC 4×25", od: 25 },
  { label: "Cu/XLPE/PVC 4×50", od: 32 },
  { label: "Cu/XLPE/PVC 4×95", od: 41 },
  { label: "Điều khiển 7×1.5", od: 12 },
];

const STANDARD_WIDTHS = [50, 75, 100, 150, 200, 250, 300, 400, 500, 600, 700, 800, 1000, 1200];

const TRAY_TYPES = {
  mang: { label: "Máng cáp kín (trunking)", maxWidth: 800, defaultFill: "45" },
  khay: { label: "Khay cáp đục lỗ (tray)", maxWidth: 800, defaultFill: "50" },
  thang: { label: "Thang cáp (ladder)", maxWidth: 1200, defaultFill: "50" },
} as const;

type TrayType = keyof typeof TRAY_TYPES;

interface CableRow {
  id: number;
  od: string;
  qty: string;
}

const inputClass =
  "h-11 w-full rounded-md border border-input bg-background px-3 text-sm text-ink shadow-2xs focus-visible:ring-2 focus-visible:ring-ring focus-visible:outline-none";
const labelClass = "text-xs font-semibold tracking-wide text-ink uppercase";

function pickWidth(required: number, maxWidth: number) {
  return STANDARD_WIDTHS.find((w) => w >= required && w <= maxWidth) ?? null;
}

export function CableTrayCalculator() {
  const [rows, setRows] = useState<CableRow[]>([
    { id: 1, od: "27", qty: "12" },
    { id: 2, od: "21", qty: "6" },
  ]);
  const [trayType, setTrayType] = useState<TrayType>("thang");
  const [height, setHeight] = useState("100");
  const [fill, setFill] = useState<string>(TRAY_TYPES.thang.defaultFill);
  const [reserve, setReserve] = useState("20");
  const [spacing, setSpacing] = useState("0");

  const updateRow = (id: number, patch: Partial<CableRow>) =>
    setRows((prev) => prev.map((r) => (r.id === id ? { ...r, ...patch } : r)));
  const addRow = () =>
    setRows((prev) => [
      ...prev,
      { id: Math.max(0, ...prev.map((r) => r.id)) + 1, od: "", qty: "1" },
    ]);
  const removeRow = (id: number) => setRows((prev) => prev.filter((r) => r.id !== id));

  const result = useMemo(() => {
    const cables = rows
      .map((r) => ({ d: parseFloat(r.od) || 0, n: parseInt(r.qty) || 0 }))
      .filter((c) => c.d > 0 && c.n > 0);
    const h = parseFloat(height) || 0;
    const k = (parseFloat(fill) || 0) / 100;
    const kr = 1 + (parseFloat(reserve) || 0) / 100;
    const gapFactor = parseFloat(spacing) || 0;
    if (cables.length === 0 || h <= 0 || k <= 0) return null;

    const cableArea = cables.reduce((sum, c) => sum + c.n * ((Math.PI * c.d * c.d) / 4), 0);
    const fillWidth = (cableArea * kr) / (k * h);

    const count = cables.reduce((sum, c) => sum + c.n, 0);
    const sumDiameters = cables.reduce((sum, c) => sum + c.n * c.d, 0);
    const avgDiameter = sumDiameters / count;
    const singleLayerWidth = (sumDiameters + (count - 1) * gapFactor * avgDiameter) * kr;

    const maxWidth = TRAY_TYPES[trayType].maxWidth;
    const governing = trayType === "thang" ? Math.max(fillWidth, singleLayerWidth) : fillWidth;
    const width = pickWidth(governing, maxWidth);
    const actualFill = width ? (cableArea / (width * h)) * 100 : null;

    return {
      cableArea: Math.round(cableArea),
      fillWidth: Math.ceil(fillWidth),
      singleLayerWidth: Math.ceil(singleLayerWidth),
      width,
      actualFill: actualFill?.toFixed(0),
      maxWidth,
    };
  }, [rows, trayType, height, fill, reserve, spacing]);

  return (
    <div className="not-prose rounded-lg border border-border bg-card p-6 sm:p-7">
      <div className="mb-5 flex items-center gap-2.5">
        <div className="flex size-9 items-center justify-center rounded-lg bg-primary/10">
          <Calculator className="size-5 text-primary" aria-hidden="true" />
        </div>
        <div>
          <h3 className="text-base font-bold text-ink">Tính kích thước thang máng cáp</h3>
          <p className="text-xs text-muted-foreground">
            Nhập đường kính ngoài và số sợi cáp để chọn chiều rộng tiêu chuẩn
          </p>
        </div>
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        <div className="grid gap-1.5">
          <label className={labelClass} htmlFor="ct-type">
            Loại hệ dẫn cáp
          </label>
          <select
            id="ct-type"
            value={trayType}
            onChange={(e) => {
              const t = e.target.value as TrayType;
              setTrayType(t);
              setFill(TRAY_TYPES[t].defaultFill);
            }}
            className={inputClass}
          >
            {Object.entries(TRAY_TYPES).map(([key, t]) => (
              <option key={key} value={key}>
                {t.label}
              </option>
            ))}
          </select>
        </div>
        <div className="grid gap-1.5">
          <label className={labelClass} htmlFor="ct-height">
            Chiều cao thành (mm)
          </label>
          <select
            id="ct-height"
            value={height}
            onChange={(e) => setHeight(e.target.value)}
            className={inputClass}
          >
            {["50", "75", "100", "150"].map((h) => (
              <option key={h} value={h}>
                {h} mm
              </option>
            ))}
          </select>
        </div>
        <div className="grid gap-1.5">
          <label className={labelClass} htmlFor="ct-fill">
            Hệ số lấp đầy tối đa (%)
          </label>
          <select
            id="ct-fill"
            value={fill}
            onChange={(e) => setFill(e.target.value)}
            className={inputClass}
          >
            {["30", "40", "45", "50"].map((f) => (
              <option key={f} value={f}>
                {f}%
              </option>
            ))}
          </select>
        </div>
        <div className="grid gap-1.5">
          <label className={labelClass} htmlFor="ct-reserve">
            Dự phòng mở rộng (%)
          </label>
          <select
            id="ct-reserve"
            value={reserve}
            onChange={(e) => setReserve(e.target.value)}
            className={inputClass}
          >
            {["0", "10", "20", "25", "30"].map((r) => (
              <option key={r} value={r}>
                {r}%
              </option>
            ))}
          </select>
        </div>
        {trayType === "thang" && (
          <div className="grid gap-1.5 sm:col-span-2">
            <label className={labelClass} htmlFor="ct-spacing">
              Cách xếp cáp lực trên thang (1 lớp)
            </label>
            <select
              id="ct-spacing"
              value={spacing}
              onChange={(e) => setSpacing(e.target.value)}
              className={inputClass}
            >
              <option value="0">Xếp sát nhau</option>
              <option value="1">Cách nhau 1 đường kính cáp (1D)</option>
              <option value="2">Cách nhau 2 đường kính cáp (2D)</option>
            </select>
          </div>
        )}
      </div>

      <div className="mt-5 space-y-3">
        <p className={labelClass}>Danh sách cáp trên tuyến</p>
        {rows.map((row) => {
          const preset = CABLE_PRESETS.find((p) => String(p.od) === row.od);
          return (
            <div key={row.id} className="grid grid-cols-[1fr_5.5rem_5rem_auto] items-end gap-2">
              <div className="grid gap-1">
                <label className="text-xs text-muted-foreground" htmlFor={`ct-preset-${row.id}`}>
                  Loại cáp
                </label>
                <select
                  id={`ct-preset-${row.id}`}
                  value={preset ? preset.label : ""}
                  onChange={(e) => {
                    const p = CABLE_PRESETS.find((c) => c.label === e.target.value);
                    if (p) updateRow(row.id, { od: String(p.od) });
                  }}
                  className={inputClass}
                >
                  <option value="">Tự nhập đường kính</option>
                  {CABLE_PRESETS.map((p) => (
                    <option key={p.label} value={p.label}>
                      {p.label} (~{p.od} mm)
                    </option>
                  ))}
                </select>
              </div>
              <div className="grid gap-1">
                <label className="text-xs text-muted-foreground" htmlFor={`ct-od-${row.id}`}>
                  ĐK ngoài (mm)
                </label>
                <input
                  id={`ct-od-${row.id}`}
                  type="number"
                  min="1"
                  value={row.od}
                  onChange={(e) => updateRow(row.id, { od: e.target.value })}
                  className={inputClass}
                />
              </div>
              <div className="grid gap-1">
                <label className="text-xs text-muted-foreground" htmlFor={`ct-qty-${row.id}`}>
                  Số sợi
                </label>
                <input
                  id={`ct-qty-${row.id}`}
                  type="number"
                  min="1"
                  value={row.qty}
                  onChange={(e) => updateRow(row.id, { qty: e.target.value })}
                  className={inputClass}
                />
              </div>
              <button
                type="button"
                onClick={() => removeRow(row.id)}
                disabled={rows.length === 1}
                aria-label="Xóa dòng cáp"
                className="flex size-11 items-center justify-center rounded-md border border-input text-muted-foreground hover:text-ink disabled:opacity-40"
              >
                <Trash2 className="size-4" aria-hidden="true" />
              </button>
            </div>
          );
        })}
        <button
          type="button"
          onClick={addRow}
          className="inline-flex items-center gap-1.5 text-sm font-semibold text-primary hover:underline"
        >
          <Plus className="size-4" aria-hidden="true" /> Thêm loại cáp
        </button>
      </div>

      {result && (
        <div className="mt-5 space-y-3">
          <div className="grid gap-3 sm:grid-cols-3">
            <div className="rounded-lg border border-border bg-muted/30 p-4">
              <p className="text-xs font-semibold tracking-wider text-muted-foreground uppercase">
                Tổng tiết diện cáp
              </p>
              <p className="mt-1 text-xl font-bold text-ink">
                {result.cableArea.toLocaleString("vi-VN")}{" "}
                <span className="text-sm font-normal text-muted-foreground">mm²</span>
              </p>
            </div>
            <div className="rounded-lg border border-border bg-muted/30 p-4">
              <p className="text-xs font-semibold tracking-wider text-muted-foreground uppercase">
                {trayType === "thang" ? "Rộng tối thiểu (lấp đầy / 1 lớp)" : "Rộng tối thiểu"}
              </p>
              <p className="mt-1 text-xl font-bold text-ink">
                {trayType === "thang"
                  ? `${result.fillWidth} / ${result.singleLayerWidth}`
                  : result.fillWidth}{" "}
                <span className="text-sm font-normal text-muted-foreground">mm</span>
              </p>
            </div>
            <div className="rounded-lg border border-primary/30 bg-primary/5 p-4">
              <p className="text-xs font-semibold tracking-wider text-primary uppercase">
                Kích thước đề xuất
              </p>
              <p className="mt-1 text-xl font-bold text-primary">
                {result.width ? `${result.width}×${height}` : "Chia tuyến"}{" "}
                <span className="text-sm font-normal text-muted-foreground">
                  {result.width ? `mm · lấp đầy ${result.actualFill}%` : ""}
                </span>
              </p>
            </div>
          </div>

          <div className="flex items-start gap-2 rounded-lg border-l-4 border-primary bg-primary/5 p-3.5">
            <Ruler className="mt-0.5 size-4 shrink-0 text-primary" aria-hidden="true" />
            <p className="text-sm leading-relaxed text-ink">
              {result.width
                ? `Chọn ${TRAY_TYPES[trayType].label.toLowerCase()} ${result.width}×${height} mm cho tuyến này.`
                : `Tuyến vượt ${result.maxWidth} mm, nên tăng chiều cao thành, chia 2 tuyến song song hoặc dùng thang nhiều tầng.`}{" "}
              <a
                href="https://zalo.me/0836977799"
                target="_blank"
                rel="noopener noreferrer"
                className="font-semibold text-primary hover:underline"
              >
                Gửi bản vẽ tuyến cáp qua Zalo → PTC kiểm tra tải trọng + báo giá
              </a>
            </p>
          </div>
        </div>
      )}

      <p className="mt-4 text-xs leading-relaxed text-muted-foreground">
        Công thức: W ≥ Σ(n·π·d²/4) × (1 + dự phòng) ÷ (K × H). Với thang cáp xếp 1 lớp: W ≥ (Σn·d +
        khe hở) × (1 + dự phòng). Đường kính cáp có sẵn là giá trị tham khảo — lấy theo catalogue
        cáp thực tế. Chưa tính tải trọng và nhịp đỡ.
      </p>
    </div>
  );
}
