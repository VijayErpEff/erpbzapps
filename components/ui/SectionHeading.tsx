"use client";

import { motion } from "framer-motion";

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
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.7, ease: [0.21, 0.45, 0.27, 0.9] }}
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
    </motion.div>
  );
}
