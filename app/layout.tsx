import type { Metadata } from "next";
import "@fontsource/manrope/400.css";
import "@fontsource/manrope/500.css";
import "@fontsource/manrope/600.css";
import "@fontsource/manrope/700.css";
import "@fontsource/manrope/800.css";
import "@fontsource/ibm-plex-mono/400.css";
import "@fontsource/ibm-plex-mono/500.css";
import "@fontsource/ibm-plex-mono/600.css";
import "./globals.css";
import { profile } from "@/data/profile";
import { SITE_URL } from "@/lib/site";

const personName = "B Kasinath";
const altName = "Kasinath Thirupuram";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: `${personName} (Kasinath Thirupuram) — ${profile.title}`,
  description: `${profile.tagline} ${personName}, also known as Kasinath Thirupuram, is a Data Analyst based in ${profile.location}.`,
  keywords: [
    "Kasinath Thirupuram",
    "B Kasinath",
    "Kasinath",
    "Data Analyst",
    "Power BI Developer",
    "Kristu Jayanti University",
    "Data Analyst Bengaluru",
    "Data Analyst Kerala",
  ],
  authors: [{ name: personName }],
  alternates: { canonical: SITE_URL },
  openGraph: {
    title: `${personName} — Data Analyst Portfolio`,
    description: profile.tagline,
    url: SITE_URL,
    siteName: `${personName} Portfolio`,
    type: "profile",
  },
  twitter: {
    card: "summary",
    title: `${personName} — Data Analyst Portfolio`,
    description: profile.tagline,
  },
};

const personJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: personName,
  alternateName: altName,
  url: SITE_URL,
  jobTitle: profile.title,
  email: profile.email,
  sameAs: [profile.linkedin, profile.github],
  address: {
    "@type": "PostalAddress",
    addressLocality: "Thiruvananthapuram",
    addressRegion: "Kerala",
    addressCountry: "IN",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="font-sans antialiased">
        <script
          type="application/ld+json"
          // eslint-disable-next-line react/no-danger
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
        />
        {children}
      </body>
    </html>
  );
}
