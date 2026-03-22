"use client";

import FadeIn, { FadeInStagger, FadeInChild } from "@/components/ui/FadeIn";

/** SMB Focus — growth analytics dashboard with bar chart, ring gauge, KPI cards */
function SMBVisual() {
  const bars = [18, 28, 22, 40, 50, 60, 72];
  return (
    <svg viewBox="0 0 260 140" fill="none" className="w-full h-full">
      {/* Grid */}
      {[0, 1, 2, 3, 4, 5].map((i) => (
        <line key={i} x1="8" y1={15 + i * 22} x2="252" y2={15 + i * 22} stroke="white" strokeWidth="0.3" opacity="0.06" />
      ))}

      {/* ── Bar chart ── */}
      {bars.map((h, i) => (
        <rect key={i} x={16 + i * 13} y={115 - h} width="8" height={h} rx="2"
          fill="url(#smb-bar)" opacity={0.15 + i * 0.04} />
      ))}
      {/* Trend line */}
      <path d="M20 100 C35 85, 42 90, 50 82 S65 65, 75 70 S90 52, 105 44"
        stroke="#14b8a6" strokeWidth="2" fill="none" opacity="0.55" strokeLinecap="round" />
      <circle cx="105" cy="44" r="3" fill="#14b8a6" opacity="0.6" />
      {/* Axis */}
      <text x="16" y="126" fontSize="3.2" fill="white" fontFamily="Inter, sans-serif" opacity="0.3">Q1</text>
      <text x="95" y="126" fontSize="3.2" fill="white" fontFamily="Inter, sans-serif" opacity="0.3">Q7</text>

      {/* ── Growth ring ── */}
      <g>
        <circle cx="148" cy="62" r="28" stroke="white" strokeWidth="1" opacity="0.08" />
        <circle cx="148" cy="62" r="28" stroke="url(#smb-ring)" strokeWidth="3.5"
          fill="none" opacity="0.5" strokeLinecap="round"
          strokeDasharray={`${Math.round(2 * Math.PI * 28 * 0.78)} ${Math.round(2 * Math.PI * 28 * 0.22)}`}
          transform="rotate(-90 148 62)"
          strokeDashoffset="0" />
        <text x="148" y="58" fontSize="15" fontWeight="800" fill="white" textAnchor="middle" fontFamily="Inter, sans-serif" opacity="0.7">3×</text>
        <text x="148" y="70" fontSize="4.5" fill="white" textAnchor="middle" fontFamily="Inter, sans-serif" opacity="0.4">Growth</text>
      </g>

      {/* ── KPI cards ── */}
      {[
        { y: 20, label: "Team Size", value: "48→120", iconD: "M214 26 A3 3 0 1 1 213.99 26 M210 32 C210 29 218 29 218 32" },
        { y: 55, label: "Revenue", value: "+156%", iconD: "M210 64 L214 58 L218 61 L222 55" },
        { y: 90, label: "Efficiency", value: "94%", iconD: "M211 97 L214 100 L220 92" },
      ].map((kpi) => (
        <g key={kpi.label}>
          <rect x="198" y={kpi.y} width="54" height="28" rx="6" fill="white" opacity="0.07" />
          <rect x="198" y={kpi.y} width="54" height="28" rx="6" stroke="white" strokeWidth="0.5" opacity="0.1" />
          <path d={kpi.iconD} stroke="#14b8a6" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" fill="none" opacity="0.6" />
          <text x="228" y={kpi.y + 11} fontSize="3.5" fill="white" fontFamily="Inter, sans-serif" opacity="0.4">{kpi.label}</text>
          <text x="228" y={kpi.y + 21} fontSize="7" fontWeight="700" fill="white" fontFamily="Inter, sans-serif" opacity="0.7">{kpi.value}</text>
        </g>
      ))}

      <defs>
        <linearGradient id="smb-bar" x1="16" y1="115" x2="105" y2="40">
          <stop offset="0%" stopColor="#2563eb" /><stop offset="100%" stopColor="#14b8a6" />
        </linearGradient>
        <linearGradient id="smb-ring" x1="120" y1="34" x2="176" y2="90">
          <stop offset="0%" stopColor="#2563eb" /><stop offset="100%" stopColor="#14b8a6" />
        </linearGradient>
      </defs>
    </svg>
  );
}

