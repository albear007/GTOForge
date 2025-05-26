// src/components/StackConfig.tsx
import { useState } from "react";

export default function StackConfig({
  hero,
  villain,
  bb,
  sb,
  ante,
  onChange,
}: {
  hero: number;
  villain: number;
  bb: number;
  sb: number;
  ante: number;
  onChange: (config: {
    hero: number;
    villain: number;
    bb: number;
    sb: number;
    ante: number;
  }) => void;
}) {
  const [localState, setLocalState] = useState({
    hero,
    villain,
    bb,
    sb,
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
            value={localState.hero}
            onChange={(e) => handleChange("hero", +e.target.value)}
            className="p-2 border rounded"
            min={1}
          />
        </label>

        <label className="flex flex-col">
          <span className="text-sm font-medium">Villain Stack (bb)</span>
          <input
            type="number"
            value={localState.villain}
            onChange={(e) => handleChange("villain", +e.target.value)}
            className="p-2 border rounded"
            min={1}
          />
        </label>

        <label className="flex flex-col">
          <span className="text-sm font-medium">Big Blind</span>
          <input
            type="number"
            value={localState.bb}
            onChange={(e) => handleChange("bb", +e.target.value)}
            className="p-2 border rounded"
            min={0.01}
          />
        </label>

        <label className="flex flex-col">
          <span className="text-sm font-medium">Small Blind</span>
          <input
            type="number"
            value={localState.sb}
            onChange={(e) => handleChange("sb", +e.target.value)}
            className="p-2 border rounded"
            min={0.01}
          />
        </label>

        <label className="flex flex-col col-span-2">
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
