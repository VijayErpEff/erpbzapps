"use client";

import FadeIn, { FadeInStagger, FadeInChild } from "@/components/ui/FadeIn";
import CTABanner from "@/components/ui/CTABanner";
import Button from "@/components/ui/Button";

/* ------------------------------------------------------------------ */
/*  SVG Illustrations                                                  */
/* ------------------------------------------------------------------ */

function DiscoverySVG() {
  return (
    <svg viewBox="0 0 280 140" fill="none" className="w-full h-full">
      {/* Whiteboard */}
      <rect
        x="60" y="18" width="160" height="100" rx="6"
        stroke="#2563eb" strokeWidth="1.5" fill="white"
      />
      {/* Whiteboard stand */}
      <line
        x1="140" y1="118" x2="140" y2="132"
        stroke="#d2d2d7" strokeWidth="1.5"
      />
      <line
        x1="110" y1="132" x2="170" y2="132"
        stroke="#d2d2d7" strokeWidth="1.5" strokeLinecap="round"
      />
      {/* Sticky notes on whiteboard */}
      {[
        { x: 76, y: 32, fill: "#2563eb" },
        { x: 110, y: 32, fill: "#14b8a6" },
        { x: 144, y: 32, fill: "#2563eb" },
        { x: 178, y: 32, fill: "#14b8a6" },
        { x: 76, y: 66, fill: "#14b8a6" },
        { x: 110, y: 66, fill: "#2563eb" },
        { x: 144, y: 66, fill: "#14b8a6" },
      ].map((note, i) => (
        <rect
          key={i} x={note.x} y={note.y} width="28" height="24" rx="3"
          fill={note.fill} fillOpacity={0.12} stroke={note.fill} strokeWidth="0.75"
        />
      ))}
      {/* Lines on sticky notes */}
      {[76, 110, 144, 178].map((x, i) => (
        <line
          key={`line-${i}`}
          x1={x + 5} y1={40} x2={x + 23} y2={40}
          stroke="#86868b" strokeWidth="0.75" strokeLinecap="round"
        />
      ))}
      {/* People silhouettes */}
      {[
        { cx: 44 },
        { cx: 236 },
      ].map((p, i) => (
        <g key={`person-${i}`}>
          <circle cx={p.cx} cy={74} r="8" fill="#d2d2d7" />
          <path d={`M${p.cx - 12},100 Q${p.cx - 12},86 ${p.cx},86 Q${p.cx + 12},86 ${p.cx + 12},100`}
            fill="#d2d2d7" />
        </g>
      ))}
      {/* Connecting arrows */}
      <path
        d="M92 96 L128 96" stroke="#2563eb" strokeWidth="1" strokeLinecap="round"
        markerEnd="url(#arrowBlue)"
      />
      <path
        d="M152 96 L188 96" stroke="#14b8a6" strokeWidth="1" strokeLinecap="round"
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
      <rect
        x="40" y="12" width="200" height="120" rx="8"
        stroke="#d2d2d7" strokeWidth="1.5" fill="white"
      />
      {/* Title bar */}
      <rect
        x="40" y="12" width="200" height="22" rx="8"
        fill="#f5f5f7"
      />
      <rect x="40" y="26" width="200" height="8" fill="#f5f5f7" />
      {/* Traffic lights */}
      {[{ cx: 52, fill: "#ff5f57" }, { cx: 63, fill: "#febc2e" }, { cx: 74, fill: "#28c840" }].map((dot, i) => (
        <circle key={i} cx={dot.cx} cy="23" r="3" fill={dot.fill} />
      ))}
      {/* URL bar */}
      <rect x="88" y="18" width="100" height="10" rx="5" fill="#e5e5ea" />
      {/* Sidebar nav */}
      <rect x="44" y="40" width="44" height="88" rx="4" fill="#f5f5f7" />
      {/* Sidebar items */}
      {[48, 58, 68, 78].map((y, i) => (
        <rect key={`nav-${i}`} x="50" y={y} width="32" height="4" rx="2"
          fill={i === 0 ? "#2563eb" : "#d2d2d7"}
        />
      ))}
      {/* Main content area - responsive grid blocks */}
      {[
        { x: 96, y: 42, w: 60, h: 38 },
        { x: 164, y: 42, w: 68, h: 38 },
        { x: 96, y: 86, w: 136, h: 14 },
        { x: 96, y: 106, w: 88, h: 14 },
        { x: 192, y: 106, w: 40, h: 14 },
      ].map((block, i) => (
        <rect key={`block-${i}`}
          x={block.x} y={block.y} width={block.w} height={block.h} rx="4"
          fill={i < 2 ? "#2563eb" : "#14b8a6"} fillOpacity={i < 2 ? 0.08 : 0.06}
          stroke={i < 2 ? "#2563eb" : "#14b8a6"} strokeWidth="0.75"
        />
      ))}
      {/* Content lines in blocks */}
      {[
        { x: 104, y: 52, w: 44 },
        { x: 104, y: 60, w: 36 },
        { x: 172, y: 52, w: 52 },
        { x: 172, y: 60, w: 40 },
      ].map((line, i) => (
        <rect key={`cline-${i}`}
          x={line.x} y={line.y} width={line.w} height="3" rx="1.5" fill="#86868b" fillOpacity={0.3}
        />
      ))}
      {/* Cursor */}
      <path d="M180 72 L180 84 L185 80 L190 82" stroke="#2563eb" strokeWidth="1.5" fill="none" />
    </svg>
  );
}

