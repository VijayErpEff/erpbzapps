"use client";

import Link from "next/link";
import FadeIn, { FadeInStagger, FadeInChild } from "@/components/ui/FadeIn";

const testimonials = [
  {
    quote:
      "We were drowning in spreadsheets and manual workarounds. ERP Biz Apps migrated us to Business Central in under 12 weeks, and our monthly close went from 10 days to 3. The team felt like an extension of ours throughout the entire process.",
    name: "Rachel M.",
    title: "CFO",
    company: "Coastal Distribution Co.",
    accent: "bg-brand-500",
    serviceHref: "/services/business-central",
    serviceLinkText: "View Business Central Services →",
  },
  {
    quote:
      "Our sales team was spending more time fighting the CRM than selling. ERP Biz Apps rebuilt our Salesforce instance from the ground up — proper pipeline stages, automated follow-ups, dashboards that actually make sense. Revenue visibility went from guesswork to real-time.",
    name: "David L.",
    title: "VP of Sales",
    company: "Apex Professional Services",
    accent: "bg-teal-500",
    serviceHref: "/services/salesforce",
    serviceLinkText: "View Salesforce Services →",
  },
  {
    quote:
      "We needed our ERP and CRM to talk to each other without manual data entry between systems. ERP Biz Apps built a custom integration that syncs orders, inventory, and customer data in real time. It eliminated 20 hours of weekly manual reconciliation.",
    name: "Maria S.",
    title: "COO",
    company: "Summit Manufacturing Group",
    accent: "bg-brand-500",
    serviceHref: "/services/integration",
    serviceLinkText: "View Integration Services →",
  },
];

export default function Testimonials() {
  return (
    <section className="py-section bg-apple-gray-light/40">
      <div className="container-apple">
        <FadeIn className="mb-10">
          <p className="text-brand-500 text-caption font-semibold tracking-wide uppercase mb-3">
            Trusted by Growing Businesses
          </p>
          <h2 className="text-display-sm text-apple-black max-w-2xl">
            What our clients{" "}
            <span className="text-gradient">say.</span>
          </h2>
          <p className="text-body-lg text-apple-gray mt-3 max-w-xl">
            Real results from real businesses that trusted us to transform their
            operations.
          </p>
        </FadeIn>

        <FadeInStagger className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-5">
          {testimonials.map((testimonial, i) => (
            <FadeInChild
              key={testimonial.name}
              index={i}
              className="rounded-[22px] bg-white border border-black/[0.04] shadow-card p-6 md:p-8 flex flex-col"
            >
              {/* Accent bar */}
              <div className={`w-8 h-1 rounded-full ${testimonial.accent} opacity-40 mb-5`} />

              {/* Quote */}
              <p className="text-body text-apple-gray italic leading-relaxed flex-1">
                &ldquo;{testimonial.quote}&rdquo;
              </p>

              {/* Attribution */}
              <div className="mt-6 pt-5 border-t border-black/[0.04]">
                <p className="font-semibold text-apple-black text-[0.875rem]">
                  {testimonial.name}
                </p>
                <p className="text-apple-gray text-[0.8125rem]">
                  {testimonial.title}, {testimonial.company}
                </p>
                <Link href={testimonial.serviceHref} className="text-brand-500 text-[0.75rem] hover:text-brand-600 transition-colors mt-2 inline-block">
                  {testimonial.serviceLinkText}
                </Link>
              </div>
            </FadeInChild>
          ))}
        </FadeInStagger>
      </div>
    </section>
  );
}
