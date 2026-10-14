import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";
import { siteUrl } from "./site";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const title = "Small Business Bookkeeping, Cape Town | OMR Precision Books";
const description =
  "Founder-run monthly bookkeeping for South African small businesses. Bank reconciliations, clear reports and transparent pricing. Book a free 15-minute call.";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title,
  description,
  alternates: { canonical: "/" },
  openGraph: {
    title,
    description,
    url: "/",
    siteName: "OMR Precision Books",
    locale: "en_ZA",
    type: "website",
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en-ZA"
      className={`${geistSans.variable} h-full antialiased motion-safe:scroll-smooth`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
