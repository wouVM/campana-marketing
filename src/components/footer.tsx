import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";

export function Footer() {
  const t = useTranslations("footer");
  const nav = useTranslations("nav");

  return (
    <footer className="bg-gray-950 border-t border-gray-800 py-12 md:py-16">
      <div className="max-w-[1440px] mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
          {/* Product */}
          <div>
            <h3 className="text-white font-semibold text-sm mb-4">
              {t("product")}
            </h3>
            <ul className="space-y-3">
              <li>
                <Link
                  href="/how-it-works"
                  className="text-gray-400 hover:text-white text-sm transition-colors"
                >
                  {nav("howItWorks")}
                </Link>
              </li>
              <li>
                <Link
                  href="/technology"
                  className="text-gray-400 hover:text-white text-sm transition-colors"
                >
                  {nav("technology")}
                </Link>
              </li>
              <li>
                <Link
                  href="/pricing"
                  className="text-gray-400 hover:text-white text-sm transition-colors"
                >
                  {nav("pricing")}
                </Link>
              </li>
              <li>
                <span className="text-gray-400 text-sm">
                  {t("integrations")}
                </span>
              </li>
              <li>
                <span className="text-gray-400 text-sm">{t("roadmap")}</span>
              </li>
              <li>
                <span className="text-gray-400 text-sm">{t("changelog")}</span>
              </li>
            </ul>
          </div>

          {/* Use Cases */}
          <div>
            <h3 className="text-white font-semibold text-sm mb-4">
              {t("useCases")}
            </h3>
            <ul className="space-y-3">
              <li>
                <Link
                  href="/for-agencies"
                  className="text-gray-400 hover:text-white text-sm transition-colors"
                >
                  {nav("forAgencies")}
                </Link>
              </li>
              <li>
                <Link
                  href="/for-businesses"
                  className="text-gray-400 hover:text-white text-sm transition-colors"
                >
                  {nav("forBusinesses")}
                </Link>
              </li>
              <li>
                <span className="text-gray-400 text-sm">
                  {t("caseStudies")}
                </span>
              </li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="text-white font-semibold text-sm mb-4">
              {t("resources")}
            </h3>
            <ul className="space-y-3">
              <li>
                <Link
                  href="/blog"
                  className="text-gray-400 hover:text-white text-sm transition-colors"
                >
                  {nav("blog")}
                </Link>
              </li>
              <li>
                <Link
                  href="/faq"
                  className="text-gray-400 hover:text-white text-sm transition-colors"
                >
                  {nav("faq")}
                </Link>
              </li>
              <li>
                <span className="text-gray-400 text-sm">
                  {t("helpCenter")}
                </span>
              </li>
              <li>
                <span className="text-gray-400 text-sm">{t("apiDocs")}</span>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-white font-semibold text-sm mb-4">
              {t("company")}
            </h3>
            <ul className="space-y-3">
              <li>
                <Link
                  href="/about"
                  className="text-gray-400 hover:text-white text-sm transition-colors"
                >
                  {nav("about")}
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-gray-400 hover:text-white text-sm transition-colors"
                >
                  {nav("contact")}
                </Link>
              </li>
              <li>
                <span className="text-gray-400 text-sm">{t("careers")}</span>
              </li>
              <li>
                <Link
                  href="/privacy"
                  className="text-gray-400 hover:text-white text-sm transition-colors"
                >
                  {t("privacyPolicy")}
                </Link>
              </li>
              <li>
                <Link
                  href="/terms"
                  className="text-gray-400 hover:text-white text-sm transition-colors"
                >
                  {t("termsOfService")}
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-400 text-sm">{t("copyright")}</p>
          <div className="flex items-center gap-6">
            <a
              href="https://linkedin.com"
              className="text-gray-400 hover:text-white text-sm transition-colors"
              target="_blank"
              rel="noopener noreferrer"
            >
              LinkedIn
            </a>
            <a
              href="https://twitter.com"
              className="text-gray-400 hover:text-white text-sm transition-colors"
              target="_blank"
              rel="noopener noreferrer"
            >
              Twitter
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
