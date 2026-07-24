type StationCardProps = {
  name: string;
  location: string;
  power: string;
  distance: string;
};

export default function StationCard({
  name,
  location,
  power,
  distance,
}: StationCardProps) {
  return (
    <div className="cursor-pointer rounded-2xl border border-white/10 bg-white/5 p-5 transition hover:border-green-500 hover:bg-white/10">
      <div className="flex items-center justify-between gap-4">
        <div>
          <p className="text-sm text-green-400">● Available</p>
          <h3 className="mt-2 text-xl font-semibold text-white">{name}</h3>
          <p className="mt-2 text-white/60">
            {location} • {power} DC
          </p>
          <p className="mt-1 text-sm text-white/45">{distance} away</p>
        </div>

        <button className="rounded-full bg-green-500 px-5 py-2 font-medium text-black transition hover:scale-105">
          Navigate
        </button>
      </div>
    </div>
  );
}
