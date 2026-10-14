// app/page.tsx
//
// Items marked VERIFY must be confirmed as true before this goes live.
// Do not publish a claim you cannot back up.

const CALENDLY_URL =
  "https://calendly.com/omrprecisionbooks/free-15-minute-bookkeeping-strategy-call";
// TODO: switch to a domain email (e.g. hello@yourdomain.co.za) once you have one.
const CONTACT_EMAIL = "omrprecisionbooks@gmail.com";

const focusDark =
  "focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-400";
const focusLight =
  "focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-700";

function CallButton({
  children,
  tone,
  className = "",
}: {
  children: React.ReactNode;
  tone: "onDark" | "onLight";
  className?: string;
}) {
  const styles =
    tone === "onDark"
      ? `bg-green-500 text-black hover:bg-green-400 ${focusDark}`
      : `bg-black text-white hover:bg-gray-800 ${focusLight}`;
  return (
    <a
      href={CALENDLY_URL}
      target="_blank"
      rel="noopener noreferrer"
      className={`inline-flex items-center justify-center rounded-md px-6 py-3 text-base font-semibold ${styles} ${className}`}
    >
      {children}
    </a>
  );
}

const goodFit = [
  "Run a small business, such as a service provider, online store or agency, with a manageable number of monthly transactions",
  "Can send bank statements and supporting documents by a set date each month",
  "Want accurate records and clear monthly reports",
];

const notFit = [
  "Need tax returns, SARS submissions, tax advice, payroll, audit or assurance work",
  "Need same-day responses or daily bookkeeping",
  "Have a very large or complex set of records",
];

const steps = [
  {
    title: "Intro call",
    body: "We talk through your business, your records and what you need, and decide together whether we’re a good fit.",
  },
  {
    title: "Quote and agreement",
    body: "You receive a written scope, price and agreement before any work starts.",
  },
  {
    title: "Onboarding",
    body: "We set up secure document sharing, software access and a monthly document deadline.",
  },
  {
    // VERIFY: confirm you can reliably meet a 10 business day turnaround
    // in term time and exam periods.
    title: "Monthly cycle",
    body: "You send your documents by the agreed date. I complete the books and send your reports within 10 business days of receiving complete documents.",
  },
];

const included = [
  "Capturing and categorising bank and card transactions",
  "Bank and card reconciliations",
  "Matching the supporting documents you supply",
  "Monthly management reports",
  "Catch-up bookkeeping, quoted separately",
];

const notOffered = [
  "Tax returns and SARS submissions",
  "Tax advice",
  "Payroll (for now)",
  "Audit, review or independent assurance",
  "Annual financial statements and CIPC filings",
];

type Plan = {
  name: string;
  tagline: string;
  price: string;
  unit?: string;
  meta: string;
  features: string[];
  cta: string;
};

// Prices are provisional. Rebuild them from real time-per-client data
// (see the pricing work in Phase 5) before relying on them.
const plans: Plan[] = [
  {
    name: "Essential",
    tagline: "For sole proprietors and small companies with simple records",
    price: "R2,500",
    unit: "/month",
    meta: "Month-to-month",
    features: [
      "Up to 100 bank and card transactions a month",
      "1 to 2 bank or card accounts",
      "Capturing, categorising and reconciling",
      "Supporting documents matched where supplied",
      "Monthly profit and loss, balance sheet and list of open queries",
      "Email support, replies within 1 to 2 business days",
    ],
    cta: "Discuss Essential",
  },
  {
    name: "Standard",
    tagline: "For small businesses with more activity",
    price: "R3,900",
    unit: "/month",
    meta: "Month-to-month",
    features: [
      "Up to 250 bank and card transactions a month",
      "Up to 3 bank or card accounts",
      "Everything in Essential",
      "Debtors and creditors listings",
      "A 20-minute monthly review call",
    ],
    cta: "Discuss Standard",
  },
  {
    name: "Catch-up and clean-up",
    tagline: "For businesses that have fallen behind on their books",
    price: "Quoted",
    meta: "After I’ve looked at your records",
    features: [
      "A review of your records before any quote is given",
      "A fixed quote based on estimated hours",
      "Best suited to a few months of backlog",
      "Larger or more complex backlogs may be referred to another professional",
      "Afterwards you can move onto a monthly plan",
    ],
    cta: "Ask about catch-up",
  },
];

