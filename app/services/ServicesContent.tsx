"use client";

import Link from "next/link";
import { MicrosoftLogo, SalesforceLogo } from "@/components/svg/PartnerLogos";
import CTABanner from "@/components/ui/CTABanner";
import { FadeInStagger, FadeInChild } from "@/components/ui/FadeIn";

/** Mini ERP dashboard illustration */
function ERPVisual() {
  return (
    <svg viewBox="0 0 280 130" fill="none" className="w-full h-full">
      {/* Dashboard cards */}
      <g>
        <rect x="20" y="12" width="110" height="50" rx="6" fill="white" />
        <rect x="20" y="12" width="110" height="50" rx="6" stroke="#e5e7eb" strokeWidth="0.5" />
        <rect x="28" y="20" width="5" height="5" fill="#F25022" rx="0.5" />
        <rect x="34" y="20" width="5" height="5" fill="#7FBA00" rx="0.5" />
        <rect x="28" y="26" width="5" height="5" fill="#00A4EF" rx="0.5" />
        <rect x="34" y="26" width="5" height="5" fill="#FFB900" rx="0.5" />
        <text x="46" y="28" fontSize="5" fontWeight="600" fill="#1d1d1f" fontFamily="Inter, sans-serif" opacity="0.5">Revenue</text>
        <text x="28" y="46" fontSize="12" fontWeight="700" fill="#1d1d1f" fontFamily="Inter, sans-serif">$1.2M</text>
        <text x="78" y="46" fontSize="5" fill="#14b8a6" fontFamily="Inter, sans-serif">+18%</text>
        <path d="M28 54 Q45 48 65 50 T100 44 T122 40" stroke="url(#erp-s)" strokeWidth="1.5" fill="none" strokeLinecap="round" />
      </g>
      <g>
        <rect x="145" y="12" width="110" height="50" rx="6" fill="white" />
        <rect x="145" y="12" width="110" height="50" rx="6" stroke="#e5e7eb" strokeWidth="0.5" />
        <text x="155" y="28" fontSize="5" fontWeight="600" fill="#1d1d1f" fontFamily="Inter, sans-serif" opacity="0.5">Supply Chain</text>
        {[0, 1, 2].map(i => (
          <rect key={i} x="155" y={35 + i * 8} width={70 - i * 18} height="4" rx="2" fill="#2563eb" opacity={0.3 - i * 0.08} />
        ))}
      </g>
      {/* Bottom KPI row */}
      {[
        { x: 20, label: "Margin", val: "42%", c: "#2563eb" },
        { x: 90, label: "AP", val: "28d", c: "#14b8a6" },
        { x: 160, label: "Inventory", val: "$340K", c: "#7FBA00" },
        { x: 230, label: "Cash", val: "+$89K", c: "#00A4EF" },
      ].map((k) => (
        <g key={k.label}>
          <rect x={k.x} y="72" width="55" height="38" rx="5" fill="white" />
          <rect x={k.x} y="72" width="55" height="38" rx="5" stroke="#e5e7eb" strokeWidth="0.5" />
          <circle cx={k.x + 10} cy={82} r="2" fill={k.c} opacity="0.3" />
          <text x={k.x + 16} y="84" fontSize="4" fill="#86868b" fontFamily="Inter, sans-serif">{k.label}</text>
          <text x={k.x + 10} y="100" fontSize="8" fontWeight="700" fill="#1d1d1f" fontFamily="Inter, sans-serif">{k.val}</text>
        </g>
      ))}
      <defs>
        <linearGradient id="erp-s" x1="28" y1="54" x2="122" y2="40"><stop offset="0%" stopColor="#2563eb" /><stop offset="100%" stopColor="#14b8a6" /></linearGradient>
      </defs>
    </svg>
  );
}

