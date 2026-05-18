export function FlyerTrustBar() {
  return (
    <div className="border-t border-navy/10 bg-navy px-6 py-8 text-center text-white">
      <div className="mx-auto flex max-w-3xl flex-col items-center gap-3">
        <p className="flex items-center gap-2 text-sm font-semibold md:text-base">
          <span className="text-gold text-lg" aria-hidden>
            🔒
          </span>
          Built for NDIS Support Workers · Secure · Simple · Client-Focused
        </p>
        <p className="font-cursive text-lg text-gold md:text-xl">
          <span aria-hidden>💛</span> Designed with love by a frontline worker just like you
        </p>
      </div>
    </div>
  );
}