const faqs: { q: string; a: string[] }[] = [
  {
    q: "Are you a qualified accountant?",
    a: [
      "No. I’m a third-year accounting student at the University of Cape Town and I don’t hold a professional accounting designation. I provide bookkeeping, not tax, audit or assurance services. If your situation needs a registered professional, I’ll tell you.",
    ],
  },
  {
    q: "Why choose a student-run business?",
    a: [
      "You get one person who personally handles your books, a defined scope and transparent pricing. In return, you’re working with someone early in their career. That’s why I limit how many clients I take on and say plainly what I do and don’t do.",
      "If you need a firm with a team and professional sign-off, I’ll tell you so.",
    ],
  },
  {
    q: "Who does the work?",
    a: [
      "I do, personally. If I bring other students on as the business grows, I’ll tell you before anyone else works on your records.",
    ],
  },
  {
    q: "What software do you use?",
    // VERIFY: only keep the Xero / QuickBooks sentence if you are genuinely
    // comfortable doing client work in those systems.
    a: [
      "Primarily Sage. I can discuss working in Xero or QuickBooks Online case by case, but only where I’m confident I can do the work properly.",
      "You pay for your own software subscription, and I work in your account with the access you give me.",
    ],
  },
  {
    q: "Do you do VAT or tax returns?",
    // VERIFY: confirm the tax-practitioner boundary before publishing (Phase 3).
    a: [
      "No. I don’t prepare or submit VAT or tax returns, and I don’t give tax advice. If you’re VAT-registered, I can keep your VAT records tidy in the ledger so that you or a registered tax practitioner can work from them.",
      "If you need returns or advice, you’ll need a registered tax practitioner.",
    ],
  },
  {
    q: "Do you do payroll?",
    a: ["Not currently."],
  },
  {
    q: "How do I send my documents?",
    a: [
      "Through a secure shared folder that we set up during onboarding. You send what’s needed by the agreed date each month.",
    ],
  },
  {
    q: "What if I’m months behind on my bookkeeping?",
    a: [
      "That’s common. I’ll start with a look at your records, estimate the time involved, and give you a quote before any work begins. Once you’re caught up, you can move onto a monthly plan.",
    ],
  },
  {
    q: "What if you make a mistake?",
    a: [
      "I’ll tell you, correct it, and explain what happened and what I’ve changed to prevent it happening again.",
    ],
  },
  {
    q: "How quickly do you respond?",
    // VERIFY: only promise what you can keep during exams.
    a: [
      "Within 1 to 2 business days. During my exam periods this may take a little longer, and I’ll tell you in advance when that applies.",
    ],
  },
  {
    q: "Can I cancel?",
    // VERIFY: align with your engagement agreement.
    a: [
      "Yes. Plans are month-to-month, and I ask for 30 days’ written notice. The details will be in your engagement agreement.",
    ],
  },
];

