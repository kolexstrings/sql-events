import Navigation from "../components/Navigation";

export default function Contact() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-6 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <div className="max-w-6xl mx-auto text-center text-white">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">Contact Us</h1>
          <p className="text-xl md:text-2xl text-gray-200 max-w-4xl mx-auto leading-relaxed">
            Ready to start planning your next event? Let&apos;s connect and
            bring your vision to life.
          </p>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
              Get in Touch
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Multiple ways to reach us and start your event planning journey
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {[
              {
                icon: "📧",
                title: "Email",
                details: "hello@sqlevents.ng",
                description:
                  "Send us a detailed message about your event requirements",
              },
              {
                icon: "📱",
                title: "Phone",
                details: "+234 XXX XXX XXXX",
                description:
                  "Call us directly for immediate assistance and consultation",
              },
              {
                icon: "📍",
                title: "Office",
                details: "Lagos, Nigeria",
                description:
                  "Visit our office for face-to-face discussions and planning",
              },
            ].map((contact, index) => (
              <div key={index} className="text-center">
                <div className="bg-gradient-to-br from-purple-100 to-blue-100 rounded-3xl p-8 mb-6">
                  <div className="text-5xl mb-4">{contact.icon}</div>
                </div>
                <h3 className="text-2xl font-semibold text-slate-900 mb-4">
                  {contact.title}
                </h3>
                <p className="text-xl text-purple-600 font-semibold mb-3">
                  {contact.details}
                </p>
                <p className="text-gray-600 leading-relaxed">
                  {contact.description}
                </p>
              </div>
            ))}
          </div>

          {/* Office Hours */}
          <div className="bg-gray-50 rounded-3xl p-8 text-center">
            <h3 className="text-2xl font-semibold text-slate-900 mb-4">
              Office Hours
            </h3>
            <div className="grid md:grid-cols-2 gap-8 max-w-2xl mx-auto">
              <div>
                <h4 className="font-semibold text-slate-900 mb-2">Weekdays</h4>
                <p className="text-gray-600">
                  Monday - Friday: 8:00 AM - 6:00 PM
                </p>
              </div>
              <div>
                <h4 className="font-semibold text-slate-900 mb-2">Weekends</h4>
                <p className="text-gray-600">Saturday: 9:00 AM - 3:00 PM</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-20 px-6 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
              Send Us a Message
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Fill out the form below and we&apos;ll get back to you within 24
              hours
            </p>
          </div>

          <form className="bg-white rounded-3xl p-8 shadow-lg">
            <div className="grid md:grid-cols-2 gap-6 mb-6">
              <div>
                <label
                  htmlFor="firstName"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  First Name *
                </label>
                <input
                  type="text"
                  id="firstName"
                  name="firstName"
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-full focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-colors duration-300"
                  placeholder="Enter your first name"
                />
              </div>
              <div>
                <label
                  htmlFor="lastName"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  Last Name *
                </label>
                <input
                  type="text"
                  id="lastName"
                  name="lastName"
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-full focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-colors duration-300"
                  placeholder="Enter your last name"
                />
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6 mb-6">
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  Email Address *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-full focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-colors duration-300"
                  placeholder="Enter your email address"
                />
              </div>
              <div>
                <label
                  htmlFor="phone"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  Phone Number
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  className="w-full px-4 py-3 border border-gray-300 rounded-full focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-colors duration-300"
                  placeholder="Enter your phone number"
                />
              </div>
            </div>

            <div className="mb-6">
              <label
                htmlFor="company"
                className="block text-sm font-medium text-gray-700 mb-2"
              >
                Company/Organization
              </label>
              <input
                type="text"
                id="company"
                name="company"
                className="w-full px-4 py-3 border border-gray-300 rounded-full focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-colors duration-300"
                placeholder="Enter your company name"
              />
            </div>

            <div className="mb-6">
              <label
                htmlFor="eventType"
                className="block text-sm font-medium text-gray-700 mb-2"
              >
                Event Type *
              </label>
              <select
                id="eventType"
                name="eventType"
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-full focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-colors duration-300"
              >
                <option value="">Select an event type</option>
                <option value="conference">Conference</option>
                <option value="agm">AGM</option>
                <option value="exhibition">Exhibition</option>
                <option value="product-launch">Product Launch</option>
                <option value="training">Training & Workshop</option>
                <option value="team-building">Team Building</option>
                <option value="fundraiser">Fundraiser</option>
                <option value="other">Other</option>
              </select>
            </div>

            <div className="mb-6">
              <label
                htmlFor="eventDate"
                className="block text-sm font-medium text-gray-700 mb-2"
              >
                Preferred Event Date
              </label>
              <input
                type="date"
                id="eventDate"
                name="eventDate"
                className="w-full px-4 py-3 border border-gray-300 rounded-full focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-colors duration-300"
              />
            </div>

            <div className="mb-6">
              <label
                htmlFor="attendees"
                className="block text-sm font-medium text-gray-700 mb-2"
              >
                Expected Number of Attendees
              </label>
              <select
                id="attendees"
                name="attendees"
                className="w-full px-4 py-3 border border-gray-300 rounded-full focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-colors duration-300"
              >
                <option value="">Select range</option>
                <option value="1-50">1 - 50</option>
                <option value="51-100">51 - 100</option>
                <option value="101-250">101 - 250</option>
                <option value="251-500">251 - 500</option>
                <option value="501-1000">501 - 1,000</option>
                <option value="1000+">1,000+</option>
              </select>
            </div>

            <div className="mb-6">
              <label
                htmlFor="message"
                className="block text-sm font-medium text-gray-700 mb-2"
              >
                Event Details *
              </label>
              <textarea
                id="message"
                name="message"
                rows={6}
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-full focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-colors duration-300"
                placeholder="Tell us about your event, requirements, and specific needs..."
              ></textarea>
            </div>

            <div className="text-center">
              <button
                type="submit"
                className="bg-purple-600 text-white px-12 py-4 rounded-full font-semibold text-lg hover:bg-purple-700 transition-colors duration-300"
              >
                Send Message
              </button>
            </div>
          </form>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
              Frequently Asked Questions
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Common questions about our services and process
            </p>
          </div>

          <div className="space-y-6">
            {[
              {
                question: "How far in advance should I book your services?",
                answer:
                  "We recommend booking at least 3-6 months in advance for large events, and 1-2 months for smaller gatherings. This ensures we can provide the best service and secure the necessary resources.",
              },
              {
                question: "Do you handle events outside of Lagos?",
                answer:
                  "Yes! We manage events across Nigeria and have successfully executed events in Abuja, Port Harcourt, Kano, Warri, and many other cities. Our team is mobile and equipped to handle events anywhere in the country.",
              },
              {
                question: "What technology solutions do you provide?",
                answer:
                  "We offer comprehensive technology solutions including online registration systems, RFID access control, mobile apps, live streaming, virtual event platforms, and real-time analytics and reporting.",
              },
              {
                question: "Can you help with venue selection?",
                answer:
                  "Absolutely! We have extensive knowledge of venues across Nigeria and can recommend the perfect location based on your event requirements, budget, and preferences. We also handle venue negotiations and contracts.",
              },
            ].map((faq, index) => (
              <div key={index} className="bg-gray-50 rounded-2xl p-6">
                <h3 className="text-lg font-semibold text-slate-900 mb-3">
                  {faq.question}
                </h3>
                <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6 bg-gradient-to-r from-purple-600 to-blue-600">
        <div className="max-w-4xl mx-auto text-center text-white">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-xl mb-8 text-purple-100">
            Don&apos;t wait - let&apos;s start planning your next successful
            event today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-purple-600 px-10 py-4 rounded-full font-semibold text-lg hover:bg-gray-100 transition-colors duration-300">
              Get Free Quote
            </button>
            <button className="border-2 border-white text-white px-10 py-4 rounded-full font-semibold text-lg hover:bg-white hover:text-purple-600 transition-colors duration-300">
              Schedule Call
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-6 bg-black text-white">
        <div className="max-w-6xl mx-auto text-center">
          <div className="text-2xl font-bold mb-4">SQL Events Nigeria</div>
          <p className="text-gray-400 mb-6">
            Passion. Innovation. Technology in Events Management.
          </p>
          <div className="flex justify-center space-x-6 text-gray-400 mb-6">
            <a href="#" className="hover:text-white transition-colors">
              LinkedIn
            </a>
            <a href="#" className="hover:text-white transition-colors">
              Twitter
            </a>
            <a href="#" className="hover:text-white transition-colors">
              Instagram
            </a>
          </div>
          <div className="text-gray-500 text-sm">
            <p>Lagos, Nigeria | +234 XXX XXX XXXX | hello@sqlevents.ng</p>
          </div>
          <div className="mt-8 pt-8 border-t border-gray-800 text-gray-500">
            <p>&copy; 2024 SQL Events Nigeria. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
