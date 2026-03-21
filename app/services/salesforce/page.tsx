import type { Metadata } from "next";
import SalesforceContent from "./SalesforceContent";
import Breadcrumbs from "@/components/ui/Breadcrumbs";

export const metadata: Metadata = {
  title: "Salesforce Solutions",
  description:
    "Salesforce CRM implementation, customization, and integration for small and mid-size businesses. Sales Cloud, Service Cloud, and more.",
  keywords: [
    "Salesforce implementation",
    "Salesforce consulting",
    "Salesforce for small business",
    "CRM implementation",
    "Salesforce customization",
    "Salesforce implementation cost",
    "Salesforce CRM consulting",
    "Salesforce partner Florida",
    "CRM for SMB",
    "Salesforce Sales Cloud implementation",
  ],
  alternates: { canonical: "https://erpbizapps.com/services/salesforce" },
  openGraph: {
    title: "Salesforce CRM Solutions for Small Business | ERP Biz Apps",
    description: "Expert Salesforce implementation, customization, and integration for SMBs. Sales Cloud, Service Cloud, and custom development from a certified Salesforce partner.",
    type: "website",
    url: "https://erpbizapps.com/services/salesforce",
  },
};

function FAQJsonLd() {
  const faqData = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "What Salesforce solutions does ERP Biz Apps offer?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "We offer full Salesforce implementation, customization, integration, and managed services including Sales Cloud, Service Cloud, and custom app development."
        }
      },
      {
        "@type": "Question",
        "name": "How much does Salesforce implementation cost?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Costs vary based on scope and complexity. We provide transparent, fixed-price quotes after a discovery session. Contact us for a free consultation."
        }
      },
      {
        "@type": "Question",
        "name": "Can Salesforce integrate with our existing ERP?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, we specialize in integrating Salesforce with ERP systems like Business Central, ensuring seamless data flow between your CRM and back-office operations."
        }
      }
    ]
  };
  return (
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqData) }} />
  );
}

export default function SalesforcePage() {
  return (
    <>
      <Breadcrumbs items={[
        { label: "Home", href: "/" },
        { label: "Services", href: "/services" },
        { label: "Salesforce Solutions" },
      ]} />
      <FAQJsonLd />
      <SalesforceContent />
    </>
  );
}
