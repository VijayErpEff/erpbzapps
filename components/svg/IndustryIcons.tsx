"use client";

/** Manufacturing — factory floor with conveyor, gears, boxes */
export function ManufacturingIcon({ className = "" }: { className?: string }) {
  return (
    <svg width="100%" height="100%" viewBox="0 0 200 140" fill="none" className={className}>
      <defs>
        <linearGradient id="mfg-g" x1="0" y1="0" x2="200" y2="140">
          <stop offset="0%" stopColor="#2563eb" /><stop offset="100%" stopColor="#14b8a6" />
        </linearGradient>
        <linearGradient id="mfg-g2" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#2563eb" stopOpacity="0.15" /><stop offset="100%" stopColor="#2563eb" stopOpacity="0.05" />
        </linearGradient>
      </defs>
      {/* Factory building */}
      <rect x="20" y="40" width="60" height="70" rx="5" fill="url(#mfg-g2)" />
      <rect x="20" y="40" width="60" height="70" rx="5" stroke="#2563eb" strokeWidth="1" opacity="0.3" />
      <rect x="25" y="28" width="20" height="17" rx="3" fill="#2563eb" opacity="0.25" />
      {/* Chimney smoke */}
      <path d="M35 28 Q32 20 36 15 Q34 9 37 5" stroke="#94a3b8" strokeWidth="2" opacity="0.3" fill="none" strokeLinecap="round" />
      {/* Windows — glowing */}
      <rect x="30" y="52" width="12" height="10" rx="2" fill="#2563eb" opacity="0.4" />
      <rect x="48" y="52" width="12" height="10" rx="2" fill="#2563eb" opacity="0.4" />
      <rect x="30" y="72" width="12" height="10" rx="2" fill="#14b8a6" opacity="0.45" />
      <rect x="48" y="72" width="12" height="10" rx="2" fill="#14b8a6" opacity="0.45" />
      {/* Door */}
      <rect x="40" y="92" width="16" height="18" rx="2" fill="#1e3a5f" opacity="0.3" />
      {/* Conveyor belt */}
      <rect x="85" y="97" width="95" height="6" rx="3" fill="#e2e8f0" opacity="0.3" />
      <circle cx="90" cy="100" r="5" fill="#94a3b8" opacity="0.4" />
      <circle cx="90" cy="100" r="2" fill="#64748b" opacity="0.5" />
      <circle cx="175" cy="100" r="5" fill="#94a3b8" opacity="0.4" />
      <circle cx="175" cy="100" r="2" fill="#64748b" opacity="0.5" />
      {/* Boxes on conveyor */}
      <rect x="105" y="83" width="16" height="15" rx="3" fill="#2563eb" opacity="0.5" />
      <rect x="105" y="83" width="16" height="5" rx="2" fill="#2563eb" opacity="0.6" />
      <rect x="130" y="86" width="13" height="12" rx="3" fill="#14b8a6" opacity="0.5" />
      <rect x="152" y="84" width="15" height="14" rx="3" fill="url(#mfg-g)" opacity="0.55" />
      {/* Gear — main */}
      <circle cx="140" cy="48" r="20" fill="#f1f5f9" opacity="0.3" />
      <circle cx="140" cy="48" r="18" stroke="#2563eb" strokeWidth="2.5" opacity="0.4" fill="none" />
      <circle cx="140" cy="48" r="12" stroke="#14b8a6" strokeWidth="1.5" opacity="0.35" fill="none" />
      <circle cx="140" cy="48" r="5" fill="url(#mfg-g)" opacity="0.6" />
      {/* Gear teeth */}
      {[0, 45, 90, 135, 180, 225, 270, 315].map((angle) => {
        const rad = (angle * Math.PI) / 180;
        return <line key={angle} x1={140 + Math.cos(rad) * 16} y1={48 + Math.sin(rad) * 16} x2={140 + Math.cos(rad) * 22} y2={48 + Math.sin(rad) * 22} stroke="#2563eb" strokeWidth="3.5" strokeLinecap="round" opacity="0.35" />;
      })}
      {/* Arrow */}
      <path d="M80 58 L102 58" stroke="url(#mfg-g)" strokeWidth="2.5" strokeLinecap="round" opacity="0.5" />
      <path d="M98 54 L103 58 L98 62" stroke="url(#mfg-g)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" fill="none" opacity="0.5" />
    </svg>
  );
}

