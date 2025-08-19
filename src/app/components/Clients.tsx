"use client";

import { motion } from "framer-motion";

export default function Clients() {
  const partners = [
    {
      name: "FOX",
      logo: (
        <svg viewBox="0 0 100 40" className="h-8 w-auto">
          <text x="0" y="25" className="text-2xl font-bold fill-current">
            FOX
          </text>
        </svg>
      ),
    },
    {
      name: "Spotify",
      logo: (
        <svg viewBox="0 0 120 40" className="h-8 w-auto">
          <circle cx="15" cy="20" r="8" fill="currentColor" />
          <text x="30" y="25" className="text-xl font-bold fill-current">
            Spotify
          </text>
        </svg>
      ),
    },
    {
      name: "Coca-Cola",
      logo: (
        <svg viewBox="0 0 140 40" className="h-8 w-auto">
          <text
            x="0"
            y="25"
            className="text-2xl font-bold fill-current font-serif"
          >
            Coca-Cola
          </text>
        </svg>
      ),
    },
    {
      name: "moooi",
      logo: (
        <svg viewBox="0 0 100 40" className="h-8 w-auto">
          <text x="0" y="25" className="text-2xl font-bold fill-current">
            moooi
          </text>
        </svg>
      ),
    },
    {
      name: "Google",
      logo: (
        <svg viewBox="0 0 120 40" className="h-8 w-auto">
          <text x="0" y="25" className="text-2xl font-bold fill-current">
            Google
          </text>
        </svg>
      ),
    },
    {
      name: "SAMSUNG",
      logo: (
        <svg viewBox="0 0 140 40" className="h-8 w-auto">
          <ellipse
            cx="70"
            cy="20"
            rx="35"
            ry="15"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
          />
          <text x="40" y="25" className="text-xl font-bold fill-current">
            SAMSUNG
          </text>
        </svg>
      ),
    },
  ];

  return (
    <section className="py-24 bg-card text-card-foreground">
      <div className="container--wide">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="flex items-center mb-12">
            <div className="text-2xl text-accent font-bold mr-4">{"{"}</div>
            <h2 className="text-lg font-medium text-muted-foreground">
              Clients
            </h2>
            <div className="text-2xl text-accent font-bold ml-4">{"}"}</div>
          </div>
        </motion.div>

        <motion.div
          className="flex items-center justify-center space-x-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
        >
          {partners.map((partner, index) => (
            <motion.div
              key={index}
              className="flex-shrink-0"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05 }}
            >
              <div className="text-foreground/80 hover:text-foreground transition-colors duration-300">
                {partner.logo}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
