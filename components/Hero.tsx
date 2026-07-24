"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative flex h-screen items-center overflow-hidden scroll-mt-28"
    >
      <motion.div
        className="absolute inset-0"
        animate={{ y: [0, -10, 0] }}
        transition={{ duration: 16, ease: "easeInOut", repeat: Infinity }}
      >
        <Image
          src="/images/hero.png"
          alt="Topup EV Charging"
          fill
          priority
          className="object-cover object-right scale-105"
        />
      </motion.div>

      <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-black/30" />

      {/* Orange ambient glow */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(247,147,26,0.18),transparent_35%)]" />

      <motion.div
        className="relative z-10 mx-auto w-full max-w-7xl px-8"
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
      >
        <p className="mb-6 text-sm font-medium uppercase tracking-[0.35em] text-[#F7931A]">
          PREMIUM EV CHARGING NETWORK
        </p>

        <h1 className="max-w-4xl text-6xl font-semibold leading-[0.9] tracking-[-0.04em] md:text-[7.5rem]">
          <span className="text-[#F7931A]">Charge Fast.</span>
          <br />
          Drive Free.
        </h1>

        <p className="mt-8 max-w-xl text-lg leading-8 text-white/75">
          Premium charging infrastructure built for highways, cities, and the
          next generation of electric mobility.
        </p>

        <div className="mt-14 flex flex-wrap gap-5">
          <Link
            href="/network"
            className="rounded-full bg-[#F7931A] px-8 py-4 text-[15px] font-semibold text-black transition-all duration-300 hover:scale-105 hover:brightness-110"
          >
            Find Charger
          </Link>

          <Link
            href="/partner"
            className="rounded-full border border-[#F7931A]/50 px-8 py-4 text-[15px] font-medium text-[#F7931A] transition-all duration-300 hover:bg-[#F7931A] hover:text-black"
          >
            Partner With Us
          </Link>
        </div>
      </motion.div>
    </section>
  );
}