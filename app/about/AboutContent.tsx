"use client";

import { motion } from "framer-motion";
import CTABanner from "@/components/ui/CTABanner";

const ease = [0.21, 0.45, 0.27, 0.9] as const;

/** Client-First — satisfaction dashboard with NPS score, feedback cards, and client avatar ring */
function ClientFirstVisual() {
  return (
    <motion.svg viewBox="0 0 260 140" fill="none" className="w-full h-full">
      {/* Background grid */}
      {[0, 1, 2, 3, 4].map(i => (
        <line key={i} x1="10" y1={20 + i * 26} x2="250" y2={20 + i * 26}
          stroke="#2563eb" strokeWidth="0.5" opacity="0.04" />
      ))}

      {/* NPS Score card */}
      <motion.g initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }}
 transition={{ duration: 0.5, delay: 0.15, ease }}>
        <rect x="14" y="16" width="100" height="108" rx="8" fill="white" />
        <rect x="14" y="16" width="100" height="108" rx="8" stroke="#e5e7eb" strokeWidth="0.5" />
        <text x="24" y="32" fontSize="5" fontWeight="600" fill="#1d1d1f" fontFamily="Inter, sans-serif" opacity="0.5">Client Satisfaction</text>

        {/* Circular gauge */}
        <circle cx="64" cy="68" r="24" stroke="#e5e7eb" strokeWidth="3" fill="none" />
        <motion.circle cx="64" cy="68" r="24" stroke="url(#cf-gauge)" strokeWidth="3" fill="none"
          strokeLinecap="round" strokeDasharray="150.8" strokeDashoffset="150.8"
          initial={{ strokeDashoffset: 150.8 }} animate={{ strokeDashoffset: 15 }}
 transition={{ duration: 1, delay: 0.4, ease }}
          transform="rotate(-90 64 68)" />
        <motion.text x="64" y="65" fontSize="14" fontWeight="800" fill="#1d1d1f" textAnchor="middle" fontFamily="Inter, sans-serif"
          initial={{ opacity: 0 }} animate={{ opacity: 0.8 }}
 transition={{ delay: 0.8 }}>98</motion.text>
        <text x="64" y="76" fontSize="4.5" fill="#86868b" textAnchor="middle" fontFamily="Inter, sans-serif">NPS Score</text>

        {/* Mini metric row */}
        <rect x="22" y="100" width="36" height="16" rx="4" fill="#14b8a6" opacity="0.06" />
        <text x="40" y="111" fontSize="4" fontWeight="600" fill="#14b8a6" textAnchor="middle" fontFamily="Inter, sans-serif" opacity="0.6">4.9 ★</text>
        <rect x="64" y="100" width="42" height="16" rx="4" fill="#2563eb" opacity="0.06" />
        <text x="85" y="111" fontSize="4" fontWeight="600" fill="#2563eb" textAnchor="middle" fontFamily="Inter, sans-serif" opacity="0.6">100% Ret.</text>
      </motion.g>

      {/* Client feedback cards */}
      {[
        { y: 16, name: "Alex M.", role: "COO", text: "Transformed our operations", stars: 5, color: "#2563eb" },
        { y: 52, name: "Sarah K.", role: "CFO", text: "Best ERP partner we've had", stars: 5, color: "#14b8a6" },
        { y: 88, name: "James T.", role: "VP Ops", text: "Exceeded every expectation", stars: 5, color: "#00A4EF" },
      ].map((fb, i) => (
        <motion.g key={fb.name} initial={{ opacity: 0, x: 8 }} animate={{ opacity: 1, x: 0 }}
 transition={{ duration: 0.4, delay: 0.3 + i * 0.12, ease }}>
          <rect x="126" y={fb.y} width="120" height="30" rx="6" fill="white" />
          <rect x="126" y={fb.y} width="120" height="30" rx="6" stroke="#e5e7eb" strokeWidth="0.4" />
          {/* Avatar */}
          <circle cx="140" cy={fb.y + 12} r="5" fill={fb.color} opacity="0.12" />
          <circle cx="140" cy={fb.y + 10.5} r="2" fill={fb.color} opacity="0.25" />
          <path d={`M136 ${fb.y + 16} Q140 ${fb.y + 13.5} 144 ${fb.y + 16}`} stroke={fb.color} strokeWidth="0.8" fill="none" opacity="0.2" />
          {/* Info */}
          <text x="150" y={fb.y + 10} fontSize="4.5" fontWeight="600" fill="#1d1d1f" fontFamily="Inter, sans-serif" opacity="0.6">{fb.name}</text>
          <text x="175" y={fb.y + 10} fontSize="3.5" fill="#86868b" fontFamily="Inter, sans-serif">{fb.role}</text>
          <text x="150" y={fb.y + 18} fontSize="3.8" fill="#86868b" fontFamily="Inter, sans-serif" opacity="0.5">&quot;{fb.text}&quot;</text>
          {/* Stars */}
          {[0, 1, 2, 3, 4].map(s => (
            <motion.path key={s}
              d={`M${150 + s * 7} ${fb.y + 24} l1.5-3 1.5 3-3.2-1.8h3.4z`}
              fill="#FFB900" opacity="0.5"
              initial={{ opacity: 0 }} animate={{ opacity: 0.5 }}
 transition={{ delay: 0.6 + i * 0.1 + s * 0.04 }} />
          ))}
        </motion.g>
      ))}

      {/* Pulse on NPS gauge */}
      <motion.circle cx="64" cy="68" r="28" stroke="url(#cf-gauge)" strokeWidth="1" fill="none"
        animate={{ r: [28, 36], opacity: [0.12, 0] }}
        transition={{ duration: 2, repeat: Infinity }} />

      <defs>
        <linearGradient id="cf-gauge" x1="40" y1="44" x2="88" y2="92">
          <stop offset="0%" stopColor="#2563eb" /><stop offset="100%" stopColor="#14b8a6" />
        </linearGradient>
      </defs>
    </motion.svg>
  );
}

