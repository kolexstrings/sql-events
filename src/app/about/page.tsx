import Navigation from "../components/Navigation";

export default function About() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-6 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <div className="max-w-6xl mx-auto text-center text-white">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            About SQL Events Nigeria
          </h1>
          <p className="text-xl md:text-2xl text-gray-200 max-w-4xl mx-auto leading-relaxed">
            Leading the future of event management in Nigeria through passion,
            innovation, and technology
          </p>
        </div>
      </section>

      {/* Vision & Mission Section */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-8">
                Our Vision & Mission
              </h2>
              <div className="space-y-8">
                <div>
                  <h3 className="text-2xl font-semibold text-purple-600 mb-4">
                    Vision
                  </h3>
                  <p className="text-lg text-gray-600 leading-relaxed">
                    To be the leading technology-driven event management company
                    in Nigeria, setting industry standards and delivering
                    exceptional experiences that exceed expectations.
                  </p>
                </div>
                <div>
                  <h3 className="text-2xl font-semibold text-purple-600 mb-4">
                    Mission
                  </h3>
                  <p className="text-lg text-gray-600 leading-relaxed">
                    To transform the event management landscape in Nigeria by
                    leveraging cutting-edge technology, innovative solutions,
                    and passionate expertise to create memorable, impactful
                    events for our clients.
                  </p>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="bg-gradient-to-br from-purple-100 to-blue-100 rounded-3xl p-12 h-96 flex items-center justify-center">
                <div className="text-center text-gray-600">
                  <div className="text-6xl mb-4">🎯</div>
                  <p className="text-xl font-semibold">Vision & Mission</p>
                  <p className="text-sm">Driving innovation in events</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Company Overview Section */}
      <section className="py-20 px-6 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
              Company Overview
            </h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto">
              SQL Events Nigeria is a premier corporate events and conference
              management company that has been at the forefront of the Nigerian
              events industry.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            <div className="space-y-6">
              <h3 className="text-2xl font-semibold text-slate-900">
                Who We Are
              </h3>
              <p className="text-gray-600 leading-relaxed">
                We are a team of passionate professionals dedicated to
                revolutionizing event management in Nigeria through innovative
                technology solutions and exceptional service delivery.
              </p>
              <p className="text-gray-600 leading-relaxed">
                Our expertise spans across various sectors including legal,
                engineering, government, and corporate organizations, making us
                the preferred choice for high-profile events.
              </p>
            </div>
            <div className="space-y-6">
              <h3 className="text-2xl font-semibold text-slate-900">
                Our Expertise
              </h3>
              <p className="text-gray-600 leading-relaxed">
                With years of experience in managing complex events, we have
                developed a deep understanding of the Nigerian business
                landscape and cultural nuances.
              </p>
              <p className="text-gray-600 leading-relaxed">
                Our technology-driven approach ensures seamless event execution,
                from initial planning to final delivery, with real-time
                monitoring and management capabilities.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Approach Section */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
              Our Approach
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              A systematic methodology that ensures every event is executed
              flawlessly
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                step: "01",
                title: "Conceptualisation",
                description:
                  "We work closely with clients to understand their vision, objectives, and requirements, developing comprehensive event concepts that align with their goals.",
                icon: "💡",
              },
              {
                step: "02",
                title: "Planning",
                description:
                  "Detailed planning phase where we create comprehensive event strategies, timelines, and resource allocation plans using our advanced technology platforms.",
                icon: "📋",
              },
              {
                step: "03",
                title: "Delivery",
                description:
                  "Seamless execution of the event with real-time monitoring, professional coordination, and attention to every detail to ensure success.",
                icon: "✅",
              },
            ].map((phase, index) => (
              <div key={index} className="text-center">
                <div className="bg-gradient-to-br from-purple-100 to-blue-100 rounded-3xl p-8 mb-6 relative">
                  <div className="absolute -top-4 -right-4 bg-purple-600 text-white text-sm font-bold px-3 py-1 rounded-full">
                    {phase.step}
                  </div>
                  <div className="text-5xl mb-4">{phase.icon}</div>
                </div>
                <h3 className="text-2xl font-semibold text-slate-900 mb-4">
                  {phase.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {phase.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Values Section */}
      <section className="py-20 px-6 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
              Our Core Values
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              The principles that guide everything we do
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Passion",
                description:
                  "We approach every event with enthusiasm and dedication, treating each project as if it were our own.",
                icon: "🔥",
              },
              {
                title: "Innovation",
                description:
                  "Constantly exploring new technologies and creative solutions to deliver cutting-edge event experiences.",
                icon: "🚀",
              },
              {
                title: "Technology",
                description:
                  "Leveraging the latest digital tools and platforms to ensure efficient, seamless event management.",
                icon: "💻",
              },
            ].map((value, index) => (
              <div
                key={index}
                className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-lg transition-shadow duration-300 text-center"
              >
                <div className="text-5xl mb-4">{value.icon}</div>
                <h3 className="text-2xl font-semibold text-slate-900 mb-4">
                  {value.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {value.description}
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
            Ready to Work With Us?
          </h2>
          <p className="text-xl mb-8 text-purple-100">
            Let's discuss how we can bring your event vision to life with our
            innovative approach.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-purple-600 px-10 py-4 rounded-full font-semibold text-lg hover:bg-gray-100 transition-colors duration-300">
              Get Started
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
