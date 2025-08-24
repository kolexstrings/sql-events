import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import { Users, Target, Award, Clock, MapPin, Phone, Mail } from "lucide-react";

export default function About() {
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
              About SQL Events Nigeria
            </h1>
            <p className="text-xl md:text-2xl lg:text-3xl opacity-95 max-w-4xl mx-auto leading-relaxed">
              Leading the future of event management in Nigeria through passion,
              innovation, and technology
            </p>
          </div>
        </div>
      </section>

      {/* Vision & Mission Section */}
      <section className="py-24 bg-background relative overflow-hidden">
        <div className="container--wide">
          <div className="grid lg:grid-cols-2 gap-16 items-center animate-fade-in-up">
            <div>
              <div className="flex items-center mb-8">
                <div className="text-2xl text-muted-foreground font-bold mr-4">
                  {"{"}
                </div>
                <h2 className="text-lg font-medium text-muted-foreground">
                  Vision & Mission
                </h2>
                <div className="text-2xl text-muted-foreground font-bold ml-4">
                  {"}"}
                </div>
              </div>

              <div className="space-y-8">
                <div className="group">
                  <div className="flex items-center mb-4">
                    <Target className="w-8 h-8 text-primary mr-3" />
                    <h3 className="text-2xl font-semibold text-foreground">
                      Vision
                    </h3>
                  </div>
                  <p className="text-lg text-muted-foreground leading-relaxed">
                    To be the leading technology-driven event management company
                    in Nigeria, setting industry standards and delivering
                    exceptional experiences that exceed expectations.
                  </p>
                </div>
                <div className="group">
                  <div className="flex items-center mb-4">
                    <Award className="w-8 h-8 text-secondary mr-3" />
                    <h3 className="text-2xl font-semibold text-foreground">
                      Mission
                    </h3>
                  </div>
                  <p className="text-lg text-muted-foreground leading-relaxed">
                    To transform the event management landscape in Nigeria by
                    leveraging cutting-edge technology, innovative solutions,
                    and passionate expertise to create memorable, impactful
                    events for our clients.
                  </p>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="bg-gradient-to-br from-primary/10 to-secondary/10 rounded-3xl p-12 h-96 flex items-center justify-center border border-border/20 backdrop-blur-sm">
                <div className="text-center text-muted-foreground">
                  <div className="w-24 h-24 bg-gradient-to-br from-primary to-secondary rounded-full flex items-center justify-center mx-auto mb-6">
                    <Target className="w-12 h-12 text-white" />
                  </div>
                  <p className="text-xl font-semibold text-foreground">
                    Vision & Mission
                  </p>
                  <p className="text-sm text-muted-foreground">
                    Driving innovation in events
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Company Overview Section */}
      <section className="py-24 bg-card relative overflow-hidden">
        <div className="container--wide">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">
              Company Overview
            </h2>
            <p className="text-xl text-muted-foreground max-w-4xl mx-auto">
              SQL Events Nigeria is a premier corporate events and conference
              management company that has been at the forefront of the Nigerian
              events industry.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 animate-fade-in-up">
            <div className="space-y-6">
              <h3 className="text-2xl font-semibold text-foreground">
                Who We Are
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                We are a team of passionate professionals dedicated to
                revolutionizing event management in Nigeria through innovative
                technology solutions and exceptional service delivery.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Our expertise spans across various sectors including legal,
                engineering, government, and corporate organizations, making us
                the preferred choice for high-profile events.
              </p>
            </div>
            <div className="space-y-6">
              <h3 className="text-2xl font-semibold text-foreground">
                Our Expertise
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                With years of experience in managing complex events, we have
                developed a deep understanding of the Nigerian business
                landscape and cultural nuances.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Our technology-driven approach ensures seamless event execution,
                from initial planning to final delivery, with real-time
                monitoring and management capabilities.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Approach Section */}
      <section className="py-24 bg-background relative overflow-hidden">
        <div className="container--wide">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">
              Our Approach
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              A systematic methodology that ensures every event is executed
              flawlessly
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 animate-fade-in-up">
            {[
              {
                step: "01",
                title: "Conceptualisation",
                description:
                  "We work closely with clients to understand their vision, objectives, and requirements, developing comprehensive event concepts that align with their goals.",
                icon: "💡",
                color: "from-primary to-secondary",
              },
              {
                step: "02",
                title: "Planning",
                description:
                  "Detailed planning phase where we create comprehensive event strategies, timelines, and resource allocation plans using our advanced technology platforms.",
                icon: "📋",
                color: "from-secondary to-accent",
              },
              {
                step: "03",
                title: "Delivery",
                description:
                  "Seamless execution of the event with real-time monitoring, professional coordination, and attention to every detail to ensure success.",
                icon: "✅",
                color: "from-accent to-primary",
              },
            ].map((phase, index) => (
              <div
                key={index}
                className="text-center group hover:scale-105 transition-transform duration-300"
              >
                <div
                  className={`bg-gradient-to-br ${phase.color} rounded-3xl p-8 mb-6 relative group-hover:scale-105 transition-transform duration-300`}
                >
                  <div className="absolute -top-4 -right-4 bg-foreground text-background text-sm font-bold px-3 py-1 rounded-full">
                    {phase.step}
                  </div>
                  <div className="text-5xl mb-4">{phase.icon}</div>
                </div>
                <h3 className="text-2xl font-semibold text-foreground mb-4">
                  {phase.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {phase.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Values Section */}
      <section className="py-24 bg-card relative overflow-hidden">
        <div className="container--wide">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">
              Our Core Values
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              The principles that guide everything we do
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 animate-fade-in-up">
            {[
              {
                title: "Passion",
                description:
                  "We approach every event with enthusiasm and dedication, treating each project as if it were our own.",
                icon: "🔥",
                color: "from-red-500 to-orange-500",
              },
              {
                title: "Innovation",
                description:
                  "Constantly exploring new technologies and creative solutions to deliver cutting-edge event experiences.",
                icon: "🚀",
                color: "from-blue-500 to-purple-500",
              },
              {
                title: "Technology",
                description:
                  "Leveraging the latest digital tools and platforms to ensure efficient, seamless event management.",
                icon: "💻",
                color: "from-green-500 to-blue-500",
              },
            ].map((value, index) => (
              <div
                key={index}
                className="bg-background p-8 rounded-2xl shadow-sm hover:shadow-lg transition-all duration-300 text-center group hover:scale-105"
              >
                <div
                  className={`w-20 h-20 bg-gradient-to-br ${value.color} rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300`}
                >
                  <div className="text-3xl">{value.icon}</div>
                </div>
                <h3 className="text-2xl font-semibold text-foreground mb-4">
                  {value.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {value.description}
                </p>
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
              Ready to Work With Us?
            </h2>
            <p className="text-xl mb-8 text-white/90 max-w-3xl mx-auto">
              Let&apos;s discuss how we can bring your event vision to life with
              our innovative approach.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <button className="bg-white text-primary px-10 py-4 rounded-full font-semibold text-lg hover:bg-gray-100 transition-colors duration-300 hover:scale-105">
                Get Started
              </button>
              <button className="border-2 border-white text-white px-10 py-4 rounded-full font-semibold text-lg hover:bg-white hover:text-primary transition-colors duration-300 hover:scale-105">
                Contact Us
              </button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
