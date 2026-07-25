import Image from "next/image";

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-black text-white">
      <div className="mx-auto max-w-7xl px-8 py-14">
        <div className="flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
          <div className="max-w-md">
            <Image
              src="/images/logo.png"
              alt="Topup"
              width={150}
              height={45}
              priority
              className="h-auto w-auto"
            />
            <h2 className="mt-2 text-4xl font-semibold leading-tight md:text-5xl">
              Powering the Future of Mobility.
            </h2>
          </div>

          <nav className="flex flex-wrap gap-8 text-sm text-white/70">
            <a href="#" className="transition hover:text-white">
              Network
            </a>
            <a href="#" className="transition hover:text-white">
              Business
            </a>
            <a href="#" className="transition hover:text-white">
              About
            </a>
            <a href="#" className="transition hover:text-white">
              Contact
            </a>
          </nav>
        </div>

        <div className="mt-10 flex flex-col gap-3 border-t border-white/10 pt-6 text-sm md:flex-row md:items-center md:justify-between">
          <p className="text-white/50">© 2026 Topup</p>
          <p className="uppercase tracking-[0.3em] text-white/40">
            Designed and engineered in India 🇮🇳.
          </p>
        </div>
      </div>
    </footer>
  );
}