/** Transparency — full project dashboard with Gantt chart, budget tracker, milestone timeline */
function TransparencyVisual() {
  return (
    <motion.svg viewBox="0 0 260 140" fill="none" className="w-full h-full">
      {/* Dashboard frame */}
      <motion.g initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }}
 transition={{ duration: 0.5, delay: 0.15, ease }}>
        <rect x="14" y="12" width="232" height="116" rx="8" fill="white" />
        <rect x="14" y="12" width="232" height="116" rx="8" stroke="#e5e7eb" strokeWidth="0.5" />

        {/* Title bar */}
        <rect x="14" y="12" width="232" height="20" rx="8" fill="#f5f5f7" />
        <rect x="14" y="26" width="232" height="6" fill="#f5f5f7" />
        <circle cx="26" cy="22" r="2.5" fill="#FF5F57" opacity="0.6" />
        <circle cx="34" cy="22" r="2.5" fill="#FEBC2E" opacity="0.6" />
        <circle cx="42" cy="22" r="2.5" fill="#28C840" opacity="0.6" />
        <text x="130" y="25" fontSize="5" fontWeight="600" fill="#1d1d1f" textAnchor="middle" fontFamily="Inter, sans-serif" opacity="0.4">Project Dashboard — Live View</text>
      </motion.g>

      {/* Gantt chart section */}
      <motion.g initial={{ opacity: 0 }} animate={{ opacity: 1 }}
 transition={{ duration: 0.4, delay: 0.3, ease }}>
        <text x="24" y="44" fontSize="4.5" fontWeight="600" fill="#1d1d1f" fontFamily="Inter, sans-serif" opacity="0.4">Timeline</text>
        {/* Month headers */}
        {["Jan", "Feb", "Mar", "Apr", "May"].map((m, i) => (
          <text key={m} x={80 + i * 34} y="44" fontSize="3.5" fill="#86868b" textAnchor="middle" fontFamily="Inter, sans-serif" opacity="0.4">{m}</text>
        ))}

        {/* Gantt bars */}
        {[
          { y: 50, label: "Discovery", x: 64, w: 34, color: "#2563eb" },
          { y: 62, label: "Configuration", x: 88, w: 50, color: "#00A4EF" },
          { y: 74, label: "Customization", x: 110, w: 58, color: "#14b8a6" },
          { y: 86, label: "Testing", x: 150, w: 34, color: "#7FBA00" },
          { y: 98, label: "Go-Live", x: 178, w: 20, color: "#FFB900" },
        ].map((bar, i) => (
          <motion.g key={bar.label} initial={{ opacity: 0 }} animate={{ opacity: 1 }}
 transition={{ duration: 0.3, delay: 0.35 + i * 0.08, ease }}>
            <text x="24" y={bar.y + 6} fontSize="3.8" fill="#1d1d1f" fontFamily="Inter, sans-serif" opacity="0.3">{bar.label}</text>
            <motion.rect x={bar.x} y={bar.y} width={bar.w} height="8" rx="4" fill={bar.color} opacity="0.2"
              initial={{ width: 0 }} animate={{ width: bar.w }}
 transition={{ duration: 0.5, delay: 0.5 + i * 0.1, ease }} />
            {/* Progress fill */}
            <motion.rect x={bar.x} y={bar.y} width={bar.w * (i < 2 ? 1 : i === 2 ? 0.6 : 0)} height="8" rx="4" fill={bar.color} opacity="0.45"
              initial={{ width: 0 }} animate={{ width: bar.w * (i < 2 ? 1 : i === 2 ? 0.6 : 0) }}
 transition={{ duration: 0.6, delay: 0.6 + i * 0.1, ease }} />
            {/* Checkmark for completed */}
            {i < 2 && (
              <motion.path d={`M${bar.x + bar.w + 4} ${bar.y + 2} l2 2 4-4`}
                stroke="#14b8a6" strokeWidth="1.2" strokeLinecap="round" fill="none" opacity="0.5"
                initial={{ pathLength: 0 }} animate={{ pathLength: 1 }}
 transition={{ duration: 0.3, delay: 0.8 + i * 0.1, ease }} />
            )}
          </motion.g>
        ))}
      </motion.g>

      {/* Budget tracker (bottom right) */}
      <motion.g initial={{ opacity: 0, y: 6 }} animate={{ opacity: 1, y: 0 }}
 transition={{ duration: 0.4, delay: 0.7, ease }}>
        <rect x="158" y="98" width="80" height="24" rx="5" fill="#f5f5f7" />
        <text x="166" y="108" fontSize="3.5" fill="#86868b" fontFamily="Inter, sans-serif">Budget</text>
        <text x="196" y="108" fontSize="4" fontWeight="700" fill="#14b8a6" fontFamily="Inter, sans-serif">On Track</text>
        <rect x="166" y="112" width="64" height="3" rx="1.5" fill="#e5e7eb" />
        <motion.rect x="166" y="112" width="38" height="3" rx="1.5" fill="url(#tr-bar)" opacity="0.8"
          initial={{ width: 0 }} animate={{ width: 38 }}
 transition={{ duration: 0.6, delay: 0.9, ease }} />
        <text x="233" y="116" fontSize="3.5" fontWeight="600" fill="#1d1d1f" fontFamily="Inter, sans-serif" opacity="0.3" textAnchor="end">60%</text>
      </motion.g>

      {/* "All data visible" eye badge */}
      <motion.g initial={{ opacity: 0 }} animate={{ opacity: 1 }}
 transition={{ delay: 1 }}>
        <rect x="22" y="108" width="52" height="14" rx="7" fill="#14b8a6" opacity="0.06" />
        <ellipse cx="36" cy="115" rx="4" ry="2.8" stroke="#14b8a6" strokeWidth="0.8" fill="none" opacity="0.35" />
        <circle cx="36" cy="115" r="1.2" fill="#14b8a6" opacity="0.4" />
        <text x="44" y="117" fontSize="3.5" fontWeight="500" fill="#14b8a6" fontFamily="Inter, sans-serif" opacity="0.4">Full visibility</text>
      </motion.g>

      <defs>
        <linearGradient id="tr-bar" x1="166" y1="112" x2="230" y2="112">
          <stop offset="0%" stopColor="#2563eb" /><stop offset="100%" stopColor="#14b8a6" />
        </linearGradient>
      </defs>
    </motion.svg>
  );
}

