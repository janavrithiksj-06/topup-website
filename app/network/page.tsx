import FakeMap from "@/components/network/FakeMap";
import PartnerCTA from "@/components/network/PartnerCTA";
import FadeIn from "@/components/FadeIn";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Find EV Charging Stations | Topup",
  description:
    "Locate EV charging stations across India with Topup. Discover fast chargers, upcoming locations, and stay powered wherever you travel.",
};

export default function NetworkPage() {
  return (
    <main className="min-h-screen overflow-hidden bg-[#EEF2F6] text-[#111111]">

      {/* Background Glow */}
      <div className="absolute -left-32 top-20 h-[500px] w-[500px] rounded-full bg-slate-200/40 blur-[140px]" />
      <div className="absolute right-0 top-[420px] h-[420px] w-[420px] rounded-full bg-slate-300/25 blur-[120px]" />

      {/* =====================================================
          HERO
      ===================================================== */}

      <section
        data-navbar-theme="light"
        className="
          relative
          mx-auto
          flex
          max-w-[1400px]
          flex-col
          px-6
          pb-20
          pt-40
          md:px-10
        "
      >
        <FadeIn>

          <p className="mb-6 text-[12px] font-medium uppercase tracking-[0.35em] text-[#FF8000]">
            Topup Network
          </p>

          <h1
            className="
              max-w-5xl
              text-5xl
              font-medium
              leading-[0.94]
              tracking-[-0.03em]
              text-[#111111]
              md:text-7xl
            "
          >
            Powering India's
            <br />
            next generation
            <br />
            of mobility.
          </h1>

          <p
            className="
              mt-10
              max-w-2xl
              text-[18px]
              leading-8
              text-[#5F6B7A]
            "
          >
            A growing network of reliable fast chargers designed for highways,
            cities and everyday travel. The first Topup locations are launching
            soon across South India.
          </p>

        </FadeIn>
      </section>

      {/* =====================================================
          MAP
      ===================================================== */}

      <section
        data-navbar-theme="light"
        className="
          relative
          mx-auto
          max-w-[1400px]
          px-6
          pb-28
          md:px-10
        "
      >
        <FadeIn>

          <div
            className="
              relative
              overflow-hidden
              rounded-[32px]
              border
              border-[#D7DEE7]
              bg-white
              shadow-[0_25px_70px_rgba(15,23,42,0.08)]
            "
          >

            <FakeMap />

            {/* =================================================
                FLOATING CARD
            ================================================= */}

            <div
              className="
                absolute
                left-6
                top-6
                max-w-sm
                rounded-3xl
                border
                border-white/70
                bg-white/90
                p-8
                shadow-xl
                backdrop-blur-xl
                md:left-10
                md:top-10
              "
            >

              <p className="text-[11px] font-medium uppercase tracking-[0.3em] text-[#FF8000]">
                Coming Soon
              </p>

              <h2 className="mt-4 text-2xl font-medium leading-tight text-[#111111]">
                Our network
                <br />
                is just getting started.
              </h2>

              <p className="mt-4 text-[15px] leading-7 text-[#5F6B7A]">
                Topup charging stations will open across highways, commercial
                destinations, hospitality partners and urban mobility hubs.
              </p>

              <div className="mt-8 h-px bg-[#D7DEE7]" />

              <div className="mt-6 flex items-center gap-3">
                <span className="h-px w-7 bg-[#FF8000]" />

                <span className="text-sm text-[#5F6B7A]">
                  First locations launching soon
                </span>
              </div>

            </div>

          </div>

        </FadeIn>
      </section>

      {/* =====================================================
          PARTNER CTA
      ===================================================== */}

      <PartnerCTA />

    </main>
  );
}