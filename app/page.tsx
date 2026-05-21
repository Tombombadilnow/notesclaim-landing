import type { ReactNode } from "react";
import { Logo } from "@/components/landing/Logo";
import { FAQ } from "@/components/landing/FAQ";
import { FlyerHero } from "@/components/landing/FlyerHero";
import { FlyerStory } from "@/components/landing/FlyerStory";
import { FlyerTrustBar } from "@/components/landing/FlyerTrustBar";
import { WhyChooseBanner } from "@/components/landing/WhyChooseBanner";

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
    "inline-flex items-center justify-center gap-2 rounded-xl px-7 py-3.5 text-sm font-bold transition";
  const styles =
    variant === "white"
      ? `${base} bg-white text-navy hover:bg-cream`
      : `${base} bg-navy text-white hover:bg-navy-light shadow-md`;
  return (
    <a href={href} className={styles}>
      {children}
      <span aria-hidden>→</span>
    </a>
  );
}

export default function Home() {
  return (
    <main className="text-navy">
      <div  className="bg-gold/25 py-2.5 text-center text-sm font-semibold text-navy">
        ✨ Beta is free for early NDIS sole traders — lock in founding-member pricing
      </div>

      <nav className="sticky top-0 z-50 border-b border-navy/10 bg-cream/95 backdrop-blur-md">
        <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-6 py-3">
          <Logo />
          <div className="hidden items-center gap-8 text-sm font-medium text-navy/70 md:flex">
            <a href="#story" className="hover:text-navy">
              Features
            </a>
            <a href="#why" className="hover:text-navy">
              Why us
            </a>
            <a href="#pricing" className="hover:text-navy">
              Pricing
            </a>
            <a href="#faq" className="hover:text-navy">
              FAQ
            </a>
          </div>
          <CtaButton href="#join">Get early access</CtaButton>
        </div>
      </nav>

      <FlyerHero />

      <FlyerStory />

      <WhyChooseBanner />

      <section id="pricing" className="bg-cream py-16 md:py-20">
        <div className="mx-auto max-w-md px-6 text-center">
          <h2 className="font-serif-display text-3xl font-bold text-navy md:text-4xl">Honest pricing</h2>
          <p className="mt-2 text-sm text-navy/70">Built for sole traders, not agencies.</p>
          <div className="mt-8 rounded-3xl border-2 border-gold bg-white p-8 shadow-soft">
            <p className="text-xs font-bold uppercase tracking-wider text-gold">Pro</p>
            <p className="mt-2">
              <span className="text-5xl font-bold text-navy">$9.99</span>
              <span className="text-navy/60"> / month AUD</span>
            </p>
            <p className="mt-3 text-sm text-navy/80">Unlimited notes and invoices. Cancel anytime.</p>
            <a
              href="#join"
              className="mt-6 block w-full rounded-xl bg-navy py-4 text-sm font-bold uppercase tracking-wide text-white hover:bg-navy-light"
            >
              Join the beta — free now
            </a>
            <p className="mt-3 text-xs text-navy/50">Founding-member pricing for early beta testers</p>
          </div>
        </div>
      </section>

      <div className="bg-white">
        <FAQ />
      </div>

      <section id="join" className="bg-navy py-16 text-white md:py-20">
        <div className="mx-auto max-w-2xl px-6 text-center">
          <h2 className="font-serif-display text-3xl font-bold md:text-4xl">
            Less admin. <span className="text-gold">More care.</span>
          </h2>
          <p className="mt-4 text-lg text-white/85">
            Be one of the first sole traders to try NotesClaim. Beta access is free.
          </p>
          <a
            href="mailto:techrunch@hotmail.com?subject=Beta access — NotesClaim"
            className="mt-8 inline-flex items-center gap-2 rounded-xl bg-white px-10 py-4 text-sm font-bold uppercase tracking-wide text-navy hover:bg-cream"
          >
            Get beta access
            <span aria-hidden>→</span>
          </a>
          <p className="mt-6 text-sm text-white/70">🔒 Data stored in Australia · You approve every note</p>
        </div>
      </section>

      <FlyerTrustBar />

      <footer className="bg-navy-light px-6 py-10 text-white/80">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-6 md:flex-row">
          <Logo light />
          <div className="flex gap-6 text-sm">
            <a href="/privacy" className="hover:text-white">
              Privacy
            </a>
            <a href="/terms" className="hover:text-white">
              Terms
            </a>
            <a href="mailto:techrunch@hotmail.com" className="hover:text-white">
              Contact
            </a>
          </div>
        </div>
        <p className="mx-auto mt-8 max-w-6xl text-center text-xs text-white/50">
          © 2026 NotesClaim. Made for Australian NDIS support workers.
        </p>
      </footer>
    </main>
  );
}
