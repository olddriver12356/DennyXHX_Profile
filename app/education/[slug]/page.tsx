import Link from "next/link";
import { redirect, notFound } from "next/navigation";
import { EDUCATION, getEducation, resolveEducationSlug } from "@/lib/education";

export const dynamicParams = false;

export function generateStaticParams() {
  return EDUCATION.map((e) => ({ slug: e.slug }));
}

export default async function EducationDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  const canonical = resolveEducationSlug(slug);
  if (canonical !== slug) redirect(`/education/${canonical}`);

  const edu = getEducation(canonical);
  if (!edu) return notFound();

  return (
    <div className="space-y-8">
      <header className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <Link className="btn w-fit" href="/education">
          ← Education
        </Link>
        {edu.links?.website ? (
          <Link className="btn" href={edu.links.website} target="_blank" rel="noreferrer">
            Website
          </Link>
        ) : null}
      </header>

      <section className="surface rounded-2xl p-7">
        <div className="text-xs text-[color:var(--muted)]">{edu.school}</div>
        <h1 className="mt-2 text-3xl font-semibold tracking-tight">{edu.program}</h1>
        <p className="mt-3 text-[color:var(--muted)]">{edu.summary}</p>

        <div className="mt-5 flex flex-wrap gap-2">
          {[
            edu.location,
            edu.start && edu.end ? `${edu.start}–${edu.end}` : edu.start || edu.end,
          ]
            .filter(Boolean)
            .map((x) => (
              <span key={x} className="chip">
                {x}
              </span>
            ))}
        </div>
      </section>

      {edu.Grade?.length ? (
        <section className="surface rounded-2xl p-7">
          <h2 className="text-lg font-semibold tracking-tight">Grade</h2>
          <ul className="mt-3 space-y-2 text-[color:var(--muted)]">
            {edu.Grade.map((x) => (
              <li key={x} className="flex gap-2">
                <span className="mt-2 h-1.5 w-1.5 flex-none rounded-full bg-[color:var(--accent)]" />
                <span>{x}</span>
              </li>
            ))}
          </ul>
        </section>
      ) : null}

      {edu.coursework?.length ? (
        <section className="surface rounded-2xl p-7">
          <h2 className="text-lg font-semibold tracking-tight">Relevant coursework</h2>
          <div className="mt-4 flex flex-wrap gap-2">
            {edu.coursework.map((c) => (
              <span key={c} className="chip">
                {c}
              </span>
            ))}
          </div>
        </section>
      ) : null}
    </div>
  );
}

