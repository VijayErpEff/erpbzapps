import type { Metadata } from "next";
import Content from "./Content";

export const metadata: Metadata = {
  title: "Business Central vs. QuickBooks: When It's Time to Upgrade",
  description:
    "Compare Microsoft Dynamics 365 Business Central and QuickBooks to understand when your growing business is ready to move beyond entry-level accounting software.",
  keywords: [
    "Business Central vs QuickBooks",
    "QuickBooks upgrade",
    "ERP for growing business",
    "Microsoft Dynamics 365 Business Central",
    "when to switch from QuickBooks",
    "SMB ERP",
    "QuickBooks alternative",
    "upgrade from QuickBooks",
    "QuickBooks limitations",
  ],
  alternates: { canonical: "https://erpbizapps.com/blog/business-central-vs-quickbooks" },
  openGraph: {
    title: "Business Central vs. QuickBooks: When It's Time to Upgrade Your Accounting Software",
    description: "Compare Microsoft Dynamics 365 Business Central and QuickBooks to understand when your growing business is ready to move beyond entry-level accounting software.",
    type: "article",
    publishedTime: "2026-03-10",
    authors: ["ERP Biz Apps"],
    url: "https://erpbizapps.com/blog/business-central-vs-quickbooks",
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
          "headline": "Business Central vs. QuickBooks: When It's Time to Upgrade",
          "datePublished": "2026-03-10",
          "dateModified": "2026-03-10",
          "author": { "@type": "Organization", "name": "ERP Biz Apps" },
          "publisher": {
            "@type": "Organization",
            "name": "ERP Biz Apps",
            "url": "https://erpbizapps.com"
          },
          "mainEntityOfPage": "https://erpbizapps.com/blog/business-central-vs-quickbooks",
          "description": "Compare Business Central and QuickBooks to determine when your growing business needs to upgrade from basic accounting to a full ERP platform."
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
