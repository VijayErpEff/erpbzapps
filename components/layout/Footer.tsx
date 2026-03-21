"use client";

import { useState } from "react";
import Link from "next/link";
import Logo from "@/components/svg/Logo";
import {
  SITE_TAGLINE,
  CONTACT_EMAIL,
  CONTACT_PHONE,
  CONTACT_LOCATION,
} from "@/lib/constants";

const serviceLinks = [
  { label: "Business Central", href: "/services/business-central" },
  { label: "Salesforce Solutions", href: "/services/salesforce" },
  { label: "Custom Development", href: "/services/custom-development" },
  { label: "Integration Services", href: "/services/integration" },
  { label: "Support & Managed Services", href: "/services/support" },
];

const companyLinks = [
  { label: "About Us", href: "/about" },
  { label: "Industries", href: "/industries" },
  { label: "Why Choose Us", href: "/why-choose-us" },
  { label: "Blog", href: "/blog" },
  { label: "Contact", href: "/contact" },
];

function CollapsibleSection({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  const [open, setOpen] = useState(false);
  const panelId = `footer-${title.toLowerCase().replace(/\s+/g, "-")}`;
  return (
    <div>
      <button
        className="w-full flex items-center justify-between md:pointer-events-none md:cursor-default"
        onClick={() => setOpen(!open)}
        aria-expanded={open}
        aria-controls={panelId}
      >
        <h4 className="text-xs font-semibold text-apple-black tracking-wide uppercase">
          {title}
        </h4>
        <svg
          width="16"
          height="16"
          viewBox="0 0 16 16"
          fill="none"
          className={`md:hidden text-apple-gray transition-transform duration-200 ${
            open ? "rotate-180" : ""
          }`}
          aria-hidden="true"
        >
          <path
            d="M4 6l4 4 4-4"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </button>
      <div
        id={panelId}
        role="region"
        aria-labelledby={panelId + "-label"}
        className={`mt-5 overflow-hidden transition-[max-height] duration-300 md:!max-h-none ${
          open ? "max-h-96" : "max-h-0 md:max-h-none"
        }`}
      >
        {children}
      </div>
    </div>
  );
}

export default function Footer() {
  return (
    <footer className="bg-apple-gray-light" role="contentinfo">
      {/* Main footer */}
      <div className="container-apple py-12 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-8">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-2.5 mb-4">
              <Logo size={28} />
              <span className="font-semibold text-sm text-apple-black">
                ERP Biz Apps
              </span>
            </div>
            <p className="text-caption text-apple-gray leading-relaxed max-w-xs">
              {SITE_TAGLINE}
            </p>
          </div>

          {/* Services */}
          <CollapsibleSection title="Services">
            <ul className="space-y-3">
              {serviceLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-caption text-apple-gray hover:text-apple-black transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </CollapsibleSection>

          {/* Company */}
          <CollapsibleSection title="Company">
            <ul className="space-y-3">
              {companyLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-caption text-apple-gray hover:text-apple-black transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </CollapsibleSection>

          {/* Contact */}
          <CollapsibleSection title="Get in Touch">
            <ul className="space-y-3 text-caption text-apple-gray">
              <li>
                <a
                  href={`mailto:${CONTACT_EMAIL}`}
                  className="hover:text-apple-black transition-colors"
                >
                  {CONTACT_EMAIL}
                </a>
              </li>
              <li>
                <a
                  href={`tel:${CONTACT_PHONE.replace(/[^\d+]/g, "")}`}
                  className="hover:text-apple-black transition-colors"
                >
                  {CONTACT_PHONE}
                </a>
              </li>
              <li>{CONTACT_LOCATION}</li>
            </ul>
          </CollapsibleSection>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-apple-gray-mid/30">
        <div className="container-apple py-5 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-xs text-apple-gray">
            &copy; {new Date().getFullYear()} ERP Business Apps, LLC. All rights
            reserved.
          </p>
          <div className="flex gap-6 text-xs text-apple-gray">
            <Link
              href="/privacy-policy"
              className="hover:text-apple-black transition-colors"
            >
              Privacy Policy
            </Link>
            <Link
              href="/terms-of-service"
              className="hover:text-apple-black transition-colors"
            >
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
