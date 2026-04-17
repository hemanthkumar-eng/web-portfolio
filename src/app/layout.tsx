import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Hemanth Kumar | Portfolio",
  description: "Software Engineer Portfolio",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  // #region agent log
  fetch("http://127.0.0.1:7793/ingest/f6b4e70d-d5e3-4fbc-be1f-176d14fcf127", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "X-Debug-Session-Id": "bb8bcf",
    },
    body: JSON.stringify({
      sessionId: "bb8bcf",
      runId: "initial-2",
      hypothesisId: "H5",
      location: "src/app/layout.tsx:19",
      message: "Root layout rendered",
      data: { note: "Layout rendered without request header access" },
      timestamp: Date.now(),
    }),
  }).catch(() => {});
  // #endregion

  return (
    <html lang="en">
      <body className={inter.className}>
        {children}
      </body>
    </html>
  );
}
