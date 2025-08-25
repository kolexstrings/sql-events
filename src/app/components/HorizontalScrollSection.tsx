"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

// Main Component
export default function HorizontalScrollSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  // Progressive reveal system - cards fall as you scroll down, return to sky as you scroll up
  const card1Y = useTransform(scrollYProgress, [0, 0.25], [-800, 0]);
  const card1Z = useTransform(scrollYProgress, [0, 0.25], [0, 0]);
  const card1RotateZ = useTransform(scrollYProgress, [0, 0.25], [-90, -15]);
  const card1X = useTransform(scrollYProgress, [0, 0.25], [0, -40]);
  const card1Opacity = useTransform(
    scrollYProgress,
    [0, 0.1, 0.25],
    [0, 1, 1]
  );
  const card1Scale = useTransform(scrollYProgress, [0, 0.25], [0.3, 1]);

  const card2Y = useTransform(scrollYProgress, [0.15, 0.4], [-900, 0]);
  const card2Z = useTransform(scrollYProgress, [0.15, 0.4], [0, -10]);
  const card2RotateZ = useTransform(scrollYProgress, [0.15, 0.4], [-90, -8]);
  const card2X = useTransform(scrollYProgress, [0.15, 0.4], [0, -20]);
  const card2Opacity = useTransform(
    scrollYProgress,
    [0.15, 0.25, 0.4],
    [0, 1, 1]
  );
  const card2Scale = useTransform(scrollYProgress, [0.15, 0.4], [0.3, 1]);

  const card3Y = useTransform(scrollYProgress, [0.3, 0.55], [-1000, 0]);
  const card3Z = useTransform(scrollYProgress, [0.3, 0.55], [0, -20]);
  const card3RotateZ = useTransform(scrollYProgress, [0.3, 0.55], [-90, -2]);
  const card3X = useTransform(scrollYProgress, [0.3, 0.55], [0, 0]);
  const card3Opacity = useTransform(
    scrollYProgress,
    [0.3, 0.4, 0.55],
    [0, 1, 1]
  );
  const card3Scale = useTransform(scrollYProgress, [0.3, 0.55], [0.3, 1]);

  const card4Y = useTransform(scrollYProgress, [0.45, 0.7], [-1100, 0]);
  const card4Z = useTransform(scrollYProgress, [0.45, 0.7], [0, -30]);
  const card4RotateZ = useTransform(scrollYProgress, [0.45, 0.7], [-90, 2]);
  const card4X = useTransform(scrollYProgress, [0.45, 0.7], [0, 20]);
  const card4Opacity = useTransform(
    scrollYProgress,
    [0.45, 0.55, 0.7],
    [0, 1, 1]
  );
  const card4Scale = useTransform(scrollYProgress, [0.45, 0.7], [0.3, 1]);

  const card5Y = useTransform(scrollYProgress, [0.6, 0.85], [-1200, 0]);
  const card5Z = useTransform(scrollYProgress, [0.6, 0.85], [0, -40]);
  const card5RotateZ = useTransform(scrollYProgress, [0.6, 0.85], [-90, 8]);
  const card5X = useTransform(scrollYProgress, [0.6, 0.85], [0, 40]);
  const card5Opacity = useTransform(
    scrollYProgress,
    [0.6, 0.7, 0.85],
    [0, 1, 1]
  );
  const card5Scale = useTransform(scrollYProgress, [0.6, 0.85], [0.3, 1]);

  const card6Y = useTransform(scrollYProgress, [0.75, 1.0], [-1300, 0]);
  const card6Z = useTransform(scrollYProgress, [0.75, 1.0], [0, -50]);
  const card6RotateZ = useTransform(scrollYProgress, [0.75, 1.0], [-90, 15]);
  const card6X = useTransform(scrollYProgress, [0.75, 1.0], [0, 60]);
  const card6Opacity = useTransform(
    scrollYProgress,
    [0.75, 0.85, 1.0],
    [0, 1, 1]
  );
  const card6Scale = useTransform(scrollYProgress, [0.75, 1.0], [0.3, 1]);

  const services = [
    {
      title: "TECHNOLOGY DRIVEN",
      subtitle: "Revolutionary event technology for extraordinary experiences",
      description:
        "AI-powered event management, real-time analytics, and seamless integration",
      stats: "500+ Events",
      color: "#4f46e5",
      icon: "🚀",
      gradient: "from-indigo-500 to-purple-600",
    },
    {
      title: "EXPERT TEAM",
      subtitle:
        "Seasoned professionals with decades of corporate event excellence",
      description:
        "Certified event planners, technical specialists, and creative directors",
      stats: "50+ Experts",
      color: "#10b981",
      icon: "👥",
      gradient: "from-emerald-500 to-teal-600",
    },
    {
      title: "GLOBAL REACH",
      subtitle: "Trusted by Nigeria's leading corporations and organizations",
      description:
        "International partnerships, cross-border events, and global standards",
      stats: "25+ Countries",
      color: "#f59e0b",
      icon: "🌍",
      gradient: "from-amber-500 to-orange-600",
    },
    {
      title: "INNOVATION & CREATIVITY",
      subtitle: "Creative solutions that transform ordinary into extraordinary",
      description:
        "Cutting-edge design, immersive experiences, and breakthrough concepts",
      stats: "100+ Innovations",
      color: "#8b5cf6",
      icon: "💡",
      gradient: "from-violet-500 to-purple-600",
    },
    {
      title: "QUALITY & EXCELLENCE",
      subtitle: "Uncompromising standards that exceed expectations",
      description:
        "ISO certified processes, quality assurance, and continuous improvement",
      stats: "98% Satisfaction",
      color: "#f97316",
      icon: "⭐",
      gradient: "from-orange-500 to-red-600",
    },
    {
      title: "CUSTOMER FIRST",
      subtitle: "Your success is our priority with dedicated support",
      description:
        "24/7 support, personalized service, and dedicated account managers",
      stats: "24/7 Support",
      color: "#ec4899",
      icon: "❤️",
      gradient: "from-pink-500 to-rose-600",
    },
  ];

  return (
    <section
      ref={containerRef}
      className="relative bg-background text-foreground overflow-hidden py-20 sm:py-32 min-h-screen"
      style={{ perspective: "1000px" }}
    >
      {/* Animated Background */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Floating geometric shapes */}
        <motion.div
          className="absolute top-1/4 left-1/4 w-24 h-24 sm:w-28 sm:h-28 md:w-32 md:h-32 border border-primary/20 rotate-45"
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
          className="absolute bottom-1/4 right-1/4 w-20 h-20 sm:w-22 sm:h-22 md:w-24 md:h-24 border border-secondary/20 rounded-full"
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
          className="absolute top-1/2 right-1/3 w-22 h-22 sm:w-24 sm:h-24 md:w-28 md:h-28 border border-accent/20 rotate-12"
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
      <div className="relative z-10 container--wide px-4 sm:px-6">
        <div className="text-center mb-20 sm:mb-32">
          <motion.h2
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-black mb-6 sm:mb-8 bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
          >
            WHY CHOOSE US?
          </motion.h2>

          <motion.p
            className="text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl font-bold text-foreground/80 max-w-4xl mx-auto leading-relaxed px-4"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            viewport={{ once: true }}
          >
            Discover the compelling reasons that make SQL Events your premier
            choice
          </motion.p>
        </div>

        {/* 3D Card Fanning Container */}
        <div className="relative flex justify-center items-center min-h-[600px] sm:min-h-[800px]">
          {/* Initial fall animation for cards */}
          <motion.div
            className="absolute inset-0 flex justify-center items-center"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
          >
            {/* Card 1 - Technology Driven */}
            <motion.div
              className="absolute w-80 sm:w-96 md:w-[500px] p-6 sm:p-8 rounded-2xl sm:rounded-3xl bg-gradient-to-br from-indigo-500/10 to-purple-600/10 backdrop-blur-sm border border-indigo-500/30 shadow-2xl transition-all duration-500"
              style={{
                y: card1Y,
                z: card1Z,
                rotateZ: card1RotateZ,
                x: card1X,
                opacity: card1Opacity,
                scale: card1Scale,
                transformStyle: "preserve-3d",
                boxShadow: "0 0 30px rgba(99, 102, 241, 0.2)",
              }}
            >
              <div className="text-center">
                <div className="text-6xl sm:text-7xl md:text-8xl mb-4">🚀</div>
                <h3 className="text-xl sm:text-2xl md:text-3xl font-bold mb-3 text-indigo-500">
                  TECHNOLOGY DRIVEN
                </h3>
                <p className="text-sm sm:text-base md:text-lg text-foreground/80 mb-4">
                  Revolutionary event technology for extraordinary experiences
                </p>
                <div className="inline-block px-3 py-1 bg-indigo-500/20 text-indigo-500 text-sm font-semibold rounded-full border border-indigo-500/30">
                  500+ Events
                </div>
              </div>
            </motion.div>

            {/* Card 2 - Expert Team */}
            <motion.div
              className="absolute w-80 sm:w-96 md:w-[500px] p-6 sm:p-8 rounded-2xl sm:rounded-3xl bg-gradient-to-br from-emerald-500/10 to-teal-600/10 backdrop-blur-sm border border-emerald-500/30 shadow-2xl"
              style={{
                y: card2Y,
                z: card2Z,
                rotateZ: card2RotateZ,
                x: card2X,
                opacity: card2Opacity,
                scale: card2Scale,
                transformStyle: "preserve-3d",
              }}
            >
              <div className="text-center">
                <div className="text-6xl sm:text-7xl md:text-8xl mb-4">👥</div>
                <h3 className="text-xl sm:text-2xl md:text-3xl font-bold mb-3 text-emerald-500">
                  EXPERT TEAM
                </h3>
                <p className="text-sm sm:text-base md:text-lg text-foreground/80 mb-4">
                  Seasoned professionals with decades of corporate event
                  excellence
                </p>
                <div className="inline-block px-3 py-1 bg-emerald-500/20 text-emerald-500 text-sm font-semibold rounded-full border border-emerald-500/30">
                  50+ Experts
                </div>
              </div>
            </motion.div>

            {/* Card 3 - Global Reach */}
            <motion.div
              className="absolute w-80 sm:w-96 md:w-[500px] p-6 sm:p-8 rounded-2xl sm:rounded-3xl bg-gradient-to-br from-amber-500/10 to-orange-600/10 backdrop-blur-sm border border-amber-500/30 shadow-2xl"
              style={{
                y: card3Y,
                z: card3Z,
                rotateZ: card3RotateZ,
                x: card3X,
                opacity: card3Opacity,
                scale: card3Scale,
                transformStyle: "preserve-3d",
              }}
            >
              <div className="text-center">
                <div className="text-6xl sm:text-7xl md:text-8xl mb-4">🌍</div>
                <h3 className="text-xl sm:text-2xl md:text-3xl font-bold mb-3 text-amber-500">
                  GLOBAL REACH
                </h3>
                <p className="text-sm sm:text-base md:text-lg text-foreground/80 mb-4">
                  Trusted by Nigeria&apos;s leading corporations and
                  organizations
                </p>
                <div className="inline-block px-3 py-1 bg-amber-500/20 text-amber-500 text-sm font-semibold rounded-full border border-amber-500/30">
                  25+ Countries
                </div>
              </div>
            </motion.div>

            {/* Card 4 - Innovation & Creativity */}
            <motion.div
              className="absolute w-80 sm:w-96 md:w-[500px] p-6 sm:p-8 rounded-2xl sm:rounded-3xl bg-gradient-to-br from-violet-500/10 to-purple-600/10 backdrop-blur-sm border border-violet-500/30 shadow-2xl"
              style={{
                y: card4Y,
                z: card4Z,
                rotateZ: card4RotateZ,
                x: card4X,
                opacity: card4Opacity,
                scale: card4Scale,
                transformStyle: "preserve-3d",
              }}
            >
              <div className="text-center">
                <div className="text-6xl sm:text-7xl md:text-8xl mb-4">💡</div>
                <h3 className="text-xl sm:text-2xl md:text-3xl font-bold mb-3 text-violet-500">
                  INNOVATION & CREATIVITY
                </h3>
                <p className="text-sm sm:text-base md:text-lg text-foreground/80 mb-4">
                  Creative solutions that transform ordinary into extraordinary
                </p>
                <div className="inline-block px-3 py-1 bg-violet-500/20 text-violet-500 text-sm font-semibold rounded-full border border-violet-500/30">
                  100+ Innovations
                </div>
              </div>
            </motion.div>

            {/* Card 5 - Quality & Excellence */}
            <motion.div
              className="absolute w-80 sm:w-96 md:w-[500px] p-6 sm:p-8 rounded-2xl sm:rounded-3xl bg-gradient-to-br from-orange-500/10 to-red-600/10 backdrop-blur-sm border border-orange-500/30 shadow-2xl"
              style={{
                y: card5Y,
                z: card5Z,
                rotateZ: card5RotateZ,
                x: card5X,
                opacity: card5Opacity,
                scale: card5Scale,
                transformStyle: "preserve-3d",
              }}
            >
              <div className="text-center">
                <div className="text-6xl sm:text-7xl md:text-8xl mb-4">⭐</div>
                <h3 className="text-xl sm:text-2xl md:text-3xl font-bold mb-3 text-orange-500">
                  QUALITY & EXCELLENCE
                </h3>
                <p className="text-sm sm:text-base md:text-lg text-foreground/80 mb-4">
                  Uncompromising standards that exceed expectations
                </p>
                <div className="inline-block px-3 py-1 bg-orange-500/20 text-orange-500 text-sm font-semibold rounded-full border border-orange-500/30">
                  98% Satisfaction
                </div>
              </div>
            </motion.div>

            {/* Card 6 - Customer First */}
            <motion.div
              className="absolute w-80 sm:w-96 md:w-[500px] p-6 sm:p-8 rounded-2xl sm:rounded-3xl bg-gradient-to-br from-pink-500/10 to-rose-600/10 backdrop-blur-sm border border-pink-500/30 shadow-2xl"
              style={{
                y: card6Y,
                z: card6Z,
                rotateZ: card6RotateZ,
                x: card6X,
                opacity: card6Opacity,
                scale: card6Scale,
                transformStyle: "preserve-3d",
              }}
            >
              <div className="text-center">
                <div className="text-6xl sm:text-7xl md:text-8xl mb-4">❤️</div>
                <h3 className="text-xl sm:text-2xl md:text-3xl font-bold mb-3 text-pink-500">
                  CUSTOMER FIRST
                </h3>
                <p className="text-sm sm:text-base md:text-lg text-foreground/80 mb-4">
                  Your success is our priority with dedicated support
                </p>
                <div className="inline-block px-3 py-1 bg-pink-500/20 text-pink-500 text-sm font-semibold rounded-full border border-pink-500/30">
                  24/7 Support
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>

        {/* Scroll Instruction */}
        <div className="text-center mt-16 sm:mt-20">
          <motion.p
            className="text-sm sm:text-base text-muted-foreground mb-4"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 1 }}
            viewport={{ once: true }}
          >
            Scroll down to see cards fall from the sky, scroll up to watch them
            return
          </motion.p>
          <motion.div
            className="w-6 h-10 border-2 border-foreground/30 rounded-full flex justify-center mx-auto"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 1.2 }}
            viewport={{ once: true }}
          >
            <motion.div
              className="w-1 h-3 bg-foreground/60 rounded-full mt-2"
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
