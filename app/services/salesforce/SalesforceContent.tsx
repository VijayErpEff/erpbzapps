"use client";

import { motion } from "framer-motion";
import CTABanner from "@/components/ui/CTABanner";
import Button from "@/components/ui/Button";
import { SalesforceLogo } from "@/components/svg/PartnerLogos";

/* ------------------------------------------------------------------ */
/*  Animation ease                                                     */
/* ------------------------------------------------------------------ */
const ease = [0.21, 0.45, 0.27, 0.9] as const;

/* ------------------------------------------------------------------ */
/*  Offering SVG Illustrations                                         */
/* ------------------------------------------------------------------ */

function ImplementationSVG() {
  return (
    <svg viewBox="0 0 280 120" fill="none" className="w-full h-full">
      {/* Background grid lines */}
      <motion.line
        x1="20" y1="30" x2="260" y2="30"
        stroke="#00A1E0" strokeWidth="0.5" opacity="0.15"
        initial={{ pathLength: 0 }} animate={{ pathLength: 1 }}
 transition={{ duration: 1, ease }}
      />
      <motion.line
        x1="20" y1="60" x2="260" y2="60"
        stroke="#00A1E0" strokeWidth="0.5" opacity="0.15"
        initial={{ pathLength: 0 }} animate={{ pathLength: 1 }}
 transition={{ duration: 1, delay: 0.1, ease }}
      />
      <motion.line
        x1="20" y1="90" x2="260" y2="90"
        stroke="#00A1E0" strokeWidth="0.5" opacity="0.15"
        initial={{ pathLength: 0 }} animate={{ pathLength: 1 }}
 transition={{ duration: 1, delay: 0.2, ease }}
      />

      {/* CRM Config Screen - Main panel */}
      <motion.rect
        x="30" y="15" width="130" height="90" rx="8"
        fill="white" stroke="#00A1E0" strokeWidth="1.5"
        initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }}
 transition={{ duration: 0.6, ease }}
      />
      {/* Panel header bar */}
      <motion.rect
        x="30" y="15" width="130" height="18" rx="8"
        fill="#00A1E0" opacity="0.12"
        initial={{ opacity: 0 }} animate={{ opacity: 0.12 }}
 transition={{ duration: 0.5, delay: 0.2, ease }}
      />
      {/* Header dots */}
      <circle cx="42" cy="24" r="2.5" fill="#00A1E0" opacity="0.5" />
      <circle cx="52" cy="24" r="2.5" fill="#14b8a6" opacity="0.5" />
      <circle cx="62" cy="24" r="2.5" fill="#2563eb" opacity="0.4" />

      {/* Form fields in config panel */}
      <motion.rect
        x="40" y="40" width="55" height="6" rx="3"
        fill="#00A1E0" opacity="0.25"
        initial={{ scaleX: 0 }} animate={{ scaleX: 1 }}
 transition={{ duration: 0.5, delay: 0.3, ease }}
      />
      <motion.rect
        x="40" y="52" width="70" height="6" rx="3"
        fill="#00A1E0" opacity="0.15"
        initial={{ scaleX: 0 }} animate={{ scaleX: 1 }}
 transition={{ duration: 0.5, delay: 0.4, ease }}
      />
      <motion.rect
        x="40" y="64" width="45" height="6" rx="3"
        fill="#14b8a6" opacity="0.2"
        initial={{ scaleX: 0 }} animate={{ scaleX: 1 }}
 transition={{ duration: 0.5, delay: 0.5, ease }}
      />
      <motion.rect
        x="40" y="76" width="60" height="6" rx="3"
        fill="#00A1E0" opacity="0.15"
        initial={{ scaleX: 0 }} animate={{ scaleX: 1 }}
 transition={{ duration: 0.5, delay: 0.6, ease }}
      />
      {/* Toggle switches */}
      <motion.rect
        x="120" y="40" width="24" height="10" rx="5"
        fill="#14b8a6" opacity="0.35"
        initial={{ opacity: 0 }} animate={{ opacity: 0.35 }}
 transition={{ duration: 0.4, delay: 0.5, ease }}
      />
      <circle cx="140" cy="45" r="4" fill="#14b8a6" opacity="0.6" />
      <motion.rect
        x="120" y="56" width="24" height="10" rx="5"
        fill="#00A1E0" opacity="0.25"
        initial={{ opacity: 0 }} animate={{ opacity: 0.25 }}
 transition={{ duration: 0.4, delay: 0.6, ease }}
      />
      <circle cx="140" cy="61" r="4" fill="#00A1E0" opacity="0.5" />

      {/* Side panel - Sales Cloud */}
      <motion.rect
        x="175" y="20" width="85" height="38" rx="7"
        fill="white" stroke="#00A1E0" strokeWidth="1"
        initial={{ opacity: 0, x: 15 }} animate={{ opacity: 1, x: 0 }}
 transition={{ duration: 0.6, delay: 0.3, ease }}
      />
      {/* Cloud icon */}
      <motion.path
        d="M198 33c0-3 2.5-5.5 5.5-5.5 2 0 3.7 1 4.6 2.6.7-.3 1.5-.5 2.3-.5 3 0 4.5 2.4 4.5 4.6 0 2.5-2 4.5-4.5 4.5h-9c-2 0-3.4-1.8-3.4-3.5 0-1.2.7-2.2 1.5-2.7z"
        fill="#00A1E0" opacity="0.3"
        initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 0.3, scale: 1 }}
 transition={{ duration: 0.5, delay: 0.5, ease }}
      />
      <motion.rect
        x="185" y="44" width="40" height="4" rx="2"
        fill="#00A1E0" opacity="0.2"
        initial={{ scaleX: 0 }} animate={{ scaleX: 1 }}
 transition={{ duration: 0.4, delay: 0.6, ease }}
      />
      <motion.rect
        x="185" y="50" width="28" height="3" rx="1.5"
        fill="#86868b" opacity="0.15"
        initial={{ scaleX: 0 }} animate={{ scaleX: 1 }}
 transition={{ duration: 0.4, delay: 0.7, ease }}
      />

      {/* Side panel - Service Cloud */}
      <motion.rect
        x="175" y="65" width="85" height="38" rx="7"
        fill="white" stroke="#14b8a6" strokeWidth="1"
        initial={{ opacity: 0, x: 15 }} animate={{ opacity: 1, x: 0 }}
 transition={{ duration: 0.6, delay: 0.5, ease }}
      />
      {/* Service icon (headset) */}
      <motion.path
        d="M205 76a7 7 0 0 1 14 0v4a7 7 0 0 1-14 0zM203 80v2a3 3 0 0 0 3 3M221 80v2a3 3 0 0 1-3 3"
        stroke="#14b8a6" strokeWidth="1.5" fill="none" opacity="0.4"
        initial={{ pathLength: 0 }} animate={{ pathLength: 1 }}
 transition={{ duration: 0.8, delay: 0.6, ease }}
      />
      <motion.rect
        x="185" y="89" width="35" height="4" rx="2"
        fill="#14b8a6" opacity="0.2"
        initial={{ scaleX: 0 }} animate={{ scaleX: 1 }}
 transition={{ duration: 0.4, delay: 0.8, ease }}
      />
      <motion.rect
        x="185" y="95" width="25" height="3" rx="1.5"
        fill="#86868b" opacity="0.15"
        initial={{ scaleX: 0 }} animate={{ scaleX: 1 }}
 transition={{ duration: 0.4, delay: 0.9, ease }}
      />

      {/* Connecting dotted lines */}
      <motion.line
        x1="160" y1="50" x2="175" y2="39"
        stroke="#00A1E0" strokeWidth="1" strokeDasharray="3 3" opacity="0.3"
        initial={{ pathLength: 0 }} animate={{ pathLength: 1 }}
 transition={{ duration: 0.5, delay: 0.4, ease }}
      />
      <motion.line
        x1="160" y1="70" x2="175" y2="84"
        stroke="#14b8a6" strokeWidth="1" strokeDasharray="3 3" opacity="0.3"
        initial={{ pathLength: 0 }} animate={{ pathLength: 1 }}
 transition={{ duration: 0.5, delay: 0.6, ease }}
      />
    </svg>
  );
}

