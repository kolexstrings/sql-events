"use client";

import { useEffect } from "react";
import {
  initHorizontalScrollSection,
  cleanupHorizontalScroll,
} from "../lib/horizontalScrollAnimations";

export default function HorizontalScrollSection() {
  useEffect(() => {
    // Initialize horizontal scroll after a short delay to ensure DOM is ready
    const timer = setTimeout(() => {
      initHorizontalScrollSection();
    }, 100);

    // Cleanup function
    return () => {
      clearTimeout(timer);
      cleanupHorizontalScroll();
    };
  }, []);

  return (
    <section className="horizontal-scroll-section relative bg-background text-foreground overflow-hidden py-20">
      {/* Enhanced background elements with animations */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-primary/10 rounded-full animate-pulse blur-xl"></div>
        <div className="absolute top-3/4 right-1/3 w-24 h-24 bg-secondary/10 rotate-45 animate-bounce blur-lg"></div>
        <div className="absolute bottom-1/4 left-1/2 w-28 h-28 bg-accent/10 rounded-full animate-spin blur-xl"></div>

        {/* Floating particles */}
        <div className="absolute top-1/3 right-1/4 w-4 h-4 bg-primary/30 rounded-full animate-ping"></div>
        <div
          className="absolute bottom-1/3 left-1/3 w-3 h-3 bg-secondary/40 rounded-full animate-ping"
          style={{ animationDelay: "0.5s" }}
        ></div>
        <div
          className="absolute top-2/3 right-1/3 w-5 h-5 bg-accent/35 rounded-full animate-ping"
          style={{ animationDelay: "1s" }}
        ></div>
      </div>

      <div
        className="horizontal-scroll-container flex items-center"
        style={{ width: "600vw" }}
      >
        {/* Technology-Driven */}
        <div className="horizontal-scroll-item flex-shrink-0 w-screen flex items-center justify-center px-8 relative group">
          {/* Floating tech elements */}
          <div className="absolute inset-0 pointer-events-none opacity-20 group-hover:opacity-40 transition-opacity duration-500">
            <div className="absolute top-1/4 right-1/4 w-16 h-16 border border-primary/30 rounded-full animate-spin"></div>
            <div className="absolute bottom-1/4 left-1/4 w-12 h-12 border border-primary/20 rotate-45 animate-pulse"></div>
          </div>

          <div className="text-center relative z-10">
            <h2 className="text-4xl md:text-6xl lg:text-8xl font-black text-primary mr-6 mb-4 transform hover:scale-105 transition-transform duration-300">
              <span
                className="inline-block transform -skew-x-12 hover:skew-x-0 transition-transform duration-500 mr-2 animate-bounce"
                style={{ animationDelay: "0.1s" }}
              >
                T
              </span>
              <span
                className="inline-block transform skew-x-6 hover:skew-x-0 transition-transform duration-500 mr-2 animate-pulse"
                style={{ animationDelay: "0.3s" }}
              >
                E
              </span>
              <span
                className="inline-block transform -skew-x-8 hover:skew-x-0 transition-transform duration-500 mr-2 animate-bounce"
                style={{ animationDelay: "0.5s" }}
              >
                C
              </span>
              <span
                className="inline-block transform skew-x-10 hover:skew-x-0 transition-transform duration-500 mr-4 animate-pulse"
                style={{ animationDelay: "0.7s" }}
              >
                H
              </span>
              <span
                className="inline-block transform -skew-x-15 hover:skew-x-0 transition-transform duration-500 mr-2 animate-bounce"
                style={{ animationDelay: "0.9s" }}
              >
                D
              </span>
              <span
                className="inline-block transform skew-x-12 hover:skew-x-0 transition-transform duration-500 mr-2 animate-pulse"
                style={{ animationDelay: "1.1s" }}
              >
                R
              </span>
              <span
                className="inline-block transform -skew-x-6 hover:skew-x-0 transition-transform duration-500 mr-2 animate-bounce"
                style={{ animationDelay: "1.3s" }}
              >
                I
              </span>
              <span
                className="inline-block transform skew-x-8 hover:skew-x-0 transition-transform duration-500 mr-2 animate-pulse"
                style={{ animationDelay: "1.5s" }}
              >
                V
              </span>
              <span
                className="inline-block transform -skew-x-10 hover:skew-x-0 transition-transform duration-500 mr-2 animate-bounce"
                style={{ animationDelay: "1.7s" }}
              >
                E
              </span>
              <span
                className="inline-block transform skew-x-12 hover:skew-x-0 transition-transform duration-500 animate-pulse"
                style={{ animationDelay: "1.9s" }}
              >
                N
              </span>
            </h2>
            <p className="text-2xl md:text-4xl lg:text-6xl text-foreground/80 font-bold transform hover:scale-105 transition-all duration-300 hover:text-primary/60">
              <span
                className="inline-block animate-bounce"
                style={{ animationDelay: "0.2s" }}
              >
                Revolutionary
              </span>{" "}
              <span
                className="inline-block animate-pulse"
                style={{ animationDelay: "0.4s" }}
              >
                event
              </span>{" "}
              <span
                className="inline-block animate-bounce"
                style={{ animationDelay: "0.6s" }}
              >
                technology
              </span>{" "}
              <span
                className="inline-block animate-pulse"
                style={{ animationDelay: "0.8s" }}
              >
                for
              </span>{" "}
              <span
                className="inline-block animate-bounce"
                style={{ animationDelay: "1.0s" }}
              >
                extraordinary
              </span>{" "}
              <span
                className="inline-block animate-pulse"
                style={{ animationDelay: "1.2s" }}
              >
                experiences
              </span>
            </p>
          </div>
        </div>

        {/* Experienced Team */}
        <div className="horizontal-scroll-item flex-shrink-0 w-screen flex items-center justify-center px-8 relative group">
          {/* Floating team elements */}
          <div className="absolute inset-0 pointer-events-none opacity-20 group-hover:opacity-40 transition-opacity duration-500">
            <div className="absolute top-1/3 left-1/3 w-20 h-20 border border-secondary/30 rounded-full animate-pulse"></div>
            <div className="absolute bottom-1/3 right-1/3 w-16 h-16 border border-secondary/20 rotate-45 animate-bounce"></div>
          </div>

          <div className="text-center relative z-10">
            <h2 className="text-4xl md:text-6xl lg:text-8xl font-black text-secondary mr-6 mb-4 transform hover:scale-105 transition-transform duration-300">
              <span
                className="inline-block transform -skew-x-15 hover:skew-x-0 transition-transform duration-500 mr-2 animate-pulse"
                style={{ animationDelay: "0.2s" }}
              >
                E
              </span>
              <span
                className="inline-block transform skew-x-8 hover:skew-x-0 transition-transform duration-500 mr-2 animate-bounce"
                style={{ animationDelay: "0.4s" }}
              >
                X
              </span>
              <span
                className="inline-block transform -skew-x-12 hover:skew-x-0 transition-transform duration-500 mr-2 animate-pulse"
                style={{ animationDelay: "0.6s" }}
              >
                P
              </span>
              <span
                className="inline-block transform skew-x-10 hover:skew-x-0 transition-transform duration-500 mr-2 animate-bounce"
                style={{ animationDelay: "0.8s" }}
              >
                E
              </span>
              <span
                className="inline-block transform -skew-x-6 hover:skew-x-0 transition-transform duration-500 mr-2 animate-pulse"
                style={{ animationDelay: "1.0s" }}
              >
                R
              </span>
              <span
                className="inline-block transform skew-x-15 hover:skew-x-0 transition-transform duration-500 mr-4 animate-bounce"
                style={{ animationDelay: "1.2s" }}
              >
                T
              </span>
              <span
                className="inline-block transform -skew-x-8 hover:skew-x-0 transition-transform duration-500 mr-2 animate-pulse"
                style={{ animationDelay: "1.4s" }}
              >
                T
              </span>
              <span
                className="inline-block transform skew-x-12 hover:skew-x-0 transition-transform duration-500 mr-2 animate-bounce"
                style={{ animationDelay: "1.6s" }}
              >
                E
              </span>
              <span
                className="inline-block transform -skew-x-10 hover:skew-x-0 transition-transform duration-500 mr-2 animate-pulse"
                style={{ animationDelay: "1.8s" }}
              >
                A
              </span>
              <span
                className="inline-block transform skew-x-6 hover:skew-x-0 transition-transform duration-500 animate-bounce"
                style={{ animationDelay: "2.0s" }}
              >
                M
              </span>
            </h2>
            <p className="text-2xl md:text-4xl lg:text-6xl text-foreground/80 font-bold transform hover:scale-105 transition-all duration-300 hover:text-secondary/60">
              <span
                className="inline-block animate-pulse"
                style={{ animationDelay: "0.1s" }}
              >
                Seasoned
              </span>{" "}
              <span
                className="inline-block animate-bounce"
                style={{ animationDelay: "0.3s" }}
              >
                professionals
              </span>{" "}
              <span
                className="inline-block animate-pulse"
                style={{ animationDelay: "0.5s" }}
              >
                with
              </span>{" "}
              <span
                className="inline-block animate-bounce"
                style={{ animationDelay: "0.7s" }}
              >
                decades
              </span>{" "}
              <span
                className="inline-block animate-pulse"
                style={{ animationDelay: "0.9s" }}
              >
                of
              </span>{" "}
              <span
                className="inline-block animate-bounce"
                style={{ animationDelay: "1.1s" }}
              >
                corporate
              </span>{" "}
              <span
                className="inline-block animate-pulse"
                style={{ animationDelay: "1.3s" }}
              >
                event
              </span>{" "}
              <span
                className="inline-block animate-bounce"
                style={{ animationDelay: "1.5s" }}
              >
                excellence
              </span>
            </p>
          </div>
        </div>

        {/* Global Reach */}
        <div className="horizontal-scroll-item flex-shrink-0 w-screen flex items-center justify-center px-8 relative group">
          {/* Floating global elements */}
          <div className="absolute inset-0 pointer-events-none opacity-20 group-hover:opacity-40 transition-opacity duration-500">
            <div className="absolute top-1/4 right-1/4 w-24 h-24 border border-accent/30 rounded-full animate-spin"></div>
            <div className="absolute bottom-1/4 left-1/4 w-18 h-18 border border-accent/20 rotate-45 animate-pulse"></div>
          </div>

          <div className="text-center relative z-10">
            <h2 className="text-4xl md:text-6xl lg:text-8xl font-black text-accent mr-6 mb-4 transform hover:scale-105 transition-transform duration-300">
              <span
                className="inline-block transform -skew-x-10 hover:skew-x-0 transition-transform duration-500 mr-2 animate-bounce"
                style={{ animationDelay: "0.3s" }}
              >
                G
              </span>
              <span
                className="inline-block transform skew-x-12 hover:skew-x-0 transition-transform duration-500 mr-2 animate-pulse"
                style={{ animationDelay: "0.5s" }}
              >
                L
              </span>
              <span
                className="inline-block transform -skew-x-8 hover:skew-x-0 transition-transform duration-500 mr-2 animate-bounce"
                style={{ animationDelay: "0.7s" }}
              >
                O
              </span>
              <span
                className="inline-block transform skew-x-15 hover:skew-x-0 transition-transform duration-500 mr-2 animate-pulse"
                style={{ animationDelay: "0.9s" }}
              >
                B
              </span>
              <span
                className="inline-block transform -skew-x-6 hover:skew-x-0 transition-transform duration-500 mr-2 animate-bounce"
                style={{ animationDelay: "1.1s" }}
              >
                A
              </span>
              <span
                className="inline-block transform skew-x-10 hover:skew-x-0 transition-transform duration-500 mr-4 animate-pulse"
                style={{ animationDelay: "1.3s" }}
              >
                L
              </span>
              <span
                className="inline-block transform -skew-x-12 hover:skew-x-0 transition-transform duration-500 mr-2 animate-bounce"
                style={{ animationDelay: "1.5s" }}
              >
                R
              </span>
              <span
                className="inline-block transform skew-x-8 hover:skew-x-0 transition-transform duration-500 mr-2 animate-pulse"
                style={{ animationDelay: "1.7s" }}
              >
                E
              </span>
              <span
                className="inline-block transform -skew-x-15 hover:skew-x-0 transition-transform duration-500 mr-2 animate-bounce"
                style={{ animationDelay: "1.9s" }}
              >
                A
              </span>
              <span
                className="inline-block transform skew-x-6 hover:skew-x-0 transition-transform duration-500 animate-pulse"
                style={{ animationDelay: "2.1s" }}
              >
                H
              </span>
            </h2>
            <p className="text-2xl md:text-4xl lg:text-6xl text-foreground/80 font-bold transform hover:scale-105 transition-all duration-300 hover:text-accent/60">
              <span
                className="inline-block animate-pulse"
                style={{ animationDelay: "0.2s" }}
              >
                Trusted
              </span>{" "}
              <span
                className="inline-block animate-bounce"
                style={{ animationDelay: "0.4s" }}
              >
                by
              </span>{" "}
              <span
                className="inline-block animate-pulse"
                style={{ animationDelay: "0.6s" }}
              >
                Nigeria&apos;s
              </span>{" "}
              <span
                className="inline-block animate-bounce"
                style={{ animationDelay: "0.8s" }}
              >
                leading
              </span>{" "}
              <span
                className="inline-block animate-pulse"
                style={{ animationDelay: "1.0s" }}
              >
                corporations
              </span>{" "}
              <span
                className="inline-block animate-bounce"
                style={{ animationDelay: "1.2s" }}
              >
                and
              </span>{" "}
              <span
                className="inline-block animate-pulse"
                style={{ animationDelay: "1.4s" }}
              >
                organizations
              </span>
            </p>
          </div>
        </div>

        {/* Innovation & Creativity */}
        <div className="horizontal-scroll-item flex-shrink-0 w-screen flex items-center justify-center px-8 relative group">
          {/* Floating innovation elements */}
          <div className="absolute inset-0 pointer-events-none opacity-20 group-hover:opacity-40 transition-opacity duration-500">
            <div className="absolute top-1/3 left-1/3 w-16 h-16 border border-secondary/30 rounded-full animate-bounce"></div>
            <div className="absolute bottom-1/3 right-1/3 w-20 h-20 border border-secondary/20 rotate-45 animate-pulse"></div>
          </div>

          <div className="text-center relative z-10">
            <h2 className="text-4xl md:text-6xl lg:text-8xl font-black text-secondary mr-6 mb-4 transform hover:scale-105 transition-transform duration-300">
              <span
                className="inline-block transform -skew-x-12 hover:skew-x-0 transition-transform duration-500 mr-2 animate-pulse"
                style={{ animationDelay: "0.1s" }}
              >
                I
              </span>
              <span
                className="inline-block transform skew-x-8 hover:skew-x-0 transition-transform duration-500 mr-2 animate-bounce"
                style={{ animationDelay: "0.3s" }}
              >
                N
              </span>
              <span
                className="inline-block transform -skew-x-15 hover:skew-x-0 transition-transform duration-500 mr-2 animate-pulse"
                style={{ animationDelay: "0.5s" }}
              >
                N
              </span>
              <span
                className="inline-block transform skew-x-10 hover:skew-x-0 transition-transform duration-500 mr-2 animate-bounce"
                style={{ animationDelay: "0.7s" }}
              >
                O
              </span>
              <span
                className="inline-block transform -skew-x-6 hover:skew-x-0 transition-transform duration-500 mr-2 animate-pulse"
                style={{ animationDelay: "0.9s" }}
              >
                V
              </span>
              <span
                className="inline-block transform skew-x-12 hover:skew-x-0 transition-transform duration-500 mr-2 animate-bounce"
                style={{ animationDelay: "1.1s" }}
              >
                A
              </span>
              <span
                className="inline-block transform -skew-x-8 hover:skew-x-0 transition-transform duration-500 mr-2 animate-pulse"
                style={{ animationDelay: "1.3s" }}
              >
                T
              </span>
              <span
                className="inline-block transform skew-x-15 hover:skew-x-0 transition-transform duration-500 mr-2 animate-bounce"
                style={{ animationDelay: "1.5s" }}
              >
                I
              </span>
              <span
                className="inline-block transform -skew-x-10 hover:skew-x-0 transition-transform duration-500 mr-2 animate-pulse"
                style={{ animationDelay: "1.7s" }}
              >
                O
              </span>
              <span
                className="inline-block transform skew-x-6 hover:skew-x-0 transition-transform duration-500 mr-2 animate-bounce"
                style={{ animationDelay: "1.9s" }}
              >
                N
              </span>
              <span
                className="inline-block transform -skew-x-12 hover:skew-x-0 transition-transform duration-500 mr-4 animate-pulse"
                style={{ animationDelay: "2.1s" }}
              >
                &
              </span>
              <span
                className="inline-block transform skew-x-8 hover:skew-x-0 transition-transform duration-500 mr-2 animate-bounce"
                style={{ animationDelay: "2.3s" }}
              >
                C
              </span>
              <span
                className="inline-block transform -skew-x-15 hover:skew-x-0 transition-transform duration-500 mr-2 animate-pulse"
                style={{ animationDelay: "2.5s" }}
              >
                R
              </span>
              <span
                className="inline-block transform skew-x-10 hover:skew-x-0 transition-transform duration-500 mr-2 animate-bounce"
                style={{ animationDelay: "2.7s" }}
              >
                E
              </span>
              <span
                className="inline-block transform -skew-x-6 hover:skew-x-0 transition-transform duration-500 mr-2 animate-pulse"
                style={{ animationDelay: "2.9s" }}
              >
                A
              </span>
              <span
                className="inline-block transform skew-x-12 hover:skew-x-0 transition-transform duration-500 mr-2 animate-bounce"
                style={{ animationDelay: "3.1s" }}
              >
                T
              </span>
              <span
                className="inline-block transform -skew-x-8 hover:skew-x-0 transition-transform duration-500 mr-2 animate-pulse"
                style={{ animationDelay: "3.3s" }}
              >
                I
              </span>
              <span
                className="inline-block transform skew-x-15 hover:skew-x-0 transition-transform duration-500 mr-2 animate-bounce"
                style={{ animationDelay: "3.5s" }}
              >
                V
              </span>
              <span
                className="inline-block transform -skew-x-10 hover:skew-x-0 transition-transform duration-500 mr-2 animate-pulse"
                style={{ animationDelay: "3.7s" }}
              >
                I
              </span>
              <span
                className="inline-block transform skew-x-6 hover:skew-x-0 transition-transform duration-500 animate-bounce"
                style={{ animationDelay: "3.9s" }}
              >
                Y
              </span>
            </h2>
            <p className="text-2xl md:text-4xl lg:text-6xl text-foreground/80 font-bold transform hover:scale-105 transition-all duration-300 hover:text-secondary/60">
              <span
                className="inline-block animate-bounce"
                style={{ animationDelay: "0.1s" }}
              >
                Creative
              </span>{" "}
              <span
                className="inline-block animate-pulse"
                style={{ animationDelay: "0.3s" }}
              >
                solutions
              </span>{" "}
              <span
                className="inline-block animate-bounce"
                style={{ animationDelay: "0.5s" }}
              >
                that
              </span>{" "}
              <span
                className="inline-block animate-pulse"
                style={{ animationDelay: "0.7s" }}
              >
                transform
              </span>{" "}
              <span
                className="inline-block animate-bounce"
                style={{ animationDelay: "0.9s" }}
              >
                ordinary
              </span>{" "}
              <span
                className="inline-block animate-pulse"
                style={{ animationDelay: "1.1s" }}
              >
                into
              </span>{" "}
              <span
                className="inline-block animate-bounce"
                style={{ animationDelay: "1.3s" }}
              >
                extraordinary
              </span>
            </p>
          </div>
        </div>

        {/* Quality & Excellence */}
        <div className="horizontal-scroll-item flex-shrink-0 w-screen flex items-center justify-center px-8 relative group">
          {/* Floating quality elements */}
          <div className="absolute inset-0 pointer-events-none opacity-20 group-hover:opacity-40 transition-opacity duration-500">
            <div className="absolute top-1/3 left-1/3 w-18 h-18 border border-accent/30 rounded-full animate-pulse"></div>
            <div className="absolute bottom-1/3 right-1/3 w-22 h-22 border border-accent/20 rotate-45 animate-bounce"></div>
          </div>

          <div className="text-center relative z-10">
            <h2 className="text-4xl md:text-6xl lg:text-8xl font-black text-accent mr-6 mb-4 transform hover:scale-105 transition-transform duration-300">
              <span
                className="inline-block transform -skew-x-15 hover:skew-x-0 transition-transform duration-500 mr-2 animate-bounce"
                style={{ animationDelay: "0.2s" }}
              >
                Q
              </span>
              <span
                className="inline-block transform skew-x-8 hover:skew-x-0 transition-transform duration-500 mr-2 animate-pulse"
                style={{ animationDelay: "0.4s" }}
              >
                U
              </span>
              <span
                className="inline-block transform -skew-x-12 hover:skew-x-0 transition-transform duration-500 mr-2 animate-bounce"
                style={{ animationDelay: "0.6s" }}
              >
                A
              </span>
              <span
                className="inline-block transform skew-x-10 hover:skew-x-0 transition-transform duration-500 mr-2 animate-pulse"
                style={{ animationDelay: "0.8s" }}
              >
                L
              </span>
              <span
                className="inline-block transform -skew-x-6 hover:skew-x-0 transition-transform duration-500 mr-2 animate-bounce"
                style={{ animationDelay: "1.0s" }}
              >
                I
              </span>
              <span
                className="inline-block transform skew-x-12 hover:skew-x-0 transition-transform duration-500 mr-2 animate-pulse"
                style={{ animationDelay: "1.2s" }}
              >
                T
              </span>
              <span
                className="inline-block transform -skew-x-8 hover:skew-x-0 transition-transform duration-500 mr-2 animate-bounce"
                style={{ animationDelay: "1.4s" }}
              >
                Y
              </span>
              <span
                className="inline-block transform skew-x-15 hover:skew-x-0 transition-transform duration-500 mr-4 animate-pulse"
                style={{ animationDelay: "1.6s" }}
              >
                &
              </span>
              <span
                className="inline-block transform -skew-x-10 hover:skew-x-0 transition-transform duration-500 mr-2 animate-bounce"
                style={{ animationDelay: "1.8s" }}
              >
                E
              </span>
              <span
                className="inline-block transform skew-x-6 hover:skew-x-0 transition-transform duration-500 mr-2 animate-pulse"
                style={{ animationDelay: "2.0s" }}
              >
                X
              </span>
              <span
                className="inline-block transform -skew-x-12 hover:skew-x-0 transition-transform duration-500 mr-2 animate-bounce"
                style={{ animationDelay: "2.2s" }}
              >
                C
              </span>
              <span
                className="inline-block transform skew-x-8 hover:skew-x-0 transition-transform duration-500 mr-2 animate-pulse"
                style={{ animationDelay: "2.4s" }}
              >
                E
              </span>
              <span
                className="inline-block transform -skew-x-15 hover:skew-x-0 transition-transform duration-500 mr-2 animate-bounce"
                style={{ animationDelay: "2.6s" }}
              >
                L
              </span>
              <span
                className="inline-block transform skew-x-10 hover:skew-x-0 transition-transform duration-500 mr-2 animate-pulse"
                style={{ animationDelay: "2.8s" }}
              >
                L
              </span>
              <span
                className="inline-block transform -skew-x-6 hover:skew-x-0 transition-transform duration-500 mr-2 animate-bounce"
                style={{ animationDelay: "3.0s" }}
              >
                E
              </span>
              <span
                className="inline-block transform skew-x-12 hover:skew-x-0 transition-transform duration-500 mr-2 animate-pulse"
                style={{ animationDelay: "3.2s" }}
              >
                N
              </span>
              <span
                className="inline-block transform -skew-x-8 hover:skew-x-0 transition-transform duration-500 mr-2 animate-bounce"
                style={{ animationDelay: "3.4s" }}
              >
                C
              </span>
              <span
                className="inline-block transform skew-x-15 hover:skew-x-0 transition-transform duration-500 animate-pulse"
                style={{ animationDelay: "3.6s" }}
              >
                E
              </span>
            </h2>
            <p className="text-2xl md:text-4xl lg:text-6xl text-foreground/80 font-bold transform hover:scale-105 transition-all duration-300 hover:text-accent/60">
              <span
                className="inline-block animate-pulse"
                style={{ animationDelay: "0.2s" }}
              >
                Uncompromising
              </span>{" "}
              <span
                className="inline-block animate-bounce"
                style={{ animationDelay: "0.4s" }}
              >
                standards
              </span>{" "}
              <span
                className="inline-block animate-pulse"
                style={{ animationDelay: "0.6s" }}
              >
                that
              </span>{" "}
              <span
                className="inline-block animate-bounce"
                style={{ animationDelay: "0.8s" }}
              >
                exceed
              </span>{" "}
              <span
                className="inline-block animate-pulse"
                style={{ animationDelay: "1.0s" }}
              >
                expectations
              </span>
            </p>
          </div>
        </div>

        {/* Customer Focus */}
        <div className="horizontal-scroll-item flex-shrink-0 w-screen flex items-center justify-center px-8 relative group">
          {/* Floating customer elements */}
          <div className="absolute inset-0 pointer-events-none opacity-20 group-hover:opacity-40 transition-opacity duration-500">
            <div className="absolute top-1/4 right-1/4 w-20 h-20 border border-primary/30 rounded-full animate-spin"></div>
            <div className="absolute bottom-1/4 left-1/4 w-16 h-16 border border-primary/20 rotate-45 animate-pulse"></div>
          </div>

          <div className="text-center relative z-10">
            <h2 className="text-4xl md:text-6xl lg:text-8xl font-black text-primary mr-6 mb-4 transform hover:scale-105 transition-transform duration-300">
              <span
                className="inline-block transform -skew-x-10 hover:skew-x-0 transition-transform duration-500 mr-2 animate-pulse"
                style={{ animationDelay: "0.1s" }}
              >
                C
              </span>
              <span
                className="inline-block transform skew-x-12 hover:skew-x-0 transition-transform duration-500 mr-2 animate-bounce"
                style={{ animationDelay: "0.3s" }}
              >
                U
              </span>
              <span
                className="inline-block transform -skew-x-8 hover:skew-x-0 transition-transform duration-500 mr-2 animate-pulse"
                style={{ animationDelay: "0.5s" }}
              >
                S
              </span>
              <span
                className="inline-block transform skew-x-15 hover:skew-x-0 transition-transform duration-500 mr-2 animate-bounce"
                style={{ animationDelay: "0.7s" }}
              >
                T
              </span>
              <span
                className="inline-block transform -skew-x-6 hover:skew-x-0 transition-transform duration-500 mr-2 animate-pulse"
                style={{ animationDelay: "0.9s" }}
              >
                O
              </span>
              <span
                className="inline-block transform skew-x-10 hover:skew-x-0 transition-transform duration-500 mr-2 animate-bounce"
                style={{ animationDelay: "1.1s" }}
              >
                M
              </span>
              <span
                className="inline-block transform -skew-x-12 hover:skew-x-0 transition-transform duration-500 mr-2 animate-pulse"
                style={{ animationDelay: "1.3s" }}
              >
                E
              </span>
              <span
                className="inline-block transform skew-x-8 hover:skew-x-0 transition-transform duration-500 mr-2 animate-bounce"
                style={{ animationDelay: "1.5s" }}
              >
                R
              </span>
              <span
                className="inline-block transform -skew-x-15 hover:skew-x-0 transition-transform duration-500 mr-4 animate-pulse"
                style={{ animationDelay: "1.7s" }}
              >
                F
              </span>
              <span
                className="inline-block transform skew-x-6 hover:skew-x-0 transition-transform duration-500 mr-2 animate-bounce"
                style={{ animationDelay: "1.9s" }}
              >
                I
              </span>
              <span
                className="inline-block transform -skew-x-10 hover:skew-x-0 transition-transform duration-500 mr-2 animate-pulse"
                style={{ animationDelay: "2.1s" }}
              >
                R
              </span>
              <span
                className="inline-block transform skew-x-12 hover:skew-x-0 transition-transform duration-500 mr-2 animate-bounce"
                style={{ animationDelay: "2.3s" }}
              >
                S
              </span>
              <span
                className="inline-block transform -skew-x-8 hover:skew-x-0 transition-transform duration-500 animate-pulse"
                style={{ animationDelay: "2.5s" }}
              >
                T
              </span>
            </h2>
            <p className="text-2xl md:text-4xl lg:text-6xl text-foreground/80 font-bold transform hover:scale-105 transition-all duration-300 hover:text-primary/60">
              <span
                className="inline-block animate-bounce"
                style={{ animationDelay: "0.1s" }}
              >
                Your
              </span>{" "}
              <span
                className="inline-block animate-pulse"
                style={{ animationDelay: "0.3s" }}
              >
                success
              </span>{" "}
              <span
                className="inline-block animate-bounce"
                style={{ animationDelay: "0.5s" }}
              >
                is
              </span>{" "}
              <span
                className="inline-block animate-pulse"
                style={{ animationDelay: "0.7s" }}
              >
                our
              </span>{" "}
              <span
                className="inline-block animate-bounce"
                style={{ animationDelay: "0.9s" }}
              >
                priority
              </span>{" "}
              <span
                className="inline-block animate-pulse"
                style={{ animationDelay: "1.1s" }}
              >
                with
              </span>{" "}
              <span
                className="inline-block animate-bounce"
                style={{ animationDelay: "1.3s" }}
              >
                dedicated
              </span>{" "}
              <span
                className="inline-block animate-pulse"
                style={{ animationDelay: "1.5s" }}
              >
                support
              </span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
