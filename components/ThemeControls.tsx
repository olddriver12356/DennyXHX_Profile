"use client";

import { useEffect, useMemo, useState } from "react";

type ThemeMode = "auto" | "dark" | "light";

const THEME_KEY = "portfolio:theme";
const ACCENT_KEY = "portfolio:accent-h";

const ACCENTS = [262, 205, 160, 320, 28, 42] as const;

function nextTheme(theme: ThemeMode): ThemeMode {
  if (theme === "auto") return "dark";
  if (theme === "dark") return "light";
  return "auto";
}

function applyTheme(theme: ThemeMode) {
  const root = document.documentElement;
  if (theme === "auto") root.removeAttribute("data-theme");
  else root.setAttribute("data-theme", theme);
}

function applyAccent(h: number) {
  document.documentElement.style.setProperty("--accent-h", String(h));
}

function safeGet(key: string) {
  try {
    return window.localStorage.getItem(key);
  } catch {
    return null;
  }
}

function safeSet(key: string, value: string) {
  try {
    window.localStorage.setItem(key, value);
  } catch {
    // ignore
  }
}

export function ThemeControls() {
  const [theme, setTheme] = useState<ThemeMode>("auto");
  const [accent, setAccent] = useState<number>(ACCENTS[0]);

  const accentIdx = useMemo(() => {
    const idx = ACCENTS.indexOf(accent as (typeof ACCENTS)[number]);
    return idx === -1 ? 0 : idx;
  }, [accent]);

  useEffect(() => {
    const savedTheme = safeGet(THEME_KEY) as ThemeMode | null;
    const savedAccent = safeGet(ACCENT_KEY);

    const initialTheme: ThemeMode =
      savedTheme === "dark" || savedTheme === "light" || savedTheme === "auto"
        ? savedTheme
        : "auto";

    const parsedAccent = savedAccent ? Number(savedAccent) : NaN;
    const initialAccent = Number.isFinite(parsedAccent) ? parsedAccent : ACCENTS[0];

    setTheme(initialTheme);
    setAccent(initialAccent);
    applyTheme(initialTheme);
    applyAccent(initialAccent);
  }, []);

  function onToggleTheme() {
    const next = nextTheme(theme);
    setTheme(next);
    safeSet(THEME_KEY, next);
    applyTheme(next);
  }

  function onCycleAccent() {
    const next = ACCENTS[(accentIdx + 1) % ACCENTS.length];
    setAccent(next);
    safeSet(ACCENT_KEY, String(next));
    applyAccent(next);
  }

  return (
    <div className="flex items-center gap-2">
      <button type="button" className="btn" onClick={onToggleTheme} aria-label="Toggle theme">
        {theme === "auto" ? "Auto" : theme === "dark" ? "Dark" : "Light"}
      </button>
      <button
        type="button"
        className="btn"
        onClick={onCycleAccent}
        aria-label="Change accent color"
        title="Change accent"
      >
        <span
          aria-hidden="true"
          className="inline-block h-3 w-3 rounded-full"
          style={{
            background: `hsl(${accent} 92% 60%)`,
            boxShadow: `0 0 0 2px color-mix(in oklab, hsl(${accent} 92% 60%) 35%, transparent)`,
          }}
        />
        Accent
      </button>
    </div>
  );
}

