"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { Menu, X } from "lucide-react";

const LINKS = [
  { href: "/", label: "Home" },
  { href: "/network", label: "Network" },
  { href: "/partner", label: "Partner" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [hovered, setHovered] = useState<string | null>(null);
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="fixed inset-x-0 top-6 z-50 px-6 md:px-10">
      <div className="relative mx-auto flex max-w-[1500px] items-center justify-between">
        {/* Logo, pinned left. mix-blend-mode doesn't reliably blend against
            content scrolling under a position:fixed element in Chromium, so
            instead the logo sits on its own small dark chip — it's never
            touching a light background directly, on any page. */}
<Link
  href="/"
  className="
    group
    relative
    z-10
    flex
    items-center
    rounded-2xl
    bg-white/90
    border border-black/5
    px-1 py-1
    backdrop-blur-xl
    shadow-[0_12px_32px_rgba(0,0,0,0.12)]
  "
>
  <img
    src="/images/logo4.png"
    alt="TopUp"
    className="h-9 w-auto"
  />
</Link>

        {/* Nav pill, centered independently of logo/CTA width */}
        <nav
          onMouseLeave={() => setHovered(null)}
          className="absolute left-1/2 hidden -translate-x-1/2 items-center gap-1 rounded-full bg-[#242424] p-1 lg:flex"
        >
          {LINKS.map((link) => {
            const isActive = link.href === pathname;
            const isHovered = hovered === link.href;

            return (
              <Link
                key={link.href}
                href={link.href}
                onMouseEnter={() => setHovered(link.href)}
                className="relative rounded-full px-5 py-2.5 text-[14px] font-medium"
              >
                {isActive && (
                  <motion.span
                    layoutId="active-pill"
                    className="absolute inset-0 rounded-full bg-white
shadow-[0_2px_12px_rgba(255,255,255,0.15)]"
                    transition={{ type: "spring", stiffness: 500, damping: 34 }}
                  />
                )}
                {!isActive && isHovered && (
                  <motion.span
                    layoutId="hover-pill"
                    className="absolute inset-0 rounded-full bg-white/8"
                    transition={{ type: "spring", stiffness: 500, damping: 34 }}
                  />
                )}
                <span
                  className={`relative z-10 ${
                    isActive ? "text-[#111111]" : "text-[#F8F8F5]"
                  }`}
                >
                  {link.label}
                </span>
              </Link>
            );
          })}
        </nav>

        {/* CTA, pinned right */}
       <Link
            href="/network"
          className="hidden rounded-full bg-[#2563EB] px-6 py-2.5 text-[14px] font-semibold text-[#F8FAFC] transition-colors duration-300 hover:bg-[#06B6D4]
 lg:block"
        >
          Find Charger
        </Link>

        {/* Mobile menu toggle */}
        <button
  onClick={() => setMobileOpen(true)}
  aria-label="Open menu"
  className="
    group
    relative
    z-10
    lg:hidden
    flex
    items-center
    justify-center
    rounded-full
    border border-white/10
    bg-[#1A1A1A]/75
    p-3
    text-[#F8F8F5]
    backdrop-blur-xl
    shadow-[0_8px_24px_rgba(0,0,0,0.25)]
    transition-all duration-300
    hover:bg-[#242424]/80
    hover:scale-105
  "
>
  <Menu size={22} strokeWidth={1.5} />
</button>
      </div>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 top-0 z-50 bg-[#111111] lg:hidden"
          >
            <div className="flex h-20 items-center justify-between px-6">
              <img
  src="/images/logo4.png"
  alt="TopUp"
  className="h-10 w-auto"
/>
              <button
                onClick={() => setMobileOpen(false)}
                className="text-[#F8F8F5]"
                aria-label="Close menu"
              >
                <X size={22} strokeWidth={1.5} />
              </button>
            </div>

            <nav className="mt-16 flex flex-col gap-8 px-8">
              {LINKS.map((link, i) => (
                <motion.div
                  key={link.href}
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.05 * i, duration: 0.4 }}
                >
                  <Link
                    href={link.href}
                    onClick={() => setMobileOpen(false)}
                    className="text-3xl font-medium tracking-[-0.01em] text-[#F8F8F5]"
                  >
                    {link.label}
                  </Link>
                </motion.div>
              ))}

              <Link
            href="/network"
                onClick={() => setMobileOpen(false)}
                className="mt-4 w-fit rounded-full bg-[#F7931A] px-6 py-3 text-[13px] font-medium uppercase tracking-[0.15em] text-[#111111]"
              >
                Find Charger
              </Link>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}