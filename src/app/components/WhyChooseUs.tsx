"use client";

import { motion } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function WhyChooseUs() {
  const containerRef = useRef<HTMLDivElement>(null);
  const sectionRef = useRef<HTMLDivElement>(null);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);

  // GSAP ScrollTrigger for buttery smooth horizontal scrolling
  useEffect(() => {
    if (!containerRef.current || !sectionRef.current) return;

    // Register ScrollTrigger plugin
    gsap.registerPlugin(ScrollTrigger);

    // Calculate the total horizontal scroll distance
    const maxScroll =
      containerRef.current.scrollWidth - containerRef.current.clientWidth;

    // Create the horizontal scroll animation
    const horizontalScroll = gsap.to(containerRef.current, {
      scrollLeft: maxScroll,
      ease: "none", // Linear easing for smooth, consistent movement
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top bottom", // Start when top of section hits bottom of viewport
        end: "bottom top", // End when bottom of section hits top of viewport
        scrub: 1, // Smooth scrubbing with 1 second delay
        pin: false, // Don't pin the section
        anticipatePin: 1, // Optimize for smooth scrolling
        onUpdate: () => {
          // Optional: Add any additional logic during scroll
        },
      },
    });

    // Cleanup function
    return () => {
      horizontalScroll.kill();
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  const services = [
    {
      title: "TECHNOLOGY DRIVEN",
      description:
        "Revolutionary event technology for extraordinary experiences",
      gradient: "from-indigo-500 to-purple-600",
      stats: "500+ Events",
    },
    {
      title: "EXPERT TEAM",
      description:
        "Seasoned professionals with decades of corporate event excellence",
      gradient: "from-emerald-500 to-teal-600",
      stats: "50+ Experts",
    },
    {
      title: "WIDE REACH",
      description:
        "Trusted by Nigeria's leading corporations and organizations",
      gradient: "from-amber-500 to-orange-600",
      stats: "30+ Cities",
    },
    {
      title: "INNOVATION & CREATIVITY",
      description:
        "Creative solutions that transform ordinary into extraordinary",
      gradient: "from-violet-500 to-purple-600",
      stats: "100+ Innovations",
    },
    {
      title: "QUALITY & EXCELLENCE",
      description: "Uncompromising standards that exceed expectations",
      gradient: "from-orange-500 to-red-600",
      stats: "98% Satisfaction",
    },
    {
      title: "CUSTOMER FIRST",
      description: "Your success is our priority with dedicated support",
      gradient: "from-pink-500 to-rose-600",
      stats: "24/7 Support",
    },
  ];

  // Mouse drag functionality for desktop (disabled during auto-scroll)
  const handleMouseDown = (e: React.MouseEvent) => {
    // Only allow manual dragging when not in auto-scroll mode
    setIsDragging(true);
    setStartX(e.pageX - (containerRef.current?.offsetLeft || 0));
    setScrollLeft(containerRef.current?.scrollLeft || 0);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging) return;
    e.preventDefault();
    const x = e.pageX - (containerRef.current?.offsetLeft || 0);
    const walk = (x - startX) * 2;
    if (containerRef.current) {
      containerRef.current.scrollLeft = scrollLeft - walk;
    }
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  // Enhanced touch functionality for mobile
  const handleTouchStart = (e: React.TouchEvent) => {
    setIsDragging(true);
    setStartX(e.touches[0].pageX - (containerRef.current?.offsetLeft || 0));
    setScrollLeft(containerRef.current?.scrollLeft || 0);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (!isDragging) return;
    e.preventDefault(); // Prevent default to avoid conflicts
    const x = e.touches[0].pageX - (containerRef.current?.offsetLeft || 0);
    const walk = (x - startX) * 1.5; // Reduced sensitivity for mobile
    if (containerRef.current) {
      containerRef.current.scrollLeft = scrollLeft - walk;
    }
  };

  const handleTouchEnd = () => {
    setIsDragging(false);
  };

  return (
    <section
      ref={sectionRef}
      className="relative bg-background text-foreground overflow-hidden pt-8 sm:pt-12 md:pt-16 lg:pt-20 pb-12 sm:pb-16 md:pb-20 lg:pb-24"
    >
      {/* Content container - removed sticky positioning */}
      <div className="container--wide px-4 sm:px-6 w-full">
        {/* Header */}
        <div className="text-center mb-16 sm:mb-20">
          <motion.h2
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-black mb-6 bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            WHY CHOOSE US?
          </motion.h2>
          <motion.p
            className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold text-foreground/80 max-w-4xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            Discover the compelling reasons that make SQL Events your premier
            choice
          </motion.p>
        </div>

        {/* Horizontal Carousel Container */}
        <div className="relative">
          {/* Scroll Container - Optimized for mobile horizontal scrolling */}
          <div
            ref={containerRef}
            className="flex gap-4 sm:gap-6 md:gap-8 lg:gap-10 overflow-x-auto scrollbar-hide snap-x snap-mandatory pb-6"
            style={{
              cursor: isDragging ? "grabbing" : "default",
              WebkitOverflowScrolling: "touch", // Smooth scrolling on iOS
              scrollBehavior: "smooth",
            }}
            onMouseDown={handleMouseDown}
            onMouseMove={handleMouseMove}
            onMouseUp={handleMouseUp}
            onMouseLeave={handleMouseUp}
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
          >
            {services.map((service, index) => (
              <motion.div
                key={index}
                className="flex-shrink-0 w-[280px] sm:w-80 md:w-[420px] lg:w-[480px] snap-start"
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="group relative overflow-hidden rounded-2xl sm:rounded-3xl bg-gradient-to-br from-muted/50 to-muted/30 backdrop-blur-sm border border-border/30 hover:border-primary/40 transition-all duration-500 hover:shadow-2xl hover:shadow-primary/20 h-full">
                  {/* Background Image Placeholder */}
                  <div className="absolute inset-0 bg-gradient-to-br from-gray-200/20 to-gray-300/20 dark:from-gray-800/20 dark:to-gray-700/20 group-hover:from-primary/10 group-hover:to-secondary/10 transition-all duration-500">
                    {/* Add your background images here */}
                    {/* Example: <img src="/path-to-image.jpg" alt="" className="w-full h-full object-cover opacity-20" /> */}
                  </div>

                  {/* Content */}
                  <div className="relative z-10 p-4 sm:p-6 md:p-8 lg:p-10 h-full flex flex-col justify-between">
                    {/* Top Section */}
                    <div className="mb-3 sm:mb-4 md:mb-6">
                      <motion.h3
                        className={`text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold mb-2 sm:mb-3 bg-gradient-to-r ${service.gradient} bg-clip-text text-transparent`}
                        whileHover={{ scale: 1.05 }}
                        transition={{ duration: 0.3 }}
                      >
                        {service.title}
                      </motion.h3>
                      <motion.p
                        className="text-xs sm:text-sm md:text-base lg:text-lg text-foreground/80 leading-relaxed sm:leading-normal"
                        whileHover={{ x: 5 }}
                        transition={{ duration: 0.3 }}
                      >
                        {service.description}
                      </motion.p>
                    </div>

                    {/* Bottom Section */}
                    <div className="mt-auto">
                      <div className="flex items-center justify-between">
                        <div className="inline-block px-2 sm:px-3 py-1.5 sm:py-2 bg-primary/20 text-primary text-xs sm:text-sm font-semibold rounded-full border border-primary/30">
                          {service.stats}
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Hover Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Scroll Indicator */}
          <div className="text-center mt-8">
            <motion.p
              className="text-sm sm:text-base text-muted-foreground mb-4"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.8 }}
              viewport={{ once: true }}
            >
              Continue scrolling to explore all reasons
            </motion.p>
            <motion.div
              className="w-6 h-10 border-2 border-foreground/30 rounded-full flex justify-center mx-auto"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 1 }}
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
      </div>

      {/* Custom CSS for hiding scrollbar and mobile optimization */}
      <style jsx>{`
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }

        /* Mobile touch scrolling optimization */
        @media (max-width: 768px) {
          .scrollbar-hide {
            -webkit-overflow-scrolling: touch;
            scroll-snap-type: x mandatory;
          }
        }
      `}</style>
    </section>
  );
}
