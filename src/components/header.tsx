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
    <header className="sticky top-0 z-50 bg-gray-950/80 dark:bg-gray-950/80 backdrop-blur-md border-b border-gray-800 dark:border-gray-800">
      <a href="#main-content" className="skip-link">
        Skip to main content
      </a>
      <div className="max-w-[1440px] mx-auto px-6 py-4 flex items-center justify-between">
        <Link href="/" className="text-xl font-bold text-white">
          Campana
        </Link>

        {/* Desktop nav */}
        <nav className="hidden lg:flex items-center gap-8">
          <Link
            href="/how-it-works"
            className="text-gray-300 hover:text-white transition-colors duration-150 text-sm font-medium"
          >
            {t("howItWorks")}
          </Link>
          <Link
            href="/technology"
            className="text-gray-300 hover:text-white transition-colors duration-150 text-sm font-medium"
          >
            {t("technology")}
          </Link>
          <Link
            href="/pricing"
            className="text-gray-300 hover:text-white transition-colors duration-150 text-sm font-medium"
          >
            {t("pricing")}
          </Link>

          {/* Solutions dropdown */}
          <div className="relative">
            <button
              onClick={() => setSolutionsOpen(!solutionsOpen)}
              className="flex items-center gap-1 text-gray-300 hover:text-white transition-colors duration-150 text-sm font-medium"
            >
              {t("solutions")}
              <ChevronDown className="w-4 h-4" />
            </button>
            {solutionsOpen && (
              <div className="absolute top-full left-0 mt-2 bg-gray-900 border border-gray-700 rounded-lg py-2 min-w-[180px] shadow-xl">
                <Link
                  href="/for-agencies"
                  className="block px-4 py-2 text-sm text-gray-300 hover:text-white hover:bg-gray-800"
                  onClick={() => setSolutionsOpen(false)}
                >
                  {t("forAgencies")}
                </Link>
                <Link
                  href="/for-businesses"
                  className="block px-4 py-2 text-sm text-gray-300 hover:text-white hover:bg-gray-800"
                  onClick={() => setSolutionsOpen(false)}
                >
                  {t("forBusinesses")}
                </Link>
              </div>
            )}
          </div>

          <Link
            href="/blog"
            className="text-gray-300 hover:text-white transition-colors duration-150 text-sm font-medium"
          >
            {t("blog")}
          </Link>
        </nav>

        <div className="hidden lg:flex items-center gap-4">
          <LanguageSwitcher />
          <ThemeToggle />
          <Link
            href="/contact"
            className="text-gray-300 hover:text-white transition-colors duration-150 text-sm font-medium"
          >
            {t("login")}
          </Link>
          <Link
            href="/pricing"
            className="bg-brand hover:bg-brand-hover text-white px-5 py-2.5 rounded-lg font-semibold text-sm transition-all duration-150 shadow-sm hover:shadow-md"
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
            className="p-2 text-gray-300 hover:text-white"
            aria-label="Toggle menu"
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
        <nav className="lg:hidden bg-gray-950 border-t border-gray-800 px-6 py-4 space-y-3">
          <Link
            href="/how-it-works"
            className="block text-gray-300 hover:text-white py-2 text-sm font-medium"
            onClick={() => setMobileOpen(false)}
          >
            {t("howItWorks")}
          </Link>
          <Link
            href="/technology"
            className="block text-gray-300 hover:text-white py-2 text-sm font-medium"
            onClick={() => setMobileOpen(false)}
          >
            {t("technology")}
          </Link>
          <Link
            href="/pricing"
            className="block text-gray-300 hover:text-white py-2 text-sm font-medium"
            onClick={() => setMobileOpen(false)}
          >
            {t("pricing")}
          </Link>
          <Link
            href="/for-agencies"
            className="block text-gray-300 hover:text-white py-2 text-sm font-medium"
            onClick={() => setMobileOpen(false)}
          >
            {t("forAgencies")}
          </Link>
          <Link
            href="/for-businesses"
            className="block text-gray-300 hover:text-white py-2 text-sm font-medium"
            onClick={() => setMobileOpen(false)}
          >
            {t("forBusinesses")}
          </Link>
          <Link
            href="/blog"
            className="block text-gray-300 hover:text-white py-2 text-sm font-medium"
            onClick={() => setMobileOpen(false)}
          >
            {t("blog")}
          </Link>
          <Link
            href="/faq"
            className="block text-gray-300 hover:text-white py-2 text-sm font-medium"
            onClick={() => setMobileOpen(false)}
          >
            {t("faq")}
          </Link>
          <div className="pt-3 border-t border-gray-800">
            <Link
              href="/pricing"
              className="block w-full bg-brand hover:bg-brand-hover text-white px-5 py-3 rounded-lg font-semibold text-sm text-center"
              onClick={() => setMobileOpen(false)}
            >
              {t("startTrial")}
            </Link>
          </div>
        </nav>
      )}
    </header>
  );
}
