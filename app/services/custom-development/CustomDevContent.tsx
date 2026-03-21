"use client";

import { motion } from "framer-motion";
import CTABanner from "@/components/ui/CTABanner";
import Button from "@/components/ui/Button";

const ease = [0.21, 0.45, 0.27, 0.9] as const;

/* ------------------------------------------------------------------ */
/*  SVG Illustrations                                                  */
/* ------------------------------------------------------------------ */

function DiscoverySVG() {
  return (
    <svg viewBox="0 0 280 140" fill="none" className="w-full h-full">
      {/* Whiteboard */}
      <motion.rect
        x="60" y="18" width="160" height="100" rx="6"
        stroke="#2563eb" strokeWidth="1.5" fill="white"
        initial={{ pathLength: 0, opacity: 0 }}
        whileInView={{ pathLength: 1, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1, ease }}
      />
      {/* Whiteboard stand */}
      <motion.line
        x1="140" y1="118" x2="140" y2="132"
        stroke="#d2d2d7" strokeWidth="1.5"
        initial={{ pathLength: 0 }} whileInView={{ pathLength: 1 }}
        viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.3, ease }}
      />
      <motion.line
        x1="110" y1="132" x2="170" y2="132"
        stroke="#d2d2d7" strokeWidth="1.5" strokeLinecap="round"
        initial={{ pathLength: 0 }} whileInView={{ pathLength: 1 }}
        viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.4, ease }}
      />
      {/* Sticky notes on whiteboard */}
      {[
        { x: 76, y: 32, fill: "#2563eb", delay: 0.5 },
        { x: 110, y: 32, fill: "#14b8a6", delay: 0.6 },
        { x: 144, y: 32, fill: "#2563eb", delay: 0.7 },
        { x: 178, y: 32, fill: "#14b8a6", delay: 0.8 },
        { x: 76, y: 66, fill: "#14b8a6", delay: 0.9 },
        { x: 110, y: 66, fill: "#2563eb", delay: 1.0 },
        { x: 144, y: 66, fill: "#14b8a6", delay: 1.1 },
      ].map((note, i) => (
        <motion.rect
          key={i} x={note.x} y={note.y} width="28" height="24" rx="3"
          fill={note.fill} fillOpacity={0.12} stroke={note.fill} strokeWidth="0.75"
          initial={{ opacity: 0, y: note.y + 10 }}
          whileInView={{ opacity: 1, y: note.y }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: note.delay, ease }}
        />
      ))}
      {/* Lines on sticky notes */}
      {[76, 110, 144, 178].map((x, i) => (
        <motion.line
          key={`line-${i}`}
          x1={x + 5} y1={40} x2={x + 23} y2={40}
          stroke="#86868b" strokeWidth="0.75" strokeLinecap="round"
          initial={{ pathLength: 0 }} whileInView={{ pathLength: 1 }}
          viewport={{ once: true }} transition={{ duration: 0.4, delay: 0.8 + i * 0.1, ease }}
        />
      ))}
      {/* People silhouettes */}
      {[
        { cx: 44, delay: 1.2 },
        { cx: 236, delay: 1.3 },
      ].map((p, i) => (
        <motion.g key={`person-${i}`}
          initial={{ opacity: 0, y: 8 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: p.delay, ease }}
        >
          <circle cx={p.cx} cy={74} r="8" fill="#d2d2d7" />
          <path d={`M${p.cx - 12},100 Q${p.cx - 12},86 ${p.cx},86 Q${p.cx + 12},86 ${p.cx + 12},100`}
            fill="#d2d2d7" />
        </motion.g>
      ))}
      {/* Connecting arrows */}
      <motion.path
        d="M92 96 L128 96" stroke="#2563eb" strokeWidth="1" strokeLinecap="round"
        markerEnd="url(#arrowBlue)"
        initial={{ pathLength: 0 }} whileInView={{ pathLength: 1 }}
        viewport={{ once: true }} transition={{ duration: 0.5, delay: 1.4, ease }}
      />
      <motion.path
        d="M152 96 L188 96" stroke="#14b8a6" strokeWidth="1" strokeLinecap="round"
        initial={{ pathLength: 0 }} whileInView={{ pathLength: 1 }}
        viewport={{ once: true }} transition={{ duration: 0.5, delay: 1.5, ease }}
      />
      <defs>
        <marker id="arrowBlue" markerWidth="6" markerHeight="6" refX="5" refY="3" orient="auto">
          <path d="M0,0 L6,3 L0,6" fill="none" stroke="#2563eb" strokeWidth="1" />
        </marker>
      </defs>
    </svg>
  );
}

