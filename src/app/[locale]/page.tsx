import { useTranslations, useLocale } from "next-intl";
import { setRequestLocale } from "next-intl/server";
import { getTranslations } from "next-intl/server";
import { Link } from "@/i18n/navigation";
import { Section } from "@/components/section";
import { CtaBlock } from "@/components/cta-block";
import {
  Link2,
  Target,
  BarChart3,
  Bot,
  Check,
  ArrowRight,
  Shield,
} from "lucide-react";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "home.meta" });
  return {
    title: t("title"),
    description: t("description"),
    alternates: {
      canonical: `https://campana.io/${locale}`,
      languages: {
        en: "https://campana.io/en",
        pl: "https://campana.io/pl",
        "x-default": "https://campana.io/en",
      },
    },
    openGraph: {
      title: t("title"),
      description: t("description"),
      url: `https://campana.io/${locale}`,
      siteName: "Campana",
      locale: locale === "pl" ? "pl_PL" : "en_US",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: t("title"),
      description: t("description"),
    },
  };
}

export default function HomePage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  // We need to call useTranslations at the top level
  const t = useTranslations("home");
  const locale = useLocale();

  return (
    <>
      {/* Hero */}
      <Section className="pt-16 md:pt-24 lg:pt-32">
        <div className="max-w-4xl">
          <h1 className="text-hero bg-linear-to-br from-white via-gray-100 to-gray-300 bg-clip-text text-transparent mb-8 leading-tight">
            {t("hero.h1")}
          </h1>
          <p className="text-body-lg text-gray-300/90 mb-10 max-w-2xl">
            {t("hero.sub")}
          </p>
          <ul className="space-y-4 mb-12">
            {["bullet1", "bullet2", "bullet3"].map((key) => (
              <li
                key={key}
                className="flex items-start gap-4 text-gray-200"
              >
                <Check className="w-5 h-5 text-accent shrink-0 mt-0.5" />
                <span>{t(`hero.${key}`)}</span>
              </li>
            ))}
          </ul>
          <div className="flex flex-col sm:flex-row gap-5">
            <Link
              href="/contact"
              className="bg-linear-to-r from-brand to-brand-light hover:from-brand-hover hover:to-brand text-white px-8 py-4 rounded-xl font-semibold shadow-lg shadow-brand-glow hover:shadow-xl active:scale-[0.97] transition-all duration-200 text-center"
            >
              {t("hero.cta")}
            </Link>
            <Link
              href="/how-it-works"
              className="bg-gray-800/80 hover:bg-gray-700/80 backdrop-blur-sm text-white px-8 py-4 rounded-xl font-semibold border border-gray-700/50 hover:border-gray-600/50 active:scale-[0.97] transition-all duration-200 text-center"
            >
              {t("hero.ctaSecondary")}
            </Link>
          </div>
          <p className="text-gray-400 text-sm mt-4">{t("hero.noCreditCard")}</p>
        </div>
      </Section>

      {/* Pain → Promise */}
      <Section>
        <h2 className="text-h2 text-white mb-6">{t("pain.h2")}</h2>
        <p className="text-gray-300 mb-10 max-w-3xl text-body-lg">
          {t("pain.copy")}
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          <div className="bg-red-950/20 border border-red-900/30 rounded-2xl p-8">
            <h3 className="text-h4 text-red-400 mb-3">{t("pain.without")}</h3>
            <p className="text-gray-400">{t("pain.withoutDesc")}</p>
          </div>
          <div className="bg-emerald-950/20 border border-emerald-900/30 rounded-2xl p-8">
            <h3 className="text-h4 text-emerald-400 mb-3">{t("pain.with")}</h3>
            <p className="text-gray-300">{t("pain.withDesc")}</p>
          </div>
        </div>
        <Link
          href="/how-it-works"
          className="text-brand-light hover:text-white font-medium transition-colors duration-200 inline-flex items-center gap-2"
        >
          {t("pain.link")} <ArrowRight className="w-4 h-4" />
        </Link>
      </Section>

      {/* Proof Strip */}
      <Section className="bg-gray-900/30">
        <h2 className="text-h2 text-white mb-10 text-center">
          {t("proof.h2")}
        </h2>
        <div className="flex flex-wrap justify-center gap-3 mb-10">
          {(["badge1", "badge2", "badge3", "badge4", "badge5"] as const).map(
            (key) => (
              <div
                key={key}
                className="bg-gray-800/80 border border-gray-700/50 rounded-xl px-4 py-2.5 text-sm font-medium text-gray-300 flex items-center gap-2"
              >
                <Shield className="w-4 h-4 text-accent" />
                {t(`proof.${key}`)}
              </div>
            )
          )}
        </div>
        <p className="text-gray-300 text-center max-w-2xl mx-auto mb-10">
          {t("proof.earlyAccess")}
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-6">
          <Link
            href="/for-agencies"
            className="text-brand-light hover:text-white font-medium text-sm transition-colors duration-200"
          >
            {t("proof.agencyLink")}
          </Link>
          <Link
            href="/for-businesses"
            className="text-brand-light hover:text-white font-medium text-sm transition-colors duration-200"
          >
            {t("proof.smeLink")}
          </Link>
        </div>
      </Section>

      {/* How It Works Micro */}
      <Section>
        <h2 className="text-h2 text-white mb-10 text-center">
          {t("howItWorks.h2")}
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-10">
          {[
            { icon: Link2, key: "step1" },
            { icon: Target, key: "step2" },
            { icon: BarChart3, key: "step3" },
            { icon: Bot, key: "step4" },
          ].map(({ icon: Icon, key }, i) => (
            <div key={key} className="text-center">
              <div className="w-14 h-14 rounded-2xl bg-brand/10 border border-brand/30 flex items-center justify-center mx-auto mb-4">
                <Icon className="w-6 h-6 text-brand" />
              </div>
              <span className="text-xs text-gray-500 font-mono">
                {String(i + 1).padStart(2, "0")}
              </span>
              <h3 className="text-h4 text-white mt-1 mb-2">
                {t(`howItWorks.${key}`)}
              </h3>
              <p className="text-gray-400">
                {t(`howItWorks.${key}Desc`)}
              </p>
            </div>
          ))}
        </div>
        <div className="flex flex-col sm:flex-row justify-center gap-6">
          <Link
            href="/how-it-works"
            className="text-brand-light hover:text-white font-medium text-sm transition-colors duration-200"
          >
            {t("howItWorks.link1")}
          </Link>
          <Link
            href="/technology"
            className="text-brand-light hover:text-white font-medium text-sm transition-colors duration-200"
          >
            {t("howItWorks.link2")}
          </Link>
        </div>
      </Section>

      {/* Final CTA */}
      <CtaBlock />
    </>
  );
}
