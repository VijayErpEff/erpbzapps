"use client";

import FadeIn, { FadeInStagger, FadeInChild } from "@/components/ui/FadeIn";
import CTABanner from "@/components/ui/CTABanner";
import Button from "@/components/ui/Button";

/* ------------------------------------------------------------------ */
/*  SVG Illustration Components                                        */
/* ------------------------------------------------------------------ */

function BCtoSFIllustration() {
  return (
    <svg viewBox="0 0 320 180" fill="none" className="w-full h-full">
      {/* Background grid */}
      <defs>
        <pattern id="bc-grid" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
          <path d="M20 0H0V20" stroke="#e5e7eb" strokeWidth="0.3" fill="none" />
        </pattern>
      </defs>
      <rect width="320" height="180" fill="url(#bc-grid)" opacity="0.5" />

      {/* Microsoft Logo Block */}
      <g transform="translate(40, 55)">
        <rect width="70" height="70" rx="14" fill="white" stroke="#e5e7eb" strokeWidth="0.8" />
        <rect x="16" y="16" width="17" height="17" rx="2" fill="#F25022" />
        <rect x="37" y="16" width="17" height="17" rx="2" fill="#7FBA00" />
        <rect x="16" y="37" width="17" height="17" rx="2" fill="#00A4EF" />
        <rect x="37" y="37" width="17" height="17" rx="2" fill="#FFB900" />
      </g>
      <text x="75" y="145" textAnchor="middle" fill="#6b7280" fontSize="8" fontWeight="500" fontFamily="Inter, sans-serif">Business Central</text>

      {/* Connector Path */}
      <path d="M120 90 C160 90, 160 90, 200 90" stroke="#d1d5db" strokeWidth="1.2" strokeDasharray="4 3" />

      {/* Bidirectional arrows in center */}
      <g transform="translate(152, 78)">
        <rect width="16" height="24" rx="8" fill="white" stroke="#e5e7eb" strokeWidth="0.6" />
        <path d="M5 86 L8 83 L11 86" transform="translate(0,-70)" stroke="#2563eb" strokeWidth="1.2" strokeLinecap="round" fill="none" />
        <path d="M5 90 L8 93 L11 90" transform="translate(0,-70)" stroke="#14b8a6" strokeWidth="1.2" strokeLinecap="round" fill="none" />
      </g>

      {/* Salesforce Cloud Logo Block */}
      <g transform="translate(210, 55)">
        <rect width="70" height="70" rx="14" fill="white" stroke="#e5e7eb" strokeWidth="0.8" />
        <g transform="translate(14, 18)">
          <path
            d="M18 32c-5 0-9-3.2-9-7.5 0-1 .2-2 .6-2.9C8 20.5 7 18.6 7 16.5 7 12.4 10.6 9 15 9c1.8 0 3.4.5 4.8 1.3C21.5 8.9 24 8 26.5 8 33 8 38 12.5 38 18.2c0 1-.1 2-.4 2.9C39.4 22.4 41 24.8 41 27.5 41 31.6 37.4 35 33 35H18v-3z"
            fill="#00A1E0" transform="scale(0.85) translate(2,-2)"
          />
        </g>
      </g>
      <text x="245" y="145" textAnchor="middle" fill="#6b7280" fontSize="8" fontWeight="500" fontFamily="Inter, sans-serif">Salesforce</text>
    </svg>
  );
}

