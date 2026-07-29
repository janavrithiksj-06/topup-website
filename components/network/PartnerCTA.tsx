export default function PartnerCTA() {
  return (
    <section className="border-t border-white/10">
      <div className="mx-auto max-w-[1400px] px-6 py-24 md:px-10">
        <p className="text-[12px] font-medium uppercase tracking-[0.3em] text-[#2563EB]">
          Partner With Topup
        </p>

        <h2 className="mt-5 max-w-3xl text-4xl font-medium leading-[1] tracking-[-0.02em] md:text-5xl">
          Bring premium EV charging
          <br />
          to your property.
        </h2>

        <p className="mt-6 max-w-2xl text-[17px] leading-8 text-[#D6D6D6]">
          Join Topup&apos;s growing network of hospitality, retail,
          commercial and highway partners, and help build India&apos;s next
          generation of EV charging infrastructure.
        </p>

        <div className="mt-10 flex flex-wrap items-center gap-x-10 gap-y-5">
          <a
            href="/partner"
            className="bg-[#2563EB] px-8 py-4 text-[13px] font-medium uppercase tracking-[0.15em] text-[#111111] transition-colors duration-300 hover:bg-[#F8F8F5]"
          >
            Become a Partner
          </a>

          <a
            href="/contact"
            className="text-[13px] font-medium uppercase tracking-[0.15em] text-[#F8F8F5] transition-colors duration-300 hover:text-[#2563EB]"
          >
            Contact Us
          </a>
        </div>
      </div>
    </section>
  );
}