/** CRM pipeline illustration */
function CRMVisual() {
  return (
    <svg viewBox="0 0 280 130" fill="none" className="w-full h-full">
      {["Lead", "Qualified", "Proposal", "Won"].map((s, i) => (
        <g key={s}>
          <rect x={15 + i * 67} y="10" width="58" height="110" rx="6" fill="#00A1E0" opacity={0.02 + i * 0.01} />
          <rect x={15 + i * 67} y="10" width="58" height="20" rx="6" fill="#00A1E0" opacity="0.06" />
          <text x={44 + i * 67} y="24" fontSize="5" fontWeight="600" fill="#00A1E0" textAnchor="middle" fontFamily="Inter, sans-serif" opacity={0.3 + i * 0.1}>{s}</text>
        </g>
      ))}
      {/* Deal cards */}
      {[
        { x: 21, y: 38, name: "Acme", amt: "$45K", c: "#F25022" },
        { x: 21, y: 68, name: "Nova", amt: "$28K", c: "#7FBA00" },
        { x: 88, y: 38, name: "Globe", amt: "$92K", c: "#2563eb" },
        { x: 88, y: 68, name: "Data", amt: "$67K", c: "#14b8a6" },
        { x: 155, y: 38, name: "Summit", amt: "$120K", c: "#00A1E0" },
        { x: 222, y: 38, name: "Pinnacle", amt: "$185K", c: "#14b8a6" },
        { x: 222, y: 68, name: "Vertex", amt: "$78K", c: "#2563eb" },
      ].map((d) => (
        <g key={d.name}>
          <rect x={d.x} y={d.y} width="46" height="24" rx="4" fill="white" />
          <rect x={d.x} y={d.y} width="46" height="24" rx="4" stroke="#e5e7eb" strokeWidth="0.4" />
          <circle cx={d.x + 8} cy={d.y + 9} r="3" fill={d.c} opacity="0.15" />
          <text x={d.x + 14} y={d.y + 11} fontSize="4" fontWeight="600" fill="#1d1d1f" fontFamily="Inter, sans-serif">{d.name}</text>
          <text x={d.x + 6} y={d.y + 20} fontSize="5" fontWeight="700" fill="#00A1E0" fontFamily="Inter, sans-serif">{d.amt}</text>
        </g>
      ))}
    </svg>
  );
}

/** Code editor illustration */
function CodeVisual() {
  return (
    <svg viewBox="0 0 280 130" fill="none" className="w-full h-full">
      <g>
        <rect x="20" y="10" width="180" height="110" rx="8" fill="white" />
        <rect x="20" y="10" width="180" height="110" rx="8" stroke="#e5e7eb" strokeWidth="0.5" />
        <rect x="20" y="10" width="180" height="18" rx="8" fill="#fafafa" />
        <rect x="20" y="22" width="180" height="6" fill="#fafafa" />
        <circle cx="32" cy="19" r="2.5" fill="#FF5F57" />
        <circle cx="40" cy="19" r="2.5" fill="#FEBC2E" />
        <circle cx="48" cy="19" r="2.5" fill="#28C840" />
        {[0, 1, 2, 3, 4, 5, 6].map(i => (
          <text key={i} x="28" y={40 + i * 12} fontSize="4" fill="#d2d2d7" fontFamily="monospace" textAnchor="end">{i + 1}</text>
        ))}
        <text x="34" y="40" fontSize="4.5" fontFamily="monospace" fill="#9333ea" opacity="0.6">import</text>
        <rect x="58" y="36" width="50" height="5" rx="1" fill="#14b8a6" opacity="0.15" />
        <text x="34" y="52" fontSize="4.5" fontFamily="monospace" fill="#9333ea" opacity="0.6">export</text>
        <rect x="58" y="48" width="70" height="5" rx="1" fill="#2563eb" opacity="0.12" />
        <rect x="40" y="60" width="40" height="5" rx="1" fill="#dc2626" opacity="0.1" />
        <rect x="40" y="72" width="55" height="5" rx="1" fill="#14b8a6" opacity="0.12" />
        <rect x="40" y="84" width="35" height="5" rx="1" fill="#2563eb" opacity="0.1" />
        <rect x="34" y="96" width="20" height="5" rx="1" fill="#1d1d1f" opacity="0.08" />
        <rect x="60" y="94" width="1.5" height="7" rx="0.5" fill="#2563eb" opacity={1} />
      </g>
      {/* Terminal */}
      <g>
        <rect x="210" y="10" width="55" height="110" rx="8" fill="#1d1d1f" />
        <text x="218" y="26" fontSize="4" fontWeight="600" fill="white" fontFamily="monospace" opacity="0.3">Terminal</text>
        <text x="216" y="42" fontSize="3.5" fill="#14b8a6" fontFamily="monospace" opacity="0.5">$ npm run dev</text>
        <text x="216" y="54" fontSize="3" fill="#14b8a6" fontFamily="monospace" opacity="0.4">
          ✓ Ready
        </text>
        {[0, 1, 2].map(i => (
          <rect key={i} x="216" y={64 + i * 10} width={30 - i * 6} height="3" rx="1.5" fill="#14b8a6" opacity={0.12 - i * 0.03} />
        ))}
      </g>
    </svg>
  );
}

