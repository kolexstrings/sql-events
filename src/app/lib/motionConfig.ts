// Motion configuration for better performance and accessibility
export const motionConfig = {
  // Reduced motion variants for accessibility
  reducedMotion: {
    initial: { opacity: 0 },
    animate: { opacity: 1 },
    exit: { opacity: 0 },
    transition: { duration: 0.2 },
  },

  // Standard motion variants
  standardMotion: {
    fadeInUp: {
      initial: { opacity: 0, y: 20 },
      animate: { opacity: 1, y: 0 },
      exit: { opacity: 0, y: -20 },
      transition: { duration: 0.5, ease: "easeOut" },
    },
    fadeInLeft: {
      initial: { opacity: 0, x: -20 },
      animate: { opacity: 1, x: 0 },
      exit: { opacity: 0, x: 20 },
      transition: { duration: 0.5, ease: "easeOut" },
    },
    fadeInRight: {
      initial: { opacity: 0, x: 20 },
      animate: { opacity: 1, x: 0 },
      exit: { opacity: 0, x: -20 },
      transition: { duration: 0.5, ease: "easeOut" },
    },
    scaleIn: {
      initial: { opacity: 0, scale: 0.9 },
      animate: { opacity: 1, scale: 1 },
      exit: { opacity: 0, scale: 0.9 },
      transition: { duration: 0.4, ease: "easeOut" },
    },
  },

  // Performance-optimized spring configurations
  springs: {
    gentle: { stiffness: 100, damping: 20 },
    bouncy: { stiffness: 200, damping: 15 },
    snappy: { stiffness: 300, damping: 25 },
  },
};

// Hook to detect user's motion preference
export function useMotionPreference() {
  if (typeof window === "undefined") return false;

  return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}

// Get appropriate motion variant based on user preference
export function getMotionVariant(
  variantName: keyof typeof motionConfig.standardMotion,
  prefersReducedMotion?: boolean
) {
  // Allow passing the preference as parameter to avoid hook call in non-component function
  const shouldReduceMotion =
    prefersReducedMotion ??
    (typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches);

  if (shouldReduceMotion) {
    return motionConfig.reducedMotion;
  }

  return motionConfig.standardMotion[variantName];
}
