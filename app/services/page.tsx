import type { Metadata } from "next";
import ServicesContent from "./ServicesContent";
import Breadcrumbs from "@/components/ui/Breadcrumbs";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Explore our ERP, CRM, and custom application services — Microsoft Business Central, Salesforce, integrations, and managed support for SMBs.",
  keywords: ["ERP services", "CRM services", "Business Central implementation", "Salesforce consulting", "custom ERP development", "integration services"],
  alternates: { canonical: "https://erpbizapps.com/services" },
};

export default function ServicesPage() {
  return (
    <>
      <Breadcrumbs items={[
        { label: "Home", href: "/" },
        { label: "Services" },
      ]} />
      <ServicesContent />
    </>
  );
}
