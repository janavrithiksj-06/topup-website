import Link from "next/link";
import { ArrowRight } from "lucide-react";
import FadeIn from "@/components/FadeIn";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Partner with Topup | EV Charging Infrastructure",
  description:
    "Partner with Topup to build EV charging infrastructure across India. Choose from rent, revenue sharing, or invest and share partnership models.",
  keywords: [
    "EV charging partnership",
    "EV charging station partnership",
    "EV charging franchise India",
    "EV charging infrastructure investment",
    "EV charging station investment",
    "EV charging revenue sharing",
    "Topup EV charging",
  ],
};

const PARTNER_MODELS = [
  {
    number: "01",
    title: "Rent",
    description:
      "You provide the space. Topup installs and operates the charging station while you earn fixed rent from your location.",
    earn: "Fixed Rent",
  },
  {
    number: "02",
    title: "Revenue Sharing",
    description:
      "You provide the space. Topup invests, installs and operates the station while you earn an agreed share of charging revenue.",
    earn: "Revenue Share",
  },
  {
    number: "03",
    title: "Invest & Share",
    description:
      "You invest in the charging station. Topup manages technology, operations and maintenance while you share the revenue.",
    earn: "Revenue Share",
  },
];

export default function PartnerPage() {
  return (
    <main className="min-h-screen overflow-hidden bg-[#EEF2F6] text-[#111111]">

      {/* =====================================================
          HERO
      ===================================================== */}

      <section
        data-navbar-theme="light"
        className="
          relative
          mx-auto
          flex
          max-w-[1400px]
          flex-col
          px-6
          pb-20
          pt-40
          md:px-10
        "
      >
        <FadeIn>
          <p className="mb-6 text-[12px] font-medium uppercase tracking-[0.35em] text-[#FF8000]">
            Partner With Topup
          </p>

          <h1
            className="
              max-w-5xl
              text-5xl
              font-medium
              leading-[0.94]
              tracking-[-0.035em]
              md:text-7xl
            "
          >
            Build the future
            <br />
            of EV charging
            <br />
            <span className="text-black/40">
              with Topup.
            </span>
          </h1>

          <p className="mt-10 max-w-2xl text-[18px] leading-8 text-[#5F6B7A]">
            Partner with Topup to bring reliable DC fast charging to your
            location. Choose a partnership model that works for your space,
            investment and business goals.
          </p>
        </FadeIn>
      </section>

      {/* =====================================================
          PARTNERSHIP MODELS
      ===================================================== */}

      <section
        data-navbar-theme="light"
        aria-labelledby="partnership-models-heading"
        className="
          relative
          mx-auto
          max-w-[1400px]
          px-6
          pb-28
          md:px-10
        "
      >
        <FadeIn>
          <div
            className="
              overflow-hidden
              rounded-[32px]
              border
              border-[#D7DEE7]
              bg-white
              shadow-[0_25px_70px_rgba(15,23,42,0.06)]
            "
          >
            {/* Section heading */}
            <div className="border-b border-[#D7DEE7] px-7 py-10 md:px-10 md:py-12">
              <p className="text-[11px] font-medium uppercase tracking-[0.3em] text-[#FF8000]">
                Partnership Models
              </p>

              <h2
                id="partnership-models-heading"
                className="
                  mt-4
                  max-w-2xl
                  text-3xl
                  font-medium
                  leading-tight
                  tracking-[-0.035em]
                  md:text-4xl
                "
              >
                Choose how you want to partner.
              </h2>
            </div>

            {/* Models */}
            <div className="grid md:grid-cols-3">
              {PARTNER_MODELS.map((model, index) => (
                <article
                  key={model.number}
                  className={`
                    group
                    p-7
                    transition-colors
                    duration-300
                    hover:bg-[#F8F9FA]
                    md:p-9
                    ${
                      index !== PARTNER_MODELS.length - 1
                        ? "border-b border-[#D7DEE7] md:border-b-0 md:border-r"
                        : ""
                    }
                  `}
                >
                  {/* Number */}
                  <p
                    className="
                      text-[12px]
                      font-medium
                      tracking-[0.2em]
                      text-black/30
                      transition-colors
                      duration-300
                      group-hover:text-[#FF8000]
                    "
                  >
                    {model.number}
                  </p>

                  {/* Title */}
                  <h3
                    className="
                      mt-12
                      text-3xl
                      font-medium
                      tracking-[-0.045em]
                      md:text-4xl
                    "
                  >
                    {model.title}
                  </h3>

                  {/* Description */}
                  <p className="mt-5 min-h-[120px] text-[15px] leading-7 text-[#5F6B7A]">
                    {model.description}
                  </p>

                  {/* Earnings */}
                  <div className="mt-8 border-t border-[#D7DEE7] pt-6">
                    <p className="text-[9px] font-medium uppercase tracking-[0.28em] text-black/35">
                      You earn
                    </p>

                    <p className="mt-2 text-lg font-medium text-[#111111]">
                      {model.earn}
                    </p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </FadeIn>
      </section>

      {/* =====================================================
          WHY PARTNER
      ===================================================== */}

      <section
        data-navbar-theme="light"
        className="border-y border-[#D7DEE7] bg-white"
      >
        <div className="mx-auto max-w-[1400px] px-6 py-28 md:px-10">
          <FadeIn>
            <div className="grid gap-14 lg:grid-cols-12 lg:gap-20">

              <div className="lg:col-span-4">
                <p className="text-[11px] font-medium uppercase tracking-[0.3em] text-black/35">
                  Why Topup
                </p>

                <h2 className="mt-6 text-4xl font-medium leading-[0.95] tracking-[-0.05em] md:text-5xl">
                  More than
                  <br />
                  a charging
                  <br />
                  station.
                </h2>
              </div>

              <div className="lg:col-span-8">
                <p className="max-w-3xl text-xl leading-9 text-[#5F6B7A] md:text-2xl">
                  We work with property owners, businesses and investors to
                  develop charging locations that serve real EV journeys.
                </p>

                <div className="mt-12 grid border-t border-[#D7DEE7] sm:grid-cols-3">
                  <div className="border-b border-[#D7DEE7] py-7 sm:border-b-0 sm:border-r sm:pr-8">
                    <h3 className="text-xl font-medium">
                      Technology
                    </h3>
                    <p className="mt-3 text-sm leading-6 text-[#5F6B7A]">
                      Modern DC fast charging infrastructure.
                    </p>
                  </div>

                  <div className="border-b border-[#D7DEE7] py-7 sm:border-b-0 sm:border-r sm:px-8">
                    <h3 className="text-xl font-medium">
                      Operations
                    </h3>
                    <p className="mt-3 text-sm leading-6 text-[#5F6B7A]">
                      Station operations and ongoing support.
                    </p>
                  </div>

                  <div className="py-7 sm:pl-8">
                    <h3 className="text-xl font-medium">
                      Partnership
                    </h3>
                    <p className="mt-3 text-sm leading-6 text-[#5F6B7A]">
                      A model built around your role and goals.
                    </p>
                  </div>
                </div>
              </div>

            </div>
          </FadeIn>
        </div>
      </section>

      {/* =====================================================
          CTA
      ===================================================== */}

      <section
        data-navbar-theme="dark"
        className="bg-[#111111] text-white"
      >
        <div className="mx-auto max-w-[1400px] px-6 py-28 md:px-10 md:py-32">
          <FadeIn>
            <div className="flex flex-col justify-between gap-12 lg:flex-row lg:items-end">

              <div>
                <p className="text-[11px] font-medium uppercase tracking-[0.3em] text-white/35">
                  Let's build together
                </p>

                <h2
                  className="
                    mt-7
                    max-w-4xl
                    text-5xl
                    font-medium
                    leading-[0.88]
                    tracking-[-0.06em]
                    md:text-7xl
                  "
                >
                  Have a location?
                  <br />
                  Have an opportunity?
                  <br />
                  <span className="text-white/35">
                    Let's talk.
                  </span>
                </h2>
              </div>

              <Link
                href="/contact"
                className="
                  group
                  flex
                  w-fit
                  items-center
                  gap-4
                  rounded-full
                  bg-[#FF8000]
                  px-7
                  py-4
                  text-[11px]
                  font-semibold
                  uppercase
                  tracking-[0.16em]
                  text-black
                  transition-all
                  duration-300
                  hover:bg-white
                "
              >
                Become a Partner

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
          </FadeIn>
        </div>
      </section>

    </main>
  );
}