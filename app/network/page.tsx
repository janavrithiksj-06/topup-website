import FakeMap from "@/components/network/FakeMap";
import SearchBar from "@/components/network/SearchBar";
import PartnerCTA from "@/components/network/PartnerCTA";

export default function NetworkPage() {
  return (
    <main className="min-h-screen bg-black text-white">
      {/* Hero */}
      <section className="mx-auto flex max-w-7xl flex-col px-6 pt-28 pb-16 md:px-10">
        <span className="mb-4 text-sm font-medium uppercase tracking-[0.3em] text-[#F7931A]">
          Topup Network
        </span>

        <h1 className="max-w-4xl text-5xl font-semibold leading-tight tracking-tight md:text-7xl">
  <span className="text-[#F7931A]">India's next generation</span>
  <br />
  EV charging network.
</h1>

        <p className="mt-8 max-w-2xl text-lg leading-8 text-neutral-400">
          We're building a premium charging network designed for reliability,
          speed, and seamless EV travel. Our first locations are launching soon
          across South India.
        </p>
      </section>

      {/* Search */}
<section className="mx-auto max-w-7xl px-6 py-6 md:px-10 md:py-8">
  <SearchBar />
</section>

      {/* Map */}
<section className="mx-auto mt-2 max-w-7xl px-6 md:px-10">
        <div className="relative overflow-hidden rounded-3xl border border-white/10">
          <FakeMap />

          {/* Overlay */}
          <div className="pointer-events-none absolute left-6 top-6 max-w-sm rounded-2xl border border-white/10 bg-black/75 p-6 backdrop-blur-xl">
            <p className="text-xs uppercase tracking-[0.25em] text-[#F7931A]">
              Coming Soon
            </p>

            <h2 className="mt-2 text-2xl font-semibold">
              Charging network launching soon.
            </h2>

            <p className="mt-3 text-sm leading-7 text-neutral-300">
              Topup charging locations will soon be available across highways,
              cities, commercial destinations, and hospitality partners.
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <PartnerCTA />
    </main>
  );
}