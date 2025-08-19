"use client";

import { useEffect } from "react";
import { motion } from "framer-motion";
import Navigation from "./components/Navigation";
import { initSmoothScroll, textReveal, cardAnimations } from "./lib/animations";
import {
  initHeroAnimations,
  cleanupHeroAnimations,
} from "./lib/heroAnimations";

export default function Home() {
  useEffect(() => {
    initSmoothScroll();
    initHeroAnimations();
    textReveal(".text-reveal");
    cardAnimations();

    // Cleanup function
    return () => {
      cleanupHeroAnimations();
    };
  }, []);

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navigation />

      {/* Hero Section - GSAP Style */}
      <section className="relative min-h-screen flex items-center justify-center bg-background text-foreground overflow-hidden">
        {/* Main Hero Content */}
        <div className="container--ultra-wide relative z-10 text-center py-20 mt-20">
          <div className="max-w-none mx-auto">
            {/* Hero Headline with GSAP Animations */}
            <div className="relative mb-12">
              {/* Animated floating elements */}
              <div className="absolute -top-20 left-1/2 transform -translate-x-1/2 w-16 h-16 gsap-floating-element">
                <div className="relative w-full h-full">
                  <div className="absolute inset-0 bg-gradient-to-br from-orange-400 to-pink-500 rounded-full opacity-80"></div>
                  <div className="absolute inset-0 bg-gradient-to-br from-pink-500 to-purple-500 rounded-full opacity-60 transform rotate-45"></div>
                  <div className="absolute inset-0 bg-gradient-to-br from-purple-500 to-orange-400 rounded-full opacity-40 transform rotate-90"></div>
                  <div className="absolute inset-0 bg-gradient-to-br from-orange-400 to-pink-500 rounded-full opacity-20 transform rotate-135"></div>
                </div>
              </div>

              <div className="text-left">
                <h1 className="hero-headline text-8xl md:text-9xl lg:text-[12rem] font-black leading-none text-balance font-display">
                  <span className="block gsap-text-line" data-text="Passion">
                    Passion
                  </span>
                  <span
                    className="block gsap-text-line"
                    data-text="and Innovation"
                  >
                    and Innovation
                  </span>
                </h1>
              </div>

              {/* Animated background shapes */}
              <div className="absolute -top-32 -right-32 w-64 h-64 border border-lime-400/20 rounded-full gsap-bg-shape-1"></div>
              <div className="absolute -bottom-16 -left-16 w-32 h-32 border border-pink-500/20 rotate-45 gsap-bg-shape-2"></div>
              <div className="absolute top-1/2 -right-20 w-40 h-40 border border-purple-500/20 rounded-full gsap-bg-shape-3"></div>
            </div>

            {/* Hero Description in Curly Braces with GSAP */}
            <div className="mb-16 gsap-description-section">
              <div className="flex items-center justify-between">
                {/* Left side - Description with Curly Braces */}
                <div className="flex items-center">
                  {/* Left Curly Brace */}
                  <div className="text-4xl text-lime-400 font-bold mr-4 gsap-curly-brace">
                    {"{"}
                  </div>

                  {/* Description Text */}
                  <p className="text-base md:text-lg max-w-l leading-relaxed text-muted-foreground font-light gsap-description-text">
                    SQL Events - A wildly innovative events management company
                    built for the modern Nigerian corporate world
                  </p>

                  {/* Right Curly Brace */}
                  <div className="text-4xl text-lime-400 font-bold ml-4 gsap-curly-brace">
                    {"}"}
                  </div>
                </div>

                {/* Right side - Get Started Button */}
                <button className="group relative px-12 py-6 bg-lime-400 text-black font-bold text-lg rounded-full hover:bg-lime-300 transition-all duration-300 shadow-2xl hover:shadow-lime-400/25 gsap-cta-button">
                  <span className="flex items-center space-x-2">
                    <span>Get Started</span>
                    <span className="gsap-arrow">↓</span>
                  </span>
                </button>
              </div>
            </div>

            {/* CTA Button - Bottom Right Style */}
            {/* Removed - now integrated with description text */}
          </div>
        </div>

        {/* Side Label - Site of the Day Style */}
        <div className="absolute left-8 top-1/2 transform -translate-y-1/2 text-sm font-medium text-muted-foreground writing-mode-vertical gsap-side-label">
          <div className="text-center">
            <div className="text-accent font-bold">SQL</div>
            <div className="text-xs">Events</div>
            <div className="text-xs">Nigeria</div>
          </div>
        </div>

        {/* Floating Background Elements */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/4 right-1/4 w-32 h-32 border border-lime-400/20 rounded-full gsap-bg-element-1"></div>
          <div className="absolute bottom-1/3 left-1/4 w-24 h-24 border border-pink-500/20 rotate-45 gsap-bg-element-2"></div>
        </div>
      </section>

      {/* Who We Are Section - GSAP Style */}
      <section className="py-32 bg-card text-card-foreground">
        <div className="container--wide">
          <div className="max-w-none mx-auto">
            {/* Section Title with Curly Braces */}
            <motion.div
              className="mb-20"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center mb-12">
                <div className="text-2xl text-accent font-bold mr-4">{"{"}</div>
                <h2 className="text-lg font-medium text-muted-foreground">
                  Why SQL Events?
                </h2>
                <div className="text-2xl text-accent font-bold ml-4">{"}"}</div>
              </div>
            </motion.div>

            {/* Main Bold Statement */}
            <motion.div
              className="mb-20"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <p className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-card-foreground max-w-6xl">
                SQL Events allows you to{" "}
                <span className="text-primary">effortlessly manage</span>{" "}
                anything corporate events can touch.{" "}
                <span className="text-secondary">Delivering exceptional</span>{" "}
                experiences and{" "}
                <span className="text-accent">unmatched support</span> so you
                can focus on the{" "}
                <span className="text-primary">impactful moments</span>.
              </p>
            </motion.div>

            {/* Supporting Stats */}
            <motion.div
              className="grid md:grid-cols-4 gap-8 pt-16 border-t border-border/20"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <div className="text-center md:text-left">
                <div className="text-3xl font-bold text-primary mb-2">500+</div>
                <div className="text-sm text-muted-foreground">
                  Events Delivered
                </div>
              </div>
              <div className="text-center md:text-left">
                <div className="text-3xl font-bold text-secondary mb-2">
                  50+
                </div>
                <div className="text-sm text-muted-foreground">
                  Corporate Clients
                </div>
              </div>
              <div className="text-center md:text-left">
                <div className="text-3xl font-bold text-accent mb-2">98%</div>
                <div className="text-sm text-muted-foreground">
                  Client Satisfaction
                </div>
              </div>
              <div className="text-center md:text-left">
                <div className="text-3xl font-bold text-brand-orange mb-2">
                  5+
                </div>
                <div className="text-sm text-muted-foreground">
                  Years Experience
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-24 bg-background text-foreground">
        <div className="container--wide">
          <motion.div
            className="mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-2xl md:text-3xl font-bold mb-4">
              Why Choose Us
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl">
              We stand out in the events industry through our unique combination
              of expertise, technology, and unwavering commitment to excellence.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10 max-w-none mx-auto">
            {[
              {
                icon: "🎯",
                title: "Strategic Approach",
                description:
                  "Every event is planned with clear objectives and measurable outcomes in mind.",
                color: "primary",
              },
              {
                icon: "💡",
                title: "Innovation First",
                description:
                  "We leverage cutting-edge technology to create memorable experiences.",
                color: "secondary",
              },
              {
                icon: "🤝",
                title: "Partnership Focus",
                description:
                  "We work as an extension of your team, ensuring seamless collaboration.",
                color: "accent",
              },
              {
                icon: "📊",
                title: "Data-Driven",
                description:
                  "Our decisions are backed by analytics and industry insights.",
                color: "brand-orange",
              },
              {
                icon: "🌍",
                title: "Local Expertise",
                description:
                  "Deep understanding of Nigerian business culture and regulations.",
                color: "brand-purple",
              },
              {
                icon: "⚡",
                title: "Agile Execution",
                description:
                  "Quick adaptation to changes while maintaining quality standards.",
                color: "brand-green",
              },
            ].map((feature, index) => (
              <motion.div
                key={index}
                className="card group bg-card p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-border hover:border-primary/40"
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -8, scale: 1.02 }}
              >
                <div
                  className={`w-16 h-16 rounded-2xl bg-gradient-to-br from-${feature.color}/20 to-${feature.color}/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}
                >
                  <span className="text-3xl">{feature.icon}</span>
                </div>
                <h3 className="text-xl font-bold mb-4 text-foreground">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* What We Do Section */}
      <section className="py-24 bg-card text-card-foreground">
        <div className="container--wide">
          <motion.div
            className="mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-2xl md:text-3xl font-bold mb-4">What We Do</h2>
            <p className="text-lg text-muted-foreground max-w-3xl">
              Comprehensive event management solutions designed for the modern
              corporate world
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10 max-w-none mx-auto">
            {[
              {
                icon: "🎤",
                title: "Conference Management",
                description:
                  "Professional conference planning and execution with cutting-edge technology",
                color: "primary",
              },
              {
                icon: "🏢",
                title: "Corporate Events",
                description:
                  "AGMs, product launches, and corporate gatherings that make an impact",
                color: "secondary",
              },
              {
                icon: "🎪",
                title: "Exhibition Management",
                description:
                  "Trade shows and exhibitions that showcase your brand effectively",
                color: "accent",
              },
              {
                icon: "💻",
                title: "Technology Integration",
                description:
                  "State-of-the-art tech solutions for seamless event experiences",
                color: "brand-orange",
              },
              {
                icon: "🤝",
                title: "Team Building",
                description:
                  "Engaging team building activities that strengthen collaboration",
                color: "brand-purple",
              },
              {
                icon: "📚",
                title: "Training & Workshops",
                description:
                  "Professional development sessions that drive growth",
                color: "brand-green",
              },
            ].map((service, index) => (
              <motion.div
                key={index}
                className="card group bg-background p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-border hover:border-primary/40"
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -8, scale: 1.02 }}
              >
                <div
                  className={`w-16 h-16 rounded-2xl bg-gradient-to-br from-${service.color}/20 to-${service.color}/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}
                >
                  <span className="text-3xl">{service.icon}</span>
                </div>
                <h3 className="text-xl font-bold mb-4 text-foreground">
                  {service.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {service.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Case Studies (Portfolio) Section */}
      <section className="py-24 bg-background text-foreground">
        <div className="container--wide">
          <div className="flex justify-between items-end mb-16">
            <motion.h2
              className="text-2xl md:text-3xl font-bold"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              Case Studies
            </motion.h2>
            <motion.a
              href="/portfolio"
              className="text-primary hover:text-primary/80 transition-colors duration-300 font-semibold"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              View All Work →
            </motion.a>
          </div>

          <div className="grid md:grid-cols-2 gap-10 max-w-none mx-auto">
            {[
              {
                title: "NBA Annual Conference",
                category: "Conference Management",
                year: "2024",
                gradient: "from-primary/20 to-accent/20",
              },
              {
                title: "COREN Engineering Assembly",
                category: "Corporate Events",
                year: "2024",
                gradient: "from-accent/20 to-secondary/20",
              },
              {
                title: "Rivers State Education Summit",
                category: "Government Events",
                year: "2024",
                gradient: "from-secondary/20 to-primary/20",
              },
              {
                title: "Tech Innovation Forum",
                category: "Technology Events",
                year: "2024",
                gradient: "from-primary/20 to-secondary/20",
              },
            ].map((project, index) => (
              <motion.div
                key={index}
                className={`bg-gradient-to-br ${project.gradient} h-80 rounded-2xl p-8 flex flex-col justify-between group cursor-pointer`}
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -8, scale: 1.02 }}
              >
                <div className="text-right">
                  <span className="text-sm text-muted-foreground">
                    {project.year}
                  </span>
                </div>
                <div>
                  <h3 className="text-2xl font-bold mb-2 text-foreground">
                    {project.title}
                  </h3>
                  <p className="text-muted-foreground">{project.category}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-24 bg-card text-card-foreground">
        <div className="container--wide">
          <motion.div
            className="mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-2xl md:text-3xl font-bold mb-4">
              What Our Clients Say
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl">
              Don&apos;t just take our word for it. Here&apos;s what our clients
              have to say about their experience.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8 max-w-none mx-auto">
            {[
              {
                quote:
                  "SQL Events transformed our annual conference into an unforgettable experience. Their attention to detail and innovative approach exceeded our expectations.",
                author: "Dr. Sarah Johnson",
                position: "CEO, TechCorp Nigeria",
                company: "TechCorp Nigeria",
              },
              {
                quote:
                  "The team at SQL Events is professional, creative, and incredibly reliable. They made our product launch a huge success with their strategic planning.",
                author: "Michael Adebayo",
                position: "Marketing Director",
                company: "Innovate Solutions",
              },
              {
                quote:
                  "Working with SQL Events was seamless from start to finish. Their technology integration capabilities gave our event a competitive edge.",
                author: "Chioma Okonkwo",
                position: "Events Manager",
                company: "Global Industries Ltd",
              },
            ].map((testimonial, index) => (
              <motion.div
                key={index}
                className="bg-background p-8 rounded-2xl shadow-lg border border-border"
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="text-primary text-4xl mb-4">"</div>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  {testimonial.quote}
                </p>
                <div>
                  <div className="font-semibold text-foreground">
                    {testimonial.author}
                  </div>
                  <div className="text-sm text-muted-foreground">
                    {testimonial.position}
                  </div>
                  <div className="text-sm text-primary font-medium">
                    {testimonial.company}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact CTA/Form Section */}
      <section className="py-24 bg-primary text-primary-foreground">
        <div className="container--wide">
          <div className="max-w-none mx-auto">
            <motion.div
              className="mb-16"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="text-2xl md:text-3xl font-bold mb-4">
                Ready to Transform Your Event?
              </h2>
              <p className="text-lg opacity-90 max-w-3xl">
                Let&apos;s discuss how we can bring your vision to life with our
                innovative events management solutions.
              </p>
            </motion.div>

            <div className="grid lg:grid-cols-2 gap-16 items-start">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                <h3 className="text-2xl font-bold mb-6">Get in Touch</h3>
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-primary-foreground/20 rounded-full flex items-center justify-center">
                      📍
                    </div>
                    <div>
                      <div className="font-semibold">Address</div>
                      <div className="text-sm opacity-80">
                        Victoria Island, Lagos, Nigeria
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-primary-foreground/20 rounded-full flex items-center justify-center">
                      📞
                    </div>
                    <div>
                      <div className="font-semibold">Phone</div>
                      <div className="text-sm opacity-80">
                        +234 XXX XXX XXXX
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-primary-foreground/20 rounded-full flex items-center justify-center">
                      ✉️
                    </div>
                    <div>
                      <div className="font-semibold">Email</div>
                      <div className="text-sm opacity-80">
                        hello@sqlevents.ng
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>

              <motion.form
                className="space-y-6"
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                <div className="grid md:grid-cols-2 gap-4">
                  <input
                    type="text"
                    placeholder="First Name"
                    className="w-full px-4 py-3 bg-primary-foreground/10 border border-primary-foreground/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-foreground/50 focus:border-transparent text-primary-foreground placeholder-primary-foreground/60"
                  />
                  <input
                    type="text"
                    placeholder="Last Name"
                    className="w-full px-4 py-3 bg-primary-foreground/10 border border-primary-foreground/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-foreground/50 focus:border-transparent text-primary-foreground placeholder-primary-foreground/60"
                  />
                </div>
                <input
                  type="email"
                  placeholder="Email Address"
                  className="w-full px-4 py-3 bg-primary-foreground/10 border border-primary-foreground/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-foreground/50 focus:border-transparent text-primary-foreground placeholder-primary-foreground/60"
                />
                <textarea
                  placeholder="Tell us about your event..."
                  rows={4}
                  className="w-full px-4 py-3 bg-primary-foreground/10 border border-primary-foreground/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-foreground/50 focus:border-transparent text-primary-foreground placeholder-primary-foreground/60 resize-none"
                ></textarea>
                <button
                  type="submit"
                  className="w-full px-8 py-4 bg-primary-foreground text-primary font-bold rounded-lg hover:bg-primary-foreground/90 transition-colors duration-300"
                >
                  Send Message
                </button>
              </motion.form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-16 bg-card text-card-foreground border-t border-border">
        <div className="container--wide">
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <div className="text-2xl font-bold mb-4">SQL Events Nigeria</div>
              <p className="text-muted-foreground mb-6">
                Passion. Innovation. Technology in Events Management.
              </p>
              <div className="flex space-x-6 text-muted-foreground">
                <a href="#" className="hover:text-foreground transition-colors">
                  LinkedIn
                </a>
                <a href="#" className="hover:text-foreground transition-colors">
                  Twitter
                </a>
                <a href="#" className="hover:text-foreground transition-colors">
                  Instagram
                </a>
              </div>
            </div>
            <div className="text-right">
              <p className="text-muted-foreground mb-2">Lagos, Nigeria</p>
              <p className="text-muted-foreground mb-2">+234 XXX XXX XXXX</p>
              <p className="text-muted-foreground">hello@sqlevents.ng</p>
            </div>
          </div>
          <div className="mt-12 pt-8 border-t border-border text-center text-muted-foreground">
            <p>&copy; 2024 SQL Events Nigeria. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
