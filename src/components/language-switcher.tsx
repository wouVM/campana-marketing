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
    <div className="flex items-center gap-1">
      <button
        onClick={() => switchLocale("pl")}
        className={`text-sm px-2 py-1 rounded transition-colors ${
          locale === "pl"
            ? "text-white font-semibold"
            : "text-gray-400 hover:text-white"
        }`}
        aria-label="Polski"
      >
        PL
      </button>
      <span className="text-gray-600">/</span>
      <button
        onClick={() => switchLocale("en")}
        className={`text-sm px-2 py-1 rounded transition-colors ${
          locale === "en"
            ? "text-white dark:text-white font-semibold"
            : "text-gray-400 hover:text-white"
        }`}
        aria-label="English"
      >
        EN
      </button>
    </div>
  );
}
