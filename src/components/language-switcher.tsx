"use client";

import { useLocale } from "next-intl";
import { usePathname, useRouter } from "@/i18n/navigation";

export function LanguageSwitcher() {
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();

  const switchLocale = (newLocale: "en" | "pl") => {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    router.replace(pathname as any, { locale: newLocale });
  };

  return (
    <div className="flex items-center gap-1 text-sm">
      <button
        onClick={() => switchLocale("pl")}
        className={`px-2 py-1.5 rounded-lg transition-colors duration-200 ${
          locale === "pl"
            ? "text-white font-semibold bg-gray-800/50"
            : "text-gray-400 hover:text-white hover:bg-gray-800/30"
        }`}
        aria-label="Polski"
      >
        PL
      </button>
      <span className="text-gray-600">/</span>
      <button
        onClick={() => switchLocale("en")}
        className={`px-2 py-1.5 rounded-lg transition-colors duration-200 ${
          locale === "en"
            ? "text-white font-semibold bg-gray-800/50"
            : "text-gray-400 hover:text-white hover:bg-gray-800/30"
        }`}
        aria-label="English"
      >
        EN
      </button>
    </div>
  );
}
