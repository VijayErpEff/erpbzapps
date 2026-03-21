import type { Metadata } from "next";
import Content from "./Content";

export const metadata: Metadata = {
  title: "The ROI of Business Central for Small Businesses",
  description:
    "Understand the real return on investment of Microsoft Dynamics 365 Business Central for small businesses — from time savings and error reduction to inventory optimization and faster reporting.",
  keywords: [
    "Business Central ROI",
    "ERP return on investment",
    "Business Central for small business",
    "ERP cost benefit analysis",
    "Microsoft Dynamics 365 ROI",
    "ERP investment payback",
    "ERP ROI calculator",
    "Business Central cost benefit",
    "Business Central pricing small business",
  ],
  alternates: { canonical: "https://erpbizapps.com/blog/roi-business-central" },
  openGraph: {
    title: "The ROI of Business Central for Small Businesses",
    description: "Understand the real return on investment of Microsoft Dynamics 365 Business Central for small businesses — from time savings and error reduction to inventory optimization and faster reporting.",
    type: "article",
    publishedTime: "2026-02-28",
    authors: ["ERP Biz Apps"],
    url: "https://erpbizapps.com/blog/roi-business-central",
  },
};

function ArticleJsonLd() {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Article",
          "headline": "The ROI of Business Central for Small Businesses",
          "datePublished": "2026-02-28",
          "dateModified": "2026-02-28",
          "author": { "@type": "Organization", "name": "ERP Biz Apps" },
          "publisher": {
            "@type": "Organization",
            "name": "ERP Biz Apps",
            "url": "https://erpbizapps.com"
          },
          "mainEntityOfPage": "https://erpbizapps.com/blog/roi-business-central",
          "description": "Understand the real return on investment small businesses can expect from implementing Microsoft Dynamics 365 Business Central."
        }),
      }}
    />
  );
}

export default function ArticlePage() {
  return (
    <>
      <ArticleJsonLd />
      <Content />
    </>
  );
}
