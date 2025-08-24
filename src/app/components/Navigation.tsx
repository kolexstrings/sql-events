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
        <div className="flex items-center justify-between h-16 sm:h-20 md:h-24">
          {/* Left Side - Enhanced Logo */}
          <div className="flex items-center group">
            <Link className="flex items-center" href="/">
              <div className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 lg:w-14 lg:h-14 mr-2 sm:mr-3 transition-all duration-500 group-hover:scale-110 opacity-95 group-hover:opacity-100">
                <Image
                  alt="SQL Events Nigeria Logo"
                  width={64}
                  height={64}
                  className="w-full h-full object-contain drop-shadow-lg"
                  src="/logo.png"
                />
              </div>
              <span
                className={`text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl font-bold transition-all duration-500 font-display logo-text group-hover:scale-105 ${
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
            className="md:hidden p-2 sm:p-3 text-foreground hover:text-primary transition-all duration-300 rounded-xl hover:bg-muted/50 relative group border border-border/20 bg-muted/30"
            onClick={() => {
              console.log(
                "Mobile menu clicked, current state:",
                isMobileMenuOpen
              );
              setIsMobileMenuOpen(!isMobileMenuOpen);
            }}
            aria-label="Toggle mobile menu"
          >
            <div className="relative w-6 h-6 sm:w-7 sm:h-7">
              {/* Animated hamburger lines */}
              <span
                className={`absolute left-0 w-full h-0.5 bg-current transition-all duration-300 ${
                  isMobileMenuOpen
                    ? "rotate-45 top-1/2 -translate-y-1/2"
                    : "top-1"
                }`}
              ></span>
              <span
                className={`absolute left-0 w-full h-0.5 bg-current transition-all duration-300 top-1/2 -translate-y-1/2 ${
                  isMobileMenuOpen ? "opacity-0" : "opacity-100"
                }`}
              ></span>
              <span
                className={`absolute left-0 w-full h-0.5 bg-current transition-all duration-300 ${
                  isMobileMenuOpen
                    ? "-rotate-45 top-1/2 -translate-y-1/2"
                    : "bottom-1"
                }`}
              ></span>
            </div>

            {/* Subtle glow effect */}
            <div className="absolute inset-0 bg-primary/10 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </button>
        </div>

        {/* Enhanced Mobile Menu */}
        <div
          className={`md:hidden transition-all duration-500 ease-out overflow-hidden ${
            isMobileMenuOpen
              ? "max-h-[800px] opacity-100 visible"
              : "max-h-0 opacity-0 invisible"
          }`}
        >
          <div className="py-6 sm:py-8 border-t border-border/20 bg-background/95 backdrop-blur-xl">
            {/* Menu Header */}
            <div className="px-4 sm:px-6 mb-6">
              <div className="flex items-center justify-between mb-4">
                <span className="text-sm font-medium text-muted-foreground uppercase tracking-wider">
                  Navigation
                </span>
                <div className="w-8 h-px bg-border/50"></div>
              </div>
            </div>

            {/* Navigation Items */}
            <div className="px-4 sm:px-6 mb-6">
              <div className="flex flex-col space-y-2">
                {navigationItems.map((item) => {
                  const isActive = pathname === item.href;
                  return (
                    <Link
                      key={item.name}
                      href={item.href}
                      className={`group relative px-4 py-4 rounded-xl transition-all duration-300 ${
                        isActive
                          ? "text-primary bg-primary/10 border-l-4 border-primary shadow-sm"
                          : "text-foreground/80 hover:text-foreground hover:bg-muted/50"
                      }`}
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      <div className="flex items-center justify-between">
                        <span
                          className={`font-medium text-base sm:text-lg transition-colors duration-300 ${
                            isActive
                              ? "text-primary"
                              : "group-hover:text-foreground"
                          }`}
                        >
                          {item.name}
                        </span>
                        <div
                          className={`w-2 h-2 rounded-full transition-all duration-300 ${
                            isActive
                              ? "bg-primary scale-100"
                              : "bg-muted-foreground/30 scale-75 group-hover:scale-100 group-hover:bg-primary/50"
                          }`}
                        ></div>
                      </div>

                      {/* Subtle hover effect */}
                      <div
                        className={`absolute inset-0 rounded-xl transition-all duration-300 ${
                          isActive
                            ? "bg-primary/5"
                            : "bg-transparent group-hover:bg-muted/20"
                        }`}
                      ></div>
                    </Link>
                  );
                })}
              </div>
            </div>

            {/* Theme Toggle Section */}
            <div className="px-4 sm:px-6 mb-6">
              <div className="flex items-center justify-between mb-4">
                <span className="text-sm font-medium text-muted-foreground uppercase tracking-wider">
                  Theme
                </span>
                <div className="w-8 h-px bg-border/50"></div>
              </div>
              <div className="flex justify-center">
                <ThemeToggle />
              </div>
            </div>

            {/* Enhanced Mobile Contact Button */}
            <div className="px-4 sm:px-6">
              <div className="pt-4 border-t border-border/20">
                <Link
                  href="/contact"
                  className="group relative block w-full text-center px-6 sm:px-8 py-4 sm:py-5 bg-gradient-to-r from-primary via-secondary to-accent text-white font-semibold rounded-xl transition-all duration-300 hover:shadow-lg hover:shadow-primary/25 text-sm sm:text-base overflow-hidden"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  <span className="relative z-10 flex items-center justify-center space-x-2">
                    <span>Contact Us</span>
                    <svg
                      className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1"
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

                  {/* Button background animation */}
                  <div className="absolute inset-0 bg-gradient-to-r from-primary/80 via-secondary/80 to-accent/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
