"use client";

import { motion } from "framer-motion";
import CTABanner from "@/components/ui/CTABanner";

const ease = [0.21, 0.45, 0.27, 0.9] as const;

/** SMB DNA — growing buildings with upward trajectory */
function SMBVisual() {
  return (
    <motion.svg viewBox="0 0 280 140" fill="none" className="w-full h-full">
      {/* Background grid */}
      {[0, 1, 2, 3, 4].map(i => (
        <line key={i} x1="20" y1={25 + i * 26} x2="260" y2={25 + i * 26} stroke="#2563eb" strokeWidth="0.5" opacity="0.04" />
      ))}
      {/* Small building */}
      <motion.g initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.2, ease }}>
        <rect x="30" y="68" width="40" height="52" rx="4" fill="#2563eb" opacity="0.06" />
        <rect x="30" y="68" width="40" height="52" rx="4" stroke="#2563eb" strokeWidth="0.8" opacity="0.1" />
        <rect x="25" y="64" width="50" height="6" rx="2" fill="#2563eb" opacity="0.05" />
        {/* Windows */}
        {[0, 1].map(r => [0, 1].map(c => (
          <rect key={`${r}-${c}`} x={38 + c * 14} y={76 + r * 18} width="8" height="8" rx="1.5" fill="#2563eb" opacity={0.08 + r * 0.04} />
        )))}
        <rect x="44" y="104" width="12" height="16" rx="2" fill="#2563eb" opacity="0.1" />
      </motion.g>
      {/* Medium building */}
      <motion.g initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.35, ease }}>
        <rect x="85" y="42" width="50" height="78" rx="5" fill="#14b8a6" opacity="0.06" />
        <rect x="85" y="42" width="50" height="78" rx="5" stroke="#14b8a6" strokeWidth="0.8" opacity="0.1" />
        <rect x="80" y="38" width="60" height="6" rx="2" fill="#14b8a6" opacity="0.05" />
        {[0, 1, 2].map(r => [0, 1, 2].map(c => (
          <rect key={`m-${r}-${c}`} x={92 + c * 14} y={50 + r * 22} width="8" height="10" rx="1.5" fill="#14b8a6" opacity={0.06 + r * 0.02} />
        )))}
      </motion.g>
      {/* Growth arrow path */}
      <motion.path d="M155 100 Q175 85 195 75 Q215 65 235 40" stroke="url(#smb-wcu)" strokeWidth="2.5" strokeLinecap="round" fill="none"
        initial={{ pathLength: 0 }} whileInView={{ pathLength: 1 }}
        viewport={{ once: true }} transition={{ duration: 1, delay: 0.5, ease }} />
      <motion.path d="M230 37 L237 40 L233 48" stroke="#14b8a6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none"
        initial={{ opacity: 0 }} whileInView={{ opacity: 0.5 }}
        viewport={{ once: true }} transition={{ delay: 1.3 }} />
      {/* Growth bars */}
      {[0, 1, 2, 3, 4].map(i => (
        <motion.rect key={i} x={155 + i * 18} y={120 - (i + 1) * 10} width="10" height={(i + 1) * 10}
          rx="2" fill="url(#smb-wcu)" opacity={0.06 + i * 0.03}
          initial={{ scaleY: 0 }} whileInView={{ scaleY: 1 }}
          viewport={{ once: true }} transition={{ duration: 0.4, delay: 0.6 + i * 0.1, ease }} style={{ originY: 1 }} />
      ))}
      {/* Sparkle */}
      <motion.circle cx="237" cy="40" r="4" fill="#14b8a6" opacity="0.2"
        animate={{ scale: [1, 1.8, 1], opacity: [0.2, 0.4, 0.2] }}
        transition={{ duration: 2, repeat: Infinity }} />
      <defs>
        <linearGradient id="smb-wcu" x1="155" y1="100" x2="237" y2="40"><stop offset="0%" stopColor="#2563eb" /><stop offset="100%" stopColor="#14b8a6" /></linearGradient>
      </defs>
    </motion.svg>
  );
}

