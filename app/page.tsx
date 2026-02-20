// app/page.tsx
import Link from "next/link";

type Project = {
  title: string;
  tagline: string;
  impact: string[];
  tech: string[];
  links: { github?: string; live?: string };
};

const PROFILE = {
  name: "Denny Xie",
  headline: "Business + Tech hybrid building full-stack products with measurable impact.",
  subheadline:
    "I turn ambiguous business problems into shipped software — clean UX, reliable APIs, and data-driven decisions.",
  links: {
    email: "mailto:honghongxia.xie@gmail.com",
    github: "https://github.com/olddriver12356",
    linkedin: "https://www.linkedin.com/in/denny-xie-493347262/",
    resume: "/resume.pdf",
  },
};

const PROJECTS: Project[] = [
  {
    title: "AI-Ready Course Data Platform",
    tagline: "Backend pipeline to validate, transform, and structure heterogeneous datasets into queryable formats.",
    impact: [
      "Built a modular ingestion + validation pipeline for unstructured datasets.",
      "Added black-box and glass-box test suites to improve transformation reliability.",
      "Documented architecture and edge cases to improve maintainability and team handoff.",
    ],
    tech: ["TypeScript", "Node.js", "REST APIs", "Testing"],
    links: {
      github: "https://github.com/olddriver12356/DennyXHX_Profile",
      // live: "https://your-demo-link",
    },
  },
  {
    title: "Restaurant Supply Chain & Review System",
    tagline: "Relational database design and performance optimization for operational workflows.",
    impact: [
      "Designed a 15+ entity normalized relational schema with constraints and relationships.",
      "Loaded 1,000+ rows and improved query latency ~30% via indexing and schema refinement.",
      "Collaborated in an Agile team and iterated across ERD → schema → SQL implementation.",
    ],
    tech: ["SQL", "Oracle DB", "JavaScript", "Indexing"],
    links: {
      // github: "https://github.com/olddriver12356/<your-repo>",
    },
  },
  {
    title: "ML Workflow & Predictive Modeling",
    tagline: "Reusable ML pipelines with systematic validation and model selection.",
    impact: [
      "Built modular workflows: preprocessing, feature transforms, training, evaluation.",
      "Implemented classification and regression with cross-validation and tuning.",
      "Compared models using consistent metrics to ensure reliable selection.",
    ],
    tech: ["Python", "Pandas", "scikit-learn", "Cross-validation"],
    links: {
      // github: "https://github.com/olddriver12356/<your-repo>",
    },
  },
];

// ---------- UI building blocks ----------

function cn(...classes: Array<string | false | undefined>) {
  return classes.filter(Boolean).join(" ");
}

function Chip({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex items-center rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/80 backdrop-blur">
      {children}
    </span>
  );
}

function ButtonLink({
  href,
  children,
  variant = "secondary",
}: {
  href: string;
  children: React.ReactNode;
  variant?: "primary" | "secondary";
}) {
  const base =
    "inline-flex items-center justify-center rounded-xl px-4 py-2 text-sm font-medium transition focus:outline-none focus-visible:ring-2 focus-visible:ring-white/30";
  const styles =
    variant === "primary"
      ? "bg-white text-black hover:bg-white/90"
      : "border border-white/10 bg-white/5 text-white/90 hover:bg-white/10";
  const isExternal = href.startsWith("http") || href.startsWith("mailto:");
  return (
    <Link
      className={cn(base, styles)}
      href={href}
      target={isExternal ? "_blank" : undefined}
      rel={isExternal ? "noreferrer" : undefined}
    >
      {children}
    </Link>
  );
}

function SectionTitle({
  title,
  subtitle,
}: {
  title: string;
  subtitle?: string;
}) {
  return (
    <div className="flex items-end justify-between gap-4">
      <div>
        <h2 className="text-lg font-semibold text-white/95">{title}</h2>
        {subtitle && <p className="mt-1 text-sm text-white/60">{subtitle}</p>}
      </div>
    </div>
  );
}

function ProjectCard({ p }: { p: Project }) {
  return (
    <div className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur transition hover:border-white/20">
      {/* subtle glow */}
      <div className="pointer-events-none absolute -inset-24 opacity-0 transition group-hover:opacity-100">
        <div className="h-full w-full bg-[radial-gradient(circle_at_30%_20%,rgba(99,102,241,0.20),transparent_55%),radial-gradient(circle_at_70%_60%,rgba(16,185,129,0.14),transparent_50%)]" />
      </div>

      <div className="relative flex items-start justify-between gap-4">
        <div>
          <h3 className="text-base font-semibold text-white">{p.title}</h3>
          <p className="mt-1 text-sm leading-relaxed text-white/70">{p.tagline}</p>
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

      <ul className="relative mt-4 space-y-2 text-sm text-white/80">
        {p.impact.map((b, i) => (
          <li key={i} className="flex gap-2">
            <span className="mt-2 inline-block h-1.5 w-1.5 flex-none rounded-full bg-white/40" />
            <span>{b}</span>
          </li>
        ))}
      </ul>

      <div className="relative mt-5 flex flex-wrap gap-2">
        {p.tech.map((t) => (
          <Chip key={t}>{t}</Chip>
        ))}
      </div>
    </div>
  );
}

