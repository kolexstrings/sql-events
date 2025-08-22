"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";

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
              const src = iframe.src;
              iframe.src = src + "&autoplay=1&mute=1";
            }
          } else {
            setIsVideoVisible(false);
            // Stop video when it goes out of view
            const iframe = entry.target.querySelector("iframe");
            if (iframe) {
              const src = iframe.src.replace("&autoplay=1&mute=1", "");
              iframe.src = src;
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
        <div className="absolute top-20 left-10 w-72 h-72 bg-gradient-to-br from-primary/10 to-secondary/10 rounded-full blur-3xl"></div>
        <div className="absolute top-40 right-20 w-96 h-96 bg-gradient-to-br from-secondary/10 to-accent/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-1/3 w-80 h-80 bg-gradient-to-br from-accent/10 to-primary/10 rounded-full blur-3xl"></div>
      </div>

      {/* Floating Logo Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-20 md:-top-22 lg:-top-24 left-1/4 w-32 h-32 opacity-20">
          <div className="w-full h-full bg-gradient-to-br from-primary/20 to-secondary/20 rounded-full blur-xl"></div>
        </div>
        <div className="absolute top-1/3 right-1/4 w-24 h-24 opacity-15">
          <div className="w-full h-full bg-gradient-to-br from-secondary/20 to-accent/20 rounded-full blur-lg"></div>
        </div>
        <div className="absolute bottom-1/4 left-1/6 w-28 h-28 opacity-20">
          <div className="w-full h-full bg-gradient-to-br from-accent/20 to-primary/20 rounded-full blur-xl"></div>
        </div>
      </div>

      <div className="container--wide relative z-10">
        {/* Hero Content */}
        <div className="pt-24 md:pt-32 lg:pt-40">
          {/* Headline Section */}
          <div className="text-center mb-16 md:mb-20">
            <h1 className="text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-bold text-foreground mb-8 leading-tight tracking-tight">
              <span className="block">Innovatively</span>
              <span className="block">curating</span>
              <span className="block">exceptional events</span>
            </h1>

            <p className="text-xl md:text-2xl lg:text-3xl text-muted-foreground max-w-5xl mx-auto mb-8 leading-relaxed">
              Experience the future of event management with cutting-edge
              technology, seamless execution, and unforgettable moments.
            </p>

            {/* Value Proposition Badges */}
            <div className="flex flex-wrap justify-center items-center gap-8 mb-12">
              <div className="flex items-center space-x-3">
                <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                <span className="text-lg font-semibold text-foreground">
                  500+ Events Delivered
                </span>
                <div className="w-8 h-px bg-border"></div>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-3 h-3 bg-blue-500 rounded-full animate-pulse"></div>
                <span className="text-lg font-semibold text-foreground">
                  98% Client Satisfaction
                </span>
                <div className="w-8 h-px bg-border"></div>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-3 h-3 bg-purple-500 rounded-full animate-pulse"></div>
                <span className="text-lg font-semibold text-foreground">
                  24/7 Support
                </span>
              </div>
            </div>
          </div>

          {/* Enhanced Description Section */}
          <div className="mb-24 gsap-description-section">
            {/* Video Scroll Animation Section */}
            <div className="video-scroll-section">
              <div
                ref={videoRef}
                className={`video-container ${
                  isVideoVisible ? "animate-in" : "animate-out"
                } ${isVideoExpanded ? "expanded" : ""}`}
              >
                <div className="relative w-full aspect-video rounded-2xl overflow-hidden shadow-2xl">
                  <iframe
                    src="https://www.youtube.com/embed/d77TQupCENc"
                    title="SQL Events Nigeria - Company Video"
                    className="w-full h-full"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  ></iframe>
                </div>
              </div>
            </div>

            {/* CTA Section */}
            <div className="text-center mt-16">
              <div className="space-y-6">
                {/* Enhanced CTA Button */}
                <div className="space-y-4">
                  <button className="group relative px-16 py-6 cta-button text-xl rounded-full shadow-2xl hover:shadow-3xl gsap-cta-button">
                    <span className="relative z-10 flex items-center space-x-3">
                      <span>Get Quote</span>
                      <svg
                        className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1"
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
                    </span>
                  </button>

                  {/* Secondary CTA */}
                  <button className="group relative px-12 py-4 btn-secondary font-semibold text-lg rounded-full">
                    <span className="relative z-10 flex items-center space-x-3">
                      <span>View Portfolio</span>
                      <svg
                        className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                        />
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                        />
                      </svg>
                    </span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
