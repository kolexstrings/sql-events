"use client";

import { motion } from "framer-motion";

export default function CaseStudies() {
  const projects = [
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
  ];

  return (
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
          {projects.map((project, index) => (
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
  );
}
