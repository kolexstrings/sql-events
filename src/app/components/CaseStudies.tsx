"use client";

import { useEffect, useState, useRef } from "react";
import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import type { SwiperRef } from "swiper/react";
import type { Swiper as SwiperClass } from "swiper";
import { ChevronLeft, ChevronRight, Pause, Play } from "lucide-react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

export default function CaseStudies() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoplayActive, setIsAutoplayActive] = useState(true);
  const [autoplayProgress, setAutoplayProgress] = useState(0);
  const swiperRef = useRef<SwiperRef>(null);
  const progressIntervalRef = useRef<NodeJS.Timeout | null>(null);

  // Autoplay progress bar effect
  useEffect(() => {
    if (!isAutoplayActive) {
      setAutoplayProgress(0);
      if (progressIntervalRef.current) {
        clearInterval(progressIntervalRef.current);
      }
      return;
    }

    progressIntervalRef.current = setInterval(() => {
      setAutoplayProgress((prev) => {
        if (prev >= 100) {
          return 0;
        }
        return prev + 100 / 50; // 5 seconds = 50 * 100ms intervals
      });
    }, 100);

    return () => {
      if (progressIntervalRef.current) {
        clearInterval(progressIntervalRef.current);
      }
    };
  }, [isAutoplayActive]);

  const handleSlideChange = (swiper: SwiperClass) => {
    setCurrentSlide(swiper.realIndex);
    // Reset progress bar when slide changes
    if (isAutoplayActive) {
      setAutoplayProgress(0);
    }
  };

  const toggleAutoplay = () => {
    if (swiperRef.current?.swiper) {
      if (isAutoplayActive) {
        swiperRef.current.swiper.autoplay.stop();
        setIsAutoplayActive(false);
      } else {
        swiperRef.current.swiper.autoplay.start();
        setIsAutoplayActive(true);
      }
    }
  };

  const goToPrevious = () => {
    if (swiperRef.current?.swiper) {
      swiperRef.current.swiper.slidePrev();
    }
  };

  const goToNext = () => {
    if (swiperRef.current?.swiper) {
      swiperRef.current.swiper.slideNext();
    }
  };

  const goToSlide = (index: number) => {
    if (swiperRef.current?.swiper) {
      swiperRef.current.swiper.slideTo(index);
    }
  };

  const projects = [
    {
      title: "NBA Annual Conference",
      category: "Conference Management",
      year: "2024",
      description:
        "The Nigerian Bar Association's flagship annual conference, featuring over 5,000 legal professionals from across Nigeria and beyond. A three-day event with international speakers, technology integration, and seamless execution.",
      highlights: [
        "5,000+ Attendees",
        "3-Day Conference",
        "International Speakers",
        "Technology Integration",
      ],
      gradient: "from-blue-500/20 to-purple-500/20",
      image: "⚖️",
    },
    {
      title: "COREN Engineering Assembly",
      category: "Corporate Events",
      year: "2024",
      description:
        "Annual assembly of the Council for Regulation of Engineering in Nigeria. A prestigious gathering of engineering professionals with technical presentations, networking, and industry insights.",
      highlights: [
        "Engineering Professionals",
        "Technical Presentations",
        "Industry Networking",
        "Regulatory Updates",
      ],
      gradient: "from-orange-500/20 to-yellow-500/20",
      image: "🏗️",
    },
    {
      title: "Rivers State Education Summit",
      category: "Government Events",
      year: "2024",
      description:
        "A comprehensive education summit bringing together stakeholders from across the education sector in Rivers State. Focused on policy discussion, innovation showcase, and educational advancement.",
      highlights: [
        "Government Officials",
        "Education Leaders",
        "Policy Discussion",
        "Innovation Showcase",
      ],
      gradient: "from-green-500/20 to-blue-500/20",
      image: "🌊",
    },
    {
      title: "Tech Innovation Forum",
      category: "Technology Events",
      year: "2024",
      description:
        "Leading technology conference showcasing innovation in Nigeria. Featured cutting-edge tech demonstrations, startup pitches, and industry networking opportunities.",
      highlights: [
        "Tech Demonstrations",
        "Startup Pitches",
        "Industry Networking",
        "Innovation Showcase",
      ],
      gradient: "from-purple-500/20 to-pink-500/20",
      image: "💻",
    },
  ];

  return (
    <section className="py-12 sm:py-16 md:py-20 lg:py-24 bg-background text-foreground overflow-hidden">
      <div className="container--wide px-4 sm:px-6">
        <motion.div
          className="text-center mb-12 sm:mb-16 md:mb-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="flex items-center justify-center md:justify-start mb-8 sm:mb-10 md:mb-12">
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl 2xl:text-8xl font-bold text-foreground">
              Case Studies
            </h2>
          </div>
        </motion.div>

        {/* Swiper Carousel Container */}
        <div className="relative">
          <Swiper
            ref={swiperRef}
            modules={[Navigation, Pagination, Autoplay]}
            spaceBetween={20}
            slidesPerView={1.1}
            centeredSlides={false}
            loop={true}
            autoplay={{
              delay: 5000,
              disableOnInteraction: false,
              pauseOnMouseEnter: true,
            }}
            breakpoints={{
              640: {
                slidesPerView: 1.2,
                spaceBetween: 24,
              },
              768: {
                slidesPerView: 1.4,
                spaceBetween: 32,
              },
              1024: {
                slidesPerView: 1.6,
                spaceBetween: 40,
              },
              1280: {
                slidesPerView: 1.8,
                spaceBetween: 48,
              },
            }}
            onSlideChange={handleSlideChange}
            className="case-studies-swiper"
          >
            {projects.map((project, index) => (
              <SwiperSlide key={index}>
                <motion.div
                  className={`case-study-card bg-gradient-to-br ${project.gradient} h-[450px] sm:h-[500px] md:h-[550px] lg:h-[600px] rounded-lg sm:rounded-xl md:rounded-2xl p-4 sm:p-6 md:p-8 lg:p-12 flex flex-col justify-between group cursor-pointer relative overflow-hidden`}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -4, scale: 1.01 }}
                >
                  {/* Background Pattern Elements */}
                  <div className="absolute inset-0 opacity-10">
                    <div className="case-study-bg-element absolute top-0 right-0 w-32 h-32 border border-current rounded-full"></div>
                    <div className="case-study-bg-element absolute bottom-0 left-0 w-24 h-24 border border-current rounded-full"></div>
                  </div>

                  {/* Content */}
                  <div className="relative z-10">
                    <div className="flex items-start justify-between mb-4 sm:mb-6">
                      <div className="text-4xl sm:text-5xl md:text-6xl">
                        {project.image}
                      </div>
                      <div className="text-right">
                        <div className="text-lg sm:text-xl md:text-2xl font-bold text-foreground">
                          {project.year}
                        </div>
                        <div className="text-xs sm:text-sm text-muted-foreground bg-background/20 px-2 sm:px-3 py-1 rounded-full">
                          {project.category}
                        </div>
                      </div>
                    </div>

                    <h3 className="text-xl sm:text-2xl md:text-3xl font-bold mb-3 sm:mb-4 text-foreground">
                      {project.title}
                    </h3>

                    <p className="text-sm sm:text-base md:text-lg text-foreground/80 leading-relaxed sm:leading-normal mb-3 sm:mb-4 md:mb-6 max-w-2xl">
                      {project.description}
                    </p>
                  </div>

                  {/* Highlights */}
                  <div className="flex flex-wrap gap-1.5 sm:gap-2 md:gap-3">
                    {project.highlights.map((highlight, highlightIndex) => (
                      <span
                        key={highlightIndex}
                        className="px-2 sm:px-3 md:px-4 py-1 sm:py-1.5 md:py-2 bg-background/20 text-foreground text-xs sm:text-sm rounded-full font-medium"
                      >
                        {highlight}
                      </span>
                    ))}
                  </div>
                </motion.div>
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Navigation Controls */}
          <div className="flex items-center justify-end mt-6 sm:mt-8 space-x-3 sm:space-x-4">
            {/* Previous Button - Hidden on Mobile */}
            <button
              onClick={goToPrevious}
              className="hidden md:flex w-12 h-12 rounded-full bg-background/80 hover:bg-background border border-border/50 hover:border-primary/60 items-center justify-center transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl backdrop-blur-sm"
              aria-label="Previous case study"
            >
              <ChevronLeft className="w-6 h-6 text-foreground" />
            </button>

            {/* Next Button - Hidden on Mobile */}
            <button
              onClick={goToNext}
              className="hidden md:flex w-12 h-12 rounded-full bg-background/80 hover:bg-background border border-border/50 hover:border-primary/60 items-center justify-center transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl backdrop-blur-sm"
              aria-label="Next case study"
            >
              <ChevronRight className="w-6 h-6 text-foreground" />
            </button>

            {/* Dots Indicator */}
            <div className="flex-1 flex justify-center md:justify-end md:ml-4">
              <div className="flex space-x-2">
                {projects.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => goToSlide(index)}
                    className={`w-2 h-2 rounded-full transition-all duration-300 ${
                      index === currentSlide
                        ? "bg-primary w-6"
                        : "bg-muted-foreground/30 hover:bg-muted-foreground/50"
                    }`}
                    aria-label={`Go to case study ${index + 1}`}
                  />
                ))}
              </div>
            </div>

            {/* Autoplay Toggle Button */}
            <button
              onClick={toggleAutoplay}
              className="ml-4 p-2 rounded-full bg-muted/20 hover:bg-muted/40 transition-colors duration-200"
              aria-label={
                isAutoplayActive ? "Pause autoplay" : "Resume autoplay"
              }
            >
              {isAutoplayActive ? (
                <Pause className="w-4 h-4" />
              ) : (
                <Play className="w-4 h-4" />
              )}
            </button>
          </div>

          {/* Autoplay Progress Bar */}
          {isAutoplayActive && (
            <div className="mt-3 sm:mt-4 w-full bg-muted/20 rounded-full h-1 overflow-hidden">
              <div
                className="h-full bg-primary transition-all duration-100 ease-linear relative"
                style={{ width: `${autoplayProgress}%` }}
              >
                <div className="absolute inset-0 bg-white/30 animate-pulse rounded-full" />
              </div>
            </div>
          )}
        </div>

        {/* View All Button */}
        <motion.div
          className="text-center mt-8 sm:mt-10 md:mt-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <a
            href="/portfolio"
            className="inline-flex items-center px-6 sm:px-8 py-3 sm:py-4 bg-primary text-primary-foreground font-semibold rounded-full hover:bg-primary/90 transition-all duration-300 text-base sm:text-lg group"
          >
            View All Case Studies
            <svg
              className="w-4 h-4 sm:w-5 sm:h-5 ml-2 group-hover:translate-x-1 transition-transform duration-300"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              />
            </svg>
          </a>
        </motion.div>
      </div>

      {/* Custom Swiper Styles */}
      <style jsx global>{`
        .case-studies-swiper {
          padding: 10px 0;
        }

        .case-studies-swiper .swiper-slide {
          height: auto;
          display: flex;
          align-items: stretch;
        }

        .case-studies-swiper .swiper-slide-active {
          z-index: 2;
        }

        .case-studies-swiper .swiper-slide-next,
        .case-studies-swiper .swiper-slide-prev {
          z-index: 1;
        }

        /* Ensure no overlap */
        .case-studies-swiper .swiper-slide > div {
          width: 100%;
          box-sizing: border-box;
        }
      `}</style>
    </section>
  );
}
