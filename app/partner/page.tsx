import FadeIn from "@/components/FadeIn";
import { Check, ArrowRight } from "lucide-react";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Partner with Topup",
  description:
    "Partner with Topup to host or invest in premium EV charging infrastructure across India.",
};

export default function PartnerPage() {
  const opportunities = [
    {
      title: "Host a Topup Station",
      subtitle: "For Property Owners",
      description:
        "Turn your hotel, restaurant, commercial property or retail destination into a premium EV charging location while attracting more visitors and creating an additional revenue stream.",
      points: [
        "Increase customer footfall",
        "Monetize unused parking",
        "Premium EV amenity",
      ],
      button: "Host a Charger",
    },
    {
      title: "Invest with Topup",
      subtitle: "For Investors",
      description:
        "Own charging infrastructure without managing day-to-day operations. We build, operate and maintain the entire network while you benefit from long-term growth.",
      points: [
        "You invest",
        "We operate",
        "Recurring revenue",
      ],
      button: "Become a Partner",
    },
  ];

  const services = [
    "Site evaluation",
    "Electrical infrastructure",
    "Fast charger procurement",
    "Installation & commissioning",
    "Software platform",
    "Payment integration",
    "24/7 monitoring",
    "Preventive maintenance",
    "Customer support",
  ];

  const steps = [
    {
      number: "01",
      title: "Apply",
      text: "Tell us about your property or investment goals.",
    },
    {
      number: "02",
      title: "Evaluate",
      text: "We assess demand, infrastructure and project feasibility.",
    },
    {
      number: "03",
      title: "Build",
      text: "Our team installs, commissions and launches the station.",
    },
    {
      number: "04",
      title: "Operate",
      text: "Topup manages software, maintenance and customer support.",
    },
  ];

  const reasons = [
    {
      title: "End-to-end management",
      text: "From planning to maintenance, Topup manages the complete charging ecosystem.",
    },
    {
      title: "Reliable technology",
      text: "Premium charging hardware supported by intelligent software and monitoring.",
    },
    {
      title: "Long-term partnership",
      text: "We're building infrastructure designed to serve drivers for years to come.",
    },
    {
      title: "Shared success",
      text: "Our success grows alongside every partner in the Topup network.",
    },
  ];

  return (
    <main className="relative overflow-hidden bg-[#EEF2F6] text-[#111827]">

      {/* Background */}

      <div className="absolute -left-40 top-20 h-[520px] w-[520px] rounded-full bg-blue-200/30 blur-[140px]" />

      <div className="absolute right-0 top-[500px] h-[420px] w-[420px] rounded-full bg-slate-300/30 blur-[120px]" />

      {/* Hero */}

      <section className="relative mx-auto max-w-[1400px] px-6 pt-40 pb-28 md:px-10">

        <FadeIn>

          <p className="text-[12px] uppercase tracking-[0.35em] text-[#2563EB]">
            Partner With Topup
          </p>

          <h1 className="mt-6 max-w-5xl text-5xl font-medium leading-[0.94] tracking-[-0.03em] md:text-7xl">
            Build the future
            <br />
            of EV charging.
          </h1>

          <p className="mt-10 max-w-2xl text-[18px] leading-8 text-[#5F6B7A]">
            Whether you own a commercial property or want to invest in
            charging infrastructure, Topup provides everything needed to
            build and operate a premium charging destination.
          </p>

          <div className="mt-12 flex flex-wrap gap-5">

            <Link
              href="/contact"
              className="group inline-flex items-center gap-3 rounded-full bg-[#2563EB] px-8 py-4 font-medium text-white transition-all duration-300 hover:-translate-y-1 hover:bg-[#1D4ED8] hover:shadow-xl"
            >
              Become a Partner

              <ArrowRight
                size={18}
                className="transition-transform duration-300 group-hover:translate-x-1"
              />

            </Link>

            <Link
              href="#models"
              className="rounded-full border border-[#D7DEE7] bg-white px-8 py-4 font-medium text-[#111827] transition-all duration-300 hover:border-[#2563EB] hover:text-[#2563EB]"
            >
              Explore Opportunities
            </Link>

          </div>

        </FadeIn>

      </section>

      {/* Partnership Models */}

      <section
        id="models"
        className="border-t border-[#D7DEE7] bg-[#F8FAFC]"
      >

        <div className="mx-auto max-w-[1400px] px-6 py-28 md:px-10">

          <FadeIn>

            <div className="max-w-3xl">

              <p className="text-[12px] uppercase tracking-[0.35em] text-[#2563EB]">
                Partnership Models
              </p>

              <h2 className="mt-5 text-4xl font-medium tracking-[-0.02em] md:text-5xl">
                Two ways to
                <br />
                build with Topup.
              </h2>

              <p className="mt-6 max-w-2xl text-[17px] leading-8 text-[#5F6B7A]">
                Whether you're contributing the location or the investment,
                Topup provides the infrastructure, technology and operational
                expertise.
              </p>

            </div>

            <div className="mt-16 grid gap-8 lg:grid-cols-2">
                              {opportunities.map((item) => (
                <div
                  key={item.title}
                  className="group rounded-[30px] border border-[#D7DEE7] bg-white p-10 shadow-[0_10px_40px_rgba(15,23,42,0.05)] transition-all duration-500 hover:-translate-y-2 hover:border-[#2563EB]/30 hover:shadow-[0_25px_70px_rgba(15,23,42,0.10)]"
                >
                  <div className="flex items-center justify-between">

                    <p className="text-[12px] font-medium uppercase tracking-[0.25em] text-[#2563EB]">
                      {item.subtitle}
                    </p>

                    <div className="h-2 w-2 rounded-full bg-[#2563EB]" />

                  </div>

                  <h3 className="mt-6 text-3xl font-medium tracking-[-0.02em]">
                    {item.title}
                  </h3>

                  <p className="mt-6 leading-8 text-[#5F6B7A]">
                    {item.description}
                  </p>

                  <div className="mt-8 space-y-4">

                    {item.points.map((point) => (
                      <div
                        key={point}
                        className="flex items-center gap-4"
                      >
                        <div className="flex h-9 w-9 items-center justify-center rounded-full bg-[#EAF3FF]">
                          <Check
                            size={15}
                            className="text-[#2563EB]"
                          />
                        </div>

                        <span className="text-[15px] text-[#374151]">
                          {point}
                        </span>
                      </div>
                    ))}

                  </div>

                  <Link
                    href="/contact"
                    className="group mt-10 inline-flex items-center gap-2 rounded-full border border-[#2563EB] px-6 py-3 font-medium text-[#2563EB] transition-all duration-300 hover:bg-[#2563EB] hover:text-white"
                  >
                    {item.button}

                    <ArrowRight
                      size={16}
                      className="transition-transform duration-300 group-hover:translate-x-1"
                    />
                  </Link>

                </div>
              ))}

            </div>

          </FadeIn>

        </div>

      </section>

      {/* Services */}

      <section className="border-t border-[#D7DEE7] bg-[#EEF2F6]">

        <div className="mx-auto max-w-[1400px] px-6 py-28 md:px-10">

          <FadeIn>

            <div className="grid items-start gap-20 lg:grid-cols-12">

              <div className="lg:col-span-4">

                <p className="text-[12px] uppercase tracking-[0.35em] text-[#2563EB]">
                  What Topup Handles
                </p>

                <h2 className="mt-5 text-4xl font-medium leading-tight tracking-[-0.02em]">
                  You bring the
                  <br />
                  opportunity.
                </h2>

                <p className="mt-6 text-[17px] leading-8 text-[#5F6B7A]">
                  You don't need to become an EV charging expert. From
                  infrastructure planning to software and maintenance,
                  Topup manages the complete lifecycle of every station.
                </p>

              </div>

              <div className="grid gap-5 sm:grid-cols-2 lg:col-span-8">

                {services.map((service) => (

                  <div
                    key={service}
                    className="group rounded-2xl border border-[#D7DEE7] bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1.5 hover:border-[#2563EB]/30 hover:shadow-lg"
                  >

                    <div className="flex items-center gap-4">

                      <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#EAF3FF] transition-colors duration-300 group-hover:bg-[#2563EB]">

                        <Check
                          size={18}
                          className="text-[#2563EB] transition-colors duration-300 group-hover:text-white"
                        />

                      </div>

                      <span className="font-medium text-[#111827]">
                        {service}
                      </span>

                    </div>

                  </div>

                ))}

              </div>

            </div>

          </FadeIn>

        </div>

      </section>

      {/* Timeline */}

      <section className="border-t border-[#D7DEE7] bg-white">

        <div className="mx-auto max-w-[1400px] px-6 py-28 md:px-10">

          <FadeIn>

            <div className="max-w-3xl">

              <p className="text-[12px] uppercase tracking-[0.35em] text-[#2563EB]">
                How It Works
              </p>

              <h2 className="mt-5 text-4xl font-medium tracking-[-0.02em] md:text-5xl">
                A simple process
                <br />
                from start to finish.
              </h2>

              <p className="mt-6 max-w-2xl text-[17px] leading-8 text-[#5F6B7A]">
                Every partnership follows a structured process designed to
                make launching an EV charging station straightforward.
              </p>

            </div>

            <div className="mt-20 grid gap-8 md:grid-cols-2 lg:grid-cols-4">

                              {steps.map((step) => (
                <div
                  key={step.number}
                  className="group relative overflow-hidden rounded-[28px] border border-[#D7DEE7] bg-[#F8FAFC] p-8 transition-all duration-500 hover:-translate-y-2 hover:border-[#2563EB]/30 hover:shadow-[0_20px_60px_rgba(15,23,42,0.08)]"
                >
                  <span className="absolute right-5 top-0 text-[90px] font-semibold leading-none text-[#2563EB]/5">
                    {step.number}
                  </span>

                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#EAF3FF] text-lg font-semibold text-[#2563EB] transition-colors duration-300 group-hover:bg-[#2563EB] group-hover:text-white">
                    {step.number}
                  </div>

                  <h3 className="mt-8 text-2xl font-medium tracking-[-0.02em]">
                    {step.title}
                  </h3>

                  <p className="mt-5 leading-7 text-[#5F6B7A]">
                    {step.text}
                  </p>
                </div>
              ))}

            </div>

          </FadeIn>

        </div>

      </section>

      {/* Why Topup */}

      <section className="border-t border-[#D7DEE7] bg-[#EEF2F6]">

        <div className="mx-auto max-w-[1400px] px-6 py-28 md:px-10">

          <FadeIn>

            <div className="grid gap-20 lg:grid-cols-12">

              <div className="lg:col-span-4">

                <p className="text-[12px] uppercase tracking-[0.35em] text-[#2563EB]">
                  Why Topup
                </p>

                <h2 className="mt-5 text-4xl font-medium leading-tight tracking-[-0.02em]">
                  Built around
                  <br />
                  trust.
                </h2>

                <p className="mt-6 text-[17px] leading-8 text-[#5F6B7A]">
                  Infrastructure only succeeds when drivers trust it and
                  partners believe in it. Everything we build starts there.
                </p>

              </div>

              <div className="grid gap-6 md:grid-cols-2 lg:col-span-8">

                {reasons.map((item) => (

                  <div
                    key={item.title}
                    className="group rounded-[28px] border border-[#D7DEE7] bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:border-[#2563EB]/30 hover:shadow-[0_18px_55px_rgba(15,23,42,0.08)]"
                  >

                    <div className="mb-6 h-1.5 w-14 rounded-full bg-[#2563EB] transition-all duration-300 group-hover:w-24" />

                    <h3 className="text-2xl font-medium tracking-[-0.02em]">
                      {item.title}
                    </h3>

                    <p className="mt-5 leading-7 text-[#5F6B7A]">
                      {item.text}
                    </p>

                  </div>

                ))}

              </div>

            </div>

          </FadeIn>

        </div>

      </section>

      {/* Editorial Statement */}

      <section className="bg-white">

        <div className="mx-auto max-w-[1100px] px-6 py-32 text-center md:px-10">

          <FadeIn>

            <p className="text-[12px] uppercase tracking-[0.35em] text-[#2563EB]">
              Looking Ahead
            </p>

            <h2 className="mt-8 text-5xl font-medium leading-[0.98] tracking-[-0.03em] md:text-7xl">
              Great charging
              <br />
              infrastructure is
              <br />
              built together.
            </h2>

            <p className="mx-auto mt-10 max-w-3xl text-[18px] leading-8 text-[#5F6B7A]">
              Every successful charging location begins with the right
              partnership. Whether you're providing the destination or
              supporting the investment, Topup provides the expertise to
              build infrastructure that lasts.
            </p>

          </FadeIn>

        </div>

      </section>
            {/* CTA */}

      <section className="px-6 pb-24 pt-6 md:px-10">

        <FadeIn>

          <div className="relative mx-auto max-w-[1400px] overflow-hidden rounded-[36px] bg-gradient-to-br from-[#0F172A] via-[#17263D] to-[#223A5C]">

            {/* Ambient Glow */}

            <div className="absolute -left-32 top-1/2 h-[360px] w-[360px] -translate-y-1/2 rounded-full bg-blue-500/20 blur-[120px]" />

            <div className="absolute right-0 top-0 h-[280px] w-[280px] rounded-full bg-cyan-400/10 blur-[120px]" />

            {/* Grid */}

            <div className="absolute inset-0 opacity-[0.04] bg-[linear-gradient(rgba(255,255,255,.35)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.35)_1px,transparent_1px)] bg-[size:40px_40px]" />

            <div className="relative px-8 py-20 md:px-20 md:py-24">

              <p className="text-[12px] uppercase tracking-[0.35em] text-blue-300">
                Let's Build Together
              </p>

              <h2 className="mt-6 max-w-5xl text-5xl font-medium leading-[0.95] tracking-[-0.03em] text-white md:text-7xl">
                Ready to become
                <br />
                part of India's
                <br />
                next charging network?
              </h2>

              <p className="mt-10 max-w-2xl text-[18px] leading-8 text-slate-300">
                Whether you're looking to host a charging station or invest in
                one, we'd love to learn more about your goals and explore how
                Topup can help bring the opportunity to life.
              </p>

              <div className="mt-12 flex flex-wrap gap-5">

                <Link
                  href="/contact"
                  className="group inline-flex items-center gap-3 rounded-full bg-white px-8 py-4 font-medium text-[#111827] transition-all duration-300 hover:-translate-y-1 hover:bg-[#F8FAFC]"
                >
                  Contact Us

                  <ArrowRight
                    size={18}
                    className="transition-transform duration-300 group-hover:translate-x-1"
                  />

                </Link>

                <Link
                  href="/network"
                  className="rounded-full border border-white/20 px-8 py-4 font-medium text-white backdrop-blur-sm transition-all duration-300 hover:border-white/40 hover:bg-white/10"
                >
                  Explore Network
                </Link>

              </div>

            </div>

          </div>

        </FadeIn>

      </section>

    </main>
  );
}