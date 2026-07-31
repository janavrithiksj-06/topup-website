import FadeIn from "./FadeIn";

const SPECS = [
  { value: "120 + kW", label: "Peak DC Output" },
  { value: "CCS2", label: "Universal Connector" },
  { value: "Battery-Buffered", label: "Stable Power, Any Grid" },
  { value: "24/7", label: "Live Monitoring" },
];

export default function Numbers() {
  return (
    <FadeIn>
      <section id="network" className="scroll-mt-28 bg-white text-black">
        <div className="mx-auto max-w-7xl px-8 py-36">
          <p className="text-sm font-medium uppercase tracking-[0.35em] text-[#A88A4A]">
            Specifications
          </p>

          <h2 className="mt-6 max-w-2xl text-3xl font-semibold tracking-tight md:text-4xl">
            The hardware, plainly stated.
          </h2>

          <div className="mt-20 grid grid-cols-1 gap-10 border-t border-neutral-200 pt-12 md:grid-cols-4 md:gap-10">
            {SPECS.map((item) => (
              <div key={item.label} className="flex flex-col gap-2">
                <h3 className="text-4xl font-semibold md:text-5xl">
                  {item.value}
                </h3>
                <p className="text-neutral-500">{item.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </FadeIn>
  );
}