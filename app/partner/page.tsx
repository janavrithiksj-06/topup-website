export default function PartnerPage() {
  return (
    <main className="bg-black text-white">
      {/* Hero */}
      <section className="mx-auto max-w-7xl px-6 py-24 md:px-10">
        <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[#F7931A]">
          Partner With Topup
        </p>

        <h1 className="mt-4 max-w-4xl text-5xl font-semibold leading-tight md:text-7xl">
          Turn your location into an
          <span className="text-[#F7931A]"> EV destination.</span>
        </h1>

        <p className="mt-8 max-w-2xl text-lg leading-8 text-neutral-400">
          We're partnering with hotels, restaurants, shopping centres,
          office campuses and highway destinations to build India's
          premium EV charging network.
        </p>
      </section>

      {/* Benefits */}
      <section className="mx-auto grid max-w-7xl gap-6 px-6 pb-24 md:grid-cols-3 md:px-10">
        {[
          {
            title: "More Visitors",
            text: "Increase customer footfall while vehicles charge.",
          },
          {
            title: "New Revenue",
            text: "Generate recurring income from EV charging sessions.",
          },
          {
            title: "Future Ready",
            text: "Position your business for the electric mobility era.",
          },
        ].map((item) => (
          <div
            key={item.title}
            className="rounded-3xl border border-white/10 bg-neutral-900 p-8"
          >
            <h3 className="text-2xl font-semibold text-[#F7931A]">
              {item.title}
            </h3>

            <p className="mt-4 leading-7 text-neutral-400">
              {item.text}
            </p>
          </div>
        ))}
      </section>

      {/* CTA */}
      <section className="mx-auto max-w-5xl px-6 pb-28 text-center">
        <div className="rounded-3xl border border-white/10 bg-neutral-900 p-12">
          <h2 className="text-4xl font-semibold">
            Ready to partner with Topup?
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-neutral-400">
            Get in touch with our team to discuss your location and explore
            how we can bring premium EV charging to your property.
          </p>

          <a
            href="/contact"
            className="mt-10 inline-flex rounded-full bg-[#F7931A] px-8 py-4 font-semibold text-black transition duration-300 hover:scale-105 hover:brightness-110"
          >
            Contact Us
          </a>
        </div>
      </section>
    </main>
  );
}