import Link from "next/link";

export default function ResumePage() {
  return (
    <div className="space-y-6">
      <header className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <h1 className="text-3xl font-semibold tracking-tight">Resume</h1>
          <p className="mt-2 text-sm text-[color:var(--muted)]">
            Downloadable resume file is not currently present in this repo.
          </p>
        </div>
        <Link className="btn w-fit" href="/">
          ← Home
        </Link>
      </header>

      <section className="surface rounded-2xl p-7">
        <h2 className="text-lg font-semibold tracking-tight">Add your PDF</h2>
        <p className="mt-2 leading-relaxed text-[color:var(--muted)]">
          Place your file at <span className="font-semibold">`public/resume.pdf`</span>, then this
          page can link to it (and your sidebar “Resume” link will work on Vercel).
        </p>

        <div className="mt-5 flex flex-wrap gap-2">
          <a className="btn btn-primary" href="/resume.pdf">
            Open /resume.pdf
          </a>
          <Link className="btn" href="/projects">
            View projects
          </Link>
        </div>
      </section>
    </div>
  );
}

