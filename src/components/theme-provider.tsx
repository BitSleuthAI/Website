"use client";

import React, { createContext, useCallback, useContext, useEffect, useMemo, useState } from "react";

type ThemePreference = "light" | "dark" | "system";

type ThemeContextValue = {
  theme: ThemePreference;
  resolvedTheme: "light" | "dark";
  setTheme: (theme: ThemePreference) => void;
};

const ThemeContext = createContext<ThemeContextValue | undefined>(undefined);

function getSystemTheme(): "light" | "dark" {
  if (typeof window === "undefined") return "light";
  return window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches
    ? "dark"
    : "light";
}

function applyThemeClass(theme: "light" | "dark") {
  const root = document.documentElement;
  root.setAttribute("data-theme", theme);
  if (theme === "dark") {
    root.classList.add("dark");
  } else {
    root.classList.remove("dark");
  }
}

export function ThemeProvider({
  children,
  defaultTheme = "system",
}: {
  children: React.ReactNode;
  defaultTheme?: ThemePreference;
}) {
  // Initialize theme from localStorage or default
  const [theme, setThemeState] = useState<ThemePreference>(() => {
    if (typeof window === 'undefined') return defaultTheme;
    try {
      const stored = localStorage.getItem("theme");
      return (stored as ThemePreference) || defaultTheme;
    } catch {
      return defaultTheme;
    }
  });

  // Initialize resolved theme
  const [resolvedTheme, setResolvedTheme] = useState<"light" | "dark">(() => {
    if (typeof window === 'undefined') return "light";
    try {
      const stored = localStorage.getItem("theme");
      const initialPref = (stored as ThemePreference) || defaultTheme;
      return initialPref === "system" ? getSystemTheme() : initialPref;
    } catch {
      return defaultTheme === "system" ? getSystemTheme() : defaultTheme;
    }
  });

  // Apply theme class on mount
  useEffect(() => {
    applyThemeClass(resolvedTheme);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // React to system changes when in system mode
  useEffect(() => {
    if (theme !== "system") return;
    const media = window.matchMedia("(prefers-color-scheme: dark)");
    const handler = () => {
      const next = media.matches ? "dark" : "light";
      setResolvedTheme(next);
      applyThemeClass(next);
    };
    handler();
    media.addEventListener("change", handler);
    return () => media.removeEventListener("change", handler);
  }, [theme]);

  const setTheme = useCallback((pref: ThemePreference) => {
    try {
      localStorage.setItem("theme", pref);
    } catch {}
    setThemeState(pref);
    const next = pref === "system" ? getSystemTheme() : pref;
    setResolvedTheme(next);
    applyThemeClass(next);
  }, []);

  const value = useMemo<ThemeContextValue>(() => ({ theme, resolvedTheme, setTheme }), [theme, resolvedTheme, setTheme]);

  return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>;
}

export function useTheme(): ThemeContextValue {
  const ctx = useContext(ThemeContext);
  if (!ctx) throw new Error("useTheme must be used within ThemeProvider");
  return ctx;
}


