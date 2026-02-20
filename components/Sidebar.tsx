"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { ThemeControls } from "./ThemeControls";

type NavItem = {
  label: string;
  href: string;
  external?: boolean;
};

const PROFILE = {
  name: "Denny Xie",
  role: "Full Stack • Business + Tech",
  links: {
    email: "mailto:honghongxia.xie@gmail.com",
    github: "https://github.com/olddriver12356",
    linkedin: "https://www.linkedin.com/in/denny-xie-493347262/",
    resume: "/resume.pdf",
  },
};

const NAV: NavItem[] = [
  { label: "Home", href: "/" },
  { label: "Projects", href: "/projects" },
  { label: "Resume", href: PROFILE.links.resume },
  { label: "GitHub", href: PROFILE.links.github, external: true },
  { label: "LinkedIn", href: PROFILE.links.linkedin, external: true },
  { label: "Email", href: PROFILE.links.email, external: true },
];

function isActive(pathname: string, href: string) {
  if (href === "/") return pathname === "/";
  if (href.startsWith("/")) return pathname.startsWith(href);
  return false;
}

export function Sidebar({
  onNavigate,
  compact = false,
}: {
  onNavigate?: () => void;
  compact?: boolean;
}) {
  const pathname = usePathname() ?? "/";

  return (
    <div className={compact ? "" : "sticky top-4"}>
      <div className={compact ? "surface-soft rounded-2xl p-4" : "surface rounded-2xl p-5"}>
        <div className="flex items-start justify-between gap-4">
          <div>
            <div className="text-sm font-semibold tracking-tight">{PROFILE.name}</div>
            <div className="mt-1 text-xs text-[color:var(--muted)]">{PROFILE.role}</div>
          </div>
          <ThemeControls />
        </div>

        <div className="my-5 h-px w-full bg-white/5" />

        <nav className="grid gap-2">
          {NAV.map((item) => {
            const active = isActive(pathname, item.href);
            const cls =
              "sidebar-link flex items-center justify-between rounded-xl px-3 py-2 text-sm transition";

            const isExternal =
              item.external || item.href.startsWith("http") || item.href.startsWith("mailto:");

            return (
              <Link
                key={item.href}
                href={item.href}
                className={[
                  cls,
                  active
                    ? "border-[color:color-mix(in_oklab,var(--accent)_45%,transparent)] bg-[color:color-mix(in_oklab,var(--accent)_14%,transparent)]"
                    : "border border-transparent",
                ].join(" ")}
                target={isExternal ? "_blank" : undefined}
                rel={isExternal ? "noreferrer" : undefined}
                onClick={onNavigate}
              >
                <span>{item.label}</span>
                <span
                  aria-hidden="true"
                  className={[
                    "text-xs",
                    active ? "text-[color:var(--fg)]" : "text-[color:var(--muted)]",
                  ].join(" ")}
                >
                  →
                </span>
              </Link>
            );
          })}
        </nav>

        <div className="mt-6 rounded-xl border border-[color:var(--border)] bg-[color:color-mix(in_oklab,var(--surface)_55%,transparent)] p-3 text-xs text-[color:var(--muted)]">
          <div className="font-semibold text-[color:color-mix(in_oklab,var(--fg)_88%,transparent)]">
            Tip
          </div>
          <div className="mt-1">
            Use <span className="font-semibold">Theme</span> and{" "}
            <span className="font-semibold">Accent</span> to match your mood.
          </div>
        </div>
      </div>
    </div>
  );
}

