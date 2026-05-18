import Image from "next/image";

function IconNote() {
  return (
    <svg width="36" height="36" viewBox="0 0 48 48" fill="none" aria-hidden>
      <rect x="10" y="8" width="24" height="32" rx="4" stroke="#0e5c6b" strokeWidth="2.5" />
      <path d="M16 18h14M16 24h10" stroke="#0e5c6b" strokeWidth="2" strokeLinecap="round" />
      <path
        d="M30 34c0-4-2-6-6-6s-6 2-6 6"
        stroke="#0e5c6b"
        strokeWidth="2"
        fill="#d4af77"
        fillOpacity="0.35"
      />
    </svg>
  );
}

function IconShield() {
  return (
    <svg width="36" height="36" viewBox="0 0 48 48" fill="none" aria-hidden>
      <path
        d="M24 6L38 12v10c0 9-6 16-14 18-8-2-14-9-14-18V12L24 6z"
        stroke="#0e5c6b"
        strokeWidth="2.5"
        fill="#0e5c6b"
        fillOpacity="0.08"
      />
      <rect x="20" y="18" width="8" height="10" rx="2" stroke="#0e5c6b" strokeWidth="2" />
    </svg>
  );
}

function IconPeople() {
  return (
    <svg width="36" height="36" viewBox="0 0 48 48" fill="none" aria-hidden>
      <circle cx="18" cy="18" r="5" stroke="#0e5c6b" strokeWidth="2.5" />
      <circle cx="32" cy="20" r="4" stroke="#0e5c6b" strokeWidth="2.5" />
      <path d="M10 36c0-6 4-10 8-10s8 4 8 10M26 36c0-5 3-8 6-8s6 3 6 8" stroke="#0e5c6b" strokeWidth="2.5" />
    </svg>
  );
}

export function FlyerHero() {
  return (
    <header className="overflow-hidden bg-white">
      {/* Teal brand band */}
      <div className="bg-teal px-6 py-10 text-center text-white md:py-12">
        <div className="mx-auto flex max-w-lg flex-col items-center">
          <div className="flex items-end gap-1">
            <span className="font-serif-display text-6xl font-bold leading-none text-[#1e3a5f] md:text-7xl">N</span>
            <span className="font-serif-display text-6xl font-bold leading-none text-gold md:text-7xl">C</span>
          </div>
          <p className="mt-3 font-serif-display text-3xl font-bold tracking-tight md:text-4xl">
            Notes<span className="text-gold">Claim</span>
          </p>
          <p className="mt-2 text-sm font-medium text-white/90 md:text-base">
            NDIS made simple for frontline heroes
          </p>
        </div>
      </div>

      <div className="mx-auto grid max-w-6xl items-center gap-8 px-6 py-10 md:grid-cols-2 md:py-14">
        <div className="relative order-2 md:order-1">
          <div className="flex items-start gap-4">
            <div className="flex flex-col items-center gap-5 pt-2">
              <IconNote />
              <div className="h-8 w-px border-l-2 border-dashed border-teal/40" />
              <IconShield />
              <div className="h-8 w-px border-l-2 border-dashed border-teal/40" />
              <IconPeople />
            </div>
            <p className="font-cursive text-2xl leading-snug text-[#2d7dd2] md:text-3xl">
              Supporting you, so you can focus on what matters most.
            </p>
          </div>
        </div>

        <div className="relative order-1 mx-auto w-full max-w-sm md:order-2 md:max-w-md">
          <div className="overflow-hidden rounded-3xl border border-slate-200 shadow-2xl">
            <Image
              src="/images/notesclaim-flyer.png"
              alt="NotesClaim — NDIS support worker app promotional overview"
              width={600}
              height={1200}
              className="h-auto w-full object-cover object-top"
              priority
            />
          </div>
        </div>
      </div>

      <div className="bg-teal px-6 py-8 text-center">
        <h1 className="font-serif-display text-3xl font-bold leading-tight text-white md:text-4xl lg:text-5xl">
          More time for clients.
          <br />
          Less admin chaos.
        </h1>
      </div>
    </header>
  );
}
