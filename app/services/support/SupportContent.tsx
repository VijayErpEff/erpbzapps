"use client";

import { motion } from "framer-motion";
import CTABanner from "@/components/ui/CTABanner";
import Button from "@/components/ui/Button";

const ease = [0.21, 0.45, 0.27, 0.9] as const;

/* ─── Service Card Data ────────────────────────────────────── */

const services = [
  {
    title: "Helpdesk & Issue Resolution",
    badge: { color: "bg-brand-500", label: "Avg. Resolution", sub: "< 4 hrs" },
    description:
      "Fast, responsive support when your team hits a snag — ticket tracking, SLA management, and real-time status updates.",
    illustration: "helpdesk",
  },
  {
    title: "System Monitoring",
    badge: { color: "bg-teal-500", label: "Uptime", sub: "99.9 %" },
    description:
      "Proactive monitoring to catch and resolve issues before they impact your business. Real-time dashboards and instant alerting.",
    illustration: "monitoring",
  },
  {
    title: "Periodic Health Checks",
    badge: { color: "bg-brand-500", label: "Health Score", sub: "96 / 100" },
    description:
      "Regular audits to ensure peak performance, identify optimization opportunities, and keep configurations clean.",
    illustration: "healthcheck",
  },
  {
    title: "User Training",
    badge: { color: "bg-teal-500", label: "Completion", sub: "92 %" },
    description:
      "Ongoing training for new team members, new features, and best practices — delivered in bite-sized sessions.",
    illustration: "training",
  },
  {
    title: "Feature Enhancements",
    badge: {
      color: "bg-brand-500",
      label: "Releases",
      sub: "Monthly",
    },
    description:
      "Continuous improvements and new features as your business evolves — planned, tested, and deployed with zero disruption.",
    illustration: "enhancements",
  },
];

/* ─── Plan Data ────────────────────────────────────────────── */

const plans = [
  {
    name: "Essential",
    description: "Reliable coverage for stable environments.",
    features: [
      "Email support during business hours",
      "48-hour response time",
      "Monthly system health check",
      "Knowledge base access",
      "Quarterly usage report",
    ],
  },
  {
    name: "Professional",
    description: "Proactive support for growing businesses.",
    features: [
      "Email & phone support",
      "24-hour response time",
      "Bi-weekly health checks",
      "Quarterly optimization review",
      "Priority issue escalation",
      "Dedicated Slack channel",
    ],
    highlighted: true,
  },
  {
    name: "Premium",
    description: "A dedicated support partner for your team.",
    features: [
      "Dedicated support contact",
      "4-hour response time",
      "Weekly monitoring reports",
      "Monthly strategy sessions",
      "Unlimited feature enhancements",
      "24/7 critical issue support",
    ],
  },
];

/* ─── Inline SVG Illustrations ─────────────────────────────── */

