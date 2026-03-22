"use client";

import Link from "next/link";
import { MicrosoftLogo, SalesforceLogo } from "@/components/svg/PartnerLogos";
import FadeIn, { FadeInStagger, FadeInChild } from "@/components/ui/FadeIn";

/** Business Central — dashboard with financial charts, ledger grid, Microsoft logo */
function BCIllustration() {
  return (
    <svg viewBox="0 0 320 160" fill="none" className="w-full h-full">
      {/* Background grid (ledger feel) */}
      {[0, 1, 2, 3, 4, 5].map(i => (
        <line key={`h-${i}`} x1="20" y1={25 + i * 24} x2="300" y2={25 + i * 24}
          stroke="#2563eb" strokeWidth="0.5" opacity="0.05" />
      ))}
      {[0, 1, 2, 3, 4, 5, 6].map(i => (
        <line key={`v-${i}`} x1={20 + i * 48} y1="20" x2={20 + i * 48} y2="150"
          stroke="#2563eb" strokeWidth="0.5" opacity="0.04" />
      ))}

      {/* Mini dashboard card - Revenue */}
      <g>
        <rect x="24" y="22" width="128" height="64" rx="8" fill="white" />
        <rect x="24" y="22" width="128" height="64" rx="8" stroke="#e5e7eb" strokeWidth="0.5" />
        {/* Microsoft logo tiny */}
        <rect x="32" y="30" width="5" height="5" fill="#F25022" rx="0.5" />
        <rect x="38" y="30" width="5" height="5" fill="#7FBA00" rx="0.5" />
        <rect x="32" y="36" width="5" height="5" fill="#00A4EF" rx="0.5" />
        <rect x="38" y="36" width="5" height="5" fill="#FFB900" rx="0.5" />
        <text x="50" y="38" fontSize="5.5" fontWeight="600" fill="#1d1d1f" fontFamily="Inter, sans-serif" opacity="0.6">Revenue Overview</text>
        <text x="32" y="54" fontSize="14" fontWeight="700" fill="#1d1d1f" fontFamily="Inter, sans-serif">$1.24M</text>
        <text x="90" y="54" fontSize="5" fontWeight="500" fill="#14b8a6" fontFamily="Inter, sans-serif">+18.2%</text>
        {/* Sparkline */}
        <path d="M32 72 Q42 68 55 70 T80 64 T105 62 T130 58 T142 55"
          stroke="url(#bc-spark)" strokeWidth="1.5" fill="none" strokeLinecap="round" />
        {/* Sparkline fill */}
        <path d="M32 72 Q42 68 55 70 T80 64 T105 62 T130 58 T142 55 V78 H32 Z"
          fill="url(#bc-spark)" opacity="0.06" />
      </g>

      {/* Mini dashboard card - Financials */}
      <g>
        <rect x="168" y="22" width="128" height="64" rx="8" fill="white" />
        <rect x="168" y="22" width="128" height="64" rx="8" stroke="#e5e7eb" strokeWidth="0.5" />
        <text x="178" y="37" fontSize="5.5" fontWeight="600" fill="#1d1d1f" fontFamily="Inter, sans-serif" opacity="0.6">Supply Chain</text>
        {/* Horizontal bar chart */}
        <rect x="178" y="46" width="70" height="6" rx="3" fill="#2563eb" opacity="0.7" />
        <text x="254" y="51" fontSize="4.5" fill="#86868b" fontFamily="Inter, sans-serif">Fulfilled</text>
        <rect x="178" y="56" width="52" height="6" rx="3" fill="#14b8a6" opacity="0.6" />
        <text x="236" y="61" fontSize="4.5" fill="#86868b" fontFamily="Inter, sans-serif">In Transit</text>
        <rect x="178" y="66" width="35" height="6" rx="3" fill="#FFB900" opacity="0.5" />
        <text x="218" y="71" fontSize="4.5" fill="#86868b" fontFamily="Inter, sans-serif">Pending</text>
      </g>

      {/* Bottom metrics row */}
      <g>
        {/* KPI cards */}
        {[
          { x: 24, label: "Gross Margin", value: "42.3%", color: "#2563eb" },
          { x: 98, label: "AP Aging", value: "28 days", color: "#14b8a6" },
          { x: 172, label: "Inventory", value: "$340K", color: "#7FBA00" },
          { x: 246, label: "Cash Flow", value: "+$89K", color: "#00A4EF" },
        ].map((kpi) => (
          <g key={kpi.label}>
            <rect x={kpi.x} y="96" width="64" height="44" rx="6" fill="white" />
            <rect x={kpi.x} y="96" width="64" height="44" rx="6" stroke="#e5e7eb" strokeWidth="0.5" />
            <rect x={kpi.x + 8} y="103" width="3" height="3" rx="1.5" fill={kpi.color} />
            <text x={kpi.x + 15} y="106" fontSize="4.5" fill="#86868b" fontFamily="Inter, sans-serif">{kpi.label}</text>
            <text x={kpi.x + 8} y="126" fontSize="10" fontWeight="700" fill="#1d1d1f" fontFamily="Inter, sans-serif">
              {kpi.value}
            </text>
          </g>
        ))}
      </g>

      <defs>
        <linearGradient id="bc-spark" x1="32" y1="72" x2="142" y2="55">
          <stop offset="0%" stopColor="#2563eb" />
          <stop offset="100%" stopColor="#14b8a6" />
        </linearGradient>
      </defs>
    </svg>
  );
}

