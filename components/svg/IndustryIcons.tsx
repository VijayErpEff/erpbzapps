"use client";

import { motion, type Variants } from "framer-motion";

const draw: Variants = {
  hidden: { pathLength: 0, opacity: 0 },
  visible: {
    pathLength: 1,
    opacity: 1,
    transition: { pathLength: { duration: 1, ease: "easeInOut" as const }, opacity: { duration: 0.2 } },
  },
};

const fadeIn: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.5 } },
};

/** Manufacturing — factory floor with conveyor, gears, boxes */
export function ManufacturingIcon({ className = "" }: { className?: string }) {
  return (
    <motion.svg
      width="100%" height="100%" viewBox="0 0 200 140" fill="none"
      className={className}
      initial="hidden" whileInView="visible" viewport={{ once: true }}
    >
      <defs>
        <linearGradient id="mfg-g" x1="0" y1="0" x2="200" y2="140">
          <stop offset="0%" stopColor="#2563eb" />
          <stop offset="100%" stopColor="#14b8a6" />
        </linearGradient>
      </defs>
      {/* Factory building */}
      <motion.rect x="20" y="40" width="60" height="70" rx="4" fill="#2563eb" opacity="0.08" variants={fadeIn} />
      <motion.rect x="25" y="30" width="20" height="15" rx="2" fill="#2563eb" opacity="0.12" variants={fadeIn} />
      {/* Chimney smoke */}
      <motion.path d="M35 30 Q33 22 37 18 Q35 12 38 8" stroke="#2563eb" strokeWidth="1.5" opacity="0.15" fill="none" strokeLinecap="round" variants={draw} />
      {/* Windows */}
      <motion.rect x="30" y="52" width="12" height="10" rx="2" fill="#2563eb" opacity="0.15" variants={fadeIn} />
      <motion.rect x="48" y="52" width="12" height="10" rx="2" fill="#2563eb" opacity="0.15" variants={fadeIn} />
      <motion.rect x="30" y="72" width="12" height="10" rx="2" fill="#14b8a6" opacity="0.15" variants={fadeIn} />
      <motion.rect x="48" y="72" width="12" height="10" rx="2" fill="#14b8a6" opacity="0.15" variants={fadeIn} />
      {/* Conveyor belt */}
      <motion.line x1="85" y1="100" x2="180" y2="100" stroke="#2563eb" strokeWidth="2" opacity="0.2" variants={draw} />
      <motion.circle cx="90" cy="100" r="4" fill="#2563eb" opacity="0.15" variants={fadeIn} />
      <motion.circle cx="175" cy="100" r="4" fill="#2563eb" opacity="0.15" variants={fadeIn} />
      {/* Boxes on conveyor */}
      <motion.rect x="105" y="85" width="16" height="15" rx="2" fill="url(#mfg-g)" opacity="0.25" variants={fadeIn} />
      <motion.rect x="130" y="88" width="13" height="12" rx="2" fill="#14b8a6" opacity="0.2" variants={fadeIn} />
      <motion.rect x="152" y="86" width="15" height="14" rx="2" fill="#2563eb" opacity="0.2" variants={fadeIn} />
      {/* Gear */}
      <motion.circle cx="140" cy="50" r="18" stroke="#2563eb" strokeWidth="1.5" opacity="0.15" fill="none" variants={draw} />
      <motion.circle cx="140" cy="50" r="12" stroke="#14b8a6" strokeWidth="1" opacity="0.12" fill="none" variants={draw} />
      <motion.circle cx="140" cy="50" r="4" fill="url(#mfg-g)" opacity="0.2" variants={fadeIn} />
      {/* Gear teeth */}
      {[0, 45, 90, 135, 180, 225, 270, 315].map((angle) => {
        const rad = (angle * Math.PI) / 180;
        const x1 = 140 + Math.cos(rad) * 16;
        const y1 = 50 + Math.sin(rad) * 16;
        const x2 = 140 + Math.cos(rad) * 21;
        const y2 = 50 + Math.sin(rad) * 21;
        return (
          <motion.line key={angle} x1={x1} y1={y1} x2={x2} y2={y2} stroke="#2563eb" strokeWidth="2.5" strokeLinecap="round" opacity="0.12" variants={draw} />
        );
      })}
      {/* Data flow arrow */}
      <motion.path d="M80 60 L100 60 L96 56 M100 60 L96 64" stroke="url(#mfg-g)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" fill="none" opacity="0.3" variants={draw} />
    </motion.svg>
  );
}

