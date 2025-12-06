"use client";

type AppFiltersProps = {
  search: string;
  onSearchChange: (value: string) => void;
  activeTag: string | null;
  onTagChange: (tag: string | null) => void;
  allTags: string[];
  hasFilters: boolean;
  onClearFilters: () => void;
};

export default function AppFilters({
  search,
  onSearchChange,
  activeTag,
  onTagChange,
  allTags,
  hasFilters,
  onClearFilters,
}: AppFiltersProps) {
  return (
    <div className="space-y-3">
      {/* Search bar – Apple / App Store style */}
      <div className="flex items-center gap-2">
        <div className="flex flex-1 items-center gap-2 rounded-2xl border border-white/10 bg-white/5 px-3 py-1.5 text-xs text-slate-200 shadow-sm shadow-black/40 backdrop-blur-md">
          {/* Magnifying glass icon (simple SVG) */}
          <svg
            aria-hidden="true"
            className="h-4 w-4 text-slate-500" 
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            >
            <path
                fill="currentColor"
                fillRule="evenodd"
                d="M11 4a7 7 0 1 0 4.546 12.32l3.566 3.567a1 1 0 0 0 1.414-1.414l-3.567-3.566A7 7 0 0 0 11 4Zm-5.5 7a5.5 5.5 0 1 1 11 0a5.5 5.5 0 0 1-11 0Z"
                clipRule="evenodd" 
            />
            </svg>

          <input
            type="text"
            placeholder="Search apps e.g. SOS, maps, tracker..."
            value={search}
            onChange={(e) => onSearchChange(e.target.value)}
            className="flex-1 bg-transparent text-xs text-slate-50 placeholder:text-slate-500 focus:outline-none"
          />
        </div>

        {hasFilters && (
          <button
            type="button"
            onClick={onClearFilters}
            className="rounded-2xl border border-white/10 bg-white/5 px-3 py-2 text-[11px] font-medium text-slate-200 hover:bg-white/10"
          >
            Clear
          </button>
        )}
      </div>

      {/* Tag chips */}
      <div className="flex flex-wrap gap-1.5">
        <TagChip
          label="All"
          isActive={activeTag === null}
          onClick={() => onTagChange(null)}
        />
        {allTags.map((tag) => (
          <TagChip
            key={tag}
            label={tag}
            isActive={activeTag === tag}
            onClick={() =>
              onTagChange(activeTag === tag ? null : tag)
            }
          />
        ))}
      </div>
    </div>
  );
}

/**
 * Small helper chip component
 */
function TagChip({
  label,
  isActive,
  onClick,
}: {
  label: string;
  isActive: boolean;
  onClick: () => void;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={[
        "rounded-full border px-3 py-[5px] text-[11px] transition",
        isActive
          ? "border-sky-400/80 bg-sky-500/20 text-sky-100"
          : "border-white/10 bg-white/5 text-slate-300 hover:border-sky-400/60 hover:bg-white/10",
      ].join(" ")}
    >
      {label}
    </button>
  );
}
