import { useTranslations } from "next-intl";
import { getTranslations } from "next-intl/server";
import { Link } from "@/i18n/navigation";
import { Section } from "@/components/section";
import { CtaBlock } from "@/components/cta-block";
import { Check, Quote, Shield } from "lucide-react";

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
        <h1 className="text-hero text-white mb-6">{t("h1")}</h1>
      </Section>

      {/* Kasia's Story */}
      <Section>
        <h2 className="text-h2 text-white mb-8">{t("kasiaH2")}</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-red-950/20 border border-red-900/30 rounded-xl p-8">
            <Quote className="w-8 h-8 text-red-400 mb-4" />
            <p className="text-gray-300 italic">{t("kasiaBefore")}</p>
          </div>
          <div className="bg-green-950/20 border border-green-900/30 rounded-xl p-8">
            <Quote className="w-8 h-8 text-green-400 mb-4" />
            <p className="text-gray-300 italic">{t("kasiaAfter")}</p>
          </div>
        </div>
      </Section>

      {/* Benefits */}
      <Section className="bg-gray-900/50">
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

      {/* Protection */}
      <Section>
        <h2 className="text-h2 text-white mb-8">{t("protectionH2")}</h2>
        <div className="max-w-2xl space-y-4">
          {protectionItems.map((item, i) => (
            <div
              key={i}
              className="flex items-start gap-4 bg-gray-900 border border-gray-700 rounded-lg p-5"
            >
              <Shield className="w-5 h-5 text-accent shrink-0 mt-0.5" />
              <span className="text-gray-300">{item}</span>
            </div>
          ))}
        </div>
        <div className="mt-10">
          <Link
            href="/pricing"
            className="bg-brand hover:bg-brand-hover text-white px-8 py-4 rounded-lg font-semibold transition-all inline-block"
          >
            {t("cta")}
          </Link>
        </div>
      </Section>

      <CtaBlock />
    </>
  );
}