/** Professional Services — calendar, clock, billing */
export function ProfServicesIcon({ className = "" }: { className?: string }) {
  return (
    <motion.svg
      width="100%" height="100%" viewBox="0 0 200 140" fill="none"
      className={className}
      initial="hidden" whileInView="visible" viewport={{ once: true }}
    >
      <defs>
        <linearGradient id="ps-g" x1="0" y1="0" x2="200" y2="140">
          <stop offset="0%" stopColor="#14b8a6" />
          <stop offset="100%" stopColor="#2563eb" />
        </linearGradient>
      </defs>
      {/* Timesheet / Calendar */}
      <motion.rect x="15" y="25" width="70" height="85" rx="6" fill="#14b8a6" opacity="0.06" variants={fadeIn} />
      <motion.rect x="15" y="25" width="70" height="20" rx="6" fill="#14b8a6" opacity="0.12" variants={fadeIn} />
      {/* Calendar dots */}
      {[0,1,2,3,4].map(r => [0,1,2,3].map(c => (
        <motion.circle key={`${r}-${c}`} cx={30 + c * 15} cy={58 + r * 12} r={r === 1 && c === 2 ? 4 : 2.5}
          fill={r === 1 && c === 2 ? "#14b8a6" : "#14b8a6"} opacity={r === 1 && c === 2 ? 0.4 : 0.1} variants={fadeIn} />
      )))}
      {/* Clock */}
      <motion.circle cx="140" cy="45" r="25" stroke="url(#ps-g)" strokeWidth="2" opacity="0.15" fill="none" variants={draw} />
      <motion.circle cx="140" cy="45" r="22" fill="#2563eb" opacity="0.04" variants={fadeIn} />
      <motion.line x1="140" y1="45" x2="140" y2="30" stroke="#2563eb" strokeWidth="2" strokeLinecap="round" opacity="0.3" variants={draw} />
      <motion.line x1="140" y1="45" x2="152" y2="50" stroke="#14b8a6" strokeWidth="1.5" strokeLinecap="round" opacity="0.25" variants={draw} />
      <motion.circle cx="140" cy="45" r="2.5" fill="url(#ps-g)" opacity="0.35" variants={fadeIn} />
      {/* Invoice / document */}
      <motion.rect x="110" y="80" width="55" height="40" rx="4" fill="#2563eb" opacity="0.07" variants={fadeIn} />
      <motion.rect x="118" y="88" width="24" height="2.5" rx="1" fill="#2563eb" opacity="0.15" variants={fadeIn} />
      <motion.rect x="118" y="95" width="18" height="2.5" rx="1" fill="#14b8a6" opacity="0.12" variants={fadeIn} />
      <motion.rect x="118" y="102" width="30" height="2.5" rx="1" fill="#2563eb" opacity="0.1" variants={fadeIn} />
      {/* Dollar sign */}
      <motion.text x="152" y="99" fontSize="12" fontWeight="700" fill="#14b8a6" opacity="0.25" fontFamily="Inter, sans-serif" variants={fadeIn}>$</motion.text>
    </motion.svg>
  );
}

