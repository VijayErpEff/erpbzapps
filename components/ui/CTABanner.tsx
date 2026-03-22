"use client";

import { useEffect, useRef, useState, type CSSProperties } from "react";
import Button from "./Button";

type CTABannerProps = {
  title: string;
  subtitle?: string;
  buttonText: string;
  buttonHref: string;
};

export default function CTABanner({
  title,
  subtitle,
  buttonText,
  buttonHref,
}: CTABannerProps) {
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
    <section className="relative overflow-hidden bg-apple-black py-section">
      {/* Background mesh */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-brand-500/10 rounded-full blur-[120px]" />
        <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] bg-teal-500/8 rounded-full blur-[100px]" />
      </div>

      <div
        ref={ref}
        style={style}
        className="container-apple relative z-10 text-center"
      >
        <h2 className="text-display-sm text-white mb-5 text-balance">
          {title}
        </h2>
        {subtitle && (
          <p className="text-body-lg text-apple-gray mb-10 max-w-xl mx-auto">
            {subtitle}
          </p>
        )}
        <Button href={buttonHref} variant="primary" size="lg">
          {buttonText}
        </Button>
      </div>
    </section>
  );
}
