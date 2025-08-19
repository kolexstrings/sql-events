"use client";

import { useEffect } from "react";
import { motion } from "framer-motion";
import Navigation from "./components/Navigation";
import { initSmoothScroll, textReveal, cardAnimations } from "./lib/animations";
import {
  initHeroAnimations,
  cleanupHeroAnimations,
} from "./lib/heroAnimations";
import {
  initHorizontalScrollSection,
  cleanupHorizontalScroll,
} from "./lib/horizontalScrollAnimations";

export default function Home() {
  useEffect(() => {
    initSmoothScroll();
    initHeroAnimations();
    textReveal(".text-reveal");
    cardAnimations();

    // Initialize horizontal scroll after a short delay to ensure DOM is ready
    const timer = setTimeout(() => {
      initHorizontalScrollSection();
    }, 100);

    // Cleanup function
    return () => {
      clearTimeout(timer);
      cleanupHeroAnimations();
      cleanupHorizontalScroll();
    };
  }, []);

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navigation />

      {/* Hero Section - GSAP Style */}
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

            {/* CTA Button - Bottom Right Style */}
            {/* Removed - now integrated with description text */}
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

      {/* Who We Are Section - GSAP Style */}
      <section className="py-32 bg-card text-card-foreground">
        <div className="container--wide">
          <div className="max-w-none mx-auto">
            {/* Section Title with Curly Braces */}
            <motion.div
              className="mb-20"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center mb-12">
                <div className="text-2xl text-accent font-bold mr-4">{"{"}</div>
                <h2 className="text-lg font-medium text-muted-foreground">
                  Why SQL Events?
                </h2>
                <div className="text-2xl text-accent font-bold ml-4">{"}"}</div>
              </div>
            </motion.div>

            {/* Main Bold Statement */}
            <motion.div
              className="mb-20"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <p className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-card-foreground max-w-6xl">
                SQL Events allows you to{" "}
                <span className="text-primary">effortlessly manage</span>{" "}
                anything corporate events can touch.{" "}
                <span className="text-secondary">Delivering exceptional</span>{" "}
                experiences and{" "}
                <span className="text-accent">unmatched support</span> so you
                can focus on the{" "}
                <span className="text-primary">impactful moments</span>.
              </p>
            </motion.div>

            {/* Supporting Stats */}
            <motion.div
              className="grid md:grid-cols-4 gap-8 pt-16 border-t border-border/20"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <div className="text-center md:text-left">
                <div className="text-3xl font-bold text-primary mb-2">500+</div>
                <div className="text-sm text-muted-foreground">
                  Events Delivered
                </div>
              </div>
              <div className="text-center md:text-left">
                <div className="text-3xl font-bold text-secondary mb-2">
                  50+
                </div>
                <div className="text-sm text-muted-foreground">
                  Corporate Clients
                </div>
              </div>
              <div className="text-center md:text-left">
                <div className="text-3xl font-bold text-accent mb-2">98%</div>
                <div className="text-sm text-muted-foreground">
                  Client Satisfaction
                </div>
              </div>
              <div className="text-center md:text-left">
                <div className="text-3xl font-bold text-brand-orange mb-2">
                  5+
                </div>
                <div className="text-sm text-muted-foreground">
                  Years Experience
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section - Static Title */}
      <section className="py-32 bg-background text-foreground">
        <div className="container--wide">
          <div className="max-w-none mx-auto">
            {/* Static Section Title */}
            <div className="mb-20">
              <div className="flex items-center mb-12">
                <div className="text-2xl text-accent font-bold mr-4">{"{"}</div>
                <h2 className="text-lg font-medium text-muted-foreground">
                  Why Choose SQL Events?
                </h2>
                <div className="text-2xl text-accent font-bold ml-4">{"}"}</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Horizontal Scroll Section */}
      <section className="horizontal-scroll-section relative bg-background text-foreground overflow-hidden">
        {/* Background animated elements */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="horizontal-bg-element absolute top-1/4 left-1/4 w-20 h-20 bg-primary/10 rounded-full"></div>
          <div className="horizontal-bg-element absolute top-3/4 right-1/3 w-16 h-16 bg-secondary/10 rotate-45"></div>
          <div className="horizontal-bg-element absolute bottom-1/4 left-1/2 w-24 h-24 bg-accent/10 rounded-full"></div>
        </div>

        <div
          className="horizontal-scroll-container flex items-center"
          style={{ width: "300vw" }}
        >
          {/* Technology-Driven */}
          <div className="horizontal-scroll-item flex-shrink-0 w-screen h-screen flex items-center justify-center px-8 relative overflow-hidden">
            {/* Massive Background Elements */}
            <div className="absolute inset-0 pointer-events-none">
              <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-primary/20 to-transparent rounded-full blur-3xl"></div>
              <div className="absolute bottom-0 left-0 w-80 h-80 bg-gradient-to-tr from-primary/10 to-transparent rounded-full blur-2xl"></div>
            </div>

            <div className="grid lg:grid-cols-2 gap-20 items-center max-w-7xl w-full relative z-10">
              <div className="item-content space-y-8">
                {/* Oversized Typography */}
                <div className="space-y-4">
                  <div className="text-6xl md:text-8xl lg:text-9xl font-black leading-none">
                    <span className="block text-primary drop-shadow-2xl">
                      TECH
                    </span>
                    <span className="block text-primary/70 -mt-4">DRIVEN</span>
                  </div>
                  <div className="w-32 h-2 bg-gradient-to-r from-primary to-primary/50 rounded-full"></div>
                </div>

                <p className="text-2xl md:text-3xl text-foreground/80 leading-relaxed font-light max-w-xl">
                  <span className="text-primary font-semibold">
                    Revolutionary
                  </span>{" "}
                  event technology that transforms ordinary gatherings into
                  <span className="text-primary font-semibold">
                    {" "}
                    extraordinary experiences
                  </span>
                </p>

                <div className="flex flex-wrap gap-4 pt-6">
                  <div className="px-8 py-4 bg-primary/20 border border-primary/30 rounded-2xl backdrop-blur-sm">
                    <span className="text-primary font-bold text-lg">
                      AI Integration
                    </span>
                  </div>
                  <div className="px-8 py-4 bg-primary/20 border border-primary/30 rounded-2xl backdrop-blur-sm">
                    <span className="text-primary font-bold text-lg">
                      VR/AR Experiences
                    </span>
                  </div>
                  <div className="px-8 py-4 bg-primary/20 border border-primary/30 rounded-2xl backdrop-blur-sm">
                    <span className="text-primary font-bold text-lg">
                      Smart Analytics
                    </span>
                  </div>
                </div>
              </div>

              <div className="flex justify-center items-center">
                <div className="relative w-[500px] h-[500px]">
                  {/* Massive Tech Visualization SVG */}
                  <svg
                    width="500"
                    height="500"
                    viewBox="0 0 500 500"
                    className="absolute inset-0 drop-shadow-2xl"
                  >
                    <defs>
                      <linearGradient
                        id="techGradientLarge"
                        x1="0%"
                        y1="0%"
                        x2="100%"
                        y2="100%"
                      >
                        <stop
                          offset="0%"
                          className="text-primary"
                          stopColor="currentColor"
                          stopOpacity="1"
                        />
                        <stop
                          offset="50%"
                          className="text-primary"
                          stopColor="currentColor"
                          stopOpacity="0.6"
                        />
                        <stop
                          offset="100%"
                          className="text-primary"
                          stopColor="currentColor"
                          stopOpacity="0.2"
                        />
                      </linearGradient>
                      <filter
                        id="techGlow"
                        x="-50%"
                        y="-50%"
                        width="200%"
                        height="200%"
                      >
                        <feGaussianBlur stdDeviation="8" result="coloredBlur" />
                        <feMerge>
                          <feMergeNode in="coloredBlur" />
                          <feMergeNode in="SourceGraphic" />
                        </feMerge>
                      </filter>
                    </defs>
                    <g className="tech-svg-group">
                      {/* Central Massive Core */}
                      <circle
                        cx="250"
                        cy="250"
                        r="60"
                        fill="url(#techGradientLarge)"
                        filter="url(#techGlow)"
                        className="tech-core text-primary"
                      />

                      {/* Large Orbiting Ring 1 */}
                      <g className="tech-orbit-1">
                        <circle
                          cx="250"
                          cy="250"
                          r="150"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="4"
                          opacity="0.4"
                          strokeDasharray="20,10"
                          className="text-primary"
                        />
                        <circle
                          cx="400"
                          cy="250"
                          r="20"
                          fill="currentColor"
                          className="tech-node text-primary"
                        />
                        <circle
                          cx="100"
                          cy="250"
                          r="20"
                          fill="currentColor"
                          className="tech-node text-primary"
                        />
                        <circle
                          cx="250"
                          cy="100"
                          r="20"
                          fill="currentColor"
                          className="tech-node text-primary"
                        />
                        <circle
                          cx="250"
                          cy="400"
                          r="20"
                          fill="currentColor"
                          className="tech-node text-primary"
                        />
                      </g>

                      {/* Large Orbiting Ring 2 */}
                      <g className="tech-orbit-2">
                        <circle
                          cx="250"
                          cy="250"
                          r="220"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          opacity="0.3"
                          strokeDasharray="30,15"
                          className="text-primary"
                        />
                        <rect
                          x="460"
                          y="240"
                          width="20"
                          height="20"
                          fill="currentColor"
                          className="tech-cube text-primary"
                        />
                        <rect
                          x="20"
                          y="240"
                          width="20"
                          height="20"
                          fill="currentColor"
                          className="tech-cube text-primary"
                        />
                        <polygon
                          points="250,30 260,50 240,50"
                          fill="currentColor"
                          className="tech-triangle text-primary"
                        />
                        <polygon
                          points="250,470 260,450 240,450"
                          fill="currentColor"
                          className="tech-triangle text-primary"
                        />
                      </g>

                      {/* Massive Data Streams */}
                      <path
                        d="M250 250 Q350 150 400 250"
                        stroke="currentColor"
                        strokeWidth="6"
                        fill="none"
                        opacity="0.7"
                        className="tech-stream-1 text-primary"
                      />
                      <path
                        d="M250 250 Q150 350 100 250"
                        stroke="currentColor"
                        strokeWidth="6"
                        fill="none"
                        opacity="0.7"
                        className="tech-stream-2 text-primary"
                      />
                      <path
                        d="M250 250 Q350 350 250 400"
                        stroke="currentColor"
                        strokeWidth="6"
                        fill="none"
                        opacity="0.7"
                        className="tech-stream-3 text-primary"
                      />
                      <path
                        d="M250 250 Q150 150 250 100"
                        stroke="currentColor"
                        strokeWidth="6"
                        fill="none"
                        opacity="0.7"
                        className="tech-stream-4 text-primary"
                      />
                    </g>
                  </svg>

                  {/* Large Floating Particles */}
                  <div className="absolute inset-0 tech-particles">
                    <div className="tech-particle w-6 h-6 bg-primary rounded-full absolute top-1/4 left-1/3 opacity-80 shadow-lg shadow-primary/50"></div>
                    <div className="tech-particle w-4 h-4 bg-primary rounded-full absolute top-3/4 right-1/4 opacity-60 shadow-lg shadow-primary/50"></div>
                    <div className="tech-particle w-8 h-8 bg-primary rounded-full absolute bottom-1/3 left-1/4 opacity-90 shadow-xl shadow-primary/60"></div>
                    <div className="tech-particle w-3 h-3 bg-primary rounded-full absolute top-1/2 right-1/3 opacity-70 shadow-lg shadow-primary/50"></div>
                    <div className="tech-particle w-5 h-5 bg-primary rounded-full absolute top-1/6 right-1/2 opacity-75 shadow-lg shadow-primary/50"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Experienced Team */}
          <div className="horizontal-scroll-item flex-shrink-0 w-screen h-screen flex items-center justify-center px-8 relative overflow-hidden">
            {/* Massive Background Elements */}
            <div className="absolute inset-0 pointer-events-none">
              <div className="absolute top-0 left-0 w-96 h-96 bg-gradient-to-br from-secondary/20 to-transparent rounded-full blur-3xl"></div>
              <div className="absolute bottom-0 right-0 w-80 h-80 bg-gradient-to-tl from-secondary/10 to-transparent rounded-full blur-2xl"></div>
            </div>

            <div className="grid lg:grid-cols-2 gap-20 items-center max-w-7xl w-full relative z-10">
              <div className="flex justify-center items-center order-2 lg:order-1">
                <div className="relative w-[500px] h-[500px]">
                  <svg
                    width="500"
                    height="500"
                    viewBox="0 0 500 500"
                    className="absolute inset-0 drop-shadow-2xl"
                  >
                    <defs>
                      <radialGradient
                        id="teamGradient"
                        cx="50%"
                        cy="50%"
                        r="50%"
                      >
                        <stop
                          offset="0%"
                          stopColor="currentColor"
                          stopOpacity="0.8"
                        />
                        <stop
                          offset="100%"
                          stopColor="currentColor"
                          stopOpacity="0.2"
                        />
                      </radialGradient>
                    </defs>
                    <g className="team-svg-group">
                      {/* Team Network */}
                      <g className="team-connections">
                        <line
                          x1="160"
                          y1="100"
                          x2="220"
                          y2="140"
                          stroke="currentColor"
                          strokeWidth="2"
                          opacity="0.4"
                          className="team-line"
                        />
                        <line
                          x1="220"
                          y1="140"
                          x2="220"
                          y2="200"
                          stroke="currentColor"
                          strokeWidth="2"
                          opacity="0.4"
                          className="team-line"
                        />
                        <line
                          x1="220"
                          y1="200"
                          x2="160"
                          y2="240"
                          stroke="currentColor"
                          strokeWidth="2"
                          opacity="0.4"
                          className="team-line"
                        />
                        <line
                          x1="160"
                          y1="240"
                          x2="100"
                          y2="200"
                          stroke="currentColor"
                          strokeWidth="2"
                          opacity="0.4"
                          className="team-line"
                        />
                        <line
                          x1="100"
                          y1="200"
                          x2="100"
                          y2="140"
                          stroke="currentColor"
                          strokeWidth="2"
                          opacity="0.4"
                          className="team-line"
                        />
                        <line
                          x1="100"
                          y1="140"
                          x2="160"
                          y2="100"
                          stroke="currentColor"
                          strokeWidth="2"
                          opacity="0.4"
                          className="team-line"
                        />
                        <line
                          x1="160"
                          y1="170"
                          x2="160"
                          y2="100"
                          stroke="currentColor"
                          strokeWidth="2"
                          opacity="0.6"
                          className="team-line"
                        />
                        <line
                          x1="160"
                          y1="170"
                          x2="220"
                          y2="140"
                          stroke="currentColor"
                          strokeWidth="2"
                          opacity="0.6"
                          className="team-line"
                        />
                        <line
                          x1="160"
                          y1="170"
                          x2="220"
                          y2="200"
                          stroke="currentColor"
                          strokeWidth="2"
                          opacity="0.6"
                          className="team-line"
                        />
                        <line
                          x1="160"
                          y1="170"
                          x2="100"
                          y2="200"
                          stroke="currentColor"
                          strokeWidth="2"
                          opacity="0.6"
                          className="team-line"
                        />
                        <line
                          x1="160"
                          y1="170"
                          x2="100"
                          y2="140"
                          stroke="currentColor"
                          strokeWidth="2"
                          opacity="0.6"
                          className="team-line"
                        />
                      </g>

                      {/* Team Members */}
                      <circle
                        cx="160"
                        cy="170"
                        r="25"
                        fill="url(#teamGradient)"
                        className="team-leader"
                      />
                      <circle
                        cx="160"
                        cy="100"
                        r="18"
                        fill="currentColor"
                        opacity="0.8"
                        className="team-member"
                      />
                      <circle
                        cx="220"
                        cy="140"
                        r="18"
                        fill="currentColor"
                        opacity="0.8"
                        className="team-member"
                      />
                      <circle
                        cx="220"
                        cy="200"
                        r="18"
                        fill="currentColor"
                        opacity="0.8"
                        className="team-member"
                      />
                      <circle
                        cx="160"
                        cy="240"
                        r="18"
                        fill="currentColor"
                        opacity="0.8"
                        className="team-member"
                      />
                      <circle
                        cx="100"
                        cy="200"
                        r="18"
                        fill="currentColor"
                        opacity="0.8"
                        className="team-member"
                      />
                      <circle
                        cx="100"
                        cy="140"
                        r="18"
                        fill="currentColor"
                        opacity="0.8"
                        className="team-member"
                      />

                      {/* Skill Indicators */}
                      <g className="skill-indicators">
                        <rect
                          x="50"
                          y="50"
                          width="30"
                          height="6"
                          rx="3"
                          fill="currentColor"
                          opacity="0.7"
                          className="skill-bar"
                        />
                        <rect
                          x="50"
                          y="60"
                          width="25"
                          height="6"
                          rx="3"
                          fill="currentColor"
                          opacity="0.6"
                          className="skill-bar"
                        />
                        <rect
                          x="50"
                          y="70"
                          width="35"
                          height="6"
                          rx="3"
                          fill="currentColor"
                          opacity="0.8"
                          className="skill-bar"
                        />

                        <rect
                          x="240"
                          y="50"
                          width="30"
                          height="6"
                          rx="3"
                          fill="currentColor"
                          opacity="0.7"
                          className="skill-bar"
                        />
                        <rect
                          x="240"
                          y="60"
                          width="28"
                          height="6"
                          rx="3"
                          fill="currentColor"
                          opacity="0.8"
                          className="skill-bar"
                        />
                        <rect
                          x="240"
                          y="70"
                          width="25"
                          height="6"
                          rx="3"
                          fill="currentColor"
                          opacity="0.6"
                          className="skill-bar"
                        />
                      </g>
                    </g>
                  </svg>

                  {/* Achievement badges */}
                  <div className="absolute inset-0 team-badges">
                    <div className="team-badge absolute top-4 left-4 w-8 h-8 bg-secondary/20 rounded-full flex items-center justify-center">
                      <span className="text-xs font-bold text-secondary">
                        5+
                      </span>
                    </div>
                    <div className="team-badge absolute top-4 right-4 w-8 h-8 bg-secondary/20 rounded-full flex items-center justify-center">
                      <span className="text-xs font-bold text-secondary">
                        ★
                      </span>
                    </div>
                    <div className="team-badge absolute bottom-4 left-1/2 transform -translate-x-1/2 w-10 h-8 bg-secondary/20 rounded-full flex items-center justify-center">
                      <span className="text-xs font-bold text-secondary">
                        PRO
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="item-content order-1 lg:order-2 space-y-8">
                {/* Oversized Typography */}
                <div className="space-y-4">
                  <div className="text-6xl md:text-8xl lg:text-9xl font-black leading-none">
                    <span className="block text-secondary drop-shadow-2xl">
                      EXPERT
                    </span>
                    <span className="block text-secondary/70 -mt-4">TEAM</span>
                  </div>
                  <div className="w-32 h-2 bg-gradient-to-r from-secondary to-secondary/50 rounded-full"></div>
                </div>

                <p className="text-2xl md:text-3xl text-foreground/80 leading-relaxed font-light max-w-xl">
                  A{" "}
                  <span className="text-secondary font-semibold">
                    powerhouse
                  </span>{" "}
                  of seasoned professionals with decades of combined experience
                  in
                  <span className="text-secondary font-semibold">
                    corporate event excellence
                  </span>
                </p>

                <div className="grid grid-cols-2 gap-6 pt-6">
                  <div className="p-6 bg-secondary/20 border border-secondary/30 rounded-2xl backdrop-blur-sm text-center">
                    <div className="text-4xl font-black text-secondary mb-2">
                      15+
                    </div>
                    <div className="text-secondary font-semibold">
                      Years Avg Experience
                    </div>
                  </div>
                  <div className="p-6 bg-secondary/20 border border-secondary/30 rounded-2xl backdrop-blur-sm text-center">
                    <div className="text-4xl font-black text-secondary mb-2">
                      50+
                    </div>
                    <div className="text-secondary font-semibold">
                      Certifications
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Large Clientele Base */}
          <div className="horizontal-scroll-item flex-shrink-0 w-screen h-screen flex items-center justify-center px-8 relative overflow-hidden">
            {/* Massive Background Elements */}
            <div className="absolute inset-0 pointer-events-none">
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-br from-accent/15 to-transparent rounded-full blur-3xl"></div>
              <div className="absolute bottom-0 left-0 w-80 h-80 bg-gradient-to-tr from-accent/10 to-transparent rounded-full blur-2xl"></div>
            </div>

            <div className="grid lg:grid-cols-2 gap-20 items-center max-w-7xl w-full relative z-10">
              <div className="item-content space-y-8">
                {/* Oversized Typography */}
                <div className="space-y-4">
                  <div className="text-6xl md:text-8xl lg:text-9xl font-black leading-none">
                    <span className="block text-accent drop-shadow-2xl">
                      GLOBAL
                    </span>
                    <span className="block text-accent/70 -mt-4">REACH</span>
                  </div>
                  <div className="w-32 h-2 bg-gradient-to-r from-accent to-accent/50 rounded-full"></div>
                </div>

                <p className="text-2xl md:text-3xl text-foreground/80 leading-relaxed font-light max-w-xl">
                  Trusted by{" "}
                  <span className="text-accent font-semibold">
                    Nigeria's leading
                  </span>{" "}
                  corporations, government agencies, and international
                  organizations spanning
                  <span className="text-accent font-semibold">
                    diverse industries
                  </span>
                </p>

                <div className="grid grid-cols-2 gap-6 pt-6">
                  <div className="p-6 bg-accent/20 border border-accent/30 rounded-2xl backdrop-blur-sm text-center">
                    <div className="text-5xl font-black text-accent mb-2">
                      500+
                    </div>
                    <div className="text-accent font-semibold text-lg">
                      Events Delivered
                    </div>
                  </div>
                  <div className="p-6 bg-accent/20 border border-accent/30 rounded-2xl backdrop-blur-sm text-center">
                    <div className="text-5xl font-black text-accent mb-2">
                      150+
                    </div>
                    <div className="text-accent font-semibold text-lg">
                      Active Clients
                    </div>
                  </div>
                  <div className="p-6 bg-accent/20 border border-accent/30 rounded-2xl backdrop-blur-sm text-center">
                    <div className="text-5xl font-black text-accent mb-2">
                      98%
                    </div>
                    <div className="text-accent font-semibold text-lg">
                      Retention Rate
                    </div>
                  </div>
                  <div className="p-6 bg-accent/20 border border-accent/30 rounded-2xl backdrop-blur-sm text-center">
                    <div className="text-5xl font-black text-accent mb-2">
                      25+
                    </div>
                    <div className="text-accent font-semibold text-lg">
                      Industries
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex justify-center items-center">
                <div className="relative w-[500px] h-[500px]">
                  <svg
                    width="500"
                    height="500"
                    viewBox="0 0 500 500"
                    className="absolute inset-0 drop-shadow-2xl"
                  >
                    <defs>
                      <pattern
                        id="clientPattern"
                        patternUnits="userSpaceOnUse"
                        width="20"
                        height="20"
                      >
                        <circle
                          cx="10"
                          cy="10"
                          r="2"
                          fill="currentColor"
                          opacity="0.3"
                        />
                      </pattern>
                    </defs>
                    <g className="client-svg-group">
                      {/* Global Network */}
                      <circle
                        cx="160"
                        cy="160"
                        r="140"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="1"
                        opacity="0.2"
                      />
                      <circle
                        cx="160"
                        cy="160"
                        r="100"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="1"
                        opacity="0.3"
                      />
                      <circle
                        cx="160"
                        cy="160"
                        r="60"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        opacity="0.4"
                      />

                      {/* Client Clusters */}
                      <g className="client-cluster-1">
                        <circle
                          cx="120"
                          cy="120"
                          r="25"
                          fill="currentColor"
                          opacity="0.2"
                          className="client-zone"
                        />
                        <circle
                          cx="115"
                          cy="115"
                          r="4"
                          fill="currentColor"
                          className="client-dot"
                        />
                        <circle
                          cx="125"
                          cy="115"
                          r="4"
                          fill="currentColor"
                          className="client-dot"
                        />
                        <circle
                          cx="120"
                          cy="125"
                          r="4"
                          fill="currentColor"
                          className="client-dot"
                        />
                        <circle
                          cx="115"
                          cy="125"
                          r="4"
                          fill="currentColor"
                          className="client-dot"
                        />
                        <circle
                          cx="125"
                          cy="125"
                          r="4"
                          fill="currentColor"
                          className="client-dot"
                        />
                      </g>

                      <g className="client-cluster-2">
                        <circle
                          cx="200"
                          cy="120"
                          r="25"
                          fill="currentColor"
                          opacity="0.2"
                          className="client-zone"
                        />
                        <circle
                          cx="195"
                          cy="115"
                          r="4"
                          fill="currentColor"
                          className="client-dot"
                        />
                        <circle
                          cx="205"
                          cy="115"
                          r="4"
                          fill="currentColor"
                          className="client-dot"
                        />
                        <circle
                          cx="200"
                          cy="125"
                          r="4"
                          fill="currentColor"
                          className="client-dot"
                        />
                        <circle
                          cx="195"
                          cy="125"
                          r="4"
                          fill="currentColor"
                          className="client-dot"
                        />
                        <circle
                          cx="205"
                          cy="125"
                          r="4"
                          fill="currentColor"
                          className="client-dot"
                        />
                      </g>

                      <g className="client-cluster-3">
                        <circle
                          cx="200"
                          cy="200"
                          r="25"
                          fill="currentColor"
                          opacity="0.2"
                          className="client-zone"
                        />
                        <circle
                          cx="195"
                          cy="195"
                          r="4"
                          fill="currentColor"
                          className="client-dot"
                        />
                        <circle
                          cx="205"
                          cy="195"
                          r="4"
                          fill="currentColor"
                          className="client-dot"
                        />
                        <circle
                          cx="200"
                          cy="205"
                          r="4"
                          fill="currentColor"
                          className="client-dot"
                        />
                        <circle
                          cx="195"
                          cy="205"
                          r="4"
                          fill="currentColor"
                          className="client-dot"
                        />
                        <circle
                          cx="205"
                          cy="205"
                          r="4"
                          fill="currentColor"
                          className="client-dot"
                        />
                      </g>

                      <g className="client-cluster-4">
                        <circle
                          cx="120"
                          cy="200"
                          r="25"
                          fill="currentColor"
                          opacity="0.2"
                          className="client-zone"
                        />
                        <circle
                          cx="115"
                          cy="195"
                          r="4"
                          fill="currentColor"
                          className="client-dot"
                        />
                        <circle
                          cx="125"
                          cy="195"
                          r="4"
                          fill="currentColor"
                          className="client-dot"
                        />
                        <circle
                          cx="120"
                          cy="205"
                          r="4"
                          fill="currentColor"
                          className="client-dot"
                        />
                        <circle
                          cx="115"
                          cy="205"
                          r="4"
                          fill="currentColor"
                          className="client-dot"
                        />
                        <circle
                          cx="125"
                          cy="205"
                          r="4"
                          fill="currentColor"
                          className="client-dot"
                        />
                      </g>

                      {/* Central Hub */}
                      <circle
                        cx="160"
                        cy="160"
                        r="20"
                        fill="currentColor"
                        opacity="0.8"
                        className="client-hub"
                      />
                      <text
                        x="160"
                        y="165"
                        textAnchor="middle"
                        fill="white"
                        fontSize="12"
                        fontWeight="bold"
                      >
                        SQL
                      </text>

                      {/* Connection Lines */}
                      <line
                        x1="160"
                        y1="160"
                        x2="120"
                        y2="120"
                        stroke="currentColor"
                        strokeWidth="2"
                        opacity="0.4"
                        className="client-connection"
                      />
                      <line
                        x1="160"
                        y1="160"
                        x2="200"
                        y2="120"
                        stroke="currentColor"
                        strokeWidth="2"
                        opacity="0.4"
                        className="client-connection"
                      />
                      <line
                        x1="160"
                        y1="160"
                        x2="200"
                        y2="200"
                        stroke="currentColor"
                        strokeWidth="2"
                        opacity="0.4"
                        className="client-connection"
                      />
                      <line
                        x1="160"
                        y1="160"
                        x2="120"
                        y2="200"
                        stroke="currentColor"
                        strokeWidth="2"
                        opacity="0.4"
                        className="client-connection"
                      />
                    </g>
                  </svg>

                  {/* Industry badges */}
                  <div className="absolute inset-0 industry-badges">
                    <div className="industry-badge absolute top-8 left-8 px-2 py-1 bg-accent/20 rounded text-xs font-medium text-accent">
                      Banking
                    </div>
                    <div className="industry-badge absolute top-8 right-8 px-2 py-1 bg-accent/20 rounded text-xs font-medium text-accent">
                      Tech
                    </div>
                    <div className="industry-badge absolute bottom-8 left-8 px-2 py-1 bg-accent/20 rounded text-xs font-medium text-accent">
                      Oil & Gas
                    </div>
                    <div className="industry-badge absolute bottom-8 right-8 px-2 py-1 bg-accent/20 rounded text-xs font-medium text-accent">
                      Telecom
                    </div>
                    <div className="industry-badge absolute top-1/2 left-4 px-2 py-1 bg-accent/20 rounded text-xs font-medium text-accent">
                      Gov
                    </div>
                    <div className="industry-badge absolute top-1/2 right-4 px-2 py-1 bg-accent/20 rounded text-xs font-medium text-accent">
                      NGO
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What We Do Section */}
      <section className="py-24 bg-card text-card-foreground">
        <div className="container--wide">
          <motion.div
            className="mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-2xl md:text-3xl font-bold mb-4">What We Do</h2>
            <p className="text-lg text-muted-foreground max-w-3xl">
              Comprehensive event management solutions designed for the modern
              corporate world
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10 max-w-none mx-auto">
            {[
              {
                icon: "🎤",
                title: "Conference Management",
                description:
                  "Professional conference planning and execution with cutting-edge technology",
                color: "primary",
              },
              {
                icon: "🏢",
                title: "Corporate Events",
                description:
                  "AGMs, product launches, and corporate gatherings that make an impact",
                color: "secondary",
              },
              {
                icon: "🎪",
                title: "Exhibition Management",
                description:
                  "Trade shows and exhibitions that showcase your brand effectively",
                color: "accent",
              },
              {
                icon: "💻",
                title: "Technology Integration",
                description:
                  "State-of-the-art tech solutions for seamless event experiences",
                color: "brand-orange",
              },
              {
                icon: "🤝",
                title: "Team Building",
                description:
                  "Engaging team building activities that strengthen collaboration",
                color: "brand-purple",
              },
              {
                icon: "📚",
                title: "Training & Workshops",
                description:
                  "Professional development sessions that drive growth",
                color: "brand-green",
              },
            ].map((service, index) => (
              <motion.div
                key={index}
                className="card group bg-background p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-border hover:border-primary/40"
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -8, scale: 1.02 }}
              >
                <div
                  className={`w-16 h-16 rounded-2xl bg-gradient-to-br from-${service.color}/20 to-${service.color}/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}
                >
                  <span className="text-3xl">{service.icon}</span>
                </div>
                <h3 className="text-xl font-bold mb-4 text-foreground">
                  {service.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {service.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Case Studies (Portfolio) Section */}
      <section className="py-24 bg-background text-foreground">
        <div className="container--wide">
          <div className="flex justify-between items-end mb-16">
            <motion.h2
              className="text-2xl md:text-3xl font-bold"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              Case Studies
            </motion.h2>
            <motion.a
              href="/portfolio"
              className="text-primary hover:text-primary/80 transition-colors duration-300 font-semibold"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              View All Work →
            </motion.a>
          </div>

          <div className="grid md:grid-cols-2 gap-10 max-w-none mx-auto">
            {[
              {
                title: "NBA Annual Conference",
                category: "Conference Management",
                year: "2024",
                gradient: "from-primary/20 to-accent/20",
              },
              {
                title: "COREN Engineering Assembly",
                category: "Corporate Events",
                year: "2024",
                gradient: "from-accent/20 to-secondary/20",
              },
              {
                title: "Rivers State Education Summit",
                category: "Government Events",
                year: "2024",
                gradient: "from-secondary/20 to-primary/20",
              },
              {
                title: "Tech Innovation Forum",
                category: "Technology Events",
                year: "2024",
                gradient: "from-primary/20 to-secondary/20",
              },
            ].map((project, index) => (
              <motion.div
                key={index}
                className={`bg-gradient-to-br ${project.gradient} h-80 rounded-2xl p-8 flex flex-col justify-between group cursor-pointer`}
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -8, scale: 1.02 }}
              >
                <div className="text-right">
                  <span className="text-sm text-muted-foreground">
                    {project.year}
                  </span>
                </div>
                <div>
                  <h3 className="text-2xl font-bold mb-2 text-foreground">
                    {project.title}
                  </h3>
                  <p className="text-muted-foreground">{project.category}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-24 bg-card text-card-foreground">
        <div className="container--wide">
          <motion.div
            className="mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-2xl md:text-3xl font-bold mb-4">
              What Our Clients Say
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl">
              Don&apos;t just take our word for it. Here&apos;s what our clients
              have to say about their experience.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8 max-w-none mx-auto">
            {[
              {
                quote:
                  "SQL Events transformed our annual conference into an unforgettable experience. Their attention to detail and innovative approach exceeded our expectations.",
                author: "Dr. Sarah Johnson",
                position: "CEO, TechCorp Nigeria",
                company: "TechCorp Nigeria",
              },
              {
                quote:
                  "The team at SQL Events is professional, creative, and incredibly reliable. They made our product launch a huge success with their strategic planning.",
                author: "Michael Adebayo",
                position: "Marketing Director",
                company: "Innovate Solutions",
              },
              {
                quote:
                  "Working with SQL Events was seamless from start to finish. Their technology integration capabilities gave our event a competitive edge.",
                author: "Chioma Okonkwo",
                position: "Events Manager",
                company: "Global Industries Ltd",
              },
            ].map((testimonial, index) => (
              <motion.div
                key={index}
                className="bg-background p-8 rounded-2xl shadow-lg border border-border"
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="text-primary text-4xl mb-4">"</div>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  {testimonial.quote}
                </p>
                <div>
                  <div className="font-semibold text-foreground">
                    {testimonial.author}
                  </div>
                  <div className="text-sm text-muted-foreground">
                    {testimonial.position}
                  </div>
                  <div className="text-sm text-primary font-medium">
                    {testimonial.company}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact CTA/Form Section */}
      <section className="py-24 bg-primary text-primary-foreground">
        <div className="container--wide">
          <div className="max-w-none mx-auto">
            <motion.div
              className="mb-16"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="text-2xl md:text-3xl font-bold mb-4">
                Ready to Transform Your Event?
              </h2>
              <p className="text-lg opacity-90 max-w-3xl">
                Let&apos;s discuss how we can bring your vision to life with our
                innovative events management solutions.
              </p>
            </motion.div>

            <div className="grid lg:grid-cols-2 gap-16 items-start">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                <h3 className="text-2xl font-bold mb-6">Get in Touch</h3>
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-primary-foreground/20 rounded-full flex items-center justify-center">
                      📍
                    </div>
                    <div>
                      <div className="font-semibold">Address</div>
                      <div className="text-sm opacity-80">
                        Victoria Island, Lagos, Nigeria
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-primary-foreground/20 rounded-full flex items-center justify-center">
                      📞
                    </div>
                    <div>
                      <div className="font-semibold">Phone</div>
                      <div className="text-sm opacity-80">
                        +234 XXX XXX XXXX
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-primary-foreground/20 rounded-full flex items-center justify-center">
                      ✉️
                    </div>
                    <div>
                      <div className="font-semibold">Email</div>
                      <div className="text-sm opacity-80">
                        hello@sqlevents.ng
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>

              <motion.form
                className="space-y-6"
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                <div className="grid md:grid-cols-2 gap-4">
                  <input
                    type="text"
                    placeholder="First Name"
                    className="w-full px-4 py-3 bg-primary-foreground/10 border border-primary-foreground/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-foreground/50 focus:border-transparent text-primary-foreground placeholder-primary-foreground/60"
                  />
                  <input
                    type="text"
                    placeholder="Last Name"
                    className="w-full px-4 py-3 bg-primary-foreground/10 border border-primary-foreground/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-foreground/50 focus:border-transparent text-primary-foreground placeholder-primary-foreground/60"
                  />
                </div>
                <input
                  type="email"
                  placeholder="Email Address"
                  className="w-full px-4 py-3 bg-primary-foreground/10 border border-primary-foreground/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-foreground/50 focus:border-transparent text-primary-foreground placeholder-primary-foreground/60"
                />
                <textarea
                  placeholder="Tell us about your event..."
                  rows={4}
                  className="w-full px-4 py-3 bg-primary-foreground/10 border border-primary-foreground/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-foreground/50 focus:border-transparent text-primary-foreground placeholder-primary-foreground/60 resize-none"
                ></textarea>
                <button
                  type="submit"
                  className="w-full px-8 py-4 bg-primary-foreground text-primary font-bold rounded-lg hover:bg-primary-foreground/90 transition-colors duration-300"
                >
                  Send Message
                </button>
              </motion.form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-16 bg-card text-card-foreground border-t border-border">
        <div className="container--wide">
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <div className="text-2xl font-bold mb-4">SQL Events Nigeria</div>
              <p className="text-muted-foreground mb-6">
                Passion. Innovation. Technology in Events Management.
              </p>
              <div className="flex space-x-6 text-muted-foreground">
                <a href="#" className="hover:text-foreground transition-colors">
                  LinkedIn
                </a>
                <a href="#" className="hover:text-foreground transition-colors">
                  Twitter
                </a>
                <a href="#" className="hover:text-foreground transition-colors">
                  Instagram
                </a>
              </div>
            </div>
            <div className="text-right">
              <p className="text-muted-foreground mb-2">Lagos, Nigeria</p>
              <p className="text-muted-foreground mb-2">+234 XXX XXX XXXX</p>
              <p className="text-muted-foreground">hello@sqlevents.ng</p>
            </div>
          </div>
          <div className="mt-12 pt-8 border-t border-border text-center text-muted-foreground">
            <p>&copy; 2024 SQL Events Nigeria. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
