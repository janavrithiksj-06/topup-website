import FadeIn from "./FadeIn";

export default function WhyTopup() {
  return (
    <FadeIn>
      <section id="about" className="bg-white text-black scroll-mt-28">
      <div className="mx-auto max-w-7xl px-8 py-36">

        <p className="text-sm font-medium uppercase tracking-[0.35em] text-neutral-500">
          WHY TOPUP
        </p>

        <h2 className="mt-8 max-w-4xl text-5xl font-semibold leading-[1.05] tracking-tight md:text-6xl">
          Infrastructure
          <br />
          for the future
          <br />
          of mobility.
        </h2>

        <p className="mt-10 max-w-2xl text-xl leading-9 text-neutral-600">
          Every Topup station is designed around reliability, speed and effortless travel.
        </p>

        {/* Divider */}
        <div className="my-24 h-px w-full bg-neutral-200" />

        <div className="grid gap-10 md:grid-cols-2 md:gap-x-16 md:gap-y-14">

          <div>
            <p className="text-6xl font-light text-neutral-300">
              01
            </p>

            <h3 className="mt-6 text-3xl font-semibold">
              Reliability
            </h3>

            <p className="mt-5 max-w-md text-lg leading-8 text-neutral-600">
              Intelligent monitoring and robust infrastructure keep stations
              available whenever drivers need them.
            </p>
          </div>

          <div>
            <p className="text-6xl font-light text-neutral-300">
              02
            </p>

            <h3 className="mt-6 text-3xl font-semibold">
              Ultra Fast
            </h3>

            <p className="mt-5 max-w-md text-lg leading-8 text-neutral-600">
              High-power DC charging that gets vehicles back on the road in
              minutes, not hours.
            </p>
          </div>

          <div className="pb-2 md:pb-0">
            <p className="text-6xl font-light text-neutral-300">
              03
            </p>

            <h3 className="mt-6 text-3xl font-semibold">
              Smart Locations
            </h3>

            <p className="mt-5 max-w-md text-lg leading-8 text-neutral-600">
              Positioned where people actually stop—highways, cities and key
              destinations.
            </p>
          </div>

          <div className="pb-2 md:pb-0">
            <p className="text-6xl font-light text-neutral-300">
              04
            </p>

            <h3 className="mt-6 text-3xl font-semibold">
              Built to Scale
            </h3>

            <p className="mt-5 max-w-md text-lg leading-8 text-neutral-600">
              Designed for India's rapidly expanding EV ecosystem with future
              growth in mind.
            </p>
          </div>

        </div>

      </div>
      </section>
    </FadeIn>
  );
}