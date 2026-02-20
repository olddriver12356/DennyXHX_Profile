import Link from "next/link";
import Image from "next/image";
import { getProject } from "@/lib/projects";
import { notFound } from "next/navigation";

export default function ProjectDetailPage({ params }: { params: { slug: string } }) {
  const project = getProject(params.slug);
  if (!project) return notFound();

  return (
    <main className="min-h-screen">
      <div className="container py-14">
        <div className="flex items-center justify-between gap-4">
          <Link className="btn" href="/projects">
            ← All projects
          </Link>

          <div className="flex gap-2">
            {project.links?.github && (
              <Link className="btn" href={project.links.github} target="_blank" rel="noreferrer">
                GitHub
              </Link>
            )}
            {project.links?.live && (
              <Link className="btn" href={project.links.live} target="_blank" rel="noreferrer">
                Live
              </Link>
            )}
          </div>
        </div>

        <div className="mt-8 grid gap-6 md:grid-cols-[320px_1fr]">
          <div className="surface rounded-[var(--radius-xl)] p-4">
            <div className="relative aspect-[4/3] overflow-hidden rounded-xl border border-white/10 bg-black/20">
              <Image src={project.thumbnail} alt={project.title} fill className="object-cover" />
            </div>

            <div className="mt-4">
              <div className="text-xs text-muted">
                {project.year ? project.year : ""}{project.role ? ` • ${project.role}` : ""}
              </div>
              <div className="mt-1 text-lg font-semibold">{project.title}</div>
              <div className="mt-2 text-sm text-muted">{project.tagline}</div>

              <div className="mt-4 flex flex-wrap gap-2">
                {project.stack.map((t) => (
                  <span key={t} className="chip">
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <section className="surface rounded-[var(--radius-xl)] p-6">
              <h2 className="text-lg font-semibold">Overview</h2>
              <p className="mt-2 text-muted">{project.overview}</p>
            </section>

            <div className="grid gap-6 md:grid-cols-2">
              <section className="surface-soft rounded-[var(--radius-xl)] p-6">
                <h2 className="text-lg font-semibold">Problem</h2>
                <p className="mt-2 text-muted">{project.problem}</p>
              </section>

              <section className="surface-soft rounded-[var(--radius-xl)] p-6">
                <h2 className="text-lg font-semibold">Impact</h2>
                <ul className="mt-3 space-y-2 text-muted">
                  {project.impact.map((x, i) => (
                    <li key={i} className="flex gap-2">
                      <span className="mt-2 h-1.5 w-1.5 rounded-full bg-white/40" />
                      <span>{x}</span>
                    </li>
                  ))}
                </ul>
              </section>
            </div>

            <section className="surface rounded-[var(--radius-xl)] p-6">
              <h2 className="text-lg font-semibold">Solution</h2>
              <ul className="mt-3 space-y-2 text-muted">
                {project.solution.map((x, i) => (
                  <li key={i} className="flex gap-2">
                    <span className="mt-2 h-1.5 w-1.5 rounded-full bg-white/40" />
                    <span>{x}</span>
                  </li>
                ))}
              </ul>
            </section>

            {project.architecture?.length ? (
              <section className="surface-soft rounded-[var(--radius-xl)] p-6">
                <h2 className="text-lg font-semibold">Architecture</h2>
                <ul className="mt-3 space-y-2 text-muted">
                  {project.architecture.map((x, i) => (
                    <li key={i} className="flex gap-2">
                      <span className="mt-2 h-1.5 w-1.5 rounded-full bg-white/40" />
                      <span>{x}</span>
                    </li>
                  ))}
                </ul>
              </section>
            ) : null}
          </div>
        </div>
      </div>
    </main>
  );
}