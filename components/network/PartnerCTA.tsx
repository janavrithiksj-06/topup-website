import Link from "next/link";
import FadeIn from "@/components/FadeIn";
import { ArrowRight } from "lucide-react";

export default function PartnerCTA() {
  return (
    <section className="px-6 pb-24 md:px-10">

      <FadeIn>

        <div className="relative mx-auto max-w-[1400px] overflow-hidden rounded-[36px] bg-gradient-to-br from-[#0F172A] via-[#17263D] to-[#223A5C]">

          {/* Glow */}

          <div className="absolute -left-24 top-1/2 h-[340px] w-[340px] -translate-y-1/2 rounded-full bg-blue-500/20 blur-[120px]" />

          <div className="absolute right-0 top-0 h-[260px] w-[260px] rounded-full bg-cyan-400/10 blur-[120px]" />

          {/* Grid */}

          <div className="absolute inset-0 opacity-[0.04] bg-[linear-gradient(rgba(255,255,255,.35)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.35)_1px,transparent_1px)] bg-[size:40px_40px]" />

          <div className="relative px-8 py-20 md:px-20 md:py-24">

            <p className="text-[12px] uppercase tracking-[0.35em] text-blue-300">
              Partner With Topup
            </p>

            <h2 className="mt-6 max-w-4xl text-5xl font-medium leading-[0.95] tracking-[-0.03em] text-white md:text-6xl">
              Bring premium EV charging
              <br />
              to your property.
            </h2>

            <p className="mt-8 max-w-2xl text-[18px] leading-8 text-slate-300">
              Hotels, restaurants, workplaces, retail destinations and
              commercial properties can become part of the next generation of
              India's EV charging network. We'll handle the technology,
              operations and ongoing support.
            </p>

            <div className="mt-12 flex flex-wrap gap-5">

              <Link
                href="/partner"
                className="group inline-flex items-center gap-3 rounded-full bg-white px-8 py-4 font-medium text-[#111827] transition-all duration-300 hover:-translate-y-1 hover:bg-[#F8FAFC]"
              >
                Become a Partner

                <ArrowRight
                  size={18}
                  className="transition-transform duration-300 group-hover:translate-x-1"
                />

              </Link>

              <Link
                href="/contact"
                className="rounded-full border border-white/20 px-8 py-4 font-medium text-white backdrop-blur-sm transition-all duration-300 hover:border-white/40 hover:bg-white/10"
              >
                Contact Us
              </Link>

            </div>

          </div>

        </div>

      </FadeIn>

    </section>
  );
}