import Navigation from "../components/Navigation";

export default function Services() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-6 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <div className="max-w-6xl mx-auto text-center text-white">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">Our Services</h1>
          <p className="text-xl md:text-2xl text-gray-200 max-w-4xl mx-auto leading-relaxed">
            Comprehensive event management solutions powered by cutting-edge
            technology
          </p>
        </div>
      </section>

      {/* Corporate Events & Conference Management */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
              Corporate Events & Conference Management
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Professional event management for corporate Nigeria with
              technology-driven solutions
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Conferences",
                description:
                  "Professional conference management with advanced registration systems, speaker coordination, and seamless execution.",
                icon: "🎤",
                features: [
                  "Registration Management",
                  "Speaker Coordination",
                  "Session Planning",
                  "Technical Support",
                ],
              },
              {
                title: "AGMs",
                description:
                  "Annual General Meetings with secure voting systems, documentation, and professional facilitation.",
                icon: "🏢",
                features: [
                  "Secure Voting",
                  "Documentation",
                  "Professional Facilitation",
                  "Compliance Support",
                ],
              },
              {
                title: "Training & Workshops",
                description:
                  "Corporate training events with interactive learning platforms and progress tracking.",
                icon: "📚",
                features: [
                  "Interactive Learning",
                  "Progress Tracking",
                  "Resource Management",
                  "Assessment Tools",
                ],
              },
              {
                title: "Brand Launches",
                description:
                  "Product and brand launch events that create buzz and generate media attention.",
                icon: "🚀",
                features: [
                  "Media Coordination",
                  "Brand Integration",
                  "Guest Management",
                  "Launch Strategy",
                ],
              },
              {
                title: "Team Building",
                description:
                  "Corporate team building events that strengthen bonds and boost productivity.",
                icon: "🤝",
                features: [
                  "Activity Planning",
                  "Team Dynamics",
                  "Progress Monitoring",
                  "Feedback Systems",
                ],
              },
              {
                title: "Fundraisers",
                description:
                  "Charity and fundraising events with donation tracking and donor management.",
                icon: "💝",
                features: [
                  "Donation Tracking",
                  "Donor Management",
                  "Event Planning",
                  "Impact Reporting",
                ],
              },
            ].map((service, index) => (
              <div
                key={index}
                className="bg-white border border-gray-200 rounded-2xl p-8 shadow-sm hover:shadow-lg transition-shadow duration-300"
              >
                <div className="text-4xl mb-4">{service.icon}</div>
                <h3 className="text-xl font-semibold text-slate-900 mb-3">
                  {service.title}
                </h3>
                <p className="text-gray-600 mb-4 leading-relaxed">
                  {service.description}
                </p>
                <ul className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <li
                      key={featureIndex}
                      className="flex items-center text-sm text-gray-600"
                    >
                      <span className="w-2 h-2 bg-purple-500 rounded-full mr-3"></span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Exhibition Management */}
      <section className="py-20 px-6 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
                Exhibition Management
              </h2>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                Comprehensive exhibition management solutions with online
                booking systems, stand management, and attendee tracking.
              </p>
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="bg-purple-100 rounded-full p-2 mr-4">
                    <span className="text-purple-600 text-lg">💻</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-slate-900 mb-2">
                      Online Exhibitor Booking
                    </h3>
                    <p className="text-gray-600">
                      Streamlined online registration and booking system for
                      exhibitors
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="bg-purple-100 rounded-full p-2 mr-4">
                    <span className="text-purple-600 text-lg">💳</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-slate-900 mb-2">
                      Payment Management
                    </h3>
                    <p className="text-gray-600">
                      Secure payment processing and financial tracking
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="bg-purple-100 rounded-full p-2 mr-4">
                    <span className="text-purple-600 text-lg">🏗️</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-slate-900 mb-2">
                      Stand Management
                    </h3>
                    <p className="text-gray-600">
                      Complete stand design, construction, and management
                      services
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="bg-gradient-to-br from-purple-100 to-blue-100 rounded-3xl p-12 h-96 flex items-center justify-center">
                <div className="text-center text-gray-600">
                  <div className="text-6xl mb-4">🎪</div>
                  <p className="text-xl font-semibold">Exhibition Solutions</p>
                  <p className="text-sm">Technology-driven management</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Abstract/Paper Management */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="order-2 lg:order-1 relative">
              <div className="bg-gradient-to-br from-purple-100 to-blue-100 rounded-3xl p-12 h-96 flex items-center justify-center">
                <div className="text-center text-gray-600">
                  <div className="text-6xl mb-4">📝</div>
                  <p className="text-xl font-semibold">Abstract Management</p>
                  <p className="text-sm">Streamlined submission process</p>
                </div>
              </div>
            </div>
            <div className="order-1 lg:order-2">
              <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
                Abstract/Paper Management
              </h2>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                Complete management of academic submissions with online
                platforms for submission, reviewing, and publishing.
              </p>
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="bg-purple-100 rounded-full p-2 mr-4">
                    <span className="text-purple-600 text-lg">📤</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-slate-900 mb-2">
                      Online Submission
                    </h3>
                    <p className="text-gray-600">
                      User-friendly online submission platform for authors
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="bg-purple-100 rounded-full p-2 mr-4">
                    <span className="text-purple-600 text-lg">👁️</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-slate-900 mb-2">
                      Review Process
                    </h3>
                    <p className="text-gray-600">
                      Streamlined peer review and evaluation system
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="bg-purple-100 rounded-full p-2 mr-4">
                    <span className="text-purple-600 text-lg">📚</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-slate-900 mb-2">
                      Publishing
                    </h3>
                    <p className="text-gray-600">
                      Professional publication and distribution services
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Access Control Management */}
      <section className="py-20 px-6 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
                Access Control Management
              </h2>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                Advanced access control solutions using RFID technology, barcode
                systems, and comprehensive attendee data management.
              </p>
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="bg-purple-100 rounded-full p-2 mr-4">
                    <span className="text-purple-600 text-lg">🔐</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-slate-900 mb-2">
                      RFID Technology
                    </h3>
                    <p className="text-gray-600">
                      Contactless access control for seamless entry
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="bg-purple-100 rounded-full p-2 mr-4">
                    <span className="text-purple-600 text-lg">📊</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-slate-900 mb-2">
                      Barcode Systems
                    </h3>
                    <p className="text-gray-600">
                      Efficient scanning and verification processes
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="bg-purple-100 rounded-full p-2 mr-4">
                    <span className="text-purple-600 text-lg">👥</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-slate-900 mb-2">
                      Attendee Data
                    </h3>
                    <p className="text-gray-600">
                      Comprehensive tracking and analytics
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="bg-gradient-to-br from-purple-100 to-blue-100 rounded-3xl p-12 h-96 flex items-center justify-center">
                <div className="text-center text-gray-600">
                  <div className="text-6xl mb-4">🔒</div>
                  <p className="text-xl font-semibold">Access Control</p>
                  <p className="text-sm">Secure & efficient entry</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Other Services */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
              Additional Services
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive support services to ensure your event's success
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Logistics",
                description:
                  "Complete logistics management including transportation, accommodation, and resource coordination.",
                icon: "🚚",
              },
              {
                title: "Hostessing/Ushering",
                description:
                  "Professional hostessing and ushering services for seamless event flow.",
                icon: "👩‍💼",
              },
              {
                title: "Sponsorship & Marketing",
                description:
                  "Strategic sponsorship acquisition and comprehensive marketing support.",
                icon: "📢",
              },
              {
                title: "Entertainment",
                description:
                  "Curated entertainment options to enhance your event experience.",
                icon: "🎭",
              },
              {
                title: "Venue Management",
                description:
                  "Venue selection, setup, and facility management services.",
                icon: "🏛️",
              },
              {
                title: "Consultancy",
                description:
                  "Expert consultation for event strategy and planning optimization.",
                icon: "💡",
              },
            ].map((service, index) => (
              <div
                key={index}
                className="bg-gray-50 p-8 rounded-2xl hover:shadow-lg transition-shadow duration-300 text-center"
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

      {/* CTA Section */}
      <section className="py-20 px-6 bg-gradient-to-r from-purple-600 to-blue-600">
        <div className="max-w-4xl mx-auto text-center text-white">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-xl mb-8 text-purple-100">
            Let's discuss how our services can transform your next event.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-purple-600 px-10 py-4 rounded-full font-semibold text-lg hover:bg-gray-100 transition-colors duration-300">
              Request Quote
            </button>
            <button className="border-2 border-white text-white px-10 py-4 rounded-full font-semibold text-lg hover:bg-white hover:text-purple-600 transition-colors duration-300">
              Schedule Consultation
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
