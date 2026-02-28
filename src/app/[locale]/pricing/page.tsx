"use client";

import { useState } from "react";
import { useTranslations, useLocale } from "next-intl";
import { Link } from "@/i18n/navigation";
import { Section } from "@/components/section";
import { CtaBlock } from "@/components/cta-block";
import { Check, X, Minus } from "lucide-react";

function RoiCalculator() {
  const t = useTranslations("pricing");
  const [accounts, setAccounts] = useState(15);
  const [spend, setSpend] = useState(10000);
  const [cpa, setCpa] = useState(50);
  const [hours, setHours] = useState(15);

  const cpaSavings = accounts * spend * 0.15 * 0.01;
  const timeSaved = Math.round(hours * 4.33 * 0.75);
  const copySaved = 4000;
  const campanaCost =
    accounts <= 3 ? 299 : accounts <= 10 ? 699 : accounts <= 30 ? 1499 : 2999;
  const netRoi = Math.round(cpaSavings + copySaved - campanaCost);

  return (
    <div className="bg-gray-900 border border-gray-700 rounded-2xl p-8">
      <h2 className="text-h2 text-white mb-8">{t("roiH2")}</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="space-y-6">
          <div>
            <label className="text-gray-300 text-sm font-medium mb-2 block">
              {t("roiAccounts")}: {accounts}
            </label>
            <input
              type="range"
              min="5"
              max="100"
              value={accounts}
              onChange={(e) => setAccounts(Number(e.target.value))}
              className="w-full accent-brand"
            />
          </div>
          <div>
            <label className="text-gray-300 text-sm font-medium mb-2 block">
              {t("roiSpend")}: {spend.toLocaleString()} PLN
            </label>
            <input
              type="range"
              min="5000"
              max="100000"
              step="1000"
              value={spend}
              onChange={(e) => setSpend(Number(e.target.value))}
              className="w-full accent-brand"
            />
          </div>
          <div>
            <label className="text-gray-300 text-sm font-medium mb-2 block">
              {t("roiCpa")}: {cpa} PLN
            </label>
            <input
              type="range"
              min="10"
              max="200"
              value={cpa}
              onChange={(e) => setCpa(Number(e.target.value))}
              className="w-full accent-brand"
            />
          </div>
          <div>
            <label className="text-gray-300 text-sm font-medium mb-2 block">
              {t("roiHours")}: {hours} {t("roiHoursLabel")}
            </label>
            <input
              type="range"
              min="5"
              max="40"
              value={hours}
              onChange={(e) => setHours(Number(e.target.value))}
              className="w-full accent-brand"
            />
          </div>
        </div>
        <div className="space-y-4">
          <div className="bg-gray-800 rounded-lg p-4">
            <p className="text-gray-400 text-sm">{t("roiSavings")}</p>
            <p className="text-2xl font-bold text-green-400">
              {Math.round(cpaSavings).toLocaleString()} PLN
            </p>
          </div>
          <div className="bg-gray-800 rounded-lg p-4">
            <p className="text-gray-400 text-sm">{t("roiTime")}</p>
            <p className="text-2xl font-bold text-accent">
              {timeSaved} {t("roiHoursLabel")}
            </p>
          </div>
          <div className="bg-gray-800 rounded-lg p-4">
            <p className="text-gray-400 text-sm">{t("roiCopySaved")}</p>
            <p className="text-2xl font-bold text-blue-400">
              ~{copySaved.toLocaleString()} PLN
            </p>
          </div>
          <div className="bg-gray-800 rounded-lg p-4">
            <p className="text-gray-400 text-sm">{t("roiCampanaCost")}</p>
            <p className="text-2xl font-bold text-gray-300">
              {campanaCost.toLocaleString()} PLN
            </p>
          </div>
          <div className="bg-brand/10 border border-brand/20 rounded-lg p-4">
            <p className="text-brand text-sm">{t("roiNet")}</p>
            <p className="text-3xl font-bold text-white">
              +{netRoi.toLocaleString()} PLN/mo
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function PricingPage() {
  const t = useTranslations("pricing");

  const tiers = [
    {
      name: t("solo"),
      price: t("soloPrice"),
      unit: t("priceUnit"),
      usd: t("soloUsd"),
      best: t("soloBest"),
      features: [
        t("soloAccounts"),
        t("platforms"),
        t("dashboard"),
        t("soloOptim"),
        t("soloCopy"),
        t("soloInsights"),
        t("soloSeats"),
        t("allLevels"),
        t("aiReasoning"),
      ],
      missing: [t("crossClient"), t("apiAccess")],
      support: t("soloSupport"),
      popular: false,
      isContact: false,
    },
    {
      name: t("starter"),
      price: t("starterPrice"),
      unit: t("priceUnit"),
      usd: t("starterUsd"),
      best: t("starterBest"),
      features: [
        t("starterAccounts"),
        t("platforms"),
        t("dashboard"),
        t("starterOptim"),
        t("starterCopy"),
        t("starterInsights"),
        t("starterSeats"),
        t("allLevels"),
        t("aiReasoning"),
      ],
      missing: [t("crossClient"), t("apiAccess")],
      support: t("starterSupport"),
      popular: true,
      isContact: false,
    },
    {
      name: t("growth"),
      price: t("growthPrice"),
      unit: t("priceUnit"),
      usd: t("growthUsd"),
      best: t("growthBest"),
      features: [
        t("growthAccounts"),
        t("platforms"),
        t("dashboard"),
        t("growthOptim"),
        t("growthCopy"),
        t("growthInsights"),
        t("growthSeats"),
        t("allLevels"),
        t("aiReasoning"),
        t("crossClient"),
      ],
      missing: [t("apiAccess")],
      support: t("growthSupport"),
      popular: false,
      isContact: false,
    },
    {
      name: t("scale"),
      price: t("scalePrice"),
      unit: t("priceUnit"),
      usd: t("scaleUsd"),
      best: t("scaleBest"),
      features: [
        t("scaleAccounts"),
        t("platforms"),
        t("dashboard"),
        t("scaleOptim"),
        t("scaleCopy"),
        t("scaleInsights"),
        t("scaleSeats"),
        t("allLevels"),
        t("aiReasoning"),
        t("crossClient"),
        `${t("apiAccess")} (${t("apiNote")})`,
      ],
      missing: [],
      support: t("scaleSupport"),
      popular: false,
      isContact: true,
    },
  ];

  return (
    <>
      <Section className="pt-16 md:pt-24">
        <h1 className="text-hero text-white mb-6 text-center">{t("h1")}</h1>
        <h2 className="text-h3 text-gray-300 text-center mb-4">
          {t("philH2")}
        </h2>
        <p className="text-body-lg text-gray-400 text-center max-w-2xl mx-auto mb-4">
          {t("philDesc")}
        </p>
        <p className="text-accent text-center text-sm font-medium">
          {t("annualDiscount")}
        </p>
      </Section>

      {/* Pricing Cards */}
      <Section>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {tiers.map((tier) => (
            <div
              key={tier.name}
              className={`bg-gray-900 rounded-2xl p-8 relative ${
                tier.popular
                  ? "border-2 border-brand shadow-xl shadow-brand/20"
                  : "border-2 border-gray-700"
              }`}
            >
              {tier.popular && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-brand text-white px-4 py-1 rounded-full text-xs font-semibold">
                  {t("mostPopular")}
                </div>
              )}
              <h3 className="text-h3 text-white mb-2">{tier.name}</h3>
              <p className="text-gray-400 text-sm mb-4">{tier.best}</p>
              <div className="mb-6">
                <span className="text-3xl font-bold text-white">
                  {tier.price}
                </span>
                {!tier.isContact && (
                  <span className="text-gray-400 text-sm"> {tier.unit}</span>
                )}
                <p className="text-gray-500 text-xs mt-1">{tier.usd}</p>
              </div>
              <ul className="space-y-3 mb-8">
                {tier.features.map((f, i) => (
                  <li
                    key={i}
                    className="flex items-start gap-2 text-gray-300 text-sm"
                  >
                    <Check className="w-5 h-5 text-accent shrink-0 mt-0.5" />
                    <span>{f}</span>
                  </li>
                ))}
                {tier.missing.map((f, i) => (
                  <li
                    key={`m-${i}`}
                    className="flex items-start gap-2 text-gray-600 text-sm"
                  >
                    <Minus className="w-5 h-5 shrink-0 mt-0.5" />
                    <span>{f}</span>
                  </li>
                ))}
              </ul>
              <p className="text-gray-500 text-xs mb-4">
                {t("prioritySupport")}: {tier.support}
              </p>
              <Link
                href="/contact"
                className={`block w-full text-center py-3 rounded-lg font-semibold transition-all ${
                  tier.popular
                    ? "bg-brand hover:bg-brand-hover text-white"
                    : "bg-gray-800 hover:bg-gray-700 text-white"
                }`}
              >
                {tier.isContact ? t("contactSales") : t("trialCta")}
              </Link>
            </div>
          ))}
        </div>
      </Section>

      {/* Free Trial */}
      <Section className="bg-gray-900/50">
        <div className="text-center">
          <h2 className="text-h2 text-white mb-6">{t("trialH2")}</h2>
          <ul className="space-y-3 max-w-md mx-auto mb-8">
            {(t.raw("trialItems") as string[]).map((item, i) => (
              <li
                key={i}
                className="flex items-start gap-2 text-gray-300 text-left"
              >
                <Check className="w-5 h-5 text-accent shrink-0 mt-0.5" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
          <Link
            href="/contact"
            className="bg-brand hover:bg-brand-hover text-white px-8 py-4 rounded-lg font-semibold transition-all inline-block"
          >
            {t("trialCta")}
          </Link>
        </div>
      </Section>

      {/* ROI Calculator */}
      <Section>
        <RoiCalculator />
      </Section>

      <CtaBlock />

      {/* JSON-LD for Pricing */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Product",
            name: "Campana",
            description:
              "AI Marketing Command Center for Google Ads & Meta",
            offers: [
              {
                "@type": "Offer",
                name: "Solo",
                price: "299",
                priceCurrency: "PLN",
                availability: "https://schema.org/InStock",
              },
              {
                "@type": "Offer",
                name: "Starter",
                price: "699",
                priceCurrency: "PLN",
                availability: "https://schema.org/InStock",
              },
              {
                "@type": "Offer",
                name: "Growth",
                price: "1499",
                priceCurrency: "PLN",
                availability: "https://schema.org/InStock",
              },
            ],
          }),
        }}
      />
    </>
  );
}
