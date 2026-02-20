import Link from "next/link";
import { VOLUNTEER } from "@/lib/volunteer";
import { EntryCard } from "@/components/EntryCard";

export default function VolunteerPage() {
  return (
    <div className="space-y-10">
      <header className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <h1 className="text-3xl font-semibold tracking-tight">Volunteer experience</h1>
          <p className="mt-2 text-sm text-[color:var(--muted)]">
            Community work, leadership, and contributions outside of coursework.
          </p>
        </div>
        <Link className="btn w-fit" href="/">
          ← Home
        </Link>
      </header>

      <div className="grid gap-6 md:grid-cols-2">
        {VOLUNTEER.map((v) => (
          <EntryCard
            key={v.slug}
            href={`/volunteer/${v.slug}`}
            eyebrow={v.org}
            title={v.role}
            meta={[v.location, v.start && v.end ? `${v.start}–${v.end}` : v.start || v.end]
              .filter(Boolean)
              .join(" • ")}
            summary={v.summary}
            chips={[...(v.skills ?? [])]}
          />
        ))}
      </div>
    </div>
  );
}

