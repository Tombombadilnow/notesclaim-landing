import type { ReactNode } from "react";
import { Logo } from "@/components/landing/Logo";
import { PhoneMockup } from "@/components/landing/PhoneMockup";
import { FAQ } from "@/components/landing/FAQ";

const features = [
  {
    bg: "bg-card-yellow",
    emoji: "🎤",
    title: "Voice-first case notes",
    body: "Speak your shift on the drive home. NotesClaim turns it into a structured NDIS progress note — ready for you to review.",
  },
  {
    bg: "bg-card-blue",
    emoji: "🛡️",
    title: "Audit Readiness Guide",
    body: "Green ticks and plain-language guidance before you send. A helper to stay ready — not an official assessment.",
  },
  {
    bg: "bg-card-mint",
    emoji: "🧾",
    title: "Invoice in one tap",
    body: "Approve your note, then create a pre-filled invoice with the right NDIS code and line items.",
  },
  {
    bg: "bg-card-lavender",
    emoji: "📁",
    title: "Everything in one place",
    body: "Clients, notes, invoices, agreements, and documents — organised for sole traders, not agencies.",
  },
];

const testimonials = [
  {
    quote:
      "I used to spend Sunday night catching up on notes. Now I talk for a minute after each shift and I'm done.",
    name: "Beta tester",
    role: "Sole trader support worker",
  },
  {
    quote:
      "The audit readiness ticks tell me what to fix before I send — that's the bit I was missing.",
    name: "Beta tester",
    role: "Community access worker",
  },
  {
    quote:
      "Having the invoice prefilled from the note means I'm not forgetting shifts anymore.",
    name: "Beta tester",
    role: "Plan-managed clients",
  },
];

const compareRows = [
  { name: "NotesClaim", checks: [true, true, true, true, true], highlight: true },
  { name: "ChatGPT", checks: [false, false, false, false, false] },
  { name: "Notes + invoice apps", checks: [false, false, true, false, false] },
  { name: "Paper + spreadsheets", checks: [false, false, false, false, false] },
];

const compareCols = [
  "Voice → NDIS note",
  "Audit readiness guide",
  "Invoices from notes",
  "Australian data storage",
  "Built for sole traders",
];

function CtaButton({
  href,
  children,
  variant = "primary",
}: {
  href: string;
  children: ReactNode;
  variant?: "primary" | "white";
}) {
  const base =
    "inline-flex items-center justify-center gap-2 rounded-full px-7 py-3.5 text-sm font-bold transition";
  const styles =
    variant === "white"
      ? `${base} bg-white text-ink hover:bg-slate-100`
      : `${base} bg-band-purple text-white hover:bg-band-deep shadow-lg shadow-band-purple/25`;
  return (
    <a href={href} className={styles}>
      {children}
      <span aria-hidden>→</span>
    </a>
  );
}

