"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center overflow-hidden bg-[#111111] scroll-mt-28"
    >
      <div className="absolute inset-0">
        <Image
          src="/images/hero.png"
          alt="Topup charging station"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#111111] via-[#111111]/55 to-[#111111]/15" />
      </div>

      <div className="relative z-10 mx-auto w-full max-w-[1400px] px-6 py-32 md:px-10">
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="mb-6 text-[12px] font-medium uppercase tracking-[0.35em] text-[#D6D6D6]"
        >
          Launching 2026 — Tamil Nadu · Karnataka
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
          className="max-w-3xl text-6xl font-medium leading-[0.92] tracking-[-0.03em] text-[#F8F8F5] sm:text-7xl md:text-8xl lg:text-9xl"
        >
          Charge fast.
          <br />
          <span className="text-[#F7931A]">Drive further.</span>
        </motion.h1>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.35, ease: [0.22, 1, 0.36, 1] }}
          className="mt-14 flex flex-wrap items-center gap-x-10 gap-y-5"
        >
         <Link
            href="/network"
            className="bg-[#F7931A] px-8 py-4 text-[13px] font-medium uppercase tracking-[0.15em] text-[#111111] transition-colors duration-300 hover:bg-[#F8F8F5]"
          >
            Find Charger
          </Link>

          <Link
            href="/partner"
            className="group flex items-center gap-2 text-[13px] font-medium uppercase tracking-[0.15em] text-[#F8F8F5] transition-colors duration-300 hover:text-[#F7931A]"
          >
            Partner With Us
            <ArrowRight
              size={14}
              className="transition-transform duration-300 group-hover:translate-x-1"
            />
          </Link>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.9 }}
        className="absolute bottom-8 right-6 hidden items-center gap-3 text-[11px] uppercase tracking-[0.2em] text-[#D6D6D6]/60 md:right-10 md:flex"
      >
        <span className="h-8 w-px bg-[#D6D6D6]/30" />
        Scroll
      </motion.div>
    </section>
  );
}