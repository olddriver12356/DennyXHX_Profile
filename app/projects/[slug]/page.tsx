import Link from "next/link";
import Image from "next/image";
import { getProject } from "@/lib/projects";
import { notFound } from "next/navigation";

export default function ProjectDetailPage({ params }: { params: { slug: string } }) {
  const project = getProject(params.slug);
  if (!project) return notFound();

  return (
    <div className="space-y-8">
      <header className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <Link className="btn w-fit" href="/projects">
          ← All projects
        </Link>
        <div className="flex flex-wrap gap-2">
          {project.links?.github && (
            <Link className="btn" href={project.links.github} target="_blank" rel="noreferrer">
              GitHub
            </Link>
          )}
          {project.links?.live && (
            <Link className="btn btn-primary" href={project.links.live} target="_blank" rel="noreferrer">
              Live demo
            </Link>
          )}
        </div>
      </header>

      <section className="surface rounded-2xl p-7">
        <div className="flex flex-col gap-6 md:flex-row md:items-start">
          <div className="relative h-44 w-full overflow-hidden rounded-2xl border border-[color:var(--border)] bg-[color:color-mix(in_oklab,var(--surface-2)_65%,transparent)] md:h-52 md:w-72">
            <Image src={project.thumbnail} alt={project.title} fill className="object-cover" />
          </div>

          <div className="flex-1 min-w-0">
            <div className="text-xs text-[color:var(--muted)]">
              {project.year} {project.role ? `• ${project.role}` : ""}
            </div>
            <h1 className="mt-2 text-3xl font-semibold tracking-tight">{project.title}</h1>
            <p className="mt-3 text-[color:var(--muted)]">{project.tagline}</p>

            <div className="mt-4 flex flex-wrap gap-2">
              {project.stack.map((t) => (
                <span key={t} className="chip">
                  {t}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="surface rounded-2xl p-7">
        <h2 className="text-lg font-semibold tracking-tight">Overview</h2>
        <p className="mt-2 leading-relaxed text-[color:var(--muted)]">{project.overview}</p>
      </section>

      <div className="grid gap-6 md:grid-cols-2">
        <section className="surface rounded-2xl p-7">
          <h2 className="text-lg font-semibold tracking-tight">Problem</h2>
          <p className="mt-2 leading-relaxed text-[color:var(--muted)]">{project.problem}</p>
        </section>

        <section className="surface rounded-2xl p-7">
          <h2 className="text-lg font-semibold tracking-tight">Impact</h2>
          <ul className="mt-3 space-y-2 text-[color:var(--muted)]">
            {project.impact.map((x, i) => (
              <li key={i} className="flex gap-2">
                <span
                  className="mt-2 h-1.5 w-1.5 flex-none rounded-full"
                  style={{ background: "color-mix(in oklab, var(--fg) 45%, transparent)" }}
                />
                <span>{x}</span>
              </li>
            ))}
          </ul>
        </section>
      </div>

      <section className="surface rounded-2xl p-7">
        <h2 className="text-lg font-semibold tracking-tight">Solution</h2>
        <ul className="mt-3 space-y-2 text-[color:var(--muted)]">
          {project.solution.map((x, i) => (
            <li key={i} className="flex gap-2">
              <span
                className="mt-2 h-1.5 w-1.5 flex-none rounded-full"
                style={{ background: "color-mix(in oklab, var(--fg) 45%, transparent)" }}
              />
              <span>{x}</span>
            </li>
          ))}
        </ul>
      </section>

      {project.architecture?.length ? (
        <section className="surface rounded-2xl p-7">
          <h2 className="text-lg font-semibold tracking-tight">Architecture</h2>
          <ul className="mt-3 space-y-2 text-[color:var(--muted)]">
            {project.architecture.map((x, i) => (
              <li key={i} className="flex gap-2">
                <span
                  className="mt-2 h-1.5 w-1.5 flex-none rounded-full"
                  style={{ background: "color-mix(in oklab, var(--fg) 45%, transparent)" }}
                />
                <span>{x}</span>
              </li>
            ))}
          </ul>
        </section>
      ) : null}

      {project.challenges?.length ? (
        <section className="surface rounded-2xl p-7">
          <h2 className="text-lg font-semibold tracking-tight">Challenges</h2>
          <ul className="mt-3 space-y-2 text-[color:var(--muted)]">
            {project.challenges.map((x, i) => (
              <li key={i} className="flex gap-2">
                <span
                  className="mt-2 h-1.5 w-1.5 flex-none rounded-full"
                  style={{ background: "color-mix(in oklab, var(--fg) 45%, transparent)" }}
                />
                <span>{x}</span>
              </li>
            ))}
          </ul>
        </section>
      ) : null}

      {project.learnings?.length ? (
        <section className="surface rounded-2xl p-7">
          <h2 className="text-lg font-semibold tracking-tight">What I learned</h2>
          <ul className="mt-3 space-y-2 text-[color:var(--muted)]">
            {project.learnings.map((x, i) => (
              <li key={i} className="flex gap-2">
                <span
                  className="mt-2 h-1.5 w-1.5 flex-none rounded-full"
                  style={{ background: "color-mix(in oklab, var(--fg) 45%, transparent)" }}
                />
                <span>{x}</span>
              </li>
            ))}
          </ul>
        </section>
      ) : null}
    </div>
  );
}