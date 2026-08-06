import type { Metadata } from "next";

import Hero from "@/components/Hero";
import WhyTopup from "@/components/WhyTopup";
import Showcase from "@/components/Showcase";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "EV Charging Network in India",

  description:
    "Topup is building India's next-generation EV charging network with reliable DC fast chargers. Discover charging stations, partner with us, and power your electric journey.",

  alternates: {
    canonical: "/",
  },

  openGraph: {
    title: "Topup | EV Charging Network in India",

    description:
      "Reliable DC fast charging infrastructure built for India's electric future.",

    url: "/",

    images: ["/og-image.jpg"],
  },

  twitter: {
    card: "summary_large_image",

    title: "Topup | EV Charging Network",

    description:
      "Reliable DC fast charging infrastructure built for India's electric future.",

    images: ["/og-image.jpg"],
  },
};

export default function Home() {
  return (
    <main className="scroll-smooth bg-black">
      <Hero />

      <WhyTopup />

      <Showcase />

      <CTA />

      <Footer />
    </main>
  );
}