/** End-to-End — project delivery pipeline with timeline + Gantt bars */
function E2EVisual() {
  const phases = [
    { x: 22, label: "Discover", done: true, color: "#2563eb" },
    { x: 72, label: "Design", done: true, color: "#2563eb" },
    { x: 122, label: "Build", done: true, color: "#14b8a6" },
    { x: 172, label: "Test", done: false, active: true, color: "#14b8a6" },
    { x: 222, label: "Go-Live", done: false, color: "#14b8a6" },
  ];
  const gantt = [
    { x: 22, w: 40, y: 74, color: "#2563eb" },
    { x: 50, w: 55, y: 84, color: "#2563eb" },
    { x: 88, w: 70, y: 94, color: "#14b8a6" },
    { x: 142, w: 45, y: 104, color: "#14b8a6" },
    { x: 202, w: 35, y: 114, color: "#14b8a6" },
  ];
  return (
    <svg viewBox="0 0 260 140" fill="none" className="w-full h-full">
      {/* Timeline backbone */}
      <line x1="32" y1="30" x2="232" y2="30" stroke="white" strokeWidth="0.5" opacity="0.12" />

      {/* Phase nodes */}
      {phases.map((p) => (
        <g key={p.label}>
          <circle cx={p.x + 10} cy="30" r="10" stroke={p.color} strokeWidth="1"
            fill={p.done ? p.color : "none"} opacity={p.done ? 0.3 : 0.2}
            strokeDasharray={!p.done && !("active" in p && p.active) ? "2 2" : "none"} />
          {p.done && (
            <path d={`M${p.x + 5} 30 L${p.x + 9} 34 L${p.x + 16} 25`}
              stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" fill="none" opacity="0.7" />
          )}
          <text x={p.x + 10} y="50" fontSize="4" fontWeight="500" fill="white" textAnchor="middle" fontFamily="Inter, sans-serif" opacity="0.45">{p.label}</text>
        </g>
      ))}

      {/* Connectors */}
      {[0, 1, 2, 3].map((i) => (
        <line key={i} x1={phases[i].x + 20} y1="30" x2={phases[i + 1].x} y2="30"
          stroke="url(#e2e-ln)" strokeWidth="1.5" opacity="0.2"
          strokeDasharray={i >= 3 ? "2 2" : "none"} />
      ))}

      {/* Gantt label */}
      <text x="14" y="70" fontSize="3.2" fontWeight="600" fill="white" fontFamily="Inter, sans-serif" opacity="0.25" letterSpacing="0.5">TIMELINE</text>

      {/* Gantt bars */}
      {gantt.map((bar, i) => (
        <rect key={i} x={bar.x} y={bar.y} width={bar.w} height="5" rx="2.5"
          fill={bar.color} opacity={0.2 + i * 0.04} />
      ))}

      {/* "One Partner" badge */}
      <g>
        <rect x="186" y="60" width="62" height="18" rx="9" fill="white" opacity="0.08" />
        <rect x="186" y="60" width="62" height="18" rx="9" stroke="white" strokeWidth="0.5" opacity="0.12" />
        <circle cx="196" cy="69" r="3.5" fill="#14b8a6" opacity="0.4" />
        <path d="M194 69 L195.5 70.5 L198 67.5" stroke="#14b8a6" strokeWidth="1" strokeLinecap="round" fill="none" opacity="0.7" />
        <text x="203" y="71.5" fontSize="3.8" fontWeight="600" fill="white" fontFamily="Inter, sans-serif" opacity="0.5">One Partner</text>
      </g>

      <defs>
        <linearGradient id="e2e-ln" x1="32" y1="30" x2="232" y2="30">
          <stop offset="0%" stopColor="#2563eb" /><stop offset="100%" stopColor="#14b8a6" />
        </linearGradient>
      </defs>
    </svg>
  );
}

