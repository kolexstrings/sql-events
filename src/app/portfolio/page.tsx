import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import {
  Calendar,
  MapPin,
  Users,
  Star,
  Award,
  TrendingUp,
  Globe,
  Building2,
  GraduationCap,
  Heart,
  Rocket,
  Lightbulb,
  Briefcase,
  Users as UsersIcon,
} from "lucide-react";

export default function Portfolio() {
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
              Our Portfolio
            </h1>
            <p className="text-xl md:text-2xl lg:text-3xl text-white/95 max-w-4xl mx-auto leading-relaxed">
              Showcasing successful events that have shaped Nigeria&apos;s
              corporate landscape
            </p>
          </div>
        </div>
      </section>

      {/* Featured Events */}
      <section className="py-24 bg-background relative overflow-hidden">
        <div className="container--wide">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">
              Featured Events
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Highlighting some of our most prestigious and successful events
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 animate-fade-in-up">
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
                icon: <Award className="w-16 h-16" />,
                color: "from-primary to-secondary",
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
                icon: <GraduationCap className="w-16 h-16" />,
                color: "from-secondary to-accent",
              },
            ].map((event, index) => (
              <div
                key={index}
                className="bg-card rounded-3xl p-8 hover:shadow-lg transition-all duration-300 border border-border/20 group hover:scale-105"
              >
                <div className="flex items-center justify-between mb-6">
                  <div
                    className={`w-24 h-24 bg-gradient-to-br ${event.color} rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}
                  >
                    <div className="text-white">{event.icon}</div>
                  </div>
                  <div className="text-right">
                    <div className="text-2xl font-bold text-primary">
                      {event.year}
                    </div>
                    <div className="text-muted-foreground">{event.city}</div>
                  </div>
                </div>
                <h3 className="text-2xl font-bold text-foreground mb-4">
                  {event.title}
                </h3>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  {event.description}
                </p>
                <div className="grid grid-cols-2 gap-3">
                  {event.highlights.map((highlight, highlightIndex) => (
                    <div
                      key={highlightIndex}
                      className="bg-background px-3 py-2 rounded-full text-sm text-foreground text-center border border-border/20"
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
      <section className="py-24 bg-card relative overflow-hidden">
        <div className="container--wide">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">
              Past Events
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              A comprehensive showcase of events we&apos;ve successfully managed
              across various sectors
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 animate-fade-in-up">
            {[
              {
                title: "COREN Engineering Assembly",
                year: "2024",
                city: "Abuja",
                category: "Engineering",
                description:
                  "Annual assembly of the Council for Regulation of Engineering in Nigeria",
                icon: <Building2 className="w-12 h-12" />,
                color: "from-blue-500 to-cyan-500",
              },
              {
                title: "Tech Innovation Summit",
                year: "2024",
                city: "Lagos",
                category: "Technology",
                description:
                  "Leading technology conference showcasing innovation in Nigeria",
                icon: <Rocket className="w-12 h-12" />,
                color: "from-purple-500 to-pink-500",
              },
              {
                title: "Healthcare Conference",
                year: "2023",
                city: "Kano",
                category: "Healthcare",
                description:
                  "National healthcare professionals conference and exhibition",
                icon: <Heart className="w-12 h-12" />,
                color: "from-red-500 to-pink-500",
              },
              {
                title: "Banking & Finance Forum",
                year: "2023",
                city: "Lagos",
                category: "Finance",
                description: "Annual banking and finance industry forum",
                icon: <TrendingUp className="w-12 h-12" />,
                color: "from-green-500 to-blue-500",
              },
              {
                title: "Education Technology Expo",
                year: "2023",
                city: "Port Harcourt",
                category: "Education",
                description:
                  "Showcasing latest educational technology solutions",
                icon: <Lightbulb className="w-12 h-12" />,
                color: "from-yellow-500 to-orange-500",
              },
              {
                title: "Oil & Gas Conference",
                year: "2023",
                city: "Warri",
                category: "Energy",
                description: "Annual oil and gas industry conference",
                icon: <Globe className="w-12 h-12" />,
                color: "from-indigo-500 to-purple-500",
              },
              {
                title: "Legal Tech Conference",
                year: "2023",
                city: "Lagos",
                category: "Legal",
                description: "Technology in legal practice conference",
                icon: <Award className="w-12 h-12" />,
                color: "from-orange-500 to-red-500",
              },
              {
                title: "Startup Summit",
                year: "2023",
                city: "Abuja",
                category: "Entrepreneurship",
                description: "National startup and entrepreneurship summit",
                icon: <Rocket className="w-12 h-12" />,
                color: "from-pink-500 to-purple-500",
              },
              {
                title: "Women in Business Forum",
                year: "2023",
                city: "Lagos",
                category: "Business",
                description: "Empowering women in business and leadership",
                icon: <Briefcase className="w-12 h-12" />,
                color: "from-cyan-500 to-blue-500",
              },
            ].map((event, index) => (
              <div
                key={index}
                className="bg-background rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 border border-border/20 group hover:scale-105"
              >
                <div
                  className={`h-48 bg-gradient-to-br ${event.color} flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}
                >
                  <div className="text-white">{event.icon}</div>
                </div>
                <div className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <span className="inline-block px-3 py-1 bg-primary/10 text-primary text-sm rounded-full border border-primary/20">
                      {event.category}
                    </span>
                    <span className="text-muted-foreground text-sm">
                      {event.year}
                    </span>
                  </div>
                  <h3 className="text-xl font-semibold text-foreground mb-2">
                    {event.title}
                  </h3>
                  <p className="text-muted-foreground text-sm mb-3">
                    {event.city}
                  </p>
                  <p className="text-muted-foreground text-sm">
                    {event.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Event Statistics */}
      <section className="py-24 bg-background relative overflow-hidden">
        <div className="container--wide">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">
              Our Impact in Numbers
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Quantifying our success in the Nigerian events industry
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8 animate-fade-in-up">
            {[
              {
                number: "500+",
                label: "Events Managed",
                icon: <Award className="w-8 h-8" />,
                color: "from-primary to-secondary",
              },
              {
                number: "50+",
                label: "Cities Covered",
                icon: <Globe className="w-8 h-8" />,
                color: "from-secondary to-accent",
              },
              {
                number: "100,000+",
                label: "Attendees Served",
                icon: <UsersIcon className="w-8 h-8" />,
                color: "from-accent to-primary",
              },
              {
                number: "98%",
                label: "Client Satisfaction",
                icon: <Star className="w-8 h-8" />,
                color: "from-primary to-accent",
              },
            ].map((stat, index) => (
              <div key={index} className="text-center group">
                <div
                  className={`bg-gradient-to-br ${stat.color} rounded-3xl p-8 mb-6 group-hover:scale-110 transition-transform duration-300`}
                >
                  <div className="text-white">{stat.icon}</div>
                </div>
                <div className="text-4xl font-bold text-primary mb-2">
                  {stat.number}
                </div>
                <div className="text-muted-foreground font-medium">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Client Testimonials */}
      <section className="py-24 bg-card relative overflow-hidden">
        <div className="container--wide">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">
              What Our Clients Say
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Testimonials from organizations we&apos;ve had the privilege to
              serve
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 animate-fade-in-up">
            {[
              {
                quote:
                  "SQL Events delivered an exceptional NBA conference that exceeded all expectations. Their technology-driven approach made the entire process seamless.",
                author: "Nigerian Bar Association",
                role: "Annual Conference 2024",
                icon: <Award className="w-12 h-12" />,
                color: "from-primary to-secondary",
              },
              {
                quote:
                  "The Rivers State Education Summit was flawlessly executed with cutting-edge technology and professional coordination throughout.",
                author: "Rivers State Government",
                role: "Education Summit 2024",
                icon: <GraduationCap className="w-12 h-12" />,
                color: "from-secondary to-accent",
              },
              {
                quote:
                  "Professional, efficient, and technology-driven approach to event management. COREN Engineering Assembly was a huge success.",
                author: "COREN",
                role: "Engineering Assembly 2024",
                icon: <Building2 className="w-12 h-12" />,
                color: "from-accent to-primary",
              },
            ].map((testimonial, index) => (
              <div
                key={index}
                className="bg-background p-8 rounded-2xl shadow-sm hover:shadow-lg transition-all duration-300 border border-border/20 group hover:scale-105"
              >
                <div
                  className={`w-16 h-16 bg-gradient-to-br ${testimonial.color} rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300`}
                >
                  <div className="text-white">{testimonial.icon}</div>
                </div>
                <p className="text-muted-foreground mb-6 italic text-center">
                  &ldquo;{testimonial.quote}&rdquo;
                </p>
                <div className="text-center">
                  <p className="font-semibold text-foreground">
                    {testimonial.author}
                  </p>
                  <p className="text-muted-foreground text-sm">
                    {testimonial.role}
                  </p>
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
              Ready to Join Our Success Stories?
            </h2>
            <p className="text-xl mb-8 text-white/90 max-w-3xl mx-auto">
              Let&apos;s create the next remarkable event together and add it to
              our growing portfolio.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <button className="bg-white text-primary px-10 py-4 rounded-full font-semibold text-lg hover:bg-gray-100 transition-colors duration-300 hover:scale-105">
                Start Planning
              </button>
              <button className="border-2 border-white text-white px-10 py-4 rounded-full font-semibold text-lg hover:bg-white hover:text-primary transition-colors duration-300 hover:scale-105">
                View More Events
              </button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
