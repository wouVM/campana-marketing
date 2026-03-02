import { useTranslations } from "next-intl";
import { getTranslations } from "next-intl/server";
import { Link } from "@/i18n/navigation";
import { Section } from "@/components/section";
import { CtaBlock } from "@/components/cta-block";
import { Check, Shield } from "lucide-react";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "forBusinesses.meta" });
  return {
    title: t("title"),
    description: t("description"),
    alternates: {
      languages: {
        en: "https://campana.io/en/for-businesses",
        pl: "https://campana.io/pl/dla-firm",
        "x-default": "https://campana.io/en/for-businesses",
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

export default function ForBusinessesPage() {
  const t = useTranslations("forBusinesses");
  const benefits = t.raw("benefits") as { title: string; desc: string }[];
  const protectionItems = t.raw("protectionItems") as string[];

  return (
    <>
      <Section className="pt-16 md:pt-24">
        <h1 className="text-hero bg-linear-to-br from-white via-gray-100 to-gray-300 bg-clip-text text-transparent mb-8">{t("h1")}</h1>
      </Section>

      {/* Kasia's Scenario */}
      <Section>
        <h2 className="text-h2 text-white mb-8">{t("kasiaH2")}</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-red-950/20 border border-red-900/30 rounded-2xl p-8">
            <p className="text-xs text-red-400 font-semibold uppercase tracking-wider mb-3">The Problem</p>
            <p className="text-gray-300">{t("kasiaBefore")}</p>
          </div>
          <div className="bg-emerald-950/20 border border-emerald-900/30 rounded-2xl p-8">
            <p className="text-xs text-emerald-400 font-semibold uppercase tracking-wider mb-3">With Campana</p>
            <p className="text-gray-300">{t("kasiaAfter")}</p>
          </div>
        </div>
      </Section>

      {/* Benefits */}
      <Section className="bg-gray-900/30">
        <h2 className="text-h2 text-white mb-10">{t("benefitsH2")}</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {benefits.map((b, i) => (
            <div
              key={i}
              className="bg-linear-to-br from-gray-900 to-gray-900/80 border border-gray-800/60 rounded-2xl p-6 hover:border-gray-700/80 hover:shadow-lg hover:shadow-brand-glow/5 transition-all duration-300"
            >
              <h3 className="text-h4 text-white mb-2">{b.title}</h3>
              <p className="text-gray-400">{b.desc}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* Protection */}
      <Section>
        <h2 className="text-h2 text-white mb-8">{t("protectionH2")}</h2>
        <div className="max-w-2xl space-y-4">
          {protectionItems.map((item, i) => (
            <div
              key={i}
              className="flex items-start gap-4 bg-linear-to-br from-gray-900 to-gray-900/80 border border-gray-800/60 rounded-xl p-5"
            >
              <Shield className="w-5 h-5 text-accent shrink-0 mt-0.5" />
              <span className="text-gray-300">{item}</span>
            </div>
          ))}
        </div>
        <div className="mt-10">
          <Link
            href="/contact"
            className="bg-linear-to-r from-brand to-brand-light hover:from-brand-hover hover:to-brand text-white px-8 py-4 rounded-xl font-semibold shadow-lg shadow-brand-glow hover:shadow-xl active:scale-[0.97] transition-all duration-200 inline-block"
          >
            {t("cta")}
          </Link>
        </div>
      </Section>

      <CtaBlock />
    </>
  );
}
