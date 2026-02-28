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
    <div className="fixed bottom-0 left-0 right-0 z-50 bg-gray-900 border-t border-gray-700 p-4 md:p-6">
      <div className="max-w-[1440px] mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-gray-300 text-sm">{t("message")}</p>
        <div className="flex items-center gap-3">
          <button
            onClick={() => accept("essential")}
            className="text-gray-400 hover:text-white text-sm font-medium transition-colors px-4 py-2"
          >
            {t("essentialOnly")}
          </button>
          <button
            onClick={() => accept("all")}
            className="bg-brand hover:bg-brand-hover text-white text-sm font-semibold px-5 py-2 rounded-lg transition-all"
          >
            {t("acceptAll")}
          </button>
        </div>
      </div>
    </div>
  );
}
