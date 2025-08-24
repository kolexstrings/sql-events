import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import {
  Mail,
  Phone,
  MapPin,
  Clock,
  Send,
  Calendar,
  Users,
  MessageSquare,
} from "lucide-react";

export default function Contact() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navigation />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-6 bg-white dark:bg-slate-950 overflow-hidden">
        {/* Modern geometric background pattern */}
        <div className="absolute inset-0 bg-gradient-to-br from-gray-50/80 to-white/80 dark:from-slate-950/50 dark:to-slate-900/50"></div>
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_30%_20%,rgba(74,222,128,0.08),transparent_50%)]"></div>
          <div className="absolute top-0 right-0 w-full h-full bg-[radial-gradient(circle_at_70%_80%,rgba(59,130,246,0.08),transparent_50%)]"></div>
        </div>
        {/* Animated Background Elements */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-white/10 rounded-full blur-3xl animate-pulse"></div>
          <div
            className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-white/10 rounded-full blur-3xl animate-pulse"
            style={{ animationDelay: "1s" }}
          ></div>
          <div
            className="absolute top-1/2 left-1/2 w-64 h-64 bg-white/5 rounded-full blur-2xl animate-pulse"
            style={{ animationDelay: "2s" }}
          ></div>
        </div>

        {/* Animated Geometric Shapes & Particles */}
        <div className="absolute inset-0 pointer-events-none">
          {/* Rotating Rings */}
          <div className="absolute top-1/2 -right-20 w-40 h-40 border border-primary/20 rounded-full animate-spin-slow"></div>
          <div className="absolute top-1/3 -left-16 w-32 h-32 border border-secondary/20 rounded-full animate-spin-slow-reverse"></div>
          <div className="absolute bottom-1/3 right-1/4 w-28 h-28 border border-accent/20 rounded-full animate-spin-slow"></div>
          <div className="absolute top-1/4 right-1/3 w-24 h-24 border border-primary/15 rounded-full animate-spin-slow-reverse"></div>
          <div className="absolute bottom-1/4 -left-12 w-36 h-36 border border-secondary/15 rounded-full animate-spin-slow"></div>

          {/* Floating Squares */}
          <div className="absolute top-1/4 left-1/4 w-16 h-16 border border-primary/15 rotate-45 animate-float"></div>
          <div className="absolute top-2/3 right-1/3 w-12 h-12 border border-secondary/15 rotate-45 animate-float-delayed"></div>
          <div className="absolute bottom-1/4 left-1/2 w-20 h-20 border border-accent/15 rotate-45 animate-float-slow"></div>
          <div className="absolute top-1/2 left-1/3 w-14 h-14 border border-primary/20 rotate-45 animate-float-delayed"></div>
          <div className="absolute bottom-1/3 right-1/6 w-18 h-18 border border-accent/20 rotate-45 animate-float-slow"></div>

          {/* Triangles */}
          <div className="absolute top-1/6 right-1/4 w-0 h-0 border-l-[12px] border-l-transparent border-r-[12px] border-r-transparent border-b-[20px] border-b-primary/20 animate-float-slow"></div>
          <div className="absolute bottom-1/6 left-1/6 w-0 h-0 border-l-[16px] border-l-transparent border-r-[16px] border-r-transparent border-b-[28px] border-b-secondary/20 animate-float-delayed"></div>
          <div className="absolute top-3/4 right-1/6 w-0 h-0 border-l-[10px] border-l-transparent border-r-[10px] border-r-transparent border-b-[18px] border-b-accent/20 animate-float"></div>

          {/* Hexagons */}
          <div className="absolute top-1/3 left-1/8 w-8 h-8 bg-primary/10 clip-hexagon animate-float-slow"></div>
          <div className="absolute bottom-1/3 right-1/8 w-6 h-6 bg-secondary/10 clip-hexagon animate-float-delayed"></div>

          {/* Animated Dots */}
          <div className="absolute top-1/3 left-1/6 w-2 h-2 bg-primary/40 rounded-full animate-bounce"></div>
          <div className="absolute top-2/3 right-1/4 w-1.5 h-1.5 bg-secondary/40 rounded-full animate-bounce-delayed"></div>
          <div className="absolute bottom-1/3 left-2/3 w-1 h-1 bg-accent/40 rounded-full animate-bounce-slow"></div>
          <div className="absolute top-1/6 right-1/6 w-1.5 h-1.5 bg-primary/30 rounded-full animate-bounce-delayed"></div>
          <div className="absolute bottom-1/6 right-1/3 w-2.5 h-2.5 bg-secondary/30 rounded-full animate-bounce-slow"></div>
          <div className="absolute top-1/2 left-1/8 w-1 h-1 bg-accent/50 rounded-full animate-bounce"></div>

          {/* Floating Lines */}
          <div className="absolute top-1/2 left-1/6 w-16 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent animate-float-horizontal"></div>
          <div className="absolute top-1/3 right-1/6 w-20 h-px bg-gradient-to-r from-transparent via-secondary/30 to-transparent animate-float-horizontal-delayed"></div>
          <div className="absolute bottom-1/3 left-1/3 w-12 h-px bg-gradient-to-r from-transparent via-accent/30 to-transparent animate-float-horizontal-slow"></div>
          <div className="absolute top-1/4 left-1/2 w-14 h-px bg-gradient-to-r from-transparent via-primary/25 to-transparent animate-float-horizontal"></div>
          <div className="absolute bottom-1/4 right-1/2 w-18 h-px bg-gradient-to-r from-transparent via-secondary/25 to-transparent animate-float-horizontal-delayed"></div>

          {/* Diagonal Lines */}
          <div className="absolute top-1/4 right-1/4 w-20 h-px bg-gradient-to-r from-transparent via-accent/20 to-transparent transform rotate-45 animate-float-horizontal-slow"></div>
          <div className="absolute bottom-1/4 left-1/4 w-16 h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent transform -rotate-45 animate-float-horizontal"></div>

          {/* Pulsing Circles */}
          <div className="absolute top-1/2 left-1/4 w-3 h-3 bg-primary/30 rounded-full animate-pulse"></div>
          <div className="absolute top-1/4 right-1/4 w-2 h-2 bg-secondary/30 rounded-full animate-pulse-delayed"></div>
          <div className="absolute bottom-1/4 left-1/3 w-2.5 h-2.5 bg-accent/30 rounded-full animate-pulse-slow"></div>

          {/* Floating Arrows */}
          <div className="absolute top-1/3 right-1/3 w-6 h-6 text-primary/20 animate-float-slow">
            <svg fill="currentColor" viewBox="0 0 24 24">
              <path d="M7 17l9.2-9.2M17 17V7.8H7.8" />
            </svg>
          </div>
          <div className="absolute bottom-1/3 left-1/4 w-5 h-5 text-secondary/20 animate-float-delayed">
            <svg fill="currentColor" viewBox="0 0 24 24">
              <path d="M17 7l-9.2 9.2M7 7v9.2h9.2" />
            </svg>
          </div>
        </div>

        <div className="container--wide relative z-10">
          <div className="text-center text-slate-900 dark:text-white">
            <div
              className="animate-fade-in-up"
              style={{ animationDelay: "0.2s" }}
            >
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6">
                Get In Touch
              </h1>
            </div>
            <div
              className="animate-fade-in-up"
              style={{ animationDelay: "0.4s" }}
            >
              <p className="text-xl md:text-2xl lg:text-3xl opacity-95 max-w-4xl mx-auto leading-relaxed">
                Ready to transform your next event? Let&apos;s discuss how we
                can bring your vision to life
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-24 bg-background relative overflow-hidden">
        <div className="container--wide">
          <div className="text-center mb-16">
            <div
              className="animate-fade-in-up"
              style={{ animationDelay: "0.2s" }}
            >
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">
                Contact Information
              </h2>
            </div>
            <div
              className="animate-fade-in-up"
              style={{ animationDelay: "0.4s" }}
            >
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Multiple ways to reach us and get started on your event
              </p>
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                title: "Email Us",
                detail: "contactus@sql-events.com",
                description: "Send us a detailed message about your event",
                icon: <Mail className="w-8 h-8" />,
                color: "from-blue-600 to-blue-700",
              },
              {
                title: "Call Us",
                detail: "+234 (9) 6230272",
                description: "Speak directly with our event specialists",
                icon: <Phone className="w-8 h-8" />,
                color: "from-green-600 to-green-700",
              },
              {
                title: "Mobile",
                detail: "+234 80 5050 1927",
                description: "Call or WhatsApp for urgent inquiries",
                icon: <Phone className="w-8 h-8" />,
                color: "from-purple-600 to-purple-700",
              },
              {
                title: "Visit Us",
                detail:
                  "Flat 3, Block C8, 19th Street, Games Village, Abuja, Nigeria",
                description: "Schedule an in-person consultation",
                icon: <MapPin className="w-8 h-8" />,
                color: "from-orange-600 to-orange-700",
              },
            ].map((contact, index) => (
              <div
                key={index}
                className="bg-card p-8 rounded-2xl shadow-sm hover:shadow-lg transition-all duration-300 border border-border/20 group hover:scale-105 animate-fade-in-up"
                style={{ animationDelay: `${0.6 + index * 0.2}s` }}
              >
                <div
                  className={`w-16 h-16 bg-gradient-to-br ${contact.color} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}
                >
                  <div className="text-white font-semibold">{contact.icon}</div>
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-3">
                  {contact.title}
                </h3>
                <p className="text-primary text-lg font-medium mb-2">
                  {contact.detail}
                </p>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  {contact.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Office Hours */}
      <section className="py-16 bg-card relative overflow-hidden">
        <div className="container--wide">
          <div
            className="bg-background border border-border/20 rounded-3xl p-8 max-w-2xl mx-auto animate-fade-in-up"
            style={{ animationDelay: "0.6s" }}
          >
            <div className="flex items-center justify-center mb-6">
              <Clock className="w-8 h-8 text-primary mr-3" />
              <h3 className="text-2xl font-semibold text-foreground">
                Office Hours
              </h3>
            </div>
            <div className="text-center text-muted-foreground space-y-2">
              <p className="text-lg">Monday - Friday: 8:00 AM - 6:00 PM</p>
              <p className="text-lg">Saturday: 9:00 AM - 3:00 PM</p>
              <p className="text-lg">Sunday: Closed</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-24 bg-background relative overflow-hidden">
        <div className="bg-card border border-border/20 rounded-3xl p-8 md:p-12 max-w-4xl mx-auto animate-fade-in-up">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">
              Send Us a Message
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Fill out the form below and we&apos;ll get back to you within 24
              hours
            </p>
          </div>

          <form className="space-y-8">
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label
                  htmlFor="firstName"
                  className="block text-foreground font-medium mb-2"
                >
                  First Name *
                </label>
                <input
                  type="text"
                  id="firstName"
                  name="firstName"
                  required
                  className="w-full px-4 py-3 border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent bg-background text-foreground transition-colors duration-200"
                  placeholder="Enter your first name"
                />
              </div>
              <div>
                <label
                  htmlFor="lastName"
                  className="block text-foreground font-medium mb-2"
                >
                  Last Name *
                </label>
                <input
                  type="text"
                  id="lastName"
                  name="lastName"
                  required
                  className="w-full px-4 py-3 border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent bg-background text-foreground transition-colors duration-200"
                  placeholder="Enter your last name"
                />
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label
                  htmlFor="email"
                  className="block text-foreground font-medium mb-2"
                >
                  Email Address *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  className="w-full px-4 py-3 border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent bg-background text-foreground transition-colors duration-200"
                  placeholder="Enter your email address"
                />
              </div>
              <div>
                <label
                  htmlFor="phone"
                  className="block text-foreground font-medium mb-2"
                >
                  Phone Number
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  className="w-full px-4 py-3 border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent bg-background text-foreground transition-colors duration-200"
                  placeholder="Enter your phone number"
                />
              </div>
            </div>

            <div>
              <label
                htmlFor="eventType"
                className="block text-foreground font-medium mb-2"
              >
                Event Type *
              </label>
              <select
                id="eventType"
                name="eventType"
                required
                className="w-full px-4 py-3 border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent bg-background text-foreground transition-colors duration-200"
              >
                <option value="">Select an event type</option>
                <option value="conference">Conference</option>
                <option value="exhibition">Exhibition</option>
                <option value="corporate">Corporate Event</option>
                <option value="training">Training/Workshop</option>
                <option value="other">Other</option>
              </select>
            </div>

            <div>
              <label
                htmlFor="eventDate"
                className="block text-foreground font-medium mb-2"
              >
                Preferred Event Date
              </label>
              <input
                type="date"
                id="eventDate"
                name="eventDate"
                className="w-full px-4 py-3 border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent bg-background text-foreground transition-colors duration-200"
              />
            </div>

            <div>
              <label
                htmlFor="attendees"
                className="block text-foreground font-medium mb-2"
              >
                Expected Number of Attendees
              </label>
              <input
                type="number"
                id="attendees"
                name="attendees"
                min="1"
                className="w-full px-4 py-3 border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent bg-background text-foreground transition-colors duration-200"
                placeholder="Enter expected number of attendees"
              />
            </div>

            <div>
              <label
                htmlFor="message"
                className="block text-foreground font-medium mb-2"
              >
                Message *
              </label>
              <textarea
                id="message"
                name="message"
                rows={6}
                required
                className="w-full px-4 py-3 border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent bg-background text-foreground transition-colors duration-200 resize-none"
                placeholder="Tell us about your event, requirements, and any specific questions you have..."
              ></textarea>
            </div>

            <div className="text-center">
              <button
                type="submit"
                className="bg-primary hover:bg-primary/90 text-white px-12 py-4 rounded-full font-semibold text-lg transition-all duration-300 hover:scale-105 inline-flex items-center"
              >
                <Send className="w-5 h-5 mr-2" />
                Send Message
              </button>
            </div>
          </form>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24 bg-card relative overflow-hidden">
        <div className="container--wide">
          <div className="text-center mb-16">
            <div
              className="animate-fade-in-up"
              style={{ animationDelay: "0.2s" }}
            >
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">
                Frequently Asked Questions
              </h2>
            </div>
            <div
              className="animate-fade-in-up"
              style={{ animationDelay: "0.4s" }}
            >
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Common questions about our services and process
              </p>
            </div>
          </div>

          <div className="space-y-6 max-w-4xl mx-auto">
            {[
              {
                question: "How far in advance should I book your services?",
                answer:
                  "We recommend booking at least 3-6 months in advance for large events and conferences. For smaller events, 1-2 months notice is usually sufficient.",
                icon: <Calendar className="w-6 h-6" />,
                color: "from-primary to-secondary",
              },
              {
                question: "Do you handle events outside of Abuja?",
                answer:
                  "Yes, we provide services across Nigeria and can coordinate events in any city. We have experience managing events in Lagos, Port Harcourt, Kano, and other major cities.",
                icon: <MapPin className="w-6 h-6" />,
                color: "from-secondary to-accent",
              },
              {
                question: "What technology platforms do you use?",
                answer:
                  "We use cutting-edge event management platforms including advanced registration systems, RFID access control, and real-time analytics dashboards.",
                icon: <MessageSquare className="w-6 h-6" />,
                color: "from-accent to-primary",
              },
              {
                question: "Can you handle international events?",
                answer:
                  "Yes, we have experience coordinating international events and can work with international partners and attendees.",
                icon: <Users className="w-6 h-6" />,
                color: "from-primary to-accent",
              },
            ].map((faq, index) => (
              <div
                key={index}
                className="bg-background p-8 rounded-2xl shadow-sm hover:shadow-lg transition-all duration-300 border border-border/20 group hover:scale-105 animate-fade-in-up"
                style={{ animationDelay: `${0.6 + index * 0.2}s` }}
              >
                <div className="flex items-start">
                  <div
                    className={`w-12 h-12 bg-gradient-to-br ${faq.color} rounded-full flex items-center justify-center mr-4 group-hover:scale-110 transition-transform duration-300`}
                  >
                    <div className="text-white">{faq.icon}</div>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-foreground mb-3">
                      {faq.question}
                    </h3>
                    <p className="text-lg text-muted-foreground leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-slate-900 dark:bg-slate-950 relative overflow-hidden">
        {/* Modern background pattern with brand accents */}
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900/80 to-slate-800/80 dark:from-slate-950/80 dark:to-slate-900/80"></div>
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_20%_50%,rgba(74,222,128,0.15),transparent_60%)]"></div>
          <div className="absolute bottom-0 right-0 w-full h-full bg-[radial-gradient(circle_at_80%_50%,rgba(168,85,247,0.1),transparent_60%)]"></div>
        </div>
        <div className="container--wide relative z-10">
          <div className="text-center text-white">
            <div
              className="animate-fade-in-up"
              style={{ animationDelay: "0.2s" }}
            >
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                Ready to Get Started?
              </h2>
            </div>
            <div
              className="animate-fade-in-up"
              style={{ animationDelay: "0.4s" }}
            >
              <p className="text-xl mb-8 text-white/90 max-w-3xl mx-auto">
                Don&apos;t wait - let&apos;s start planning your exceptional
                event today
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <div
                className="animate-fade-in-up"
                style={{ animationDelay: "0.6s" }}
              >
                <button className="bg-white text-black px-10 py-4 rounded-full font-semibold text-lg hover:bg-gray-100 transition-colors duration-300 hover:scale-105">
                  Schedule Call
                </button>
              </div>
              <div
                className="animate-fade-in-up"
                style={{ animationDelay: "0.8s" }}
              >
                <button className="border-2 border-white text-white px-10 py-4 rounded-full font-semibold text-lg hover:bg-white hover:text-black transition-colors duration-300 hover:scale-105">
                  Download Brochure
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
