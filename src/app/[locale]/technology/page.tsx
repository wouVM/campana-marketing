import { useTranslations } from "next-intl";
import { getTranslations } from "next-intl/server";
import { Link } from "@/i18n/navigation";
import { Section } from "@/components/section";
import { CtaBlock } from "@/components/cta-block";
import {
  LayoutDashboard,
  BarChart3,
  PenTool,
  Shield,
  Check,
  ArrowRight,
} from "lucide-react";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "technology.meta" });
  return {
    title: t("title"),
    description: t("description"),
    alternates: {
      languages: {
        en: "https://campana.io/en/technology",
        pl: "https://campana.io/pl/technologia",
        "x-default": "https://campana.io/en/technology",
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

export default function TechnologyPage() {
  const t = useTranslations("technology");

  const dashboardFeatures = t.raw("dashboardFeatures") as {
    title: string;
    desc: string;
  }[];
  const optimizationPoints = t.raw("optimizationPoints") as string[];
  const whyMattersItems = t.raw("whyMattersItems") as {
    problem: string;
    solution: string;
  }[];
  const infraItems = t.raw("infraItems") as {
    component: string;
    tech: string;
    why: string;
  }[];

  const layers = [
    {
      title: t("layer1Title"),
      items: t.raw("layer1Items") as string[],
    },
    {
      title: t("layer2Title"),
      items: t.raw("layer2Items") as string[],
    },
    {
      title: t("layer3Title"),
      items: t.raw("layer3Items") as string[],
    },
    {
      title: t("layer4Title"),
      items: t.raw("layer4Items") as string[],
    },
    {
      title: t("layer5Title"),
      items: t.raw("layer5Items") as string[],
    },
    {
      title: t("layer6Title"),
      items: t.raw("layer6Items") as string[],
    },
  ];

  return (
    <>
      {/* Intro */}
      <Section className="pt-16 md:pt-24">
        <h1 className="text-hero text-white mb-6">{t("h1")}</h1>
        <p className="text-body-lg text-gray-300 mb-4 max-w-3xl">
          {t("intro")}
        </p>
        <p className="text-body-lg text-gray-300 max-w-3xl">{t("introSub")}</p>
      </Section>

      {/* Three Pillars */}
      <Section className="bg-gray-900/50">
        <h2 className="text-h2 text-white mb-10">{t("pillarsH2")}</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            { icon: LayoutDashboard, key: "pillar1" },
            { icon: BarChart3, key: "pillar2" },
            { icon: PenTool, key: "pillar3" },
          ].map(({ icon: Icon, key }) => (
            <div
              key={key}
              className="bg-gray-900 border border-gray-700 rounded-xl p-8"
            >
              <div className="w-12 h-12 bg-brand/10 rounded-lg flex items-center justify-center mb-4">
                <Icon className="w-6 h-6 text-brand" />
              </div>
              <h3 className="text-h3 text-white mb-2">
                {t(`${key}Title`)}
              </h3>
              <p className="text-gray-400">{t(`${key}Desc`)}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* Dashboard Architecture */}
      <Section>
        <h2 className="text-h2 text-white mb-4">{t("dashboardH2")}</h2>
        <p className="text-body-lg text-gray-300 mb-8 max-w-3xl">
          {t("dashboardIntro")}
        </p>
        <div className="space-y-4">
          {dashboardFeatures.map((f, i) => (
            <div
              key={i}
              className="flex items-start gap-4 bg-gray-900 border border-gray-700 rounded-lg p-6"
            >
              <Check className="w-5 h-5 text-accent shrink-0 mt-0.5" />
              <div>
                <span className="text-white font-semibold">{f.title}</span>
                <span className="text-gray-400"> — {f.desc}</span>
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* Thompson Sampling */}
      <Section className="bg-gray-900/50">
        <h2 className="text-h2 text-white mb-4">{t("optimizationH2")}</h2>
        <p className="text-body-lg text-gray-300 mb-8 max-w-3xl">
          {t("optimizationIntro")}
        </p>
        <h3 className="text-h3 text-white mb-4">{t("optimizationWhat")}</h3>
        <ul className="space-y-3 mb-10">
          {optimizationPoints.map((point, i) => (
            <li key={i} className="flex items-start gap-3 text-gray-300">
              <Check className="w-5 h-5 text-accent shrink-0 mt-0.5" />
              <span>{point}</span>
            </li>
          ))}
        </ul>
        <h3 className="text-h3 text-white mb-6">{t("whyMattersH3")}</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {whyMattersItems.map((item, i) => (
            <div
              key={i}
              className="bg-gray-900 border border-gray-700 rounded-lg p-6"
            >
              <p className="text-gray-400 text-sm mb-2">{item.problem}</p>
              <p className="text-white font-medium">
                <ArrowRight className="w-4 h-4 text-accent inline mr-2" />
                {item.solution}
              </p>
            </div>
          ))}
        </div>
      </Section>

      {/* Pipeline */}
      <Section>
        <h2 className="text-h2 text-white mb-4">{t("pipelineH2")}</h2>
        <p className="text-body-lg text-gray-300 mb-8 max-w-3xl">
          {t("pipelineIntro")}
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            { num: "1", title: t("stage1Title"), desc: t("stage1Desc") },
            { num: "2", title: t("stage2Title"), desc: t("stage2Desc") },
            { num: "3", title: t("stage3Title"), desc: t("stage3Desc") },
            { num: "4", title: t("stage4Title"), desc: t("stage4Desc") },
          ].map((stage) => (
            <div
              key={stage.num}
              className="bg-gray-900 border border-gray-700 rounded-xl p-6 relative"
            >
              <span className="text-brand font-mono text-sm font-bold">
                Stage {stage.num}
              </span>
              <h3 className="text-h4 text-white mt-2 mb-3">{stage.title}</h3>
              <p className="text-gray-400 text-sm">{stage.desc}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* Guardrails */}
      <Section className="bg-gray-900/50">
        <h2 className="text-h2 text-white mb-4">{t("guardrailsH2")}</h2>
        <p className="text-body-lg text-gray-300 mb-10">
          {t("guardrailsIntro")}
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {layers.map((layer, i) => (
            <div
              key={i}
              className="bg-gray-900 border border-gray-700 rounded-xl p-6"
            >
              <div className="flex items-center gap-3 mb-4">
                <Shield className="w-5 h-5 text-accent" />
                <span className="text-xs font-mono text-gray-500">
                  Layer {i + 1}
                </span>
              </div>
              <h3 className="text-h4 text-white mb-3">{layer.title}</h3>
              <ul className="space-y-2">
                {layer.items.map((item, j) => (
                  <li key={j} className="text-gray-400 text-sm flex items-start gap-2">
                    <Check className="w-4 h-4 text-gray-600 shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </Section>

      {/* AI Copywriting & Strategy */}
      <Section>
        <h2 className="text-h2 text-white mb-4">{t("copywritingH2")}</h2>
        <p className="text-body-lg text-gray-300 mb-8">
          {t("copywritingIntro")}
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-gray-900 border border-gray-700 rounded-xl p-8">
            <h3 className="text-h3 text-white mb-4">{t("aiCopyTitle")}</h3>
            <ul className="space-y-3">
              {(t.raw("aiCopyItems") as string[]).map((item, i) => (
                <li key={i} className="flex items-start gap-2 text-gray-300 text-sm">
                  <Check className="w-4 h-4 text-accent shrink-0 mt-0.5" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="bg-gray-900 border border-gray-700 rounded-xl p-8">
            <h3 className="text-h3 text-white mb-4">{t("strategyTitle")}</h3>
            <ul className="space-y-3">
              {(t.raw("strategyItems") as string[]).map((item, i) => (
                <li key={i} className="flex items-start gap-2 text-gray-300 text-sm">
                  <Check className="w-4 h-4 text-accent shrink-0 mt-0.5" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Section>

      {/* AI Reasoning */}
      <Section className="bg-gray-900/50">
        <h2 className="text-h2 text-white mb-4">{t("reasoningH2")}</h2>
        <p className="text-body-lg text-gray-300 mb-8">
          {t("reasoningIntro")}
        </p>
        <div className="bg-gray-900 border border-gray-700 rounded-xl p-8 max-w-3xl space-y-3">
          {(t.raw("reasoningItems") as string[]).map((item, i) => (
            <p key={i} className="text-gray-300">
              <span className="font-semibold text-white">
                {item.split(":")[0]}:
              </span>
              {item.substring(item.indexOf(":") + 1)}
            </p>
          ))}
        </div>
        <p className="text-gray-300 mt-6 max-w-3xl">{t("reasoningClose")}</p>
      </Section>

      {/* Cross-Client Learning */}
      <Section>
        <h2 className="text-h2 text-white mb-4">{t("crossClientH2")}</h2>
        <p className="text-body-lg text-gray-300 mb-8">
          {t("crossClientIntro")}
        </p>
        <ul className="space-y-3 mb-6">
          {(t.raw("crossClientItems") as string[]).map((item, i) => (
            <li key={i} className="flex items-start gap-3 text-gray-300">
              <Check className="w-5 h-5 text-accent shrink-0 mt-0.5" />
              <span>{item}</span>
            </li>
          ))}
        </ul>
        <p className="text-white font-semibold">{t("crossClientClose")}</p>
      </Section>

      {/* Infrastructure */}
      <Section className="bg-gray-900/50">
        <h2 className="text-h2 text-white mb-4">{t("infraH2")}</h2>
        <p className="text-body-lg text-gray-300 mb-8">{t("infraIntro")}</p>
        <div className="overflow-x-auto">
          <table className="w-full text-left">
            <thead>
              <tr className="border-b border-gray-700">
                <th className="pb-3 text-gray-400 text-sm font-medium">
                  Component
                </th>
                <th className="pb-3 text-gray-400 text-sm font-medium">
                  Technology
                </th>
                <th className="pb-3 text-gray-400 text-sm font-medium">Why</th>
              </tr>
            </thead>
            <tbody>
              {infraItems.map((row, i) => (
                <tr key={i} className="border-b border-gray-800">
                  <td className="py-3 text-white font-medium text-sm">
                    {row.component}
                  </td>
                  <td className="py-3 text-brand font-mono text-sm">
                    {row.tech}
                  </td>
                  <td className="py-3 text-gray-400 text-sm">{row.why}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="text-gray-300 mt-8">{t("infraClose")}</p>
      </Section>

      <CtaBlock />
    </>
  );
}
