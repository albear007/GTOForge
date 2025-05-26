import { useState } from "react";
import HeroHandInput from "./components/HeroHandInput";
import Header from "./components/Header";
import VillainRangeSelector from "./components/VillainRangeSelector";
import ResultCard from "./components/ResultCard";
import StackConfig from "./components/StackConfig";
import GameTypePosition from "./components/GameTypePosition";
import BoardInput from "./components/BoardInput";
import BetSizingConfig from "./components/BetSizingConfig";

function App() {
  const [hero, setHero] = useState("");
  const [villainRange, setVillainRange] = useState<Record<string, number>>({});
  const [solution, setSolution] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const [stackConfig, setStackConfig] = useState({
    heroStack: 100,
    villainStack: 100,
    bigBlind: 2,
    smallBlind: 1,
    ante: 0,
  });
  const [gameConfig, setGameConfig] = useState<{
    gameType: "cash" | "tournament";
    heroPosition: string;
    villainPosition: string;
  }>({
    gameType: "cash",
    heroPosition: "BTN",
    villainPosition: "BB",
  });
  const [board, setBoard] = useState<string[]>([]);
  const [betSizes, setBetSizes] = useState<number[]>([0.33, 0.75, 1]);

  const handleSolve = async () => {
    setLoading(true);

    const payload = {
      hero,
      villainRange,
      board,
      stack: stackConfig,
      positions: {
        hero: gameConfig.heroPosition,
        villain: gameConfig.villainPosition,
      },
      gameType: gameConfig.gameType,
      betSizes,
    };

    try {
      const res = await fetch("http://localhost:8000/solve", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      const data = await res.json();
      setSolution(data); // or data.solution, depending on format
    } catch (err) {
      console.error("Solve error:", err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-[--color-bg] text-[--color-text] px-4 sm:px-6 lg:px-8 py-8">
      <Header />

      <div className="mt-8 grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Left column: inputs */}
        <div className="lg:col-span-2 space-y-8">
          {/* Setup Config */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <GameTypePosition {...gameConfig} onChange={setGameConfig} />
            <StackConfig {...stackConfig} onChange={setStackConfig} />
            <BetSizingConfig betSizes={betSizes} onChange={setBetSizes} />
          </div>

          {/* Game State Focus */}
          <div className="space-y-6">
            <BoardInput board={board} onChange={setBoard} />
            <HeroHandInput value={hero} onSelect={setHero} />
            <VillainRangeSelector
              value={villainRange}
              onChange={setVillainRange}
            />
          </div>

          {/* Solve Button */}
          <div className="sticky bottom-0 bg-[--color-bg] pt-4">
            <button
              onClick={handleSolve}
              disabled={
                loading || !hero || Object.keys(villainRange).length === 0
              }
              className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded disabled:opacity-50"
            >
              {loading ? "Solving..." : "Solve"}
            </button>
          </div>
        </div>

        {/* Right column: results */}
        <div className="space-y-6">
          {solution && <ResultCard solution={solution} />}
        </div>
      </div>
    </div>
  );
}

export default App;
