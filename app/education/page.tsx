import Link from "next/link";
import { EDUCATION } from "@/lib/education";
import { EntryCard } from "@/components/EntryCard";

export default function EducationPage() {
  return (
    <div className="space-y-10">
      <header className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <h1 className="text-3xl font-semibold tracking-tight">Education</h1>
          <p className="mt-2 text-sm text-[color:var(--muted)]">
            A quick overview. Click in for coursework, highlights, and context.
          </p>
        </div>
        <Link className="btn w-fit" href="/">
          ← Home
        </Link>
      </header>

      <div className="grid gap-6 md:grid-cols-2">
        {EDUCATION.map((e) => (
          <EntryCard
            key={e.slug}
            href={`/education/${e.slug}`}
            eyebrow={e.school}
            title={e.program}
            meta={[e.location, e.start && e.end ? `${e.start}–${e.end}` : e.start || e.end]
              .filter(Boolean)
              .join(" • ")}
            summary={e.summary}
            chips={[...(e.coursework ?? [])]}
          />
        ))}
      </div>
    </div>
  );
}

