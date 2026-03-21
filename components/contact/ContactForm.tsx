"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { motion } from "framer-motion";
import Button from "@/components/ui/Button";
import { SERVICE_INTERESTS } from "@/lib/constants";

type FormData = {
  name: string;
  email: string;
  phone: string;
  company: string;
  website: string;
  service: string;
  message: string;
};

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false);
  const [submitError, setSubmitError] = useState("");
  const [loading, setLoading] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>();

  const onSubmit = async (data: FormData) => {
    setLoading(true);
    setSubmitError("");

    // Honeypot check — bots fill hidden fields
    if (data.website) {
      setSubmitted(true);
      return;
    }

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (!res.ok) {
        const body = await res.json();
        throw new Error(body.error || "Something went wrong.");
      }

      setSubmitted(true);
    } catch (err) {
      setSubmitError(
        err instanceof Error ? err.message : "Something went wrong. Please try again."
      );
    } finally {
      setLoading(false);
    }
  };

  const inputClass =
    "w-full px-0 py-3.5 bg-transparent border-0 border-b border-apple-gray-mid/50 text-apple-black text-[0.9375rem] placeholder:text-apple-gray/50 focus:outline-none focus:border-brand-500 transition-colors duration-300";

  if (submitted) {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className="card-apple p-12 md:p-16 text-center"
        role="status"
        aria-live="polite"
      >
        <div className="w-16 h-16 rounded-full bg-teal-500/10 flex items-center justify-center mx-auto mb-6">
          <svg
            width="32"
            height="32"
            viewBox="0 0 24 24"
            fill="none"
            stroke="#14b8a6"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden="true"
          >
            <path d="M20 6L9 17l-5-5" />
          </svg>
        </div>
        <h3 className="text-headline text-apple-black mb-3">Thank you.</h3>
        <p className="text-body text-apple-gray">
          We&apos;ve received your message and will get back to you within one
          business day.
        </p>
      </motion.div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="card-apple p-8 md:p-12"
      noValidate
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-2">
        {/* Name */}
        <div className="py-2">
          <label
            htmlFor="name"
            className="text-xs font-medium text-apple-gray tracking-wide uppercase"
          >
            Name <span className="text-red-500" aria-hidden="true">*</span>
          </label>
          <input
            id="name"
            type="text"
            autoComplete="name"
            {...register("name", { required: "Name is required" })}
            className={inputClass}
            placeholder="Your name"
            aria-required="true"
            aria-invalid={errors.name ? "true" : undefined}
            aria-describedby={errors.name ? "name-error" : undefined}
          />
          {errors.name && (
            <p id="name-error" className="text-red-500 text-xs mt-2" role="alert">
              {errors.name.message}
            </p>
          )}
        </div>

        {/* Email */}
        <div className="py-2">
          <label
            htmlFor="email"
            className="text-xs font-medium text-apple-gray tracking-wide uppercase"
          >
            Email <span className="text-red-500" aria-hidden="true">*</span>
          </label>
          <input
            id="email"
            type="email"
            autoComplete="email"
            {...register("email", {
              required: "Email is required",
              pattern: {
                value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                message: "Please enter a valid email",
              },
            })}
            className={inputClass}
            placeholder="your@email.com"
            aria-required="true"
            aria-invalid={errors.email ? "true" : undefined}
            aria-describedby={errors.email ? "email-error" : undefined}
          />
          {errors.email && (
            <p id="email-error" className="text-red-500 text-xs mt-2" role="alert">
              {errors.email.message}
            </p>
          )}
        </div>

        {/* Phone */}
        <div className="py-2">
          <label
            htmlFor="phone"
            className="text-xs font-medium text-apple-gray tracking-wide uppercase"
          >
            Phone <span className="text-apple-gray/40">(optional)</span>
          </label>
          <input
            id="phone"
            type="tel"
            autoComplete="tel"
            {...register("phone")}
            className={inputClass}
            placeholder="(555) 123-4567"
          />
        </div>

        {/* Company */}
        <div className="py-2">
          <label
            htmlFor="company"
            className="text-xs font-medium text-apple-gray tracking-wide uppercase"
          >
            Company
          </label>
          <input
            id="company"
            type="text"
            autoComplete="organization"
            {...register("company")}
            className={inputClass}
            placeholder="Your company"
          />
        </div>
      </div>

      {/* Honeypot — invisible to humans, catches bots */}
      <div className="absolute -left-[9999px]" aria-hidden="true">
        <label htmlFor="website">Website</label>
        <input
          id="website"
          type="text"
          tabIndex={-1}
          autoComplete="off"
          {...register("website")}
        />
      </div>

      {/* Service Interest */}
      <div className="py-2 mt-2">
        <label
          htmlFor="service"
          className="text-xs font-medium text-apple-gray tracking-wide uppercase"
        >
          Service Interest
        </label>
        <select
          id="service"
          {...register("service")}
          className={`${inputClass} bg-white cursor-pointer`}
        >
          <option value="">Select a service...</option>
          {SERVICE_INTERESTS.map((service) => (
            <option key={service} value={service}>
              {service}
            </option>
          ))}
        </select>
      </div>

      {/* Message */}
      <div className="py-2 mt-2">
        <label
          htmlFor="message"
          className="text-xs font-medium text-apple-gray tracking-wide uppercase"
        >
          Message <span className="text-red-500" aria-hidden="true">*</span>
        </label>
        <textarea
          id="message"
          rows={4}
          {...register("message", { required: "Message is required" })}
          className={`${inputClass} resize-y`}
          placeholder="Tell us about your project or needs..."
          aria-required="true"
          aria-invalid={errors.message ? "true" : undefined}
          aria-describedby={errors.message ? "message-error" : undefined}
        />
        {errors.message && (
          <p id="message-error" className="text-red-500 text-xs mt-2" role="alert">
            {errors.message.message}
          </p>
        )}
      </div>

      {submitError && (
        <p className="text-red-500 text-sm mt-4" role="alert" aria-live="assertive">
          {submitError}
        </p>
      )}

      <div className="mt-8">
        <Button
          type="submit"
          size="lg"
          className="w-full sm:w-auto"
          loading={loading}
        >
          Send Message
        </Button>
      </div>
    </form>
  );
}
