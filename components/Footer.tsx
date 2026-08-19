import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-black text-white">
      <div className="mx-auto max-w-7xl px-8 py-16">

        {/* Main Card */}
        <div className="rounded-[40px] bg-white p-8 md:p-12">

          <div className="flex flex-col gap-12">

            {/* Top */}
            <div className="flex flex-col gap-10 md:flex-row md:items-end md:justify-between">

              <div className="max-w-xl">
                <Image
                  src="/images/logo3.png"
                  alt="TopUp"
                  width={180}
                  height={60}
                  priority
                  className="h-16 w-auto"
                />

                <h2 className="mt-8 text-4xl font-semibold leading-tight text-[#111111] md:text-5xl">
                  Powering the Future of Mobility.
                </h2>
              </div>

              <nav className="flex flex-wrap gap-x-8 gap-y-4 text-[15px] font-medium text-[#6B7280]">
                <Link
                  href="/network"
                  className="transition hover:text-[#111111]"
                >
                  Network
                </Link>

                <Link
                  href="/partner"
                  className="transition hover:text-[#111111]"
                >
                  Partner
                </Link>

                <Link
                  href="/about"
                  className="transition hover:text-[#111111]"
                >
                  About
                </Link>

                <Link
                  href="/contact"
                  className="transition hover:text-[#111111]"
                >
                  Contact
                </Link>
              </nav>

            </div>

            {/* Support */}
            <div className="border-t border-[#E5E7EB] pt-8">

              <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-3">

                {/* Email */}
                <div>
                  <p className="text-[10px] font-medium uppercase tracking-[0.25em] text-[#9CA3AF]">
                    Support Email
                  </p>

                  <a
                    href="mailto:hello@topupchargers.com"
                    className="
                      mt-3
                      block
                      text-[15px]
                      font-medium
                      text-[#111111]
                      transition
                      hover:text-[#FF8000]
                    "
                  >
                    hello@topupchargers.com
                  </a>
                </div>

                {/* Phone */}
                <div>
                  <p className="text-[10px] font-medium uppercase tracking-[0.25em] text-[#9CA3AF]">
                    Support Phone
                  </p>

                  <a
                    href="tel:+919080299599"
                    className="
                      mt-3
                      block
                      text-[15px]
                      font-medium
                      text-[#111111]
                      transition
                      hover:text-[#FF8000]
                    "
                  >
                    +91 90802 99599
                  </a>
                </div>

                {/* Availability */}
                <div>

                  <p className="mt-3 text-[15px] font-medium text-[#111111]">
                    We're here to help.
                  </p>
                </div>

              </div>

            </div>

          </div>
        </div>

        {/* Bottom */}
        <div className="mt-8 border-t border-white/10 pt-6">

          <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">

            <p className="text-sm text-white/50">
              © 2026 TopUp. All rights reserved.
            </p>

            <div className="flex flex-wrap items-center gap-x-6 gap-y-3 text-sm text-white/50">

              <Link
                href="/privacy-policy"
                className="transition hover:text-[#FF8000]"
              >
                Privacy Policy
              </Link>

              <Link
                href="/terms-and-conditions"
                className="transition hover:text-[#FF8000]"
              >
                Terms & Conditions
              </Link>

              <Link
                href="/faq"
                className="transition hover:text-[#FF8000]"
              >
                FAQ
              </Link>

            </div>

            <p className="text-sm uppercase tracking-[0.25em] text-white/40">
              Designed and engineered in India 🇮🇳
            </p>

          </div>
        </div>

      </div>
    </footer>
  );
}