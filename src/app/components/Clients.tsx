"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";

export default function Clients() {
  const mobileCarouselRef = useRef<HTMLDivElement>(null);
  const mobileCarouselContainerRef = useRef<HTMLDivElement>(null);
  const desktopCarouselRef = useRef<HTMLDivElement>(null);
  const desktopCarouselContainerRef = useRef<HTMLDivElement>(null);

  const partners = [
    {
      name: "SOGON",
      logo: "/clients/SOGON.png",
    },
    {
      name: "CBN",
      logo: "/clients/CBN.png",
    },
    {
      name: "JTB",
      logo: "/clients/jtb.png",
    },
    {
      name: "Rivers State",
      logo: "/clients/RiversState.png",
    },
    {
      name: "NSE",
      logo: "/clients/NSE.png",
    },
    {
      name: "NIOB",
      logo: "/clients/NIOB.png",
    },
    {
      name: "IAWJ",
      logo: "/clients/IAWJ.png",
    },
    {
      name: "ASO",
      logo: "/clients/aso.png",
    },
    {
      name: "COREN",
      logo: "/clients/coren.png",
    },
  ];

  // GSAP-powered smooth continuous carousel for mobile
  useEffect(() => {
    const carousel = mobileCarouselRef.current;
    const container = mobileCarouselContainerRef.current;
    if (!carousel || !container) return;

    // Clone the first few items and append them to the end for seamless loop
    const items = container.children;
    const itemWidth = items[0]?.getBoundingClientRect().width || 140;
    const gap = 32; // space-x-8 = 32px

    // Clone first 3 items and append to end
    for (let i = 0; i < 3; i++) {
      const clone = items[i].cloneNode(true) as HTMLElement;
      container.appendChild(clone);
    }

    // Calculate total scroll distance
    const totalWidth = (partners.length + 3) * (itemWidth + gap) - gap;
    const visibleWidth = carousel.clientWidth;
    const scrollDistance = totalWidth - visibleWidth;

    let animation: gsap.core.Tween;
    let isPaused = false;

    const startContinuousScroll = () => {
      if (isPaused) return;

      // Smooth scroll to the end (cloned items)
      animation = gsap.to(container, {
        x: -scrollDistance,
        duration: 20, // 20 seconds for full scroll
        ease: "none",
        onComplete: () => {
          // Instantly reset to beginning without animation
          gsap.set(container, { x: 0 });
          // Restart the animation
          startContinuousScroll();
        },
      });
    };

    const pauseScroll = () => {
      isPaused = true;
      if (animation) {
        animation.pause();
      }
    };

    const resumeScroll = () => {
      isPaused = false;
      if (animation && animation.paused()) {
        animation.resume();
      } else {
        startContinuousScroll();
      }
    };

    // Start the continuous scroll
    startContinuousScroll();

    // Pause on hover/touch
    carousel.addEventListener("mouseenter", pauseScroll);
    carousel.addEventListener("mouseleave", resumeScroll);
    carousel.addEventListener("touchstart", pauseScroll);
    carousel.addEventListener("touchend", resumeScroll);

    return () => {
      if (animation) {
        animation.kill();
      }
      carousel.removeEventListener("mouseenter", pauseScroll);
      carousel.removeEventListener("mouseleave", resumeScroll);
      carousel.removeEventListener("touchstart", pauseScroll);
      carousel.removeEventListener("touchend", resumeScroll);
    };
  }, [partners.length]);

  // GSAP-powered smooth continuous carousel for desktop
  useEffect(() => {
    const carousel = desktopCarouselRef.current;
    const container = desktopCarouselContainerRef.current;
    if (!carousel || !container) return;

    // Clone the first few items and append them to the end for seamless loop
    const items = container.children;
    const itemWidth = items[0]?.getBoundingClientRect().width || 160;
    const gap = 64; // space-x-16 = 64px

    // Clone first 3 items and append to end
    for (let i = 0; i < 3; i++) {
      const clone = items[i].cloneNode(true) as HTMLElement;
      container.appendChild(clone);
    }

    // Calculate total scroll distance
    const totalWidth = (partners.length + 3) * (itemWidth + gap) - gap;
    const visibleWidth = carousel.clientWidth;
    const scrollDistance = totalWidth - visibleWidth;

    let animation: gsap.core.Tween;
    let isPaused = false;

    const startContinuousScroll = () => {
      if (isPaused) return;

      // Smooth scroll to the end (cloned items)
      animation = gsap.to(container, {
        x: -scrollDistance,
        duration: 25, // 25 seconds for full scroll (slower for desktop)
        ease: "none",
        onComplete: () => {
          // Instantly reset to beginning without animation
          gsap.set(container, { x: 0 });
          // Restart the animation
          startContinuousScroll();
        },
      });
    };

    const pauseScroll = () => {
      isPaused = true;
      if (animation) {
        animation.pause();
      }
    };

    const resumeScroll = () => {
      isPaused = false;
      if (animation && animation.paused()) {
        animation.resume();
      } else {
        startContinuousScroll();
      }
    };

    // Start the continuous scroll
    startContinuousScroll();

    // Pause on hover
    carousel.addEventListener("mouseenter", pauseScroll);
    carousel.addEventListener("mouseleave", resumeScroll);

    return () => {
      if (animation) {
        animation.kill();
      }
      carousel.removeEventListener("mouseenter", pauseScroll);
      carousel.removeEventListener("mouseleave", resumeScroll);
    };
  }, [partners.length]);

  return (
    <section className="py-12 sm:py-16 md:py-20 lg:py-24 bg-card text-card-foreground">
      <div className="container--wide px-4 sm:px-6">
        <motion.div
          className="text-center mb-8 sm:mb-12 md:mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="flex items-center justify-start mb-6 sm:mb-8 md:mb-12">
            <div className="text-lg sm:text-xl md:text-2xl text-accent font-bold mr-2 sm:mr-3 md:mr-4">
              {"{"}
            </div>
            <h2 className="text-base sm:text-lg font-medium text-muted-foreground">
              Trusted By
            </h2>
            <div className="text-lg sm:text-xl md:text-2xl text-accent font-bold ml-2 sm:ml-3 md:ml-4">
              {"}"}
            </div>
          </div>
        </motion.div>

        {/* Mobile Carousel - Edge to Edge with GSAP */}
        <div className="md:hidden -mx-4 sm:-mx-6">
          <div ref={mobileCarouselRef} className="overflow-hidden pb-8">
            <motion.div
              ref={mobileCarouselContainerRef}
              className="flex items-center space-x-8 px-4 sm:px-6 py-6"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              {partners.map((partner, index) => (
                <motion.div
                  key={index}
                  className="flex-shrink-0 min-w-[140px] text-center"
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.05 }}
                >
                  <div className="text-foreground/80 hover:text-foreground transition-colors duration-300">
                    <div className="transform scale-90 sm:scale-100">
                      <Image
                        src={partner.logo}
                        alt={`${partner.name} logo`}
                        width={120}
                        height={60}
                        className="h-12 w-auto object-contain"
                      />
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>

        {/* Desktop Carousel - Edge to Edge with GSAP */}
        <div className="hidden md:block -mx-4 sm:-mx-6 lg:-mx-8 xl:-mx-12">
          <div ref={desktopCarouselRef} className="overflow-hidden py-8">
            <motion.div
              ref={desktopCarouselContainerRef}
              className="flex items-center space-x-16 lg:space-x-20 px-4 sm:px-6 lg:px-8 xl:px-12"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              {partners.map((partner, index) => (
                <motion.div
                  key={index}
                  className="flex-shrink-0"
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.05 }}
                >
                  <div className="text-foreground/80 hover:text-foreground transition-colors duration-300">
                    <Image
                      src={partner.logo}
                      alt={`${partner.name} logo`}
                      width={160}
                      height={80}
                      className="h-16 w-auto object-contain"
                    />
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