function CustomizationSVG() {
  return (
    <svg viewBox="0 0 280 120" fill="none" className="w-full h-full">
      {/* Code editor frame */}
      <motion.rect
        x="25" y="10" width="140" height="100" rx="8"
        fill="white" stroke="#2563eb" strokeWidth="1.5"
        initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }}
 transition={{ duration: 0.6, ease }}
      />
      {/* Editor header */}
      <motion.rect
        x="25" y="10" width="140" height="16" rx="8"
        fill="#2563eb" opacity="0.08"
        initial={{ opacity: 0 }} animate={{ opacity: 0.08 }}
 transition={{ duration: 0.4, delay: 0.1, ease }}
      />
      <circle cx="37" cy="18" r="2" fill="#ef4444" opacity="0.5" />
      <circle cx="45" cy="18" r="2" fill="#eab308" opacity="0.5" />
      <circle cx="53" cy="18" r="2" fill="#22c55e" opacity="0.5" />

      {/* Code lines - Apex */}
      <motion.rect x="35" y="32" width="16" height="4" rx="2" fill="#2563eb" opacity="0.4"
        initial={{ scaleX: 0 }} animate={{ scaleX: 1 }}
 transition={{ duration: 0.3, delay: 0.2, ease }}
      />
      <motion.rect x="55" y="32" width="40" height="4" rx="2" fill="#00A1E0" opacity="0.25"
        initial={{ scaleX: 0 }} animate={{ scaleX: 1 }}
 transition={{ duration: 0.3, delay: 0.25, ease }}
      />
      <motion.rect x="100" y="32" width="20" height="4" rx="2" fill="#14b8a6" opacity="0.3"
        initial={{ scaleX: 0 }} animate={{ scaleX: 1 }}
 transition={{ duration: 0.3, delay: 0.3, ease }}
      />

      <motion.rect x="45" y="42" width="25" height="4" rx="2" fill="#14b8a6" opacity="0.3"
        initial={{ scaleX: 0 }} animate={{ scaleX: 1 }}
 transition={{ duration: 0.3, delay: 0.35, ease }}
      />
      <motion.rect x="75" y="42" width="55" height="4" rx="2" fill="#86868b" opacity="0.15"
        initial={{ scaleX: 0 }} animate={{ scaleX: 1 }}
 transition={{ duration: 0.3, delay: 0.4, ease }}
      />

      <motion.rect x="45" y="52" width="30" height="4" rx="2" fill="#00A1E0" opacity="0.3"
        initial={{ scaleX: 0 }} animate={{ scaleX: 1 }}
 transition={{ duration: 0.3, delay: 0.45, ease }}
      />
      <motion.rect x="80" y="52" width="35" height="4" rx="2" fill="#2563eb" opacity="0.2"
        initial={{ scaleX: 0 }} animate={{ scaleX: 1 }}
 transition={{ duration: 0.3, delay: 0.5, ease }}
      />

      <motion.rect x="45" y="62" width="50" height="4" rx="2" fill="#86868b" opacity="0.12"
        initial={{ scaleX: 0 }} animate={{ scaleX: 1 }}
 transition={{ duration: 0.3, delay: 0.55, ease }}
      />
      <motion.rect x="35" y="72" width="20" height="4" rx="2" fill="#2563eb" opacity="0.4"
        initial={{ scaleX: 0 }} animate={{ scaleX: 1 }}
 transition={{ duration: 0.3, delay: 0.6, ease }}
      />

      <motion.rect x="45" y="82" width="35" height="4" rx="2" fill="#14b8a6" opacity="0.25"
        initial={{ scaleX: 0 }} animate={{ scaleX: 1 }}
 transition={{ duration: 0.3, delay: 0.65, ease }}
      />
      <motion.rect x="85" y="82" width="40" height="4" rx="2" fill="#00A1E0" opacity="0.2"
        initial={{ scaleX: 0 }} animate={{ scaleX: 1 }}
 transition={{ duration: 0.3, delay: 0.7, ease }}
      />

      <motion.rect x="35" y="92" width="18" height="4" rx="2" fill="#2563eb" opacity="0.35"
        initial={{ scaleX: 0 }} animate={{ scaleX: 1 }}
 transition={{ duration: 0.3, delay: 0.75, ease }}
      />

      {/* Lightning Component Builder */}
      <motion.rect
        x="180" y="12" width="80" height="96" rx="8"
        fill="white" stroke="#00A1E0" strokeWidth="1.2"
        initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }}
 transition={{ duration: 0.6, delay: 0.3, ease }}
      />
      {/* Component header */}
      <motion.rect
        x="180" y="12" width="80" height="14" rx="8"
        fill="#00A1E0" opacity="0.1"
        initial={{ opacity: 0 }} animate={{ opacity: 0.1 }}
 transition={{ duration: 0.4, delay: 0.4, ease }}
      />
      {/* Lightning bolt icon */}
      <motion.path
        d="M215 16 L212 22 L216 22 L213 28"
        stroke="#00A1E0" strokeWidth="1.5" fill="none"
        initial={{ pathLength: 0 }} animate={{ pathLength: 1 }}
 transition={{ duration: 0.6, delay: 0.5, ease }}
      />

      {/* Component blocks */}
      <motion.rect x="188" y="32" width="64" height="18" rx="5" fill="#00A1E0" opacity="0.08" stroke="#00A1E0" strokeWidth="0.5"
        initial={{ opacity: 0, y: 5 }} animate={{ opacity: 1, y: 0 }}
 transition={{ duration: 0.4, delay: 0.5, ease }}
      />
      <rect x="194" y="37" width="30" height="3" rx="1.5" fill="#00A1E0" opacity="0.3" />
      <rect x="194" y="43" width="20" height="3" rx="1.5" fill="#86868b" opacity="0.15" />

      <motion.rect x="188" y="55" width="64" height="18" rx="5" fill="#14b8a6" opacity="0.08" stroke="#14b8a6" strokeWidth="0.5"
        initial={{ opacity: 0, y: 5 }} animate={{ opacity: 1, y: 0 }}
 transition={{ duration: 0.4, delay: 0.6, ease }}
      />
      <rect x="194" y="60" width="35" height="3" rx="1.5" fill="#14b8a6" opacity="0.3" />
      <rect x="194" y="66" width="22" height="3" rx="1.5" fill="#86868b" opacity="0.15" />

      <motion.rect x="188" y="78" width="64" height="18" rx="5" fill="#2563eb" opacity="0.08" stroke="#2563eb" strokeWidth="0.5"
        initial={{ opacity: 0, y: 5 }} animate={{ opacity: 1, y: 0 }}
 transition={{ duration: 0.4, delay: 0.7, ease }}
      />
      <rect x="194" y="83" width="28" height="3" rx="1.5" fill="#2563eb" opacity="0.3" />
      <rect x="194" y="89" width="18" height="3" rx="1.5" fill="#86868b" opacity="0.15" />

      {/* Arrow connecting code to components */}
      <motion.path
        d="M165 60 L175 60"
        stroke="#00A1E0" strokeWidth="1.5" strokeDasharray="3 2" opacity="0.3"
        initial={{ pathLength: 0 }} animate={{ pathLength: 1 }}
 transition={{ duration: 0.4, delay: 0.4, ease }}
      />
      <motion.polygon
        points="175,57 180,60 175,63"
        fill="#00A1E0" opacity="0.3"
        initial={{ opacity: 0 }} animate={{ opacity: 0.3 }}
 transition={{ duration: 0.3, delay: 0.5, ease }}
      />
    </svg>
  );
}