/** Retail & E-Commerce — storefront, shopping cart, mobile */
export function RetailIcon({ className = "" }: { className?: string }) {
  return (
    <motion.svg
      width="100%" height="100%" viewBox="0 0 200 140" fill="none"
      className={className}
      initial="hidden" whileInView="visible" viewport={{ once: true }}
    >
      <defs>
        <linearGradient id="ret-g" x1="0" y1="0" x2="200" y2="140">
          <stop offset="0%" stopColor="#2563eb" />
          <stop offset="100%" stopColor="#14b8a6" />
        </linearGradient>
      </defs>
      {/* Storefront */}
      <motion.rect x="20" y="45" width="75" height="65" rx="4" fill="#2563eb" opacity="0.06" variants={fadeIn} />
      <motion.path d="M20 50 L57 25 L95 50" stroke="#2563eb" strokeWidth="2" opacity="0.12" fill="none" strokeLinejoin="round" variants={draw} />
      {/* Awning */}
      <motion.path d="M18 50 Q32 42 45 50 Q58 42 72 50 Q85 42 97 50" stroke="url(#ret-g)" strokeWidth="2" opacity="0.2" fill="none" variants={draw} />
      {/* Store window */}
      <motion.rect x="30" y="60" width="22" height="25" rx="2" fill="#2563eb" opacity="0.1" variants={fadeIn} />
      <motion.rect x="58" y="60" width="22" height="25" rx="2" fill="#14b8a6" opacity="0.1" variants={fadeIn} />
      {/* Door */}
      <motion.rect x="44" y="90" width="14" height="20" rx="2" fill="url(#ret-g)" opacity="0.12" variants={fadeIn} />
      {/* Shopping cart */}
      <motion.path d="M120 65 L128 65 L140 95 L165 95" stroke="url(#ret-g)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" fill="none" variants={draw} />
      <motion.circle cx="145" cy="102" r="4" stroke="url(#ret-g)" strokeWidth="2" fill="none" variants={draw} />
      <motion.circle cx="162" cy="102" r="4" stroke="url(#ret-g)" strokeWidth="2" fill="none" variants={draw} />
      {/* Items in cart */}
      <motion.rect x="132" y="78" width="10" height="12" rx="2" fill="#2563eb" opacity="0.15" variants={fadeIn} />
      <motion.rect x="145" y="80" width="8" height="10" rx="2" fill="#14b8a6" opacity="0.12" variants={fadeIn} />
      {/* Mobile phone */}
      <motion.rect x="155" y="30" width="28" height="48" rx="5" stroke="#2563eb" strokeWidth="1.5" opacity="0.15" fill="none" variants={draw} />
      <motion.rect x="159" y="40" width="20" height="25" rx="2" fill="#2563eb" opacity="0.06" variants={fadeIn} />
      <motion.circle cx="169" cy="72" r="2" fill="#2563eb" opacity="0.12" variants={fadeIn} />
      {/* Cart icon on phone */}
      <motion.path d="M163 48 L165 48 L168 56 L175 56" stroke="#14b8a6" strokeWidth="1" strokeLinecap="round" opacity="0.2" fill="none" variants={draw} />
    </motion.svg>
  );
}