/** Excellence — code quality dashboard with CI/CD pipeline, test coverage, and deployment status */
function ExcellenceVisual() {
  return (
    <motion.svg viewBox="0 0 260 140" fill="none" className="w-full h-full">
      {/* Main quality dashboard */}
      <motion.g initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }}
 transition={{ duration: 0.5, delay: 0.15, ease }}>
        <rect x="14" y="14" width="120" height="112" rx="8" fill="white" />
        <rect x="14" y="14" width="120" height="112" rx="8" stroke="#e5e7eb" strokeWidth="0.5" />
        <text x="24" y="30" fontSize="5" fontWeight="600" fill="#1d1d1f" fontFamily="Inter, sans-serif" opacity="0.5">Quality Metrics</text>

        {/* Quality score ring */}
        <circle cx="74" cy="62" r="20" stroke="#e5e7eb" strokeWidth="3" fill="none" />
        <motion.circle cx="74" cy="62" r="20" stroke="url(#exc-ring)" strokeWidth="3" fill="none"
          strokeLinecap="round" strokeDasharray="125.6" strokeDashoffset="125.6"
          initial={{ strokeDashoffset: 125.6 }} animate={{ strokeDashoffset: 6.3 }}
 transition={{ duration: 1, delay: 0.4, ease }}
          transform="rotate(-90 74 62)" />
        <motion.text x="74" y="59" fontSize="12" fontWeight="800" fill="#1d1d1f" textAnchor="middle" fontFamily="Inter, sans-serif"
          initial={{ opacity: 0 }} animate={{ opacity: 0.7 }}
 transition={{ delay: 0.8 }}>A+</motion.text>
        <text x="74" y="70" fontSize="4" fill="#86868b" textAnchor="middle" fontFamily="Inter, sans-serif">Code Grade</text>

        {/* Metric pills */}
        {[
          { label: "Test Coverage", value: "97%", color: "#14b8a6" },
          { label: "On-Time", value: "100%", color: "#2563eb" },
          { label: "Zero Defects", value: "✓", color: "#7FBA00" },
        ].map((m, i) => (
          <motion.g key={m.label} initial={{ opacity: 0, y: 4 }} animate={{ opacity: 1, y: 0 }}
 transition={{ duration: 0.3, delay: 0.7 + i * 0.1, ease }}>
            <rect x="22" y={90 + i * 11} width="104" height="9" rx="4.5" fill={m.color} opacity="0.06" />
            <circle cx="28" cy={94.5 + i * 11} r="1.5" fill={m.color} opacity="0.4" />
            <text x="34" y={97 + i * 11} fontSize="3.8" fill="#1d1d1f" fontFamily="Inter, sans-serif" opacity="0.35">{m.label}</text>
            <text x="120" y={97 + i * 11} fontSize="4" fontWeight="700" fill={m.color} fontFamily="Inter, sans-serif" opacity="0.6" textAnchor="end">{m.value}</text>
          </motion.g>
        ))}
      </motion.g>

      {/* CI/CD Pipeline */}
      <motion.g initial={{ opacity: 0, x: 8 }} animate={{ opacity: 1, x: 0 }}
 transition={{ duration: 0.5, delay: 0.3, ease }}>
        <rect x="146" y="14" width="100" height="54" rx="8" fill="white" />
        <rect x="146" y="14" width="100" height="54" rx="8" stroke="#e5e7eb" strokeWidth="0.5" />
        <text x="156" y="30" fontSize="4.5" fontWeight="600" fill="#1d1d1f" fontFamily="Inter, sans-serif" opacity="0.5">CI/CD Pipeline</text>

        {/* Pipeline stages */}
        {[
          { x: 156, label: "Build", status: "pass", color: "#14b8a6" },
          { x: 180, label: "Test", status: "pass", color: "#14b8a6" },
          { x: 204, label: "Review", status: "pass", color: "#14b8a6" },
          { x: 228, label: "Deploy", status: "pass", color: "#14b8a6" },
        ].map((stage, i) => (
          <motion.g key={stage.label} initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }}
 transition={{ duration: 0.3, delay: 0.5 + i * 0.12, ease }}>
            <circle cx={stage.x + 6} cy="44" r="6" fill={stage.color} opacity="0.1" />
            <motion.path d={`M${stage.x + 3} 44 l2 2 4-4`}
              stroke={stage.color} strokeWidth="1.2" strokeLinecap="round" fill="none" opacity="0.6"
              initial={{ pathLength: 0 }} animate={{ pathLength: 1 }}
 transition={{ duration: 0.3, delay: 0.7 + i * 0.12, ease }} />
            <text x={stage.x + 6} y="56" fontSize="3.5" fill="#86868b" textAnchor="middle" fontFamily="Inter, sans-serif">{stage.label}</text>
            {i < 3 && (
              <motion.line x1={stage.x + 13} y1="44" x2={stage.x + 18} y2="44"
                stroke={stage.color} strokeWidth="1" opacity="0.2"
                initial={{ pathLength: 0 }} animate={{ pathLength: 1 }}
 transition={{ duration: 0.2, delay: 0.65 + i * 0.12, ease }} />
            )}
          </motion.g>
        ))}
      </motion.g>

      {/* Deployment history */}
      <motion.g initial={{ opacity: 0, y: 6 }} animate={{ opacity: 1, y: 0 }}
 transition={{ duration: 0.4, delay: 0.6, ease }}>
        <rect x="146" y="76" width="100" height="50" rx="8" fill="white" />
        <rect x="146" y="76" width="100" height="50" rx="8" stroke="#e5e7eb" strokeWidth="0.5" />
        <text x="156" y="90" fontSize="4.5" fontWeight="600" fill="#1d1d1f" fontFamily="Inter, sans-serif" opacity="0.5">Recent Deploys</text>
        {[
          { label: "v2.4.1", time: "2m ago", status: "success" },
          { label: "v2.4.0", time: "1d ago", status: "success" },
          { label: "v2.3.9", time: "3d ago", status: "success" },
        ].map((d, i) => (
          <motion.g key={d.label} initial={{ opacity: 0 }} animate={{ opacity: 1 }}
 transition={{ delay: 0.8 + i * 0.08 }}>
            <circle cx="158" cy={99 + i * 9} r="2" fill="#14b8a6" opacity="0.4" />
            <text x="164" y={101 + i * 9} fontSize="3.8" fontWeight="500" fill="#1d1d1f" fontFamily="Inter, sans-serif" opacity="0.4">{d.label}</text>
            <text x="238" y={101 + i * 9} fontSize="3.5" fill="#86868b" fontFamily="Inter, sans-serif" textAnchor="end">{d.time}</text>
          </motion.g>
        ))}
      </motion.g>

      <defs>
        <linearGradient id="exc-ring" x1="54" y1="42" x2="94" y2="82">
          <stop offset="0%" stopColor="#2563eb" /><stop offset="100%" stopColor="#14b8a6" />
        </linearGradient>
      </defs>
    </motion.svg>
  );
}

