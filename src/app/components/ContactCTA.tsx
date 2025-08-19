"use client";

import { motion } from "framer-motion";

export default function ContactCTA() {
  return (
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
                    <div className="text-sm opacity-80">+234 XXX XXX XXXX</div>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-primary-foreground/20 rounded-full flex items-center justify-center">
                    ✉️
                  </div>
                  <div>
                    <div className="font-semibold">Email</div>
                    <div className="text-sm opacity-80">hello@sqlevents.ng</div>
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
                  className="w-full px-4 py-3 bg-primary-foreground/10 border border-primary-foreground/20 rounded-full focus:outline-none focus:ring-2 focus:ring-primary-foreground/50 focus:border-transparent text-primary-foreground placeholder-primary-foreground/60"
                />
                <input
                  type="text"
                  placeholder="Last Name"
                  className="w-full px-4 py-3 bg-primary-foreground/10 border border-primary-foreground/20 rounded-full focus:outline-none focus:ring-2 focus:ring-primary-foreground/50 focus:border-transparent text-primary-foreground placeholder-primary-foreground/60"
                />
              </div>
              <input
                type="email"
                placeholder="Email Address"
                className="w-full px-4 py-3 bg-primary-foreground/10 border border-primary-foreground/20 rounded-full focus:outline-none focus:ring-2 focus:ring-primary-foreground/50 focus:border-transparent text-primary-foreground placeholder-primary-foreground/60"
              />
              <textarea
                placeholder="Tell us about your event..."
                rows={4}
                className="w-full px-4 py-3 bg-primary-foreground/10 border border-primary-foreground/20 rounded-full focus:outline-none focus:ring-2 focus:ring-primary-foreground/50 focus:border-transparent text-primary-foreground placeholder-primary-foreground/60 resize-none"
              ></textarea>
              <button
                type="submit"
                className="w-full px-8 py-4 bg-primary-foreground text-primary font-bold rounded-full hover:bg-primary-foreground/90 transition-colors duration-300"
              >
                Send Message
              </button>
            </motion.form>
          </div>
        </div>
      </div>
    </section>
  );
}
