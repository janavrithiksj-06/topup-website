import FakeMap from "@/components/network/FakeMap";
import NotifyForm from "@/components/network/NotifyForm";
import PartnerCTA from "@/components/network/PartnerCTA";

export default function NetworkPage() {
  return (
    <main className="min-h-screen bg-[#161B22] text-[#F8FAFC]">
      {/* Hero */}
      <section className="mx-auto flex max-w-[1400px] flex-col px-6 pt-40 pb-16 md:px-10">
        <p className="mb-6 text-[12px] font-medium uppercase tracking-[0.35em] text-[#1A73E8]">
          Topup Network
        </p>

        <h1 className="max-w-4xl text-5xl font-medium leading-[0.95] tracking-[-0.02em] md:text-7xl">
          Powering India&apos;s
          <br />
          next generation of mobility.
        </h1>

        <p className="mt-8 max-w-2xl text-[17px] leading-8 text-[#C4CDD8]">
          A premium charging network built for reliability, speed, and
          seamless EV travel. First locations launching soon across South
          India.
        </p>
      </section>

      {/* Map */}
      <section className="mx-auto max-w-[1400px] px-6 pb-16 md:px-10">
        <div className="relative overflow-hidden rounded-2xl border border-[#313B49] bg-[#1E2530]">
          <FakeMap />

          <div className="pointer-events-none absolute left-6 top-6 max-w-sm rounded-xl border border-[#313B49] bg-[#252D3A]/90 p-7 backdrop-blur-md md:left-8 md:top-8">
            <p className="text-[11px] font-medium uppercase tracking-[0.3em] text-[#1A73E8]">
              Coming Soon
            </p>

            <h2 className="mt-3 text-xl font-medium tracking-[-0.01em] text-[#F8FAFC]">
              Charging network launching soon.
            </h2>

            <p className="mt-3 text-[14px] leading-6 text-[#C4CDD8]">
              Topup locations will open across highways, cities, commercial
              destinations, and hospitality partners.
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <PartnerCTA />
    </main>
  );
}