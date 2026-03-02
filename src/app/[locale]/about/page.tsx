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
        <h1 className="text-hero bg-linear-to-br from-white via-gray-100 to-gray-300 bg-clip-text text-transparent mb-8">{t("h1")}</h1>
      </Section>

      {/* Problem */}
      <Section>
        <h2 className="text-h2 text-white mb-6">{t("problemH2")}</h2>
        <p className="text-body-lg text-gray-300 max-w-3xl">
          {t("problemText")}
        </p>
      </Section>

      {/* Approach */}
      <Section className="bg-gray-900/30">
        <h2 className="text-h2 text-white mb-10">{t("approachH2")}</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {approaches.map((a, i) => (
            <div
              key={i}
              className="bg-linear-to-br from-gray-900 to-gray-900/80 border border-gray-800/60 rounded-2xl p-6 hover:border-gray-700/80 hover:shadow-lg hover:shadow-brand-glow/5 transition-all duration-300"
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
              className="bg-linear-to-br from-gray-900 to-gray-900/80 border border-gray-800/60 rounded-2xl p-6 text-center hover:border-gray-700/80 hover:shadow-lg hover:shadow-brand-glow/5 transition-all duration-300"
            >
              <div className="w-20 h-20 rounded-full bg-linear-to-br from-gray-700 to-gray-800 mx-auto mb-4"></div>
              <h3 className="text-white font-semibold">Team Member {i}</h3>
              <p className="text-gray-400 text-sm">Role</p>
            </div>
          ))}
        </div>
      </Section>

      {/* Values */}
      <Section className="bg-gray-900/30">
        <h2 className="text-h2 text-white mb-10">{t("valuesH2")}</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {values.map((v, i) => (
            <div key={i}>
              <div className="w-10 h-10 rounded-xl bg-brand/10 border border-brand/30 flex items-center justify-center mb-4">
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
          href="/contact"
          className="bg-linear-to-r from-brand to-brand-light hover:from-brand-hover hover:to-brand text-white px-8 py-4 rounded-xl font-semibold shadow-lg shadow-brand-glow hover:shadow-xl active:scale-[0.97] transition-all duration-200 inline-block"
        >
          {t("cta")}
        </Link>
      </Section>

      <CtaBlock />
    </>
  );
}
