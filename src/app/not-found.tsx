"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function NotFound() {
  const pathname = usePathname();

  React.useEffect(() => {
    // #region agent log
    fetch(
      "http://127.0.0.1:7793/ingest/f6b4e70d-d5e3-4fbc-be1f-176d14fcf127",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "X-Debug-Session-Id": "bb8bcf",
        },
        body: JSON.stringify({
          sessionId: "bb8bcf",
          runId: "initial-3",
          hypothesisId: "H1_H3_H6",
          location: "src/app/not-found.tsx:10",
          message: "Global not-found page rendered",
          data: { pathname },
          timestamp: Date.now(),
        }),
      }
    ).catch(() => {});
    // #endregion
  }, [pathname]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-[#f3e6d3] px-6 text-[#5c4432]">
      <div className="w-full max-w-xl rounded-3xl border border-[#8a684f]/30 bg-[#f3e6d3] p-10 text-center shadow-sm">
        <p className="mb-3 text-xs font-semibold uppercase tracking-[0.16em] text-[#5c4432]">
          404 Error
        </p>
        <h2 className="mb-4 text-4xl font-bold">Page Not Found</h2>
        <p className="mb-8 text-[#6f5441]">
          The page you're looking for doesn't exist.
        </p>
        <Link
          href="/"
          className="inline-flex rounded-xl bg-[#5c4432] px-5 py-2.5 text-sm font-medium text-[#f3e6d3] transition hover:bg-[#4d3727]"
        >
          Return Home
        </Link>
      </div>
    </div>
  );
}