/** Wholesale & Trade — supply chain, boxes, shipping */
export function WholesaleIcon({ className = "" }: { className?: string }) {
  return (
    <motion.svg
      width="100%" height="100%" viewBox="0 0 200 140" fill="none"
      className={className}
      initial="hidden" whileInView="visible" viewport={{ once: true }}
    >
      <defs>
        <linearGradient id="ws-g" x1="0" y1="0" x2="200" y2="140">
          <stop offset="0%" stopColor="#14b8a6" />
          <stop offset="100%" stopColor="#2563eb" />
        </linearGradient>
      </defs>
      {/* Warehouse */}
      <motion.rect x="15" y="50" width="65" height="55" rx="3" fill="#14b8a6" opacity="0.06" variants={fadeIn} />
      <motion.path d="M12 55 L47 30 L82 55" stroke="#14b8a6" strokeWidth="2" opacity="0.15" fill="none" strokeLinejoin="round" variants={draw} />
      {/* Warehouse shelves */}
      <motion.line x1="22" y1="70" x2="72" y2="70" stroke="#14b8a6" strokeWidth="1" opacity="0.1" variants={draw} />
      <motion.line x1="22" y1="85" x2="72" y2="85" stroke="#14b8a6" strokeWidth="1" opacity="0.1" variants={draw} />
      {/* Boxes on shelves */}
      <motion.rect x="25" y="60" width="10" height="10" rx="1.5" fill="url(#ws-g)" opacity="0.15" variants={fadeIn} />
      <motion.rect x="38" y="62" width="8" height="8" rx="1.5" fill="#14b8a6" opacity="0.12" variants={fadeIn} />
      <motion.rect x="52" y="59" width="12" height="11" rx="1.5" fill="#2563eb" opacity="0.12" variants={fadeIn} />
      <motion.rect x="28" y="75" width="14" height="10" rx="1.5" fill="#2563eb" opacity="0.1" variants={fadeIn} />
      <motion.rect x="48" y="76" width="10" height="9" rx="1.5" fill="url(#ws-g)" opacity="0.12" variants={fadeIn} />
      {/* Arrow flow — supply chain */}
      <motion.path d="M85 75 L110 75" stroke="url(#ws-g)" strokeWidth="2" strokeLinecap="round" opacity="0.25" variants={draw} />
      <motion.path d="M106 71 L112 75 L106 79" stroke="url(#ws-g)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none" opacity="0.25" variants={draw} />
      {/* Delivery truck */}
      <motion.rect x="118" y="62" width="45" height="30" rx="4" fill="#2563eb" opacity="0.08" variants={fadeIn} />
      <motion.rect x="163" y="72" width="20" height="20" rx="3" fill="#2563eb" opacity="0.06" variants={fadeIn} />
      {/* Truck windows */}
      <motion.rect x="166" y="75" width="14" height="10" rx="2" fill="#2563eb" opacity="0.1" variants={fadeIn} />
      {/* Wheels */}
      <motion.circle cx="135" cy="95" r="5" stroke="url(#ws-g)" strokeWidth="2" fill="none" opacity="0.2" variants={draw} />
      <motion.circle cx="170" cy="95" r="5" stroke="url(#ws-g)" strokeWidth="2" fill="none" opacity="0.2" variants={draw} />
      {/* Package tracking dots */}
      {[0,1,2,3].map(i => (
        <motion.circle key={i} cx={120 + i * 12} cy={115} r="2" fill="url(#ws-g)" opacity={0.1 + i * 0.06}
          variants={fadeIn} />
      ))}
      <motion.path d="M120 115 L156 115" stroke="url(#ws-g)" strokeWidth="1" strokeDasharray="3 3" opacity="0.12" variants={draw} />
    </motion.svg>
  );
}

/** Healthcare — shield with cross, heartbeat, clipboard */
export function HealthcareIcon({ className = "" }: { className?: string }) {
  return (
    <motion.svg
      width="100%" height="100%" viewBox="0 0 200 140" fill="none"
      className={className}
      initial="hidden" whileInView="visible" viewport={{ once: true }}
    >
      <defs>
        <linearGradient id="hc-g" x1="0" y1="0" x2="200" y2="140">
          <stop offset="0%" stopColor="#2563eb" />
          <stop offset="100%" stopColor="#14b8a6" />
        </linearGradient>
      </defs>
      {/* Shield */}
      <motion.path
        d="M70 20 L110 10 L150 20 L150 65 C150 90 115 110 110 112 C105 110 70 90 70 65 Z"
        fill="#2563eb" opacity="0.05" variants={fadeIn}
      />
      <motion.path
        d="M70 20 L110 10 L150 20 L150 65 C150 90 115 110 110 112 C105 110 70 90 70 65 Z"
        stroke="url(#hc-g)" strokeWidth="1.5" fill="none" opacity="0.15" variants={draw}
      />
      {/* Cross inside shield */}
      <motion.rect x="104" y="35" width="12" height="35" rx="3" fill="url(#hc-g)" opacity="0.2" variants={fadeIn} />
      <motion.rect x="96" y="46" width="28" height="12" rx="3" fill="url(#hc-g)" opacity="0.2" variants={fadeIn} />
      {/* Heartbeat line */}
      <motion.path
        d="M15 95 L45 95 L55 80 L65 110 L75 85 L85 95 L110 95"
        stroke="url(#hc-g)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none" opacity="0.25"
        variants={draw}
      />
      {/* Clipboard */}
      <motion.rect x="145" y="60" width="40" height="55" rx="4" fill="#14b8a6" opacity="0.06" variants={fadeIn} />
      <motion.rect x="155" y="56" width="20" height="10" rx="3" fill="#14b8a6" opacity="0.12" variants={fadeIn} />
      {/* Clipboard lines */}
      <motion.rect x="152" y="76" width="22" height="2" rx="1" fill="#14b8a6" opacity="0.12" variants={fadeIn} />
      <motion.rect x="152" y="84" width="16" height="2" rx="1" fill="#2563eb" opacity="0.1" variants={fadeIn} />
      <motion.rect x="152" y="92" width="26" height="2" rx="1" fill="#14b8a6" opacity="0.08" variants={fadeIn} />
      <motion.rect x="152" y="100" width="18" height="2" rx="1" fill="#2563eb" opacity="0.08" variants={fadeIn} />
      {/* Check marks */}
      <motion.path d="M150 77 L151 78 L153 75" stroke="#14b8a6" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" opacity="0.2" variants={draw} />
      <motion.path d="M150 85 L151 86 L153 83" stroke="#14b8a6" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" opacity="0.2" variants={draw} />
    </motion.svg>
  );
}

