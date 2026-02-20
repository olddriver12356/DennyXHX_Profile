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
    "I like turning ambiguous business problems into shipped software — clean UX, reliable APIs, and data-driven decisions.",
  links: {
    email: "honghongxia.xie@gmail.com",
    github: "https://github.com/olddriver12356",
    linkedin: "https://www.linkedin.com/in/https://www.linkedin.com/in/denny-xie-493347262/",
    resume: "/resume.pdf",
  },
};

const PROJECTS: Project[] = [
  {
    title: "Project 1 Title (from your resume)",
    tagline: "One sentence: what it is + who it helps.",
    impact: [
      "Impact bullet 1 (use numbers if possible).",
      "Impact bullet 2 (what hard problem you solved).",
      "Impact bullet 3 (scale, reliability, performance, UX, etc.).",
    ],
    tech: ["Next.js", "TypeScript", "Node.js", "PostgreSQL"],
    links: {
      github: "https://github.com/olddriver12356/REPO_LINK_1",
      live: "https://YOUR_DEMO_LINK_1",
    },
  },
  {
    title: "Project 2 Title (from your resume)",
    tagline: "One sentence: what it is + why it matters.",
    impact: [
      "Impact bullet 1.",
      "Impact bullet 2.",
      "Impact bullet 3.",
    ],
    tech: ["React", "Express", "SQL", "Docker"],
    links: {
      github: "https://github.com/olddriver12356/REPO_LINK_2",
      live: "https://YOUR_DEMO_LINK_2",
    },
  },
  {
    title: "Project 3 Title (from your resume)",
    tagline: "One sentence: what it is + the outcome.",
    impact: [
      "Impact bullet 1.",
      "Impact bullet 2.",
      "Impact bullet 3.",
    ],
    tech: ["Python", "Pandas", "FastAPI", "AWS"],
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
              <div className="text-sm font-semibold">Business-first</div>
              <p className="mt-2 text-sm text-neutral-300">
                I start with the user + business goal, define success metrics, and scope an MVP that ships.
              </p>
            </div>
            <div>
              <div className="text-sm font-semibold">Engineering depth</div>
              <p className="mt-2 text-sm text-neutral-300">
                I care about API contracts, data models, edge cases, and maintainability — not just demos.
              </p>
            </div>
            <div>
              <div className="text-sm font-semibold">Iterate fast</div>
              <p className="mt-2 text-sm text-neutral-300">
                Ship early, measure, refine. I like tight feedback loops and clean, incremental improvements.
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