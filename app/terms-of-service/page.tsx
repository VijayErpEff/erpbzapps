import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Service",
  description:
    "Terms of service for ERP Business Apps, LLC — terms governing the use of our website and services.",
  alternates: { canonical: "https://erpbizapps.com/terms-of-service" },
};

export default function TermsOfServicePage() {
  return (
    <section className="pt-32 pb-20">
      <div className="container-apple max-w-3xl">
        <p className="text-brand-500 text-caption font-semibold tracking-wide uppercase mb-4">
          Legal
        </p>
        <h1 className="text-display-sm text-apple-black mb-4">
          Terms of Service
        </h1>
        <p className="text-body text-apple-gray mb-12">
          Last updated: March 13, 2026
        </p>

        <div className="space-y-10">
          <Section title="1. Acceptance of Terms">
            <p>
              By accessing and using the ERP Business Apps website and services,
              you agree to be bound by these Terms of Service. If you do not
              agree to these terms, please do not use our website or services.
            </p>
          </Section>

          <Section title="2. Services">
            <p>
              ERP Business Apps, LLC provides ERP consulting, CRM
              implementation, custom application development, and related
              technology services. Specific terms for individual service
              engagements will be outlined in separate statements of work or
              service agreements.
            </p>
          </Section>

          <Section title="3. Use of Website">
            <p>You agree to use our website only for lawful purposes and in a manner that does not:</p>
            <ul>
              <li>Infringe the rights of any third party.</li>
              <li>
                Interfere with or disrupt the website or servers.
              </li>
              <li>
                Attempt to gain unauthorized access to any part of the website.
              </li>
              <li>
                Transmit any malicious code or harmful content.
              </li>
            </ul>
          </Section>

          <Section title="4. Intellectual Property">
            <p>
              All content on this website — including text, graphics, logos,
              images, and software — is the property of ERP Business Apps, LLC
              or its licensors and is protected by intellectual property laws.
              You may not reproduce, distribute, or create derivative works
              without our prior written consent.
            </p>
          </Section>

          <Section title="5. Limitation of Liability">
            <p>
              To the fullest extent permitted by law, ERP Business Apps, LLC
              shall not be liable for any indirect, incidental, special,
              consequential, or punitive damages arising from your use of our
              website or services. Our total liability shall not exceed the
              amount paid by you for the specific services giving rise to the
              claim.
            </p>
          </Section>

          <Section title="6. Disclaimer of Warranties">
            <p>
              Our website and services are provided &ldquo;as is&rdquo; and
              &ldquo;as available&rdquo; without warranties of any kind, either
              express or implied, including but not limited to warranties of
              merchantability, fitness for a particular purpose, and
              non-infringement.
            </p>
          </Section>

          <Section title="7. Indemnification">
            <p>
              You agree to indemnify and hold harmless ERP Business Apps, LLC,
              its officers, directors, employees, and agents from any claims,
              damages, losses, liabilities, and expenses arising from your use
              of our website or violation of these terms.
            </p>
          </Section>

          <Section title="8. Governing Law">
            <p>
              These Terms of Service are governed by the laws of the State of
              Florida, without regard to its conflict of laws provisions. Any
              disputes arising under these terms shall be resolved in the courts
              of Pinellas County, Florida.
            </p>
          </Section>

          <Section title="9. Changes to Terms">
            <p>
              We reserve the right to modify these terms at any time. Changes
              will be posted on this page with an updated effective date.
              Continued use of our website after changes constitutes acceptance
              of the updated terms.
            </p>
          </Section>

          <Section title="10. Contact Us">
            <p>
              If you have questions about these terms, please contact us at:
            </p>
            <p>
              <strong>ERP Business Apps, LLC</strong>
              <br />
              1497 Main Street #315, Dunedin, FL 34698
              <br />
              Email: info@erpbizapps.com
            </p>
          </Section>
        </div>
      </div>
    </section>
  );
}

function Section({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div>
      <h2 className="text-title text-apple-black mb-4">{title}</h2>
      <div className="text-body text-apple-gray leading-relaxed space-y-3 [&_ul]:list-disc [&_ul]:pl-5 [&_ul]:space-y-2 [&_li]:text-apple-gray">
        {children}
      </div>
    </div>
  );
}