function WebAppSVG() {
  return (
    <svg viewBox="0 0 280 140" fill="none" className="w-full h-full">
      {/* Browser chrome */}
      <motion.rect
        x="40" y="12" width="200" height="120" rx="8"
        stroke="#d2d2d7" strokeWidth="1.5" fill="white"
        initial={{ pathLength: 0, opacity: 0 }}
        whileInView={{ pathLength: 1, opacity: 1 }}
        viewport={{ once: true }} transition={{ duration: 0.8, ease }}
      />
      {/* Title bar */}
      <motion.rect
        x="40" y="12" width="200" height="22" rx="8"
        fill="#f5f5f7"
        initial={{ opacity: 0 }} whileInView={{ opacity: 1 }}
        viewport={{ once: true }} transition={{ duration: 0.4, delay: 0.3, ease }}
      />
      <motion.rect x="40" y="26" width="200" height="8" fill="#f5f5f7"
        initial={{ opacity: 0 }} whileInView={{ opacity: 1 }}
        viewport={{ once: true }} transition={{ duration: 0.3, delay: 0.35, ease }}
      />
      {/* Traffic lights */}
      {[{ cx: 52, fill: "#ff5f57" }, { cx: 63, fill: "#febc2e" }, { cx: 74, fill: "#28c840" }].map((dot, i) => (
        <motion.circle key={i} cx={dot.cx} cy="23" r="3" fill={dot.fill}
          initial={{ scale: 0 }} whileInView={{ scale: 1 }}
          viewport={{ once: true }} transition={{ duration: 0.3, delay: 0.5 + i * 0.08, ease }}
        />
      ))}
      {/* URL bar */}
      <motion.rect x="88" y="18" width="100" height="10" rx="5" fill="#e5e5ea"
        initial={{ opacity: 0 }} whileInView={{ opacity: 1 }}
        viewport={{ once: true }} transition={{ duration: 0.3, delay: 0.6, ease }}
      />
      {/* Sidebar nav */}
      <motion.rect x="44" y="40" width="44" height="88" rx="4" fill="#f5f5f7"
        initial={{ opacity: 0, x: -10 }} whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.7, ease }}
      />
      {/* Sidebar items */}
      {[48, 58, 68, 78].map((y, i) => (
        <motion.rect key={`nav-${i}`} x="50" y={y} width="32" height="4" rx="2"
          fill={i === 0 ? "#2563eb" : "#d2d2d7"}
          initial={{ opacity: 0 }} whileInView={{ opacity: 1 }}
          viewport={{ once: true }} transition={{ duration: 0.3, delay: 0.8 + i * 0.07, ease }}
        />
      ))}
      {/* Main content area - responsive grid blocks */}
      {[
        { x: 96, y: 42, w: 60, h: 38, delay: 0.9 },
        { x: 164, y: 42, w: 68, h: 38, delay: 1.0 },
        { x: 96, y: 86, w: 136, h: 14, delay: 1.1 },
        { x: 96, y: 106, w: 88, h: 14, delay: 1.2 },
        { x: 192, y: 106, w: 40, h: 14, delay: 1.3 },
      ].map((block, i) => (
        <motion.rect key={`block-${i}`}
          x={block.x} y={block.y} width={block.w} height={block.h} rx="4"
          fill={i < 2 ? "#2563eb" : "#14b8a6"} fillOpacity={i < 2 ? 0.08 : 0.06}
          stroke={i < 2 ? "#2563eb" : "#14b8a6"} strokeWidth="0.75"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: block.delay, ease }}
        />
      ))}
      {/* Content lines in blocks */}
      {[
        { x: 104, y: 52, w: 44 },
        { x: 104, y: 60, w: 36 },
        { x: 172, y: 52, w: 52 },
        { x: 172, y: 60, w: 40 },
      ].map((line, i) => (
        <motion.rect key={`cline-${i}`}
          x={line.x} y={line.y} width={line.w} height="3" rx="1.5" fill="#86868b" fillOpacity={0.3}
          initial={{ pathLength: 0, opacity: 0 }}
          whileInView={{ pathLength: 1, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.3, delay: 1.1 + i * 0.08, ease }}
        />
      ))}
      {/* Cursor */}
      <motion.path d="M180 72 L180 84 L185 80 L190 82" stroke="#2563eb" strokeWidth="1.5" fill="none"
        initial={{ opacity: 0 }} whileInView={{ opacity: 1 }}
        viewport={{ once: true }} transition={{ duration: 0.4, delay: 1.5, ease }}
      />
    </svg>
  );
}

function MobileAppSVG() {
  return (
    <svg viewBox="0 0 280 140" fill="none" className="w-full h-full">
      {/* Phone frame 1 (main) */}
      <motion.rect
        x="100" y="8" width="80" height="128" rx="14"
        stroke="#1d1d1f" strokeWidth="2" fill="white"
        initial={{ pathLength: 0, opacity: 0 }}
        whileInView={{ pathLength: 1, opacity: 1 }}
        viewport={{ once: true }} transition={{ duration: 0.8, ease }}
      />
      {/* Notch */}
      <motion.rect x="124" y="12" width="32" height="6" rx="3" fill="#1d1d1f"
        initial={{ opacity: 0 }} whileInView={{ opacity: 1 }}
        viewport={{ once: true }} transition={{ duration: 0.3, delay: 0.5, ease }}
      />
      {/* Screen content */}
      <motion.rect x="108" y="24" width="64" height="28" rx="6" fill="#2563eb" fillOpacity={0.1}
        initial={{ opacity: 0, y: 4 }} whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }} transition={{ duration: 0.4, delay: 0.6, ease }}
      />
      {/* Profile circle in hero area */}
      <motion.circle cx="122" cy="34" r="6" fill="#2563eb" fillOpacity={0.2}
        initial={{ scale: 0 }} whileInView={{ scale: 1 }}
        viewport={{ once: true }} transition={{ duration: 0.3, delay: 0.7, ease }}
      />
      {/* Text lines next to profile */}
      <motion.rect x="132" y="30" width="32" height="3" rx="1.5" fill="#1d1d1f" fillOpacity={0.2}
        initial={{ opacity: 0 }} whileInView={{ opacity: 1 }}
        viewport={{ once: true }} transition={{ duration: 0.3, delay: 0.75, ease }}
      />
      <motion.rect x="132" y="37" width="24" height="3" rx="1.5" fill="#86868b" fillOpacity={0.3}
        initial={{ opacity: 0 }} whileInView={{ opacity: 1 }}
        viewport={{ once: true }} transition={{ duration: 0.3, delay: 0.8, ease }}
      />
      {/* Card rows */}
      {[58, 78, 98].map((y, i) => (
        <motion.g key={`card-${i}`}
          initial={{ opacity: 0, x: 6 }} whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }} transition={{ duration: 0.4, delay: 0.85 + i * 0.12, ease }}
        >
          <rect x="108" y={y} width="64" height="16" rx="4"
            fill={i % 2 === 0 ? "#f5f5f7" : "white"}
            stroke="#e5e5ea" strokeWidth="0.5" />
          <rect x="113" y={y + 4} width="8" height="8" rx="2"
            fill={i === 0 ? "#2563eb" : i === 1 ? "#14b8a6" : "#2563eb"} fillOpacity={0.15} />
          <rect x="125" y={y + 5} width="28" height="2.5" rx="1.25" fill="#86868b" fillOpacity={0.25} />
          <rect x="125" y={y + 9.5} width="20" height="2" rx="1" fill="#86868b" fillOpacity={0.15} />
        </motion.g>
      ))}
      {/* Bottom nav bar */}
      <motion.rect x="108" y="118" width="64" height="12" rx="0" fill="#f5f5f7"
        initial={{ opacity: 0 }} whileInView={{ opacity: 1 }}
        viewport={{ once: true }} transition={{ duration: 0.3, delay: 1.3, ease }}
      />
      {[120, 134, 148, 162].map((cx, i) => (
        <motion.circle key={`navdot-${i}`} cx={cx} cy="124" r="2.5"
          fill={i === 0 ? "#2563eb" : "#d2d2d7"}
          initial={{ scale: 0 }} whileInView={{ scale: 1 }}
          viewport={{ once: true }} transition={{ duration: 0.2, delay: 1.4 + i * 0.06, ease }}
        />
      ))}

      {/* Phone frame 2 (behind, left) */}
      <motion.rect
        x="50" y="22" width="56" height="100" rx="10"
        stroke="#d2d2d7" strokeWidth="1.5" fill="white"
        initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 0.5, x: 0 }}
        viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.2, ease }}
      />
      <motion.rect x="56" y="36" width="44" height="20" rx="4" fill="#14b8a6" fillOpacity={0.06}
        initial={{ opacity: 0 }} whileInView={{ opacity: 0.5 }}
        viewport={{ once: true }} transition={{ duration: 0.3, delay: 0.5, ease }}
      />

      {/* Phone frame 3 (behind, right) */}
      <motion.rect
        x="174" y="22" width="56" height="100" rx="10"
        stroke="#d2d2d7" strokeWidth="1.5" fill="white"
        initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 0.5, x: 0 }}
        viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.25, ease }}
      />
      <motion.rect x="180" y="36" width="44" height="20" rx="4" fill="#2563eb" fillOpacity={0.06}
        initial={{ opacity: 0 }} whileInView={{ opacity: 0.5 }}
        viewport={{ once: true }} transition={{ duration: 0.3, delay: 0.55, ease }}
      />
    </svg>
  );
}

