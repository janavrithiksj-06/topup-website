import FadeIn from "./FadeIn";

export default function CTA() {
  return (
    <FadeIn>
      <section id="contact" className="bg-black text-white scroll-mt-28">
      <div className="mx-auto max-w-5xl px-8 py-40 text-center">

        <h2 className="text-5xl font-semibold leading-tight md:text-7xl">
          Ready to power
          <br />
          the next journey?
        </h2>

        <p className="mx-auto mt-8 max-w-2xl text-xl leading-9 text-white/70">
          Whether you're an EV driver, a property owner or a business,
          Topup is building the future of charging infrastructure.
        </p>

        <a
          href="mailto:hello@topup.in"
          className="mt-12 inline-flex rounded-full bg-white px-8 py-4 font-medium text-black transition hover:scale-105"
        >
          Get in Touch
        </a>

      </div>
      </section>
    </FadeIn>
  );
}