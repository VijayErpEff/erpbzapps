import type { Metadata } from "next";
import IntegrationContent from "./IntegrationContent";
import Breadcrumbs from "@/components/ui/Breadcrumbs";

export const metadata: Metadata = {
  title: "Integration Services",
  description:
    "Connect your ERP, CRM, e-commerce, and other business systems. Business Central, Salesforce, Shopify, HubSpot, and custom API integrations.",
  keywords: ["ERP CRM integration", "system integration services", "API integration", "Business Central Salesforce integration", "data migration"],
  alternates: { canonical: "https://erpbizapps.com/services/integration" },
};

function FAQJsonLd() {
  const faqData = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "What systems can you integrate?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "We integrate ERP, CRM, e-commerce, payment, shipping, and other business systems to create a unified data flow across your organization."
        }
      },
      {
        "@type": "Question",
        "name": "How long does a typical integration project take?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Most integration projects take 4-8 weeks. Complex multi-system integrations may take longer depending on the number of systems and data volume."
        }
      },
      {
        "@type": "Question",
        "name": "Do you support real-time integrations?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, we build both real-time and batch integrations depending on your business needs, using modern APIs and middleware platforms."
        }
      }
    ]
  };
  return (
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqData) }} />
  );
}

export default function IntegrationPage() {
  return (
    <>
      <Breadcrumbs items={[
        { label: "Home", href: "/" },
        { label: "Services", href: "/services" },
        { label: "Integration Services" },
      ]} />
      <FAQJsonLd />
      <IntegrationContent />
    </>
  );
}
