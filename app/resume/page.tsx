import Link from "next/link";

const SKILLS = [
  {
    category: "Languages",
    items: ["TypeScript", "Python", "SQL", "JavaScript"],
  },
  {
    category: "Frameworks & Platforms",
    items: ["Next.js", "Node.js", "React", "REST APIs"],
  },
  {
    category: "Data & ML",
    items: ["Pandas", "Scikit-Learn", "Statistical Modeling", "Data Pipelines"],
  },
  {
    category: "Databases",
    items: ["Oracle DB", "Relational Modeling", "Query Optimization", "Schema Design"],
  },
  {
    category: "Tools",
    items: ["Git", "Excel", "PowerPoint", "Testing Frameworks"],
  },
];

export default function ResumePage() {
  return (
    <div className="space-y-8">
      <header className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <h1 className="text-3xl font-semibold tracking-tight">Skills & Resume</h1>
          <p className="mt-2 text-sm text-[color:var(--muted)]">
            A snapshot of my technical toolkit and background.
          </p>
        </div>
        <div className="flex flex-wrap gap-2">
          <a className="btn btn-primary" href="/resume.pdf" target="_blank" rel="noreferrer">
            Download PDF
          </a>
          <Link className="btn" href="/">
            ← Home
          </Link>
        </div>
      </header>

      <section className="surface rounded-2xl p-7">
        <h2 className="text-lg font-semibold tracking-tight">About</h2>
        <p className="mt-3 leading-relaxed text-[color:var(--muted)]">
          Business + Tech hybrid building full-stack products with measurable impact. I build
          data-driven systems that turn complex business requirements into reliable backend
          architectures and production-ready applications. Currently pursuing a BCom in Business
          and Computer Science at UBC Sauder, with a 3.7 GPA and expected graduation in 2028.
        </p>
        <div className="mt-5 flex flex-wrap gap-2">
          <span className="chip">Vancouver, BC</span>
          <span className="chip">Open to internships</span>
          <span className="chip">GPA 3.7</span>
          <span className="chip">2028 Grad</span>
        </div>
      </section>

      <section className="space-y-4">
        <h2 className="text-lg font-semibold tracking-tight">Technical Skills</h2>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {SKILLS.map((group) => (
            <div
              key={group.category}
              className="rounded-2xl border border-[color:var(--border)] bg-[color:color-mix(in_oklab,var(--surface)_58%,transparent)] p-5 backdrop-blur"
            >
              <div className="text-xs font-semibold uppercase tracking-widest text-[color:var(--muted)]">
                {group.category}
              </div>
              <div className="mt-3 flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <span key={item} className="chip">
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="surface rounded-2xl p-7">
        <h2 className="text-lg font-semibold tracking-tight">Quick Links</h2>
        <div className="mt-4 flex flex-wrap gap-2">
          <Link className="btn" href="/projects">
            Projects →
          </Link>
          <Link className="btn" href="/work">
            Work experience →
          </Link>
          <Link className="btn" href="/education">
            Education →
          </Link>
        </div>
      </section>
    </div>
  );
}