/** Dual-Platform — MS and SF logos connected */
function DualVisual() {
  return (
    <motion.svg viewBox="0 0 280 140" fill="none" className="w-full h-full">
      {/* MS logo group */}
      <motion.g initial={{ opacity: 0, x: -10 }} whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.2, ease }}>
        <rect x="35" y="38" width="50" height="50" rx="10" fill="#f5f5f7" />
        <rect x="47" y="50" width="10" height="10" fill="#F25022" rx="1.5" />
        <rect x="59" y="50" width="10" height="10" fill="#7FBA00" rx="1.5" />
        <rect x="47" y="62" width="10" height="10" fill="#00A4EF" rx="1.5" />
        <rect x="59" y="62" width="10" height="10" fill="#FFB900" rx="1.5" />
        <text x="60" y="100" fontSize="5.5" fontWeight="600" fill="#1d1d1f" textAnchor="middle" fontFamily="Inter, sans-serif" opacity="0.3">ERP</text>
      </motion.g>
      {/* Connection bridge */}
      <motion.line x1="95" y1="63" x2="175" y2="63" stroke="url(#dual-wcu)" strokeWidth="2" opacity="0.15"
        initial={{ pathLength: 0 }} whileInView={{ pathLength: 1 }}
        viewport={{ once: true }} transition={{ duration: 0.8, delay: 0.4, ease }} />
      <motion.path d="M95 63 Q135 40 175 63" stroke="url(#dual-wcu)" strokeWidth="1.5" strokeDasharray="4 3" fill="none" opacity="0.1"
        initial={{ pathLength: 0 }} whileInView={{ pathLength: 1 }}
        viewport={{ once: true }} transition={{ duration: 1, delay: 0.5, ease }} />
      <motion.path d="M95 63 Q135 86 175 63" stroke="url(#dual-wcu)" strokeWidth="1.5" strokeDasharray="4 3" fill="none" opacity="0.1"
        initial={{ pathLength: 0 }} whileInView={{ pathLength: 1 }}
        viewport={{ once: true }} transition={{ duration: 1, delay: 0.55, ease }} />
      {/* Center hub */}
      <motion.circle cx="135" cy="63" r="8" fill="url(#dual-wcu)" opacity="0.12"
        initial={{ scale: 0 }} whileInView={{ scale: 1 }}
        viewport={{ once: true }} transition={{ delay: 0.6, ease }} />
      <motion.circle cx="135" cy="63" r="4" fill="url(#dual-wcu)" opacity="0.25"
        initial={{ scale: 0 }} whileInView={{ scale: 1 }}
        viewport={{ once: true }} transition={{ delay: 0.7, ease }} />
      <motion.circle cx="135" cy="63" r="8" stroke="url(#dual-wcu)" strokeWidth="1" fill="none"
        animate={{ r: [8, 16], opacity: [0.15, 0] }}
        transition={{ duration: 2, repeat: Infinity }} />
      {/* SF cloud group */}
      <motion.g initial={{ opacity: 0, x: 10 }} whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.3, ease }}>
        <rect x="185" y="38" width="50" height="50" rx="10" fill="#f5f5f7" />
        <path d="M199 55c.8-.9 1.9-1.4 3.2-1.4 1.5 0 2.8.8 3.6 2 .7-.3 1.4-.5 2.2-.5 2.7 0 4.2 2.2 4.2 4.2 0 2.4-1.9 4.2-4.3 4.2-.4 0-.7 0-1-.1-.6 1-1.8 1.8-3.2 1.8-.6 0-1.2-.2-1.7-.4-.7 1-1.8 1.6-3 1.6-1.4 0-2.6-.8-3.3-1.9-.3 0-.6.1-.9.1-2.4 0-3.9-1.9-3.9-4.2 0-1.7 1-3.2 2.6-3.8-.1-.4-.2-.9-.2-1.4 0-1.4 1.1-2.5 2.5-2.5.9 0 1.7.4 2.1 1.1.6-.5 1.3-.9 2.1-.9z" fill="#00A1E0" />
        <text x="210" y="100" fontSize="5.5" fontWeight="600" fill="#1d1d1f" textAnchor="middle" fontFamily="Inter, sans-serif" opacity="0.3">CRM</text>
      </motion.g>
      {/* Flowing data dots */}
      <motion.circle r="2.5" fill="#2563eb" opacity="0.3"
        animate={{ cx: [95, 135], cy: [63, 55], opacity: [0.3, 0] }}
        transition={{ duration: 2, repeat: Infinity, repeatDelay: 3 }} />
      <motion.circle r="2.5" fill="#00A1E0" opacity="0.3"
        animate={{ cx: [175, 135], cy: [63, 71], opacity: [0.3, 0] }}
        transition={{ duration: 2, repeat: Infinity, repeatDelay: 3, delay: 0.8 }} />
      <defs>
        <linearGradient id="dual-wcu" x1="95" y1="63" x2="175" y2="63"><stop offset="0%" stopColor="#2563eb" /><stop offset="100%" stopColor="#00A1E0" /></linearGradient>
      </defs>
    </motion.svg>
  );
}