/** Partnership — shared workspace with Kanban board, unified comms, and outcome metrics */
function PartnershipVisual() {
  return (
    <motion.svg viewBox="0 0 260 140" fill="none" className="w-full h-full">
      {/* Shared workspace frame */}
      <motion.g initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }}
 transition={{ duration: 0.5, delay: 0.15, ease }}>
        <rect x="14" y="12" width="232" height="116" rx="8" fill="white" />
        <rect x="14" y="12" width="232" height="116" rx="8" stroke="#e5e7eb" strokeWidth="0.5" />
        {/* Header */}
        <rect x="14" y="12" width="232" height="18" rx="8" fill="#f5f5f7" />
        <rect x="14" y="24" width="232" height="6" fill="#f5f5f7" />

        {/* Team avatars in header */}
        {[0, 1, 2].map(i => (
          <g key={`your-${i}`}>
            <circle cx={26 + i * 12} cy="21" r="4.5" fill="#2563eb" opacity="0.12" />
            <circle cx={26 + i * 12} cy="19.5" r="1.8" fill="#2563eb" opacity="0.25" />
          </g>
        ))}
        <text x="62" y="24" fontSize="3.5" fill="#2563eb" fontFamily="Inter, sans-serif" opacity="0.4">Your Team</text>

        <text x="130" y="24" fontSize="4" fill="#1d1d1f" fontFamily="Inter, sans-serif" opacity="0.15" textAnchor="middle">+</text>

        {[0, 1, 2].map(i => (
          <g key={`our-${i}`}>
            <circle cx={150 + i * 12} cy="21" r="4.5" fill="#14b8a6" opacity="0.12" />
            <circle cx={150 + i * 12} cy="19.5" r="1.8" fill="#14b8a6" opacity="0.25" />
          </g>
        ))}
        <text x="186" y="24" fontSize="3.5" fill="#14b8a6" fontFamily="Inter, sans-serif" opacity="0.4">Our Team</text>
      </motion.g>

      {/* Kanban board */}
      {[
        { x: 20, label: "To Do", color: "#86868b", cards: 3 },
        { x: 80, label: "In Progress", color: "#2563eb", cards: 2 },
        { x: 140, label: "Review", color: "#FFB900", cards: 2 },
        { x: 200, label: "Done", color: "#14b8a6", cards: 3 },
      ].map((col, ci) => (
        <motion.g key={col.label} initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}           transition={{ duration: 0.4, delay: 0.3 + ci * 0.08, ease }}>
          {/* Column header */}
          <rect x={col.x} y="36" width="52" height="10" rx="3" fill={col.color} opacity="0.06" />
          <circle cx={col.x + 6} cy="41" r="1.5" fill={col.color} opacity="0.3" />
          <text x={col.x + 12} y="43" fontSize="3.5" fontWeight="600" fill={col.color} fontFamily="Inter, sans-serif" opacity="0.5">{col.label}</text>
          <text x={col.x + 48} y="43" fontSize="3.5" fill={col.color} fontFamily="Inter, sans-serif" opacity="0.3" textAnchor="end">{col.cards}</text>

          {/* Cards */}
          {Array.from({ length: Math.min(col.cards, 3) }).map((_, i) => (
            <motion.g key={i} initial={{ opacity: 0, y: 4 }} animate={{ opacity: 1, y: 0 }}
 transition={{ duration: 0.3, delay: 0.45 + ci * 0.08 + i * 0.06, ease }}>
              <rect x={col.x} y={50 + i * 18} width="52" height="14" rx="4" fill="white" />
              <rect x={col.x} y={50 + i * 18} width="52" height="14" rx="4" stroke="#e5e7eb" strokeWidth="0.3" />
              {/* Task line */}
              <rect x={col.x + 4} y={54 + i * 18} width={24 + (i % 3) * 8} height="2" rx="1" fill={col.color} opacity="0.12" />
              {/* Assignee dot */}
              <circle cx={col.x + 46} cy={57 + i * 18} r="2.5" fill={i % 2 === 0 ? "#2563eb" : "#14b8a6"} opacity="0.15" />
              {/* Done checkmarks in Done column */}
              {ci === 3 && (
                <motion.path d={`M${col.x + 38} ${55 + i * 18} l1.5 1.5 3-3`}
                  stroke="#14b8a6" strokeWidth="0.8" strokeLinecap="round" fill="none" opacity="0.4"
                  initial={{ pathLength: 0 }} animate={{ pathLength: 1 }}
 transition={{ duration: 0.2, delay: 0.8 + i * 0.1, ease }} />
              )}
            </motion.g>
          ))}
        </motion.g>
      ))}

      {/* Outcome metrics bar */}
      <motion.g initial={{ opacity: 0, y: 4 }} animate={{ opacity: 1, y: 0 }}
 transition={{ delay: 0.9 }}>
        <rect x="20" y="106" width="220" height="16" rx="5" fill="url(#part-bg)" opacity="0.06" />
        {[
          { x: 35, label: "Velocity", value: "+45%" },
          { x: 95, label: "Satisfaction", value: "100%" },
          { x: 160, label: "On-Time", value: "100%" },
          { x: 215, label: "Budget", value: "✓" },
        ].map((m) => (
          <g key={m.label}>
            <text x={m.x} y={116} fontSize="3.5" fill="#86868b" fontFamily="Inter, sans-serif" textAnchor="middle">{m.label}</text>
            <text x={m.x} y={121} fontSize="4" fontWeight="700" fill="#2563eb" fontFamily="Inter, sans-serif" textAnchor="middle" opacity="0.5">{m.value}</text>
          </g>
        ))}
      </motion.g>

      <defs>
        <linearGradient id="part-bg" x1="20" y1="114" x2="240" y2="114">
          <stop offset="0%" stopColor="#2563eb" /><stop offset="100%" stopColor="#14b8a6" />
        </linearGradient>
      </defs>
    </motion.svg>
  );
}

