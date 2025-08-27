"use client";

import dynamic from "next/dynamic";
import Navigation from "./components/Navigation";
import Hero from "./components/Hero";
import WhoWeAre from "./components/WhoWeAre";
import WhatWeDo from "./components/WhatWeDo";
import Clients from "./components/Clients";
import CaseStudies from "./components/CaseStudies";
import Footer from "./components/Footer";

const WhyChooseUs = dynamic(() => import("./components/WhyChooseUs"), {
  ssr: false,
  loading: () => (
    <div className="h-screen grid place-items-center text-muted-foreground">
      Loading interactive section…
    </div>
  ),
});

export default function Home() {
  return (
    <main
      id="main-content"
      className="min-h-screen bg-background text-foreground"
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
  );
}
