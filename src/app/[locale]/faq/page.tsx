"use client";

import { useState } from "react";
import { useTranslations, useLocale } from "next-intl";
import { Section } from "@/components/section";
import { CtaBlock } from "@/components/cta-block";
import { ChevronDown } from "lucide-react";

type FaqItem = {
  category: string;
  q: string;
  a: string;
};

function Accordion({ question, answer }: { question: string; answer: string }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="bg-gray-900 border border-gray-700 rounded-lg hover:border-gray-600 transition-colors">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between p-6 text-left"
        aria-expanded={open}
      >
        <h3 className="text-h4 text-white pr-4">{question}</h3>
        <ChevronDown
          className={`w-5 h-5 text-gray-400 transition-transform shrink-0 ${
            open ? "rotate-180" : ""
          }`}
        />
      </button>
      {open && (
        <div className="px-6 pb-6 text-gray-300">
          <p>{answer}</p>
        </div>
      )}
    </div>
  );
}

export default function FaqPage() {
  const t = useTranslations("faq");
  const locale = useLocale();
  const questions = t.raw("questions") as FaqItem[];

  const categories = [
    { key: "general", label: t("general") },
    { key: "howItWorks", label: t("howItWorksCategory") },
    { key: "pricing", label: t("pricingCategory") },
    { key: "safety", label: t("safetyCategory") },
    { key: "technical", label: t("technicalCategory") },
  ];

  const [activeCategory, setActiveCategory] = useState("general");

  const filtered = questions.filter((q) => q.category === activeCategory);

  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: questions.map((q) => ({
      "@type": "Question",
      name: q.q,
      acceptedAnswer: {
        "@type": "Answer",
        text: q.a,
      },
    })),
  };

  return (
    <>
      <Section className="pt-16 md:pt-24">
        <h1 className="text-hero text-white mb-10 text-center">{t("h1")}</h1>
        <div className="flex flex-wrap justify-center gap-3 mb-10">
          {categories.map((cat) => (
            <button
              key={cat.key}
              onClick={() => setActiveCategory(cat.key)}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                activeCategory === cat.key
                  ? "bg-brand text-white"
                  : "bg-gray-800 text-gray-300 hover:bg-gray-700"
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>
        <div className="max-w-3xl mx-auto space-y-4">
          {filtered.map((q, i) => (
            <Accordion key={i} question={q.q} answer={q.a} />
          ))}
        </div>
      </Section>

      <CtaBlock />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
    </>
  );
}
