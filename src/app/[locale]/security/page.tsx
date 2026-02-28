import { useTranslations } from "next-intl";
import { getTranslations } from "next-intl/server";
import { Link } from "@/i18n/navigation";
import { Section } from "@/components/section";
import { CtaBlock } from "@/components/cta-block";
import { Shield, Lock, Database, Eye, FileCheck, ClipboardList, Check } from "lucide-react";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "security.meta" });
  return {
    title: t("title"),
    description: t("description"),
    alternates: {
      languages: {
        en: "https://campana.io/en/security",
        pl: "https://campana.io/pl/bezpieczenstwo",
        "x-default": "https://campana.io/en/security",
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

export default function SecurityPage() {
  const t = useTranslations("security");

  const sections = [
    { icon: Lock, h2: t("authH2"), items: t.raw("authItems") as string[] },
    { icon: Shield, h2: t("tokenH2"), items: t.raw("tokenItems") as string[] },
    {
      icon: Database,
      h2: t("tenantH2"),
      items: t.raw("tenantItems") as string[],
    },
    { icon: Eye, h2: t("dataH2"), items: [...(t.raw("dataAccess") as string[]), ...(t.raw("dataNever") as string[]), t("dataRetention"), t("dataEu")] },
    {
      icon: FileCheck,
      h2: t("complianceH2"),
      items: t.raw("complianceItems") as string[],
    },
    {
      icon: ClipboardList,
      h2: t("auditH2"),
      items: t.raw("auditItems") as string[],
    },
  ];

  return (
    <>
      <Section className="pt-16 md:pt-24">
        <h1 className="text-hero text-white mb-6">{t("h1")}</h1>
      </Section>

      {sections.map(({ icon: Icon, h2, items }, i) => (
        <Section key={i} className={i % 2 === 1 ? "bg-gray-900/50" : ""}>
          <div className="flex items-center gap-4 mb-6">
            <div className="w-12 h-12 bg-brand/10 rounded-lg flex items-center justify-center">
              <Icon className="w-6 h-6 text-brand" />
            </div>
            <h2 className="text-h2 text-white">{h2}</h2>
          </div>
          <ul className="space-y-3 max-w-3xl">
            {items.map((item: string, j: number) => (
              <li key={j} className="flex items-start gap-3 text-gray-300">
                <Check className="w-5 h-5 text-accent shrink-0 mt-0.5" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </Section>
      ))}

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
