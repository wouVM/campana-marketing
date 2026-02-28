import { useTranslations } from "next-intl";
import { getTranslations } from "next-intl/server";
import { Section } from "@/components/section";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "privacy.meta" });
  return {
    title: t("title"),
    description: t("description"),
    alternates: {
      languages: {
        en: "https://campana.io/en/privacy",
        pl: "https://campana.io/pl/prywatnosc",
        "x-default": "https://campana.io/en/privacy",
      },
    },
  };
}

export default function PrivacyPage() {
  const t = useTranslations("privacy");
  const sections = t.raw("sections") as { title: string; content: string }[];

  return (
    <>
      <Section className="pt-16 md:pt-24">
        <h1 className="text-hero text-white mb-4">{t("h1")}</h1>
        <p className="text-gray-400 text-sm">{t("lastUpdated")}</p>
      </Section>

      <Section>
        <div className="max-w-3xl space-y-10">
          {sections.map((s, i) => (
            <div key={i}>
              <h2 className="text-h3 text-white mb-4">{s.title}</h2>
              <p className="text-gray-300 leading-relaxed">{s.content}</p>
            </div>
          ))}
        </div>
      </Section>
    </>
  );
}
