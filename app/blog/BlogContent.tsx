"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import CTABanner from "@/components/ui/CTABanner";

const ease = [0.21, 0.45, 0.27, 0.9] as const;

/** Article illustration SVGs for each topic */
function ERPvsQBVisual() {
  return (
    <motion.svg viewBox="0 0 280 120" fill="none" className="w-full h-full">
      {/* QB side */}
      <motion.g initial={{ opacity: 0, x: -6 }} whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }} transition={{ duration: 0.4, delay: 0.2, ease }}>
        <rect x="30" y="25" width="80" height="70" rx="6" fill="#2CA01C" opacity="0.06" />
        <rect x="30" y="25" width="80" height="70" rx="6" stroke="#2CA01C" strokeWidth="0.8" opacity="0.1" />
        <text x="70" y="45" fontSize="6" fontWeight="600" fill="#2CA01C" textAnchor="middle" fontFamily="Inter, sans-serif" opacity="0.3">QuickBooks</text>
        {[0, 1, 2].map(i => (
          <rect key={i} x="42" y={54 + i * 10} width={44 - i * 10} height="4" rx="2" fill="#2CA01C" opacity={0.08 - i * 0.02} />
        ))}
      </motion.g>
      {/* Arrow */}
      <motion.path d="M120 60 L155 60" stroke="url(#blog1)" strokeWidth="2" strokeLinecap="round" opacity="0.2"
        initial={{ pathLength: 0 }} whileInView={{ pathLength: 1 }}
        viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.4, ease }} />
      <motion.path d="M150 55 L157 60 L150 65" stroke="url(#blog1)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none" opacity="0.2"
        initial={{ opacity: 0 }} whileInView={{ opacity: 0.2 }}
        viewport={{ once: true }} transition={{ delay: 0.7 }} />
      {/* BC side */}
      <motion.g initial={{ opacity: 0, x: 6 }} whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }} transition={{ duration: 0.4, delay: 0.3, ease }}>
        <rect x="165" y="20" width="90" height="80" rx="6" fill="#2563eb" opacity="0.04" />
        <rect x="165" y="20" width="90" height="80" rx="6" stroke="#2563eb" strokeWidth="0.8" opacity="0.08" />
        <rect x="173" y="28" width="5" height="5" fill="#F25022" rx="0.5" />
        <rect x="179" y="28" width="5" height="5" fill="#7FBA00" rx="0.5" />
        <rect x="173" y="34" width="5" height="5" fill="#00A4EF" rx="0.5" />
        <rect x="179" y="34" width="5" height="5" fill="#FFB900" rx="0.5" />
        <text x="195" y="34" fontSize="4.5" fontWeight="600" fill="#1d1d1f" fontFamily="Inter, sans-serif" opacity="0.3">Business Central</text>
        {/* Dashboard elements */}
        <rect x="173" y="48" width="35" height="20" rx="3" fill="#2563eb" opacity="0.06" />
        <rect x="212" y="48" width="35" height="20" rx="3" fill="#14b8a6" opacity="0.06" />
        <motion.path d="M177 62 L185 56 L193 58 L201 52" stroke="#2563eb" strokeWidth="1" fill="none" opacity="0.15" strokeLinecap="round"
          initial={{ pathLength: 0 }} whileInView={{ pathLength: 1 }}
          viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.6, ease }} />
        {[0, 1].map(i => (
          <motion.rect key={i} x="173" y={76 + i * 10} width={60 - i * 15} height="4" rx="2" fill="#2563eb" opacity={0.08 - i * 0.02}
            initial={{ width: 0 }} whileInView={{ width: 60 - i * 15 }}
            viewport={{ once: true }} transition={{ duration: 0.4, delay: 0.7 + i * 0.1, ease }} />
        ))}
      </motion.g>
      <defs>
        <linearGradient id="blog1" x1="120" y1="60" x2="155" y2="60"><stop offset="0%" stopColor="#2CA01C" /><stop offset="100%" stopColor="#2563eb" /></linearGradient>
      </defs>
    </motion.svg>
  );
}

