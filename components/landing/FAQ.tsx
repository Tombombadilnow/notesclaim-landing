"use client";

import { useState } from "react";

const ITEMS = [
  {
    q: "How do I know I can trust NotesClaim?",
    a: "Your notes and client data are stored on Australian servers (Sydney). Voice is processed to create your note — we keep the written record, not endless audio files. You review and approve every note before it is final.",
  },
  {
    q: "Is this only for registered NDIS providers?",
    a: "NotesClaim is built for unregistered sole trader support workers — plan-managed and self-managed participants. We use Audit Readiness language as a guide, not an official assessment.",
  },
  {
    q: "Do you offer a free trial?",
    a: "Beta access is free while we polish the app. Early beta testers will lock in founding-member pricing when billing goes live.",
  },
  {
    q: "Can I invoice from the same app?",
    a: "Yes. Approve your note, then create a pre-filled invoice with the right NDIS line item — ready to review and send to your plan manager or coordinator.",
  },
  {
    q: "What makes this different from ChatGPT?",
    a: "NotesClaim is purpose-built for NDIS shifts: STAR-style notes, client goals, audit readiness checks, invoices, and PDFs — without copy-pasting between five apps.",
  },
];

export function FAQ() {
  const [open, setOpen] = useState(0);

  return (
    <section id="faq" className="bg-pastel-cream py-20 md:py-28">
      <div className="mx-auto max-w-3xl px-6">
        <h2 className="font-serif-display text-center text-4xl font-bold text-ink md:text-5xl">FAQ</h2>
        <p className="mx-auto mt-4 max-w-xl text-center text-slate-600">
          Straight answers for sole traders who want less admin and clearer records.
        </p>
        <div className="mt-12 space-y-3">
          {ITEMS.map((item, i) => {
            const isOpen = open === i;
            return (
              <div key={item.q} className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
                <button
                  type="button"
                  className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left"
                  onClick={() => setOpen(isOpen ? -1 : i)}
                  aria-expanded={isOpen}
                >
                  <span className="font-semibold text-ink">{item.q}</span>
                  <span className="text-xl text-lavender">{isOpen ? "−" : "+"}</span>
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