function MobileAppSVG() {
  return (
    <svg viewBox="0 0 280 140" fill="none" className="w-full h-full">
      {/* Phone frame 1 (main) */}
      <rect
        x="100" y="8" width="80" height="128" rx="14"
        stroke="#1d1d1f" strokeWidth="2" fill="white"
      />
      {/* Notch */}
      <rect x="124" y="12" width="32" height="6" rx="3" fill="#1d1d1f" />
      {/* Screen content */}
      <rect x="108" y="24" width="64" height="28" rx="6" fill="#2563eb" fillOpacity={0.1} />
      {/* Profile circle in hero area */}
      <circle cx="122" cy="34" r="6" fill="#2563eb" fillOpacity={0.2} />
      {/* Text lines next to profile */}
      <rect x="132" y="30" width="32" height="3" rx="1.5" fill="#1d1d1f" fillOpacity={0.2} />
      <rect x="132" y="37" width="24" height="3" rx="1.5" fill="#86868b" fillOpacity={0.3} />
      {/* Card rows */}
      {[58, 78, 98].map((y, i) => (
        <g key={`card-${i}`}>
          <rect x="108" y={y} width="64" height="16" rx="4"
            fill={i % 2 === 0 ? "#f5f5f7" : "white"}
            stroke="#e5e5ea" strokeWidth="0.5" />
          <rect x="113" y={y + 4} width="8" height="8" rx="2"
            fill={i === 0 ? "#2563eb" : i === 1 ? "#14b8a6" : "#2563eb"} fillOpacity={0.15} />
          <rect x="125" y={y + 5} width="28" height="2.5" rx="1.25" fill="#86868b" fillOpacity={0.25} />
          <rect x="125" y={y + 9.5} width="20" height="2" rx="1" fill="#86868b" fillOpacity={0.15} />
        </g>
      ))}
      {/* Bottom nav bar */}
      <rect x="108" y="118" width="64" height="12" rx="0" fill="#f5f5f7" />
      {[120, 134, 148, 162].map((cx, i) => (
        <circle key={`navdot-${i}`} cx={cx} cy="124" r="2.5"
          fill={i === 0 ? "#2563eb" : "#d2d2d7"}
        />
      ))}

      {/* Phone frame 2 (behind, left) */}
      <rect
        x="50" y="22" width="56" height="100" rx="10"
        stroke="#d2d2d7" strokeWidth="1.5" fill="white" opacity="0.5"
      />
      <rect x="56" y="36" width="44" height="20" rx="4" fill="#14b8a6" fillOpacity={0.06} opacity="0.5" />

      {/* Phone frame 3 (behind, right) */}
      <rect
        x="174" y="22" width="56" height="100" rx="10"
        stroke="#d2d2d7" strokeWidth="1.5" fill="white" opacity="0.5"
      />
      <rect x="180" y="36" width="44" height="20" rx="4" fill="#2563eb" fillOpacity={0.06} opacity="0.5" />
    </svg>
  );
}

