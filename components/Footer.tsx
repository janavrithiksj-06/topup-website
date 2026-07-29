import Image from "next/image";

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-black text-white">
      <div className="mx-auto max-w-7xl px-8 py-14">
        {/* White Card */}
        <div className="rounded-[32px] bg-white p-8 shadow-2xl md:p-12">
          <div className="flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
            <div className="max-w-md">
              <div className="mb-6 inline-flex">
                <Image
                  src="/images/logo6.png"
                  alt="Topup"
                  width={130}
                  height={30}
                  priority
                  className="h-20 w-auto"
                />
              </div>

              <h2 className="text-4xl font-semibold leading-tight text-[#111111] md:text-5xl">
                Powering the Future of Mobility.
              </h2>
            </div>

            <nav className="flex flex-wrap gap-8 text-sm font-medium text-[#6B7280]">
              <a href="#" className="transition-colors hover:text-[#111111]">
                Network
              </a>
              <a href="#" className="transition-colors hover:text-[#111111]">
                Business
              </a>
              <a href="#" className="transition-colors hover:text-[#111111]">
                About
              </a>
              <a href="#" className="transition-colors hover:text-[#111111]">
                Contact
              </a>
            </nav>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="mt-10 flex flex-col gap-3 border-t border-white/10 pt-6 text-sm md:flex-row md:items-center md:justify-between">
          <p className="text-white/50">© 2026 Topup</p>

          <p className="uppercase tracking-[0.3em] text-white/40">
            Designed and engineered in India 🇮🇳
          </p>
        </div>
      </div>
    </footer>
  );
}