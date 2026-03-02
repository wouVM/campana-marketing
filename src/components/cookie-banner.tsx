"use client";

import { useState, useEffect } from "react";
import { useTranslations } from "next-intl";

export function CookieBanner() {
  const t = useTranslations("cookie");
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem("cookie-consent");
    if (!consent) setVisible(true);
  }, []);

  const accept = (type: string) => {
    localStorage.setItem("cookie-consent", type);
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 bg-gray-900/95 backdrop-blur-xl border-t border-gray-700/50 p-4 md:p-6 shadow-2xl shadow-black/40">
      <div className="max-w-[1440px] mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-gray-300 text-sm leading-relaxed">{t("message")}</p>
        <div className="flex items-center gap-3 shrink-0">
          <button
            onClick={() => accept("essential")}
            className="text-gray-400 hover:text-white text-sm font-medium transition-colors duration-200 px-4 py-2.5 rounded-lg hover:bg-gray-800/50"
          >
            {t("essentialOnly")}
          </button>
          <button
            onClick={() => accept("all")}
            className="bg-linear-to-r from-brand to-brand-light hover:from-brand-hover hover:to-brand text-white text-sm font-semibold px-6 py-2.5 rounded-xl shadow-lg shadow-brand-glow active:scale-[0.97] transition-all duration-200"
          >
            {t("acceptAll")}
          </button>
        </div>
      </div>
    </div>
  );
}