/** No Black Boxes — transparent document with full visibility */
function TransparentVisual() {
  return (
    <motion.svg viewBox="0 0 280 140" fill="none" className="w-full h-full">
      {/* Open padlock */}
      <motion.g initial={{ opacity: 0, y: 8 }} whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.2, ease }}>
        <motion.path d="M90 52 L90 38 C90 24 105 14 120 14 C135 14 150 24 150 38 L150 42" stroke="#2563eb" strokeWidth="3" strokeLinecap="round" fill="none" opacity="0.15"
          initial={{ pathLength: 0 }} whileInView={{ pathLength: 1 }}
          viewport={{ once: true }} transition={{ duration: 0.8, delay: 0.3, ease }} />
        <rect x="80" y="52" width="80" height="58" rx="8" fill="#2563eb" opacity="0.04" />
        <rect x="80" y="52" width="80" height="58" rx="8" stroke="url(#trans-wcu)" strokeWidth="1.5" fill="none" opacity="0.1" />
        {/* Checkmark */}
        <motion.path d="M105 78 L115 88 L140 63" stroke="#14b8a6" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" fill="none"
          initial={{ pathLength: 0 }} whileInView={{ pathLength: 1 }}
          viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.7, ease }} />
      </motion.g>
      {/* Document pages */}
      <motion.g initial={{ opacity: 0, x: 10 }} whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.6, ease }}>
        <rect x="175" y="24" width="70" height="90" rx="6" fill="white" />
        <rect x="175" y="24" width="70" height="90" rx="6" stroke="#e5e7eb" strokeWidth="0.5" />
        <rect x="175" y="24" width="70" height="16" rx="6" fill="#f5f5f7" />
        <rect x="175" y="34" width="70" height="6" fill="#f5f5f7" />
        <text x="210" y="35" fontSize="4.5" fontWeight="600" fill="#1d1d1f" textAnchor="middle" fontFamily="Inter, sans-serif" opacity="0.4">Documentation</text>
        {/* Doc lines with checks */}
        {[0, 1, 2, 3].map(i => (
          <motion.g key={i} initial={{ opacity: 0, x: -4 }} whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }} transition={{ duration: 0.3, delay: 0.8 + i * 0.1, ease }}>
            <rect x="183" y={48 + i * 14} width="4" height="4" rx="1" stroke="#14b8a6" strokeWidth="0.8" fill="none" opacity="0.3" />
            <motion.path d={`M183.8 ${49.5 + i * 14} L185 ${51 + i * 14} L187 ${49 + i * 14}`}
              stroke="#14b8a6" strokeWidth="0.8" strokeLinecap="round" fill="none" opacity="0.4"
              initial={{ pathLength: 0 }} whileInView={{ pathLength: 1 }}
              viewport={{ once: true }} transition={{ duration: 0.2, delay: 0.9 + i * 0.1, ease }} />
            <rect x="192" y={48.5 + i * 14} width={35 - i * 5} height="3" rx="1.5" fill="#1d1d1f" opacity="0.06" />
          </motion.g>
        ))}
      </motion.g>
      {/* Eye icon */}
      <motion.g initial={{ opacity: 0 }} whileInView={{ opacity: 1 }}
        viewport={{ once: true }} transition={{ delay: 1.2 }}>
        <circle cx="45" cy="35" r="14" fill="#14b8a6" opacity="0.05" />
        <ellipse cx="45" cy="35" rx="8" ry="5" stroke="#14b8a6" strokeWidth="1.5" fill="none" opacity="0.2" />
        <circle cx="45" cy="35" r="2.5" fill="#14b8a6" opacity="0.25" />
        <text x="45" y="56" fontSize="4.5" fontWeight="500" fill="#14b8a6" textAnchor="middle" fontFamily="Inter, sans-serif" opacity="0.25">Full visibility</text>
      </motion.g>
      <defs>
        <linearGradient id="trans-wcu" x1="80" y1="52" x2="160" y2="110"><stop offset="0%" stopColor="#2563eb" /><stop offset="100%" stopColor="#14b8a6" /></linearGradient>
      </defs>
    </motion.svg>
  );
}