function ERPEcommerceIllustration() {
  return (
    <svg viewBox="0 0 320 180" fill="none" className="w-full h-full">
      <defs>
        <pattern id="ec-grid" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
          <path d="M20 0H0V20" stroke="#e5e7eb" strokeWidth="0.3" fill="none" />
        </pattern>
      </defs>
      <rect width="320" height="180" fill="url(#ec-grid)" opacity="0.5" />

      {/* ERP Dashboard */}
      <g transform="translate(30, 40)">
        <rect width="90" height="100" rx="12" fill="white" stroke="#e5e7eb" strokeWidth="0.8" />
        {/* Mini chart bars */}
        <rect x="14" y="22" width="10" height="36" rx="3" fill="#2563eb" opacity="0.2" />
        <rect x="14" y="38" width="10" height="20" rx="3" fill="#2563eb" />
        <rect x="30" y="22" width="10" height="36" rx="3" fill="#14b8a6" opacity="0.2" />
        <rect x="30" y="30" width="10" height="28" rx="3" fill="#14b8a6" />
        <rect x="46" y="22" width="10" height="36" rx="3" fill="#2563eb" opacity="0.2" />
        <rect x="46" y="34" width="10" height="24" rx="3" fill="#2563eb" />
        <rect x="62" y="22" width="10" height="36" rx="3" fill="#14b8a6" opacity="0.2" />
        <rect x="62" y="26" width="10" height="32" rx="3" fill="#14b8a6" />
        {/* Header bar */}
        <rect x="14" y="10" width="62" height="6" rx="3" fill="#f3f4f6" />
        {/* Table rows */}
        <rect x="14" y="68" width="62" height="4" rx="2" fill="#f3f4f6" />
        <rect x="14" y="78" width="48" height="4" rx="2" fill="#f3f4f6" />
        <rect x="14" y="88" width="55" height="4" rx="2" fill="#f3f4f6" />
      </g>
      <text x="75" y="155" textAnchor="middle" fill="#6b7280" fontSize="8" fontWeight="500" fontFamily="Inter, sans-serif">ERP System</text>

      {/* Connector */}
      <path d="M130 90 C160 90, 160 90, 190 90" stroke="#d1d5db" strokeWidth="1.2" strokeDasharray="4 3" />

      {/* Storefront */}
      <g transform="translate(200, 40)">
        <rect width="90" height="100" rx="12" fill="white" stroke="#e5e7eb" strokeWidth="0.8" />
        {/* Awning */}
        <path d="M10 30 Q20 20, 30 30 Q40 20, 50 30 Q60 20, 70 30 Q80 20, 80 30" stroke="#7FBA00" strokeWidth="2" fill="none" strokeLinecap="round" />
        {/* Door */}
        <rect x="32" y="50" width="26" height="35" rx="4" fill="#f3f4f6" stroke="#e5e7eb" strokeWidth="0.5" />
        <circle cx="53" cy="68" r="2" fill="#d1d5db" />
        {/* Window */}
        <rect x="12" y="50" width="14" height="14" rx="3" fill="#00A4EF" opacity="0.15" />
        <rect x="64" y="50" width="14" height="14" rx="3" fill="#00A4EF" opacity="0.15" />
        {/* Shopping bag icon */}
        <g transform="translate(36, 14)">
          <path d="M2 8h14l-1.5 12H3.5L2 8z" fill="#14b8a6" opacity="0.2" />
          <path d="M6 8V5a3 3 0 016 0v3" stroke="#14b8a6" strokeWidth="1.2" fill="none" strokeLinecap="round" />
        </g>
      </g>
      <text x="245" y="155" textAnchor="middle" fill="#6b7280" fontSize="8" fontWeight="500" fontFamily="Inter, sans-serif">E-commerce</text>
    </svg>
  );
}

function CRMMarketingIllustration() {
  return (
    <svg viewBox="0 0 320 180" fill="none" className="w-full h-full">
      <defs>
        <pattern id="crm-grid" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
          <path d="M20 0H0V20" stroke="#e5e7eb" strokeWidth="0.3" fill="none" />
        </pattern>
      </defs>
      <rect width="320" height="180" fill="url(#crm-grid)" opacity="0.5" />

      {/* CRM Pipeline */}
      <g transform="translate(30, 35)">
        <rect width="90" height="110" rx="12" fill="white" stroke="#e5e7eb" strokeWidth="0.8" />
        {/* Pipeline header */}
        <rect x="10" y="10" width="70" height="6" rx="3" fill="#f3f4f6" />
        {/* Kanban columns */}
        <rect x="10" y="24" width="20" height="76" rx="4" fill="#2563eb" opacity="0.06" />
        <rect x="35" y="24" width="20" height="76" rx="4" fill="#14b8a6" opacity="0.06" />
        <rect x="60" y="24" width="20" height="76" rx="4" fill="#7FBA00" opacity="0.06" />
        {/* Cards in columns */}
        <rect x="12" y="28" width="16" height="12" rx="3" fill="#2563eb" opacity="0.3" />
        <rect x="12" y="44" width="16" height="12" rx="3" fill="#2563eb" opacity="0.2" />
        <rect x="12" y="60" width="16" height="12" rx="3" fill="#2563eb" opacity="0.15" />
        <rect x="37" y="28" width="16" height="12" rx="3" fill="#14b8a6" opacity="0.3" />
        <rect x="37" y="44" width="16" height="12" rx="3" fill="#14b8a6" opacity="0.2" />
        <rect x="62" y="28" width="16" height="12" rx="3" fill="#7FBA00" opacity="0.3" />
        <rect x="62" y="44" width="16" height="12" rx="3" fill="#7FBA00" opacity="0.2" />
        {/* Column labels */}
        <text x="20" y="88" textAnchor="middle" fill="#9ca3af" fontSize="5" fontFamily="Inter, sans-serif">Lead</text>
        <text x="45" y="88" textAnchor="middle" fill="#9ca3af" fontSize="5" fontFamily="Inter, sans-serif">Qual</text>
        <text x="70" y="88" textAnchor="middle" fill="#9ca3af" fontSize="5" fontFamily="Inter, sans-serif">Won</text>
      </g>
      <text x="75" y="162" textAnchor="middle" fill="#6b7280" fontSize="8" fontWeight="500" fontFamily="Inter, sans-serif">CRM Pipeline</text>

      {/* Connector */}
      <path d="M130 90 C160 90, 160 90, 190 90" stroke="#d1d5db" strokeWidth="1.2" strokeDasharray="4 3" />

      {/* Marketing Automation */}
      <g transform="translate(200, 35)">
        <rect width="90" height="110" rx="12" fill="white" stroke="#e5e7eb" strokeWidth="0.8" />
        {/* Email icon */}
        <g transform="translate(25, 15)">
          <rect width="40" height="28" rx="4" fill="#F25022" opacity="0.1" stroke="#F25022" strokeWidth="0.5" />
          <path d="M4 6 L20 18 L36 6" stroke="#F25022" strokeWidth="1.2" fill="none" strokeLinecap="round" />
        </g>
        {/* Campaign rows */}
        <rect x="12" y="52" width="66" height="8" rx="4" fill="#f3f4f6" />
        <rect x="12" y="52" width="48" height="8" rx="4" fill="#7FBA00" opacity="0.2" />
        <rect x="12" y="66" width="66" height="8" rx="4" fill="#f3f4f6" />
        <rect x="12" y="66" width="36" height="8" rx="4" fill="#00A4EF" opacity="0.2" />
        <rect x="12" y="80" width="66" height="8" rx="4" fill="#f3f4f6" />
        <rect x="12" y="80" width="55" height="8" rx="4" fill="#FFB900" opacity="0.2" />
        {/* Labels */}
        <text x="14" y="58" fill="#6b7280" fontSize="5" fontFamily="Inter, sans-serif">Email</text>
        <text x="14" y="72" fill="#6b7280" fontSize="5" fontFamily="Inter, sans-serif">Social</text>
        <text x="14" y="86" fill="#6b7280" fontSize="5" fontFamily="Inter, sans-serif">Ads</text>
      </g>
      <text x="245" y="162" textAnchor="middle" fill="#6b7280" fontSize="8" fontWeight="500" fontFamily="Inter, sans-serif">Marketing</text>
    </svg>
  );
}

