import Navigation from "./components/Navigation";

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-black text-white">
        <div className="container text-center">
          <div className="max-w-5xl mx-auto">
            <h1 className="text-balance mb-8 fade-in stagger-1">
              IDEAS WORTH RALLYING AROUND®
            </h1>
            <div className="w-24 h-1 bg-white mx-auto mb-12 fade-in stagger-2"></div>
            <p className="text-xl md:text-2xl max-w-4xl mx-auto mb-12 leading-relaxed fade-in stagger-3">
              SQL Events Nigeria is a brand and design firm that partners with
              bold and brave leaders to create ideas worth rallying around. We
              believe in the power of ideas to transform businesses, inspire
              movements, and shape culture.
            </p>
            <div className="fade-in stagger-4">
              <button className="btn bg-white text-black hover:bg-gray-100">
                Let's Brand Your Future
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Visual Storytelling Section */}
      <section className="section bg-white">
        <div className="container">
          <div className="grid-2 items-center">
            <div className="space-y-8">
              <h2 className="text-balance">LET'S BRAND YOUR FUTURE</h2>
              <p className="text-lg">
                Great brands are more than famous names, they're Ideas Worth
                Rallying Around®.
              </p>
              <p>
                We partner with visionary leaders to build brands that inspire
                action, create connection, and drive meaningful change. Our
                approach combines strategic thinking with creative excellence to
                deliver results that matter.
              </p>
              <div className="space-y-4">
                <a
                  href="#"
                  className="block text-black font-semibold hover:opacity-70 transition-opacity"
                >
                  Explore our method →
                </a>
                <a
                  href="#"
                  className="block text-black font-semibold hover:opacity-70 transition-opacity"
                >
                  See our case studies →
                </a>
                <a
                  href="#"
                  className="block text-black font-semibold hover:opacity-70 transition-opacity"
                >
                  Understand our methodology →
                </a>
              </div>
            </div>
            <div className="bg-gray-100 h-96 rounded-lg flex items-center justify-center">
              <span className="text-gray-500 text-lg">
                Visual Content Placeholder
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Client Logos Section */}
      <section className="section-sm bg-gray-50">
        <div className="container">
          <div className="text-center mb-16">
            <h3 className="text-2xl font-bold mb-4">
              Trusted by Leading Organizations
            </h3>
          </div>
          <div className="grid-4 items-center">
            {[
              { name: "NBA", description: "Nigerian Bar Association" },
              {
                name: "COREN",
                description: "Council for Regulation of Engineering",
              },
              { name: "Rivers State", description: "Rivers State Government" },
              {
                name: "Corporate Nigeria",
                description: "Leading Corporations",
              },
            ].map((client, index) => (
              <div key={index} className="text-center group">
                <div className="bg-white p-8 rounded-lg shadow-sm hover:shadow-md transition-shadow">
                  <div className="text-3xl font-bold text-gray-800 mb-2">
                    {client.name}
                  </div>
                  <p className="text-sm text-gray-600">{client.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Selected Work Section */}
      <section className="section bg-white">
        <div className="container">
          <div className="flex justify-between items-end mb-16">
            <h2 className="text-balance">SELECTED WORK</h2>
            <a
              href="#"
              className="text-black hover:opacity-70 transition-opacity"
            >
              See all of our work →
            </a>
          </div>
          <div className="grid-2 gap-8">
            {[
              {
                title: "Unlock Insights",
                category: "Conference Management",
                image: "bg-gray-200",
              },
              {
                title: "Digital Transformation",
                category: "Technology Events",
                image: "bg-blue-100",
              },
              {
                title: "Where Digital Meets Personal",
                category: "Brand Experience",
                image: "bg-green-100",
              },
              {
                title: "DevOps: A New Perspective",
                category: "Tech Conferences",
                image: "bg-purple-100",
              },
            ].map((project, index) => (
              <div
                key={index}
                className={`${project.image} h-80 rounded-lg p-8 flex flex-col justify-between group hover-lift`}
              >
                <div className="text-right">
                  <span className="text-sm text-gray-600">Original</span>
                </div>
                <div>
                  <h3 className="text-2xl font-bold mb-2">{project.title}</h3>
                  <p className="text-gray-600">{project.category}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Press Insights Section */}
      <section className="section bg-gray-50">
        <div className="container">
          <div className="flex justify-between items-end mb-16">
            <h2 className="text-balance">PRESS INSIGHTS</h2>
            <a
              href="#"
              className="text-black hover:opacity-70 transition-opacity"
            >
              Read the latest →
            </a>
          </div>
          <div className="grid-3 gap-8">
            {[
              {
                title: "Excellence in Event Management",
                publication: "Event Management Today",
                date: "2024",
              },
              {
                title: "Innovation in Corporate Events",
                publication: "Business Events Nigeria",
                date: "2024",
              },
              {
                title: "The Future of Event Technology",
                publication: "Tech Events Weekly",
                date: "2024",
              },
            ].map((article, index) => (
              <div key={index} className="bg-white p-8 rounded-lg hover-lift">
                <h3 className="text-xl font-bold mb-4">{article.title}</h3>
                <p className="text-gray-600 mb-2">{article.publication}</p>
                <p className="text-sm text-gray-500">{article.date}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Clients Section */}
      <section className="section bg-white">
        <div className="container">
          <div className="flex justify-between items-end mb-16">
            <h2 className="text-balance">FEATURED CLIENTS</h2>
            <a
              href="#"
              className="text-black hover:opacity-70 transition-opacity"
            >
              See all clients →
            </a>
          </div>
          <div className="grid-4 gap-8">
            {[
              "Nigerian Bar Association",
              "Council for Regulation of Engineering",
              "Rivers State Government",
              "Leading Corporations",
              "Financial Institutions",
              "Educational Organizations",
              "Healthcare Providers",
              "Technology Companies",
            ].map((client, index) => (
              <div key={index} className="text-center group">
                <div className="bg-gray-50 p-6 rounded-lg hover:bg-gray-100 transition-colors">
                  <h3 className="font-semibold text-gray-800">{client}</h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section bg-black text-white">
        <div className="container text-center">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-balance mb-8">
              Ready to Transform Your Event?
            </h2>
            <p className="text-xl mb-12 text-gray-300">
              Let's discuss how we can bring your vision to life with our
              innovative approach to event management.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="btn bg-white text-black hover:bg-gray-100">
                Get Started
              </button>
              <button className="btn btn-outline border-white text-white hover:bg-white hover:text-black">
                Learn More
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-16 px-6 bg-black text-white">
        <div className="container">
          <div className="grid-2">
            <div>
              <div className="text-2xl font-bold mb-4">SQL Events Nigeria</div>
              <p className="text-gray-400 mb-6">
                Passion. Innovation. Technology in Events Management.
              </p>
              <div className="flex space-x-6 text-gray-400">
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
            </div>
            <div className="text-right">
              <p className="text-gray-400 mb-2">Lagos, Nigeria</p>
              <p className="text-gray-400 mb-2">+234 XXX XXX XXXX</p>
              <p className="text-gray-400">hello@sqlevents.ng</p>
            </div>
          </div>
          <div className="mt-12 pt-8 border-t border-gray-800 text-center text-gray-500">
            <p>&copy; 2024 SQL Events Nigeria. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
