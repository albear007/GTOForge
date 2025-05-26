// src/components/WeightEditorPopup.tsx
import { useState } from "react";

export default function WeightEditorPopup({
  hand,
  initial,
  onSave,
}: {
  hand: string;
  initial: number;
  onSave: (hand: string, weight: number) => void;
}) {
  const [value, setValue] = useState(initial);

  return (
    <div className="absolute z-50 bg-white text-black p-2 rounded shadow-xl w-32">
      <p className="text-sm font-medium mb-1">{hand}</p>
      <input
        type="number"
        min={0}
        max={100}
        value={value}
        onChange={(e) => setValue(Number(e.target.value))}
        className="w-full p-1 border rounded text-center"
      />
      <button
        onClick={() => onSave(hand, value)}
        className="mt-2 w-full bg-blue-600 text-white py-1 rounded"
      >
        Save
      </button>
    </div>
  );
}