function ERPPayrollIllustration() {
  return (
    <svg viewBox="0 0 320 180" fill="none" className="w-full h-full">
      <defs>
        <pattern id="hr-grid" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
          <path d="M20 0H0V20" stroke="#e5e7eb" strokeWidth="0.3" fill="none" />
        </pattern>
      </defs>
      <rect width="320" height="180" fill="url(#hr-grid)" opacity="0.5" />

      {/* Finance / ERP */}
      <g transform="translate(30, 40)">
        <rect width="90" height="100" rx="12" fill="white" stroke="#e5e7eb" strokeWidth="0.8" />
        {/* Dollar sign */}
        <g transform="translate(30, 10)">
          <circle cx="15" cy="15" r="14" fill="#2563eb" opacity="0.08" />
          <text x="15" y="20" textAnchor="middle" fill="#2563eb" fontSize="16" fontWeight="600" fontFamily="Inter, sans-serif">$</text>
        </g>
        {/* Ledger lines */}
        <rect x="12" y="48" width="66" height="4" rx="2" fill="#f3f4f6" />
        <rect x="12" y="58" width="50" height="4" rx="2" fill="#f3f4f6" />
        <rect x="12" y="68" width="58" height="4" rx="2" fill="#f3f4f6" />
        <rect x="12" y="78" width="42" height="4" rx="2" fill="#f3f4f6" />
        {/* Amount badges */}
        <rect x="60" y="48" width="18" height="4" rx="2" fill="#2563eb" opacity="0.15" />
        <rect x="60" y="58" width="18" height="4" rx="2" fill="#14b8a6" opacity="0.15" />
        <rect x="60" y="68" width="18" height="4" rx="2" fill="#2563eb" opacity="0.15" />
      </g>
      <text x="75" y="155" textAnchor="middle" fill="#6b7280" fontSize="8" fontWeight="500" fontFamily="Inter, sans-serif">Finance / ERP</text>

      {/* Connector */}
      <path d="M130 90 C160 90, 160 90, 190 90" stroke="#d1d5db" strokeWidth="1.2" strokeDasharray="4 3" />

      {/* HR / Payroll */}
      <g transform="translate(200, 40)">
        <rect width="90" height="100" rx="12" fill="white" stroke="#e5e7eb" strokeWidth="0.8" />
        {/* People icons */}
        <g transform="translate(20, 12)">
          <circle cx="15" cy="10" r="6" fill="#14b8a6" opacity="0.2" />
          <circle cx="15" cy="10" r="4" fill="#14b8a6" opacity="0.4" />
          <path d="M5 28 C5 22, 10 18, 15 18 C20 18, 25 22, 25 28" fill="#14b8a6" opacity="0.15" />
          <circle cx="38" cy="10" r="6" fill="#2563eb" opacity="0.2" />
          <circle cx="38" cy="10" r="4" fill="#2563eb" opacity="0.4" />
          <path d="M28 28 C28 22, 33 18, 38 18 C43 18, 48 22, 48 28" fill="#2563eb" opacity="0.15" />
        </g>
        {/* Payroll items */}
        <rect x="12" y="52" width="66" height="8" rx="4" fill="#f3f4f6" />
        <rect x="12" y="52" width="52" height="8" rx="4" fill="#14b8a6" opacity="0.12" />
        <rect x="12" y="66" width="66" height="8" rx="4" fill="#f3f4f6" />
        <rect x="12" y="66" width="40" height="8" rx="4" fill="#2563eb" opacity="0.12" />
        <rect x="12" y="80" width="66" height="8" rx="4" fill="#f3f4f6" />
        <rect x="12" y="80" width="58" height="8" rx="4" fill="#14b8a6" opacity="0.12" />
      </g>
      <text x="245" y="155" textAnchor="middle" fill="#6b7280" fontSize="8" fontWeight="500" fontFamily="Inter, sans-serif">Payroll & HR</text>
    </svg>
  );
}

