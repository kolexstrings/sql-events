"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function WhoWeAre() {
  return (
    <section className="py-8 sm:py-12 md:py-16 lg:py-20 bg-card text-card-foreground relative overflow-hidden">
      {/* Subtle Logo Watermark */}
      <div className="absolute right-0 top-1/2 transform -translate-y-1/2 pointer-events-none opacity-5">
        <Image
          src="/logo.png"
          alt="SQL Events Logo Watermark"
          width={800}
          height={800}
          className="w-[400px] h-[400px] sm:w-[600px] sm:h-[600px] md:w-[800px] md:h-[800px] object-contain"
        />
      </div>

      <div className="container--wide px-4 sm:px-6">
        <div className="max-w-none mx-auto">
          {/* Section Title with Curly Braces */}
          <motion.div
            className="mb-8 sm:mb-12 md:mb-16 lg:mb-20"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center mb-6 sm:mb-8 md:mb-10 lg:mb-12">
              <div className="flex items-center justify-center md:justify-start">
                <div className="text-lg sm:text-xl md:text-2xl text-accent font-bold mr-2 sm:mr-3 md:mr-4">
                  {"{"}
                </div>
                <h2 className="text-base sm:text-lg font-medium text-accent">
                  Who We Are
                </h2>
                <div className="text-lg sm:text-xl md:text-2xl text-accent font-bold ml-2 sm:ml-3 md:ml-4">
                  {"}"}
                </div>
              </div>
            </div>
          </motion.div>

          {/* Main Bold Statement */}
          <motion.div
            className="mb-12 sm:mb-16 md:mb-18 lg:mb-20"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <p className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl 2xl:text-6xl font-bold leading-tight text-card-foreground max-w-4xl sm:max-w-5xl lg:max-w-6xl">
              SQL Events allows you to{" "}
              <span className="text-primary">effortlessly manage</span> anything
              corporate events can touch. Delivering{" "}
              <span className="text-brand-green">exceptional experiences</span>{" "}
              and <span className="text-accent">unmatched support</span> so you
              can focus on the{" "}
              <span className="text-primary">impactful moments</span>.
            </p>
          </motion.div>

          {/* Supporting Stats */}
          <motion.div
            className="grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8 pt-12 sm:pt-14 md:pt-16 border-t border-border/20"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <div className="text-center md:text-left">
              <div className="text-2xl sm:text-3xl font-bold text-brand-orange mb-2">
                500+
              </div>
              <div className="text-xs sm:text-sm text-muted-foreground">
                Events Delivered
              </div>
            </div>
            <div className="text-center md:text-left">
              <div className="text-2xl sm:text-3xl font-bold text-brand-purple mb-2">
                50+
              </div>
              <div className="text-xs sm:text-sm text-muted-foreground">
                Corporate Clients
              </div>
            </div>
            <div className="text-center md:text-left">
              <div className="text-2xl sm:text-3xl font-bold text-brand-green mb-2">
                98%
              </div>
              <div className="text-xs sm:text-sm text-muted-foreground">
                Client Satisfaction
              </div>
            </div>
            <div className="text-center md:text-left">
              <div className="text-2xl sm:text-3xl font-bold text-brand-deepPurple mb-2">
                5+
              </div>
              <div className="text-xs sm:text-sm text-muted-foreground">
                Years Experience
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
