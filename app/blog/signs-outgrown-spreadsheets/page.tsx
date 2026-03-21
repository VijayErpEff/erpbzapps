import type { Metadata } from "next";
import Content from "./Content";

export const metadata: Metadata = {
  title: "5 Signs Your Business Has Outgrown Spreadsheets",
  description:
    "Recognize the warning signs that spreadsheets are holding your business back and learn how a centralized ERP system can eliminate errors, save time, and provide real-time visibility.",
  keywords: [
    "outgrown spreadsheets",
    "spreadsheet problems",
    "ERP vs spreadsheets",
    "business process automation",
    "data management for SMB",
    "when to get an ERP",
    "spreadsheet vs ERP",
    "signs you need ERP software",
  ],
  alternates: { canonical: "https://erpbizapps.com/blog/signs-outgrown-spreadsheets" },
  openGraph: {
    title: "5 Signs Your Business Has Outgrown Spreadsheets",
    description: "Recognize the warning signs that spreadsheets are holding your business back and learn how a centralized ERP system can eliminate errors, save time, and provide real-time visibility.",
    type: "article",
    publishedTime: "2026-03-05",
    authors: ["ERP Biz Apps"],
    url: "https://erpbizapps.com/blog/signs-outgrown-spreadsheets",
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
          "headline": "5 Signs Your Business Has Outgrown Spreadsheets",
          "datePublished": "2026-03-05",
          "dateModified": "2026-03-05",
          "author": { "@type": "Organization", "name": "ERP Biz Apps" },
          "publisher": {
            "@type": "Organization",
            "name": "ERP Biz Apps",
            "url": "https://erpbizapps.com"
          },
          "mainEntityOfPage": "https://erpbizapps.com/blog/signs-outgrown-spreadsheets",
          "description": "Recognize the warning signs that spreadsheets are holding your business back and learn when it's time to adopt a proper ERP system."
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
