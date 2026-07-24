import Image from "next/image";
export default function Navbar() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b border-white/10 bg-black/85 shadow-[0_0_30px_rgba(34,197,94,0.08)] backdrop-blur-xl">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-10">

        <Image
          src="/images/logo.png"
          alt="Topup"
          width={150}
          height={45}
          priority
          className="h-auto w-auto"
        />

        <nav className="hidden items-center gap-12 text-[15px] text-white/70 md:flex">

  <a href="#home" className="transition hover:text-[#F7931A]">
    Home
  </a>

  <a href="/network" className="transition hover:text-[#F7931A]">
    Network
  </a>

  <a href="#about" className="transition hover:text-[#F7931A]">
    About
  </a>

  <a href="#business" className="transition hover:text-[#F7931A]">
    Business
  </a>

  <a href="#contact" className="transition hover:text-[#F7931A]">
    Contact
  </a>

</nav>

        <a
          href="/network"
          className="rounded-full border border-white/20 px-6 py-3 text-sm font-medium transition hover:border-green-400/60 hover:bg-green-400/10 hover:text-green-400"
        >
          Find Charger
        </a>

      </div>
    </header>
  );
}