/** Agile — sprint board with moving cards */
function AgileVisual() {
  return (
    <motion.svg viewBox="0 0 280 140" fill="none" className="w-full h-full">
      <motion.g initial={{ opacity: 0, y: 8 }} whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.1, ease }}>
        {/* Board frame */}
        <rect x="20" y="12" width="240" height="116" rx="8" fill="white" />
        <rect x="20" y="12" width="240" height="116" rx="8" stroke="#e5e7eb" strokeWidth="0.5" />
        {/* Column dividers */}
        <line x1="100" y1="12" x2="100" y2="128" stroke="#e5e7eb" strokeWidth="0.5" />
        <line x1="180" y1="12" x2="180" y2="128" stroke="#e5e7eb" strokeWidth="0.5" />
        {/* Headers */}
        <text x="60" y="28" fontSize="5" fontWeight="600" fill="#2563eb" textAnchor="middle" fontFamily="Inter, sans-serif" opacity="0.3">To Do</text>
        <text x="140" y="28" fontSize="5" fontWeight="600" fill="#14b8a6" textAnchor="middle" fontFamily="Inter, sans-serif" opacity="0.35">In Progress</text>
        <text x="220" y="28" fontSize="5" fontWeight="600" fill="#14b8a6" textAnchor="middle" fontFamily="Inter, sans-serif" opacity="0.45">Done</text>
      </motion.g>
      {/* Task cards */}
      {[
        { x: 28, y: 38, w: 64, h: 20, c: "#2563eb", o: 0.06 },
        { x: 28, y: 64, w: 64, h: 20, c: "#2563eb", o: 0.04 },
        { x: 28, y: 90, w: 64, h: 16, c: "#2563eb", o: 0.03 },
        { x: 108, y: 38, w: 64, h: 22, c: "#14b8a6", o: 0.08 },
        { x: 108, y: 66, w: 64, h: 18, c: "#14b8a6", o: 0.05 },
        { x: 188, y: 38, w: 64, h: 20, c: "#14b8a6", o: 0.07 },
        { x: 188, y: 64, w: 64, h: 20, c: "#14b8a6", o: 0.05 },
        { x: 188, y: 90, w: 64, h: 16, c: "#14b8a6", o: 0.04 },
      ].map((card, i) => (
        <motion.g key={i} initial={{ opacity: 0, y: 4 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }} transition={{ duration: 0.3, delay: 0.3 + i * 0.05, ease }}>
          <rect x={card.x} y={card.y} width={card.w} height={card.h} rx="4" fill={card.c} opacity={card.o} />
          <rect x={card.x + 6} y={card.y + 6} width={card.w * 0.5} height="3" rx="1.5" fill={card.c} opacity="0.12" />
          {card.x >= 188 && (
            <motion.path d={`M${card.x + card.w - 12} ${card.y + card.h / 2 - 1} L${card.x + card.w - 10} ${card.y + card.h / 2 + 1} L${card.x + card.w - 7} ${card.y + card.h / 2 - 2}`}
              stroke="#14b8a6" strokeWidth="1.5" strokeLinecap="round" opacity="0.3" />
          )}
        </motion.g>
      ))}
      {/* Moving card animation */}
      <motion.rect width="64" height="20" rx="4" fill="#14b8a6" opacity="0.05"
        animate={{ x: [108, 145, 188], y: [38, 38, 38], opacity: [0.05, 0.08, 0] }}
        transition={{ duration: 3, delay: 2, repeat: Infinity, repeatDelay: 5 }} />
      {/* Senior consultant badge */}
      <motion.g initial={{ opacity: 0 }} whileInView={{ opacity: 1 }}
        viewport={{ once: true }} transition={{ delay: 0.8 }}>
        <circle cx="140" cy="110" r="8" fill="url(#agile-wcu)" opacity="0.08" />
        <circle cx="140" cy="108" r="3" fill="url(#agile-wcu)" opacity="0.15" />
        <path d="M136 113 Q140 111 144 113" stroke="url(#agile-wcu)" strokeWidth="1" fill="none" opacity="0.12" />
        <text x="140" y="126" fontSize="4" fontWeight="500" fill="#14b8a6" textAnchor="middle" fontFamily="Inter, sans-serif" opacity="0.25">Senior-led delivery</text>
      </motion.g>
      <defs>
        <linearGradient id="agile-wcu" x1="0" y1="0" x2="280" y2="140"><stop offset="0%" stopColor="#2563eb" /><stop offset="100%" stopColor="#14b8a6" /></linearGradient>
      </defs>
    </motion.svg>
  );
}

