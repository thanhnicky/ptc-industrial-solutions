import { useState, useMemo } from "react";
import { Calculator, TrendingDown } from "lucide-react";

export function VsdCalculator() {
  const [motorKw, setMotorKw] = useState("30");
  const [hoursYear, setHoursYear] = useState("8000");
  const [avgSpeed, setAvgSpeed] = useState("70");
  const [elecPrice, setElecPrice] = useState("3000");

  const result = useMemo(() => {
    const p = parseFloat(motorKw) || 0;
    const h = parseFloat(hoursYear) || 0;
    const speed = parseFloat(avgSpeed) || 100;
    const price = parseFloat(elecPrice) || 0;

    if (p <= 0 || h <= 0 || price <= 0) return null;

    const speedRatio = speed / 100;

    // Tiết kiệm = P × H × (1 - (N/100)³) × giá điện
    const savingRaw = p * h * (1 - Math.pow(speedRatio, 3)) * price;
    const savingMillion = savingRaw / 1_000_000;

    // Chi phí VSD ước tính: ~1 triệu/kW (thay đổi theo hãng)
    const vsdCostMillion = p * 1.0; // ước tính trung bình
    const vsdCostMin = p * 0.8;
    const vsdCostMax = p * 1.3;

    // ROI = chi phí / tiết kiệm × 12 tháng
    const roiMonths = savingMillion > 0 ? (vsdCostMillion / savingMillion) * 12 : 0;

    // Tiết kiệm %
    const savingPercent = (1 - Math.pow(speedRatio, 3)) * 100;

    return {
      savingMillion: savingMillion.toFixed(0),
      savingPercent: savingPercent.toFixed(1),
      vsdCostMin: vsdCostMin.toFixed(0),
      vsdCostMax: vsdCostMax.toFixed(0),
      roiMonths: roiMonths.toFixed(1),
    };
  }, [motorKw, hoursYear, avgSpeed, elecPrice]);

  return (
    <div className="not-prose rounded-lg border border-border bg-card p-6 sm:p-7">
      <div className="mb-5 flex items-center gap-2.5">
        <div className="flex size-9 items-center justify-center rounded-lg bg-primary/10">
          <Calculator className="size-5 text-primary" aria-hidden="true" />
        </div>
        <div>
          <h3 className="text-base font-bold text-ink">Tính ROI biến tần VSD</h3>
          <p className="text-xs text-muted-foreground">Tính tiết kiệm điện và thời gian hoàn vốn cho bơm/quạt công nghiệp</p>
        </div>
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        <div className="grid gap-1.5">
          <label className="text-xs font-semibold tracking-wide text-ink uppercase" htmlFor="vsd-kw">
            Công suất motor (kW)
          </label>
          <input
            id="vsd-kw"
            type="number"
            value={motorKw}
            onChange={(e) => setMotorKw(e.target.value)}
            className="h-11 w-full rounded-md border border-input bg-background px-3 text-sm text-ink shadow-2xs focus-visible:ring-2 focus-visible:ring-ring focus-visible:outline-none"
            placeholder="30"
          />
        </div>
        <div className="grid gap-1.5">
          <label className="text-xs font-semibold tracking-wide text-ink uppercase" htmlFor="vsd-hours">
            Số giờ chạy / năm
          </label>
          <input
            id="vsd-hours"
            type="number"
            value={hoursYear}
            onChange={(e) => setHoursYear(e.target.value)}
            className="h-11 w-full rounded-md border border-input bg-background px-3 text-sm text-ink shadow-2xs focus-visible:ring-2 focus-visible:ring-ring focus-visible:outline-none"
            placeholder="8000"
          />
        </div>
        <div className="grid gap-1.5">
          <label className="text-xs font-semibold tracking-wide text-ink uppercase" htmlFor="vsd-speed">
            Tốc độ trung bình (%)
          </label>
          <input
            id="vsd-speed"
            type="number"
            value={avgSpeed}
            onChange={(e) => setAvgSpeed(e.target.value)}
            className="h-11 w-full rounded-md border border-input bg-background px-3 text-sm text-ink shadow-2xs focus-visible:ring-2 focus-visible:ring-ring focus-visible:outline-none"
            placeholder="70"
          />
        </div>
        <div className="grid gap-1.5">
          <label className="text-xs font-semibold tracking-wide text-ink uppercase" htmlFor="vsd-price">
            Giá điện (VND/kWh)
          </label>
          <input
            id="vsd-price"
            type="number"
            value={elecPrice}
            onChange={(e) => setElecPrice(e.target.value)}
            className="h-11 w-full rounded-md border border-input bg-background px-3 text-sm text-ink shadow-2xs focus-visible:ring-2 focus-visible:ring-ring focus-visible:outline-none"
            placeholder="3000"
          />
        </div>
      </div>

      {result && (
        <div className="mt-5 space-y-3">
          <div className="grid gap-3 sm:grid-cols-3">
            <div className="rounded-lg border border-border bg-muted/30 p-4">
              <p className="text-xs font-semibold tracking-wider text-muted-foreground uppercase">Tiết kiệm điện / năm</p>
              <p className="mt-1 text-xl font-bold text-ink">
                {result.savingMillion} <span className="text-sm font-normal text-muted-foreground">tr VND</span>
              </p>
              <p className="mt-0.5 text-xs text-muted-foreground">Giảm {result.savingPercent}% công suất</p>
            </div>
            <div className="rounded-lg border border-border bg-muted/30 p-4">
              <p className="text-xs font-semibold tracking-wider text-muted-foreground uppercase">Chi phí VSD ước tính</p>
              <p className="mt-1 text-xl font-bold text-ink">
                {result.vsdCostMin}–{result.vsdCostMax} <span className="text-sm font-normal text-muted-foreground">tr VND</span>
              </p>
              <p className="mt-0.5 text-xs text-muted-foreground">ABB / Schneider / Yaskawa</p>
            </div>
            <div className="rounded-lg border border-primary/30 bg-primary/5 p-4">
              <p className="text-xs font-semibold tracking-wider text-primary uppercase">Thời gian hoàn vốn</p>
              <p className="mt-1 text-xl font-bold text-primary">
                {result.roiMonths} <span className="text-sm font-normal text-muted-foreground">tháng</span>
              </p>
              <p className="mt-0.5 text-xs text-muted-foreground">
                {parseFloat(result.roiMonths) < 12 ? "Rất nhanh — nên lắp ngay" : parseFloat(result.roiMonths) < 24 ? "Nhanh — ROI tốt" : "Trung bình — cân nhắc tải thực"}
              </p>
            </div>
          </div>

          <div className="flex items-start gap-2 rounded-lg border-l-4 border-primary bg-primary/5 p-3.5">
            <TrendingDown className="mt-0.5 size-4 shrink-0 text-primary" aria-hidden="true" />
            <p className="text-sm leading-relaxed text-ink">
              Motor {motorKw}kW chạy {avgSpeed}% tốc độ tiết kiệm <strong>{result.savingMillion} triệu/năm</strong>,
              hoàn vốn trong <strong>{result.roiMonths} tháng</strong>.
              {" "}
              <a href="https://zalo.me/0836977799" target="_blank" rel="noopener noreferrer" className="font-semibold text-primary hover:underline">
                Gửi thông số motor qua Zalo → PTC thiết kế tủ MCC + VSD
              </a>
            </p>
          </div>
        </div>
      )}

      <p className="mt-4 text-xs leading-relaxed text-muted-foreground">
        Công thức: Tiết kiệm = P × H × (1 − (N÷100)³) × giá điện (luật affinity P ∝ N³). Chi phí VSD ước tính ~0.8-1.3 triệu/kW tùy hãng. Kết quả mang tính tham khảo.
      </p>
    </div>
  );
}
