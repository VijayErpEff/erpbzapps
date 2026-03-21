"use client";

import { motion } from "framer-motion";

const ease = [0.21, 0.45, 0.27, 0.9] as const;

/** Discovery — light dashboard with deep text: assessment ring, stakeholder coverage, scope metrics */
function DiscoverVisual() {
  return (
    <motion.svg viewBox="0 0 280 140" fill="none" className="w-full h-full">
      {/* ── Assessment score ring ── */}
      <motion.g initial={{ opacity: 0, scale: 0.85 }} whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.2, ease }}>
        <rect x="16" y="14" width="80" height="80" rx="8" fill="white" />
        <rect x="16" y="14" width="80" height="80" rx="8" stroke="#e5e7eb" strokeWidth="0.5" />
        <text x="56" y="28" fontSize="4" fontWeight="600" fill="#86868b" textAnchor="middle" fontFamily="Inter, sans-serif">Business Readiness</text>
        <circle cx="56" cy="58" r="22" stroke="#e5e7eb" strokeWidth="3" fill="none" opacity="0.3" />
        <motion.circle cx="56" cy="58" r="22" stroke="#2563eb" strokeWidth="3.5"
          fill="none" opacity="0.5" strokeLinecap="round"
          strokeDasharray={`${Math.round(2 * Math.PI * 22 * 0.82)} ${Math.round(2 * Math.PI * 22 * 0.18)}`}
          transform="rotate(-90 56 58)"
          initial={{ strokeDashoffset: Math.round(2 * Math.PI * 22) }}
          whileInView={{ strokeDashoffset: 0 }}
          viewport={{ once: true }} transition={{ duration: 1.2, delay: 0.4, ease }} />
        <motion.text x="56" y="57" fontSize="11" fontWeight="800" fill="#1d1d1f" textAnchor="middle" fontFamily="Inter, sans-serif"
          initial={{ opacity: 0 }} whileInView={{ opacity: 1 }}
          viewport={{ once: true }} transition={{ delay: 0.8 }}>
          82%
        </motion.text>
        <text x="56" y="67" fontSize="3.5" fill="#86868b" textAnchor="middle" fontFamily="Inter, sans-serif">assessed</text>
        <motion.circle cx="56" cy="58" r="22" stroke="#2563eb" strokeWidth="1" fill="none"
          animate={{ r: [22, 30], opacity: [0.12, 0] }}
          transition={{ duration: 2, repeat: Infinity }} />
      </motion.g>

      {/* ── Stakeholders interviewed ── */}
      <motion.g initial={{ opacity: 0, y: 8 }} whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }} transition={{ duration: 0.4, delay: 0.35, ease }}>
        <rect x="104" y="14" width="80" height="42" rx="8" fill="white" />
        <rect x="104" y="14" width="80" height="42" rx="8" stroke="#e5e7eb" strokeWidth="0.5" />
        <text x="114" y="28" fontSize="4" fontWeight="600" fill="#86868b" fontFamily="Inter, sans-serif">Stakeholders</text>
        <motion.text x="114" y="46" fontSize="16" fontWeight="800" fill="#1d1d1f" fontFamily="Inter, sans-serif"
          initial={{ opacity: 0 }} whileInView={{ opacity: 1 }}
          viewport={{ once: true }} transition={{ delay: 0.6 }}>
          8/10
        </motion.text>
        {[0, 1, 2, 3, 4].map((i) => (
          <motion.circle key={i} cx={158 + i * 5} cy="38" r="2" fill={i < 4 ? "#2563eb" : "#e5e7eb"} opacity={i < 4 ? 0.3 : 0.4}
            initial={{ scale: 0 }} whileInView={{ scale: 1 }}
            viewport={{ once: true }} transition={{ delay: 0.7 + i * 0.06 }} />
        ))}
      </motion.g>

      {/* ── Scope areas card ── */}
      <motion.g initial={{ opacity: 0, y: 8 }} whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }} transition={{ duration: 0.4, delay: 0.45, ease }}>
        <rect x="192" y="14" width="72" height="42" rx="8" fill="white" />
        <rect x="192" y="14" width="72" height="42" rx="8" stroke="#e5e7eb" strokeWidth="0.5" />
        <text x="202" y="28" fontSize="4" fontWeight="600" fill="#86868b" fontFamily="Inter, sans-serif">Scope Areas</text>
        <motion.text x="202" y="48" fontSize="18" fontWeight="800" fill="#1d1d1f" fontFamily="Inter, sans-serif"
          initial={{ opacity: 0 }} whileInView={{ opacity: 1 }}
          viewport={{ once: true }} transition={{ delay: 0.7 }}>
          12
        </motion.text>
        <text x="226" y="48" fontSize="5" fill="#14b8a6" fontFamily="Inter, sans-serif" opacity="0.7">mapped</text>
      </motion.g>

      {/* ── Requirements progress ── */}
      <motion.g initial={{ opacity: 0, y: 6 }} whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }} transition={{ duration: 0.4, delay: 0.55, ease }}>
        <rect x="104" y="64" width="160" height="30" rx="8" fill="white" />
        <rect x="104" y="64" width="160" height="30" rx="8" stroke="#e5e7eb" strokeWidth="0.5" />
        <text x="114" y="77" fontSize="4" fontWeight="600" fill="#86868b" fontFamily="Inter, sans-serif">Requirements Gathered</text>
        <rect x="114" y="82" width="140" height="5" rx="2.5" fill="#e5e7eb" opacity="0.3" />
        <motion.rect x="114" y="82" width="95" height="5" rx="2.5" fill="url(#disc-prog)" opacity="0.4"
          initial={{ width: 0 }} whileInView={{ width: 95 }}
          viewport={{ once: true }} transition={{ duration: 0.8, delay: 0.7, ease }} />
        <text x="215" y="87" fontSize="4" fontWeight="700" fill="#2563eb" fontFamily="Inter, sans-serif" opacity="0.6">68%</text>
      </motion.g>

      {/* ── Pain points card ── */}
      <motion.g initial={{ opacity: 0 }} whileInView={{ opacity: 1 }}
        viewport={{ once: true }} transition={{ delay: 0.7 }}>
        <rect x="16" y="102" width="80" height="30" rx="8" fill="white" />
        <rect x="16" y="102" width="80" height="30" rx="8" stroke="#e5e7eb" strokeWidth="0.5" />
        <text x="26" y="114" fontSize="3.5" fontWeight="600" fill="#86868b" fontFamily="Inter, sans-serif">Pain Points</text>
        {["High", "Med", "Low"].map((lvl, i) => (
          <g key={lvl}>
            <circle cx={28 + i * 22} cy="124" r="2.5" fill={i === 0 ? "#ef4444" : i === 1 ? "#f59e0b" : "#14b8a6"} opacity="0.4" />
            <text x={28 + i * 22} y="130" fontSize="2.8" fill="#86868b" textAnchor="middle" fontFamily="Inter, sans-serif">{lvl}</text>
          </g>
        ))}
      </motion.g>

      {/* ── Timeline card ── */}
      <motion.g initial={{ opacity: 0, scale: 0.85 }} whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }} transition={{ delay: 0.85 }}>
        <rect x="104" y="102" width="58" height="30" rx="8" fill="white" />
        <rect x="104" y="102" width="58" height="30" rx="8" stroke="#e5e7eb" strokeWidth="0.5" />
        <text x="133" y="118" fontSize="12" fontWeight="800" fill="#1d1d1f" textAnchor="middle" fontFamily="Inter, sans-serif">2 wk</text>
        <text x="133" y="128" fontSize="3.5" fill="#86868b" textAnchor="middle" fontFamily="Inter, sans-serif">Discovery</text>
      </motion.g>

      {/* ── Systems audit ── */}
      <motion.g initial={{ opacity: 0 }} whileInView={{ opacity: 1 }}
        viewport={{ once: true }} transition={{ delay: 0.9 }}>
        <rect x="170" y="102" width="94" height="30" rx="8" fill="white" />
        <rect x="170" y="102" width="94" height="30" rx="8" stroke="#e5e7eb" strokeWidth="0.5" />
        <text x="180" y="114" fontSize="3.5" fontWeight="600" fill="#86868b" fontFamily="Inter, sans-serif">Systems Audited</text>
        {["ERP", "CRM", "Mail", "Pay"].map((sys, i) => (
          <g key={sys}>
            <motion.circle cx={186 + i * 18} cy="124" r="2.5" fill="#14b8a6" opacity={0.3 + i * 0.06}
              animate={{ opacity: [0.25 + i * 0.05, 0.4 + i * 0.05, 0.25 + i * 0.05] }}
              transition={{ duration: 2, repeat: Infinity, delay: i * 0.3 }} />
            <text x={186 + i * 18} y="130" fontSize="2.5" fill="#86868b" textAnchor="middle" fontFamily="Inter, sans-serif">{sys}</text>
          </g>
        ))}
      </motion.g>

      <defs>
        <linearGradient id="disc-prog" x1="114" y1="84" x2="209" y2="84">
          <stop offset="0%" stopColor="#2563eb" /><stop offset="100%" stopColor="#14b8a6" />
        </linearGradient>
      </defs>
    </motion.svg>
  );
}

