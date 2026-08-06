import FadeIn from "./FadeIn";
import Link from "next/link";

export default function CTA() {
  return (
    <FadeIn>
      <section
        id="contact"
        className="scroll-mt-28 bg-black text-white"
        aria-labelledby="cta-heading"
      >
        <div className="mx-auto max-w-5xl px-8 py-40 text-center">
          <h2
            id="cta-heading"
            className="text-5xl font-semibold leading-tight md:text-7xl"
          >
            Ready to power
            <br />
            your next journey?
          </h2>

          <p className="mx-auto mt-8 max-w-2xl text-xl leading-9 text-white/70">
            Whether you're an EV driver, property owner, fleet operator, or
            business, Topup is building a reliable network of DC fast charging
            stations across India. Partner with us to accelerate the future of
            electric mobility.
          </p>

          <Link
            href="/contact"
            aria-label="Contact Topup about EV charging solutions"
            className="mt-12 inline-flex rounded-full bg-white px-8 py-4 font-medium text-black transition hover:scale-105"
          >
            Get in Touch
          </Link>
        </div>
      </section>
    </FadeIn>
  );
}