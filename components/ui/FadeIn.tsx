"use client";

import {
  useEffect,
  useRef,
  useState,
  createElement,
  type ReactNode,
  type CSSProperties,
  type ElementType,
} from "react";
import { EASING, DURATION_DEFAULT, TRANSLATE_Y, STAGGER_INTERVAL } from "@/lib/animation";

type FadeInProps = {
  children: ReactNode;
  delay?: number;
  duration?: number;
  y?: number;
  className?: string;
  as?: ElementType;
};

export default function FadeIn({
  children,
  delay = 0,
  duration = DURATION_DEFAULT,
  y = TRANSLATE_Y,
  className = "",
  as = "div",
}: FadeInProps) {
  const ref = useRef<HTMLElement>(null);
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

  const style: CSSProperties = isVisible
    ? {
        opacity: 1,
        transform: "translateY(0) scale(1)",
        filter: "blur(0)",
        transition: [
          `opacity ${duration}s ${EASING} ${delay}s`,
          `transform ${duration + 0.1}s ${EASING} ${delay}s`,
          `filter ${duration}s ${EASING} ${delay}s`,
        ].join(", "),
      }
    : {
        opacity: 0,
        transform: `translateY(${y}px) scale(0.97)`,
        filter: "blur(3px)",
      };

  return createElement(as, { ref, style, className }, children);
}

export function FadeInStagger({
  children,
  staggerDelay = STAGGER_INTERVAL,
  className = "",
  as = "div",
}: {
  children: ReactNode;
  staggerDelay?: number;
  className?: string;
  as?: ElementType;
}) {
  const ref = useRef<HTMLElement>(null);
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

  return createElement(
    as,
    {
      ref,
      className: `${className} ${isVisible ? "stagger-visible" : "stagger-hidden"}`,
      style: { "--stagger-delay": `${staggerDelay}s` } as CSSProperties,
    },
    children
  );
}

export function FadeInChild({
  children,
  className = "",
  y = TRANSLATE_Y,
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
