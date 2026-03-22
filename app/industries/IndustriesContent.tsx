"use client";

import {
  ManufacturingIcon,
  ProfServicesIcon,
  RetailIcon,
  WholesaleIcon,
  HealthcareIcon,
  NonprofitIcon,
} from "@/components/svg/IndustryIcons";
import CTABanner from "@/components/ui/CTABanner";
import { FadeInStagger, FadeInChild } from "@/components/ui/FadeIn";

const industries = [
  {
    title: "Manufacturing & Distribution",
    metric: "Order-to-Cash",
    metricLabel: "Full visibility",
    description:
      "Manage production, inventory, warehousing, and fulfillment with Business Central. Integrate with your CRM for full order-to-cash visibility.",
    icon: ManufacturingIcon,
    accent: "from-brand-500 to-brand-600",
    accentBg: "bg-brand-500",
  },
  {
    title: "Professional Services",
    metric: "Time & Billing",
    metricLabel: "Automated",
    description:
      "Track projects, time, billing, and client relationships in one system. Automate invoicing and resource allocation.",
    icon: ProfServicesIcon,
    accent: "from-teal-500 to-teal-600",
    accentBg: "bg-teal-500",
  },
  {
    title: "Retail & E-Commerce",
    metric: "Omnichannel",
    metricLabel: "Unified ops",
    description:
      "Unify your online and in-store operations. Real-time inventory, multi-channel sales, and integrated financials.",
    icon: RetailIcon,
    accent: "from-brand-500 to-teal-500",
    accentBg: "bg-brand-500",
  },
  {
    title: "Wholesale & Trade",
    metric: "Supply Chain",
    metricLabel: "Optimized",
    description:
      "Streamline purchasing, pricing, and customer management. Optimize your supply chain from vendor to customer.",
    icon: WholesaleIcon,
    accent: "from-teal-500 to-brand-500",
    accentBg: "bg-teal-500",
  },
  {
    title: "Healthcare & Life Sciences",
    metric: "Compliance",
    metricLabel: "Built in",
    description:
      "Compliant, secure systems for patient management, billing, and operational efficiency.",
    icon: HealthcareIcon,
    accent: "from-brand-600 to-brand-500",
    accentBg: "bg-brand-600",
  },
  {
    title: "Nonprofits & Education",
    metric: "Fund Tracking",
    metricLabel: "End-to-end",
    description:
      "Donor management, grant tracking, and fund accounting — with Salesforce and Business Central tailored for your mission.",
    icon: NonprofitIcon,
    accent: "from-teal-400 to-teal-600",
    accentBg: "bg-teal-500",
  },
];

export default function IndustriesContent() {
  return (
    <>
      {/* Hero */}
      <section className="relative pt-6 pb-12 md:pt-8 md:pb-16 overflow-hidden">
        <div className="absolute inset-0 mesh-gradient" />
        <div className="container-apple relative z-10">
          <p
            className="text-brand-500 text-caption font-semibold tracking-wide uppercase mb-4"
          >
            Industries
          </p>
          <h1
            className="text-display text-apple-black max-w-3xl"
          >
            Solutions for the industries that{" "}
            <span className="text-gradient">drive growth.</span>
          </h1>
          <p
            className="text-body-lg text-apple-gray mt-4 max-w-xl"
          >
            We understand the unique challenges of your industry and build
            solutions that address them head-on.
          </p>
        </div>
      </section>

      {/* Industries grid — Kivyo-inspired cards */}
      <section className="pb-section pt-4">
        <div className="container-apple">
          <FadeInStagger className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5">
            {industries.map((industry, index) => {
              const Icon = industry.icon;
              return (
                <FadeInChild
                  key={industry.title}
                  index={index}
                  className="group rounded-[22px] bg-white border border-black/[0.04] shadow-card hover:shadow-card-hover transition-all duration-500 overflow-hidden cursor-default"
                >
                  {/* Illustration area */}
                  <div className="relative h-[140px] bg-apple-gray-light/60 overflow-hidden">
                    {/* Subtle gradient overlay */}
                    <div className={`absolute inset-0 bg-gradient-to-br ${industry.accent} opacity-[0.03]`} />
                    <Icon className="relative z-10" />
                  </div>

                  {/* Content */}
                  <div className="p-5 md:p-6">
                    {/* Metric badge — Kivyo-inspired */}
                    <div className="flex items-center gap-2 mb-3">
                      <div className={`w-1.5 h-1.5 rounded-full ${industry.accentBg}`} />
                      <span className="text-[0.6875rem] font-semibold text-apple-gray-dark tracking-tight">
                        {industry.metric}
                      </span>
                      <span className="text-[0.625rem] text-apple-gray">
                        {industry.metricLabel}
                      </span>
                    </div>

                    <h3 className="text-[1.0625rem] font-semibold text-apple-black leading-snug mb-2 group-hover:text-brand-500 transition-colors duration-300">
                      {industry.title}
                    </h3>
                    <p className="text-[0.8125rem] text-apple-gray leading-relaxed">
                      {industry.description}
                    </p>
                  </div>
                </FadeInChild>
              );
            })}
          </FadeInStagger>
        </div>
      </section>

      <CTABanner
        title="Don't see your industry?"
        subtitle="We likely have experience with it. Let's chat."
        buttonText="Contact Us"
        buttonHref="/contact"
      />
    </>
  );
}
