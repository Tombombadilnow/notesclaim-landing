import type { ReactNode } from "react";

const STAR_FEATURES: { text: ReactNode }[] = [
  {
    text: (
      <>
        Optional <strong>AI</strong> case note writing & formatting
      </>
    ),
  },
  {
    text: (
      <>
        Digital <strong>signature</strong> on invoices
      </>
    ),
  },
  {
    text: (
      <>
        Client data on an <strong>encrypted</strong> database — Australian servers (Sydney)
      </>
    ),
  },
  {
    text: (
      <>
        <strong>Audit Readiness Guide</strong> — review before you send (not an official assessment)
      </>
    ),
  },
  {
    text: (
      <>
        Easy <strong>one-click</strong> share to coordinators, stakeholders & clients
      </>
    ),
  },
  {
    text: (
      <>
        <strong>Auto-generate</strong> service agreements, incident reports & more
      </>
    ),
  },
];

export function FlyerStory() {
  return (
    <section id="story" className="bg-[#f4f6f7] py-16 md:py-20">
      <div className="mx-auto max-w-4xl px-6">
        <h2 className="text-center text-xl font-bold text-teal md:text-2xl">
          Hello from a fellow Mum &amp; NDIS support worker <span aria-hidden>❤️</span>
        </h2>

        <div className="mt-8 space-y-5 text-center text-base leading-relaxed text-slate-700 md:text-lg">
          <p>
            I&apos;ve spent my career in youth, disability, mental health &amp; AOD sectors. I know firsthand how
            paperwork and constant changes create unnecessary stress.
          </p>
          <p>
            <strong>NotesClaim</strong> is a streamlined app built <strong>by</strong> a frontline worker,{" "}
            <strong>for</strong> frontline workers.
          </p>
        </div>

        <ul id="features" className="mt-12 grid gap-4 sm:grid-cols-2">
          {STAR_FEATURES.map((item, i) => (
            <li key={i} className="flex gap-3 text-sm text-slate-800 md:text-base">
              <span className="mt-0.5 shrink-0 text-lg text-gold" aria-hidden>
                ★
              </span>
              <span>{item.text}</span>
            </li>
          ))}
        </ul>

        <div className="mt-14 flex flex-col items-center">
          <div className="flex w-full max-w-md items-center gap-4">
            <span className="h-px flex-1 bg-slate-300" />
            <p className="font-cursive text-center text-2xl text-[#2d7dd2] md:text-3xl">
              Let&apos;s make it simple, together
            </p>
            <span className="h-px flex-1 bg-slate-300" />
          </div>

          <a
            href="#join"
            className="mt-8 inline-flex items-center gap-2 rounded-full bg-teal px-10 py-4 text-sm font-bold uppercase tracking-wide text-white shadow-lg transition hover:bg-teal-dark"
          >
            Get early access
            <span aria-hidden>→</span>
          </a>
        </div>
      </div>
    </section>
  );
}
