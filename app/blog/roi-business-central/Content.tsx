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
            <span className="text-caption text-apple-gray">Feb 28, 2026</span>
            <span className="text-caption text-apple-gray">9 min read</span>
          </div>

          <h1
            className="text-display text-apple-black"
          >
            The ROI of Business Central for{" "}
            <span className="text-gradient">Small Businesses</span>
          </h1>

          <p
            className="text-body-lg text-apple-gray mt-4"
          >
            ERP is an investment, not an expense. But to make the case internally, you need real numbers. Here&apos;s how to think about the return on a Business Central implementation.
          </p>
        </div>
      </section>

      {/* Article Body */}
      <section className="pb-section">
        <div className="container-narrow">
          <article className="prose-article">
            <p className="text-body-lg text-apple-gray leading-relaxed mb-6">
              When a small business owner hears &ldquo;ERP implementation,&rdquo; the first question
              is almost always about cost. That&apos;s fair — it&apos;s a significant investment. But
              the more important question is: what does it cost you to not have one?
            </p>

            <p className="text-body text-apple-gray leading-relaxed mb-6">
              The ROI of{" "}
              <Link href="/services/business-central" className="text-brand-500 hover:text-brand-600 font-medium">Business Central</Link>
              {" "}isn&apos;t theoretical. It shows up in concrete, measurable
              improvements across your operations — faster financial closes, fewer errors, lower
              inventory carrying costs, and teams that spend their time on strategy instead of
              data entry. Let&apos;s break it down.
            </p>

            <h2 className="text-headline text-apple-black mt-10 mb-4">
              Time Savings: Your Most Expensive Resource
            </h2>

            <p className="text-body text-apple-gray leading-relaxed mb-4">
              Time is where the ROI hits first, and it&apos;s often the biggest single category of
              return. Consider the financial close process. In a typical small business running on
              QuickBooks or spreadsheets, the monthly close takes 8-10 business days. Reconciling
              bank accounts, matching AP to POs, reviewing inventory valuations, correcting entries,
              building reports — all of it manual, all of it time-consuming.
            </p>

            <p className="text-body text-apple-gray leading-relaxed mb-4">
              With Business Central, companies routinely reduce their close to 3-4 days. Automated
              bank reconciliation, built-in matching rules for AP/AR, real-time inventory costing,
              and standardized reporting templates eliminate the manual grunt work. That&apos;s 5-7
              business days saved every month — just in finance.
            </p>

            <p className="text-body text-apple-gray leading-relaxed mb-6">
              Order processing shows similar gains. Businesses that previously took 15-20 minutes
              per order (checking inventory, creating the sales order, generating a pick list,
              invoicing after shipment) cut that to 4-5 minutes with Business Central&apos;s
              integrated order-to-cash workflow. For a company processing 50 orders per day,
              that&apos;s roughly 8 hours of labor saved daily — the equivalent of a full-time
              employee.
            </p>

            <h2 className="text-headline text-apple-black mt-10 mb-4">
              Error Reduction: Eliminating Costly Mistakes
            </h2>

            <p className="text-body text-apple-gray leading-relaxed mb-4">
              Manual data entry is error-prone by nature. When the same information — a customer
              address, a product price, an order quantity — has to be keyed into multiple systems,
              errors compound. Industry data shows that manual data entry has an error rate of
              approximately 1-4%. That might sound small, but applied across thousands of
              transactions per month, the impact is real.
            </p>

            <p className="text-body text-apple-gray leading-relaxed mb-4">
              Business Central reduces manual entry errors by 90% or more through automation. When
              a sales order is created, it pulls pricing from the customer&apos;s price list
              automatically. When it ships, the invoice generates from the shipment data — no
              rekeying. When a vendor invoice arrives, it matches against the purchase order and
              receiving document automatically.
            </p>

            <p className="text-body text-apple-gray leading-relaxed mb-6">
              The dollar impact varies by business, but consider: if you process 2,000 invoices per
              month and your error rate drops from 3% to 0.3%, that&apos;s 54 fewer errors per month.
              If each error costs $50-200 to investigate and correct (staff time, customer
              credits, reshipments), you&apos;re looking at $2,700-10,800 in monthly savings from
              error reduction alone.
            </p>

            <h2 className="text-headline text-apple-black mt-10 mb-4">
              Inventory Optimization: Less Capital Tied Up
            </h2>

            <p className="text-body text-apple-gray leading-relaxed mb-4">
              For product-based businesses, inventory is one of the largest assets on the balance
              sheet — and one of the hardest to optimize without proper tools. Too much inventory
              ties up cash and increases carrying costs (storage, insurance, depreciation, and
              obsolescence). Too little means stockouts, lost sales, and unhappy customers.
            </p>

            <p className="text-body text-apple-gray leading-relaxed mb-4">
              Most businesses running on spreadsheets or basic accounting software see inventory
              accuracy around 80-85%. That means 15-20% of your inventory records don&apos;t match
              what&apos;s actually on the shelf. Business Central, with proper implementation of
              warehouse management features, routinely achieves 97-99% accuracy through barcode
              scanning, real-time location tracking, and automated cycle counting.
            </p>

            <p className="text-body text-apple-gray leading-relaxed mb-6">
              The financial impact of better inventory management is substantial. Businesses
              typically see a 15-25% reduction in carrying costs through better demand planning
              and replenishment automation. For a company carrying $1M in average inventory, a
              20% reduction in carrying costs (which typically run 20-30% of inventory value
              annually) saves $40,000-60,000 per year. Add in the revenue protected by avoiding
              stockouts, and inventory optimization alone can pay for a significant portion of
              the implementation.
            </p>

            <h2 className="text-headline text-apple-black mt-10 mb-4">
              Reporting and Decisions: From Hindsight to Insight
            </h2>

            <p className="text-body text-apple-gray leading-relaxed mb-4">
              In a spreadsheet-driven business, reporting is backward-looking by definition. Your
              financial reports reflect what happened last month — after someone spent days
              compiling the data. Strategic decisions are made on stale information because fresh
              information simply isn&apos;t available.
            </p>

            <p className="text-body text-apple-gray leading-relaxed mb-6">
              Business Central changes this fundamentally. With built-in financial reporting and
              native Power BI integration, your leadership team gets real-time dashboards showing
              cash position, revenue by product line, gross margin by customer, open AP aging, and
              inventory turnover — updated continuously, not monthly. The shift from
              &ldquo;reporting on what happened&rdquo; to &ldquo;seeing what&apos;s happening
              right now&rdquo; is the difference between reactive and proactive management. That
              has an ROI, even if it&apos;s harder to put an exact dollar figure on.
            </p>

            <h2 className="text-headline text-apple-black mt-10 mb-4">
              Typical Investment and Payback Period
            </h2>

            <p className="text-body text-apple-gray leading-relaxed mb-4">
              Let&apos;s talk real numbers. For a small business (under $10M revenue, 10-30 users),
              a Business Central implementation typically runs $30,000-80,000 for the initial
              project, including licensing, configuration, data migration, customizations, and
              training. Monthly subscription costs run $70 per user for the Essentials plan or
              $100 per user for Premium (which includes manufacturing and service management).
            </p>

            <p className="text-body text-apple-gray leading-relaxed mb-4">
              For a mid-size business ($10M-50M revenue, 30-100 users), implementations typically
              range from $80,000-200,000, reflecting greater complexity — more modules, more
              integrations, more data migration, and more customization requirements.
            </p>

            <p className="text-body text-apple-gray leading-relaxed mb-4">
              The payback period for most SMBs falls in the 12-18 month range. That factors in
              both the hard savings (labor reduction, error elimination, inventory optimization)
              and the productivity gains (faster close, faster order processing, better reporting).
              By year three, a well-implemented Business Central system typically delivers a
              200-400% ROI — meaning every dollar invested returns $2-4 in value.
            </p>

            <p className="text-body text-apple-gray leading-relaxed mb-6">
              These are not aspirational numbers. They&apos;re based on real implementation outcomes
              across hundreds of SMB deployments. Your specific ROI will depend on your starting
              point (the more manual your current processes, the higher the return), your industry,
              and how thoroughly you adopt the system.
            </p>

            <h2 className="text-headline text-apple-black mt-10 mb-4">
              The Hidden Costs of Not Upgrading
            </h2>

            <p className="text-body text-apple-gray leading-relaxed mb-4">
              The ROI calculation isn&apos;t complete without considering what happens if you don&apos;t
              invest. The costs of staying on inadequate systems are real, even if they don&apos;t
              show up as a line item on your P&L.
            </p>

            <p className="text-body text-apple-gray leading-relaxed mb-3">
              <strong className="text-apple-black">Opportunity cost.</strong> Every hour your controller spends
              on manual reconciliation is an hour they&apos;re not analyzing margins or identifying
              cost reduction opportunities. Every week your ops team spends managing inventory
              in spreadsheets is a week they&apos;re not optimizing your supply chain.
            </p>

            <p className="text-body text-apple-gray leading-relaxed mb-3">
              <strong className="text-apple-black">Employee turnover.</strong> Talented professionals don&apos;t
              stay at companies where they spend 60% of their time on manual data entry. They
              leave for organizations with better tools. Replacing a skilled finance or operations
              professional costs 50-200% of their annual salary when you factor in recruiting,
              onboarding, and lost productivity.
            </p>

            <p className="text-body text-apple-gray leading-relaxed mb-6">
              <strong className="text-apple-black">Competitive disadvantage.</strong> Your competitors who have
              invested in ERP are closing their books faster, processing orders more efficiently,
              and making decisions based on real-time data. They can scale without proportionally
              adding headcount. Over time, that operational gap compounds into a strategic
              disadvantage that gets harder to close.
            </p>

            <h2 className="text-headline text-apple-black mt-10 mb-4">
              The Bottom Line
            </h2>

            <p className="text-body text-apple-gray leading-relaxed mb-4">
              An ERP implementation is a real investment that requires real commitment — financial,
              organizational, and cultural. But the returns are equally real. Time savings measured
              in hundreds of hours per month. Error rates that drop by an order of magnitude.
              Inventory carrying costs that shrink by double-digit percentages. And a leadership
              team that finally has the visibility to make confident, timely decisions.
            </p>

            <p className="text-body-lg text-apple-black leading-relaxed mb-6 font-medium">
              The question isn&apos;t whether you can afford an ERP. It&apos;s whether you can
              afford to keep running without one — paying the hidden tax of manual processes,
              avoidable errors, and decisions made on data you can&apos;t fully trust.
            </p>
            <div className="mt-10 pt-8 border-t border-apple-gray-mid/20">
              <h3 className="text-title text-apple-black mb-4">Related Reading</h3>
              <ul className="space-y-2">
                <li><Link href="/services/business-central" className="text-brand-500 hover:text-brand-600 transition-colors">Learn more about our Business Central implementation services →</Link></li>
                <li><Link href="/blog/business-central-vs-quickbooks" className="text-brand-500 hover:text-brand-600 transition-colors">Business Central vs. QuickBooks: When It&apos;s Time to Upgrade →</Link></li>
                <li><Link href="/contact" className="text-brand-500 hover:text-brand-600 transition-colors">Get in touch for a custom ROI assessment →</Link></li>
              </ul>
            </div>
          </article>
        </div>
      </section>

      <CTABanner
        title="Want to understand the ROI for your specific business?"
        subtitle="We'll walk through the numbers with you — based on your actual operations, not generic benchmarks."
        buttonText="Get a Custom Assessment"
        buttonHref="/contact"
      />
    </>
  );
}
