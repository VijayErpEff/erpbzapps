import type { Metadata } from "next";
import BlogContent from "./BlogContent";
import Breadcrumbs from "@/components/ui/Breadcrumbs";

export const metadata: Metadata = {
  title: "Blog & Insights",
  description:
    "Insights, guides, and best practices for ERP, CRM, and business technology from the ERP Biz Apps team.",
  keywords: ["ERP blog", "Business Central insights", "CRM best practices", "ERP for small business", "business technology blog"],
  alternates: { canonical: "https://erpbizapps.com/blog" },
};

export default function BlogPage() {
  return (
    <>
      <Breadcrumbs items={[
        { label: "Home", href: "/" },
        { label: "Blog" },
      ]} />
      <BlogContent />
    </>
  );
}
