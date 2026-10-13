// pages/index.js
export default function Home() {
  return (
    <div className="bg-white text-gray-800 font-sans">
      {/* HEADER / HERO */}
      <header className="bg-black text-white">
        <div className="max-w-6xl mx-auto px-4 py-6 flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <div className="w-9 h-9 rounded-full bg-green-500 flex items-center justify-center text-sm font-semibold">
              OMR
            </div>
            <div>
              <div className="text-lg font-semibold tracking-tight">OMR Precision Books</div>
              <div className="text-xs text-gray-300">Student-Led • South Africa-</div>
            </div>
          </div>
          <div className="hidden md:flex items-center space-x-6 text-sm">
            <a href="#how-it-works" className="hover:text-green-300">How It Works</a>
            <a href="#pricing" className="hover:text-green-300">Pricing</a>
            <a href="#faq" className="hover:text-green-300">FAQ</a>
            <a href="#contact" className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-md text-sm font-medium">
              Book a 15-Min Strategy Call
            </a>
          </div>
        </div>

        <section className="border-t border-gray-800">
          <div className="max-w-6xl mx-auto px-4 py-16 lg:py-24 grid gap-10 lg:grid-cols-2 items-center">
            <div>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight mb-4">
                Affordable Bookkeeping for South African Businesses
              </h1>
              <p className="text-lg text-gray-200 mb-6">Every transaction is prepared using structured bookkeeping processes designed for accuracy, consistency, and affordability.
                . 
                Dual-layer quality control at South African small-business-friendly rates for agencies, e‑commerce brands, and local service providers.
              </p>
              <div className="flex flex-col sm:flex-row sm:items-center sm:space-x-4 space-y-3 sm:space-y-0 mb-6">
                <a
                  href="#contact"
                  className="inline-flex items-center justify-center px-6 py-3 bg-green-500 hover:bg-green-600 text-white text-base font-semibold rounded-md shadow"
                >
                  Book a 15-Min Strategy Call
                </a>
                <p className="text-sm text-gray-300">
                  No obligation. We’ll review your current books and outline a clear, simple next step.
                </p>
              </div>
              <div className="flex flex-wrap items-center gap-3 text-xs sm:text-sm text-gray-300">
                <span className="px-3 py-1 rounded-full border border-gray-700 bg-white/5">
                  Sage • Xero • QuickBooks Online • Dext
                </span>
                <span className="px-3 py-1 rounded-full border border-gray-700 bg-white/5">
                  Quality-Checked Monthly Financial Reports
                </span>
                <span className="px-3 py-1 rounded-full border border-gray-700 bg-white/5">
                  Sage • Xero • QuickBooks Online • Dext
                </span>
              </div>
            </div>
            <div className="bg-white/5 border border-gray-700 rounded-xl p-6 sm:p-8 space-y-6">
              <h2 className="text-xl font-semibold mb-2">
                Academic rigor. Firm‑level oversight. Local pricing in Rands.
              </h2>
              <ul className="space-y-3 text-sm text-gray-100">
                <li className="flex items-start space-x-2">
                  <span className="mt-1 w-2 h-2 rounded-full bg-green-400" />
                  <span>
                    Daily feeds and reconciliations handled by carefully selected final-year accounting students trained on IFRS for SMEs and South African tax considerations.
                  </span>
                </li>
                <li className="flex items-start space-x-2">
                  <span className="mt-1 w-2 h-2 rounded-full bg-green-400" />
                  <span>
                    Every file undergoes a structured quality review before it reaches you or your tax practitioner.
                  </span>
                </li>
                <li className="flex items-start space-x-2">
                  <span className="mt-1 w-2 h-2 rounded-full bg-green-400" />
                  <span>
                    Clear monthly summaries so you know your cash, profit, VAT position, and runway in minutes—not hours.
                  </span>
                </li>
              </ul>
              <div className="text-xs text-gray-300">
                Based in South Africa and focused on local compliance, while following international best practices in bookkeeping.
              </div>
            </div>
          </div>
        </section>
      </header>

      {/* DUAL-LAYER QUALITY MODEL */}
      <section id="how-it-works" className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center mb-10">
            <h2 className="text-3xl font-semibold text-gray-900 mb-3">
              Structured Processes. Consistent Results.
            </h2>
            <p className="text-gray-600">
              Your file is never left on autopilot. Students perform the work using standardized processes, and all deliverables undergo a quality review before delivery.
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            {/* Step 1 */}
            <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm">
              <div className="flex items-center justify-between mb-3">
                <h3 className="text-lg font-semibold text-gray-900">Step 1: Student Preparation</h3>
                <span className="text-xs font-semibold px-2 py-1 rounded-full bg-green-50 text-green-700 border border-green-100">
                  Execution
                </span>
              </div>
              <p className="text-sm text-gray-700 mb-3">
                Top final-year accounting students handle the heavy lifting:
              </p>
              <ul className="text-sm text-gray-700 space-y-1.5">
                <li>• Importing and coding bank and credit card feeds</li>
                <li>• Vendor/customer matching and cleanup</li>
                <li>• Reconciliations performed using accepted bookkeeping and financial reporting practices</li>
                <li>• Support docs attached via Dext or your chosen workflow</li>
              </ul>
            </div>
            {/* Step 2 */}
            <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm">
              <div className="flex items-center justify-between mb-3">
                <h3 className="text-lg font-semibold text-gray-900">Step 2: Quality Review </h3>
                <span className="text-xs font-semibold px-2 py-1 rounded-full bg-gray-100 text-gray-800 border border-gray-200">
                  Oversight
                </span>
              </div>
              <p className="text-sm text-gray-700 mb-3">
                Every file undergoes a detailed monthly quality review:
              </p>
              <ul className="text-sm text-gray-700 space-y-1.5">
                <li>• Spot-checks on high‑value and unusual transactions</li>
                <li>• Balance sheet and P&amp;L reviewed down to the cent</li>
                <li>• VAT-sensitive items flagged and categorised correctly</li>
                <li>• Reports finalised only after variances and questions are resolved</li>
              </ul>
            </div>
            {/* Step 3 */}
            <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm">
              <div className="flex items-center justify-between mb-3">
                <h3 className="text-lg font-semibold text-gray-900">Step 3: Monthly Delivery &amp; Insights</h3>
                <span className="text-xs font-semibold px-2 py-1 rounded-full bg-gray-100 text-gray-800 border border-gray-200">
                  Delivery
                </span>
              </div>
              <p className="text-sm text-gray-700 mb-3">
                You receive clean, decision-ready financials:
              </p>
              <ul className="text-sm text-gray-700 space-y-1.5">
                <li>• Accurate balance sheet and income statement</li>
                <li>• Basic VAT and tax-compliance sanity checks each month</li>
                <li>• Simple management summary in plain English</li>
                <li>• Optional call to walk through your numbers and trends</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* SERVICES & PRICING (RAND) */}
      <section id="pricing" className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center mb-10">
            <h2 className="text-3xl font-semibold text-gray-900 mb-3">
              Clear, South African Small-Business Pricing
            </h2>
            <p className="text-gray-600">
              Local pricing in Rands, designed for South African businesses that want firm-level accuracy without big-firm retainers.
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            {/* Starter */}
            <div className="border border-gray-200 rounded-2xl p-6 shadow-sm flex flex-col">
              <h3 className="text-xl font-semibold text-gray-900 mb-1">Starter</h3>
              <p className="text-sm text-gray-500 mb-4">For early-stage businesses &amp; lean teams</p>
              <div className="mb-4">
                <div className="text-3xl font-bold text-gray-900">
                  R2,500<span className="text-base font-medium text-gray-500">/month</span>
                </div>
                <div className="text-xs text-gray-500 mt-1">From price • Month-to-month • Excl. VAT if applicable</div>
              </div>
              <ul className="text-sm text-gray-700 space-y-2 mb-6 flex-1">
                <li>• Up to <strong>R150k</strong> monthly expenses</li>
                <li>• Monthly bank &amp; credit card reconciliations</li>
                <li>• Categorisation of income &amp; expenses</li>
                <li>• Monthly P&amp;L &amp; balance sheet, quality-checked</li>
                <li>• Email support for simple questions</li>
              </ul>
              <a
                href="#contact"
                className="block text-center w-full py-2.5 rounded-md bg-black text-white text-sm font-semibold hover:bg-gray-900"
              >
                Start with Starter
              </a>
            </div>

            {/* Growth */}
            <div className="border-2 border-green-500 rounded-2xl p-6 shadow-md relative bg-green-50 flex flex-col">
              <div className="absolute -top-3 right-4 text-xs font-semibold px-2 py-1 rounded-full bg-green-500 text-white shadow">
                Most Popular
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-1">Growth</h3>
              <p className="text-sm text-gray-600 mb-4">For established, growing small businesses</p>
              <div className="mb-4">
                <div className="text-3xl font-bold text-gray-900">
                  R4,500<span className="text-base font-medium text-gray-500">/month</span>
                </div>
                <div className="text-xs text-gray-500 mt-1">From price • Month-to-month • Excl. VAT if applicable</div>
              </div>
              <ul className="text-sm text-gray-800 space-y-2 mb-6 flex-1">
                <li>• Up to <strong>R500k</strong> monthly expenses</li>
                <li>• Everything in Starter, plus:</li>
                <li>• Accounts payable (AP) and receivable (AR) tracking</li>
                <li>• Basic VAT tracking &amp; filing support</li>
                <li>• Priority email support &amp; optional monthly check-in</li>
              </ul>
              <a
                href="#contact"
                className="block text-center w-full py-2.5 rounded-md bg-green-600 text-white text-sm font-semibold hover:bg-green-700"
              >
                Choose Growth
              </a>
            </div>

            {/* Custom */}
            <div className="border border-gray-200 rounded-2xl p-6 shadow-sm flex flex-col">
              <h3 className="text-xl font-semibold text-gray-900 mb-1">Custom &amp; Catch-Up</h3>
              <p className="text-sm text-gray-500 mb-4">For cleanup, migrations, and complex files</p>
              <div className="mb-4">
                <div className="text-2xl font-bold text-gray-900">
                  From R1,800<span className="text-base font-medium text-gray-500">/month of cleanup</span>
                </div>
                <div className="text-xs text-gray-500 mt-1">One-time or short-term projects • Excl. VAT if applicable</div>
              </div>
              <ul className="text-sm text-gray-700 space-y-2 mb-6 flex-1">
                <li>• Multi-month or multi-year historical cleanup</li>
                <li>• Conversions into Xero or QuickBooks Online</li>
                <li>• Diagnostics on messy or incomplete books</li>
                <li>• Custom reporting &amp; advisory add-ons</li>
                <li>• Scoped and quoted before any work begins</li>
              </ul>
              <a
                href="#contact"
                className="block text-center w-full py-2.5 rounded-md bg-black text-white text-sm font-semibold hover:bg-gray-900"
              >
                Request a Custom Quote
              </a>
            </div>
          </div>
          <p className="mt-4 text-xs text-gray-500 text-center">
            Final pricing depends on transaction volume, complexity, and integrations. All pricing is in South African Rand (R). We’ll confirm everything on your strategy call before you commit.
          </p>
        </div>
      </section>

      {/* TRUST & SECURITY */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-semibold text-gray-900 mb-3">
            Bank-Level Security. Professional Confidentiality.
          </h2>
          <p className="text-gray-600 mb-6">
            Your financial data is sensitive. We treat it like it’s our own.
          </p>
          <div className="grid gap-6 md:grid-cols-3 text-left md:text-center">
            <div>
              <h3 className="text-sm font-semibold text-gray-900 mb-1">256-Bit Encryption</h3>
              <p className="text-sm text-gray-600">
                Data is transmitted over secure, encrypted connections with the same standards used by major financial institutions.
              </p>
            </div>
            <div>
              <h3 className="text-sm font-semibold text-gray-900 mb-1">Role-Based Access</h3>
              <p className="text-sm text-gray-600">
                Students only access the information required to perform their work. Strict access controls and review procedures help protect client data.
              </p>
            </div>
            <div>
              <h3 className="text-sm font-semibold text-gray-900 mb-1">Strict NDAs &amp; Protocols</h3>
              <p className="text-sm text-gray-600">
                Every team member signs a non-disclosure agreement. We follow documented procedures for handling, storing, and accessing your data.
              </p>
            </div>
          </div>
          <p className="mt-6 text-xs texWe work within Sage, Xero, QuickBooks Online, and Dextt-gray-500">
            —platforms engineered with bank-grade security and compliance in mind.
          </p>
        </div>
      </section>

      {/* FOUNDER / SUPERVISOR BIO */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4">
          <div className="grid gap-8 md:grid-cols-[minmax(0,1.2fr)_minmax(0,1fr)] items-center">
            <div>
              <h2 className="text-3xl font-semibold text-gray-900 mb-3">
                Student-Led Bookkeeping for South African Businesses
              </h2>
              <p className="text-gray-700 mb-4 text-sm sm:text-base">
                OMR Precision Books is built on a simple belief: strong accounting fundamentals, disciplined processes, and attention to detail create reliable bookkeeping.
              </p>
              <p className="text-gray-700 mb-4 text-sm sm:text-base">
               Our processes are designed around the needs of South African small businesses, agencies, and growing companies, 
                and e‑commerce clients. They personally design the workflows students use, review each month-end close, 
                and are ultimately responsible for the accuracy of your numbers.
              </p>
              <p className="text-gray-700 text-sm sm:text-base">
                You’re not simply hiring students. You’re partnering with a bookkeeping service that combines accounting knowledge, structured workflows, and quality controls 
                to deliver reliable financial records at an affordable price.
              </p>
            </div>
            <div className="bg-gray-50 border border-gray-200 rounded-xl p-5 text-sm text-gray-700">
              <h3 className="text-base font-semibold text-gray-900 mb-2">Why a student-led model works</h3>
              <ul className="space-y-2">
                <li>• Students are selected based on academic performance and practical aptitude.</li>
                <li>• They work from structured checklists, documented procedures, and standardized templates to ensure consistency.</li>
                <li>• Their work is not final until it’s reviewed, challenged, and approved by a qualified supervisor.</li>
                <li>• You benefit from lower costs without sacrificing the accuracy your business and tax practitioner depend on.</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="py-16 bg-gray-50">
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-3xl font-semibold text-gray-900 mb-6 text-center">
            Frequently Asked Questions
          </h2>
          <div className="space-y-3">
            <details className="bg-white border border-gray-200 rounded-lg p-4">
              <summary className="cursor-pointer text-sm font-semibold text-gray-900">
                How do I know my books will be accurate if students are working on them?
              </summary>
              <p className="mt-2 text-sm text-gray-700">
                Students at OMR Precision Books are not working alone or unsupervised. 
                They handle standardized, process-driven tasks such as coding transactions and performing reconciliations using checklists built on IFRS/IFRS for SMEs principles.
              </p>
              <p className="mt-2 text-sm text-gray-700">
                Each month, unusual balances, unreconciled items, and significant transactions are reviewed as part of our quality-control process, 
                and reports are only finalized once discrepancies have been addressed. Our structured review process helps maintain accuracy and consistency.
              </p>
            </details>

            <details className="bg-white border border-gray-200 rounded-lg p-4">
              <summary className="cursor-pointer text-sm font-semibold text-gray-900">
                What accounting software do you work with?
              </summary>
              <p className="mt-2 text-sm text-gray-700">
                We support Sage, Xero, and QuickBooks Online for bookkeeping, along with Dext for document capture and expense management.
              </p>
              <p className="mt-2 text-sm text-gray-700">
                If you're using another accounting system, we can often migrate your data into Sage, Xero, or QuickBooks Online.
              </p>
            </details>

            <details className="bg-white border border-gray-200 rounded-lg p-4">
              <summary className="cursor-pointer text-sm font-semibold text-gray-900">
                How do I send my receipts and documents?
              </summary>
              <p className="mt-2 text-sm text-gray-700">
                Most South African clients either forward receipts directly into Dext or upload them to a secure shared folder. 
                We’ll help you choose the simplest method for your team during onboarding.
              </p>
              <p className="mt-2 text-sm text-gray-700">
                Once set up, you can drop receipts, invoices, and statements into one place and our team will take care of the rest.
              </p>
            </details>

            <details className="bg-white border border-gray-200 rounded-lg p-4">
              <summary className="cursor-pointer text-sm font-semibold text-gray-900">
                What if I'm several months behind on my bookkeeping?
              </summary>
              <p className="mt-2 text-sm text-gray-700">
                That’s common—and exactly what our Custom &amp; Catch‑Up tier is designed for. We’ll first run a quick diagnostic on your existing books 
                (or lack thereof), estimate how many months and how much complexity is involved, and then give you a clear, fixed quote or a “from” range before we start.
              </p>
              <p className="mt-2 text-sm text-gray-700">
                Once you’re caught up and clean, you can move onto a monthly Starter or Growth plan to keep everything accurate and current going forward.
              </p>
            </details>
          </div>
        </div>
      </section>

      {/* CONTACT / CTA FOOTER */}
      <footer id="contact" className="bg-black text-white py-16">
        <div className="max-w-4xl mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center mb-8">
            <h2 className="text-3xl font-semibold mb-3">
              Book Your 15-Min Strategy Call (South Africa)
            </h2>
            <p className="text-sm text-gray-300">
              Tell us a bit about your business, and your email client will open with your details pre-filled so we can arrange a quick call.
            </p>
          </div>

          {/* MAILTO FORM */}
          <form
            className="max-w-xl mx-auto bg-gray-900 border border-gray-800 rounded-xl p-6 space-y-4"
            action="mailto:you@omrprecisionbooks@gmail.com"
            method="POST"
            encType="text/plain"
          >
            {/* Replace the email above with your real address */}

            <div className="grid gap-4 md:grid-cols-2">
              <div>
                <label className="block text-xs font-semibold text-gray-300 mb-1" htmlFor="name">
                  Name
                </label>
                <input
                  id="name"
                  name="Name"
                  type="text"
                  required
                  className="w-full px-3 py-2 rounded-md bg-black border border-gray-700 text-sm text-white placeholder-gray-500 focus:outline-none focus:border-green-500"
                />
              </div>
              <div>
                <label className="block text-xs font-semibold text-gray-300 mb-1" htmlFor="businessName">
                  Business Name
                </label>
                <input
                  id="businessName"
                  name="Business Name"
                  type="text"
                  required
                  className="w-full px-3 py-2 rounded-md bg-black border border-gray-700 text-sm text-white placeholder-gray-500 focus:outline-none focus:border-green-500"
                />
              </div>
            </div>

            <div className="grid gap-4 md:grid-cols-2">
              <div>
                <label className="block text-xs font-semibold text-gray-300 mb-1" htmlFor="monthlyExpenseRange">
                  Monthly Expense Range
                </label>
                <select
                  id="monthlyExpenseRange"
                  name="Monthly Expense Range"
                  required
                  className="w-full px-3 py-2 rounded-md bg-black border border-gray-700 text-sm text-white focus:outline-none focus:border-green-500"
                >
                  <option value="">Select a range</option>
                  <option value="0-150k">Up to R150k / month</option>
                  <option value="150k-500k">R150k – R500k / month</option>
                  <option value="500k-1m">R500k – R1m / month</option>
                  <option value="1m-plus">R1m+ / month</option>
                </select>
              </div>
              <div>
                <label className="block text-xs font-semibold text-gray-300 mb-1" htmlFor="softwareUsed">
                  Software Used
                </label>
                <input
                  id="softwareUsed"
                  name="Software Used"
                  type="text"
                  placeholder="e.g. Sage, Xero, QuickBooks, Dext"
                  className="w-full px-3 py-2 rounded-md bg-black border border-gray-700 text-sm text-white placeholder-gray-500 focus:outline-none focus:border-green-500"
                />
              </div>
            </div>

            <div>
              <label className="block text-xs font-semibold text-gray-300 mb-1" htmlFor="email">
                Email
              </label>
              <input
                id="email"
                name="Email"
                type="email"
                required
                className="w-full px-3 py-2 rounded-md bg-black border border-gray-700 text-sm text-white placeholder-gray-500 focus:outline-none focus:border-green-500"
              />
            </div>

            <div>
              <label className="block text-xs font-semibold text-gray-300 mb-1" htmlFor="notes">
                Anything else we should know?
              </label>
              <textarea
                id="notes"
                name="Notes"
                rows={3}
                placeholder="How far behind are your books? What type of business do you run?"
                className="w-full px-3 py-2 rounded-md bg-black border border-gray-700 text-sm text-white placeholder-gray-500 focus:outline-none focus:border-green-500"
              />
            </div>

            <button
              type="submit"
              className="w-full mt-2 py-2.5 rounded-md bg-green-500 hover:bg-green-600 text-sm font-semibold text-white"
            >
              Submit &amp; Open Email to Request Strategy Call
            </button>
              <p className="mt-3 text-xs text-gray-400 text-center">
            
              Contact us at{" "}
            <a

              href="mailto:omrprecisionbooks@gmail.com"
              className="text-green-400"
            >
                omrprecisionbooks@gmail.com
                </a>
              </p>
              <p className="mt-2 text-xs text-gray-400 text-center">
              We don't sell or share your information.
            </p>

            </form>

          <div className="mt-10 pt-6 border-t border-gray-800 text-xs text-gray-500 flex flex-col sm:flex-row items-center justify-between space-y-2 sm:space-y-0">
            <span>&copy; 2026 OMR Precision Books. Based in South Africa. All rights reserved.</span>
            <span>-Student-Led • Sage • Xero • QuickBooks Online Specialists</span>
          </div>
        </div>
      </footer>
    </div>
  );
}
