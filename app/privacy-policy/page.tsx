import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "Privacy policy for ERP Business Apps, LLC — how we collect, use, and protect your information.",
  alternates: { canonical: "https://erpbizapps.com/privacy-policy" },
};

export default function PrivacyPolicyPage() {
  return (
    <section className="pt-32 pb-20">
      <div className="container-apple max-w-3xl">
        <p className="text-brand-500 text-caption font-semibold tracking-wide uppercase mb-4">
          Legal
        </p>
        <h1 className="text-display-sm text-apple-black mb-4">
          Privacy Policy
        </h1>
        <p className="text-body text-apple-gray mb-12">
          Last updated: March 13, 2026
        </p>

        <div className="prose-erp space-y-10">
          <Section title="1. Information We Collect">
            <p>
              When you visit our website or contact us, we may collect the
              following information:
            </p>
            <ul>
              <li>
                <strong>Contact information</strong> — name, email address,
                phone number, and company name that you provide through our
                contact form.
              </li>
              <li>
                <strong>Usage data</strong> — pages visited, time spent on
                pages, referring URLs, and other standard web analytics data
                collected automatically.
              </li>
              <li>
                <strong>Device information</strong> — browser type, operating
                system, and device type for optimizing your experience.
              </li>
            </ul>
          </Section>

          <Section title="2. How We Use Your Information">
            <p>We use the information we collect to:</p>
            <ul>
              <li>Respond to your inquiries and provide requested services.</li>
              <li>
                Improve our website, services, and user experience.
              </li>
              <li>
                Send relevant communications about our services (only with your
                consent).
              </li>
              <li>Comply with legal obligations.</li>
            </ul>
          </Section>

          <Section title="3. Information Sharing">
            <p>
              We do not sell, trade, or rent your personal information. We may
              share information with trusted third-party service providers who
              assist us in operating our website and conducting our business,
              subject to confidentiality agreements.
            </p>
          </Section>

          <Section title="4. Data Security">
            <p>
              We implement appropriate technical and organizational measures to
              protect your personal information against unauthorized access,
              alteration, disclosure, or destruction. However, no method of
              transmission over the Internet is 100% secure.
            </p>
          </Section>

          <Section title="5. Cookies">
            <p>
              Our website may use cookies and similar technologies to enhance
              your browsing experience and analyze site traffic. You can control
              cookie preferences through your browser settings.
            </p>
          </Section>

          <Section title="6. Third-Party Links">
            <p>
              Our website may contain links to third-party websites. We are not
              responsible for the privacy practices or content of those sites.
              We encourage you to review their privacy policies.
            </p>
          </Section>

          <Section title="7. Your Rights">
            <p>You have the right to:</p>
            <ul>
              <li>Access the personal information we hold about you.</li>
              <li>Request correction of inaccurate information.</li>
              <li>Request deletion of your personal information.</li>
              <li>Opt out of marketing communications at any time.</li>
            </ul>
          </Section>

          <Section title="8. Children's Privacy">
            <p>
              Our services are not directed to individuals under the age of 18.
              We do not knowingly collect personal information from children.
            </p>
          </Section>

          <Section title="9. Changes to This Policy">
            <p>
              We may update this privacy policy from time to time. Changes will
              be posted on this page with an updated effective date. We
              encourage you to review this policy periodically.
            </p>
          </Section>

          <Section title="10. Contact Us">
            <p>
              If you have questions about this privacy policy or our data
              practices, please contact us at:
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
