"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { ArrowRight, Eye } from "lucide-react";

export default function Hero() {
  const videoRef = useRef<HTMLDivElement>(null);
  const [isVideoExpanded, setIsVideoExpanded] = useState(false);
  const [isVideoVisible, setIsVideoVisible] = useState(false);

  useEffect(() => {
    const videoElement = videoRef.current;
    if (!videoElement) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVideoVisible(true);
            // Auto-play video when it comes into view
            const iframe = entry.target.querySelector("iframe");
            if (iframe) {
              // Create a new iframe with autoplay parameters
              const currentSrc = iframe.src;
              const baseUrl = currentSrc.split("?")[0];
              const newSrc = `${baseUrl}?autoplay=1&mute=1&enablejsapi=1&rel=0&modestbranding=1&controls=0&showinfo=0&iv_load_policy=3&disablekb=1&fs=0`;

              // Only update if the src is different to avoid infinite loops
              if (iframe.src !== newSrc) {
                iframe.src = newSrc;
              }
            }
          } else {
            setIsVideoVisible(false);
            // Stop video when it goes out of view by reloading the iframe
            const iframe = entry.target.querySelector("iframe");
            if (iframe) {
              const currentSrc = iframe.src;
              const baseUrl = currentSrc.split("?")[0];
              const stopSrc = `${baseUrl}?rel=0&modestbranding=1`;

              if (iframe.src !== stopSrc) {
                iframe.src = stopSrc;
              }
            }
          }
        });
      },
      {
        threshold: 0.3, // Trigger when 30% of video is visible
        rootMargin: "-50px 0px -50px 0px",
      }
    );

    observer.observe(videoElement);

    return () => {
      observer.disconnect();
    };
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      if (!videoRef.current) return;

      const rect = videoRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      const videoCenter = rect.top + rect.height / 2;
      const windowCenter = windowHeight / 2;

      // Calculate distance from center of viewport
      const distanceFromCenter = Math.abs(videoCenter - windowCenter);
      const maxDistance = windowHeight / 2;

      // Video expands when it's near the center of the viewport
      if (distanceFromCenter < maxDistance * 0.3) {
        setIsVideoExpanded(true);
      } else {
        setIsVideoExpanded(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Initial check

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section className="relative min-h-screen bg-gradient-to-br from-background via-card/50 to-background overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-10 sm:top-20 left-4 sm:left-10 w-48 h-48 sm:w-72 sm:h-72 bg-gradient-to-br from-primary/10 to-secondary/10 rounded-full blur-2xl sm:blur-3xl"></div>
        <div className="absolute top-20 sm:top-40 right-4 sm:right-20 w-64 h-64 sm:w-96 sm:h-96 bg-gradient-to-br from-secondary/10 to-accent/10 rounded-full blur-2xl sm:blur-3xl"></div>
        <div className="absolute bottom-10 sm:bottom-20 left-1/4 sm:left-1/3 w-56 h-56 sm:w-80 sm:h-80 bg-gradient-to-br from-accent/10 to-primary/10 rounded-full blur-2xl sm:blur-3xl"></div>
      </div>

      {/* Animated Geometric Shapes & Particles */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Rotating Rings */}
        <div className="absolute top-1/2 -right-8 sm:-right-20 w-24 h-24 sm:w-40 sm:h-40 border border-primary/20 rounded-full gsap-bg-shape-1 animate-spin-slow"></div>
        <div className="absolute top-1/3 -left-8 sm:-left-16 w-20 h-20 sm:w-32 sm:h-32 border border-secondary/20 rounded-full gsap-bg-shape-2 animate-spin-slow-reverse"></div>
        <div className="absolute bottom-1/3 right-1/4 w-16 h-16 sm:w-28 sm:h-28 border border-accent/20 rounded-full gsap-bg-shape-3 animate-spin-slow"></div>
        <div className="absolute top-1/4 right-1/3 w-12 h-12 sm:w-24 sm:h-24 border border-primary/15 rounded-full gsap-bg-shape-7 animate-spin-slow-reverse"></div>
        <div className="absolute bottom-1/4 -left-6 sm:-left-12 w-20 h-20 sm:w-36 sm:h-36 border border-secondary/15 rounded-full gsap-bg-shape-8 animate-spin-slow"></div>

        {/* Floating Squares */}
        <div className="absolute top-1/4 left-1/4 w-8 h-8 sm:w-16 sm:h-16 border border-primary/15 rotate-45 gsap-bg-shape-4 animate-float"></div>
        <div className="absolute top-2/3 right-1/3 w-6 h-6 sm:w-12 sm:h-12 border border-secondary/15 rotate-45 gsap-bg-shape-5 animate-float-delayed"></div>
        <div className="absolute bottom-1/4 left-1/2 w-10 h-10 sm:w-20 sm:h-20 border border-accent/15 rotate-45 gsap-bg-shape-6 animate-float-slow"></div>
        <div className="absolute top-1/2 left-1/3 w-7 h-7 sm:w-14 sm:h-14 border border-primary/20 rotate-45 gsap-bg-shape-9 animate-float-delayed"></div>
        <div className="absolute bottom-1/3 right-1/6 w-9 h-9 sm:w-18 sm:h-18 border border-accent/20 rotate-45 gsap-bg-shape-10 animate-float-slow"></div>

        {/* Triangles */}
        <div className="absolute top-1/6 right-1/4 w-0 h-0 border-l-[8px] sm:border-l-[12px] border-l-transparent border-r-[8px] sm:border-r-[12px] border-r-transparent border-b-[14px] sm:border-b-[20px] border-b-primary/20 gsap-triangle-1 animate-float-slow"></div>
        <div className="absolute bottom-1/6 left-1/6 w-0 h-0 border-l-[10px] sm:border-l-[16px] border-l-transparent border-r-[10px] sm:border-r-[16px] border-r-transparent border-b-[18px] sm:border-b-[28px] border-b-secondary/20 gsap-triangle-2 animate-float-delayed"></div>
        <div className="absolute top-3/4 right-1/6 w-0 h-0 border-l-[6px] sm:border-l-[10px] border-l-transparent border-r-[6px] sm:border-r-[10px] border-r-transparent border-b-[12px] sm:border-b-[18px] border-b-accent/20 gsap-triangle-3 animate-float"></div>

        {/* Hexagons */}
        <div className="absolute top-1/3 left-1/8 w-4 h-4 sm:w-8 sm:h-8 bg-primary/10 clip-hexagon gsap-hexagon-1 animate-float-slow"></div>
        <div className="absolute bottom-1/3 right-1/8 w-3 h-3 sm:w-6 sm:h-6 bg-secondary/10 clip-hexagon gsap-hexagon-2 animate-float-delayed"></div>

        {/* Animated Dots */}
        <div className="absolute top-1/3 left-1/6 w-1.5 h-1.5 sm:w-2 sm:h-2 bg-primary/40 rounded-full gsap-particle-1 animate-bounce"></div>
        <div className="absolute top-2/3 right-1/4 w-1 h-1 sm:w-1.5 sm:h-1.5 bg-secondary/40 rounded-full gsap-particle-2 animate-bounce-delayed"></div>
        <div className="absolute bottom-1/3 left-2/3 w-0.5 h-0.5 sm:w-1 sm:h-1 bg-accent/40 rounded-full gsap-particle-3 animate-bounce-slow"></div>
        <div className="absolute top-1/6 right-1/6 w-1 h-1 sm:w-1.5 sm:h-1.5 bg-primary/30 rounded-full gsap-particle-4 animate-bounce-delayed"></div>
        <div className="absolute bottom-1/6 right-1/3 w-1.5 h-1.5 sm:w-2.5 sm:h-2.5 bg-secondary/30 rounded-full gsap-particle-5 animate-bounce-slow"></div>
        <div className="absolute top-1/2 left-1/8 w-0.5 h-0.5 sm:w-1 sm:h-1 bg-accent/50 rounded-full gsap-particle-6 animate-bounce"></div>

        {/* Floating Lines */}
        <div className="absolute top-1/2 left-1/6 w-8 h-px sm:w-16 sm:h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent gsap-line-1 animate-float-horizontal"></div>
        <div className="absolute top-1/3 right-1/6 w-10 h-px sm:w-20 sm:h-px bg-gradient-to-r from-transparent via-secondary/30 to-transparent gsap-line-2 animate-float-horizontal-delayed"></div>
        <div className="absolute bottom-1/3 left-1/3 w-6 h-px sm:w-12 sm:h-px bg-gradient-to-r from-transparent via-accent/30 to-transparent gsap-line-3 animate-float-horizontal-slow"></div>
        <div className="absolute top-1/4 left-1/2 w-7 h-px sm:w-14 sm:h-px bg-gradient-to-r from-transparent via-primary/25 to-transparent gsap-line-4 animate-float-horizontal"></div>
        <div className="absolute bottom-1/4 right-1/2 w-9 h-px sm:w-18 sm:h-px bg-gradient-to-r from-transparent via-secondary/25 to-transparent gsap-line-5 animate-float-horizontal-delayed"></div>

        {/* Diagonal Lines */}
        <div className="absolute top-1/4 right-1/4 w-10 h-px sm:w-20 sm:h-px bg-gradient-to-r from-transparent via-accent/20 to-transparent transform rotate-45 gsap-diagonal-1 animate-float-horizontal-slow"></div>
        <div className="absolute bottom-1/4 left-1/4 w-8 h-px sm:w-16 sm:h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent transform -rotate-45 gsap-diagonal-2 animate-float-horizontal"></div>

        {/* Pulsing Circles */}
        <div className="absolute top-1/2 left-1/4 w-2 h-2 sm:w-3 sm:h-3 bg-primary/30 rounded-full gsap-pulse-1 animate-pulse"></div>
        <div className="absolute top-1/4 right-1/4 w-1.5 h-1.5 sm:w-2 sm:h-2 bg-secondary/30 rounded-full gsap-pulse-2 animate-pulse-delayed"></div>
        <div className="absolute bottom-1/4 left-1/3 w-1.5 h-1.5 sm:w-2.5 sm:h-2.5 bg-accent/30 rounded-full gsap-pulse-3 animate-pulse-slow"></div>

        {/* Floating Arrows */}
        <div className="absolute top-1/3 right-1/3 w-4 h-4 sm:w-6 sm:h-6 text-primary/20 gsap-arrow-1 animate-float-slow">
          <svg fill="currentColor" viewBox="0 0 24 24">
            <path d="M7 17l9.2-9.2M17 17V7.8H7.8" />
          </svg>
        </div>
        <div className="absolute bottom-1/3 left-1/4 w-3 h-3 sm:w-5 sm:h-5 text-secondary/20 gsap-arrow-2 animate-float-delayed">
          <svg fill="currentColor" viewBox="0 0 24 24">
            <path d="M17 7l-9.2 9.2M7 7v9.2h9.2" />
          </svg>
        </div>
      </div>

      {/* Floating Logo Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-10 sm:-top-20 md:-top-22 lg:-top-24 left-1/4 w-20 h-20 sm:w-32 sm:h-32 opacity-20">
          <div className="w-full h-full bg-gradient-to-br from-primary/20 to-secondary/20 rounded-full blur-lg sm:blur-xl"></div>
        </div>
        <div className="absolute top-1/3 right-1/4 w-16 h-16 sm:w-24 sm:h-24 opacity-15">
          <div className="w-full h-full bg-gradient-to-br from-secondary/20 to-accent/20 rounded-full blur-md sm:blur-lg"></div>
        </div>
        <div className="absolute bottom-1/4 left-1/6 w-20 h-20 sm:w-28 sm:h-28 opacity-20">
          <div className="w-full h-full bg-gradient-to-br from-accent/20 to-primary/20 rounded-full blur-lg sm:blur-xl"></div>
        </div>
      </div>

      <div className="container--wide relative z-10 px-4 sm:px-6">
        {/* Hero Content */}
        <div className="pt-28 sm:pt-32 md:pt-36 lg:pt-44 xl:pt-48">
          {/* Headline Section */}
          <div className="text-center mb-12 sm:mb-16 md:mb-20">
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl 2xl:text-9xl font-bold text-foreground mb-6 sm:mb-8 leading-tight tracking-tight drop-shadow-[0_0_20px_rgba(74,222,128,0.6)]">
              <span className="block">Innovatively</span>
              <span className="block">curating</span>
              <span className="block">exceptional events</span>
            </h1>

            <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-muted-foreground max-w-4xl sm:max-w-5xl mx-auto mb-6 sm:mb-8 leading-relaxed px-4">
              Experience the future of event management with cutting-edge
              technology, seamless execution, and unforgettable moments.
            </p>

            {/* Value Proposition Badges */}
            <div className="flex flex-col sm:flex-row flex-wrap justify-center items-center gap-4 sm:gap-6 md:gap-8 mb-8 sm:mb-12 px-4">
              <div className="flex items-center space-x-2 sm:space-x-3">
                <div className="w-2 h-2 sm:w-3 sm:h-3 bg-green-500 rounded-full animate-pulse"></div>
                <span className="text-sm sm:text-base md:text-lg font-semibold text-foreground">
                  500+ Events Delivered
                </span>
                <div className="hidden sm:block w-6 sm:w-8 h-px bg-border"></div>
              </div>
              <div className="flex items-center space-x-2 sm:space-x-3">
                <div className="w-2 h-2 sm:w-3 sm:h-3 bg-blue-500 rounded-full animate-pulse"></div>
                <span className="text-sm sm:text-base md:text-lg font-semibold text-foreground">
                  98% Client Satisfaction
                </span>
                <div className="hidden sm:block w-6 sm:w-8 h-px bg-border"></div>
              </div>
              <div className="flex items-center space-x-2 sm:space-x-3">
                <div className="w-2 h-2 sm:w-3 sm:h-3 bg-purple-500 rounded-full animate-pulse"></div>
                <span className="text-sm sm:text-base md:text-lg font-semibold text-foreground">
                  24/7 Support
                </span>
              </div>
            </div>
          </div>

          {/* Enhanced Description Section */}
          <div className="mb-16 sm:mb-20 md:mb-24 gsap-description-section">
            {/* Video Scroll Animation Section */}
            <div className="video-scroll-section px-4 sm:px-6">
              <div
                ref={videoRef}
                className={`video-container ${
                  isVideoVisible ? "animate-in" : "animate-out"
                } ${isVideoExpanded ? "expanded" : ""}`}
              >
                <div className="relative w-full aspect-video rounded-xl sm:rounded-2xl overflow-hidden shadow-2xl bg-black">
                  {/* Custom Video Player */}
                  <div className="relative w-full h-full">
                    <iframe
                      src="https://www.youtube.com/embed/d77TQupCENc?rel=0&modestbranding=1&enablejsapi=1&controls=0&showinfo=0&iv_load_policy=3&disablekb=1&fs=0"
                      title="SQL Events Nigeria - Company Video"
                      className="w-full h-full"
                      frameBorder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                    ></iframe>

                    {/* Custom Video Controls Overlay */}
                    <div className="absolute inset-0 pointer-events-none">
                      {/* Unmute Button */}
                      <button
                        className="absolute bottom-2 sm:bottom-4 right-2 sm:right-4 bg-black/70 hover:bg-black/90 text-white rounded-full p-2 sm:p-3 transition-all duration-300 pointer-events-auto group"
                        onClick={() => {
                          const iframe =
                            videoRef.current?.querySelector("iframe");
                          if (iframe) {
                            const currentSrc = iframe.src;
                            if (currentSrc.includes("mute=1")) {
                              // Unmute
                              const unmutedSrc = currentSrc.replace(
                                "mute=1",
                                "mute=0"
                              );
                              iframe.src = unmutedSrc;
                            } else {
                              // Mute
                              const mutedSrc = currentSrc.replace(
                                "mute=0",
                                "mute=1"
                              );
                              iframe.src = mutedSrc;
                            }
                          }
                        }}
                      >
                        <svg
                          className="w-4 h-4 sm:w-5 sm:h-5 transition-transform duration-300 group-hover:scale-110"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M15.536 8.464a5 5 0 010 7.072m2.828-9.9a9 9 0 010 12.728M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z"
                          />
                        </svg>
                      </button>

                      {/* Play/Pause Indicator */}
                      <div className="absolute top-2 sm:top-4 left-2 sm:left-4 bg-black/70 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        Auto-play enabled
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* CTA Section */}
            <div className="text-center mt-12 sm:mt-16 px-4 sm:px-6">
              <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6 md:space-x-8">
                {/* Enhanced CTA Button */}
                <button className="group relative w-full sm:w-auto px-8 sm:px-12 md:px-16 py-4 sm:py-5 md:py-6 cta-button text-lg sm:text-xl rounded-full shadow-2xl hover:shadow-3xl gsap-cta-button">
                  <span className="relative z-10 flex items-center justify-center sm:justify-start space-x-2 sm:space-x-3">
                    <span>Get Quote</span>
                    <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 transition-transform duration-300 group-hover:translate-x-1" />
                  </span>
                </button>

                {/* Secondary CTA */}
                <button className="group relative w-full sm:w-auto px-8 sm:px-12 md:px-16 py-4 sm:py-5 btn-secondary font-semibold text-lg sm:text-xl rounded-full">
                  <span className="relative z-10 flex items-center justify-center sm:justify-start space-x-2 sm:space-x-3">
                    <span>View Portfolio</span>
                    <Eye className="w-4 h-4 sm:w-5 sm:h-5 transition-transform duration-300 group-hover:translate-x-1" />
                  </span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