/** Professional Services — calendar, clock, billing */
export function ProfServicesIcon({ className = "" }: { className?: string }) {
  return (
    <svg width="100%" height="100%" viewBox="0 0 200 140" fill="none" className={className}>
      <defs>
        <linearGradient id="ps-g" x1="0" y1="0" x2="200" y2="140">
          <stop offset="0%" stopColor="#14b8a6" /><stop offset="100%" stopColor="#2563eb" />
        </linearGradient>
      </defs>
      {/* Calendar */}
      <rect x="15" y="25" width="70" height="85" rx="8" fill="#f0fdfa" opacity="0.5" />
      <rect x="15" y="25" width="70" height="85" rx="8" stroke="#14b8a6" strokeWidth="1" opacity="0.3" />
      <rect x="15" y="25" width="70" height="22" rx="8" fill="#14b8a6" opacity="0.25" />
      <rect x="15" y="41" width="70" height="6" fill="#14b8a6" opacity="0.08" />
      {/* Calendar header text */}
      <text x="50" y="40" fontSize="6" fontWeight="700" fill="#14b8a6" textAnchor="middle" fontFamily="Inter, sans-serif" opacity="0.7">MARCH</text>
      {/* Calendar dots */}
      {[0,1,2,3,4].map(r => [0,1,2,3].map(c => (
        <circle key={`${r}-${c}`} cx={30 + c * 15} cy={58 + r * 12} r={r === 1 && c === 2 ? 5 : 2.5}
          fill="#14b8a6" opacity={r === 1 && c === 2 ? 0.7 : 0.25} />
      )))}
      {/* Selected date text */}
      <text x={30 + 2 * 15} y={60 + 1 * 12} fontSize="5" fontWeight="700" fill="white" textAnchor="middle" fontFamily="Inter, sans-serif" opacity="0.9">15</text>
      {/* Clock */}
      <circle cx="140" cy="45" r="28" fill="#eff6ff" opacity="0.4" />
      <circle cx="140" cy="45" r="26" stroke="url(#ps-g)" strokeWidth="2.5" opacity="0.4" fill="none" />
      {/* Clock ticks */}
      {[0, 30, 60, 90, 120, 150, 180, 210, 240, 270, 300, 330].map((a) => {
        const rad = (a * Math.PI) / 180;
        const isMajor = a % 90 === 0;
        return <line key={a} x1={140 + Math.cos(rad) * (isMajor ? 20 : 22)} y1={45 + Math.sin(rad) * (isMajor ? 20 : 22)} x2={140 + Math.cos(rad) * 24} y2={45 + Math.sin(rad) * 24} stroke="#64748b" strokeWidth={isMajor ? 2 : 1} strokeLinecap="round" opacity={isMajor ? 0.4 : 0.2} />;
      })}
      <line x1="140" y1="45" x2="140" y2="26" stroke="#1e293b" strokeWidth="2.5" strokeLinecap="round" opacity="0.6" />
      <line x1="140" y1="45" x2="155" y2="52" stroke="#14b8a6" strokeWidth="2" strokeLinecap="round" opacity="0.55" />
      <circle cx="140" cy="45" r="3.5" fill="url(#ps-g)" opacity="0.7" />
      {/* Invoice */}
      <rect x="108" y="80" width="58" height="42" rx="6" fill="#eff6ff" opacity="0.4" />
      <rect x="108" y="80" width="58" height="42" rx="6" stroke="#2563eb" strokeWidth="1" opacity="0.25" />
      <rect x="116" y="88" width="26" height="3" rx="1.5" fill="#2563eb" opacity="0.4" />
      <rect x="116" y="95" width="20" height="3" rx="1.5" fill="#14b8a6" opacity="0.35" />
      <rect x="116" y="102" width="32" height="3" rx="1.5" fill="#2563eb" opacity="0.3" />
      <text x="154" y="101" fontSize="16" fontWeight="800" fill="#14b8a6" opacity="0.5" fontFamily="Inter, sans-serif">$</text>
    </svg>
  );
}

