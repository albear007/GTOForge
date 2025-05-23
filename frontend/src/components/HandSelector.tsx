// src/components/HeroHandSelector.tsx
import { useState } from 'react';
import cn from 'classnames';

const ranks = ['A', 'K', 'Q', 'J', 'T', '9', '8', '7', '6', '5', '4', '3', '2'];

export default function HeroHandSelector({ onSelect }: { onSelect: (hand: string) => void }) {
  const [selected, setSelected] = useState<string | null>(null);

  const handleClick = (row: string, col: string) => {
    let hand = '';
    if (row === col) {
      hand = row + row; // Pocket pair
    } else if (ranks.indexOf(row) < ranks.indexOf(col)) {
      hand = row + col + 's'; // suited
    } else {
      hand = col + row + 'o'; // offsuit
    }

    setSelected(hand);
    onSelect(hand);
  };

  return (
    <div className="overflow-x-auto">
      <table className="table-fixed border-collapse border border-gray-300 mx-auto">
        <thead>
          <tr>
            <th></th>
            {ranks.map((r) => (
              <th key={r} className="w-10 h-10 text-center font-medium">{r}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {ranks.map((row) => (
            <tr key={row}>
              <th className="text-center font-medium">{row}</th>
              {ranks.map((col) => {
                let label = '';
                if (row === col) label = row + row;
                else if (ranks.indexOf(row) < ranks.indexOf(col)) label = row + col + 's';
                else label = col + row + 'o';

                const isSelected = label === selected;

                return (
                  <td
                    key={col}
                    onClick={() => handleClick(row, col)}
                    className={cn(
                      'w-10 h-10 text-xs cursor-pointer text-center border',
                      isSelected && 'bg-blue-500 text-white',
                      row === col && 'bg-gray-200',
                      ranks.indexOf(row) < ranks.indexOf(col) && 'bg-green-100',
                      ranks.indexOf(row) > ranks.indexOf(col) && 'bg-yellow-100'
                    )}
                  >
                    {label}
                  </td>
                );
              })}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}