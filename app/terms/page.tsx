import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Terms of Service — NotesClaim",
  description: "Terms and conditions for using the NotesClaim app.",
};

export default function Terms() {
  return (
    <main className="max-w-3xl mx-auto px-6 py-16">
      <Link href="/" className="text-sm text-slate-500 hover:text-ink mb-8 inline-block">
        ← Back to NotesClaim
      </Link>

      <h1 className="text-4xl font-bold mb-2">Terms of Service</h1>
      <p className="text-slate-500 text-sm mb-10">Last updated: 7 May 2026 · Effective date: 7 May 2026</p>

      <div className="space-y-10">

        <section>
          <h2 className="text-xl font-bold mb-3">1. Acceptance of terms</h2>
          <p className="text-slate-700 leading-relaxed">
            By creating an account and using NotesClaim, you agree to these Terms of Service and our{" "}
            <Link href="/privacy" className="text-primary hover:underline">Privacy Policy</Link>. If you do not agree, do not use the app.
          </p>
          <p className="text-slate-700 leading-relaxed mt-3">
            These terms form a legally binding agreement between you (the user) and the developer of NotesClaim: Joshua Moret (sole trader), ABN 50 542 187 465, <a href="mailto:techrunch@hotmail.com" className="text-primary hover:underline">techrunch@hotmail.com</a>.
          </p>
        </section>

        <hr className="border-slate-200" />

        <section>
          <h2 className="text-xl font-bold mb-3">2. Who can use this app</h2>
          <p className="text-slate-700 mb-3 leading-relaxed">NotesClaim is intended for:</p>
          <ul className="list-disc list-inside space-y-1 text-slate-700">
            <li>NDIS support workers (registered and unregistered)</li>
            <li>Sole traders providing disability support services in Australia</li>
            <li>Allied health workers documenting NDIS-funded support</li>
          </ul>
          <p className="text-slate-700 mt-3 leading-relaxed">You must be 18 or over to create an account.</p>
        </section>

        <hr className="border-slate-200" />

        <section>
          <h2 className="text-xl font-bold mb-3">3. Your responsibility for participant consent — IMPORTANT</h2>
          <p className="text-slate-700 leading-relaxed">
            NotesClaim is a documentation tool. When you enter information about an NDIS participant (your client),{" "}
            <strong>you are responsible for ensuring that participant has consented to their information being recorded and stored digitally.</strong>
          </p>
          <p className="text-slate-700 mt-3 mb-2 leading-relaxed">Specifically, you agree that before entering any participant's personal information into NotesClaim:</p>
          <ul className="list-disc list-inside space-y-1 text-slate-700">
            <li>You have informed the participant (or their legal guardian) that you use a digital tool to document your support sessions</li>
            <li>The participant has agreed to their support notes being stored on secure Australian servers</li>
            <li>You have the legal right to record and store that information in your role as their support worker</li>
          </ul>
          <p className="text-slate-700 mt-4 leading-relaxed">
            NotesClaim provides the storage and tools. The consent obligation sits with you as the worker. We cannot obtain consent from your clients on your behalf.
          </p>
          <p className="text-slate-700 mt-3 leading-relaxed">
            If you are unsure whether you have appropriate consent, do not enter that participant's data until you have confirmed it.
          </p>
        </section>

        <hr className="border-slate-200" />

        <section>
          <h2 className="text-xl font-bold mb-3">4. AI-generated content</h2>
          <p className="text-slate-700 mb-3 leading-relaxed">NotesClaim uses AI (Anthropic Claude) to generate draft progress notes from your voice or text input. You acknowledge that:</p>
          <ul className="list-disc list-inside space-y-1 text-slate-700">
            <li>AI-generated notes are drafts — you must review, edit, and approve them before use</li>
            <li>You are responsible for the accuracy and completeness of every note you approve</li>
            <li>NotesClaim does not guarantee that AI-generated notes will meet any specific audit, NDIS, or regulatory standard</li>
            <li>The AI may occasionally misinterpret input — always check the output before approving</li>
          </ul>
          <p className="text-slate-700 mt-4 font-medium leading-relaxed">
            Do not approve a note you have not read. Your approved notes carry your professional responsibility.
          </p>
        </section>

        <hr className="border-slate-200" />

        <section>
          <h2 className="text-xl font-bold mb-3">5. NDIS disclaimer</h2>
          <p className="text-slate-700 leading-relaxed">
            NotesClaim is not affiliated with the NDIS, the NDIA, or any government agency. It is a private documentation tool.
          </p>
          <p className="text-slate-700 mt-3 leading-relaxed">
            The app is designed to assist with NDIS-style progress note writing based on publicly available NDIS Practice Standards and guidelines. It does not constitute professional advice. It does not guarantee compliance with any audit, funding claim, or regulatory requirement.
          </p>
          <p className="text-slate-700 mt-3 leading-relaxed">You remain fully responsible for the quality and accuracy of your documentation.</p>
        </section>

        <hr className="border-slate-200" />

        <section>
          <h2 className="text-xl font-bold mb-3">6. Subscriptions and payment</h2>
          <p className="text-slate-700 mb-3 leading-relaxed">NotesClaim offers a free tier and paid subscription plans.</p>
          <ul className="list-disc list-inside space-y-1 text-slate-700">
            <li>Free tier: limited note generation per week</li>
            <li>Paid plans: billed monthly, processed via RevenueCat / Apple App Store / Google Play</li>
            <li>Subscriptions renew automatically unless cancelled before the renewal date</li>
            <li>Refunds are subject to the App Store or Google Play refund policies</li>
            <li>We do not offer refunds directly</li>
          </ul>
          <p className="text-slate-700 mt-3 leading-relaxed">To cancel, manage your subscription through your App Store or Google Play account settings.</p>
        </section>

        <hr className="border-slate-200" />

        <section>
          <h2 className="text-xl font-bold mb-3">7. Acceptable use</h2>
          <p className="text-slate-700 mb-3 leading-relaxed">You must not use NotesClaim to:</p>
          <ul className="list-disc list-inside space-y-1 text-slate-700">
            <li>Enter false or fabricated information about support sessions</li>
            <li>Create fraudulent invoices or NDIS claims</li>
            <li>Store data about individuals without their knowledge or consent</li>
            <li>Attempt to access, copy, or scrape other users' data</li>
            <li>Reverse engineer, decompile, or modify the app</li>
          </ul>
          <p className="text-slate-700 mt-3 leading-relaxed">
            Violation of these terms may result in immediate account termination and, where appropriate, reporting to relevant authorities.
          </p>
        </section>

        <hr className="border-slate-200" />

        <section>
          <h2 className="text-xl font-bold mb-3">8. Data security and storage</h2>
          <p className="text-slate-700 mb-3 leading-relaxed">We take the security of your data seriously. Here is how we protect it:</p>
          <ul className="list-disc list-inside space-y-2 text-slate-700">
            <li><strong>Australian servers only</strong> — all your data is stored on Supabase infrastructure in the Sydney, Australia region. Your data never leaves Australia.</li>
            <li><strong>Row-level security</strong> — your account data is isolated from all other users. No other NotesClaim user can access your notes, clients, or invoices.</li>
            <li><strong>Encrypted in transit</strong> — all data sent between the app and our servers is encrypted using HTTPS/TLS.</li>
            <li><strong>Access control</strong> — only your account can read or write your data. We do not access your data unless you contact us for support and explicitly ask us to.</li>
            <li><strong>Backup and restore</strong> — Supabase maintains daily backups of the database. We are not responsible for data lost due to actions taken by you (e.g. manually deleting notes).</li>
            <li><strong>Voice recordings</strong> — deleted immediately after your note is generated. We do not store audio.</li>
          </ul>
          <p className="text-slate-700 mt-3 leading-relaxed">
            We are not responsible for security incidents caused by your own device, account password, or actions (e.g. sharing your login credentials).
          </p>
        </section>

        <hr className="border-slate-200" />

        <section>
          <h2 className="text-xl font-bold mb-3">9. Limitation of liability</h2>
          <p className="text-slate-700 mb-3 leading-relaxed">To the maximum extent permitted by Australian law:</p>
          <ul className="list-disc list-inside space-y-1 text-slate-700">
            <li>NotesClaim is provided "as is" without warranty of any kind</li>
            <li>We are not liable for any loss, damage, or NDIS claim rejection arising from your use of the app or reliance on AI-generated notes</li>
            <li>Our total liability to you for any claim is limited to the subscription fees you paid in the 3 months before the claim arose</li>
          </ul>
          <p className="text-slate-700 mt-3 leading-relaxed">Nothing in these terms limits your rights under the Australian Consumer Law.</p>
        </section>

        <hr className="border-slate-200" />

        <section>
          <h2 className="text-xl font-bold mb-3">10. Changes to these terms</h2>
          <p className="text-slate-700 leading-relaxed">
            We may update these terms from time to time. We will notify you via the app or email before significant changes take effect. Continued use of the app after changes are notified constitutes acceptance.
          </p>
        </section>

        <hr className="border-slate-200" />

        <section>
          <h2 className="text-xl font-bold mb-3">11. Governing law</h2>
          <p className="text-slate-700 leading-relaxed">These terms are governed by the laws of Victoria, Australia. Any disputes will be resolved in the courts of Victoria.</p>
        </section>

        <hr className="border-slate-200" />

        <section>
          <h2 className="text-xl font-bold mb-3">12. Contact</h2>
          <p className="text-slate-700 leading-relaxed">For questions about these terms:</p>
          <div className="mt-3 space-y-1 text-slate-700">
            <p><strong>Email:</strong> <a href="mailto:techrunch@hotmail.com" className="text-primary hover:underline">techrunch@hotmail.com</a></p>
            <p><strong>App:</strong> NotesClaim — NDIS Support Worker Tools</p>
            <p><strong>Developer:</strong> Joshua Moret, ABN 50 542 187 465</p>
          </div>
        </section>

        <hr className="border-slate-200" />

        <div className="flex gap-6 text-sm">
          <Link href="/privacy" className="text-primary hover:underline">Privacy Policy →</Link>
          <Link href="/" className="text-slate-500 hover:text-ink">← Back to NotesClaim</Link>
        </div>

      </div>
    </main>
  );
}
