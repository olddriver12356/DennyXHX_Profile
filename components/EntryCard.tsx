import Link from "next/link";

export function EntryCard({
  href,
  eyebrow,
  title,
  meta,
  summary,
  chips = [],
}: {
  href: string;
  eyebrow?: string;
  title: string;
  meta?: string;
  summary: string;
  chips?: string[];
}) {
  return (
    <Link
      href={href}
      className="group block overflow-hidden rounded-2xl border border-[color:var(--border)] bg-[color:color-mix(in_oklab,var(--surface)_58%,transparent)] p-6 backdrop-blur transition hover:-translate-y-0.5 hover:border-[color:color-mix(in_oklab,var(--accent)_38%,var(--border))]"
    >
      <div className="pointer-events-none absolute -inset-28 opacity-0 transition group-hover:opacity-100">
        <div className="h-full w-full bg-[radial-gradient(circle_at_30%_15%,color-mix(in_oklab,var(--accent)_16%,transparent),transparent_55%),radial-gradient(circle_at_70%_60%,color-mix(in_oklab,var(--accent-2)_14%,transparent),transparent_55%)]" />
      </div>

      <div className="relative">
        {eyebrow ? (
          <div className="text-xs text-[color:var(--muted)]">{eyebrow}</div>
        ) : null}
        <div className="mt-2 flex items-start justify-between gap-4">
          <div className="min-w-0">
            <div className="text-base font-semibold tracking-tight">{title}</div>
            {meta ? (
              <div className="mt-1 text-xs text-[color:var(--muted)]">{meta}</div>
            ) : null}
          </div>
          <span className="btn px-3 py-2 text-xs opacity-85 group-hover:opacity-100">
            Details →
          </span>
        </div>

        <p className="mt-3 text-sm leading-relaxed text-[color:var(--muted)] line-clamp-3">
          {summary}
        </p>

        {chips.length ? (
          <div className="mt-4 flex flex-wrap gap-2">
            {chips.slice(0, 6).map((c) => (
              <span key={c} className="chip">
                {c}
              </span>
            ))}
          </div>
        ) : null}
      </div>
    </Link>
  );
}

