// src/components/StackConfig.tsx
import { useState } from "react";

export default function StackConfig({
  heroStack,
  villainStack,
  bigBlind,
  smallBlind,
  ante,
  onChange,
}: {
  heroStack: number;
  villainStack: number;
  bigBlind: number;
  smallBlind: number;
  ante: number;
  onChange: (config: {
    heroStack: number;
    villainStack: number;
    bigBlind: number;
    smallBlind: number;
    ante: number;
  }) => void;
}) {
  const [localState, setLocalState] = useState({
    heroStack,
    villainStack,
    bigBlind,
    smallBlind,
    ante,
  });

  const handleChange = (key: keyof typeof localState, value: number) => {
    const updated = { ...localState, [key]: value };
    setLocalState(updated);
    onChange(updated);
  };

  return (
    <div className="bg-white rounded-md shadow p-4 space-y-4">
      <h2 className="text-xl font-semibold">Stack & Blind Configuration</h2>

      <div className="grid grid-cols-2 gap-4">
        <label className="flex flex-col">
          <span className="text-sm font-medium">Hero Stack (bb)</span>
          <input
            type="number"
            value={localState.heroStack}
            onChange={(e) => handleChange("heroStack", +e.target.value)}
            className="p-2 border rounded"
            min={1}
          />
        </label>

        <label className="flex flex-col">
          <span className="text-sm font-medium">Villain Stack (bb)</span>
          <input
            type="number"
            value={localState.villainStack}
            onChange={(e) => handleChange("villainStack", +e.target.value)}
            className="p-2 border rounded"
            min={1}
          />
        </label>

        <label className="flex flex-col">
          <span className="text-sm font-medium">Big Blind</span>
          <input
            type="number"
            value={localState.bigBlind}
            onChange={(e) => handleChange("bigBlind", +e.target.value)}
            className="p-2 border rounded"
            min={0.01}
          />
        </label>

        <label className="flex flex-col">
          <span className="text-sm font-medium">Small Blind</span>
          <input
            type="number"
            value={localState.smallBlind}
            onChange={(e) => handleChange("smallBlind", +e.target.value)}
            className="p-2 border rounded"
            min={0.01}
          />
        </label>

        <label className="flex flex-col">
          <span className="text-sm font-medium">Ante (optional)</span>
          <input
            type="number"
            value={localState.ante}
            onChange={(e) => handleChange("ante", +e.target.value)}
            className="p-2 border rounded"
            min={0}
          />
        </label>
      </div>
    </div>
  );
}
