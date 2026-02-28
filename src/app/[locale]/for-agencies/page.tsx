import { useTranslations } from "next-intl";
import { getTranslations } from "next-intl/server";
import { Link } from "@/i18n/navigation";
import { Section } from "@/components/section";
import { CtaBlock } from "@/components/cta-block";
import { Check } from "lucide-react";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "forAgencies.meta" });
  return {
    title: t("title"),
    description: t("description"),
    alternates: {
      languages: {
        en: "https://campana.io/en/for-agencies",
        pl: "https://campana.io/pl/dla-agencji",
        "x-default": "https://campana.io/en/for-agencies",
      },
    },
    openGraph: {
      title: t("title"),
      description: t("description"),
      siteName: "Campana",
    },
    twitter: { card: "summary_large_image" },
  };
}

export default function ForAgenciesPage() {
  const t = useTranslations("forAgencies");
  const benefits = t.raw("benefits") as { title: string; desc: string }[];

  return (
    <>
      <Section className="pt-16 md:pt-24">
        <h1 className="text-hero text-white mb-6">{t("h1")}</h1>
      </Section>

      {/* Scenario Label */}
      <Section>
        <p className="text-accent text-sm font-semibold uppercase tracking-wider mb-6">
          {t("scenarioLabel")}
        </p>
        <h2 className="text-h2 text-white mb-8">{t("magdaH2")}</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-red-950/20 border border-red-900/30 rounded-xl p-8">
            <p className="text-xs text-red-400 font-semibold uppercase tracking-wider mb-3">The Problem</p>
            <p className="text-gray-300">{t("magdaBefore")}</p>
          </div>
          <div className="bg-green-950/20 border border-green-900/30 rounded-xl p-8">
            <p className="text-xs text-green-400 font-semibold uppercase tracking-wider mb-3">With Campana</p>
            <p className="text-gray-300">{t("magdaAfter")}</p>
          </div>
        </div>
      </Section>

      {/* Tomek's Scenario */}
      <Section className="bg-gray-900/50">
        <h2 className="text-h2 text-white mb-8">{t("tomekH2")}</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-red-950/20 border border-red-900/30 rounded-xl p-8">
            <p className="text-xs text-red-400 font-semibold uppercase tracking-wider mb-3">The Problem</p>
            <p className="text-gray-300">{t("tomekBefore")}</p>
          </div>
          <div className="bg-green-950/20 border border-green-900/30 rounded-xl p-8">
            <p className="text-xs text-green-400 font-semibold uppercase tracking-wider mb-3">With Campana</p>
            <p className="text-gray-300">{t("tomekAfter")}</p>
          </div>
        </div>
      </Section>

      {/* Benefits */}
      <Section>
        <h2 className="text-h2 text-white mb-10">{t("benefitsH2")}</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {benefits.map((b, i) => (
            <div
              key={i}
              className="bg-gray-900 border border-gray-700 rounded-xl p-6 hover:border-gray-600 transition-colors"
            >
              <h3 className="text-h4 text-white mb-2">{b.title}</h3>
              <p className="text-gray-400">{b.desc}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* ROI Math */}
      <Section className="bg-gray-900/50">
        <h2 className="text-h2 text-white mb-6">{t("roiH2")}</h2>
        <p className="text-body-lg text-gray-300 mb-8 max-w-3xl">
          {t("roiText")}
        </p>
        <Link
          href="/pricing"
          className="bg-brand hover:bg-brand-hover text-white px-8 py-4 rounded-lg font-semibold transition-all inline-block"
        >
          {t("cta")}
        </Link>
      </Section>

      <CtaBlock />
    </>
  );
}
