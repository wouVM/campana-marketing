"use client";

import { motion } from "framer-motion";
import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";

export function CtaBlock() {
  const t = useTranslations("home.cta");

  return (
    <motion.section
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      className="py-14 md:py-20 lg:py-28"
    >
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative bg-linear-to-br from-brand to-brand-dark rounded-2xl p-10 md:p-16 text-center overflow-hidden">
          {/* Decorative glow orbs */}
          <div className="absolute -top-24 -right-24 w-64 h-64 rounded-full bg-brand-light/20 blur-3xl pointer-events-none" />
          <div className="absolute -bottom-24 -left-24 w-64 h-64 rounded-full bg-purple-500/15 blur-3xl pointer-events-none" />

          <div className="relative">
            <h2 className="text-h2 text-white mb-4">{t("h2")}</h2>
            <p className="text-body-lg text-indigo-100/90 mb-10 max-w-2xl mx-auto">
              {t("sub")}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="bg-white hover:bg-gray-50 text-brand px-8 py-4 rounded-xl font-semibold shadow-xl shadow-black/20 hover:shadow-2xl active:scale-[0.97] transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-brand"
              >
                {t("primary")}
              </Link>
              <Link
                href="/contact"
                className="bg-white/10 hover:bg-white/20 backdrop-blur-sm text-white px-8 py-4 rounded-xl font-semibold border border-white/20 hover:border-white/30 active:scale-[0.97] transition-all duration-200"
              >
                {t("secondary")}
              </Link>
            </div>
            <p className="text-indigo-200/80 text-sm mt-8">{t("trust")}</p>
          </div>
        </div>
      </div>
    </motion.section>
  );
}
