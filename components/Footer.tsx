import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-black text-white">
      <div className="mx-auto max-w-7xl px-8 py-16">
        {/* White Card */}
        <div className="rounded-[40px] bg-white p-8 md:p-12">
          <div className="flex flex-col gap-10 md:flex-row md:items-end md:justify-between">
            <div className="max-w-xl">
              <Image
                src="/images/logo6.png"
                alt="TopUp"
                width={180}
                height={60}
                priority
                className="h-16 w-auto"
              />

              <h2 className="mt-8 text-4xl font-semibold leading-tight text-[#111111] md:text-5xl">
                Powering the Future of Mobility.
              </h2>
            </div>

            <nav className="flex flex-wrap gap-8 text-[15px] font-medium text-[#6B7280]">
             <Link href="/network" className="transition hover:text-[#111111]">
  Network
</Link>

<Link href="/partner" className="transition hover:text-[#111111]">
  Partner
</Link>

<Link href="/partner" className="transition hover:text-[#111111]">
  About
</Link>

<Link href="/contact" className="transition hover:text-[#111111]">
  Contact
</Link>
            </nav>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-8 flex flex-col gap-4 border-t border-white/10 pt-6 text-sm md:flex-row md:items-center md:justify-between">
          <p className="text-white/50">© 2026 TopUp</p>

          <p className="uppercase tracking-[0.3em] text-white/40">
            Designed and engineered in India 🇮🇳
          </p>
        </div>
      </div>
    </footer>
  );
}