function CustomAPIIllustration() {
  return (
    <svg viewBox="0 0 320 180" fill="none" className="w-full h-full">
      <defs>
        <pattern id="api-grid" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
          <path d="M20 0H0V20" stroke="#e5e7eb" strokeWidth="0.3" fill="none" />
        </pattern>
      </defs>
      <rect width="320" height="180" fill="url(#api-grid)" opacity="0.5" />

      {/* Central API Hub */}
      <g transform="translate(120, 50)">
        <rect width="80" height="80" rx="16" fill="white" stroke="#2563eb" strokeWidth="1" strokeDasharray="3 2" />
        <text x="40" y="36" textAnchor="middle" fill="#2563eb" fontSize="11" fontWeight="700" fontFamily="Inter, sans-serif">API</text>
        <text x="40" y="50" textAnchor="middle" fill="#9ca3af" fontSize="7" fontFamily="Inter, sans-serif">Gateway</text>
        {/* Curly braces icon */}
        <text x="40" y="68" textAnchor="middle" fill="#2563eb" fontSize="14" opacity="0.3" fontFamily="monospace">&#123; &#125;</text>
      </g>

      {/* Endpoint nodes - top left */}
      <g transform="translate(30, 25)">
        <rect width="56" height="32" rx="8" fill="white" stroke="#e5e7eb" strokeWidth="0.6" />
        <circle cx="14" cy="16" r="5" fill="#F25022" opacity="0.2" />
        <rect x="24" y="12" width="22" height="3" rx="1.5" fill="#f3f4f6" />
        <rect x="24" y="18" width="16" height="3" rx="1.5" fill="#f3f4f6" />
      </g>
      <path d="M86 45 L120 70" stroke="#d1d5db" strokeWidth="0.8" strokeDasharray="3 2" />

      {/* Endpoint nodes - bottom left */}
      <g transform="translate(30, 120)">
        <rect width="56" height="32" rx="8" fill="white" stroke="#e5e7eb" strokeWidth="0.6" />
        <circle cx="14" cy="16" r="5" fill="#7FBA00" opacity="0.2" />
        <rect x="24" y="12" width="22" height="3" rx="1.5" fill="#f3f4f6" />
        <rect x="24" y="18" width="16" height="3" rx="1.5" fill="#f3f4f6" />
      </g>
      <path d="M86 135 L120 110" stroke="#d1d5db" strokeWidth="0.8" strokeDasharray="3 2" />

      {/* Endpoint nodes - top right */}
      <g transform="translate(234, 25)">
        <rect width="56" height="32" rx="8" fill="white" stroke="#e5e7eb" strokeWidth="0.6" />
        <circle cx="14" cy="16" r="5" fill="#00A4EF" opacity="0.2" />
        <rect x="24" y="12" width="22" height="3" rx="1.5" fill="#f3f4f6" />
        <rect x="24" y="18" width="16" height="3" rx="1.5" fill="#f3f4f6" />
      </g>
      <path d="M234 45 L200 70" stroke="#d1d5db" strokeWidth="0.8" strokeDasharray="3 2" />

      {/* Endpoint nodes - bottom right */}
      <g transform="translate(234, 120)">
        <rect width="56" height="32" rx="8" fill="white" stroke="#e5e7eb" strokeWidth="0.6" />
        <circle cx="14" cy="16" r="5" fill="#FFB900" opacity="0.2" />
        <rect x="24" y="12" width="22" height="3" rx="1.5" fill="#f3f4f6" />
        <rect x="24" y="18" width="16" height="3" rx="1.5" fill="#f3f4f6" />
      </g>
      <path d="M234 135 L200 110" stroke="#d1d5db" strokeWidth="0.8" strokeDasharray="3 2" />
    </svg>
  );
}

