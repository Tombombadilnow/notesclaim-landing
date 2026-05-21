import type { ReactNode } from "react";

const STAR_FEATURES: { text: ReactNode }[] = [
  {
    text: (
      <>
        <strong>AI</strong> Case Note Writing &amp; Formatting
      </>
    ),
  },
  {
    text: (
      <>
        Digital <strong>Signature</strong> on Invoices
      </>
    ),
  },
  {
    text: (
      <>
        Client Data stored on <strong>Encrypted</strong> Supabase Database
      </>
    ),
  },
  {
    text: (
      <>
        Powerful <strong>Auditing</strong> Tools
      </>
    ),
  },
  {
    text: (
      <>
        Easy <strong>one-click</strong> send to Coordinators, Stakeholders &amp; Clients
      </>
    ),
  },
  {
    text: (
      <>
        <strong>Auto-Generate</strong> Service Agreements, Incident Reports &amp; more
      </>
    ),
  },
];

export function FlyerStory() {
  return (
    <section id="story" className="bg-cream py-14 md:py-20">
      <div className="mx-auto max-w-4xl px-6">
        <h2 className="text-center text-lg font-bold text-brand-teal md:text-xl">
          Hello from a fellow Mum &amp; NDIS Support Worker <span aria-hidden>💚</span>
        </h2>

        <div className="mt-8 space-y-5 text-center text-base leading-relaxed text-navy/90 md:text-lg">
          <p>
            I&apos;ve spent my career in Youth, Disability, Mental Health &amp; AOD sectors. I know firsthand how
            paperwork and constant changes create unnecessary stress.
          </p>
          <p>
            <strong className="text-navy">NotesClaim</strong> is a streamlined app built{" "}
            <strong className="text-brand-teal">by</strong> a frontline worker,{" "}
            <strong className="text-brand-teal">for</strong> frontline workers.
          </p>
        </div>

        <ul id="features" className="mt-12 grid gap-5 sm:grid-cols-2">
          {STAR_FEATURES.map((item, i) => (
            <li key={i} className="flex gap-3 text-sm text-navy md:text-base">
              <span className="mt-0.5 shrink-0 text-base text-brand-teal" aria-hidden>
                ★
              </span>
              <span>{item.text}</span>
            </li>
          ))}
        </ul>

        <div className="mt-14 flex flex-col items-center">
          <div className="flex w-full max-w-lg items-center gap-3">
            <span className="h-px flex-1 bg-gold/60" />
            <p className="font-cursive text-center text-2xl text-gold md:text-3xl">
              Let&apos;s make it simple, together
            </p>
            <span className="h-px flex-1 bg-gold/60" />
          </div>

          <a
            href="#join"
            className="mt-8 inline-flex items-center gap-2 rounded-xl bg-navy px-12 py-4 text-sm font-bold uppercase tracking-wider text-white shadow-lg transition hover:bg-navy-light"
          >
            Get early access
            <span aria-hidden>→</span>
          </a>
        </div>
      </div>
    </section>
  );
}