function ApiSVG() {
  return (
    <svg viewBox="0 0 280 140" fill="none" className="w-full h-full">
      {/* Left endpoint box */}
      <motion.rect x="20" y="30" width="72" height="80" rx="8"
        stroke="#2563eb" strokeWidth="1.5" fill="white"
        initial={{ pathLength: 0, opacity: 0 }}
        whileInView={{ pathLength: 1, opacity: 1 }}
        viewport={{ once: true }} transition={{ duration: 0.7, ease }}
      />
      <motion.text x="56" y="50" textAnchor="middle" fill="#2563eb" fontSize="8" fontWeight="600"
        initial={{ opacity: 0 }} whileInView={{ opacity: 1 }}
        viewport={{ once: true }} transition={{ delay: 0.5, ease }}
      >
        CLIENT
      </motion.text>
      {/* Request lines */}
      {[60, 68, 76, 84].map((y, i) => (
        <motion.rect key={`req-${i}`} x="30" y={y} width={40 - i * 6} height="3" rx="1.5"
          fill="#2563eb" fillOpacity={0.12}
          initial={{ opacity: 0, x: -5 }} whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }} transition={{ duration: 0.3, delay: 0.6 + i * 0.08, ease }}
        />
      ))}

      {/* Center API box */}
      <motion.rect x="110" y="20" width="60" height="100" rx="10"
        stroke="#14b8a6" strokeWidth="1.5" fill="white"
        initial={{ pathLength: 0, opacity: 0 }}
        whileInView={{ pathLength: 1, opacity: 1 }}
        viewport={{ once: true }} transition={{ duration: 0.8, delay: 0.2, ease }}
      />
      <motion.text x="140" y="42" textAnchor="middle" fill="#14b8a6" fontSize="8" fontWeight="600"
        initial={{ opacity: 0 }} whileInView={{ opacity: 1 }}
        viewport={{ once: true }} transition={{ delay: 0.6, ease }}
      >
        API
      </motion.text>
      {/* Endpoint list */}
      {["GET", "POST", "PUT"].map((method, i) => (
        <motion.g key={method}
          initial={{ opacity: 0, y: 4 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.3, delay: 0.8 + i * 0.12, ease }}
        >
          <rect x="116" y={54 + i * 18} width="22" height="10" rx="3"
            fill={i === 0 ? "#22c55e" : i === 1 ? "#2563eb" : "#f59e0b"} fillOpacity={0.15} />
          <text x="127" y={61 + i * 18} textAnchor="middle"
            fill={i === 0 ? "#22c55e" : i === 1 ? "#2563eb" : "#f59e0b"} fontSize="5.5" fontWeight="600">
            {method}
          </text>
          <rect x="142" y={57 + i * 18} width="22" height="3" rx="1.5"
            fill="#86868b" fillOpacity={0.2} />
        </motion.g>
      ))}

      {/* Right endpoint box */}
      <motion.rect x="188" y="30" width="72" height="80" rx="8"
        stroke="#2563eb" strokeWidth="1.5" fill="white"
        initial={{ pathLength: 0, opacity: 0 }}
        whileInView={{ pathLength: 1, opacity: 1 }}
        viewport={{ once: true }} transition={{ duration: 0.7, delay: 0.3, ease }}
      />
      <motion.text x="224" y="50" textAnchor="middle" fill="#2563eb" fontSize="8" fontWeight="600"
        initial={{ opacity: 0 }} whileInView={{ opacity: 1 }}
        viewport={{ once: true }} transition={{ delay: 0.7, ease }}
      >
        SERVER
      </motion.text>
      {/* Database icon */}
      <motion.ellipse cx="224" cy="72" rx="16" ry="6" stroke="#d2d2d7" strokeWidth="1"
        initial={{ pathLength: 0 }} whileInView={{ pathLength: 1 }}
        viewport={{ once: true }} transition={{ duration: 0.4, delay: 0.9, ease }}
      />
      <motion.path d="M208 72 V88 Q208 94 224 94 Q240 94 240 88 V72"
        stroke="#d2d2d7" strokeWidth="1" fill="none"
        initial={{ pathLength: 0 }} whileInView={{ pathLength: 1 }}
        viewport={{ once: true }} transition={{ duration: 0.5, delay: 1.0, ease }}
      />
      <motion.ellipse cx="224" cy="80" rx="16" ry="4" stroke="#d2d2d7" strokeWidth="0.5" fill="none"
        initial={{ pathLength: 0 }} whileInView={{ pathLength: 1 }}
        viewport={{ once: true }} transition={{ duration: 0.3, delay: 1.1, ease }}
      />

      {/* Request arrow (left to center) */}
      <motion.path d="M92 55 L110 55" stroke="#2563eb" strokeWidth="1.5" strokeLinecap="round"
        markerEnd="url(#arrowBrand)"
        initial={{ pathLength: 0 }} whileInView={{ pathLength: 1 }}
        viewport={{ once: true }} transition={{ duration: 0.4, delay: 1.0, ease }}
      />
      {/* Response arrow (center to left) */}
      <motion.path d="M110 70 L92 70" stroke="#14b8a6" strokeWidth="1" strokeDasharray="3 2"
        initial={{ pathLength: 0 }} whileInView={{ pathLength: 1 }}
        viewport={{ once: true }} transition={{ duration: 0.4, delay: 1.2, ease }}
      />
      {/* Arrow center to right */}
      <motion.path d="M170 55 L188 55" stroke="#2563eb" strokeWidth="1.5" strokeLinecap="round"
        markerEnd="url(#arrowBrand)"
        initial={{ pathLength: 0 }} whileInView={{ pathLength: 1 }}
        viewport={{ once: true }} transition={{ duration: 0.4, delay: 1.1, ease }}
      />
      {/* Response right to center */}
      <motion.path d="M188 70 L170 70" stroke="#14b8a6" strokeWidth="1" strokeDasharray="3 2"
        initial={{ pathLength: 0 }} whileInView={{ pathLength: 1 }}
        viewport={{ once: true }} transition={{ duration: 0.4, delay: 1.3, ease }}
      />
      {/* JSON badges */}
      <motion.g initial={{ opacity: 0, y: 4 }} whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }} transition={{ duration: 0.3, delay: 1.4, ease }}>
        <rect x="93" y="44" width="16" height="8" rx="2" fill="#2563eb" fillOpacity={0.08} />
        <text x="101" y="50" textAnchor="middle" fill="#2563eb" fontSize="4.5" fontWeight="500">REQ</text>
      </motion.g>
      <motion.g initial={{ opacity: 0, y: 4 }} whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }} transition={{ duration: 0.3, delay: 1.5, ease }}>
        <rect x="93" y="73" width="16" height="8" rx="2" fill="#14b8a6" fillOpacity={0.08} />
        <text x="101" y="79" textAnchor="middle" fill="#14b8a6" fontSize="4.5" fontWeight="500">RES</text>
      </motion.g>
      <defs>
        <marker id="arrowBrand" markerWidth="6" markerHeight="6" refX="5" refY="3" orient="auto">
          <path d="M0,0 L6,3 L0,6" fill="none" stroke="#2563eb" strokeWidth="1" />
        </marker>
      </defs>
    </svg>
  );
}

