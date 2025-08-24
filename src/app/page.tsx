"use client";

import { useEffect } from "react";
import Navigation from "./components/Navigation";
import Hero from "./components/Hero";
import WhoWeAre from "./components/WhoWeAre";
import WhatWeDo from "./components/WhatWeDo";
import HorizontalScrollSection from "./components/HorizontalScrollSection";
import Clients from "./components/Clients";
import CaseStudies from "./components/CaseStudies";

import Footer from "./components/Footer";
import { initSmoothScroll } from "./lib/animations";

export default function Home() {
  useEffect(() => {
    initSmoothScroll();
  }, []);

  return (
    <main
      id="main-content"
      role="main"
      className="min-h-screen bg-background text-foreground"
    >
      <Navigation />
      <Hero />
      <WhoWeAre />
      <HorizontalScrollSection />
      <WhatWeDo />
      <Clients />
      <CaseStudies />

      <Footer />
    </main>
  );
}
