"use client";

import { useState } from "react";

const ITEMS = [
  {
    q: "Who is NotesClaim for?",
    a: "Unregistered sole trader support workers with plan-managed or self-managed participants. If you write your own progress notes and send your own invoices — this is built for you, not agency dashboards with five-seat minimums.",
  },
  {
    q: "How do I know I can trust NotesClaim?",
    a: "Your notes and client data are stored on Australian servers (Sydney). Voice is processed to create your note — we keep the written record, not endless audio files. You review and approve every note before it is final.",
  },
  {
    q: "Is this only for registered NDIS providers?",
    a: "No. NotesClaim is built for unregistered sole traders. We use Audit Readiness language as a guide to help you review your records — not an official assessment or certification.",
  },
  {
    q: "Can I invoice from the same app?",
    a: "Yes. Approve your note, then create a pre-filled invoice with the right NDIS line item and service dates — ready to review and send to your plan manager or coordinator.",
  },
  {
    q: "What if my plan manager rejects an invoice?",
    a: "Incomplete records are one of the most common reasons invoices get sent back. NotesClaim links your shift note to your invoice so dates, details, and line items stay consistent — fewer rejections, less rework.",
  },
  {
    q: "Do you offer a free trial?",
    a: "Beta access is free while we polish the app. Early beta testers will lock in founding-member pricing when billing goes live.",
  },
  {
    q: "What makes this different from ChatGPT?",
    a: "NotesClaim is purpose-built for NDIS shifts: structured progress notes, client goals, audit readiness checks, invoices, and PDFs — without copy-pasting between five apps or hoping generic AI got the NDIS wording right.",
  },
  {
    q: "Do I still approve everything before it goes out?",
    a: "Always. Nothing is final until you review it. NotesClaim drafts the note and invoice — you check, edit, and approve before anything is sent.",
  },
];

export function FAQ() {
  const [open, setOpen] = useState<number>(-1);

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
