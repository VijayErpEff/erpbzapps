import type { Metadata } from "next";
import BusinessCentralContent from "./BusinessCentralContent";
import Breadcrumbs from "@/components/ui/Breadcrumbs";

export const metadata: Metadata = {
  title: "Microsoft Dynamics 365 Business Central Implementation & Consulting",
  description:
    "Expert Business Central implementation for small and mid-size businesses. From migration to customization, our certified Microsoft partners deliver ERP solutions that reduce costs and accelerate growth. Free consultation available.",
  keywords: [
    "Business Central implementation",
    "Business Central consulting",
    "Business Central for small business",
    "Microsoft Dynamics 365 Business Central partner",
    "Business Central migration",
    "Business Central customization",
    "ERP for small business",
    "Business Central implementation partner",
    "Business Central vs QuickBooks",
    "Business Central cost",
    "Business Central for manufacturing",
    "Business Central for distribution",
    "Dynamics 365 consulting",
    "Business Central Florida",
  ],
  alternates: { canonical: "https://erpbizapps.com/services/business-central" },
  openGraph: {
    title: "Business Central Implementation & Consulting | ERP Biz Apps",
    description: "Certified Microsoft partners helping SMBs implement Business Central. 50+ implementations, 4.9/5 client satisfaction. Get a free consultation.",
    type: "website",
    url: "https://erpbizapps.com/services/business-central",
  },
};

function FAQJsonLd() {
  const faqData = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "What is Microsoft Dynamics 365 Business Central?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Business Central is Microsoft's all-in-one ERP solution for small and mid-size businesses, covering finance, supply chain, sales, and operations in a single cloud-based platform."
        }
      },
      {
        "@type": "Question",
        "name": "How long does a Business Central implementation take?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "A typical Business Central implementation takes 8-16 weeks depending on scope, complexity, and data migration requirements."
        }
      },
      {
        "@type": "Question",
        "name": "Is Business Central suitable for small businesses?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, Business Central is specifically designed for small and mid-size businesses. It scales with your company and offers flexible licensing."
        }
      }
    ]
  };
  return (
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqData) }} />
  );
}

export default function BusinessCentralPage() {
  return (
    <>
      <Breadcrumbs items={[
        { label: "Home", href: "/" },
        { label: "Services", href: "/services" },
        { label: "Business Central" },
      ]} />
      <FAQJsonLd />
      <BusinessCentralContent />
    </>
  );
}