/* Approach section illustrations */
function AssessMapIllustration() {
  return (
    <svg viewBox="0 0 280 140" fill="none" className="w-full h-full">
      {/* System boxes */}
      <rect x="20" y="20" width="50" height="30" rx="6" fill="rgba(255,255,255,0.06)" stroke="rgba(255,255,255,0.1)" strokeWidth="0.8" />
      <text x="45" y="38" textAnchor="middle" fill="rgba(255,255,255,0.5)" fontSize="7" fontFamily="Inter, sans-serif">ERP</text>

      <rect x="115" y="20" width="50" height="30" rx="6" fill="rgba(255,255,255,0.06)" stroke="rgba(255,255,255,0.1)" strokeWidth="0.8" />
      <text x="140" y="38" textAnchor="middle" fill="rgba(255,255,255,0.5)" fontSize="7" fontFamily="Inter, sans-serif">CRM</text>

      <rect x="210" y="20" width="50" height="30" rx="6" fill="rgba(255,255,255,0.06)" stroke="rgba(255,255,255,0.1)" strokeWidth="0.8" />
      <text x="235" y="38" textAnchor="middle" fill="rgba(255,255,255,0.5)" fontSize="7" fontFamily="Inter, sans-serif">Shop</text>

      {/* Mapping lines */}
      <path
        d="M45 50 L45 80 L140 80 L140 50"
        stroke="#2563eb" strokeWidth="1" fill="none" strokeDasharray="4 3"
      />
      <path
        d="M140 50 L140 100 L235 100 L235 50"
        stroke="#14b8a6" strokeWidth="1" fill="none" strokeDasharray="4 3"
      />
      <path
        d="M45 50 L45 110 L235 110 L235 50"
        stroke="rgba(255,255,255,0.15)" strokeWidth="0.8" fill="none" strokeDasharray="3 4"
      />

      {/* Labels */}
      <text x="92" y="76" textAnchor="middle" fill="rgba(255,255,255,0.3)" fontSize="5.5" fontFamily="Inter, sans-serif">data flow</text>
      <text x="188" y="96" textAnchor="middle" fill="rgba(255,255,255,0.3)" fontSize="5.5" fontFamily="Inter, sans-serif">mapping</text>
    </svg>
  );
}

function BuildTestIllustration() {
  return (
    <svg viewBox="0 0 280 140" fill="none" className="w-full h-full">
      {/* Code block */}
      <g transform="translate(15, 15)">
        <rect width="150" height="110" rx="8" fill="rgba(255,255,255,0.04)" stroke="rgba(255,255,255,0.08)" strokeWidth="0.6" />
        {/* Title bar dots */}
        <circle cx="14" cy="12" r="2.5" fill="#F25022" opacity="0.6" />
        <circle cx="24" cy="12" r="2.5" fill="#FFB900" opacity="0.6" />
        <circle cx="34" cy="12" r="2.5" fill="#7FBA00" opacity="0.6" />
        {/* Code lines */}
        <rect x="12" y="28" width="40" height="3" rx="1.5" fill="#2563eb" opacity="0.4" />
        <rect x="20" y="36" width="80" height="3" rx="1.5" fill="rgba(255,255,255,0.12)" />
        <rect x="20" y="44" width="60" height="3" rx="1.5" fill="rgba(255,255,255,0.08)" />
        <rect x="20" y="52" width="90" height="3" rx="1.5" fill="#14b8a6" opacity="0.3" />
        <rect x="20" y="60" width="55" height="3" rx="1.5" fill="rgba(255,255,255,0.1)" />
        <rect x="12" y="68" width="35" height="3" rx="1.5" fill="#2563eb" opacity="0.3" />
        <rect x="20" y="76" width="70" height="3" rx="1.5" fill="rgba(255,255,255,0.08)" />
        <rect x="20" y="84" width="45" height="3" rx="1.5" fill="#14b8a6" opacity="0.2" />
        <rect x="12" y="92" width="30" height="3" rx="1.5" fill="rgba(255,255,255,0.06)" />
      </g>

      {/* Test results */}
      <g transform="translate(185, 20)">
        <rect width="80" height="100" rx="8" fill="rgba(255,255,255,0.04)" stroke="rgba(255,255,255,0.08)" strokeWidth="0.6" />
        <text x="12" y="20" fill="rgba(255,255,255,0.4)" fontSize="7" fontWeight="600" fontFamily="Inter, sans-serif">Tests</text>
        {/* Test rows with checkmarks */}
        <g>
          <circle cx="16" cy="36" r="4" fill="#7FBA00" opacity="0.2" />
          <path d="M13.5 36 L15.5 38 L19 34" stroke="#7FBA00" strokeWidth="1" fill="none" strokeLinecap="round" />
          <rect x="26" y="34" width="40" height="3" rx="1.5" fill="rgba(255,255,255,0.1)" />
        </g>
        <g>
          <circle cx="16" cy="52" r="4" fill="#7FBA00" opacity="0.2" />
          <path d="M13.5 52 L15.5 54 L19 50" stroke="#7FBA00" strokeWidth="1" fill="none" strokeLinecap="round" />
          <rect x="26" y="50" width="35" height="3" rx="1.5" fill="rgba(255,255,255,0.1)" />
        </g>
        <g>
          <circle cx="16" cy="68" r="4" fill="#7FBA00" opacity="0.2" />
          <path d="M13.5 68 L15.5 70 L19 66" stroke="#7FBA00" strokeWidth="1" fill="none" strokeLinecap="round" />
          <rect x="26" y="66" width="44" height="3" rx="1.5" fill="rgba(255,255,255,0.1)" />
        </g>
        <g>
          <circle cx="16" cy="84" r="4" fill="#7FBA00" opacity="0.2" />
          <path d="M13.5 84 L15.5 86 L19 82" stroke="#7FBA00" strokeWidth="1" fill="none" strokeLinecap="round" />
          <rect x="26" y="82" width="30" height="3" rx="1.5" fill="rgba(255,255,255,0.1)" />
        </g>
      </g>

      {/* Connection line */}
      <path
        d="M165 70 L185 70"
        stroke="#7FBA00" strokeWidth="1" strokeDasharray="3 2" opacity="0.5"
      />
    </svg>
  );
}

