import Link from "next/link";
import { PROJECTS } from "@/lib/projects";
import ProjectVisual from "@/components/ProjectVisuals";

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

              <div className="mt-4 rounded-2xl border border-[color:var(--border)] bg-[color:color-mix(in_oklab,var(--surface)_58%,transparent)] p-5 backdrop-blur">
                <div className="flex flex-wrap gap-2">
                  {p.stack.slice(0, 5).map((t) => (
                    <span key={t} className="chip">
                      {t}
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