import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import {
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
      <section className="relative pt-12 sm:pt-16 md:pt-20 lg:pt-24 xl:pt-28 pb-6 sm:pb-8 md:pb-12 lg:pb-16 xl:pb-20 px-3 sm:px-4 md:px-6 bg-white dark:bg-slate-950 overflow-hidden">
        {/* Modern geometric background pattern */}
        <div className="absolute inset-0 bg-gradient-to-br from-gray-50/80 to-white/80 dark:from-slate-950/50 dark:to-slate-900/50"></div>
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_30%_20%,rgba(74,222,128,0.08),transparent_50%)]"></div>
          <div className="absolute top-0 right-0 w-full h-full bg-[radial-gradient(circle_at_70%_80%,rgba(59,130,246,0.08),transparent_50%)]"></div>
        </div>
        {/* Animated Background Elements */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/4 left-1/4 w-48 sm:w-64 md:w-80 lg:w-96 h-48 sm:h-64 md:h-80 lg:h-96 bg-white/10 rounded-full blur-2xl sm:blur-3xl animate-pulse"></div>
          <div
            className="absolute bottom-1/4 right-1/4 w-40 sm:w-56 md:w-64 lg:w-80 h-40 sm:h-56 md:h-64 lg:h-80 bg-white/10 rounded-full blur-2xl sm:blur-3xl animate-pulse"
            style={{ animationDelay: "1s" }}
          ></div>
          <div
            className="absolute top-1/2 left-1/2 w-32 sm:w-48 md:w-56 lg:w-64 h-32 sm:h-48 md:h-56 lg:h-64 bg-white/5 rounded-full blur-xl sm:blur-2xl animate-pulse"
            style={{ animationDelay: "2s" }}
          ></div>
        </div>

        {/* Animated Geometric Shapes & Particles */}
        <div className="absolute inset-0 pointer-events-none">
          {/* Rotating Rings */}
          <div className="absolute top-1/2 -right-10 sm:-right-16 md:-right-20 w-20 sm:w-32 md:w-40 h-20 sm:h-32 md:h-40 border border-primary/20 rounded-full animate-spin-slow"></div>
          <div className="absolute top-1/3 -left-8 sm:-left-12 md:-left-16 w-16 sm:w-24 md:w-32 h-16 sm:h-24 md:h-32 border border-secondary/20 rounded-full animate-spin-slow-reverse"></div>
          <div className="absolute bottom-1/3 right-1/4 w-14 sm:w-20 md:w-28 h-14 sm:h-20 md:h-28 border border-accent/20 rounded-full animate-spin-slow"></div>
          <div className="absolute top-1/4 right-1/3 w-12 sm:w-16 md:w-24 h-12 sm:h-16 md:h-24 border border-primary/15 rounded-full animate-spin-slow-reverse"></div>
          <div className="absolute bottom-1/4 -left-6 sm:-left-8 md:-left-12 w-18 sm:w-24 md:w-36 h-18 sm:h-24 md:h-36 border border-secondary/15 rounded-full animate-spin-slow"></div>

          {/* Floating Squares */}
          <div className="absolute top-1/4 left-1/4 w-8 sm:w-12 md:w-16 h-8 sm:h-12 md:h-16 border border-primary/15 rotate-45 animate-float"></div>
          <div className="absolute top-2/3 right-1/3 w-6 sm:w-8 md:w-12 h-6 sm:h-8 md:h-12 border border-secondary/15 rotate-45 animate-float-delayed"></div>
          <div className="absolute bottom-1/4 left-1/2 w-10 sm:w-14 md:w-20 h-10 sm:h-14 md:h-20 border border-accent/15 rotate-45 animate-float-slow"></div>
          <div className="absolute top-1/2 left-1/3 w-7 sm:w-10 md:w-14 h-7 sm:h-10 md:h-14 border border-primary/20 rotate-45 animate-float-delayed"></div>
          <div className="absolute bottom-1/3 right-1/6 w-9 sm:w-12 md:w-18 h-9 sm:h-12 md:h-18 border border-accent/20 rotate-45 animate-float-slow"></div>

          {/* Triangles */}
          <div className="absolute top-1/6 right-1/4 w-0 h-0 border-l-[8px] sm:border-l-[10px] md:border-l-[12px] border-l-transparent border-r-[8px] sm:border-r-[10px] md:border-r-[12px] border-r-transparent border-b-[14px] sm:border-b-[16px] md:border-b-[20px] border-b-primary/20 animate-float-slow"></div>
          <div className="absolute bottom-1/6 left-1/6 w-0 h-0 border-l-[12px] sm:border-l-[14px] md:border-l-[16px] border-l-transparent border-r-[12px] sm:border-r-[14px] md:border-r-[16px] border-r-transparent border-b-[20px] sm:border-b-[24px] md:border-b-[28px] border-b-secondary/20 animate-float-delayed"></div>
          <div className="absolute top-3/4 right-1/6 w-0 h-0 border-l-[6px] sm:border-l-[8px] md:border-l-[10px] border-l-transparent border-r-[6px] sm:border-r-[8px] md:border-r-[10px] border-r-transparent border-b-[12px] sm:border-b-[14px] md:border-b-[18px] border-b-accent/20 animate-float"></div>

          {/* Hexagons */}
          <div className="absolute top-1/3 left-1/8 w-4 sm:w-6 md:w-8 h-4 sm:h-6 md:h-8 bg-primary/10 clip-hexagon animate-float-slow"></div>
          <div className="absolute bottom-1/3 right-1/8 w-3 sm:w-4 md:w-6 h-3 sm:h-4 md:h-6 bg-secondary/10 clip-hexagon animate-float-delayed"></div>

          {/* Animated Dots */}
          <div className="absolute top-1/3 left-1/6 w-1.5 sm:w-2 h-1.5 sm:h-2 bg-primary/40 rounded-full animate-bounce"></div>
          <div className="absolute top-2/3 right-1/4 w-1 sm:w-1.5 h-1 sm:h-1.5 bg-secondary/40 rounded-full animate-bounce-delayed"></div>
          <div className="absolute bottom-1/3 left-2/3 w-0.5 sm:w-1 h-0.5 sm:h-1 bg-accent/40 rounded-full animate-bounce-slow"></div>
          <div className="absolute top-1/6 right-1/6 w-1 sm:w-1.5 h-1 sm:h-1.5 bg-primary/30 rounded-full animate-bounce-delayed"></div>
          <div className="absolute bottom-1/6 right-1/3 w-2 sm:w-2.5 h-2 sm:h-2.5 bg-secondary/30 rounded-full animate-bounce-slow"></div>
          <div className="absolute top-1/2 left-1/8 w-0.5 sm:w-1 h-0.5 sm:h-1 bg-accent/50 rounded-full animate-bounce"></div>

          {/* Floating Lines */}
          <div className="absolute top-1/2 left-1/6 w-8 sm:w-12 md:w-16 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent animate-float-horizontal"></div>
          <div className="absolute top-1/3 right-1/6 w-10 sm:w-14 md:w-20 h-px bg-gradient-to-r from-transparent via-secondary/30 to-transparent animate-float-horizontal-delayed"></div>
          <div className="absolute bottom-1/3 left-1/3 w-6 sm:w-8 md:w-12 h-px bg-gradient-to-r from-transparent via-accent/30 to-transparent animate-float-horizontal-slow"></div>
          <div className="absolute top-1/4 left-1/2 w-7 sm:w-10 md:w-14 h-px bg-gradient-to-r from-transparent via-primary/25 to-transparent animate-float-horizontal"></div>
          <div className="absolute bottom-1/4 right-1/2 w-9 sm:w-12 md:w-18 h-px bg-gradient-to-r from-transparent via-secondary/25 to-transparent animate-float-horizontal-delayed"></div>

          {/* Diagonal Lines */}
          <div className="absolute top-1/4 right-1/4 w-10 sm:w-14 md:w-20 h-px bg-gradient-to-r from-transparent via-accent/20 to-transparent transform rotate-45 animate-float-horizontal-slow"></div>
          <div className="absolute bottom-1/4 left-1/4 w-8 sm:w-10 md:w-16 h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent transform -rotate-45 animate-float-horizontal"></div>

          {/* Pulsing Circles */}
          <div className="absolute top-1/2 left-1/4 w-2 sm:w-2.5 md:w-3 h-2 sm:h-2.5 md:h-3 bg-primary/30 rounded-full animate-pulse"></div>
          <div className="absolute top-1/4 right-1/4 w-1.5 sm:w-2 h-1.5 sm:h-2 bg-secondary/30 rounded-full animate-pulse-delayed"></div>
          <div className="absolute bottom-1/4 left-1/3 w-2 sm:w-2.5 h-2 sm:h-2.5 bg-accent/30 rounded-full animate-pulse-slow"></div>

          {/* Floating Arrows */}
          <div className="absolute top-1/3 right-1/3 w-3 sm:w-4 md:w-6 h-3 sm:h-4 md:h-6 text-primary/20 animate-float-slow">
            <svg fill="currentColor" viewBox="0 0 24 24">
              <path d="M7 17l9.2-9.2M17 17V7.8H7.8" />
            </svg>
          </div>
          <div className="absolute bottom-1/3 left-1/4 w-2.5 sm:w-3 md:w-5 h-2.5 sm:h-3 md:h-5 text-secondary/20 animate-float-delayed">
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
              <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold mb-3 sm:mb-4 md:mb-6">
                Our Portfolio
              </h1>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Events */}
      <section className="py-24 bg-background relative overflow-hidden">
        <div className="container--wide">
          <div className="text-center mb-16">
            <div
              className="animate-fade-in-up"
              style={{ animationDelay: "0.2s" }}
            >
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">
                Featured Events
              </h2>
            </div>
            <div
              className="animate-fade-in-up"
              style={{ animationDelay: "0.4s" }}
            >
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Highlighting some of our most prestigious and successful events
              </p>
            </div>
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
                className="bg-card rounded-3xl p-8 hover:shadow-lg transition-all duration-300 border border-border/20 group hover:scale-105 animate-fade-in-up"
                style={{ animationDelay: `${0.6 + index * 0.2}s` }}
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
                <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
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
                  <p className="text-base text-muted-foreground">
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
          <div className="text-center mb-16">
            <div
              className="animate-fade-in-up"
              style={{ animationDelay: "0.2s" }}
            >
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">
                What Our Clients Say
              </h2>
            </div>
            <div
              className="animate-fade-in-up"
              style={{ animationDelay: "0.4s" }}
            >
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Testimonials from organizations we&apos;ve had the privilege to
                serve
              </p>
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
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
                className="bg-background p-8 rounded-2xl shadow-sm hover:shadow-lg transition-all duration-300 border border-border/20 group hover:scale-105 animate-fade-in-up"
                style={{ animationDelay: `${0.6 + index * 0.2}s` }}
              >
                <div
                  className={`w-16 h-16 bg-gradient-to-br ${testimonial.color} rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300`}
                >
                  <div className="text-white">{testimonial.icon}</div>
                </div>
                <p className="text-lg text-muted-foreground mb-6 italic text-center">
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
                Ready to Join Our Success Stories?
              </h2>
            </div>
            <div
              className="animate-fade-in-up"
              style={{ animationDelay: "0.4s" }}
            >
              <p className="text-xl mb-8 text-white/90 max-w-3xl mx-auto">
                Let&apos;s create the next remarkable event together and add it
                to our growing portfolio.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <div
                className="animate-fade-in-up"
                style={{ animationDelay: "0.6s" }}
              >
                <button className="bg-white text-black px-10 py-4 rounded-full font-semibold text-lg hover:bg-gray-100 transition-colors duration-300 hover:scale-105">
                  Start Planning
                </button>
              </div>
              <div
                className="animate-fade-in-up"
                style={{ animationDelay: "0.8s" }}
              >
                <button className="border-2 border-white text-white px-10 py-4 rounded-full font-semibold text-lg hover:bg-white hover:text-black transition-colors duration-300 hover:scale-105">
                  View More Events
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