/** Partnership — two teams merging with outcome metrics */
function PartnerVisual() {
  return (
    <motion.svg viewBox="0 0 280 140" fill="none" className="w-full h-full">
      {/* Your team */}
      <motion.g initial={{ opacity: 0, x: -8 }} whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.2, ease }}>
        <rect x="25" y="30" width="80" height="60" rx="8" fill="#2563eb" opacity="0.03" />
        <rect x="25" y="30" width="80" height="60" rx="8" stroke="#2563eb" strokeWidth="0.8" opacity="0.06" />
        <text x="65" y="48" fontSize="5" fontWeight="600" fill="#2563eb" textAnchor="middle" fontFamily="Inter, sans-serif" opacity="0.25">Your Team</text>
        {[0, 1, 2].map(i => (
          <g key={i}>
            <circle cx={42 + i * 18} cy="68" r="6" fill="#2563eb" opacity="0.06" />
            <circle cx={42 + i * 18} cy="66" r="2.5" fill="#2563eb" opacity="0.12" />
          </g>
        ))}
      </motion.g>
      {/* Our team */}
      <motion.g initial={{ opacity: 0, x: 8 }} whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.3, ease }}>
        <rect x="175" y="30" width="80" height="60" rx="8" fill="#14b8a6" opacity="0.03" />
        <rect x="175" y="30" width="80" height="60" rx="8" stroke="#14b8a6" strokeWidth="0.8" opacity="0.06" />
        <text x="215" y="48" fontSize="5" fontWeight="600" fill="#14b8a6" textAnchor="middle" fontFamily="Inter, sans-serif" opacity="0.25">Our Team</text>
        {[0, 1, 2].map(i => (
          <g key={i}>
            <circle cx={192 + i * 18} cy="68" r="6" fill="#14b8a6" opacity="0.06" />
            <circle cx={192 + i * 18} cy="66" r="2.5" fill="#14b8a6" opacity="0.12" />
          </g>
        ))}
      </motion.g>
      {/* Connection arcs */}
      <motion.path d="M105 60 Q140 35 175 60" stroke="url(#part-wcu)" strokeWidth="2" strokeDasharray="4 3" fill="none" opacity="0.1"
        initial={{ pathLength: 0 }} whileInView={{ pathLength: 1 }}
        viewport={{ once: true }} transition={{ duration: 0.8, delay: 0.5, ease }} />
      <motion.path d="M105 60 Q140 85 175 60" stroke="url(#part-wcu)" strokeWidth="2" strokeDasharray="4 3" fill="none" opacity="0.1"
        initial={{ pathLength: 0 }} whileInView={{ pathLength: 1 }}
        viewport={{ once: true }} transition={{ duration: 0.8, delay: 0.6, ease }} />
      {/* Center merge */}
      <motion.circle cx="140" cy="60" r="8" fill="url(#part-wcu)" opacity="0.1"
        initial={{ scale: 0 }} whileInView={{ scale: 1 }}
        viewport={{ once: true }} transition={{ delay: 0.7, ease }} />
      <motion.circle cx="140" cy="60" r="4" fill="url(#part-wcu)" opacity="0.25"
        initial={{ scale: 0 }} whileInView={{ scale: 1 }}
        viewport={{ once: true }} transition={{ delay: 0.8, ease }} />
      {/* Outcome metrics */}
      {[
        { x: 65, label: "ROI", sub: "focused", c: "#2563eb" },
        { x: 140, label: "LTV", sub: "driven", c: "#14b8a6" },
        { x: 215, label: "NPS", sub: "measured", c: "#2563eb" },
      ].map((m, i) => (
        <motion.g key={m.label} initial={{ opacity: 0, y: 4 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }} transition={{ delay: 0.9 + i * 0.1 }}>
          <rect x={m.x - 22} y="100" width="44" height="22" rx="5" fill={m.c} opacity="0.04" />
          <text x={m.x} y="113" fontSize="7" fontWeight="700" fill={m.c} opacity="0.25" textAnchor="middle" fontFamily="Inter, sans-serif">{m.label}</text>
          <text x={m.x} y="120" fontSize="4" fill={m.c} opacity="0.15" textAnchor="middle" fontFamily="Inter, sans-serif">{m.sub}</text>
        </motion.g>
      ))}
      {/* Flowing dots */}
      <motion.circle r="2" fill="#2563eb" opacity="0.25"
        animate={{ cx: [105, 140], cy: [60, 52], opacity: [0.25, 0] }}
        transition={{ duration: 2, repeat: Infinity, repeatDelay: 3 }} />
      <motion.circle r="2" fill="#14b8a6" opacity="0.25"
        animate={{ cx: [175, 140], cy: [60, 68], opacity: [0.25, 0] }}
        transition={{ duration: 2, repeat: Infinity, repeatDelay: 3, delay: 0.5 }} />
      <defs>
        <linearGradient id="part-wcu" x1="105" y1="60" x2="175" y2="60"><stop offset="0%" stopColor="#2563eb" /><stop offset="100%" stopColor="#14b8a6" /></linearGradient>
      </defs>
    </motion.svg>
  );
}

