import { Link } from "@/i18n/navigation";
import { Section } from "@/components/section";
import { CtaBlock } from "@/components/cta-block";
import { ArrowLeft, Clock, Calendar } from "lucide-react";

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}) {
  const { slug } = await params;

  return (
    <>
      <Section className="pt-16 md:pt-24">
        <Link
          href="/blog"
          className="text-brand hover:text-brand-light text-sm font-medium inline-flex items-center gap-2 mb-8"
        >
          <ArrowLeft className="w-4 h-4" /> Back to Blog
        </Link>
        <article className="max-w-3xl">
          <div className="flex items-center gap-4 mb-6">
            <span className="bg-brand/10 text-brand text-xs font-medium px-2 py-1 rounded">
              AI & Technology
            </span>
            <span className="flex items-center gap-1 text-gray-500 text-xs">
              <Clock className="w-3 h-3" /> 8 min read
            </span>
            <span className="flex items-center gap-1 text-gray-500 text-xs">
              <Calendar className="w-3 h-3" /> Feb 28, 2026
            </span>
          </div>
          <h1 className="text-hero text-white mb-6">
            {slug
              .split("-")
              .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
              .join(" ")}
          </h1>
          <div className="prose prose-invert prose-gray max-w-none">
            <p className="text-body-lg text-gray-300 mb-8">
              This is a blog post template. Content for this article will be
              published soon. Check back for expert insights on Google Ads
              optimization, AI in advertising, and marketing agency growth
              strategies.
            </p>
            <div className="bg-gray-900 border border-gray-700 rounded-xl p-8 text-center">
              <p className="text-gray-400">
                Full article content coming soon.
              </p>
            </div>
          </div>
        </article>
      </Section>

      <CtaBlock />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            headline: slug
              .split("-")
              .map((w: string) => w.charAt(0).toUpperCase() + w.slice(1))
              .join(" "),
            datePublished: "2026-02-28",
            author: {
              "@type": "Organization",
              name: "Campana",
            },
          }),
        }}
      />
    </>
  );
}
