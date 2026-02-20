import Link from "next/link";
import { redirect, notFound } from "next/navigation";
import { WORK, getWork, resolveWorkSlug } from "@/lib/work";

export const dynamicParams = false;

export function generateStaticParams() {
  return WORK.map((w) => ({ slug: w.slug }));
}

export default async function WorkDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  const canonical = resolveWorkSlug(slug);
  if (canonical !== slug) redirect(`/work/${canonical}`);

  const role = getWork(canonical);
  if (!role) return notFound();

  return (
    <div className="space-y-8">
      <header className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <Link className="btn w-fit" href="/work">
          ← Work
        </Link>
        {role.links?.website ? (
          <Link className="btn" href={role.links.website} target="_blank" rel="noreferrer">
            Company site
          </Link>
        ) : null}
      </header>

      <section className="surface rounded-2xl p-7">
        <div className="text-xs text-[color:var(--muted)]">{role.company}</div>
        <h1 className="mt-2 text-3xl font-semibold tracking-tight">{role.title}</h1>
        <p className="mt-3 text-[color:var(--muted)]">{role.summary}</p>

        <div className="mt-5 flex flex-wrap gap-2">
          {[
            role.location,
            role.start && role.end ? `${role.start}–${role.end}` : role.start || role.end,
          ]
            .filter(Boolean)
            .map((x) => (
              <span key={x} className="chip">
                {x}
              </span>
            ))}
        </div>
      </section>

      <div className="grid gap-6 md:grid-cols-2">
        <section className="surface rounded-2xl p-7">
          <h2 className="text-lg font-semibold tracking-tight">Responsibilities</h2>
          <ul className="mt-3 space-y-2 text-[color:var(--muted)]">
            {role.responsibilities.map((x) => (
              <li key={x} className="flex gap-2">
                <span className="mt-2 h-1.5 w-1.5 flex-none rounded-full bg-[color:var(--accent)]" />
                <span>{x}</span>
              </li>
            ))}
          </ul>
        </section>

        {role.impact?.length ? (
          <section className="surface rounded-2xl p-7">
            <h2 className="text-lg font-semibold tracking-tight">Impact</h2>
            <ul className="mt-3 space-y-2 text-[color:var(--muted)]">
              {role.impact.map((x) => (
                <li key={x} className="flex gap-2">
                  <span className="mt-2 h-1.5 w-1.5 flex-none rounded-full bg-[color:var(--accent-2)]" />
                  <span>{x}</span>
                </li>
              ))}
            </ul>
          </section>
        ) : null}
      </div>

      {role.tech?.length ? (
        <section className="surface rounded-2xl p-7">
          <h2 className="text-lg font-semibold tracking-tight">Tech</h2>
          <div className="mt-4 flex flex-wrap gap-2">
            {role.tech.map((t) => (
              <span key={t} className="chip">
                {t}
              </span>
            ))}
          </div>
        </section>
      ) : null}
    </div>
  );
}