function IntegrationSVG() {
  return (
    <svg viewBox="0 0 280 120" fill="none" className="w-full h-full">
      {/* Central SF Cloud */}
      <motion.path
        d="M120 45c0-5 4-9.5 9.5-9.5 3.5 0 6.5 1.8 8 4.5 1.3-.6 2.7-.9 4.2-.9 5.5 0 8 4.4 8 8.4 0 4.7-3.8 8.5-8.5 8.5-.7 0-1.3-.1-1.9-.2-1.3 2.2-3.8 3.6-6.5 3.6-1.3 0-2.5-.3-3.6-.9-1.4 1.9-3.6 3.2-6.2 3.2-2.8 0-5.3-1.5-6.6-3.8-.6.1-1.2.2-1.8.2-4.3 0-7.8-3.8-7.8-8.5 0-3.5 2.1-6.4 5.1-7.7-.3-.9-.4-1.8-.4-2.8 0-4.5 3.3-8.1 7.3-4.2z"
        fill="#00A1E0"
        initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }}
 transition={{ duration: 0.7, ease }}
      />
      {/* SF text inside cloud */}
      <text x="128" y="52" fontSize="6" fontWeight="700" fill="white" fontFamily="Inter, sans-serif" textAnchor="middle">SF</text>

      {/* Surrounding system nodes */}
      {/* ERP Node - top left */}
      <motion.rect
        x="20" y="10" width="60" height="35" rx="7"
        fill="white" stroke="#2563eb" strokeWidth="1.2"
        initial={{ opacity: 0, x: -10 }} animate={{ opacity: 1, x: 0 }}
 transition={{ duration: 0.5, delay: 0.3, ease }}
      />
      <rect x="28" y="18" width="22" height="4" rx="2" fill="#2563eb" opacity="0.35" />
      <rect x="28" y="26" width="35" height="3" rx="1.5" fill="#86868b" opacity="0.15" />
      <rect x="28" y="33" width="28" height="3" rx="1.5" fill="#2563eb" opacity="0.15" />

      {/* Marketing - top right */}
      <motion.rect
        x="200" y="10" width="60" height="35" rx="7"
        fill="white" stroke="#14b8a6" strokeWidth="1.2"
        initial={{ opacity: 0, x: 10 }} animate={{ opacity: 1, x: 0 }}
 transition={{ duration: 0.5, delay: 0.4, ease }}
      />
      <rect x="208" y="18" width="28" height="4" rx="2" fill="#14b8a6" opacity="0.35" />
      <rect x="208" y="26" width="38" height="3" rx="1.5" fill="#86868b" opacity="0.15" />
      <rect x="208" y="33" width="25" height="3" rx="1.5" fill="#14b8a6" opacity="0.15" />

      {/* E-Commerce - bottom left */}
      <motion.rect
        x="20" y="75" width="60" height="35" rx="7"
        fill="white" stroke="#00A1E0" strokeWidth="1.2"
        initial={{ opacity: 0, x: -10 }} animate={{ opacity: 1, x: 0 }}
 transition={{ duration: 0.5, delay: 0.5, ease }}
      />
      <rect x="28" y="83" width="30" height="4" rx="2" fill="#00A1E0" opacity="0.35" />
      <rect x="28" y="91" width="40" height="3" rx="1.5" fill="#86868b" opacity="0.15" />
      <rect x="28" y="98" width="22" height="3" rx="1.5" fill="#00A1E0" opacity="0.15" />

      {/* Analytics - bottom right */}
      <motion.rect
        x="200" y="75" width="60" height="35" rx="7"
        fill="white" stroke="#2563eb" strokeWidth="1.2"
        initial={{ opacity: 0, x: 10 }} animate={{ opacity: 1, x: 0 }}
 transition={{ duration: 0.5, delay: 0.6, ease }}
      />
      {/* Mini bar chart */}
      <motion.rect x="210" y="96" width="6" height="10" rx="1" fill="#2563eb" opacity="0.3"
        initial={{ scaleY: 0 }} animate={{ scaleY: 1 }}
 transition={{ duration: 0.4, delay: 0.8, ease }}
        style={{ originY: 1, transformBox: "fill-box" }}
      />
      <motion.rect x="220" y="90" width="6" height="16" rx="1" fill="#2563eb" opacity="0.4"
        initial={{ scaleY: 0 }} animate={{ scaleY: 1 }}
 transition={{ duration: 0.4, delay: 0.85, ease }}
        style={{ originY: 1, transformBox: "fill-box" }}
      />
      <motion.rect x="230" y="84" width="6" height="22" rx="1" fill="#2563eb" opacity="0.5"
        initial={{ scaleY: 0 }} animate={{ scaleY: 1 }}
 transition={{ duration: 0.4, delay: 0.9, ease }}
        style={{ originY: 1, transformBox: "fill-box" }}
      />
      <rect x="208" y="82" width="30" height="3" rx="1.5" fill="#2563eb" opacity="0.2" />

      {/* Connecting lines to central cloud */}
      <motion.line x1="80" y1="27" x2="113" y2="44" stroke="#2563eb" strokeWidth="1.2" strokeDasharray="4 3" opacity="0.3"
        initial={{ pathLength: 0 }} animate={{ pathLength: 1 }}
 transition={{ duration: 0.6, delay: 0.5, ease }}
      />
      <motion.line x1="200" y1="27" x2="148" y2="44" stroke="#14b8a6" strokeWidth="1.2" strokeDasharray="4 3" opacity="0.3"
        initial={{ pathLength: 0 }} animate={{ pathLength: 1 }}
 transition={{ duration: 0.6, delay: 0.6, ease }}
      />
      <motion.line x1="80" y1="92" x2="113" y2="58" stroke="#00A1E0" strokeWidth="1.2" strokeDasharray="4 3" opacity="0.3"
        initial={{ pathLength: 0 }} animate={{ pathLength: 1 }}
 transition={{ duration: 0.6, delay: 0.7, ease }}
      />
      <motion.line x1="200" y1="92" x2="148" y2="58" stroke="#2563eb" strokeWidth="1.2" strokeDasharray="4 3" opacity="0.3"
        initial={{ pathLength: 0 }} animate={{ pathLength: 1 }}
 transition={{ duration: 0.6, delay: 0.8, ease }}
      />

      {/* Pulse dots on lines */}
      <motion.circle cx="95" cy="35" r="2.5" fill="#2563eb"
        initial={{ opacity: 0 }} animate={{ opacity: [0, 0.6, 0] }}
        transition={{ duration: 2, repeat: Infinity, delay: 0 }}
      />
      <motion.circle cx="170" cy="35" r="2.5" fill="#14b8a6"
        initial={{ opacity: 0 }} animate={{ opacity: [0, 0.6, 0] }}
        transition={{ duration: 2, repeat: Infinity, delay: 0.5 }}
      />
      <motion.circle cx="95" cy="76" r="2.5" fill="#00A1E0"
        initial={{ opacity: 0 }} animate={{ opacity: [0, 0.6, 0] }}
        transition={{ duration: 2, repeat: Infinity, delay: 1 }}
      />
      <motion.circle cx="170" cy="76" r="2.5" fill="#2563eb"
        initial={{ opacity: 0 }} animate={{ opacity: [0, 0.6, 0] }}
        transition={{ duration: 2, repeat: Infinity, delay: 1.5 }}
      />
    </svg>
  );
}

