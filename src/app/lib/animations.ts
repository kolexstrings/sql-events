import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { TextPlugin } from "gsap/TextPlugin";

// Register GSAP plugins
if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger, TextPlugin);
}

// Smooth scrolling setup
export const initSmoothScroll = () => {
  if (typeof window !== "undefined") {
    // Initialize Lenis for smooth scrolling
    import("lenis").then(({ default: Lenis }) => {
      const lenis = new Lenis({
        duration: 1.2,
        easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      });

      function raf(time: number) {
        lenis.raf(time);
        requestAnimationFrame(raf);
      }

      requestAnimationFrame(raf);

      // Integrate with GSAP ScrollTrigger
      gsap.ticker.add((time) => {
        lenis.raf(time * 1000);
      });
    });
  }
};

// Hero animations
export const heroAnimations = () => {
  const tl = gsap.timeline();

  tl.from(".hero-headline", {
    y: 100,
    opacity: 0,
    duration: 1.2,
    ease: "power3.out",
  })
    .from(
      ".hero-description",
      {
        y: 50,
        opacity: 0,
        duration: 1,
        ease: "power2.out",
      },
      "-=0.8"
    )
    .from(
      ".hero-arrow",
      {
        y: 30,
        opacity: 0,
        duration: 0.8,
        ease: "power2.out",
      },
      "-=0.6"
    );
};

// Text reveal animations
export const textReveal = (selector: string) => {
  gsap.from(selector, {
    y: 100,
    opacity: 0,
    duration: 1,
    ease: "power3.out",
    stagger: 0.1,
    scrollTrigger: {
      trigger: selector,
      start: "top 80%",
      end: "bottom 20%",
      toggleActions: "play none none reverse",
    },
  });
};

// Card animations
export const cardAnimations = () => {
  gsap.from(".card", {
    y: 60,
    opacity: 0,
    duration: 0.8,
    ease: "power2.out",
    stagger: 0.1,
    scrollTrigger: {
      trigger: ".card",
      start: "top 85%",
      end: "bottom 15%",
      toggleActions: "play none none reverse",
    },
  });
};

// Parallax effects
export const parallaxEffect = (selector: string, speed: number = 0.5) => {
  gsap.to(selector, {
    yPercent: -50 * speed,
    ease: "none",
    scrollTrigger: {
      trigger: selector,
      start: "top bottom",
      end: "bottom top",
      scrub: true,
    },
  });
};

// Navigation animations
export const navAnimations = () => {
  gsap.from(".nav-item", {
    y: -20,
    opacity: 0,
    duration: 0.6,
    ease: "power2.out",
    stagger: 0.1,
  });
};

// Page transitions
export const pageTransition = (direction: "left" | "right" = "left") => {
  const tl = gsap.timeline();

  if (direction === "left") {
    tl.to(".page-transition", {
      x: "-100%",
      duration: 0.6,
      ease: "power2.inOut",
    });
  } else {
    tl.to(".page-transition", {
      x: "100%",
      duration: 0.6,
      ease: "power2.inOut",
    });
  }

  return tl;
};

// Hover animations
export const hoverAnimation = (element: HTMLElement, scale: number = 1.05) => {
  gsap.to(element, {
    scale: scale,
    duration: 0.3,
    ease: "power2.out",
  });
};

export const hoverAnimationOut = (element: HTMLElement) => {
  gsap.to(element, {
    scale: 1,
    duration: 0.3,
    ease: "power2.out",
  });
};

// Stagger animations for lists
export const staggerAnimation = (selector: string, stagger: number = 0.1) => {
  gsap.from(selector, {
    y: 30,
    opacity: 0,
    duration: 0.6,
    ease: "power2.out",
    stagger: stagger,
    scrollTrigger: {
      trigger: selector,
      start: "top 80%",
      end: "bottom 20%",
      toggleActions: "play none none reverse",
    },
  });
};

// Counter animations
export const animateCounter = (
  element: HTMLElement,
  target: number,
  duration: number = 2
) => {
  gsap.to(element, {
    innerHTML: target,
    duration: duration,
    ease: "power2.out",
    snap: { innerHTML: 1 },
    scrollTrigger: {
      trigger: element,
      start: "top 80%",
      end: "bottom 20%",
      toggleActions: "play none none reverse",
    },
  });
};

// Morphing animations
export const morphAnimation = (
  from: string,
  to: string,
  duration: number = 1
) => {
  return gsap.to(from, {
    morphSVG: to,
    duration: duration,
    ease: "power2.inOut",
  });
};

// Cleanup function
export const cleanupAnimations = () => {
  ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
  gsap.killTweensOf("*");
};
