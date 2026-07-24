import StationRow from "./StationRow";

export default function StationList() {
  return (
    <section>

      <p className="text-xs uppercase tracking-[0.3em] text-white/40">
        Stations
      </p>

      <div className="mt-8">

        <StationRow
          name="Krishnagiri Highway Hub"
          location="NH44"
          power="120 kW"
        />

        <StationRow
          name="Salem Central"
          location="Bypass Road"
          power="120 kW"
        />

        <StationRow
          name="Coimbatore East"
          location="Avinashi Road"
          power="120 kW"
        />

      </div>

    </section>
  );
}