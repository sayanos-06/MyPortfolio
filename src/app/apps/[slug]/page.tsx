"use client";

import { useParams } from "next/navigation";
import { APPS } from "@/data/apps";
import ScreenCarousel from "@/components/ScreenCarousel";

export default function AppPage() {
  // useParams reads the slug from the URL on the client
  const params = useParams<{ slug: string }>();
  const slug = params.slug;

  const app = APPS.find((item) => item.slug === slug);

  if (!app) {
    return (
      <main className="min-h-screen bg-slate-950 text-slate-100">
        <section className="mx-auto max-w-3xl px-4 py-10 space-y-4">
          <h1 className="text-2xl font-semibold">App detail page</h1>
          <p className="text-sm text-slate-300">
            No app found for slug:{" "}
            <span className="font-mono text-sky-400">
              {slug ?? "(no slug)"}
            </span>
          </p>
        </section>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-slate-950 text-slate-100">
      <section className="mx-auto max-w-5xl px-4 py-10 space-y-8">
        {/* Header */}
        <header className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex items-center gap-4">
            <div className="flex h-14 w-14 items-center justify-center rounded-3xl bg-slate-800 text-lg font-semibold">
              {app.name.charAt(0)}
            </div>
            <div>
              <h1 className="text-2xl font-semibold">{app.name}</h1>
              <p className="text-sm text-slate-400">{app.subtitle}</p>
              {app.stats && (
                <div className="mt-2 flex flex-wrap gap-4 text-xs text-slate-300">
                  {app.stats.rating && (
                    <span>★ {app.stats.rating.toFixed(1)} rating</span>
                  )}
                  {app.stats.downloads && <span>{app.stats.downloads} installs</span>}
                </div>
              )}
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-3">
            {app.linkPlayStore || app.linkApk || app.linkGitHub ? (
              <a
                href={app.linkPlayStore || app.linkApk || app.linkGitHub}
                target="_blank"
                rel="noreferrer"
                className="rounded-full bg-sky-500 px-4 py-1.5 text-xs font-semibold text-slate-950"
              >
                GET
              </a>
            ) : (
              <button
                className="rounded-full bg-slate-700 px-4 py-1.5 text-xs font-semibold text-slate-200"
                type="button"
                disabled
              >
                Coming Soon
              </button>
            )}
          </div>
        </header>

        {/* Main content */}
        <section className="grid gap-8 md:grid-cols-[minmax(0,2.1fr)_minmax(0,1.6fr)]">
          <div className="space-y-6">
            {/* About */}
            <div>
              <h2 className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-400">
                About this app
              </h2>
              <p className="mt-2 text-sm leading-relaxed text-slate-200">
                {app.description}
              </p>
            </div>

            {/* What's New / Highlights */}
            {app.whatsNew && (
              <div>
                <h2 className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-400">
                  What's New
                </h2>
                <p className="mt-2 text-sm text-slate-200">{app.whatsNew}</p>
              </div>
            )}

            {/* Challenges / Learnings */}
            {app.challenges && app.challenges.length > 0 && (
              <div>
                <h2 className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-400">
                  Challenges & Learnings
                </h2>
                <ul className="mt-2 list-disc space-y-1 pl-5 text-sm text-slate-200">
                  {app.challenges.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
            )}

            {/* Tech stack */}
            <div>
              <h2 className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-400">
                Tech Stack
              </h2>
              <ul className="mt-2 flex flex-wrap gap-2 text-xs text-slate-200">
                {app.techStack.map((tech) => (
                  <li key={tech} className="rounded-full bg-slate-900 px-3 py-1">
                    {tech}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Right column – screenshots placeholder */}
            <aside className="space-y-6">
            {/* Screenshots placeholder (Swiper later) */}
            <div className="rounded-3xl border border-white/10 bg-white/5 p-3">
              <p className="mb-2 text-xs font-semibold uppercase tracking-[0.18em] text-slate-400">
                Screenshots
              </p>
              <ScreenCarousel
                screenshots={app.screenshots}
                appName={app.name}
              />
            </div>

            {/* Ratings & Reviews */}
            {app.reviews && app.reviews.length > 0 && (
              <div className="rounded-3xl border border-white/10 bg-white/5 p-3">
                <p className="mb-2 text-xs font-semibold uppercase tracking-[0.18em] text-slate-400">
                  Ratings & Reviews
                </p>
                <ul className="space-y-2 text-xs text-slate-200">
                  {app.reviews.map((review) => (
                    <li
                      key={review}
                      className="rounded-2xl bg-slate-900/70 p-2 leading-relaxed"
                    >
                      {review}
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </aside>
        </section>
      </section>
    </main>
  );
}
