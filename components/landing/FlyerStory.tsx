const FEATURES = [
  "Your progress note written for you — in seconds",
  "Your clients' data stored securely in Australia",
  "Know your records are ready before anyone asks",
  "More than notes — service agreements, incident reports, sorted",
  "Easy one-click send to coordinators, stakeholders and clients",
];

export function FlyerStory() {
  return (
    <section id="story" className="bg-cream py-14 md:py-20">
      <div className="mx-auto max-w-4xl px-6">
        <h2 className="text-center font-serif-display text-2xl font-bold text-navy md:text-3xl">
          Built by someone who knows exactly what your days look like.
        </h2>

        <div className="mt-8 space-y-5 text-center text-base leading-relaxed text-navy/90 md:text-lg">
          <p>
            I know the shift that runs late. The challenging shift you&apos;re still thinking about on the drive home.
            The progress note you meant to write — and the invoice still sitting in your drafts three days later.
          </p>
          <p>
            I built NotesClaim for workers like us. To help us stay client-focused, stress less, and reclaim the time we
            were losing to admin — while doing the job we love.
          </p>
        </div>

        <ul id="features" className="mt-12 space-y-4">
          {FEATURES.map((item) => (
            <li key={item} className="flex gap-3 text-sm text-navy md:text-base">
              <span className="mt-0.5 shrink-0 text-base text-brand-teal" aria-hidden>
                •
              </span>
              <span>{item}</span>
            </li>
          ))}
        </ul>

        <div className="mt-14 flex flex-col items-center">
          <a
            href="#join"
            className="inline-flex items-center gap-2 rounded-xl bg-navy px-12 py-4 text-sm font-bold uppercase tracking-wider text-white shadow-lg transition hover:bg-navy-light"
          >
            Get early access
            <span aria-hidden>→</span>
          </a>
        </div>
      </div>
    </section>
  );
}
