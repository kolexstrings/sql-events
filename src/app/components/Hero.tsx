"use client";

import { useEffect } from "react";
import {
  initHeroAnimations,
  cleanupHeroAnimations,
} from "../lib/heroAnimations";
import { textReveal, cardAnimations } from "../lib/animations";

export default function Hero() {
  useEffect(() => {
    initHeroAnimations();
    textReveal(".text-reveal");
    cardAnimations();

    return () => {
      cleanupHeroAnimations();
    };
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center bg-background text-foreground overflow-hidden">
      {/* Main Hero Content */}
      <div className="container--ultra-wide relative z-10 text-center py-20 mt-20">
        <div className="max-w-none mx-auto">
          {/* Hero Headline with GSAP Animations */}
          <div className="relative mb-12">
            {/* Animated floating elements */}
            <div className="absolute -top-20 left-1/2 transform -translate-x-1/2 w-16 h-16 gsap-floating-element">
              <div className="relative w-full h-full">
                <div className="absolute inset-0 bg-gradient-to-br from-orange-400 to-pink-500 rounded-full opacity-80"></div>
                <div className="absolute inset-0 bg-gradient-to-br from-pink-500 to-purple-500 rounded-full opacity-60 transform rotate-45"></div>
                <div className="absolute inset-0 bg-gradient-to-br from-purple-500 to-orange-400 rounded-full opacity-40 transform rotate-90"></div>
                <div className="absolute inset-0 bg-gradient-to-br from-orange-400 to-pink-500 rounded-full opacity-20 transform rotate-135"></div>
              </div>
            </div>

            <div className="text-left">
              <h1 className="hero-headline text-8xl md:text-9xl lg:text-[12rem] font-black leading-none text-balance font-display">
                <span className="block gsap-text-line" data-text="Passion">
                  Passion
                </span>
                <span
                  className="block gsap-text-line"
                  data-text="and Innovation"
                >
                  and Innovation
                </span>
              </h1>
            </div>

            {/* Animated background shapes */}
            <div className="absolute -top-32 -right-32 w-64 h-64 border border-lime-400/20 rounded-full gsap-bg-shape-1"></div>
            <div className="absolute -bottom-16 -left-16 w-32 h-32 border border-pink-500/20 rotate-45 gsap-bg-shape-2"></div>
            <div className="absolute top-1/2 -right-20 w-40 h-40 border border-purple-500/20 rounded-full gsap-bg-shape-3"></div>
          </div>

          {/* Hero Description in Curly Braces with GSAP */}
          <div className="mb-16 gsap-description-section">
            <div className="flex items-center justify-between">
              {/* Left side - Description with Curly Braces */}
              <div className="flex items-center">
                {/* Left Curly Brace */}
                <div className="text-4xl text-lime-400 font-bold mr-4 gsap-curly-brace">
                  {"{"}
                </div>

                {/* Description Text */}
                <p className="text-base md:text-lg max-w-l leading-relaxed text-muted-foreground font-light gsap-description-text">
                  SQL Events - A wildly innovative events management company
                  built for the modern Nigerian corporate world
                </p>

                {/* Right Curly Brace */}
                <div className="text-4xl text-lime-400 font-bold ml-4 gsap-curly-brace">
                  {"}"}
                </div>
              </div>

              {/* Right side - Get Started Button */}
              <button className="group relative px-12 py-6 bg-lime-400 text-black font-bold text-lg rounded-full hover:bg-lime-300 transition-all duration-300 shadow-2xl hover:shadow-lime-400/25 gsap-cta-button">
                <span className="flex items-center space-x-2">
                  <span>Get Quote</span>
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Side Label - Site of the Day Style */}
      <div className="absolute left-8 top-1/2 transform -translate-y-1/2 text-sm font-medium text-muted-foreground writing-mode-vertical gsap-side-label">
        <div className="text-center">
          <div className="text-accent font-bold">SQL</div>
          <div className="text-xs">Events</div>
        </div>
      </div>

      {/* Floating Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 right-1/4 w-32 h-32 border border-lime-400/20 rounded-full gsap-bg-element-1"></div>
        <div className="absolute bottom-1/3 left-1/4 w-24 h-24 border border-pink-500/20 rotate-45 gsap-bg-element-2"></div>
      </div>
    </section>
  );
}