/** Nonprofits & Education — heart, graduation cap, growth */
export function NonprofitIcon({ className = "" }: { className?: string }) {
  return (
    <motion.svg
      width="100%" height="100%" viewBox="0 0 200 140" fill="none"
      className={className}
      initial="hidden" whileInView="visible" viewport={{ once: true }}
    >
      <defs>
        <linearGradient id="np-g" x1="0" y1="0" x2="200" y2="140">
          <stop offset="0%" stopColor="#14b8a6" />
          <stop offset="100%" stopColor="#2563eb" />
        </linearGradient>
      </defs>
      {/* Heart */}
      <motion.path
        d="M50 55 C50 40 30 30 25 45 C20 60 50 80 50 80 C50 80 80 60 75 45 C70 30 50 40 50 55 Z"
        fill="url(#np-g)" opacity="0.12" variants={fadeIn}
      />
      <motion.path
        d="M50 55 C50 40 30 30 25 45 C20 60 50 80 50 80 C50 80 80 60 75 45 C70 30 50 40 50 55 Z"
        stroke="url(#np-g)" strokeWidth="1.5" fill="none" opacity="0.2" variants={draw}
      />
      {/* Graduation cap */}
      <motion.path d="M130 35 L160 50 L130 65 L100 50 Z" fill="#2563eb" opacity="0.1" variants={fadeIn} />
      <motion.path d="M130 35 L160 50 L130 65 L100 50 Z" stroke="#2563eb" strokeWidth="1.5" opacity="0.15" fill="none" variants={draw} />
      <motion.line x1="130" y1="65" x2="130" y2="80" stroke="#2563eb" strokeWidth="1.5" opacity="0.12" variants={draw} />
      <motion.path d="M112 55 L112 72 Q121 80 130 80 Q139 80 148 72 L148 55" stroke="#2563eb" strokeWidth="1.5" opacity="0.12" fill="none" variants={draw} />
      {/* Tassel */}
      <motion.line x1="160" y1="50" x2="165" y2="65" stroke="#14b8a6" strokeWidth="1.5" opacity="0.2" strokeLinecap="round" variants={draw} />
      <motion.circle cx="165" cy="67" r="2" fill="#14b8a6" opacity="0.2" variants={fadeIn} />
      {/* Growth chart — donations/impact */}
      <motion.line x1="20" y1="120" x2="90" y2="120" stroke="#14b8a6" strokeWidth="1" opacity="0.1" variants={draw} />
      <motion.line x1="20" y1="120" x2="20" y2="90" stroke="#14b8a6" strokeWidth="1" opacity="0.1" variants={draw} />
      {[0,1,2,3,4].map(i => (
        <motion.rect key={i} x={28 + i * 12} y={115 - [12, 18, 15, 25, 30][i]}
          width="8" height={[12, 18, 15, 25, 30][i]} rx="2"
          fill="url(#np-g)" opacity={0.1 + i * 0.03} variants={fadeIn} />
      ))}
      {/* Hands holding */}
      <motion.path d="M120 100 Q135 85 150 95 Q155 98 160 100" stroke="url(#np-g)" strokeWidth="2" strokeLinecap="round" fill="none" opacity="0.18" variants={draw} />
      <motion.path d="M120 100 Q135 115 150 105 Q155 102 160 100" stroke="url(#np-g)" strokeWidth="2" strokeLinecap="round" fill="none" opacity="0.18" variants={draw} />
    </motion.svg>
  );
}
