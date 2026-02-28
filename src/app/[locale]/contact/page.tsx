"use client";

import { useTranslations } from "next-intl";
import { Section } from "@/components/section";
import { Mail, Clock } from "lucide-react";

export default function ContactPage() {
  const t = useTranslations("contact");

  return (
    <>
      <Section className="pt-16 md:pt-24">
        <h1 className="text-hero text-white mb-6">{t("h1")}</h1>
      </Section>

      <Section>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div>
            <form className="space-y-6">
              <div>
                <label className="text-gray-300 text-sm font-medium mb-2 block">
                  {t("formName")}
                </label>
                <input
                  type="text"
                  className="w-full bg-gray-900 border border-gray-700 rounded-lg px-4 py-3 text-white focus:border-brand focus:ring-2 focus:ring-brand/20 placeholder:text-gray-500 outline-none transition-colors"
                />
              </div>
              <div>
                <label className="text-gray-300 text-sm font-medium mb-2 block">
                  {t("formEmail")}
                </label>
                <input
                  type="email"
                  className="w-full bg-gray-900 border border-gray-700 rounded-lg px-4 py-3 text-white focus:border-brand focus:ring-2 focus:ring-brand/20 placeholder:text-gray-500 outline-none transition-colors"
                />
              </div>
              <div>
                <label className="text-gray-300 text-sm font-medium mb-2 block">
                  {t("formCompany")}
                </label>
                <input
                  type="text"
                  className="w-full bg-gray-900 border border-gray-700 rounded-lg px-4 py-3 text-white focus:border-brand focus:ring-2 focus:ring-brand/20 placeholder:text-gray-500 outline-none transition-colors"
                />
              </div>
              <div>
                <label className="text-gray-300 text-sm font-medium mb-2 block">
                  {t("formType")}
                </label>
                <div className="flex gap-4">
                  <label className="flex items-center gap-2 text-gray-300 text-sm">
                    <input
                      type="radio"
                      name="type"
                      value="agency"
                      className="accent-brand"
                    />
                    {t("formAgency")}
                  </label>
                  <label className="flex items-center gap-2 text-gray-300 text-sm">
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
                <label className="text-gray-300 text-sm font-medium mb-2 block">
                  {t("formMessage")}
                </label>
                <textarea className="w-full bg-gray-900 border border-gray-700 rounded-lg px-4 py-3 text-white focus:border-brand focus:ring-2 focus:ring-brand/20 placeholder:text-gray-500 outline-none transition-colors min-h-32" />
              </div>
              <button
                type="submit"
                className="bg-brand hover:bg-brand-hover text-white px-8 py-3 rounded-lg font-semibold transition-all w-full"
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
              <div className="bg-gray-900 border border-gray-700 rounded-xl p-12 text-center">
                <p className="text-gray-500">
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
