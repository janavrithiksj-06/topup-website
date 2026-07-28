import Hero from "@/components/Hero";
import WhyTopup from "@/components/WhyTopup";
import Showcase from "@/components/Showcase";
import Numbers from "@/components/Numbers";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";

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