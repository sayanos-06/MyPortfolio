"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

const THEME_KEY = "portfolio-theme";

function getInitialTheme(): "light" | "dark" {
  if (typeof window === "undefined") return "dark";
  const stored = window.localStorage.getItem(THEME_KEY);
  if (stored === "light" || stored === "dark") return stored;

  // follow system preference first time
  const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
  return prefersDark ? "dark" : "light";
}

export default function NavBar() {
  const [theme, setTheme] = useState<"light" | "dark">("dark");
  const [showResume, setShowResume] = useState(false);

  // sync with document + localStorage
  useEffect(() => {
    const initial = getInitialTheme();
    setTheme(initial);
  }, []);

  useEffect(() => {
    if (typeof document === "undefined") return;
    const root = document.documentElement;
    if (theme === "dark") {
      root.classList.add("dark");
    } else {
      root.classList.remove("dark");
    }
    window.localStorage.setItem(THEME_KEY, theme);
  }, [theme]);

  const toggleTheme = () =>
    setTheme((prev) => (prev === "dark" ? "light" : "dark"));

  return (
    <>
      <header className="sticky top-0 z-30 border-b border-white/10 bg-slate-950/70 text-xs text-slate-200 shadow-sm shadow-black/40 backdrop-blur dark:bg-slate-50/70 dark:text-slate-900">
        <div className="mx-auto flex max-w-5xl items-center justify-between px-4 py-3">
          <Link href="/" className="text-sm font-semibold tracking-wide">
            Sayantan Sen <span className="text-sky-400">Apps</span>
          </Link>

          <nav className="flex items-center gap-4">
            <button className="hover:underline">Today</button>
            <button className="hover:underline">My Apps</button>
            <button className="hover:underline">About</button>
            <button className="hover:underline">Contact</button>
            <button
              type="button"
              onClick={() => setShowResume(true)}
              className="rounded-full border border-white/15 bg-white/5 px-3 py-1 text-[11px] font-medium hover:bg-white/10 dark:border-slate-300/70 dark:bg-white/80 dark:text-slate-900 dark:hover:bg-white"
            >
              Resume
            </button>


            {/* Theme toggle */}
            <button
              type="button"
              onClick={toggleTheme}
              className="ml-2 flex items-center gap-1 rounded-full border border-white/15 bg-white/5 px-2 py-1 text-[10px] font-medium text-slate-100 hover:bg-white/10 dark:border-slate-300/70 dark:bg-white/80 dark:text-slate-900 dark:hover:bg-white"
            >
              <span aria-hidden="true">
                {theme === "dark" ? "🌙" : "☀️"}
              </span>
              <span>{theme === "dark" ? "Dark" : "Light"}</span>
            </button>
          </nav>
        </div>
      </header>
      {showResume && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm">
          <div className="max-w-sm rounded-3xl border border-white/10 bg-slate-950/95 p-5 text-xs text-slate-100 shadow-xl dark:bg-white dark:text-slate-900">
            <div className="mb-3 flex items-start justify-between gap-3">
              <div>
                <h2 className="text-sm font-semibold">
                  Resume – Sayantan Sen
                </h2>
                <p className="mt-1 text-[11px] text-slate-400 dark:text-slate-600">
                  Download or view my resume as a PDF.
                </p>
              </div>
              <button
                type="button"
                onClick={() => setShowResume(false)}
                className="rounded-full bg-white/10 px-2 py-1 text-[11px] hover:bg-white/20 dark:bg-slate-200/80 dark:hover:bg-slate-200"
              >
                ✕
              </button>
            </div>

            <div className="space-y-2">
              <a
                href="/resume.pdf"
                target="_blank"
                rel="noreferrer"
                className="block w-full rounded-2xl bg-sky-500 px-3 py-2 text-center text-[11px] font-semibold text-slate-950 hover:bg-sky-400"
              >
                View Resume
              </a>
              <a
                href="/resume.pdf"
                download
                className="block w-full rounded-2xl border border-white/20 bg-white/5 px-3 py-2 text-center text-[11px] font-medium text-slate-100 hover:bg-white/10 dark:border-slate-300/70 dark:bg-white/80 dark:text-slate-900 dark:hover:bg-white"
              >
                Download PDF
              </a>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
