"use client";

import { motion } from "framer-motion";

const ease = [0.21, 0.45, 0.27, 0.9] as const;

/**
 * Sophisticated dashboard composition — floating UI cards at angles
 * showing ERP financials, CRM pipeline, and analytics connected together.
 * Apple-quality: refined shadows, real UI patterns, layered depth.
 */
export default function HeroGraphic({ className = "" }: { className?: string }) {
  return (
    <div className={`relative w-full aspect-square max-w-[540px] mx-auto ${className}`}>
      {/* Ambient glow */}
      <div className="absolute inset-0 bg-gradient-radial from-brand-500/[0.07] via-transparent to-transparent scale-150" />

      {/* ─── Back layer: Analytics card ─── */}
      <motion.div
        initial={{ opacity: 0, y: 40, rotate: -3 }}
        animate={{ opacity: 1, y: 0, rotate: -3 }}
        transition={{ duration: 0.9, delay: 0.6, ease }}
        className="absolute top-[8%] right-[2%] w-[65%] animate-float-slow"
      >
        <div className="bg-white rounded-2xl shadow-elevated p-5 border border-black/[0.04]">
          {/* Title bar */}
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-brand-500" />
              <span className="text-[0.625rem] font-semibold text-apple-black">Revenue Analytics</span>
            </div>
            <span className="text-[0.5625rem] text-apple-gray">Q1 2026</span>
          </div>
          {/* Bar chart */}
          <div className="flex items-end gap-[6px] h-[72px] mb-3">
            {[45, 62, 38, 78, 55, 88, 72, 95, 68, 82, 90, 85].map((h, i) => (
              <motion.div
                key={i}
                initial={{ scaleY: 0 }}
                animate={{ scaleY: 1 }}
                transition={{ duration: 0.5, delay: 0.9 + i * 0.04, ease }}
                style={{ height: `${h}%`, originY: 1 }}
                className={`flex-1 rounded-sm ${
                  i >= 9 ? "bg-gradient-to-t from-brand-500 to-teal-400" : "bg-brand-100"
                }`}
              />
            ))}
          </div>
          {/* Stats row */}
          <div className="flex gap-4">
            <div>
              <p className="text-[0.5rem] text-apple-gray uppercase tracking-wider">Revenue</p>
              <p className="text-[0.75rem] font-bold text-apple-black">$1.24M</p>
            </div>
            <div>
              <p className="text-[0.5rem] text-apple-gray uppercase tracking-wider">Growth</p>
              <p className="text-[0.75rem] font-bold text-teal-500">+23.4%</p>
            </div>
          </div>
        </div>
      </motion.div>

      {/* ─── Middle layer: CRM Pipeline (Salesforce-style) ─── */}
      <motion.div
        initial={{ opacity: 0, y: 40, rotate: 2 }}
        animate={{ opacity: 1, y: 0, rotate: 2 }}
        transition={{ duration: 0.9, delay: 0.3, ease }}
        className="absolute top-[32%] left-[0%] w-[62%] z-10 animate-float"
      >
        <div className="bg-white rounded-2xl shadow-elevated p-5 border border-black/[0.04]">
          {/* Header with Salesforce cloud */}
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-2">
              <svg width="14" height="10" viewBox="0 0 50 32" fill="none">
                <path d="M20.8 5.3c1.8-1.9 4.3-3 7-3 3.5 0 6.5 1.8 8.2 4.6 1.5-.7 3.1-1 4.8-1 6.3 0 9.2 5.1 9.2 9.7 0 5.4-4.4 9.7-9.8 9.7-.8 0-1.5-.1-2.2-.3-1.5 2.5-4.3 4.2-7.5 4.2-1.5 0-2.9-.4-4.1-1-1.6 2.2-4.2 3.7-7.1 3.7-3.3 0-6.1-1.8-7.6-4.4-.7.1-1.4.2-2.1.2C4.3 27.7 0 23.3 0 17.9c0-4 2.4-7.4 5.9-8.9-.3-1-.5-2.1-.5-3.2C5.4 2.6 8 0 11.2 0c2 0 3.8 1 4.8 2.6 1.3-1.1 3-1.7 4.8-1.7z" fill="#00A1E0" />
              </svg>
              <span className="text-[0.625rem] font-semibold text-apple-black">Sales Pipeline</span>
            </div>
            <span className="text-[0.5625rem] font-semibold text-teal-500">$842K</span>
          </div>
          {/* Pipeline stages */}
          <div className="space-y-2">
            {[
              { stage: "Qualification", value: "$320K", width: "100%", color: "bg-sf-blue/20" },
              { stage: "Proposal", value: "$248K", width: "77%", color: "bg-sf-blue/35" },
              { stage: "Negotiation", value: "$180K", width: "56%", color: "bg-sf-blue/55" },
              { stage: "Closed Won", value: "$94K", width: "29%", color: "bg-sf-blue" },
            ].map((s, i) => (
              <motion.div
                key={s.stage}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.4, delay: 0.6 + i * 0.1, ease }}
              >
                <div className="flex justify-between text-[0.5rem] mb-0.5">
                  <span className="text-apple-gray-dark">{s.stage}</span>
                  <span className="font-semibold text-apple-black">{s.value}</span>
                </div>
                <div className="h-2 bg-apple-gray-light rounded-full overflow-hidden">
                  <motion.div
                    className={`h-full rounded-full ${s.color}`}
                    initial={{ width: 0 }}
                    animate={{ width: s.width }}
                    transition={{ duration: 0.8, delay: 0.8 + i * 0.12, ease }}
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>

      {/* ─── Front layer: ERP Financial card (Business Central style) ─── */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9, delay: 0.1, ease }}
        className="absolute bottom-[6%] right-[5%] w-[58%] z-20 animate-float-delayed"
      >
        <div className="bg-white rounded-2xl shadow-elevated p-5 border border-black/[0.04]">
          {/* Header with MS logo */}
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-2">
              <svg width="12" height="12" viewBox="0 0 20 20">
                <rect x="0" y="0" width="9.3" height="9.3" fill="#F25022" />
                <rect x="10.7" y="0" width="9.3" height="9.3" fill="#7FBA00" />
                <rect x="0" y="10.7" width="9.3" height="9.3" fill="#00A4EF" />
                <rect x="10.7" y="10.7" width="9.3" height="9.3" fill="#FFB900" />
              </svg>
              <span className="text-[0.625rem] font-semibold text-apple-black">Business Central</span>
            </div>
            <div className="flex items-center gap-1">
              <div className="w-1.5 h-1.5 rounded-full bg-teal-500" />
              <span className="text-[0.5rem] text-teal-500 font-medium">Live</span>
            </div>
          </div>
          {/* Financial metrics */}
          <div className="grid grid-cols-2 gap-3 mb-4">
            {[
              { label: "Accounts Receivable", value: "$284K", trend: "+12%" },
              { label: "Accounts Payable", value: "$156K", trend: "-8%" },
              { label: "Cash Flow", value: "$428K", trend: "+18%" },
              { label: "Open Orders", value: "47", trend: "+5" },
            ].map((metric, i) => (
              <motion.div
                key={metric.label}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 + i * 0.08 }}
                className="bg-apple-gray-light rounded-lg p-2"
              >
                <p className="text-[0.4375rem] text-apple-gray truncate">{metric.label}</p>
                <div className="flex items-baseline gap-1 mt-0.5">
                  <span className="text-[0.6875rem] font-bold text-apple-black">{metric.value}</span>
                  <span className={`text-[0.4375rem] font-semibold ${
                    metric.trend.startsWith("+") ? "text-teal-500" : "text-orange-500"
                  }`}>
                    {metric.trend}
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
          {/* Mini sparkline */}
          <div className="flex items-center gap-2">
            <span className="text-[0.5rem] text-apple-gray">30d trend</span>
            <svg width="80" height="20" viewBox="0 0 80 20" className="flex-1">
              <motion.path
                d="M0 15 Q10 12 15 10 T30 8 T45 12 T55 6 T70 9 T80 4"
                stroke="url(#spark-grad)"
                strokeWidth="1.5"
                fill="none"
                strokeLinecap="round"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: 1.5, delay: 0.8, ease }}
              />
              <defs>
                <linearGradient id="spark-grad" x1="0" y1="0" x2="80" y2="0">
                  <stop offset="0%" stopColor="#2563eb" />
                  <stop offset="100%" stopColor="#14b8a6" />
                </linearGradient>
              </defs>
            </svg>
          </div>
        </div>
      </motion.div>

      {/* ─── Floating connector particles ─── */}
      {[
        { left: "48%", top: "30%", delay: 0 },
        { left: "52%", top: "58%", delay: 1.5 },
        { left: "35%", top: "68%", delay: 3 },
      ].map((p, i) => (
        <motion.div
          key={i}
          className="absolute w-1.5 h-1.5 rounded-full bg-brand-500"
          style={{ left: p.left, top: p.top }}
          animate={{
            scale: [1, 1.8, 1],
            opacity: [0.3, 0.7, 0.3],
          }}
          transition={{
            duration: 2.5,
            delay: p.delay,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}

      {/* ─── Connection lines between cards ─── */}
      <svg className="absolute inset-0 w-full h-full z-[5] pointer-events-none" viewBox="0 0 540 540">
        <motion.path
          d="M320 180 Q 340 260 280 300"
          stroke="url(#conn-grad)"
          strokeWidth="1"
          strokeDasharray="4 3"
          fill="none"
          opacity="0.4"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 1.5, delay: 1.2, ease }}
        />
        <motion.path
          d="M280 380 Q 320 360 360 340"
          stroke="url(#conn-grad)"
          strokeWidth="1"
          strokeDasharray="4 3"
          fill="none"
          opacity="0.4"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 1.5, delay: 1.5, ease }}
        />
        <defs>
          <linearGradient id="conn-grad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#2563eb" />
            <stop offset="100%" stopColor="#14b8a6" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
}