function DataMigrationSVG() {
  return (
    <svg viewBox="0 0 280 120" fill="none" className="w-full h-full">
      {/* Source data (messy) */}
      <motion.rect
        x="15" y="20" width="70" height="80" rx="7"
        fill="white" stroke="#86868b" strokeWidth="1" strokeDasharray="3 2"
        initial={{ opacity: 0 }} animate={{ opacity: 1 }}
 transition={{ duration: 0.5, ease }}
      />
      {/* Messy scattered data rows */}
      <motion.rect x="22" y="30" width="40" height="4" rx="2" fill="#ef4444" opacity="0.2"
        initial={{ opacity: 0 }} animate={{ opacity: 0.2 }}
 transition={{ duration: 0.3, delay: 0.15, ease }}
      />
      <motion.rect x="25" y="38" width="50" height="4" rx="2" fill="#86868b" opacity="0.15"
        initial={{ opacity: 0 }} animate={{ opacity: 0.15 }}
 transition={{ duration: 0.3, delay: 0.2, ease }}
      />
      <motion.rect x="20" y="46" width="55" height="4" rx="2" fill="#eab308" opacity="0.2"
        initial={{ opacity: 0 }} animate={{ opacity: 0.2 }}
 transition={{ duration: 0.3, delay: 0.25, ease }}
      />
      <motion.rect x="28" y="54" width="30" height="4" rx="2" fill="#86868b" opacity="0.12"
        initial={{ opacity: 0 }} animate={{ opacity: 0.12 }}
 transition={{ duration: 0.3, delay: 0.3, ease }}
      />
      <motion.rect x="22" y="62" width="48" height="4" rx="2" fill="#ef4444" opacity="0.15"
        initial={{ opacity: 0 }} animate={{ opacity: 0.15 }}
 transition={{ duration: 0.3, delay: 0.35, ease }}
      />
      <motion.rect x="30" y="70" width="35" height="4" rx="2" fill="#86868b" opacity="0.1"
        initial={{ opacity: 0 }} animate={{ opacity: 0.1 }}
 transition={{ duration: 0.3, delay: 0.4, ease }}
      />
      <motion.rect x="24" y="78" width="42" height="4" rx="2" fill="#eab308" opacity="0.18"
        initial={{ opacity: 0 }} animate={{ opacity: 0.18 }}
 transition={{ duration: 0.3, delay: 0.45, ease }}
      />
      <motion.rect x="26" y="86" width="38" height="4" rx="2" fill="#86868b" opacity="0.1"
        initial={{ opacity: 0 }} animate={{ opacity: 0.1 }}
 transition={{ duration: 0.3, delay: 0.5, ease }}
      />

      {/* Pipeline / transformation funnel */}
      <motion.path
        d="M95 30 L115 30 L125 45 L125 75 L115 90 L95 90 L95 30Z"
        fill="#00A1E0" opacity="0.08" stroke="#00A1E0" strokeWidth="1.2"
        initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }}
 transition={{ duration: 0.5, delay: 0.3, ease }}
      />
      {/* Filter/funnel lines inside */}
      <motion.line x1="100" y1="42" x2="120" y2="42" stroke="#00A1E0" strokeWidth="0.8" opacity="0.3"
        initial={{ pathLength: 0 }} animate={{ pathLength: 1 }}
 transition={{ duration: 0.3, delay: 0.5, ease }}
      />
      <motion.line x1="100" y1="52" x2="122" y2="52" stroke="#00A1E0" strokeWidth="0.8" opacity="0.3"
        initial={{ pathLength: 0 }} animate={{ pathLength: 1 }}
 transition={{ duration: 0.3, delay: 0.55, ease }}
      />
      <motion.line x1="100" y1="62" x2="122" y2="62" stroke="#00A1E0" strokeWidth="0.8" opacity="0.3"
        initial={{ pathLength: 0 }} animate={{ pathLength: 1 }}
 transition={{ duration: 0.3, delay: 0.6, ease }}
      />
      <motion.line x1="100" y1="72" x2="120" y2="72" stroke="#00A1E0" strokeWidth="0.8" opacity="0.3"
        initial={{ pathLength: 0 }} animate={{ pathLength: 1 }}
 transition={{ duration: 0.3, delay: 0.65, ease }}
      />
      {/* Checkmark inside funnel */}
      <motion.path
        d="M105 57 L110 62 L118 52"
        stroke="#14b8a6" strokeWidth="2" fill="none" strokeLinecap="round"
        initial={{ pathLength: 0 }} animate={{ pathLength: 1 }}
 transition={{ duration: 0.5, delay: 0.7, ease }}
      />

      {/* Arrow flow */}
      <motion.path
        d="M130 60 L140 60"
        stroke="#00A1E0" strokeWidth="1.5" opacity="0.4"
        initial={{ pathLength: 0 }} animate={{ pathLength: 1 }}
 transition={{ duration: 0.3, delay: 0.6, ease }}
      />
      <polygon points="140,57 145,60 140,63" fill="#00A1E0" opacity="0.4" />

      {/* Dedup/merge step */}
      <motion.rect
        x="148" y="35" width="45" height="50" rx="6"
        fill="#14b8a6" opacity="0.06" stroke="#14b8a6" strokeWidth="1"
        initial={{ opacity: 0 }} animate={{ opacity: 1 }}
 transition={{ duration: 0.5, delay: 0.5, ease }}
      />
      {/* Merge icon */}
      <motion.path
        d="M162 45 L162 55 M158 48 L162 45 L166 48 M155 65 L162 58 L169 65"
        stroke="#14b8a6" strokeWidth="1.5" fill="none" strokeLinecap="round"
        initial={{ pathLength: 0 }} animate={{ pathLength: 1 }}
 transition={{ duration: 0.6, delay: 0.7, ease }}
      />
      <motion.rect x="154" y="72" width="25" height="3" rx="1.5" fill="#14b8a6" opacity="0.25"
        initial={{ scaleX: 0 }} animate={{ scaleX: 1 }}
 transition={{ duration: 0.3, delay: 0.8, ease }}
      />
      <motion.rect x="156" y="78" width="18" height="3" rx="1.5" fill="#86868b" opacity="0.12"
        initial={{ scaleX: 0 }} animate={{ scaleX: 1 }}
 transition={{ duration: 0.3, delay: 0.85, ease }}
      />

      {/* Arrow to clean data */}
      <motion.path
        d="M198 60 L208 60"
        stroke="#14b8a6" strokeWidth="1.5" opacity="0.4"
        initial={{ pathLength: 0 }} animate={{ pathLength: 1 }}
 transition={{ duration: 0.3, delay: 0.8, ease }}
      />
      <polygon points="208,57 213,60 208,63" fill="#14b8a6" opacity="0.4" />

      {/* Clean target data */}
      <motion.rect
        x="215" y="20" width="55" height="80" rx="7"
        fill="white" stroke="#00A1E0" strokeWidth="1.5"
        initial={{ opacity: 0, x: 10 }} animate={{ opacity: 1, x: 0 }}
 transition={{ duration: 0.6, delay: 0.7, ease }}
      />
      {/* Clean organized rows */}
      <motion.rect x="222" y="30" width="40" height="5" rx="2.5" fill="#00A1E0" opacity="0.3"
        initial={{ scaleX: 0 }} animate={{ scaleX: 1 }}
 transition={{ duration: 0.3, delay: 0.8, ease }}
      />
      <motion.rect x="222" y="40" width="40" height="5" rx="2.5" fill="#00A1E0" opacity="0.2"
        initial={{ scaleX: 0 }} animate={{ scaleX: 1 }}
 transition={{ duration: 0.3, delay: 0.85, ease }}
      />
      <motion.rect x="222" y="50" width="40" height="5" rx="2.5" fill="#00A1E0" opacity="0.2"
        initial={{ scaleX: 0 }} animate={{ scaleX: 1 }}
 transition={{ duration: 0.3, delay: 0.9, ease }}
      />
      <motion.rect x="222" y="60" width="40" height="5" rx="2.5" fill="#00A1E0" opacity="0.2"
        initial={{ scaleX: 0 }} animate={{ scaleX: 1 }}
 transition={{ duration: 0.3, delay: 0.95, ease }}
      />
      <motion.rect x="222" y="70" width="40" height="5" rx="2.5" fill="#14b8a6" opacity="0.2"
        initial={{ scaleX: 0 }} animate={{ scaleX: 1 }}
 transition={{ duration: 0.3, delay: 1, ease }}
      />
      <motion.rect x="222" y="80" width="40" height="5" rx="2.5" fill="#14b8a6" opacity="0.2"
        initial={{ scaleX: 0 }} animate={{ scaleX: 1 }}
 transition={{ duration: 0.3, delay: 1.05, ease }}
      />
      {/* SF cloud badge on target */}
      <motion.path
        d="M238 90c0-2 1.5-3.5 3.5-3.5 1.2 0 2.3.6 2.8 1.6.5-.2 1-.3 1.5-.3 2 0 2.8 1.6 2.8 2.8 0 1.6-1.3 2.9-2.9 2.9h-5.4c-1.5 0-2.3-1.2-2.3-2.3z"
        fill="#00A1E0" opacity="0.4"
        initial={{ opacity: 0, scale: 0.7 }} animate={{ opacity: 0.4, scale: 1 }}
 transition={{ duration: 0.4, delay: 1.1, ease }}
      />
    </svg>
  );
}