function SpreadsheetVisual() {
  return (
    <motion.svg viewBox="0 0 280 120" fill="none" className="w-full h-full">
      {/* Spreadsheet grid */}
      <motion.g initial={{ opacity: 0, y: 8 }} whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.15, ease }}>
        <rect x="35" y="20" width="100" height="80" rx="5" fill="white" />
        <rect x="35" y="20" width="100" height="80" rx="5" stroke="#e5e7eb" strokeWidth="0.5" />
        <rect x="35" y="20" width="100" height="14" rx="5" fill="#f5f5f7" />
        <rect x="35" y="28" width="100" height="6" fill="#f5f5f7" />
        {[0, 1, 2, 3].map(r => [0, 1, 2].map(c => (
          <rect key={`${r}-${c}`} x={40 + c * 30} y={38 + r * 14} width="24" height="8" rx="1.5" fill="#1d1d1f" opacity={0.04 + (r === 2 && c === 1 ? 0.05 : 0)} />
        )))}
        {/* Warning on a cell */}
        <motion.g initial={{ opacity: 0 }} whileInView={{ opacity: 1 }}
          viewport={{ once: true }} transition={{ delay: 0.5 }}>
          <circle cx="82" cy="68" r="4" fill="#dc2626" opacity="0.15" />
          <text x="82" y="70" fontSize="5" fontWeight="700" fill="#dc2626" textAnchor="middle" opacity="0.4">!</text>
        </motion.g>
      </motion.g>
      {/* Warning signs */}
      {[
        { x: 155, y: 30, label: "Manual errors" },
        { x: 155, y: 52, label: "No automation" },
        { x: 155, y: 74, label: "Data silos" },
        { x: 155, y: 96, label: "No visibility" },
      ].map((sign, i) => (
        <motion.g key={sign.label} initial={{ opacity: 0, x: 6 }} whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }} transition={{ duration: 0.3, delay: 0.4 + i * 0.1, ease }}>
          <rect x={sign.x} y={sign.y - 8} width="90" height="16" rx="4" fill="#dc2626" opacity="0.04" />
          <circle cx={sign.x + 10} cy={sign.y} r="3" fill="#dc2626" opacity="0.15" />
          <text x={sign.x + 10} y={sign.y + 1.5} fontSize="4" fontWeight="700" fill="#dc2626" textAnchor="middle" opacity="0.4">!</text>
          <text x={sign.x + 20} y={sign.y + 2} fontSize="4.5" fill="#dc2626" fontFamily="Inter, sans-serif" opacity="0.3">{sign.label}</text>
        </motion.g>
      ))}
    </motion.svg>
  );
}

function ROIVisual() {
  return (
    <motion.svg viewBox="0 0 280 120" fill="none" className="w-full h-full">
      {/* ROI chart */}
      <motion.g initial={{ opacity: 0, y: 8 }} whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.15, ease }}>
        {/* Axes */}
        <line x1="50" y1="100" x2="250" y2="100" stroke="#1d1d1f" strokeWidth="0.5" opacity="0.1" />
        <line x1="50" y1="20" x2="50" y2="100" stroke="#1d1d1f" strokeWidth="0.5" opacity="0.1" />
        {/* Y labels */}
        <text x="44" y="98" fontSize="4" fill="#86868b" textAnchor="end" fontFamily="Inter, sans-serif">$0</text>
        <text x="44" y="58" fontSize="4" fill="#86868b" textAnchor="end" fontFamily="Inter, sans-serif">$50K</text>
        <text x="44" y="25" fontSize="4" fill="#86868b" textAnchor="end" fontFamily="Inter, sans-serif">$100K</text>
        {/* Investment line (flat) */}
        <motion.path d="M60 75 L240 65" stroke="#dc2626" strokeWidth="1.5" strokeDasharray="4 3" fill="none" opacity="0.15"
          initial={{ pathLength: 0 }} whileInView={{ pathLength: 1 }}
          viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.3, ease }} />
        <text x="244" y="62" fontSize="4" fill="#dc2626" fontFamily="Inter, sans-serif" opacity="0.2">Cost</text>
        {/* ROI line (growing) */}
        <motion.path d="M60 90 Q100 82 130 65 Q160 48 200 35 Q230 25 240 22" stroke="url(#blog6)" strokeWidth="2.5" fill="none" strokeLinecap="round"
          initial={{ pathLength: 0 }} whileInView={{ pathLength: 1 }}
          viewport={{ once: true }} transition={{ duration: 1, delay: 0.5, ease }} />
        <text x="244" y="20" fontSize="4" fill="#14b8a6" fontFamily="Inter, sans-serif" opacity="0.3">ROI</text>
        {/* Fill under ROI curve */}
        <motion.path d="M60 90 Q100 82 130 65 Q160 48 200 35 Q230 25 240 22 V100 H60 Z" fill="url(#blog6)" opacity="0.03"
          initial={{ opacity: 0 }} whileInView={{ opacity: 0.03 }}
          viewport={{ once: true }} transition={{ delay: 1.2 }} />
        {/* Breakeven point */}
        <motion.g initial={{ opacity: 0 }} whileInView={{ opacity: 1 }}
          viewport={{ once: true }} transition={{ delay: 1 }}>
          <line x1="115" y1="70" x2="115" y2="100" stroke="#14b8a6" strokeWidth="1" strokeDasharray="2 2" opacity="0.15" />
          <text x="115" y="108" fontSize="3.5" fill="#14b8a6" textAnchor="middle" fontFamily="Inter, sans-serif" opacity="0.25">Break-even</text>
        </motion.g>
      </motion.g>
      <defs>
        <linearGradient id="blog6" x1="60" y1="90" x2="240" y2="22"><stop offset="0%" stopColor="#2563eb" /><stop offset="100%" stopColor="#14b8a6" /></linearGradient>
      </defs>
    </motion.svg>
  );
}

