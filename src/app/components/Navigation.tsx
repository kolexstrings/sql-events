"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import ThemeToggle from "./ThemeToggle";

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border transition-all duration-300">
      <div className="container--wide">
        <div className="flex items-center justify-between h-20">
          {/* Logo - Left Side */}
          <div className="flex items-center">
            <a className="flex items-center" href="/">
              <div className="w-14 h-14 mr-2 transition-all duration-300 opacity-90">
                <img
                  alt="SQL Events Nigeria Logo"
                  loading="lazy"
                  width="56"
                  height="56"
                  decoding="async"
                  data-nimg="1"
                  className="w-full h-full object-contain"
                  style={{ color: "transparent" }}
                  src="/logo.png"
                />
              </div>
              <span
                className={`text-2xl font-bold transition-all duration-300 font-display logo-text ${
                  isScrolled ? "brand-gradient-text" : "brand-gradient-text"
                }`}
              >
                SQL Events
              </span>
            </a>
          </div>

          {/* Centralized Navigation Menu */}
          <div className="hidden lg:flex items-center justify-center flex-1">
            <div className="flex items-center space-x-12">
              {[
                { name: "Services", href: "/services" },
                { name: "Work", href: "/portfolio" },
                { name: "About", href: "/about" },
                { name: "Team", href: "/team" },
                { name: "Press", href: "/press" },
              ].map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`group relative font-bold text-xl tracking-wide transition-all duration-300 ${
                    isScrolled ? "text-foreground" : "text-foreground"
                  }`}
                >
                  <span className="relative z-10">{item.name}</span>
                  {/* Hover underline effect */}
                  <span className="absolute bottom-0 left-0 w-0 h-1 bg-current transition-all duration-300 group-hover:w-full"></span>
                  {/* Hover background effect */}
                  <span className="absolute inset-0 bg-current opacity-0 transition-opacity duration-300 group-hover:opacity-5 rounded-sm"></span>
                </Link>
              ))}
            </div>
          </div>

          {/* Right Side - Theme Toggle & Contact Button */}
          <div className="hidden lg:flex items-center space-x-6">
            <ThemeToggle />
            <Link
              href="/contact"
              className={`group relative px-8 py-4 border-2 font-semibold text-lg transition-all duration-300 overflow-hidden border-foreground text-foreground hover:bg-foreground hover:text-background rounded-full`}
            >
              <span className="relative z-10">Contact</span>
              {/* Button hover effect */}
              <span className="absolute inset-0 bg-current opacity-0 transition-opacity duration-300 group-hover:opacity-10"></span>
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            className="lg:hidden p-3"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle mobile menu"
          >
            <div className="w-7 h-0.5 bg-current mb-2 transition-all duration-300"></div>
            <div className="w-7 h-0.5 bg-current mb-2 transition-all duration-300"></div>
            <div className="w-7 h-0.5 bg-current transition-all duration-300"></div>
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="lg:hidden bg-background/98 backdrop-blur-md border-t border-border">
            <div className="px-6 py-12 space-y-8">
              <div className="flex justify-center mb-6">
                <ThemeToggle />
              </div>
              {[
                { name: "Services", href: "/services" },
                { name: "Work", href: "/portfolio" },
                { name: "About", href: "/about" },
                { name: "Team", href: "/team" },
                { name: "Press", href: "/press" },
                { name: "Contact", href: "/contact" },
              ].map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="block text-foreground font-medium hover:opacity-70 transition-opacity text-2xl"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
