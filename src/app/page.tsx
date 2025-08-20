"use client";

import { useEffect } from "react";
import dynamic from "next/dynamic";
import Navigation from "./components/Navigation";
import Hero from "./components/Hero";
import WhoWeAre from "./components/WhoWeAre";
import WhatWeDo from "./components/WhatWeDo";
import Clients from "./components/Clients";
import CaseStudies from "./components/CaseStudies";
import Footer from "./components/Footer";
import { initSmoothScroll } from "./lib/animations";

const HorizontalScrollSection = dynamic(
  () => import("./components/HorizontalScrollSection"),
  {
    ssr: false,
    loading: () => (
      <div className="h-screen grid place-items-center text-muted-foreground">
        Loading interactive section…
      </div>
    ),
  }
);

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
