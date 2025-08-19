"use client";

import { motion } from "framer-motion";

export default function Testimonials() {
  const testimonials = [
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
  ];

  return (
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
          {testimonials.map((testimonial, index) => (
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
  );
}
