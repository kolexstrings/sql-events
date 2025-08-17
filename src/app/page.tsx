import Image from "next/image";
import Navigation from "./components/Navigation";

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />

      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900"></div>
        <div className="relative z-10 text-center text-white px-6 max-w-6xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 tracking-tight">
            SQL Events Nigeria
          </h1>
          <p className="text-2xl md:text-3xl mb-8 text-gray-200 max-w-4xl mx-auto leading-relaxed font-light">
            Passion. Innovation. Technology in Events Management
          </p>
          <p className="text-lg md:text-xl mb-8 text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Leading corporate events and conference management company in
            Nigeria
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-slate-900 px-8 py-4 rounded-full font-semibold text-lg hover:bg-gray-100 transition-colors duration-300">
              Plan Your Event
            </button>
            <button className="border-2 border-white text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-white hover:text-slate-900 transition-colors duration-300">
              View Our Work
            </button>
          </div>
        </div>
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
          <div className="animate-bounce">
            <svg
              className="w-6 h-6 text-white"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 14l-7 7m0 0l-7-7m7 7V3"
              />
            </svg>
          </div>
        </div>
      </section>

      {/* Key Services Section */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
              Our Core Services
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive event management solutions for corporate Nigeria
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                title: "Conferences",
                icon: "🎤",
                description: "Professional conference management",
              },
              {
                title: "AGMs",
                icon: "🏢",
                description: "Annual General Meetings",
              },
              {
                title: "Exhibitions",
                icon: "🎪",
                description: "Exhibition & trade show management",
              },
              {
                title: "Product Launches",
                icon: "🚀",
                description: "Brand & product launch events",
              },
              {
                title: "Training",
                icon: "📚",
                description: "Corporate training & workshops",
              },
              {
                title: "Team Building",
                icon: "🤝",
                description: "Team building & retreats",
              },
              {
                title: "Fundraisers",
                icon: "💝",
                description: "Charity & fundraising events",
              },
              {
                title: "Seminars",
                icon: "🎓",
                description: "Educational seminars & workshops",
              },
            ].map((service, index) => (
              <div key={index} className="text-center group">
                <div className="bg-gradient-to-br from-purple-100 to-blue-100 rounded-2xl p-6 mb-4 group-hover:scale-105 transition-transform duration-300">
                  <div className="text-4xl mb-3">{service.icon}</div>
                </div>
                <h3 className="text-xl font-semibold text-slate-900 mb-2">
                  {service.title}
                </h3>
                <p className="text-gray-600 text-sm">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Notable Clients Section */}
      <section className="py-20 px-6 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
              Trusted by Leading Organizations
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We've successfully managed events for prestigious institutions
              across Nigeria
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center">
            {[
              {
                name: "NBA",
                logo: "⚖️",
                description: "Nigerian Bar Association",
              },
              {
                name: "COREN",
                logo: "🏗️",
                description: "Council for Regulation of Engineering",
              },
              {
                name: "Rivers State",
                logo: "🌊",
                description: "Rivers State Government",
              },
              {
                name: "Corporate Nigeria",
                logo: "🏢",
                description: "Leading Corporations",
              },
            ].map((client, index) => (
              <div key={index} className="text-center">
                <div className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-lg transition-shadow duration-300">
                  <div className="text-4xl mb-3">{client.logo}</div>
                  <h3 className="text-lg font-semibold text-slate-900 mb-1">
                    {client.name}
                  </h3>
                  <p className="text-gray-600 text-sm">{client.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
              Why Choose SQL Events Nigeria?
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Technology-Driven",
                description:
                  "Cutting-edge solutions for modern event management",
                icon: "💻",
              },
              {
                title: "Experienced Team",
                description: "Professionals with years of industry expertise",
                icon: "👥",
              },
              {
                title: "Large Clientele Base",
                description:
                  "Trusted by hundreds of organizations across Nigeria",
                icon: "🏢",
              },
            ].map((feature, index) => (
              <div key={index} className="text-center">
                <div className="bg-gradient-to-br from-purple-100 to-blue-100 rounded-3xl p-8 mb-6">
                  <div className="text-5xl mb-4">{feature.icon}</div>
                </div>
                <h3 className="text-2xl font-semibold text-slate-900 mb-4">
                  {feature.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 px-6 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
              What Our Clients Say
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                quote:
                  "SQL Events delivered an exceptional NBA conference that exceeded all expectations.",
                author: "Nigerian Bar Association",
                role: "Annual Conference",
              },
              {
                quote:
                  "Professional, efficient, and technology-driven approach to event management.",
                author: "COREN",
                role: "Engineering Assembly",
              },
              {
                quote:
                  "The Rivers State Education Summit was flawlessly executed with cutting-edge technology.",
                author: "Rivers State Government",
                role: "Education Summit",
              },
            ].map((testimonial, index) => (
              <div
                key={index}
                className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-lg transition-shadow duration-300"
              >
                <div className="text-4xl mb-4">💬</div>
                <p className="text-gray-600 mb-6 italic">
                  "{testimonial.quote}"
                </p>
                <div>
                  <p className="font-semibold text-slate-900">
                    {testimonial.author}
                  </p>
                  <p className="text-gray-500 text-sm">{testimonial.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6 bg-gradient-to-r from-purple-600 to-blue-600">
        <div className="max-w-4xl mx-auto text-center text-white">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Ready to Transform Your Event?
          </h2>
          <p className="text-xl mb-8 text-purple-100">
            Let's discuss how we can bring your vision to life with our
            technology-driven approach.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-purple-600 px-10 py-4 rounded-full font-semibold text-lg hover:bg-gray-100 transition-colors duration-300">
              Get a Quote
            </button>
            <button className="border-2 border-white text-white px-10 py-4 rounded-full font-semibold text-lg hover:bg-white hover:text-purple-600 transition-colors duration-300">
              Contact Us
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
