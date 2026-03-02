import { useTranslations } from "next-intl";
import { getTranslations } from "next-intl/server";
import { Link } from "@/i18n/navigation";
import { Section } from "@/components/section";
import { CtaBlock } from "@/components/cta-block";
import { Check, Zap, PenTool, Brain, Play } from "lucide-react";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "howItWorks.meta" });
  return {
    title: t("title"),
    description: t("description"),
    alternates: {
      languages: {
        en: "https://campana.io/en/how-it-works",
        pl: "https://campana.io/pl/jak-to-dziala",
        "x-default": "https://campana.io/en/how-it-works",
      },
    },
    openGraph: {
      title: t("title"),
      description: t("description"),
      siteName: "Campana",
      locale: locale === "pl" ? "pl_PL" : "en_US",
    },
    twitter: { card: "summary_large_image" },
  };
}

export default function HowItWorksPage() {
  const t = useTranslations("howItWorks");

  const steps = [
    { title: t("step1Title"), items: t.raw("step1Items") as string[] },
    { title: t("step2Title"), items: t.raw("step2Items") as string[] },
    { title: t("step3Title"), items: t.raw("step3Items") as string[] },
    { title: t("step4Title"), items: t.raw("step4Items") as string[] },
  ];

  const dashboardCards = t.raw("dashboardCards") as {
    title: string;
    desc: string;
  }[];

  const pillars = [
    {
      icon: Zap,
      title: t("pillar1Title"),
      items: t.raw("pillar1Items") as string[],
    },
    {
      icon: PenTool,
      title: t("pillar2Title"),
      items: t.raw("pillar2Items") as string[],
    },
    {
      icon: Brain,
      title: t("pillar3Title"),
      items: t.raw("pillar3Items") as string[],
    },
  ];

  return (
    <>
      <Section className="pt-16 md:pt-24">
        <h1 className="text-hero bg-linear-to-br from-white via-gray-100 to-gray-300 bg-clip-text text-transparent mb-8">{t("h1")}</h1>
      </Section>

      {/* 4 Steps */}
      <Section>
        <h2 className="text-h2 text-white mb-12">{t("stepsH2")}</h2>
        <div className="space-y-12">
          {steps.map((step, i) => (
            <div key={i} className="flex items-start gap-6">
              <div className="w-12 h-12 rounded-full bg-brand/10 border border-brand/30 flex items-center justify-center shrink-0">
                <span className="text-brand font-bold">{i + 1}</span>
              </div>
              <div>
                <h3 className="text-h3 text-white mb-4">{step.title}</h3>
                <ul className="space-y-2">
                  {step.items.map((item: string, j: number) => (
                    <li
                      key={j}
                      className="flex items-start gap-2 text-gray-300"
                    >
                      <Check className="w-5 h-5 text-accent shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* Dashboard capabilities */}
      <Section className="bg-gray-900/30">
        <h2 className="text-h2 text-white mb-10">{t("dashboardH2")}</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {dashboardCards.map((card, i) => (
            <div
              key={i}
              className="bg-linear-to-br from-gray-900 to-gray-900/80 border border-gray-800/60 rounded-2xl p-8 hover:border-gray-700/80 hover:shadow-lg hover:shadow-brand-glow/5 transition-all duration-300"
            >
              <h3 className="text-h4 text-white mb-2">{card.title}</h3>
              <p className="text-gray-400">{card.desc}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* AI Pillars */}
      <Section>
        <h2 className="text-h2 text-white mb-10">{t("aiH2")}</h2>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {pillars.map(({ icon: Icon, title, items }, i) => (
            <div
              key={i}
              className="bg-linear-to-br from-gray-900 to-gray-900/80 border border-gray-800/60 rounded-2xl p-8 hover:border-gray-700/80 hover:shadow-lg hover:shadow-brand-glow/5 transition-all duration-300"
            >
              <div className="w-12 h-12 bg-brand/10 rounded-xl flex items-center justify-center mb-4">
                <Icon className="w-6 h-6 text-brand" />
              </div>
              <h3 className="text-h3 text-white mb-4">{title}</h3>
              <ul className="space-y-2">
                {items.map((item: string, j: number) => (
                  <li
                    key={j}
                    className="flex items-start gap-2 text-gray-300 text-sm"
                  >
                    <Check className="w-4 h-4 text-accent shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </Section>

      {/* Demo Video placeholder */}
      <Section className="bg-gray-900/30">
        <h2 className="text-h2 text-white mb-8 text-center">{t("demoH2")}</h2>
        <div className="aspect-video bg-linear-to-br from-gray-800/50 to-gray-900/50 rounded-2xl border border-gray-700/50 flex items-center justify-center max-w-4xl mx-auto mb-8">
          <div className="text-center">
            <Play className="w-16 h-16 text-gray-400 mx-auto mb-4" />
            <p className="text-gray-400 text-sm font-medium">Demo video coming soon</p>
          </div>
        </div>
        <div className="text-center">
          <Link
            href="/contact"
            className="bg-linear-to-r from-brand to-brand-light hover:from-brand-hover hover:to-brand text-white px-8 py-4 rounded-xl font-semibold shadow-lg shadow-brand-glow hover:shadow-xl active:scale-[0.97] transition-all duration-200 inline-block"
          >
            {t("demoCta")}
          </Link>
        </div>
      </Section>

      <CtaBlock />
    </>
  );
}
