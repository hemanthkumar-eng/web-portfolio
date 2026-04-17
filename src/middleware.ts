import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

const DEBUG_ENDPOINT =
  "http://127.0.0.1:7793/ingest/f6b4e70d-d5e3-4fbc-be1f-176d14fcf127";
const EXPECTED_BASE_PATH = "/web-portfolio";

export function middleware(request: NextRequest) {
  const { pathname, search } = request.nextUrl;
  const runId = "initial";

  // #region agent log
  fetch(DEBUG_ENDPOINT, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "X-Debug-Session-Id": "bb8bcf",
    },
    body: JSON.stringify({
      sessionId: "bb8bcf",
      runId,
      hypothesisId: "H1_H2",
      location: "src/middleware.ts:14",
      message: "Incoming request path observed",
      data: { pathname, search, expectedBasePath: EXPECTED_BASE_PATH },
      timestamp: Date.now(),
    }),
  }).catch(() => {});
  // #endregion

  if (
    !pathname.startsWith(EXPECTED_BASE_PATH) &&
    pathname !== "/favicon.ico" &&
    !pathname.startsWith("/_next/")
  ) {
    // #region agent log
    fetch(DEBUG_ENDPOINT, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "X-Debug-Session-Id": "bb8bcf",
      },
      body: JSON.stringify({
        sessionId: "bb8bcf",
        runId,
        hypothesisId: "H1",
        location: "src/middleware.ts:39",
        message: "Request does not include configured basePath",
        data: { pathname, expectedBasePath: EXPECTED_BASE_PATH },
        timestamp: Date.now(),
      }),
    }).catch(() => {});
    // #endregion
  }

  if (pathname === "/" || pathname === EXPECTED_BASE_PATH) {
    // #region agent log
    fetch(DEBUG_ENDPOINT, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "X-Debug-Session-Id": "bb8bcf",
      },
      body: JSON.stringify({
        sessionId: "bb8bcf",
        runId,
        hypothesisId: "H3_H4",
        location: "src/middleware.ts:61",
        message: "Root-like route requested",
        data: { pathname, basePathRoot: EXPECTED_BASE_PATH },
        timestamp: Date.now(),
      }),
    }).catch(() => {});
    // #endregion
  }

  return NextResponse.next();
}

export const config = {
  matcher: "/:path*",
};
