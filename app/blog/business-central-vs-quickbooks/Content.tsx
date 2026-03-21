"use client";

import Link from "next/link";
import CTABanner from "@/components/ui/CTABanner";

export default function Content() {
  return (
    <>
      {/* Hero */}
      <section className="relative pt-6 pb-10 md:pt-8 md:pb-14 overflow-hidden">
        <div className="absolute inset-0 mesh-gradient" />
        <div className="container-narrow relative z-10">
          <div>
            <Link
              href="/blog"
              className="inline-flex items-center gap-1.5 text-caption text-brand-500 font-medium hover:text-brand-600 transition-colors mb-6"
            >
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" className="rotate-180">
                <path d="M6 3l5 5-5 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              Back to Blog
            </Link>
          </div>

          <div
            className="flex items-center gap-3 mb-4"
          >
            <span className="bg-brand-50 text-brand-500 text-[0.6875rem] font-semibold px-2.5 py-1 rounded-full">
              ERP
            </span>
            <span className="text-caption text-apple-gray">Mar 10, 2026</span>
            <span className="text-caption text-apple-gray">10 min read</span>
          </div>

          <h1
            className="text-display text-apple-black"
          >
            Business Central vs. QuickBooks:{" "}
            <span className="text-gradient">When It&apos;s Time to Upgrade</span>
          </h1>

          <p
            className="text-body-lg text-apple-gray mt-4"
          >
            Both are excellent tools — but they serve different stages of business growth. Here&apos;s how to know when you&apos;ve outgrown one and are ready for the other.
          </p>
        </div>
      </section>

      {/* Article Body */}
      <section className="pb-section">
        <div className="container-narrow">
          <article className="prose-article">
            <p className="text-body-lg text-apple-gray leading-relaxed mb-6">
              Let&apos;s get one thing out of the way: QuickBooks is not a bad product. For startups and
              early-stage businesses, it&apos;s one of the best accounting platforms available. It&apos;s
              affordable, intuitive, and gets the job done when your financial operations are
              straightforward.
            </p>

            <p className="text-body text-apple-gray leading-relaxed mb-6">
              But businesses grow. And when they do, the tools that got you from zero to five million
              in revenue are rarely the same tools that will get you from five million to fifty. That
              transition point — where your accounting software starts creating friction instead of
              reducing it — is exactly where the QuickBooks-to-Business Central conversation begins.
            </p>

            <h2 className="text-headline text-apple-black mt-10 mb-4">
              Where QuickBooks Excels
            </h2>

            <p className="text-body text-apple-gray leading-relaxed mb-4">
              QuickBooks Online (and its Desktop counterpart) deserves its market position. For
              businesses doing under $2-5M in revenue with simple operations, it delivers real value.
              The setup takes hours, not weeks. Bookkeepers already know how to use it. Bank feeds
              connect seamlessly. Basic invoicing, expense tracking, and tax prep work exactly the way
              a small business owner expects.
            </p>

            <p className="text-body text-apple-gray leading-relaxed mb-6">
              If your operation is a single entity, single currency, with a handful of employees and
              straightforward product or service revenue — QuickBooks is often the right tool. No need
              to overcomplicate things.
            </p>

            <h2 className="text-headline text-apple-black mt-10 mb-4">
              Where QuickBooks Hits Its Ceiling
            </h2>

            <p className="text-body text-apple-gray leading-relaxed mb-4">
              The pain usually starts gradually. Your controller starts building workarounds in Excel.
              Your operations manager has a personal spreadsheet that &ldquo;supplements&rdquo;
              QuickBooks. Your warehouse team uses a separate system for inventory that nobody
              reconciles with the books until month-end. These are all signals, and they tend to show
              up in a few specific areas:
            </p>

            <h3 className="text-title text-apple-black mt-6 mb-3">
              Multi-Entity and Multi-Currency
            </h3>
            <p className="text-body text-apple-gray leading-relaxed mb-4">
              Once you open a second location, a subsidiary, or start transacting in foreign currencies,
              QuickBooks becomes painful. Intercompany eliminations are manual. Currency revaluation
              is manual. Consolidated reporting across entities requires exporting data to
              spreadsheets. For a business operating across even two entities, this creates hours of
              unnecessary work every month.
            </p>

            <h3 className="text-title text-apple-black mt-6 mb-3">
              Inventory and Warehouse Management
            </h3>
            <p className="text-body text-apple-gray leading-relaxed mb-4">
              QuickBooks offers basic inventory tracking, but once you need lot tracking, serial
              numbers, bin management, multiple warehouse locations, or assembly/kitting BOMs, you
              hit a wall. Businesses that manage physical goods with any complexity end up running a
              separate WMS alongside QuickBooks — creating data silos and reconciliation headaches.
            </p>

            <h3 className="text-title text-apple-black mt-6 mb-3">
              Approval Workflows and Internal Controls
            </h3>
            <p className="text-body text-apple-gray leading-relaxed mb-4">
              As your team grows, you need purchase order approval workflows, vendor payment
              approvals, expense policy enforcement, and segregation of duties. QuickBooks has
              limited user-permission controls, but no true workflow engine. Every approval process
              lives outside the system — in email chains, Slack messages, or someone walking to
              another desk.
            </p>

            <h3 className="text-title text-apple-black mt-6 mb-3">
              Dimensional Reporting and Analytics
            </h3>
            <p className="text-body text-apple-gray leading-relaxed mb-4">
              When your CFO asks &ldquo;show me profitability by product line, by region, by customer
              segment&rdquo; — QuickBooks struggles. Its class and location tracking is a start, but you
              can&apos;t slice data across multiple dimensions the way a growing business needs to. The
              result: your finance team spends more time building reports than analyzing them.
            </p>

            <h3 className="text-title text-apple-black mt-6 mb-3">
              Audit Trails and Compliance
            </h3>
            <p className="text-body text-apple-gray leading-relaxed mb-6">
              If you&apos;re in an industry with regulatory requirements — or if you&apos;re preparing for
              SOC 2, SOX readiness, or simply need clean audit trails — QuickBooks falls short. It
              tracks changes at a basic level, but doesn&apos;t provide the granular, immutable audit logs
              that auditors and compliance teams require.
            </p>

            <h2 className="text-headline text-apple-black mt-10 mb-4">
              The Real-World Trigger Points
            </h2>

            <p className="text-body text-apple-gray leading-relaxed mb-4">
              In our experience, the decision to upgrade rarely comes from a feature comparison
              spreadsheet. It comes from a moment. The month-end close takes 10 business days and
              your board wants it in 3. An inventory miscount costs you a key customer. Your
              controller gives notice because they&apos;re tired of manually reconciling four systems every
              week.
            </p>

            <p className="text-body text-apple-gray leading-relaxed mb-6">
              When your most expensive employees are spending their time on workarounds instead of
              analysis, that&apos;s the sign. The cost of staying on QuickBooks is no longer just the
              subscription fee — it&apos;s the opportunity cost of what your team could be doing with
              better tools.
            </p>

            <h2 className="text-headline text-apple-black mt-10 mb-4">
              What Business Central Brings to the Table
            </h2>

            <p className="text-body text-apple-gray leading-relaxed mb-4">
              Microsoft Dynamics 365{" "}
              <Link href="/services/business-central" className="text-brand-500 hover:text-brand-600 font-medium">Business Central</Link>
              {" "}is an ERP platform, not just an accounting
              tool. That distinction matters. Where QuickBooks manages your books, Business Central
              manages your business — financials, supply chain, warehouse, manufacturing, and
              project management in a single, unified system.
            </p>

            <p className="text-body text-apple-gray leading-relaxed mb-4">
              A few things that make it particularly compelling for growing SMBs:
            </p>

            <p className="text-body text-apple-gray leading-relaxed mb-3">
              <strong className="text-apple-black">Unified data model.</strong> Your sales orders, purchase orders,
              inventory movements, and general ledger entries all live in the same system. No more
              reconciling between disconnected tools. When a sales order ships, inventory updates
              and revenue is recognized automatically.
            </p>

            <p className="text-body text-apple-gray leading-relaxed mb-3">
              <strong className="text-apple-black">Built on the Microsoft stack.</strong> If your team already uses
              Microsoft 365, Outlook, Excel, and Teams — Business Central fits naturally. It
              integrates directly with these tools, plus Power BI for reporting, Power Automate for
              workflow automation, and Copilot for AI-assisted tasks. There&apos;s no separate ecosystem
              to learn.
            </p>

            <p className="text-body text-apple-gray leading-relaxed mb-3">
              <strong className="text-apple-black">Extensible by design.</strong> Business Central uses AL (Application
              Language) extensions, meaning customizations don&apos;t break on upgrades. The AppSource
              marketplace has thousands of add-ons for industry-specific needs — from food
              distribution to construction to professional services. You get a tailored system without
              building from scratch.
            </p>

            <p className="text-body text-apple-gray leading-relaxed mb-6">
              <strong className="text-apple-black">Cloud-native SaaS.</strong> No servers to maintain. Automatic updates.
              Accessible from anywhere. Microsoft handles infrastructure, security patches, and
              performance — your team focuses on running the business.
            </p>

            <h2 className="text-headline text-apple-black mt-10 mb-4">
              Migration: What to Expect
            </h2>

            <p className="text-body text-apple-gray leading-relaxed mb-4">
              Moving from QuickBooks to Business Central is a meaningful project, but it doesn&apos;t have
              to be overwhelming. A typical migration for an SMB follows a phased approach:
            </p>

            <p className="text-body text-apple-gray leading-relaxed mb-3">
              <strong className="text-apple-black">Discovery and design (2-3 weeks):</strong> Map your current
              processes, identify gaps, and define how Business Central will be configured to match
              your business.
            </p>

            <p className="text-body text-apple-gray leading-relaxed mb-3">
              <strong className="text-apple-black">Configuration and data migration (4-6 weeks):</strong> Set up the
              system, migrate your chart of accounts, open balances, customer/vendor master data,
              and item records. Historical transactions can be migrated for reporting continuity, but
              most businesses start with a clean cut-over at a fiscal period boundary.
            </p>

            <p className="text-body text-apple-gray leading-relaxed mb-3">
              <strong className="text-apple-black">Testing and training (2-4 weeks):</strong> Your team validates the
              configuration against real-world scenarios. End-user training is hands-on and
              role-based — your AP clerk learns AP workflows, your warehouse staff learns shipping
              and receiving.
            </p>

            <p className="text-body text-apple-gray leading-relaxed mb-4">
              <strong className="text-apple-black">Go-live and stabilization (1-2 weeks):</strong> Flip the switch,
              with your implementation partner available for immediate support.
            </p>

            <p className="text-body text-apple-gray leading-relaxed mb-6">
              Total timeline: 8-16 weeks is typical for a small to mid-size business. The variables
              are complexity (how many modules, how many customizations) and readiness (how
              prepared your data and team are).
            </p>

            <h2 className="text-headline text-apple-black mt-10 mb-4">
              The Bottom Line
            </h2>

            <p className="text-body text-apple-gray leading-relaxed mb-4">
              This isn&apos;t about QuickBooks being bad. It&apos;s about your business being ready for more.
              QuickBooks was the right tool for your first chapter. But if your team is spending more
              time working around the software than working with it, the math starts to shift.
            </p>

            <p className="text-body text-apple-gray leading-relaxed mb-4">
              The businesses that make this transition successfully are the ones who recognize the
              signs early — before the workarounds become entrenched, before the best people leave
              out of frustration, and before a missed inventory count or a late financial close costs
              real money.
            </p>

            <p className="text-body-lg text-apple-black leading-relaxed mb-6 font-medium">
              If you&apos;re starting to feel the friction, it might be time for a conversation about
              what&apos;s next. Not a sales pitch — just an honest assessment of where you are and
              whether an upgrade makes sense for your business right now.
            </p>
            <div className="mt-10 pt-8 border-t border-apple-gray-mid/20">
              <h3 className="text-title text-apple-black mb-4">Related Reading</h3>
              <ul className="space-y-2">
                <li><Link href="/services/business-central" className="text-brand-500 hover:text-brand-600 transition-colors">Learn more about our Business Central implementation services →</Link></li>
                <li><Link href="/blog/roi-business-central" className="text-brand-500 hover:text-brand-600 transition-colors">The ROI of Business Central for Small Businesses →</Link></li>
                <li><Link href="/blog/signs-outgrown-spreadsheets" className="text-brand-500 hover:text-brand-600 transition-colors">5 Signs Your Business Has Outgrown Spreadsheets →</Link></li>
              </ul>
            </div>
          </article>
        </div>
      </section>

      <CTABanner
        title="Wondering if it's time to move beyond QuickBooks?"
        subtitle="Let's talk through your situation — no pressure, just clarity."
        buttonText="Schedule a Conversation"
        buttonHref="/contact"
      />
    </>
  );
}