const articles = [
  { title: "Business Central vs. QuickBooks: When It's Time to Upgrade", category: "ERP", tag: "Comparison", visual: ERPvsQBVisual, href: "/blog/business-central-vs-quickbooks", date: "Mar 10, 2026" },
  { title: "5 Signs Your Business Has Outgrown Spreadsheets", category: "Operations", tag: "Growth", visual: SpreadsheetVisual, href: "/blog/signs-outgrown-spreadsheets", date: "Mar 5, 2026" },
  { title: "The ROI of Business Central for Small Businesses", category: "ERP", tag: "ROI Analysis", visual: ROIVisual, href: "/blog/roi-business-central", date: "Feb 28, 2026" },
];

export default function BlogContent() {
  return (
    <>
      {/* Hero */}
      <section className="relative pt-6 pb-10 md:pt-8 md:pb-14 overflow-hidden">
        <div className="absolute inset-0 mesh-gradient" />
        <div className="container-apple relative z-10">
          <p
            className="text-brand-500 text-caption font-semibold tracking-wide uppercase mb-4">
            Blog
          </p>
          <h1
            className="text-display text-apple-black max-w-2xl">
            Insights for{" "}
            <span className="text-gradient">growing businesses.</span>
          </h1>
          <p
            className="text-body-lg text-apple-gray mt-4 max-w-xl">
            Practical guides, industry insights, and best practices to help you get the most from your business technology.
          </p>
        </div>
      </section>

      {/* Articles grid */}
      <section className="pb-section pt-4">
        <div className="container-apple">
          <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }} transition={{ duration: 0.5, ease }}
            className="mb-6">
            <h2 className="text-display-sm text-apple-black">Latest Articles</h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5">
            {articles.map((article, i) => {
              const Visual = article.visual;

              return (
                <Link key={article.title} href={article.href} className="block">
                  <motion.div
                    initial={{ opacity: 0, y: 24 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-10px" }}
                    transition={{ duration: 0.5, delay: i * 0.06, ease }}
                    className="group rounded-[22px] bg-white border border-black/[0.04] shadow-card hover:shadow-card-hover transition-all duration-500 overflow-hidden cursor-pointer"
                  >
                    {/* Illustration */}
                    <div className="relative h-[180px] sm:h-[140px] bg-apple-gray-light/50 overflow-hidden">
                      <Visual />
                      {/* Category pill */}
                      <div className="absolute top-3 left-3 bg-white/80 backdrop-blur-sm rounded-full px-2.5 py-1">
                        <span className="text-[0.5625rem] font-semibold text-brand-500">{article.category}</span>
                      </div>
                    </div>
                    {/* Content */}
                    <div className="p-5 md:p-6">
                      <div className="flex items-center gap-2 mb-3">
                        <div className="w-1.5 h-1.5 rounded-full bg-brand-500" />
                        <span className="text-[0.6875rem] font-semibold text-apple-gray-dark tracking-tight">{article.tag}</span>
                        <span className="text-[0.625rem] text-apple-gray">{article.date}</span>
                      </div>
                      <h3 className="text-[1.0625rem] font-semibold text-apple-black leading-snug group-hover:text-brand-500 transition-colors duration-300">
                        {article.title}
                      </h3>
                    </div>
                  </motion.div>
                </Link>
              );
            })}
          </div>

          <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }}
            viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.5 }}
            className="mt-12 max-w-md mx-auto text-center">
            <h3 className="text-headline text-apple-black mb-2">Stay in the loop</h3>
            <p className="text-caption text-apple-gray mb-5">Get notified when we publish new articles and insights.</p>
            <form className="flex gap-2" onSubmit={(e) => { e.preventDefault(); }}>
              <input
                type="email"
                placeholder="your@email.com"
                required
                className="flex-1 px-4 py-3 text-sm bg-white border border-apple-gray-mid/50 rounded-full focus:outline-none focus:border-brand-500 transition-colors"
                aria-label="Email address for newsletter"
              />
              <button
                type="submit"
                className="px-6 py-3 text-sm font-medium text-white bg-brand-500 hover:bg-brand-600 rounded-full transition-colors"
              >
                Subscribe
              </button>
            </form>
          </motion.div>
        </div>
      </section>

      <CTABanner title="Have a question about ERP or CRM?" subtitle="We're always happy to help." buttonText="Ask Us Anything" buttonHref="/contact" />
    </>
  );
}
