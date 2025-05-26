// src/components/BetSizingConfig.tsx
import { useState } from "react";

export default function BetSizingConfig({
  betSizes,
  onChange,
}: {
  betSizes: number[];
  onChange: (sizes: number[]) => void;
}) {
  const [local, setLocal] = useState(
    betSizes.map((s) => s.toString()).join(", ")
  );

  const handleBlur = () => {
    const parsed = local
      .split(",")
      .map((s) => parseFloat(s.trim()))
      .filter((n) => !isNaN(n) && n > 0 && n <= 10);
    onChange(parsed);
  };

  return (
    <div className="bg-white rounded-md shadow p-4 space-y-4">
      <h2 className="text-xl font-semibold">Bet Sizing Options</h2>
      <p className="text-sm text-gray-600">
        Enter % of pot for each allowed bet size (e.g. 0.33, 0.75, 1)
      </p>
      <input
        type="text"
        value={local}
        onChange={(e) => setLocal(e.target.value)}
        onBlur={handleBlur}
        className="w-full p-2 border rounded font-mono"
      />
    </div>
  );
}