/** Retail & E-Commerce — storefront, shopping cart, mobile */
export function RetailIcon({ className = "" }: { className?: string }) {
  return (
    <svg width="100%" height="100%" viewBox="0 0 200 140" fill="none" className={className}>
      <defs>
        <linearGradient id="ret-g" x1="0" y1="0" x2="200" y2="140">
          <stop offset="0%" stopColor="#2563eb" /><stop offset="100%" stopColor="#14b8a6" />
        </linearGradient>
      </defs>
      {/* Storefront */}
      <rect x="20" y="45" width="75" height="65" rx="5" fill="#eff6ff" opacity="0.4" />
      <rect x="20" y="45" width="75" height="65" rx="5" stroke="#2563eb" strokeWidth="1" opacity="0.25" />
      <path d="M20 50 L57 25 L95 50" stroke="#2563eb" strokeWidth="2.5" opacity="0.4" fill="#eff6ff" fillOpacity="0.2" strokeLinejoin="round" />
      {/* Awning */}
      <path d="M18 50 Q32 40 45 50 Q58 40 72 50 Q85 40 97 50" stroke="url(#ret-g)" strokeWidth="3" opacity="0.5" fill="none" />
      {/* Store windows */}
      <rect x="28" y="58" width="24" height="27" rx="3" fill="#2563eb" opacity="0.2" />
      <rect x="28" y="58" width="24" height="27" rx="3" stroke="#2563eb" strokeWidth="0.5" opacity="0.3" />
      <rect x="56" y="58" width="24" height="27" rx="3" fill="#14b8a6" opacity="0.2" />
      <rect x="56" y="58" width="24" height="27" rx="3" stroke="#14b8a6" strokeWidth="0.5" opacity="0.3" />
      {/* Door */}
      <rect x="43" y="88" width="16" height="22" rx="3" fill="url(#ret-g)" opacity="0.3" />
      <circle cx="56" cy="99" r="1.5" fill="#64748b" opacity="0.6" />
      {/* Shopping cart */}
      <path d="M118 63 L126 63 L140 95 L168 95" stroke="#334155" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" fill="none" opacity="0.55" />
      <circle cx="146" cy="103" r="5" fill="url(#ret-g)" opacity="0.4" />
      <circle cx="146" cy="103" r="2" fill="url(#ret-g)" opacity="0.6" />
      <circle cx="164" cy="103" r="5" fill="url(#ret-g)" opacity="0.4" />
      <circle cx="164" cy="103" r="2" fill="url(#ret-g)" opacity="0.6" />
      {/* Items in cart */}
      <rect x="130" y="75" width="12" height="15" rx="3" fill="#2563eb" opacity="0.45" />
      <rect x="145" y="78" width="10" height="12" rx="3" fill="#14b8a6" opacity="0.4" />
      {/* Mobile phone */}
      <rect x="155" y="28" width="30" height="50" rx="6" fill="#f8fafc" opacity="0.5" />
      <rect x="155" y="28" width="30" height="50" rx="6" stroke="#334155" strokeWidth="1.5" opacity="0.35" fill="none" />
      <rect x="159" y="38" width="22" height="28" rx="3" fill="#eff6ff" opacity="0.5" />
      <circle cx="170" cy="72" r="2.5" fill="#334155" opacity="0.3" />
      {/* Cart icon on phone */}
      <path d="M163 46 L166 46 L170 58 L178 58" stroke="#14b8a6" strokeWidth="1.5" strokeLinecap="round" opacity="0.5" fill="none" />
      <rect x="163" y="50" width="6" height="6" rx="1" fill="#2563eb" opacity="0.35" />
    </svg>
  );
}

