import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "NotesClaim — Voice to NDIS note in under 60 seconds",
  description:
    "Speak your shift. Get a compliant NDIS progress note and invoice. Built for unregistered sole trader support workers.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-white text-ink antialiased">{children}</body>
    </html>
  );
}
