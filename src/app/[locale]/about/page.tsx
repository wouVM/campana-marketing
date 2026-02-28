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
  const t = await getTranslations({ locale, namespace: "about.meta" });
  return {
    title: t("title"),
    description: t("description"),
    alternates: {
      languages: {
        en: "https://campana.io/en/about",
        pl: "https://campana.io/pl/o-nas",
        "x-default": "https://campana.io/en/about",
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

export default function AboutPage() {
  const t = useTranslations("about");
  const approaches = t.raw("approaches") as { title: string; desc: string }[];
  const values = t.raw("values") as { title: string; desc: string }[];

  return (
    <>
      <Section className="pt-16 md:pt-24">
        <h1 className="text-hero text-white mb-6">{t("h1")}</h1>
      </Section>

      {/* Problem */}
      <Section>
        <h2 className="text-h2 text-white mb-6">{t("problemH2")}</h2>
        <p className="text-body-lg text-gray-300 max-w-3xl">
          {t("problemText")}
        </p>
      </Section>

      {/* Approach */}
      <Section className="bg-gray-900/50">
        <h2 className="text-h2 text-white mb-10">{t("approachH2")}</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {approaches.map((a, i) => (
            <div
              key={i}
              className="bg-gray-900 border border-gray-700 rounded-xl p-6"
            >
              <h3 className="text-h4 text-white mb-2">{a.title}</h3>
              <p className="text-gray-400">{a.desc}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* Team */}
      <Section>
        <h2 className="text-h2 text-white mb-6">{t("teamH2")}</h2>
        <p className="text-body-lg text-gray-300 mb-8">{t("teamDesc")}</p>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          {[1, 2, 3].map((i) => (
            <div
              key={i}
              className="bg-gray-900 border border-gray-700 rounded-xl p-6 text-center"
            >
              <div className="w-20 h-20 rounded-full bg-gray-800 mx-auto mb-4"></div>
              <h3 className="text-white font-semibold">Team Member {i}</h3>
              <p className="text-gray-400 text-sm">Role</p>
            </div>
          ))}
        </div>
      </Section>

      {/* Values */}
      <Section className="bg-gray-900/50">
        <h2 className="text-h2 text-white mb-10">{t("valuesH2")}</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {values.map((v, i) => (
            <div key={i}>
              <div className="w-10 h-10 rounded-full bg-brand/10 border border-brand flex items-center justify-center mb-4">
                <span className="text-brand font-bold">{i + 1}</span>
              </div>
              <h3 className="text-h4 text-white mb-2">{v.title}</h3>
              <p className="text-gray-400">{v.desc}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section className="text-center">
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
