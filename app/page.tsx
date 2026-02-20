// app/page.tsx
import Link from "next/link";

type Project = {
  title: string;
  tagline: string;
  impact: string[];
  tech: string[];
  links: {
    github?: string;
    live?: string;
  };
};

const PROFILE = {
  name: "Denny Xie",
  headline: "Business + Tech hybrid building full-stack products with measurable impact.",
  subheadline:
    "I build data-driven systems that turn complex business requirements into reliable backend architectures and production-ready applications.",
  links: {
    email: "honghongxia.xie@gmail.com",
    github: "https://github.com/olddriver12356",
    linkedin: "https://www.linkedin.com/in/denny-xie-493347262/",
    resume: "/resume.pdf",
  },
};

const PROJECTS: Project[] = [
  {
    title: "UBC Course Database Management Project",
    tagline: "Built a modular backend system to transform heterogeneous academic datasets into structured, queryable formats.",
    impact: [
      "Built a modular backend system to validate, transform, and structure heterogeneous datasets into queryable formats.",
      "Designed a data ingestion and validation pipeline for unstructured course datasets.",
      "Applied production-style security modeling and input validation aligned with SaaS best practices.",
      "Documented system architecture and edge cases for team maintainability.",
      "Collaborated with another teamate within a Agile-based group, iterating on different program feature, user requirements."
    ],
    tech: ["Next.js", "TypeScript", "Node.js", "Testing", "CI/CD", "REST API"],
    links: {
      github: "https://github.com/olddriver12356/REPO_LINK_1",
      live: "https://YOUR_DEMO_LINK_1",
    },
  },
  {
    title: "Restaurant Supply Chain & Review System",
    tagline: "Designed and implemented a full relational database system to manage restaurant supply chain and review workflows.",
    impact: [
      "Architected a 15+ entity normalized relational schema with clear constraints and relationships.",
      "Loaded and validated 1,000+ realistic records and optimized query performance via indexing and schema refinement.",
      "Reduced average query latency by ~30% through structural improvements.",
      "Iterated design across multiple Agile milestones (ERD → Relational Schema → SQL Implementation)"
    ],
    tech: ["JavaScript", "SQL", "Oracle DB", "Relational Modeling"],
    links: {
      github: "https://github.com/olddriver12356/REPO_LINK_2",
      live: "https://YOUR_DEMO_LINK_2",
    },
  },
  {
    title: "Machine Learning Workflow Framework",
    tagline: "Built modular machine learning pipelines for structured datasets with systematic validation and model selection.",
    impact: [
      "Developed reusable ML workflows integrating preprocessing, feature engineering, training, and evaluation.",
      "Implemented classification and regression models across real-world datasets.",
      "Designed cross-validation and structured hyperparameter tuning to ensure reliable model selection.",
    ],
    tech: ["Python", "Pandas", "Scikit-Learn", "Model Evaluation"],
    links: {
      github: "https://github.com/olddriver12356/REPO_LINK_3",
      live: "https://YOUR_DEMO_LINK_3",
    },
  },
];

function Chip({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex items-center rounded-full border border-neutral-800/60 bg-neutral-900/40 px-3 py-1 text-xs text-neutral-200">
      {children}
    </span>
  );
}

function ButtonLink({
  href,
  children,
  variant = "primary",
}: {
  href: string;
  children: React.ReactNode;
  variant?: "primary" | "secondary";
}) {
  const base =
    "inline-flex items-center justify-center rounded-xl px-4 py-2 text-sm font-medium transition border";
  const styles =
    variant === "primary"
      ? "bg-white text-black border-white hover:opacity-90"
      : "bg-transparent text-white border-neutral-800 hover:bg-neutral-900";
  return (
    <Link className={`${base} ${styles}`} href={href} target={href.startsWith("http") ? "_blank" : undefined}>
      {children}
    </Link>
  );
}