function MaintenanceSVG() {
  return (
    <svg viewBox="0 0 280 140" fill="none" className="w-full h-full">
      {/* Git branch line */}
      <motion.path
        d="M40 70 L100 70" stroke="#d2d2d7" strokeWidth="2"
        initial={{ pathLength: 0 }} whileInView={{ pathLength: 1 }}
        viewport={{ once: true }} transition={{ duration: 0.5, ease }}
      />
      <motion.path
        d="M100 70 L140 70" stroke="#2563eb" strokeWidth="2"
        initial={{ pathLength: 0 }} whileInView={{ pathLength: 1 }}
        viewport={{ once: true }} transition={{ duration: 0.4, delay: 0.3, ease }}
      />
      <motion.path
        d="M140 70 L200 70" stroke="#2563eb" strokeWidth="2"
        initial={{ pathLength: 0 }} whileInView={{ pathLength: 1 }}
        viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.5, ease }}
      />
      <motion.path
        d="M200 70 L250 70" stroke="#14b8a6" strokeWidth="2"
        initial={{ pathLength: 0 }} whileInView={{ pathLength: 1 }}
        viewport={{ once: true }} transition={{ duration: 0.4, delay: 0.8, ease }}
      />
      {/* Feature branch */}
      <motion.path
        d="M100 70 Q110 40 140 38 Q170 36 180 50 Q185 58 200 70"
        stroke="#14b8a6" strokeWidth="1.5" fill="none" strokeDasharray="4 3"
        initial={{ pathLength: 0 }} whileInView={{ pathLength: 1 }}
        viewport={{ once: true }} transition={{ duration: 0.8, delay: 0.6, ease }}
      />
      {/* Commit dots */}
      {[
        { cx: 60, color: "#d2d2d7", delay: 0.2 },
        { cx: 100, color: "#2563eb", delay: 0.4 },
        { cx: 140, color: "#2563eb", delay: 0.6 },
        { cx: 200, color: "#2563eb", delay: 0.8 },
        { cx: 240, color: "#14b8a6", delay: 1.0 },
      ].map((dot, i) => (
        <motion.circle key={`dot-${i}`} cx={dot.cx} cy="70" r="5"
          fill={dot.color} stroke="white" strokeWidth="2"
          initial={{ scale: 0 }} whileInView={{ scale: 1 }}
          viewport={{ once: true }} transition={{ duration: 0.3, delay: dot.delay, ease }}
        />
      ))}
      {/* Feature branch dots */}
      {[
        { cx: 130, cy: 42, delay: 0.7 },
        { cx: 160, cy: 38, delay: 0.8 },
      ].map((dot, i) => (
        <motion.circle key={`feat-${i}`} cx={dot.cx} cy={dot.cy} r="4"
          fill="#14b8a6" stroke="white" strokeWidth="1.5"
          initial={{ scale: 0 }} whileInView={{ scale: 1 }}
          viewport={{ once: true }} transition={{ duration: 0.3, delay: dot.delay, ease }}
        />
      ))}
      {/* Version tags */}
      {[
        { x: 50, y: 86, label: "v1.0", delay: 0.3 },
        { x: 130, y: 86, label: "v1.1", delay: 0.7 },
        { x: 230, y: 86, label: "v2.0", delay: 1.1 },
      ].map((tag) => (
        <motion.g key={tag.label}
          initial={{ opacity: 0, y: 4 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }} transition={{ duration: 0.3, delay: tag.delay, ease }}
        >
          <rect x={tag.x} y={tag.y} width="30" height="14" rx="4"
            fill="#2563eb" fillOpacity={0.08} stroke="#2563eb" strokeWidth="0.5" />
          <text x={tag.x + 15} y={tag.y + 10} textAnchor="middle"
            fill="#2563eb" fontSize="6" fontWeight="500">{tag.label}</text>
        </motion.g>
      ))}
      {/* CI/CD Pipeline arrows */}
      <motion.path d="M200 56 L200 44 L230 44 L230 56"
        stroke="#14b8a6" strokeWidth="1" fill="none" strokeLinecap="round"
        initial={{ pathLength: 0 }} whileInView={{ pathLength: 1 }}
        viewport={{ once: true }} transition={{ duration: 0.5, delay: 1.0, ease }}
      />
      {/* Deploy icon */}
      <motion.g initial={{ opacity: 0, scale: 0.8 }} whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }} transition={{ duration: 0.4, delay: 1.2, ease }}
      >
        <rect x="204" y="28" width="22" height="14" rx="3" fill="#14b8a6" fillOpacity={0.1}
          stroke="#14b8a6" strokeWidth="0.75" />
        <text x="215" y="37" textAnchor="middle" fill="#14b8a6" fontSize="5" fontWeight="600">
          CD
        </text>
      </motion.g>
      {/* Checkmarks */}
      {[100, 140, 200].map((cx, i) => (
        <motion.path key={`check-${i}`}
          d={`M${cx - 3} 108 L${cx} 112 L${cx + 5} 104`}
          stroke="#22c55e" strokeWidth="1.5" strokeLinecap="round" fill="none"
          initial={{ pathLength: 0 }} whileInView={{ pathLength: 1 }}
          viewport={{ once: true }} transition={{ duration: 0.3, delay: 1.2 + i * 0.15, ease }}
        />
      ))}
      {/* Test labels */}
      {[100, 140, 200].map((cx, i) => (
        <motion.text key={`test-${i}`} x={cx} y="124" textAnchor="middle"
          fill="#86868b" fontSize="5" fontWeight="400"
          initial={{ opacity: 0 }} whileInView={{ opacity: 1 }}
          viewport={{ once: true }} transition={{ delay: 1.3 + i * 0.15, ease }}
        >
          {i === 0 ? "test" : i === 1 ? "build" : "deploy"}
        </motion.text>
      ))}
    </svg>
  );
}

