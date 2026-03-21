import Hero from "@/components/home/Hero";
import ServicesOverview from "@/components/home/ServicesOverview";
import ValueProps from "@/components/home/ValueProps";
import HowItWorks from "@/components/home/HowItWorks";
import Testimonials from "@/components/home/Testimonials";
import CTABanner from "@/components/ui/CTABanner";
import BackToTop from "@/components/ui/BackToTop";

export default function Home() {
  return (
    <>
      <Hero />
      <ServicesOverview />
      <ValueProps />
      <HowItWorks />
      <Testimonials />
      <CTABanner
        title="Ready to modernize your operations?"
        subtitle="Let's talk about what's possible for your business."
        buttonText="Book a Free Consultation"
        buttonHref="/contact"
      />
      <BackToTop />
    </>
  );
}