function AdminSupportSVG() {
  return (
    <svg viewBox="0 0 280 120" fill="none" className="w-full h-full">
      {/* Main dashboard panel */}
      <motion.rect
        x="20" y="10" width="240" height="100" rx="10"
        fill="white" stroke="#00A1E0" strokeWidth="1.2"
        initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }}
 transition={{ duration: 0.6, ease }}
      />
      {/* Dashboard header */}
      <motion.rect
        x="20" y="10" width="240" height="18" rx="10"
        fill="#00A1E0" opacity="0.07"
        initial={{ opacity: 0 }} animate={{ opacity: 0.07 }}
 transition={{ duration: 0.4, delay: 0.1, ease }}
      />
      <circle cx="34" cy="19" r="2.5" fill="#00A1E0" opacity="0.4" />
      <rect x="42" y="17" width="50" height="4" rx="2" fill="#00A1E0" opacity="0.15" />

      {/* Health score gauge */}
      <motion.circle
        cx="65" cy="58" r="20"
        stroke="#e5e7eb" strokeWidth="4" fill="none"
        initial={{ opacity: 0 }} animate={{ opacity: 1 }}
 transition={{ duration: 0.3, delay: 0.2, ease }}
      />
      <motion.circle
        cx="65" cy="58" r="20"
        stroke="#14b8a6" strokeWidth="4" fill="none"
        strokeDasharray="110 126" strokeLinecap="round"
        transform="rotate(-90 65 58)"
        initial={{ pathLength: 0 }} animate={{ pathLength: 1 }}
 transition={{ duration: 1, delay: 0.4, ease }}
      />
      <text x="65" y="56" fontSize="9" fontWeight="700" fill="#14b8a6" textAnchor="middle" fontFamily="Inter, sans-serif">87</text>
      <text x="65" y="65" fontSize="5" fill="#86868b" textAnchor="middle" fontFamily="Inter, sans-serif">Health</text>

      {/* Metric cards row */}
      {/* Active Users */}
      <motion.rect x="100" y="34" width="68" height="30" rx="6" fill="#00A1E0" opacity="0.06"
        initial={{ opacity: 0, y: 5 }} animate={{ opacity: 1, y: 0 }}
 transition={{ duration: 0.4, delay: 0.4, ease }}
      />
      <text x="108" y="47" fontSize="5" fill="#86868b" fontFamily="Inter, sans-serif">Active Users</text>
      <text x="108" y="58" fontSize="11" fontWeight="700" fill="#00A1E0" fontFamily="Inter, sans-serif">248</text>
      <motion.path d="M145 56 L148 52 L152 54 L156 48 L160 50" stroke="#14b8a6" strokeWidth="1.2" fill="none" strokeLinecap="round"
        initial={{ pathLength: 0 }} animate={{ pathLength: 1 }}
 transition={{ duration: 0.5, delay: 0.6, ease }}
      />

      {/* API Calls */}
      <motion.rect x="175" y="34" width="68" height="30" rx="6" fill="#14b8a6" opacity="0.06"
        initial={{ opacity: 0, y: 5 }} animate={{ opacity: 1, y: 0 }}
 transition={{ duration: 0.4, delay: 0.5, ease }}
      />
      <text x="183" y="47" fontSize="5" fill="#86868b" fontFamily="Inter, sans-serif">API Calls</text>
      <text x="183" y="58" fontSize="11" fontWeight="700" fill="#14b8a6" fontFamily="Inter, sans-serif">12.4k</text>

      {/* User management row */}
      <motion.rect x="100" y="72" width="143" height="28" rx="6" fill="#f5f5f7" opacity="0.8"
        initial={{ opacity: 0 }} animate={{ opacity: 0.8 }}
 transition={{ duration: 0.4, delay: 0.6, ease }}
      />
      {/* User avatars */}
      <motion.circle cx="114" cy="86" r="7" fill="#00A1E0" opacity="0.2"
        initial={{ scale: 0 }} animate={{ scale: 1 }}
 transition={{ duration: 0.3, delay: 0.7, ease }}
      />
      <circle cx="114" cy="84" r="2.5" fill="#00A1E0" opacity="0.4" />
      <path d="M110 90 Q114 88 118 90" fill="#00A1E0" opacity="0.3" />

      <motion.circle cx="132" cy="86" r="7" fill="#14b8a6" opacity="0.2"
        initial={{ scale: 0 }} animate={{ scale: 1 }}
 transition={{ duration: 0.3, delay: 0.75, ease }}
      />
      <circle cx="132" cy="84" r="2.5" fill="#14b8a6" opacity="0.4" />
      <path d="M128 90 Q132 88 136 90" fill="#14b8a6" opacity="0.3" />

      <motion.circle cx="150" cy="86" r="7" fill="#2563eb" opacity="0.2"
        initial={{ scale: 0 }} animate={{ scale: 1 }}
 transition={{ duration: 0.3, delay: 0.8, ease }}
      />
      <circle cx="150" cy="84" r="2.5" fill="#2563eb" opacity="0.4" />
      <path d="M146 90 Q150 88 154 90" fill="#2563eb" opacity="0.3" />

      {/* Status bars */}
      <motion.rect x="168" y="79" width="60" height="4" rx="2" fill="#e5e7eb"
        initial={{ opacity: 0 }} animate={{ opacity: 1 }}
 transition={{ duration: 0.3, delay: 0.8, ease }}
      />
      <motion.rect x="168" y="79" width="48" height="4" rx="2" fill="#14b8a6" opacity="0.5"
        initial={{ scaleX: 0 }} animate={{ scaleX: 1 }}
 transition={{ duration: 0.6, delay: 0.9, ease }}
        style={{ originX: 0, transformBox: "fill-box" }}
      />
      <motion.rect x="168" y="88" width="60" height="4" rx="2" fill="#e5e7eb"
        initial={{ opacity: 0 }} animate={{ opacity: 1 }}
 transition={{ duration: 0.3, delay: 0.85, ease }}
      />
      <motion.rect x="168" y="88" width="38" height="4" rx="2" fill="#00A1E0" opacity="0.5"
        initial={{ scaleX: 0 }} animate={{ scaleX: 1 }}
 transition={{ duration: 0.6, delay: 0.95, ease }}
        style={{ originX: 0, transformBox: "fill-box" }}
      />

      {/* Sidebar health metrics */}
      <motion.rect x="30" y="82" width="55" height="20" rx="5" fill="#14b8a6" opacity="0.06"
        initial={{ opacity: 0 }} animate={{ opacity: 1 }}
 transition={{ duration: 0.3, delay: 0.8, ease }}
      />
      <circle cx="38" cy="92" r="3" fill="#14b8a6" opacity="0.4" />
      <rect x="44" y="89" width="28" height="3" rx="1.5" fill="#14b8a6" opacity="0.2" />
      <rect x="44" y="95" width="20" height="2" rx="1" fill="#86868b" opacity="0.1" />
    </svg>
  );
}

