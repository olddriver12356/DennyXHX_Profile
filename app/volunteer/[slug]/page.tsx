import Link from "next/link";
import { redirect, notFound } from "next/navigation";
import { VOLUNTEER, getVolunteer, resolveVolunteerSlug } from "@/lib/volunteer";

export const dynamicParams = false;

export function generateStaticParams() {
  return VOLUNTEER.map((v) => ({ slug: v.slug }));
}

export default async function VolunteerDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  const canonical = resolveVolunteerSlug(slug);
  if (canonical !== slug) redirect(`/volunteer/${canonical}`);

  const item = getVolunteer(canonical);
  if (!item) return notFound();

  return (
    <div className="space-y-8">
      <header className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <Link className="btn w-fit" href="/volunteer">
          ← Volunteer
        </Link>
        {item.links?.website ? (
          <Link className="btn" href={item.links.website} target="_blank" rel="noreferrer">
            Organization site
          </Link>
        ) : null}
      </header>

      <section className="surface rounded-2xl p-7">
        <div className="text-xs text-[color:var(--muted)]">{item.org}</div>
        <h1 className="mt-2 text-3xl font-semibold tracking-tight">{item.role}</h1>
        <p className="mt-3 text-[color:var(--muted)]">{item.summary}</p>

        <div className="mt-5 flex flex-wrap gap-2">
          {[
            item.location,
            item.start && item.end ? `${item.start}–${item.end}` : item.start || item.end,
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
          <h2 className="text-lg font-semibold tracking-tight">Contributions</h2>
          <ul className="mt-3 space-y-2 text-[color:var(--muted)]">
            {item.contributions.map((x) => (
              <li key={x} className="flex gap-2">
                <span className="mt-2 h-1.5 w-1.5 flex-none rounded-full bg-[color:var(--accent)]" />
                <span>{x}</span>
              </li>
            ))}
          </ul>
        </section>

        {item.impact?.length ? (
          <section className="surface rounded-2xl p-7">
            <h2 className="text-lg font-semibold tracking-tight">Impact</h2>
            <ul className="mt-3 space-y-2 text-[color:var(--muted)]">
              {item.impact.map((x) => (
                <li key={x} className="flex gap-2">
                  <span className="mt-2 h-1.5 w-1.5 flex-none rounded-full bg-[color:var(--accent-2)]" />
                  <span>{x}</span>
                </li>
              ))}
            </ul>
          </section>
        ) : null}
      </div>

      {item.skills?.length ? (
        <section className="surface rounded-2xl p-7">
          <h2 className="text-lg font-semibold tracking-tight">Skills</h2>
          <div className="mt-4 flex flex-wrap gap-2">
            {item.skills.map((s) => (
              <span key={s} className="chip">
                {s}
              </span>
            ))}
          </div>
        </section>
      ) : null}
    </div>
  );
}

