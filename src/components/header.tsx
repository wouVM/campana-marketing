"use client";

import { useState } from "react";
import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import { Menu, X, ChevronDown } from "lucide-react";
import { LanguageSwitcher } from "./language-switcher";
import { ThemeToggle } from "./theme-toggle";

export function Header() {
  const t = useTranslations("nav");
  const [mobileOpen, setMobileOpen] = useState(false);
  const [solutionsOpen, setSolutionsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-gray-950/60 backdrop-blur-2xl border-b border-gray-800/50 shadow-lg shadow-black/10">
      <a href="#main-content" className="skip-link">
        Skip to main content
      </a>
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
        <Link
          href="/"
          className="text-2xl font-bold bg-linear-to-r from-white to-gray-300 bg-clip-text text-transparent hover:from-brand-light hover:to-brand transition-all duration-300"
        >
          Campana
        </Link>

        {/* Desktop nav */}
        <nav className="hidden lg:flex items-center gap-8">
          <Link
            href="/how-it-works"
            className="relative text-gray-300 hover:text-white transition-colors duration-200 text-[15px] font-medium group"
          >
            {t("howItWorks")}
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-brand-light group-hover:w-full transition-all duration-300" />
          </Link>
          <Link
            href="/technology"
            className="relative text-gray-300 hover:text-white transition-colors duration-200 text-[15px] font-medium group"
          >
            {t("technology")}
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-brand-light group-hover:w-full transition-all duration-300" />
          </Link>

          {/* Solutions dropdown */}
          <div className="relative">
            <button
              onClick={() => setSolutionsOpen(!solutionsOpen)}
              onBlur={() => setTimeout(() => setSolutionsOpen(false), 200)}
              className="relative flex items-center gap-1.5 text-gray-300 hover:text-white transition-colors duration-200 text-[15px] font-medium group"
              aria-expanded={solutionsOpen}
              aria-haspopup="true"
            >
              {t("solutions")}
              <ChevronDown
                className={`w-4 h-4 transition-transform duration-200 ${solutionsOpen ? "rotate-180" : ""}`}
              />
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-brand-light group-hover:w-full transition-all duration-300" />
            </button>
            {solutionsOpen && (
              <div className="absolute top-full left-0 mt-3 bg-gray-900/95 backdrop-blur-xl border border-gray-700/50 rounded-xl py-2 min-w-[200px] shadow-2xl shadow-black/40">
                <Link
                  href="/for-agencies"
                  className="block px-4 py-2.5 text-[15px] text-gray-300 hover:text-white hover:bg-gray-800/50 transition-colors duration-150"
                  onClick={() => setSolutionsOpen(false)}
                >
                  {t("forAgencies")}
                </Link>
                <Link
                  href="/for-businesses"
                  className="block px-4 py-2.5 text-[15px] text-gray-300 hover:text-white hover:bg-gray-800/50 transition-colors duration-150"
                  onClick={() => setSolutionsOpen(false)}
                >
                  {t("forBusinesses")}
                </Link>
              </div>
            )}
          </div>

          <Link
            href="/blog"
            className="relative text-gray-300 hover:text-white transition-colors duration-200 text-[15px] font-medium group"
          >
            {t("blog")}
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-brand-light group-hover:w-full transition-all duration-300" />
          </Link>
        </nav>

        <div className="hidden lg:flex items-center gap-4">
          <LanguageSwitcher />
          <ThemeToggle />
          <Link
            href="/contact"
            className="text-gray-300 hover:text-white transition-colors duration-200 text-[15px] font-medium"
          >
            {t("login")}
          </Link>
          <Link
            href="/contact"
            className="bg-linear-to-r from-brand to-brand-light hover:from-brand-hover hover:to-brand text-white px-6 py-2.5 rounded-xl font-semibold text-sm shadow-lg shadow-brand-glow hover:shadow-xl hover:shadow-brand-glow active:scale-[0.97] transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-light focus-visible:ring-offset-2 focus-visible:ring-offset-gray-950"
          >
            {t("startTrial")}
          </Link>
        </div>

        {/* Mobile menu button */}
        <div className="flex items-center gap-3 lg:hidden">
          <LanguageSwitcher />
          <ThemeToggle />
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="p-2.5 text-gray-300 hover:text-white rounded-lg hover:bg-gray-800/50 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand"
            aria-label="Toggle menu"
            aria-expanded={mobileOpen}
          >
            {mobileOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile nav */}
      {mobileOpen && (
        <>
          <div
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40 lg:hidden"
            onClick={() => setMobileOpen(false)}
            aria-hidden="true"
          />
          <nav className="lg:hidden bg-gray-950/95 backdrop-blur-xl border-t border-gray-800/50 px-6 py-6 space-y-1 relative z-50">
            <Link
              href="/how-it-works"
              className="block text-gray-300 hover:text-white hover:bg-gray-800/50 py-3 px-4 rounded-lg text-base font-medium transition-colors duration-150"
              onClick={() => setMobileOpen(false)}
            >
              {t("howItWorks")}
            </Link>
            <Link
              href="/technology"
              className="block text-gray-300 hover:text-white hover:bg-gray-800/50 py-3 px-4 rounded-lg text-base font-medium transition-colors duration-150"
              onClick={() => setMobileOpen(false)}
            >
              {t("technology")}
            </Link>
            <Link
              href="/for-agencies"
              className="block text-gray-300 hover:text-white hover:bg-gray-800/50 py-3 px-4 rounded-lg text-base font-medium transition-colors duration-150"
              onClick={() => setMobileOpen(false)}
            >
              {t("forAgencies")}
            </Link>
            <Link
              href="/for-businesses"
              className="block text-gray-300 hover:text-white hover:bg-gray-800/50 py-3 px-4 rounded-lg text-base font-medium transition-colors duration-150"
              onClick={() => setMobileOpen(false)}
            >
              {t("forBusinesses")}
            </Link>
            <Link
              href="/blog"
              className="block text-gray-300 hover:text-white hover:bg-gray-800/50 py-3 px-4 rounded-lg text-base font-medium transition-colors duration-150"
              onClick={() => setMobileOpen(false)}
            >
              {t("blog")}
            </Link>
            <Link
              href="/faq"
              className="block text-gray-300 hover:text-white hover:bg-gray-800/50 py-3 px-4 rounded-lg text-base font-medium transition-colors duration-150"
              onClick={() => setMobileOpen(false)}
            >
              {t("faq")}
            </Link>
            <div className="pt-4 border-t border-gray-800/50">
              <Link
                href="/contact"
                className="block w-full bg-linear-to-r from-brand to-brand-light hover:from-brand-hover hover:to-brand text-white px-5 py-3.5 rounded-xl font-semibold text-sm text-center shadow-lg shadow-brand-glow active:scale-[0.97] transition-all duration-200"
                onClick={() => setMobileOpen(false)}
              >
                {t("startTrial")}
              </Link>
            </div>
          </nav>
        </>
      )}
    </header>
  );
}