/* ------------------------------------------------------------------ */
/*  Advantage SVG Illustrations (dark theme)                           */
/* ------------------------------------------------------------------ */

function PuzzleSVG() {
  return (
    <svg viewBox="0 0 200 100" fill="none" className="w-full h-full">
      {/* Puzzle piece 1 */}
      <motion.path
        d="M30 30 H62 V40 Q68 38 68 44 Q68 50 62 48 V60 H30 V48 Q24 50 24 44 Q24 38 30 40 Z"
        stroke="#2563eb" strokeWidth="1.5" fill="#2563eb" fillOpacity={0.08}
        initial={{ pathLength: 0, opacity: 0 }} whileInView={{ pathLength: 1, opacity: 1 }}
        viewport={{ once: true }} transition={{ duration: 0.8, ease }}
      />
      {/* Puzzle piece 2 */}
      <motion.path
        d="M68 30 H100 V40 Q106 38 106 44 Q106 50 100 48 V60 H68 V48 Q62 50 62 44 Q62 38 68 40 Z"
        stroke="#14b8a6" strokeWidth="1.5" fill="#14b8a6" fillOpacity={0.08}
        initial={{ pathLength: 0, opacity: 0, x: 10 }}
        whileInView={{ pathLength: 1, opacity: 1, x: 0 }}
        viewport={{ once: true }} transition={{ duration: 0.8, delay: 0.3, ease }}
      />
      {/* Puzzle piece 3 */}
      <motion.path
        d="M108 30 H140 V40 Q146 38 146 44 Q146 50 140 48 V60 H108 V48 Q102 50 102 44 Q102 38 108 40 Z"
        stroke="#2563eb" strokeWidth="1.5" fill="#2563eb" fillOpacity={0.06}
        initial={{ pathLength: 0, opacity: 0, x: 20 }}
        whileInView={{ pathLength: 1, opacity: 1, x: 0 }}
        viewport={{ once: true }} transition={{ duration: 0.8, delay: 0.5, ease }}
      />
      {/* Connecting sparkles */}
      {[{ cx: 65, cy: 26, delay: 0.9 }, { cx: 105, cy: 26, delay: 1.1 }].map((s, i) => (
        <motion.circle key={i} cx={s.cx} cy={s.cy} r="2" fill="#2563eb" fillOpacity={0.4}
          initial={{ scale: 0 }} whileInView={{ scale: 1 }}
          viewport={{ once: true }} transition={{ duration: 0.3, delay: s.delay, ease }}
        />
      ))}
      {/* "Custom fit" label */}
      <motion.g initial={{ opacity: 0, y: 4 }} whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }} transition={{ duration: 0.4, delay: 1.2, ease }}>
        <rect x="55" y="70" width="60" height="14" rx="4" fill="white" fillOpacity={0.06}
          stroke="white" strokeWidth="0.5" strokeOpacity={0.1} />
        <text x="85" y="80" textAnchor="middle" fill="white" fillOpacity={0.5} fontSize="6" fontWeight="500">
          perfect fit
        </text>
      </motion.g>
    </svg>
  );
}