function MonitorMaintainIllustration() {
  return (
    <svg viewBox="0 0 280 140" fill="none" className="w-full h-full">
      {/* Dashboard frame */}
      <g transform="translate(20, 10)">
        <rect width="240" height="120" rx="10" fill="rgba(255,255,255,0.03)" stroke="rgba(255,255,255,0.08)" strokeWidth="0.6" />

        {/* Health status indicators */}
        <g transform="translate(15, 15)">
          <rect width="65" height="40" rx="6" fill="rgba(255,255,255,0.04)" stroke="rgba(255,255,255,0.06)" strokeWidth="0.5" />
          <circle cx="14" cy="14" r="4" fill="#7FBA00" opacity="0.7" />
          <text x="24" y="17" fill="rgba(255,255,255,0.5)" fontSize="6" fontFamily="Inter, sans-serif">BC Sync</text>
          <text x="12" y="32" fill="rgba(255,255,255,0.35)" fontSize="10" fontWeight="600" fontFamily="Inter, sans-serif">99.9%</text>
        </g>

        <g transform="translate(90, 15)">
          <rect width="65" height="40" rx="6" fill="rgba(255,255,255,0.04)" stroke="rgba(255,255,255,0.06)" strokeWidth="0.5" />
          <circle cx="14" cy="14" r="4" fill="#7FBA00" opacity="0.7" />
          <text x="24" y="17" fill="rgba(255,255,255,0.5)" fontSize="6" fontFamily="Inter, sans-serif">SF API</text>
          <text x="12" y="32" fill="rgba(255,255,255,0.35)" fontSize="10" fontWeight="600" fontFamily="Inter, sans-serif">100%</text>
        </g>

        <g transform="translate(165, 15)">
          <rect width="65" height="40" rx="6" fill="rgba(255,255,255,0.04)" stroke="rgba(255,255,255,0.06)" strokeWidth="0.5" />
          <circle cx="14" cy="14" r="4" fill="#FFB900" opacity="0.7" />
          <text x="24" y="17" fill="rgba(255,255,255,0.5)" fontSize="6" fontFamily="Inter, sans-serif">Shopify</text>
          <text x="12" y="32" fill="rgba(255,255,255,0.35)" fontSize="10" fontWeight="600" fontFamily="Inter, sans-serif">98.7%</text>
        </g>

        {/* Activity graph (line chart) */}
        <g transform="translate(15, 65)">
          <rect width="210" height="45" rx="6" fill="rgba(255,255,255,0.02)" />
          {/* Grid lines */}
          <line x1="0" y1="11" x2="210" y2="11" stroke="rgba(255,255,255,0.04)" strokeWidth="0.5" />
          <line x1="0" y1="22" x2="210" y2="22" stroke="rgba(255,255,255,0.04)" strokeWidth="0.5" />
          <line x1="0" y1="33" x2="210" y2="33" stroke="rgba(255,255,255,0.04)" strokeWidth="0.5" />
          {/* Chart line */}
          <path
            d="M5 30 L25 25 L45 28 L65 15 L85 18 L105 10 L125 14 L145 8 L165 12 L185 6 L205 10"
            stroke="#2563eb" strokeWidth="1.2" fill="none" strokeLinecap="round"
          />
          {/* Glow under line */}
          <path
            d="M5 30 L25 25 L45 28 L65 15 L85 18 L105 10 L125 14 L145 8 L165 12 L185 6 L205 10 L205 40 L5 40 Z"
            fill="url(#monitorGlow)"
          />
          <defs>
            <linearGradient id="monitorGlow" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#2563eb" stopOpacity="0.1" />
              <stop offset="100%" stopColor="#2563eb" stopOpacity="0" />
            </linearGradient>
          </defs>
        </g>
      </g>
    </svg>
  );
}

