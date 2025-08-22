"use client";

import { useEffect, useRef } from "react";
import { motion } from "framer-motion";

// Main Component
export default function HorizontalScrollSection() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (containerRef.current) {
        // Scroll handling logic can be added here if needed
        // For now, we'll keep the ref for potential future use
      }
    };

    if (typeof window !== "undefined") {
      window.addEventListener("scroll", handleScroll);
      return () => window.removeEventListener("scroll", handleScroll);
    }
  }, []);

  const services = [
    {
      title: "TECHNOLOGY DRIVEN",
      subtitle: "Revolutionary event technology for extraordinary experiences",
      color: "#4f46e5",
      icon: "🚀",
    },
    {
      title: "EXPERT TEAM",
      subtitle:
        "Seasoned professionals with decades of corporate event excellence",
      color: "#10b981",
      icon: "👥",
    },
    {
      title: "GLOBAL REACH",
      subtitle: "Trusted by Nigeria's leading corporations and organizations",
      color: "#f59e0b",
      icon: "🌍",
    },
    {
      title: "INNOVATION & CREATIVITY",
      subtitle: "Creative solutions that transform ordinary into extraordinary",
      color: "#8b5cf6",
      icon: "💡",
    },
    {
      title: "QUALITY & EXCELLENCE",
      subtitle: "Uncompromising standards that exceed expectations",
      color: "#f97316",
      icon: "⭐",
    },
    {
      title: "CUSTOMER FIRST",
      subtitle: "Your success is our priority with dedicated support",
      color: "#ec4899",
      icon: "❤️",
    },
  ];

  return (
    <section
      ref={containerRef}
      className="horizontal-scroll-section relative bg-background text-foreground overflow-hidden py-8 min-h-screen"
    >
      {/* Animated Background */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Floating geometric shapes */}
        <motion.div
          className="absolute top-1/4 left-1/4 w-32 h-32 border border-primary/20 rotate-45"
          animate={{
            rotate: [0, 360],
            y: [0, -20, 0],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "linear",
          }}
        />
        <motion.div
          className="absolute bottom-1/4 right-1/4 w-24 h-24 border border-secondary/20 rounded-full"
          animate={{
            scale: [1, 1.2, 1],
            y: [0, 15, 0],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute top-1/2 right-1/3 w-28 h-28 border border-accent/20 rotate-12"
          animate={{
            rotate: [0, -360],
            x: [0, 10, 0],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "linear",
          }}
        />
      </div>

      {/* Content */}
      <div className="relative z-10 container--wide">
        <div className="text-center py-20">
          <motion.h2
            className="text-6xl md:text-8xl font-black mb-8 bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
          >
            EXPERIENCE THE FUTURE
          </motion.h2>

          <motion.p
            className="text-2xl md:text-4xl font-bold text-foreground/80 max-w-4xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            viewport={{ once: true }}
          >
            Immerse yourself in our cutting-edge experience that showcases the
            power of modern event technology
          </motion.p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-20">
          {services.map((service, index) => (
            <motion.div
              key={index}
              className="group relative p-8 rounded-2xl bg-muted/50 backdrop-blur-sm border border-border/50 hover:border-primary/50 transition-all duration-500"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{
                y: -8,
                scale: 1.02,
                transition: { duration: 0.3 },
              }}
            >
              {/* Service Icon */}
              <div className="text-6xl mb-6 text-center">{service.icon}</div>

              {/* Service Title */}
              <h3
                className="text-2xl font-bold mb-4 text-center"
                style={{ color: service.color }}
              >
                {service.title}
              </h3>

              {/* Service Subtitle */}
              <p className="text-foreground/70 text-center leading-relaxed">
                {service.subtitle}
              </p>

              {/* Hover Effect */}
              <div
                className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                style={{
                  background: `linear-gradient(135deg, ${service.color}10, ${service.color}05)`,
                }}
              />
            </motion.div>
          ))}
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20">
        <motion.div
          className="w-6 h-10 border-2 border-foreground/30 rounded-full flex justify-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
        >
          <motion.div
            className="w-1 h-3 bg-foreground/60 rounded-full mt-2"
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          />
        </motion.div>
      </div>
    </section>
  );
}
