import type { Metadata } from "next";
import AboutContent from "./AboutContent";
import Breadcrumbs from "@/components/ui/Breadcrumbs";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Learn about ERP Biz Apps — our mission, values, and commitment to helping SMBs grow with smart ERP and CRM solutions.",
  keywords: ["ERP consulting company", "about ERP Biz Apps", "Business Central partner", "Salesforce partner", "SMB technology consulting"],
  alternates: { canonical: "https://erpbizapps.com/about" },
};

export default function AboutPage() {
  return (
    <>
      <Breadcrumbs items={[
        { label: "Home", href: "/" },
        { label: "About Us" },
      ]} />
      <AboutContent />
    </>
  );
}