/** Salesforce — CRM pipeline view with deal cards and funnel */
function SFIllustration() {
  return (
    <svg viewBox="0 0 320 160" fill="none" className="w-full h-full">
      {/* Pipeline columns */}
      {["Lead", "Qualified", "Proposal", "Closed"].map((stage, i) => (
        <g key={stage}>
          {/* Column background */}
          <rect x={20 + i * 76} y="18" width="68" height="130" rx="6" fill="#00A1E0" opacity={0.02 + i * 0.01} />
          {/* Column header */}
          <rect x={20 + i * 76} y="18" width="68" height="22" rx="6" fill="#00A1E0" opacity="0.06" />
          <text x={54 + i * 76} y="33" fontSize="5" fontWeight="600" fill="#00A1E0"
            textAnchor="middle" fontFamily="Inter, sans-serif" opacity={0.4 + i * 0.1}>{stage}</text>
        </g>
      ))}

      {/* Deal cards in pipeline */}
      {[
        { x: 26, y: 48, w: 56, h: 28, name: "Acme Corp", amount: "$45K", avatar: "#F25022" },
        { x: 26, y: 82, w: 56, h: 28, name: "Nova Inc", amount: "$28K", avatar: "#7FBA00" },
        { x: 26, y: 116, w: 56, h: 18, name: "TechFlow", amount: "$15K", avatar: "#00A4EF" },
        { x: 102, y: 48, w: 56, h: 28, name: "GlobeTech", amount: "$92K", avatar: "#2563eb" },
        { x: 102, y: 82, w: 56, h: 24, name: "DataPro", amount: "$67K", avatar: "#14b8a6" },
        { x: 178, y: 48, w: 56, h: 30, name: "Summit Ltd", amount: "$120K", avatar: "#00A1E0" },
        { x: 254, y: 48, w: 56, h: 34, name: "Pinnacle", amount: "$185K", avatar: "#14b8a6" },
        { x: 254, y: 88, w: 56, h: 28, name: "Vertex AI", amount: "$78K", avatar: "#2563eb" },
      ].map((deal) => (
        <g key={deal.name}>
          <rect x={deal.x} y={deal.y} width={deal.w} height={deal.h} rx="5" fill="white" />
          <rect x={deal.x} y={deal.y} width={deal.w} height={deal.h} rx="5" stroke="#e5e7eb" strokeWidth="0.4" />
          {/* Avatar circle */}
          <circle cx={deal.x + 10} cy={deal.y + 10} r="4" fill={deal.avatar} opacity="0.2" />
          <circle cx={deal.x + 10} cy={deal.y + 10} r="2" fill={deal.avatar} opacity="0.6" />
          {/* Name */}
          <text x={deal.x + 18} y={deal.y + 12} fontSize="4.5" fontWeight="600" fill="#1d1d1f" fontFamily="Inter, sans-serif">{deal.name}</text>
          {/* Amount */}
          <text x={deal.x + 8} y={deal.y + 22} fontSize="5.5" fontWeight="700" fill="#00A1E0" fontFamily="Inter, sans-serif">{deal.amount}</text>
        </g>
      ))}

      {/* Salesforce cloud watermark */}
      <g opacity="0.04">
        <path d="M230 130c1-1.1 2.3-1.7 3.8-1.7 2 0 3.7 1 4.7 2.6.8-.4 1.7-.6 2.7-.6 3.4 0 5.3 2.8 5.3 5.5 0 3.1-2.5 5.5-5.6 5.5-.5 0-.9-.1-1.2-.1-.9 1.4-2.4 2.4-4.3 2.4-.8 0-1.6-.2-2.3-.6-.9 1.2-2.4 2.1-4.1 2.1-1.9 0-3.5-1-4.4-2.6-.4.1-.8.1-1.2.1-3.1 0-5.2-2.5-5.2-5.6 0-2.3 1.4-4.2 3.4-5.1-.1-.5-.2-1.1-.2-1.8 0-1.8 1.4-3.2 3.2-3.2 1.2 0 2.2.6 2.8 1.5.7-.6 1.6-1 2.6-1z"
          fill="#00A1E0" />
      </g>

      {/* Moving deal animation — DELETED (infinite loop) */}
    </svg>
  );
}