function ProjectCard({ p }: { p: Project }) {
  return (
    <div className="rounded-2xl border border-neutral-900 bg-neutral-950/40 p-6 shadow-sm">
      <div className="flex items-start justify-between gap-4">
        <div>
          <h3 className="text-lg font-semibold text-white">{p.title}</h3>
          <p className="mt-1 text-sm text-neutral-300">{p.tagline}</p>
        </div>
        <div className="flex gap-2">
          {p.links.github && (
            <ButtonLink href={p.links.github} variant="secondary">
              GitHub
            </ButtonLink>
          )}
          {p.links.live && (
            <ButtonLink href={p.links.live} variant="secondary">
              Live
            </ButtonLink>
          )}
        </div>
      </div>

      <ul className="mt-4 space-y-2 text-sm text-neutral-200">
        {p.impact.map((b, i) => (
          <li key={i} className="flex gap-2">
            <span className="mt-1 inline-block h-1.5 w-1.5 flex-none rounded-full bg-neutral-500" />
            <span>{b}</span>
          </li>
        ))}
      </ul>

      <div className="mt-5 flex flex-wrap gap-2">
        {p.tech.map((t) => (
          <Chip key={t}>{t}</Chip>
        ))}
      </div>
    </div>
  );
}

export default function HomePage() {
  return (
    <main className="min-h-screen bg-black text-white">
      <div className="mx-auto max-w-5xl px-6 py-10">
        {/* Top nav */}
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex items-center gap-3">
            <div className="h-10 w-10 rounded-2xl border border-neutral-800 bg-neutral-950" />
            <div>
              <div className="text-sm font-semibold">{PROFILE.name}</div>
              <div className="text-xs text-neutral-400">Full Stack • Business + Tech</div>
            </div>
          </div>
          <div className="flex flex-wrap gap-2">
            <ButtonLink href={PROFILE.links.resume} variant="secondary">
              Resume
            </ButtonLink>
            <ButtonLink href={PROFILE.links.linkedin} variant="secondary">
              LinkedIn
            </ButtonLink>
            <ButtonLink href={PROFILE.links.github} variant="secondary">
              github
            </ButtonLink>
            <ButtonLink href={PROFILE.links.email} variant="primary">
              Contact
            </ButtonLink>
          </div>
        </div>

        {/* Hero */}
        <section className="mt-12">
          <h1 className="text-3xl font-semibold leading-tight sm:text-5xl">
            {PROFILE.headline}
          </h1>
          <p className="mt-4 max-w-2xl text-base leading-relaxed text-neutral-300 sm:text-lg">
            {PROFILE.subheadline}
          </p>

          <div className="mt-6 flex flex-wrap gap-2">
            <Chip>Full-stack engineering</Chip>
            <Chip>Product thinking</Chip>
            <Chip>Data + ML exposure</Chip>
            <Chip>Clean systems, clean UX</Chip>
          </div>
        </section>

        {/* Projects */}
        <section className="mt-14">
          <div className="flex items-end justify-between gap-4">
            <h2 className="text-xl font-semibold">Featured projects</h2>
            <p className="text-sm text-neutral-400">3 highlights — built end-to-end</p>
          </div>

          <div className="mt-6 grid gap-6 md:grid-cols-2">
            {PROJECTS.map((p) => (
              <ProjectCard key={p.title} p={p} />
            ))}
          </div>
        </section>

        {/* About */}
        <section className="mt-14 rounded-2xl border border-neutral-900 bg-neutral-950/40 p-6">
          <h2 className="text-xl font-semibold">How I work</h2>
          <div className="mt-4 grid gap-6 md:grid-cols-3">
            <div>
              <div className="text-sm font-semibold">Business-Driven Engineering</div>
              <p className="mt-2 text-sm text-neutral-300">
               I translate business constraints and strategic goals into technical architectures with measurable outcomes.
              </p>
            </div>
            <div>
              <div className="text-sm font-semibold">Backend & Data Focused</div>
              <p className="mt-2 text-sm text-neutral-300">
               I care about schema design, API contracts, validation pipelines, and performance optimization — not just interfaces.
              </p>
            </div>
            <div>
              <div className="text-sm font-semibold">Iterative & Analytical</div>
              <p className="mt-2 text-sm text-neutral-300">
               From ROI modeling in investment analysis to hyperparameter tuning in ML, I build systems with measurement in mind.
              </p>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="mt-14 border-t border-neutral-900 pt-8 text-sm text-neutral-400">
          <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
            <div>© {new Date().getFullYear()} {PROFILE.name}</div>
            <div className="flex gap-4">
              <Link className="hover:text-white" href={PROFILE.links.github} target="_blank">GitHub</Link>
              <Link className="hover:text-white" href={PROFILE.links.linkedin} target="_blank">LinkedIn</Link>
              <Link className="hover:text-white" href={PROFILE.links.email}>Email</Link>
            </div>
          </div>
        </footer>
      </div>
    </main>
  );
}