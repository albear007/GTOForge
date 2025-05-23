export default function Header() {
  return (
    <header className="px-6 py-4 flex items-center justify-between rounded-md">
      <div className="flex items-center gap-3">
        <img src="/favicon.svg" alt="GTOForge Logo" className="h-8 w-8" />
        <h1 className="text-2xl font-bold tracking-tight">GTOForge</h1>
      </div>
      {/* Optional future nav or toggle */}
      {/* <nav className="space-x-4">
        <a href="#" className="text-sm text-[--color-muted] hover:text-[--color-text]">Docs</a>
      </nav> */}
    </header>
  );
}
