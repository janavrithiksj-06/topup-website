import { Check } from "lucide-react";

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
        "Want to participate in India's EV revolution without managing chargers yourself? Invest in a Topup charging station while we handle everything — from planning and installation to daily operations and maintenance.",
      points: ["You invest", "We operate end-to-end", "Earn recurring revenue"],
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

  const steps = [
    { number: "01", title: "You Apply", text: "Tell us about your property or investment interest." },
    { number: "02", title: "Evaluation", text: "We assess the location, demand and project feasibility." },
    { number: "03", title: "Build", text: "Topup installs the charging infrastructure and software." },
    { number: "04", title: "Operate", text: "We manage charging, payments, maintenance and support." },
    { number: "05", title: "Earn", text: "Receive recurring revenue while Topup keeps the network running." },
  ];

  const reasons = [
    { title: "Managed End-to-End", text: "From installation to maintenance, our team handles daily operations." },
    { title: "Recurring Revenue", text: "Earn from charging sessions without managing the business yourself." },
    { title: "Premium Technology", text: "Fast charging hardware backed by intelligent software and monitoring." },
    { title: "Long-Term Partnership", text: "We grow the network together with continuous operational support." },
  ];

  return (
    <main className="bg-[#111111] text-[#F8F8F5]">
      {/* HERO */}
      <section className="mx-auto max-w-[1400px] px-6 pt-40 pb-24 md:px-10">
        <div className="max-w-3xl">
          <p className="text-[12px] font-medium uppercase tracking-[0.35em] text-[#F7931A]">
            Partner With Topup
          </p>

          <h1 className="mt-6 text-5xl font-medium leading-[0.95] tracking-[-0.02em] md:text-7xl">
            Own the future of
            <br />
            <span className="text-[#F7931A]">EV charging.</span>
          </h1>

          <p className="mt-8 max-w-2xl text-[17px] leading-8 text-[#D6D6D6]">
            Whether you own a commercial property or simply want to invest,
            Topup builds, operates and manages premium EV charging stations
            while you benefit from a long-term revenue opportunity.
          </p>

          <div className="mt-10 flex flex-wrap items-center gap-x-10 gap-y-5">
            <a
              href="/contact"
              className="bg-[#F7931A] px-8 py-4 text-[13px] font-medium uppercase tracking-[0.15em] text-[#111111] transition-colors duration-300 hover:bg-[#F8F8F5]"
            >
              Become a Partner
            </a>

            <a
              href="#models"
              className="text-[13px] font-medium uppercase tracking-[0.15em] text-[#F8F8F5] transition-colors duration-300 hover:text-[#F7931A]"
            >
              Explore Opportunities
            </a>
          </div>
        </div>
      </section>

      {/* PARTNERSHIP MODELS */}
      <section id="models" className="border-t border-white/10">
        <div className="mx-auto max-w-[1400px] px-6 py-24 md:px-10">
          <div className="max-w-2xl">
            <p className="text-[12px] font-medium uppercase tracking-[0.3em] text-[#F7931A]">
              Two Ways To Partner
            </p>
            <h2 className="mt-5 text-4xl font-medium tracking-[-0.01em] md:text-5xl">
              Choose the partnership model that suits you.
            </h2>
            <p className="mt-6 text-[17px] leading-8 text-[#D6D6D6]">
              Whether you&apos;re contributing the location or the
              investment, Topup provides the technology, operations and
              support needed to build a successful charging business.
            </p>
          </div>

          <div className="mt-16 grid border-t border-white/10 lg:grid-cols-2">
            {opportunities.map((item, i) => (
              <div
                key={item.title}
                className={`border-b border-white/10 py-12 lg:border-b-0 lg:py-14 ${
                  i > 0 ? "lg:border-l lg:pl-14" : "lg:pr-14"
                }`}
              >
                <p className="text-[12px] font-medium uppercase tracking-[0.2em] text-[#F7931A]">
                  {item.subtitle}
                </p>
                <h3 className="mt-3 text-2xl font-medium tracking-[-0.01em]">
                  {item.title}
                </h3>
                <p className="mt-6 leading-7 text-[#D6D6D6]">
                  {item.description}
                </p>

                <div className="mt-8 space-y-3">
                  {item.points.map((point) => (
                    <div key={point} className="flex items-center gap-3">
                      <Check size={14} strokeWidth={2.5} className="text-[#F7931A]" />
                      <span className="text-[15px]">{point}</span>
                    </div>
                  ))}
                </div>

                <a
                  href="/contact"
                  className="mt-10 inline-flex border border-[#F7931A] px-6 py-3 text-[13px] font-medium uppercase tracking-[0.15em] text-[#F7931A] transition-colors duration-300 hover:bg-[#F7931A] hover:text-[#111111]"
                >
                  {item.button}
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHAT TOPUP HANDLES */}
      <section className="border-t border-white/10">
        <div className="mx-auto grid max-w-[1400px] gap-16 px-6 py-24 md:grid-cols-2 md:px-10">
          <div>
            <p className="text-[12px] font-medium uppercase tracking-[0.3em] text-[#F7931A]">
              What Topup Handles
            </p>
            <h2 className="mt-5 text-4xl font-medium leading-[1.05] tracking-[-0.01em]">
              You focus on the opportunity.
              <br />
              We handle the execution.
            </h2>
            <p className="mt-6 text-[17px] leading-8 text-[#D6D6D6]">
              From feasibility studies and charger installation to software,
              payments, maintenance and customer support, Topup manages the
              complete lifecycle of every charging station.
            </p>

            <div className="mt-10 border-t border-white/10 pt-6">
              <p className="text-[13px] font-medium uppercase tracking-[0.1em] text-[#F7931A]">
                Our goal is simple
              </p>
              <p className="mt-3 leading-7 text-[#D6D6D6]">
                You shouldn&apos;t have to become an EV charging expert to
                participate in the industry&apos;s growth. We build, operate
                and optimize the network while you benefit from the business.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2">
            {services.map((service, i) => (
              <div
                key={service}
                className={`flex items-center gap-3 border-t border-white/10 py-4 ${
                  i % 2 === 1 ? "sm:pl-6" : ""
                }`}
              >
                <Check size={14} strokeWidth={2.5} className="shrink-0 text-[#F7931A]" />
                <span className="text-[14px] text-[#D6D6D6]">{service}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="border-t border-white/10">
        <div className="mx-auto max-w-[1400px] px-6 py-24 md:px-10">
          <div className="max-w-2xl">
            <p className="text-[12px] font-medium uppercase tracking-[0.3em] text-[#F7931A]">
              How It Works
            </p>
            <h2 className="mt-5 text-4xl font-medium tracking-[-0.01em] md:text-5xl">
              A partnership built for long-term success.
            </h2>
            <p className="mt-6 text-[17px] leading-8 text-[#D6D6D6]">
              Whether you&apos;re providing the location or investing in the
              infrastructure, Topup manages every stage of the project so you
              don&apos;t have to.
            </p>
          </div>

          <div className="mt-16 grid gap-10 border-t border-white/10 pt-10 md:grid-cols-5 md:gap-8">
            {steps.map((step) => (
              <div key={step.number}>
                <p className="text-4xl font-medium tracking-[-0.02em] text-[#F7931A]/30">
                  {step.number}
                </p>
                <h3 className="mt-5 text-lg font-medium">{step.title}</h3>
                <p className="mt-3 text-[14px] leading-6 text-[#D6D6D6]">
                  {step.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHY INVEST NOW */}
      <section className="border-t border-white/10">
        <div className="mx-auto grid max-w-[1400px] gap-12 px-6 py-24 md:grid-cols-2 md:px-10 md:gap-20">
          <div>
            <p className="text-[12px] font-medium uppercase tracking-[0.3em] text-[#F7931A]">
              Why Topup
            </p>
            <h2 className="mt-5 text-4xl font-medium leading-[1.05] tracking-[-0.01em]">
              Built for India&apos;s next generation of charging
              infrastructure.
            </h2>
            <p className="mt-6 text-[17px] leading-8 text-[#D6D6D6]">
              EV adoption is accelerating, and charging infrastructure is
              becoming an essential part of commercial real estate and
              highway travel. Topup is building a premium network designed
              for the years ahead.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-0 border-t border-white/10 sm:grid-cols-2">
            {reasons.map((item, i) => (
              <div
                key={item.title}
                className={`border-b border-white/10 py-8 ${
                  i % 2 === 1 ? "sm:border-l sm:pl-8" : "sm:pr-8"
                }`}
              >
                <h3 className="text-lg font-medium text-[#F7931A]">
                  {item.title}
                </h3>
                <p className="mt-3 text-[14px] leading-6 text-[#D6D6D6]">
                  {item.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="border-t border-white/10">
        <div className="mx-auto max-w-[900px] px-6 py-28 text-center md:px-10">
          <p className="text-[12px] font-medium uppercase tracking-[0.3em] text-[#F7931A]">
            Let&apos;s Build Together
          </p>

          <h2 className="mt-5 text-4xl font-medium tracking-[-0.01em] md:text-5xl">
            Ready to explore a partnership with Topup?
          </h2>

          <p className="mx-auto mt-8 max-w-xl text-[17px] leading-8 text-[#D6D6D6]">
            Whether you&apos;re looking to host a charging station or invest
            in one, we&apos;d love to understand your goals and discuss how
            Topup can help bring the opportunity to life.
          </p>

          <div className="mt-10 flex flex-wrap justify-center gap-x-10 gap-y-5">
            <a
              href="/contact"
              className="bg-[#F7931A] px-8 py-4 text-[13px] font-medium uppercase tracking-[0.15em] text-[#111111] transition-colors duration-300 hover:bg-[#F8F8F5]"
            >
              Contact Us
            </a>

            <a
              href="/network"
              className="flex items-center text-[13px] font-medium uppercase tracking-[0.15em] text-[#F8F8F5] transition-colors duration-300 hover:text-[#F7931A]"
            >
              Explore Our Network
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}