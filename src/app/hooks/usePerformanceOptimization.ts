"use client";

import { useEffect, useState, useCallback } from "react";

interface UsePerformanceOptimizationOptions {
  minLoadingTime?: number;
  preloadImages?: string[];
  enablePrefetch?: boolean;
}

export function usePerformanceOptimization(
  options: UsePerformanceOptimizationOptions = {}
) {
  const {
    minLoadingTime = 2000,
    preloadImages = [],
    enablePrefetch = true,
  } = options;

  const [isLoading, setIsLoading] = useState(true);
  const [loadingProgress, setLoadingProgress] = useState(0);
  const [imagesLoaded, setImagesLoaded] = useState(false);
  const [domReady, setDomReady] = useState(false);

  // Preload critical images
  const preloadCriticalImages = useCallback(async () => {
    if (preloadImages.length === 0) {
      setImagesLoaded(true);
      return;
    }

    const imagePromises = preloadImages.map((src) => {
      return new Promise<void>((resolve, reject) => {
        const img = new Image();
        img.onload = () => resolve();
        img.onerror = () => reject();
        img.src = src;
      });
    });

    try {
      await Promise.all(imagePromises);
      setImagesLoaded(true);
    } catch (error) {
      console.warn("Some images failed to preload:", error);
      setImagesLoaded(true); // Continue anyway
    }
  }, [preloadImages]);

  // Prefetch next page resources
  const prefetchResources = useCallback(() => {
    if (!enablePrefetch || typeof window === "undefined") return;

    // Prefetch DNS for external resources
    const dns = document.createElement("link");
    dns.rel = "dns-prefetch";
    dns.href = "//fonts.googleapis.com";
    document.head.appendChild(dns);

    // Prefetch critical routes
    const routes = ["/about", "/services", "/contact", "/portfolio"];
    routes.forEach((route) => {
      const link = document.createElement("link");
      link.rel = "prefetch";
      link.href = route;
      document.head.appendChild(link);
    });
  }, [enablePrefetch]);

  // Initialize performance optimizations
  useEffect(() => {
    const startTime = Date.now();

    // Check if DOM is ready
    if (document.readyState === "loading") {
      const handleDOMContentLoaded = () => {
        setDomReady(true);
        document.removeEventListener(
          "DOMContentLoaded",
          handleDOMContentLoaded
        );
      };
      document.addEventListener("DOMContentLoaded", handleDOMContentLoaded);
    } else {
      setDomReady(true);
    }

    // Start preloading images
    preloadCriticalImages();

    // Prefetch resources
    prefetchResources();

    // Progress simulation
    const progressInterval = setInterval(() => {
      setLoadingProgress((prev) => {
        if (prev >= 90) return prev;
        return prev + Math.random() * 10 + 5;
      });
    }, 200);

    // Check loading completion
    const checkLoadingComplete = () => {
      const elapsed = Date.now() - startTime;
      const minTimeReached = elapsed >= minLoadingTime;

      if (domReady && imagesLoaded && minTimeReached) {
        setLoadingProgress(100);
        setTimeout(() => {
          setIsLoading(false);
        }, 300);
        clearInterval(progressInterval);
      } else {
        setTimeout(checkLoadingComplete, 100);
      }
    };

    checkLoadingComplete();

    return () => {
      clearInterval(progressInterval);
    };
  }, [
    domReady,
    imagesLoaded,
    minLoadingTime,
    preloadCriticalImages,
    prefetchResources,
  ]);

  return {
    isLoading,
    loadingProgress,
    imagesLoaded,
    domReady,
  };
}
