import FadeIn from "./FadeIn";

const STEPS = [
  {
    number: "01",
    title: "Find",
    text: "Locate a Topup charging station along your route.",
  },
  {
    number: "02",
    title: "Plug in",
    text: "Connect to a high-speed CCS2 DC fast charger.",
  },
  {
    number: "03",
    title: "Recharge",
    text: "Take a break while your EV gets back to full power.",
  },
  {
    number: "04",
    title: "Drive on",
    text: "Get back on the road and keep moving.",
  },
];

export default function BuiltForTheRoad() {
  return (
    <FadeIn>
      <section
        data-navbar-theme="light"
        className="relative overflow-hidden bg-[#F5F5F2] text-[#111111]"
        aria-labelledby="why-topup-heading"
      >
        {/* =====================================================
            SUBTLE BACKGROUND DETAIL
        ===================================================== */}

        <div
          aria-hidden="true"
          className="
            absolute
            right-[-180px]
            top-[-180px]
            h-[500px]
            w-[500px]
            rounded-full
            border
            border-black/[0.035]
          "
        />

        <div
          aria-hidden="true"
          className="
            absolute
            right-[-100px]
            top-[-100px]
            h-[340px]
            w-[340px]
            rounded-full
            border
            border-black/[0.035]
          "
        />

        <div className="relative mx-auto max-w-[1500px] px-6 py-28 md:px-10 md:py-36 lg:px-14">

          {/* =================================================
              INTRO
          ================================================= */}

          <div className="grid gap-12 lg:grid-cols-[1.15fr_0.85fr] lg:gap-24">

            {/* Left */}
            <div>
              <p className="text-[10px] font-semibold uppercase tracking-[0.3em] text-[#777777]">
  The Topup experience
</p>

              <h2
                id="why-topup-heading"
                className="
                  mt-8
                  max-w-5xl
                  text-[clamp(3.2rem,6vw,6.5rem)]
                  font-medium
                  leading-[0.88]
                  tracking-[-0.065em]
                "
              >
                Charging should
                <br />
                <span className="text-black/40">
                  never slow you down.
                </span>
              </h2>
            </div>

            {/* Right */}
            <div className="flex items-end lg:pb-2">
              <div>
                <p className="max-w-xl text-lg leading-8 text-black/55 md:text-xl">
                  Topup is building a reliable network of DC fast charging
                  stations across India, designed to make charging a natural
                  part of every journey.
                </p>

                <div className="mt-8 h-px w-16 bg-[#FF8000]" />
              </div>
            </div>
          </div>

          {/* =================================================
              DIVIDER
          ================================================= */}

          <div className="my-24 h-px bg-black/10 md:my-32" />

          {/* =================================================
              PROCESS HEADER
          ================================================= */}

          <div className="mb-14 flex items-end justify-between">
            <div>
              <p className="text-[10px] font-semibold uppercase tracking-[0.3em] text-black/35">
                How it works
              </p>

              <h3 className="mt-4 text-3xl font-medium tracking-[-0.04em] md:text-4xl">
                From plug in to drive on.
              </h3>
            </div>

            <span className="hidden text-[10px] uppercase tracking-[0.25em] text-black/30 md:block">
              01 — 04
            </span>
          </div>

          {/* =================================================
              STEPS
          ================================================= */}

          <div
            className="
              grid
              border-l
              border-t
              border-black/10
              md:grid-cols-2
              xl:grid-cols-4
            "
            role="list"
          >
            {STEPS.map((step, index) => (
              <article
                key={step.number}
                className="
                  group
                  relative
                  min-h-[300px]
                  border-b
                  border-r
                  border-black/10
                  p-7
                  transition-colors
                  duration-500
                  hover:bg-white
                  md:p-9
                "
              >
                {/* Number */}
                <div className="flex items-start justify-between">
                  <span
                    className="
                      text-[13px]
                      font-medium
                      tracking-[0.15em]
                      text-black/30
                      transition-colors
                      duration-300
                      group-hover:text-[#FF8000]
                    "
                  >
                    {step.number}
                  </span>

                </div>

                {/* Content */}
                <div className="mt-24">
                  <h4
                    className="
                      text-3xl
                      font-medium
                      tracking-[-0.045em]
                      md:text-4xl
                    "
                  >
                    {step.title}
                  </h4>

                  <p className="mt-5 max-w-[260px] text-sm leading-7 text-black/50">
                    {step.text}
                  </p>
                </div>

                {/* Bottom index */}
                <span
                  className="
                    absolute
                    bottom-7
                    right-7
                    text-[9px]
                    uppercase
                    tracking-[0.25em]
                    text-black/20
                    md:bottom-9
                    md:right-9
                  "
                >
                  TOPUP
                </span>
              </article>
            ))}
          </div>

          {/* =================================================
              BOTTOM STATEMENT
          ================================================= */}

          <div className="mt-24 flex flex-col justify-between gap-8 border-t border-black/10 pt-8 md:flex-row md:items-center">
            <p className="max-w-xl text-sm leading-7 text-black/45">
              Fast charging infrastructure that fits into the journey,
              rather than interrupting it.
            </p>

            <span className="text-[10px] uppercase tracking-[0.28em] text-black/30">
              Built for the road ahead
            </span>
          </div>
        </div>
      </section>
    </FadeIn>
  );
}