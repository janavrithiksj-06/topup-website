import FakeMap from "@/components/network/FakeMap";
import SearchBar from "@/components/network/SearchBar";
import PartnerCTA from "@/components/network/PartnerCTA";

export default function NetworkPage() {
  return (
    <main className="min-h-screen bg-[#111111] text-white">
        <div className="absolute inset-x-0 top-0 -z-10 h-[500px] bg-[radial-gradient(circle_at_top,rgba(247,147,26,0.12),transparent_65%)]" />
      {/* Hero */}
      <section className="mx-auto flex max-w-7xl flex-col px-6 pt-36 pb-16 md:px-10">
        <span className="mb-4 text-sm font-medium uppercase tracking-[0.3em] text-[#F7931A]">
          Topup Network
        </span>

        <h1 className="max-w-4xl text-5xl font-semibold leading-tight tracking-tight md:text-7xl">
  <span className="text-[#F7931A]">Powering India's</span>
  <br />
  next generation of mobility.
</h1>

        <p className="mt-8 max-w-2xl text-lg leading-8 text-neutral-300">
          We're building a premium charging network designed for reliability,
          speed, and seamless EV travel. Our first locations are launching soon
          across South India.
        </p>
      </section>

   {/* Search */}
<section className="mx-auto mt-2 max-w-5xl px-6 pb-10 md:px-10">
  <SearchBar />
</section>

{/* Map */}
<section className="mx-auto pb-12 max-w-7xl px-6 md:px-10">
        <div className="relative overflow-hidden rounded-[36px] border border-neutral-300 bg-white shadow-[0_30px_80px_rgba(0,0,0,.45)]">
          <FakeMap />

          {/* Overlay */}
          <div className="pointer-events-none absolute left-8 top-8 max-w-md rounded-3xl border border-neutral-200 bg-white p-8 shadow-[0_20px_50px_rgba(0,0,0,.12)] backdrop-blur-xl">
            <p className="text-xs uppercase tracking-[0.25em] text-[#F7931A]">
              Coming Soon
            </p>

            <h2 className="mt-2 text-2xl font-semibold">
              Charging network launching soon.
            </h2>

            <p className="mt-3 text-sm leading-7 text-neutral-600">
              Topup charging locations will soon be available across highways,
              cities, commercial destinations, and hospitality partners.
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
<section className="mt-8">
  <PartnerCTA />
</section>
    </main>
    
  );
}