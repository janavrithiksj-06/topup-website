"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import { Menu, X, MapPin, ArrowRight } from "lucide-react";

const LINKS = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/network", label: "Network" },
  { href: "/partner", label: "Partner" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  const pathname = usePathname();

  const [hovered, setHovered] = useState<string | null>(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [lightBackground, setLightBackground] = useState(false);

  /*
   * Detect the section underneath the navbar.
   *
   * Sections should use:
   *
   * data-navbar-theme="dark"
   *
   * or:
   *
   * data-navbar-theme="light"
   */

  useEffect(() => {
    const updateNavbarTheme = () => {
      const elements = document.elementsFromPoint(
        window.innerWidth / 2,
        105
      );

      const themedSection = elements.find(
        (element) =>
          element instanceof HTMLElement &&
          element.dataset.navbarTheme
      ) as HTMLElement | undefined;

      setLightBackground(
        themedSection?.dataset.navbarTheme === "light"
      );
    };

    updateNavbarTheme();

    window.addEventListener("scroll", updateNavbarTheme, {
      passive: true,
    });

    window.addEventListener("resize", updateNavbarTheme);

    return () => {
      window.removeEventListener("scroll", updateNavbarTheme);
      window.removeEventListener("resize", updateNavbarTheme);
    };
  }, []);

  return (
    <header className="fixed inset-x-0 top-6 z-50 px-6 md:px-10">
      <div className="relative mx-auto flex max-w-[1500px] items-center justify-between">

        {/* =====================================================
            LOGO
        ===================================================== */}

        <Link
          href="/"
          className="relative z-10 block"
          aria-label="TopUp home"
        >
          <img
            src={
              lightBackground
                ? "/images/logo3.png"
                : "/images/logo4.png"
            }
            alt="TopUp"
            className="h-16 w-auto transition-opacity duration-200"
          />
        </Link>

        {/* =====================================================
            DESKTOP NAVIGATION
        ===================================================== */}

        <nav
          onMouseLeave={() => setHovered(null)}
          className="
            absolute
            left-1/2
            hidden
            -translate-x-1/2
            items-center
            gap-1
            rounded-full
            bg-[#242424]
            p-1
            lg:flex
          "
        >
          {LINKS.map((link) => {
            const isActive = link.href === pathname;
            const isHovered = hovered === link.href;

            return (
              <Link
                key={link.href}
                href={link.href}
                onMouseEnter={() => setHovered(link.href)}
                className="
                  relative
                  rounded-full
                  px-5
                  py-2.5
                  text-[14px]
                  font-medium
                "
              >
                {/* Active navigation pill */}
                {isActive && (
                  <motion.span
                    layoutId="active-pill"
                    className="
                      absolute
                      inset-0
                      rounded-full
                      bg-white
                      shadow-[0_2px_12px_rgba(255,255,255,0.15)]
                    "
                    transition={{
                      type: "spring",
                      stiffness: 500,
                      damping: 34,
                    }}
                  />
                )}

                {/* Hover pill */}
                {!isActive && isHovered && (
                  <motion.span
                    layoutId="hover-pill"
                    className="
                      absolute
                      inset-0
                      rounded-full
                      bg-white/8
                    "
                    transition={{
                      type: "spring",
                      stiffness: 500,
                      damping: 34,
                    }}
                  />
                )}

                {/* Navigation text */}
                <span
                  className={`
                    relative
                    z-10
                    ${
                      isActive
                        ? "text-[#111111]"
                        : "text-[#F8F8F5]"
                    }
                  `}
                >
                  {link.label}
                </span>
              </Link>
            );
          })}
        </nav>

        {/* =====================================================
            FIND CHARGER CTA
        ===================================================== */}
<Link
  href="/network"
  className="
    group
    hidden
    items-center
    gap-2
    rounded-full
    bg-[#242424]
    p-1
    lg:flex
  "
>
  <div className="flex items-center gap-1.5 px-3">
    <MapPin
      size={15}
      strokeWidth={1.8}
      className="text-[#F8F8F5]"
    />

    <span className="text-[14px] font-medium text-[#F8F8F5]">
      Find Charger
    </span>
  </div>

  <div
    className="
      flex
      h-8
      w-8
      items-center
      justify-center
      rounded-full
      bg-white
      text-[#111111]
      transition-transform
      duration-300
      group-hover:translate-x-0.5
    "
  >
    <ArrowRight size={15} />
  </div>
</Link>
        {/* =====================================================
            MOBILE MENU BUTTON
        ===================================================== */}

        <button
          onClick={() => setMobileOpen(true)}
          aria-label="Open menu"
          className="
            group
            relative
            z-10
            flex
            items-center
            justify-center
            rounded-full
            border
            border-white/10
            bg-[#1A1A1A]/75
            p-3
            text-[#F8F8F5]
            shadow-[0_8px_24px_rgba(0,0,0,0.25)]
            backdrop-blur-xl
            transition-[transform,box-shadow,border-color,background-color]
            duration-300
            ease-[cubic-bezier(.22,1,.36,1)]
            hover:scale-105
            hover:bg-[#242424]/80
            lg:hidden
          "
        >
          <Menu size={22} strokeWidth={1.5} />
        </button>
      </div>

      {/* =======================================================
          MOBILE MENU
      ======================================================= */}

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="
              fixed
              inset-0
              top-0
              z-50
              bg-[#111111]
              lg:hidden
            "
          >
            {/* Mobile menu header */}
            <div className="flex h-20 items-center justify-between px-6">

              <Link
                href="/"
                onClick={() => setMobileOpen(false)}
                aria-label="TopUp home"
              >
                <img
                  src="/images/logo4.png"
                  alt="TopUp"
                  className="h-10 w-auto"
                />
              </Link>

              <button
                onClick={() => setMobileOpen(false)}
                className="text-[#F8F8F5]"
                aria-label="Close menu"
              >
                <X
                  size={22}
                  strokeWidth={1.5}
                />
              </button>
            </div>

            {/* Mobile links */}
            <nav className="mt-16 flex flex-col gap-8 px-8">
              {LINKS.map((link, i) => (
                <motion.div
                  key={link.href}
                  initial={{
                    opacity: 0,
                    y: 16,
                  }}
                  animate={{
                    opacity: 1,
                    y: 0,
                  }}
                  transition={{
                    delay: 0.05 * i,
                    duration: 0.4,
                  }}
                >
                  <Link
                    href={link.href}
                    onClick={() => setMobileOpen(false)}
                    className="
                      text-3xl
                      font-medium
                      tracking-[-0.01em]
                      text-[#F8F8F5]
                      transition-colors
                      duration-200
                      hover:text-[#FF8000]
                    "
                  >
                    {link.label}
                  </Link>
                </motion.div>
              ))}

              {/* Mobile CTA */}
              <Link
                href="/network"
                onClick={() => setMobileOpen(false)}
                className="
                  mt-4
                  flex
                  w-fit
                  items-center
                  gap-3
                  rounded-full
                  bg-[#FF8000]
                  px-6
                  py-3
                  text-[13px]
                  font-medium
                  uppercase
                  tracking-[0.15em]
                  text-black
                "
              >
                Find Charger

                <ArrowRight size={15} />
              </Link>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}