/* ------------------------------------------------------------------ */
/*  Benefits SVG Illustrations (dark theme)                            */
/* ------------------------------------------------------------------ */

function Customer360SVG() {
  return (
    <svg viewBox="0 0 80 60" fill="none" className="w-full h-full">
      {/* Central user avatar */}
      <motion.circle cx="40" cy="24" r="10" fill="#00A1E0" opacity="0.15"
        initial={{ scale: 0 }} animate={{ scale: 1 }}
 transition={{ duration: 0.5, ease }}
      />
      <circle cx="40" cy="21" r="3.5" fill="#00A1E0" opacity="0.4" />
      <path d="M34 30 Q40 27 46 30" fill="#00A1E0" opacity="0.3" />

      {/* Orbiting touchpoints */}
      <motion.circle cx="40" cy="24" r="22" stroke="#00A1E0" strokeWidth="0.5" strokeDasharray="2 3" opacity="0.2"
        initial={{ opacity: 0 }} animate={{ opacity: 0.2 }}
 transition={{ duration: 0.6, delay: 0.3, ease }}
      />
      {/* Data points on orbit */}
      <motion.circle cx="18" cy="22" r="4" fill="#14b8a6" opacity="0.25"
        initial={{ scale: 0 }} animate={{ scale: 1 }}
 transition={{ duration: 0.3, delay: 0.4, ease }}
      />
      <motion.circle cx="62" cy="22" r="4" fill="#2563eb" opacity="0.25"
        initial={{ scale: 0 }} animate={{ scale: 1 }}
 transition={{ duration: 0.3, delay: 0.5, ease }}
      />
      <motion.circle cx="26" cy="42" r="4" fill="#00A1E0" opacity="0.25"
        initial={{ scale: 0 }} animate={{ scale: 1 }}
 transition={{ duration: 0.3, delay: 0.6, ease }}
      />
      <motion.circle cx="54" cy="42" r="4" fill="#14b8a6" opacity="0.25"
        initial={{ scale: 0 }} animate={{ scale: 1 }}
 transition={{ duration: 0.3, delay: 0.7, ease }}
      />

      {/* 360 text */}
      <text x="40" y="55" fontSize="6" fontWeight="600" fill="#00A1E0" opacity="0.5" textAnchor="middle" fontFamily="Inter, sans-serif">360</text>
    </svg>
  );
}

