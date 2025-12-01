import FeaturedApp from "@/components/FeaturedApp";
import AppCard from "@/components/AppCard";
import { APPS } from "@/data/apps";

const featuredApp = APPS.find((app) => app.isFeatured) ?? APPS[0];

export default function Home() {
  const featuredApp = APPS.find((app) => app.isFeatured) ?? APPS[0];

  return (
    <main className="min-h-screen bg-slate-950 text-slate-100">
      <section className="mx-auto max-w-5xl px-4 py-8">
        {/* Today / Featured */}
        <FeaturedApp app={featuredApp} />

        {/* My Apps */}
        <section>
          <h3 className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-slate-400">
            My Apps
          </h3>

          <div className="space-y-3">
            {APPS.map((app) => (
              <AppCard key={app.slug} app={app} />
            ))}
          </div>
        </section>
      </section>
    </main>
  );
}
