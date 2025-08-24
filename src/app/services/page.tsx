import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import {
  Users,
  Presentation,
  FileText,
  Shield,
  Settings,
  Calendar,
  MapPin,
  Users as UsersIcon,
  Building2,
  GraduationCap,
  Rocket,
  Handshake,
  Heart,
  Truck,
  UserCheck,
  Megaphone,
  Theater,
  Building,
  Lightbulb,
} from "lucide-react";

export default function Services() {
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
                Our Services
              </h1>
            </div>
            <div
              className="animate-fade-in-up"
              style={{ animationDelay: "0.4s" }}
            >
              <p className="text-xl md:text-2xl lg:text-3xl opacity-95 max-w-4xl mx-auto leading-relaxed">
                Comprehensive event management solutions powered by cutting-edge
                technology
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Corporate Events & Conference Management */}
      <section className="py-24 bg-background relative overflow-hidden">
        <div className="container--wide">
          <div className="text-center mb-16">
            <div
              className="animate-fade-in-up"
              style={{ animationDelay: "0.2s" }}
            >
              <div className="flex items-center justify-center mb-8">
                <div className="text-2xl text-muted-foreground font-bold mr-4">
                  {"{"}
                </div>
                <h2 className="text-lg font-medium text-muted-foreground">
                  Corporate Events & Conference Management
                </h2>
                <div className="text-2xl text-muted-foreground font-bold ml-4">
                  {"}"}
                </div>
              </div>
            </div>
            <div
              className="animate-fade-in-up"
              style={{ animationDelay: "0.4s" }}
            >
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Professional event management for corporate Nigeria with
                technology-driven solutions
              </p>
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Conferences",
                description:
                  "Professional conference management with advanced registration systems, speaker coordination, and seamless execution.",
                icon: <Users className="w-8 h-8" />,
                features: [
                  "Registration Management",
                  "Speaker Coordination",
                  "Session Planning",
                  "Technical Support",
                ],
                color: "from-primary to-secondary",
              },
              {
                title: "AGMs",
                description:
                  "Annual General Meetings with secure voting systems, documentation, and professional facilitation.",
                icon: <Building2 className="w-8 h-8" />,
                features: [
                  "Secure Voting",
                  "Documentation",
                  "Professional Facilitation",
                  "Compliance Support",
                ],
                color: "from-secondary to-accent",
              },
              {
                title: "Training & Workshops",
                description:
                  "Corporate training events with interactive learning platforms and progress tracking.",
                icon: <GraduationCap className="w-8 h-8" />,
                features: [
                  "Interactive Learning",
                  "Progress Tracking",
                  "Resource Management",
                  "Assessment Tools",
                ],
                color: "from-accent to-primary",
              },
              {
                title: "Brand Launches",
                description:
                  "Product and brand launch events that create buzz and generate media attention.",
                icon: <Rocket className="w-8 h-8" />,
                features: [
                  "Media Coordination",
                  "Brand Integration",
                  "Guest Management",
                  "Launch Strategy",
                ],
                color: "from-primary to-accent",
              },
              {
                title: "Team Building",
                description:
                  "Corporate team building events that strengthen bonds and boost productivity.",
                icon: <Handshake className="w-8 h-8" />,
                features: [
                  "Activity Planning",
                  "Team Dynamics",
                  "Progress Monitoring",
                  "Feedback Systems",
                ],
                color: "from-secondary to-primary",
              },
              {
                title: "Fundraisers",
                description:
                  "Charity and fundraising events with donation tracking and donor management.",
                icon: <Heart className="w-8 h-8" />,
                features: [
                  "Donation Tracking",
                  "Donor Management",
                  "Event Planning",
                  "Impact Reporting",
                ],
                color: "from-accent to-secondary",
              },
            ].map((service, index) => (
              <div
                key={index}
                className="bg-background border border-border rounded-2xl p-8 shadow-sm hover:shadow-lg transition-all duration-300 group hover:scale-105 animate-fade-in-up"
                style={{ animationDelay: `${0.6 + index * 0.2}s` }}
              >
                <div
                  className={`w-16 h-16 bg-gradient-to-br ${service.color} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}
                >
                  <div className="text-white">{service.icon}</div>
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-3">
                  {service.title}
                </h3>
                <p className="text-lg text-muted-foreground mb-4 leading-relaxed">
                  {service.description}
                </p>
                <ul className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <li
                      key={featureIndex}
                      className="flex items-center text-sm text-muted-foreground"
                    >
                      <span className="w-2 h-2 bg-primary rounded-full mr-3"></span>
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
      <section className="py-24 bg-card relative overflow-hidden">
        <div className="container--wide">
          <div className="grid lg:grid-cols-2 gap-16 items-center animate-fade-in-up">
            <div>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">
                Exhibition Management
              </h2>
              <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
                Comprehensive exhibition management solutions with online
                booking systems, stand management, and attendee tracking.
              </p>
              <div className="space-y-6">
                <div className="flex items-start group">
                  <div className="bg-gradient-to-br from-primary to-secondary rounded-full p-3 mr-4 group-hover:scale-110 transition-transform duration-300">
                    <Calendar className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-2">
                      Online Exhibitor Booking
                    </h3>
                    <p className="text-base text-muted-foreground">
                      Streamlined online registration and booking system for
                      exhibitors
                    </p>
                  </div>
                </div>
                <div className="flex items-start group">
                  <div className="bg-gradient-to-br from-secondary to-accent rounded-full p-3 mr-4 group-hover:scale-110 transition-transform duration-300">
                    <Shield className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-2">
                      Payment Management
                    </h3>
                    <p className="text-base text-muted-foreground">
                      Secure payment processing and financial tracking
                    </p>
                  </div>
                </div>
                <div className="flex items-start group">
                  <div className="bg-gradient-to-br from-accent to-primary rounded-full p-3 mr-4 group-hover:scale-110 transition-transform duration-300">
                    <Building className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-2">
                      Stand Management
                    </h3>
                    <p className="text-base text-muted-foreground">
                      Complete stand design, construction, and management
                      services
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="bg-gradient-to-br from-primary/10 to-secondary/10 rounded-3xl p-12 h-96 flex items-center justify-center border border-border/20 backdrop-blur-sm">
                <div className="text-center text-muted-foreground">
                  <div className="w-24 h-24 bg-gradient-to-br from-primary to-secondary rounded-full flex items-center justify-center mx-auto mb-6">
                    <Presentation className="w-12 h-12 text-white" />
                  </div>
                  <p className="text-xl font-semibold text-foreground">
                    Exhibition Solutions
                  </p>
                  <p className="text-sm text-muted-foreground">
                    Technology-driven management
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Abstract/Paper Management */}
      <section className="py-24 bg-background relative overflow-hidden">
        <div className="container--wide">
          <div className="grid lg:grid-cols-2 gap-16 items-center animate-fade-in-up">
            <div className="order-2 lg:order-1 relative">
              <div className="bg-gradient-to-br from-secondary/10 to-accent/10 rounded-3xl p-12 h-96 flex items-center justify-center border border-border/20 backdrop-blur-sm">
                <div className="text-center text-muted-foreground">
                  <div className="w-24 h-24 bg-gradient-to-br from-secondary to-accent rounded-full flex items-center justify-center mx-auto mb-6">
                    <FileText className="w-12 h-12 text-white" />
                  </div>
                  <p className="text-xl font-semibold text-foreground">
                    Abstract Management
                  </p>
                  <p className="text-sm text-muted-foreground">
                    Streamlined submission process
                  </p>
                </div>
              </div>
            </div>
            <div className="order-1 lg:order-2">
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">
                Abstract/Paper Management
              </h2>
              <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
                Complete management of academic submissions with online
                platforms for submission, reviewing, and publishing.
              </p>
              <div className="space-y-6">
                <div className="flex items-start group">
                  <div className="bg-gradient-to-br from-accent to-primary rounded-full p-3 mr-4 group-hover:scale-110 transition-transform duration-300">
                    <FileText className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-2">
                      Online Submission
                    </h3>
                    <p className="text-muted-foreground">
                      User-friendly online submission platform for authors
                    </p>
                  </div>
                </div>
                <div className="flex items-start group">
                  <div className="bg-gradient-to-br from-primary to-secondary rounded-full p-3 mr-4 group-hover:scale-110 transition-transform duration-300">
                    <Shield className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-2">
                      Review Process
                    </h3>
                    <p className="text-muted-foreground">
                      Streamlined peer review and evaluation system
                    </p>
                  </div>
                </div>
                <div className="flex items-start group">
                  <div className="bg-gradient-to-br from-secondary to-accent rounded-full p-3 mr-4 group-hover:scale-110 transition-transform duration-300">
                    <UsersIcon className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-2">
                      Publishing
                    </h3>
                    <p className="text-muted-foreground">
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
      <section className="py-24 bg-card relative overflow-hidden">
        <div className="container--wide">
          <div className="grid lg:grid-cols-2 gap-16 items-center animate-fade-in-up">
            <div>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">
                Access Control Management
              </h2>
              <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
                Advanced access control solutions using RFID technology, barcode
                systems, and comprehensive attendee data management.
              </p>
              <div className="space-y-6">
                <div className="flex items-start group">
                  <div className="bg-gradient-to-br from-primary to-accent rounded-full p-3 mr-4 group-hover:scale-110 transition-transform duration-300">
                    <Shield className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-2">
                      RFID Technology
                    </h3>
                    <p className="text-muted-foreground">
                      Contactless access control for seamless entry
                    </p>
                  </div>
                </div>
                <div className="flex items-start group">
                  <div className="bg-gradient-to-br from-accent to-secondary rounded-full p-3 mr-4 group-hover:scale-110 transition-transform duration-300">
                    <Settings className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-2">
                      Barcode Systems
                    </h3>
                    <p className="text-muted-foreground">
                      Efficient scanning and verification processes
                    </p>
                  </div>
                </div>
                <div className="flex items-start group">
                  <div className="bg-gradient-to-br from-secondary to-primary rounded-full p-3 mr-4 group-hover:scale-110 transition-transform duration-300">
                    <UsersIcon className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-2">
                      Attendee Data
                    </h3>
                    <p className="text-muted-foreground">
                      Comprehensive tracking and analytics
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="bg-gradient-to-br from-accent/10 to-primary/10 rounded-3xl p-12 h-96 flex items-center justify-center border border-border/20 backdrop-blur-sm">
                <div className="text-center text-muted-foreground">
                  <div className="w-24 h-24 bg-gradient-to-br from-accent to-primary rounded-full flex items-center justify-center mx-auto mb-6">
                    <Shield className="w-12 h-12 text-white" />
                  </div>
                  <p className="text-xl font-semibold text-foreground">
                    Access Control
                  </p>
                  <p className="text-sm text-muted-foreground">
                    Secure & efficient entry
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Other Services */}
      <section className="py-24 bg-background relative overflow-hidden">
        <div className="container--wide">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">
              Additional Services
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Comprehensive support services to ensure your event&apos;s success
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 animate-fade-in-up">
            {[
              {
                title: "Logistics",
                description:
                  "Complete logistics management including transportation, accommodation, and resource coordination.",
                icon: <Truck className="w-8 h-8" />,
                color: "from-blue-500 to-cyan-500",
              },
              {
                title: "Hostessing/Ushering",
                description:
                  "Professional hostessing and ushering services for seamless event flow.",
                icon: <UserCheck className="w-8 h-8" />,
                color: "from-purple-500 to-pink-500",
              },
              {
                title: "Sponsorship & Marketing",
                description:
                  "Strategic sponsorship acquisition and comprehensive marketing support.",
                icon: <Megaphone className="w-8 h-8" />,
                color: "from-orange-500 to-red-500",
              },
              {
                title: "Entertainment",
                description:
                  "Curated entertainment options to enhance your event experience.",
                icon: <Theater className="w-8 h-8" />,
                color: "from-pink-500 to-purple-500",
              },
              {
                title: "Venue Management",
                description:
                  "Venue selection, setup, and facility management services.",
                icon: <Building className="w-8 h-8" />,
                color: "from-green-500 to-blue-500",
              },
              {
                title: "Consultancy",
                description:
                  "Expert consultation for event strategy and planning optimization.",
                icon: <Lightbulb className="w-8 h-8" />,
                color: "from-yellow-500 to-orange-500",
              },
            ].map((service, index) => (
              <div
                key={index}
                className="bg-card p-8 rounded-2xl hover:shadow-lg transition-all duration-300 text-center group hover:scale-105"
              >
                <div
                  className={`w-16 h-16 bg-gradient-to-br ${service.color} rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300`}
                >
                  <div className="text-white">{service.icon}</div>
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-3">
                  {service.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {service.description}
                </p>
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
                Let&apos;s discuss how our services can transform your next
                event.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <div
                className="animate-fade-in-up"
                style={{ animationDelay: "0.6s" }}
              >
                <button className="bg-white text-black px-10 py-4 rounded-full font-semibold text-lg hover:bg-gray-100 transition-colors duration-300 hover:scale-105">
                  Request Quote
                </button>
              </div>
              <div
                className="animate-fade-in-up"
                style={{ animationDelay: "0.8s" }}
              >
                <button className="border-2 border-white text-white px-10 py-4 rounded-full font-semibold text-lg hover:bg-white hover:text-black transition-colors duration-300 hover:scale-105">
                  Schedule Consultation
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
