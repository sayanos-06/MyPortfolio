import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {
  return (
    <main className="min-h-screen bg-slate-950 text-slate-100">
      <section className="mx-auto max-w-5xl px-4 py-8">
        {/* Today / Featured App placeholder */}
        <div className="mb-8 rounded-3xl border border-white/10 bg-white/5 p-6">
          <h2 className="text-xs font-semibold uppercase text-slate-300">
            Today
          </h2>
          <p className="mt-2 text-2xl font-bold">
            Featured App coming soon
          </p>
        </div>

        {/* My Apps list placeholder */}
        <section>
          <h3 className="mb-4 text-sm font-semibold uppercase text-slate-300">
            My Apps
          </h3>
          <div className="space-y-3">
            <div className="rounded-2xl border border-white/10 bg-white/5 p-4 text-sm">
              App card placeholder
            </div>
            <div className="rounded-2xl border border-white/10 bg-white/5 p-4 text-sm">
              App card placeholder
            </div>
          </div>
        </section>
      </section>
    </main>
  );
}

