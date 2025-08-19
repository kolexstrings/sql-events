"use client";

import { useEffect } from "react";
import { initSmoothScroll } from "../lib/animations";

export default function SmoothScroll() {
  useEffect(() => {
    initSmoothScroll();
  }, []);

  return null; // This component doesn't render anything
}
