import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Topup | EV Charging Network in India",
  description:
  "Learn about Topup, our mission to build a reliable DC fast EV charging network across India, and how we're making electric mobility more accessible.",
};

export default function AboutPage() {
  return (
    <main className="bg-[#EEF2F6] text-[#101828]">

      {/* Hero */}
      <section className="mx-auto flex max-w-[1400px] flex-col px-6 pt-40 pb-20 md:px-10">

        <p className="mb-6 text-[12px] font-medium uppercase tracking-[0.35em] text-[#1A73E8]">
          About Topup
        </p>

        <h1 className="max-w-5xl text-5xl font-medium leading-[0.94] tracking-[-0.03em] md:text-7xl">
          EV charging should
          <br />
          feel effortless.
        </h1>

        <p className="mt-10 max-w-2xl text-[18px] leading-8 text-[#5B6472]">
          At Topup, we believe people shouldn't have to think twice about driving an electric vehicle. We're building a reliable network of DC fast charging stations across India so every journey feels simple, dependable, and effortless.
        </p>

      </section>

      {/* Full Width Visual */}

      <section className="px-6 pb-24 md:px-10">

        <div className="relative mx-auto h-[520px] max-w-[1400px] overflow-hidden rounded-[32px] border border-[#D7DEE7] bg-[#DCE5EF]">

          {/* Replace this image later */}
          <Image
            src="/images/about-hero.jpg"
            alt="Topup DC fast EV charging station in India"
            fill
            className="object-cover"
            priority
          />

          <div className="absolute inset-0 bg-gradient-to-t from-black/45 via-black/5 to-transparent" />

          <div className="absolute bottom-10 left-10 max-w-xl rounded-2xl border border-white/20 bg-white/10 p-8 backdrop-blur-xl">

            <p className="text-[11px] uppercase tracking-[0.3em] text-blue-200">
              Looking Ahead
            </p>

            <h2 className="mt-4 text-3xl font-medium leading-tight text-white">
              Building confidence,
              <br />
              one charging location
              <br />
              at a time.
            </h2>

          </div>

        </div>

      </section>

      {/* Intro */}

      <section className="mx-auto max-w-[1400px] px-6 pb-28 md:px-10">

        <div className="grid gap-20 lg:grid-cols-12">

          <div className="lg:col-span-4">

            <p className="text-[12px] uppercase tracking-[0.35em] text-[#1A73E8]">
              Why Topup
            </p>

            <h2 className="mt-5 text-4xl font-medium leading-tight tracking-[-0.02em]">
              The problem isn't
              <br />
              electric vehicles.
            </h2>

          </div>

          <div className="lg:col-span-8 space-y-8 text-[19px] leading-9 text-[#5B6472]">

            <p>
              Most people don't hesitate to buy an EV because of the vehicle.
              They hesitate because they're unsure whether charging will be
              available when they need it.
            </p>

            <p>
              That uncertainty slows adoption far more than battery technology
              ever will.
            </p>

            <p>
              We think charging infrastructure should remove that uncertainty,
              not create it. It should be dependable, intuitive, and available
              where people actually travel—not just where it's convenient to
              install.
            </p>

          </div>

        </div>

      </section>

            {/* Principles */}

      <section className="border-y border-[#D7DEE7] bg-[#F7F9FC]">

        <div className="mx-auto max-w-[1400px] px-6 py-28 md:px-10">

          <div className="mb-16 flex flex-col justify-between gap-8 lg:flex-row lg:items-end">

            <div>

              <p className="text-[12px] uppercase tracking-[0.35em] text-[#1A73E8]">
                What matters
              </p>

              <h2 className="mt-5 text-4xl font-medium tracking-[-0.02em] md:text-5xl">
                Three things
                <br />
                we'll never compromise on.
              </h2>

            </div>

            <p className="max-w-lg text-[17px] leading-8 text-[#5B6472]">
              Every decision we make comes back to these principles. They shape
              where we build, how we design the experience, and what drivers
              should expect from Topup.
            </p>

          </div>

          <div className="grid gap-8 lg:grid-cols-3">

            {/* Card 1 */}

            <div className="group rounded-[28px] border border-[#D7DEE7] bg-white p-10 transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_25px_60px_rgba(16,24,40,0.08)]">

              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#E8F2FF] text-lg font-medium text-[#1A73E8]">
                01
              </div>

              <h3 className="mt-8 text-3xl font-medium">
                Reliability
              </h3>

              <p className="mt-5 leading-8 text-[#5B6472]">
                Drivers shouldn't wonder whether a charger is working.
                Availability and consistency are more important than having the
                longest feature list.
              </p>

            </div>

            {/* Card 2 */}

            <div className="group rounded-[28px] border border-[#D7DEE7] bg-white p-10 transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_25px_60px_rgba(16,24,40,0.08)]">

              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#E8F2FF] text-lg font-medium text-[#1A73E8]">
                02
              </div>

              <h3 className="mt-8 text-3xl font-medium">
                Simplicity
              </h3>

              <p className="mt-5 leading-8 text-[#5B6472]">
                Charging an EV shouldn't feel like learning new software.
                Finding, starting, and paying for a session should take only a
                few moments.
              </p>

            </div>

            {/* Card 3 */}

            <div className="group rounded-[28px] border border-[#D7DEE7] bg-white p-10 transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_25px_60px_rgba(16,24,40,0.08)]">

              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#E8F2FF] text-lg font-medium text-[#1A73E8]">
                03
              </div>

              <h3 className="mt-8 text-3xl font-medium">
                Accessibility
              </h3>

              <p className="mt-5 leading-8 text-[#5B6472]">
                Infrastructure creates confidence only when it's available where
                people actually live, commute, and travel—not just where it's
                easiest to install.
              </p>

            </div>

          </div>

        </div>

      </section>

      {/* Vision */}

      <section className="mx-auto max-w-[1400px] px-6 py-32 md:px-10">

        <div className="grid gap-20 lg:grid-cols-12">

          <div className="lg:col-span-4">

            <p className="text-[12px] uppercase tracking-[0.35em] text-[#1A73E8]">
              Looking Ahead
            </p>

            <h2 className="mt-5 text-4xl font-medium tracking-[-0.02em]">
              More than
              <br />
              charging stations.
            </h2>

          </div>

          <div className="lg:col-span-8">

            <p className="max-w-4xl text-[30px] leading-[1.45] tracking-[-0.03em] text-[#1E293B] md:text-[38px]">
              We aren't trying to build the biggest charging network overnight.
              We're focused on building one people genuinely trust. Because when
              charging becomes predictable, choosing an electric vehicle becomes
              an easy decision.
            </p>

          </div>

        </div>

      </section>
            {/* Closing Statement */}

      <section className="px-6 pb-24 md:px-10">

        <div className="mx-auto max-w-[1400px] overflow-hidden rounded-[36px] border border-[#D7DEE7] bg-gradient-to-br from-[#0F172A] via-[#162338] to-[#1B2B45]">

          <div className="px-10 py-20 md:px-20 md:py-28">

            <p className="text-[12px] uppercase tracking-[0.35em] text-[#60A5FA]">
              The Road Ahead
            </p>

            <h2 className="mt-6 max-w-5xl text-5xl font-medium leading-[1] tracking-[-0.03em] text-white md:text-7xl">
              Every new charger
              <br />
              makes the next EV
              <br />
              purchase easier.
            </h2>

            <p className="mt-10 max-w-2xl text-[18px] leading-8 text-slate-300">
              Infrastructure doesn't just power vehicles—it shapes confidence.
              Every dependable charging location brings India one step closer
              to a future where driving electric feels completely natural.
            </p>

          </div>

        </div>

      </section>

      {/* CTA */}

      <section className="border-t border-[#D7DEE7] bg-white">

        <div className="mx-auto flex max-w-[1400px] flex-col items-start justify-between gap-12 px-6 py-24 md:flex-row md:items-end md:px-10">

          <div>

            <p className="text-[12px] uppercase tracking-[0.35em] text-[#1A73E8]">
              Join the Journey
            </p>

            <h2 className="mt-5 max-w-3xl text-4xl font-medium leading-tight tracking-[-0.02em] md:text-5xl">
              Whether you're driving,
              <br />
              hosting, or partnering,
              <br />
              we're just getting started.
            </h2>

          </div>

          <div className="flex gap-4">

            <Link
              href="/network"
              className="group inline-flex items-center gap-3 rounded-full bg-[#1A73E8] px-7 py-4 font-medium text-white transition-all duration-300 hover:translate-y-[-2px] hover:bg-[#1667CF]"
            >
              Explore Network

              <ArrowRight
                size={18}
                className="transition-transform group-hover:translate-x-1"
              />
            </Link>

            <Link
              href="/partner"
              className="inline-flex items-center rounded-full border border-[#D7DEE7] bg-white px-7 py-4 font-medium text-[#101828] transition-all duration-300 hover:border-[#1A73E8] hover:text-[#1A73E8]"
            >
              Become a Partner
            </Link>

          </div>

        </div>

      </section>
<script
  type="application/ld+json"
  dangerouslySetInnerHTML={{
    __html: JSON.stringify({
      "@context": "https://schema.org",
      "@type": "AboutPage",
      name: "About Topup",
      url: "https://topupchargers.com/about",
      description:
        "Learn about Topup and our mission to build India's next-generation EV charging network.",
      isPartOf: {
        "@id": "https://topupchargers.com/#website",
      },
      about: {
        "@id": "https://topupchargers.com/#organization",
      },
    }),
  }}
/>
    </main>
  );
}
