import Image from "next/image";
import FadeIn from "./FadeIn";

export default function Showcase() {
  return (
    <FadeIn>
      <section
        id="business"
        className="bg-black text-white scroll-mt-28"
        aria-labelledby="showcase-heading"
      >
        <div className="mx-auto max-w-[1600px] px-8 py-36">
          {/* Label */}
          <p className="text-sm font-medium uppercase tracking-[0.35em] text-white/50">
            BUILT FOR INDIA
          </p>

          {/* Heading */}
          <h2
            id="showcase-heading"
            className="mt-8 max-w-5xl text-5xl font-semibold leading-[1.05] tracking-tight md:text-7xl"
          >
            Fast charging,
            <br />
            built for every journey.
          </h2>

          {/* Description */}
          <p className="mt-8 max-w-2xl text-xl leading-9 text-white/70">
            Topup is developing a premium network of DC fast charging stations
            across India, combining reliable charging technology, thoughtfully
            designed locations, and a seamless experience for electric vehicle
            drivers.
          </p>

          {/* Image */}
          <div className="mt-20 overflow-hidden rounded-[32px]">
            <Image
              src="/images/hero.jpg"
              alt="Topup DC fast charging station in India"
              width={1800}
              height={1000}
              priority
              className="h-[800px] w-full rounded-[40px] object-cover transition duration-700 hover:scale-[1.03]"
            />
          </div>
        </div>
      </section>
    </FadeIn>
  );
}