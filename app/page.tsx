export default function Home() {
  return (
    <main>
      {/* Nav */}
      <nav className="max-w-6xl mx-auto px-6 py-5 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-lg bg-primary flex items-center justify-center text-white font-bold">N</div>
          <span className="font-bold text-lg">NotesClaim</span>
        </div>
        <div className="flex items-center gap-6 text-sm">
          <a href="#features" className="text-slate-600 hover:text-ink hidden sm:block">Features</a>
          <a href="#pricing" className="text-slate-600 hover:text-ink hidden sm:block">Pricing</a>
          <a href="#signup" className="bg-primary text-white px-4 py-2 rounded-lg font-medium hover:opacity-90">
            Join Beta
          </a>
        </div>
      </nav>

      {/* Hero */}
      <section className="max-w-6xl mx-auto px-6 pt-16 pb-24 text-center">
        <div className="inline-block bg-primary/10 text-primary text-xs font-semibold px-3 py-1 rounded-full mb-6">
          Built for unregistered sole trader support workers
        </div>
        <h1 className="text-5xl md:text-6xl font-bold tracking-tight leading-tight">
          Voice to NDIS note in <span className="text-primary">under 60 seconds.</span>
        </h1>
        <p className="mt-6 text-xl text-slate-600 max-w-2xl mx-auto">
          Speak your shift. Get a compliant progress note and an invoice with the right NDIS code. No templates.
          No retyping. No ChatGPT copy-paste dance.
        </p>
        <div className="mt-10 flex items-center justify-center gap-4">
          <a href="#signup" className="bg-primary text-white px-6 py-3 rounded-xl font-semibold hover:opacity-90">
            Join the beta — $9.99/mo
          </a>
          <a href="#demo" className="text-slate-700 font-medium hover:text-ink">
            See how it works →
          </a>
        </div>
        <p className="mt-4 text-sm text-slate-500">Free 14-day trial · Cancel anytime · No card for beta</p>
      </section>

      {/* vs ChatGPT — #4 positioning moat */}
      <section id="demo" className="bg-slate-50 border-y border-slate-200">
        <div className="max-w-5xl mx-auto px-6 py-20">
          <h2 className="text-3xl md:text-4xl font-bold text-center">
            Already using ChatGPT for notes? Here&apos;s what&apos;s different.
          </h2>
          <p className="text-center text-slate-600 mt-4 max-w-2xl mx-auto">
            ChatGPT is a writing tool. NotesClaim is a compliance tool that knows your clients, your plan goals, and
            your NDIS price guide.
          </p>

          <div className="mt-12 grid md:grid-cols-2 gap-6">
            <div className="bg-white border border-slate-200 rounded-2xl p-6">
              <div className="text-sm font-bold text-slate-500 uppercase tracking-wider mb-4">ChatGPT</div>
              <ul className="space-y-3 text-slate-700">
                <li className="flex gap-3"><span className="text-red-500">✕</span> You type out the prompt every time</li>
                <li className="flex gap-3"><span className="text-red-500">✕</span> Doesn&apos;t know your clients or their plan goals</li>
                <li className="flex gap-3"><span className="text-red-500">✕</span> No NDIS price guide, no invoicing</li>
                <li className="flex gap-3"><span className="text-red-500">✕</span> No audit trail, no storage</li>
                <li className="flex gap-3"><span className="text-red-500">✕</span> Uses your data for training (privacy risk)</li>
                <li className="flex gap-3"><span className="text-red-500">✕</span> Hallucinates goal names and NDIS codes</li>
              </ul>
            </div>

            <div className="bg-white border-2 border-primary rounded-2xl p-6 relative">
              <div className="absolute -top-3 left-6 bg-primary text-white text-xs font-bold px-3 py-1 rounded-full">
                NotesClaim
              </div>
              <div className="text-sm font-bold text-primary uppercase tracking-wider mb-4">NotesClaim</div>
              <ul className="space-y-3 text-slate-700">
                <li className="flex gap-3"><span className="text-primary">✓</span> Speak naturally — no prompt engineering</li>
                <li className="flex gap-3"><span className="text-primary">✓</span> Knows every client&apos;s plan goals, links them automatically</li>
                <li className="flex gap-3"><span className="text-primary">✓</span> Live NDIS price guide, invoice with one tap</li>
                <li className="flex gap-3"><span className="text-primary">✓</span> All notes stored, searchable, audit-ready</li>
                <li className="flex gap-3"><span className="text-primary">✓</span> Sydney data centre, not used for training</li>
                <li className="flex gap-3"><span className="text-primary">✓</span> Validates codes before you send — no overclaims</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section id="features" className="max-w-6xl mx-auto px-6 py-24">
        <h2 className="text-3xl md:text-4xl font-bold text-center">Everything a sole trader support worker needs.</h2>
        <p className="text-center text-slate-600 mt-4 max-w-2xl mx-auto">
          One app. Notes, invoices, clients, service agreements. Nothing else to subscribe to.
        </p>

        <div className="mt-16 grid md:grid-cols-3 gap-8">
          {[
            {
              icon: "🎙️",
              title: "Voice to note",
              body: "Record 30 seconds of what happened. AI writes a STAR-formatted, goal-linked progress note you can edit before approving.",
            },
            {
              icon: "💸",
              title: "Invoice in one tap",
              body: "From an approved note, generate an NDIS-compliant invoice with the right line item code. Pre-validated against the price guide.",
            },
            {
              icon: "🛡️",
              title: "Compliance built-in",
              body: "Live audit score on every note. Catches vague language, missing goal links, and placeholder text before your coordinator does.",
            },
            {
              icon: "📁",
              title: "Client hub",
              body: "All notes, invoices, service agreements, and documents for each client in one place. Tap a name, see everything.",
            },
            {
              icon: "📤",
              title: "One-tap share",
              body: "Send both the note and its invoice to a support coordinator in one action. Saves 10 minutes per shift.",
            },
            {
              icon: "🔁",
              title: "Import old notes",
              body: "Already have notes in Word, email, or another app? Paste them in — we reshape them into NotesClaim format.",
            },
          ].map((f, i) => (
            <div key={i} className="rounded-2xl border border-slate-200 p-6">
              <div className="text-3xl mb-3">{f.icon}</div>
              <h3 className="font-bold text-lg">{f.title}</h3>
              <p className="text-slate-600 mt-2 leading-relaxed">{f.body}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Pricing */}
      <section id="pricing" className="bg-slate-50 border-y border-slate-200">
        <div className="max-w-4xl mx-auto px-6 py-24 text-center">
          <h2 className="text-3xl md:text-4xl font-bold">Simple pricing. One plan.</h2>
          <p className="text-slate-600 mt-4">Less than the cost of one billed hour per month.</p>

          <div className="mt-12 bg-white rounded-3xl border-2 border-primary p-10 max-w-md mx-auto">
            <div className="text-5xl font-bold">$9.99<span className="text-lg text-slate-500 font-normal">/month</span></div>
            <div className="text-sm text-slate-500 mt-1">AUD · GST included</div>
            <ul className="mt-8 space-y-3 text-left">
              <li className="flex gap-3"><span className="text-primary">✓</span> Unlimited notes &amp; invoices</li>
              <li className="flex gap-3"><span className="text-primary">✓</span> Unlimited clients</li>
              <li className="flex gap-3"><span className="text-primary">✓</span> Voice AI, compliance audit, invoice pre-validation</li>
              <li className="flex gap-3"><span className="text-primary">✓</span> Sydney data centre, AU privacy compliant</li>
              <li className="flex gap-3"><span className="text-primary">✓</span> 14-day free trial</li>
            </ul>
            <a href="#signup" className="mt-8 inline-block bg-primary text-white px-8 py-3 rounded-xl font-semibold hover:opacity-90">
              Start free trial
            </a>
          </div>
        </div>
      </section>

      {/* Signup */}
      <section id="signup" className="max-w-3xl mx-auto px-6 py-24 text-center">
        <h2 className="text-3xl md:text-4xl font-bold">Join the beta.</h2>
        <p className="text-slate-600 mt-4">
          We&apos;re onboarding 50 unregistered sole trader support workers in April 2026. Drop your email and we&apos;ll send the APK.
        </p>
        <form
          action="https://formspree.io/f/YOUR_FORM_ID"
          method="POST"
          className="mt-10 flex flex-col sm:flex-row gap-3 max-w-md mx-auto"
        >
          <input
            type="email"
            name="email"
            required
            placeholder="you@example.com"
            className="flex-1 px-4 py-3 rounded-xl border border-slate-300 focus:border-primary focus:outline-none"
          />
          <button className="bg-primary text-white px-6 py-3 rounded-xl font-semibold hover:opacity-90">
            Request access
          </button>
        </form>
        <p className="text-xs text-slate-500 mt-4">We&apos;ll email you when your spot opens. No spam.</p>
      </section>

      {/* Footer */}
      <footer className="border-t border-slate-200">
        <div className="max-w-6xl mx-auto px-6 py-10 flex flex-col sm:flex-row items-center justify-between text-sm text-slate-500">
          <div>© 2026 NotesClaim. Made for Australian support workers.</div>
          <div className="flex gap-6 mt-3 sm:mt-0">
            <a href="#" className="hover:text-ink">Privacy</a>
            <a href="#" className="hover:text-ink">Terms</a>
            <a href="mailto:hello@notesclaim.com.au" className="hover:text-ink">Contact</a>
          </div>
        </div>
      </footer>
    </main>
  );
}
