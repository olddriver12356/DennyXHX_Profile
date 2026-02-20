import Link from "next/link";
import Image from "next/image";
import { getProject } from "../../../lib/projects";
import { notFound } from "next/navigation";

export default function ProjectDetailPage({ params }: { params: { slug: string } }) {
  const project = getProject(params.slug);
  if (!project) return notFound();

  return (
    <main className="min-h-screen text-white">
      <div className="mx-auto max-w-4xl px-6 py-14">
        <div className="flex items-center justify-between gap-4">
          <Link className="text-sm text-white/70 hover:text-white" href="/projects">
            ← All projects
          </Link>
          <div className="flex gap-2">
            {project.links?.github && (
              <Link
                className="rounded-xl border border-white/10 bg-white/5 px-4 py-2 text-sm hover:bg-white/10"
                href={project.links.github}
                target="_blank"
                rel="noreferrer"
              >
                GitHub
              </Link>
            )}
            {project.links?.live && (
              <Link
                className="rounded-xl border border-white/10 bg-white/5 px-4 py-2 text-sm hover:bg-white/10"
                href={project.links.live}
                target="_blank"
                rel="noreferrer"
              >
                Live
              </Link>
            )}
          </div>
        </div>

        <div className="mt-8 flex flex-col gap-6 md:flex-row md:items-start">
          <div className="relative h-44 w-full overflow-hidden rounded-2xl border border-white/10 bg-black/30 md:h-52 md:w-72">
            <Image src={project.thumbnail} alt={project.title} fill className="object-cover" />
          </div>

          <div className="flex-1">
            <div className="text-xs text-white/60">
              {project.year} {project.role ? `• ${project.role}` : ""}
            </div>
            <h1 className="mt-2 text-3xl font-semibold">{project.title}</h1>
            <p className="mt-3 text-white/70">{project.tagline}</p>

            <div className="mt-4 flex flex-wrap gap-2">
              {project.stack.map((t) => (
                <span key={t} className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/80">
                  {t}
                </span>
              ))}
            </div>
          </div>
        </div>

        <section className="mt-10 rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur">
          <h2 className="text-lg font-semibold">Overview</h2>
          <p className="mt-2 text-white/70">{project.overview}</p>
        </section>

        <div className="mt-6 grid gap-6 md:grid-cols-2">
          <section className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur">
            <h2 className="text-lg font-semibold">Problem</h2>
            <p className="mt-2 text-white/70">{project.problem}</p>
          </section>

          <section className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur">
            <h2 className="text-lg font-semibold">Impact</h2>
            <ul className="mt-3 space-y-2 text-white/70">
              {project.impact.map((x, i) => (
                <li key={i} className="flex gap-2">
                  <span className="mt-2 h-1.5 w-1.5 rounded-full bg-white/40" />
                  <span>{x}</span>
                </li>
              ))}
            </ul>
          </section>
        </div>

        <section className="mt-6 rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur">
          <h2 className="text-lg font-semibold">Solution</h2>
          <ul className="mt-3 space-y-2 text-white/70">
            {project.solution.map((x, i) => (
              <li key={i} className="flex gap-2">
                <span className="mt-2 h-1.5 w-1.5 rounded-full bg-white/40" />
                <span>{x}</span>
              </li>
            ))}
          </ul>
        </section>

        {project.architecture?.length ? (
          <section className="mt-6 rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur">
            <h2 className="text-lg font-semibold">Architecture</h2>
            <ul className="mt-3 space-y-2 text-white/70">
              {project.architecture.map((x, i) => (
                <li key={i} className="flex gap-2">
                  <span className="mt-2 h-1.5 w-1.5 rounded-full bg-white/40" />
                  <span>{x}</span>
                </li>
              ))}
            </ul>
          </section>
        ) : null}

        {project.challenges?.length ? (
          <section className="mt-6 rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur">
            <h2 className="text-lg font-semibold">Challenges</h2>
            <ul className="mt-3 space-y-2 text-white/70">
              {project.challenges.map((x, i) => (
                <li key={i} className="flex gap-2">
                  <span className="mt-2 h-1.5 w-1.5 rounded-full bg-white/40" />
                  <span>{x}</span>
                </li>
              ))}
            </ul>
          </section>
        ) : null}

        {project.learnings?.length ? (
          <section className="mt-6 rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur">
            <h2 className="text-lg font-semibold">What I learned</h2>
            <ul className="mt-3 space-y-2 text-white/70">
              {project.learnings.map((x, i) => (
                <li key={i} className="flex gap-2">
                  <span className="mt-2 h-1.5 w-1.5 rounded-full bg-white/40" />
                  <span>{x}</span>
                </li>
              ))}
            </ul>
          </section>
        ) : null}
      </div>
    </main>
  );
}