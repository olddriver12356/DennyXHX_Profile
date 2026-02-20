import Link from "next/link";
import { WORK } from "@/lib/work";
import { EntryCard } from "@/components/EntryCard";

export default function WorkPage() {
  return (
    <div className="space-y-10">
      <header className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <h1 className="text-3xl font-semibold tracking-tight">Work experience</h1>
          <p className="mt-2 text-sm text-[color:var(--muted)]">
            Roles and outcomes. Click any item for full scope and impact.
          </p>
        </div>
        <Link className="btn w-fit" href="/">
          ← Home
        </Link>
      </header>

      <div className="grid gap-6 md:grid-cols-2">
        {WORK.map((w) => (
          <EntryCard
            key={w.slug}
            href={`/work/${w.slug}`}
            eyebrow={w.company}
            title={w.title}
            meta={[w.location, w.start && w.end ? `${w.start}–${w.end}` : w.start || w.end]
              .filter(Boolean)
              .join(" • ")}
            summary={w.summary}
            chips={[...(w.tech ?? [])]}
          />
        ))}
      </div>
    </div>
  );
}

