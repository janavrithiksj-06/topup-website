type Props = {
  selected?: boolean;
};

export default function MapMarker({ selected = false }: Props) {
  return (
    <div
      className={`transition-all duration-300 ${
        selected ? "scale-150" : "scale-100"
      }`}
    >
      <div
        className={`h-4 w-4 rounded-full border-2 ${
          selected
            ? "border-lime-400 bg-lime-400"
            : "border-lime-400 bg-white"
        }`}
      />
    </div>
  );
}