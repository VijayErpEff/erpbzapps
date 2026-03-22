"use client";

import { useEffect, useRef, useState, type ReactNode, type CSSProperties } from "react";

type FadeInProps = {
  children: ReactNode;
  delay?: number;
  duration?: number;
  y?: number;
  className?: string;
  once?: boolean;
};

export default function FadeIn({
  children,
  delay = 0,
  duration = 0.7,
  y = 30,
  className = "",
}: FadeInProps) {
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
    transform: isVisible ? "translateY(0)" : `translateY(${y}px)`,
    transition: `opacity ${duration}s cubic-bezier(0.21,0.45,0.27,0.9) ${delay}s, transform ${duration}s cubic-bezier(0.21,0.45,0.27,0.9) ${delay}s`,
  };

  return (
    <div ref={ref} style={style} className={className}>
      {children}
    </div>
  );
}

export function FadeInStagger({
  children,
  staggerDelay = 0.1,
  className = "",
}: {
  children: ReactNode;
  staggerDelay?: number;
  className?: string;
}) {
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

  return (
    <div
      ref={ref}
      className={`${className} ${isVisible ? "stagger-visible" : "stagger-hidden"}`}
      style={{ "--stagger-delay": `${staggerDelay}s` } as CSSProperties}
    >
      {children}
    </div>
  );
}

export function FadeInChild({
  children,
  className = "",
  y = 30,
  index = 0,
}: {
  children: ReactNode;
  className?: string;
  y?: number;
  index?: number;
}) {
  return (
    <div
      className={`fade-in-child ${className}`}
      style={{
        "--child-y": `${y}px`,
        "--child-index": index,
      } as CSSProperties}
    >
      {children}
    </div>
  );
}
