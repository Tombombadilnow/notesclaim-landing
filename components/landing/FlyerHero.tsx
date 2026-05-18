import Image from "next/image";
import { NCMark } from "./NCMark";

function IconNote() {
  return (
    <svg width="36" height="36" viewBox="0 0 48 48" fill="none" aria-hidden>
      <rect x="10" y="8" width="24" height="32" rx="4" stroke="#3d8f96" strokeWidth="2.5" />
      <path d="M16 18h14M16 24h10" stroke="#3d8f96" strokeWidth="2" strokeLinecap="round" />
      <path d="M30 34c0-4-2-6-6-6s-6 2-6 6" stroke="#3d8f96" strokeWidth="2" fill="#d4af77" fillOpacity="0.4" />
    </svg>
  );
}

function IconShield() {
  return (
    <svg width="36" height="36" viewBox="0 0 48 48" fill="none" aria-hidden>
      <path
        d="M24 6L38 12v10c0 9-6 16-14 18-8-2-14-9-14-18V12L24 6z"
        stroke="#3d8f96"
        strokeWidth="2.5"
        fill="#3d8f96"
        fillOpacity="0.08"
      />
      <rect x="20" y="18" width="8" height="10" rx="2" stroke="#3d8f96" strokeWidth="2" />
    </svg>
  );
}

function IconPeople() {
  return (
    <svg width="36" height="36" viewBox="0 0 48 48" fill="none" aria-hidden>
      <circle cx="18" cy="18" r="5" stroke="#3d8f96" strokeWidth="2.5" />
      <circle cx="32" cy="20" r="4" stroke="#3d8f96" strokeWidth="2.5" />
      <path d="M10 36c0-6 4-10 8-10s8 4 8 10M26 36c0-5 3-8 6-8s6 3 6 8" stroke="#3d8f96" strokeWidth="2.5" />
    </svg>
  );
}

export function FlyerHero() {
  return (
    <header className="overflow-hidden bg-cream">
      {/* Brand header — cream */}
      <div className="px-6 pb-6 pt-10 text-center md:pt-12">
        <NCMark />
        <p className="mt-3 text-sm font-medium text-navy/75 md:text-base">
          NDIS Made Simple for Frontline Heroes
        </p>
      </div>

      {/* Hero row */}
      <div className="relative mx-auto grid max-w-6xl items-end gap-6 px-6 pb-0 md:grid-cols-2 md:gap-10">
        <div className="relative z-10 order-2 pb-8 md:order-1 md:pb-12">
          <div className="flex items-start gap-4">
            <div className="flex flex-col items-center gap-5 pt-2">
              <IconNote />
              <div className="h-10 w-px border-l-2 border-dashed border-brand-teal/50" />
              <IconShield />
              <div className="h-10 w-px border-l-2 border-dashed border-brand-teal/50" />
              <IconPeople />
            </div>
            <p className="font-cursive text-2xl leading-snug text-navy/80 md:text-[1.65rem]">
              Supporting you, so you can focus on what matters most.
            </p>
          </div>
        </div>

        <div className="relative order-1 md:order-2">
          <div className="overflow-hidden rounded-t-3xl shadow-xl ring-1 ring-navy/10">
            <Image
              src="/images/notesclaim-flyer.png"
              alt="NotesClaim — built for NDIS support workers"
              width={720}
              height={900}
              className="h-auto w-full max-h-[min(520px,70vh)] object-cover object-top"
              priority
            />
          </div>
        </div>
      </div>

      {/* Teal wave into navy headline */}
      <div className="relative -mb-px leading-[0]">
        <svg viewBox="0 0 1440 56" preserveAspectRatio="none" className="block h-10 w-full md:h-14">
          <path fill="#4fafb0" fillOpacity="0.35" d="M0,32 C480,56 960,8 1440,40 L1440,56 L0,56 Z" />
        </svg>
      </div>

      <div className="bg-navy px-6 py-9 text-center md:py-11">
        <h1 className="text-3xl font-bold leading-tight tracking-tight text-white md:text-4xl lg:text-[2.75rem]">
          More Time for Clients.
          <br />
          Less Admin Chaos.
        </h1>
      </div>
    </header>
  );
}
