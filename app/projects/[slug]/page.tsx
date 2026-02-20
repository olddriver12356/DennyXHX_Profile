import Link from "next/link";
import Image from "next/image";
import { getProject } from "@/lib/projects";
import { notFound } from "next/navigation";

export default async function ProjectDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  const project = getProject(slug);
  if (!project) return notFound();

  return (
    <main className="space-y-10">
      <header className="flex items-center justify-between">
        <Link className="btn" href="/projects">
          ← Back
        </Link>
        <div className="flex gap-2">
          {project.links?.github && (
            <Link className="btn" href={project.links.github} target="_blank">
              GitHub
            </Link>
          )}
          {project.links?.live && project.links.live.trim() !== "" && (
            <Link className="btn btn-primary" href={project.links.live} target="_blank">
              Live
            </Link>
          )}
        </div>
      </header>

      <section className="surface rounded-[var(--radius-xl)] p-6">
        <div className="flex flex-col gap-6 md:flex-row md:items-start">
          <div className="relative h-40 w-full overflow-hidden rounded-2xl border border-[color:var(--border)] bg-[color:color-mix(in_oklab,var(--surface-2)_65%,transparent)] md:h-44 md:w-64">
            <Image src={project.thumbnail} alt={project.title} fill className="object-cover" />
          </div>

          <div className="min-w-0">
            <div className="text-xs text-[color:var(--muted)]">
              {project.year} {project.role ? `• ${project.role}` : ""}
            </div>
            <h1 className="mt-2 text-3xl font-semibold tracking-tight">{project.title}</h1>
            <p className="mt-3 text-sm text-[color:var(--muted)]">{project.tagline}</p>

            <div className="mt-4 flex flex-wrap gap-2">
              {(project.stack ?? []).map((t) => (
                <span key={t} className="chip">{t}</span>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="grid gap-6 md:grid-cols-2">
        <div className="surface rounded-[var(--radius-xl)] p-6">
          <h2 className="text-lg font-semibold">Overview</h2>
          <p className="mt-2 text-sm text-[color:var(--muted)]">{project.overview}</p>
        </div>

        <div className="surface rounded-[var(--radius-xl)] p-6">
          <h2 className="text-lg font-semibold">Problem</h2>
          <p className="mt-2 text-sm text-[color:var(--muted)]">{project.problem}</p>
        </div>

        <div className="surface rounded-[var(--radius-xl)] p-6">
          <h2 className="text-lg font-semibold">Solution</h2>
          <ul className="mt-3 space-y-2 text-sm text-[color:var(--muted)]">
            {project.solution.map((s) => (
              <li key={s} className="flex gap-2">
                <span className="mt-1 inline-block h-1.5 w-1.5 rounded-full bg-[color:var(--accent)]" />
                <span>{s}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="surface rounded-[var(--radius-xl)] p-6">
          <h2 className="text-lg font-semibold">Impact</h2>
          <ul className="mt-3 space-y-2 text-sm text-[color:var(--muted)]">
            {project.impact.map((i) => (
              <li key={i} className="flex gap-2">
                <span className="mt-1 inline-block h-1.5 w-1.5 rounded-full bg-[color:var(--accent-2)]" />
                <span>{i}</span>
              </li>
            ))}
          </ul>
        </div>

        {project.architecture?.length ? (
          <div className="surface rounded-[var(--radius-xl)] p-6 md:col-span-2">
            <h2 className="text-lg font-semibold">Architecture</h2>
            <ul className="mt-3 space-y-2 text-sm text-[color:var(--muted)]">
              {project.architecture.map((a) => (
                <li key={a} className="flex gap-2">
                  <span className="mt-1 inline-block h-1.5 w-1.5 rounded-full bg-[color:var(--accent-3)]" />
                  <span>{a}</span>
                </li>
              ))}
            </ul>
          </div>
        ) : null}
      </section>
    </main>
  );
}