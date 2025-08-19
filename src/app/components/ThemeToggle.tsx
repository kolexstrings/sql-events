"use client";

import { useTheme } from "../contexts/ThemeContext";
import { SunIcon, MoonIcon } from "@heroicons/react/24/outline";
import { motion } from "framer-motion";

export default function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();

  return (
    <motion.button
      onClick={toggleTheme}
      className="relative w-12 h-12 rounded-full bg-card border border-border flex items-center justify-center transition-colors duration-300 hover:bg-muted"
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      aria-label="Toggle theme"
    >
      <motion.div
        initial={false}
        animate={{ rotate: theme === "dark" ? 180 : 0 }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
        className="relative"
      >
        {theme === "light" ? (
          <SunIcon className="w-6 h-6 text-yellow-600" />
        ) : (
          <MoonIcon className="w-6 h-6 text-blue-400" />
        )}
      </motion.div>

      {/* Background glow effect */}
      <motion.div
        className="absolute inset-0 rounded-full opacity-0"
        animate={{
          opacity: theme === "dark" ? 0.1 : 0,
          scale: theme === "dark" ? 1.2 : 1,
        }}
        transition={{ duration: 0.3 }}
        style={{
          background:
            theme === "dark"
              ? "radial-gradient(circle, rgba(59, 130, 246, 0.3) 0%, transparent 70%)"
              : "transparent",
        }}
      />
    </motion.button>
  );
}
