"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import ThemeToggle from "./ThemeToggle";
import { usePathname } from "next/navigation";

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      if (typeof window !== "undefined") {
        setIsScrolled(window.scrollY > 20);
      }
    };

    if (typeof window !== "undefined") {
      window.addEventListener("scroll", handleScroll);
      return () => window.removeEventListener("scroll", handleScroll);
    }
  }, []);

  const navigationItems = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Services", href: "/services" },
    { name: "Portfolio", href: "/portfolio" },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-out ${
        isScrolled
          ? "bg-background/80 backdrop-blur-xl border-b border-border/20 shadow-2xl shadow-black/5"
          : "bg-transparent"
      }`}
    >
      <div className="container--wide">
        <div className="flex items-center justify-between h-24">
          {/* Left Side - Enhanced Logo */}
          <div className="flex items-center group">
            <Link className="flex items-center" href="/">
              <div className="w-16 h-16 mr-3 transition-all duration-500 group-hover:scale-110 opacity-95 group-hover:opacity-100">
                <Image
                  alt="SQL Events Nigeria Logo"
                  width={64}
                  height={64}
                  className="w-full h-full object-contain drop-shadow-lg"
                  src="/logo.png"
                />
              </div>
              <span
                className={`text-3xl font-bold transition-all duration-500 font-display logo-text group-hover:scale-105 ${
                  isScrolled ? "brand-gradient-text" : "brand-gradient-text"
                }`}
              >
                SQL Events
              </span>
            </Link>
          </div>

          {/* Centralized Navigation Menu - Enhanced */}
          <div className="hidden lg:flex items-center justify-center flex-1">
            <div className="flex items-center space-x-16">
              {navigationItems.map((item) => {
                const isActive = pathname === item.href;
                return (
                  <Link
                    key={item.name}
                    href={item.href}
                    className={`group relative font-semibold text-lg tracking-wide transition-all duration-300 ${
                      isActive
                        ? "text-primary font-bold"
                        : "text-foreground/80 hover:text-foreground"
                    }`}
                  >
                    <span className="relative z-10">{item.name}</span>

                    {/* Enhanced hover underline effect */}
                    <span
                      className={`absolute bottom-0 left-0 h-0.5 transition-all duration-300 rounded-full ${
                        isActive
                          ? "w-full bg-primary"
                          : "w-0 bg-gradient-to-r from-primary via-secondary to-accent group-hover:w-full"
                      }`}
                    ></span>

                    {/* Subtle background glow on hover */}
                    <span className="absolute inset-0 bg-gradient-to-r from-primary/5 via-secondary/5 to-accent/5 opacity-0 group-hover:opacity-100 transition-all duration-300 rounded-lg -m-2"></span>
                  </Link>
                );
              })}
            </div>
          </div>

          {/* Right Side - Enhanced Theme Toggle & Contact Button */}
          <div className="hidden lg:flex items-center space-x-8">
            <ThemeToggle />
            <Link
              href="/contact"
              className="group relative px-10 py-4 font-semibold text-lg transition-all duration-500 overflow-hidden rounded-full nav-contact-btn shadow-lg hover:shadow-xl"
            >
              <span className="relative z-10 flex items-center">
                Contact
                <svg
                  className="w-4 h-4 ml-2 transition-transform duration-300 group-hover:translate-x-1"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                  />
                </svg>
              </span>
            </Link>
          </div>

          {/* Enhanced Mobile menu button */}
          <button
            className="lg:hidden p-3 text-foreground hover:text-primary transition-colors duration-300 rounded-lg hover:bg-muted/50"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            <svg
              className="w-7 h-7"
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

        {/* Enhanced Mobile Menu */}
        <div
          className={`lg:hidden transition-all duration-500 ease-out overflow-hidden ${
            isMobileMenuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <div className="py-6 border-t border-border/20">
            <div className="flex flex-col space-y-6">
              {navigationItems.map((item) => {
                const isActive = pathname === item.href;
                return (
                  <Link
                    key={item.name}
                    href={item.href}
                    className={`text-lg font-medium transition-all duration-300 px-4 py-3 rounded-lg ${
                      isActive
                        ? "text-primary bg-primary/10 border-l-4 border-primary"
                        : "text-foreground/80 hover:text-foreground hover:bg-muted/50"
                    }`}
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {item.name}
                  </Link>
                );
              })}

              {/* Mobile Contact Button */}
              <div className="pt-4 border-t border-border/20">
                <Link
                  href="/contact"
                  className="block w-full text-center px-8 py-4 bg-gradient-to-r from-primary via-secondary to-accent text-white font-semibold rounded-full transition-all duration-300 hover:shadow-lg hover:shadow-primary/25"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Contact Us
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