export default function Home() {
  // Hard-coded on purpose: with Cache Components enabled in next.config.ts,
  // calling new Date() in a Server Component can fail the build.
  // Update this each January.
  const year = 2026;

  return (
    <div className="bg-white font-sans text-gray-800">
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-50 focus:rounded-md focus:bg-white focus:px-4 focus:py-2 focus:text-black"
      >
        Skip to content
      </a>

      {/* HEADER */}
      <header className="bg-black text-white">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-5">
          <div className="flex items-center space-x-2">
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-green-500 text-xs font-bold tracking-tight text-black">
              OMR
            </div>
            <div>
              <div className="text-lg font-semibold tracking-tight">
                OMR Precision Books
              </div>
              <div className="text-xs text-gray-300">
                Founder-operated, South Africa
              </div>
            </div>
          </div>
          <nav
            aria-label="Main"
            className="flex items-center space-x-6 text-sm"
          >
            <a
              href="#how-it-works"
              className={`hidden hover:text-green-300 md:inline ${focusDark}`}
            >
              How it works
            </a>
            <a
              href="#pricing"
              className={`hidden hover:text-green-300 md:inline ${focusDark}`}
            >
              Pricing
            </a>
            <a
              href="#about"
              className={`hidden hover:text-green-300 md:inline ${focusDark}`}
            >
              About
            </a>
            <a
              href="#faq"
              className={`hidden hover:text-green-300 md:inline ${focusDark}`}
            >
              FAQ
            </a>
            <a
              href={CALENDLY_URL}
              target="_blank"
              rel="noopener noreferrer"
              className={`rounded-md bg-green-500 px-4 py-2 font-semibold text-black hover:bg-green-400 ${focusDark}`}
            >
              Book a call
            </a>
          </nav>
        </div>
      </header>

      <main id="main">
        {/* HERO */}
        <section className="bg-black text-white">
          <div className="mx-auto grid max-w-6xl items-center gap-10 border-t border-gray-800 px-4 py-16 lg:grid-cols-2 lg:py-24">
            <div>
              <h1 className="mb-4 text-balance text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
                Clear, organised monthly bookkeeping for South African small
                businesses
              </h1>
              <p className="mb-6 max-w-xl text-lg text-gray-200">
                Run personally by Zuhayr Omar, a UCT accounting student. Defined
                scope, transparent pricing, and one person who knows your books.
              </p>
              <div className="mb-3 flex flex-col space-y-3 sm:flex-row sm:items-center sm:space-x-4 sm:space-y-0">
                <CallButton
                  tone="onDark"
                  className="text-center sm:shrink-0 sm:whitespace-nowrap"
                >
                  Book a free 15-minute intro call
                </CallButton>
                <p className="text-sm text-gray-300">
                  A short call to see whether we’re a good fit. No obligation.
                </p>
              </div>
              {/* VERIFY: keep this line true. Remove it when you are full. */}
              <p className="mb-6 text-sm text-gray-300">
                Currently taking on a small number of new clients.
              </p>
              <ul className="flex flex-wrap items-center gap-3 text-xs text-gray-300 sm:text-sm">
                <li className="rounded-full border border-gray-700 bg-white/5 px-3 py-1">
                  Works in Sage; Xero and QuickBooks Online by arrangement
                </li>
                <li className="rounded-full border border-gray-700 bg-white/5 px-3 py-1">
                  Monthly management reports
                </li>
                <li className="rounded-full border border-gray-700 bg-white/5 px-3 py-1">
                  Founder-operated
                </li>
              </ul>
            </div>

            <div className="space-y-5 rounded-xl border border-gray-700 bg-white/5 p-6 sm:p-8">
              <h2 className="text-xl font-semibold">
                What you receive each month
              </h2>
              <ul className="space-y-3 text-sm text-gray-100">
                {[
                  "Bank and card transactions captured and categorised",
                  "Bank accounts reconciled to your statements",
                  "Profit and loss, balance sheet and a list of open queries",
                  "A short plain-English note on anything unusual",
                ].map((item) => (
                  <li key={item} className="flex items-start space-x-2">
                    <span
                      aria-hidden="true"
                      className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-green-400"
                    />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <p className="text-xs text-gray-300">
                These are management reports. They are not audited or reviewed
                financial statements.
              </p>
            </div>
          </div>
        </section>

        {/* FIT */}
        <section className="bg-gray-50 py-16">
          <div className="mx-auto max-w-5xl px-4">
            <h2 className="mb-8 text-center text-3xl font-semibold text-gray-900">
              Is this a good fit?
            </h2>
            <div className="grid gap-6 md:grid-cols-2">
              <div className="rounded-xl border border-gray-200 bg-white p-6">
                <h3 className="mb-3 text-lg font-semibold text-gray-900">
                  This works well if you
                </h3>
                <ul className="space-y-2 text-sm text-gray-700">
                  {goodFit.map((item) => (
                    <li key={item}>• {item}</li>
                  ))}
                </ul>
              </div>
              <div className="rounded-xl border border-gray-200 bg-white p-6">
                <h3 className="mb-3 text-lg font-semibold text-gray-900">
                  This is probably not for you if you
                </h3>
                <ul className="space-y-2 text-sm text-gray-700">
                  {notFit.map((item) => (
                    <li key={item}>• {item}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* HOW IT WORKS */}
        <section id="how-it-works" className="bg-white py-16">
          <div className="mx-auto max-w-6xl px-4">
            <div className="mx-auto mb-10 max-w-2xl text-center">
              <h2 className="mb-3 text-3xl font-semibold text-gray-900">
                How it works
              </h2>
              <p className="text-gray-600">
                A simple process with a written scope, so you always know what
                happens next.
              </p>
            </div>
            <ol className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
              {steps.map((step, i) => (
                <li
                  key={step.title}
                  className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm"
                >
                  <h3 className="mb-2 text-lg font-semibold text-gray-900">
                    {i + 1}. {step.title}
                  </h3>
                  <p className="text-sm text-gray-700">{step.body}</p>
                </li>
              ))}
            </ol>
            {/* VERIFY: only publish this once you actually use a written
                review checklist each month. */}
            <p className="mx-auto mt-8 max-w-2xl text-center text-sm text-gray-600">
              Each month’s work is checked against a written checklist before it
              reaches you: reconciliations agree to your bank statements,
              unusual and duplicate items are queried, and reports are reviewed
              for reasonableness. This is my own review. It is not an audit or
              an independent review.
            </p>
          </div>
        </section>

        {/* SCOPE */}
        <section className="bg-gray-50 py-16">
          <div className="mx-auto max-w-5xl px-4">
            <h2 className="mb-8 text-center text-3xl font-semibold text-gray-900">
              What’s included and what isn’t
            </h2>
            <div className="grid gap-6 md:grid-cols-2">
              <div className="rounded-xl border border-gray-200 bg-white p-6">
                <h3 className="mb-3 text-lg font-semibold text-gray-900">
                  Included
                </h3>
                <ul className="space-y-2 text-sm text-gray-700">
                  {included.map((item) => (
                    <li key={item}>• {item}</li>
                  ))}
                </ul>
              </div>
              <div className="rounded-xl border border-gray-200 bg-white p-6">
                <h3 className="mb-3 text-lg font-semibold text-gray-900">
                  Not offered
                </h3>
                <ul className="space-y-2 text-sm text-gray-700">
                  {notOffered.map((item) => (
                    <li key={item}>• {item}</li>
                  ))}
                </ul>
              </div>
            </div>
            <p className="mt-6 text-center text-sm text-gray-600">
              If you need something outside this scope, I’ll tell you and
              suggest the type of professional to speak to.
            </p>
          </div>
        </section>

        {/* PRICING */}
        <section id="pricing" className="bg-white py-16">
          <div className="mx-auto max-w-6xl px-4">
            <div className="mx-auto mb-10 max-w-2xl text-center">
              <h2 className="mb-3 text-3xl font-semibold text-gray-900">
                Clear pricing in Rands
              </h2>
              <p className="text-gray-600">
                Each plan has set limits, so you know what you’re paying for and
                I know what I can deliver well.
              </p>
            </div>
            <div className="grid gap-6 md:grid-cols-3">
              {plans.map((plan) => (
                <div
                  key={plan.name}
                  className="flex flex-col rounded-2xl border border-gray-200 p-6 shadow-sm"
                >
                  <h3 className="mb-1 text-xl font-semibold text-gray-900">
                    {plan.name}
                  </h3>
                  <p className="mb-4 text-sm text-gray-600">{plan.tagline}</p>
                  <div className="mb-4">
                    <div className="text-3xl font-bold text-gray-900">
                      {plan.price}
                      {plan.unit && (
                        <span className="text-base font-medium text-gray-600">
                          {plan.unit}
                        </span>
                      )}
                    </div>
                    <div className="mt-1 text-xs text-gray-600">{plan.meta}</div>
                  </div>
                  <ul className="mb-6 flex-1 space-y-2 text-sm text-gray-700">
                    {plan.features.map((f) => (
                      <li key={f}>• {f}</li>
                    ))}
                  </ul>
                  <CallButton tone="onLight" className="w-full py-2.5 text-sm">
                    {plan.cta}
                  </CallButton>
                </div>
              ))}
            </div>
            {/* TODO: once you have confirmed your VAT status, add a plain line
                such as “I am not VAT-registered, so no VAT is added to my fees.” */}
            <p className="mx-auto mt-6 max-w-3xl text-center text-xs text-gray-600">
              All prices are in South African Rand. Software subscriptions are
              paid by you directly. Work above a plan’s limits, or outside its
              scope, is quoted before it’s done. Everything is confirmed on your
              intro call before you commit.
            </p>
          </div>
        </section>

        {/* ABOUT */}
        <section id="about" className="bg-gray-50 py-16">
          <div className="mx-auto max-w-3xl px-4">
            <h2 className="mb-4 text-3xl font-semibold text-gray-900">
              About Zuhayr
            </h2>
            {/* TODO: add a real photo of yourself here (next/image). */}
            <div className="space-y-4 text-gray-700">
              <p>
                I’m Zuhayr Omar, the founder of OMR Precision Books. I’m a
                third-year accounting student at the University of Cape Town,
                currently completing Financial Reporting and Analyses.
              </p>
              {/* VERIFY: replace with your own real reason if it differs. */}
              <p>
                I started this business to give small businesses affordable,
                well-organised bookkeeping while I build real, hands-on
                experience alongside my studies.
              </p>
              <p>
                I do the work myself. I’m not yet a qualified accountant and I
                don’t hold a professional accounting designation, so I stay
                within bookkeeping and tell you when something needs a
                registered professional.
              </p>
              <p>
                As OMR grows, I plan to bring on other accounting students, with
                training and review. You’ll always be told before anyone else
                works on your records.
              </p>
              <p className="text-sm text-gray-600">
                OMR Precision Books is an independent business and is not
                affiliated with or endorsed by the University of Cape Town.
              </p>
            </div>
          </div>
        </section>

        {/* SECURITY */}
        <section className="bg-white py-16">
          <div className="mx-auto max-w-4xl px-4">
            <div className="mb-8 text-center">
              <h2 className="mb-3 text-3xl font-semibold text-gray-900">
                How I protect your information
              </h2>
              <p className="text-gray-600">
                Your financial records are sensitive. These are the practices I
                follow.
              </p>
            </div>
            {/* VERIFY: every item below must be true on the day you publish.
                Confirm POPIA wording with Phase 3 before going live. */}
            <div className="grid gap-6 md:grid-cols-3">
              <div>
                <h3 className="mb-1 text-sm font-semibold text-gray-900">
                  Access controls
                </h3>
                <p className="text-sm text-gray-600">
                  Client files are kept in access-controlled storage that only I
                  can open. Two-factor authentication is switched on for my
                  email and accounting software.
                </p>
              </div>
              <div>
                <h3 className="mb-1 text-sm font-semibold text-gray-900">
                  Never your passwords
                </h3>
                <p className="text-sm text-gray-600">
                  I will never ask for your online banking password or card PIN.
                  Documents reach me through the secure channel we agree during
                  onboarding.
                </p>
              </div>
              <div>
                <h3 className="mb-1 text-sm font-semibold text-gray-900">
                  Confidentiality
                </h3>
                <p className="text-sm text-gray-600">
                  A confidentiality commitment is part of every engagement
                  agreement, and I only collect the information needed to do the
                  work.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section id="faq" className="bg-gray-50 py-16">
          <div className="mx-auto max-w-3xl px-4">
            <h2 className="mb-6 text-center text-3xl font-semibold text-gray-900">
              Frequently asked questions
            </h2>
            <div className="space-y-3">
              {faqs.map((item) => (
                <details
                  key={item.q}
                  className="rounded-lg border border-gray-200 bg-white p-4"
                >
                  <summary
                    className={`cursor-pointer text-sm font-semibold text-gray-900 ${focusLight}`}
                  >
                    {item.q}
                  </summary>
                  {item.a.map((para) => (
                    <p key={para} className="mt-2 text-sm text-gray-700">
                      {para}
                    </p>
                  ))}
                </details>
              ))}
            </div>
          </div>
        </section>

        {/* CONTACT / FINAL CTA */}
        <section id="contact" className="bg-black py-16 text-white">
          <div className="mx-auto max-w-4xl px-4">
            <div className="mx-auto mb-8 max-w-2xl text-center">
              <h2 className="mb-3 text-balance text-3xl font-semibold">
                Book a free{" "}
                <span className="whitespace-nowrap">15-minute</span> intro call
              </h2>
              <p className="text-sm text-gray-300">
                We’ll talk about your business and see whether we’re a good fit.
              </p>
            </div>
            <div className="mx-auto max-w-xl rounded-xl border border-gray-800 bg-gray-900 p-6 text-center">
              <CallButton tone="onDark">Book a free intro call</CallButton>
              <p className="mt-6 text-sm text-gray-300">Prefer email?</p>
              <a
                href={`mailto:${CONTACT_EMAIL}`}
                className={`text-green-400 hover:underline ${focusDark}`}
              >
                {CONTACT_EMAIL}
              </a>
            </div>
          </div>
        </section>
      </main>

      {/* FOOTER */}
      <footer className="bg-black pb-10 text-gray-400">
        <div className="mx-auto flex max-w-4xl flex-col items-center justify-between space-y-2 border-t border-gray-800 px-4 pt-6 text-center text-xs sm:text-left sm:flex-row sm:space-y-0">
          <span>
            &copy; {year} OMR Precision Books. Based in Cape Town, serving
            clients across South Africa.
          </span>
          {/* TODO: add Privacy and Terms links here once those pages exist. */}
          <span>Founder-operated. Not affiliated with UCT.</span>
        </div>
      </footer>
    </div>
  );
}
