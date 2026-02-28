"use client";

import { useState } from "react";
import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import { Section } from "@/components/section";
import { CtaBlock } from "@/components/cta-block";
import { Check, Sparkles } from "lucide-react";

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
    accounts <= 3 ? 150 : accounts <= 10 ? 350 : accounts <= 30 ? 750 : 1499;
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
              min="1"
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
              min="1"
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
              {netRoi >= 0 ? "+" : ""}
              {netRoi.toLocaleString()} PLN/mo
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function PricingPage() {
  const t = useTranslations("pricing");
  const features = t.raw("featuresList") as string[];

  const tiers = [
    {
      name: t("solo"),
      price: t("soloPrice"),
      foundingPrice: t("soloFoundingPrice"),
      unit: t("priceUnit"),
      usd: t("soloUsd"),
      best: t("soloBest"),
      accounts: t("soloAccounts"),
      seats: t("soloSeats"),
      support: t("soloSupport"),
      popular: false,
      isContact: false,
    },
    {
      name: t("starter"),
      price: t("starterPrice"),
      foundingPrice: t("starterFoundingPrice"),
      unit: t("priceUnit"),
      usd: t("starterUsd"),
      best: t("starterBest"),
      accounts: t("starterAccounts"),
      seats: t("starterSeats"),
      support: t("starterSupport"),
      popular: true,
      isContact: false,
    },
    {
      name: t("growth"),
      price: t("growthPrice"),
      foundingPrice: t("growthFoundingPrice"),
      unit: t("priceUnit"),
      usd: t("growthUsd"),
      best: t("growthBest"),
      accounts: t("growthAccounts"),
      seats: t("growthSeats"),
      support: t("growthSupport"),
      popular: false,
      isContact: false,
    },
    {
      name: t("scale"),
      price: t("scalePrice"),
      foundingPrice: null,
      unit: t("priceUnit"),
      usd: t("scaleUsd"),
      best: t("scaleBest"),
      accounts: t("scaleAccounts"),
      seats: t("scaleSeats"),
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

      {/* Founding User Banner */}
      <Section>
        <div className="bg-linear-to-r from-brand/20 to-accent/20 border border-brand/30 rounded-2xl p-8 text-center">
          <div className="flex items-center justify-center gap-2 mb-3">
            <Sparkles className="w-5 h-5 text-accent" />
            <span className="text-accent font-bold text-sm uppercase tracking-wider">
              {t("foundingBadge")}
            </span>
            <Sparkles className="w-5 h-5 text-accent" />
          </div>
          <p className="text-gray-200 text-lg max-w-xl mx-auto">
            {t("foundingDesc")}
          </p>
        </div>
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

              {/* Pricing with founding discount */}
              <div className="mb-6">
                {tier.foundingPrice ? (
                  <>
                    <span className="text-gray-500 line-through text-lg">
                      {tier.price}
                    </span>
                    <div>
                      <span className="text-3xl font-bold text-accent">
                        {tier.foundingPrice}
                      </span>
                      <span className="text-gray-400 text-sm">
                        {" "}
                        {tier.unit}
                      </span>
                    </div>
                    <p className="text-accent text-xs mt-1">
                      {t("foundingLabel")}
                    </p>
                  </>
                ) : (
                  <>
                    <span className="text-3xl font-bold text-white">
                      {tier.price}
                    </span>
                    <p className="text-gray-500 text-xs mt-1">{tier.usd}</p>
                  </>
                )}
              </div>

              {/* What differs: accounts + seats */}
              <div className="space-y-3 mb-6">
                <div className="flex items-start gap-2 text-white text-sm font-medium">
                  <Check className="w-5 h-5 text-accent shrink-0 mt-0.5" />
                  <span>{tier.accounts}</span>
                </div>
                <div className="flex items-start gap-2 text-white text-sm font-medium">
                  <Check className="w-5 h-5 text-accent shrink-0 mt-0.5" />
                  <span>{tier.seats}</span>
                </div>
              </div>

              {/* All features included */}
              <p className="text-gray-500 text-xs uppercase tracking-wider mb-3">
                {t("allFeatures")}
              </p>
              <ul className="space-y-2 mb-6">
                {features.map((f, i) => (
                  <li
                    key={i}
                    className="flex items-start gap-2 text-gray-400 text-xs"
                  >
                    <Check className="w-4 h-4 text-gray-600 shrink-0 mt-0.5" />
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
          <ul className="space-y-3 max-w-md mx-auto mb-6">
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
          <div className="space-y-2 mb-8">
            <p className="text-gray-300 text-sm">{t("trialSolo")}</p>
            <p className="text-accent text-sm font-medium">
              {t("trialAgency")}
            </p>
          </div>
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
