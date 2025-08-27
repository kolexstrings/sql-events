"use client";

import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import Link from "next/link";
import {
  Users,
  Building2,
  Presentation,
  Cpu,
  Handshake,
  GraduationCap,
  FileText,
  Shield,
  Settings,
} from "lucide-react";

export default function WhatWeDo() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [windowDimensions, setWindowDimensions] = useState({
    width: 0,
    height: 0,
  });
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

    // Set initial window dimensions
    if (typeof window !== "undefined") {
      setWindowDimensions({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    }

    if (typeof window !== "undefined") {
      window.addEventListener("mousemove", handleMouseMove);
      return () => window.removeEventListener("mousemove", handleMouseMove);
    }
  }, []);

  const services = [
    {
      title: "Corporate Events & Conference Management",
      description:
        "Comprehensive event solutions from conferences and AGMs to brand launches and team building activities",
      gradient: "from-blue-500 to-purple-600",
      bgGradient: "from-blue-600/20 to-purple-700/20",
      icon: (
        <Users className="w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20 lg:w-24 lg:h-24 text-white" />
      ),
      iconBg: "from-blue-500 to-purple-600",
      sectionId: "corporate-events",
    },
    {
      title: "Exhibition Management",
      description:
        "Complete exhibition solutions with online booking, payment processing, and comprehensive coordination",
      gradient: "from-orange-500 to-yellow-500",
      bgGradient: "from-orange-600/20 to-yellow-600/20",
      icon: (
        <Presentation className="w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20 lg:w-24 lg:h-24 text-white" />
      ),
      iconBg: "from-orange-500 to-yellow-500",
      sectionId: "exhibition-management",
    },
    {
      title: "Abstract/Paper Management",
      description:
        "Streamlined content management with online submission, peer reviewing, and publishing capabilities",
      gradient: "from-purple-600 to-pink-600",
      bgGradient: "from-purple-700/20 to-pink-700/20",
      icon: (
        <FileText className="w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20 lg:w-24 lg:h-24 text-white" />
      ),
      iconBg: "from-purple-600 to-pink-600",
      sectionId: "abstract-paper-management",
    },
    {
      title: "Access Control Management",
      description:
        "Advanced attendee management using RFID technology, barcode systems, and data management solutions",
      gradient: "from-green-500 to-blue-600",
      bgGradient: "from-green-600/20 to-blue-700/20",
      icon: (
        <Shield className="w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20 lg:w-24 lg:h-24 text-white" />
      ),
      iconBg: "from-green-500 to-blue-600",
      sectionId: "access-control-management",
    },
    {
      title: "Other Services",
      description:
        "Complete event support including logistics, marketing, entertainment, venue management, and consultancy services",
      gradient: "from-red-500 to-pink-500",
      bgGradient: "from-red-600/20 to-pink-700/20",
      icon: (
        <Settings className="w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20 lg:w-24 lg:h-24 text-white" />
      ),
      iconBg: "from-red-500 to-pink-500",
    },
  ];

  return (
    <section
      ref={containerRef}
      className="py-8 sm:py-12 md:py-16 lg:py-20 xl:py-24 bg-background text-foreground relative overflow-hidden min-h-screen"
    >
      {/* Animated Background with Parallax */}
      <motion.div
        className="absolute inset-0 pointer-events-none"
        style={{ y: smoothBackgroundY }}
      >
        {/* Gradient Orbs */}
        <div className="absolute top-1/4 left-1/4 w-48 h-48 sm:w-72 sm:h-72 md:w-96 md:h-96 bg-gradient-to-br from-blue-600/30 to-purple-700/30 rounded-full blur-2xl sm:blur-3xl animate-pulse"></div>
        <div
          className="absolute top-3/4 right-1/4 w-40 h-40 sm:w-64 sm:h-64 md:w-80 md:h-80 bg-gradient-to-br from-orange-600/30 to-yellow-600/30 rounded-full blur-2xl sm:blur-3xl animate-pulse"
          style={{ animationDelay: "1s" }}
        ></div>
        <div
          className="absolute bottom-1/4 left-1/3 w-36 h-36 sm:w-56 sm:h-56 md:w-72 md:h-72 bg-gradient-to-br from-green-600/30 to-blue-700/30 rounded-full blur-2xl sm:blur-3xl animate-pulse"
          style={{ animationDelay: "2s" }}
        ></div>

        {/* Floating Geometric Shapes */}
        <motion.div
          className="absolute top-1/3 right-1/3 w-16 h-16 sm:w-24 sm:h-24 md:w-32 md:h-32 border border-primary/20 rotate-45 animate-spin"
          style={{ y: smoothFloatingY }}
        ></motion.div>
        <motion.div
          className="absolute bottom-1/3 left-1/4 w-12 h-12 sm:w-18 sm:h-18 md:w-24 md:h-24 border border-secondary/20 rounded-full animate-bounce"
          style={{ y: smoothFloatingY, animationDelay: "0.5s" }}
        ></motion.div>
        <motion.div
          className="absolute top-2/3 left-1/2 w-14 h-14 sm:w-20 sm:h-20 md:w-28 md:h-28 border border-accent/20 rotate-12 animate-pulse"
          style={{ y: smoothFloatingY, animationDelay: "1s" }}
        ></motion.div>
      </motion.div>

      <div className="container--wide relative z-10">
        <motion.div
          className="mb-12 sm:mb-16 md:mb-20 text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="flex items-center justify-start mb-8 sm:mb-10 md:mb-12">
            <div className="text-xl sm:text-2xl text-accent font-bold mr-3 sm:mr-4">
              {"{"}
            </div>
            <h2 className="text-sm sm:text-base md:text-lg font-medium text-accent">
              What We Do
            </h2>
            <div className="text-xl sm:text-2xl text-accent font-bold ml-3 sm:ml-4">
              {"}"}
            </div>
          </div>
        </motion.div>

        <motion.div className="space-y-0" style={{ y: smoothCardsY }}>
          {services.map((service, index) => (
            <div key={index}>
              <motion.div
                className="group flex flex-col sm:flex-row items-center gap-4 sm:gap-5 md:gap-6 lg:gap-8 xl:gap-20 p-4 sm:p-4 md:p-6 lg:p-8 xl:p-12 rounded-xl sm:rounded-2xl lg:rounded-3xl hover:bg-muted/50 transition-all duration-500 backdrop-blur-sm"
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
                    (mousePosition.x - windowDimensions.width / 2) * 0.01
                  }deg) rotateX(${
                    (mousePosition.y - windowDimensions.height / 2) * 0.01
                  }deg)`,
                }}
              >
                {/* Enhanced Background with Service-Specific Gradient */}
                <div
                  className={`absolute inset-0 rounded-xl sm:rounded-2xl lg:rounded-3xl bg-gradient-to-br opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none ${service.bgGradient}`}
                ></div>

                {/* Large abstract graphic with enhanced 3D effect - improved mobile scaling */}
                <div className="flex-shrink-0 relative z-10 mb-4 sm:mb-0">
                  <motion.div
                    className={`w-20 h-20 sm:w-24 sm:h-24 md:w-28 md:h-28 lg:w-32 lg:h-32 xl:w-48 xl:h-48 rounded-lg sm:rounded-xl md:rounded-2xl lg:rounded-3xl bg-gradient-to-br ${service.iconBg} flex items-center justify-center group-hover:scale-110 transition-all duration-500 shadow-lg sm:shadow-xl lg:shadow-2xl`}
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
                    <div className="scale-110 sm:scale-100 md:scale-110 lg:scale-125 xl:scale-150 group-hover:scale-125 sm:group-hover:scale-125 md:group-hover:scale-140 lg:group-hover:scale-155 xl:group-hover:scale-175 transition-transform duration-500">
                      {service.icon}
                    </div>
                  </motion.div>
                </div>

                {/* Content with enhanced typography - improved mobile scaling */}
                <div className="flex-1 relative z-10 text-center sm:text-left">
                  <motion.h3
                    className={`text-base sm:text-lg md:text-xl lg:text-2xl xl:text-4xl font-bold mb-2 sm:mb-3 md:mb-4 lg:mb-6 bg-gradient-to-r ${service.gradient} bg-clip-text text-transparent sm:border-l-4 sm:pl-2 md:pl-3 lg:pl-4`}
                    style={{
                      borderLeftColor: `hsl(var(--${
                        service.gradient.split("-")[1]
                      }))`,
                    }}
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.3 }}
                  >
                    {service.title}
                  </motion.h3>
                  <motion.p
                    className="text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl text-muted-foreground leading-relaxed sm:leading-normal mb-3 sm:mb-4 md:mb-6 lg:mb-8 max-w-3xl"
                    whileHover={{ x: 5 }}
                    transition={{ duration: 0.3 }}
                  >
                    {service.description}
                  </motion.p>
                  <Link
                    href={`/services#${service.sectionId}`}
                    className="inline-block px-3 sm:px-4 md:px-6 lg:px-8 py-2 sm:py-2.5 md:py-3 lg:py-4 border border-border hover:border-primary/40 rounded-full text-foreground hover:bg-primary hover:text-primary-foreground transition-all duration-300 font-medium text-xs sm:text-sm md:text-base lg:text-lg relative overflow-hidden group"
                  >
                    <motion.span
                      className="relative z-10"
                      whileHover={{
                        scale: 1.05,
                        y: -2,
                      }}
                      whileTap={{ scale: 0.95 }}
                    >
                      Learn more
                    </motion.span>
                    <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-secondary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-full"></div>
                  </Link>
                </div>
              </motion.div>

              {/* Enhanced separator with animation - improved mobile spacing */}
              {index < services.length - 1 && (
                <motion.div
                  className="border-t border-border/30 my-3 sm:my-4 md:my-6 lg:my-8 relative"
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

      {/* Custom CSS for mobile optimization */}
      <style jsx>{`
        /* Mobile touch optimization */
        @media (max-width: 640px) {
          .group {
            min-height: auto;
          }
        }

        /* Ensure proper spacing on very small screens */
        @media (max-width: 480px) {
          .group {
            padding: 0.75rem;
          }
        }
      `}</style>
    </section>
  );
}
