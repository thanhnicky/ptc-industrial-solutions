import { useEffect, useState } from "react";

declare global {
  interface Window {
    google?: { translate?: { TranslateElement?: new (opts: unknown, el: string) => void } };
    googleTranslateElementInit?: () => void;
  }
}

/** Nút VI | EN dùng Google Dịch widget (nạp script khi cần). */
export function LanguageToggle({ className = "" }: { className?: string }) {
  const [lang, setLang] = useState<"vi" | "en">("vi");

  useEffect(() => {
    if (document.getElementById("google-translate-script")) return;
    window.googleTranslateElementInit = () => {
      const Ctor = window.google?.translate?.TranslateElement;
      if (Ctor) new Ctor({ pageLanguage: "vi", includedLanguages: "vi,en" }, "google_translate_element");
    };
    const s = document.createElement("script");
    s.id = "google-translate-script";
    s.src = "//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit";
    s.async = true;
    document.body.appendChild(s);
  }, []);

  function switchTo(next: "vi" | "en") {
    setLang(next);
    const select = document.querySelector<HTMLSelectElement>("select.goog-te-combo");
    if (select) {
      select.value = next === "vi" ? "" : "en";
      select.dispatchEvent(new Event("change"));
    }
  }

  return (
    <div className={`flex items-center gap-1 text-xs font-semibold ${className}`}>
      <div id="google_translate_element" className="sr-only" />
      {(["vi", "en"] as const).map((code, i) => (
        <span key={code} className="flex items-center gap-1">
          {i === 1 ? <span className="text-border">|</span> : null}
          <button
            type="button"
            onClick={() => switchTo(code)}
            className={`notranslate px-1 uppercase transition-colors ${
              lang === code ? "text-primary" : "text-muted-foreground hover:text-ink"
            }`}
          >
            {code}
          </button>
        </span>
      ))}
    </div>
  );
}