/** Story illustration — company journey as a startup-to-scale roadmap */
function StoryVisual() {
  return (
    <motion.svg viewBox="0 0 280 180" fill="none" className="w-full h-full">
      {/* Background grid */}
      {[0, 1, 2, 3, 4, 5].map(i => (
        <line key={`h-${i}`} x1="10" y1={20 + i * 30} x2="270" y2={20 + i * 30}
          stroke="#2563eb" strokeWidth="0.5" opacity="0.03" />
      ))}

      {/* Journey path */}
      <motion.path d="M30 150 C50 140 60 120 80 115 S120 105 140 90 S170 65 190 55 S220 35 250 28"
        stroke="url(#story-path)" strokeWidth="3" fill="none" strokeLinecap="round"
        initial={{ pathLength: 0 }} animate={{ pathLength: 1 }}
 transition={{ duration: 1.5, delay: 0.3, ease }} />
      {/* Path glow */}
      <motion.path d="M30 150 C50 140 60 120 80 115 S120 105 140 90 S170 65 190 55 S220 35 250 28"
        stroke="url(#story-path)" strokeWidth="8" fill="none" strokeLinecap="round" opacity="0.06"
        initial={{ pathLength: 0 }} animate={{ pathLength: 1 }}
 transition={{ duration: 1.5, delay: 0.3, ease }} />

      {/* Milestone 1: Founded */}
      <motion.g initial={{ opacity: 0, scale: 0.5 }} animate={{ opacity: 1, scale: 1 }}
 transition={{ delay: 0.6, ease }}>
        <circle cx="30" cy="150" r="10" fill="#2563eb" opacity="0.08" />
        <circle cx="30" cy="150" r="5" fill="#2563eb" opacity="0.15" />
        <circle cx="30" cy="150" r="2" fill="#2563eb" opacity="0.5" />
        {/* Small building */}
        <rect x="22" y="126" width="16" height="14" rx="2" fill="#2563eb" opacity="0.06" stroke="#2563eb" strokeWidth="0.5" />
        <rect x="26" y="130" width="3" height="3" rx="0.5" fill="#2563eb" opacity="0.1" />
        <rect x="31" y="130" width="3" height="3" rx="0.5" fill="#2563eb" opacity="0.1" />
        <text x="30" y="166" fontSize="4.5" fontWeight="600" fill="#2563eb" textAnchor="middle" fontFamily="Inter, sans-serif" opacity="0.4">Founded</text>
      </motion.g>

      {/* Milestone 2: First Clients */}
      <motion.g initial={{ opacity: 0, scale: 0.5 }} animate={{ opacity: 1, scale: 1 }}
 transition={{ delay: 0.9, ease }}>
        <circle cx="95" cy="110" r="10" fill="#00A4EF" opacity="0.08" />
        <circle cx="95" cy="110" r="5" fill="#00A4EF" opacity="0.15" />
        <circle cx="95" cy="110" r="2" fill="#00A4EF" opacity="0.5" />
        {/* Handshake icon */}
        <motion.path d="M86 90 L90 86 L96 92 L100 86 L104 90" stroke="#00A4EF" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" fill="none" opacity="0.25"
          initial={{ pathLength: 0 }} animate={{ pathLength: 1 }}
 transition={{ duration: 0.5, delay: 1, ease }} />
        <text x="95" y="126" fontSize="4.5" fontWeight="600" fill="#00A4EF" textAnchor="middle" fontFamily="Inter, sans-serif" opacity="0.4">First Clients</text>
      </motion.g>

      {/* Milestone 3: Growing */}
      <motion.g initial={{ opacity: 0, scale: 0.5 }} animate={{ opacity: 1, scale: 1 }}
 transition={{ delay: 1.2, ease }}>
        <circle cx="170" cy="62" r="10" fill="#14b8a6" opacity="0.08" />
        <circle cx="170" cy="62" r="5" fill="#14b8a6" opacity="0.15" />
        <circle cx="170" cy="62" r="2" fill="#14b8a6" opacity="0.5" />
        {/* Chart bars */}
        {[0, 1, 2].map(i => (
          <motion.rect key={i} x={160 + i * 7} y={46 - i * 4} width="4" height={8 + i * 4} rx="1" fill="#14b8a6" opacity={0.1 + i * 0.06}
            initial={{ scaleY: 0 }} animate={{ scaleY: 1 }}
 transition={{ duration: 0.3, delay: 1.3 + i * 0.1, ease }}
            style={{ originY: 1 }} />
        ))}
        <text x="170" y="80" fontSize="4.5" fontWeight="600" fill="#14b8a6" textAnchor="middle" fontFamily="Inter, sans-serif" opacity="0.4">Expanding</text>
      </motion.g>

      {/* Milestone 4: Scaling */}
      <motion.g initial={{ opacity: 0, scale: 0.5 }} animate={{ opacity: 1, scale: 1 }}
 transition={{ delay: 1.5, ease }}>
        <circle cx="250" cy="28" r="10" fill="#14b8a6" opacity="0.1" />
        <circle cx="250" cy="28" r="5" fill="#14b8a6" opacity="0.2" />
        <circle cx="250" cy="28" r="2" fill="#14b8a6" opacity="0.6" />
        {/* Rocket */}
        <motion.path d="M244 12 L250 6 L256 12 M250 6 V18" stroke="#14b8a6" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" fill="none" opacity="0.3"
          initial={{ pathLength: 0 }} animate={{ pathLength: 1 }}
 transition={{ duration: 0.5, delay: 1.6, ease }} />
        <text x="250" y="46" fontSize="4.5" fontWeight="600" fill="#14b8a6" textAnchor="middle" fontFamily="Inter, sans-serif" opacity="0.4">Scaling</text>
        {/* Sparkle */}
        <motion.circle cx="250" cy="28" r="12" stroke="#14b8a6" strokeWidth="1" fill="none"
          animate={{ r: [12, 20], opacity: [0.15, 0] }}
          transition={{ duration: 2, repeat: Infinity }} />
      </motion.g>

      <defs>
        <linearGradient id="story-path" x1="30" y1="150" x2="250" y2="28">
          <stop offset="0%" stopColor="#2563eb" /><stop offset="100%" stopColor="#14b8a6" />
        </linearGradient>
      </defs>
    </motion.svg>
  );
}

