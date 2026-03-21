"use client";

import { motion, type Variants } from "framer-motion";

const draw: Variants = {
  hidden: { pathLength: 0, opacity: 0 },
  visible: {
    pathLength: 1,
    opacity: 1,
    transition: {
      pathLength: { duration: 1, ease: "easeInOut" as const },
      opacity: { duration: 0.2 },
    },
  },
};

/** Business Central — Microsoft logo + chart marks */
export function ERPIcon({ className = "", size = 56 }: { className?: string; size?: number }) {
  return (
    <motion.svg
      width={size} height={size} viewBox="0 0 56 56" fill="none"
      className={className}
      initial="hidden" whileInView="visible" viewport={{ once: true }}
    >
      {/* Microsoft logo mark */}
      <rect x="8" y="8" width="9" height="9" rx="1" fill="#F25022" />
      <rect x="19" y="8" width="9" height="9" rx="1" fill="#7FBA00" />
      <rect x="8" y="19" width="9" height="9" rx="1" fill="#00A4EF" />
      <rect x="19" y="19" width="9" height="9" rx="1" fill="#FFB900" />
      {/* Chart lines suggesting ERP analytics */}
      <motion.path d="M34 40 L38 34 L42 37 L46 28 L50 30" stroke="#2563eb" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none" variants={draw} />
      <motion.line x1="34" y1="44" x2="50" y2="44" stroke="#d2d2d7" strokeWidth="1" variants={draw} />
      <motion.rect x="8" y="35" width="20" height="3" rx="1.5" fill="#2563eb" opacity="0.2" variants={draw} />
      <motion.rect x="8" y="42" width="14" height="3" rx="1.5" fill="#2563eb" opacity="0.12" variants={draw} />
    </motion.svg>
  );
}

/** Salesforce CRM — SF cloud + pipeline markers */
export function CRMIcon({ className = "", size = 56 }: { className?: string; size?: number }) {
  return (
    <motion.svg
      width={size} height={size} viewBox="0 0 56 56" fill="none"
      className={className}
      initial="hidden" whileInView="visible" viewport={{ once: true }}
    >
      {/* SF cloud shape scaled */}
      <motion.path
        d="M17 12c1.2-1.3 3-2.1 4.9-2.1 2.5 0 4.5 1.3 5.7 3.2 1-.5 2.2-.7 3.4-.7 4.4 0 6.4 3.5 6.4 6.7 0 3.8-3.1 6.7-6.8 6.7-.6 0-1-.1-1.5-.2-1.1 1.7-3 2.9-5.2 2.9-1 0-2-.3-2.8-.7-1.1 1.5-2.9 2.6-5 2.6-2.3 0-4.2-1.2-5.3-3-.5.1-1 .1-1.5.1-3.7 0-6.3-3-6.3-6.8 0-2.8 1.7-5.1 4.1-6.1-.2-.7-.3-1.4-.3-2.2C7 9.8 8.8 8 11.1 8c1.4 0 2.6.7 3.3 1.8.9-.8 2.1-1.2 3.3-1.2z"
        fill="#00A1E0"
        variants={draw}
      />
      {/* Pipeline bars */}
      <motion.rect x="8" y="36" width="40" height="3" rx="1.5" fill="#00A1E0" opacity="0.3" variants={draw} />
      <motion.rect x="8" y="42" width="30" height="3" rx="1.5" fill="#00A1E0" opacity="0.2" variants={draw} />
      <motion.rect x="8" y="48" width="18" height="3" rx="1.5" fill="#00A1E0" opacity="0.15" variants={draw} />
      {/* Conversion arrow */}
      <motion.path d="M42 42 L48 45 L42 48" stroke="#00A1E0" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" fill="none" variants={draw} />
    </motion.svg>
  );
}

/** Custom Development — code editor/brackets */
export function CodeIcon({ className = "", size = 56 }: { className?: string; size?: number }) {
  return (
    <motion.svg
      width={size} height={size} viewBox="0 0 56 56" fill="none"
      className={className}
      initial="hidden" whileInView="visible" viewport={{ once: true }}
    >
      <defs>
        <linearGradient id="code-g2" x1="0" y1="0" x2="56" y2="56">
          <stop offset="0%" stopColor="#2563eb" />
          <stop offset="100%" stopColor="#14b8a6" />
        </linearGradient>
      </defs>
      {/* Editor window frame */}
      <rect x="4" y="6" width="48" height="38" rx="6" stroke="#d2d2d7" strokeWidth="1.5" fill="none" />
      {/* Traffic lights */}
      <circle cx="13" cy="14" r="2" fill="#FF5F57" />
      <circle cx="20" cy="14" r="2" fill="#FEBC2E" />
      <circle cx="27" cy="14" r="2" fill="#28C840" />
      {/* Code lines */}
      <motion.rect x="12" y="22" width="20" height="2" rx="1" fill="#2563eb" opacity="0.5" variants={draw} />
      <motion.rect x="16" y="28" width="24" height="2" rx="1" fill="#14b8a6" opacity="0.4" variants={draw} />
      <motion.rect x="16" y="34" width="16" height="2" rx="1" fill="#2563eb" opacity="0.3" variants={draw} />
      {/* Cursor blink */}
      <motion.rect
        x="34" y="33" width="1.5" height="4" rx="0.5" fill="#2563eb"
        animate={{ opacity: [1, 0, 1] }}
        transition={{ duration: 1, repeat: Infinity }}
      />
      {/* Terminal output */}
      <motion.rect x="8" y="48" width="12" height="2" rx="1" fill="#14b8a6" opacity="0.5" variants={draw} />
      <motion.path d="M6 48 L10 50 L6 52" stroke="#14b8a6" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" fill="none" variants={draw} />
    </motion.svg>
  );
}