/* ------------------------------------------------------------------ */
/*  Data                                                                */
/* ------------------------------------------------------------------ */

const integrations = [
  {
    title: "Business Central \u2194 Salesforce",
    description:
      "Bi-directional sync between Microsoft Dynamics 365 Business Central and Salesforce CRM. Unified customer data, orders, and financials across both platforms.",
    badge: { color: "bg-[#2563eb]", label: "Most Popular", sublabel: "Enterprise" },
    Illustration: BCtoSFIllustration,
  },
  {
    title: "ERP \u2194 E-commerce",
    description:
      "Real-time inventory, pricing, and order sync with Shopify, WooCommerce, and Magento. Eliminate overselling and manual entry.",
    badge: { color: "bg-[#14b8a6]", label: "High Volume", sublabel: "Shopify \u00b7 WooCommerce \u00b7 Magento" },
    Illustration: ERPEcommerceIllustration,
  },
  {
    title: "CRM \u2194 Marketing Automation",
    description:
      "Connect your sales pipeline to HubSpot, Mailchimp, or Pardot. Lead scoring, campaign attribution, and lifecycle tracking flow automatically.",
    badge: { color: "bg-[#F25022]", label: "Lead-to-Revenue", sublabel: "HubSpot \u00b7 Mailchimp" },
    Illustration: CRMMarketingIllustration,
  },
  {
    title: "ERP \u2194 Payroll & HR",
    description:
      "Automate employee data, timesheets, and payroll between your ERP and HR systems. No more duplicate entry or reconciliation headaches.",
    badge: { color: "bg-[#7FBA00]", label: "Time Saver", sublabel: "Payroll \u00b7 HRIS" },
    Illustration: ERPPayrollIllustration,
  },
  {
    title: "Custom API Integrations",
    description:
      "Proprietary systems, legacy databases, or niche SaaS tools \u2014 we build custom API connectors that plug any system into your ecosystem.",
    badge: { color: "bg-[#FFB900]", label: "Flexible", sublabel: "Any System" },
    Illustration: CustomAPIIllustration,
  },
];

const approach = [
  {
    number: "01",
    title: "Assess & Map",
    description:
      "We audit every system, document data schemas, and map each flow to design an integration architecture that is clean, resilient, and future-proof.",
    Illustration: AssessMapIllustration,
  },
  {
    number: "02",
    title: "Build & Test",
    description:
      "We develop robust connectors with retry logic, error handling, structured logging, and automated test suites that validate every edge case.",
    Illustration: BuildTestIllustration,
  },
  {
    number: "03",
    title: "Monitor & Maintain",
    description:
      "Real-time health dashboards, alerting, and proactive maintenance ensure your integrations stay healthy as your systems evolve.",
    Illustration: MonitorMaintainIllustration,
  },
];

/* ------------------------------------------------------------------ */
/*  Component                                                           */
/* ------------------------------------------------------------------ */

