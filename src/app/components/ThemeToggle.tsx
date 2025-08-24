"use client";

import { useTheme } from "../contexts/ThemeContext";
import { SunIcon, MoonIcon } from "@heroicons/react/24/outline";
import { motion } from "framer-motion";

export default function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();

  return (
    <motion.button
      onClick={toggleTheme}
      className="relative w-12 h-12 rounded-full bg-gradient-to-br from-muted to-card border border-border/50 flex items-center justify-center transition-all duration-500 hover:shadow-lg hover:shadow-primary/25 hover:scale-105"
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      aria-label="Toggle theme"
    >
      <motion.div
        initial={false}
        animate={{ rotate: theme === "dark" ? 180 : 0 }}
        transition={{ duration: 0.5, ease: "easeInOut" }}
        className="relative"
      >
        {theme === "light" ? (
          <SunIcon className="w-7 h-7 text-yellow-500" />
        ) : (
          <MoonIcon className="w-7 h-7 text-blue-400" />
        )}
      </motion.div>

      {/* Enhanced background glow effect */}
      <motion.div
        className="absolute inset-0 rounded-full opacity-0"
        animate={{
          opacity: theme === "dark" ? 0.15 : 0,
          scale: theme === "dark" ? 1.3 : 1,
        }}
        transition={{ duration: 0.5 }}
        style={{
          background:
            theme === "dark"
              ? "radial-gradient(circle, rgba(59, 130, 246, 0.4) 0%, transparent 70%)"
              : "transparent",
        }}
      />

      {/* Ring effect on hover */}
      <motion.div
        className="absolute inset-0 rounded-full border-2 border-transparent"
        animate={{
          borderColor:
            theme === "dark"
              ? "rgba(59, 130, 246, 0.3)"
              : "rgba(251, 191, 36, 0.3)",
          scale: 1.2,
        }}
        transition={{ duration: 0.3 }}
      />
    </motion.button>
  );
}
