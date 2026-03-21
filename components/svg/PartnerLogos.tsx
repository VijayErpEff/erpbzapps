"use client";

/** Microsoft four-square logo mark */
export function MicrosoftLogo({
  size = 20,
  className = "",
}: {
  size?: number;
  className?: string;
}) {
  const gap = size * 0.06;
  const sq = (size - gap) / 2;
  return (
    <svg
      width={size}
      height={size}
      viewBox={`0 0 ${size} ${size}`}
      className={className}
    >
      <rect x="0" y="0" width={sq} height={sq} fill="#F25022" />
      <rect x={sq + gap} y="0" width={sq} height={sq} fill="#7FBA00" />
      <rect x="0" y={sq + gap} width={sq} height={sq} fill="#00A4EF" />
      <rect x={sq + gap} y={sq + gap} width={sq} height={sq} fill="#FFB900" />
    </svg>
  );
}

/** Microsoft Dynamics 365 Business Central — full lockup */
export function BusinessCentralLogo({ className = "" }: { className?: string }) {
  return (
    <div className={`flex items-center gap-2.5 ${className}`}>
      <MicrosoftLogo size={22} />
      <div className="flex flex-col leading-none">
        <span className="text-[0.6875rem] font-semibold text-apple-black tracking-tight">
          Microsoft Dynamics 365
        </span>
        <span className="text-[0.625rem] text-apple-gray tracking-tight">
          Business Central
        </span>
      </div>
    </div>
  );
}

/** Salesforce cloud mark — official proportions */
export function SalesforceLogo({
  size = 32,
  className = "",
}: {
  size?: number;
  className?: string;
}) {
  const h = size * 0.56;
  return (
    <svg
      width={size}
      height={h}
      viewBox="0 0 60 34"
      fill="none"
      className={className}
    >
      {/* Cloud shape — traced from official Salesforce brand assets */}
      <path
        d="M25.2 4.1c2-2.1 4.8-3.4 7.9-3.4 4 0 7.4 2.1 9.3 5.3 1.6-.7 3.4-1.1 5.3-1.1 6.8 0 10.3 5.5 10.3 10.6 0 5.8-4.8 10.5-10.7 10.5-.9 0-1.7-.1-2.5-.3-1.7 2.7-4.7 4.5-8.2 4.5-1.6 0-3.2-.4-4.5-1.1-1.8 2.4-4.6 3.9-7.8 3.9-3.6 0-6.7-2-8.4-4.9-.8.2-1.6.2-2.4.2C5.7 28.3.5 23.6.5 17.5c0-4.3 2.6-8 6.4-9.6C6.6 6.9 6.4 5.8 6.4 4.7 6.4 2.1 8.5 0 11.1 0c2.3 0 4.2 1.1 5.5 2.8 1.4-1.2 3.3-1.8 5.3-1.8.8 0 2.2.4 3.3 1.1V4.1z"
        fill="#00A1E0"
      />
      {/* "salesforce" text — centered in cloud */}
      <text
        x="29.5"
        y="19"
        fontSize="8.2"
        fontWeight="800"
        fill="white"
        fontFamily="Inter, Arial, sans-serif"
        textAnchor="middle"
        letterSpacing="-0.2"
      >
        salesforce
      </text>
    </svg>
  );
}

/** Salesforce lockup with label */
export function SalesforceLockup({ className = "" }: { className?: string }) {
  return (
    <div className={`flex items-center gap-2 ${className}`}>
      <SalesforceLogo size={36} />
    </div>
  );
}

/** Trust bar partner badges — clean, understated */
export function PartnerBadge({
  type,
  label,
}: {
  type: "microsoft" | "salesforce" | "certified";
  label: string;
}) {
  return (
    <div className="flex items-center gap-3">
      <div className="w-10 h-10 rounded-xl bg-white shadow-card flex items-center justify-center">
        {type === "microsoft" && <MicrosoftLogo size={18} />}
        {type === "salesforce" && (
          <svg width="20" height="14" viewBox="0 0 50 32" fill="none">
            <path
              d="M20.8 5.3c1.8-1.9 4.3-3 7-3 3.5 0 6.5 1.8 8.2 4.6 1.5-.7 3.1-1 4.8-1 6.3 0 9.2 5.1 9.2 9.7 0 5.4-4.4 9.7-9.8 9.7-.8 0-1.5-.1-2.2-.3-1.5 2.5-4.3 4.2-7.5 4.2-1.5 0-2.9-.4-4.1-1-1.6 2.2-4.2 3.7-7.1 3.7-3.3 0-6.1-1.8-7.6-4.4-.7.1-1.4.2-2.1.2C4.3 27.7 0 23.3 0 17.9c0-4 2.4-7.4 5.9-8.9-.3-1-.5-2.1-.5-3.2C5.4 2.6 8 0 11.2 0c2 0 3.8 1 4.8 2.6 1.3-1.1 3-1.7 4.8-1.7z"
              fill="#00A1E0"
            />
          </svg>
        )}
        {type === "certified" && (
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
            <path d="M12 2l2.4 7.2H22l-6 4.4 2.3 7.2L12 16.4l-6.3 4.4 2.3-7.2-6-4.4h7.6z" fill="#2563eb" />
          </svg>
        )}
      </div>
      <span className="text-xs font-medium text-apple-gray-dark">{label}</span>
    </div>
  );
}
