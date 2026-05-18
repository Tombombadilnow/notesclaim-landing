import Image from "next/image";

export function WhyChooseBanner() {
  return (
    <section id="why" className="border-y border-navy/10 bg-white py-10 md:py-14">
      <div className="mx-auto max-w-6xl px-4 md:px-6">
        <div className="overflow-hidden rounded-2xl shadow-card ring-1 ring-navy/10">
          <Image
            src="/images/notesclaim-why-banner.png"
            alt="Why choose NotesClaim — all-in-one system for NDIS sole traders"
            width={1024}
            height={426}
            className="h-auto w-full"
            sizes="(max-width: 1152px) 100vw, 1152px"
          />
        </div>
      </div>
    </section>
  );
}
