import Navigation from "../components/Navigation";

export default function Portfolio() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-6 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <div className="max-w-6xl mx-auto text-center text-white">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">Our Portfolio</h1>
          <p className="text-xl md:text-2xl text-gray-200 max-w-4xl mx-auto leading-relaxed">
            Showcasing successful events that have shaped Nigeria&apos;s
            corporate landscape
          </p>
        </div>
      </section>

      {/* Featured Events */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
              Featured Events
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Highlighting some of our most prestigious and successful events
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {[
              {
                title: "NBA Annual Conference",
                year: "2024",
                city: "Lagos",
                description:
                  "The Nigerian Bar Association&apos;s flagship annual conference, featuring over 5,000 legal professionals from across Nigeria and beyond.",
                highlights: [
                  "5,000+ Attendees",
                  "3-Day Conference",
                  "International Speakers",
                  "Technology Integration",
                ],
                image: "⚖️",
              },
              {
                title: "Rivers State Education Summit",
                year: "2024",
                city: "Port Harcourt",
                description:
                  "A comprehensive education summit bringing together stakeholders from across the education sector in Rivers State.",
                highlights: [
                  "Government Officials",
                  "Education Leaders",
                  "Policy Discussion",
                  "Innovation Showcase",
                ],
                image: "🌊",
              },
            ].map((event, index) => (
              <div
                key={index}
                className="bg-gray-50 rounded-3xl p-8 hover:shadow-lg transition-shadow duration-300"
              >
                <div className="flex items-center justify-between mb-6">
                  <div className="text-6xl">{event.image}</div>
                  <div className="text-right">
                    <div className="text-2xl font-bold text-purple-600">
                      {event.year}
                    </div>
                    <div className="text-gray-600">{event.city}</div>
                  </div>
                </div>
                <h3 className="text-2xl font-bold text-slate-900 mb-4">
                  {event.title}
                </h3>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {event.description}
                </p>
                <div className="grid grid-cols-2 gap-3">
                  {event.highlights.map((highlight, highlightIndex) => (
                    <div
                      key={highlightIndex}
                      className="bg-white px-3 py-2 rounded-full text-sm text-gray-700 text-center"
                    >
                      {highlight}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Past Events Grid */}
      <section className="py-20 px-6 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
              Past Events
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              A comprehensive showcase of events we&apos;ve successfully managed
              across various sectors
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "COREN Engineering Assembly",
                year: "2024",
                city: "Abuja",
                category: "Engineering",
                description:
                  "Annual assembly of the Council for Regulation of Engineering in Nigeria",
                image: "🏗️",
              },
              {
                title: "Tech Innovation Summit",
                year: "2024",
                city: "Lagos",
                category: "Technology",
                description:
                  "Leading technology conference showcasing innovation in Nigeria",
                image: "💻",
              },
              {
                title: "Healthcare Conference",
                year: "2023",
                city: "Kano",
                category: "Healthcare",
                description:
                  "National healthcare professionals conference and exhibition",
                image: "🏥",
              },
              {
                title: "Banking & Finance Forum",
                year: "2023",
                city: "Lagos",
                category: "Finance",
                description: "Annual banking and finance industry forum",
                image: "🏦",
              },
              {
                title: "Education Technology Expo",
                year: "2023",
                city: "Port Harcourt",
                category: "Education",
                description:
                  "Showcasing latest educational technology solutions",
                image: "📚",
              },
              {
                title: "Oil & Gas Conference",
                year: "2023",
                city: "Warri",
                category: "Energy",
                description: "Annual oil and gas industry conference",
                image: "⛽",
              },
              {
                title: "Legal Tech Conference",
                year: "2023",
                city: "Lagos",
                category: "Legal",
                description: "Technology in legal practice conference",
                image: "⚖️",
              },
              {
                title: "Startup Summit",
                year: "2023",
                city: "Abuja",
                category: "Entrepreneurship",
                description: "National startup and entrepreneurship summit",
                image: "🚀",
              },
              {
                title: "Women in Business Forum",
                year: "2023",
                city: "Lagos",
                category: "Business",
                description: "Empowering women in business and leadership",
                image: "👩‍💼",
              },
            ].map((event, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-shadow duration-300"
              >
                <div className="h-48 bg-gradient-to-br from-purple-100 to-blue-100 flex items-center justify-center">
                  <div className="text-6xl">{event.image}</div>
                </div>
                <div className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <span className="inline-block px-3 py-1 bg-purple-100 text-purple-800 text-sm rounded-full">
                      {event.category}
                    </span>
                    <span className="text-gray-500 text-sm">{event.year}</span>
                  </div>
                  <h3 className="text-xl font-semibold text-slate-900 mb-2">
                    {event.title}
                  </h3>
                  <p className="text-gray-600 text-sm mb-3">{event.city}</p>
                  <p className="text-gray-600 text-sm">{event.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Event Statistics */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
              Our Impact in Numbers
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Quantifying our success in the Nigerian events industry
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            {[
              { number: "500+", label: "Events Managed", icon: "🎯" },
              { number: "50+", label: "Cities Covered", icon: "🌍" },
              { number: "100,000+", label: "Attendees Served", icon: "👥" },
              { number: "98%", label: "Client Satisfaction", icon: "⭐" },
            ].map((stat, index) => (
              <div key={index} className="text-center">
                <div className="bg-gradient-to-br from-purple-100 to-blue-100 rounded-3xl p-8 mb-6">
                  <div className="text-4xl mb-4">{stat.icon}</div>
                </div>
                <div className="text-4xl font-bold text-purple-600 mb-2">
                  {stat.number}
                </div>
                <div className="text-gray-600 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Client Testimonials */}
      <section className="py-20 px-6 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
              What Our Clients Say
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Testimonials from organizations we&apos;ve had the privilege to serve
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                quote:
                  "SQL Events delivered an exceptional NBA conference that exceeded all expectations. Their technology-driven approach made the entire process seamless.",
                author: "Nigerian Bar Association",
                role: "Annual Conference 2024",
                logo: "⚖️",
              },
              {
                quote:
                  "The Rivers State Education Summit was flawlessly executed with cutting-edge technology and professional coordination throughout.",
                author: "Rivers State Government",
                role: "Education Summit 2024",
                logo: "🌊",
              },
              {
                quote:
                  "Professional, efficient, and technology-driven approach to event management. COREN Engineering Assembly was a huge success.",
                author: "COREN",
                role: "Engineering Assembly 2024",
                logo: "🏗️",
              },
            ].map((testimonial, index) => (
              <div
                key={index}
                className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-lg transition-shadow duration-300"
              >
                <div className="text-4xl mb-4">{testimonial.logo}</div>
                <p className="text-gray-600 mb-6 italic">
                  &ldquo;{testimonial.quote}&rdquo;
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
            Ready to Join Our Success Stories?
          </h2>
          <p className="text-xl mb-8 text-purple-100">
            Let&apos;s create the next remarkable event together and add it to
            our growing portfolio.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-purple-600 px-10 py-4 rounded-full font-semibold text-lg hover:bg-gray-100 transition-colors duration-300">
              Start Planning
            </button>
            <button className="border-2 border-white text-white px-10 py-4 rounded-full font-semibold text-lg hover:bg-white hover:text-purple-600 transition-colors duration-300">
              View More Events
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
