"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function Clients() {
  const partners = [
    {
      name: "SOGON",
      logo: "/clients/SOGON.png",
    },
    {
      name: "CBN",
      logo: "/clients/CBN-logo.png",
    },
    {
      name: "JTB",
      logo: "/clients/jtb.png",
    },
    {
      name: "Rivers State",
      logo: "/clients/role-of-cbn-1-removebg-preview(1).png",
    },
    {
      name: "NSE",
      logo: "/clients/NSE.png",
    },
    {
      name: "NIOB",
      logo: "/clients/NIOB.png",
    },
    {
      name: "IAWJ",
      logo: "/clients/IAWJ.png",
    },
    {
      name: "ASO",
      logo: "/clients/aso.png",
    },
  ];

  return (
    <section className="py-12 sm:py-16 md:py-20 lg:py-24 bg-card text-card-foreground">
      <div className="container--wide px-4 sm:px-6">
        <motion.div
          className="text-center mb-8 sm:mb-12 md:mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="flex items-center justify-start mb-6 sm:mb-8 md:mb-12">
            <div className="text-lg sm:text-xl md:text-2xl text-accent font-bold mr-2 sm:mr-3 md:mr-4">
              {"{"}
            </div>
            <h2 className="text-base sm:text-lg font-medium text-muted-foreground">
              Trusted By
            </h2>
            <div className="text-lg sm:text-xl md:text-2xl text-accent font-bold ml-2 sm:ml-3 md:ml-4">
              {"}"}
            </div>
          </div>
        </motion.div>

        {/* Mobile Carousel */}
        <div className="md:hidden">
          <motion.div
            className="flex items-center space-x-8 overflow-x-auto scrollbar-hide pb-4"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            style={{
              scrollSnapType: "x mandatory",
              WebkitOverflowScrolling: "touch",
            }}
          >
            {partners.map((partner, index) => (
              <motion.div
                key={index}
                className="flex-shrink-0 min-w-[140px] text-center"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05 }}
                style={{ scrollSnapAlign: "center" }}
              >
                <div className="text-foreground/80 hover:text-foreground transition-colors duration-300">
                  <div className="transform scale-90 sm:scale-100">
                    <Image
                      src={partner.logo}
                      alt={`${partner.name} logo`}
                      width={120}
                      height={60}
                      className="h-12 w-auto object-contain"
                    />
                  </div>
                </div>
                <div className="text-xs text-muted-foreground mt-3 font-medium">
                  {partner.name}
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Scroll indicator */}
          <div className="flex justify-center mt-4">
            <div className="flex space-x-2">
              {partners.map((_, index) => (
                <div
                  key={index}
                  className="w-2 h-2 rounded-full bg-muted-foreground/30"
                />
              ))}
            </div>
          </div>
        </div>

        {/* Desktop Grid */}
        <motion.div
          className="hidden md:flex items-center justify-center space-x-16 lg:space-x-20"
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
                <Image
                  src={partner.logo}
                  alt={`${partner.name} logo`}
                  width={160}
                  height={80}
                  className="h-16 w-auto object-contain"
                />
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