function HelpdeskSVG() {
  return (
    <svg
      viewBox="0 0 280 140"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="w-full h-full"
    >
      {/* Ticket cards */}
      <rect x="24" y="18" width="112" height="28" rx="6" fill="#fff" fillOpacity="0.9" />
      <rect x="24" y="52" width="112" height="28" rx="6" fill="#fff" fillOpacity="0.9" />
      <rect x="24" y="86" width="112" height="28" rx="6" fill="#fff" fillOpacity="0.7" />

      {/* Status dots */}
      <circle cx="38" cy="32" r="4" fill="#22c55e" />
      <circle cx="38" cy="66" r="4" fill="#f59e0b" />
      <circle cx="38" cy="100" r="4" fill="#2563eb" />

      {/* Ticket text lines */}
      <rect x="48" y="28" width="56" height="3" rx="1.5" fill="#1d1d1f" fillOpacity="0.5" />
      <rect x="48" y="35" width="38" height="2.5" rx="1.25" fill="#86868b" fillOpacity="0.4" />
      <rect x="48" y="62" width="62" height="3" rx="1.5" fill="#1d1d1f" fillOpacity="0.5" />
      <rect x="48" y="69" width="44" height="2.5" rx="1.25" fill="#86868b" fillOpacity="0.4" />
      <rect x="48" y="96" width="50" height="3" rx="1.5" fill="#1d1d1f" fillOpacity="0.35" />
      <rect x="48" y="103" width="34" height="2.5" rx="1.25" fill="#86868b" fillOpacity="0.3" />

      {/* Priority badges */}
      <rect x="112" y="26" width="18" height="12" rx="3" fill="#dcfce7" />
      <rect x="115" y="30" width="12" height="4" rx="2" fill="#22c55e" fillOpacity="0.6" />
      <rect x="112" y="60" width="18" height="12" rx="3" fill="#fef3c7" />
      <rect x="115" y="64" width="12" height="4" rx="2" fill="#f59e0b" fillOpacity="0.6" />

      {/* Detail panel */}
      <rect x="148" y="18" width="108" height="96" rx="8" fill="#fff" fillOpacity="0.9" />
      <rect x="160" y="30" width="60" height="4" rx="2" fill="#1d1d1f" fillOpacity="0.5" />
      <rect x="160" y="40" width="80" height="3" rx="1.5" fill="#86868b" fillOpacity="0.3" />
      <rect x="160" y="47" width="72" height="3" rx="1.5" fill="#86868b" fillOpacity="0.3" />
      <rect x="160" y="54" width="64" height="3" rx="1.5" fill="#86868b" fillOpacity="0.3" />

      {/* Divider */}
      <rect x="160" y="64" width="82" height="1" rx="0.5" fill="#86868b" fillOpacity="0.15" />

      {/* Chat bubbles */}
      <rect x="160" y="72" width="56" height="14" rx="5" fill="#2563eb" fillOpacity="0.1" />
      <rect x="164" y="77" width="36" height="3" rx="1.5" fill="#2563eb" fillOpacity="0.5" />
      <rect x="184" y="92" width="56" height="14" rx="5" fill="#14b8a6" fillOpacity="0.1" />
      <rect x="188" y="97" width="40" height="3" rx="1.5" fill="#14b8a6" fillOpacity="0.5" />

      {/* Floating resolved badge */}
      <motion.g
        animate={{ opacity: [0.5, 1, 0.5] }}
        transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
      >
        <rect x="204" y="26" width="42" height="16" rx="4" fill="#dcfce7" />
        <text x="212" y="37" fontSize="7" fontWeight="600" fill="#16a34a">
          Resolved
        </text>
      </motion.g>
    </svg>
  );
}

