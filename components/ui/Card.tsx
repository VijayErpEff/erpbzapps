"use client";

import { motion } from "framer-motion";
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
  const content = (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.6, delay: index * 0.1, ease: [0.21, 0.45, 0.27, 0.9] }}
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
        <div className="mt-6 text-brand-500 text-sm font-medium flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-all duration-300 translate-x-0 group-hover:translate-x-1">
          Learn more
          <svg width="14" height="14" viewBox="0 0 16 16" fill="none">
            <path d="M6 3L11 8L6 13" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>
      )}
    </motion.div>
  );

  if (href) {
    return <Link href={href} className="block">{content}</Link>;
  }

  return content;
}
