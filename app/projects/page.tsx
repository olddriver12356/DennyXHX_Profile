import Link from "next/link";
import Image from "next/image";
import { PROJECTS } from "@/lib/projects";

export default function ProjectsPage() {
  return (
    <main className="min-h-screen text-white">
      <div className="mx-auto max-w-5xl px-6 py-14">
        <div className="flex items-end justify-between gap-4">
          <div>
            <h1 className="text-3xl font-semibold">Projects</h1>
            <p className="mt-2 text-white/70">
              Click into any project for a full breakdown: problem, solution, impact, and architecture.
            </p>
          </div>
          <Link className="text-sm text-white/70 hover:text-white" href="/">
            ← Home
          </Link>
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-2">
          {PROJECTS.map((p) => (
            <Link
              key={p.slug}
              href={`/projects/${p.slug}`}
              className="group rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur transition hover:border-white/20"
            >
              <div className="flex gap-4">
                <div className="relative h-20 w-28 overflow-hidden rounded-xl border border-white/10 bg-black/30">
                  <Image src={p.thumbnail} alt={p.title} fill className="object-cover" />
                </div>
                <div className="min-w-0">
                  <div className="flex items-center gap-2 text-xs text-white/60">
                    {p.year && <span>{p.year}</span>}
                    {p.role && <span>• {p.role}</span>}
                  </div>
                  <div className="mt-1 text-base font-semibold">{p.title}</div>
                  <div className="mt-1 line-clamp-2 text-sm text-white/70">{p.tagline}</div>

                  <div className="mt-3 flex flex-wrap gap-2">
                    {(p.metrics ?? []).slice(0, 3).map((m) => (
                      <span key={m} className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/80">
                        {m}
                      </span>
                    ))}
                  </div>

                  <div className="mt-3 text-sm text-white/70 group-hover:text-white">
                    View details →
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </main>
  );
}