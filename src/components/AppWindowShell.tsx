"use client";

export default function AppWindowShell({
  sidebar,
  children,
}: {
  sidebar: React.ReactNode;
  children: React.ReactNode;
}) {
  return (
    <div
    className="min-h-screen flex items-center justify-center px-4 py-6 bg-cover bg-center bg-no-repeat bg-[url('/MacOS_Tahoe.jpg')] dark:bg-[url('/MacOS_TahoeDark.jpg')]">
        {/* Mac-style floating window */}
        <div className="flex h-[90vh] w-full max-w-7xl flex-col overflow-hidden rounded-[1.5rem] border border-black/25 bg-slate-950/55 shadow-[0_40px_120px_rgba(15,23,42,0.9)] backdrop-blur-2xl dark:border-white/10 dark:bg-white/10 dark:shadow-[0_40px_140px_rgba(0,0,0,1)]">
            {/* main window body: sidebar + content */}
            <div className="flex min-h-0 flex-1">
                <aside className="hidden sm:flex w-64 p-2">
                    <div className="flex h-full w-full flex-col gap-4 rounded-2xl border border-white/15 bg-white/10 dark:bg-slate-950/40 dark:border-white/10 px-3 py-3 text-xs text-slate-300">
                        {sidebar}
                    </div>
                </aside>

                <main className="flex-1 overflow-y-auto no-scrollbar ">
                    {children}
                </main>
            </div>
        </div>
    </div>
  );
}
