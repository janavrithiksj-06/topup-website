import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";
import "mapbox-gl/dist/mapbox-gl.css";
import StructuredData from "@/components/StructuredData";

import Navbar from "@/components/Navbar";

const geist = Geist({
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://topupchargers.com"),

  title: {
    default: "Topup | EV Charging Network in India",
    template: "%s | Topup EV Charging",
  },

  description:
    "Topup is building India's next-generation EV charging network. Find fast chargers, discover charging locations, and power your electric journeys with confidence.",

  keywords: [
    "Topup",
    "EV charging",
    "EV charging station",
    "EV chargers India",
    "Electric vehicle charging",
    "Fast charging",
    "DC fast charger",
    "EV charging network",
    "Charging stations India",
    "CCS2 charger",
    "Electric car charger",
  ],

  applicationName: "Topup",

  authors: [
    {
      name: "Topup",
    },
  ],

  creator: "Topup",

  publisher: "Topup",

  category: "Technology",

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-video-preview": -1,
      "max-snippet": -1,
    },
  },

  alternates: {
    canonical: "https://topupchargers.com",
  },

  openGraph: {
    type: "website",
    url: "https://topupchargers.com",
    siteName: "Topup",
    title: "Topup | EV Charging Network in India",
    description:
      "Discover fast, reliable EV charging across India. Topup is building the future of electric mobility.",

    locale: "en_IN",

    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Topup EV Charging",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Topup | EV Charging Network",
    description:
      "Powering India's electric future with a reliable EV charging network.",

    images: ["/og-image.jpg"],
  },

  icons: {
    icon: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
     <body className={`${geist.className} bg-[#F7F7F5] text-neutral-900`}>
  <StructuredData />
  <Navbar />
  {children}
</body>
    </html>
  );
}