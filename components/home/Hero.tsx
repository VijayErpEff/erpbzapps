"use client";

import { motion } from "framer-motion";
import Button from "@/components/ui/Button";
import HeroGraphic from "@/components/svg/HeroGraphic";
import { PartnerBadge } from "@/components/svg/PartnerLogos";

const ease = [0.21, 0.45, 0.27, 0.9] as const;

export default function Hero() {
  return (
    <section className="relative overflow-hidden pt-24 md:pt-32">
      {/* Background */}
      <div className="absolute inset-0 mesh-gradient" />

      <div className="container-wide relative z-10 pb-12 md:pb-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-6 items-center">
          {/* Left — Copy */}
          <div className="max-w-xl">
            <p
              className="text-brand-500 text-caption font-semibold tracking-wide uppercase mb-4"
            >
              ERP &middot; CRM &middot; Custom Applications
            </p>

            <h1
              className="text-display-xl text-apple-black mb-5"
            >
              Streamline your business.{" "}
              <span className="text-gradient">Scale with confidence.</span>
            </h1>

            <p
              className="text-body-lg text-apple-gray leading-relaxed mb-8"
            >
              ERP Biz Apps helps small and mid-size businesses transform
              operations with Microsoft Business Central, Salesforce, and
              custom-built applications — so you can focus on growth, not
              software headaches.
            </p>

            <div
              className="flex flex-col sm:flex-row gap-3"
            >
              <Button href="/contact" size="lg">
                Book Your Free Consultation
              </Button>
              <Button href="/services" variant="secondary" size="lg">
                Explore Our Services
              </Button>
            </div>

            {/* Trust — Official partner badges */}
            <div
              className="mt-10 pt-6 border-t border-apple-gray-mid/20"
            >
              <div className="flex flex-wrap items-center gap-6">
                <PartnerBadge type="microsoft" label="Microsoft Partner" />
                <PartnerBadge type="salesforce" label="Salesforce Partner" />
                <PartnerBadge type="certified" label="Certified Experts" />
              </div>
            </div>
          </div>

          {/* Right — Dashboard composition */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.2, delay: 0.2, ease }}
            className="hidden md:block"
            aria-hidden="true"
          >
            <HeroGraphic />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
