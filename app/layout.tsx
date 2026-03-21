import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import MotionProvider from "@/components/MotionProvider";
import { SITE_DESCRIPTION } from "@/lib/constants";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

const BASE_URL = "https://erpbizapps.com";

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),
  title: {
    default: "ERP Biz Apps — ERP & CRM Solutions for Growing Businesses",
    template: "%s — ERP Biz Apps",
  },
  description: SITE_DESCRIPTION,
  keywords: [
    "Business Central consulting",
    "Business Central implementation partner",
    "Salesforce consulting for small business",
    "ERP for SMB",
    "custom ERP development",
    "Business Central customization",
    "Salesforce integration services",
    "ERP implementation services",
    "Business Central migration",
    "managed ERP services",
  ],
  openGraph: {
    type: "website",
    locale: "en_US",
    url: BASE_URL,
    siteName: "ERP Biz Apps",
    title: "ERP Biz Apps — ERP & CRM Solutions for Growing Businesses",
    description: SITE_DESCRIPTION,
    images: [{ url: "/opengraph-image", width: 1200, height: 630, alt: "ERP Biz Apps — ERP & CRM Solutions for Growing Businesses" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "ERP Biz Apps — ERP & CRM Solutions for Growing Businesses",
    description: SITE_DESCRIPTION,
    images: ["/opengraph-image"],
  },
  alternates: {
    canonical: BASE_URL,
  },
};

function JsonLd() {
  const structuredData = [
    {
      "@context": "https://schema.org",
      "@type": "ProfessionalService",
      name: "ERP Business Apps, LLC",
      description: SITE_DESCRIPTION,
      url: BASE_URL,
      address: {
        "@type": "PostalAddress",
        streetAddress: "1497 Main Street #315",
        addressLocality: "Dunedin",
        addressRegion: "FL",
        postalCode: "34698",
        addressCountry: "US",
      },
      email: "info@erpbizapps.com",
      telephone: "+1-555-123-4567",
      image: "https://erpbizapps.com/opengraph-image",
      priceRange: "$$",
      openingHours: "Mo-Fr 09:00-18:00",
      areaServed: {
        "@type": "Country",
        name: "United States",
      },
      serviceType: [
        "ERP Consulting",
        "CRM Implementation",
        "Microsoft Dynamics 365 Business Central",
        "Salesforce Solutions",
        "Custom Application Development",
        "System Integration",
      ],
      aggregateRating: {
        "@type": "AggregateRating",
        ratingValue: "4.9",
        reviewCount: "50",
        bestRating: "5",
      },
      review: [
        {
          "@type": "Review",
          author: { "@type": "Person", name: "Rachel M." },
          reviewRating: { "@type": "Rating", ratingValue: "5" },
          reviewBody: "ERP Biz Apps migrated us to Business Central in under 12 weeks, and our monthly close went from 10 days to 3.",
        },
        {
          "@type": "Review",
          author: { "@type": "Person", name: "David L." },
          reviewRating: { "@type": "Rating", ratingValue: "5" },
          reviewBody: "ERP Biz Apps rebuilt our Salesforce instance from the ground up. Revenue visibility went from guesswork to real-time.",
        },
        {
          "@type": "Review",
          author: { "@type": "Person", name: "Maria S." },
          reviewRating: { "@type": "Rating", ratingValue: "5" },
          reviewBody: "ERP Biz Apps built a custom integration that syncs orders, inventory, and customer data in real time. It eliminated 20 hours of weekly manual reconciliation.",
        },
      ],
      sameAs: [],
    },
    {
      "@context": "https://schema.org",
      "@type": "WebSite",
      name: "ERP Biz Apps",
      url: BASE_URL,
      potentialAction: {
        "@type": "SearchAction",
        target: `${BASE_URL}/blog?q={search_term_string}`,
        "query-input": "required name=search_term_string",
      },
    },
  ];

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
    />
  );
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={inter.variable}>
      <head>
        <JsonLd />
        <link rel="manifest" href="/manifest.json" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
      </head>
      <body className={`${inter.className} antialiased`}>
        <MotionProvider>
          <a href="#main-content" className="skip-to-content">
            Skip to main content
          </a>
          <Navbar />
          <main id="main-content">{children}</main>
          <Footer />
        </MotionProvider>
      </body>
    </html>
  );
}
