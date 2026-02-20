"use client";

import { useEffect } from "react";

function prefersReducedMotion() {
  return window.matchMedia?.("(prefers-reduced-motion: reduce)")?.matches ?? false;
}

function clampHue(h: number) {
  const x = h % 360;
  return x < 0 ? x + 360 : x;
}

export function AutoAccent() {
  useEffect(() => {
    const root = document.documentElement;

    // If the user prefers reduced motion, keep a stable accent.
    if (prefersReducedMotion()) {
      root.style.setProperty("--accent-h", "262");
      return;
    }

    let raf = 0;
    let lastBucket = -1;

    const tick = () => {
      // Change slowly (minute-bucketed) to avoid distracting constant movement.
      const minutes = Date.now() / 1000 / 60;
      const bucket = Math.floor(minutes); // update at most once per minute

      if (bucket !== lastBucket) {
        lastBucket = bucket;
        const t = minutes / 6; // full cycle ~36 hours
        const drift = (Math.sin(t) * 48 + Math.cos(t * 0.7) * 22) * 0.5;
        const hue = clampHue(210 + drift + (bucket % 17) * 0.6);
        root.style.setProperty("--accent-h", hue.toFixed(2));
      }

      raf = window.requestAnimationFrame(tick);
    };

    raf = window.requestAnimationFrame(tick);
    return () => window.cancelAnimationFrame(raf);
  }, []);

  return null;
}

