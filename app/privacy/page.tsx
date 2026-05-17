import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Privacy Policy — NotesClaim",
  description: "How NotesClaim collects, stores, and protects your data.",
};

export default function Privacy() {
  return (
    <main className="max-w-3xl mx-auto px-6 py-16">
      <Link href="/" className="text-sm text-slate-500 hover:text-ink mb-8 inline-block">
        ← Back to NotesClaim
      </Link>

      <h1 className="text-4xl font-bold mb-2">Privacy Policy</h1>
      <p className="text-slate-500 text-sm mb-10">Last updated: 7 May 2026 · Effective date: 7 May 2026</p>

      <div className="prose prose-slate max-w-none space-y-10">

        <section>
          <h2 className="text-xl font-bold mb-3">Who we are</h2>
          <p className="text-slate-700 leading-relaxed">
            NotesClaim is an Australian mobile app built for NDIS support workers and sole traders. It helps you document shifts, generate progress notes, and create invoices.
          </p>
          <p className="text-slate-700 leading-relaxed mt-3">
            <strong>Developer:</strong> Joshua Moret, ABN 50 542 187 465 (sole trader)
          </p>
          <p className="text-slate-700 leading-relaxed mt-1">
            <strong>Contact:</strong>{" "}
            <a href="mailto:techrunch@hotmail.com" className="text-primary hover:underline">
              techrunch@hotmail.com
            </a>
          </p>
        </section>

        <hr className="border-slate-200" />

        <section>
          <h2 className="text-xl font-bold mb-3">What data we collect</h2>
          <p className="text-slate-700 mb-3 leading-relaxed">When you use NotesClaim, we collect the following:</p>

          <div className="space-y-4">
            <div>
              <h3 className="font-semibold text-slate-800">Account information</h3>
              <p className="text-slate-700 mt-1 leading-relaxed">Your name and email address, used to create and manage your account.</p>
            </div>
            <div>
              <h3 className="font-semibold text-slate-800">Client information you enter</h3>
              <p className="text-slate-700 mt-1 leading-relaxed">Participant names, NDIS numbers, plan goals, and support notes you add to the app. This information is entered by you and stored against your account.</p>
            </div>
            <div>
              <h3 className="font-semibold text-slate-800">Shift and note data</h3>
              <p className="text-slate-700 mt-1 leading-relaxed">Voice recordings you make in the app (see below), text transcripts, generated progress notes, shift dates, times, and invoice details.</p>
            </div>
            <div>
              <h3 className="font-semibold text-slate-800">Device and usage data</h3>
              <p className="text-slate-700 mt-1 leading-relaxed">Basic app usage information (e.g. crashes, errors) to help us fix problems. We do not track your location, contacts, or any other device data.</p>
            </div>
          </div>
        </section>

        <hr className="border-slate-200" />

        <section>
          <h2 className="text-xl font-bold mb-3">How voice recordings are handled</h2>
          <p className="text-slate-700 mb-3 leading-relaxed">When you record a voice memo in NotesClaim:</p>
          <ol className="list-decimal list-inside space-y-2 text-slate-700">
            <li>The audio is sent to our server for transcription</li>
            <li>The transcription is used to generate your progress note</li>
            <li><strong>The audio recording is deleted immediately after processing</strong> — only the text transcript and final note are stored</li>
            <li>We do not store, listen to, or share your voice recordings</li>
          </ol>
        </section>

        <hr className="border-slate-200" />

        <section>
          <h2 className="text-xl font-bold mb-3">Where your data is stored</h2>
          <p className="text-slate-700 leading-relaxed">
            All data — including your account, client records, notes, and invoices — is stored on <strong>Australian servers</strong> (Sydney region) via Supabase.
          </p>
          <p className="text-slate-700 mt-3 leading-relaxed">Your participant data never leaves Australia.</p>
        </section>

        <hr className="border-slate-200" />

        <section>
          <h2 className="text-xl font-bold mb-3">How we use your data</h2>
          <p className="text-slate-700 mb-3 leading-relaxed">We use your data only to:</p>
          <ul className="list-disc list-inside space-y-1 text-slate-700">
            <li>Provide the app's features (note generation, invoicing, client records)</li>
            <li>Maintain your account and restore your data if you reinstall</li>
            <li>Fix bugs and improve the app</li>
          </ul>
          <p className="text-slate-700 mt-4 mb-2 leading-relaxed">We do <strong>not</strong>:</p>
          <ul className="list-disc list-inside space-y-1 text-slate-700">
            <li>Sell your data to anyone</li>
            <li>Share your data with third parties for advertising</li>
            <li>Use your data for any purpose other than operating the app</li>
          </ul>
        </section>

        <hr className="border-slate-200" />

        <section>
          <h2 className="text-xl font-bold mb-3">Third-party services</h2>
          <p className="text-slate-700 mb-4 leading-relaxed">NotesClaim uses the following third-party services to operate:</p>
          <div className="overflow-x-auto">
            <table className="w-full text-sm text-left border-collapse">
              <thead>
                <tr className="bg-slate-50">
                  <th className="border border-slate-200 px-4 py-2 font-semibold">Service</th>
                  <th className="border border-slate-200 px-4 py-2 font-semibold">Purpose</th>
                  <th className="border border-slate-200 px-4 py-2 font-semibold">Data shared</th>
                </tr>
              </thead>
              <tbody className="text-slate-700">
                <tr>
                  <td className="border border-slate-200 px-4 py-2">Supabase (Sydney)</td>
                  <td className="border border-slate-200 px-4 py-2">Database and file storage</td>
                  <td className="border border-slate-200 px-4 py-2">Your account and app data</td>
                </tr>
                <tr className="bg-slate-50">
                  <td className="border border-slate-200 px-4 py-2">Anthropic Claude API</td>
                  <td className="border border-slate-200 px-4 py-2">AI note generation</td>
                  <td className="border border-slate-200 px-4 py-2">Voice transcript text only</td>
                </tr>
                <tr>
                  <td className="border border-slate-200 px-4 py-2">RevenueCat</td>
                  <td className="border border-slate-200 px-4 py-2">Subscription management</td>
                  <td className="border border-slate-200 px-4 py-2">Email and subscription status</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-slate-600 text-sm mt-3">None of these services receive participant names or NDIS numbers beyond what is required to generate your note.</p>
        </section>

        <hr className="border-slate-200" />

        <section>
          <h2 className="text-xl font-bold mb-3">Data retention</h2>
          <ul className="list-disc list-inside space-y-1 text-slate-700">
            <li>Your notes, clients, and invoices are kept for as long as your account is active</li>
            <li>If you delete your account, all your data is deleted within 30 days</li>
            <li>Voice recordings are deleted immediately after processing (never stored)</li>
          </ul>
        </section>

        <hr className="border-slate-200" />

        <section>
          <h2 className="text-xl font-bold mb-3">Your rights</h2>
          <p className="text-slate-700 mb-3 leading-relaxed">You have the right to:</p>
          <ul className="list-disc list-inside space-y-1 text-slate-700">
            <li><strong>Access</strong> your data — request a copy of everything we hold about you</li>
            <li><strong>Correct</strong> your data — update it directly in the app or contact us</li>
            <li><strong>Delete</strong> your account and all associated data — contact us at <a href="mailto:techrunch@hotmail.com" className="text-primary hover:underline">techrunch@hotmail.com</a></li>
          </ul>
          <p className="text-slate-700 mt-4 leading-relaxed">
            Under the Australian Privacy Act 1988, you may also lodge a complaint with the Office of the Australian Information Commissioner (OAIC) at{" "}
            <a href="https://www.oaic.gov.au" className="text-primary hover:underline" target="_blank" rel="noopener noreferrer">oaic.gov.au</a>{" "}
            if you believe your privacy rights have been breached.
          </p>
        </section>

        <hr className="border-slate-200" />

        <section>
          <h2 className="text-xl font-bold mb-3">Children</h2>
          <p className="text-slate-700 leading-relaxed">NotesClaim is not intended for use by anyone under the age of 18. We do not knowingly collect data from minors.</p>
        </section>

        <hr className="border-slate-200" />

        <section>
          <h2 className="text-xl font-bold mb-3">Artificial intelligence disclosure</h2>
          <p className="text-slate-700 mb-3 leading-relaxed">NotesClaim uses AI (Anthropic Claude) to convert your voice memos and text into structured progress notes. This means:</p>
          <ul className="list-disc list-inside space-y-1 text-slate-700">
            <li>Your shift transcript is sent to Anthropic's servers for processing</li>
            <li>The AI generates a draft note based on what you described</li>
            <li>You review and approve the note before it is saved — the AI does not make final decisions</li>
            <li>Anthropic's data processing terms apply to transcript data sent for note generation</li>
            <li>We do not use your data to train AI models</li>
          </ul>
          <p className="text-slate-700 mt-3 leading-relaxed">
            You can disable AI note generation at any time in Settings → Privacy &amp; AI. Notes will save as a raw draft without AI processing.
          </p>
        </section>

        <hr className="border-slate-200" />

        <section>
          <h2 className="text-xl font-bold mb-3">Changes to this policy</h2>
          <p className="text-slate-700 leading-relaxed">If we make material changes to this policy, we will notify you via the app or email before the changes take effect. The "last updated" date at the top of this page will always reflect the current version.</p>
        </section>

        <hr className="border-slate-200" />

        <section>
          <h2 className="text-xl font-bold mb-3">Contact</h2>
          <p className="text-slate-700 leading-relaxed">For any privacy questions or data requests:</p>
          <div className="mt-3 space-y-1 text-slate-700">
            <p><strong>Email:</strong> <a href="mailto:techrunch@hotmail.com" className="text-primary hover:underline">techrunch@hotmail.com</a></p>
            <p><strong>App:</strong> NotesClaim — NDIS Support Worker Tools</p>
            <p><strong>Developer:</strong> Joshua Moret, ABN 50 542 187 465</p>
          </div>
          <p className="text-slate-500 text-sm mt-6 italic">This privacy policy was written in plain English intentionally. If you have a question that isn't answered here, just email us.</p>
        </section>

        <hr className="border-slate-200" />

        <div className="flex gap-6 text-sm">
          <Link href="/terms" className="text-primary hover:underline">Terms of Service →</Link>
          <Link href="/" className="text-slate-500 hover:text-ink">← Back to NotesClaim</Link>
        </div>

      </div>
    </main>
  );
}