/** Implement — light build progress command center with deep text */
function ImplementVisual() {
  return (
    <motion.svg viewBox="0 0 280 140" fill="none" className="w-full h-full">
      {/* ── Build progress ring ── */}
      <motion.g initial={{ opacity: 0, scale: 0.85 }} whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.2, ease }}>
        <rect x="16" y="14" width="80" height="80" rx="8" fill="white" />
        <rect x="16" y="14" width="80" height="80" rx="8" stroke="#e5e7eb" strokeWidth="0.5" />
        <text x="56" y="28" fontSize="4" fontWeight="600" fill="#86868b" textAnchor="middle" fontFamily="Inter, sans-serif">Build Progress</text>
        <circle cx="56" cy="58" r="22" stroke="#e5e7eb" strokeWidth="3" fill="none" opacity="0.3" />
        <motion.circle cx="56" cy="58" r="22" stroke="url(#impl-ring)" strokeWidth="3.5"
          fill="none" opacity="0.5" strokeLinecap="round"
          strokeDasharray={`${Math.round(2 * Math.PI * 22 * 0.75)} ${Math.round(2 * Math.PI * 22 * 0.25)}`}
          transform="rotate(-90 56 58)"
          initial={{ strokeDashoffset: Math.round(2 * Math.PI * 22) }}
          whileInView={{ strokeDashoffset: 0 }}
          viewport={{ once: true }} transition={{ duration: 1.2, delay: 0.4, ease }} />
        <motion.text x="56" y="57" fontSize="11" fontWeight="800" fill="#1d1d1f" textAnchor="middle" fontFamily="Inter, sans-serif"
          initial={{ opacity: 0 }} whileInView={{ opacity: 1 }}
          viewport={{ once: true }} transition={{ delay: 0.8 }}>
          75%
        </motion.text>
        <text x="56" y="67" fontSize="3.5" fill="#86868b" textAnchor="middle" fontFamily="Inter, sans-serif">complete</text>
        <motion.circle cx="56" cy="58" r="22" stroke="#14b8a6" strokeWidth="1" fill="none"
          animate={{ r: [22, 30], opacity: [0.12, 0] }}
          transition={{ duration: 2, repeat: Infinity }} />
      </motion.g>

      {/* ── Modules deployed ── */}
      <motion.g initial={{ opacity: 0, y: 8 }} whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }} transition={{ duration: 0.4, delay: 0.35, ease }}>
        <rect x="104" y="14" width="80" height="42" rx="8" fill="white" />
        <rect x="104" y="14" width="80" height="42" rx="8" stroke="#e5e7eb" strokeWidth="0.5" />
        <text x="114" y="28" fontSize="4" fontWeight="600" fill="#86868b" fontFamily="Inter, sans-serif">Modules Live</text>
        <motion.text x="114" y="46" fontSize="16" fontWeight="800" fill="#1d1d1f" fontFamily="Inter, sans-serif"
          initial={{ opacity: 0 }} whileInView={{ opacity: 1 }}
          viewport={{ once: true }} transition={{ delay: 0.6 }}>
          6/8
        </motion.text>
        {[0, 1, 2, 3, 4, 5, 6, 7].map((i) => (
          <motion.circle key={i} cx={157 + (i % 4) * 5} cy={i < 4 ? 34 : 42} r="1.5"
            fill={i < 6 ? "#14b8a6" : "#e5e7eb"} opacity={i < 6 ? 0.5 : 0.4}
            initial={{ scale: 0 }} whileInView={{ scale: 1 }}
            viewport={{ once: true }} transition={{ delay: 0.7 + i * 0.05 }} />
        ))}
      </motion.g>

      {/* ── Sprint velocity ── */}
      <motion.g initial={{ opacity: 0, y: 8 }} whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }} transition={{ duration: 0.4, delay: 0.45, ease }}>
        <rect x="192" y="14" width="72" height="42" rx="8" fill="white" />
        <rect x="192" y="14" width="72" height="42" rx="8" stroke="#e5e7eb" strokeWidth="0.5" />
        <text x="202" y="28" fontSize="4" fontWeight="600" fill="#86868b" fontFamily="Inter, sans-serif">Sprint Velocity</text>
        {[12, 18, 15, 22, 20, 26].map((h, i) => (
          <motion.rect key={i} x={202 + i * 9} y={52 - h} width="5" height={h} rx="1.5"
            fill="url(#impl-ring)" opacity={0.15 + i * 0.04}
            initial={{ scaleY: 0 }} whileInView={{ scaleY: 1 }}
            viewport={{ once: true }} transition={{ duration: 0.3, delay: 0.6 + i * 0.06, ease }}
            style={{ originY: 1 }} />
        ))}
      </motion.g>

      {/* ── Data migration ── */}
      <motion.g initial={{ opacity: 0, y: 6 }} whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }} transition={{ duration: 0.4, delay: 0.55, ease }}>
        <rect x="104" y="64" width="160" height="30" rx="8" fill="white" />
        <rect x="104" y="64" width="160" height="30" rx="8" stroke="#e5e7eb" strokeWidth="0.5" />
        <text x="114" y="77" fontSize="4" fontWeight="600" fill="#86868b" fontFamily="Inter, sans-serif">Data Migration</text>
        <rect x="114" y="82" width="140" height="5" rx="2.5" fill="#e5e7eb" opacity="0.3" />
        <motion.rect x="114" y="82" width="105" height="5" rx="2.5" fill="url(#impl-prog)" opacity="0.4"
          initial={{ width: 0 }} whileInView={{ width: 105 }}
          viewport={{ once: true }} transition={{ duration: 0.8, delay: 0.7, ease }} />
        <text x="225" y="87" fontSize="4" fontWeight="700" fill="#14b8a6" fontFamily="Inter, sans-serif" opacity="0.6">75%</text>
        <circle cx="116" cy="90" r="1.5" fill="#14b8a6" opacity="0.35" />
        <text x="120" y="92" fontSize="3" fill="#86868b" fontFamily="Inter, sans-serif">Migrated</text>
        <circle cx="150" cy="90" r="1.5" fill="#e5e7eb" opacity="0.5" />
        <text x="154" y="92" fontSize="3" fill="#86868b" fontFamily="Inter, sans-serif">Remaining</text>
      </motion.g>

      {/* ── Pipeline stages ── */}
      <motion.g initial={{ opacity: 0 }} whileInView={{ opacity: 1 }}
        viewport={{ once: true }} transition={{ delay: 0.8 }}>
        <rect x="16" y="102" width="80" height="30" rx="8" fill="white" />
        <rect x="16" y="102" width="80" height="30" rx="8" stroke="#e5e7eb" strokeWidth="0.5" />
        <text x="26" y="114" fontSize="3.5" fontWeight="600" fill="#86868b" fontFamily="Inter, sans-serif">Deploy Pipeline</text>
        {["Build", "Test", "Stage", "Live"].map((stage, i) => (
          <g key={stage}>
            <motion.circle cx={28 + i * 16} cy="124" r="2.5" fill={i < 3 ? "#14b8a6" : "#d2d2d7"} opacity={i < 3 ? 0.5 : 0.3}
              animate={i === 2 ? { opacity: [0.3, 0.6, 0.3] } : undefined}
              transition={i === 2 ? { duration: 1.5, repeat: Infinity } : undefined} />
            <text x={28 + i * 16} y="130" fontSize="2.5" fill="#86868b" textAnchor="middle" fontFamily="Inter, sans-serif">{stage}</text>
          </g>
        ))}
      </motion.g>

      {/* ── On-time badge ── */}
      <motion.g initial={{ opacity: 0, scale: 0.85 }} whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }} transition={{ delay: 0.9 }}>
        <rect x="104" y="102" width="58" height="30" rx="8" fill="white" />
        <rect x="104" y="102" width="58" height="30" rx="8" stroke="#e5e7eb" strokeWidth="0.5" />
        <text x="133" y="116" fontSize="6" fontWeight="800" fill="#14b8a6" textAnchor="middle" fontFamily="Inter, sans-serif" opacity="0.6">On Time</text>
        <text x="133" y="128" fontSize="3.5" fill="#86868b" textAnchor="middle" fontFamily="Inter, sans-serif">On Budget</text>
      </motion.g>

      {/* ── Config tasks ── */}
      <motion.g initial={{ opacity: 0 }} whileInView={{ opacity: 1 }}
        viewport={{ once: true }} transition={{ delay: 0.95 }}>
        <rect x="170" y="102" width="94" height="30" rx="8" fill="white" />
        <rect x="170" y="102" width="94" height="30" rx="8" stroke="#e5e7eb" strokeWidth="0.5" />
        <text x="180" y="114" fontSize="3.5" fontWeight="600" fill="#86868b" fontFamily="Inter, sans-serif">Config Tasks</text>
        {[38, 30, 22, 16].map((w, i) => (
          <motion.rect key={i} x="180" y={118 + i * 3} width={w} height="2" rx="1"
            fill={i < 3 ? "#2563eb" : "#e5e7eb"} opacity={i < 3 ? 0.2 + i * 0.06 : 0.2}
            initial={{ width: 0 }} whileInView={{ width: w }}
            viewport={{ once: true }} transition={{ duration: 0.3, delay: 1 + i * 0.08, ease }} />
        ))}
      </motion.g>

      <defs>
        <linearGradient id="impl-ring" x1="34" y1="36" x2="78" y2="80">
          <stop offset="0%" stopColor="#2563eb" /><stop offset="100%" stopColor="#14b8a6" />
        </linearGradient>
        <linearGradient id="impl-prog" x1="114" y1="84" x2="219" y2="84">
          <stop offset="0%" stopColor="#2563eb" /><stop offset="100%" stopColor="#14b8a6" />
        </linearGradient>
      </defs>
    </motion.svg>
  );
}

