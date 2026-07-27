import FadeIn from "./FadeIn";

export default function Numbers() {
  return (
    <FadeIn>
      <section id="network" className="bg-white text-black scroll-mt-28">
      <div className="mx-auto max-w-7xl px-8 py-36">

        <div className="grid grid-cols-1 gap-8 md:grid-cols-4 md:gap-10">

          <div className="flex flex-col gap-2">
            <h2 className="text-4xl font-semibold md:text-5xl">120kW+</h2>
            <p className="text-neutral-500">
              Peak Charging
            </p>
          </div>

          <div className="flex flex-col gap-2">
            <h2 className="text-4xl font-semibold md:text-5xl">Built for</h2>
            <p className="text-neutral-500">
              Reliability
            </p>
          </div>

          <div className="flex flex-col gap-2">
            <h2 className="text-4xl font-semibold md:text-5xl">Battery Buffered</h2>
            <p className="text-neutral-500">
              Grid Resilience
            </p>
          </div>

          <div className="flex flex-col gap-2">
            <h2 className="text-4xl font-semibold md:text-5xl">Built for India 🇮🇳</h2>
            <p className="text-neutral-500">
              Ready for Every Route
            </p>
          </div>

        </div>

      </div>
      </section>
    </FadeIn>
  );
}