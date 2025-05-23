import { useState } from 'react'
import './App.css'

function App() {
  const [hero, setHero] = useState("");
  const [villain, setVillain] = useState("");
  const [solution, setSolution] = useState("");

  const handleSubmit = async () => {
    const res = await fetch(`http://localhost:8000/solve?hero=${hero}&villain=${villain}`, {
      method: "POST",
    });
    const data = await res.json();
    setSolution(data.solution);
  };

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <h1 className="text-3xl font-bold mb-4">GTOForge Frontend</h1>
      <input
        type="text"
        placeholder="Hero Hand (e.g., AhKh)"
        value={hero}
        onChange={(e) => setHero(e.target.value)}
        className="p-2 border border-gray-300 mb-2 block"
      />
      <input
        type="text"
        placeholder="Villain Hand (e.g., QsJh)"
        value={villain}
        onChange={(e) => setVillain(e.target.value)}
        className="p-2 border border-gray-300 mb-2 block"
      />
      <button
        onClick={handleSubmit}
        className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
      >
        Solve
      </button>
      {solution && <p className="mt-4 text-xl">💡 Solution: {solution}</p>}
    </div>
  );
}

export default App
