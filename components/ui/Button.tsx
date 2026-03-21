import Link from "next/link";

type ButtonProps = {
  children: React.ReactNode;
  href?: string;
  variant?: "primary" | "secondary" | "ghost" | "dark";
  size?: "sm" | "md" | "lg";
  className?: string;
  type?: "button" | "submit";
  onClick?: () => void;
  loading?: boolean;
  disabled?: boolean;
};

export default function Button({
  children,
  href,
  variant = "primary",
  size = "md",
  className = "",
  type = "button",
  onClick,
  loading = false,
  disabled = false,
}: ButtonProps) {
  const base =
    "inline-flex items-center justify-center font-medium rounded-full transition-all duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-brand-500";

  const variants = {
    primary:
      "bg-brand-500 text-white hover:bg-brand-600 active:scale-[0.98]",
    secondary:
      "bg-transparent text-brand-500 ring-1 ring-brand-500/30 hover:ring-brand-500/60 hover:bg-brand-50 active:scale-[0.98]",
    ghost:
      "bg-transparent text-brand-500 hover:text-brand-600 hover:bg-brand-50/50",
    dark:
      "bg-apple-black text-white hover:bg-apple-gray-dark active:scale-[0.98]",
  };

  const sizes = {
    sm: "px-5 py-2 text-sm min-h-[36px]",
    md: "px-7 py-3 text-[0.9375rem] min-h-[44px]",
    lg: "px-9 py-4 text-base min-h-[48px]",
  };

  const disabledClass =
    disabled || loading ? "opacity-60 pointer-events-none" : "";

  const cls = `${base} ${variants[variant]} ${sizes[size]} ${disabledClass} ${className}`;

  const content = loading ? (
    <>
      <svg
        className="animate-spin -ml-1 mr-2 h-4 w-4"
        viewBox="0 0 24 24"
        fill="none"
        aria-hidden="true"
      >
        <circle
          cx="12"
          cy="12"
          r="10"
          stroke="currentColor"
          strokeWidth="3"
          className="opacity-25"
        />
        <path
          d="M4 12a8 8 0 018-8"
          stroke="currentColor"
          strokeWidth="3"
          strokeLinecap="round"
          className="opacity-75"
        />
      </svg>
      {children}
    </>
  ) : (
    children
  );

  if (href && !disabled && !loading) {
    return (
      <Link href={href} className={cls}>
        {content}
      </Link>
    );
  }

  return (
    <button
      type={type}
      className={cls}
      onClick={onClick}
      disabled={disabled || loading}
      aria-busy={loading}
    >
      {content}
    </button>
  );
}