/** Integration network illustration */
function IntegrationVisual() {
  return (
    <svg viewBox="0 0 280 130" fill="none" className="w-full h-full">
      {/* Center hub */}
      <circle cx="140" cy="65" r="16" fill="url(#int-s)" opacity="0.12" />
      <circle cx="140" cy="65" r="8" fill="url(#int-s)" opacity="0.25" />
      <circle cx="140" cy="65" r="4" fill="white" />
      {/* Outer nodes */}
      {[
        { cx: 45, cy: 35, label: "ERP", c: "#2563eb" },
        { cx: 235, cy: 35, label: "CRM", c: "#00A1E0" },
        { cx: 45, cy: 95, label: "E-com", c: "#14b8a6" },
        { cx: 235, cy: 95, label: "HR", c: "#FFB900" },
        { cx: 140, cy: 15, label: "API", c: "#7FBA00" },
        { cx: 140, cy: 115, label: "Data", c: "#F25022" },
      ].map((n) => (
        <g key={n.label}>
          <circle cx={n.cx} cy={n.cy} r="10" fill={n.c} opacity="0.08" />
          <circle cx={n.cx} cy={n.cy} r="5" fill={n.c} opacity="0.2" />
          <text x={n.cx} y={n.cy + 18} fontSize="4.5" fontWeight="500" fill={n.c} textAnchor="middle" fontFamily="Inter, sans-serif" opacity="0.35">{n.label}</text>
          <line x1={n.cx} y1={n.cy} x2="140" y2="65" stroke={n.c} strokeWidth="1" strokeDasharray="3 3" opacity="0.1" />
        </g>
      ))}
      <defs>
        <linearGradient id="int-s" x1="124" y1="49" x2="156" y2="81"><stop offset="0%" stopColor="#2563eb" /><stop offset="100%" stopColor="#14b8a6" /></linearGradient>
      </defs>
    </svg>
  );
}

/** Support shield illustration */
function SupportVisual() {
  return (
    <svg viewBox="0 0 280 130" fill="none" className="w-full h-full">
      {/* Health cards */}
      {[
        { x: 20, y: 15, label: "System", val: "99.9%", c: "#14b8a6" },
        { x: 115, y: 15, label: "Response", val: "< 2hrs", c: "#2563eb" },
        { x: 20, y: 72, label: "Uptime", val: "24/7", c: "#00A4EF" },
        { x: 115, y: 72, label: "Rating", val: "4.9★", c: "#FFB900" },
      ].map((c) => (
        <g key={c.label}>
          <rect x={c.x} y={c.y} width="80" height="46" rx="6" fill="white" />
          <rect x={c.x} y={c.y} width="80" height="46" rx="6" stroke="#e5e7eb" strokeWidth="0.5" />
          <circle cx={c.x + 12} cy={c.y + 14} r="3" fill={c.c} opacity="0.2" />
          <text x={c.x + 20} y={c.y + 16} fontSize="4.5" fill="#86868b" fontFamily="Inter, sans-serif">{c.label}</text>
          <text x={c.x + 12} y={c.y + 36} fontSize="11" fontWeight="700" fill="#1d1d1f" fontFamily="Inter, sans-serif">
            {c.val}
          </text>
        </g>
      ))}
      {/* Activity panel */}
      <g>
        <rect x="210" y="15" width="50" height="103" rx="6" fill="white" />
        <rect x="210" y="15" width="50" height="103" rx="6" stroke="#e5e7eb" strokeWidth="0.5" />
        <text x="235" y="30" fontSize="4.5" fontWeight="600" fill="#1d1d1f" textAnchor="middle" fontFamily="Inter, sans-serif" opacity="0.4">Activity</text>
        {[0, 1, 2, 3, 4, 5, 6].map(i => (
          <rect key={i} x={218 + i * 4} y={105 - (Math.sin(i * 0.8) * 18 + 25)}
            width="2.5" height={Math.sin(i * 0.8) * 18 + 25} rx="1.25" fill="url(#sup-s)" opacity={0.12 + i * 0.02} />
        ))}
      </g>
      <defs>
        <linearGradient id="sup-s" x1="218" y1="40" x2="250" y2="105"><stop offset="0%" stopColor="#2563eb" /><stop offset="100%" stopColor="#14b8a6" /></linearGradient>
      </defs>
    </svg>
  );
}

