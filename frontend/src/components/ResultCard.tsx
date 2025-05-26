export default function ResultCard({ solution }: { solution: string }) {
  return (
    <div className="bg-gray-800 text-white p-4 rounded-lg shadow-md space-y-2">
      <h2 className="text-xl font-semibold">💡 Solver Output</h2>
      <p className="text-base leading-relaxed whitespace-pre-line">
        {solution}
      </p>
    </div>
  );
}
