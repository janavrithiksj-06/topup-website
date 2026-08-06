import FadeIn from "./FadeIn";

const STEPS = [
  {
    number: "01",
    title: "Find a Charger",
    text: "Locate nearby Topup DC fast charging stations before you begin your journey.",
  },
  {
    number: "02",
    title: "Plug In",
    text: "Connect your electric vehicle to a compatible CCS2 DC fast charger and start charging.",
  },
  {
    number: "03",
    title: "Recharge",
    text: "Take a short break while your EV charges safely, efficiently, and reliably.",
  },
  {
    number: "04",
    title: "Drive On",
    text: "Get back on the road with confidence and continue your journey with a fully charged EV.",
  },
];

export default function BuiltForTheRoad() {
  return (
    <FadeIn>
      <section
        className="relative overflow-hidden bg-[#F6F2EA] text-[#111111]"
        aria-labelledby="why-topup-heading"
      >
        {/* Subtle glow */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute left-1/2 top-[-220px] h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-[#B89B5E]/10 blur-3xl" />
        </div>

        <div className="relative mx-auto max-w-7xl px-8 py-36">
          {/* Label */}
          <p className="text-xs font-semibold uppercase tracking-[0.4em] text-[#A88A4A]">
            Reliable DC Fast Charging
          </p>

          {/* Heading */}
          <h2
            id="why-topup-heading"
            className="mt-8 max-w-5xl text-5xl font-semibold leading-[1.02] tracking-tight md:text-7xl"
          >
            Reliable EV charging,
            <br />
            designed for every
            <br />
            journey.
          </h2>

          {/* Description */}
          <p className="mt-8 max-w-2xl text-xl leading-9 text-neutral-600">
            Topup is building a reliable network of DC fast charging stations
            across India, helping electric vehicle drivers charge faster, travel
            farther, and enjoy a seamless charging experience.
          </p>

          {/* Divider */}
          <div className="my-24 h-px bg-[#DDD5C8]" />

          {/* Steps */}
          <div
            className="grid gap-12 md:grid-cols-2 xl:grid-cols-4"
            role="list"
          >
            {STEPS.map((step) => (
              <article key={step.number} className="group">
                <p className="text-6xl font-light text-[#C8BA98] transition duration-300 group-hover:text-[#A88A4A]">
                  {step.number}
                </p>

                <h3 className="mt-6 text-3xl font-semibold">
                  {step.title}
                </h3>

                <p className="mt-4 leading-8 text-neutral-600">
                  {step.text}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>
    </FadeIn>
  );
}