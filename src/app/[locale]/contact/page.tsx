"use client";

import { useTranslations } from "next-intl";
import { Section } from "@/components/section";
import { Mail, Clock } from "lucide-react";

export default function ContactPage() {
  const t = useTranslations("contact");

  return (
    <>
      <Section className="pt-16 md:pt-24">
        <h1 className="text-hero bg-linear-to-br from-white via-gray-100 to-gray-300 bg-clip-text text-transparent mb-8">{t("h1")}</h1>
      </Section>

      <Section>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div>
            <form className="space-y-6">
              <div>
                <label className="text-gray-200 text-sm font-medium mb-3 block">
                  {t("formName")}
                </label>
                <input
                  type="text"
                  className="w-full bg-gray-900/80 border border-gray-700/50 rounded-xl px-5 py-3.5 text-white hover:border-gray-600 focus:border-brand focus:ring-4 focus:ring-brand/10 placeholder:text-gray-400 outline-none transition-all duration-200"
                />
              </div>
              <div>
                <label className="text-gray-200 text-sm font-medium mb-3 block">
                  {t("formEmail")}
                </label>
                <input
                  type="email"
                  className="w-full bg-gray-900/80 border border-gray-700/50 rounded-xl px-5 py-3.5 text-white hover:border-gray-600 focus:border-brand focus:ring-4 focus:ring-brand/10 placeholder:text-gray-400 outline-none transition-all duration-200"
                />
              </div>
              <div>
                <label className="text-gray-200 text-sm font-medium mb-3 block">
                  {t("formCompany")}
                </label>
                <input
                  type="text"
                  className="w-full bg-gray-900/80 border border-gray-700/50 rounded-xl px-5 py-3.5 text-white hover:border-gray-600 focus:border-brand focus:ring-4 focus:ring-brand/10 placeholder:text-gray-400 outline-none transition-all duration-200"
                />
              </div>
              <div>
                <label className="text-gray-200 text-sm font-medium mb-3 block">
                  {t("formType")}
                </label>
                <div className="flex gap-4">
                  <label className="flex items-center gap-3 text-gray-300 text-sm cursor-pointer px-4 py-3 rounded-xl border border-gray-700/50 hover:border-gray-600 transition-colors duration-200 has-[:checked]:border-brand/50 has-[:checked]:bg-brand/5">
                    <input
                      type="radio"
                      name="type"
                      value="agency"
                      className="accent-brand"
                    />
                    {t("formAgency")}
                  </label>
                  <label className="flex items-center gap-3 text-gray-300 text-sm cursor-pointer px-4 py-3 rounded-xl border border-gray-700/50 hover:border-gray-600 transition-colors duration-200 has-[:checked]:border-brand/50 has-[:checked]:bg-brand/5">
                    <input
                      type="radio"
                      name="type"
                      value="business"
                      className="accent-brand"
                    />
                    {t("formBusiness")}
                  </label>
                </div>
              </div>
              <div>
                <label className="text-gray-200 text-sm font-medium mb-3 block">
                  {t("formMessage")}
                </label>
                <textarea className="w-full bg-gray-900/80 border border-gray-700/50 rounded-xl px-5 py-3.5 text-white hover:border-gray-600 focus:border-brand focus:ring-4 focus:ring-brand/10 placeholder:text-gray-400 outline-none transition-all duration-200 min-h-40" />
              </div>
              <button
                type="submit"
                className="bg-linear-to-r from-brand to-brand-light hover:from-brand-hover hover:to-brand text-white px-8 py-4 rounded-xl font-semibold shadow-lg shadow-brand-glow hover:shadow-xl active:scale-[0.97] transition-all duration-200 w-full"
              >
                {t("formSubmit")}
              </button>
            </form>
          </div>

          {/* Right side */}
          <div className="space-y-8">
            {/* Demo Booking */}
            <div>
              <h2 className="text-h2 text-white mb-4">{t("demoH2")}</h2>
              <p className="text-gray-300 mb-6">{t("demoDesc")}</p>
              {/* Cal.com embed placeholder */}
              <div className="bg-linear-to-br from-gray-900 to-gray-900/80 border border-gray-800/60 rounded-2xl p-12 text-center hover:border-gray-700/80 hover:shadow-lg hover:shadow-brand-glow/5 transition-all duration-300">
                <p className="text-gray-400 text-sm font-medium">
                  Cal.com booking widget placeholder
                </p>
              </div>
            </div>

            {/* Contact Info */}
            <div className="space-y-4">
              <div className="flex items-center gap-3 text-gray-300">
                <Mail className="w-5 h-5 text-brand" />
                <a
                  href="mailto:hello@campana.io"
                  className="hover:text-white transition-colors"
                >
                  {t("email")}
                </a>
              </div>
              <div className="flex items-center gap-3 text-gray-300">
                <Clock className="w-5 h-5 text-brand" />
                <span>{t("responseTime")}</span>
              </div>
            </div>
          </div>
        </div>
      </Section>
    </>
  );
}
