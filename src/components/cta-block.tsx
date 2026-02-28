"use client";

import { motion } from "framer-motion";
import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";

export function CtaBlock() {
  const t = useTranslations("home.cta");

  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="py-12 md:py-16 lg:py-24"
    >
      <div className="max-w-[1280px] mx-auto px-6">
        <div className="bg-gradient-to-br from-brand to-brand-dark rounded-2xl p-12 text-center">
          <h2 className="text-h2 text-white mb-4">{t("h2")}</h2>
          <p className="text-body-lg text-indigo-100 mb-8 max-w-2xl mx-auto">
            {t("sub")}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/pricing"
              className="bg-white hover:bg-gray-100 text-brand px-8 py-4 rounded-lg font-semibold transition-all active:scale-[0.98]"
            >
              {t("primary")}
            </Link>
            <Link
              href="/contact"
              className="bg-brand-dark hover:bg-gray-900 text-white px-8 py-4 rounded-lg font-semibold border border-white/20 transition-all active:scale-[0.98]"
            >
              {t("secondary")}
            </Link>
          </div>
          <p className="text-indigo-200 text-sm mt-6">{t("trust")}</p>
        </div>
      </div>
    </motion.section>
  );
}
