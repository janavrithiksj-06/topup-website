"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { Menu, Zap } from "lucide-react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
const [mobileOpen, setMobileOpen] = useState(false);

useEffect(() => {
  let ticking = false;

  const onScroll = () => {
    if (!ticking) {
      requestAnimationFrame(() => {
        setScrolled(window.scrollY > 20);
        ticking = false;
      });

      ticking = true;
    }
  };

  window.addEventListener("scroll", onScroll);

  return () => window.removeEventListener("scroll", onScroll);
}, []);

const glass = scrolled
  ? "bg-white/85 border-neutral-200 shadow-[0_10px_40px_rgba(0,0,0,.08)]"
  : "bg-black/20 border-white/10 shadow-[0_10px_40px_rgba(0,0,0,.12)]";

  return (
    <header className="fixed top-5 left-1/2 z-50 -translate-x-1/2 px-4 w-full">
      <div className="mx-auto flex max-w-7xl items-center justify-center gap-4">

        {/* Logo */}
        <motion.div
          initial={{ opacity: 0, y: -25 }}
          animate={{ opacity: 1, y: 0 }}
         transition={{
  duration: 0.35,
  ease: "easeOut",
}}
        >
          <Link
            href="/"
            className={`flex h-12.5 items-center rounded-xl border px-6 backdrop-blur-md transition-colors duration-300 hover:-translate-y-0.5 hover:shadow-[0_15px_40px_rgba(0,0,0,.15)] ${glass}`}
          >
            <span
              className={`text-2xl font-bold ${
                scrolled ? "text-black" : "text-white"
              }`}
            >
              Topup
            </span>
          </Link>
        </motion.div>

        {/* Navigation */}
        <motion.nav
          initial={{ opacity: 0, y: -25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
  duration: 0.35,
  ease: "easeOut",
}}
          className={`hidden lg:flex h-12.5 items-center rounded-xl border px-8 backdrop-blur-md transition-colors duration-300 hover:-translate-y-0.5 hover:shadow-[0_15px_40px_rgba(0,0,0,.15)] ${glass}`}
        >
          <div
            className={`flex items-center gap-8 font-semibold text-[15px] ${
              scrolled ? "text-neutral-700" : "text-white"
            }`}
          >
            <Link
              href="/"
              className="transition hover:text-[#F7931A]"
            >
              Home
            </Link>

            <Link
              href="/network"
              className="transition hover:text-[#F7931A]"
            >
              Network
            </Link>

            <Link
              href="/partner"
              className="transition hover:text-[#F7931A]"
            >
              Partner
            </Link>

            <Link
              href="/contact"
              className="transition hover:text-[#F7931A]"
            >
              Contact
            </Link>
          </div>
        </motion.nav>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{
  duration: 0.35,
  ease: "easeOut",
}}
          className="hidden lg:block pt-1"
        >
          <Link
            href="/network"
            className="group flex h-12.5 items-center gap-2 rounded-xl bg-[#F7931A] px-7 font-semibold text-white shadow-xl transition-colors duration-300 hover:scale-[1.01] hover:scale-[1.01]
hover:shadow-lg
hover:bg-[#FFAA33]
active:scale-95 hover:bg-[#ffa726]"
          >
            <Zap
              size={16}
              className="transition-transform duration-300 group-hover:translate-x-1"
            />
            Find Charger
          </Link>
        </motion.div>

        {/* Mobile */}
        <button
  onClick={() => setMobileOpen(!mobileOpen)}
  className={`lg:hidden flex h-14 w-14 items-center justify-center rounded-xl border backdrop-blur-xl ${glass}`}
>
  <Menu className={scrolled ? "text-black" : "text-white"} />
</button>
      </div>
      {mobileOpen && (
  <div className="fixed inset-0 z-40 bg-black/50 lg:hidden">
    <div className="absolute right-4 top-24 w-64 rounded-2xl border border-white/10 bg-neutral-900 p-6 shadow-2xl">
      <div className="flex flex-col gap-5">

        <Link
          href="/"
          onClick={() => setMobileOpen(false)}
        >
          Home
        </Link>

        <Link
          href="/network"
          onClick={() => setMobileOpen(false)}
        >
          Network
        </Link>

        <Link
          href="/partner"
          onClick={() => setMobileOpen(false)}
        >
          Partner
        </Link>

        <Link
          href="/contact"
          onClick={() => setMobileOpen(false)}
        >
          Contact
        </Link>

        <Link
          href="/network"
          onClick={() => setMobileOpen(false)}
          className="mt-2 rounded-full bg-[#F7931A] px-5 py-3 text-center font-semibold text-black"
        >
          Find Charger
        </Link>

      </div>
    </div>
  </div>
)}
    </header>
  );
}