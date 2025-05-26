import { useState, useEffect } from "react";
import cn from "classnames";
import WeightEditorPopup from "./WeightEditor"; // popup editor for setting weight

const ranks = ["A", "K", "Q", "J", "T", "9", "8", "7", "6", "5", "4", "3", "2"];

// Single select or multi select mode. Discriminated union type
type HandMatrixProps =
  | {
      mode: "single";
      value: string | null;
      onSelect: (hand: string) => void;
    }
  | {
      mode: "multi";
      value: Record<string, number>; // map of hand -> weight (%)
      onChange: (range: Record<string, number>) => void;
    };

export default function HandMatrix(props: HandMatrixProps) {
  // Determine if we are in multi-select mode
  const isMulti = props.mode === "multi";

  // Initialize selected weights or selected hand depending on mode
  const [weights, setWeights] = useState<Record<string, number>>(
    isMulti ? props.value : props.value ? { [props.value]: 100 } : {}
  );

  // Popup editor state (for multi mode weight editing)
  const [popupHand, setPopupHand] = useState<string | null>(null);
  const [popupCoords, setPopupCoords] = useState<{
    x: number;
    y: number;
  } | null>(null);

  // Sync selected range with parent in multi mode
  useEffect(() => {
    if (isMulti && "onChange" in props) {
      props.onChange(weights);
    }
  }, [weights]);

  // Generate hand label from row and column
  const getLabel = (row: string, col: string): string => {
    if (row === col) return row + row;
    return ranks.indexOf(row) < ranks.indexOf(col)
      ? row + col + "s"
      : col + row + "o";
  };

  // Handle click on a cell in the matrix
  const handleClick = (label: string, rowIndex: number, colIndex: number) => {
    if (isMulti) {
      if (label in weights) {
        // If already selected, open popup to edit weight
        console.log("Opening popup for", label);
        setPopupHand(label);
        setPopupCoords({ x: colIndex * 42 + 64, y: rowIndex * 42 + 110 }); // approximate position
      } else {
        setWeights({ ...weights, [label]: 100 }); // add with default 100%
      }
    } else {
      if ("onSelect" in props) props.onSelect(label);
    }
  };

  return (
    <div className="relative overflow-x-auto">
      <table className="table-fixed border-collapse border border-black mx-auto">
        <thead>
          <tr>
            <th></th>
            {/* Top header row */}
            {ranks.map((r) => (
              <th
                key={r}
                className="w-8 h-8 text-center font-medium text-black"
              >
                {r}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {/* Build matrix row by row */}
          {ranks.map((row, rowIndex) => (
            <tr key={row}>
              <th className="w-8 h-8 text-center font-medium text-black">
                {row}
              </th>
              {ranks.map((col, colIndex) => {
                const label = getLabel(row, col);
                const isActive = isMulti
                  ? label in weights
                  : props.mode === "single" && props.value === label;
                const weight = isMulti ? weights[label] ?? 0 : 100;

                return (
                  <td
                    key={col}
                    onClick={() => handleClick(label, rowIndex, colIndex)}
                    style={{
                      backgroundColor:
                        isMulti && isActive
                          ? `rgba(128, 0, 128, ${weight / 100})`
                          : undefined,
                    }}
                    className={cn(
                      "w-10 h-10 text-xs cursor-pointer text-center border border-black text-black",
                      isActive && !isMulti && "bg-gray-500 text-white",
                      row === col && "bg-blue-200",
                      ranks.indexOf(row) < ranks.indexOf(col) && "bg-green-100",
                      ranks.indexOf(row) > ranks.indexOf(col) && "bg-yellow-100"
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
      {/* Show weight editor popup if active (multi mode only) */}
      {isMulti && popupHand && popupCoords && (
        <div
          style={{
            position: "absolute",
            top: popupCoords.y,
            left: popupCoords.x,
          }}
        >
          <WeightEditorPopup
            hand={popupHand}
            initial={weights[popupHand] ?? 100}
            onSave={(hand, newWeight) => {
              setWeights({ ...weights, [hand]: newWeight });
              setPopupHand(null);
              setPopupCoords(null);
            }}
          />
        </div>
      )}
    </div>
  );
}