/** Certified Experts — dual credential cards with star rating + project count */
function CertVisual() {
  return (
    <svg viewBox="0 0 260 140" fill="none" className="w-full h-full">
      {/* ── Microsoft credential card ── */}
      <g>
        <rect x="12" y="14" width="108" height="72" rx="8" fill="white" opacity="0.07" />
        <rect x="12" y="14" width="108" height="72" rx="8" stroke="white" strokeWidth="0.5" opacity="0.12" />
        <rect x="24" y="26" width="6" height="6" fill="#F25022" opacity="0.7" rx="0.5" />
        <rect x="31.5" y="26" width="6" height="6" fill="#7FBA00" opacity="0.7" rx="0.5" />
        <rect x="24" y="33.5" width="6" height="6" fill="#00A4EF" opacity="0.7" rx="0.5" />
        <rect x="31.5" y="33.5" width="6" height="6" fill="#FFB900" opacity="0.7" rx="0.5" />
        <text x="44" y="32" fontSize="4.5" fontWeight="600" fill="white" fontFamily="Inter, sans-serif" opacity="0.6">Dynamics 365</text>
        <text x="44" y="40" fontSize="3.5" fill="white" fontFamily="Inter, sans-serif" opacity="0.4">Business Central</text>
        <line x1="24" y1="50" x2="108" y2="50" stroke="white" strokeWidth="0.3" opacity="0.08" />
        <circle cx="32" cy="64" r="7" fill="#2563eb" opacity="0.15" />
        <circle cx="32" cy="64" r="7" stroke="#2563eb" strokeWidth="0.8" opacity="0.3" />
        <path d="M28 64 L31 67 L36 61" stroke="#2563eb" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" fill="none" opacity="0.7" />
        <text x="44" y="63" fontSize="4" fontWeight="600" fill="white" fontFamily="Inter, sans-serif" opacity="0.5">Certified</text>
        <text x="44" y="71" fontSize="3.5" fill="white" fontFamily="Inter, sans-serif" opacity="0.35">Partner</text>
      </g>

      {/* ── Salesforce credential card ── */}
      <g>
        <rect x="140" y="14" width="108" height="72" rx="8" fill="white" opacity="0.07" />
        <rect x="140" y="14" width="108" height="72" rx="8" stroke="white" strokeWidth="0.5" opacity="0.12" />
        <path d="M159 28c.6-.6 1.4-1 2.3-1 1.2 0 2.1.6 2.7 1.5.5-.2 1-.3 1.5-.3 2 0 3 1.4 3 3s-1.4 3-3.1 3c-.2 0-.5 0-.7-.1-.5.8-1.3 1.3-2.3 1.3-.5 0-.9-.1-1.3-.3-.5.7-1.3 1.1-2.2 1.1-1 0-1.9-.5-2.4-1.3-.2 0-.4.1-.7.1-1.5 0-2.7-1.2-2.7-2.7 0-1.1.7-2 1.6-2.5 0-.2-.1-.5-.1-.7 0-.7.5-1.2 1.2-1.2.5 0 1 .3 1.3.7.4-.3.8-.5 1.3-.5z" fill="#00A1E0" opacity="0.7" />
        <text x="175" y="32" fontSize="4.5" fontWeight="600" fill="white" fontFamily="Inter, sans-serif" opacity="0.6">Salesforce</text>
        <text x="175" y="40" fontSize="3.5" fill="white" fontFamily="Inter, sans-serif" opacity="0.4">CRM Platform</text>
        <line x1="152" y1="50" x2="236" y2="50" stroke="white" strokeWidth="0.3" opacity="0.08" />
        <circle cx="160" cy="64" r="7" fill="#00A1E0" opacity="0.15" />
        <circle cx="160" cy="64" r="7" stroke="#00A1E0" strokeWidth="0.8" opacity="0.3" />
        <path d="M156 64 L159 67 L164 61" stroke="#00A1E0" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" fill="none" opacity="0.7" />
        <text x="172" y="63" fontSize="4" fontWeight="600" fill="white" fontFamily="Inter, sans-serif" opacity="0.5">Certified</text>
        <text x="172" y="71" fontSize="3.5" fill="white" fontFamily="Inter, sans-serif" opacity="0.35">Partner</text>
      </g>

      {/* ── Project count ── */}
      <g>
        <rect x="12" y="96" width="68" height="34" rx="8" fill="white" opacity="0.07" />
        <rect x="12" y="96" width="68" height="34" rx="8" stroke="white" strokeWidth="0.5" opacity="0.1" />
        <text x="46" y="114" fontSize="14" fontWeight="800" fill="white" textAnchor="middle" fontFamily="Inter, sans-serif" opacity="0.65">50+</text>
        <text x="46" y="125" fontSize="3.5" fill="white" textAnchor="middle" fontFamily="Inter, sans-serif" opacity="0.35">Implementations</text>
      </g>

      {/* ── Star rating ── */}
      <g>
        <rect x="92" y="96" width="90" height="34" rx="8" fill="white" opacity="0.07" />
        <rect x="92" y="96" width="90" height="34" rx="8" stroke="white" strokeWidth="0.5" opacity="0.1" />
        {[0, 1, 2, 3, 4].map((i) => (
          <path key={i}
            d={`M${106 + i * 12} 110 l1.6-3.2 3.5-.5-2.5-2.5.6-3.5-3.2 1.7-3.2-1.7.6 3.5-2.5 2.5 3.5.5z`}
            fill="#14b8a6" opacity={0.35 + i * 0.08} />
        ))}
        <text x="172" y="111" fontSize="7" fontWeight="700" fill="white" fontFamily="Inter, sans-serif" opacity="0.65">4.9</text>
        <text x="137" y="125" fontSize="3.5" fill="white" textAnchor="middle" fontFamily="Inter, sans-serif" opacity="0.35">Client Satisfaction</text>
      </g>

      {/* ── Years badge ── */}
      <g>
        <rect x="194" y="96" width="54" height="34" rx="8" fill="white" opacity="0.07" />
        <rect x="194" y="96" width="54" height="34" rx="8" stroke="white" strokeWidth="0.5" opacity="0.1" />
        <text x="221" y="115" fontSize="12" fontWeight="800" fill="white" textAnchor="middle" fontFamily="Inter, sans-serif" opacity="0.65">10+</text>
        <text x="221" y="125" fontSize="3.5" fill="white" textAnchor="middle" fontFamily="Inter, sans-serif" opacity="0.35">Years Exp.</text>
      </g>
    </svg>
  );
}