function ApiSVG() {
  return (
    <svg viewBox="0 0 280 140" fill="none" className="w-full h-full">
      {/* Left endpoint box */}
      <rect x="20" y="30" width="72" height="80" rx="8"
        stroke="#2563eb" strokeWidth="1.5" fill="white"
      />
      <text x="56" y="50" textAnchor="middle" fill="#2563eb" fontSize="8" fontWeight="600">
        CLIENT
      </text>
      {/* Request lines */}
      {[60, 68, 76, 84].map((y, i) => (
        <rect key={`req-${i}`} x="30" y={y} width={40 - i * 6} height="3" rx="1.5"
          fill="#2563eb" fillOpacity={0.12}
        />
      ))}

      {/* Center API box */}
      <rect x="110" y="20" width="60" height="100" rx="10"
        stroke="#14b8a6" strokeWidth="1.5" fill="white"
      />
      <text x="140" y="42" textAnchor="middle" fill="#14b8a6" fontSize="8" fontWeight="600">
        API
      </text>
      {/* Endpoint list */}
      {["GET", "POST", "PUT"].map((method, i) => (
        <g key={method}>
          <rect x="116" y={54 + i * 18} width="22" height="10" rx="3"
            fill={i === 0 ? "#22c55e" : i === 1 ? "#2563eb" : "#f59e0b"} fillOpacity={0.15} />
          <text x="127" y={61 + i * 18} textAnchor="middle"
            fill={i === 0 ? "#22c55e" : i === 1 ? "#2563eb" : "#f59e0b"} fontSize="5.5" fontWeight="600">
            {method}
          </text>
          <rect x="142" y={57 + i * 18} width="22" height="3" rx="1.5"
            fill="#86868b" fillOpacity={0.2} />
        </g>
      ))}

      {/* Right endpoint box */}
      <rect x="188" y="30" width="72" height="80" rx="8"
        stroke="#2563eb" strokeWidth="1.5" fill="white"
      />
      <text x="224" y="50" textAnchor="middle" fill="#2563eb" fontSize="8" fontWeight="600">
        SERVER
      </text>
      {/* Database icon */}
      <ellipse cx="224" cy="72" rx="16" ry="6" stroke="#d2d2d7" strokeWidth="1" />
      <path d="M208 72 V88 Q208 94 224 94 Q240 94 240 88 V72"
        stroke="#d2d2d7" strokeWidth="1" fill="none"
      />
      <ellipse cx="224" cy="80" rx="16" ry="4" stroke="#d2d2d7" strokeWidth="0.5" fill="none" />

      {/* Request arrow (left to center) */}
      <path d="M92 55 L110 55" stroke="#2563eb" strokeWidth="1.5" strokeLinecap="round"
        markerEnd="url(#arrowBrand)"
      />
      {/* Response arrow (center to left) */}
      <path d="M110 70 L92 70" stroke="#14b8a6" strokeWidth="1" strokeDasharray="3 2" />
      {/* Arrow center to right */}
      <path d="M170 55 L188 55" stroke="#2563eb" strokeWidth="1.5" strokeLinecap="round"
        markerEnd="url(#arrowBrand)"
      />
      {/* Response right to center */}
      <path d="M188 70 L170 70" stroke="#14b8a6" strokeWidth="1" strokeDasharray="3 2" />
      {/* JSON badges */}
      <g>
        <rect x="93" y="44" width="16" height="8" rx="2" fill="#2563eb" fillOpacity={0.08} />
        <text x="101" y="50" textAnchor="middle" fill="#2563eb" fontSize="4.5" fontWeight="500">REQ</text>
      </g>
      <g>
        <rect x="93" y="73" width="16" height="8" rx="2" fill="#14b8a6" fillOpacity={0.08} />
        <text x="101" y="79" textAnchor="middle" fill="#14b8a6" fontSize="4.5" fontWeight="500">RES</text>
      </g>
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
      <path d="M40 70 L100 70" stroke="#d2d2d7" strokeWidth="2" />
      <path d="M100 70 L140 70" stroke="#2563eb" strokeWidth="2" />
      <path d="M140 70 L200 70" stroke="#2563eb" strokeWidth="2" />
      <path d="M200 70 L250 70" stroke="#14b8a6" strokeWidth="2" />
      {/* Feature branch */}
      <path
        d="M100 70 Q110 40 140 38 Q170 36 180 50 Q185 58 200 70"
        stroke="#14b8a6" strokeWidth="1.5" fill="none" strokeDasharray="4 3"
      />
      {/* Commit dots */}
      {[
        { cx: 60, color: "#d2d2d7" },
        { cx: 100, color: "#2563eb" },
        { cx: 140, color: "#2563eb" },
        { cx: 200, color: "#2563eb" },
        { cx: 240, color: "#14b8a6" },
      ].map((dot, i) => (
        <circle key={`dot-${i}`} cx={dot.cx} cy="70" r="5"
          fill={dot.color} stroke="white" strokeWidth="2"
        />
      ))}
      {/* Feature branch dots */}
      {[
        { cx: 130, cy: 42 },
        { cx: 160, cy: 38 },
      ].map((dot, i) => (
        <circle key={`feat-${i}`} cx={dot.cx} cy={dot.cy} r="4"
          fill="#14b8a6" stroke="white" strokeWidth="1.5"
        />
      ))}
      {/* Version tags */}
      {[
        { x: 50, y: 86, label: "v1.0" },
        { x: 130, y: 86, label: "v1.1" },
        { x: 230, y: 86, label: "v2.0" },
      ].map((tag) => (
        <g key={tag.label}>
          <rect x={tag.x} y={tag.y} width="30" height="14" rx="4"
            fill="#2563eb" fillOpacity={0.08} stroke="#2563eb" strokeWidth="0.5" />
          <text x={tag.x + 15} y={tag.y + 10} textAnchor="middle"
            fill="#2563eb" fontSize="6" fontWeight="500">{tag.label}</text>
        </g>
      ))}
      {/* CI/CD Pipeline arrows */}
      <path d="M200 56 L200 44 L230 44 L230 56"
        stroke="#14b8a6" strokeWidth="1" fill="none" strokeLinecap="round"
      />
      {/* Deploy icon */}
      <g>
        <rect x="204" y="28" width="22" height="14" rx="3" fill="#14b8a6" fillOpacity={0.1}
          stroke="#14b8a6" strokeWidth="0.75" />
        <text x="215" y="37" textAnchor="middle" fill="#14b8a6" fontSize="5" fontWeight="600">
          CD
        </text>
      </g>
      {/* Checkmarks */}
      {[100, 140, 200].map((cx, i) => (
        <path key={`check-${i}`}
          d={`M${cx - 3} 108 L${cx} 112 L${cx + 5} 104`}
          stroke="#22c55e" strokeWidth="1.5" strokeLinecap="round" fill="none"
        />
      ))}
      {/* Test labels */}
      {[100, 140, 200].map((cx, i) => (
        <text key={`test-${i}`} x={cx} y="124" textAnchor="middle"
          fill="#86868b" fontSize="5" fontWeight="400">
          {i === 0 ? "test" : i === 1 ? "build" : "deploy"}
        </text>
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
      <path
        d="M30 30 H62 V40 Q68 38 68 44 Q68 50 62 48 V60 H30 V48 Q24 50 24 44 Q24 38 30 40 Z"
        stroke="#2563eb" strokeWidth="1.5" fill="#2563eb" fillOpacity={0.08}
      />
      {/* Puzzle piece 2 */}
      <path
        d="M68 30 H100 V40 Q106 38 106 44 Q106 50 100 48 V60 H68 V48 Q62 50 62 44 Q62 38 68 40 Z"
        stroke="#14b8a6" strokeWidth="1.5" fill="#14b8a6" fillOpacity={0.08}
      />
      {/* Puzzle piece 3 */}
      <path
        d="M108 30 H140 V40 Q146 38 146 44 Q146 50 140 48 V60 H108 V48 Q102 50 102 44 Q102 38 108 40 Z"
        stroke="#2563eb" strokeWidth="1.5" fill="#2563eb" fillOpacity={0.06}
      />
      {/* Connecting sparkles */}
      {[{ cx: 65, cy: 26 }, { cx: 105, cy: 26 }].map((s, i) => (
        <circle key={i} cx={s.cx} cy={s.cy} r="2" fill="#2563eb" fillOpacity={0.4} />
      ))}
      {/* "Custom fit" label */}
      <g>
        <rect x="55" y="70" width="60" height="14" rx="4" fill="white" fillOpacity={0.06}
          stroke="white" strokeWidth="0.5" strokeOpacity={0.1} />
        <text x="85" y="80" textAnchor="middle" fill="white" fillOpacity={0.5} fontSize="6" fontWeight="500">
          perfect fit
        </text>
      </g>
    </svg>
  );
}

function TechStackSVG() {
  return (
    <svg viewBox="0 0 200 100" fill="none" className="w-full h-full">
      {/* Stack layers */}
      {[
        { y: 14, label: "React / Next.js", color: "#2563eb" },
        { y: 34, label: "Node / API", color: "#14b8a6" },
        { y: 54, label: "Database", color: "#2563eb" },
        { y: 74, label: "Cloud", color: "#14b8a6" },
      ].map((layer) => (
        <g key={layer.label}>
          <rect x="40" y={layer.y} width="120" height="16" rx="4"
            fill={layer.color} fillOpacity={0.08}
            stroke={layer.color} strokeWidth="0.75" strokeOpacity={0.3} />
          <text x="100" y={layer.y + 11} textAnchor="middle"
            fill="white" fillOpacity={0.6} fontSize="6" fontWeight="500">
            {layer.label}
          </text>
        </g>
      ))}
      {/* Connecting arrows between layers */}
      {[28, 48, 68].map((y, i) => (
        <path key={`arrow-${i}`}
          d={`M100 ${y + 2} L100 ${y + 6}`}
          stroke="white" strokeWidth="0.75" strokeOpacity={0.2}
          markerEnd="url(#arrowWhite)"
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
      <circle cx="100" cy="50" r="16" stroke="#2563eb" strokeWidth="1.5"
        fill="#2563eb" fillOpacity={0.06}
      />
      <text x="100" y="53" textAnchor="middle" fill="white" fillOpacity={0.6}
        fontSize="6" fontWeight="600">
        HUB
      </text>
      {/* Satellite nodes */}
      {[
        { cx: 40, cy: 30, label: "ERP" },
        { cx: 160, cy: 30, label: "CRM" },
        { cx: 40, cy: 75, label: "API" },
        { cx: 160, cy: 75, label: "DB" },
      ].map((node) => (
        <g key={node.label}>
          <circle cx={node.cx} cy={node.cy} r="12"
            stroke="#14b8a6" strokeWidth="1" fill="#14b8a6" fillOpacity={0.06} />
          <text x={node.cx} y={node.cy + 3} textAnchor="middle"
            fill="white" fillOpacity={0.5} fontSize="5.5" fontWeight="500">
            {node.label}
          </text>
        </g>
      ))}
      {/* Connection lines */}
      {[
        { x1: 52, y1: 35, x2: 84, y2: 44 },
        { x1: 148, y1: 35, x2: 116, y2: 44 },
        { x1: 52, y1: 70, x2: 84, y2: 56 },
        { x1: 148, y1: 70, x2: 116, y2: 56 },
      ].map((line, i) => (
        <line key={`line-${i}`}
          x1={line.x1} y1={line.y1} x2={line.x2} y2={line.y2}
          stroke="white" strokeWidth="0.75" strokeOpacity={0.15} strokeDasharray="3 2"
        />
      ))}
    </svg>
  );
}

function AgileSVG() {
  return (
    <svg viewBox="0 0 200 100" fill="none" className="w-full h-full">
      {/* Sprint cycle arc */}
      <path
        d="M60 50 Q60 20 100 20 Q140 20 140 50 Q140 80 100 80 Q60 80 60 50"
        stroke="#2563eb" strokeWidth="1.5" fill="none" strokeOpacity={0.3}
      />
      {/* Inner cycle */}
      <path
        d="M72 50 Q72 30 100 30 Q128 30 128 50 Q128 70 100 70 Q72 70 72 50"
        stroke="#14b8a6" strokeWidth="1" fill="none" strokeOpacity={0.2}
      />
      {/* Phase nodes on cycle */}
      {[
        { cx: 100, cy: 20, label: "Plan" },
        { cx: 140, cy: 50, label: "Build" },
        { cx: 100, cy: 80, label: "Test" },
        { cx: 60, cy: 50, label: "Ship" },
      ].map((node) => (
        <g key={node.label}>
          <circle cx={node.cx} cy={node.cy} r="10"
            fill={node.label === "Ship" ? "#14b8a6" : "#2563eb"} fillOpacity={0.08}
            stroke={node.label === "Ship" ? "#14b8a6" : "#2563eb"} strokeWidth="1" strokeOpacity={0.3} />
          <text x={node.cx} y={node.cy + 3} textAnchor="middle"
            fill="white" fillOpacity={0.5} fontSize="5" fontWeight="500">
            {node.label}
          </text>
        </g>
      ))}
      {/* Directional arrows */}
      {[
        { d: "M112 22 L126 32" },
        { d: "M138 62 L126 72" },
        { d: "M88 78 L74 68" },
        { d: "M62 38 L74 28" },
      ].map((arrow, i) => (
        <path key={`arr-${i}`} d={arrow.d}
          stroke="white" strokeWidth="0.75" strokeOpacity={0.2}
          strokeLinecap="round" markerEnd="url(#arrowWhite2)"
        />
      ))}
      {/* Sprint number */}
      <g>
        <text x="100" y="52" textAnchor="middle" fill="white" fillOpacity={0.3} fontSize="7" fontWeight="600">
          Sprint N
        </text>
      </g>
      {/* Iteration dots */}
      {[155, 165, 175].map((x, i) => (
        <g key={`iter-${i}`}>
          <circle cx={x} cy={50} r="3" stroke="white" strokeWidth="0.5" strokeOpacity={0.15}
            fill="white" fillOpacity={0.03} />
          <text x={x} y={52} textAnchor="middle" fill="white" fillOpacity={0.25} fontSize="4">
            {i + 1}
          </text>
        </g>
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
      {/* --- Hero --- */}
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

      {/* --- Process --- */}
      <section className="py-section bg-white">
        <div className="container-apple">
          {/* Section header (inline, no SectionHeading import) */}
          <FadeIn className="text-center mb-12">
            <p className="text-brand-500 text-[0.6875rem] font-semibold tracking-wide uppercase mb-3">
              Our process
            </p>
            <h2 className="text-display-sm text-apple-black mb-3">
              From idea to production.
            </h2>
            <p className="text-[0.8125rem] text-apple-gray max-w-xl mx-auto">
              We build with transparency and precision -- you see progress every
              step of the way.
            </p>
          </FadeIn>

          <FadeInStagger className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5">
            {processSteps.map((step, index) => {
              const Illust = step.Illustration;
              return (
                <FadeInChild
                  key={step.title}
                  index={index}
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
                </FadeInChild>
              );
            })}
          </FadeInStagger>
        </div>
      </section>

      {/* --- Advantages (dark) --- */}
      <section className="py-section bg-apple-black relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/4 w-[600px] h-[600px] bg-brand-500/5 rounded-full blur-[120px]" />
          <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-teal-500/5 rounded-full blur-[100px]" />
        </div>

        <div className="container-apple relative z-10">
          {/* Section header */}
          <FadeIn className="text-center mb-12">
            <p className="text-brand-400 text-[0.6875rem] font-semibold tracking-wide uppercase mb-3">
              Why custom
            </p>
            <h2 className="text-display-sm text-white mb-3">
              Software built around your business.
            </h2>
            <p className="text-[0.8125rem] text-apple-gray max-w-xl mx-auto">
              Not the other way around. Custom development means every feature
              serves a purpose.
            </p>
          </FadeIn>

          <FadeInStagger className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-5 max-w-4xl mx-auto">
            {advantages.map((item, index) => {
              const Illust = item.Illustration;
              return (
                <FadeInChild
                  key={item.title}
                  index={index}
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
                </FadeInChild>
              );
            })}
          </FadeInStagger>
        </div>
      </section>

      {/* --- CTA --- */}
      <CTABanner
        title="Have a unique challenge? Let's build the right solution together."
        subtitle="We'll scope, design, and deliver software that fits your business perfectly."
        buttonText="Start a Conversation"
        buttonHref="/contact"
      />
    </>
  );
}
