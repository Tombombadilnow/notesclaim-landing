export function FlyerTrustBar() {
  return (
    <div className="bg-teal-dark px-6 py-8 text-center text-white">
      <div className="mx-auto flex max-w-3xl flex-col items-center gap-3">
        <div className="flex items-center gap-3 text-sm font-semibold md:text-base">
          <span className="text-gold text-lg" aria-hidden>
            🔒
          </span>
          <p>Built for NDIS support workers · Secure · Simple · Client-focused</p>
        </div>
        <p className="font-cursive text-lg text-gold md:text-xl">
          <span aria-hidden>💛</span> Designed with love by a frontline worker just like you
        </p>
      </div>
    </div>
  );
}
