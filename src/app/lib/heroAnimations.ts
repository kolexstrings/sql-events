import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

export const initHeroAnimations = () => {
  // Create a timeline for the hero animations
  const heroTimeline = gsap.timeline();

  // First, set all elements to their starting positions
  gsap.set(".gsap-text-line", { opacity: 0, y: 100 });
  gsap.set(".gsap-description-text", { opacity: 0, y: 30 });
  gsap.set(".gsap-curly-brace", { opacity: 0, scale: 0 });
  gsap.set(".gsap-cta-button", { opacity: 0, x: 50 });
  gsap.set(".gsap-side-label", { opacity: 0, x: -30 });

  // Animate the main headline text with a staggered reveal effect
  heroTimeline
    .to(".gsap-text-line", {
      duration: 1.2,
      y: 0,
      opacity: 1,
      stagger: 0.3,
      ease: "power3.out",
    })
    .to(
      ".gsap-description-text",
      {
        duration: 0.8,
        y: 0,
        opacity: 1,
        ease: "power2.out",
      },
      "-=0.5"
    )
    .to(
      ".gsap-curly-brace",
      {
        duration: 0.6,
        scale: 1,
        opacity: 1,
        stagger: 0.2,
        ease: "back.out(1.7)",
      },
      "-=0.3"
    )
    .to(
      ".gsap-cta-button",
      {
        duration: 0.8,
        x: 0,
        opacity: 1,
        ease: "power2.out",
      },
      "-=0.4"
    )
    .to(
      ".gsap-side-label",
      {
        duration: 1,
        x: 0,
        opacity: 1,
        ease: "power2.out",
      },
      "-=0.6"
    );

  // Animate the floating element with continuous rotation and floating
  gsap.to(".gsap-floating-element", {
    rotation: 360,
    duration: 20,
    repeat: -1,
    ease: "none",
  });

  // Create a floating animation for the background shapes
  gsap.to(".gsap-bg-shape-1", {
    y: -20,
    rotation: 360,
    duration: 8,
    repeat: -1,
    yoyo: true,
    ease: "power1.inOut",
  });

  gsap.to(".gsap-bg-shape-2", {
    y: 15,
    rotation: -360,
    duration: 12,
    repeat: -1,
    yoyo: true,
    ease: "power1.inOut",
  });

  gsap.to(".gsap-bg-shape-3", {
    y: -10,
    rotation: 180,
    duration: 10,
    repeat: -1,
    yoyo: true,
    ease: "power1.inOut",
  });

  // Animate background elements with continuous rotation
  gsap.to(".gsap-bg-element-1", {
    rotation: 360,
    scale: 1.2,
    opacity: 0.3,
    duration: 25,
    repeat: -1,
    ease: "none",
  });

  gsap.to(".gsap-bg-element-2", {
    rotation: -360,
    scale: 1.3,
    opacity: 0.4,
    duration: 30,
    repeat: -1,
    ease: "none",
  });

  // Create a subtle floating animation for the arrow
  gsap.to(".gsap-arrow", {
    y: 8,
    duration: 1,
    repeat: -1,
    yoyo: true,
    ease: "power1.inOut",
  });

  // Add hover effects for interactive elements
  const ctaButton = document.querySelector(".gsap-cta-button");
  if (ctaButton) {
    ctaButton.addEventListener("mouseenter", () => {
      gsap.to(ctaButton, {
        scale: 1.05,
        y: -2,
        duration: 0.3,
        ease: "power2.out",
      });
    });

    ctaButton.addEventListener("mouseleave", () => {
      gsap.to(ctaButton, {
        scale: 1,
        y: 0,
        duration: 0.3,
        ease: "power2.out",
      });
    });
  }

  // Add scroll-triggered animations for the hero section
  ScrollTrigger.create({
    trigger: ".hero-headline",
    start: "top center",
    end: "bottom center",
    onEnter: () => {
      gsap.to(".gsap-floating-element", {
        scale: 1.2,
        duration: 1,
        ease: "power2.out",
      });
    },
    onLeave: () => {
      gsap.to(".gsap-floating-element", {
        scale: 1,
        duration: 1,
        ease: "power2.out",
      });
    },
  });

  // Create a parallax effect for background elements
  gsap.to(".gsap-bg-shape-1, .gsap-bg-shape-2, .gsap-bg-shape-3", {
    yPercent: -50,
    ease: "none",
    scrollTrigger: {
      trigger: "body",
      start: "top top",
      end: "bottom top",
      scrub: true,
    },
  });

  // Add a subtle text glow effect on scroll
  ScrollTrigger.create({
    trigger: ".hero-headline",
    start: "top center",
    end: "bottom center",
    onUpdate: (self) => {
      const progress = self.progress;
      gsap.to(".gsap-text-line", {
        textShadow: `0 0 ${20 + progress * 30}px rgba(132, 204, 22, ${
          0.3 + progress * 0.4
        })`,
        duration: 0.1,
      });
    },
  });

  return heroTimeline;
};

export const cleanupHeroAnimations = () => {
  // Kill all GSAP animations and ScrollTriggers
  ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
  gsap.killTweensOf(
    ".gsap-text-line, .gsap-description-text, .gsap-curly-brace, .gsap-cta-button, .gsap-side-label, .gsap-floating-element, .gsap-bg-shape-1, .gsap-bg-shape-2, .gsap-bg-shape-3, .gsap-bg-element-1, .gsap-bg-element-2, .gsap-arrow"
  );
};
