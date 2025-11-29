export default function Navbar() {
  return (
    <header className="sticky top-0 z-20 border-b border-white/10 bg-slate-950/70 backdrop-blur">
      <div className="mx-auto flex max-w-5xl items-center justify-between px-4 py-3">
        <span className="text-sm font-semibold tracking-wide">
          Sayantan Sen<span className="text-sky-400"> Apps</span>
        </span>
        <nav className="flex gap-4 text-xs text-slate-300">
          <button>Today</button>
          <button>My Apps</button>
          <button>About</button>
          <button>Contact</button>
        </nav>
      </div>
    </header>
  );
}
