// src/components/BoardInput.tsx
import { useState } from "react";

const allRanks = [
  "A",
  "K",
  "Q",
  "J",
  "T",
  "9",
  "8",
  "7",
  "6",
  "5",
  "4",
  "3",
  "2",
];
const allSuits = ["s", "h", "d", "c"];

function getAllCards() {
  const cards: string[] = [];
  for (const rank of allRanks) {
    for (const suit of allSuits) {
      cards.push(rank + suit);
    }
  }
  return cards;
}

const allCards = getAllCards();

export default function BoardInput({
  board,
  onChange,
}: {
  board: string[];
  onChange: (cards: string[]) => void;
}) {
  const [selected, setSelected] = useState<string[]>(board);

  const toggleCard = (card: string) => {
    const newSelected = selected.includes(card)
      ? selected.filter((c) => c !== card)
      : [...selected, card].slice(0, 5);
    setSelected(newSelected);
    onChange(newSelected);
  };

  return (
    <div className="bg-white rounded-md shadow p-4 space-y-4">
      <h2 className="text-xl font-semibold">Board Cards</h2>
      <p className="text-sm text-gray-600">
        Click up to 5 cards to define the board.
      </p>
      <div className="grid grid-cols-13 gap-2">
        {allCards.map((card) => {
          const isSelected = selected.includes(card);
          return (
            <button
              key={card}
              onClick={() => toggleCard(card)}
              className={`border rounded px-2 py-1 text-sm font-mono text-center ${
                isSelected
                  ? "bg-blue-600 text-white border-blue-700"
                  : "bg-gray-100 text-black border-gray-300"
              }`}
            >
              {card}
            </button>
          );
        })}
      </div>
      <div className="text-sm mt-2">
        Selected: {selected.join(", ") || "None"}
      </div>
    </div>
  );
}
