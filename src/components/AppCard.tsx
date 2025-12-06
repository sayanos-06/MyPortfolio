"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { AppItem } from "@/data/apps";
import { useToast } from "@/components/ToastProvider";

type AppCardProps = {
  app: AppItem;
};

export default function AppCard({ app }: AppCardProps) {
const { showToast } = useToast();

  return (
    <motion.div
      layoutId={`card-${app.slug}`}
      whileHover={{ y: -4, scale: 1.01 }}
      whileTap={{ scale: 0.98 }}
      transition={{ duration: 0.15 }}
    >
      <Link
        href={`/apps/${app.slug}`} // make sure this uses slug, not linkGitHub
        className="flex items-center justify-between gap-4 rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm transition hover:border-sky-500/60 hover:bg-white/10"
      >
        <div className="flex items-center gap-3">
          {/* Temp icon – later replace with <Image> */}
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
        <div className="flex items-center gap-3">
          <motion.div
            layoutId={`icon-${app.slug}`}
            className="flex h-10 w-10 items-center justify-center rounded-2xl bg-slate-800 text-[11px] font-semibold"
          >
            {app.name.charAt(0)}
          </motion.div>
          {/* text ... */}
        </div>
        {/* For now this is just text, no click handler needed */}
        <button
          type="button"
          onClick={(e) => {
            e.preventDefault(); // stop navigation for GET button
            showToast(`Opening details for ${app.name}…`);
          }}
          className="text-xs font-semibold text-sky-400 hover:text-sky-300"
        >
          GET
        </button>
      </Link>
    </motion.div>
  );
}
