"use client";

import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export default function Hero() {
  const shouldReduceMotion = useReducedMotion();

  const reveal = (delay: number, y = 20) =>
    shouldReduceMotion
      ? {
          initial: { opacity: 1, y: 0 },
          animate: { opacity: 1, y: 0 },
          transition: { duration: 0 },
        }
      : {
          initial: { opacity: 0, y },
          animate: { opacity: 1, y: 0 },
          transition: {
            duration: 0.9,
            delay,
            ease: [0.22, 1, 0.36, 1] as const,
          },
        };

  return (
    <section
      id="home"
      data-navbar-theme="dark"
      aria-label="Topup EV charging network"
      className="relative flex min-h-screen items-center overflow-hidden bg-[#080808] text-white"
    >
      {/* =========================================================
          CINEMATIC HERO VIDEO
      ========================================================= */}

      <div className="absolute inset-0">
       <div className="absolute inset-0 bg-[#080808]" />

        {/* Very light overall treatment */}
        <div
          aria-hidden="true"
          className="absolute inset-0 bg-black/15"
        />

        {/* Protects the left-side typography without killing the video */}
        <div
          aria-hidden="true"
          className="
            absolute inset-0
            bg-gradient-to-r
            from-black/75
            via-black/30
            to-transparent
          "
        />

        {/* Subtle bottom transition */}
        <div
          aria-hidden="true"
          className="
            absolute inset-x-0 bottom-0 h-32
            bg-gradient-to-t
            from-[#080808]/70
            to-transparent
          "
        />
      </div>

      {/* =========================================================
          HERO CONTENT
          Existing Navbar sits above this component.
      ========================================================= */}

      <div
        className="
          relative z-10
          mx-auto
          flex
          min-h-screen
          w-full
          max-w-[1600px]
          items-center
          px-6
          pb-24
          pt-28
          md:px-10
          lg:px-14
        "
      >
        <div className="w-full">

          {/* Small eyebrow */}
          <motion.div
            {...reveal(0.1, 12)}
            className="mb-7 flex items-center gap-4"
          >
            <span
              aria-hidden="true"
              className="h-px w-10 bg-[#FF8000]"
            />

            <span
              className="
                text-[10px]
                font-medium
                uppercase
                tracking-[0.32em]
                text-white/65
                md:text-[11px]
              "
            >
              Built for the road ahead
            </span>
          </motion.div>

          {/* =====================================================
              MAIN HEADLINE
          ===================================================== */}

          <motion.h1
            {...reveal(0.18, 30)}
            className="
              max-w-[980px]
              text-[clamp(4rem,9.5vw,9.5rem)]
              font-medium
              leading-[0.82]
              tracking-[-0.07em]
              text-white
            "
          >
            <span className="block">
              Charge fast.
            </span>

            <span className="block">
              Drive further.
            </span>

            <span className="sr-only">
              Topup EV charging network with DC fast chargers across India
            </span>
          </motion.h1>

          {/* =====================================================
              DESCRIPTION
          ===================================================== */}

          <motion.p
            {...reveal(0.3, 18)}
            className="
              mt-9
              max-w-[520px]
              text-[15px]
              leading-7
              text-white/65
              md:text-[17px]
              md:leading-8
            "
          >
            A reliable DC fast charging network built for
            electric mobility across India.
          </motion.p>

          {/* =====================================================
              ACTIONS
          ===================================================== */}

          <motion.div
            {...reveal(0.4, 16)}
            className="
              mt-10
              flex
              flex-wrap
              items-center
              gap-8
            "
          >
            {/* Primary CTA */}
            <Link
              href="/network"
              aria-label="Find Topup charging stations"
              className="
                group
                inline-flex
                items-center
                gap-7
                bg-white
                px-7
                py-4
                text-[11px]
                font-semibold
                uppercase
                tracking-[0.18em]
                text-black
                transition-all
                duration-300
                hover:bg-[#FF8000]
              "
            >
              Find a Charger

              <ArrowRight
                size={15}
                strokeWidth={1.8}
                aria-hidden="true"
                className="
                  transition-transform
                  duration-300
                  group-hover:translate-x-1
                "
              />
            </Link>

            {/* Secondary CTA */}
            <Link
              href="/partner"
              aria-label="Partner with Topup"
              className="
                group
                inline-flex
                items-center
                gap-3
                border-b
                border-white/35
                pb-2
                text-[11px]
                font-medium
                uppercase
                tracking-[0.18em]
                text-white/80
                transition-all
                duration-300
                hover:border-white
                hover:text-white
              "
            >
              Partner With Us

              <ArrowRight
                size={14}
                strokeWidth={1.8}
                aria-hidden="true"
                className="
                  transition-transform
                  duration-300
                  group-hover:translate-x-1
                "
              />
            </Link>
          </motion.div>
        </div>
      </div>

      {/* =========================================================
          BOTTOM INFORMATION BAR
      ========================================================= */}

      <motion.div
        initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{
          duration: shouldReduceMotion ? 0 : 1,
          delay: shouldReduceMotion ? 0 : 0.8,
        }}
        className="
          absolute
          bottom-0
          left-0
          right-0
          z-10
          border-t
          border-white/10
        "
      >
        <div
          className="
            mx-auto
            flex
            max-w-[1600px]
            items-center
            justify-between
            px-6
            py-5
            md:px-10
            lg:px-14
          "
        >
          <div className="flex items-center gap-7">

            <div>
              <p className="text-[8px] uppercase tracking-[0.28em] text-white/30">
                Launching
              </p>

              <p className="mt-1 text-xs text-white/65">
                2026
              </p>
            </div>

            <span className="h-6 w-px bg-white/10" />

            <div className="hidden sm:block">
              <p className="text-[8px] uppercase tracking-[0.28em] text-white/30">
                Starting in
              </p>

              <p className="mt-1 text-xs text-white/65">
                Tamil Nadu · Karnataka
              </p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <span className="hidden text-[8px] uppercase tracking-[0.28em] text-white/30 sm:block">
              Explore
            </span>

            <span
              aria-hidden="true"
              className="h-7 w-px bg-white/25"
            />
          </div>
        </div>
      </motion.div>

      {/* =========================================================
          DESKTOP SIDE INDICATOR
      ========================================================= */}

      <motion.div
        initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{
          duration: shouldReduceMotion ? 0 : 0.8,
          delay: shouldReduceMotion ? 0 : 1,
        }}
        aria-hidden="true"
        className="
          absolute
          right-6
          top-1/2
          z-10
          hidden
          -translate-y-1/2
          flex-col
          items-center
          gap-3
          lg:flex
          xl:right-10
        "
      >
        <span className="text-[9px] tracking-[0.2em] text-white/45">
          01
        </span>

        <span className="h-14 w-px bg-white/20" />

        <span
          className="
            [writing-mode:vertical-rl]
            text-[8px]
            uppercase
            tracking-[0.3em]
            text-white/25
          "
        >
          Explore
        </span>
      </motion.div>
    </section>
  );
}