"use client";

import { motion } from "framer-motion";

export default function WhatWeDo() {
  const services = [
    {
      title: "Conference Management",
      description:
        "Professional conference planning and execution with cutting-edge technology",
      gradient: "from-blue-400 to-purple-500",
      svg: (
        <svg viewBox="0 0 100 100" className="w-24 h-24">
          <path
            d="M20 25C20 20 25 15 30 15H70C75 15 80 20 80 25V75C80 80 75 85 70 85H30C25 85 20 80 20 75V25Z"
            fill="currentColor"
          />
          <path
            d="M25 30C25 27 27 25 30 25H70C73 25 75 27 75 30V70C75 73 73 75 70 75H30C27 75 25 73 25 70V30Z"
            fill="white"
          />
          <path
            d="M35 40C35 37 37 35 40 35H60C63 35 65 37 65 40V60C65 63 63 65 60 65H40C37 65 35 63 35 60V40Z"
            fill="currentColor"
          />
          <circle cx="50" cy="50" r="3" fill="white" />
        </svg>
      ),
    },
    {
      title: "Corporate Events",
      description:
        "AGMs, product launches, and corporate gatherings that make an impact",
      gradient: "from-orange-400 to-yellow-400",
      svg: (
        <svg viewBox="0 0 100 100" className="w-24 h-24">
          <path
            d="M15 40C15 35 20 30 25 30H75C80 30 85 35 85 40V80C85 85 80 90 75 90H25C20 90 15 85 15 80V40Z"
            fill="currentColor"
          />
          <path
            d="M20 45C20 42 22 40 25 40H75C78 40 80 42 80 45V75C80 78 78 80 75 80H25C22 80 20 78 20 75V45Z"
            fill="white"
          />
          <path
            d="M30 20C30 15 35 10 40 10H60C65 10 70 15 70 20V35C70 40 65 45 60 45H40C35 45 30 40 30 35V20Z"
            fill="currentColor"
          />
          <circle cx="50" cy="27" r="2" fill="white" />
          <circle cx="50" cy="32" r="2" fill="white" />
          <circle cx="50" cy="37" r="2" fill="white" />
        </svg>
      ),
    },
    {
      title: "Exhibition Management",
      description:
        "Trade shows and exhibitions that showcase your brand effectively",
      gradient: "from-purple-500 to-pink-500",
      svg: (
        <svg viewBox="0 0 100 100" className="w-24 h-24">
          <path
            d="M10 50C10 45 15 40 20 40H80C85 40 90 45 90 50V80C90 85 85 90 80 90H20C15 90 10 85 10 80V50Z"
            fill="currentColor"
          />
          <path
            d="M20 45C20 42 22 40 25 40H75C78 40 80 42 80 45V75C80 78 78 80 75 80H25C22 80 20 78 20 75V45Z"
            fill="white"
          />
          <path
            d="M30 25C30 20 35 15 40 15H60C65 15 70 20 70 25V35C70 40 65 45 60 45H40C35 45 30 40 30 35V25Z"
            fill="currentColor"
          />
          <circle cx="50" cy="30" r="3" fill="white" />
        </svg>
      ),
    },
    {
      title: "Technology Integration",
      description:
        "State-of-the-art tech solutions for seamless event experiences",
      gradient: "from-green-400 to-blue-500",
      svg: (
        <svg viewBox="0 0 100 100" className="w-24 h-24">
          <circle cx="50" cy="50" r="40" fill="currentColor" />
          <circle cx="50" cy="50" r="30" fill="white" />
          <circle cx="50" cy="50" r="20" fill="currentColor" />
          <path
            d="M50 20C50 18 52 16 54 16H56C58 16 60 18 60 20V30C60 32 58 34 56 34H54C52 34 50 32 50 30V20Z"
            fill="white"
          />
          <path
            d="M50 70C50 68 52 66 54 66H56C58 66 60 68 60 70V80C60 82 58 84 56 84H54C52 84 50 82 50 80V70Z"
            fill="white"
          />
          <path
            d="M20 50C18 50 16 52 16 54V56C16 58 18 60 20 60H30C32 60 34 58 34 56V54C34 52 32 50 30 50H20Z"
            fill="white"
          />
          <path
            d="M70 50C68 50 66 52 66 54V56C66 58 68 60 70 60H80C82 60 84 58 84 56V54C84 52 82 50 80 50H70Z"
            fill="white"
          />
        </svg>
      ),
    },
    {
      title: "Team Building",
      description:
        "Engaging team building activities that strengthen collaboration",
      gradient: "from-red-400 to-pink-400",
      svg: (
        <svg viewBox="0 0 100 100" className="w-24 h-24">
          <circle cx="30" cy="35" r="15" fill="currentColor" />
          <circle cx="70" cy="35" r="15" fill="currentColor" />
          <circle cx="50" cy="65" r="15" fill="currentColor" />
          <path
            d="M30 35C30 35 40 45 50 65"
            stroke="white"
            strokeWidth="3"
            strokeLinecap="round"
            fill="none"
          />
          <path
            d="M70 35C70 35 60 45 50 65"
            stroke="white"
            strokeWidth="3"
            strokeLinecap="round"
            fill="none"
          />
          <circle cx="30" cy="35" r="5" fill="white" />
          <circle cx="70" cy="35" r="5" fill="white" />
          <circle cx="50" cy="65" r="5" fill="white" />
        </svg>
      ),
    },
    {
      title: "Training & Workshops",
      description: "Professional development sessions that drive growth",
      gradient: "from-indigo-400 to-purple-400",
      svg: (
        <svg viewBox="0 0 100 100" className="w-24 h-24">
          <path
            d="M15 30C15 25 20 20 25 20H75C80 20 85 25 85 30V80C85 85 80 90 75 90H25C20 90 15 85 15 80V30Z"
            fill="currentColor"
          />
          <path
            d="M20 35C20 32 22 30 25 30H75C78 30 80 32 80 35V75C80 78 78 80 75 80H25C22 80 20 78 20 75V35Z"
            fill="white"
          />
          <path
            d="M30 40C30 37 32 35 35 35H65C68 35 70 37 70 40V70C70 73 68 75 65 75H35C32 75 30 73 30 70V40Z"
            fill="currentColor"
          />
          <path
            d="M40 45H60M40 55H60M40 65H60"
            stroke="white"
            strokeWidth="2"
            strokeLinecap="round"
            fill="none"
          />
        </svg>
      ),
    },
  ];

  return (
    <section className="py-24 bg-card text-card-foreground relative overflow-hidden">
      <div className="container--wide">
        <motion.div
          className="mb-20 text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="flex items-center mb-12">
            <div className="text-2xl text-accent font-bold mr-4">{"{"}</div>
            <h2 className="text-lg font-medium text-muted-foreground">
              What We Do
            </h2>
            <div className="text-2xl text-accent font-bold ml-4">{"}"}</div>
          </div>
        </motion.div>

        <div className="space-y-10">
          {services.map((service, index) => (
            <motion.div
              key={index}
              className="group flex items-center gap-20 p-12 rounded-3xl hover:bg-muted/50 transition-all duration-300"
              initial={{ opacity: 0, x: -60 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ x: 8 }}
            >
              {/* Large abstract graphic */}
              <div className="flex-shrink-0">
                <div
                  className={`w-48 h-48 rounded-3xl bg-gradient-to-br ${service.gradient} flex items-center justify-center group-hover:scale-105 transition-transform duration-300 shadow-2xl`}
                >
                  <div className="text-white">{service.svg}</div>
                </div>
              </div>

              {/* Content */}
              <div className="flex-1">
                <h3
                  className={`text-2xl md:text-3xl lg:text-4xl font-bold mb-6 bg-gradient-to-r ${service.gradient} bg-clip-text text-transparent`}
                >
                  {service.title}
                </h3>
                <p className=" text-2xl md:text-3xl lg:text-4xl font-bold text-primary leading-relaxed mb-8 max-w-3xl">
                  {service.description}
                </p>
                <button className="px-8 py-4 border border-border hover:border-primary/40 rounded-full text-foreground hover:bg-primary hover:text-primary-foreground transition-all duration-300 font-medium text-lg">
                  Explore
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
