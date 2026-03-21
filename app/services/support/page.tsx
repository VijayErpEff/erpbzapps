import type { Metadata } from "next";
import SupportContent from "./SupportContent";
import Breadcrumbs from "@/components/ui/Breadcrumbs";

export const metadata: Metadata = {
  title: "Support & Managed Services",
  description:
    "Ongoing ERP and CRM support, system monitoring, health checks, training, and managed services. Tiered plans for every budget.",
  keywords: ["managed ERP services", "Business Central support", "Salesforce support", "ERP maintenance", "ongoing ERP support"],
  alternates: { canonical: "https://erpbizapps.com/services/support" },
};

function FAQJsonLd() {
  const faqData = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "What does your managed services plan include?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Our managed services include system monitoring, regular updates, user support, performance optimization, and proactive issue resolution."
        }
      },
      {
        "@type": "Question",
        "name": "Do you offer 24/7 support?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "We offer flexible support tiers including business hours support and extended coverage options based on your needs."
        }
      },
      {
        "@type": "Question",
        "name": "Can you support systems we didn't implement?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, we can take over support for existing Business Central and Salesforce implementations, starting with a system health assessment."
        }
      }
    ]
  };
  return (
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqData) }} />
  );
}

export default function SupportPage() {
  return (
    <>
      <Breadcrumbs items={[
        { label: "Home", href: "/" },
        { label: "Services", href: "/services" },
        { label: "Support & Managed Services" },
      ]} />
      <FAQJsonLd />
      <SupportContent />
    </>
  );
}