/** Support — light monitoring command center with deep text */
function SupportVisual() {
  return (
    <motion.svg viewBox="0 0 280 140" fill="none" className="w-full h-full">
      {/* ── Uptime ring gauge ── */}
      <motion.g initial={{ opacity: 0, scale: 0.85 }} whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.2, ease }}>
        <rect x="16" y="14" width="80" height="80" rx="8" fill="white" />
        <rect x="16" y="14" width="80" height="80" rx="8" stroke="#e5e7eb" strokeWidth="0.5" />
        <text x="56" y="28" fontSize="4" fontWeight="600" fill="#86868b" textAnchor="middle" fontFamily="Inter, sans-serif">System Uptime</text>
        <circle cx="56" cy="58" r="22" stroke="#e5e7eb" strokeWidth="3" fill="none" opacity="0.3" />
        <motion.circle cx="56" cy="58" r="22" stroke="#14b8a6" strokeWidth="3.5"
          fill="none" opacity="0.5" strokeLinecap="round"
          strokeDasharray={`${Math.round(2 * Math.PI * 22 * 0.999)} ${Math.round(2 * Math.PI * 22 * 0.001)}`}
          transform="rotate(-90 56 58)"
          initial={{ strokeDashoffset: Math.round(2 * Math.PI * 22) }}
          whileInView={{ strokeDashoffset: 0 }}
          viewport={{ once: true }} transition={{ duration: 1.2, delay: 0.4, ease }} />
        <motion.text x="56" y="57" fontSize="10" fontWeight="800" fill="#1d1d1f" textAnchor="middle" fontFamily="Inter, sans-serif"
          initial={{ opacity: 0 }} whileInView={{ opacity: 1 }}
          viewport={{ once: true }} transition={{ delay: 0.8 }}>
          99.9%
        </motion.text>
        <text x="56" y="67" fontSize="3.5" fill="#86868b" textAnchor="middle" fontFamily="Inter, sans-serif">availability</text>
        <motion.circle cx="56" cy="58" r="22" stroke="#14b8a6" strokeWidth="1" fill="none"
          animate={{ r: [22, 30], opacity: [0.15, 0] }}
          transition={{ duration: 2, repeat: Infinity }} />
      </motion.g>

      {/* ── Response time card ── */}
      <motion.g initial={{ opacity: 0, y: 8 }} whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }} transition={{ duration: 0.4, delay: 0.35, ease }}>
        <rect x="104" y="14" width="80" height="42" rx="8" fill="white" />
        <rect x="104" y="14" width="80" height="42" rx="8" stroke="#e5e7eb" strokeWidth="0.5" />
        <text x="114" y="28" fontSize="4" fontWeight="600" fill="#86868b" fontFamily="Inter, sans-serif">Response Time</text>
        <motion.text x="114" y="44" fontSize="14" fontWeight="800" fill="#1d1d1f" fontFamily="Inter, sans-serif"
          initial={{ opacity: 0 }} whileInView={{ opacity: 1 }}
          viewport={{ once: true }} transition={{ delay: 0.6 }}>
          &lt; 2h
        </motion.text>
        <motion.path d="M165 34 L170 28 L175 30 L180 24" stroke="#14b8a6" strokeWidth="1.2" fill="none" opacity="0.4" strokeLinecap="round"
          initial={{ pathLength: 0 }} whileInView={{ pathLength: 1 }}
          viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.7, ease }} />
        <circle cx="180" cy="24" r="1.5" fill="#14b8a6" opacity="0.45" />
      </motion.g>

      {/* ── Satisfaction card ── */}
      <motion.g initial={{ opacity: 0, y: 8 }} whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }} transition={{ duration: 0.4, delay: 0.45, ease }}>
        <rect x="192" y="14" width="72" height="42" rx="8" fill="white" />
        <rect x="192" y="14" width="72" height="42" rx="8" stroke="#e5e7eb" strokeWidth="0.5" />
        <text x="202" y="28" fontSize="4" fontWeight="600" fill="#86868b" fontFamily="Inter, sans-serif">Satisfaction</text>
        <motion.text x="202" y="46" fontSize="16" fontWeight="800" fill="#1d1d1f" fontFamily="Inter, sans-serif"
          initial={{ opacity: 0 }} whileInView={{ opacity: 1 }}
          viewport={{ once: true }} transition={{ delay: 0.7 }}>
          4.9
        </motion.text>
        {[0, 1, 2, 3, 4].map((i) => (
          <path key={i} d={`M${237 + i * 5} 40 l.9-1.8 2-.3-1.4-1.4.3-2-1.8.9-1.8-.9.3 2-1.4 1.4 2 .3z`}
            fill="#FFB900" opacity={0.35 + i * 0.06} />
        ))}
      </motion.g>

      {/* ── Ticket resolution bar ── */}
      <motion.g initial={{ opacity: 0, y: 6 }} whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }} transition={{ duration: 0.4, delay: 0.55, ease }}>
        <rect x="104" y="64" width="160" height="30" rx="8" fill="white" />
        <rect x="104" y="64" width="160" height="30" rx="8" stroke="#e5e7eb" strokeWidth="0.5" />
        <text x="114" y="77" fontSize="4" fontWeight="600" fill="#86868b" fontFamily="Inter, sans-serif">Ticket Resolution</text>
        <motion.rect x="114" y="82" width="100" height="5" rx="2.5" fill="#14b8a6" opacity="0.25"
          initial={{ width: 0 }} whileInView={{ width: 100 }}
          viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.7, ease }} />
        <motion.rect x="214" y="82" width="22" height="5" rx="2.5" fill="#2563eb" opacity="0.2"
          initial={{ width: 0 }} whileInView={{ width: 22 }}
          viewport={{ once: true }} transition={{ duration: 0.4, delay: 1, ease }} />
        <motion.rect x="236" y="82" width="8" height="5" rx="2.5" fill="#FFB900" opacity="0.2"
          initial={{ width: 0 }} whileInView={{ width: 8 }}
          viewport={{ once: true }} transition={{ duration: 0.3, delay: 1.2, ease }} />
        <circle cx="116" cy="90" r="1.5" fill="#14b8a6" opacity="0.35" />
        <text x="120" y="92" fontSize="3" fill="#86868b" fontFamily="Inter, sans-serif">Resolved</text>
        <circle cx="148" cy="90" r="1.5" fill="#2563eb" opacity="0.3" />
        <text x="152" y="92" fontSize="3" fill="#86868b" fontFamily="Inter, sans-serif">In Progress</text>
        <circle cx="186" cy="90" r="1.5" fill="#FFB900" opacity="0.3" />
        <text x="190" y="92" fontSize="3" fill="#86868b" fontFamily="Inter, sans-serif">New</text>
      </motion.g>

      {/* ── Health status grid ── */}
      <motion.g initial={{ opacity: 0 }} whileInView={{ opacity: 1 }}
        viewport={{ once: true }} transition={{ delay: 0.8 }}>
        <rect x="16" y="102" width="80" height="30" rx="8" fill="white" />
        <rect x="16" y="102" width="80" height="30" rx="8" stroke="#e5e7eb" strokeWidth="0.5" />
        <text x="26" y="114" fontSize="3.5" fontWeight="600" fill="#86868b" fontFamily="Inter, sans-serif">Health Status</text>
        {["API", "DB", "Auth", "Jobs", "Cache", "CDN"].map((svc, i) => (
          <g key={svc}>
            <motion.circle cx={28 + (i % 3) * 22} cy={122} r="2" fill="#14b8a6" opacity="0.45"
              animate={{ opacity: [0.35, 0.55, 0.35] }}
              transition={{ duration: 2, repeat: Infinity, delay: i * 0.3 }} />
            <text x={28 + (i % 3) * 22} y={127} fontSize="2.5" fill="#86868b" textAnchor="middle" fontFamily="Inter, sans-serif">{svc}</text>
          </g>
        ))}
      </motion.g>

      {/* ── 24/7 badge ── */}
      <motion.g initial={{ opacity: 0, scale: 0.85 }} whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }} transition={{ delay: 1 }}>
        <rect x="104" y="102" width="58" height="30" rx="8" fill="white" />
        <rect x="104" y="102" width="58" height="30" rx="8" stroke="#e5e7eb" strokeWidth="0.5" />
        <text x="133" y="118" fontSize="14" fontWeight="800" fill="#1d1d1f" textAnchor="middle" fontFamily="Inter, sans-serif">24/7</text>
        <text x="133" y="128" fontSize="3.5" fill="#86868b" textAnchor="middle" fontFamily="Inter, sans-serif">Available</text>
      </motion.g>

      {/* ── Activity sparkline ── */}
      <motion.g initial={{ opacity: 0 }} whileInView={{ opacity: 1 }}
        viewport={{ once: true }} transition={{ delay: 0.9 }}>
        <rect x="170" y="102" width="94" height="30" rx="8" fill="white" />
        <rect x="170" y="102" width="94" height="30" rx="8" stroke="#e5e7eb" strokeWidth="0.5" />
        <text x="180" y="114" fontSize="3.5" fontWeight="600" fill="#86868b" fontFamily="Inter, sans-serif">Weekly Activity</text>
        <motion.path d="M180 126 L190 120 L200 124 L210 118 L220 122 L230 116 L240 119 L250 114"
          stroke="url(#supp-spark)" strokeWidth="1.2" fill="none" opacity="0.4" strokeLinecap="round"
          initial={{ pathLength: 0 }} whileInView={{ pathLength: 1 }}
          viewport={{ once: true }} transition={{ duration: 0.8, delay: 1, ease }} />
        <motion.circle cx="250" cy="114" r="1.5" fill="#14b8a6" opacity="0.5"
          initial={{ scale: 0 }} whileInView={{ scale: 1 }}
          viewport={{ once: true }} transition={{ delay: 1.6 }} />
      </motion.g>

      <defs>
        <linearGradient id="supp-spark" x1="180" y1="126" x2="250" y2="114">
          <stop offset="0%" stopColor="#2563eb" /><stop offset="100%" stopColor="#14b8a6" />
        </linearGradient>
      </defs>
    </motion.svg>
  );
}

