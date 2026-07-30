import Hero from "@/components/Hero";
import WhyTopup from "@/components/WhyTopup";
import Showcase from "@/components/Showcase";
import Numbers from "@/components/Numbers";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "EV Charging Network in India",
  description:
    "Discover Topup's fast and reliable EV charging network across India. Find charging stations, power your journeys, and join the future of electric mobility.",
};

export default function Home() {
  return (
    <main className="bg-black scroll-smooth">
      <Hero />
      <WhyTopup />
      <Showcase />
      <Numbers />
      <CTA />
      <Footer />
    </main>
  );
}