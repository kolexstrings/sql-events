"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { useKeenSlider } from "../lib/useKeenSlider";

export default function CaseStudies() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const { sliderRef, instanceRef, next, prev, goToSlide, totalSlides } =
    useKeenSlider({
      slidesPerView: 1.2,
      spacing: 32,
      loop: true,
    });

  useEffect(() => {
    if (instanceRef.current) {
      const updateCurrentSlide = () => {
        setCurrentSlide(instanceRef.current?.track.details.rel || 0);
      };

      // Add event listener for slide changes
      const slider = instanceRef.current;
      slider.on("slideChanged", updateCurrentSlide);

      return () => {
        // Cleanup event listener
        if (slider) {
          slider.on("slideChanged", updateCurrentSlide);
        }
      };
    }
  }, [instanceRef]);

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
    <section className="py-24 bg-background text-foreground overflow-hidden">
      <div className="container--wide">
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="flex items-center mb-12">
            <h2 className="text-4xl md:text-5xl lg:text-8xl font-bold text-foreground">
              Case Studies
            </h2>
          </div>
        </motion.div>

        {/* KeenSlider Carousel Container */}
        <div className="relative">
          {/* Carousel */}
          <div ref={sliderRef} className="keen-slider">
            {projects.map((project, index) => (
              <div key={index} className="keen-slider__slide">
                <motion.div
                  className={`case-study-card bg-gradient-to-br ${project.gradient} h-96 rounded-3xl p-12 flex flex-col justify-between group cursor-pointer relative overflow-hidden`}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -8, scale: 1.02 }}
                >
                  {/* Background Pattern Elements */}
                  <div className="absolute inset-0 opacity-10">
                    <div className="case-study-bg-element absolute top-0 right-0 w-32 h-32 border border-current rounded-full"></div>
                    <div className="case-study-bg-element absolute bottom-0 left-0 w-24 h-24 border border-current rounded-full"></div>
                  </div>

                  {/* Content */}
                  <div className="relative z-10">
                    <div className="flex items-start justify-between mb-6">
                      <div className="text-6xl">{project.image}</div>
                      <div className="text-right">
                        <div className="text-2xl font-bold text-foreground">
                          {project.year}
                        </div>
                        <div className="text-sm text-muted-foreground bg-background/20 px-3 py-1 rounded-full">
                          {project.category}
                        </div>
                      </div>
                    </div>

                    <h3 className="text-3xl font-bold mb-4 text-foreground">
                      {project.title}
                    </h3>

                    <p className="text-lg text-foreground/80 leading-relaxed mb-6 max-w-2xl">
                      {project.description}
                    </p>
                  </div>

                  {/* Highlights */}
                  <div className="flex flex-wrap gap-3">
                    {project.highlights.map((highlight, highlightIndex) => (
                      <span
                        key={highlightIndex}
                        className="px-4 py-2 bg-background/20 text-foreground text-sm rounded-full font-medium"
                      >
                        {highlight}
                      </span>
                    ))}
                  </div>
                </motion.div>
              </div>
            ))}
          </div>

          {/* Navigation Controls - Below to the Right */}
          <div className="flex items-center justify-end mt-8 space-x-4">
            {/* Previous Button */}
            <button
              onClick={prev}
              className="keen-slider__arrow"
              aria-label="Previous case study"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 19l-7-7 7-7"
                />
              </svg>
            </button>

            {/* Next Button */}
            <button
              onClick={next}
              className="keen-slider__arrow"
              aria-label="Next case study"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </button>

            {/* Dots Indicator */}
            <div className="keen-slider__dots ml-4">
              {Array.from({ length: totalSlides() }).map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToSlide(index)}
                  className={`keen-slider__dot ${
                    index === currentSlide ? "keen-slider__dot--active" : ""
                  }`}
                  aria-label={`Go to case study ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>

        {/* View All Button */}
        <motion.div
          className="text-center mt-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <a
            href="/portfolio"
            className="inline-flex items-center px-8 py-4 bg-primary text-primary-foreground font-semibold rounded-full hover:bg-primary/90 transition-all duration-300 text-lg group"
          >
            View All Case Studies
            <svg
              className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-300"
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
    </section>
  );
}
