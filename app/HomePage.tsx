import Link from "next/link";
import Image from "next/image";
import { PROJECTS } from "@/lib/projects";

const PROFILE = {
  name: "Denny Xie",
  headline:
    "Business + Tech hybrid building full-stack products with measurable impact.",
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

function Chip({ children }: { children: React.ReactNode }) {
  return <span className="chip">{children}</span>;
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
  const isExternal = href.startsWith("http") || href.startsWith("mailto:");
  return (
    <Link
      className={variant === "primary" ? "btn btn-primary" : "btn"}
      href={href}
      target={isExternal ? "_blank" : undefined}
      rel={isExternal ? "noreferrer" : undefined}
    >
      {children}
    </Link>
  );
}

function ProjectCard({ slug }: { slug: string }) {
  const p = PROJECTS.find((x) => x.slug === slug);
  if (!p) return null;

  return (
    <Link
      href={`/projects/${p.slug}`}
      className="group relative block overflow-hidden rounded-2xl border border-[color:var(--border)] bg-[color:color-mix(in_oklab,var(--surface)_58%,transparent)] p-6 backdrop-blur transition hover:-translate-y-0.5 hover:border-[color:color-mix(in_oklab,var(--accent)_38%,var(--border))]"
    >
      <div className="pointer-events-none absolute -inset-28 opacity-0 transition group-hover:opacity-100">
        <div className="h-full w-full bg-[radial-gradient(circle_at_30%_15%,color-mix(in_oklab,var(--accent)_18%,transparent),transparent_55%),radial-gradient(circle_at_70%_60%,color-mix(in_oklab,var(--accent-2)_16%,transparent),transparent_55%)]" />
      </div>

      <div className="relative flex items-start justify-between gap-4">
        <div className="min-w-0">
          <div className="text-xs text-[color:var(--muted)]">
            {p.year} {p.role ? `• ${p.role}` : ""}
          </div>
          <h3 className="mt-2 text-base font-semibold tracking-tight">{p.title}</h3>
          <p className="mt-2 text-sm leading-relaxed text-[color:var(--muted)]">
            {p.tagline}
          </p>
        </div>
        <span className="btn px-3 py-2 text-xs opacity-85 group-hover:opacity-100">
          Details →
        </span>
      </div>

      <div className="relative mt-4 flex flex-wrap gap-2">
        {(p.metrics ?? []).slice(0, 3).map((m) => (
          <Chip key={m}>{m}</Chip>
        ))}
      </div>

      <div className="relative mt-4 flex flex-wrap gap-2">
        {p.stack.slice(0, 6).map((t) => (
          <Chip key={t}>{t}</Chip>
        ))}
      </div>
    </Link>
  );
}

function PhotoCard() {
  return (
    <div className="surface relative overflow-hidden rounded-2xl p-4">
      <div className="pointer-events-none absolute -inset-28 opacity-70">
        <div className="h-full w-full bg-[radial-gradient(circle_at_30%_20%,color-mix(in_oklab,var(--accent)_18%,transparent),transparent_55%),radial-gradient(circle_at_70%_70%,color-mix(in_oklab,var(--accent-3)_12%,transparent),transparent_55%)]" />
      </div>

      <div className="relative aspect-[4/5] w-full overflow-hidden rounded-xl border border-[color:var(--border)] bg-[color:color-mix(in_oklab,var(--surface-2)_65%,transparent)]">
        <Image
          src={PHOTO.src}
          alt={PHOTO.alt}
          fill
          className="object-cover"
          priority
          sizes="(max-width: 768px) 100vw, 360px"
        />
      </div>

      <div className="relative mt-4 space-y-1">
        <div className="text-sm font-semibold">{PROFILE.name}</div>
        <div className="text-xs text-[color:var(--muted)]">Full Stack • Business + Tech</div>
      </div>

      <div className="relative mt-4 flex flex-wrap gap-2">
        <Chip>Vancouver</Chip>
        <Chip>Open to internships</Chip>
      </div>
    </div>
  );
}

export default function HomePage() {
  const featured = PROJECTS.slice(0, 3).map((p) => p.slug);

  return (
    <div className="space-y-14">
      {/* Hero */}
      <section className="grid gap-10 md:grid-cols-[1.2fr_0.8fr] md:items-start">
        <div>
          <div className="inline-flex items-center gap-2 rounded-full border border-[color:var(--border)] bg-[color:color-mix(in_oklab,var(--surface)_55%,transparent)] px-4 py-2 text-xs text-[color:var(--muted)] backdrop-blur">
            <span
              className="h-2 w-2 rounded-full"
              style={{ background: "var(--accent)" }}
            />
            Open to internships • Vancouver, BC
          </div>

          <h1 className="mt-6 text-4xl font-semibold leading-tight tracking-tight sm:text-6xl">
            {PROFILE.headline}
          </h1>

          <p className="mt-5 max-w-2xl text-base leading-relaxed text-[color:var(--muted)] sm:text-lg">
            {PROFILE.subheadline}
          </p>

          <div className="mt-7 flex flex-wrap gap-2">
            <Chip>Full-stack engineering</Chip>
            <Chip>Product thinking</Chip>
            <Chip>Backend + data systems</Chip>
            <Chip>Clean UX</Chip>
          </div>

          <div className="mt-8 flex flex-wrap gap-2">
            <ButtonLink href="/projects" variant="primary">
              View projects
            </ButtonLink>
            <ButtonLink href="/resume" variant="secondary">
              Resume
            </ButtonLink>
            <ButtonLink href={PROFILE.links.email} variant="secondary">
              Contact
            </ButtonLink>
          </div>
        </div>

        <div className="md:pt-2">
          <PhotoCard />
        </div>
      </section>

      <div className="divider" />

      {/* Featured projects */}
      <section id="projects">
        <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <h2 className="text-xl font-semibold tracking-tight">Featured projects</h2>
            <p className="mt-2 text-sm text-[color:var(--muted)]">
              Highlights with measurable outcomes and clean architecture.
            </p>
          </div>
          <Link href="/projects" className="btn w-fit">
            View all →
          </Link>
        </div>

        <div className="mt-6 grid gap-6 md:grid-cols-2">
          {featured.map((slug) => (
            <ProjectCard key={slug} slug={slug} />
          ))}
        </div>
      </section>

      {/* How I work */}
      <section id="about" className="surface rounded-2xl p-7">
        <h2 className="text-xl font-semibold tracking-tight">How I work</h2>
        <p className="mt-2 text-sm text-[color:var(--muted)]">
          I care about clarity, correctness, and measurable impact — from schema design to
          shipped UI.
        </p>

        <div className="mt-6 grid gap-6 md:grid-cols-3">
          <div className="rounded-2xl border border-[color:var(--border)] bg-[color:color-mix(in_oklab,var(--surface)_55%,transparent)] p-5">
            <div className="text-sm font-semibold">Business-driven engineering</div>
            <p className="mt-2 text-sm leading-relaxed text-[color:var(--muted)]">
              I translate constraints and goals into designs with clear trade-offs and
              outcomes.
            </p>
          </div>
          <div className="rounded-2xl border border-[color:var(--border)] bg-[color:color-mix(in_oklab,var(--surface)_55%,transparent)] p-5">
            <div className="text-sm font-semibold">Backend & data focus</div>
            <p className="mt-2 text-sm leading-relaxed text-[color:var(--muted)]">
              Strong schemas, validation, contracts, and performance patterns — not just
              UI.
            </p>
          </div>
          <div className="rounded-2xl border border-[color:var(--border)] bg-[color:color-mix(in_oklab,var(--surface)_55%,transparent)] p-5">
            <div className="text-sm font-semibold">Iterative & analytical</div>
            <p className="mt-2 text-sm leading-relaxed text-[color:var(--muted)]">
              I build in loops: ship, measure, refine — whether it’s APIs or ML
              workflows.
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="pt-6 text-sm text-[color:var(--muted)]">
        <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
          <div>
            © {new Date().getFullYear()} {PROFILE.name}
          </div>
          <div className="flex flex-wrap gap-3">
            <Link className="btn" href={PROFILE.links.github} target="_blank" rel="noreferrer">
              GitHub
            </Link>
            <Link
              className="btn"
              href={PROFILE.links.linkedin}
              target="_blank"
              rel="noreferrer"
            >
              LinkedIn
            </Link>
            <Link className="btn" href={PROFILE.links.email}>
              Email
            </Link>
          </div>
        </div>
      </footer>
    </div>
  );
}