// src/components/GameTypeAndPosition.tsx
import { useState } from "react";

export default function GameTypeAndPosition({
  gameType,
  heroPosition,
  villainPosition,
  onChange,
}: {
  gameType: "cash" | "tournament";
  heroPosition: string;
  villainPosition: string;
  onChange: (config: {
    gameType: "cash" | "tournament";
    heroPosition: string;
    villainPosition: string;
  }) => void;
}) {
  const [state, setState] = useState({
    gameType,
    heroPosition,
    villainPosition,
  });

  const handleChange = (
    key: keyof typeof state,
    value: string | "cash" | "tournament"
  ) => {
    const updated = { ...state, [key]: value };
    setState(updated);
    onChange(updated);
  };

  const positions = ["UTG", "HJ", "CO", "BTN", "SB", "BB"];

  return (
    <div className="bg-white rounded-md shadow p-4 space-y-4">
      <h2 className="text-xl font-semibold">Game Type & Positions</h2>

      <div className="grid grid-cols-2 gap-4">
        <label className="flex flex-col">
          <span className="text-sm font-medium">Game Type</span>
          <select
            value={state.gameType}
            onChange={(e) => handleChange("gameType", e.target.value as any)}
            className="p-2 border rounded"
          >
            <option value="cash">Cash</option>
            <option value="tournament">Tournament</option>
          </select>
        </label>

        <label className="flex flex-col">
          <span className="text-sm font-medium">Hero Position</span>
          <select
            value={state.heroPosition}
            onChange={(e) => handleChange("heroPosition", e.target.value)}
            className="p-2 border rounded"
          >
            {positions.map((pos) => (
              <option key={pos} value={pos}>
                {pos}
              </option>
            ))}
          </select>
        </label>

        <label className="flex flex-col">
          <span className="text-sm font-medium">Villain Position</span>
          <select
            value={state.villainPosition}
            onChange={(e) => handleChange("villainPosition", e.target.value)}
            className="p-2 border rounded"
          >
            {positions.map((pos) => (
              <option key={pos} value={pos}>
                {pos}
              </option>
            ))}
          </select>
        </label>
      </div>
    </div>
  );
}