const differentiators = [
  { number: "01", title: "SMB DNA", description: "We build for SMBs from the ground up — right-sized scope, right-sized budget. No enterprise bloat, no unnecessary complexity.", visual: SMBVisual, accent: "bg-brand-500" },
  { number: "02", title: "Dual-Platform Expertise", description: "One partner for both your ERP and CRM — seamless integration, single point of accountability. No finger-pointing between vendors.", visual: DualVisual, accent: "bg-teal-500" },
  { number: "03", title: "No Black Boxes", description: "We document everything, train your team thoroughly, and build systems you own. No vendor lock-in, no proprietary traps.", visual: TransparentVisual, accent: "bg-brand-500" },
  { number: "04", title: "Agile & Responsive", description: "Work directly with senior consultants — not handed off to junior resources after the sale. Fast decisions, fast delivery.", visual: AgileVisual, accent: "bg-teal-500" },
  { number: "05", title: "Long-Term Partnership", description: "We measure success by your outcomes, not our billable hours. Our goal is to become the technology partner you keep coming back to.", visual: PartnerVisual, accent: "bg-brand-500" },
];

const stats = [
  { value: "100%", label: "SMB Focus", sub: "No enterprise leftovers" },
  { value: "2-in-1", label: "ERP + CRM", sub: "Single partner" },
  { value: "0", label: "Hidden Fees", sub: "Transparent pricing" },
];

