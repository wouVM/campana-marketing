import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";

export function Footer() {
  const t = useTranslations("footer");
  const nav = useTranslations("nav");

  return (
    <footer className="bg-gray-900/30 border-t border-gray-800/50 py-16 md:py-20">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
          {/* Product */}
          <div>
            <h3 className="text-gray-200 font-bold text-sm uppercase tracking-wider mb-5">
              {t("product")}
            </h3>
            <ul className="space-y-3">
              <li>
                <Link
                  href="/how-it-works"
                  className="text-gray-400 hover:text-white text-sm transition-colors duration-200 hover:underline underline-offset-4 decoration-gray-700 hover:decoration-gray-400"
                >
                  {nav("howItWorks")}
                </Link>
              </li>
              <li>
                <Link
                  href="/technology"
                  className="text-gray-400 hover:text-white text-sm transition-colors duration-200 hover:underline underline-offset-4 decoration-gray-700 hover:decoration-gray-400"
                >
                  {nav("technology")}
                </Link>
              </li>
              {/* Pricing link hidden — discussing individually with clients */}
              {/* <li>
                <Link
                  href="/pricing"
                  className="text-gray-400 hover:text-white text-sm transition-colors duration-200 hover:underline underline-offset-4 decoration-gray-700 hover:decoration-gray-400"
                >
                  {nav("pricing")}
                </Link>
              </li> */}
              <li>
                <span className="text-gray-500 text-sm">
                  {t("integrations")}
                </span>
              </li>
              <li>
                <span className="text-gray-500 text-sm">{t("roadmap")}</span>
              </li>
              <li>
                <span className="text-gray-500 text-sm">{t("changelog")}</span>
              </li>
            </ul>
          </div>

          {/* Use Cases */}
          <div>
            <h3 className="text-gray-200 font-bold text-sm uppercase tracking-wider mb-5">
              {t("useCases")}
            </h3>
            <ul className="space-y-3">
              <li>
                <Link
                  href="/for-agencies"
                  className="text-gray-400 hover:text-white text-sm transition-colors duration-200 hover:underline underline-offset-4 decoration-gray-700 hover:decoration-gray-400"
                >
                  {nav("forAgencies")}
                </Link>
              </li>
              <li>
                <Link
                  href="/for-businesses"
                  className="text-gray-400 hover:text-white text-sm transition-colors duration-200 hover:underline underline-offset-4 decoration-gray-700 hover:decoration-gray-400"
                >
                  {nav("forBusinesses")}
                </Link>
              </li>
              <li>
                <span className="text-gray-500 text-sm">
                  {t("caseStudies")}
                </span>
              </li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="text-gray-200 font-bold text-sm uppercase tracking-wider mb-5">
              {t("resources")}
            </h3>
            <ul className="space-y-3">
              <li>
                <Link
                  href="/blog"
                  className="text-gray-400 hover:text-white text-sm transition-colors duration-200 hover:underline underline-offset-4 decoration-gray-700 hover:decoration-gray-400"
                >
                  {nav("blog")}
                </Link>
              </li>
              <li>
                <Link
                  href="/faq"
                  className="text-gray-400 hover:text-white text-sm transition-colors duration-200 hover:underline underline-offset-4 decoration-gray-700 hover:decoration-gray-400"
                >
                  {nav("faq")}
                </Link>
              </li>
              <li>
                <span className="text-gray-500 text-sm">
                  {t("helpCenter")}
                </span>
              </li>
              <li>
                <span className="text-gray-500 text-sm">{t("apiDocs")}</span>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-gray-200 font-bold text-sm uppercase tracking-wider mb-5">
              {t("company")}
            </h3>
            <ul className="space-y-3">
              <li>
                <Link
                  href="/about"
                  className="text-gray-400 hover:text-white text-sm transition-colors duration-200 hover:underline underline-offset-4 decoration-gray-700 hover:decoration-gray-400"
                >
                  {nav("about")}
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-gray-400 hover:text-white text-sm transition-colors duration-200 hover:underline underline-offset-4 decoration-gray-700 hover:decoration-gray-400"
                >
                  {nav("contact")}
                </Link>
              </li>
              <li>
                <span className="text-gray-500 text-sm">{t("careers")}</span>
              </li>
              <li>
                <Link
                  href="/privacy"
                  className="text-gray-400 hover:text-white text-sm transition-colors duration-200 hover:underline underline-offset-4 decoration-gray-700 hover:decoration-gray-400"
                >
                  {t("privacyPolicy")}
                </Link>
              </li>
              <li>
                <Link
                  href="/terms"
                  className="text-gray-400 hover:text-white text-sm transition-colors duration-200 hover:underline underline-offset-4 decoration-gray-700 hover:decoration-gray-400"
                >
                  {t("termsOfService")}
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800/50 pt-8 mt-4 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-500 text-xs">{t("copyright")}</p>
          <div className="flex items-center gap-6">
            <a
              href="https://linkedin.com"
              className="text-gray-400 hover:text-white text-sm transition-colors duration-200 px-2 py-1 rounded-lg hover:bg-gray-800/50"
              target="_blank"
              rel="noopener noreferrer"
            >
              LinkedIn
            </a>
            <a
              href="https://twitter.com"
              className="text-gray-400 hover:text-white text-sm transition-colors duration-200 px-2 py-1 rounded-lg hover:bg-gray-800/50"
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