/** Integration — connected nodes network */
export function IntegrationIcon({ className = "", size = 56 }: { className?: string; size?: number }) {
  return (
    <motion.svg
      width={size} height={size} viewBox="0 0 56 56" fill="none"
      className={className}
      initial="hidden" whileInView="visible" viewport={{ once: true }}
    >
      <defs>
        <linearGradient id="int-g2" x1="0" y1="0" x2="56" y2="56">
          <stop offset="0%" stopColor="#2563eb" />
          <stop offset="100%" stopColor="#14b8a6" />
        </linearGradient>
      </defs>
      {/* Center hub */}
      <motion.circle cx="28" cy="28" r="8" fill="url(#int-g2)" variants={draw} />
      <circle cx="28" cy="28" r="4" fill="white" />
      {/* Outer nodes */}
      <motion.circle cx="10" cy="12" r="5" fill="#2563eb" opacity="0.8" variants={draw} />
      <motion.circle cx="46" cy="12" r="5" fill="#00A4EF" opacity="0.8" variants={draw} />
      <motion.circle cx="10" cy="46" r="5" fill="#14b8a6" opacity="0.8" variants={draw} />
      <motion.circle cx="46" cy="46" r="5" fill="#00A1E0" opacity="0.8" variants={draw} />
      {/* Connection lines */}
      <motion.line x1="15" y1="16" x2="22" y2="23" stroke="#2563eb" strokeWidth="1.5" opacity="0.4" variants={draw} />
      <motion.line x1="41" y1="16" x2="34" y2="23" stroke="#00A4EF" strokeWidth="1.5" opacity="0.4" variants={draw} />
      <motion.line x1="15" y1="42" x2="22" y2="33" stroke="#14b8a6" strokeWidth="1.5" opacity="0.4" variants={draw} />
      <motion.line x1="41" y1="42" x2="34" y2="33" stroke="#00A1E0" strokeWidth="1.5" opacity="0.4" variants={draw} />
      {/* Data flow dots */}
      <motion.circle cx="18" cy="19" r="1.5" fill="#2563eb"
        animate={{ cx: [15, 22], cy: [16, 23], opacity: [0.8, 0] }}
        transition={{ duration: 2, repeat: Infinity, delay: 0 }}
      />
      <motion.circle cx="38" cy="19" r="1.5" fill="#00A4EF"
        animate={{ cx: [41, 34], cy: [16, 23], opacity: [0.8, 0] }}
        transition={{ duration: 2, repeat: Infinity, delay: 0.5 }}
      />
    </motion.svg>
  );
}

/** Support — shield + pulse */
export function SupportIcon({ className = "", size = 56 }: { className?: string; size?: number }) {
  return (
    <motion.svg
      width={size} height={size} viewBox="0 0 56 56" fill="none"
      className={className}
      initial="hidden" whileInView="visible" viewport={{ once: true }}
    >
      <defs>
        <linearGradient id="sup-g2" x1="0" y1="0" x2="56" y2="56">
          <stop offset="0%" stopColor="#2563eb" />
          <stop offset="100%" stopColor="#14b8a6" />
        </linearGradient>
      </defs>
      {/* Shield shape */}
      <motion.path
        d="M28 4 L46 14 L46 30 C46 40 38 48 28 52 C18 48 10 40 10 30 L10 14 Z"
        fill="url(#sup-g2)" opacity="0.12"
        variants={draw}
      />
      <motion.path
        d="M28 4 L46 14 L46 30 C46 40 38 48 28 52 C18 48 10 40 10 30 L10 14 Z"
        stroke="url(#sup-g2)" strokeWidth="1.5" fill="none"
        variants={draw}
      />
      {/* Check inside shield */}
      <motion.path
        d="M20 28 L26 34 L38 22"
        stroke="#2563eb" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" fill="none"
        variants={draw}
      />
      {/* Pulse rings */}
      <motion.circle cx="28" cy="28" r="18" stroke="#2563eb" strokeWidth="1" fill="none"
        animate={{ r: [18, 24], opacity: [0.3, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      />
    </motion.svg>
  );
}
