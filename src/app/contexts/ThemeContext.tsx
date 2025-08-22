"use client";

import React, { createContext, useContext, useEffect, useState } from "react";

type Theme = "light" | "dark";

interface ThemeContextType {
  theme: Theme;
  toggleTheme: () => void;
  setTheme: (theme: Theme) => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [theme, setThemeState] = useState<Theme>("light");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);

    // Check for saved theme preference or default to light
    if (typeof window !== "undefined" && typeof localStorage !== "undefined") {
      const savedTheme = localStorage.getItem("theme") as Theme;
      if (savedTheme && (savedTheme === "light" || savedTheme === "dark")) {
        console.log("Loading saved theme:", savedTheme);
        setThemeState(savedTheme);
      } else if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
        console.log("Setting theme to dark based on system preference");
        setThemeState("dark");
      }
    }
  }, []);

  useEffect(() => {
    // Only apply theme after component is mounted to avoid hydration mismatch
    if (!mounted) return;

    // Update document class and save preference
    if (
      typeof document !== "undefined" &&
      typeof localStorage !== "undefined"
    ) {
      console.log("Applying theme:", theme);
      console.log(
        "Current HTML classes before:",
        document.documentElement.className
      );

      // Remove existing theme classes
      document.documentElement.classList.remove("light", "dark");
      // Add the current theme class
      document.documentElement.classList.add(theme);

      console.log(
        "Updated HTML classes after:",
        document.documentElement.className
      );
      localStorage.setItem("theme", theme);

      // Update debug display
      const themeDisplay = document.getElementById("theme-display");
      const bgDisplay = document.getElementById("bg-display");
      if (themeDisplay) themeDisplay.textContent = theme;
      if (bgDisplay)
        bgDisplay.textContent = theme === "dark" ? "dark" : "light";

      // Force a repaint to ensure CSS custom properties are applied
      document.documentElement.style.display = "none";
      // eslint-disable-next-line @typescript-eslint/no-unused-expressions
      document.documentElement.offsetHeight; // Trigger reflow
      document.documentElement.style.display = "";

      console.log("Theme applied successfully:", theme);
    }
  }, [theme, mounted]);

  const toggleTheme = () => {
    console.log(
      "Toggling theme from",
      theme,
      "to",
      theme === "light" ? "dark" : "light"
    );
    setThemeState((prev) => (prev === "light" ? "dark" : "light"));
  };

  const setTheme = (newTheme: Theme) => {
    console.log("Setting theme to:", newTheme);
    setThemeState(newTheme);
  };

  // Always provide the context, but only apply theme changes after mounting
  return (
    <ThemeContext.Provider value={{ theme, toggleTheme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return context;
}
