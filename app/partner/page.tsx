export default function PartnerPage() {
  const opportunities = [
    {
      title: "Host a Topup Station",
      subtitle: "For property owners",
      description:
        "Own a hotel, restaurant, shopping centre, office campus or commercial property? Let Topup transform your location into a premium EV charging destination while attracting more visitors and generating additional income.",
      points: [
        "Increase customer footfall",
        "Monetize unused parking",
        "Premium EV amenity",
      ],
      button: "Host a Charger",
    },
    {
      title: "Invest with Topup",
      subtitle: "Franchise & investment partners",
      description:
        "Want to participate in India's EV revolution without managing chargers yourself? Invest in a Topup charging station while we handle everything—from planning and installation to daily operations and maintenance.",
      points: [
        "You invest",
        "We operate end-to-end",
        "Earn recurring revenue",
      ],
      button: "Become a Franchise Partner",
    },
  ];

  const services = [
    "Site evaluation & feasibility",
    "Charger procurement",
    "Electrical infrastructure",
    "Installation & commissioning",
    "Software & payment platform",
    "24/7 monitoring",
    "Preventive maintenance",
    "Customer support",
    "Revenue reporting",
  ];

  return (
    <main className="bg-black text-white">
      {/* HERO */}
      <section className="mx-auto max-w-7xl px-6 py-28 md:px-10">
        <div className="max-w-4xl">
          <p className="font-semibold uppercase tracking-[0.3em] text-[#F7931A]">
            Partner With Topup
          </p>

          <h1 className="mt-5 text-5xl font-bold leading-tight md:text-7xl">
            Own the future of
            <span className="text-[#F7931A]"> EV charging.</span>
          </h1>

          <p className="mt-8 max-w-3xl text-lg leading-8 text-neutral-400">
            Whether you own a commercial property or simply want to invest,
            Topup builds, operates and manages premium EV charging stations
            while you benefit from a long-term revenue opportunity.
          </p>

          <div className="mt-10 flex flex-wrap gap-4">
            <a
              href="/contact"
              className="rounded-full bg-[#F7931A] px-8 py-4 font-semibold text-black transition hover:brightness-110"
            >
              Become a Partner
            </a>

            <a
              href="#models"
              className="rounded-full border border-white/15 px-8 py-4 font-semibold transition hover:border-[#F7931A] hover:text-[#F7931A]"
            >
              Explore Opportunities
            </a>
          </div>
        </div>
      </section>

      {/* PARTNERSHIP MODELS */}
      <section
        id="models"
        className="mx-auto max-w-7xl px-6 py-12 md:px-10"
      >
        <div className="max-w-3xl">
          <p className="font-semibold uppercase tracking-widest text-[#F7931A]">
            Two Ways To Partner
          </p>

          <h2 className="mt-4 text-4xl font-semibold">
            Choose the partnership model that suits you.
          </h2>

          <p className="mt-6 text-lg leading-8 text-neutral-400">
            Whether you're contributing the location or the investment,
            Topup provides the technology, operations and support needed
            to build a successful charging business.
          </p>
        </div>

        <div className="mt-14 grid gap-8 lg:grid-cols-2">
          {opportunities.map((item) => (
            <div
              key={item.title}
              className="group rounded-3xl border border-white/10 bg-neutral-900 p-10 transition duration-300 hover:border-[#F7931A]/40 hover:bg-neutral-800"
            >
              <p className="text-sm font-semibold uppercase tracking-widest text-[#F7931A]">
                {item.subtitle}
              </p>

              <h3 className="mt-3 text-3xl font-semibold">
                {item.title}
              </h3>

              <p className="mt-6 leading-8 text-neutral-400">
                {item.description}
              </p>

              <div className="mt-8 space-y-4">
                {item.points.map((point) => (
                  <div
                    key={point}
                    className="flex items-center gap-3"
                  >
                    <div className="flex h-7 w-7 items-center justify-center rounded-full bg-[#F7931A]/15 text-[#F7931A]">
                      ✓
                    </div>

                    <span>{point}</span>
                  </div>
                ))}
              </div>

              <a
                href="/contact"
                className="mt-10 inline-flex rounded-full border border-[#F7931A] px-6 py-3 font-semibold text-[#F7931A] transition hover:bg-[#F7931A] hover:text-black"
              >
                {item.button}
              </a>
            </div>
          ))}
        </div>
      </section>

      {/* WHAT TOPUP HANDLES */}
      <section className="mx-auto grid max-w-7xl gap-16 px-6 py-28 md:grid-cols-2 md:px-10">
        <div>
          <p className="font-semibold uppercase tracking-widest text-[#F7931A]">
            What Topup Handles
          </p>

          <h2 className="mt-4 text-4xl font-semibold leading-tight">
            You focus on the opportunity.
            <br />
            We handle the execution.
          </h2>

          <p className="mt-6 text-lg leading-8 text-neutral-400">
            From feasibility studies and charger installation to software,
            payments, maintenance and customer support, Topup manages the
            complete lifecycle of every charging station.
          </p>

          <div className="mt-8 rounded-2xl border border-[#F7931A]/20 bg-[#F7931A]/5 p-6">
            <p className="font-semibold text-[#F7931A]">
              Our goal is simple:
            </p>

            <p className="mt-3 leading-8 text-neutral-300">
              You shouldn't have to become an EV charging expert to
              participate in the industry's growth. We build, operate and
              optimize the network while you benefit from the business.
            </p>
          </div>
        </div>

        <div className="grid gap-4">
          {services.map((service) => (
            <div
              key={service}
              className="flex items-center rounded-2xl border border-white/10 bg-neutral-900 p-5"
            >
              <span className="mr-4 text-xl text-[#F7931A]">✓</span>

              <span>{service}</span>
            </div>
          ))}
        </div>
      </section>

      {/* HOW IT WORKS */}
            {/* HOW IT WORKS */}
      <section className="mx-auto max-w-7xl px-6 py-20 md:px-10">
        <div className="max-w-3xl">
          <p className="font-semibold uppercase tracking-widest text-[#F7931A]">
            How It Works
          </p>

          <h2 className="mt-4 text-4xl font-semibold">
            A partnership built for long-term success.
          </h2>

          <p className="mt-6 text-lg leading-8 text-neutral-400">
            Whether you're providing the location or investing in the
            infrastructure, Topup manages every stage of the project so you
            don't have to.
          </p>
        </div>

        <div className="mt-16 grid gap-6 md:grid-cols-5">
          {[
            {
              number: "01",
              title: "You Apply",
              text: "Tell us about your property or investment interest.",
            },
            {
              number: "02",
              title: "Evaluation",
              text: "We assess the location, demand and project feasibility.",
            },
            {
              number: "03",
              title: "Build",
              text: "Topup installs the charging infrastructure and software.",
            },
            {
              number: "04",
              title: "Operate",
              text: "We manage charging, payments, maintenance and support.",
            },
            {
              number: "05",
              title: "Earn",
              text: "Receive recurring revenue while Topup keeps the network running.",
            },
          ].map((step) => (
            <div
              key={step.number}
              className="rounded-2xl border border-white/10 bg-neutral-900 p-8"
            >
              <p className="text-5xl font-bold text-[#F7931A]/25">
                {step.number}
              </p>

              <h3 className="mt-6 text-xl font-semibold">
                {step.title}
              </h3>

              <p className="mt-4 leading-7 text-neutral-400">
                {step.text}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* WHY INVEST NOW */}
      <section className="mx-auto max-w-7xl px-6 py-10 md:px-10">
        <div className="rounded-[32px] border border-white/10 bg-gradient-to-br from-neutral-900 to-neutral-800 p-10 md:p-14">
          <div className="grid gap-12 lg:grid-cols-2">
            <div>
              <p className="font-semibold uppercase tracking-widest text-[#F7931A]">
                Why Topup
              </p>

              <h2 className="mt-4 text-4xl font-semibold leading-tight">
                Built for India's next generation of charging infrastructure.
              </h2>

              <p className="mt-6 text-lg leading-8 text-neutral-400">
                EV adoption is accelerating, and charging infrastructure is
                becoming an essential part of commercial real estate and highway
                travel. Topup is building a premium network designed for the
                years ahead.
              </p>
            </div>

            <div className="grid gap-5">
              {[
                {
                  title: "Managed End-to-End",
                  text: "From installation to maintenance, our team handles daily operations.",
                },
                {
                  title: "Recurring Revenue",
                  text: "Earn from charging sessions without managing the business yourself.",
                },
                {
                  title: "Premium Technology",
                  text: "Fast charging hardware backed by intelligent software and monitoring.",
                },
                {
                  title: "Long-Term Partnership",
                  text: "We grow the network together with continuous operational support.",
                },
              ].map((item) => (
                <div
                  key={item.title}
                  className="rounded-2xl border border-white/10 bg-black/30 p-6"
                >
                  <h3 className="text-xl font-semibold text-[#F7931A]">
                    {item.title}
                  </h3>

                  <p className="mt-3 leading-7 text-neutral-400">
                    {item.text}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="mx-auto max-w-5xl px-6 pb-28">
        <div className="overflow-hidden rounded-[36px] border border-[#F7931A]/20 bg-gradient-to-br from-[#111] via-neutral-900 to-black p-12 text-center md:p-16">
          <p className="font-semibold uppercase tracking-[0.25em] text-[#F7931A]">
            Let's Build Together
          </p>

          <h2 className="mt-5 text-4xl font-semibold md:text-5xl">
            Ready to explore a partnership with Topup?
          </h2>

          <p className="mx-auto mt-8 max-w-2xl text-lg leading-8 text-neutral-400">
            Whether you're looking to host a charging station or invest in one,
            we'd love to understand your goals and discuss how Topup can help
            bring the opportunity to life.
          </p>

          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <a
              href="/contact"
              className="rounded-full bg-[#F7931A] px-8 py-4 font-semibold text-black transition hover:brightness-110"
            >
              Contact Us
            </a>

            <a
              href="/network"
              className="rounded-full border border-white/15 px-8 py-4 font-semibold transition hover:border-[#F7931A] hover:text-[#F7931A]"
            >
              Explore Our Network
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}