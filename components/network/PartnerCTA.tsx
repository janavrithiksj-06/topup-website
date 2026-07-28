export default function PartnerCTA() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-16 md:px-10">
      <div className="relative overflow-hidden rounded-[40px] border border-white/10 bg-neutral-950 p-10 md:p-16">
        {/* Subtle orange glow */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(247,147,26,0.12),transparent_45%)]" />

        {/* Decorative gradient line */}
        <div className="absolute left-0 top-0 h-1 w-full bg-gradient-to-r from-[#F7931A] via-[#FFB347] to-transparent" />

        <div className="relative z-10">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-[#F7931A]">
            Partner With Topup
          </p>

          <h2 className="mt-5 max-w-3xl text-4xl font-semibold leading-tight text-white md:text-5xl">
            Bring premium EV charging
            <br />
            to your property.
          </h2>

          <p className="mt-6 max-w-2xl text-lg leading-8 text-neutral-300">
            Join Topup's growing network of hospitality, retail, commercial and
            highway partners, and help build India's next generation of EV
            charging infrastructure.
          </p>

          <div className="mt-10 flex flex-wrap gap-4">
            <a
              href="/partner"
              className="rounded-full bg-[#F7931A] px-8 py-3.5 font-semibold text-black transition duration-300 hover:-translate-y-0.5 hover:brightness-110"
            >
              Become a Partner
            </a>

            <a
              href="/contact"
              className="rounded-full border border-white/15 px-8 py-3.5 font-semibold text-white transition duration-300 hover:border-[#F7931A] hover:text-[#F7931A]"
            >
              Contact Us
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}