function TechStackSVG() {
  return (
    <svg viewBox="0 0 200 100" fill="none" className="w-full h-full">
      {/* Stack layers */}
      {[
        { y: 14, label: "React / Next.js", color: "#2563eb", delay: 0 },
        { y: 34, label: "Node / API", color: "#14b8a6", delay: 0.2 },
        { y: 54, label: "Database", color: "#2563eb", delay: 0.4 },
        { y: 74, label: "Cloud", color: "#14b8a6", delay: 0.6 },
      ].map((layer) => (
        <motion.g key={layer.label}
          initial={{ opacity: 0, x: -15 }} whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }} transition={{ duration: 0.5, delay: layer.delay + 0.3, ease }}
        >
          <rect x="40" y={layer.y} width="120" height="16" rx="4"
            fill={layer.color} fillOpacity={0.08}
            stroke={layer.color} strokeWidth="0.75" strokeOpacity={0.3} />
          <text x="100" y={layer.y + 11} textAnchor="middle"
            fill="white" fillOpacity={0.6} fontSize="6" fontWeight="500">
            {layer.label}
          </text>
        </motion.g>
      ))}
      {/* Connecting arrows between layers */}
      {[28, 48, 68].map((y, i) => (
        <motion.path key={`arrow-${i}`}
          d={`M100 ${y + 2} L100 ${y + 6}`}
          stroke="white" strokeWidth="0.75" strokeOpacity={0.2}
          markerEnd="url(#arrowWhite)"
          initial={{ pathLength: 0 }} whileInView={{ pathLength: 1 }}
          viewport={{ once: true }} transition={{ duration: 0.3, delay: 0.5 + i * 0.2, ease }}
        />
      ))}
      <defs>
        <marker id="arrowWhite" markerWidth="4" markerHeight="4" refX="3" refY="2" orient="auto">
          <path d="M0,0 L4,2 L0,4" fill="none" stroke="white" strokeWidth="0.75" strokeOpacity="0.3" />
        </marker>
      </defs>
    </svg>
  );
}

function IntegrationSVG() {
  return (
    <svg viewBox="0 0 200 100" fill="none" className="w-full h-full">
      {/* Center hub */}
      <motion.circle cx="100" cy="50" r="16" stroke="#2563eb" strokeWidth="1.5"
        fill="#2563eb" fillOpacity={0.06}
        initial={{ scale: 0 }} whileInView={{ scale: 1 }}
        viewport={{ once: true }} transition={{ duration: 0.5, ease }}
      />
      <motion.text x="100" y="53" textAnchor="middle" fill="white" fillOpacity={0.6}
        fontSize="6" fontWeight="600"
        initial={{ opacity: 0 }} whileInView={{ opacity: 1 }}
        viewport={{ once: true }} transition={{ delay: 0.4, ease }}
      >
        HUB
      </motion.text>
      {/* Satellite nodes */}
      {[
        { cx: 40, cy: 30, label: "ERP", delay: 0.3 },
        { cx: 160, cy: 30, label: "CRM", delay: 0.4 },
        { cx: 40, cy: 75, label: "API", delay: 0.5 },
        { cx: 160, cy: 75, label: "DB", delay: 0.6 },
      ].map((node) => (
        <motion.g key={node.label}
          initial={{ opacity: 0, scale: 0.5 }} whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }} transition={{ duration: 0.4, delay: node.delay, ease }}
        >
          <circle cx={node.cx} cy={node.cy} r="12"
            stroke="#14b8a6" strokeWidth="1" fill="#14b8a6" fillOpacity={0.06} />
          <text x={node.cx} y={node.cy + 3} textAnchor="middle"
            fill="white" fillOpacity={0.5} fontSize="5.5" fontWeight="500">
            {node.label}
          </text>
        </motion.g>
      ))}
      {/* Connection lines */}
      {[
        { x1: 52, y1: 35, x2: 84, y2: 44, delay: 0.6 },
        { x1: 148, y1: 35, x2: 116, y2: 44, delay: 0.7 },
        { x1: 52, y1: 70, x2: 84, y2: 56, delay: 0.8 },
        { x1: 148, y1: 70, x2: 116, y2: 56, delay: 0.9 },
      ].map((line, i) => (
        <motion.line key={`line-${i}`}
          x1={line.x1} y1={line.y1} x2={line.x2} y2={line.y2}
          stroke="white" strokeWidth="0.75" strokeOpacity={0.15} strokeDasharray="3 2"
          initial={{ pathLength: 0 }} whileInView={{ pathLength: 1 }}
          viewport={{ once: true }} transition={{ duration: 0.4, delay: line.delay, ease }}
        />
      ))}
      {/* Data flow dots */}
      {[0.7, 0.9, 1.1, 1.3].map((delay, i) => (
        <motion.circle key={`flow-${i}`}
          cx={i < 2 ? 68 : 132} cy={i % 2 === 0 ? 40 : 62} r="1.5"
          fill="#14b8a6"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: [0, 1, 0] }}
          viewport={{ once: true }}
          transition={{ duration: 1.5, delay, repeat: Infinity, ease: "easeInOut" }}
        />
      ))}
    </svg>
  );
}

