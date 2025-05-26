import { useState } from "react";
import HeroHandInput from "./components/HeroHandInput";
import Header from "./components/Header";
import VillainRangeSelector from "./components/VillainRangeSelector";
import ResultCard from "./components/ResultCard";

function App() {
  const [hero, setHero] = useState("");
  const [villainRange, setVillainRange] = useState<Record<string, number>>({});
  const [solution, setSolution] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const handleSolve = async () => {
    setLoading(true);
    try {
      const res = await fetch(
        `http://localhost:8000/solve?hero=${hero}&villain=${villainRange.join(
          ","
        )}`,
        {
          method: "POST",
        }
      );
      const data = await res.json();
      setSolution(data.solution);
    } catch (err) {
      console.error("Solve error:", err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-[--color-bg] text-[--color-text] p-8">
      <Header />
      <div className="mt-8 max-w-xl mx-auto space-y-6">
        <HeroHandInput value={hero} onSelect={setHero} />
        <VillainRangeSelector value={villainRange} onChange={setVillainRange} />

        <button
          onClick={handleSolve}
          disabled={loading || !hero || villainRange.length === 0}
          className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded disabled:opacity-50"
        >
          {loading ? "Solving..." : "Solve"}
        </button>

        {solution && <ResultCard solution={solution} />}
      </div>
    </div>
  );
}

export default App;
