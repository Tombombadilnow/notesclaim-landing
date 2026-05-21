const HOOKS = [
  "Your records should work for you — not against you.",
  "Speak your shift. We write the note.",
  "Shift done. Invoice sent. No catch-up.",
  "Built for sole traders. By someone who's been one.",
];

export function FourHooks() {
  return (
    <section className="bg-white px-6 py-12 md:py-16">
      <div className="mx-auto grid max-w-5xl gap-6 sm:grid-cols-2">
        {HOOKS.map((hook) => (
          <blockquote
            key={hook}
            className="rounded-2xl border border-navy/10 bg-cream px-6 py-5 text-base font-medium leading-relaxed text-navy md:text-lg"
          >
            {hook}
          </blockquote>
        ))}
      </div>
    </section>
  );
}
