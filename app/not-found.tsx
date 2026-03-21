import Button from "@/components/ui/Button";

export default function NotFound() {
  return (
    <section className="min-h-[80vh] flex items-center justify-center">
      <div className="container-apple text-center py-24">
        <p className="text-brand-500 text-caption font-semibold tracking-wide uppercase mb-4">
          404
        </p>
        <h1 className="text-display-sm text-apple-black mb-4">
          Page not found
        </h1>
        <p className="text-body-lg text-apple-gray max-w-md mx-auto mb-10 leading-relaxed">
          The page you&apos;re looking for doesn&apos;t exist or has been moved.
        </p>
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <Button href="/" size="md">
            Go Home
          </Button>
          <Button href="/contact" variant="secondary" size="md">
            Contact Us
          </Button>
        </div>
      </div>
    </section>
  );
}
