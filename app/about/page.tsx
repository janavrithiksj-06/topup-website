import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import FadeIn from "../../components/FadeIn";

const PRINCIPLES = [
  {
    number: "01",
    title: "Reliability",
    text: "Charging you can count on.",
  },
  {
    number: "02",
    title: "Simplicity",
    text: "Find. Plug in. Charge. Go.",
  },
  {
    number: "03",
    title: "Accessibility",
    text: "Infrastructure where it's needed.",
  },
];

export default function AboutPage() {
  return (
    <main className="bg-[#F5F5F2] text-[#111111]">

      {/* =====================================================
          HERO
      ===================================================== */}

      <FadeIn>
        <section
          data-navbar-theme="light"
          className="
            mx-auto
            flex
            min-h-[78vh]
            max-w-[1500px]
            flex-col
            justify-end
            px-6
            pb-20
            pt-40
            md:px-10
            md:pb-24
            lg:px-14
          "
        >
          <p className="text-[10px] font-medium uppercase tracking-[0.32em] text-black/40">
            About Topup
          </p>

          <h1
            className="
              mt-8
              max-w-[1050px]
              text-[clamp(4rem,9vw,9rem)]
              font-medium
              leading-[0.84]
              tracking-[-0.07em]
            "
          >
            Making electric
            <br />
            mobility
            <br />
            <span className="text-black/35">
              easier to choose.
            </span>
          </h1>

          <div className="mt-10 max-w-xl border-t border-black/10 pt-6">
            <p className="text-base leading-7 text-black/55 md:text-lg">
              We're building a reliable DC fast charging network for the way
              India moves.
            </p>
          </div>
        </section>
      </FadeIn>

      {/* =====================================================
          IMAGE + ABOUT
      ===================================================== */}

      <FadeIn>
        <section
          data-navbar-theme="light"
          className="
            mx-auto
            max-w-[1500px]
            px-6
            pb-32
            md:px-10
            lg:px-14
          "
        >
          <div className="grid items-center gap-16 lg:grid-cols-[1.05fr_0.95fr] lg:gap-24">

            {/* Image composition */}
            <div className="relative">

              {/* Main image */}
              <div
                className="
                  relative
                  aspect-[4/5]
                  overflow-hidden
                  rounded-[28px]
                  bg-[#D8D8D4]
                  md:aspect-[5/6]
                "
              >
                <Image
                  src="/images/about-hero.jpg"
                  alt="Topup EV charging infrastructure"
                  fill
                  className="object-cover"
                />

                <div className="absolute inset-0 bg-black/10" />
              </div>

              {/* Inset information box */}
              <div
                className="
                  absolute
                  bottom-[-28px]
                  right-[-12px]
                  w-[72%]
                  max-w-[330px]
                  rounded-[20px]
                  bg-[#111111]
                  p-6
                  text-white
                  shadow-[0_20px_60px_rgba(0,0,0,0.18)]
                  md:bottom-[-35px]
                  md:right-[-25px]
                  md:p-7
                "
              >
                <p className="text-[9px] font-medium uppercase tracking-[0.3em] text-white/35">
                  Built for India
                </p>

                <p className="mt-4 text-xl font-medium leading-7 tracking-[-0.025em]">
                  Charging infrastructure designed around real journeys.
                </p>
              </div>
            </div>

            {/* Text */}
            <div className="lg:pr-10">

              <p className="text-[10px] font-medium uppercase tracking-[0.32em] text-black/35">
                Why Topup
              </p>

              <h2
                className="
                  mt-7
                  max-w-xl
                  text-4xl
                  font-medium
                  leading-[0.95]
                  tracking-[-0.055em]
                  md:text-5xl
                "
              >
                Charging shouldn't
                <br />
                be something you
                <br />
                plan your journey around.
              </h2>

              <div className="mt-8 max-w-lg space-y-5 text-base leading-7 text-black/50">
                <p>
                  The transition to electric mobility needs more than better
                  vehicles. It needs charging infrastructure people can trust.
                </p>

                <p>
                  That's what we're building—reliable DC fast charging
                  stations that make electric travel feel natural.
                </p>
              </div>
            </div>
          </div>
        </section>
      </FadeIn>

      {/* =====================================================
          PRINCIPLES
      ===================================================== */}

      <FadeIn>
        <section
          data-navbar-theme="light"
          className="border-y border-black/10 bg-white"
        >
          <div className="mx-auto max-w-[1500px] px-6 py-28 md:px-10 lg:px-14">

            <div className="flex flex-col justify-between gap-8 md:flex-row md:items-end">
              <div>
                <p className="text-[10px] font-medium uppercase tracking-[0.32em] text-black/35">
                  What matters
                </p>

                <h2
                  className="
                    mt-6
                    text-4xl
                    font-medium
                    leading-[0.92]
                    tracking-[-0.055em]
                    md:text-6xl
                  "
                >
                  Three things
                  <br />
                  we care about.
                </h2>
              </div>

              <p className="max-w-sm text-sm leading-7 text-black/40">
                Simple principles behind everything we build.
              </p>
            </div>

            {/* Principle list */}
            <div className="mt-20 border-t border-black/10">
              {PRINCIPLES.map((principle) => (
                <article
                  key={principle.number}
                  className="
                    group
                    grid
                    gap-5
                    border-b
                    border-black/10
                    py-8
                    transition-colors
                    duration-300
                    md:grid-cols-[100px_1fr_1fr]
                    md:items-center
                    md:py-10
                  "
                >
                  <span
                    className="
                      text-[11px]
                      font-medium
                      tracking-[0.18em]
                      text-black/25
                      transition-colors
                      duration-300
                      group-hover:text-[#FF8000]
                    "
                  >
                    {principle.number}
                  </span>

                  <h3
                    className="
                      text-3xl
                      font-medium
                      tracking-[-0.045em]
                      md:text-4xl
                    "
                  >
                    {principle.title}
                  </h3>

                  <p className="text-base text-black/45 md:text-right">
                    {principle.text}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </section>
      </FadeIn>

      {/* =====================================================
          VISION
      ===================================================== */}

      <FadeIn>
        <section
          data-navbar-theme="light"
          className="
            mx-auto
            max-w-[1500px]
            px-6
            py-32
            md:px-10
            lg:px-14
            lg:py-40
          "
        >
          <div className="grid gap-12 lg:grid-cols-12 lg:gap-20">

            <div className="lg:col-span-4">
              <p className="text-[10px] font-medium uppercase tracking-[0.32em] text-black/35">
                Our vision
              </p>
            </div>

            <div className="lg:col-span-8">
              <h2
                className="
                  max-w-5xl
                  text-[clamp(2.8rem,5vw,5.5rem)]
                  font-medium
                  leading-[0.92]
                  tracking-[-0.065em]
                "
              >
                The road ahead is electric.
                <br />
                <span className="text-black/35">
                  We're building what powers it.
                </span>
              </h2>
            </div>
          </div>
        </section>
      </FadeIn>

      {/* =====================================================
          DARK CLOSING
      ===================================================== */}

      <FadeIn>
        <section
          data-navbar-theme="dark"
          className="bg-[#0A0A0A] text-white"
        >
          <div className="mx-auto max-w-[1500px] px-6 py-28 md:px-10 md:py-36 lg:px-14">

            <div className="flex flex-col justify-between gap-12 lg:flex-row lg:items-end">

              <div>
                <p className="text-[10px] font-medium uppercase tracking-[0.32em] text-white/35">
                  The road ahead
                </p>

                <h2
                  className="
                    mt-7
                    max-w-4xl
                    text-[clamp(3.5rem,7vw,7rem)]
                    font-medium
                    leading-[0.86]
                    tracking-[-0.065em]
                  "
                >
                  Keep moving.
                  <br />
                  We'll keep
                  <br />
                  you charged.
                </h2>
              </div>

              <Link
                href="/network"
                className="
                  group
                  inline-flex
                  w-fit
                  items-center
                  gap-5
                  border-b
                  border-white/30
                  pb-3
                  text-[11px]
                  font-medium
                  uppercase
                  tracking-[0.18em]
                  text-white
                  transition-colors
                  duration-300
                  hover:border-[#FF8000]
                  hover:text-[#FF8000]
                "
              >
                Explore the Network

                <ArrowRight
                  size={15}
                  className="
                    transition-transform
                    duration-300
                    group-hover:translate-x-1
                  "
                />
              </Link>
            </div>

            <div className="mt-24 border-t border-white/10 pt-6">
              <div className="flex items-center justify-between">
                <span className="text-[9px] uppercase tracking-[0.28em] text-white/25">
                  Topup
                </span>

                <span className="text-[9px] uppercase tracking-[0.28em] text-white/25">
                  Built for the road ahead
                </span>
              </div>
            </div>
          </div>
        </section>
      </FadeIn>
    </main>
  );
}