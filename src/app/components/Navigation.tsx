"use client";

import { useState, useEffect } from "react";

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
        isScrolled ? "bg-white/95 backdrop-blur-md shadow-lg" : "bg-transparent"
      }`}
    >
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex items-center">
            <a
              href="#"
              className={`text-2xl font-bold transition-colors duration-300 ${
                isScrolled ? "text-slate-900" : "text-white"
              }`}
            >
              SQL Events
            </a>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {[
              { name: "Services", href: "#services" },
              { name: "About", href: "#about" },
              { name: "Portfolio", href: "#portfolio" },
              { name: "Contact", href: "#contact" },
            ].map((item) => (
              <a
                key={item.name}
                href={item.href}
                className={`font-medium transition-colors duration-300 hover:text-purple-600 ${
                  isScrolled ? "text-slate-700" : "text-white"
                }`}
              >
                {item.name}
              </a>
            ))}
            <button
              className={`px-6 py-2 rounded-full font-medium transition-all duration-300 ${
                isScrolled
                  ? "bg-purple-600 text-white hover:bg-purple-700"
                  : "bg-white text-slate-900 hover:bg-gray-100"
              }`}
            >
              Get Quote
            </button>
          </div>

          {/* Mobile menu button */}
          <button
            className="md:hidden p-2"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle mobile menu"
          >
            <div
              className={`w-6 h-0.5 bg-current transition-all duration-300 ${
                isScrolled ? "text-slate-900" : "text-white"
              }`}
            >
              <div
                className={`transform transition-all duration-300 ${
                  isMobileMenuOpen ? "rotate-45 translate-y-1" : ""
                }`}
              ></div>
              <div
                className={`w-6 h-0.5 bg-current mt-1.5 transition-all duration-300 ${
                  isScrolled ? "text-slate-900" : "text-white"
                } ${isMobileMenuOpen ? "opacity-0" : ""}`}
              ></div>
              <div
                className={`w-6 h-0.5 bg-current mt-1.5 transition-all duration-300 ${
                  isScrolled ? "text-slate-900" : "text-white"
                } ${isMobileMenuOpen ? "-rotate-45 -translate-y-1" : ""}`}
              ></div>
            </div>
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="md:hidden bg-white/95 backdrop-blur-md border-t border-gray-200">
            <div className="px-6 py-4 space-y-4">
              {[
                { name: "Services", href: "#services" },
                { name: "About", href: "#about" },
                { name: "Portfolio", href: "#portfolio" },
                { name: "Contact", href: "#contact" },
              ].map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="block text-slate-700 font-medium hover:text-purple-600 transition-colors duration-300"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {item.name}
                </a>
              ))}
              <button className="w-full px-6 py-2 rounded-full font-medium bg-purple-600 text-white hover:bg-purple-700 transition-colors duration-300">
                Get Quote
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