/** Wholesale & Trade — supply chain, boxes, shipping */
export function WholesaleIcon({ className = "" }: { className?: string }) {
  return (
    <svg width="100%" height="100%" viewBox="0 0 200 140" fill="none" className={className}>
      <defs>
        <linearGradient id="ws-g" x1="0" y1="0" x2="200" y2="140">
          <stop offset="0%" stopColor="#14b8a6" /><stop offset="100%" stopColor="#2563eb" />
        </linearGradient>
      </defs>
      {/* Warehouse */}
      <rect x="15" y="50" width="65" height="55" rx="4" fill="#f0fdfa" opacity="0.4" />
      <rect x="15" y="50" width="65" height="55" rx="4" stroke="#14b8a6" strokeWidth="1" opacity="0.3" />
      <path d="M12 55 L47 28 L82 55" stroke="#14b8a6" strokeWidth="2.5" opacity="0.45" fill="#f0fdfa" fillOpacity="0.2" strokeLinejoin="round" />
      {/* Shelves */}
      <line x1="20" y1="70" x2="74" y2="70" stroke="#94a3b8" strokeWidth="1.5" opacity="0.35" />
      <line x1="20" y1="85" x2="74" y2="85" stroke="#94a3b8" strokeWidth="1.5" opacity="0.35" />
      {/* Boxes — richer fills */}
      <rect x="23" y="56" width="14" height="14" rx="3" fill="#14b8a6" opacity="0.5" />
      <rect x="23" y="56" width="14" height="5" rx="2" fill="#14b8a6" opacity="0.6" />
      <rect x="40" y="58" width="12" height="12" rx="3" fill="url(#ws-g)" opacity="0.45" />
      <rect x="56" y="55" width="14" height="15" rx="3" fill="#2563eb" opacity="0.45" />
      <rect x="26" y="72" width="16" height="13" rx="3" fill="#2563eb" opacity="0.4" />
      <rect x="48" y="73" width="14" height="12" rx="3" fill="url(#ws-g)" opacity="0.4" />
      {/* Arrow flow */}
      <path d="M85 75 L112 75" stroke="url(#ws-g)" strokeWidth="3" strokeLinecap="round" opacity="0.55" />
      <path d="M107 70 L114 75 L107 80" stroke="url(#ws-g)" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" fill="none" opacity="0.55" />
      {/* Truck */}
      <rect x="118" y="60" width="48" height="32" rx="5" fill="#eff6ff" opacity="0.4" />
      <rect x="118" y="60" width="48" height="32" rx="5" stroke="#2563eb" strokeWidth="1" opacity="0.3" />
      <rect x="166" y="70" width="22" height="22" rx="4" fill="#2563eb" opacity="0.15" />
      <rect x="166" y="70" width="22" height="22" rx="4" stroke="#2563eb" strokeWidth="1" opacity="0.3" />
      <rect x="169" y="73" width="16" height="12" rx="3" fill="#dbeafe" opacity="0.5" />
      {/* Wheels */}
      <circle cx="135" cy="95" r="6" fill="#334155" opacity="0.35" />
      <circle cx="135" cy="95" r="3" fill="#64748b" opacity="0.4" />
      <circle cx="172" cy="95" r="6" fill="#334155" opacity="0.35" />
      <circle cx="172" cy="95" r="3" fill="#64748b" opacity="0.4" />
      {/* Tracking dots */}
      {[0,1,2,3].map(i => (
        <circle key={i} cx={120 + i * 14} cy={118} r="3.5" fill="url(#ws-g)" opacity={0.25 + i * 0.12} />
      ))}
      <path d="M120 118 L162 118" stroke="url(#ws-g)" strokeWidth="1.5" strokeDasharray="4 3" opacity="0.35" />
    </svg>
  );
}

/** Healthcare — shield with cross, heartbeat, clipboard */
export function HealthcareIcon({ className = "" }: { className?: string }) {
  return (
    <svg width="100%" height="100%" viewBox="0 0 200 140" fill="none" className={className}>
      <defs>
        <linearGradient id="hc-g" x1="0" y1="0" x2="200" y2="140">
          <stop offset="0%" stopColor="#2563eb" /><stop offset="100%" stopColor="#14b8a6" />
        </linearGradient>
        <linearGradient id="hc-shield" x1="110" y1="10" x2="110" y2="112">
          <stop offset="0%" stopColor="#2563eb" stopOpacity="0.15" /><stop offset="100%" stopColor="#14b8a6" stopOpacity="0.05" />
        </linearGradient>
      </defs>
      {/* Shield */}
      <path d="M70 20 L110 10 L150 20 L150 65 C150 90 115 110 110 112 C105 110 70 90 70 65 Z"
        fill="url(#hc-shield)" />
      <path d="M70 20 L110 10 L150 20 L150 65 C150 90 115 110 110 112 C105 110 70 90 70 65 Z"
        stroke="url(#hc-g)" strokeWidth="2" fill="none" opacity="0.4" />
      {/* Cross */}
      <rect x="103" y="32" width="14" height="40" rx="4" fill="url(#hc-g)" opacity="0.5" />
      <rect x="94" y="45" width="32" height="14" rx="4" fill="url(#hc-g)" opacity="0.5" />
      {/* Heartbeat */}
      <path d="M12 95 L42 95 L52 76 L62 114 L72 82 L82 95 L112 95"
        stroke="url(#hc-g)" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" fill="none" opacity="0.55" />
      {/* Heartbeat dot */}
      <circle cx="62" cy="114" r="3" fill="#14b8a6" opacity="0.5" />
      {/* Clipboard */}
      <rect x="145" y="58" width="42" height="58" rx="6" fill="#f0fdfa" opacity="0.4" />
      <rect x="145" y="58" width="42" height="58" rx="6" stroke="#14b8a6" strokeWidth="1" opacity="0.3" />
      <rect x="155" y="54" width="22" height="12" rx="4" fill="#14b8a6" opacity="0.35" />
      <circle cx="166" cy="60" r="3" fill="#f0fdfa" opacity="0.6" />
      {/* Clipboard lines with checks */}
      {[0,1,2,3].map(i => (
        <g key={i}>
          <rect x="154" y={76 + i * 10} width={24 - i * 3} height="3" rx="1.5" fill={i % 2 === 0 ? "#14b8a6" : "#2563eb"} opacity={0.35 - i * 0.04} />
          <path d={`M150 ${77 + i * 10} l1.5 1.5 3-3`} stroke="#14b8a6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" opacity="0.55" />
        </g>
      ))}
    </svg>
  );
}

