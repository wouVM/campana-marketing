import { useTranslations } from "next-intl";
import { getTranslations } from "next-intl/server";
import { Link } from "@/i18n/navigation";
import { Section } from "@/components/section";
import { ArrowRight, Clock } from "lucide-react";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "blog.meta" });
  return {
    title: t("title"),
    description: t("description"),
    alternates: {
      languages: {
        en: "https://campana.io/en/blog",
        pl: "https://campana.io/pl/blog",
        "x-default": "https://campana.io/en/blog",
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

const SAMPLE_POSTS = [
  {
    slug: "why-smart-bidding-optimizes-for-google",
    titleEn: "Why Google's Smart Bidding Optimizes for Google's Revenue, Not Yours",
    titlePl: "Dlaczego Smart Bidding Google optymalizuje przychody Google, nie Twoje",
    category: "Google Ads",
    readTime: 8,
  },
  {
    slug: "unified-dashboard-beats-switching-tabs",
    titleEn: "One Dashboard for All Campaigns: Why Unified Views Beat Switching Tabs",
    titlePl: "Jeden dashboard dla wszystkich kampanii: dlaczego zunifikowany widok wygrywa",
    category: "AI & Technology",
    readTime: 6,
  },
  {
    slug: "thompson-sampling-explained",
    titleEn: "Thompson Sampling Explained: How Bayesian Statistics Beat Rule-Based Bidding",
    titlePl: "Thompson Sampling: Jak statystyka bayesowska wygrywa z regułami licytacji",
    category: "AI & Technology",
    readTime: 10,
  },
  {
    slug: "managing-50-accounts-with-team-of-4",
    titleEn: "Managing 50 Ad Accounts with a Team of 4: An Agency Case Study",
    titlePl: "Zarządzanie 50 kontami w zespole 4 osób: case study agencji",
    category: "Agency Growth",
    readTime: 7,
  },
  {
    slug: "ai-ad-copywriting-beyond-chatgpt",
    titleEn: "AI Ad Copywriting That Actually Converts: Beyond Generic ChatGPT Prompts",
    titlePl: "AI copywriting reklamowy, który konwertuje: poza generyczne prompty ChatGPT",
    category: "AI & Technology",
    readTime: 6,
  },
  {
    slug: "6-layer-guardrail-system",
    titleEn: "The 6-Layer Guardrail System That Prevents AI Ad Optimization Disasters",
    titlePl: "6-warstwowy system zabezpieczeń zapobiegający katastrofom w optymalizacji AI",
    category: "AI & Technology",
    readTime: 8,
  },
];

export default function BlogPage() {
  const t = useTranslations("blog");
  const locale = useTranslations("meta");

  return (
    <>
      <Section className="pt-16 md:pt-24">
        <h1 className="text-hero text-white mb-10">{t("h1")}</h1>
        <div className="flex flex-wrap gap-3 mb-10">
          {(t.raw("categories") as string[]).map((cat, i) => (
            <span
              key={i}
              className="bg-gray-800 border border-gray-700 rounded-lg px-3 py-1.5 text-xs font-medium text-gray-300"
            >
              {cat}
            </span>
          ))}
        </div>
      </Section>

      <Section>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {SAMPLE_POSTS.map((post) => (
            <article
              key={post.slug}
              className="bg-gray-900 border border-gray-700 rounded-xl overflow-hidden hover:border-gray-600 transition-colors group"
            >
              <div className="aspect-video bg-gray-800"></div>
              <div className="p-6">
                <div className="flex items-center gap-3 mb-3">
                  <span className="bg-brand/10 text-brand text-xs font-medium px-2 py-1 rounded">
                    {post.category}
                  </span>
                  <span className="flex items-center gap-1 text-gray-500 text-xs">
                    <Clock className="w-3 h-3" />
                    {post.readTime} {t("minRead")}
                  </span>
                </div>
                <h2 className="text-h4 text-white mb-3 group-hover:text-brand transition-colors">
                  {post.titleEn}
                </h2>
                <span className="text-brand text-sm font-medium inline-flex items-center gap-1">
                  {t("readMore")} <ArrowRight className="w-4 h-4" />
                </span>
              </div>
            </article>
          ))}
        </div>
      </Section>

      {/* Newsletter */}
      <Section className="bg-gray-900/50">
        <div className="text-center max-w-xl mx-auto">
          <p className="text-gray-300 mb-6">{t("comingSoon")}</p>
          <div className="flex gap-3">
            <input
              type="email"
              placeholder={t("emailPlaceholder")}
              className="flex-1 bg-gray-900 border border-gray-700 rounded-lg px-4 py-3 text-white placeholder:text-gray-500 outline-none focus:border-brand focus:ring-2 focus:ring-brand/20 transition-colors"
            />
            <button className="bg-brand hover:bg-brand-hover text-white px-6 py-3 rounded-lg font-semibold transition-all shrink-0">
              {t("subscribe")}
            </button>
          </div>
        </div>
      </Section>
    </>
  );
}
