import Link from "next/link";
import Image from "next/image";
import { PROJECTS } from "@/lib/projects";
import ProjectVisual from "../../components/ProjectVisuals";

{PROJECTS.map((p) => (
  <Link key={p.slug} href={`/projects/${p.slug}`} className="group">
    <div className="transition hover:-translate-y-0.5">
      <ProjectVisual
        title={p.title}
        tagline={p.tagline}
        thumbnail={p.thumbnail}
        icon={p.visual?.icon ?? "code"}
        gradientFrom={p.visual?.gradientFrom}
        gradientTo={p.visual?.gradientTo}
        kpis={p.visual?.kpis ?? []}
        compact
      />

      {/* Minimal “below the fold” info */}
      <div className="mt-4 rounded-2xl border border-[color:var(--border)] bg-[color:color-mix(in_oklab,var(--surface)_58%,transparent)] p-5 backdrop-blur">
        <div className="flex flex-wrap gap-2">
          {p.stack.slice(0, 5).map((t) => (
            <span key={t} className="chip">{t}</span>
          ))}
        </div>
        <div className="mt-4 inline-flex items-center gap-2 text-sm text-[color:var(--muted)] group-hover:text-[color:var(--fg)]">
          View details <span aria-hidden="true">→</span>
        </div>
      </div>
    </div>
  </Link>
))}

export default function ProjectsPage() {
  return (
    <div className="space-y-10">
      <header className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <h1 className="text-3xl font-semibold tracking-tight">Projects</h1>
          <p className="mt-2 text-sm text-[color:var(--muted)]">
            Click into any project for a full breakdown: problem, solution, impact, and
            architecture.
          </p>
        </div>
        <Link className="btn w-fit" href="/">
          ← Home
        </Link>
      </header>

      <div className="grid gap-6 md:grid-cols-2">
        {PROJECTS.map((p) => (
          <Link
            key={p.slug}
            href={`/projects/${p.slug}`}
            className="group relative overflow-hidden rounded-2xl border border-[color:var(--border)] bg-[color:color-mix(in_oklab,var(--surface)_58%,transparent)] p-5 backdrop-blur transition hover:-translate-y-0.5 hover:border-[color:color-mix(in_oklab,var(--accent)_38%,var(--border))]"
          >
            <div className="pointer-events-none absolute -inset-28 opacity-0 transition group-hover:opacity-100">
              <div className="h-full w-full bg-[radial-gradient(circle_at_20%_20%,color-mix(in_oklab,var(--accent)_16%,transparent),transparent_55%),radial-gradient(circle_at_80%_70%,color-mix(in_oklab,var(--accent-2)_14%,transparent),transparent_55%)]" />
            </div>

            <div className="relative flex gap-4">
              <div className="relative h-20 w-28 flex-none overflow-hidden rounded-xl border border-[color:var(--border)] bg-[color:color-mix(in_oklab,var(--surface-2)_65%,transparent)]">
              <Image
                src={p.thumbnail}
                alt={p.title}
                fill
                className="object-cover saturate-110 contrast-105 transition duration-300 group-hover:scale-[1.03]"
                />
              </div>
              <div className="min-w-0">
                <div className="flex items-center gap-2 text-xs text-[color:var(--muted)]">
                  {p.year && <span>{p.year}</span>}
                  {p.role && <span>• {p.role}</span>}
                </div>
                <div className="mt-1 text-base font-semibold tracking-tight">{p.title}</div>
                <div className="mt-1 line-clamp-2 text-sm text-[color:var(--muted)]">
                  {p.tagline}
                </div>

                <div className="mt-3 flex flex-wrap gap-2">
                  {(p.metrics ?? []).slice(0, 3).map((m) => (
                    <span key={m} className="chip">
                      {m}
                    </span>
                  ))}
                </div>

                <div className="mt-4 inline-flex items-center gap-2 text-sm text-[color:var(--muted)] group-hover:text-[color:var(--fg)]">
                  View details <span aria-hidden="true">→</span>
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}

{PROJECTS.map((p) => (
    <Link key={p.slug} href={`/projects/${p.slug}`} className="group">
      <div className="transition hover:-translate-y-0.5">
        <ProjectVisual
          title={p.title}
          tagline={p.tagline}
          thumbnail={p.thumbnail}
          icon={p.visual?.icon ?? "code"}
          gradientFrom={p.visual?.gradientFrom}
          gradientTo={p.visual?.gradientTo}
          kpis={p.visual?.kpis ?? []}
          compact
        />
  
        {/* Minimal “below the fold” info */}
        <div className="mt-4 rounded-2xl border border-[color:var(--border)] bg-[color:color-mix(in_oklab,var(--surface)_58%,transparent)] p-5 backdrop-blur">
          <div className="flex flex-wrap gap-2">
            {p.stack.slice(0, 5).map((t) => (
              <span key={t} className="chip">{t}</span>
            ))}
          </div>
          <div className="mt-4 inline-flex items-center gap-2 text-sm text-[color:var(--muted)] group-hover:text-[color:var(--fg)]">
            View details <span aria-hidden="true">→</span>
          </div>
        </div>
      </div>
    </Link>
  ))}