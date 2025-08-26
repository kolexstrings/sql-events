import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import Image from "next/image";
import {
  Target,
  Award,
  Target as TargetIcon,
  Cpu,
  Wrench,
  Flag,
  Zap,
  Globe,
} from "lucide-react";

export default function About() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navigation />

      {/* Hero Section */}
      <section className="relative pt-20 sm:pt-24 md:pt-28 lg:pt-32 pb-12 sm:pb-16 md:pb-20 px-4 sm:px-6 bg-white dark:bg-slate-950 overflow-hidden">
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
          <div className="absolute top-1/2 -right-20 w-40 h-40 border border-primary/20 rounded-full gsap-bg-shape-1 animate-spin-slow"></div>
          <div className="absolute top-1/3 -left-16 w-32 h-32 border border-secondary/20 rounded-full gsap-bg-shape-2 animate-spin-slow-reverse"></div>
          <div className="absolute bottom-1/3 right-1/4 w-28 h-28 border border-accent/20 rounded-full gsap-bg-shape-3 animate-spin-slow"></div>
          <div className="absolute top-1/4 right-1/3 w-24 h-24 border border-primary/15 rounded-full gsap-bg-shape-7 animate-spin-slow-reverse"></div>
          <div className="absolute bottom-1/4 -left-12 w-36 h-36 border border-secondary/15 rounded-full gsap-bg-shape-8 animate-spin-slow"></div>

          {/* Floating Squares */}
          <div className="absolute top-1/4 left-1/4 w-16 h-16 border border-primary/15 rotate-45 gsap-bg-shape-4 animate-float"></div>
          <div className="absolute top-2/3 right-1/3 w-12 h-12 border border-secondary/15 rotate-45 gsap-bg-shape-5 animate-float-delayed"></div>
          <div className="absolute bottom-1/4 left-1/2 w-20 h-20 border border-accent/15 rotate-45 gsap-bg-shape-6 animate-float-slow"></div>
          <div className="absolute top-1/2 left-1/3 w-14 h-14 border border-primary/20 rotate-45 gsap-bg-shape-9 animate-float-delayed"></div>
          <div className="absolute bottom-1/3 right-1/6 w-18 h-18 border border-accent/20 rotate-45 gsap-bg-shape-10 animate-float-slow"></div>

          {/* Triangles */}
          <div className="absolute top-1/6 right-1/4 w-0 h-0 border-l-[12px] border-l-transparent border-r-[12px] border-r-transparent border-b-[20px] border-b-primary/20 gsap-triangle-1 animate-float-slow"></div>
          <div className="absolute bottom-1/6 left-1/6 w-0 h-0 border-l-[16px] border-l-transparent border-r-[16px] border-r-transparent border-b-[28px] border-b-secondary/20 gsap-triangle-2 animate-float-delayed"></div>
          <div className="absolute top-3/4 right-1/6 w-0 h-0 border-l-[10px] border-l-transparent border-r-[10px] border-r-transparent border-b-[18px] border-b-accent/20 gsap-triangle-3 animate-float"></div>

          {/* Hexagons */}
          <div className="absolute top-1/3 left-1/8 w-8 h-8 bg-primary/10 clip-hexagon gsap-hexagon-1 animate-float-slow"></div>
          <div className="absolute bottom-1/3 right-1/8 w-6 h-6 bg-secondary/10 clip-hexagon gsap-hexagon-2 animate-float-delayed"></div>

          {/* Animated Dots */}
          <div className="absolute top-1/3 left-1/6 w-2 h-2 bg-primary/40 rounded-full gsap-particle-1 animate-bounce"></div>
          <div className="absolute top-2/3 right-1/4 w-1.5 h-1.5 bg-secondary/40 rounded-full gsap-particle-2 animate-bounce-delayed"></div>
          <div className="absolute bottom-1/3 left-2/3 w-1 h-1 bg-accent/40 rounded-full gsap-particle-3 animate-bounce-slow"></div>
          <div className="absolute top-1/6 right-1/6 w-1.5 h-1.5 bg-primary/30 rounded-full gsap-particle-4 animate-bounce-delayed"></div>
          <div className="absolute bottom-1/6 right-1/3 w-2.5 h-2.5 bg-secondary/30 rounded-full gsap-particle-5 animate-bounce-slow"></div>
          <div className="absolute top-1/2 left-1/8 w-1 h-1 bg-accent/50 rounded-full gsap-particle-6 animate-bounce"></div>

          {/* Floating Lines */}
          <div className="absolute top-1/2 left-1/6 w-16 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent gsap-line-1 animate-float-horizontal"></div>
          <div className="absolute top-1/3 right-1/6 w-20 h-px bg-gradient-to-r from-transparent via-secondary/30 to-transparent gsap-line-2 animate-float-horizontal-delayed"></div>
          <div className="absolute bottom-1/3 left-1/3 w-12 h-px bg-gradient-to-r from-transparent via-accent/30 to-transparent gsap-line-3 animate-float-horizontal-slow"></div>
          <div className="absolute top-1/4 left-1/2 w-14 h-px bg-gradient-to-r from-transparent via-primary/25 to-transparent gsap-line-4 animate-float-horizontal"></div>
          <div className="absolute bottom-1/4 right-1/2 w-18 h-px bg-gradient-to-r from-transparent via-secondary/25 to-transparent gsap-line-5 animate-float-horizontal-delayed"></div>

          {/* Diagonal Lines */}
          <div className="absolute top-1/4 right-1/4 w-20 h-px bg-gradient-to-r from-transparent via-accent/20 to-transparent transform rotate-45 gsap-diagonal-1 animate-float-horizontal-slow"></div>
          <div className="absolute bottom-1/4 left-1/4 w-16 h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent transform -rotate-45 gsap-diagonal-2 animate-float-horizontal"></div>

          {/* Pulsing Circles */}
          <div className="absolute top-1/2 left-1/4 w-3 h-3 bg-primary/30 rounded-full gsap-pulse-1 animate-pulse"></div>
          <div className="absolute top-1/4 right-1/4 w-2 h-2 bg-secondary/30 rounded-full gsap-pulse-2 animate-pulse-delayed"></div>
          <div className="absolute bottom-1/4 left-1/3 w-2.5 h-2.5 bg-accent/30 rounded-full gsap-pulse-3 animate-pulse-slow"></div>

          {/* Floating Arrows */}
          <div className="absolute top-1/3 right-1/3 w-6 h-6 text-primary/20 gsap-arrow-1 animate-float-slow">
            <svg fill="currentColor" viewBox="0 0 24 24">
              <path d="M7 17l9.2-9.2M17 17V7.8H7.8" />
            </svg>
          </div>
          <div className="absolute bottom-1/3 left-1/4 w-5 h-5 text-secondary/20 gsap-arrow-2 animate-float-delayed">
            <svg fill="currentColor" viewBox="0 0 24 24">
              <path d="M17 7l-9.2 9.2M7 7v9.2h9.2" />
            </svg>
          </div>
        </div>

        {/* Subtle Logo Watermark */}
        <div className="absolute right-0 top-1/2 transform -translate-y-1/2 pointer-events-none opacity-5">
          <Image
            src="/logo.png"
            alt="SQL Events Logo Watermark"
            width={800}
            height={800}
            className="w-[800px] h-[800px] object-contain"
          />
        </div>

        <div className="container--wide relative z-10">
          <div className="text-center text-slate-900 dark:text-white">
            <div
              className="animate-fade-in-up"
              style={{ animationDelay: "0.2s" }}
            >
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6">
                About Us
              </h1>
            </div>
          </div>
        </div>
      </section>

      {/* Vision & Mission Section */}
      <section className="py-24 bg-background relative overflow-hidden">
        <div className="container--wide">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div
              className="animate-fade-in-up"
              style={{ animationDelay: "0.2s" }}
            >
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
                <div
                  className="group animate-fade-in-up"
                  style={{ animationDelay: "0.4s" }}
                >
                  <div className="flex items-center mb-4">
                    <Target className="w-8 h-8 text-primary mr-3" />
                    <h3 className="text-2xl font-semibold text-foreground">
                      Vision
                    </h3>
                  </div>
                  <p className="text-xl text-muted-foreground leading-relaxed">
                    To be a leading Events & Conference Management company in
                    Africa, marshalling the best in knowledge, human capital and
                    technology to innovatively provide the best possible
                    business solution to our clients, creating value and growth
                    for ourselves and business partners.
                  </p>
                </div>
                <div
                  className="group animate-fade-in-up"
                  style={{ animationDelay: "0.6s" }}
                >
                  <div className="flex items-center mb-4">
                    <Award className="w-8 h-8 text-secondary mr-3" />
                    <h3 className="text-2xl font-semibold text-foreground">
                      Mission
                    </h3>
                  </div>
                  <p className="text-xl text-muted-foreground leading-relaxed">
                    Marshalling the best in knowledge, human capital and
                    technology to help our clients achieve their strategic goals
                    through the provision of excellent, unique value-added
                    services and products specific to their profile.
                  </p>
                </div>
              </div>
            </div>
            <div
              className="relative animate-fade-in-up"
              style={{ animationDelay: "0.8s" }}
            >
              <div className="rounded-3xl h-96 overflow-hidden border border-border/20">
                <Image
                  src="/mission.jpg"
                  alt="Mission"
                  width={400}
                  height={400}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Company Overview Section */}
      <section className="py-24 bg-card relative overflow-hidden">
        {/* Subtle Logo Watermark */}
        <div className="absolute left-0 top-1/2 transform -translate-y-1/2 pointer-events-none opacity-5">
          <Image
            src="/logo.png"
            alt="SQL Events Logo Watermark"
            width={800}
            height={800}
            className="w-[800px] h-[800px] object-contain"
          />
        </div>
        <div className="container--wide">
          <div className="text-center mb-16">
            <div
              className="animate-fade-in-up"
              style={{ animationDelay: "0.2s" }}
            >
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">
                Company Overview
              </h2>
            </div>
            <div
              className="animate-fade-in-up"
              style={{ animationDelay: "0.4s" }}
            >
              <p className="text-xl text-muted-foreground max-w-4xl mx-auto">
                SQL Events Nigeria is a premier corporate events and conference
                management company that has been at the forefront of the
                Nigerian events industry.
              </p>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            <div
              className="space-y-6 animate-fade-in-up"
              style={{ animationDelay: "0.6s" }}
            >
              <h3 className="text-2xl font-semibold text-foreground">
                Who We Are
              </h3>
              <p className="text-xl text-muted-foreground leading-relaxed">
                SQL Events Nigeria is a premier corporate events & conference
                management company operating in the meetings, incentives,
                conferences, and events industry. We also provide media and
                marketing consultancy services.
              </p>
              <p className="text-xl text-muted-foreground leading-relaxed">
                We work with clients from conceptualization through planning to
                delivery, offering first-rate international event experiences
                regardless of size. Our expertise spans public sector, private
                sector, international NGOs, and professional associations.
              </p>
            </div>
            <div
              className="space-y-6 animate-fade-in-up"
              style={{ animationDelay: "0.8s" }}
            >
              <h3 className="text-2xl font-semibold text-foreground">
                What We Do
              </h3>
              <p className="text-xl text-muted-foreground leading-relaxed">
                We provide management, support services and consultancy to the
                MICE industry with special emphasis on conferences, Annual
                General Meetings, Exhibitions, Seminars, Workshops, Festivals,
                Entertainment, Shows, Product launches, and Award Nights.
              </p>
              <p className="text-xl text-muted-foreground leading-relaxed">
                Our comprehensive approach ensures every event is executed with
                precision, leveraging our expertise in technology integration
                and industry best practices to deliver exceptional results.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Approach Section */}
      <section className="py-12 sm:py-16 md:py-20 lg:py-24 bg-background relative overflow-hidden">
        <div className="container--wide">
          <div className="text-center mb-12 sm:mb-16">
            <div
              className="animate-fade-in-up"
              style={{ animationDelay: "0.2s" }}
            >
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-foreground mb-4 sm:mb-6">
                Our Approach
              </h2>
            </div>
            <div
              className="animate-fade-in-up"
              style={{ animationDelay: "0.4s" }}
            >
              <p className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
                A systematic methodology that ensures every event is executed
                flawlessly
              </p>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-6 sm:gap-8 animate-fade-in-up">
            {[
              {
                step: "01",
                title: "Full Event Management",
                description:
                  "Complete end-to-end event planning and execution, from conceptualization through all planning stages to final delivery, managing events with 300+ to 8,000+ participants.",
                icon: <TargetIcon className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12" />,
                color: "from-primary to-secondary",
              },
              {
                step: "02",
                title: "Technology Integration",
                description:
                  "Professional event management software handling online registration, abstract management, membership management, RFID access control, and comprehensive event technology solutions.",
                icon: <Cpu className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12" />,
                color: "from-secondary to-accent",
              },
              {
                step: "03",
                title: "Comprehensive Support",
                description:
                  "Conference materials supply, onsite registration management, and full event support services ensuring every aspect of your event is professionally managed.",
                icon: <Wrench className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12" />,
                color: "from-accent to-primary",
              },
            ].map((phase, index) => (
              <div
                key={index}
                className="text-center group hover:scale-105 transition-transform duration-300 animate-fade-in-up"
                style={{ animationDelay: `${0.6 + index * 0.2}s` }}
              >
                <div
                  className={`bg-gradient-to-br ${phase.color} rounded-2xl sm:rounded-3xl p-6 sm:p-8 mb-4 sm:mb-6 relative group-hover:scale-105 transition-transform duration-300`}
                >
                  <div className="absolute -top-3 sm:-top-4 -right-3 sm:-right-4 bg-foreground text-background text-xs sm:text-sm font-bold px-2 sm:px-3 py-1 rounded-full">
                    {phase.step}
                  </div>
                  <div className="text-3xl sm:text-4xl md:text-5xl mb-3 sm:mb-4">{phase.icon}</div>
                </div>
                <h3 className="text-lg sm:text-xl md:text-2xl font-semibold text-foreground mb-3 sm:mb-4">
                  {phase.title}
                </h3>
                <p className="text-sm sm:text-base md:text-lg lg:text-xl text-muted-foreground leading-relaxed">
                  {phase.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Values Section */}
      <section className="py-12 sm:py-16 md:py-20 lg:py-24 bg-card relative overflow-hidden">
        <div className="container--wide">
          <div className="text-center mb-12 sm:mb-16">
            <div
              className="animate-fade-in-up"
              style={{ animationDelay: "0.2s" }}
            >
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-foreground mb-4 sm:mb-6">
                Our Core Values
              </h2>
            </div>
            <div
              className="animate-fade-in-up"
              style={{ animationDelay: "0.4s" }}
            >
              <p className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
                The principles that guide everything we do
              </p>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-6 sm:gap-8 animate-fade-in-up">
            {[
              {
                title: "Nigerian Excellence",
                description:
                  "100% Nigerian-owned company with deep understanding of local business landscape, cultural nuances, and government relations across all regions.",
                icon: <Flag className="w-8 h-8 sm:w-10 sm:h-10 text-white" />,
                color: "from-green-500 to-blue-500",
              },
              {
                title: "Technology Innovation",
                description:
                  "Leading-edge event management software solutions including RFID access control, online registration, and comprehensive event technology platforms.",
                icon: <Zap className="w-8 h-8 sm:w-10 sm:h-10 text-white" />,
                color: "from-blue-500 to-purple-500",
              },
              {
                title: "Strategic Growth",
                description:
                  "Expanding strategically across Nigeria and West Africa, with offices in Abuja, Lagos, Port Harcourt, and plans for Ghana operations.",
                icon: <Globe className="w-8 h-8 sm:w-10 sm:h-10 text-white" />,
                color: "from-purple-500 to-pink-500",
              },
            ].map((value, index) => (
              <div
                key={index}
                className="bg-background p-6 sm:p-8 rounded-xl sm:rounded-2xl shadow-sm hover:shadow-lg transition-all duration-300 text-center group hover:scale-105 animate-fade-in-up"
                style={{ animationDelay: `${0.6 + index * 0.2}s` }}
              >
                <div
                  className={`w-16 h-16 sm:w-18 sm:h-18 md:w-20 md:h-20 bg-gradient-to-br ${value.color} rounded-full flex items-center justify-center mx-auto mb-4 sm:mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg`}
                >
                  {value.icon}
                </div>
                <h3 className="text-lg sm:text-xl md:text-2xl font-semibold text-foreground mb-3 sm:mb-4">
                  {value.title}
                </h3>
                <p className="text-sm sm:text-base md:text-lg lg:text-xl text-muted-foreground leading-relaxed">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 sm:py-16 md:py-20 lg:py-24 bg-slate-900 dark:bg-slate-950 relative overflow-hidden">
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
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold mb-4 sm:mb-6">
                Ready to Work With Us?
              </h2>
            </div>
            <div
              className="animate-fade-in-up"
              style={{ animationDelay: "0.4s" }}
            >
              <p className="text-base sm:text-lg md:text-xl mb-6 sm:mb-8 text-white/90 max-w-3xl mx-auto">
                Let&apos;s discuss how we can bring your event vision to life
                with our innovative approach.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center">
              <div
                className="animate-fade-in-up"
                style={{ animationDelay: "0.6s" }}
              >
                <button className="bg-white text-black px-6 sm:px-8 md:px-10 py-3 sm:py-4 rounded-full font-semibold text-base sm:text-lg hover:bg-gray-100 transition-colors duration-300 hover:scale-105">
                  Get Started
                </button>
              </div>
              <div
                className="animate-fade-in-up"
                style={{ animationDelay: "0.8s" }}
              >
                <button className="border-2 border-white text-white px-6 sm:px-8 md:px-10 py-3 sm:py-4 rounded-full font-semibold text-base sm:text-lg hover:bg-white hover:text-black transition-colors duration-300 hover:scale-105">
                  Contact Us
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
