import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Register ScrollTrigger plugin
if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export const initCaseStudiesCarousel = () => {
  if (typeof window === "undefined") return;

  // Get the carousel container
  const carouselContainer = document.querySelector(".case-studies-carousel");
  const carouselTrack = document.querySelector(".case-studies-track");
  const cards = document.querySelectorAll(".case-study-card");

  if (!carouselContainer || !carouselTrack || cards.length === 0) return;

  // Set up horizontal scrolling
  gsap.set(carouselTrack, {
    display: "flex",
    width: `${cards.length * 100}%`,
  });

  // Create horizontal scroll animation with scrub
  gsap.to(carouselTrack, {
    x: `-${(cards.length - 1) * 100}%`,
    ease: "none",
    scrollTrigger: {
      trigger: carouselContainer,
      start: "top left",
      end: `+=${(cards.length - 1) * 100}%`,
      scrub: 1,
      pin: false,
      anticipatePin: 1,
    },
  });

  // Animate cards entrance with stagger
  gsap.fromTo(
    cards,
    {
      y: 100,
      opacity: 0,
      scale: 0.8,
      rotationY: 15,
    },
    {
      y: 0,
      opacity: 1,
      scale: 1,
      rotationY: 0,
      duration: 1.2,
      stagger: 0.3,
      ease: "power3.out",
      scrollTrigger: {
        trigger: carouselContainer,
        start: "top 80%",
        end: "top 20%",
        toggleActions: "play none none reverse",
      },
    }
  );

  // Add parallax effect to cards
  cards.forEach((card, index) => {
    gsap.to(card, {
      y: -30,
      rotationY: index % 2 === 0 ? 5 : -5,
      ease: "none",
      scrollTrigger: {
        trigger: card,
        start: "top bottom",
        end: "bottom top",
        scrub: 1,
      },
    });
  });

  // Add floating animation to background elements
  const backgroundElements = document.querySelectorAll(".case-study-bg-element");
  backgroundElements.forEach((element, index) => {
    gsap.to(element, {
      y: -20 + Math.random() * 40,
      x: -10 + Math.random() * 20,
      rotation: Math.random() * 360,
      duration: 4 + Math.random() * 3,
      repeat: -1,
      yoyo: true,
      ease: "power1.inOut",
      delay: index * 0.8,
    });
  });

  // Add hover effects for cards
  cards.forEach((card) => {
    card.addEventListener("mouseenter", () => {
      gsap.to(card, {
        scale: 1.05,
        y: -10,
        duration: 0.3,
        ease: "power2.out",
      });
    });

    card.addEventListener("mouseleave", () => {
      gsap.to(card, {
        scale: 1,
        y: 0,
        duration: 0.3,
        ease: "power2.out",
      });
    });
  });

  // Add scroll indicator animation
  const scrollIndicator = document.querySelector(".scroll-indicator");
  if (scrollIndicator) {
    gsap.to(scrollIndicator, {
      opacity: 0.5,
      y: -5,
      duration: 2,
      repeat: -1,
      yoyo: true,
      ease: "power1.inOut",
    });
  }
};

export const cleanupCaseStudiesCarousel = () => {
  if (typeof window === "undefined") return;
  
  // Kill all ScrollTrigger instances
  ScrollTrigger.getAll().forEach(trigger => trigger.kill());
  
  // Kill all GSAP animations
  gsap.killTweensOf("*");
};
