import Image from "next/image";
import styles from "./page.module.css";
import { APPS } from "@/data/apps";

const featuredApp = APPS.find((app) => app.isFeatured) ?? APPS[0];

export default function Home() {
  return (
    <main className="min-h-screen bg-slate-950 text-slate-100">
      <section className="mx-auto max-w-5xl px-4 py-8">
      {/* Today / Featured */}
        <div className="mb-8 overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-6 sm:p-8">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-300">
            Today
          </p>
          <p className="mt-1 text-[11px] uppercase tracking-[0.25em] text-sky-400">
            FEATURED APP
          </p>
          <h1 className="mt-4 text-2xl font-semibold sm:text-3xl">
            {featuredApp.name}
          </h1>
          <p className="mt-2 max-w-xl text-sm text-slate-300">
            {featuredApp.subtitle}
          </p>
          <div className="mt-4 flex flex-wrap items-center gap-3">
            <button className="rounded-full bg-sky-500 px-4 py-1.5 text-xs font-semibold text-slate-950">
              GET
            </button>
            <span className="text-[11px] uppercase tracking-[0.2em] text-slate-400">
              {featuredApp.tags.join(" • ")}
            </span>
          </div>
        </div>

        {/* My Apps list placeholder */}
        <section>
          <h3 className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-slate-400">
            My Apps
          </h3>

          <div className="space-y-3">
            {APPS.map((app) => (
              <div
                key={app.slug}
                className="flex items-center justify-between gap-4 rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm"
              >
                <div className="flex items-center gap-3">
                  {/* Temp icon circle – real icon later */}
                  <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-slate-800 text-[11px] font-semibold">
                    {app.name.charAt(0)}
                  </div>
                  <div>
                    <p className="text-sm font-medium">{app.name}</p>
                    <p className="text-xs text-slate-400">{app.subtitle}</p>
                    <div className="mt-1 flex flex-wrap gap-1">
                      {app.tags.slice(0, 3).map((tag) => (
                        <span
                          key={tag}
                          className="rounded-full bg-slate-900 px-2 py-[2px] text-[10px] text-slate-300"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                <button className="text-xs font-semibold text-sky-400">
                  GET
                </button>
              </div>
            ))}
          </div>
        </section>
      </section>
    </main>
  );
}