/** Custom Development — IDE with real code structure and terminal */
function DevIllustration() {
  return (
    <svg viewBox="0 0 320 160" fill="none" className="w-full h-full">
      {/* Editor window */}
      <g>
        <rect x="20" y="14" width="200" height="132" rx="8" fill="white" />
        <rect x="20" y="14" width="200" height="132" rx="8" stroke="#e5e7eb" strokeWidth="0.5" />
        {/* Title bar */}
        <rect x="20" y="14" width="200" height="20" rx="8" fill="#fafafa" />
        <rect x="20" y="28" width="200" height="6" fill="#fafafa" />
        {/* Traffic lights */}
        <circle cx="33" cy="24" r="3" fill="#FF5F57" />
        <circle cx="43" cy="24" r="3" fill="#FEBC2E" />
        <circle cx="53" cy="24" r="3" fill="#28C840" />
        {/* Tab */}
        <rect x="68" y="18" width="50" height="14" rx="3" fill="white" />
        <text x="77" y="28" fontSize="4.5" fill="#1d1d1f" fontFamily="monospace" opacity="0.6">app.tsx</text>
        <rect x="120" y="18" width="46" height="14" rx="3" fill="transparent" />
        <text x="128" y="28" fontSize="4.5" fill="#86868b" fontFamily="monospace" opacity="0.4">utils.ts</text>

        {/* Line numbers */}
        {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9].map(i => (
          <text key={i} x="30" y={47 + i * 11} fontSize="4" fill="#d2d2d7" fontFamily="monospace" textAnchor="end">
            {i + 1}
          </text>
        ))}

        {/* Code lines with syntax coloring */}
        <g>
          {/* import statement */}
          <text x="38" y="47" fontSize="4.5" fontFamily="monospace" fill="#9333ea" opacity="0.7">import</text>
          <text x="60" y="47" fontSize="4.5" fontFamily="monospace" fill="#1d1d1f" opacity="0.6">{"{ Dashboard }"}</text>
          <text x="110" y="47" fontSize="4.5" fontFamily="monospace" fill="#9333ea" opacity="0.7">from</text>
          <text x="125" y="47" fontSize="4.5" fontFamily="monospace" fill="#14b8a6">{`'@/components'`}</text>

          <text x="38" y="58" fontSize="4.5" fontFamily="monospace" fill="#9333ea" opacity="0.7">import</text>
          <text x="60" y="58" fontSize="4.5" fontFamily="monospace" fill="#1d1d1f" opacity="0.6">{"{ useERP }"}</text>
          <text x="103" y="58" fontSize="4.5" fontFamily="monospace" fill="#9333ea" opacity="0.7">from</text>
          <text x="118" y="58" fontSize="4.5" fontFamily="monospace" fill="#14b8a6">{`'@/hooks'`}</text>
        </g>

        <g>
          {/* Empty line 3 */}
          {/* Function */}
          <text x="38" y="80" fontSize="4.5" fontFamily="monospace" fill="#2563eb" opacity="0.7">export default</text>
          <text x="92" y="80" fontSize="4.5" fontFamily="monospace" fill="#dc2626" opacity="0.6">function</text>
          <text x="122" y="80" fontSize="4.5" fontFamily="monospace" fill="#1d1d1f" opacity="0.7">App() {"{"}</text>

          <text x="44" y="91" fontSize="4.5" fontFamily="monospace" fill="#2563eb" opacity="0.6">const</text>
          <text x="64" y="91" fontSize="4.5" fontFamily="monospace" fill="#1d1d1f" opacity="0.6">data = </text>
          <text x="90" y="91" fontSize="4.5" fontFamily="monospace" fill="#dc2626" opacity="0.5">useERP</text>
          <text x="112" y="91" fontSize="4.5" fontFamily="monospace" fill="#1d1d1f" opacity="0.5">(config)</text>

          <text x="44" y="102" fontSize="4.5" fontFamily="monospace" fill="#9333ea" opacity="0.6">return</text>
          <text x="67" y="102" fontSize="4.5" fontFamily="monospace" fill="#1d1d1f" opacity="0.5">{"<Dashboard"}</text>
          <text x="107" y="102" fontSize="4.5" fontFamily="monospace" fill="#14b8a6" opacity="0.5">data=</text>
          <text x="122" y="102" fontSize="4.5" fontFamily="monospace" fill="#1d1d1f" opacity="0.5">{"{data} />"}</text>

          <text x="38" y="113" fontSize="4.5" fontFamily="monospace" fill="#1d1d1f" opacity="0.5">{"}"}</text>
        </g>

        {/* Cursor blink — DELETED (infinite loop) */}
      </g>

      {/* Terminal panel */}
      <g>
        <rect x="232" y="14" width="68" height="132" rx="8" fill="#1d1d1f" />
        {/* Terminal header */}
        <text x="242" y="30" fontSize="4.5" fontWeight="600" fill="white" fontFamily="monospace" opacity="0.4">Terminal</text>
        {/* Terminal output */}
        <text x="240" y="48" fontSize="4" fill="#14b8a6" fontFamily="monospace" opacity="0.6">$</text>
        <text x="248" y="48" fontSize="4" fill="white" fontFamily="monospace" opacity="0.4">npm run dev</text>
        <text x="240" y="60" fontSize="3.5" fill="#14b8a6" fontFamily="monospace" opacity="0.5">
          ✓ Ready in 1.2s
        </text>
        <text x="240" y="72" fontSize="3.5" fill="#86868b" fontFamily="monospace" opacity="0.3">
          localhost:3000
        </text>

        {/* Build output lines */}
        {[0, 1, 2, 3].map(i => (
          <rect key={i} x="240" y={84 + i * 10} width={40 - i * 6} height="3" rx="1.5"
            fill="#14b8a6" opacity={0.15 - i * 0.03} />
        ))}

        {/* Blinking cursor — DELETED (infinite loop) */}
      </g>
    </svg>
  );
}

