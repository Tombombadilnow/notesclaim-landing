export function PhoneMockup() {
  return (
    <div className="relative mx-auto w-[260px] animate-float">
      <div className="rounded-[2.2rem] border-[10px] border-ink bg-ink p-1 shadow-2xl">
        <div className="overflow-hidden rounded-[1.6rem] bg-[#f5f3ff]">
          <div className="border-b border-slate-100 bg-white px-4 py-3">
            <p className="text-center text-sm font-bold text-ink">Dashboard</p>
          </div>
          <div className="space-y-3 p-4">
            <p className="text-lg font-extrabold text-ink">Hello</p>
            <p className="text-xs text-slate-500">Ready to log your shift?</p>
            <div className="rounded-2xl bg-gradient-to-r from-teal to-[#33d9de] p-4 shadow-md">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-white/25 text-lg text-white">🎤</div>
                <div>
                  <p className="text-sm font-bold text-white">Record Case Note</p>
                  <p className="text-[11px] text-white/85">Tap to start voice recording</p>
                </div>
              </div>
            </div>
            <div className="rounded-2xl border border-slate-200 bg-white p-3">
              <p className="text-xs font-bold text-slate-500">Audit Readiness Guide</p>
              <p className="mt-1 text-xs font-medium text-emerald-600">✓ Ready to review</p>
            </div>
          </div>
        </div>
      </div>
      <span className="absolute -right-3 top-8 text-2xl" aria-hidden>✨</span>
      <span className="absolute -left-4 bottom-16 text-3xl" aria-hidden>☁️</span>
    </div>
  );
}
