import { RootProvider } from "fumadocs-ui/provider/next";
import type { Metadata } from "next";
import { Inter, JetBrains_Mono, Manrope } from "next/font/google";
import { publicEnv } from "@/lib/env";
import "./global.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
});

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-display",
});

const mono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
});

export const metadata: Metadata = {
  metadataBase: new URL(publicEnv.siteUrl),
  title: {
    default: "HaloKYC Documentation",
    template: "%s · HaloKYC Docs",
  },
  description:
    "Set up HaloKYC and add calm, auditable identity verification to your product.",
  openGraph: {
    type: "website",
    locale: "en_US",
    siteName: "HaloKYC Docs",
    title: "HaloKYC Documentation",
    description:
      "Set up HaloKYC and add calm, auditable identity verification to your product.",
    images: [
      {
        url: "/og/docs/image.png",
        width: 1200,
        height: 630,
        alt: "HaloKYC Documentation",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "HaloKYC Documentation",
    description:
      "Set up HaloKYC and add calm, auditable identity verification to your product.",
    images: ["/og/docs/image.png"],
    creator: "@halokyc",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function Layout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${manrope.variable} ${mono.variable}`}
      suppressHydrationWarning
    >
      <body className="flex flex-col min-h-screen">
        <RootProvider>{children}</RootProvider>
      </body>
    </html>
  );
}