const services = [
  {
    title: "Microsoft Dynamics 365 Business Central",
    partner: "microsoft" as const,
    metric: "ERP Platform",
    metricLabel: "All-in-one",
    description:
      "End-to-end ERP for finance, supply chain, and operations — built on the Microsoft platform you already know.",
    illustration: BCIllustration,
    href: "/services/business-central",
  },
  {
    title: "Salesforce Solutions",
    partner: "salesforce" as const,
    metric: "CRM Platform",
    metricLabel: "Scalable",
    description:
      "CRM that scales with you — from lead management to customer success, fully customized for your workflow.",
    illustration: SFIllustration,
    href: "/services/salesforce",
  },
  {
    title: "Custom Application Development",
    partner: null,
    metric: "Bespoke Software",
    metricLabel: "Tailored",
    description:
      "Off-the-shelf doesn't cut it? We build tailored solutions that fit your business like a glove.",
    illustration: DevIllustration,
    href: "/services/custom-development",
  },
];

export default function ServicesOverview() {
  return (
    <section className="pb-section pt-4 bg-white">
      <div className="container-apple">
        <FadeIn className="mb-8">
          <p className="text-brand-500 text-caption font-semibold tracking-wide uppercase mb-3">
            Services
          </p>
          <h2 className="text-display-sm text-apple-black max-w-2xl">
            Technology that works{" "}
            <span className="text-gradient">for you.</span>
          </h2>
          <p className="text-body-lg text-apple-gray mt-3 max-w-xl">
            Comprehensive ERP, CRM, and custom software solutions designed for growing businesses.
          </p>
        </FadeIn>

        <FadeInStagger className="grid grid-cols-1 lg:grid-cols-3 gap-4 md:gap-5">
          {services.map((service, i) => {
            const Illustration = service.illustration;
            return (
              <FadeInChild
                key={service.title}
                index={i}
              >
                <Link href={service.href} className="block group">
                  <div className="rounded-[22px] bg-white border border-black/[0.04] shadow-card hover:shadow-card-hover transition-all duration-500 overflow-hidden cursor-pointer">
                    {/* Illustration area — reduced on mobile */}
                    <div className="relative h-[120px] sm:h-[180px] bg-apple-gray-light/60 overflow-hidden" aria-hidden="true">
                      <Illustration />
                      {/* Partner badge overlay */}
                      {service.partner && (
                        <div className="absolute top-3 left-3 flex items-center gap-1.5 bg-white/80 backdrop-blur-sm rounded-full px-2.5 py-1">
                          {service.partner === "microsoft" && (
                            <>
                              <MicrosoftLogo size={12} />
                              <span className="text-[0.5625rem] font-medium text-apple-gray-dark">Microsoft</span>
                            </>
                          )}
                          {service.partner === "salesforce" && (
                            <>
                              <SalesforceLogo size={20} />
                            </>
                          )}
                        </div>
                      )}
                    </div>

                    {/* Content */}
                    <div className="p-5 md:p-6">
                      {/* Metric badge */}
                      <div className="flex items-center gap-2 mb-3">
                        <div className="w-1.5 h-1.5 rounded-full bg-brand-500" />
                        <span className="text-[0.6875rem] font-semibold text-apple-gray-dark tracking-tight">
                          {service.metric}
                        </span>
                        <span className="text-[0.625rem] text-apple-gray">
                          {service.metricLabel}
                        </span>
                      </div>

                      <h3 className="text-[1.0625rem] font-semibold text-apple-black leading-snug mb-2 group-hover:text-brand-500 transition-colors duration-300">
                        {service.title}
                      </h3>
                      <p className="text-[0.8125rem] text-apple-gray leading-relaxed">
                        {service.description}
                      </p>

                      <div className="mt-4 text-brand-500 text-sm font-medium flex items-center gap-1 opacity-100 sm:opacity-0 sm:group-hover:opacity-100 transition-all duration-300 sm:translate-y-1 sm:group-hover:translate-y-0">
                        Learn more
                        <svg width="14" height="14" viewBox="0 0 16 16" fill="none">
                          <path d="M6 3L11 8L6 13" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
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
  );
}
