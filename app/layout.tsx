import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";
import "mapbox-gl/dist/mapbox-gl.css";

import StructuredData from "@/components/StructuredData";
import Navbar from "@/components/Navbar";

const geist = Geist({
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://topupchargers.com"),

  title: {
    default: "Topup | EV Charging Network in India",
    template: "%s | Topup",
  },

  description:
    "Topup is building India's next-generation EV charging network with reliable DC fast charging infrastructure. Find charging stations, partner with us, and power your electric journey.",

  applicationName: "Topup",

  keywords: [
    "Topup",
    "EV charging",
    "EV charging station",
    "EV chargers India",
    "Electric vehicle charging",
    "DC fast charger",
    "CCS2 charger",
    "Fast EV charger",
    "EV charging network India",
    "Electric car charging",
    "EV infrastructure",
    "Charging station near me",
    "Topup Chargers",
  ],

  authors: [
    {
      name: "Topup",
      url: "https://topupchargers.com",
    },
  ],

  creator: "Topup",
  publisher: "Topup",

  category: "Technology",

  formatDetection: {
    telephone: false,
    email: false,
    address: false,
  },

  alternates: {
    canonical: "/",
  },

  robots: {
    index: true,
    follow: true,
    nocache: false,

    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      "max-image-preview": "large",
      "max-video-preview": -1,
      "max-snippet": -1,
    },
  },

  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://topupchargers.com",
    siteName: "Topup",
    title: "Topup | EV Charging Network in India",
    description:
      "Powering India's electric future with reliable DC fast charging infrastructure.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Topup EV Charging Network",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Topup | EV Charging Network",
    description:
      "Reliable DC fast charging infrastructure for India's electric future.",
    creator: "@topup",
    images: ["/og-image.jpg"],
  },

  verification: {
    google: "YOUR_GOOGLE_SEARCH_CONSOLE_CODE",
  },

  appleWebApp: {
    capable: true,
    statusBarStyle: "default",
    title: "Topup",
  },

  icons: {
    icon: [{ url: "/favicon.ico" }],
    apple: "/apple-touch-icon.png",
    shortcut: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en-IN">
      <body
        className={geist.className}
        style={{
          background: "var(--background)",
          color: "var(--foreground)",
        }}
      >
        <StructuredData />
        <Navbar />
        {children}
      </body>
    </html>
  );
}