function MonitoringSVG() {
  return (
    <svg
      viewBox="0 0 280 140"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="w-full h-full"
    >
      {/* Main dashboard panel */}
      <rect x="20" y="14" width="240" height="112" rx="10" fill="#fff" fillOpacity="0.9" />

      {/* Header bar */}
      <rect x="30" y="22" width="220" height="20" rx="4" fill="#f5f5f7" />
      <circle cx="40" cy="32" r="3" fill="#ef4444" fillOpacity="0.7" />
      <circle cx="50" cy="32" r="3" fill="#f59e0b" fillOpacity="0.7" />
      <circle cx="60" cy="32" r="3" fill="#22c55e" fillOpacity="0.7" />
      <rect x="150" y="29" width="40" height="6" rx="3" fill="#2563eb" fillOpacity="0.15" />
      <rect x="196" y="29" width="44" height="6" rx="3" fill="#14b8a6" fillOpacity="0.12" />

      {/* Uptime graph area */}
      <rect x="30" y="50" width="138" height="68" rx="6" fill="#f5f5f7" fillOpacity="0.6" />

      {/* Y-axis labels */}
      <text x="34" y="60" fontSize="5" fill="#86868b" fillOpacity="0.6">100%</text>
      <text x="37" y="78" fontSize="5" fill="#86868b" fillOpacity="0.6">95%</text>
      <text x="37" y="96" fontSize="5" fill="#86868b" fillOpacity="0.6">90%</text>
      <text x="37" y="113" fontSize="5" fill="#86868b" fillOpacity="0.6">85%</text>

      {/* Grid lines */}
      <line x1="50" y1="57" x2="162" y2="57" stroke="#86868b" strokeOpacity="0.08" strokeWidth="0.5" />
      <line x1="50" y1="75" x2="162" y2="75" stroke="#86868b" strokeOpacity="0.08" strokeWidth="0.5" />
      <line x1="50" y1="93" x2="162" y2="93" stroke="#86868b" strokeOpacity="0.08" strokeWidth="0.5" />
      <line x1="50" y1="111" x2="162" y2="111" stroke="#86868b" strokeOpacity="0.08" strokeWidth="0.5" />

      {/* Uptime line chart */}
      <motion.path
        d="M50 60 L66 59 L82 58 L98 60 L108 59 L118 58 L130 59 L142 58 L154 57 L162 58"
        stroke="#2563eb"
        strokeWidth="2"
        strokeLinecap="round"
        fill="none"
        initial={{ pathLength: 0, opacity: 0 }}
        animate={{ pathLength: 1, opacity: 1 }}
        transition={{ duration: 2, ease: "easeOut" }}
      />
      {/* Area fill under line */}
      <path
        d="M50 60 L66 59 L82 58 L98 60 L108 59 L118 58 L130 59 L142 58 L154 57 L162 58 V111 H50 Z"
        fill="url(#uptimeGrad)"
        opacity="0.15"
      />
      <defs>
        <linearGradient id="uptimeGrad" x1="106" y1="57" x2="106" y2="111" gradientUnits="userSpaceOnUse">
          <stop stopColor="#2563eb" />
          <stop offset="1" stopColor="#2563eb" stopOpacity="0" />
        </linearGradient>
      </defs>

      {/* Right side metric cards */}
      <rect x="178" y="50" width="72" height="30" rx="6" fill="#f5f5f7" fillOpacity="0.6" />
      <text x="186" y="62" fontSize="5.5" fontWeight="500" fill="#86868b">CPU Usage</text>
      <text x="186" y="74" fontSize="10" fontWeight="700" fill="#1d1d1f" fillOpacity="0.8">12 %</text>
      <rect x="230" y="66" width="14" height="8" rx="2" fill="#dcfce7" />
      <text x="233" y="73" fontSize="5" fontWeight="600" fill="#16a34a">OK</text>

      <rect x="178" y="86" width="72" height="30" rx="6" fill="#f5f5f7" fillOpacity="0.6" />
      <text x="186" y="98" fontSize="5.5" fontWeight="500" fill="#86868b">Memory</text>
      <text x="186" y="110" fontSize="10" fontWeight="700" fill="#1d1d1f" fillOpacity="0.8">4.2 GB</text>
      <rect x="230" y="102" width="14" height="8" rx="2" fill="#dcfce7" />
      <text x="233" y="109" fontSize="5" fontWeight="600" fill="#16a34a">OK</text>

      {/* Pulsing live indicator */}
      <motion.circle
        cx="236"
        cy="32"
        r="3"
        fill="#22c55e"
        animate={{ opacity: [0.4, 1, 0.4], scale: [0.9, 1.1, 0.9] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
      />
    </svg>
  );
}

function HealthCheckSVG() {
  return (
    <svg
      viewBox="0 0 280 140"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="w-full h-full"
    >
      {/* Report panel */}
      <rect x="30" y="12" width="220" height="116" rx="10" fill="#fff" fillOpacity="0.9" />

      {/* Header */}
      <rect x="42" y="22" width="80" height="5" rx="2.5" fill="#1d1d1f" fillOpacity="0.6" />
      <rect x="42" y="31" width="52" height="3" rx="1.5" fill="#86868b" fillOpacity="0.35" />

      {/* Score circle */}
      <circle cx="210" cy="36" r="18" stroke="#f5f5f7" strokeWidth="4" fill="none" />
      <motion.circle
        cx="210"
        cy="36"
        r="18"
        stroke="#2563eb"
        strokeWidth="4"
        fill="none"
        strokeLinecap="round"
        strokeDasharray="113"
        initial={{ strokeDashoffset: 113 }}
        animate={{ strokeDashoffset: 4.5 }}
        transition={{ duration: 1.8, ease: "easeOut" }}
        style={{ transform: "rotate(-90deg)", transformOrigin: "210px 36px" }}
      />
      <text x="200" y="39" fontSize="11" fontWeight="700" fill="#1d1d1f" fillOpacity="0.8">96</text>
      <text x="218" y="39" fontSize="6" fontWeight="500" fill="#86868b">/100</text>

      {/* Divider */}
      <rect x="42" y="46" width="196" height="1" rx="0.5" fill="#86868b" fillOpacity="0.1" />

      {/* Audit items with checkmarks */}
      {[
        { y: 56, label: "Database Performance", status: "pass" },
        { y: 70, label: "Security Configuration", status: "pass" },
        { y: 84, label: "API Response Times", status: "pass" },
        { y: 98, label: "Data Integrity Checks", status: "warn" },
        { y: 112, label: "Backup Verification", status: "pass" },
      ].map((item) => (
        <g key={item.label}>
          {/* Check or warning icon */}
          {item.status === "pass" ? (
            <g>
              <circle cx="52" cy={item.y + 2} r="5" fill="#dcfce7" />
              <path
                d={`M${49} ${item.y + 2}L${51} ${item.y + 4}L${55} ${item.y}`}
                stroke="#16a34a"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                fill="none"
              />
            </g>
          ) : (
            <g>
              <circle cx="52" cy={item.y + 2} r="5" fill="#fef3c7" />
              <text x="50.5" y={item.y + 5.5} fontSize="8" fontWeight="700" fill="#f59e0b">!</text>
            </g>
          )}
          {/* Label */}
          <text x="62" y={item.y + 5} fontSize="6.5" fontWeight="500" fill="#1d1d1f" fillOpacity="0.6">
            {item.label}
          </text>
          {/* Progress bar bg */}
          <rect x="160" y={item.y} width="66" height="5" rx="2.5" fill="#f5f5f7" />
          {/* Progress bar fill */}
          <motion.rect
            x="160"
            y={item.y}
            width={item.status === "pass" ? "66" : "50"}
            height="5"
            rx="2.5"
            fill={item.status === "pass" ? "#2563eb" : "#f59e0b"}
            fillOpacity="0.35"
            initial={{ width: 0 }}
            animate={{ width: item.status === "pass" ? 66 : 50 }}
            transition={{ duration: 1.2, ease: "easeOut" }}
          />
        </g>
      ))}
    </svg>
  );
}

function TrainingSVG() {
  return (
    <svg
      viewBox="0 0 280 140"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="w-full h-full"
    >
      {/* Main panel */}
      <rect x="20" y="12" width="240" height="116" rx="10" fill="#fff" fillOpacity="0.9" />

      {/* Left sidebar — course list */}
      <rect x="28" y="22" width="76" height="98" rx="6" fill="#f5f5f7" fillOpacity="0.7" />
      <rect x="34" y="28" width="48" height="4" rx="2" fill="#1d1d1f" fillOpacity="0.45" />

      {/* Course items */}
      {[36, 52, 68, 84].map((y, i) => (
        <g key={y}>
          <rect
            x="34"
            y={y}
            width="64"
            height="12"
            rx="3"
            fill={i === 1 ? "#2563eb" : "#fff"}
            fillOpacity={i === 1 ? 0.1 : 0.8}
          />
          <rect
            x="38"
            y={y + 3}
            width={32 + i * 4}
            height="2.5"
            rx="1.25"
            fill={i === 1 ? "#2563eb" : "#86868b"}
            fillOpacity={i === 1 ? 0.6 : 0.35}
          />
          <rect
            x="38"
            y={y + 7.5}
            width="20"
            height="2"
            rx="1"
            fill="#86868b"
            fillOpacity="0.2"
          />
        </g>
      ))}

      {/* Right content — course detail */}
      <rect x="112" y="22" width="140" height="16" rx="3" fill="#f5f5f7" fillOpacity="0.5" />
      <rect x="120" y="27" width="70" height="4" rx="2" fill="#1d1d1f" fillOpacity="0.5" />
      <rect x="200" y="27" width="36" height="6" rx="3" fill="#dcfce7" />
      <text x="207" y="32" fontSize="5" fontWeight="600" fill="#16a34a">Active</text>

      {/* Video player placeholder */}
      <rect x="112" y="42" width="140" height="40" rx="6" fill="#f5f5f7" fillOpacity="0.5" />
      {/* Play button */}
      <circle cx="182" cy="62" r="10" fill="#2563eb" fillOpacity="0.12" />
      <path d="M179 57L187 62L179 67Z" fill="#2563eb" fillOpacity="0.6" />

      {/* Progress section */}
      <text x="112" y="94" fontSize="5.5" fontWeight="500" fill="#86868b" fillOpacity="0.7">
        Module Progress
      </text>
      {/* Full progress bar */}
      <rect x="112" y="98" width="140" height="5" rx="2.5" fill="#f5f5f7" />
      <motion.rect
        x="112"
        y="98"
        height="5"
        rx="2.5"
        fill="url(#progressGrad)"
        initial={{ width: 0 }}
        animate={{ width: 102 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
      />
      <defs>
        <linearGradient id="progressGrad" x1="112" y1="100" x2="252" y2="100" gradientUnits="userSpaceOnUse">
          <stop stopColor="#2563eb" />
          <stop offset="1" stopColor="#14b8a6" />
        </linearGradient>
      </defs>
      <text x="112" y="112" fontSize="5" fontWeight="500" fill="#86868b" fillOpacity="0.5">
        6 of 8 modules complete
      </text>

      {/* Completion badges */}
      <rect x="112" y="116" width="28" height="10" rx="3" fill="#2563eb" fillOpacity="0.08" />
      <text x="117" y="123" fontSize="5" fontWeight="600" fill="#2563eb" fillOpacity="0.7">Quiz</text>
      <rect x="144" y="116" width="28" height="10" rx="3" fill="#14b8a6" fillOpacity="0.08" />
      <text x="149" y="123" fontSize="5" fontWeight="600" fill="#14b8a6" fillOpacity="0.7">Lab</text>
      <rect x="176" y="116" width="28" height="10" rx="3" fill="#f59e0b" fillOpacity="0.08" />
      <text x="181" y="123" fontSize="5" fontWeight="600" fill="#f59e0b" fillOpacity="0.7">Cert</text>
    </svg>
  );
}

function EnhancementsSVG() {
  return (
    <svg
      viewBox="0 0 280 140"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="w-full h-full"
    >
      {/* Main panel */}
      <rect x="20" y="12" width="240" height="116" rx="10" fill="#fff" fillOpacity="0.9" />

      {/* Timeline header */}
      <rect x="32" y="22" width="60" height="4" rx="2" fill="#1d1d1f" fillOpacity="0.5" />
      <rect x="32" y="30" width="40" height="3" rx="1.5" fill="#86868b" fillOpacity="0.3" />

      {/* Horizontal timeline track */}
      <rect x="32" y="52" width="216" height="2" rx="1" fill="#f5f5f7" />

      {/* Version milestones */}
      {[
        { x: 52, version: "v2.1", label: "Shipped", color: "#2563eb", done: true },
        { x: 112, version: "v2.2", label: "Shipped", color: "#14b8a6", done: true },
        { x: 172, version: "v2.3", label: "Current", color: "#2563eb", done: false },
        { x: 228, version: "v2.4", label: "Planned", color: "#86868b", done: false },
      ].map((m) => (
        <g key={m.version}>
          {/* Milestone dot */}
          <circle cx={m.x} cy="53" r={m.done ? 5 : 4} fill={m.done ? m.color : "#fff"} stroke={m.color} strokeWidth="1.5" />
          {m.done && (
            <path
              d={`M${m.x - 2} 53L${m.x} 55L${m.x + 3} 51`}
              stroke="#fff"
              strokeWidth="1.2"
              strokeLinecap="round"
              strokeLinejoin="round"
              fill="none"
            />
          )}
          {/* Version label */}
          <text x={m.x - 8} y="46" fontSize="6" fontWeight="600" fill={m.color} fillOpacity={m.done ? 0.8 : 0.5}>
            {m.version}
          </text>
          {/* Status label */}
          <text x={m.x - 8} y="66" fontSize="5" fill="#86868b" fillOpacity="0.5">
            {m.label}
          </text>
        </g>
      ))}

      {/* Completed progress on timeline */}
      <motion.rect
        x="32"
        y="52"
        height="2"
        rx="1"
        fill="url(#timelineGrad)"
        initial={{ width: 0 }}
        animate={{ width: 140 }}
        transition={{ duration: 1.8, ease: "easeOut" }}
      />
      <defs>
        <linearGradient id="timelineGrad" x1="32" y1="53" x2="172" y2="53" gradientUnits="userSpaceOnUse">
          <stop stopColor="#2563eb" />
          <stop offset="1" stopColor="#14b8a6" />
        </linearGradient>
      </defs>

      {/* Feature cards below timeline */}
      <rect x="32" y="76" width="100" height="44" rx="6" fill="#f5f5f7" fillOpacity="0.6" />
      <rect x="40" y="84" width="50" height="3.5" rx="1.75" fill="#1d1d1f" fillOpacity="0.45" />
      <rect x="40" y="91" width="78" height="2.5" rx="1.25" fill="#86868b" fillOpacity="0.3" />
      <rect x="40" y="96" width="66" height="2.5" rx="1.25" fill="#86868b" fillOpacity="0.3" />
      {/* Tag */}
      <rect x="40" y="104" width="30" height="9" rx="3" fill="#2563eb" fillOpacity="0.08" />
      <text x="46" y="111" fontSize="5" fontWeight="500" fill="#2563eb" fillOpacity="0.6">Feature</text>
      <rect x="74" y="104" width="18" height="9" rx="3" fill="#14b8a6" fillOpacity="0.08" />
      <text x="78" y="111" fontSize="5" fontWeight="500" fill="#14b8a6" fillOpacity="0.6">UX</text>

      <rect x="140" y="76" width="100" height="44" rx="6" fill="#f5f5f7" fillOpacity="0.6" />
      <rect x="148" y="84" width="56" height="3.5" rx="1.75" fill="#1d1d1f" fillOpacity="0.45" />
      <rect x="148" y="91" width="74" height="2.5" rx="1.25" fill="#86868b" fillOpacity="0.3" />
      <rect x="148" y="96" width="60" height="2.5" rx="1.25" fill="#86868b" fillOpacity="0.3" />
      <rect x="148" y="104" width="38" height="9" rx="3" fill="#f59e0b" fillOpacity="0.08" />
      <text x="153" y="111" fontSize="5" fontWeight="500" fill="#f59e0b" fillOpacity="0.6">Optimize</text>

      {/* Pulsing "current" indicator */}
      <motion.circle
        cx="172"
        cy="53"
        r="8"
        fill="none"
        stroke="#2563eb"
        strokeWidth="1"
        animate={{ opacity: [0.6, 0, 0.6], scale: [1, 1.6, 1] }}
        transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
      />
    </svg>
  );
}

const illustrationMap: Record<string, React.FC> = {
  helpdesk: HelpdeskSVG,
  monitoring: MonitoringSVG,
  healthcheck: HealthCheckSVG,
  training: TrainingSVG,
  enhancements: EnhancementsSVG,
};

/* ─── Check Icon ───────────────────────────────────────────── */

function CheckIcon({ className }: { className?: string }) {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      className={className}
    >
      <path
        d="M3.5 8.5L6.5 11.5L12.5 4.5"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

/* ─── Component ────────────────────────────────────────────── */

export default function SupportContent() {
  return (
    <>
      {/* ──────────── Hero ──────────── */}
      <section className="relative overflow-hidden pt-6 pb-10 md:pt-8 md:pb-14">
        <div className="absolute inset-0 mesh-gradient" />
        <div className="absolute inset-0 dot-pattern opacity-30" />

        <div className="container-apple relative z-10 text-center">
          <p className="text-brand-500 text-[0.6875rem] font-semibold tracking-widest uppercase mb-4">
            Managed Services
          </p>

          <h1 className="text-display text-apple-black mb-4">
            Go live with confidence.{" "}
            <span className="text-gradient">Stay confident after.</span>
          </h1>

          <p className="text-body-lg text-apple-gray leading-relaxed max-w-2xl mx-auto mb-8">
            Implementation is just the beginning. We offer ongoing support and
            managed services to keep your systems running smoothly, your team
            productive, and your investment protected.
          </p>

          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Button href="/contact" size="lg">
              Explore Support Plans
            </Button>
            <Button href="/services" variant="secondary" size="lg">
              All Services
            </Button>
          </div>
        </div>
      </section>

      {/* ──────────── Services Included ──────────── */}
      <section className="py-section bg-white">
        <div className="container-apple">
          {/* Section header — inline, no SectionHeading */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease }}
            className="text-center mb-10"
          >
            <p className="text-brand-500 text-[0.6875rem] font-semibold tracking-widest uppercase mb-3">
              What&apos;s included
            </p>
            <h2 className="text-display-sm text-apple-black mb-3">
              Comprehensive support services.
            </h2>
            <p className="text-body text-apple-gray max-w-xl mx-auto">
              Everything you need to keep your systems running at peak
              performance.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5">
            {services.map((item, index) => {
              const Illustration = illustrationMap[item.illustration];
              return (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-60px" }}
                  transition={{
                    duration: 0.6,
                    delay: index * 0.08,
                    ease,
                  }}
                  className="group rounded-[22px] bg-white shadow-card hover:shadow-card-hover border border-black/[0.04] transition-all duration-500 overflow-hidden"
                >
                  {/* Illustration area */}
                  <div className="relative h-[140px] bg-apple-gray-light/50 overflow-hidden">
                    <Illustration />
                  </div>

                  {/* Content */}
                  <div className="p-5 md:p-6">
                    {/* Metric badge */}
                    <div className="inline-flex items-center gap-1.5 mb-3">
                      <span
                        className={`w-[6px] h-[6px] rounded-full ${item.badge.color}`}
                      />
                      <span className="text-[0.6875rem] font-medium text-apple-gray">
                        {item.badge.label}
                      </span>
                      <span className="text-[0.6875rem] font-semibold text-apple-black">
                        {item.badge.sub}
                      </span>
                    </div>

                    <h3 className="text-[1.0625rem] font-semibold text-apple-black leading-snug mb-1.5">
                      {item.title}
                    </h3>
                    <p className="text-[0.8125rem] text-apple-gray leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ──────────── Support Plans — dark ──────────── */}
      <section className="py-section bg-apple-black relative overflow-hidden">
        {/* Background mesh */}
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/3 w-[600px] h-[600px] bg-brand-500/5 rounded-full blur-[120px]" />
          <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-teal-500/5 rounded-full blur-[100px]" />
        </div>

        <div className="container-apple relative z-10">
          {/* Section header */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease }}
            className="text-center mb-10"
          >
            <p className="text-brand-500 text-[0.6875rem] font-semibold tracking-widest uppercase mb-3">
              Support plans
            </p>
            <h2 className="text-display-sm text-white mb-3">
              Choose the right level of support.
            </h2>
            <p className="text-body text-apple-gray max-w-xl mx-auto">
              Flexible plans designed to fit your business needs and budget.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-5 max-w-5xl mx-auto">
            {plans.map((plan, index) => (
              <motion.div
                key={plan.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.1,
                  ease,
                }}
                className={`rounded-[22px] p-6 md:p-7 transition-all duration-500 ${
                  plan.highlighted
                    ? "bg-gradient-brand ring-1 ring-white/20 text-white scale-[1.02]"
                    : "bg-white/[0.04] border border-white/[0.06] hover:bg-white/[0.06]"
                }`}
              >
                <h3 className="text-[1.0625rem] font-bold text-white mb-1">
                  {plan.name}
                </h3>
                <p
                  className={`text-[0.8125rem] mb-6 ${
                    plan.highlighted ? "text-white/80" : "text-apple-gray"
                  }`}
                >
                  {plan.description}
                </p>

                <ul className="space-y-3">
                  {plan.features.map((feature) => (
                    <li
                      key={feature}
                      className="flex items-start gap-2.5"
                    >
                      <CheckIcon
                        className={`mt-0.5 flex-shrink-0 ${
                          plan.highlighted
                            ? "text-white"
                            : "text-brand-500"
                        }`}
                      />
                      <span
                        className={`text-[0.8125rem] leading-snug ${
                          plan.highlighted
                            ? "text-white/90"
                            : "text-white/70"
                        }`}
                      >
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>

                <p
                  className={`text-[0.6875rem] mt-6 ${
                    plan.highlighted ? "text-white/60" : "text-white/30"
                  }`}
                >
                  Contact us for pricing
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ──────────── CTA ──────────── */}
      <CTABanner
        title="Need reliable support for your ERP or CRM?"
        subtitle="We've got you covered — from basic helpdesk to full managed services."
        buttonText="Explore Support Plans"
        buttonHref="/contact"
      />
    </>
  );
}
