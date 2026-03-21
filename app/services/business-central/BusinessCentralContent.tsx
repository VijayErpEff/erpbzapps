"use client";

import { motion } from "framer-motion";
import CTABanner from "@/components/ui/CTABanner";
import Button from "@/components/ui/Button";
import { MicrosoftLogo } from "@/components/svg/PartnerLogos";

const ease = [0.21, 0.45, 0.27, 0.9] as const;

/* ------------------------------------------------------------------ */
/*  Offering cards data                                                */
/* ------------------------------------------------------------------ */

const offerings = [
  {
    title: "Implementation & Configuration",
    description:
      "Full setup of Business Central tailored to your financial, inventory, and operational workflows.",
    badge: { color: "#2563eb", label: "Go-Live", sublabel: "8-12 weeks" },
  },
  {
    title: "Customization & Extensions",
    description:
      "Custom AL development and Power Platform extensions to fit your unique requirements.",
    badge: { color: "#14b8a6", label: "AL + Power Platform", sublabel: "Extensible" },
  },
  {
    title: "Migration & Upgrades",
    description:
      "Seamless migration from NAV, GP, QuickBooks, or other systems with zero data loss.",
    badge: { color: "#F25022", label: "Zero Data Loss", sublabel: "Validated" },
  },
  {
    title: "Training & Adoption",
    description:
      "Role-based training to ensure your team is confident and productive from day one.",
    badge: { color: "#7FBA00", label: "Role-Based", sublabel: "Hands-on" },
  },
  {
    title: "Reporting & Analytics",
    description:
      "Power BI dashboards and custom reports for real-time business intelligence.",
    badge: { color: "#00A4EF", label: "Power BI", sublabel: "Real-time" },
  },
];

const benefits = [
  {
    text: "Unified financials, inventory, sales, and operations",
    accent: "#2563eb",
  },
  {
    text: "Cloud-based with automatic updates",
    accent: "#14b8a6",
  },
  {
    text: "Deep Microsoft 365 and Teams integration",
    accent: "#00A4EF",
  },
  {
    text: "Scales as your business grows",
    accent: "#7FBA00",
  },
];

/* ------------------------------------------------------------------ */
/*  Inline SVG illustrations for each offering card                    */
/* ------------------------------------------------------------------ */

function ImplementationSVG() {
  return (
    <motion.svg
      viewBox="0 0 280 120"
      fill="none"
      className="w-full h-full"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-40px" }}
    >
      {/* Dashboard frame */}
      <motion.rect
        x="30" y="10" width="220" height="100" rx="10"
        stroke="#2563eb" strokeWidth="1.5" fill="white"
        variants={{ hidden: { pathLength: 0, opacity: 0 }, visible: { pathLength: 1, opacity: 1 } }}
        transition={{ duration: 1, ease }}
      />
      {/* Top bar */}
      <motion.rect
        x="30" y="10" width="220" height="22" rx="10"
        fill="#2563eb" fillOpacity="0.06"
        variants={{ hidden: { opacity: 0 }, visible: { opacity: 1 } }}
        transition={{ duration: 0.6, delay: 0.3, ease }}
      />
      {/* Window dots */}
      <motion.circle cx="44" cy="21" r="3" fill="#F25022"
        variants={{ hidden: { scale: 0 }, visible: { scale: 1 } }}
        transition={{ duration: 0.3, delay: 0.5 }}
      />
      <motion.circle cx="54" cy="21" r="3" fill="#FFB900"
        variants={{ hidden: { scale: 0 }, visible: { scale: 1 } }}
        transition={{ duration: 0.3, delay: 0.6 }}
      />
      <motion.circle cx="64" cy="21" r="3" fill="#7FBA00"
        variants={{ hidden: { scale: 0 }, visible: { scale: 1 } }}
        transition={{ duration: 0.3, delay: 0.7 }}
      />
      {/* Sidebar nav */}
      <motion.rect
        x="36" y="38" width="50" height="6" rx="3"
        fill="#2563eb" fillOpacity="0.15"
        variants={{ hidden: { opacity: 0, x: -10 }, visible: { opacity: 1, x: 0 } }}
        transition={{ duration: 0.5, delay: 0.4, ease }}
      />
      <motion.rect
        x="36" y="50" width="42" height="6" rx="3"
        fill="#2563eb" fillOpacity="0.10"
        variants={{ hidden: { opacity: 0, x: -10 }, visible: { opacity: 1, x: 0 } }}
        transition={{ duration: 0.5, delay: 0.5, ease }}
      />
      <motion.rect
        x="36" y="62" width="46" height="6" rx="3"
        fill="#2563eb" fillOpacity="0.10"
        variants={{ hidden: { opacity: 0, x: -10 }, visible: { opacity: 1, x: 0 } }}
        transition={{ duration: 0.5, delay: 0.6, ease }}
      />
      <motion.rect
        x="36" y="74" width="38" height="6" rx="3"
        fill="#2563eb" fillOpacity="0.10"
        variants={{ hidden: { opacity: 0, x: -10 }, visible: { opacity: 1, x: 0 } }}
        transition={{ duration: 0.5, delay: 0.7, ease }}
      />
      {/* Main content: gear icon */}
      <motion.path
        d="M152 60 l4-2 l2-4 l2 0 l2 4 l4 2 l0 4 l-4 2 l-2 4 l-2 0 l-2-4 l-4-2z"
        stroke="#2563eb" strokeWidth="1.5" fill="#2563eb" fillOpacity="0.08"
        variants={{ hidden: { pathLength: 0, opacity: 0 }, visible: { pathLength: 1, opacity: 1 } }}
        transition={{ duration: 0.8, delay: 0.6, ease }}
      />
      <motion.circle
        cx="158" cy="62" r="4"
        stroke="#2563eb" strokeWidth="1.5" fill="none"
        variants={{ hidden: { pathLength: 0 }, visible: { pathLength: 1 } }}
        transition={{ duration: 0.6, delay: 0.9, ease }}
      />
      {/* Config panel lines */}
      <motion.rect
        x="180" y="44" width="56" height="7" rx="3.5"
        fill="#14b8a6" fillOpacity="0.12"
        variants={{ hidden: { opacity: 0, x: 10 }, visible: { opacity: 1, x: 0 } }}
        transition={{ duration: 0.5, delay: 0.7, ease }}
      />
      <motion.rect
        x="180" y="56" width="48" height="7" rx="3.5"
        fill="#2563eb" fillOpacity="0.12"
        variants={{ hidden: { opacity: 0, x: 10 }, visible: { opacity: 1, x: 0 } }}
        transition={{ duration: 0.5, delay: 0.8, ease }}
      />
      <motion.rect
        x="180" y="68" width="52" height="7" rx="3.5"
        fill="#7FBA00" fillOpacity="0.12"
        variants={{ hidden: { opacity: 0, x: 10 }, visible: { opacity: 1, x: 0 } }}
        transition={{ duration: 0.5, delay: 0.9, ease }}
      />
      <motion.rect
        x="180" y="80" width="44" height="7" rx="3.5"
        fill="#FFB900" fillOpacity="0.12"
        variants={{ hidden: { opacity: 0, x: 10 }, visible: { opacity: 1, x: 0 } }}
        transition={{ duration: 0.5, delay: 1.0, ease }}
      />
      {/* Toggle switches */}
      <motion.rect x="224" y="45" width="16" height="5" rx="2.5" fill="#14b8a6" fillOpacity="0.5"
        variants={{ hidden: { opacity: 0 }, visible: { opacity: 1 } }}
        transition={{ duration: 0.3, delay: 1.0 }}
      />
      <motion.circle cx="237" cy="47.5" r="3.5" fill="#14b8a6"
        variants={{ hidden: { opacity: 0 }, visible: { opacity: 1 } }}
        transition={{ duration: 0.3, delay: 1.05 }}
      />
      <motion.rect x="224" y="57" width="16" height="5" rx="2.5" fill="#2563eb" fillOpacity="0.5"
        variants={{ hidden: { opacity: 0 }, visible: { opacity: 1 } }}
        transition={{ duration: 0.3, delay: 1.1 }}
      />
      <motion.circle cx="237" cy="59.5" r="3.5" fill="#2563eb"
        variants={{ hidden: { opacity: 0 }, visible: { opacity: 1 } }}
        transition={{ duration: 0.3, delay: 1.15 }}
      />
    </motion.svg>
  );
}