/** Nonprofits & Education — heart, graduation cap, growth */
export function NonprofitIcon({ className = "" }: { className?: string }) {
  return (
    <svg width="100%" height="100%" viewBox="0 0 200 140" fill="none" className={className}>
      <defs>
        <linearGradient id="np-g" x1="0" y1="0" x2="200" y2="140">
          <stop offset="0%" stopColor="#14b8a6" /><stop offset="100%" stopColor="#2563eb" />
        </linearGradient>
        <linearGradient id="np-heart" x1="25" y1="30" x2="75" y2="80">
          <stop offset="0%" stopColor="#14b8a6" stopOpacity="0.3" /><stop offset="100%" stopColor="#2563eb" stopOpacity="0.15" />
        </linearGradient>
      </defs>
      {/* Heart */}
      <path d="M50 55 C50 40 30 30 25 45 C20 60 50 80 50 80 C50 80 80 60 75 45 C70 30 50 40 50 55 Z"
        fill="url(#np-heart)" />
      <path d="M50 55 C50 40 30 30 25 45 C20 60 50 80 50 80 C50 80 80 60 75 45 C70 30 50 40 50 55 Z"
        stroke="url(#np-g)" strokeWidth="2.5" fill="none" opacity="0.5" />
      {/* Heart highlight */}
      <path d="M42 48 Q44 38 50 42" stroke="white" strokeWidth="1.5" fill="none" opacity="0.3" strokeLinecap="round" />
      {/* Graduation cap */}
      <path d="M130 35 L162 50 L130 65 L98 50 Z" fill="#2563eb" opacity="0.25" />
      <path d="M130 35 L162 50 L130 65 L98 50 Z" stroke="#2563eb" strokeWidth="2" opacity="0.45" fill="none" />
      <line x1="130" y1="65" x2="130" y2="82" stroke="#2563eb" strokeWidth="2" opacity="0.35" />
      <path d="M110 55 L110 74 Q120 82 130 82 Q140 82 150 74 L150 55" stroke="#2563eb" strokeWidth="2" opacity="0.35" fill="none" />
      {/* Tassel */}
      <line x1="162" y1="50" x2="168" y2="67" stroke="#14b8a6" strokeWidth="2.5" opacity="0.5" strokeLinecap="round" />
      <circle cx="168" cy="69" r="3" fill="#14b8a6" opacity="0.55" />
      {/* Growth chart */}
      <line x1="18" y1="122" x2="92" y2="122" stroke="#94a3b8" strokeWidth="1.5" opacity="0.3" />
      <line x1="18" y1="122" x2="18" y2="86" stroke="#94a3b8" strokeWidth="1.5" opacity="0.3" />
      {[0,1,2,3,4].map(i => (
        <rect key={i} x={26 + i * 13} y={118 - [14, 22, 18, 30, 36][i]}
          width="9" height={[14, 22, 18, 30, 36][i]} rx="3"
          fill="url(#np-g)" opacity={0.3 + i * 0.08} />
      ))}
      {/* Trend line over bars */}
      <path d="M30 104 L39 96 L52 100 L65 88 L78 82" stroke="#14b8a6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none" opacity="0.5" />
      <circle cx="78" cy="82" r="3" fill="#14b8a6" opacity="0.55" />
      {/* Hands */}
      <path d="M118 102 Q136 86 152 96 Q156 99 162 102" stroke="url(#np-g)" strokeWidth="3" strokeLinecap="round" fill="none" opacity="0.45" />
      <path d="M118 102 Q136 118 152 108 Q156 105 162 102" stroke="url(#np-g)" strokeWidth="3" strokeLinecap="round" fill="none" opacity="0.45" />
    </svg>
  );
}