/** Budget-Friendly — cost comparison + transparent quote + no-hidden-fees badge */
function BudgetVisual() {
  return (
    <svg viewBox="0 0 260 140" fill="none" className="w-full h-full">
      {/* ── Cost comparison bars ── */}
      <g>
        <rect x="22" y="22" width="28" height="85" rx="4" fill="white" opacity="0.06" />
        <rect x="22" y="22" width="28" height="85" rx="4" stroke="white" strokeWidth="0.5" opacity="0.1" />
        <text x="36" y="115" fontSize="3.2" fill="white" textAnchor="middle" fontFamily="Inter, sans-serif" opacity="0.35">Enterprise</text>
        <text x="36" y="18" fontSize="5" fontWeight="700" fill="white" textAnchor="middle" fontFamily="Inter, sans-serif" opacity="0.45">$$$</text>

        <rect x="58" y="52" width="28" height="55" rx="4" fill="url(#budget-fill)" opacity="0.25" />
        <rect x="58" y="52" width="28" height="55" rx="4" stroke="url(#budget-fill)" strokeWidth="0.8" opacity="0.3" />
        <text x="72" y="115" fontSize="3.2" fill="white" textAnchor="middle" fontFamily="Inter, sans-serif" opacity="0.35">ERP Biz</text>
        <text x="72" y="48" fontSize="5" fontWeight="700" fill="#14b8a6" textAnchor="middle" fontFamily="Inter, sans-serif" opacity="0.7">$</text>

        <g>
          <rect x="38" y="30" width="30" height="14" rx="7" fill="#14b8a6" opacity="0.15" />
          <rect x="38" y="30" width="30" height="14" rx="7" stroke="#14b8a6" strokeWidth="0.6" opacity="0.25" />
          <text x="53" y="40" fontSize="4.5" fontWeight="700" fill="#14b8a6" textAnchor="middle" fontFamily="Inter, sans-serif" opacity="0.7">−40%</text>
        </g>
      </g>

      {/* ── Quote breakdown ── */}
      <g>
        <rect x="100" y="14" width="100" height="112" rx="8" fill="white" opacity="0.07" />
        <rect x="100" y="14" width="100" height="112" rx="8" stroke="white" strokeWidth="0.5" opacity="0.1" />
        <text x="150" y="31" fontSize="5" fontWeight="700" fill="white" textAnchor="middle" fontFamily="Inter, sans-serif" opacity="0.55">Transparent Quote</text>
        <line x1="110" y1="36" x2="190" y2="36" stroke="white" strokeWidth="0.3" opacity="0.1" />

        {[
          { label: "Implementation", amount: "$24,000", w: 60 },
          { label: "Customization", amount: "$12,500", w: 38 },
          { label: "Training", amount: "$4,800", w: 18 },
          { label: "Support (yr 1)", amount: "$6,000", w: 24 },
        ].map((item, i) => (
          <g key={item.label}>
            <text x="110" y={50 + i * 17} fontSize="3.8" fill="white" fontFamily="Inter, sans-serif" opacity="0.4">{item.label}</text>
            <text x="190" y={50 + i * 17} fontSize="4" fontWeight="600" fill="white" fontFamily="Inter, sans-serif" opacity="0.6" textAnchor="end">{item.amount}</text>
            <rect x="110" y={53 + i * 17} width={item.w} height="2.5" rx="1.25" fill="url(#budget-fill)" opacity={0.2 + i * 0.05} />
          </g>
        ))}

        <g>
          <line x1="110" y1="110" x2="190" y2="110" stroke="url(#budget-fill)" strokeWidth="1" opacity="0.3" />
          <text x="110" y="122" fontSize="4" fontWeight="700" fill="white" fontFamily="Inter, sans-serif" opacity="0.5">Total</text>
          <text x="190" y="122" fontSize="6.5" fontWeight="800" fill="#14b8a6" fontFamily="Inter, sans-serif" opacity="0.8" textAnchor="end">$47,300</text>
        </g>
      </g>

      {/* ── No hidden fees badge ── */}
      <g>
        <circle cx="224" cy="40" r="16" fill="#14b8a6" opacity="0.12" />
        <circle cx="224" cy="40" r="16" stroke="#14b8a6" strokeWidth="0.8" opacity="0.25" />
        <path d="M217 40 L222 45 L232 34" stroke="#14b8a6" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" fill="none" opacity="0.6" />
        <text x="224" y="62" fontSize="3.8" fontWeight="600" fill="#14b8a6" textAnchor="middle" fontFamily="Inter, sans-serif" opacity="0.5">No Hidden</text>
        <text x="224" y="68" fontSize="3.8" fontWeight="600" fill="#14b8a6" textAnchor="middle" fontFamily="Inter, sans-serif" opacity="0.5">Fees</text>
      </g>

      <g>
        <rect x="208" y="82" width="48" height="16" rx="8" fill="white" opacity="0.06" />
        <rect x="208" y="82" width="48" height="16" rx="8" stroke="white" strokeWidth="0.5" opacity="0.1" />
        <text x="232" y="93" fontSize="3.5" fontWeight="600" fill="white" textAnchor="middle" fontFamily="Inter, sans-serif" opacity="0.4">Fixed Price</text>
      </g>

      <defs>
        <linearGradient id="budget-fill" x1="0" y1="0" x2="260" y2="140">
          <stop offset="0%" stopColor="#2563eb" /><stop offset="100%" stopColor="#14b8a6" />
        </linearGradient>
      </defs>
    </svg>
  );
}