function CustomizationSVG() {
  return (
    <motion.svg
      viewBox="0 0 280 120"
      fill="none"
      className="w-full h-full"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-40px" }}
    >
      {/* Code editor frame */}
      <motion.rect
        x="20" y="8" width="140" height="104" rx="8"
        stroke="#14b8a6" strokeWidth="1.5" fill="white"
        variants={{ hidden: { pathLength: 0, opacity: 0 }, visible: { pathLength: 1, opacity: 1 } }}
        transition={{ duration: 0.8, ease }}
      />
      {/* Editor top bar */}
      <motion.rect
        x="20" y="8" width="140" height="18" rx="8"
        fill="#14b8a6" fillOpacity="0.06"
        variants={{ hidden: { opacity: 0 }, visible: { opacity: 1 } }}
        transition={{ duration: 0.5, delay: 0.3, ease }}
      />
      <motion.text x="40" y="20" fontSize="7" fill="#14b8a6" fontWeight="600" fontFamily="monospace"
        variants={{ hidden: { opacity: 0 }, visible: { opacity: 1 } }}
        transition={{ duration: 0.4, delay: 0.5 }}
      >
        Extension.al
      </motion.text>
      {/* AL code lines */}
      <motion.rect x="28" y="32" width="36" height="4" rx="2" fill="#2563eb" fillOpacity="0.25"
        variants={{ hidden: { opacity: 0, x: -8 }, visible: { opacity: 1, x: 0 } }}
        transition={{ duration: 0.4, delay: 0.5, ease }}
      />
      <motion.rect x="68" y="32" width="52" height="4" rx="2" fill="#14b8a6" fillOpacity="0.20"
        variants={{ hidden: { opacity: 0, x: -8 }, visible: { opacity: 1, x: 0 } }}
        transition={{ duration: 0.4, delay: 0.55, ease }}
      />
      <motion.rect x="36" y="40" width="28" height="4" rx="2" fill="#F25022" fillOpacity="0.20"
        variants={{ hidden: { opacity: 0, x: -8 }, visible: { opacity: 1, x: 0 } }}
        transition={{ duration: 0.4, delay: 0.6, ease }}
      />
      <motion.rect x="68" y="40" width="72" height="4" rx="2" fill="#86868b" fillOpacity="0.15"
        variants={{ hidden: { opacity: 0, x: -8 }, visible: { opacity: 1, x: 0 } }}
        transition={{ duration: 0.4, delay: 0.65, ease }}
      />
      <motion.rect x="36" y="48" width="24" height="4" rx="2" fill="#7FBA00" fillOpacity="0.25"
        variants={{ hidden: { opacity: 0, x: -8 }, visible: { opacity: 1, x: 0 } }}
        transition={{ duration: 0.4, delay: 0.7, ease }}
      />
      <motion.rect x="64" y="48" width="44" height="4" rx="2" fill="#86868b" fillOpacity="0.15"
        variants={{ hidden: { opacity: 0, x: -8 }, visible: { opacity: 1, x: 0 } }}
        transition={{ duration: 0.4, delay: 0.75, ease }}
      />
      <motion.rect x="36" y="56" width="32" height="4" rx="2" fill="#2563eb" fillOpacity="0.25"
        variants={{ hidden: { opacity: 0, x: -8 }, visible: { opacity: 1, x: 0 } }}
        transition={{ duration: 0.4, delay: 0.8, ease }}
      />
      <motion.rect x="72" y="56" width="58" height="4" rx="2" fill="#14b8a6" fillOpacity="0.15"
        variants={{ hidden: { opacity: 0, x: -8 }, visible: { opacity: 1, x: 0 } }}
        transition={{ duration: 0.4, delay: 0.85, ease }}
      />
      <motion.rect x="36" y="64" width="20" height="4" rx="2" fill="#FFB900" fillOpacity="0.25"
        variants={{ hidden: { opacity: 0, x: -8 }, visible: { opacity: 1, x: 0 } }}
        transition={{ duration: 0.4, delay: 0.9, ease }}
      />
      <motion.rect x="60" y="64" width="48" height="4" rx="2" fill="#86868b" fillOpacity="0.12"
        variants={{ hidden: { opacity: 0, x: -8 }, visible: { opacity: 1, x: 0 } }}
        transition={{ duration: 0.4, delay: 0.95, ease }}
      />
      <motion.rect x="28" y="72" width="30" height="4" rx="2" fill="#2563eb" fillOpacity="0.25"
        variants={{ hidden: { opacity: 0, x: -8 }, visible: { opacity: 1, x: 0 } }}
        transition={{ duration: 0.4, delay: 1.0, ease }}
      />
      {/* Cursor blink */}
      <motion.rect x="62" y="71" width="2" height="7" rx="1" fill="#2563eb"
        animate={{ opacity: [1, 0, 1] }}
        transition={{ duration: 1.2, repeat: Infinity, ease: "linear" }}
      />

      {/* Power Platform block */}
      <motion.rect
        x="176" y="14" width="88" height="92" rx="8"
        stroke="#FFB900" strokeWidth="1.5" fill="white"
        variants={{ hidden: { pathLength: 0, opacity: 0 }, visible: { pathLength: 1, opacity: 1 } }}
        transition={{ duration: 0.8, delay: 0.3, ease }}
      />
      <motion.text x="186" y="30" fontSize="6.5" fill="#FFB900" fontWeight="600" fontFamily="Inter, sans-serif"
        variants={{ hidden: { opacity: 0 }, visible: { opacity: 1 } }}
        transition={{ duration: 0.4, delay: 0.6 }}
      >
        Power Platform
      </motion.text>
      {/* Power Apps icon block */}
      <motion.rect x="184" y="38" width="32" height="24" rx="5" fill="#742774" fillOpacity="0.08" stroke="#742774" strokeWidth="0.8"
        variants={{ hidden: { opacity: 0, y: 6 }, visible: { opacity: 1, y: 0 } }}
        transition={{ duration: 0.5, delay: 0.7, ease }}
      />
      <motion.text x="192" y="54" fontSize="5.5" fill="#742774" fontWeight="600"
        variants={{ hidden: { opacity: 0 }, visible: { opacity: 1 } }}
        transition={{ duration: 0.3, delay: 0.9 }}
      >
        Apps
      </motion.text>
      {/* Power Automate icon block */}
      <motion.rect x="222" y="38" width="34" height="24" rx="5" fill="#0066FF" fillOpacity="0.08" stroke="#0066FF" strokeWidth="0.8"
        variants={{ hidden: { opacity: 0, y: 6 }, visible: { opacity: 1, y: 0 } }}
        transition={{ duration: 0.5, delay: 0.8, ease }}
      />
      <motion.text x="225" y="54" fontSize="5" fill="#0066FF" fontWeight="600"
        variants={{ hidden: { opacity: 0 }, visible: { opacity: 1 } }}
        transition={{ duration: 0.3, delay: 1.0 }}
      >
        Automate
      </motion.text>
      {/* Power BI icon block */}
      <motion.rect x="184" y="68" width="32" height="24" rx="5" fill="#F2C811" fillOpacity="0.10" stroke="#F2C811" strokeWidth="0.8"
        variants={{ hidden: { opacity: 0, y: 6 }, visible: { opacity: 1, y: 0 } }}
        transition={{ duration: 0.5, delay: 0.9, ease }}
      />
      <motion.text x="196" y="84" fontSize="5.5" fill="#D4A80A" fontWeight="600"
        variants={{ hidden: { opacity: 0 }, visible: { opacity: 1 } }}
        transition={{ duration: 0.3, delay: 1.1 }}
      >
        BI
      </motion.text>
      {/* Copilot block */}
      <motion.rect x="222" y="68" width="34" height="24" rx="5" fill="#14b8a6" fillOpacity="0.08" stroke="#14b8a6" strokeWidth="0.8"
        variants={{ hidden: { opacity: 0, y: 6 }, visible: { opacity: 1, y: 0 } }}
        transition={{ duration: 0.5, delay: 1.0, ease }}
      />
      <motion.text x="225" y="84" fontSize="5" fill="#14b8a6" fontWeight="600"
        variants={{ hidden: { opacity: 0 }, visible: { opacity: 1 } }}
        transition={{ duration: 0.3, delay: 1.2 }}
      >
        Copilot
      </motion.text>

      {/* Connection arrow */}
      <motion.path
        d="M162 60 L174 60"
        stroke="#86868b" strokeWidth="1.2" strokeDasharray="3 3"
        variants={{ hidden: { pathLength: 0, opacity: 0 }, visible: { pathLength: 1, opacity: 0.5 } }}
        transition={{ duration: 0.6, delay: 0.8, ease }}
      />
      <motion.path
        d="M171 56 L176 60 L171 64"
        stroke="#86868b" strokeWidth="1.2" fill="none"
        variants={{ hidden: { pathLength: 0, opacity: 0 }, visible: { pathLength: 1, opacity: 0.5 } }}
        transition={{ duration: 0.4, delay: 1.0, ease }}
      />
    </motion.svg>
  );
}