function AgileSVG() {
  return (
    <svg viewBox="0 0 200 100" fill="none" className="w-full h-full">
      {/* Sprint cycle arc */}
      <motion.path
        d="M60 50 Q60 20 100 20 Q140 20 140 50 Q140 80 100 80 Q60 80 60 50"
        stroke="#2563eb" strokeWidth="1.5" fill="none" strokeOpacity={0.3}
        initial={{ pathLength: 0 }} whileInView={{ pathLength: 1 }}
        viewport={{ once: true }} transition={{ duration: 1, ease }}
      />
      {/* Inner cycle */}
      <motion.path
        d="M72 50 Q72 30 100 30 Q128 30 128 50 Q128 70 100 70 Q72 70 72 50"
        stroke="#14b8a6" strokeWidth="1" fill="none" strokeOpacity={0.2}
        initial={{ pathLength: 0 }} whileInView={{ pathLength: 1 }}
        viewport={{ once: true }} transition={{ duration: 0.8, delay: 0.3, ease }}
      />
      {/* Phase nodes on cycle */}
      {[
        { cx: 100, cy: 20, label: "Plan", delay: 0.4 },
        { cx: 140, cy: 50, label: "Build", delay: 0.6 },
        { cx: 100, cy: 80, label: "Test", delay: 0.8 },
        { cx: 60, cy: 50, label: "Ship", delay: 1.0 },
      ].map((node) => (
        <motion.g key={node.label}
          initial={{ opacity: 0, scale: 0.5 }} whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }} transition={{ duration: 0.4, delay: node.delay, ease }}
        >
          <circle cx={node.cx} cy={node.cy} r="10"
            fill={node.label === "Ship" ? "#14b8a6" : "#2563eb"} fillOpacity={0.08}
            stroke={node.label === "Ship" ? "#14b8a6" : "#2563eb"} strokeWidth="1" strokeOpacity={0.3} />
          <text x={node.cx} y={node.cy + 3} textAnchor="middle"
            fill="white" fillOpacity={0.5} fontSize="5" fontWeight="500">
            {node.label}
          </text>
        </motion.g>
      ))}
      {/* Directional arrows */}
      {[
        { d: "M112 22 L126 32", delay: 0.5 },
        { d: "M138 62 L126 72", delay: 0.7 },
        { d: "M88 78 L74 68", delay: 0.9 },
        { d: "M62 38 L74 28", delay: 1.1 },
      ].map((arrow, i) => (
        <motion.path key={`arr-${i}`} d={arrow.d}
          stroke="white" strokeWidth="0.75" strokeOpacity={0.2}
          strokeLinecap="round" markerEnd="url(#arrowWhite2)"
          initial={{ pathLength: 0 }} whileInView={{ pathLength: 1 }}
          viewport={{ once: true }} transition={{ duration: 0.3, delay: arrow.delay, ease }}
        />
      ))}
      {/* Sprint number */}
      <motion.g initial={{ opacity: 0 }} whileInView={{ opacity: 1 }}
        viewport={{ once: true }} transition={{ delay: 1.2, ease }}>
        <text x="100" y="52" textAnchor="middle" fill="white" fillOpacity={0.3} fontSize="7" fontWeight="600">
          Sprint N
        </text>
      </motion.g>
      {/* Iteration dots */}
      {[155, 165, 175].map((x, i) => (
        <motion.g key={`iter-${i}`}
          initial={{ opacity: 0, y: 4 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }} transition={{ duration: 0.3, delay: 1.2 + i * 0.1, ease }}
        >
          <circle cx={x} cy={50} r="3" stroke="white" strokeWidth="0.5" strokeOpacity={0.15}
            fill="white" fillOpacity={0.03} />
          <text x={x} y={52} textAnchor="middle" fill="white" fillOpacity={0.25} fontSize="4">
            {i + 1}
          </text>
        </motion.g>
      ))}
      <defs>
        <marker id="arrowWhite2" markerWidth="4" markerHeight="4" refX="3" refY="2" orient="auto">
          <path d="M0,0 L4,2 L0,4" fill="none" stroke="white" strokeWidth="0.75" strokeOpacity="0.3" />
        </marker>
      </defs>
    </svg>
  );
}

/* ------------------------------------------------------------------ */
/*  Data                                                               */
/* ------------------------------------------------------------------ */

const processSteps = [
  {
    title: "Discovery & Requirements",
    description:
      "We immerse ourselves in your workflows, pain points, and goals through collaborative workshops to define the solution that truly fits.",
    badge: { color: "#2563eb", label: "Avg 2 weeks", sublabel: "to spec" },
    Illustration: DiscoverySVG,
  },
  {
    title: "Web Application Development",
    description:
      "Responsive, performant web applications built with modern frameworks and production-grade architecture from day one.",
    badge: { color: "#14b8a6", label: "React / Next.js", sublabel: "stack" },
    Illustration: WebAppSVG,
  },
  {
    title: "Mobile Applications",
    description:
      "Native and cross-platform mobile apps that put your business tools in your team's pocket, designed for real-world use.",
    badge: { color: "#2563eb", label: "iOS & Android", sublabel: "cross-platform" },
    Illustration: MobileAppSVG,
  },
  {
    title: "API Development & Integration",
    description:
      "Robust, documented APIs that connect your custom application to ERP, CRM, and third-party services with reliability built in.",
    badge: { color: "#14b8a6", label: "REST / GraphQL", sublabel: "protocols" },
    Illustration: ApiSVG,
  },
  {
    title: "Maintenance & Iteration",
    description:
      "Ongoing support, feature enhancements, and performance optimization to keep your application evolving with your business.",
    badge: { color: "#2563eb", label: "99.9% uptime", sublabel: "SLA target" },
    Illustration: MaintenanceSVG,
  },
];

const advantages = [
  {
    title: "Built for You",
    description:
      "Every feature designed around your specific processes -- not generic templates you have to work around.",
    gradient: "from-brand-500 to-brand-600",
    Illustration: PuzzleSVG,
  },
  {
    title: "Modern Stack",
    description:
      "Built on proven, scalable technologies that are maintainable, secure, and performant from the ground up.",
    gradient: "from-teal-500 to-teal-600",
    Illustration: TechStackSVG,
  },
  {
    title: "Seamless Integration",
    description:
      "Your custom app connects natively with your existing ERP, CRM, and every business tool in your ecosystem.",
    gradient: "from-brand-500 to-teal-500",
    Illustration: IntegrationSVG,
  },
  {
    title: "Iterative Delivery",
    description:
      "You see working software early and often -- no black boxes, no surprises at launch, just steady progress.",
    gradient: "from-teal-500 to-brand-500",
    Illustration: AgileSVG,
  },
];