export default function IntegrationContent() {
  return (
    <>
      {/* ───────────────────── Hero ───────────────────── */}
      <section className="relative overflow-hidden pt-6 pb-10 md:pt-8 md:pb-14">
        <div className="absolute inset-0 mesh-gradient" />
        <div className="absolute inset-0 dot-pattern opacity-30" />

        <div className="container-apple relative z-10 text-center">
          <p className="text-brand-500 text-[0.6875rem] font-semibold tracking-widest uppercase mb-4">
            System Integration
          </p>

          <h1 className="text-display text-apple-black mb-5">
            Connect your systems.{" "}
            <span className="text-gradient">Eliminate silos.</span>
          </h1>

          <p className="text-[0.9375rem] text-apple-gray leading-relaxed max-w-2xl mx-auto mb-8">
            Your ERP, CRM, e-commerce platform, and other tools shouldn&apos;t
            operate in isolation. We build reliable integrations that keep your
            data flowing and your teams in sync.
          </p>

          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Button href="/contact" size="lg">
              Get an Integration Assessment
            </Button>
            <Button href="/services" variant="secondary" size="lg">
              All Services
            </Button>
          </div>
        </div>
      </section>

      {/* ───────────────── What We Integrate ───────────────── */}
      <section className="py-section bg-white">
        <div className="container-apple">
          <FadeIn className="text-center mb-10">
            <p className="text-[0.6875rem] font-semibold tracking-widest uppercase text-brand-500 mb-3">
              What we integrate
            </p>
            <h2 className="text-display-sm text-apple-black mb-3">
              The tools your business relies on.
            </h2>
            <p className="text-[0.8125rem] text-apple-gray max-w-xl mx-auto leading-relaxed">
              We connect your systems so data flows automatically, accurately,
              and in real time.
            </p>
          </FadeIn>

          <FadeInStagger className="flex flex-col gap-4 md:gap-5 max-w-4xl mx-auto">
            {integrations.map((item, index) => (
              <FadeInChild
                key={item.title}
                index={index}
                className="group grid grid-cols-1 md:grid-cols-[1.2fr_1fr] rounded-[22px] shadow-card hover:shadow-card-hover border border-black/[0.04] bg-white overflow-hidden transition-all duration-500"
              >
                {/* Illustration area */}
                <div className="bg-apple-gray-light/50 p-4 md:p-5 flex items-center justify-center min-h-[180px] md:min-h-[200px]">
                  <item.Illustration />
                </div>

                {/* Content */}
                <div className="p-5 md:p-6 flex flex-col justify-center">
                  {/* Badge */}
                  <div className="flex items-center gap-2 mb-3">
                    <span
                      className={`w-[7px] h-[7px] rounded-full ${item.badge.color}`}
                    />
                    <span className="text-[0.6875rem] font-semibold text-apple-black tracking-tight">
                      {item.badge.label}
                    </span>
                    <span className="text-[0.6875rem] text-apple-gray">
                      {item.badge.sublabel}
                    </span>
                  </div>

                  <h3 className="text-[1.0625rem] font-semibold text-apple-black leading-snug mb-2 tracking-[-0.01em]">
                    {item.title}
                  </h3>
                  <p className="text-[0.8125rem] text-apple-gray leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </FadeInChild>
            ))}
          </FadeInStagger>
        </div>
      </section>

      {/* ───────────────── Approach (Dark) ───────────────── */}
      <section className="py-section bg-apple-black relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/4 w-[600px] h-[600px] bg-brand-500/5 rounded-full blur-[120px]" />
          <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-teal-500/5 rounded-full blur-[100px]" />
        </div>

        <div className="container-apple relative z-10">
          <FadeIn className="text-center mb-10">
            <p className="text-[0.6875rem] font-semibold tracking-widest uppercase text-brand-400 mb-3">
              Our approach
            </p>
            <h2 className="text-display-sm text-white mb-3">
              Reliable, maintainable, scalable.
            </h2>
            <p className="text-[0.8125rem] text-apple-gray max-w-xl mx-auto leading-relaxed">
              A proven methodology that ensures your integrations work today and
              keep working as your systems evolve.
            </p>
          </FadeIn>

          <FadeInStagger className="flex flex-col gap-4 md:gap-5 max-w-4xl mx-auto">
            {approach.map((step, index) => (
              <FadeInChild
                key={step.number}
                index={index}
                className="group grid grid-cols-1 md:grid-cols-[1fr_1.2fr] rounded-[22px] bg-white/[0.03] border border-white/[0.06] overflow-hidden hover:bg-white/[0.05] transition-all duration-500"
              >
                {/* Content */}
                <div className="p-5 md:p-7 flex flex-col justify-center order-2 md:order-1">
                  <span className="text-[0.6875rem] font-bold text-brand-400 tracking-wide mb-2 block">
                    {step.number}
                  </span>
                  <h3 className="text-[1.0625rem] font-semibold text-white leading-snug mb-2 tracking-[-0.01em]">
                    {step.title}
                  </h3>
                  <p className="text-[0.8125rem] text-apple-gray leading-relaxed">
                    {step.description}
                  </p>
                </div>

                {/* Illustration area */}
                <div className="bg-white/[0.02] border-b md:border-b-0 md:border-l border-white/[0.04] p-4 md:p-5 flex items-center justify-center min-h-[160px] order-1 md:order-2">
                  <step.Illustration />
                </div>
              </FadeInChild>
            ))}
          </FadeInStagger>
        </div>
      </section>

      {/* ───────────────────── CTA ───────────────────── */}
      <CTABanner
        title="Tired of disconnected systems? Let's connect them."
        subtitle="We'll map your data flows and build integrations that just work."
        buttonText="Get an Integration Assessment"
        buttonHref="/contact"
      />
    </>
  );
}
