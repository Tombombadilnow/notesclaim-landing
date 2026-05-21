const HOOKS = [
  "One rejected invoice can cost you hundreds. Your records should never be the weak link.",
  "Speak your shift. We write the note.",
  "Shift done. Invoice sent. No catch-up.",
  "Designed by workers, for workers. We've got you.",
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
