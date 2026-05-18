import Image from "next/image";

export function WhyChooseBanner() {
  return (
    <section id="why" className="w-full overflow-hidden bg-white leading-[0]">
      <Image
        src="/images/notesclaim-why-banner.png"
        alt="Why choose NotesClaim — encrypted data, client files, digital signatures, audit-ready tools, and optional AI case notes for NDIS sole traders"
        width={1024}
        height={682}
        className="block h-auto w-full"
        sizes="100vw"
        priority={false}
      />
    </section>
  );
}
