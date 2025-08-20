"use client";

import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { useRef, useEffect, useState } from "react";

export default function WhatWeDo() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  // Parallax transforms for different elements
  const backgroundY = useTransform(scrollYProgress, [0, 1], [0, -300]);
  const cardsY = useTransform(scrollYProgress, [0, 1], [0, -100]);
  const floatingElementsY = useTransform(scrollYProgress, [0, 1], [0, -200]);

  // Spring animations for smooth movement
  const smoothBackgroundY = useSpring(backgroundY, {
    stiffness: 100,
    damping: 30,
  });
  const smoothCardsY = useSpring(cardsY, { stiffness: 100, damping: 30 });
  const smoothFloatingY = useSpring(floatingElementsY, {
    stiffness: 100,
    damping: 30,
  });

  // Mouse movement for 3D tilt effect
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  const services = [
    {
      title: "Conference Management",
      description:
        "Professional conference planning and execution with cutting-edge technology",
      gradient: "from-blue-500 to-purple-600",
      bgGradient: "from-blue-600/20 to-purple-700/20",
      svg: (
        <svg viewBox="0 0 100 100" className="w-24 h-24">
          <path
            d="M20 25C20 20 25 15 30 15H70C75 15 80 20 80 25V75C80 80 75 85 70 85H30C25 85 20 80 20 75V25Z"
            fill="white"
          />
          <path
            d="M25 30C25 27 27 25 30 25H70C73 25 75 27 75 30V70C75 73 73 75 70 75H30C27 75 25 73 25 70V30Z"
            fill="currentColor"
            className="fill-primary"
          />
          <path
            d="M35 40C35 37 37 35 40 35H60C63 35 65 37 65 40V60C65 63 63 65 60 65H40C37 65 35 63 35 60V40Z"
            fill="white"
          />
          <circle
            cx="50"
            cy="50"
            r="3"
            fill="currentColor"
            className="fill-primary"
          />
        </svg>
      ),
    },
    {
      title: "Corporate Events",
      description:
        "AGMs, product launches, and corporate gatherings that make an impact",
      gradient: "from-orange-500 to-yellow-500",
      bgGradient: "from-orange-600/20 to-yellow-600/20",
      svg: (
        <svg viewBox="0 0 100 100" className="w-24 h-24">
          <path
            d="M15 40C15 35 20 30 25 30H75C80 30 85 35 85 40V80C85 85 80 90 75 90H25C20 90 15 85 15 80V40Z"
            fill="white"
          />
          <path
            d="M20 45C20 42 22 40 25 40H75C78 40 80 42 80 45V75C80 78 78 80 75 80H25C22 80 20 78 20 75V45Z"
            fill="currentColor"
            className="fill-primary"
          />
          <path
            d="M30 20C30 15 35 10 40 10H60C65 10 70 15 70 20V35C70 40 65 45 60 45H40C35 45 30 40 30 35V20Z"
            fill="white"
          />
          <circle
            cx="50"
            cy="27"
            r="2"
            fill="currentColor"
            className="fill-primary"
          />
          <circle
            cx="50"
            cy="32"
            r="2"
            fill="currentColor"
            className="fill-primary"
          />
          <circle
            cx="50"
            cy="37"
            r="2"
            fill="currentColor"
            className="fill-primary"
          />
        </svg>
      ),
    },
    {
      title: "Exhibition Management",
      description:
        "Trade shows and exhibitions that showcase your brand effectively",
      gradient: "from-purple-600 to-pink-600",
      bgGradient: "from-purple-700/20 to-pink-700/20",
      svg: (
        <svg viewBox="0 0 100 100" className="w-24 h-24">
          <path
            d="M10 50C10 45 15 40 20 40H80C85 40 90 45 90 50V80C90 85 85 90 80 90H20C15 90 10 85 10 80V50Z"
            fill="white"
          />
          <path
            d="M20 45C20 42 22 40 25 40H75C78 40 80 42 80 45V75C80 78 78 80 75 80H25C22 80 20 78 20 75V45Z"
            fill="currentColor"
            className="fill-primary"
          />
          <path
            d="M30 25C30 20 35 15 40 15H60C65 15 70 20 70 25V35C70 40 65 45 60 45H40C35 45 30 40 30 35V25Z"
            fill="white"
          />
          <circle
            cx="50"
            cy="30"
            r="3"
            fill="currentColor"
            className="fill-primary"
          />
        </svg>
      ),
    },
    {
      title: "Technology Integration",
      description:
        "State-of-the-art tech solutions for seamless event experiences",
      gradient: "from-green-500 to-blue-600",
      bgGradient: "from-green-600/20 to-blue-700/20",
      svg: (
        <svg viewBox="0 0 100 100" className="w-24 h-24">
          <circle cx="50" cy="50" r="40" fill="white" />
          <circle
            cx="50"
            cy="50"
            r="30"
            fill="currentColor"
            className="fill-primary"
          />
          <circle cx="50" cy="50" r="20" fill="white" />
          <path
            d="M50 20C50 18 52 16 54 16H56C58 16 60 18 60 20V30C60 32 58 34 56 34H54C52 34 50 32 50 30V20Z"
            fill="currentColor"
            className="fill-primary"
          />
          <path
            d="M50 70C50 68 52 66 54 66H56C58 66 60 68 60 70V80C60 82 58 84 56 84H54C52 84 50 82 50 80V70Z"
            fill="currentColor"
            className="fill-primary"
          />
          <path
            d="M20 50C18 50 16 52 16 54V56C16 58 18 60 20 60H30C32 60 34 58 34 56V54C34 52 32 50 30 50H20Z"
            fill="currentColor"
            className="fill-primary"
          />
          <path
            d="M70 50C68 50 66 52 66 54V56C66 58 68 60 70 60H80C82 60 84 58 84 56V54C84 52 82 50 80 50H70Z"
            fill="currentColor"
            className="fill-primary"
          />
        </svg>
      ),
    },
    {
      title: "Team Building",
      description:
        "Engaging team building activities that strengthen collaboration",
      gradient: "from-red-500 to-pink-500",
      bgGradient: "from-red-600/20 to-pink-600/20",
      svg: (
        <svg viewBox="0 0 100 100" className="w-24 h-24">
          <circle cx="30" cy="35" r="15" fill="white" />
          <circle cx="70" cy="35" r="15" fill="white" />
          <circle cx="50" cy="65" r="15" fill="white" />
          <path
            d="M30 35C30 35 40 45 50 65"
            stroke="currentColor"
            className="stroke-primary"
            strokeWidth="3"
            strokeLinecap="round"
            fill="none"
          />
          <path
            d="M70 35C70 35 60 45 50 65"
            stroke="currentColor"
            className="stroke-primary"
            strokeWidth="3"
            strokeLinecap="round"
            fill="none"
          />
          <circle
            cx="30"
            cy="35"
            r="5"
            fill="currentColor"
            className="fill-primary"
          />
          <circle
            cx="70"
            cy="35"
            r="5"
            fill="currentColor"
            className="fill-primary"
          />
          <circle
            cx="50"
            cy="65"
            r="5"
            fill="currentColor"
            className="fill-primary"
          />
        </svg>
      ),
    },
    {
      title: "Training & Workshops",
      description: "Professional development sessions that drive growth",
      gradient: "from-indigo-500 to-purple-500",
      bgGradient: "from-indigo-600/20 to-purple-700/20",
      svg: (
        <svg viewBox="0 0 100 100" className="w-24 h-24">
          <path
            d="M15 30C15 25 20 20 25 20H75C80 20 85 25 85 30V80C85 85 80 90 75 90H25C20 90 15 85 15 80V30Z"
            fill="white"
          />
          <path
            d="M20 35C20 32 22 30 25 30H75C78 30 80 32 80 35V75C80 78 78 80 75 80H25C22 80 20 78 20 75V35Z"
            fill="currentColor"
            className="fill-primary"
          />
          <path
            d="M30 40C30 37 32 35 35 35H65C68 35 70 37 70 40V70C70 73 68 75 65 75H35C32 75 30 73 30 70V40Z"
            fill="white"
          />
          <path
            d="M40 45H60M40 55H60M40 65H60"
            stroke="currentColor"
            className="stroke-primary"
            strokeWidth="2"
            strokeLinecap="round"
            fill="none"
          />
        </svg>
      ),
    },
  ];

  return (
    <section
      ref={containerRef}
      className="py-24 bg-background text-foreground relative overflow-hidden min-h-screen"
    >
      {/* Animated Background with Parallax */}
      <motion.div
        className="absolute inset-0 pointer-events-none"
        style={{ y: smoothBackgroundY }}
      >
        {/* Gradient Orbs */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-br from-blue-600/30 to-purple-700/30 rounded-full blur-3xl animate-pulse"></div>
        <div
          className="absolute top-3/4 right-1/4 w-80 h-80 bg-gradient-to-br from-orange-600/30 to-yellow-600/30 rounded-full blur-3xl animate-pulse"
          style={{ animationDelay: "1s" }}
        ></div>
        <div
          className="absolute bottom-1/4 left-1/3 w-72 h-72 bg-gradient-to-br from-green-600/30 to-blue-700/30 rounded-full blur-3xl animate-pulse"
          style={{ animationDelay: "2s" }}
        ></div>

        {/* Floating Geometric Shapes */}
        <motion.div
          className="absolute top-1/3 right-1/3 w-32 h-32 border border-primary/20 rotate-45 animate-spin"
          style={{ y: smoothFloatingY }}
        ></motion.div>
        <motion.div
          className="absolute bottom-1/3 left-1/4 w-24 h-24 border border-secondary/20 rounded-full animate-bounce"
          style={{ y: smoothFloatingY, animationDelay: "0.5s" }}
        ></motion.div>
        <motion.div
          className="absolute top-2/3 left-1/2 w-28 h-28 border border-accent/20 rotate-12 animate-pulse"
          style={{ y: smoothFloatingY, animationDelay: "1s" }}
        ></motion.div>
      </motion.div>

      <div className="container--wide relative z-10">
        <motion.div
          className="mb-20 text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="flex items-center justify-left mb-12">
            <div className="text-2xl text-accent font-bold mr-4">{"{"}</div>
            <h2 className="text-lg font-medium text-muted-foreground">
              What We Do
            </h2>
            <div className="text-2xl text-accent font-bold ml-4">{"}"}</div>
          </div>
        </motion.div>

        <motion.div className="space-y-0" style={{ y: smoothCardsY }}>
          {services.map((service, index) => (
            <div key={index}>
              <motion.div
                className="group flex items-center gap-20 p-12 rounded-3xl hover:bg-muted/50 transition-all duration-500 backdrop-blur-sm"
                initial={{ opacity: 0, x: -60, rotateY: -15 }}
                whileInView={{ opacity: 1, x: 0, rotateY: 0 }}
                transition={{ duration: 0.8, delay: index * 0.15 }}
                viewport={{ once: true }}
                whileHover={{
                  x: 8,
                  rotateY: 5,
                  scale: 1.02,
                  transition: { duration: 0.3 },
                }}
                style={{
                  transformStyle: "preserve-3d",
                  perspective: "1000px",
                  transform: `rotateY(${
                    (mousePosition.x - window.innerWidth / 2) * 0.01
                  }deg) rotateX(${
                    (mousePosition.y - window.innerHeight / 2) * 0.01
                  }deg)`,
                }}
              >
                {/* Enhanced Background with Service-Specific Gradient */}
                <div
                  className="absolute inset-0 rounded-3xl bg-gradient-to-br opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                  style={{
                    background: `linear-gradient(to bottom right, var(--${
                      service.bgGradient.split("-")[1]
                    }-600), var(--${service.bgGradient.split("-")[3]}-700))`,
                  }}
                ></div>

                {/* Large abstract graphic with enhanced 3D effect */}
                <div className="flex-shrink-0 relative z-10">
                  <motion.div
                    className={`w-48 h-48 rounded-3xl bg-gradient-to-br ${service.gradient} flex items-center justify-center group-hover:scale-110 transition-all duration-500 shadow-2xl`}
                    whileHover={{
                      rotateY: 15,
                      rotateX: 5,
                      transition: { duration: 0.3 },
                    }}
                    style={{
                      transformStyle: "preserve-3d",
                      boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)",
                    }}
                  >
                    <div className="text-white scale-150 group-hover:scale-175 transition-transform duration-500">
                      {service.svg}
                    </div>
                  </motion.div>
                </div>

                {/* Content with enhanced typography */}
                <div className="flex-1 relative z-10">
                  <motion.h3
                    className={`text-2xl md:text-3xl lg:text-4xl font-bold mb-6 bg-gradient-to-r ${service.gradient} bg-clip-text text-transparent`}
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.3 }}
                  >
                    {service.title}
                  </motion.h3>
                  <motion.p
                    className="text-2xl md:text-3xl lg:text-4xl font-bold text-foreground leading-relaxed mb-8 max-w-3xl"
                    whileHover={{ x: 5 }}
                    transition={{ duration: 0.3 }}
                  >
                    {service.description}
                  </motion.p>
                  <motion.button
                    className="px-8 py-4 border border-border hover:border-primary/40 rounded-full text-foreground hover:bg-primary hover:text-primary-foreground transition-all duration-300 font-medium text-lg relative overflow-hidden group"
                    whileHover={{
                      scale: 1.05,
                      y: -2,
                    }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <span className="relative z-10">Learn more</span>
                    <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-secondary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-full"></div>
                  </motion.button>
                </div>
              </motion.div>

              {/* Enhanced separator with animation */}
              {index < services.length - 1 && (
                <motion.div
                  className="border-t border-border/30 my-8 relative"
                  initial={{ scaleX: 0 }}
                  whileInView={{ scaleX: 1 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-primary/20 to-transparent h-px"></div>
                </motion.div>
              )}
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
