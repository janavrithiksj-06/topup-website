import StationCard from "./StationCard";

export default function BottomSheet() {
  return (
    <section className="absolute bottom-0 left-0 right-0 z-20 bg-black">

      <div className="mx-auto max-w-7xl px-8 pb-10 pt-8">

        <h2 className="text-sm uppercase tracking-[0.3em] text-white/35">
          Nearby
        </h2>

        <div className="mt-8">

          <StationCard
            name="Krishnagiri Highway Hub"
            location="NH44"
            power="120 kW"
            distance="2.3 km"
          />

          <StationCard
            name="Salem Central"
            location="Bypass Road"
            power="120 kW"
            distance="45 km"
          />

          <StationCard
            name="Coimbatore East"
            location="Avinashi Road"
            power="120 kW"
            distance="112 km"
          />

        </div>

      </div>

    </section>
  );
}