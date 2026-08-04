"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center overflow-hidden bg-[#162030] scroll-mt-28"
    >
      {/* Background */}
      <div className="absolute inset-0">
        <video
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          className="absolute inset-0 h-full w-full object-cover"
        >
          <source src="/videos/hero.mp4" type="video/mp4" />
        </video>

        {/* Primary Blue Glow */}
        <div
          className="
            absolute
            left-[-35%]
            top-[-10%]
            h-[350px]
            w-[350px]
            rounded-full
            bg-[#3B82F6]/10
            blur-[120px]

            md:left-[-10%]
            md:top-[10%]
            md:h-[500px]
            md:w-[500px]
            md:bg-[#3B82F6]/20
            md:blur-[140px]
          "
        />

        {/* Secondary Cyan Glow */}
        <div
          className="
            absolute
            right-[-25%]
            bottom-[-15%]
            h-[320px]
            w-[320px]
            rounded-full
            bg-cyan-400/5
            blur-[120px]

            md:right-[-10%]
            md:bottom-[-10%]
            md:h-[450px]
            md:w-[450px]
            md:bg-cyan-400/10
            md:blur-[130px]
          "
        />

        {/* Dark Gradient Overlay */}
        <div
          className="
            absolute inset-0
            bg-gradient-to-r
            from-[#162030]
            via-[#162030]/90
            to-[#162030]/40

            md:from-[#162030]/95
            md:via-[#162030]/65
            md:to-transparent
          "
        />
      </div>

      {/* Content */}
      <div className="relative z-10 mx-auto w-full max-w-[1400px] px-6 py-32 md:px-10">
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.8,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="mb-6 text-[12px] font-medium uppercase tracking-[0.35em] text-slate-200 drop-shadow-[0_2px_12px_rgba(0,0,0,0.6)]"
        >
          Launching 2026 — Tamil Nadu · Karnataka
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 1,
            delay: 0.1,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="max-w-3xl text-6xl font-medium leading-[0.92] tracking-[-0.03em] text-[#F8FAFC] drop-shadow-[0_4px_24px_rgba(0,0,0,0.65)] sm:text-7xl md:text-8xl lg:text-9xl"
        >
          Charge fast.
          <br />
          <span className="text-[#2563EB]">Drive further.</span>
        </motion.h1>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.9,
            delay: 0.35,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="mt-14 flex flex-wrap items-center gap-x-10 gap-y-5"
        >
          <Link
            href="/network"
            className="bg-[#3B82F6] px-8 py-4 text-[13px] font-medium uppercase tracking-[0.15em] text-[#F8FAFC] transition-all duration-300 hover:bg-[#60A5FA]"
          >
            Find Charger
          </Link>

          <Link
            href="/partner"
            className="group flex items-center gap-2 text-[13px] font-medium uppercase tracking-[0.15em] text-[#F8FAFC] transition-colors duration-300 hover:text-[#60A5FA]"
          >
            Partner With Us
            <ArrowRight
              size={14}
              className="transition-transform duration-300 group-hover:translate-x-1"
            />
          </Link>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{
          duration: 1,
          delay: 0.9,
        }}
        className="absolute bottom-8 right-6 hidden items-center gap-3 text-[11px] uppercase tracking-[0.2em] text-slate-300/70 md:right-10 md:flex"
      >
        <span className="h-8 w-px bg-[#E5E7EB]/30" />
        Scroll
      </motion.div>
    </section>
  );
}