export default function WhyChooseUsContent() {
  return (
    <>
      {/* Hero */}
      <section className="relative pt-6 pb-10 md:pt-8 md:pb-14 overflow-hidden">
        <div className="absolute inset-0 mesh-gradient" />
        <div className="container-apple relative z-10">
          <p
            className="text-brand-500 text-caption font-semibold tracking-wide uppercase mb-4"
          >Why Choose Us</p>
          <h1
            className="text-display text-apple-black max-w-3xl"
          >
            We&apos;re not the biggest.{" "}
            <span className="text-gradient">We&apos;re the most focused.</span>
          </h1>
          <p
            className="text-body-lg text-apple-gray mt-4 max-w-lg"
          >Five reasons businesses choose to work with us — and keep working with us.</p>
        </div>
      </section>

      {/* Stats bar */}
      <section className="pb-6 pt-2">
        <div className="container-apple">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }} transition={{ duration: 0.6, ease }}
            className="grid grid-cols-3 gap-4 rounded-[22px] bg-apple-black p-6 md:p-8"
          >
            {stats.map((stat, i) => (
              <div key={stat.label} className={`text-center ${i < 2 ? "border-r border-white/10" : ""}`}>
                <motion.p className="text-[clamp(1.5rem,3vw,2.25rem)] font-bold text-gradient leading-none"
                  initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }} transition={{ delay: 0.3 + i * 0.1, ease }}>
                  {stat.value}
                </motion.p>
                <p className="text-[0.75rem] font-semibold text-white mt-1.5">{stat.label}</p>
                <p className="text-[0.625rem] text-apple-gray mt-0.5">{stat.sub}</p>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Differentiators */}
      <section className="py-section-sm">
        <div className="container-apple">
          <div className="space-y-4">
            {differentiators.map((item, index) => {
              const Visual = item.visual;
              return (
                <motion.div
                  key={item.number}
                  initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-40px" }}
                  transition={{ duration: 0.5, delay: index * 0.06, ease }}
                  className="group grid grid-cols-1 md:grid-cols-[1.2fr_1fr] rounded-[22px] bg-white border border-black/[0.04] shadow-card hover:shadow-card-hover transition-all duration-500 overflow-hidden"
                >
                  {/* Illustration */}
                  <div className="relative h-[160px] md:h-auto bg-apple-gray-light/50 overflow-hidden">
                    <Visual />
                  </div>
                  {/* Content */}
                  <div className="p-5 md:p-7 flex flex-col justify-center">
                    <div className="flex items-center gap-2 mb-3">
                      <div className={`w-1.5 h-1.5 rounded-full ${item.accent}`} />
                      <span className="text-[0.6875rem] font-bold text-gradient tracking-wide">{item.number}</span>
                      <span className="text-[0.625rem] text-apple-gray">Differentiator</span>
                    </div>
                    <h3 className="text-[1.0625rem] font-semibold text-apple-black leading-snug mb-2 group-hover:text-brand-500 transition-colors duration-300">
                      {item.title}
                    </h3>
                    <p className="text-[0.8125rem] text-apple-gray leading-relaxed">{item.description}</p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-section-sm bg-apple-gray-light/50">
        <div className="container-apple text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }} transition={{ duration: 0.7, ease }}>
            <p className="text-brand-500 text-caption font-semibold tracking-wide uppercase mb-3">Testimonials</p>
            <h2 className="text-display-sm text-apple-black mb-6">What our clients say.</h2>
            <div className="max-w-md mx-auto rounded-[22px] bg-white shadow-card border border-black/[0.04] p-8">
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none" className="mx-auto mb-4">
                <path d="M10 8H6a2 2 0 00-2 2v4a2 2 0 002 2h2a2 2 0 002-2v-2a2 2 0 00-2-2H6l2-4zm10 0h-4a2 2 0 00-2 2v4a2 2 0 002 2h2a2 2 0 002-2v-2a2 2 0 00-2-2h-2l2-4z" fill="#d2d2d7" />
              </svg>
              <p className="text-body text-apple-gray italic leading-relaxed">
                Client testimonials coming soon. We&apos;re currently working with
                our first cohort of clients and will share their stories here.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      <CTABanner title="See the difference a focused partner can make." buttonText="Schedule a Free Consultation" buttonHref="/contact" />
    </>
  );
}
