"use client";

import FadeIn from "@/components/ui/FadeIn";
import ContactForm from "@/components/contact/ContactForm";
import {
  CONTACT_EMAIL,
  CONTACT_PHONE,
  CONTACT_LOCATION,
  BUSINESS_HOURS,
} from "@/lib/constants";

/** Contact info SVG icons */
function EmailIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="text-brand-500">
      <rect x="2" y="4" width="20" height="16" rx="3" stroke="currentColor" />
      <path d="M2 7L12 13L22 7" stroke="currentColor" />
    </svg>
  );
}

function PhoneIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="text-brand-500">
      <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z" stroke="currentColor" />
    </svg>
  );
}

function LocationIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="text-brand-500">
      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" stroke="currentColor" />
      <circle cx="12" cy="10" r="3" stroke="currentColor" />
    </svg>
  );
}

function ClockIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="text-brand-500">
      <circle cx="12" cy="12" r="10" stroke="currentColor" />
      <path d="M12 6V12L16 14" stroke="currentColor" />
    </svg>
  );
}

const contactInfo = [
  { label: "Email", value: CONTACT_EMAIL, icon: EmailIcon },
  { label: "Phone", value: CONTACT_PHONE, icon: PhoneIcon },
  { label: "Location", value: CONTACT_LOCATION, icon: LocationIcon },
  { label: "Hours", value: BUSINESS_HOURS, icon: ClockIcon },
];

export default function ContactContent() {
  return (
    <>
      {/* Hero */}
      <section className="relative pt-6 pb-10 md:pt-8 md:pb-14 overflow-hidden">
        <div className="absolute inset-0 mesh-gradient" />
        <div className="container-apple relative z-10">
          <p
            className="text-brand-500 text-caption font-semibold tracking-wide uppercase mb-4"
          >Contact</p>
          <h1
            className="text-display text-apple-black max-w-2xl"
          >
            Let&apos;s build something{" "}
            <span className="text-gradient">great together.</span>
          </h1>
          <p
            className="text-body-lg text-apple-gray mt-4 max-w-xl"
          >
            Whether you&apos;re exploring ERP options, need help with Salesforce,
            or have a custom project in mind — we&apos;d love to hear from you.
          </p>
        </div>
      </section>

      {/* Form + Info */}
      <section className="pb-section pt-4">
        <div className="container-apple">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-5 lg:gap-6">
            {/* Form */}
            <FadeIn className="lg:col-span-3">
              <ContactForm />
            </FadeIn>

            {/* Contact Info */}
            <FadeIn delay={0.15} className="lg:col-span-2 space-y-4">
              {/* Contact details card */}
              <div className="rounded-[22px] bg-white border border-black/[0.04] shadow-card p-6">
                <h3 className="text-[1.0625rem] font-semibold text-apple-black mb-5">
                  Get in touch.
                </h3>
                <div className="space-y-5">
                  {contactInfo.map((item) => {
                    const Icon = item.icon;
                    return (
                      <div key={item.label} className="flex items-start gap-3">
                        <div className="flex-shrink-0 w-8 h-8 rounded-lg bg-brand-50 flex items-center justify-center mt-0.5">
                          <Icon />
                        </div>
                        <div>
                          <p className="text-[0.6875rem] font-semibold text-apple-gray-dark tracking-tight uppercase">
                            {item.label}
                          </p>
                          <p className="text-[0.8125rem] text-apple-black font-medium mt-0.5">
                            {item.value}
                          </p>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Free consultation card */}
              <div className="rounded-[22px] bg-apple-black p-6 relative overflow-hidden">
                {/* Glow */}
                <div className="absolute top-0 right-0 w-[200px] h-[150px] bg-brand-500/10 rounded-full blur-[60px]" />
                <div className="absolute bottom-0 left-0 w-[150px] h-[150px] bg-teal-500/10 rounded-full blur-[60px]" />

                <div className="relative z-10">
                  <div className="flex items-center gap-2 mb-3">
                    <div className="w-1.5 h-1.5 rounded-full bg-teal-400" />
                    <span className="text-[0.6875rem] font-semibold text-white/50 tracking-tight">
                      Free Offer
                    </span>
                  </div>
                  <h4 className="text-[1.0625rem] font-semibold text-white mb-2">
                    Free Consultation
                  </h4>
                  <p className="text-[0.8125rem] text-apple-gray leading-relaxed">
                    Not sure where to start? Schedule a free 30-minute consultation
                    and we&apos;ll help you map out the best path forward for your
                    business.
                  </p>

                  {/* Visual element */}
                  <div className="mt-4 flex items-center gap-3">
                    <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
                      <circle cx="20" cy="20" r="18" stroke="url(#consult-gr)" strokeWidth="1.5" fill="none" opacity="0.2" />
                      <path d="M14 20 L18 24 L26 16" stroke="#14b8a6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                      <defs>
                        <linearGradient id="consult-gr" x1="2" y1="2" x2="38" y2="38"><stop offset="0%" stopColor="#2563eb" /><stop offset="100%" stopColor="#14b8a6" /></linearGradient>
                      </defs>
                    </svg>
                    <div>
                      <p className="text-[0.75rem] font-semibold text-white/70">30 minutes</p>
                      <p className="text-[0.625rem] text-white/40">No obligation</p>
                    </div>
                  </div>
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>
    </>
  );
}
