"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Sidebar } from "./Sidebar";

export function AppShell({ children }: { children: React.ReactNode }) {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    function onKeyDown(e: KeyboardEvent) {
      if (e.key === "Escape") setOpen(false);
    }
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, []);

  return (
    <div className="min-h-screen">
      <div className="noise" />

      {/* Mobile top bar */}
      <div className="md:hidden sticky top-0 z-30 border-b border-[color:var(--border)] bg-[color:color-mix(in_oklab,var(--bg)_70%,transparent)] backdrop-blur">
        <div className="flex items-center justify-between px-4 py-3">
          <button
            type="button"
            className="btn"
            onClick={() => setOpen(true)}
            aria-label="Open menu"
          >
            Menu
          </button>
          <Link href="/" className="text-sm font-semibold tracking-tight">
            Portfolio
          </Link>
          <span className="text-xs text-[color:var(--muted)]">Menu</span>
        </div>
      </div>

      <div className="grid md:grid-cols-[18rem_1fr]">
        {/* Desktop sidebar */}
        <aside className="hidden md:block p-4">
          <Sidebar />
        </aside>

        {/* Main content */}
        <div className="min-w-0">
          <main className="container py-10 md:py-14">{children}</main>
        </div>
      </div>

      {/* Mobile overlay */}
      {open ? (
        <div className="md:hidden fixed inset-0 z-40">
          <button
            type="button"
            className="absolute inset-0 bg-black/50"
            aria-label="Close menu overlay"
            onClick={() => setOpen(false)}
          />
          <div className="absolute left-3 right-3 top-3">
            <Sidebar onNavigate={() => setOpen(false)} compact />
          </div>
        </div>
      ) : null}
    </div>
  );
}

