import Image from "next/image";
import FadeIn from "./FadeIn";

export default function Showcase() {
  return (
    <FadeIn>
      <section id="business" className="bg-black text-white scroll-mt-28">
      <div className="mx-auto max-w-[1600px] px-8 py-36">

        <p className="text-sm font-medium uppercase tracking-[0.35em] text-white/50">
          BUILT FOR INDIA
        </p>

        <h2 className="mt-8 max-w-5xl text-5xl font-semibold leading-[1.05] tracking-tight md:text-7xl">
          Designed for
          <br />
          Every Journey.
        </h2>

        <p className="mt-8 max-w-2xl text-xl leading-9 text-white/70">
          Every Topup station is designed to combine high-performance charging,
          premium architecture and a seamless customer experience.
        </p>

        <div className="mt-20 overflow-hidden rounded-[32px]">
          <Image
            src="/images/hero.jpg"
            alt="Topup"
            width={1800}
            height={1000}
            className="h-[800px] w-full rounded-[40px] object-cover transition duration-700 hover:scale-[1.03]"
          />
        </div>

      </div>
      </section>
    </FadeIn>
  );
}