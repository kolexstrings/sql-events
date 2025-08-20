"use client";

import { useEffect } from "react";
import Navigation from "./components/Navigation";
import Hero from "./components/Hero";
import WhoWeAre from "./components/WhoWeAre";
import HorizontalScrollSection from "./components/HorizontalScrollSection";
import WhatWeDo from "./components/WhatWeDo";
import Clients from "./components/Clients";

import CaseStudies from "./components/CaseStudies";
import Testimonials from "./components/Testimonials";
import ContactCTA from "./components/ContactCTA";
import Footer from "./components/Footer";
import { initSmoothScroll } from "./lib/animations";

export default function Home() {
  useEffect(() => {
    initSmoothScroll();
  }, []);

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navigation />
      <Hero />
      <WhoWeAre />
      <HorizontalScrollSection />
      <WhatWeDo />
      <Clients />
      <CaseStudies />
      {/* <Testimonials />
      <ContactCTA /> */}
      <Footer />
    </div>
  );
}
