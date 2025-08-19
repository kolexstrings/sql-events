import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

export const initHorizontalScrollSection = () => {
  const section = document.querySelector(".horizontal-scroll-section");
  const container = document.querySelector(".horizontal-scroll-container");
  const items = document.querySelectorAll(".horizontal-scroll-item");

  if (!section || !container || !items.length) {
    return;
  }

  // Calculate total scroll width (3 panels = 3 viewport widths)
  const totalWidth = window.innerWidth * 2; // Move 2 viewport widths to show all 3 panels

  // Create horizontal scroll animation
  const horizontalScroll = gsap.to(container, {
    x: -totalWidth,
    ease: "none",
    scrollTrigger: {
      trigger: section,
      start: "top top",
      end: () => `+=${window.innerHeight * 3}`, // 3x viewport height for smooth scroll
      pin: true,
      scrub: 1,
      invalidateOnRefresh: true,
      onUpdate: (self) => {
        // Debug: log scroll progress
        console.log(
          "Scroll progress:",
          self.progress,
          "Container x:",
          gsap.getProperty(container, "x")
        );
      },
    },
  });

  // Animate individual items as they come into view
  items.forEach((item, index) => {
    const svgs = item.querySelectorAll("svg");
    const content = item.querySelector(".item-content");

    // SVG animations
    svgs.forEach((svg) => {
      const paths = svg.querySelectorAll(
        "path, circle, rect, polygon, line, text"
      );
      const groups = svg.querySelectorAll("g");

      // Animate SVG elements
      gsap.fromTo(
        paths,
        {
          scale: 0,
          rotation: -180,
          opacity: 0,
        },
        {
          scale: 1,
          rotation: 0,
          opacity: 1,
          duration: 1,
          stagger: 0.1,
          ease: "back.out(1.7)",
          scrollTrigger: {
            trigger: item,
            start: "left 80%",
            end: "left 20%",
            horizontal: true,
            containerAnimation: horizontalScroll,
            toggleActions: "play none none reverse",
          },
        }
      );

      // Floating animation for SVG groups
      gsap.to(groups, {
        y: -10,
        duration: 2,
        repeat: -1,
        yoyo: true,
        ease: "power1.inOut",
        stagger: 0.2,
      });
    });

    // Panel-specific animations based on index
    if (index === 0) {
      // Tech panel animations
      const techElements = item.querySelectorAll(
        ".tech-orbit-1, .tech-orbit-2"
      );
      techElements.forEach((orbit, orbitIndex) => {
        gsap.to(orbit, {
          rotation: orbitIndex % 2 === 0 ? 360 : -360,
          duration: 20 + orbitIndex * 5,
          repeat: -1,
          ease: "none",
        });
      });

      // Tech particles floating animation
      const techParticles = item.querySelectorAll(".tech-particle");
      techParticles.forEach((particle, particleIndex) => {
        gsap.to(particle, {
          y: -15 + Math.random() * 30,
          x: -10 + Math.random() * 20,
          duration: 3 + Math.random() * 2,
          repeat: -1,
          yoyo: true,
          ease: "power1.inOut",
          delay: particleIndex * 0.5,
        });
      });

      // Tech streams animation
      const techStreams = item.querySelectorAll(
        ".tech-stream-1, .tech-stream-2, .tech-stream-3, .tech-stream-4"
      );
      techStreams.forEach((stream, streamIndex) => {
        gsap.fromTo(
          stream,
          {
            strokeDasharray: "0,100",
          },
          {
            strokeDasharray: "100,0",
            duration: 2,
            repeat: -1,
            yoyo: true,
            ease: "power2.inOut",
            delay: streamIndex * 0.3,
          }
        );
      });
    } else if (index === 1) {
      // Team panel animations
      const teamConnections = item.querySelectorAll(".team-line");
      teamConnections.forEach((line, lineIndex) => {
        gsap.fromTo(
          line,
          {
            strokeDasharray: "0,200",
          },
          {
            strokeDasharray: "200,0",
            duration: 2,
            repeat: -1,
            yoyo: true,
            ease: "power2.inOut",
            delay: lineIndex * 0.2,
          }
        );
      });

      const teamMembers = item.querySelectorAll(".team-member");
      teamMembers.forEach((member, memberIndex) => {
        gsap.to(member, {
          scale: 1.1,
          duration: 2,
          repeat: -1,
          yoyo: true,
          ease: "power1.inOut",
          delay: memberIndex * 0.3,
        });
      });
    } else if (index === 2) {
      // Client panel animations
      const clientDots = item.querySelectorAll(".client-dot");
      clientDots.forEach((dot, dotIndex) => {
        gsap.to(dot, {
          scale: 1.2,
          opacity: 0.8,
          duration: 1.5,
          repeat: -1,
          yoyo: true,
          ease: "power1.inOut",
          delay: dotIndex * 0.1,
        });
      });

      const clientConnections = item.querySelectorAll(".client-connection");
      clientConnections.forEach((connection, connIndex) => {
        gsap.fromTo(
          connection,
          {
            strokeDasharray: "0,100",
          },
          {
            strokeDasharray: "100,0",
            duration: 3,
            repeat: -1,
            yoyo: true,
            ease: "power2.inOut",
            delay: connIndex * 0.4,
          }
        );
      });
    }

    // Content animation
    if (content) {
      gsap.fromTo(
        content,
        {
          y: 50,
          opacity: 0,
        },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          ease: "power2.out",
          scrollTrigger: {
            trigger: item,
            start: "left 70%",
            end: "left 30%",
            horizontal: true,
            containerAnimation: horizontalScroll,
            toggleActions: "play none none reverse",
          },
        }
      );
    }
  });

  // Parallax background elements
  const bgElements = document.querySelectorAll(".horizontal-bg-element");
  bgElements.forEach((element, index) => {
    gsap.to(element, {
      x: (index % 2 === 0 ? -1 : 1) * 100,
      rotation: 360,
      duration: 10,
      repeat: -1,
      ease: "none",
    });
  });

  return horizontalScroll;
};

export const cleanupHorizontalScroll = () => {
  ScrollTrigger.getAll().forEach((trigger) => {
    if (
      trigger.vars.trigger?.classList?.contains("horizontal-scroll-section")
    ) {
      trigger.kill();
    }
  });
};
