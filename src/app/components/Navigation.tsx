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
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-background/95 backdrop-blur-md border-b border-border shadow-lg"
          : "bg-transparent"
      }`}
    >
      <div className="container--wide">
        <div className="flex items-center justify-between h-20">
          {/* Left Side - Logo */}
          <div className="flex items-center">
            <Link href="/" className="flex items-center space-x-3">
              <Image
                src="/logo.png"
                alt="SQL Events Logo"
                width={40}
                height={40}
                className="w-10 h-10"
              />
              <span className="text-xl font-bold text-foreground">
                SQL Events
              </span>
            </Link>
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
            className="lg:hidden p-2 text-foreground"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {isMobileMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden py-4 border-t border-border">
            <div className="flex flex-col space-y-4">
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
                  className="text-foreground hover:text-primary transition-colors duration-300 font-medium"
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
