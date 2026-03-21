"use client";

import { useEffect } from "react";
import Button from "@/components/ui/Button";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <section className="min-h-[80vh] flex items-center justify-center">
      <div className="container-apple text-center py-24">
        <p className="text-red-500 text-caption font-semibold tracking-wide uppercase mb-4">
          Something went wrong
        </p>
        <h1 className="text-display-sm text-apple-black mb-4">
          Unexpected error
        </h1>
        <p className="text-body-lg text-apple-gray max-w-md mx-auto mb-10 leading-relaxed">
          We&apos;re sorry — something didn&apos;t work as expected. Please try
          again.
        </p>
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <Button onClick={reset} size="md">
            Try Again
          </Button>
          <Button href="/" variant="secondary" size="md">
            Go Home
          </Button>
        </div>
      </div>
    </section>
  );
}
