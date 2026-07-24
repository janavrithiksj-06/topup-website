type Props = {
  name: string;
  location: string;
  power: string;
};

export default function StationRow({
  name,
  location,
  power,
}: Props) {
  return (
    <button className="flex w-full items-center justify-between border-b border-white/10 py-8 text-left transition hover:bg-white/[0.02]">

      <div>

        <h2 className="text-2xl font-medium">
          {name}
        </h2>

        <p className="mt-2 text-white/45">
          {location} · {power}
        </p>

      </div>

      <span className="text-xl">→</span>

    </button>
  );
}