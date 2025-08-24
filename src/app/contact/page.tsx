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
      <section className="relative pt-32 pb-20 px-6 bg-gradient-to-br from-primary via-secondary to-accent overflow-hidden">
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

        <div className="container--wide relative z-10">
          <div className="text-center text-white animate-fade-in">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6">
              Get In Touch
            </h1>
            <p className="text-xl md:text-2xl lg:text-3xl opacity-95 max-w-4xl mx-auto leading-relaxed">
              Ready to transform your next event? Let&apos;s discuss how we can
              bring your vision to life
            </p>
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-24 bg-background relative overflow-hidden">
        <div className="container--wide">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">
              Contact Information
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Multiple ways to reach us and get started on your event
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 animate-fade-in-up">
            {[
              {
                title: "Email Us",
                detail: "info@sqlevents.ng",
                description: "Send us a detailed message about your event",
                icon: <Mail className="w-8 h-8" />,
                color: "from-primary to-secondary",
              },
              {
                title: "Call Us",
                detail: "+234 803 123 4567",
                description: "Speak directly with our event specialists",
                icon: <Phone className="w-8 h-8" />,
                color: "from-secondary to-accent",
              },
              {
                title: "Visit Us",
                detail: "Lagos, Nigeria",
                description: "Schedule an in-person consultation",
                icon: <MapPin className="w-8 h-8" />,
                color: "from-accent to-primary",
              },
            ].map((contact, index) => (
              <div
                key={index}
                className="bg-card p-8 rounded-2xl shadow-sm hover:shadow-lg transition-all duration-300 border border-border/20 group hover:scale-105"
              >
                <div
                  className={`w-16 h-16 bg-gradient-to-br ${contact.color} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}
                >
                  <div className="text-white">{contact.icon}</div>
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-3">
                  {contact.title}
                </h3>
                <p className="text-primary text-lg font-medium mb-2">
                  {contact.detail}
                </p>
                <p className="text-muted-foreground leading-relaxed">
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
          <div className="bg-background border border-border/20 rounded-3xl p-8 max-w-2xl mx-auto animate-fade-in-up">
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
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">
              Frequently Asked Questions
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Common questions about our services and process
            </p>
          </div>

          <div className="space-y-6 max-w-4xl mx-auto animate-fade-in-up">
            {[
              {
                question: "How far in advance should I book your services?",
                answer:
                  "We recommend booking at least 3-6 months in advance for large events and conferences. For smaller events, 1-2 months notice is usually sufficient.",
                icon: <Calendar className="w-6 h-6" />,
                color: "from-primary to-secondary",
              },
              {
                question: "Do you handle events outside of Lagos?",
                answer:
                  "Yes, we provide services across Nigeria and can coordinate events in any city. We have experience managing events in Abuja, Port Harcourt, Kano, and other major cities.",
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
                className="bg-background p-8 rounded-2xl shadow-sm hover:shadow-lg transition-all duration-300 border border-border/20 group hover:scale-105"
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
                    <p className="text-muted-foreground leading-relaxed">
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
      <section className="py-24 bg-gradient-to-r from-primary to-secondary relative overflow-hidden">
        <div className="container--wide relative z-10">
          <div className="text-center text-white animate-fade-in">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Ready to Get Started?
            </h2>
            <p className="text-xl mb-8 text-white/90 max-w-3xl mx-auto">
              Don&apos;t wait - let&apos;s start planning your exceptional event
              today
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <button className="bg-white text-primary px-10 py-4 rounded-full font-semibold text-lg hover:bg-gray-100 transition-colors duration-300 hover:scale-105">
                Schedule Call
              </button>
              <button className="border-2 border-white text-white px-10 py-4 rounded-full font-semibold text-lg hover:bg-white hover:text-primary transition-colors duration-300 hover:scale-105">
                Download Brochure
              </button>
            </div>
          </div>
        </div>
      </section>

            <Footer />
    </div>
  );
}
