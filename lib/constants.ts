export const SITE_NAME = "ERP Biz Apps";
export const SITE_LEGAL_NAME = "ERP Business Apps, LLC";
export const SITE_TAGLINE = "Smart ERP & CRM Solutions for Growing Businesses";
export const SITE_DESCRIPTION =
  "ERP Biz Apps helps small and mid-size businesses transform operations with Microsoft Business Central, Salesforce, and custom-built applications.";

export const CONTACT_EMAIL = "info@erpbizapps.com";
export const CONTACT_PHONE = "(555) 123-4567";
export const CONTACT_LOCATION = "Dunedin, FL | Serving clients nationwide";
export const CONTACT_ADDRESS = "1497 Main Street #315, Dunedin, FL 34698";
export const BUSINESS_HOURS = "Monday – Friday, 9:00 AM – 6:00 PM EST";

export const NAV_LINKS = [
  { label: "About", href: "/about" },
  {
    label: "Services",
    href: "/services",
    children: [
      { label: "Business Central", href: "/services/business-central" },
      { label: "Salesforce Solutions", href: "/services/salesforce" },
      { label: "Custom Development", href: "/services/custom-development" },
      { label: "Integration Services", href: "/services/integration" },
      { label: "Support & Managed Services", href: "/services/support" },
    ],
  },
  { label: "Industries", href: "/industries" },
  { label: "Why Choose Us", href: "/why-choose-us" },
  { label: "Blog", href: "/blog" },
  { label: "Contact", href: "/contact" },
] as const;

export const SERVICE_INTERESTS = [
  "Microsoft Dynamics 365 Business Central",
  "Salesforce Solutions",
  "Custom Application Development",
  "Integration Services",
  "Support & Managed Services",
  "Not sure — need guidance",
] as const;
