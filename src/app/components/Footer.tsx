"use client";

import Image from "next/image";
import Link from "next/link";
import {
  MapPinIcon,
  PhoneIcon,
  EnvelopeIcon,
  CalendarIcon,
  UsersIcon,
  PresentationChartBarIcon,
  CpuChipIcon,
  UserGroupIcon,
  AcademicCapIcon,
  LinkIcon,
  ChatBubbleLeftRightIcon,
  PhotoIcon,
  HeartIcon,
} from "@heroicons/react/24/outline";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const services = [
    { name: "Conference Management", icon: CalendarIcon, href: "/services" },
    { name: "Corporate Events", icon: UsersIcon, href: "/services" },
    {
      name: "Exhibition Management",
      icon: PresentationChartBarIcon,
      href: "/services",
    },
    { name: "Technology Integration", icon: CpuChipIcon, href: "/services" },
    { name: "Team Building", icon: UserGroupIcon, href: "/services" },
    { name: "Training & Workshops", icon: AcademicCapIcon, href: "/services" },
  ];

  const quickLinks = [
    { name: "About Us", href: "/about" },
    { name: "Our Services", href: "/services" },
    { name: "Portfolio", href: "/portfolio" },
    { name: "Team", href: "/team" },
    { name: "Contact", href: "/contact" },
    { name: "Blog", href: "/blog" },
  ];

  const socialLinks = [
    { name: "LinkedIn", href: "#", icon: LinkIcon },
    { name: "Twitter", href: "#", icon: ChatBubbleLeftRightIcon },
    { name: "Instagram", href: "#", icon: PhotoIcon },
    { name: "Facebook", href: "#", icon: HeartIcon },
  ];

  return (
    <footer className="relative bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white border-t border-slate-700/50">
      {/* Background decorative elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/4 w-64 h-64 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-full blur-3xl footer-bg-element"></div>
        <div
          className="absolute bottom-0 right-1/4 w-80 h-80 bg-gradient-to-br from-secondary/20 to-accent/20 rounded-full blur-3xl footer-bg-element"
          style={{ animationDelay: "2s" }}
        ></div>
      </div>

      <div className="container--wide relative z-10">
        {/* Main Footer Content */}
        <div className="py-20">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-12 footer-grid">
            {/* Brand Section */}
            <div className="lg:col-span-2 footer-section">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 mr-3">
                  <Image
                    alt="SQL Events Nigeria Logo"
                    width={48}
                    height={48}
                    className="w-full h-full object-contain"
                    src="/logo.png"
                  />
                </div>
                <div>
                  <div className="text-3xl font-bold text-white">
                    SQL Events Nigeria
                  </div>
                  <div className="text-base text-slate-300">Est. 2020</div>
                </div>
              </div>

              <p className="text-slate-300 mb-6 max-w-md leading-relaxed text-base">
                Passion. Innovation. Technology in Events Management. We
                transform ordinary events into extraordinary experiences through
                cutting-edge technology and innovative solutions.
              </p>

              {/* Social Media Links */}
              <div className="flex space-x-4">
                {socialLinks.map((social) => (
                  <a
                    key={social.name}
                    href={social.href}
                    className="group w-12 h-12 bg-slate-700/50 hover:bg-primary/30 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110 hover:shadow-lg footer-social-icon"
                    aria-label={social.name}
                  >
                    <social.icon className="w-6 h-6 text-slate-300 group-hover:text-primary transition-colors duration-300" />
                  </a>
                ))}
              </div>
            </div>

            {/* Services Section */}
            <div className="footer-section">
              <h3 className="text-xl font-semibold mb-6 text-white">
                Our Services
              </h3>
              <div className="space-y-4">
                {services.slice(0, 4).map((service) => (
                  <Link
                    key={service.name}
                    href={service.href}
                    className="group flex items-center space-x-3 text-slate-300 hover:text-white transition-colors duration-300 footer-service-link"
                  >
                    <service.icon className="w-5 h-5 text-primary group-hover:scale-110 transition-transform duration-300 icon" />
                    <span className="text-base">{service.name}</span>
                  </Link>
                ))}
              </div>
            </div>

            {/* Quick Links */}
            <div className="footer-section">
              <h3 className="text-xl font-semibold mb-6 text-white">
                Quick Links
              </h3>
              <div className="space-y-4">
                {quickLinks.map((link) => (
                  <Link
                    key={link.name}
                    href={link.href}
                    className="block text-slate-300 hover:text-white transition-colors duration-300 text-base hover:translate-x-1 transform transition-transform duration-300 footer-quick-link"
                  >
                    {link.name}
                  </Link>
                ))}
              </div>
            </div>
          </div>

          {/* Contact & Newsletter Section */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mt-16 pt-16 border-t border-slate-700/50">
            {/* Contact Information */}
            <div className="footer-section">
              <h3 className="text-xl font-semibold mb-6 text-white">
                Get In Touch
              </h3>
              <div className="space-y-5">
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center footer-contact-icon">
                    <MapPinIcon className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <div className="font-medium text-white text-base">
                      Office Location
                    </div>
                    <div className="text-base text-slate-300">
                      Abuja, Nigeria
                    </div>
                  </div>
                </div>

                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 bg-secondary/20 rounded-full flex items-center justify-center footer-contact-icon">
                    <PhoneIcon className="w-6 h-6 text-secondary" />
                  </div>
                  <div>
                    <div className="font-medium text-white text-base">
                      Phone Number
                    </div>
                    <div className="text-base text-slate-300">
                      +234 XXX XXX XXXX
                    </div>
                  </div>
                </div>

                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 bg-accent/20 rounded-full flex items-center justify-center footer-contact-icon">
                    <EnvelopeIcon className="w-6 h-6 text-accent" />
                  </div>
                  <div>
                    <div className="font-medium text-white text-base">
                      Email Address
                    </div>
                    <div className="text-base text-slate-300">
                      contact@sqlevents.com
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Newsletter Signup */}
            <div className="footer-section">
              <h3 className="text-xl font-semibold mb-6 text-white">
                Stay Updated
              </h3>
              <p className="text-slate-300 mb-6 text-base">
                Subscribe to our newsletter for the latest insights, event
                trends, and exclusive offers.
              </p>
              <div className="flex space-x-3 footer-newsletter-form">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-4 py-3 bg-slate-700/50 border border-slate-600/50 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all duration-300 text-white placeholder:text-slate-400 footer-newsletter-input text-base"
                />
                <button className="px-6 py-3 bg-gradient-to-r from-primary to-secondary text-white font-semibold rounded-lg hover:shadow-lg hover:shadow-primary/25 transform hover:-translate-y-1 transition-all duration-300 footer-newsletter-button text-base">
                  Subscribe
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="py-8 border-t border-slate-700/50">
          <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
            <div className="text-center md:text-left">
              <p className="text-slate-400 text-base">
                &copy; {currentYear} SQL Events Nigeria. All rights reserved.
              </p>
            </div>
            <div className="flex items-center space-x-6 text-base text-slate-400">
              <Link
                href="/privacy"
                className="hover:text-white transition-colors"
              >
                Privacy Policy
              </Link>
              <Link
                href="/terms"
                className="hover:text-white transition-colors"
              >
                Terms of Service
              </Link>
              <Link
                href="/cookies"
                className="hover:text-white transition-colors"
              >
                Cookie Policy
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
