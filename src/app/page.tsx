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
          <h1 className="text-6xl md:text-8xl font-bold mb-6 tracking-tight">
            SQL Events
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-gray-200 max-w-3xl mx-auto leading-relaxed">
            Transform your vision into unforgettable experiences. We craft
            moments that matter.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-slate-900 px-8 py-4 rounded-full font-semibold text-lg hover:bg-gray-100 transition-colors duration-300">
              Start Planning
            </button>
            <button className="border-2 border-white text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-white hover:text-slate-900 transition-colors duration-300">
              View Portfolio
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

      {/* Services Section */}
      <section id="services" className="py-20 px-6 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
              What We Do
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From intimate gatherings to grand celebrations, we handle every
              detail with precision and creativity.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Corporate Events",
                description:
                  "Conferences, product launches, and team building experiences that inspire and engage.",
                icon: "🏢",
              },
              {
                title: "Weddings",
                description:
                  "Your special day, perfectly orchestrated with attention to every romantic detail.",
                icon: "💒",
              },
              {
                title: "Special Celebrations",
                description:
                  "Birthdays, anniversaries, and milestone events that create lasting memories.",
                icon: "🎉",
              },
              {
                title: "Conferences",
                description:
                  "Professional gatherings that connect, educate, and inspire your audience.",
                icon: "🎤",
              },
              {
                title: "Product Launches",
                description:
                  "Launch events that generate buzz and create unforgettable brand moments.",
                icon: "🚀",
              },
              {
                title: "Team Building",
                description:
                  "Experiences that strengthen bonds and boost team morale and productivity.",
                icon: "🤝",
              },
            ].map((service, index) => (
              <div
                key={index}
                className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-lg transition-shadow duration-300"
              >
                <div className="text-4xl mb-4">{service.icon}</div>
                <h3 className="text-xl font-semibold text-slate-900 mb-3">
                  {service.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {service.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
                Crafting Experiences That Matter
              </h2>
              <p className="text-xl text-gray-600 mb-6 leading-relaxed">
                At SQL Events, we believe that every event tells a story. Our
                team of passionate professionals works tirelessly to ensure that
                your story is told beautifully, from the initial concept to the
                final moment.
              </p>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                With years of experience in event planning and management, we've
                mastered the art of creating seamless, memorable experiences
                that exceed expectations and leave lasting impressions.
              </p>
              <div className="flex flex-wrap gap-4">
                <div className="text-center">
                  <div className="text-3xl font-bold text-purple-600">500+</div>
                  <div className="text-gray-600">Events Planned</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-purple-600">98%</div>
                  <div className="text-gray-600">Client Satisfaction</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-purple-600">5+</div>
                  <div className="text-gray-600">Years Experience</div>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="bg-gradient-to-br from-purple-100 to-blue-100 rounded-3xl p-8 h-96 flex items-center justify-center">
                <div className="text-center text-gray-500">
                  <div className="text-6xl mb-4">📸</div>
                  <p className="text-lg">Event Gallery</p>
                  <p className="text-sm">Beautiful moments captured</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section id="portfolio" className="py-20 px-6 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
              Our Work
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Take a look at some of our recent events and see how we bring
              visions to life.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Tech Conference 2024",
                category: "Corporate",
                image: "🎯",
              },
              {
                title: "Sarah & Mike's Wedding",
                category: "Wedding",
                image: "💕",
              },
              {
                title: "Product Launch Event",
                category: "Launch",
                image: "🚀",
              },
              {
                title: "Annual Gala Dinner",
                category: "Celebration",
                image: "✨",
              },
              { title: "Team Retreat", category: "Corporate", image: "🏔️" },
              { title: "Birthday Bash", category: "Celebration", image: "🎂" },
            ].map((project, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-shadow duration-300"
              >
                <div className="h-48 bg-gradient-to-br from-purple-100 to-blue-100 flex items-center justify-center">
                  <div className="text-6xl">{project.image}</div>
                </div>
                <div className="p-6">
                  <span className="inline-block px-3 py-1 bg-purple-100 text-purple-800 text-sm rounded-full mb-3">
                    {project.category}
                  </span>
                  <h3 className="text-xl font-semibold text-slate-900 mb-2">
                    {project.title}
                  </h3>
                  <p className="text-gray-600">
                    A stunning event that exceeded all expectations.
                  </p>
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
            Ready to Create Something Amazing?
          </h2>
          <p className="text-xl mb-8 text-purple-100">
            Let's discuss your vision and turn it into an unforgettable reality.
          </p>
          <button className="bg-white text-purple-600 px-10 py-4 rounded-full font-semibold text-lg hover:bg-gray-100 transition-colors duration-300">
            Get Started Today
          </button>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-6 bg-gray-900">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Let's Connect
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Ready to start planning your next event? We'd love to hear from
              you.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-3xl mb-4">📧</div>
              <h3 className="text-xl font-semibold text-white mb-2">Email</h3>
              <p className="text-gray-300">hello@sqlevents.com</p>
            </div>
            <div>
              <div className="text-3xl mb-4">📱</div>
              <h3 className="text-xl font-semibold text-white mb-2">Phone</h3>
              <p className="text-gray-300">+1 (555) 123-4567</p>
            </div>
            <div>
              <div className="text-3xl mb-4">📍</div>
              <h3 className="text-xl font-semibold text-white mb-2">
                Location
              </h3>
              <p className="text-gray-300">San Francisco, CA</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-6 bg-black text-white">
        <div className="max-w-6xl mx-auto text-center">
          <div className="text-2xl font-bold mb-4">SQL Events</div>
          <p className="text-gray-400 mb-6">
            Creating moments that matter, one event at a time.
          </p>
          <div className="flex justify-center space-x-6 text-gray-400">
            <a href="#" className="hover:text-white transition-colors">
              Instagram
            </a>
            <a href="#" className="hover:text-white transition-colors">
              LinkedIn
            </a>
            <a href="#" className="hover:text-white transition-colors">
              Twitter
            </a>
          </div>
          <div className="mt-8 pt-8 border-t border-gray-800 text-gray-500">
            <p>&copy; 2024 SQL Events. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