const values = [
  {
    title: "Client-First",
    description:
      "Your success is our success. Every decision starts with what's best for your business.",
    visual: ClientFirstVisual,
    accent: "bg-brand-500",
  },
  {
    title: "Transparency",
    description:
      "No hidden fees, no jargon, no surprises. We communicate clearly at every stage.",
    visual: TransparencyVisual,
    accent: "bg-teal-500",
  },
  {
    title: "Excellence",
    description:
      "We hold ourselves to the highest standards — in code quality, project delivery, and client service.",
    visual: ExcellenceVisual,
    accent: "bg-brand-500",
  },
  {
    title: "Partnership",
    description:
      "We're not a vendor. We're an extension of your team.",
    visual: PartnershipVisual,
    accent: "bg-teal-500",
  },
];

const stats = [
  { value: "10+", label: "Years Experience", sub: "In ERP & CRM" },
  { value: "2", label: "Platforms", sub: "BC + Salesforce" },
  { value: "100%", label: "SMB Focus", sub: "Right-sized solutions" },
];

export default function AboutContent() {
  return (
    <>
      {/* Hero */}
      <section className="relative pt-6 pb-10 md:pt-8 md:pb-14 overflow-hidden">
        <div className="absolute inset-0 mesh-gradient" />
        <div className="container-apple relative z-10">
          <p
            className="text-brand-500 text-caption font-semibold tracking-wide uppercase mb-4"
          >
            About Us
          </p>
          <h1
            className="text-display text-apple-black max-w-3xl"
          >
            Built for businesses that are{" "}
            <span className="text-gradient">ready to grow.</span>
          </h1>
          <p
            className="text-body-lg text-apple-gray mt-4 max-w-xl"
          >
            We bring enterprise-grade ERP and CRM to SMBs — without the enterprise complexity.
          </p>
        </div>
      </section>

      {/* Stats bar */}
      <section className="pb-8 pt-2">
        <div className="container-apple">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
             transition={{ duration: 0.6, ease }}
            className="grid grid-cols-3 gap-4 rounded-[22px] bg-apple-black p-6 md:p-8"
          >
            {stats.map((stat, i) => (
              <div key={stat.label} className={`text-center ${i < 2 ? "border-r border-white/10" : ""}`}>
                <motion.p
                  className="text-[clamp(1.5rem,3vw,2.25rem)] font-bold text-gradient leading-none"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                   transition={{ delay: 0.3 + i * 0.1, ease }}
                >
                  {stat.value}
                </motion.p>
                <p className="text-[0.75rem] font-semibold text-white mt-1.5">{stat.label}</p>
                <p className="text-[0.625rem] text-apple-gray mt-0.5">{stat.sub}</p>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-section-sm">
        <div className="container-apple">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
             transition={{ duration: 0.6, ease }}
            className="grid grid-cols-1 md:grid-cols-[1.1fr_1fr] gap-4 md:gap-5 rounded-[22px] bg-white border border-black/[0.04] shadow-card overflow-hidden"
          >
            {/* Story illustration */}
            <div className="relative h-[220px] md:h-auto bg-apple-gray-light/50 flex items-center justify-center overflow-hidden p-6">
              <StoryVisual />
            </div>

            {/* Story text */}
            <div className="p-6 md:p-8 flex flex-col justify-center">
              <p className="text-brand-500 text-caption font-semibold tracking-wide uppercase mb-3">
                Our Story
              </p>
              <div className="space-y-4 text-body text-apple-gray leading-relaxed">
                <p>
                  ERP Biz Apps was founded with a simple belief: small and mid-size
                  businesses deserve the same powerful technology that enterprises
                  rely on — without the complexity, the inflated budgets, or the
                  impersonal service.
                </p>
                <p>
                  We are a team of ERP and CRM professionals with deep expertise in
                  Microsoft Dynamics 365 Business Central and Salesforce. We&apos;ve
                  spent years implementing, customizing, and supporting these
                  platforms across industries.
                </p>
                <p>
                  Whether you&apos;re replacing spreadsheets with a real ERP,
                  upgrading from a legacy system, or looking for a CRM that actually
                  works the way your team sells — we&apos;re here to make it happen.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Mission */}
      <section className="py-section-sm">
        <div className="container-apple">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
             transition={{ duration: 0.7, ease }}
            className="rounded-[22px] bg-apple-black p-8 md:p-12 text-center relative overflow-hidden"
          >
            {/* Glow orbs */}
            <div className="absolute top-0 left-1/4 w-[300px] h-[200px] bg-brand-500/10 rounded-full blur-[80px]" />
            <div className="absolute bottom-0 right-1/4 w-[250px] h-[200px] bg-teal-500/10 rounded-full blur-[80px]" />

            <div className="relative z-10">
              <p className="text-brand-400 text-caption font-semibold tracking-wide uppercase mb-4">
                Our Mission
              </p>
              <blockquote className="text-display-sm text-white max-w-3xl mx-auto">
                &ldquo;To empower growing businesses with smart, scalable technology
                — delivered with transparency, expertise, and genuine
                partnership.&rdquo;
              </blockquote>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-section-sm">
        <div className="container-apple">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
             transition={{ duration: 0.6, ease }}
            className="mb-8"
          >
            <p className="text-brand-500 text-caption font-semibold tracking-wide uppercase mb-3">
              Values
            </p>
            <h2 className="text-display-sm text-apple-black max-w-2xl">
              The principles behind{" "}
              <span className="text-gradient">every project.</span>
            </h2>
            <p className="text-body-lg text-apple-gray mt-3 max-w-xl">
              These guide every decision, every line of code, and every client relationship.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-5">
            {values.map((value, index) => {
              const Visual = value.visual;
              return (
                <motion.div
                  key={value.title}
                  initial={{ opacity: 0, y: 24 }}
                  animate={{ opacity: 1, y: 0 }}
                   transition={{ duration: 0.5, delay: index * 0.08, ease }}
                  className="group rounded-[22px] bg-white border border-black/[0.04] shadow-card hover:shadow-card-hover transition-all duration-500 overflow-hidden"
                >
                  {/* Illustration area */}
                  <div className="relative h-[160px] bg-apple-gray-light/50 overflow-hidden">
                    <Visual />
                  </div>

                  {/* Content */}
                  <div className="p-5 md:p-6">
                    <div className="flex items-center gap-2 mb-3">
                      <div className={`w-1.5 h-1.5 rounded-full ${value.accent}`} />
                      <span className="text-[0.6875rem] font-semibold text-apple-gray-dark tracking-tight">
                        Core Value
                      </span>
                    </div>
                    <h3 className="text-[1.0625rem] font-semibold text-apple-black leading-snug mb-2 group-hover:text-brand-500 transition-colors duration-300">
                      {value.title}
                    </h3>
                    <p className="text-[0.8125rem] text-apple-gray leading-relaxed">
                      {value.description}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      <CTABanner
        title="Ready to partner with a team that puts your business first?"
        buttonText="Contact Us Today"
        buttonHref="/contact"
      />
    </>
  );
}
