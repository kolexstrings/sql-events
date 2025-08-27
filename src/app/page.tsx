"use client";

import dynamic from "next/dynamic";
import { AnimatePresence } from "framer-motion";
import Navigation from "./components/Navigation";
import Hero from "./components/Hero";
import WhoWeAre from "./components/WhoWeAre";
import WhatWeDo from "./components/WhatWeDo";
import Clients from "./components/Clients";
import CaseStudies from "./components/CaseStudies";
import Footer from "./components/Footer";
import LoadingScreen from "./components/LoadingScreen";
import { usePerformanceOptimization } from "./hooks/usePerformanceOptimization";

const WhyChooseUs = dynamic(() => import("./components/WhyChooseUs"), {
  ssr: false,
  loading: () => (
    <div className="h-screen grid place-items-center text-muted-foreground">
      Loading interactive section…
    </div>
  ),
});

export default function Home() {
  // Critical images to preload
  const criticalImages = [
    "/logo.png",
    "/clients/CBN.png",
    "/clients/COREN.png",
    "/clients/RiversState.png",
    "/clients/NSE.png",
    "/clients/NIOB.png",
  ];

  const { isLoading } = usePerformanceOptimization({
    minLoadingTime: 1500, // Minimum 1.5 seconds for smooth experience
    preloadImages: criticalImages,
    enablePrefetch: true,
  });

  return (
    <>
      <AnimatePresence mode="wait">
        {isLoading && (
          <LoadingScreen
            key="loading"
            isLoading={isLoading}
            onComplete={() => {
              // Additional cleanup if needed
            }}
          />
        )}
      </AnimatePresence>

      <main
        id="main-content"
        className={`min-h-screen bg-background text-foreground transition-opacity duration-500 ${
          isLoading ? "opacity-0" : "opacity-100"
        }`}
      >
        <Navigation />
        <Hero />
        <WhoWeAre />
        <WhatWeDo />
        <WhyChooseUs />
        <Clients />
        <CaseStudies />
        <Footer />
      </main>
    </>
  );
}
