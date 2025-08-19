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
    <section className="horizontal-scroll-section relative bg-background text-foreground overflow-hidden">
      {/* Background animated elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="horizontal-bg-element absolute top-1/4 left-1/4 w-20 h-20 bg-primary/10 rounded-full"></div>
        <div className="horizontal-bg-element absolute top-3/4 right-1/3 w-16 h-16 bg-secondary/10 rotate-45"></div>
        <div className="horizontal-bg-element absolute bottom-1/4 left-1/2 w-24 h-24 bg-accent/10 rounded-full"></div>
      </div>

      <div
        className="horizontal-scroll-container flex items-center"
        style={{ width: "600vw" }}
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
                {/* Tech SVG */}
                <svg
                  width="500"
                  height="500"
                  viewBox="0 0 500 500"
                  className="absolute inset-0 drop-shadow-2xl"
                >
                  <defs>
                    <linearGradient
                      id="techGradient"
                      x1="0%"
                      y1="0%"
                      x2="100%"
                      y2="100%"
                    >
                      <stop
                        offset="0%"
                        stopColor="currentColor"
                        stopOpacity="1"
                        className="text-primary"
                      />
                      <stop
                        offset="50%"
                        stopColor="currentColor"
                        stopOpacity="0.6"
                        className="text-primary"
                      />
                      <stop
                        offset="100%"
                        stopColor="currentColor"
                        stopOpacity="0.2"
                        className="text-primary"
                      />
                    </linearGradient>
                  </defs>
                  <g className="tech-svg-group">
                    {/* Central Core */}
                    <circle
                      cx="250"
                      cy="250"
                      r="60"
                      fill="url(#techGradient)"
                      className="tech-core text-primary"
                    />

                    {/* Orbiting Elements */}
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
                </svg>

                {/* Floating Particles */}
                <div className="absolute inset-0 tech-particles">
                  <div className="tech-particle w-6 h-6 bg-primary rounded-full absolute top-1/4 left-1/3 opacity-80 shadow-lg shadow-primary/50"></div>
                  <div className="tech-particle w-4 h-4 bg-primary rounded-full absolute top-3/4 right-1/4 opacity-60 shadow-lg shadow-primary/50"></div>
                  <div className="tech-particle w-8 h-8 bg-primary rounded-full absolute bottom-1/3 left-1/4 opacity-90 shadow-xl shadow-primary/60"></div>
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
                    <radialGradient id="teamGradient" cx="50%" cy="50%" r="50%">
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
                        className="team-line text-secondary"
                      />
                      <line
                        x1="220"
                        y1="140"
                        x2="220"
                        y2="200"
                        stroke="currentColor"
                        strokeWidth="2"
                        opacity="0.4"
                        className="team-line text-secondary"
                      />
                      <line
                        x1="220"
                        y1="200"
                        x2="160"
                        y2="240"
                        stroke="currentColor"
                        strokeWidth="2"
                        opacity="0.4"
                        className="team-line text-secondary"
                      />
                    </g>

                    {/* Team Members */}
                    <circle
                      cx="160"
                      cy="170"
                      r="25"
                      fill="url(#teamGradient)"
                      className="team-leader text-secondary"
                    />
                    <circle
                      cx="160"
                      cy="100"
                      r="18"
                      fill="currentColor"
                      opacity="0.8"
                      className="team-member text-secondary"
                    />
                    <circle
                      cx="220"
                      cy="140"
                      r="18"
                      fill="currentColor"
                      opacity="0.8"
                      className="team-member text-secondary"
                    />
                    <circle
                      cx="220"
                      cy="200"
                      r="18"
                      fill="currentColor"
                      opacity="0.8"
                      className="team-member text-secondary"
                    />
                  </g>
                </svg>

                {/* Achievement badges */}
                <div className="absolute inset-0 team-badges">
                  <div className="team-badge absolute top-4 left-4 w-8 h-8 bg-secondary/20 rounded-full flex items-center justify-center">
                    <span className="text-xs font-bold text-secondary">5+</span>
                  </div>
                  <div className="team-badge absolute top-4 right-4 w-8 h-8 bg-secondary/20 rounded-full flex items-center justify-center">
                    <span className="text-xs font-bold text-secondary">★</span>
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
                <span className="text-secondary font-semibold">powerhouse</span>{" "}
                of seasoned professionals with decades of combined experience in
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
                  Nigeria&apos;s leading
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
                      className="text-accent"
                    />
                    <circle
                      cx="160"
                      cy="160"
                      r="100"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1"
                      opacity="0.3"
                      className="text-accent"
                    />
                    <circle
                      cx="160"
                      cy="160"
                      r="60"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      opacity="0.4"
                      className="text-accent"
                    />

                    {/* Client Clusters */}
                    <g className="client-cluster-1">
                      <circle
                        cx="120"
                        cy="120"
                        r="25"
                        fill="currentColor"
                        opacity="0.2"
                        className="client-zone text-accent"
                      />
                      <circle
                        cx="115"
                        cy="115"
                        r="4"
                        fill="currentColor"
                        className="client-dot text-accent"
                      />
                      <circle
                        cx="125"
                        cy="115"
                        r="4"
                        fill="currentColor"
                        className="client-dot text-accent"
                      />
                      <circle
                        cx="120"
                        cy="125"
                        r="4"
                        fill="currentColor"
                        className="client-dot text-accent"
                      />
                    </g>

                    {/* Central Hub */}
                    <circle
                      cx="160"
                      cy="160"
                      r="20"
                      fill="currentColor"
                      opacity="0.8"
                      className="client-hub text-accent"
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
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Innovation & Creativity */}
        <div className="horizontal-scroll-item flex-shrink-0 w-screen h-screen flex items-center justify-center px-8 relative overflow-hidden">
          {/* Massive Background Elements */}
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-brand-purple/20 to-transparent rounded-full blur-3xl"></div>
            <div className="absolute bottom-0 left-0 w-80 h-80 bg-gradient-to-tr from-brand-purple/10 to-transparent rounded-full blur-2xl"></div>
          </div>

          <div className="grid lg:grid-cols-2 gap-20 items-center max-w-7xl w-full relative z-10">
            <div className="item-content space-y-8">
              {/* Oversized Typography */}
              <div className="space-y-4">
                <div className="text-6xl md:text-8xl lg:text-9xl font-black leading-none">
                  <span className="block text-brand-purple drop-shadow-2xl">
                    INNOVATION
                  </span>
                  <span className="block text-brand-purple/70 -mt-4">
                    & CREATIVITY
                  </span>
                </div>
                <div className="w-32 h-2 bg-gradient-to-r from-brand-purple to-brand-purple/50 rounded-full"></div>
              </div>

              <p className="text-2xl md:text-3xl text-foreground/80 leading-relaxed font-light max-w-xl">
                <span className="text-brand-purple font-semibold">
                  Pushing boundaries
                </span>{" "}
                with creative solutions that transform ordinary events into
                <span className="text-brand-purple font-semibold">
                  {" "}
                  extraordinary experiences
                </span>
              </p>

              <div className="flex flex-wrap gap-4 pt-6">
                <div className="px-8 py-4 bg-brand-purple/20 border border-brand-purple/30 rounded-2xl backdrop-blur-sm">
                  <span className="text-brand-purple font-bold text-lg">
                    Creative Design
                  </span>
                </div>
                <div className="px-8 py-4 bg-brand-purple/20 border border-brand-purple/30 rounded-2xl backdrop-blur-sm">
                  <span className="text-brand-purple font-bold text-lg">
                    Unique Concepts
                  </span>
                </div>
                <div className="px-8 py-4 bg-brand-purple/20 border border-brand-purple/30 rounded-2xl backdrop-blur-sm">
                  <span className="text-brand-purple font-bold text-lg">
                    Brand Storytelling
                  </span>
                </div>
              </div>
            </div>

            <div className="flex justify-center items-center">
              <div className="relative w-[500px] h-[500px]">
                {/* Innovation SVG */}
                <svg
                  width="500"
                  height="500"
                  viewBox="0 0 500 500"
                  className="absolute inset-0 drop-shadow-2xl"
                >
                  <defs>
                    <linearGradient
                      id="innovationGradient"
                      x1="0%"
                      y1="0%"
                      x2="100%"
                      y2="100%"
                    >
                      <stop
                        offset="0%"
                        stopColor="currentColor"
                        stopOpacity="1"
                        className="text-brand-purple"
                      />
                      <stop
                        offset="50%"
                        stopColor="currentColor"
                        stopOpacity="0.6"
                        className="text-brand-purple"
                      />
                      <stop
                        offset="100%"
                        stopColor="currentColor"
                        stopOpacity="0.2"
                        className="text-brand-purple"
                      />
                    </linearGradient>
                  </defs>
                  <g className="innovation-svg-group">
                    {/* Central Lightbulb */}
                    <path
                      d="M250 100 L280 180 L220 180 Z"
                      fill="url(#innovationGradient)"
                      className="innovation-bulb text-brand-purple"
                    />
                    <circle
                      cx="250"
                      cy="200"
                      r="40"
                      fill="url(#innovationGradient)"
                      className="innovation-base text-brand-purple"
                    />

                    {/* Creative Sparks */}
                    <g className="creative-sparks">
                      <path
                        d="M180 120 Q160 100 140 120"
                        stroke="currentColor"
                        strokeWidth="3"
                        fill="none"
                        opacity="0.8"
                        className="text-brand-purple"
                      />
                      <path
                        d="M320 120 Q340 100 360 120"
                        stroke="currentColor"
                        strokeWidth="3"
                        fill="none"
                        opacity="0.8"
                        className="text-brand-purple"
                      />
                      <path
                        d="M250 80 Q250 60 250 40"
                        stroke="currentColor"
                        strokeWidth="3"
                        fill="none"
                        opacity="0.8"
                        className="text-brand-purple"
                      />
                    </g>

                    {/* Floating Ideas */}
                    <g className="floating-ideas">
                      <circle
                        cx="150"
                        cy="150"
                        r="15"
                        fill="currentColor"
                        opacity="0.6"
                        className="idea-bubble text-brand-purple"
                      />
                      <circle
                        cx="350"
                        cy="150"
                        r="12"
                        fill="currentColor"
                        opacity="0.7"
                        className="idea-bubble text-brand-purple"
                      />
                      <circle
                        cx="200"
                        cy="300"
                        r="18"
                        fill="currentColor"
                        opacity="0.5"
                        className="idea-bubble text-brand-purple"
                      />
                      <circle
                        cx="300"
                        cy="300"
                        r="14"
                        fill="currentColor"
                        opacity="0.8"
                        className="idea-bubble text-brand-purple"
                      />
                    </g>

                    {/* Connection Lines */}
                    <g className="connection-lines">
                      <line
                        x1="250"
                        y1="200"
                        x2="150"
                        y2="150"
                        stroke="currentColor"
                        strokeWidth="2"
                        opacity="0.4"
                        strokeDasharray="5,5"
                        className="text-brand-purple"
                      />
                      <line
                        x1="250"
                        y1="200"
                        x2="350"
                        y2="150"
                        stroke="currentColor"
                        strokeWidth="2"
                        opacity="0.4"
                        strokeDasharray="5,5"
                        className="text-brand-purple"
                      />
                      <line
                        x1="250"
                        y1="200"
                        x2="200"
                        y2="300"
                        stroke="currentColor"
                        strokeWidth="2"
                        opacity="0.4"
                        strokeDasharray="5,5"
                        className="text-brand-purple"
                      />
                      <line
                        x1="250"
                        y1="200"
                        x2="300"
                        y2="300"
                        stroke="currentColor"
                        strokeWidth="2"
                        opacity="0.4"
                        strokeDasharray="5,5"
                        className="text-brand-purple"
                      />
                    </g>
                  </g>
                </svg>

                {/* Floating Particles */}
                <div className="absolute inset-0 innovation-particles">
                  <div className="innovation-particle w-6 h-6 bg-brand-purple rounded-full absolute top-1/4 left-1/3 opacity-80 shadow-lg shadow-brand-purple/50"></div>
                  <div className="innovation-particle w-4 h-4 bg-brand-purple rounded-full absolute top-3/4 right-1/4 opacity-60 shadow-lg shadow-brand-purple/50"></div>
                  <div className="innovation-particle w-8 h-8 bg-brand-purple rounded-full absolute bottom-1/3 left-1/4 opacity-90 shadow-xl shadow-brand-purple/60"></div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Quality & Excellence */}
        <div className="horizontal-scroll-item flex-shrink-0 w-screen h-screen flex items-center justify-center px-8 relative overflow-hidden">
          {/* Massive Background Elements */}
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute top-0 left-0 w-96 h-96 bg-gradient-to-br from-brand-green/20 to-transparent rounded-full blur-3xl"></div>
            <div className="absolute bottom-0 right-0 w-80 h-80 bg-gradient-to-tl from-brand-green/10 to-transparent rounded-full blur-2xl"></div>
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
                      id="qualityGradient"
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
                  <g className="quality-svg-group">
                    {/* Quality Diamond */}
                    <polygon
                      points="250,100 300,200 250,300 200,200"
                      fill="url(#qualityGradient)"
                      className="quality-diamond text-brand-green"
                    />

                    {/* Quality Standards */}
                    <g className="quality-standards">
                      <rect
                        x="100"
                        y="100"
                        width="80"
                        height="8"
                        rx="4"
                        fill="currentColor"
                        opacity="0.8"
                        className="quality-bar text-brand-green"
                      />
                      <rect
                        x="100"
                        y="120"
                        width="90"
                        height="8"
                        rx="4"
                        fill="currentColor"
                        opacity="0.9"
                        className="quality-bar text-brand-green"
                      />
                      <rect
                        x="100"
                        y="140"
                        width="85"
                        height="8"
                        rx="4"
                        fill="currentColor"
                        opacity="0.7"
                        className="quality-bar text-brand-green"
                      />
                    </g>

                    {/* Excellence Stars */}
                    <g className="excellence-stars">
                      <polygon
                        points="150,200 155,210 165,210 157,217 160,227 150,222 140,227 143,217 135,210 145,210"
                        fill="currentColor"
                        opacity="0.9"
                        className="excellence-star text-brand-green"
                      />
                      <polygon
                        points="350,200 355,210 365,210 357,217 360,227 350,222 340,227 343,217 335,210 345,210"
                        fill="currentColor"
                        opacity="0.9"
                        className="excellence-star text-brand-green"
                      />
                    </g>

                    {/* Quality Circles */}
                    <g className="quality-circles">
                      <circle
                        cx="150"
                        cy="250"
                        r="25"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="3"
                        opacity="0.6"
                        className="quality-circle text-brand-green"
                      />
                      <circle
                        cx="350"
                        cy="250"
                        r="25"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="3"
                        opacity="0.6"
                        className="quality-circle text-brand-green"
                      />
                    </g>
                  </g>
                </svg>

                {/* Quality badges */}
                <div className="absolute inset-0 quality-badges">
                  <div className="quality-badge absolute top-4 left-4 w-8 h-8 bg-brand-green/20 rounded-full flex items-center justify-center">
                    <span className="text-xs font-bold text-brand-green">
                      A+
                    </span>
                  </div>
                  <div className="quality-badge absolute top-4 right-4 w-8 h-8 bg-brand-green/20 rounded-full flex items-center justify-center">
                    <span className="text-xs font-bold text-brand-green">
                      ★
                    </span>
                  </div>
                  <div className="quality-badge absolute bottom-4 left-1/2 transform -translate-x-1/2 w-10 h-8 bg-brand-green/20 rounded-full flex items-center justify-center">
                    <span className="text-xs font-bold text-brand-green">
                      ISO
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div className="item-content order-1 lg:order-2 space-y-8">
              {/* Oversized Typography */}
              <div className="space-y-4">
                <div className="text-6xl md:text-8xl lg:text-9xl font-black leading-none">
                  <span className="block text-brand-green drop-shadow-2xl">
                    QUALITY
                  </span>
                  <span className="block text-brand-green/70 -mt-4">
                    & EXCELLENCE
                  </span>
                </div>
                <div className="w-32 h-2 bg-gradient-to-r from-brand-green to-brand-green/50 rounded-full"></div>
              </div>

              <p className="text-2xl md:text-3xl text-foreground/80 leading-relaxed font-light max-w-xl">
                <span className="text-brand-green font-semibold">
                  Uncompromising standards
                </span>{" "}
                that ensure every event meets the highest quality benchmarks
                <span className="text-brand-green font-semibold">
                  {" "}
                  and exceeds expectations
                </span>
              </p>

              <div className="grid grid-cols-2 gap-6 pt-6">
                <div className="p-6 bg-brand-green/20 border border-brand-green/30 rounded-2xl backdrop-blur-sm text-center">
                  <div className="text-4xl font-black text-brand-green mb-2">
                    99.9%
                  </div>
                  <div className="text-brand-green font-semibold">
                    Success Rate
                  </div>
                </div>
                <div className="p-6 bg-brand-green/20 border border-brand-green/30 rounded-2xl backdrop-blur-sm text-center">
                  <div className="text-4xl font-black text-brand-green mb-2">
                    ISO
                  </div>
                  <div className="text-brand-green font-semibold">
                    Certified
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Customer Focus */}
        <div className="horizontal-scroll-item flex-shrink-0 w-screen h-screen flex items-center justify-center px-8 relative overflow-hidden">
          {/* Massive Background Elements */}
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-br from-brand-orange/15 to-transparent rounded-full blur-3xl"></div>
            <div className="absolute bottom-0 left-0 w-80 h-80 bg-gradient-to-tr from-brand-orange/10 to-transparent rounded-full blur-2xl"></div>
          </div>

          <div className="grid lg:grid-cols-2 gap-20 items-center max-w-7xl w-full relative z-10">
            <div className="item-content space-y-8">
              {/* Oversized Typography */}
              <div className="space-y-4">
                <div className="text-6xl md:text-8xl lg:text-9xl font-black leading-none">
                  <span className="block text-brand-orange drop-shadow-2xl">
                    CUSTOMER
                  </span>
                  <span className="block text-brand-orange/70 -mt-4">
                    FIRST
                  </span>
                </div>
                <div className="w-32 h-2 bg-gradient-to-r from-brand-orange to-brand-orange/50 rounded-full"></div>
              </div>

              <p className="text-2xl md:text-3xl text-foreground/80 leading-relaxed font-light max-w-xl">
                <span className="text-brand-orange font-semibold">
                  Your success is our priority
                </span>{" "}
                with personalized attention and dedicated support that
                <span className="text-brand-orange font-semibold">
                  {" "}
                  puts your needs first
                </span>
              </p>

              <div className="grid grid-cols-2 gap-6 pt-6">
                <div className="p-6 bg-brand-orange/20 border border-brand-orange/30 rounded-2xl backdrop-blur-sm text-center">
                  <div className="text-5xl font-black text-brand-orange mb-2">
                    24/7
                  </div>
                  <div className="text-brand-orange font-semibold text-lg">
                    Support
                  </div>
                </div>
                <div className="p-6 bg-brand-orange/20 border border-brand-orange/30 rounded-2xl backdrop-blur-sm text-center">
                  <div className="text-5xl font-black text-brand-orange mb-2">
                    100%
                  </div>
                  <div className="text-brand-orange font-semibold text-lg">
                    Satisfaction
                  </div>
                </div>
                <div className="p-6 bg-brand-orange/20 border border-brand-orange/30 rounded-2xl backdrop-blur-sm text-center">
                  <div className="text-5xl font-black text-brand-orange mb-2">
                    Dedicated
                  </div>
                  <div className="text-brand-orange font-semibold text-lg">
                    Manager
                  </div>
                </div>
                <div className="p-6 bg-brand-orange/20 border border-brand-orange/30 rounded-2xl backdrop-blur-sm text-center">
                  <div className="text-5xl font-black text-brand-orange mb-2">
                    Custom
                  </div>
                  <div className="text-brand-orange font-semibold text-lg">
                    Solutions
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
                      id="customerPattern"
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
                        className="text-brand-orange"
                      />
                    </pattern>
                  </defs>
                  <g className="customer-svg-group">
                    {/* Customer Heart */}
                    <path
                      d="M250 150 C250 150, 200 100, 150 150 C150 200, 250 250, 250 250 C250 250, 350 200, 350 150 C350 100, 250 150, 250 150 Z"
                      fill="currentColor"
                      opacity="0.8"
                      className="customer-heart text-brand-orange"
                    />

                    {/* Customer Service Icons */}
                    <g className="service-icons">
                      <circle
                        cx="120"
                        cy="120"
                        r="20"
                        fill="currentColor"
                        opacity="0.6"
                        className="service-icon text-brand-orange"
                      />
                      <text
                        x="120"
                        y="125"
                        textAnchor="middle"
                        fill="white"
                        fontSize="12"
                        fontWeight="bold"
                      >
                        📞
                      </text>

                      <circle
                        cx="380"
                        cy="120"
                        r="20"
                        fill="currentColor"
                        opacity="0.6"
                        className="service-icon text-brand-orange"
                      />
                      <text
                        x="380"
                        y="125"
                        textAnchor="middle"
                        fill="white"
                        fontSize="12"
                        fontWeight="bold"
                      >
                        💬
                      </text>

                      <circle
                        cx="120"
                        cy="280"
                        r="20"
                        fill="currentColor"
                        opacity="0.6"
                        className="service-icon text-brand-orange"
                      />
                      <text
                        x="120"
                        y="285"
                        textAnchor="middle"
                        fill="white"
                        fontSize="12"
                        fontWeight="bold"
                      >
                        🎯
                      </text>

                      <circle
                        cx="380"
                        cy="280"
                        r="20"
                        fill="currentColor"
                        opacity="0.6"
                        className="service-icon text-brand-orange"
                      />
                      <text
                        x="380"
                        y="285"
                        textAnchor="middle"
                        fill="white"
                        fontSize="12"
                        fontWeight="bold"
                      >
                        ⚡
                      </text>
                    </g>

                    {/* Connection Lines */}
                    <g className="customer-connections">
                      <line
                        x1="250"
                        y1="200"
                        x2="120"
                        y2="120"
                        stroke="currentColor"
                        strokeWidth="2"
                        opacity="0.4"
                        strokeDasharray="5,5"
                        className="text-brand-orange"
                      />
                      <line
                        x1="250"
                        y1="200"
                        x2="380"
                        y2="120"
                        stroke="currentColor"
                        strokeWidth="2"
                        opacity="0.4"
                        strokeDasharray="5,5"
                        className="text-brand-orange"
                      />
                      <line
                        x1="250"
                        y1="200"
                        x2="120"
                        y2="280"
                        stroke="currentColor"
                        strokeWidth="2"
                        opacity="0.4"
                        strokeDasharray="5,5"
                        className="text-brand-orange"
                      />
                      <line
                        x1="250"
                        y1="200"
                        x2="380"
                        y2="280"
                        stroke="currentColor"
                        strokeWidth="2"
                        opacity="0.4"
                        strokeDasharray="5,5"
                        className="text-brand-orange"
                      />
                    </g>

                    {/* Customer Satisfaction Meter */}
                    <g className="satisfaction-meter">
                      <rect
                        x="200"
                        y="350"
                        width="100"
                        height="20"
                        rx="10"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="3"
                        opacity="0.6"
                        className="text-brand-orange"
                      />
                      <rect
                        x="200"
                        y="350"
                        width="95"
                        height="20"
                        rx="10"
                        fill="currentColor"
                        opacity="0.8"
                        className="text-brand-orange"
                      />
                      <text
                        x="250"
                        y="365"
                        textAnchor="middle"
                        fill="white"
                        fontSize="12"
                        fontWeight="bold"
                      >
                        95%
                      </text>
                    </g>
                  </g>
                </svg>

                {/* Customer badges */}
                <div className="absolute inset-0 customer-badges">
                  <div className="customer-badge absolute top-8 left-8 px-2 py-1 bg-brand-orange/20 rounded text-xs font-medium text-brand-orange">
                    Priority
                  </div>
                  <div className="customer-badge absolute top-8 right-8 px-2 py-1 bg-brand-orange/20 rounded text-xs font-medium text-brand-orange">
                    Dedicated
                  </div>
                  <div className="customer-badge absolute bottom-8 left-8 px-2 py-1 bg-brand-orange/20 rounded text-xs font-medium text-brand-orange">
                    Personal
                  </div>
                  <div className="customer-badge absolute bottom-8 right-8 px-2 py-1 bg-brand-orange/20 rounded text-xs font-medium text-brand-orange">
                    Support
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
