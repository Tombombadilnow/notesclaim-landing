export default function Home() {
  return (
    <main className="bg-white text-slate-800" style={{ fontFamily: "'Inter', system-ui, sans-serif" }}>
      {/* Navbar */}
      <nav className="border-b border-slate-100 bg-white sticky top-0 z-50">
        <div className="max-w-6xl mx-auto px-6 py-5 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <svg width="52" height="52" viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M35 25 L75 25 L90 65 L75 105 L35 105 L20 65 Z"
                stroke="#0f172a"
                strokeWidth="18"
                strokeLinejoin="round"
              />
              <path
                d="M65 45 Q85 55 92 70"
                fill="none"
                stroke="#d4af77"
                strokeWidth="18"
                strokeLinecap="round"
              />
            </svg>
            <span
              className="text-3xl font-bold tracking-tight"
              style={{ color: "#0f172a", fontFamily: "'Playfair Display', serif" }}
            >
              NotesClaim
            </span>
          </div>

          <div className="hidden md:flex items-center gap-8 text-sm font-medium">
            <a href="#how" className="hover:text-slate-500 transition">How it works</a>
            <a href="#features" className="hover:text-slate-500 transition">Features</a>
            <a href="#pricing" className="hover:text-slate-500 transition">Pricing</a>
            <a href="#sole-traders" className="hover:text-slate-500 transition">For sole traders</a>
          </div>

          <a
            href="#join"
            className="px-6 py-3 bg-slate-900 hover:bg-black text-white rounded-2xl font-semibold text-sm transition inline-flex items-center gap-2"
          >
            Join the beta
            <span aria-hidden>→</span>
          </a>
        </div>
      </nav>

      {/* Hero */}
      <header
        className="text-white py-20 md:py-28"
        style={{ background: "linear-gradient(135deg, #0f172a 0%, #1e2937 100%)" }}
      >
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md px-5 py-2 rounded-3xl text-sm">
              <span className="bg-emerald-400 text-emerald-950 text-[10px] font-bold px-2 py-px rounded">NEW</span>
              <span className="font-medium">Built for unregistered sole traders in Australia</span>
            </div>

            <h1 className="text-5xl md:text-6xl font-semibold tracking-tighter leading-none">
              Voice to NDIS note<br />
              in <span style={{ color: "#d4af77" }}>under 60 seconds</span>
            </h1>

            <p className="text-xl text-slate-300 max-w-lg">
              Speak what happened during your shift. Get a proper STAR-formatted progress note{" "}
              <span className="text-white font-medium">and</span> a compliant invoice with the correct NDIS code.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="#join"
                className="px-7 py-4 bg-white text-slate-900 hover:bg-slate-100 rounded-2xl font-semibold transition inline-flex items-center justify-center gap-2"
              >
                Join the beta
                <span aria-hidden>→</span>
              </a>
              <a
                href="#how"
                className="px-7 py-4 border border-white/20 hover:bg-white/10 text-white rounded-2xl font-semibold transition inline-flex items-center justify-center gap-2"
              >
                See how it works
              </a>
            </div>

            <div className="flex items-center gap-6 text-sm text-slate-400 pt-2">
              <span>🇦🇺 Australian-made</span>
              <span>🔒 Data stays in Australia</span>
              <span>✓ You review every note</span>
            </div>
          </div>

          {/* Hero visual placeholder — designer to refine */}
          <div className="hidden md:flex items-center justify-center">
            <div className="w-full max-w-sm aspect-[9/16] rounded-3xl bg-gradient-to-br from-slate-800 to-slate-900 border border-white/10 flex items-center justify-center text-slate-500 text-sm">
              [ Phone mockup placeholder ]
            </div>
          </div>
        </div>
      </header>

      {/* How it works */}
      <section id="how" className="py-20 max-w-6xl mx-auto px-6">
        <h2 className="text-4xl font-semibold tracking-tight text-center mb-4" style={{ color: "#0f172a" }}>
          Three steps. Under a minute.
        </h2>
        <p className="text-center text-slate-500 max-w-2xl mx-auto mb-16">
          No templates. No retyping. No ChatGPT copy-paste dance.
        </p>

        <div className="grid md:grid-cols-3 gap-8">
          {[
            { num: "01", title: "Speak your shift", body: "Tap the mic, say what happened. 30 seconds is enough." },
            { num: "02", title: "We write the note", body: "STAR-formatted, person-centred, NDIS-style language." },
            { num: "03", title: "Invoice in one tap", body: "Correct NDIS support code and pricing auto-filled." },
          ].map((step) => (
            <div key={step.num} className="p-8 rounded-3xl border border-slate-200 hover:border-slate-300 transition">
              <div className="text-sm font-bold mb-4" style={{ color: "#d4af77" }}>{step.num}</div>
              <h3 className="text-xl font-semibold mb-3" style={{ color: "#0f172a" }}>{step.title}</h3>
              <p className="text-slate-600">{step.body}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Features */}
      <section id="features" className="py-20 bg-slate-50">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-4xl font-semibold tracking-tight text-center mb-16" style={{ color: "#0f172a" }}>
            Built for the way sole traders actually work
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { title: "Audit Pre-Check", body: "We flag the things auditors commonly question — before you submit." },
              { title: "STAR format", body: "Person-centred, measurable, goal-linked progress notes by default." },
              { title: "Client hub", body: "All notes, invoices and documents organised by participant." },
              { title: "Photo to note", body: "Snap handwritten notes — we transcribe and structure them." },
              { title: "Service agreements", body: "Generate compliant agreements from a few quick prompts." },
              { title: "Medication logs", body: "Log medication administration with PDF audit trail." },
            ].map((f) => (
              <div key={f.title} className="p-6 rounded-2xl bg-white border border-slate-200">
                <h3 className="font-semibold mb-2" style={{ color: "#0f172a" }}>{f.title}</h3>
                <p className="text-sm text-slate-600">{f.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section id="pricing" className="py-20 max-w-6xl mx-auto px-6">
        <h2 className="text-4xl font-semibold tracking-tight text-center mb-16" style={{ color: "#0f172a" }}>
          Honest pricing for sole traders
        </h2>
        <div className="max-w-md mx-auto p-8 rounded-3xl border-2" style={{ borderColor: "#d4af77" }}>
          <div className="text-sm font-semibold mb-2" style={{ color: "#d4af77" }}>PRO</div>
          <div className="flex items-baseline gap-1 mb-4">
            <span className="text-5xl font-bold" style={{ color: "#0f172a" }}>$9.99</span>
            <span className="text-slate-500">/month AUD</span>
          </div>
          <p className="text-slate-600 mb-6">Unlimited notes. Unlimited invoices. Cancel anytime.</p>
          <a
            href="#join"
            className="block text-center w-full py-4 bg-slate-900 hover:bg-black text-white rounded-2xl font-semibold transition"
          >
            Join the beta
          </a>
          <p className="text-xs text-slate-400 mt-4 text-center">
            Free for all beta testers. Pricing locked in for early adopters.
          </p>
        </div>
      </section>

      {/* CTA */}
      <section id="join" className="py-20" style={{ background: "linear-gradient(135deg, #0f172a 0%, #1e2937 100%)" }}>
        <div className="max-w-3xl mx-auto px-6 text-center text-white">
          <h2 className="text-4xl md:text-5xl font-semibold tracking-tight mb-4">
            Less admin. <span style={{ color: "#d4af77" }}>More care.</span>
          </h2>
          <p className="text-slate-300 mb-8 text-lg">
            Be one of the first NDIS sole traders to try NotesClaim. Beta access is free.
          </p>
          <a
            href="mailto:techrunch@hotmail.com?subject=Beta access — NotesClaim"
            className="inline-flex items-center gap-2 px-8 py-4 bg-white text-slate-900 hover:bg-slate-100 rounded-2xl font-semibold transition"
          >
            Get beta access
            <span aria-hidden>→</span>
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 border-t border-slate-100">
        <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-slate-500">
          <div>© 2026 NotesClaim. Made for Australian support workers.</div>
          <div className="flex gap-6">
            <a href="/privacy" className="hover:text-slate-700">Privacy</a>
            <a href="/terms" className="hover:text-slate-700">Terms</a>
          </div>
        </div>
      </footer>
    </main>
  );
}