const values = [
  {
    title: "SMB-Focused",
    description:
      "We specialize in businesses like yours. No enterprise bloat, no cookie-cutter solutions.",
    visual: SMBVisual,
    gradient: "from-brand-500 to-brand-600",
  },
  {
    title: "End-to-End Delivery",
    description:
      "From discovery to go-live to ongoing support — one team, one relationship.",
    visual: E2EVisual,
    gradient: "from-teal-500 to-teal-600",
  },
  {
    title: "Certified Experts",
    description:
      "Deep expertise in Business Central and Salesforce, backed by real-world implementations.",
    visual: CertVisual,
    gradient: "from-brand-500 to-teal-500",
  },
  {
    title: "Budget-Friendly",
    description:
      "Enterprise-grade solutions at SMB-friendly pricing. Transparent quotes, no surprises.",
    visual: BudgetVisual,
    gradient: "from-teal-500 to-brand-500",
  },
];

export default function ValueProps() {
  return (
    <section className="py-section bg-apple-black relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-[600px] h-[600px] bg-brand-500/5 rounded-full blur-[120px]" />
        <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-teal-500/5 rounded-full blur-[100px]" />
      </div>

      <div className="container-apple relative z-10">
        <FadeIn className="mb-10">
          <p className="text-brand-400 text-caption font-semibold tracking-wide uppercase mb-3">
            Why Us
          </p>
          <h2 className="text-display-sm text-white max-w-2xl">
            Built different,{" "}
            <span className="text-gradient">for a reason.</span>
          </h2>
          <p className="text-body-lg text-apple-gray mt-3 max-w-xl">
            We bring enterprise-grade technology to growing businesses — without the enterprise price tag.
          </p>
        </FadeIn>

        <FadeInStagger className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-5">
          {values.map((item, index) => {
            const Visual = item.visual;
            return (
              <FadeInChild
                key={item.title}
                index={index}
              >
                <div className="group card-hover-dark">
                  {/* Illustration */}
                  <div className="card-shimmer-dark relative h-[140px] sm:h-[160px] overflow-hidden" aria-hidden="true">
                    <Visual />
                  </div>

                  {/* Content */}
                  <div className="card-content p-5 md:p-6">
                    <div className="flex items-center gap-2 mb-3">
                      <div className={`w-1.5 h-1.5 rounded-full bg-gradient-to-r ${item.gradient}`} />
                      <span className="text-[0.6875rem] font-semibold text-white/60 tracking-tight">
                        Differentiator
                      </span>
                    </div>
                    <h3 className="text-[1.0625rem] font-semibold text-white leading-snug mb-2 group-hover:text-teal-400 transition-colors duration-300">
                      {item.title}
                    </h3>
                    <p className="text-[0.8125rem] text-white/50 leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>
              </FadeInChild>
            );
          })}
        </FadeInStagger>
      </div>
    </section>
  );
}
