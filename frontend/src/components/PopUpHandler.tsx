import { useState, useRef, useEffect } from "react";
import HeroHandSelector from "./HandSelector";

export default function HandInputWithPopup({
  value,
  onSelect,
}: {
  value: string;
  onSelect: (hand: string) => void;
}) {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  // Close on outside click
  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, []);

  return (
    <div className="relative w-full" ref={ref}>
      <input
        type="text"
        placeholder="Hero Hand (e.g., AhKh)"
        readOnly
        value={value}
        onClick={() => setOpen(true)}
        className="p-2 border mb-4 block w-full rounded cursor-pointer"
      />
      {open && (
        <div className="absolute z-20 top-full mt-1 p-1 rounded bg-gray-300 ">
          <HeroHandSelector
            onSelect={(hand) => {
              onSelect(hand);
              setOpen(false);
            }}
          />
        </div>
      )}
    </div>
  );
}
