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
              Operations
            </span>
            <span className="text-caption text-apple-gray">Mar 5, 2026</span>
            <span className="text-caption text-apple-gray">8 min read</span>
          </div>

          <h1
            className="text-display text-apple-black"
          >
            5 Signs Your Business Has{" "}
            <span className="text-gradient">Outgrown Spreadsheets</span>
          </h1>

          <p
            className="text-body-lg text-apple-gray mt-4"
          >
            Spreadsheets are where every business starts. But there&apos;s a point where they stop helping and start hurting. Here are the warning signs.
          </p>
        </div>
      </section>

      {/* Article Body */}
      <section className="pb-section">
        <div className="container-narrow">
          <article className="prose-article">
            <p className="text-body-lg text-apple-gray leading-relaxed mb-6">
              Every business runs on spreadsheets at some point. They&apos;re flexible, familiar, and
              free (or close to it). For a startup or a small team, a well-structured spreadsheet can
              manage inventory, track sales, handle budgeting, and even serve as a basic CRM.
            </p>

            <p className="text-body text-apple-gray leading-relaxed mb-6">
              But spreadsheets were never designed to run a business. They were designed to analyze
              data. And when you start using them as your operating system — as the source of truth
              for inventory counts, financial reporting, order fulfillment, and customer management —
              the cracks appear fast.
            </p>

            <p className="text-body text-apple-gray leading-relaxed mb-8">
              Here are five signs that your business has outgrown its spreadsheets, along with the
              real-world scenarios we see again and again with growing companies.
            </p>

            {/* Sign 1 */}
            <h2 className="text-headline text-apple-black mt-10 mb-4">
              1. Multiple Versions of the Truth
            </h2>

            <p className="text-body text-apple-gray leading-relaxed mb-4">
              &ldquo;Which spreadsheet has the latest numbers?&rdquo;
            </p>

            <p className="text-body text-apple-gray leading-relaxed mb-4">
              If you&apos;ve heard that question in a meeting, you already know this problem. Sales has
              a pipeline spreadsheet. Finance has a revenue tracking spreadsheet. Operations has an
              inventory spreadsheet. Marketing has a lead tracking spreadsheet. Each one was built
              by a different person, at a different time, with different assumptions.
            </p>

            <p className="text-body text-apple-gray leading-relaxed mb-4">
              Now imagine your CEO asks a simple question: &ldquo;How much revenue did we close last
              quarter?&rdquo; Sales says $1.2M. Finance says $1.05M. The difference? Sales counted
              signed contracts. Finance counted recognized revenue. Neither is wrong — but the lack
              of a shared data model means every conversation starts with a reconciliation exercise
              instead of an actual decision.
            </p>

            <p className="text-body text-apple-gray leading-relaxed mb-6">
              When departments can&apos;t agree on basic numbers because they&apos;re pulling from
              different files, you don&apos;t have a spreadsheet problem. You have a trust problem. And
              trust problems slow everything down.
            </p>

            {/* Sign 2 */}
            <h2 className="text-headline text-apple-black mt-10 mb-4">
              2. Manual Errors Are Costing Real Money
            </h2>

            <p className="text-body text-apple-gray leading-relaxed mb-4">
              A formula breaks. A row gets accidentally deleted. Someone copies a column but misses
              the last 15 rows. A VLOOKUP references the wrong tab. These are not hypothetical — they
              happen every single day in businesses that run critical processes through spreadsheets.
            </p>

            <p className="text-body text-apple-gray leading-relaxed mb-4">
              Here&apos;s a real scenario: a distribution company tracked pricing in a shared
              spreadsheet. An account manager updated pricing for one customer but accidentally
              overwrote the formula for another. For three weeks, invoices went out at the wrong
              price — to the tune of $40,000 in lost margin. Nobody caught it until the monthly
              review.
            </p>

            <p className="text-body text-apple-gray leading-relaxed mb-6">
              Research from the University of Hawaii found that 88% of spreadsheets contain errors.
              When your invoice amounts, inventory valuations, or payroll calculations flow through
              a spreadsheet, every one of those errors has a dollar sign attached to it.
            </p>

            {/* Sign 3 */}
            <h2 className="text-headline text-apple-black mt-10 mb-4">
              3. No Real-Time Visibility
            </h2>

            <p className="text-body text-apple-gray leading-relaxed mb-4">
              Your P&L is always two weeks stale. Your inventory count reflects last Friday&apos;s
              physical count, not what actually shipped yesterday. Your cash flow projection is based
              on numbers someone pulled from the bank portal last Thursday.
            </p>

            <p className="text-body text-apple-gray leading-relaxed mb-4">
              In a spreadsheet-driven business, every report is a snapshot of the past. By the time
              data is collected, entered, validated, and formatted into something presentable, the
              information is already old. You&apos;re making decisions today based on where your
              business was last week — or last month.
            </p>

            <p className="text-body text-apple-gray leading-relaxed mb-6">
              For a business doing $5M or $10M in revenue, that lag might be manageable. But as you
              grow, the gap between &ldquo;what we think is happening&rdquo; and &ldquo;what is
              actually happening&rdquo; becomes a real risk. A week-old inventory count means
              stockouts you don&apos;t see coming. A stale cash flow forecast means you&apos;re
              surprised by a shortfall that should have been predictable.
            </p>

            {/* Sign 4 */}
            <h2 className="text-headline text-apple-black mt-10 mb-4">
              4. Compliance and Audit Anxiety
            </h2>

            <p className="text-body text-apple-gray leading-relaxed mb-4">
              When your auditor asks &ldquo;who changed this number, when, and why?&rdquo; — can you
              answer? With a spreadsheet, the honest answer is usually &ldquo;we&apos;re not sure.&rdquo;
            </p>

            <p className="text-body text-apple-gray leading-relaxed mb-4">
              Spreadsheets don&apos;t provide audit trails. They don&apos;t enforce segregation of
              duties. They don&apos;t lock down historical periods. Anyone with access can change any
              cell at any time, and there&apos;s no reliable record of what was changed or why.
            </p>

            <p className="text-body text-apple-gray leading-relaxed mb-6">
              If you&apos;re pursuing SOC 2 certification, dealing with industry regulations (FDA,
              HIPAA, financial services compliance), or simply need to pass an annual financial audit
              without your controller losing sleep for two months — spreadsheets are a liability.
              Auditors want immutable logs, controlled access, and documented approval workflows.
              Spreadsheets can&apos;t deliver any of that.
            </p>

            {/* Sign 5 */}
            <h2 className="text-headline text-apple-black mt-10 mb-4">
              5. Your Team Spends More Time Managing Data Than Using It
            </h2>

            <p className="text-body text-apple-gray leading-relaxed mb-4">
              This is the one that hurts the most, because it&apos;s invisible on any balance sheet. Your
              operations manager spends Friday afternoons updating the inventory spreadsheet. Your
              finance team dedicates the first week of every month to reconciling data across
              systems. Your sales ops person spends 10 hours a week copying data from email into a
              tracking sheet.
            </p>

            <p className="text-body text-apple-gray leading-relaxed mb-4">
              These are smart, capable people. They were hired to analyze trends, optimize processes,
              and make strategic recommendations. Instead, they&apos;re doing data entry. They&apos;re
              formatting columns. They&apos;re hunting for discrepancies between two tabs that should
              match but don&apos;t.
            </p>

            <p className="text-body text-apple-gray leading-relaxed mb-8">
              When you add up the hours — across every person, every department, every week — the
              hidden cost of spreadsheet management is staggering. A company with 30 employees
              easily loses 200+ hours per month to manual data work that an ERP system would
              automate entirely.
            </p>

            {/* What the alternative looks like */}
            <h2 className="text-headline text-apple-black mt-10 mb-4">
              What the Alternative Looks Like
            </h2>

            <p className="text-body text-apple-gray leading-relaxed mb-4">
              The opposite of spreadsheet chaos isn&apos;t complexity — it&apos;s clarity. A modern ERP
              system like{" "}
              <Link href="/services/business-central" className="text-brand-500 hover:text-brand-600 font-medium">Business Central</Link>
              {" "}replaces the patchwork of disconnected files with a
              single, unified platform where every department works from the same data.
            </p>

            <p className="text-body text-apple-gray leading-relaxed mb-3">
              <strong className="text-apple-black">One source of truth.</strong> Sales, finance, operations, and
              warehouse all look at the same numbers. When an order ships, inventory updates
              instantly. When a payment is received, AR reflects it immediately. No reconciliation
              needed.
            </p>

            <p className="text-body text-apple-gray leading-relaxed mb-3">
              <strong className="text-apple-black">Real-time dashboards.</strong> Instead of waiting for someone to
              update a spreadsheet, you open a dashboard and see your cash position, open orders,
              inventory levels, and revenue — right now, not last week.
            </p>

            <p className="text-body text-apple-gray leading-relaxed mb-3">
              <strong className="text-apple-black">Automated workflows.</strong> Purchase orders route for approval
              automatically. Invoices generate from shipped orders without manual entry. Bank
              reconciliation takes minutes instead of hours.
            </p>

            <p className="text-body text-apple-gray leading-relaxed mb-6">
              <strong className="text-apple-black">Complete audit trails.</strong> Every change is logged — who
              made it, when, and what the previous value was. Period-end closing locks down
              historical data. Role-based permissions ensure the right people have the right access.
            </p>

            <p className="text-body-lg text-apple-black leading-relaxed mb-6 font-medium">
              Spreadsheets helped you build your business. But if they&apos;re now holding it back,
              it&apos;s time to have an honest conversation about what comes next. The transition
              doesn&apos;t have to be painful — and the payoff is measured in hours reclaimed,
              errors eliminated, and decisions made with confidence instead of guesswork.
            </p>
            <div className="mt-10 pt-8 border-t border-apple-gray-mid/20">
              <h3 className="text-title text-apple-black mb-4">Related Reading</h3>
              <ul className="space-y-2">
                <li><Link href="/services/business-central" className="text-brand-500 hover:text-brand-600 transition-colors">Learn more about our Business Central implementation services →</Link></li>
                <li><Link href="/blog/business-central-vs-quickbooks" className="text-brand-500 hover:text-brand-600 transition-colors">Business Central vs. QuickBooks: When It&apos;s Time to Upgrade →</Link></li>
                <li><Link href="/blog/roi-business-central" className="text-brand-500 hover:text-brand-600 transition-colors">The ROI of Business Central for Small Businesses →</Link></li>
              </ul>
            </div>
          </article>
        </div>
      </section>

      <CTABanner
        title="Ready to move beyond spreadsheets?"
        subtitle="We'll help you understand what an ERP transition looks like for your business."
        buttonText="Start the Conversation"
        buttonHref="/contact"
      />
    </>
  );
}
