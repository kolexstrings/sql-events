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

  // Ensure light theme is applied immediately on client-side
  useEffect(() => {
    if (typeof document !== "undefined") {
      document.documentElement.classList.remove("dark");
      document.documentElement.classList.add("light");
    }
  }, []);

  useEffect(() => {
    setMounted(true);

    // Always start with light theme as default, then check for saved preference
    if (typeof window !== "undefined" && typeof localStorage !== "undefined") {
      const savedTheme = localStorage.getItem("theme") as Theme;
      if (savedTheme && (savedTheme === "light" || savedTheme === "dark")) {
        console.log("Loading saved theme:", savedTheme);
        setThemeState(savedTheme);
      } else {
        // Explicitly set to light theme and save it
        console.log("Setting theme to light (default)");
        setThemeState("light");
        localStorage.setItem("theme", "light");
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