const services = [
  {
    title: "Microsoft Dynamics 365 Business Central",
    partner: "microsoft" as const,
    metric: "ERP Platform",
    metricLabel: "All-in-one",
    description: "All-in-one ERP for financials, supply chain, sales, and operations — cloud-based and fully integrated with the Microsoft ecosystem.",
    visual: ERPVisual,
    href: "/services/business-central",
    accent: "bg-brand-500",
  },
  {
    title: "Salesforce Solutions",
    partner: "salesforce" as const,
    metric: "CRM Platform",
    metricLabel: "Scalable",
    description: "CRM implementation, customization, and integration — configured to match your actual sales process and drive real pipeline visibility.",
    visual: CRMVisual,
    href: "/services/salesforce",
    accent: "bg-sf-blue",
  },
  {
    title: "Custom Application Development",
    partner: null,
    metric: "Bespoke Software",
    metricLabel: "Tailored",
    description: "Bespoke web and mobile applications built around your unique processes when off-the-shelf tools don't fit.",
    visual: CodeVisual,
    href: "/services/custom-development",
    accent: "bg-teal-500",
  },
  {
    title: "Integration Services",
    partner: null,
    metric: "System Connectivity",
    metricLabel: "Seamless",
    description: "Connect your ERP, CRM, e-commerce, and other business systems to eliminate data silos and streamline workflows.",
    visual: IntegrationVisual,
    href: "/services/integration",
    accent: "bg-brand-500",
  },
  {
    title: "Support & Managed Services",
    partner: null,
    metric: "Ongoing Care",
    metricLabel: "24/7",
    description: "Ongoing helpdesk support, system monitoring, health checks, and feature enhancements to keep your systems running smoothly.",
    visual: SupportVisual,
    href: "/services/support",
    accent: "bg-teal-500",
  },
];

export default function ServicesContent() {
  return (
    <>
      {/* Hero */}
      <section className="relative pt-6 pb-10 md:pt-8 md:pb-14 overflow-hidden">
        <div className="absolute inset-0 mesh-gradient" />
        <div className="container-apple relative z-10">
          <p
            className="text-brand-500 text-caption font-semibold tracking-wide uppercase mb-4"
          >
            Services
          </p>
          <h1
            className="text-display text-apple-black max-w-3xl"
          >
            End-to-end solutions.{" "}
            <span className="text-gradient">Zero compromise.</span>
          </h1>
          <p
            className="text-body-lg text-apple-gray mt-4 max-w-xl"
          >
            From implementation to ongoing support, we cover the full lifecycle of your business technology.
          </p>
        </div>
      </section>

      {/* Services grid */}
      <section className="pb-section pt-4">
        <div className="container-apple">
          <FadeInStagger className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5">
            {services.map((service, i) => {
              const Visual = service.visual;
              return (
                <FadeInChild
                  key={service.title}
                  index={i}
                >
                  <Link href={service.href} className="block group">
                    <div className="rounded-[22px] bg-white border border-black/[0.04] shadow-card hover:shadow-card-hover transition-all duration-500 overflow-hidden h-full">
                      {/* Illustration */}
                      <div className="relative h-[180px] sm:h-[150px] bg-apple-gray-light/60 overflow-hidden">
                        <Visual />
                        {service.partner && (
                          <div className="absolute top-3 left-3 flex items-center gap-1.5 bg-white/80 backdrop-blur-sm rounded-full px-2.5 py-1">
                            {service.partner === "microsoft" && <><MicrosoftLogo size={12} /><span className="text-[0.5625rem] font-medium text-apple-gray-dark">Microsoft</span></>}
                            {service.partner === "salesforce" && <SalesforceLogo size={20} />}
                          </div>
                        )}
                      </div>
                      {/* Content */}
                      <div className="p-5 md:p-6">
                        <div className="flex items-center gap-2 mb-3">
                          <div className={`w-1.5 h-1.5 rounded-full ${service.accent}`} />
                          <span className="text-[0.6875rem] font-semibold text-apple-gray-dark tracking-tight">{service.metric}</span>
                          <span className="text-[0.625rem] text-apple-gray">{service.metricLabel}</span>
                        </div>
                        <h3 className="text-[1.0625rem] font-semibold text-apple-black leading-snug mb-2 group-hover:text-brand-500 transition-colors duration-300">
                          {service.title}
                        </h3>
                        <p className="text-[0.8125rem] text-apple-gray leading-relaxed">{service.description}</p>
                        <div className="mt-4 text-brand-500 text-sm font-medium flex items-center gap-1 opacity-100 md:opacity-0 md:group-hover:opacity-100 transition-all duration-300 md:translate-y-1 md:group-hover:translate-y-0">
                          Learn more
                          <svg width="14" height="14" viewBox="0 0 16 16" fill="none"><path d="M6 3L11 8L6 13" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /></svg>
                        </div>
                      </div>
                    </div>
                  </Link>
                </FadeInChild>
              );
            })}
          </FadeInStagger>
        </div>
      </section>

      <CTABanner
        title="Not sure which service is right for you?"
        subtitle="Let's figure it out together."
        buttonText="Schedule a Free Consultation"
        buttonHref="/contact"
      />
    </>
  );
}