export default function Home() {
  return (
    <main className="text-ink">
      {/* Promo bar */}
      <div className="bg-[#fff4cc] py-2.5 text-center text-sm font-medium text-ink">
        ✨ Beta is free for early NDIS sole traders — lock in founding-member pricing
      </div>

      {/* Nav */}
      <nav className="sticky top-0 z-50 border-b border-white/60 bg-white/80 backdrop-blur-md">
        <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-6 py-4">
          <Logo />
          <div className="hidden items-center gap-8 text-sm font-medium text-slate-600 md:flex">
            <a href="#features" className="hover:text-ink">
              Features
            </a>
            <a href="#compare" className="hover:text-ink">
              Why us
            </a>
            <a href="#pricing" className="hover:text-ink">
              Pricing
            </a>
            <a href="#faq" className="hover:text-ink">
              FAQ
            </a>
          </div>
          <CtaButton href="#join">Join the beta</CtaButton>
        </div>
      </nav>

      {/* Hero */}
      <header className="hero-sky-bg relative overflow-hidden pb-16 pt-10 md:pb-24 md:pt-14">
        <div className="pointer-events-none absolute inset-0 opacity-60">
          <span className="absolute left-[8%] top-[18%] text-2xl">✦</span>
          <span className="absolute right-[12%] top-[12%] text-3xl">☁️</span>
          <span className="absolute right-[20%] top-[28%] text-xl">✦</span>
        </div>
        <div className="relative mx-auto grid max-w-6xl items-center gap-12 px-6 md:grid-cols-2">
          <div className="space-y-6">
            <p className="text-sm font-semibold text-lavender">Built for unregistered sole traders · 🇦🇺 Australian servers</p>
            <h1 className="font-serif-display text-4xl font-bold leading-[1.05] tracking-tight text-ink md:text-6xl">
              Your smart NDIS paperwork{" "}
              <span className="relative inline-block">
                companion
                <span className="absolute -bottom-1 left-0 right-0 h-2 rounded-full bg-gold/80" />
              </span>
            </h1>
            <p className="max-w-lg text-lg text-slate-600">
              From shift to progress note to invoice: speak naturally, review with an Audit Readiness Guide, and send
              clearer records — without juggling five apps.
            </p>
            <div className="flex flex-wrap gap-3">
              <CtaButton href="#join">Get started</CtaButton>
              <a
                href="#features"
                className="inline-flex items-center rounded-full border border-ink/15 bg-white/70 px-6 py-3.5 text-sm font-bold text-ink hover:bg-white"
              >
                See how it works
              </a>
            </div>
            <p className="text-xs text-slate-500">You review every note before it is final · Voice processed, text stored</p>
          </div>
          <PhoneMockup />
        </div>
        <div className="mx-auto mt-12 max-w-6xl px-6">
          <p className="mb-3 text-center text-xs font-semibold uppercase tracking-wider text-slate-400">
            Proof you showed up. Proof you delivered. Proof you get paid.
          </p>
        </div>
      </header>

      {/* Features */}
      <section id="features" className="bg-pastel-cream py-20 md:py-28">
        <div className="mx-auto max-w-6xl px-6">
          <h2 className="font-serif-display text-center text-4xl font-bold md:text-5xl">
            The all-in-one app for sole trader support workers
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-center text-slate-600">
            Smarter shifts start here. Record, review, invoice, and stay audit-ready — in one workflow.
          </p>
          <div className="mt-14 grid gap-5 sm:grid-cols-2">
            {features.map((f) => (
              <article key={f.title} className={`${f.bg} rounded-4xl border border-white/80 p-8 shadow-card`}>
                <span className="text-4xl" aria-hidden>
                  {f.emoji}
                </span>
                <h3 className="mt-4 text-xl font-bold">{f.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-600">{f.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Sole traders */}
      <section id="sole-traders" className="py-20">
        <div className="mx-auto grid max-w-6xl items-center gap-10 px-6 md:grid-cols-2">
          <div>
            <h2 className="font-serif-display text-3xl font-bold md:text-4xl">
              Know a support worker drowning in admin?
            </h2>
            <p className="mt-4 text-slate-600">
              NotesClaim is for unregistered sole traders with plan-managed and self-managed participants — not agency
              dashboards or five-seat minimums.
            </p>
            <div className="mt-6">
              <CtaButton href="#join">Join the beta</CtaButton>
            </div>
          </div>
          <div className="rounded-4xl bg-gradient-to-br from-band-purple to-band-deep p-8 text-white shadow-soft">
            <p className="text-sm font-semibold text-white/80">One shift →</p>
            <ul className="mt-4 space-y-3 text-lg font-semibold">
              <li>✓ Progress note</li>
              <li>✓ Audit Readiness Guide</li>
              <li>✓ Pre-filled invoice</li>
            </ul>
            <p className="mt-6 text-sm text-white/75">Review before you send. Not an official assessment.</p>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="gradient-band py-20 text-white">
        <div className="mx-auto max-w-6xl px-6">
          <h2 className="font-serif-display text-center text-4xl font-bold">Why workers are trying NotesClaim</h2>
          <p className="mt-3 text-center text-white/85">Beta feedback from sole traders across Australia</p>
          <div className="mt-12 grid gap-5 md:grid-cols-3">
            {testimonials.map((t) => (
              <blockquote key={t.quote} className="rounded-3xl bg-white p-6 text-ink shadow-soft">
                <p className="text-sm leading-relaxed">&ldquo;{t.quote}&rdquo;</p>
                <footer className="mt-4 text-xs font-semibold text-slate-500">
                  {t.name} · {t.role}
                </footer>
              </blockquote>
            ))}
          </div>
        </div>
      </section>

      {/* Compare */}
      <section id="compare" className="bg-white py-20 md:py-28">
        <div className="mx-auto max-w-6xl px-6">
          <h2 className="font-serif-display text-center text-4xl font-bold">Why NotesClaim stands out</h2>
          <p className="mx-auto mt-4 max-w-2xl text-center text-slate-600">
            Purpose-built for NDIS sole traders — not generic AI or agency software.
          </p>
          <div className="mt-12 overflow-hidden rounded-3xl border border-slate-200 shadow-soft">
            <div className="overflow-x-auto">
              <table className="w-full min-w-[640px] text-left text-sm">
                <thead>
                  <tr className="bg-ink text-white">
                    <th className="px-4 py-4 font-semibold"> </th>
                    {compareCols.map((c) => (
                      <th key={c} className="px-3 py-4 font-medium">
                        {c}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {compareRows.map((row) => (
                    <tr key={row.name} className={row.highlight ? "bg-card-lavender/40" : "bg-white"}>
                      <td className="border-t border-slate-100 px-4 py-3 font-bold">{row.name}</td>
                      {row.checks.map((ok, i) => (
                        <td key={i} className="border-t border-slate-100 px-3 py-3 text-center">
                          {ok ? <span className="text-band-purple">✓</span> : <span className="text-slate-300">—</span>}
                        </td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      <FAQ />

      {/* Quote band */}
      <section className="relative bg-gradient-to-b from-[#fff4cc] to-card-mint py-20">
        <div className="wavy-top absolute left-0 right-0 top-0 -translate-y-full text-[#fff4cc]">
          <svg viewBox="0 0 1440 48" preserveAspectRatio="none" className="h-10 w-full md:h-14">
            <path fill="currentColor" d="M0,32 C360,0 720,64 1440,24 L1440,48 L0,48 Z" />
          </svg>
        </div>
        <div className="mx-auto grid max-w-6xl items-center gap-10 px-6 md:grid-cols-2">
          <div>
            <p className="font-serif-display text-3xl font-bold leading-snug md:text-4xl">
              &ldquo;That Sunday-night note catch-up shouldn&apos;t eat your weekend.&rdquo;
            </p>
            <div className="mt-6">
              <CtaButton href="#join">Get started</CtaButton>
            </div>
          </div>
          <div className="flex justify-center">
            <div className="relative">
              <div className="h-40 w-40 overflow-hidden rounded-full border-4 border-white bg-card-lavender shadow-lg md:h-48 md:w-48" />
              <span className="absolute -right-2 top-2 text-2xl">☀️</span>
              <span className="absolute -left-3 bottom-4 text-2xl">🌙</span>
            </div>
          </div>
        </div>
      </section>

      {/* App showcase */}
      <section className="gradient-band py-20">
        <div className="mx-auto grid max-w-6xl items-center gap-12 px-6 md:grid-cols-2">
          <div className="text-white">
            <h2 className="font-serif-display text-3xl font-bold md:text-4xl">
              Because your 10pm paperwork shouldn&apos;t keep <em>you</em> up at night
            </h2>
            <p className="mt-4 text-white/90">
              Record on the way home. Review with confidence. Invoice when you are ready.
            </p>
            <div className="mt-6">
              <CtaButton href="#join" variant="white">
                Get started
              </CtaButton>
            </div>
          </div>
          <PhoneMockup />
        </div>
      </section>

      {/* Ribbon */}
      <div className="ribbon-text py-3 text-center text-sm font-bold tracking-wide text-white">
        Power to the workers · Power to the workers · Power to the workers ·
      </div>

      {/* Pricing */}
      <section id="pricing" className="bg-pastel-cream py-20">
        <div className="mx-auto max-w-md px-6 text-center">
          <h2 className="font-serif-display text-4xl font-bold">Honest pricing</h2>
          <div className="mt-10 rounded-4xl border-2 border-gold bg-white p-8 shadow-soft">
            <p className="text-sm font-bold uppercase tracking-wider text-gold">Pro</p>
            <p className="mt-2">
              <span className="text-5xl font-bold">$9.99</span>
              <span className="text-slate-500"> / month AUD</span>
            </p>
            <p className="mt-3 text-slate-600">Unlimited notes and invoices. Cancel anytime.</p>
            <a
              href="#join"
              className="mt-6 block w-full rounded-2xl bg-ink py-4 font-bold text-white hover:bg-black"
            >
              Join the beta — free now
            </a>
            <p className="mt-3 text-xs text-slate-400">Founding-member pricing for early beta testers</p>
          </div>
        </div>
      </section>

      {/* Join */}
      <section id="join" className="bg-ink py-20 text-white">
        <div className="mx-auto max-w-2xl px-6 text-center">
          <h2 className="font-serif-display text-4xl font-bold">
            Less admin. <span className="text-gold">More care.</span>
          </h2>
          <p className="mt-4 text-lg text-slate-300">
            Be one of the first sole traders to try NotesClaim. Beta access is free.
          </p>
          <a
            href="mailto:techrunch@hotmail.com?subject=Beta access — NotesClaim"
            className="mt-8 inline-flex items-center gap-2 rounded-full bg-white px-8 py-4 font-bold text-ink hover:bg-slate-100"
          >
            Get beta access
            <span aria-hidden>→</span>
          </a>
          <p className="mt-6 text-sm text-slate-400">🔒 Data stored in Australia · You approve every note</p>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#0a1020] py-14 text-slate-300">
        <div className="mx-auto grid max-w-6xl gap-10 px-6 md:grid-cols-4">
          <div className="md:col-span-2">
            <Logo light />
            <p className="mt-4 max-w-sm text-sm">Make your shift paperwork smoother with NotesClaim.</p>
            <a
              href="mailto:techrunch@hotmail.com?subject=Beta access — NotesClaim"
              className="mt-4 inline-block text-sm font-semibold text-gold hover:text-white"
            >
              Get started →
            </a>
          </div>
          <div>
            <p className="text-xs font-bold uppercase tracking-wider text-slate-500">Product</p>
            <ul className="mt-3 space-y-2 text-sm">
              <li>
                <a href="#features" className="hover:text-white">
                  Features
                </a>
              </li>
              <li>
                <a href="#pricing" className="hover:text-white">
                  Pricing
                </a>
              </li>
              <li>
                <a href="#faq" className="hover:text-white">
                  FAQ
                </a>
              </li>
            </ul>
          </div>
          <div>
            <p className="text-xs font-bold uppercase tracking-wider text-slate-500">Legal</p>
            <ul className="mt-3 space-y-2 text-sm">
              <li>
                <a href="/privacy" className="hover:text-white">
                  Privacy
                </a>
              </li>
              <li>
                <a href="/terms" className="hover:text-white">
                  Terms
                </a>
              </li>
            </ul>
          </div>
        </div>
        <p className="mx-auto mt-12 max-w-6xl px-6 text-center text-xs text-slate-500">
          © 2026 NotesClaim. Made for Australian NDIS support workers.
        </p>
      </footer>
    </main>
  );
}