const steps = [
  {
    number: "01",
    title: "Discover",
    description:
      "We learn your business, pain points, and goals through a thorough discovery process. No assumptions — just listening.",
    visual: DiscoverVisual,
    accent: "from-brand-500 to-brand-600",
  },
  {
    number: "02",
    title: "Implement",
    description:
      "We configure, customize, and integrate your ERP or CRM — on time and on budget. You see progress every step of the way.",
    visual: ImplementVisual,
    accent: "from-brand-500 to-teal-500",
  },
  {
    number: "03",
    title: "Support",
    description:
      "We stay with you post-launch with training, optimization, and managed services. Your success is our ongoing commitment.",
    visual: SupportVisual,
    accent: "from-teal-500 to-teal-600",
  },
];

export default function HowItWorks() {
  return (
    <section className="py-section bg-white">
      <div className="container-apple">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease }}
          className="mb-10"
        >
          <p className="text-brand-500 text-caption font-semibold tracking-wide uppercase mb-3">
            Process
          </p>
          <h2 className="text-display-sm text-apple-black max-w-2xl">
            Simple, transparent,{" "}
            <span className="text-gradient">effective.</span>
          </h2>
          <p className="text-body-lg text-apple-gray mt-3 max-w-xl">
            A straightforward process designed to get you up and running with confidence.
          </p>
        </motion.div>

        <div className="space-y-5">
          {steps.map((step, index) => {
            const Visual = step.visual;
            return (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.5, delay: index * 0.08, ease }}
                className="group grid grid-cols-1 md:grid-cols-[1.2fr_1fr] rounded-[22px] bg-white border border-black/[0.04] shadow-card hover:shadow-card-hover transition-all duration-500 overflow-hidden"
              >
                {/* Illustration — hidden on mobile for cleaner layout */}
                <div className="relative h-[120px] md:h-auto bg-apple-gray-light/50 overflow-hidden" aria-hidden="true">
                  <Visual />
                </div>

                {/* Content */}
                <div className="p-6 md:p-8 flex flex-col justify-center">
                  <div className="flex items-baseline gap-3 mb-3">
                    <span className="text-[clamp(1.5rem,3vw,2rem)] font-bold text-gradient leading-none">
                      {step.number}
                    </span>
                    <div className={`w-8 h-0.5 rounded-full bg-gradient-to-r ${step.accent} opacity-30`} />
                  </div>
                  <h3 className="text-headline text-apple-black mb-2 group-hover:text-brand-500 transition-colors duration-300">
                    {step.title}
                  </h3>
                  <p className="text-body text-apple-gray leading-relaxed max-w-md">
                    {step.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
