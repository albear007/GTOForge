interface SolverOutput {
  bestAction: string;
  ev: number;
  explanation: string;
  frequencies: Record<string, number>;
}

export default function ResultCard({ solution }: { solution: SolverOutput }) {
  return (
    <div className="bg-white text-gray-900 p-6 rounded-2xl shadow-xl border border-gray-200 space-y-4 max-w-xl mx-auto">
      <h2 className="text-2xl font-bold tracking-tight text-gray-800 flex items-center gap-2">
        💡 Solver Suggestion
      </h2>

      <div className="grid grid-cols-2 gap-4 text-sm">
        <div>
          <p className="text-gray-500">Best Action</p>
          <p className="text-lg font-semibold">{solution.bestAction}</p>
        </div>
        <div>
          <p className="text-gray-500">Expected Value (EV)</p>
          <p className="text-lg font-semibold">{solution.ev.toFixed(2)} BB</p>
        </div>
      </div>

      <div>
        <p className="text-gray-500 mb-1">Action Frequencies</p>
        <ul className="text-sm space-y-1">
          {Object.entries(solution.frequencies).map(([action, freq]) => (
            <li key={action} className="flex justify-between">
              <span>{action}</span>
              <span className="font-medium">{(freq * 100).toFixed(1)}%</span>
            </li>
          ))}
        </ul>
      </div>

      <div>
        <p className="text-gray-500 mb-1">Explanation</p>
        <p className="text-sm leading-relaxed text-gray-700 whitespace-pre-line">
          {solution.explanation}
        </p>
      </div>
    </div>
  );
}
