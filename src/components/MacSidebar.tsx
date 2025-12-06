"use client";

import { useEffect, useState } from "react";
import { useSearch } from "@/components/SearchContext";

const THEME_KEY = "portfolio-theme";

function getInitialTheme(): "light" | "dark" {
  if (typeof window === "undefined") return "dark";
  const stored = window.localStorage.getItem(THEME_KEY);
  if (stored === "light" || stored === "dark") return stored;

  const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
  return prefersDark ? "dark" : "light";
}

export default function MacSidebar() {
  const [theme, setTheme] = useState<"light" | "dark">("dark");
  const [showResume, setShowResume] = useState(false);
  const [mounted, setMounted] = useState(false);
  const { search, setSearch } = useSearch();


  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    const initial = getInitialTheme();
    setTheme(initial);
  }, []);

  useEffect(() => {
    if (!mounted) return;
    const root = document.documentElement;
    if (theme === "dark") root.classList.add("dark");
    else root.classList.remove("dark");
    window.localStorage.setItem(THEME_KEY, theme);
  }, [theme, mounted]);

  if (!mounted) return null;

  const toggleTheme = () =>
    setTheme((prev) => (prev === "dark" ? "light" : "dark"));

    return (
        <>
            <div className="flex h-full flex-col gap-4">
                <div className="flex items-center gap-2">
                    <span className="h-3 w-3 rounded-full bg-red-500/90" />
                    <span className="h-3 w-3 rounded-full bg-yellow-400/90" />
                    <span className="h-3 w-3 rounded-full bg-green-500/90" />
                </div>

                {/* Top search */}
                <div className="rounded-2xl border border-white/15 bg-slate-900/30 px-3 py-2 text-[11px] text-slate-300">
                    <div className="flex items-center gap-2">
                        {/* tiny search icon */}
                        <svg
                        aria-hidden="true"
                        className="h-3.5 w-3.5 text-slate-500"
                        viewBox="0 0 24 24"
                        fill="none">
                            <path
                                d="M11 4a7 7 0 1 0 4.546 12.32l3.566 3.567a1 1 0 0 0 1.414-1.414l-3.567-3.566A7 7 0 0 0 11 4Zm-5.5 7a5.5 5.5 0 1 1 11 0a5.5 5.5 0 0 1-11 0Z"
                                fill="currentColor"
                            />
                        </svg>

                        <input
                        type="text"
                        value={search}
                        onChange={(e) => setSearch(e.target.value)}
                        placeholder="Search apps..."
                        className="flex-1 bg-transparent text-[11px] text-slate-100 placeholder:text-slate-500 outline-none"
                        />
                    </div>
                </div>

                {/* Main nav items – more like macOS */}
                <nav className="space-y-1 text-[11px]">
                {["Today", "My Apps", "About", "Contact"].map((label, idx) => {
                    const active = idx === 0; // Today active for now
                    return (
                    <button
                        key={label}
                        type="button"
                        className={[
                        "flex w-full items-center gap-2.5 rounded-lg px-2.5 py-1.5 text-left transition",
                        active
                            ? "bg-slate-900/80 text-slate-50"          // dark pill like Apple
                            : "text-slate-200/85 hover:bg-white/5",     // subtle hover
                        ].join(" ")}>
                        {/* dot placeholder – could be an icon later */}
                        <span className="h-1.5 w-1.5 rounded-full bg-slate-400" />
                        <span>{label}</span>
                    </button>
                    );
                })}
                </nav>

                {/* Bottom area: theme toggle + resume + user */}
                <div className="mt-auto space-y-3">
                {/* Theme + Resume row */}
                <div className="flex items-center gap-2">
                    <button
                    type="button"
                    onClick={toggleTheme}
                    className="flex flex-1 items-center justify-center gap-1 rounded-full border border-white/20 bg-white/10 px-2 py-1 text-[10px] font-medium text-slate-100 hover:bg-white/20"
                    >
                    <span aria-hidden="true">
                        {theme === "dark" ? "🌙" : "☀️"}
                    </span>
                    <span>{theme === "dark" ? "Dark" : "Light"}</span>
                    </button>

                    <button
                    type="button"
                    onClick={() => setShowResume(true)}
                    className="flex-1 rounded-full border border-white/20 bg-white/10 px-2 py-1 text-[10px] font-medium text-slate-100 hover:bg-white/20"
                    >
                    Resume
                    </button>
                </div>

                {/* User card */}
                <div className="flex items-center gap-2 rounded-2xl bg-white/10 px-3 py-2">
                    <div className="flex h-6 w-6 items-center justify-center rounded-full bg-slate-700 text-[10px]">
                    SS
                    </div>
                    <div className="text-[11px]">
                    <p className="font-medium text-slate-100">Sayantan Sen</p>
                    <p className="text-slate-400">Developer</p>
                    </div>
                </div>
                </div>
            </div>

        {/* Resume modal (same as in NavBar) */}
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
