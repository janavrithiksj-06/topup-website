export default function PartnerCTA() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-24 md:px-10">
      <div className="overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-neutral-950 to-neutral-900 p-10 md:p-16">
        <p className="text-sm font-medium uppercase tracking-[0.25em] text-[#F7931A]">
          Partner With Topup
        </p>

        <h2 className="mt-4 max-w-3xl text-4xl font-semibold leading-tight md:text-5xl">
          Bring EV charging to your property.
        </h2>

        <p className="mt-6 max-w-2xl text-lg leading-8 text-neutral-400">
          We're partnering with hotels, restaurants, commercial buildings,
          retail destinations and highway locations to build India's next
          generation EV charging network.
        </p>

        <div className="mt-10 flex flex-wrap gap-4">
          <a
            href="/partner"
            className="rounded-full bg-[#F7931A] px-7 py-3 font-medium text-black transition hover:scale-105"
          >
            Become a Partner
          </a>

          <a
            href="/contact"
            className="rounded-full border border-white/15 px-7 py-3 font-medium transition hover:border-white/40"
          >
            Contact Us
          </a>
        </div>
      </div>
    </section>
  );
}