export default function HomePage() {
  return (
    <main className="min-h-screen text-white">
      {/* Background: gradient + grid + vignette */}
      <div className="fixed inset-0 -z-10 bg-[#070A12]" />
      <div className="fixed inset-0 -z-10 bg-[radial-gradient(circle_at_20%_10%,rgba(99,102,241,0.18),transparent_55%),radial-gradient(circle_at_80%_30%,rgba(16,185,129,0.10),transparent_50%),radial-gradient(circle_at_40%_90%,rgba(236,72,153,0.10),transparent_55%)]" />
      <div className="fixed inset-0 -z-10 opacity-[0.12] [background-image:linear-gradient(to_right,rgba(255,255,255,0.20)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.20)_1px,transparent_1px)] [background-size:60px_60px]" />
      <div className="fixed inset-0 -z-10 bg-[radial-gradient(circle_at_center,transparent_35%,rgba(0,0,0,0.75)_85%)]" />

      <div className="mx-auto max-w-5xl px-6">
        {/* Sticky top nav */}
        <header className="sticky top-0 z-20 -mx-6 border-b border-white/10 bg-[#070A12]/60 px-6 py-4 backdrop-blur">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <div className="flex items-center gap-3">
              <div className="h-10 w-10 rounded-2xl border border-white/10 bg-white/5" />
              <div>
                <div className="text-sm font-semibold">{PROFILE.name}</div>
                <div className="text-xs text-white/60">Full Stack • Business + Tech</div>
              </div>
            </div>

            <nav className="flex flex-wrap gap-2">
              <ButtonLink href={PROFILE.links.resume} variant="secondary">
                Resume
              </ButtonLink>
              <ButtonLink href={PROFILE.links.linkedin} variant="secondary">
                LinkedIn
              </ButtonLink>
              <ButtonLink href={PROFILE.links.github} variant="secondary">
                GitHub
              </ButtonLink>
              <ButtonLink href={PROFILE.links.email} variant="primary">
                Contact
              </ButtonLink>
            </nav>
          </div>
        </header>

        {/* Hero */}
        <section className="py-14 sm:py-20">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs text-white/70 backdrop-blur">
            <span className="h-2 w-2 rounded-full bg-emerald-400/80" />
            Open to internships • Vancouver, BC
          </div>

          <h1 className="mt-6 text-4xl font-semibold leading-tight tracking-tight sm:text-6xl">
            <span className="text-white">{PROFILE.headline}</span>
          </h1>

          <p className="mt-5 max-w-2xl text-base leading-relaxed text-white/70 sm:text-lg">
            {PROFILE.subheadline}
          </p>

          <div className="mt-7 flex flex-wrap gap-2">
            <Chip>Full-stack engineering</Chip>
            <Chip>Product thinking</Chip>
            <Chip>Data + ML exposure</Chip>
            <Chip>Reliable systems</Chip>
          </div>
        </section>

        {/* Projects */}
        <section className="pb-6">
          <SectionTitle title="Featured projects" subtitle="Three highlights — built end-to-end" />
          <div className="mt-6 grid gap-6 md:grid-cols-2">
            {PROJECTS.map((p) => (
              <ProjectCard key={p.title} p={p} />
            ))}
          </div>
        </section>

        {/* How I work */}
        <section className="py-14">
          <SectionTitle title="How I work" subtitle="Business-first, engineering depth, and fast iteration." />
          <div className="mt-6 grid gap-6 md:grid-cols-3">
            {[
              {
                t: "Business-first",
                d: "Start with user + goal, define success metrics, then scope a shippable MVP.",
              },
              {
                t: "Engineering depth",
                d: "Care about API contracts, data models, edge cases, and maintainability — not just demos.",
              },
              {
                t: "Iterate fast",
                d: "Ship early, measure, refine. Tight feedback loops and clean incremental improvements.",
              },
            ].map((x) => (
              <div
                key={x.t}
                className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur"
              >
                <div className="text-sm font-semibold text-white/90">{x.t}</div>
                <p className="mt-2 text-sm leading-relaxed text-white/70">{x.d}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Footer */}
        <footer className="border-t border-white/10 py-10 text-sm text-white/60">
          <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
            <div>© {new Date().getFullYear()} {PROFILE.name}</div>
            <div className="flex gap-4">
              <Link className="hover:text-white" href={PROFILE.links.github} target="_blank" rel="noreferrer">
                GitHub
              </Link>
              <Link className="hover:text-white" href={PROFILE.links.linkedin} target="_blank" rel="noreferrer">
                LinkedIn
              </Link>
              <Link className="hover:text-white" href={PROFILE.links.email}>
                Email
              </Link>
            </div>
          </div>
        </footer>
      </div>
    </main>
  );
}