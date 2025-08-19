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
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? "bg-white/98 dark:bg-gray-900/98 backdrop-blur-md shadow-sm"
          : "bg-transparent"
      }`}
    >
      <div className="container">
        <div className="flex items-center justify-between h-28">
          {/* Logo - Left Side */}
          <div className="flex items-center">
            <Link href="/" className="flex items-center">
              <div
                className={`w-14 h-14 mr-4 transition-all duration-300 ${
                  isScrolled ? "opacity-100" : "opacity-90"
                }`}
              >
                <Image
                  src="/logo.png"
                  alt="SQL Events Nigeria Logo"
                  width={56}
                  height={56}
                  className="w-full h-full object-contain"
                />
              </div>
              <span
                className={`text-2xl font-bold transition-colors duration-300 ${
                  isScrolled ? "text-gray-900 dark:text-white" : "text-white"
                }`}
              >
                SQL Events Nigeria
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
                    isScrolled
                      ? "text-gray-800 dark:text-gray-200"
                      : "text-white"
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
              className={`group relative px-8 py-4 border-2 font-semibold text-lg transition-all duration-300 overflow-hidden ${
                isScrolled
                  ? "border-gray-900 text-gray-900 hover:bg-gray-900 hover:text-white dark:border-white dark:text-white dark:hover:bg-white dark:hover:text-gray-900"
                  : "border-white text-white hover:bg-white hover:text-gray-900"
              }`}
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
          <div className="lg:hidden bg-white/98 dark:bg-gray-900/98 backdrop-blur-md border-t border-gray-200 dark:border-gray-700">
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
                  className="block text-gray-800 dark:text-gray-200 font-medium hover:opacity-70 transition-opacity text-2xl"
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
