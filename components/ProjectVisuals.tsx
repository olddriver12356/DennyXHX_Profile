import Image from "next/image";

type KPI = { label: string; value: string };

type Props = {
  title: string;
  tagline: string;
  thumbnail?: string;
  icon?: "database" | "sparkles" | "brain" | "code";
  gradientFrom?: string;
  gradientTo?: string;
  kpis?: KPI[];
  compact?: boolean;
};

function Icon({ name }: { name: NonNullable<Props["icon"]> }) {
  const common = "h-5 w-5";
  // Simple inline SVGs (no extra deps)
  if (name === "database")
    return (
      <svg className={common} viewBox="0 0 24 24" fill="none">
        <path d="M4 6c0 1.66 3.58 3 8 3s8-1.34 8-3-3.58-3-8-3-8 1.34-8 3Z" stroke="currentColor" strokeWidth="1.6"/>
        <path d="M4 6v6c0 1.66 3.58 3 8 3s8-1.34 8-3V6" stroke="currentColor" strokeWidth="1.6"/>
        <path d="M4 12v6c0 1.66 3.58 3 8 3s8-1.34 8-3v-6" stroke="currentColor" strokeWidth="1.6"/>
      </svg>
    );
  if (name === "brain")
    return (
      <svg className={common} viewBox="0 0 24 24" fill="none">
        <path d="M9 21c-2.2 0-4-1.8-4-4v-1a3 3 0 0 1-2-2.8A3.2 3.2 0 0 1 5.5 10 3.5 3.5 0 0 1 9 4a3.4 3.4 0 0 1 3 1.8A3.4 3.4 0 0 1 15 4a3.5 3.5 0 0 1 3.5 6 3.2 3.2 0 0 1 2.5 3.2A3 3 0 0 1 19 16v1c0 2.2-1.8 4-4 4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round"/>
        <path d="M12 6v15" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round"/>
      </svg>
    );
  if (name === "sparkles")
    return (
      <svg className={common} viewBox="0 0 24 24" fill="none">
        <path d="M12 2l1.2 4.2L17 7.5l-3.8 1.3L12 13l-1.2-4.2L7 7.5l3.8-1.3L12 2Z" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round"/>
        <path d="M19 12l.8 2.8L22 16l-2.2.8L19 20l-.8-3.2L16 16l2.2-1.2L19 12Z" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round"/>
      </svg>
    );
  return (
    <svg className={common} viewBox="0 0 24 24" fill="none">
      <path d="M8 9l-3 3 3 3M16 9l3 3-3 3" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round"/>
      <path d="M10 20l4-16" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round"/>
    </svg>
  );
}

export default function ProjectVisual({
  title,
  tagline,
  thumbnail,
  icon = "code",
  gradientFrom = "var(--accent)",
  gradientTo = "var(--accent-2)",
  kpis = [],
  compact = false,
}: Props) {
  return (
    <div className="relative overflow-hidden rounded-2xl border border-[color:var(--border)]">
      {/* Gradient header */}
      <div
        className="relative p-5"
        style={{
          background: `linear-gradient(135deg, color-mix(in oklab, ${gradientFrom} 22%, transparent), color-mix(in oklab, ${gradientTo} 18%, transparent))`,
        }}
      >
        {/* Decorative glow */}
        <div
          className="pointer-events-none absolute -inset-28 opacity-70"
          style={{
            background:
              "radial-gradient(circle_at_25%_20%, color-mix(in oklab, var(--accent) 26%, transparent), transparent 55%), radial-gradient(circle_at_80%_70%, color-mix(in oklab, var(--accent-2) 22%, transparent), transparent 55%)",
          }}
        />

        <div className="relative flex items-start justify-between gap-4">
          <div className="min-w-0">
            <div className="inline-flex items-center gap-2 rounded-full border border-[color:var(--border)] bg-[color:color-mix(in_oklab,var(--surface)_55%,transparent)] px-3 py-1 text-xs text-[color:var(--muted)] backdrop-blur">
              <span className="text-[color:var(--fg)]">
                <Icon name={icon} />
              </span>
              <span className="truncate">Featured build</span>
            </div>

            <h3 className={compact ? "mt-3 text-base font-semibold" : "mt-3 text-lg font-semibold"}>
              {title}
            </h3>
            <p className={compact ? "mt-1 text-sm text-[color:var(--muted)] line-clamp-2" : "mt-1 text-sm text-[color:var(--muted)]"}>
              {tagline}
            </p>
          </div>

          {/* Thumbnail */}
          <div className={compact ? "relative h-16 w-24 flex-none overflow-hidden rounded-xl border border-[color:var(--border)] bg-black/20" : "relative h-20 w-28 flex-none overflow-hidden rounded-xl border border-[color:var(--border)] bg-black/20"}>
            {thumbnail ? (
              <Image src={thumbnail} alt={title} fill className="object-cover" />
            ) : null}
          </div>
        </div>

        {/* KPI strip */}
        {kpis.length ? (
          <div className="relative mt-4 grid grid-cols-3 gap-2">
            {kpis.slice(0, 3).map((k) => (
              <div
                key={k.label}
                className="rounded-xl border border-[color:var(--border)] bg-[color:color-mix(in_oklab,var(--surface)_55%,transparent)] p-3 backdrop-blur"
              >
                <div className="text-xs text-[color:var(--muted)]">{k.label}</div>
                <div className="mt-1 text-sm font-semibold">{k.value}</div>
              </div>
            ))}
          </div>
        ) : null}
      </div>

      {/* Bottom subtle divider */}
      <div className="h-px w-full bg-[color:color-mix(in_oklab,var(--accent)_28%,transparent)] opacity-60" />
    </div>
    );
    }