/* ------------------------------------------------------------------ */
/*  Component                                                          */
/* ------------------------------------------------------------------ */

export default function CustomDevContent() {
  return (
    <>
      {/* ─── Hero ─── */}
      <section className="relative overflow-hidden pt-6 pb-10 md:pt-8 md:pb-14">
        <div className="absolute inset-0 mesh-gradient" />
        <div className="absolute inset-0 dot-pattern opacity-30" />

        <div className="container-apple relative z-10 text-center">
          <p className="text-brand-500 text-[0.8125rem] font-semibold tracking-wide uppercase mb-5">
            Custom Software
          </p>

          <h1 className="text-display text-apple-black mb-5">
            When off-the-shelf{" "}
            <span className="text-gradient">isn&apos;t enough.</span>
          </h1>

          <p className="text-[0.8125rem] text-apple-gray leading-relaxed max-w-2xl mx-auto mb-8">
            Sometimes your business needs a solution that doesn&apos;t exist
            yet. We build custom web and mobile applications designed around your
            specific processes -- not the other way around.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button href="/contact" size="lg">
              Start a Conversation
            </Button>
            <Button href="/services" variant="secondary" size="lg">
              All Services
            </Button>
          </div>
        </div>
      </section>

      {/* ─── Process ─── */}
      <section className="py-section bg-white">
        <div className="container-apple">
          {/* Section header (inline, no SectionHeading import) */}
          <div className="text-center mb-12">
            <motion.p
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, ease }}
              className="text-brand-500 text-[0.6875rem] font-semibold tracking-wide uppercase mb-3"
            >
              Our process
            </motion.p>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1, ease }}
              className="text-display-sm text-apple-black mb-3"
            >
              From idea to production.
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2, ease }}
              className="text-[0.8125rem] text-apple-gray max-w-xl mx-auto"
            >
              We build with transparency and precision -- you see progress every
              step of the way.
            </motion.p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5">
            {processSteps.map((step, index) => {
              const Illust = step.Illustration;
              return (
                <motion.div
                  key={step.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-60px" }}
                  transition={{
                    duration: 0.6,
                    delay: index * 0.1,
                    ease,
                  }}
                  className="group rounded-[22px] bg-white shadow-card hover:shadow-card-hover border border-black/[0.04] p-6 transition-all duration-500 hover:-translate-y-0.5"
                >
                  {/* Step number */}
                  <span className="text-[0.6875rem] font-bold text-brand-500 mb-3 block">
                    {String(index + 1).padStart(2, "0")}
                  </span>

                  {/* Illustration area */}
                  <div className="rounded-2xl bg-apple-gray-light/50 h-[140px] mb-4 overflow-hidden flex items-center justify-center">
                    <Illust />
                  </div>

                  {/* Metric badge */}
                  <div className="flex items-center gap-2 mb-3">
                    <span
                      className="w-[6px] h-[6px] rounded-full flex-shrink-0"
                      style={{ backgroundColor: step.badge.color }}
                    />
                    <span className="text-[0.6875rem] font-medium text-apple-black">
                      {step.badge.label}
                    </span>
                    <span className="text-[0.6875rem] text-apple-gray">
                      {step.badge.sublabel}
                    </span>
                  </div>

                  {/* Title & description */}
                  <h3 className="text-[1.0625rem] font-semibold text-apple-black mb-2 leading-snug">
                    {step.title}
                  </h3>
                  <p className="text-[0.8125rem] text-apple-gray leading-relaxed">
                    {step.description}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ─── Advantages (dark) ─── */}
      <section className="py-section bg-apple-black relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/4 w-[600px] h-[600px] bg-brand-500/5 rounded-full blur-[120px]" />
          <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-teal-500/5 rounded-full blur-[100px]" />
        </div>

        <div className="container-apple relative z-10">
          {/* Section header */}
          <div className="text-center mb-12">
            <motion.p
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, ease }}
              className="text-brand-400 text-[0.6875rem] font-semibold tracking-wide uppercase mb-3"
            >
              Why custom
            </motion.p>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1, ease }}
              className="text-display-sm text-white mb-3"
            >
              Software built around your business.
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2, ease }}
              className="text-[0.8125rem] text-apple-gray max-w-xl mx-auto"
            >
              Not the other way around. Custom development means every feature
              serves a purpose.
            </motion.p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-5 max-w-4xl mx-auto">
            {advantages.map((item, index) => {
              const Illust = item.Illustration;
              return (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-60px" }}
                  transition={{
                    duration: 0.6,
                    delay: index * 0.1,
                    ease,
                  }}
                  className="group rounded-[22px] bg-white/[0.03] border border-white/[0.06] p-6 hover:bg-white/[0.06] transition-all duration-500"
                >
                  {/* Illustration zone */}
                  <div className="rounded-2xl bg-white/[0.03] border border-white/[0.04] h-[110px] mb-5 overflow-hidden flex items-center justify-center">
                    <Illust />
                  </div>

                  {/* Gradient dot */}
                  <div
                    className={`w-[7px] h-[7px] rounded-full bg-gradient-to-r ${item.gradient} mb-4`}
                  />

                  <h3 className="text-[1.0625rem] font-semibold text-white mb-2 leading-snug">
                    {item.title}
                  </h3>
                  <p className="text-[0.8125rem] text-apple-gray leading-relaxed">
                    {item.description}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ─── CTA ─── */}
      <CTABanner
        title="Have a unique challenge? Let's build the right solution together."
        subtitle="We'll scope, design, and deliver software that fits your business perfectly."
        buttonText="Start a Conversation"
        buttonHref="/contact"
      />
    </>
  );
}
