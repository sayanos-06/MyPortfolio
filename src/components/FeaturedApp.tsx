"use client";

import { motion } from "framer-motion";
import { AppItem } from "@/data/apps";

type FeaturedAppProps = {
  app: AppItem;
};

export default function FeaturedApp({ app }: FeaturedAppProps) {
  return (
    <motion.section
      className="mb-8 overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-6 sm:p-8"
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.35 }}
    >
      <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-300">
        Today
      </p>
      <p className="mt-1 text-[11px] uppercase tracking-[0.25em] text-sky-400">
        FEATURED APP
      </p>

      <h1 className="mt-4 text-2xl font-semibold sm:text-3xl">
        {app.name}
      </h1>

      <p className="mt-2 max-w-xl text-sm text-slate-300">
        {app.subtitle}
      </p>

      <div className="mt-4 flex flex-wrap items-center gap-3">
        <button
          className="rounded-full bg-sky-500 px-4 py-1.5 text-xs font-semibold text-slate-950"
          type="button"
        >
          GET
        </button>
        {app.tags && app.tags.length > 0 && (
          <span className="text-[11px] uppercase tracking-[0.2em] text-slate-400">
            {app.tags.join(" • ")}
          </span>
        )}
      </div>
    </motion.section>
  );
}
