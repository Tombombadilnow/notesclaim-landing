import Image from "next/image";
import { NCMark } from "./NCMark";

export function FlyerHero() {
  return (
    <header className="overflow-hidden bg-cream">
      <div className="px-6 pb-2 pt-8 text-center md:pt-10">
        <NCMark />
      </div>

      <div className="flex flex-col md:min-h-[min(72vh,680px)] md:flex-row">
        <div className="relative z-10 order-2 flex flex-1 flex-col justify-center px-6 py-8 md:order-1 md:py-12 md:pl-[max(1.5rem,calc((100vw-72rem)/2+1.5rem))] md:pr-10">
          <div className="mx-auto w-full max-w-lg md:mx-0">
            <h1 className="font-serif-display text-3xl font-bold leading-tight tracking-tight text-navy md:text-4xl lg:text-[2.75rem]">
              Stop writing notes from memory at 10pm.
            </h1>
            <p className="mt-5 text-base leading-relaxed text-navy/85 md:text-lg">
              NotesClaim captures your shift while it&apos;s fresh — turns it into a progress note and generates your
              invoice, all before you get home.
            </p>
            <a
              href="#join"
              className="mt-8 inline-flex items-center gap-2 rounded-xl bg-navy px-8 py-4 text-sm font-bold uppercase tracking-wide text-white shadow-md transition hover:bg-navy-light"
            >
              Get early access
              <span aria-hidden>→</span>
            </a>
          </div>
        </div>

        <div className="relative order-1 h-[min(52vh,480px)] w-full md:order-2 md:h-auto md:min-h-[min(72vh,680px)] md:flex-1">
          <Image
            src="/images/hero-founder.png"
            alt="NDIS support worker using NotesClaim after a shift"
            fill
            className="object-contain object-top"
            sizes="(max-width: 768px) 100vw, 55vw"
            priority
          />
          <div
            className="pointer-events-none absolute inset-0 bg-gradient-to-r from-cream via-cream/40 to-transparent md:via-cream/20"
            aria-hidden
          />
        </div>
      </div>

      <div className="relative -mb-px leading-[0]">
        <svg viewBox="0 0 1440 56" preserveAspectRatio="none" className="block h-10 w-full md:h-14">
          <path fill="#4fafb0" fillOpacity="0.35" d="M0,32 C480,56 960,8 1440,40 L1440,56 L0,56 Z" />
        </svg>
      </div>

      <div className="bg-navy px-6 py-9 text-center md:py-11">
        <p className="text-3xl font-bold leading-tight tracking-tight text-white md:text-4xl lg:text-[2.75rem]">
          More Time for Clients.
          <br />
          Less Admin Chaos.
        </p>
      </div>
    </header>
  );
}
