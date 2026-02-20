import Link from "next/link";
import { getProject } from "@/lib/projects";
import { notFound } from "next/navigation";
import ProjectVisual from "../../../components/ProjectVisuals";

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
            <Link className="btn" href={project.links.github} target="_blank" rel="noreferrer">
              GitHub
            </Link>
          )}
          {project.links?.live && project.links.live.trim() !== "" && (
            <Link className="btn btn-primary" href={project.links.live} target="_blank" rel="noreferrer">
              Live
            </Link>
          )}
        </div>
      </header>

      {/* Visual hero */}
      <section className="space-y-4">
        <ProjectVisual
          title={project.title}
          tagline={project.tagline}
          thumbnail={project.thumbnail}
          icon={project.visual?.icon ?? "code"}
          gradientFrom={project.visual?.gradientFrom}
          gradientTo={project.visual?.gradientTo}
          kpis={project.visual?.kpis ?? []}
        />

        {/* Stack chips */}
        <div className="surface rounded-[var(--radius-xl)] p-6">
          <div className="flex flex-wrap gap-2">
            {(project.stack ?? []).map((t) => (
              <span key={t} className="chip">
                {t}
              </span>
            ))}
          </div>

          <div className="mt-3 text-xs text-[color:var(--muted)]">
            {project.year ? project.year : ""} {project.role ? `• ${project.role}` : ""}
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