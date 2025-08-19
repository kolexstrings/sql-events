"use client";

import { useEffect } from "react";
import { motion } from "framer-motion";
import Navigation from "./components/Navigation";
import {
  initSmoothScroll,
  heroAnimations,
  textReveal,
  cardAnimations,
} from "./lib/animations";

export default function Home() {
  useEffect(() => {
    initSmoothScroll();
    heroAnimations();
    textReveal();
    cardAnimations();
  }, []);

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navigation />

      {/* Hero Section - Professional GSAP Style */}
      <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-background via-background to-card overflow-hidden">
        {/* Animated background grid */}
        <div className="absolute inset-0 opacity-5">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `radial-gradient(circle at 1px 1px, var(--primary) 1px, transparent 0)`,
              backgroundSize: "50px 50px",
            }}
          ></div>
        </div>

        {/* Floating geometric shapes */}
        <div className="absolute inset-0 pointer-events-none">
          <motion.div
            className="absolute top-20 left-20 w-32 h-32 border border-primary/20 rounded-full"
            animate={{
              rotate: 360,
              scale: [1, 1.2, 1],
              opacity: [0.1, 0.3, 0.1],
            }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          />
          <motion.div
            className="absolute top-40 right-32 w-24 h-24 border border-secondary/20 rotate-45"
            animate={{
              rotate: -360,
              scale: [1, 1.3, 1],
              opacity: [0.1, 0.4, 0.1],
            }}
            transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
          />
          <motion.div
            className="absolute bottom-32 left-1/3 w-40 h-40 border border-accent/20 rounded-full"
            animate={{
              rotate: 360,
              scale: [1.2, 1, 1.2],
              opacity: [0.1, 0.2, 0.1],
            }}
            transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
          />
        </div>

        {/* Main content */}
        <div className="container relative z-10 text-center py-20">
          <div className="max-w-7xl mx-auto">
            {/* Pre-headline accent */}
            <motion.div
              className="flex items-center justify-center mb-8"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              <div className="w-16 h-px bg-gradient-to-r from-transparent via-primary to-transparent"></div>
              <span className="px-4 text-sm font-medium text-primary uppercase tracking-widest">
                Event Management
              </span>
              <div className="w-16 h-px bg-gradient-to-r from-transparent via-primary to-transparent"></div>
            </motion.div>

            {/* Main headline */}
            <motion.h1
              className="hero-headline text-7xl md:text-8xl lg:text-9xl font-black leading-none mb-8 text-balance"
              initial={{ opacity: 0, y: 100 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.2, ease: "easeOut" }}
            >
              <span className="block">SQL</span>
              <span className="block bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
                EVENTS
              </span>
            </motion.h1>

            {/* Subtitle */}
            <motion.p
              className="hero-description text-xl md:text-2xl max-w-3xl mx-auto mb-12 leading-relaxed text-muted-foreground font-light"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.3, ease: "easeOut" }}
            >
              Passion. Innovation. Technology in Events Management.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
            >
              <motion.button
                className="group relative px-10 py-5 bg-gradient-to-r from-primary to-secondary text-white font-semibold rounded-full overflow-hidden shadow-2xl hover:shadow-primary/25 transition-all duration-300"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                <span className="relative z-10">Get Started</span>
                <div className="absolute inset-0 bg-gradient-to-r from-secondary to-primary opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </motion.button>

              <motion.button
                className="group relative px-10 py-5 border-2 border-primary text-primary font-semibold rounded-full hover:bg-primary hover:text-white transition-all duration-300 overflow-hidden"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                <span className="relative z-10">Learn More</span>
                <div className="absolute inset-0 bg-primary scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
              </motion.button>
            </motion.div>

            {/* Scroll indicator */}
            <motion.div
              className="flex flex-col items-center"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 1 }}
            >
              <motion.div
                className="w-6 h-10 border-2 border-muted-foreground rounded-full flex justify-center"
                animate={{ y: [0, 10, 0] }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              >
                <motion.div
                  className="w-1 h-3 bg-muted-foreground rounded-full mt-2"
                  animate={{ y: [0, 12, 0] }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                />
              </motion.div>
              <span className="text-sm text-muted-foreground mt-2 uppercase tracking-widest">
                Scroll
              </span>
            </motion.div>
          </div>
        </div>

        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent pointer-events-none"></div>
      </section>

      {/* Who We Are Section */}
      <section className="py-24 bg-card text-card-foreground">
        <div className="container">
          <div className="max-w-6xl mx-auto">
            <motion.div
              className="text-center mb-16"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-6 text-balance">
                Who We Are
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                SQL Events Nigeria is a leading corporate events and conference
                management company, delivering exceptional experiences through
                cutting-edge technology and innovative solutions.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                <h3 className="text-2xl font-bold mb-4 text-foreground">
                  Our Story
                </h3>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  Founded with a vision to transform the events industry in
                  Nigeria, we combine traditional hospitality excellence with
                  modern technological innovation. Our team brings together
                  decades of experience in corporate events, conferences, and
                  exhibition management.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  We believe that every event should tell a story, create
                  lasting impressions, and deliver measurable results for our
                  clients.
                </p>
              </motion.div>

              <motion.div
                className="relative"
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                <div className="bg-gradient-to-br from-primary/20 to-secondary/20 rounded-3xl p-8">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="text-center">
                      <div className="text-3xl font-bold text-primary mb-2">
                        500+
                      </div>
                      <div className="text-sm text-muted-foreground">
                        Events Managed
                      </div>
                    </div>
                    <div className="text-center">
                      <div className="text-3xl font-bold text-secondary mb-2">
                        50+
                      </div>
                      <div className="text-sm text-muted-foreground">
                        Corporate Clients
                      </div>
                    </div>
                    <div className="text-center">
                      <div className="text-3xl font-bold text-accent mb-2">
                        98%
                      </div>
                      <div className="text-sm text-muted-foreground">
                        Client Satisfaction
                      </div>
                    </div>
                    <div className="text-center">
                      <div className="text-3xl font-bold text-brand-orange mb-2">
                        5+
                      </div>
                      <div className="text-sm text-muted-foreground">
                        Years Experience
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-24 bg-background text-foreground">
        <div className="container">
          <motion.div
            className="text-center mb-20"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-balance">
              Why Choose Us
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              We stand out in the events industry through our unique combination
              of expertise, technology, and unwavering commitment to excellence.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
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
        <div className="container">
          <motion.div
            className="text-center mb-20"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-balance">
              What We Do
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Comprehensive event management solutions designed for the modern
              corporate world
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
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
        <div className="container">
          <div className="flex justify-between items-end mb-16">
            <motion.h2
              className="text-4xl md:text-5xl font-bold text-balance"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
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

          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
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
        <div className="container">
          <motion.div
            className="text-center mb-20"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-balance">
              What Our Clients Say
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Don&apos;t just take our word for it. Here&apos;s what our clients
              have to say about their experience.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
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
        <div className="container">
          <div className="max-w-6xl mx-auto">
            <motion.div
              className="text-center mb-16"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-8 text-balance">
                Ready to Transform Your Event?
              </h2>
              <p className="text-xl mb-12 opacity-90">
                Let&apos;s discuss how we can bring your vision to life with our
                innovative approach to event management.
              </p>
            </motion.div>

            <div className="grid lg:grid-cols-2 gap-12 items-start">
              {/* Contact Form */}
              <motion.div
                className="bg-background text-foreground p-8 rounded-2xl shadow-xl"
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                <h3 className="text-2xl font-bold mb-6">Get In Touch</h3>
                <form className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium mb-2">
                        First Name
                      </label>
                      <input
                        type="text"
                        className="w-full px-4 py-3 border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-300"
                        placeholder="Your first name"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2">
                        Last Name
                      </label>
                      <input
                        type="text"
                        className="w-full px-4 py-3 border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-300"
                        placeholder="Your last name"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">
                      Email
                    </label>
                    <input
                      type="email"
                      className="w-full px-4 py-3 border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-300"
                      placeholder="your.email@company.com"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">
                      Company
                    </label>
                    <input
                      type="text"
                      className="w-full px-4 py-3 border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-300"
                      placeholder="Your company name"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">
                      Event Type
                    </label>
                    <select className="w-full px-4 py-3 border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-300">
                      <option>Select event type</option>
                      <option>Conference</option>
                      <option>Corporate Event</option>
                      <option>Exhibition</option>
                      <option>Team Building</option>
                      <option>Training/Workshop</option>
                      <option>Other</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">
                      Message
                    </label>
                    <textarea
                      rows={4}
                      className="w-full px-4 py-3 border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-300"
                      placeholder="Tell us about your event requirements..."
                    ></textarea>
                  </div>
                  <motion.button
                    type="submit"
                    className="w-full px-8 py-4 bg-primary text-white font-semibold rounded-lg hover:bg-primary/90 transition-all duration-300"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    Send Message
                  </motion.button>
                </form>
              </motion.div>

              {/* Contact Information */}
              <motion.div
                className="space-y-8"
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                <div>
                  <h3 className="text-2xl font-bold mb-6">
                    Contact Information
                  </h3>
                  <div className="space-y-4">
                    <div className="flex items-center space-x-4">
                      <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center">
                        <span className="text-xl">📍</span>
                      </div>
                      <div>
                        <div className="font-semibold">Office Address</div>
                        <div className="text-white/80">
                          Victoria Island, Lagos, Nigeria
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center space-x-4">
                      <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center">
                        <span className="text-xl">📞</span>
                      </div>
                      <div>
                        <div className="font-semibold">Phone</div>
                        <div className="text-white/80">+234 XXX XXX XXXX</div>
                      </div>
                    </div>
                    <div className="flex items-center space-x-4">
                      <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center">
                        <span className="text-xl">✉️</span>
                      </div>
                      <div>
                        <div className="font-semibold">Email</div>
                        <div className="text-white/80">hello@sqlevents.ng</div>
                      </div>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="text-xl font-bold mb-4">Quick Response</h3>
                  <p className="text-white/80 mb-6">
                    We typically respond to all inquiries within 24 hours during
                    business days.
                  </p>
                  <motion.button
                    className="px-8 py-4 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-primary transition-all duration-300"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    Schedule a Call
                  </motion.button>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-16 bg-card text-card-foreground border-t border-border">
        <div className="container">
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