function MigrationSVG() {
  return (
    <motion.svg
      viewBox="0 0 280 120"
      fill="none"
      className="w-full h-full"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-40px" }}
    >
      {/* Old system (QuickBooks-style) */}
      <motion.rect
        x="16" y="20" width="84" height="80" rx="8"
        stroke="#86868b" strokeWidth="1.5" fill="white" strokeDasharray="4 3"
        variants={{ hidden: { pathLength: 0, opacity: 0 }, visible: { pathLength: 1, opacity: 1 } }}
        transition={{ duration: 0.8, ease }}
      />
      <motion.text x="30" y="38" fontSize="7" fill="#86868b" fontWeight="600" fontFamily="Inter, sans-serif"
        variants={{ hidden: { opacity: 0 }, visible: { opacity: 0.7 } }}
        transition={{ duration: 0.5, delay: 0.3 }}
      >
        Legacy ERP
      </motion.text>
      {/* Old data rows */}
      <motion.rect x="24" y="46" width="64" height="5" rx="2.5" fill="#86868b" fillOpacity="0.12"
        variants={{ hidden: { opacity: 0 }, visible: { opacity: 1 } }}
        transition={{ duration: 0.4, delay: 0.4 }}
      />
      <motion.rect x="24" y="55" width="56" height="5" rx="2.5" fill="#86868b" fillOpacity="0.10"
        variants={{ hidden: { opacity: 0 }, visible: { opacity: 1 } }}
        transition={{ duration: 0.4, delay: 0.5 }}
      />
      <motion.rect x="24" y="64" width="60" height="5" rx="2.5" fill="#86868b" fillOpacity="0.10"
        variants={{ hidden: { opacity: 0 }, visible: { opacity: 1 } }}
        transition={{ duration: 0.4, delay: 0.6 }}
      />
      <motion.rect x="24" y="73" width="48" height="5" rx="2.5" fill="#86868b" fillOpacity="0.08"
        variants={{ hidden: { opacity: 0 }, visible: { opacity: 1 } }}
        transition={{ duration: 0.4, delay: 0.7 }}
      />
      <motion.rect x="24" y="82" width="52" height="5" rx="2.5" fill="#86868b" fillOpacity="0.08"
        variants={{ hidden: { opacity: 0 }, visible: { opacity: 1 } }}
        transition={{ duration: 0.4, delay: 0.75 }}
      />

      {/* Flow arrows — animated data packets */}
      <motion.path
        d="M108 60 L172 60"
        stroke="#2563eb" strokeWidth="1.5" strokeDasharray="6 4"
        variants={{ hidden: { pathLength: 0, opacity: 0 }, visible: { pathLength: 1, opacity: 1 } }}
        transition={{ duration: 0.8, delay: 0.6, ease }}
      />
      {/* Animated data dots traveling along the arrow */}
      <motion.circle cx="120" cy="60" r="3" fill="#2563eb"
        animate={{ cx: [112, 168], opacity: [0, 1, 1, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: "linear", delay: 1.0 }}
      />
      <motion.circle cx="120" cy="60" r="2.5" fill="#14b8a6"
        animate={{ cx: [112, 168], opacity: [0, 1, 1, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: "linear", delay: 1.5 }}
      />
      <motion.circle cx="120" cy="60" r="2" fill="#FFB900"
        animate={{ cx: [112, 168], opacity: [0, 1, 1, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: "linear", delay: 2.0 }}
      />
      {/* Arrow head */}
      <motion.path
        d="M168 55 L175 60 L168 65"
        stroke="#2563eb" strokeWidth="1.5" fill="none" strokeLinecap="round" strokeLinejoin="round"
        variants={{ hidden: { pathLength: 0, opacity: 0 }, visible: { pathLength: 1, opacity: 1 } }}
        transition={{ duration: 0.4, delay: 1.0, ease }}
      />
      {/* Migration label */}
      <motion.text x="122" y="52" fontSize="5.5" fill="#2563eb" fontWeight="600" fontFamily="Inter, sans-serif"
        variants={{ hidden: { opacity: 0, y: 4 }, visible: { opacity: 1, y: 0 } }}
        transition={{ duration: 0.4, delay: 0.9 }}
      >
        Zero data loss
      </motion.text>

      {/* New system (Business Central) */}
      <motion.rect
        x="180" y="20" width="84" height="80" rx="8"
        stroke="#2563eb" strokeWidth="1.5" fill="white"
        variants={{ hidden: { pathLength: 0, opacity: 0 }, visible: { pathLength: 1, opacity: 1 } }}
        transition={{ duration: 0.8, delay: 0.3, ease }}
      />
      {/* BC header with MS colors */}
      <motion.rect x="180" y="20" width="84" height="18" rx="8" fill="#2563eb" fillOpacity="0.06"
        variants={{ hidden: { opacity: 0 }, visible: { opacity: 1 } }}
        transition={{ duration: 0.5, delay: 0.6 }}
      />
      {/* MS squares in header */}
      <motion.rect x="188" y="24" width="4.5" height="4.5" rx="0.8" fill="#F25022"
        variants={{ hidden: { scale: 0 }, visible: { scale: 1 } }}
        transition={{ duration: 0.3, delay: 0.8 }}
      />
      <motion.rect x="193.5" y="24" width="4.5" height="4.5" rx="0.8" fill="#7FBA00"
        variants={{ hidden: { scale: 0 }, visible: { scale: 1 } }}
        transition={{ duration: 0.3, delay: 0.85 }}
      />
      <motion.rect x="188" y="29.5" width="4.5" height="4.5" rx="0.8" fill="#00A4EF"
        variants={{ hidden: { scale: 0 }, visible: { scale: 1 } }}
        transition={{ duration: 0.3, delay: 0.9 }}
      />
      <motion.rect x="193.5" y="29.5" width="4.5" height="4.5" rx="0.8" fill="#FFB900"
        variants={{ hidden: { scale: 0 }, visible: { scale: 1 } }}
        transition={{ duration: 0.3, delay: 0.95 }}
      />
      <motion.text x="204" y="32" fontSize="6" fill="#2563eb" fontWeight="600" fontFamily="Inter, sans-serif"
        variants={{ hidden: { opacity: 0 }, visible: { opacity: 1 } }}
        transition={{ duration: 0.4, delay: 1.0 }}
      >
        Business Central
      </motion.text>
      {/* New organized data */}
      <motion.rect x="188" y="46" width="64" height="5" rx="2.5" fill="#2563eb" fillOpacity="0.15"
        variants={{ hidden: { opacity: 0, x: 8 }, visible: { opacity: 1, x: 0 } }}
        transition={{ duration: 0.4, delay: 1.1, ease }}
      />
      <motion.rect x="188" y="55" width="56" height="5" rx="2.5" fill="#14b8a6" fillOpacity="0.15"
        variants={{ hidden: { opacity: 0, x: 8 }, visible: { opacity: 1, x: 0 } }}
        transition={{ duration: 0.4, delay: 1.2, ease }}
      />
      <motion.rect x="188" y="64" width="60" height="5" rx="2.5" fill="#7FBA00" fillOpacity="0.15"
        variants={{ hidden: { opacity: 0, x: 8 }, visible: { opacity: 1, x: 0 } }}
        transition={{ duration: 0.4, delay: 1.3, ease }}
      />
      <motion.rect x="188" y="73" width="48" height="5" rx="2.5" fill="#FFB900" fillOpacity="0.15"
        variants={{ hidden: { opacity: 0, x: 8 }, visible: { opacity: 1, x: 0 } }}
        transition={{ duration: 0.4, delay: 1.4, ease }}
      />
      <motion.rect x="188" y="82" width="52" height="5" rx="2.5" fill="#00A4EF" fillOpacity="0.15"
        variants={{ hidden: { opacity: 0, x: 8 }, visible: { opacity: 1, x: 0 } }}
        transition={{ duration: 0.4, delay: 1.5, ease }}
      />
      {/* Check marks */}
      <motion.path d="M254 47 l2 2 l4-4" stroke="#7FBA00" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"
        variants={{ hidden: { pathLength: 0, opacity: 0 }, visible: { pathLength: 1, opacity: 1 } }}
        transition={{ duration: 0.3, delay: 1.3 }}
      />
      <motion.path d="M254 56 l2 2 l4-4" stroke="#7FBA00" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"
        variants={{ hidden: { pathLength: 0, opacity: 0 }, visible: { pathLength: 1, opacity: 1 } }}
        transition={{ duration: 0.3, delay: 1.4 }}
      />
      <motion.path d="M254 65 l2 2 l4-4" stroke="#7FBA00" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"
        variants={{ hidden: { pathLength: 0, opacity: 0 }, visible: { pathLength: 1, opacity: 1 } }}
        transition={{ duration: 0.3, delay: 1.5 }}
      />
    </motion.svg>
  );
}

function TrainingSVG() {
  return (
    <motion.svg
      viewBox="0 0 280 120"
      fill="none"
      className="w-full h-full"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-40px" }}
    >
      {/* Person 1 - completed */}
      <motion.circle cx="52" cy="38" r="12" fill="#7FBA00" fillOpacity="0.10" stroke="#7FBA00" strokeWidth="1.2"
        variants={{ hidden: { scale: 0, opacity: 0 }, visible: { scale: 1, opacity: 1 } }}
        transition={{ duration: 0.5, delay: 0.2, ease }}
      />
      <motion.circle cx="52" cy="34" r="4" fill="#7FBA00" fillOpacity="0.4"
        variants={{ hidden: { scale: 0 }, visible: { scale: 1 } }}
        transition={{ duration: 0.3, delay: 0.4 }}
      />
      <motion.path d="M44 46 Q48 52 52 48 Q56 52 60 46" stroke="#7FBA00" strokeWidth="1.2" fill="none"
        variants={{ hidden: { pathLength: 0 }, visible: { pathLength: 1 } }}
        transition={{ duration: 0.5, delay: 0.5 }}
      />
      {/* Progress bar 1 - full */}
      <motion.rect x="28" y="58" width="48" height="5" rx="2.5" fill="#e5e7eb"
        variants={{ hidden: { opacity: 0 }, visible: { opacity: 1 } }}
        transition={{ duration: 0.3, delay: 0.5 }}
      />
      <motion.rect x="28" y="58" width="48" height="5" rx="2.5" fill="#7FBA00" fillOpacity="0.6"
        variants={{ hidden: { scaleX: 0 }, visible: { scaleX: 1 } }}
        style={{ originX: 0 }}
        transition={{ duration: 0.8, delay: 0.7, ease }}
      />
      <motion.text x="36" y="74" fontSize="5.5" fill="#7FBA00" fontWeight="600"
        variants={{ hidden: { opacity: 0 }, visible: { opacity: 1 } }}
        transition={{ duration: 0.3, delay: 1.0 }}
      >
        100% done
      </motion.text>

      {/* Person 2 - in progress */}
      <motion.circle cx="140" cy="38" r="12" fill="#2563eb" fillOpacity="0.10" stroke="#2563eb" strokeWidth="1.2"
        variants={{ hidden: { scale: 0, opacity: 0 }, visible: { scale: 1, opacity: 1 } }}
        transition={{ duration: 0.5, delay: 0.35, ease }}
      />
      <motion.circle cx="140" cy="34" r="4" fill="#2563eb" fillOpacity="0.4"
        variants={{ hidden: { scale: 0 }, visible: { scale: 1 } }}
        transition={{ duration: 0.3, delay: 0.55 }}
      />
      <motion.path d="M132 46 Q136 52 140 48 Q144 52 148 46" stroke="#2563eb" strokeWidth="1.2" fill="none"
        variants={{ hidden: { pathLength: 0 }, visible: { pathLength: 1 } }}
        transition={{ duration: 0.5, delay: 0.6 }}
      />
      {/* Progress bar 2 - 70% */}
      <motion.rect x="116" y="58" width="48" height="5" rx="2.5" fill="#e5e7eb"
        variants={{ hidden: { opacity: 0 }, visible: { opacity: 1 } }}
        transition={{ duration: 0.3, delay: 0.6 }}
      />
      <motion.rect x="116" y="58" width="34" height="5" rx="2.5" fill="#2563eb" fillOpacity="0.6"
        variants={{ hidden: { scaleX: 0 }, visible: { scaleX: 1 } }}
        style={{ originX: 0 }}
        transition={{ duration: 0.8, delay: 0.8, ease }}
      />
      <motion.text x="126" y="74" fontSize="5.5" fill="#2563eb" fontWeight="600"
        variants={{ hidden: { opacity: 0 }, visible: { opacity: 1 } }}
        transition={{ duration: 0.3, delay: 1.1 }}
      >
        70% done
      </motion.text>

      {/* Person 3 - starting */}
      <motion.circle cx="228" cy="38" r="12" fill="#14b8a6" fillOpacity="0.10" stroke="#14b8a6" strokeWidth="1.2"
        variants={{ hidden: { scale: 0, opacity: 0 }, visible: { scale: 1, opacity: 1 } }}
        transition={{ duration: 0.5, delay: 0.5, ease }}
      />
      <motion.circle cx="228" cy="34" r="4" fill="#14b8a6" fillOpacity="0.4"
        variants={{ hidden: { scale: 0 }, visible: { scale: 1 } }}
        transition={{ duration: 0.3, delay: 0.7 }}
      />
      <motion.path d="M220 46 Q224 52 228 48 Q232 52 236 46" stroke="#14b8a6" strokeWidth="1.2" fill="none"
        variants={{ hidden: { pathLength: 0 }, visible: { pathLength: 1 } }}
        transition={{ duration: 0.5, delay: 0.75 }}
      />
      {/* Progress bar 3 - 30% */}
      <motion.rect x="204" y="58" width="48" height="5" rx="2.5" fill="#e5e7eb"
        variants={{ hidden: { opacity: 0 }, visible: { opacity: 1 } }}
        transition={{ duration: 0.3, delay: 0.7 }}
      />
      <motion.rect x="204" y="58" width="14" height="5" rx="2.5" fill="#14b8a6" fillOpacity="0.6"
        variants={{ hidden: { scaleX: 0 }, visible: { scaleX: 1 } }}
        style={{ originX: 0 }}
        transition={{ duration: 0.8, delay: 0.9, ease }}
      />
      <motion.text x="214" y="74" fontSize="5.5" fill="#14b8a6" fontWeight="600"
        variants={{ hidden: { opacity: 0 }, visible: { opacity: 1 } }}
        transition={{ duration: 0.3, delay: 1.2 }}
      >
        30% done
      </motion.text>

      {/* Learning modules at bottom */}
      <motion.rect x="28" y="84" width="56" height="24" rx="5" fill="#2563eb" fillOpacity="0.04" stroke="#2563eb" strokeWidth="0.8"
        variants={{ hidden: { opacity: 0, y: 8 }, visible: { opacity: 1, y: 0 } }}
        transition={{ duration: 0.5, delay: 0.8, ease }}
      />
      <motion.text x="34" y="97" fontSize="5" fill="#2563eb" fontWeight="500"
        variants={{ hidden: { opacity: 0 }, visible: { opacity: 1 } }}
        transition={{ duration: 0.3, delay: 1.0 }}
      >
        Financials 101
      </motion.text>
      <motion.rect x="92" y="84" width="56" height="24" rx="5" fill="#14b8a6" fillOpacity="0.04" stroke="#14b8a6" strokeWidth="0.8"
        variants={{ hidden: { opacity: 0, y: 8 }, visible: { opacity: 1, y: 0 } }}
        transition={{ duration: 0.5, delay: 0.9, ease }}
      />
      <motion.text x="98" y="97" fontSize="5" fill="#14b8a6" fontWeight="500"
        variants={{ hidden: { opacity: 0 }, visible: { opacity: 1 } }}
        transition={{ duration: 0.3, delay: 1.1 }}
      >
        Inventory Mgmt
      </motion.text>
      <motion.rect x="156" y="84" width="56" height="24" rx="5" fill="#FFB900" fillOpacity="0.04" stroke="#FFB900" strokeWidth="0.8"
        variants={{ hidden: { opacity: 0, y: 8 }, visible: { opacity: 1, y: 0 } }}
        transition={{ duration: 0.5, delay: 1.0, ease }}
      />
      <motion.text x="162" y="97" fontSize="5" fill="#D4A80A" fontWeight="500"
        variants={{ hidden: { opacity: 0 }, visible: { opacity: 1 } }}
        transition={{ duration: 0.3, delay: 1.2 }}
      >
        Sales Orders
      </motion.text>
      <motion.rect x="220" y="84" width="44" height="24" rx="5" fill="#F25022" fillOpacity="0.04" stroke="#F25022" strokeWidth="0.8"
        variants={{ hidden: { opacity: 0, y: 8 }, visible: { opacity: 1, y: 0 } }}
        transition={{ duration: 0.5, delay: 1.1, ease }}
      />
      <motion.text x="226" y="97" fontSize="5" fill="#F25022" fontWeight="500"
        variants={{ hidden: { opacity: 0 }, visible: { opacity: 1 } }}
        transition={{ duration: 0.3, delay: 1.3 }}
      >
        Reporting
      </motion.text>
    </motion.svg>
  );
}

function ReportingSVG() {
  return (
    <motion.svg
      viewBox="0 0 280 120"
      fill="none"
      className="w-full h-full"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-40px" }}
    >
      {/* Power BI frame */}
      <motion.rect
        x="16" y="8" width="248" height="104" rx="10"
        stroke="#2563eb" strokeWidth="1.5" fill="white"
        variants={{ hidden: { pathLength: 0, opacity: 0 }, visible: { pathLength: 1, opacity: 1 } }}
        transition={{ duration: 0.8, ease }}
      />
      {/* Dashboard top bar */}
      <motion.rect x="16" y="8" width="248" height="18" rx="10" fill="#F2C811" fillOpacity="0.08"
        variants={{ hidden: { opacity: 0 }, visible: { opacity: 1 } }}
        transition={{ duration: 0.5, delay: 0.3 }}
      />
      <motion.text x="30" y="20" fontSize="6.5" fill="#D4A80A" fontWeight="700" fontFamily="Inter, sans-serif"
        variants={{ hidden: { opacity: 0 }, visible: { opacity: 1 } }}
        transition={{ duration: 0.4, delay: 0.5 }}
      >
        Power BI Dashboard
      </motion.text>
      {/* KPI cards row */}
      <motion.rect x="24" y="32" width="52" height="26" rx="5" fill="#2563eb" fillOpacity="0.05" stroke="#2563eb" strokeWidth="0.6"
        variants={{ hidden: { opacity: 0, y: 6 }, visible: { opacity: 1, y: 0 } }}
        transition={{ duration: 0.5, delay: 0.5, ease }}
      />
      <motion.text x="30" y="42" fontSize="4.5" fill="#86868b" fontWeight="500"
        variants={{ hidden: { opacity: 0 }, visible: { opacity: 1 } }}
        transition={{ duration: 0.3, delay: 0.7 }}
      >
        Revenue
      </motion.text>
      <motion.text x="30" y="52" fontSize="8" fill="#2563eb" fontWeight="700"
        variants={{ hidden: { opacity: 0 }, visible: { opacity: 1 } }}
        transition={{ duration: 0.3, delay: 0.8 }}
      >
        $2.4M
      </motion.text>

      <motion.rect x="82" y="32" width="52" height="26" rx="5" fill="#7FBA00" fillOpacity="0.05" stroke="#7FBA00" strokeWidth="0.6"
        variants={{ hidden: { opacity: 0, y: 6 }, visible: { opacity: 1, y: 0 } }}
        transition={{ duration: 0.5, delay: 0.6, ease }}
      />
      <motion.text x="88" y="42" fontSize="4.5" fill="#86868b" fontWeight="500"
        variants={{ hidden: { opacity: 0 }, visible: { opacity: 1 } }}
        transition={{ duration: 0.3, delay: 0.8 }}
      >
        Margin
      </motion.text>
      <motion.text x="88" y="52" fontSize="8" fill="#7FBA00" fontWeight="700"
        variants={{ hidden: { opacity: 0 }, visible: { opacity: 1 } }}
        transition={{ duration: 0.3, delay: 0.9 }}
      >
        34.2%
      </motion.text>

      <motion.rect x="140" y="32" width="52" height="26" rx="5" fill="#14b8a6" fillOpacity="0.05" stroke="#14b8a6" strokeWidth="0.6"
        variants={{ hidden: { opacity: 0, y: 6 }, visible: { opacity: 1, y: 0 } }}
        transition={{ duration: 0.5, delay: 0.7, ease }}
      />
      <motion.text x="146" y="42" fontSize="4.5" fill="#86868b" fontWeight="500"
        variants={{ hidden: { opacity: 0 }, visible: { opacity: 1 } }}
        transition={{ duration: 0.3, delay: 0.9 }}
      >
        Orders
      </motion.text>
      <motion.text x="146" y="52" fontSize="8" fill="#14b8a6" fontWeight="700"
        variants={{ hidden: { opacity: 0 }, visible: { opacity: 1 } }}
        transition={{ duration: 0.3, delay: 1.0 }}
      >
        1,847
      </motion.text>

      <motion.rect x="198" y="32" width="58" height="26" rx="5" fill="#F25022" fillOpacity="0.05" stroke="#F25022" strokeWidth="0.6"
        variants={{ hidden: { opacity: 0, y: 6 }, visible: { opacity: 1, y: 0 } }}
        transition={{ duration: 0.5, delay: 0.8, ease }}
      />
      <motion.text x="204" y="42" fontSize="4.5" fill="#86868b" fontWeight="500"
        variants={{ hidden: { opacity: 0 }, visible: { opacity: 1 } }}
        transition={{ duration: 0.3, delay: 1.0 }}
      >
        Fulfillment
      </motion.text>
      <motion.text x="204" y="52" fontSize="8" fill="#F25022" fontWeight="700"
        variants={{ hidden: { opacity: 0 }, visible: { opacity: 1 } }}
        transition={{ duration: 0.3, delay: 1.1 }}
      >
        97.8%
      </motion.text>

      {/* Bar chart area */}
      <motion.rect x="24" y="64" width="110" height="42" rx="5" fill="#f5f5f7" fillOpacity="0.5"
        variants={{ hidden: { opacity: 0 }, visible: { opacity: 1 } }}
        transition={{ duration: 0.4, delay: 0.7 }}
      />
      {/* Chart bars */}
      <motion.rect x="32" y="88" width="8" height="14" rx="1.5" fill="#2563eb" fillOpacity="0.6"
        variants={{ hidden: { scaleY: 0, opacity: 0 }, visible: { scaleY: 1, opacity: 1 } }}
        style={{ originY: 1 }}
        transition={{ duration: 0.5, delay: 0.9, ease }}
      />
      <motion.rect x="44" y="82" width="8" height="20" rx="1.5" fill="#2563eb" fillOpacity="0.7"
        variants={{ hidden: { scaleY: 0, opacity: 0 }, visible: { scaleY: 1, opacity: 1 } }}
        style={{ originY: 1 }}
        transition={{ duration: 0.5, delay: 0.95, ease }}
      />
      <motion.rect x="56" y="78" width="8" height="24" rx="1.5" fill="#14b8a6" fillOpacity="0.7"
        variants={{ hidden: { scaleY: 0, opacity: 0 }, visible: { scaleY: 1, opacity: 1 } }}
        style={{ originY: 1 }}
        transition={{ duration: 0.5, delay: 1.0, ease }}
      />
      <motion.rect x="68" y="84" width="8" height="18" rx="1.5" fill="#14b8a6" fillOpacity="0.6"
        variants={{ hidden: { scaleY: 0, opacity: 0 }, visible: { scaleY: 1, opacity: 1 } }}
        style={{ originY: 1 }}
        transition={{ duration: 0.5, delay: 1.05, ease }}
      />
      <motion.rect x="80" y="74" width="8" height="28" rx="1.5" fill="#7FBA00" fillOpacity="0.7"
        variants={{ hidden: { scaleY: 0, opacity: 0 }, visible: { scaleY: 1, opacity: 1 } }}
        style={{ originY: 1 }}
        transition={{ duration: 0.5, delay: 1.1, ease }}
      />
      <motion.rect x="92" y="70" width="8" height="32" rx="1.5" fill="#7FBA00" fillOpacity="0.8"
        variants={{ hidden: { scaleY: 0, opacity: 0 }, visible: { scaleY: 1, opacity: 1 } }}
        style={{ originY: 1 }}
        transition={{ duration: 0.5, delay: 1.15, ease }}
      />
      <motion.rect x="104" y="68" width="8" height="34" rx="1.5" fill="#2563eb"
        variants={{ hidden: { scaleY: 0, opacity: 0 }, visible: { scaleY: 1, opacity: 1 } }}
        style={{ originY: 1 }}
        transition={{ duration: 0.5, delay: 1.2, ease }}
      />
      <motion.rect x="116" y="72" width="8" height="30" rx="1.5" fill="#2563eb" fillOpacity="0.8"
        variants={{ hidden: { scaleY: 0, opacity: 0 }, visible: { scaleY: 1, opacity: 1 } }}
        style={{ originY: 1 }}
        transition={{ duration: 0.5, delay: 1.25, ease }}
      />

      {/* Line chart area */}
      <motion.rect x="142" y="64" width="114" height="42" rx="5" fill="#f5f5f7" fillOpacity="0.5"
        variants={{ hidden: { opacity: 0 }, visible: { opacity: 1 } }}
        transition={{ duration: 0.4, delay: 0.8 }}
      />
      {/* Trend line */}
      <motion.path
        d="M150 96 L162 90 L174 92 L186 84 L198 80 L210 76 L222 74 L234 70 L246 68"
        stroke="#2563eb" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"
        variants={{ hidden: { pathLength: 0, opacity: 0 }, visible: { pathLength: 1, opacity: 1 } }}
        transition={{ duration: 1.2, delay: 1.0, ease }}
      />
      {/* Area fill under line */}
      <motion.path
        d="M150 96 L162 90 L174 92 L186 84 L198 80 L210 76 L222 74 L234 70 L246 68 L246 102 L150 102 Z"
        fill="#2563eb" fillOpacity="0.06"
        variants={{ hidden: { opacity: 0 }, visible: { opacity: 1 } }}
        transition={{ duration: 0.6, delay: 1.5 }}
      />
      {/* Second trend line */}
      <motion.path
        d="M150 98 L162 95 L174 96 L186 92 L198 88 L210 86 L222 84 L234 82 L246 78"
        stroke="#14b8a6" strokeWidth="1.5" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeDasharray="4 3"
        variants={{ hidden: { pathLength: 0, opacity: 0 }, visible: { pathLength: 1, opacity: 1 } }}
        transition={{ duration: 1.0, delay: 1.3, ease }}
      />
      {/* Data points */}
      <motion.circle cx="186" cy="84" r="2.5" fill="#2563eb"
        variants={{ hidden: { scale: 0 }, visible: { scale: 1 } }}
        transition={{ duration: 0.3, delay: 1.6 }}
      />
      <motion.circle cx="222" cy="74" r="2.5" fill="#2563eb"
        variants={{ hidden: { scale: 0 }, visible: { scale: 1 } }}
        transition={{ duration: 0.3, delay: 1.7 }}
      />
      <motion.circle cx="246" cy="68" r="2.5" fill="#2563eb"
        variants={{ hidden: { scale: 0 }, visible: { scale: 1 } }}
        transition={{ duration: 0.3, delay: 1.8 }}
      />
    </motion.svg>
  );
}

/* ------------------------------------------------------------------ */
/*  Small benefit-section SVGs                                         */
/* ------------------------------------------------------------------ */

function UnifiedSVG() {
  return (
    <motion.svg viewBox="0 0 80 60" fill="none" className="w-full h-full" initial="hidden" whileInView="visible" viewport={{ once: true }}>
      {/* Four connected modules */}
      <motion.rect x="6" y="6" width="28" height="20" rx="4" fill="#2563eb" fillOpacity="0.12" stroke="#2563eb" strokeWidth="0.8"
        variants={{ hidden: { scale: 0 }, visible: { scale: 1 } }} transition={{ duration: 0.4, delay: 0.1, ease }} />
      <motion.text x="12" y="19" fontSize="5" fill="#2563eb" fontWeight="600" variants={{ hidden: { opacity: 0 }, visible: { opacity: 1 } }} transition={{ duration: 0.3, delay: 0.3 }}>FIN</motion.text>
      <motion.rect x="46" y="6" width="28" height="20" rx="4" fill="#14b8a6" fillOpacity="0.12" stroke="#14b8a6" strokeWidth="0.8"
        variants={{ hidden: { scale: 0 }, visible: { scale: 1 } }} transition={{ duration: 0.4, delay: 0.2, ease }} />
      <motion.text x="52" y="19" fontSize="5" fill="#14b8a6" fontWeight="600" variants={{ hidden: { opacity: 0 }, visible: { opacity: 1 } }} transition={{ duration: 0.3, delay: 0.4 }}>INV</motion.text>
      <motion.rect x="6" y="34" width="28" height="20" rx="4" fill="#FFB900" fillOpacity="0.12" stroke="#FFB900" strokeWidth="0.8"
        variants={{ hidden: { scale: 0 }, visible: { scale: 1 } }} transition={{ duration: 0.4, delay: 0.3, ease }} />
      <motion.text x="10" y="47" fontSize="5" fill="#D4A80A" fontWeight="600" variants={{ hidden: { opacity: 0 }, visible: { opacity: 1 } }} transition={{ duration: 0.3, delay: 0.5 }}>SALES</motion.text>
      <motion.rect x="46" y="34" width="28" height="20" rx="4" fill="#F25022" fillOpacity="0.12" stroke="#F25022" strokeWidth="0.8"
        variants={{ hidden: { scale: 0 }, visible: { scale: 1 } }} transition={{ duration: 0.4, delay: 0.4, ease }} />
      <motion.text x="52" y="47" fontSize="5" fill="#F25022" fontWeight="600" variants={{ hidden: { opacity: 0 }, visible: { opacity: 1 } }} transition={{ duration: 0.3, delay: 0.6 }}>OPS</motion.text>
      {/* Connection lines */}
      <motion.line x1="34" y1="16" x2="46" y2="16" stroke="#86868b" strokeWidth="0.8" strokeDasharray="2 2"
        variants={{ hidden: { pathLength: 0 }, visible: { pathLength: 1 } }} transition={{ duration: 0.4, delay: 0.5 }} />
      <motion.line x1="34" y1="44" x2="46" y2="44" stroke="#86868b" strokeWidth="0.8" strokeDasharray="2 2"
        variants={{ hidden: { pathLength: 0 }, visible: { pathLength: 1 } }} transition={{ duration: 0.4, delay: 0.6 }} />
      <motion.line x1="20" y1="26" x2="20" y2="34" stroke="#86868b" strokeWidth="0.8" strokeDasharray="2 2"
        variants={{ hidden: { pathLength: 0 }, visible: { pathLength: 1 } }} transition={{ duration: 0.4, delay: 0.7 }} />
      <motion.line x1="60" y1="26" x2="60" y2="34" stroke="#86868b" strokeWidth="0.8" strokeDasharray="2 2"
        variants={{ hidden: { pathLength: 0 }, visible: { pathLength: 1 } }} transition={{ duration: 0.4, delay: 0.8 }} />
    </motion.svg>
  );
}

function CloudSVG() {
  return (
    <motion.svg viewBox="0 0 80 60" fill="none" className="w-full h-full" initial="hidden" whileInView="visible" viewport={{ once: true }}>
      <motion.path
        d="M20 40 Q10 40 10 32 Q10 24 18 24 Q20 16 30 16 Q38 16 40 22 Q42 18 48 18 Q56 18 56 26 Q62 26 62 32 Q62 40 54 40 Z"
        stroke="#00A4EF" strokeWidth="1.5" fill="#00A4EF" fillOpacity="0.06"
        variants={{ hidden: { pathLength: 0, opacity: 0 }, visible: { pathLength: 1, opacity: 1 } }}
        transition={{ duration: 1.0, ease }}
      />
      {/* Upload arrow */}
      <motion.path d="M36 44 L36 50" stroke="#14b8a6" strokeWidth="1.5" strokeLinecap="round"
        variants={{ hidden: { pathLength: 0 }, visible: { pathLength: 1 } }} transition={{ duration: 0.4, delay: 0.8 }} />
      <motion.path d="M32 48 L36 44 L40 48" stroke="#14b8a6" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" fill="none"
        variants={{ hidden: { pathLength: 0 }, visible: { pathLength: 1 } }} transition={{ duration: 0.4, delay: 0.9 }} />
      {/* Sync circle */}
      <motion.path d="M30 32 A6 6 0 1 1 42 32" stroke="#2563eb" strokeWidth="1.2" fill="none" strokeLinecap="round"
        variants={{ hidden: { pathLength: 0 }, visible: { pathLength: 1 } }} transition={{ duration: 0.6, delay: 0.6 }} />
      <motion.path d="M40 29 L42 32 L39 33" stroke="#2563eb" strokeWidth="1.2" fill="none" strokeLinecap="round"
        variants={{ hidden: { pathLength: 0 }, visible: { pathLength: 1 } }} transition={{ duration: 0.3, delay: 1.0 }} />
    </motion.svg>
  );
}

function IntegrationSVG() {
  return (
    <motion.svg viewBox="0 0 80 60" fill="none" className="w-full h-full" initial="hidden" whileInView="visible" viewport={{ once: true }}>
      {/* Microsoft 365 icon */}
      <motion.rect x="8" y="14" width="24" height="24" rx="5" fill="#F25022" fillOpacity="0.08" stroke="#F25022" strokeWidth="0.8"
        variants={{ hidden: { scale: 0 }, visible: { scale: 1 } }} transition={{ duration: 0.4, delay: 0.1, ease }} />
      <motion.text x="14" y="29" fontSize="5" fill="#F25022" fontWeight="700" variants={{ hidden: { opacity: 0 }, visible: { opacity: 1 } }} transition={{ duration: 0.3, delay: 0.3 }}>365</motion.text>
      {/* Teams icon */}
      <motion.rect x="48" y="14" width="24" height="24" rx="5" fill="#5B5FC7" fillOpacity="0.10" stroke="#5B5FC7" strokeWidth="0.8"
        variants={{ hidden: { scale: 0 }, visible: { scale: 1 } }} transition={{ duration: 0.4, delay: 0.2, ease }} />
      <motion.text x="55" y="29" fontSize="4.5" fill="#5B5FC7" fontWeight="700" variants={{ hidden: { opacity: 0 }, visible: { opacity: 1 } }} transition={{ duration: 0.3, delay: 0.4 }}>Teams</motion.text>
      {/* Center hub */}
      <motion.circle cx="40" cy="46" r="8" fill="#2563eb" fillOpacity="0.08" stroke="#2563eb" strokeWidth="1"
        variants={{ hidden: { scale: 0 }, visible: { scale: 1 } }} transition={{ duration: 0.4, delay: 0.3, ease }} />
      <motion.text x="35.5" y="48.5" fontSize="4" fill="#2563eb" fontWeight="700" variants={{ hidden: { opacity: 0 }, visible: { opacity: 1 } }} transition={{ duration: 0.3, delay: 0.5 }}>BC</motion.text>
      {/* Connection lines */}
      <motion.line x1="24" y1="38" x2="35" y2="42" stroke="#86868b" strokeWidth="0.8" strokeDasharray="2 2"
        variants={{ hidden: { pathLength: 0 }, visible: { pathLength: 1 } }} transition={{ duration: 0.4, delay: 0.5 }} />
      <motion.line x1="56" y1="38" x2="45" y2="42" stroke="#86868b" strokeWidth="0.8" strokeDasharray="2 2"
        variants={{ hidden: { pathLength: 0 }, visible: { pathLength: 1 } }} transition={{ duration: 0.4, delay: 0.6 }} />
    </motion.svg>
  );
}

function ScaleSVG() {
  return (
    <motion.svg viewBox="0 0 80 60" fill="none" className="w-full h-full" initial="hidden" whileInView="visible" viewport={{ once: true }}>
      {/* Growth bars */}
      <motion.rect x="12" y="42" width="8" height="12" rx="2" fill="#2563eb" fillOpacity="0.3"
        variants={{ hidden: { scaleY: 0 }, visible: { scaleY: 1 } }} style={{ originY: 1 }} transition={{ duration: 0.4, delay: 0.1, ease }} />
      <motion.rect x="24" y="34" width="8" height="20" rx="2" fill="#2563eb" fillOpacity="0.4"
        variants={{ hidden: { scaleY: 0 }, visible: { scaleY: 1 } }} style={{ originY: 1 }} transition={{ duration: 0.4, delay: 0.2, ease }} />
      <motion.rect x="36" y="26" width="8" height="28" rx="2" fill="#14b8a6" fillOpacity="0.5"
        variants={{ hidden: { scaleY: 0 }, visible: { scaleY: 1 } }} style={{ originY: 1 }} transition={{ duration: 0.4, delay: 0.3, ease }} />
      <motion.rect x="48" y="18" width="8" height="36" rx="2" fill="#14b8a6" fillOpacity="0.6"
        variants={{ hidden: { scaleY: 0 }, visible: { scaleY: 1 } }} style={{ originY: 1 }} transition={{ duration: 0.4, delay: 0.4, ease }} />
      <motion.rect x="60" y="10" width="8" height="44" rx="2" fill="#7FBA00" fillOpacity="0.7"
        variants={{ hidden: { scaleY: 0 }, visible: { scaleY: 1 } }} style={{ originY: 1 }} transition={{ duration: 0.4, delay: 0.5, ease }} />
      {/* Trend arrow */}
      <motion.path d="M14 40 L64 12" stroke="#2563eb" strokeWidth="1.2" strokeDasharray="3 3" fill="none"
        variants={{ hidden: { pathLength: 0 }, visible: { pathLength: 1 } }} transition={{ duration: 0.6, delay: 0.6 }} />
      <motion.path d="M60 10 L66 10 L66 16" stroke="#2563eb" strokeWidth="1.2" fill="none" strokeLinecap="round"
        variants={{ hidden: { pathLength: 0 }, visible: { pathLength: 1 } }} transition={{ duration: 0.3, delay: 1.0 }} />
    </motion.svg>
  );
}

/* ------------------------------------------------------------------ */
/*  Map offering index to illustration component                       */
/* ------------------------------------------------------------------ */

const offeringSVGs = [
  ImplementationSVG,
  CustomizationSVG,
  MigrationSVG,
  TrainingSVG,
  ReportingSVG,
];

const benefitSVGs = [UnifiedSVG, CloudSVG, IntegrationSVG, ScaleSVG];

/* ------------------------------------------------------------------ */
/*  Main component                                                     */
/* ------------------------------------------------------------------ */

export default function BusinessCentralContent() {
  return (
    <>
      {/* ============================================================ */}
      {/*  HERO                                                         */}
      {/* ============================================================ */}
      <section className="relative overflow-hidden pt-6 pb-10 md:pt-8 md:pb-14">
        <div className="absolute inset-0 mesh-gradient" />
        <div className="absolute inset-0 dot-pattern opacity-30" />

        <div className="container-apple relative z-10 text-center">
          {/* Microsoft badge */}
          <div className="inline-flex items-center gap-2.5 rounded-full bg-white/80 backdrop-blur-md border border-black/[0.04] shadow-card px-4 py-2 mb-7">
            <MicrosoftLogo size={18} />
            <span className="text-[0.75rem] font-semibold text-apple-black tracking-tight">
              Microsoft Dynamics 365 Business Central
            </span>
          </div>

          <h1 className="text-display text-apple-black mb-5">
            Run your entire business on{" "}
            <span className="text-gradient">one platform.</span>
          </h1>

          <p className="text-body-lg text-apple-gray leading-relaxed max-w-2xl mx-auto mb-8">
            An all-in-one ERP that connects financials, sales, operations, and
            supply chain in a single cloud platform. We help you get the most out
            of Business Central — from initial setup to advanced customizations.
          </p>

          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Button href="/contact" size="lg">
              Schedule a Free Consultation
            </Button>
            <Button href="/services" variant="secondary" size="lg">
              All Services
            </Button>
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/*  OFFERINGS                                                    */}
      {/* ============================================================ */}
      <section className="py-section bg-white">
        <div className="container-apple">
          {/* Section heading — inline, no SectionHeading import */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.7, ease }}
            className="text-center mb-12 md:mb-14"
          >
            <p className="text-caption font-semibold text-brand-500 uppercase tracking-widest mb-3">
              What we offer
            </p>
            <h2 className="text-display-sm text-apple-black mb-4 text-balance">
              Comprehensive Business Central services.
            </h2>
            <p className="text-body-lg text-apple-gray max-w-2xl mx-auto">
              From implementation to optimization — everything you need to run
              your business on a modern ERP platform.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5">
            {offerings.map((item, index) => {
              const Illustration = offeringSVGs[index];
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
                  className="group rounded-[22px] shadow-card hover:shadow-card-hover border border-black/[0.04] bg-white transition-shadow duration-500 overflow-hidden"
                >
                  {/* Illustration area */}
                  <div className="h-[140px] bg-apple-gray-light/50 flex items-center justify-center px-4 overflow-hidden">
                    <Illustration />
                  </div>

                  {/* Card content */}
                  <div className="p-5 md:p-6">
                    {/* Metric badge */}
                    <div className="flex items-center gap-2 mb-3">
                      <span
                        className="w-[6px] h-[6px] rounded-full flex-shrink-0"
                        style={{ backgroundColor: item.badge.color }}
                      />
                      <span className="text-[0.6875rem] font-semibold text-apple-black leading-none">
                        {item.badge.label}
                      </span>
                      <span className="text-[0.6875rem] text-apple-gray leading-none">
                        {item.badge.sublabel}
                      </span>
                    </div>

                    <h3 className="text-[1.0625rem] font-semibold text-apple-black leading-snug mb-2">
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

      {/* ============================================================ */}
      {/*  BENEFITS — dark section                                      */}
      {/* ============================================================ */}
      <section className="py-section bg-apple-black relative overflow-hidden">
        {/* Background glow */}
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/4 w-[600px] h-[600px] bg-brand-500/5 rounded-full blur-[120px]" />
          <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-teal-500/5 rounded-full blur-[100px]" />
        </div>

        <div className="container-apple relative z-10">
          {/* Section heading — inline dark */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.7, ease }}
            className="text-center mb-12 md:mb-14"
          >
            <p className="text-caption font-semibold text-brand-400 uppercase tracking-widest mb-3">
              Why Business Central
            </p>
            <h2 className="text-display-sm text-white mb-4 text-balance">
              A modern ERP built for today.
            </h2>
            <p className="text-body-lg text-apple-gray max-w-2xl mx-auto">
              Built for the way businesses actually work — unified, cloud-native,
              and ready to scale.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-5 max-w-4xl mx-auto">
            {benefits.map((benefit, index) => {
              const BenefitIllustration = benefitSVGs[index];
              return (
                <motion.div
                  key={benefit.text}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-60px" }}
                  transition={{
                    duration: 0.6,
                    delay: index * 0.1,
                    ease,
                  }}
                  className="rounded-[22px] bg-white/[0.03] border border-white/[0.06] hover:bg-white/[0.06] transition-all duration-500 overflow-hidden"
                >
                  {/* Small illustration area */}
                  <div className="h-[80px] flex items-center justify-center px-6 pt-2">
                    <BenefitIllustration />
                  </div>

                  <div className="px-5 pb-5">
                    <p className="text-[0.9375rem] text-white font-medium leading-snug">
                      {benefit.text}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/*  CTA BANNER                                                   */}
      {/* ============================================================ */}
      <CTABanner
        title="Ready to streamline your operations with Business Central?"
        subtitle="Let's build an ERP that works the way your business does."
        buttonText="Schedule a Free Consultation"
        buttonHref="/contact"
      />
    </>
  );
}