function AutomationSVG() {
  return (
    <svg viewBox="0 0 80 60" fill="none" className="w-full h-full">
      {/* Gear 1 */}
      <motion.path
        d="M28 25 L30 22 L33 23 L35 20 L38 21 L39 18 L42 18 L43 21 L46 20 L48 23 L51 22 L53 25 L50 27 L51 30 L53 32 L51 35 L48 34 L46 37 L43 36 L42 39 L39 39 L38 36 L35 37 L33 34 L30 35 L28 32 L31 30 L30 27Z"
        stroke="#00A1E0" strokeWidth="1" fill="#00A1E0" opacity="0.1"
        initial={{ rotate: 0 }}
        animate={{ rotate: 360 }}
        transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
        style={{ transformOrigin: "40px 28px" }}
      />
      <circle cx="40" cy="28" r="5" stroke="#00A1E0" strokeWidth="1" fill="none" opacity="0.3" />

      {/* Gear 2 (smaller) */}
      <motion.circle cx="55" cy="38" r="6" stroke="#14b8a6" strokeWidth="0.8" strokeDasharray="3 2" fill="#14b8a6" opacity="0.08"
        initial={{ rotate: 0 }}
        animate={{ rotate: -360 }}
        transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
        style={{ transformOrigin: "55px 38px" }}
      />

      {/* Flow arrows */}
      <motion.path
        d="M18 45 L28 45 L33 40"
        stroke="#00A1E0" strokeWidth="1" fill="none" opacity="0.3" strokeLinecap="round"
        initial={{ pathLength: 0 }} animate={{ pathLength: 1 }}
 transition={{ duration: 0.6, delay: 0.3, ease }}
      />
      <motion.path
        d="M48 40 L53 45 L65 45"
        stroke="#14b8a6" strokeWidth="1" fill="none" opacity="0.3" strokeLinecap="round"
        initial={{ pathLength: 0 }} animate={{ pathLength: 1 }}
 transition={{ duration: 0.6, delay: 0.5, ease }}
      />

      {/* Lightning bolts */}
      <motion.path d="M22 18 L19 23 L23 23 L20 28" stroke="#00A1E0" strokeWidth="1.2" fill="none" opacity="0.4"
        initial={{ opacity: 0 }} animate={{ opacity: [0, 0.4, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      />
    </svg>
  );
}

function MobileSVG() {
  return (
    <svg viewBox="0 0 80 60" fill="none" className="w-full h-full">
      {/* Phone outline */}
      <motion.rect
        x="28" y="5" width="24" height="50" rx="5"
        stroke="#00A1E0" strokeWidth="1.2" fill="white" opacity="0.1"
        initial={{ opacity: 0, y: 5 }} animate={{ opacity: 1, y: 0 }}
 transition={{ duration: 0.5, ease }}
      />
      {/* Screen area */}
      <motion.rect
        x="30" y="12" width="20" height="36" rx="2"
        fill="#00A1E0" opacity="0.08"
        initial={{ opacity: 0 }} animate={{ opacity: 0.08 }}
 transition={{ duration: 0.4, delay: 0.2, ease }}
      />
      {/* Notch */}
      <rect x="36" y="7" width="8" height="3" rx="1.5" fill="#00A1E0" opacity="0.15" />
      {/* Home indicator */}
      <rect x="36" y="51" width="8" height="2" rx="1" fill="#00A1E0" opacity="0.15" />

      {/* App content on screen */}
      <motion.rect x="33" y="16" width="14" height="3" rx="1.5" fill="#00A1E0" opacity="0.3"
        initial={{ scaleX: 0 }} animate={{ scaleX: 1 }}
 transition={{ duration: 0.3, delay: 0.3, ease }}
      />
      <motion.rect x="33" y="22" width="10" height="2" rx="1" fill="#86868b" opacity="0.15"
        initial={{ scaleX: 0 }} animate={{ scaleX: 1 }}
 transition={{ duration: 0.3, delay: 0.35, ease }}
      />
      <motion.rect x="33" y="28" width="14" height="6" rx="2" fill="#14b8a6" opacity="0.12"
        initial={{ opacity: 0 }} animate={{ opacity: 0.12 }}
 transition={{ duration: 0.3, delay: 0.4, ease }}
      />
      <motion.rect x="33" y="37" width="14" height="6" rx="2" fill="#00A1E0" opacity="0.12"
        initial={{ opacity: 0 }} animate={{ opacity: 0.12 }}
 transition={{ duration: 0.3, delay: 0.45, ease }}
      />

      {/* WiFi signal */}
      <motion.path d="M60 16 Q64 10 68 16" stroke="#14b8a6" strokeWidth="1" fill="none" opacity="0.3"
        initial={{ pathLength: 0 }} animate={{ pathLength: 1 }}
 transition={{ duration: 0.4, delay: 0.5, ease }}
      />
      <motion.path d="M58 20 Q64 12 70 20" stroke="#14b8a6" strokeWidth="1" fill="none" opacity="0.2"
        initial={{ pathLength: 0 }} animate={{ pathLength: 1 }}
 transition={{ duration: 0.4, delay: 0.6, ease }}
      />
      <circle cx="64" cy="20" r="1.5" fill="#14b8a6" opacity="0.4" />

      {/* Location pin for field teams */}
      <motion.path
        d="M16 30 C16 24 22 22 22 28 C22 32 19 36 19 36 C19 36 16 32 16 30Z"
        fill="#00A1E0" opacity="0.2" stroke="#00A1E0" strokeWidth="0.8"
        initial={{ opacity: 0, y: 3 }} animate={{ opacity: 1, y: 0 }}
 transition={{ duration: 0.4, delay: 0.4, ease }}
      />
      <circle cx="19" cy="29" r="2" fill="#00A1E0" opacity="0.3" />
    </svg>
  );
}

function AppExchangeSVG() {
  return (
    <svg viewBox="0 0 80 60" fill="none" className="w-full h-full">
      {/* Grid of app blocks */}
      <motion.rect x="10" y="8" width="16" height="16" rx="4" fill="#00A1E0" opacity="0.15" stroke="#00A1E0" strokeWidth="0.5"
        initial={{ scale: 0 }} animate={{ scale: 1 }}
 transition={{ duration: 0.3, delay: 0.1, ease }}
      />
      <motion.rect x="32" y="8" width="16" height="16" rx="4" fill="#14b8a6" opacity="0.15" stroke="#14b8a6" strokeWidth="0.5"
        initial={{ scale: 0 }} animate={{ scale: 1 }}
 transition={{ duration: 0.3, delay: 0.2, ease }}
      />
      <motion.rect x="54" y="8" width="16" height="16" rx="4" fill="#2563eb" opacity="0.15" stroke="#2563eb" strokeWidth="0.5"
        initial={{ scale: 0 }} animate={{ scale: 1 }}
 transition={{ duration: 0.3, delay: 0.3, ease }}
      />

      <motion.rect x="10" y="30" width="16" height="16" rx="4" fill="#2563eb" opacity="0.12" stroke="#2563eb" strokeWidth="0.5"
        initial={{ scale: 0 }} animate={{ scale: 1 }}
 transition={{ duration: 0.3, delay: 0.35, ease }}
      />
      <motion.rect x="32" y="30" width="16" height="16" rx="4" fill="#00A1E0" opacity="0.2" stroke="#00A1E0" strokeWidth="0.5"
        initial={{ scale: 0 }} animate={{ scale: 1 }}
 transition={{ duration: 0.3, delay: 0.4, ease }}
      />
      <motion.rect x="54" y="30" width="16" height="16" rx="4" fill="#14b8a6" opacity="0.12" stroke="#14b8a6" strokeWidth="0.5"
        initial={{ scale: 0 }} animate={{ scale: 1 }}
 transition={{ duration: 0.3, delay: 0.45, ease }}
      />

      {/* Icons inside blocks */}
      {/* Cloud */}
      <path d="M14 18c0-2 1.5-3 3-3 1 0 2 .5 2.5 1.3.5-.2 1-.3 1.5-.3 1.5 0 2.2 1.2 2.2 2.2 0 1.2-.9 2.2-2.2 2.2h-4.5c-1 0-1.5-.8-1.5-1.5z" fill="#00A1E0" opacity="0.3" />
      {/* Chart */}
      <rect x="35" y="18" width="3" height="4" rx="0.5" fill="#14b8a6" opacity="0.4" />
      <rect x="39" y="14" width="3" height="8" rx="0.5" fill="#14b8a6" opacity="0.3" />
      <rect x="43" y="16" width="3" height="6" rx="0.5" fill="#14b8a6" opacity="0.35" />
      {/* Star */}
      <path d="M62 11l1 3h3l-2.5 1.8 1 3L62 17l-2.5 1.8 1-3L58 14h3z" fill="#2563eb" opacity="0.3" />

      {/* Plus icon for expandability */}
      <motion.path d="M40 52 L40 56 M38 54 L42 54" stroke="#00A1E0" strokeWidth="1.5" strokeLinecap="round" opacity="0.4"
        initial={{ scale: 0 }} animate={{ scale: 1 }}
 transition={{ duration: 0.3, delay: 0.6, ease }}
        style={{ transformOrigin: "40px 54px" }}
      />
    </svg>
  );
}

/* ------------------------------------------------------------------ */
/*  Data                                                               */
/* ------------------------------------------------------------------ */

const offerings = [
  {
    title: "Implementation",
    badge: { color: "bg-sf-blue", label: "Sales + Service Cloud", sublabel: "Full setup" },
    description:
      "Sales Cloud and Service Cloud implementation configured to your exact sales process and service workflows, from lead capture to case resolution.",
    Illustration: ImplementationSVG,
  },
  {
    title: "Customization & Development",
    badge: { color: "bg-brand-500", label: "Apex & Lightning", sublabel: "Custom build" },
    description:
      "Apex triggers, Lightning Web Components, and custom objects built to extend Salesforce beyond out-of-the-box capabilities.",
    Illustration: CustomizationSVG,
  },
  {
    title: "Integration",
    badge: { color: "bg-teal-500", label: "Connected Systems", sublabel: "Bi-directional" },
    description:
      "Connect Salesforce with your ERP, marketing automation, e-commerce, and analytics platforms through robust API integrations.",
    Illustration: IntegrationSVG,
  },
  {
    title: "Data Migration & Cleanup",
    badge: { color: "bg-sf-blue", label: "Clean Pipeline", sublabel: "Zero data loss" },
    description:
      "Deduplicate, cleanse, map, and migrate your data from legacy CRMs, spreadsheets, or siloed databases into a pristine Salesforce org.",
    Illustration: DataMigrationSVG,
  },
  {
    title: "Admin Support & Optimization",
    badge: { color: "bg-teal-500", label: "Org Health 87+", sublabel: "Continuous" },
    description:
      "Ongoing administration, user management, security reviews, and continuous improvement to keep your Salesforce org running at peak performance.",
    Illustration: AdminSupportSVG,
  },
];

const benefits = [
  {
    title: "360-degree customer view",
    description: "Every interaction, purchase, and support ticket — unified across all touchpoints in a single profile.",
    Illustration: Customer360SVG,
  },
  {
    title: "Automated workflows",
    description: "Eliminate repetitive tasks with Flow, Process Builder, and Apex-driven automation that keeps your team focused on selling.",
    Illustration: AutomationSVG,
  },
  {
    title: "Mobile-ready access",
    description: "Your field and remote teams get full CRM access from any device, anywhere — with offline support built in.",
    Illustration: MobileSVG,
  },
  {
    title: "Vast AppExchange ecosystem",
    description: "Thousands of pre-built apps and components to extend Salesforce for virtually any business need.",
    Illustration: AppExchangeSVG,
  },
];

/* ------------------------------------------------------------------ */
/*  Component                                                          */
/* ------------------------------------------------------------------ */

export default function SalesforceContent() {
  return (
    <>
      {/* ============================================================ */}
      {/*  HERO                                                        */}
      {/* ============================================================ */}
      <section className="relative overflow-hidden pt-6 pb-10 md:pt-8 md:pb-14">
        <div className="absolute inset-0 mesh-gradient" />
        <div className="absolute inset-0 dot-pattern opacity-30" />

        <div className="container-apple relative z-10 text-center">
          <div className="flex items-center justify-center gap-2 mb-6">
            <SalesforceLogo size={40} />
            <span className="text-caption font-semibold text-apple-black tracking-tight">
              Solutions
            </span>
          </div>

          <h1 className="text-display text-apple-black mb-5">
            A CRM that works{" "}
            <span className="text-gradient">the way you sell.</span>
          </h1>

          <p className="text-body-lg text-apple-gray leading-relaxed max-w-3xl mx-auto mb-8">
            Salesforce is the world&apos;s leading CRM — but out of the box,
            it&apos;s just a starting point. ERP Biz Apps configures,
            customizes, and integrates Salesforce so it mirrors your actual sales
            process, automates the busywork, and gives your leadership real
            visibility into pipeline and performance.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button href="/contact" size="lg">
              Let&apos;s Talk CRM
            </Button>
            <Button href="/services" variant="secondary" size="lg">
              All Services
            </Button>
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/*  OFFERINGS                                                   */}
      {/* ============================================================ */}
      <section className="section-break bg-white">
        <div className="container-apple">
          {/* Inline section heading */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
             transition={{ duration: 0.7, ease }}
            className="text-center mb-12"
          >
            <p className="text-[0.8125rem] font-semibold text-sf-blue tracking-wide uppercase mb-3">
              What we offer
            </p>
            <h2 className="text-display-sm text-apple-black mb-4 text-balance">
              Full-lifecycle Salesforce services.
            </h2>
            <p className="text-body-lg text-apple-gray max-w-2xl mx-auto">
              Tailored to SMBs — from first implementation to ongoing
              optimization and support.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5">
            {offerings.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                 transition={{
                  duration: 0.6,
                  delay: index * 0.08,
                  ease,
                }}
                className="group rounded-[22px] shadow-card hover:shadow-card-hover border border-black/[0.04] bg-white transition-all duration-500 overflow-hidden"
              >
                {/* Illustration area */}
                <div className="h-[140px] bg-apple-gray-light/50 flex items-center justify-center px-4 overflow-hidden">
                  <item.Illustration />
                </div>

                {/* Content */}
                <div className="p-6">
                  {/* Metric badge */}
                  <div className="flex items-center gap-2 mb-3">
                    <span className={`w-[6px] h-[6px] rounded-full ${item.badge.color}`} />
                    <span className="text-[0.6875rem] font-semibold text-apple-black tracking-tight">
                      {item.badge.label}
                    </span>
                    <span className="text-[0.6875rem] text-apple-gray">
                      {item.badge.sublabel}
                    </span>
                  </div>

                  <h3 className="text-[1.0625rem] font-semibold text-apple-black mb-2 tracking-tight">
                    {item.title}
                  </h3>
                  <p className="text-[0.8125rem] text-apple-gray leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/*  BENEFITS — Dark Section                                     */}
      {/* ============================================================ */}
      <section className="section-break bg-apple-black relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/3 w-[600px] h-[600px] bg-sf-blue/5 rounded-full blur-[120px]" />
          <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-teal-500/5 rounded-full blur-[100px]" />
        </div>

        <div className="container-apple relative z-10">
          {/* Inline section heading — dark variant */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
             transition={{ duration: 0.7, ease }}
            className="text-center mb-12"
          >
            <p className="text-[0.8125rem] font-semibold text-sf-blue tracking-wide uppercase mb-3">
              Why Salesforce
            </p>
            <h2 className="text-display-sm text-white mb-4 text-balance">
              The CRM that grows with you.
            </h2>
            <p className="text-body-lg text-apple-gray max-w-2xl mx-auto">
              Powerful enough for enterprise, flexible enough for growing
              businesses.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-5 max-w-4xl mx-auto">
            {benefits.map((benefit, index) => (
              <motion.div
                key={benefit.title}
                initial={{ opacity: 0, y: 25 }}
                animate={{ opacity: 1, y: 0 }}
                 transition={{
                  duration: 0.6,
                  delay: index * 0.1,
                  ease,
                }}
                className="rounded-[22px] bg-white/[0.03] border border-white/[0.06] overflow-hidden hover:bg-white/[0.05] transition-all duration-500"
              >
                {/* Illustration zone */}
                <div className="h-[90px] flex items-center justify-center bg-white/[0.02]">
                  <benefit.Illustration />
                </div>

                <div className="p-5">
                  <h3 className="text-[1.0625rem] font-semibold text-white mb-1.5 tracking-tight">
                    {benefit.title}
                  </h3>
                  <p className="text-[0.8125rem] text-apple-gray leading-relaxed">
                    {benefit.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/*  CTA BANNER                                                  */}
      {/* ============================================================ */}
      <CTABanner
        title="Ready to unlock the full potential of Salesforce?"
        subtitle="We'll configure it to match the way your team actually works."
        buttonText="Let's Talk CRM"
        buttonHref="/contact"
      />
    </>
  );
}
