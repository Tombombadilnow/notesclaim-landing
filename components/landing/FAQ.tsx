"use client";

import { useState } from "react";

const ITEMS = [
  {
    q: "Do I need to be a registered NDIS provider?",
    a: "No. NotesClaim is built for unregistered sole traders.",
  },
  {
    q: "Is my data safe?",
    a: "Yes. All data is stored securely in Australia.",
  },
  {
    q: "What happens after the beta?",
    a: "Beta is free. When we launch publicly, it's $9.99/month. Early testers lock in founding-member pricing.",
  },
  {
    q: "Do I need to change how I work?",
    a: "No. Record a voice note or type after your shift — NotesClaim does the rest.",
  },
];

export function FAQ() {
  const [open, setOpen] = useState<number>(0);

  return (
    <section id="faq" className="py-16 md:py-20">
      <div className="mx-auto max-w-3xl px-6">
        <h2 className="font-serif-display text-center text-3xl font-bold text-navy md:text-4xl">FAQ</h2>
        <p className="mx-auto mt-4 max-w-xl text-center text-navy/70">
          Straight answers for sole traders who want less admin and clearer records.
        </p>
        <div className="mt-12 space-y-3">
          {ITEMS.map((item, i) => {
            const isOpen = open === i;
            return (
              <div key={item.q} className="overflow-hidden rounded-2xl border border-navy/10 bg-cream shadow-sm">
                <button
                  type="button"
                  className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left"
                  onClick={() => setOpen(isOpen ? -1 : i)}
                  aria-expanded={isOpen}
                >
                  <span className="font-semibold text-navy">{item.q}</span>
                  <span className="text-xl text-brand-teal">{isOpen ? "−" : "+"}</span>
                </button>
                {isOpen && (
                  <div className="border-t border-slate-100 px-5 pb-5 pt-1 text-sm leading-relaxed text-slate-600">
                    {item.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
