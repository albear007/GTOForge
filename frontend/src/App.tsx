import { useState } from "react";
import PopUpHandler from "./components/PopUpHandler";
import Header from "./components/Header";

function App() {
  const [hero, setHero] = useState("");

  return (
    <div className="min-h-screen bg-[--color-bg] text-[--color-text] p-8">
      <Header />
      <div className="mt-8 max-w-xl mx-auto">
        <PopUpHandler value={hero} onSelect={setHero} />
      </div>
    </div>
  );
}

export default App;
