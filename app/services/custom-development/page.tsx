import type { Metadata } from "next";
import CustomDevContent from "./CustomDevContent";
import Breadcrumbs from "@/components/ui/Breadcrumbs";

export const metadata: Metadata = {
  title: "Custom Application Development",
  description:
    "Custom web and mobile application development for businesses with unique needs. Built around your processes, not the other way around.",
  keywords: ["custom ERP development", "custom business applications", "bespoke software development", "tailored ERP solutions"],
  alternates: { canonical: "https://erpbizapps.com/services/custom-development" },
};

function FAQJsonLd() {
  const faqData = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "What types of custom applications do you build?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "We build tailored business applications including custom portals, workflow automation tools, reporting dashboards, and integrations between existing systems."
        }
      },
      {
        "@type": "Question",
        "name": "What technologies do you use for custom development?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "We use modern technologies including React, Next.js, Node.js, .NET, and cloud platforms like Azure and AWS, choosing the best stack for each project."
        }
      },
      {
        "@type": "Question",
        "name": "How do you ensure custom applications meet our needs?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "We follow an agile development process with regular demos and feedback cycles, ensuring the final product aligns with your exact requirements."
        }
      }
    ]
  };
  return (
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqData) }} />
  );
}

export default function CustomDevelopmentPage() {
  return (
    <>
      <Breadcrumbs items={[
        { label: "Home", href: "/" },
        { label: "Services", href: "/services" },
        { label: "Custom Development" },
      ]} />
      <FAQJsonLd />
      <CustomDevContent />
    </>
  );
}
