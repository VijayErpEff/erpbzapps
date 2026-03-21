import type { Metadata } from "next";
import WhyChooseUsContent from "./WhyChooseUsContent";
import Breadcrumbs from "@/components/ui/Breadcrumbs";

export const metadata: Metadata = {
  title: "Why Choose ERP Biz Apps — Certified Microsoft & Salesforce Partner",
  description:
    "50+ successful implementations, 4.9/5 client satisfaction, and certified Microsoft and Salesforce expertise. See why growing businesses choose ERP Biz Apps as their technology partner.",
  keywords: [
    "certified Business Central partner",
    "Microsoft Dynamics partner",
    "Salesforce consulting partner",
    "ERP implementation partner",
    "best ERP consultant for small business",
  ],
  alternates: { canonical: "https://erpbizapps.com/why-choose-us" },
};

export default function WhyChooseUsPage() {
  return (
    <>
      <Breadcrumbs items={[
        { label: "Home", href: "/" },
        { label: "Why Choose Us" },
      ]} />
      <WhyChooseUsContent />
    </>
  );
}
