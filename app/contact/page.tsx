import type { Metadata } from "next";
import ContactContent from "./ContactContent";
import Breadcrumbs from "@/components/ui/Breadcrumbs";

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Get in touch with ERP Biz Apps. Schedule a free consultation for your ERP, CRM, or custom application project.",
  keywords: ["contact ERP Biz Apps", "ERP consultation", "free ERP consultation", "Business Central quote", "Salesforce quote"],
  alternates: { canonical: "https://erpbizapps.com/contact" },
};

export default function ContactPage() {
  return (
    <>
      <Breadcrumbs items={[
        { label: "Home", href: "/" },
        { label: "Contact" },
      ]} />
      <ContactContent />
    </>
  );
}
