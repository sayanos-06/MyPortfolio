"use client";

import { useMemo, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import FeaturedApp from "@/components/FeaturedApp";
import AppCard from "@/components/AppCard";
import AppFilters from "@/components/AppFilters";
import { APPS } from "@/data/apps";
import { useSearch } from "@/components/SearchContext";     // ✅

export default function HomeContent() {
  const { search, setSearch } = useSearch();                // ✅ use shared search
  const [activeTag, setActiveTag] = useState<string | null>(null);

  const allTags = useMemo(
    () => Array.from(new Set(APPS.flatMap((app) => app.tags))),
    []
  );

  const featuredApp = APPS.find((app) => app.isFeatured) ?? APPS[0];

  const filteredApps = useMemo(() => {
    const query = search.trim().toLowerCase();

    return APPS.filter((app) => {
      if (activeTag && !app.tags.includes(activeTag)) return false;
      if (!query) return true;

      const inName = app.name.toLowerCase().includes(query);
      const inSubtitle = app.subtitle.toLowerCase().includes(query);
      const inTags = app.tags.some((tag) =>
        tag.toLowerCase().includes(query)
      );

      return inName || inSubtitle || inTags;
    });
  }, [search, activeTag]);

  const hasFilters = Boolean(search.trim() || activeTag);

  return (
    <main className="min-h-screen text-slate-100">
      <section className="mx-auto max-w-5xl px-4 py-8 space-y-6">
        <FeaturedApp app={featuredApp} />

        {/* 🔵 Tag filters only (search moved to sidebar) */}
        <div className="rounded-2xl border border-white/10 bg-slate-900/40 px-3 py-3 shadow-sm shadow-black/40 backdrop-blur-md">
          <AppFilters
            search={search}
            onSearchChange={setSearch} // can be ignored inside AppFilters if you remove its search UI
            activeTag={activeTag}
            onTagChange={setActiveTag}
            allTags={allTags}
            hasFilters={hasFilters}
            onClearFilters={() => {
              setSearch("");
              setActiveTag(null);
            }}
          />
        </div>

        {/* rest unchanged */}
        <div className="flex items-baseline justify-between">
          <h3 className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-400">
            My Apps
          </h3>
          {filteredApps.length > 0 && (
            <p className="text-[11px] text-slate-500">
              Showing {filteredApps.length} of {APPS.length}
            </p>
          )}
        </div>

        <div className="space-y-3">
          <AnimatePresence mode="popLayout">
            {filteredApps.map((app) => (
              <motion.div
                key={app.slug}
                layout
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ duration: 0.18 }}
              >
                <AppCard app={app} />
              </motion.div>
            ))}

            {filteredApps.length === 0 && (
              <motion.div
                key="empty"
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                className="rounded-2xl border border-dashed border-slate-700/80 bg-slate-900/60 px-4 py-8 text-center text-sm text-slate-400"
              >
                <p>No apps match your filters.</p>
                <p className="mt-1 text-xs">
                  Try clearing the search or choosing a different tag.
                </p>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </section>
    </main>
  );
}
