import HandMatrix from "./HandMatrix";

export default function VillainRangeSelector({
  value,
  onChange,
}: {
  value: Record<string, number>; // map of hand -> weight (%)
  onChange: (range: Record<string, number>) => void;
}) {
  return <HandMatrix mode="multi" value={value} onChange={onChange} />;
}
