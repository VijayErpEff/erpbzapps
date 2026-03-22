"use client";

import { useEffect, useRef, useState, type CSSProperties } from "react";

type SectionHeadingProps = {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  centered?: boolean;
  dark?: boolean;
  className?: string;
};

export default function SectionHeading({
  eyebrow,
  title,
  subtitle,
  centered = true,
  dark = false,
  className = "",
}: SectionHeadingProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.05 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const style: CSSProperties = {
    opacity: isVisible ? 1 : 0,
    transform: isVisible ? "translateY(0)" : "translateY(30px)",
    transition: "opacity 0.7s cubic-bezier(0.21,0.45,0.27,0.9), transform 0.7s cubic-bezier(0.21,0.45,0.27,0.9)",
  };

  return (
    <div
      ref={ref}
      style={style}
      className={`mb-16 md:mb-20 ${centered ? "text-center" : ""} ${className}`}
    >
      {eyebrow && (
        <p className="text-brand-500 text-caption font-semibold tracking-wide uppercase mb-4">
          {eyebrow}
        </p>
      )}
      <h2
        className={`text-display-sm text-balance ${
          dark ? "text-white" : "text-apple-black"
        }`}
      >
        {title}
      </h2>
      {subtitle && (
        <p
          className={`text-body-lg mt-5 max-w-2xl leading-relaxed ${
            centered ? "mx-auto" : ""
          } ${dark ? "text-apple-gray" : "text-apple-gray"}`}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
}
