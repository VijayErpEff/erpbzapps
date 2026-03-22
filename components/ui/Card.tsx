"use client";

import { useEffect, useRef, useState, type CSSProperties } from "react";
import Link from "next/link";

type CardProps = {
  title: string;
  description: string;
  icon?: React.ReactNode;
  href?: string;
  className?: string;
  index?: number;
};

export default function Card({
  title,
  description,
  icon,
  href,
  className = "",
  index = 0,
}: CardProps) {
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
    transition: `opacity 0.6s cubic-bezier(0.21,0.45,0.27,0.9) ${index * 0.1}s, transform 0.6s cubic-bezier(0.21,0.45,0.27,0.9) ${index * 0.1}s`,
  };

  const content = (
    <div
      ref={ref}
      style={style}
      className={`card-apple p-8 md:p-10 group cursor-pointer ${className}`}
    >
      {icon && (
        <div className="mb-6 transition-transform duration-500 group-hover:scale-110 group-hover:-translate-y-1">
          {icon}
        </div>
      )}
      <h3 className="text-title text-apple-black mb-3 group-hover:text-brand-500 transition-colors duration-300">
        {title}
      </h3>
      <p className="text-body text-apple-gray leading-relaxed">{description}</p>
      {href && (
        <div className="mt-6 text-brand-500 text-sm font-medium flex items-center gap-1 opacity-100 md:opacity-0 md:group-hover:opacity-100 transition-all duration-300 translate-x-0 md:group-hover:translate-x-1">
          Learn more
          <svg width="14" height="14" viewBox="0 0 16 16" fill="none">
            <path d="M6 3L11 8L6 13" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>
      )}
    </div>
  );

  if (href) {
    return <Link href={href} className="block">{content}</Link>;
  }

  return content;
}
