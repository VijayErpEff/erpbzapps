import type { Metadata } from "next";
import IndustriesContent from "./IndustriesContent";
import Breadcrumbs from "@/components/ui/Breadcrumbs";

export const metadata: Metadata = {
  title: "Industries We Serve — ERP & CRM Solutions by Vertical",
  description:
    "ERP and CRM solutions tailored for manufacturing, distribution, professional services, retail, healthcare, and nonprofit organizations. Industry-specific Business Central and Salesforce implementations.",
  keywords: [
    "ERP for manufacturing",
    "Business Central for distribution",
    "CRM for professional services",
    "retail ERP solutions",
    "healthcare ERP",
    "nonprofit CRM",
    "industry-specific ERP",
  ],
  alternates: { canonical: "https://erpbizapps.com/industries" },
};

export default function IndustriesPage() {
  return (
    <>
      <Breadcrumbs items={[
        { label: "Home", href: "/" },
        { label: "Industries" },
      ]} />
      <IndustriesContent />
    </>
  );
}
