"use client";

import { motion } from "framer-motion";

export default function WhoWeAre() {
  return (
    <section className="py-24 bg-card text-card-foreground">
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
                Who We Are
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
              <span className="text-primary">effortlessly manage</span> anything
              corporate events can touch.{" "}
              <span className="text-secondary">Delivering exceptional</span>{" "}
              experiences and{" "}
              <span className="text-accent">unmatched support</span> so you can
              focus on the{" "}
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
              <div className="text-3xl font-bold text-brand-orange mb-2">
                500+
              </div>
              <div className="text-sm text-muted-foreground">
                Events Delivered
              </div>
            </div>
            <div className="text-center md:text-left">
              <div className="text-3xl font-bold text-brand-purple mb-2">
                50+
              </div>
              <div className="text-sm text-muted-foreground">
                Corporate Clients
              </div>
            </div>
            <div className="text-center md:text-left">
              <div className="text-3xl font-bold text-brand-green mb-2">
                98%
              </div>
              <div className="text-sm text-muted-foreground">
                Client Satisfaction
              </div>
            </div>
            <div className="text-center md:text-left">
              <div className="text-3xl font-bold text-brand-deepPurple mb-2">
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
  );
}
