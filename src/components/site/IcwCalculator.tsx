import { useState, useMemo } from "react";
import { Calculator, Zap } from "lucide-react";

export function IcwCalculator() {
  const [transformerKva, setTransformerKva] = useState("1000");
  const [voltage, setVoltage] = useState("400");
  const [impedance, setImpedance] = useState("6");
  const [parallelCount, setParallelCount] = useState("1");

  const result = useMemo(() => {
    const s = parseFloat(transformerKva) || 0;
    const u = parseFloat(voltage) || 400;
    const z = parseFloat(impedance) || 6;
    const n = parseInt(parallelCount) || 1;

    if (s <= 0 || u <= 0 || z <= 0) return null;

    // SCA = S / (sqrt(3) * U * Z%)
    const zDecimal = z / 100;
    const sca = s / (Math.sqrt(3) * u * zDecimal);
    const scaWithParallel = sca * n;

    // Icw khuyến nghị = SCA * 1.1
    const icwRecommended = scaWithParallel * 1.1;

    // Chọn dải chuẩn
    const standardRatings = [25, 35, 50, 65, 80, 100];
    const icwChoice = standardRatings.find((r) => r >= icwRecommended) ?? 100;

    return {
      sca: scaWithParallel.toFixed(1),
      icwRecommended: icwRecommended.toFixed(1),
      icwChoice,
    };
  }, [transformerKva, voltage, impedance, parallelCount]);

  return (
    <div className="not-prose rounded-lg border border-border bg-card p-6 sm:p-7">
      <div className="mb-5 flex items-center gap-2.5">
        <div className="flex size-9 items-center justify-center rounded-lg bg-primary/10">
          <Calculator className="size-5 text-primary" aria-hidden="true" />
        </div>
        <div>
          <h3 className="text-base font-bold text-ink">Tính dòng ngắn mạch Icw</h3>
          <p className="text-xs text-muted-foreground">Nhập thông số trạm biến áp để tính Icw khuyến nghị cho tủ MSB</p>
        </div>
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        <div className="grid gap-1.5">
          <label className="text-xs font-semibold tracking-wide text-ink uppercase" htmlFor="icw-kva">
            Công suất MBA (kVA)
          </label>
          <input
            id="icw-kva"
            type="number"
            value={transformerKva}
            onChange={(e) => setTransformerKva(e.target.value)}
            className="h-11 w-full rounded-md border border-input bg-background px-3 text-sm text-ink shadow-2xs focus-visible:ring-2 focus-visible:ring-ring focus-visible:outline-none"
            placeholder="1000"
          />
        </div>
        <div className="grid gap-1.5">
          <label className="text-xs font-semibold tracking-wide text-ink uppercase" htmlFor="icw-voltage">
            Điện áp hạ thế (V)
          </label>
          <input
            id="icw-voltage"
            type="number"
            value={voltage}
            onChange={(e) => setVoltage(e.target.value)}
            className="h-11 w-full rounded-md border border-input bg-background px-3 text-sm text-ink shadow-2xs focus-visible:ring-2 focus-visible:ring-ring focus-visible:outline-none"
            placeholder="400"
          />
        </div>
        <div className="grid gap-1.5">
          <label className="text-xs font-semibold tracking-wide text-ink uppercase" htmlFor="icw-impedance">
            Tổng impedance Z (%)
          </label>
          <input
            id="icw-impedance"
            type="number"
            value={impedance}
            onChange={(e) => setImpedance(e.target.value)}
            className="h-11 w-full rounded-md border border-input bg-background px-3 text-sm text-ink shadow-2xs focus-visible:ring-2 focus-visible:ring-ring focus-visible:outline-none"
            placeholder="6"
          />
        </div>
        <div className="grid gap-1.5">
          <label className="text-xs font-semibold tracking-wide text-ink uppercase" htmlFor="icw-parallel">
            Số MBA chạy song song
          </label>
          <select
            id="icw-parallel"
            value={parallelCount}
            onChange={(e) => setParallelCount(e.target.value)}
            className="h-11 w-full rounded-md border border-input bg-background px-3 text-sm text-ink shadow-2xs focus-visible:ring-2 focus-visible:ring-ring focus-visible:outline-none"
          >
            <option value="1">1 MBA</option>
            <option value="2">2 MBA song song</option>
            <option value="3">3 MBA song song</option>
          </select>
        </div>
      </div>

      {result && (
        <div className="mt-5 space-y-3">
          <div className="grid gap-3 sm:grid-cols-3">
            <div className="rounded-lg border border-border bg-muted/30 p-4">
              <p className="text-xs font-semibold tracking-wider text-muted-foreground uppercase">SCA tại tủ MSB</p>
              <p className="mt-1 text-xl font-bold text-ink">
                {result.sca} <span className="text-sm font-normal text-muted-foreground">kA</span>
              </p>
            </div>
            <div className="rounded-lg border border-border bg-muted/30 p-4">
              <p className="text-xs font-semibold tracking-wider text-muted-foreground uppercase">Icw khuyến nghị (×1.1)</p>
              <p className="mt-1 text-xl font-bold text-ink">
                {result.icwRecommended} <span className="text-sm font-normal text-muted-foreground">kA</span>
              </p>
            </div>
            <div className="rounded-lg border border-primary/30 bg-primary/5 p-4">
              <p className="text-xs font-semibold tracking-wider text-primary uppercase">Chọn Icw tủ MSB</p>
              <p className="mt-1 text-xl font-bold text-primary">
                {result.icwChoice} <span className="text-sm font-normal text-muted-foreground">kA</span>
              </p>
            </div>
          </div>

          <div className="flex items-start gap-2 rounded-lg border-l-4 border-primary bg-primary/5 p-3.5">
            <Zap className="mt-0.5 size-4 shrink-0 text-primary" aria-hidden="true" />
            <p className="text-sm leading-relaxed text-ink">
              Tủ MSB cần Icw <strong>{result.icwChoice} kA</strong> để chịu được ngắn mạch tại thanh cái.
              {result.icwChoice >= 80 && " Lưu ý: Icw ≥ 80kA cần thanh cái đồng dày + vỏ tủ lớn — liên hệ PTC để thiết kế."}
              {" "}
              <a href="https://zalo.me/0836977799" target="_blank" rel="noopener noreferrer" className="font-semibold text-primary hover:underline">
                Gửi SLD qua Zalo → PTC tính chính xác + báo giá tủ MSB
              </a>
            </p>
          </div>
        </div>
      )}

      <p className="mt-4 text-xs leading-relaxed text-muted-foreground">
        Công thức: SCA = S ÷ (√3 × U × Z%). Icw = SCA × 1.1 (hệ số an toàn). Kết quả mang tính tham khảo — thực tế cần tính thêm impedance cáp + lưới.
      </p>
    </div>
  );
}
