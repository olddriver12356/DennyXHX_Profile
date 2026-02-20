// app/page.tsx
import Link from "next/link";
import Image from "next/image";

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
    // IMPORTANT: use mailto so the button works
    email: "mailto:honghongxia.xie@gmail.com",
    github: "https://github.com/olddriver12356",
    linkedin: "https://www.linkedin.com/in/denny-xie-493347262/",
    resume: "/resume.pdf",
  },
};

// Put your photo in: public/profile.jpg (or change this path)
const PHOTO = {
  src: "/profile.jpg",
  alt: "Professional headshot of Denny Xie",
};

const PROJECTS: Project[] = [
  {
    title: "UBC Course Database Management Project",
    tagline:
      "Built a modular backend system to transform heterogeneous academic datasets into structured, queryable formats.",
    impact: [
      "Built a modular backend system to validate, transform, and structure heterogeneous datasets into queryable formats.",
      "Designed a data ingestion and validation pipeline for unstructured course datasets.",
      "Applied production-style security modeling and input validation aligned with SaaS best practices.",
      "Documented system architecture and edge cases for team maintainability.",
      "Collaborated with another teamate within a Agile-based group, iterating on different program feature, user requirements.",
    ],
    tech: ["Next.js", "TypeScript", "Node.js", "Testing", "CI/CD", "REST API"],
    links: {
      github: "https://github.com/olddriver12356/REPO_LINK_1",
      live: "https://YOUR_DEMO_LINK_1",
    },
  },
  {
    title: "Restaurant Supply Chain & Review System",
    tagline:
      "Designed and implemented a full relational database system to manage restaurant supply chain and review workflows.",
    impact: [
      "Architected a 15+ entity normalized relational schema with clear constraints and relationships.",
      "Loaded and validated 1,000+ realistic records and optimized query performance via indexing and schema refinement.",
      "Reduced average query latency by ~30% through structural improvements.",
      "Iterated design across multiple Agile milestones (ERD → Relational Schema → SQL Implementation)",
    ],
    tech: ["JavaScript", "SQL", "Oracle DB", "Relational Modeling"],
    links: {
      github: "https://github.com/olddriver12356/REPO_LINK_2",
      live: "https://YOUR_DEMO_LINK_2",
    },
  },
  {
    title: "Machine Learning Workflow Framework",
    tagline:
      "Built modular machine learning pipelines for structured datasets with systematic validation and model selection.",
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

function ProjectCard({ p }: { p: Project }) {
  return (
    <div className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur transition hover:border-white/20">
      {/* subtle hover glow */}
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

function PhotoCard() {
  return (
    <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-4 backdrop-blur">
      <div className="relative aspect-[4/5] w-full overflow-hidden rounded-xl border border-white/10 bg-black/30">
        {/* If you haven't added the image yet, the box will still render; once you add public/profile.jpg, it will show */}
        <Image
          src={PHOTO.src}
          alt={PHOTO.alt}
          fill
          className="object-cover"
          priority
          sizes="(max-width: 768px) 100vw, 360px"
        />
      </div>

      <div className="mt-4 space-y-1">
        <div className="text-sm font-semibold text-white/90">{PROFILE.name}</div>
        <div className="text-xs text-white/60">Full Stack • Business + Tech</div>
      </div>

      <div className="mt-4 flex flex-wrap gap-2">
        <Chip>Vancouver</Chip>
        <Chip>Open to internships</Chip>
      </div>
    </div>
  );
}

export default function HomePage() {
  return (
    <main className="min-h-screen text-white">
      {/* Background: keep your dark vibe, but more elegant */}
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
                <div className="text-xs text-white/60">
                  Full Stack • Business + Tech
                </div>
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

        {/* Hero + Photo */}
        <section className="py-14 sm:py-20">
          <div className="grid gap-10 md:grid-cols-[1.2fr_0.8fr] md:items-start">
            {/* Left: text */}
            <div>
              <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs text-white/70 backdrop-blur">
                <span className="h-2 w-2 rounded-full bg-emerald-400/80" />
                Open to internships • Vancouver, BC
              </div>

              <h1 className="mt-6 text-4xl font-semibold leading-tight tracking-tight sm:text-6xl">
                {PROFILE.headline}
              </h1>

              <p className="mt-5 max-w-2xl text-base leading-relaxed text-white/70 sm:text-lg">
                {PROFILE.subheadline}
              </p>

              <div className="mt-7 flex flex-wrap gap-2">
                <Chip>Full-stack engineering</Chip>
                <Chip>Product thinking</Chip>
                <Chip>Data + ML exposure</Chip>
                <Chip>Clean systems, clean UX</Chip>
              </div>
            </div>

            {/* Right: photo card */}
            <div className="md:pt-2">
              <PhotoCard />
            </div>
          </div>
        </section>

        {/* Projects */}
        <section className="pb-6">
          <div className="flex items-end justify-between gap-4">
            <h2 className="text-xl font-semibold text-white/95">Featured projects</h2>
            <p className="text-sm text-white/60">3 highlights — built end-to-end</p>
          </div>

          <div className="mt-6 grid gap-6 md:grid-cols-2">
            {PROJECTS.map((p) => (
              <ProjectCard key={p.title} p={p} />
            ))}
          </div>
        </section>

        {/* About */}
        <section className="py-14">
          <div className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur">
            <h2 className="text-xl font-semibold text-white/95">How I work</h2>
            <div className="mt-5 grid gap-6 md:grid-cols-3">
              <div>
                <div className="text-sm font-semibold text-white/90">
                  Business-Driven Engineering
                </div>
                <p className="mt-2 text-sm leading-relaxed text-white/70">
                  I translate business constraints and strategic goals into technical
                  architectures with measurable outcomes.
                </p>
              </div>
              <div>
                <div className="text-sm font-semibold text-white/90">
                  Backend & Data Focused
                </div>
                <p className="mt-2 text-sm leading-relaxed text-white/70">
                  I care about schema design, API contracts, validation pipelines,
                  and performance optimization — not just interfaces.
                </p>
              </div>
              <div>
                <div className="text-sm font-semibold text-white/90">
                  Iterative & Analytical
                </div>
                <p className="mt-2 text-sm leading-relaxed text-white/70">
                  From ROI modeling in investment analysis to hyperparameter tuning
                  in ML, I build systems with measurement in mind.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="border-t border-white/10 py-10 text-sm text-white/60">
          <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
            <div>© {new Date().getFullYear()} {PROFILE.name}</div>
            <div className="flex gap-4">
              <Link
                className="hover:text-white"
                href={PROFILE.links.github}
                target="_blank"
                rel="noreferrer"
              >
                GitHub
              </Link>
              <Link
                className="hover:text-white"
                href={PROFILE.links.linkedin}
                target="_blank"
                rel="noreferrer"
              >
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