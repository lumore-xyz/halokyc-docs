/**
 * Runtime configuration sourced from NEXT_PUBLIC_* environment variables.
 * Values are inlined at build time, so they are safe to read from the browser.
 */
function getSiteUrl(): string {
  const url = process.env.NEXT_PUBLIC_SITE_URL;
  if (!url) {
    if (process.env.NODE_ENV === "test") {
      return "http://localhost:3000";
    }
    if (process.env.NODE_ENV === "development") {
      return "http://localhost:3000";
    }
    throw new Error(
      "NEXT_PUBLIC_SITE_URL is required. Set it to the production origin (e.g., https://docs.halokyc.com).",
    );
  }
  try {
    const parsed = new URL(url);
    if (parsed.protocol !== "https:") {
      throw new Error("NEXT_PUBLIC_SITE_URL must use HTTPS");
    }
    if (parsed.hostname === "localhost" || parsed.hostname === "127.0.0.1") {
      if (process.env.NODE_ENV === "production") {
        throw new Error(
          "NEXT_PUBLIC_SITE_URL must not point to localhost in production",
        );
      }
    }
    return parsed.origin;
  } catch (e) {
    if (e instanceof Error) throw e;
    throw new Error("NEXT_PUBLIC_SITE_URL must be a valid absolute URL");
  }
}

export const publicEnv = {
  siteUrl: getSiteUrl(),
} as const;

export type PublicEnv = typeof publicEnv;