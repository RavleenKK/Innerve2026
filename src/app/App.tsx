import {
  Calendar,
  Code,
  Trophy,
  Users,
  Cpu,
  CircuitBoard,
  Sparkles,
  ChevronRight,
  MapPin,
  Info,
} from "lucide-react";
import heroImage from "figma:asset/742e594b2ed6b1c3d597f3098c3bc053aa335f04.png";
import Slider from "react-slick";
import { useRef } from "react";

export default function App() {
  const gallerySliderRef = useRef<any>(null);
  const sponsorSliderRef = useRef<any>(null);

  const gallerySettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    rtl: true, // Slide from right to left
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  const sponsorSettings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2500,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 2,
        },
      },
    ],
  };

  return (
    <div className="size-full bg-black overflow-auto">
      {/* Header */}
      <header className="border-b border-cyan-500/20 bg-black/95 backdrop-blur sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Cpu className="w-8 h-8 text-cyan-400" />
            <span className="text-xl font-semibold bg-gradient-to-r from-cyan-400 to-orange-500 bg-clip-text text-transparent">
              INNERVE 2026
            </span>
          </div>
          <nav className="hidden md:flex gap-8">
            <a
              href="#home"
              className="text-white/80 hover:text-cyan-400 transition-colors"
            >
              HOME
            </a>
            <a
              href="#about"
              className="text-white/80 hover:text-cyan-400 transition-colors"
            >
              ABOUT
            </a>
            <a
              href="#events"
              className="text-white/80 hover:text-cyan-400 transition-colors"
            >
              EVENTS
            </a>
            <a
              href="#gallery"
              className="text-white/80 hover:text-cyan-400 transition-colors"
            >
              GALLERY
            </a>
            <a
              href="#sponsors"
              className="text-white/80 hover:text-cyan-400 transition-colors"
            >
              SPONSORS
            </a>
          </nav>
          <button className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-6 py-2 rounded-lg hover:opacity-90 transition-opacity">
            REGISTER
          </button>
        </div>
      </header>

      {/* Hero Section with Background Image */}
      <section
        id="home"
        className="relative border-b border-cyan-500/20 min-h-[600px] sm:min-h-[700px] flex items-center justify-center"
      >
        {/* Background Image */}
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${heroImage})` }}
        >
          <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black"></div>
        </div>

        {/* Content */}
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 sm:py-32">
          <div className="text-center">
            <h1 className="text-5xl sm:text-7xl lg:text-8xl mb-6 text-white font-bold tracking-wider">
              INNERVE'26
            </h1>
            <div className="text-4xl sm:text-6xl lg:text-7xl mb-8 font-bold bg-gradient-to-r from-cyan-400 via-purple-500 to-orange-500 bg-clip-text text-transparent">
              FUSION
            </div>
            <p className="text-xl sm:text-2xl text-white/90 max-w-2xl mx-auto mb-4 tracking-wide">
              Where Code Meets Circuit Meets Cosmos
            </p>
            <p className="text-lg text-cyan-300/80 mb-10">
              February 25, 2026
            </p>
          </div>
        </div>
      </section>

      {/* About Section - What is INNERVE, Venue, Date */}
      <section
        id="about"
        className="py-16 relative overflow-hidden bg-gradient-to-b from-black via-purple-950/20 to-black border-b border-cyan-500/20"
      >
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(6,182,212,0.15),transparent_70%)]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(251,146,60,0.15),transparent_50%)]"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl mb-4 text-white font-bold tracking-wide bg-gradient-to-r from-cyan-400 via-purple-400 to-orange-400 bg-clip-text text-transparent">
              ABOUT INNERVE
            </h2>
          </div>

          <div className="bg-gradient-to-r from-cyan-500/10 via-purple-500/10 to-orange-500/10 border-2 border-cyan-500/30 rounded-2xl p-8 backdrop-blur-sm">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
              {/* What is INNERVE */}
              <div className="text-center md:border-r border-cyan-500/30 px-4">
                <div className="inline-flex w-12 h-12 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-lg items-center justify-center mb-4">
                  <Info className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-lg text-cyan-400 mb-3 font-bold">
                  WHAT IS INNERVE?
                </h3>
                <p className="text-white/80 text-sm leading-relaxed">
                  The annual technical festival of IGDTUW,
                  celebrating innovation and technology with 50+
                  events across CODE, CIRCUIT & COSMOS domains.
                </p>
              </div>

              {/* Venue */}
              <div className="text-center md:border-r border-purple-500/30 px-4">
                <div className="inline-flex w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-600 rounded-lg items-center justify-center mb-4">
                  <MapPin className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-lg text-purple-400 mb-3 font-bold">
                  VENUE
                </h3>
                <p className="text-white/80 text-sm leading-relaxed">
                  IGDTUW, Kashmere Gate
                  <br />
                  New Delhi - 110006
                </p>
              </div>

              {/* Date & Time */}
              <div className="text-center px-4">
                <div className="inline-flex w-12 h-12 bg-gradient-to-r from-orange-500 to-red-600 rounded-lg items-center justify-center mb-4">
                  <Calendar className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-lg text-orange-400 mb-3 font-bold">
                  WHEN
                </h3>
                <p className="text-white/80 text-sm leading-relaxed">
                  February 25, 2026
                  <br />
                  9:00 AM onwards
                </p>
              </div>
            </div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center mt-12">
            {[
              {
                num: "50+",
                label: "Events",
                gradient: "from-cyan-400 to-blue-500",
              },
              {
                num: "5000+",
                label: "Participants",
                gradient: "from-purple-400 to-pink-500",
              },
              {
                num: "₹25L+",
                label: "Prize Pool",
                gradient: "from-orange-400 to-red-500",
              },
              {
                num: "100+",
                label: "Colleges",
                gradient: "from-green-400 to-emerald-500",
              },
            ].map((stat, i) => (
              <div key={i} className="group cursor-pointer">
                <div
                  className={`text-4xl md:text-5xl mb-2 bg-gradient-to-r ${stat.gradient} bg-clip-text text-transparent font-bold group-hover:scale-110 transition-transform`}
                >
                  {stat.num}
                </div>
                <div className="text-white/80 text-sm">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Event Categories with Hover Effect */}
      <section
        className="py-24 relative overflow-hidden bg-gradient-to-b from-black via-purple-950/20 to-black"
        id="events"
      >
        {/* Ambient glow effects */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-orange-500/10 rounded-full blur-3xl"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-20">
            <h2 className="text-5xl mb-6 text-white font-bold tracking-wide">
              EVENT DOMAINS
            </h2>
            <p className="text-xl text-white/70">
              Hover to explore competitions
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
            {[
              {
                icon: Code,
                title: "CODE",
                gradient:
                  "from-cyan-500 via-blue-500 to-cyan-600",
                bgGlow: "group-hover:shadow-cyan-500/50",
                events: [
                  "Hackathon 24hr",
                  "Competitive Programming",
                  "Web Development",
                  "App Development",
                  "Ideathon",
                ],
              },
              {
                icon: CircuitBoard,
                title: "CIRCUIT",
                gradient:
                  "from-purple-500 via-pink-500 to-purple-600",
                bgGlow: "group-hover:shadow-purple-500/50",
                events: [
                  "Robo Wars",
                  "Line Follower",
                  "Drone Racing",
                  "Hardware Hackathon",
                  "IoT Challenge",
                ],
              },
              {
                icon: Sparkles,
                title: "COSMOS",
                gradient:
                  "from-orange-500 via-red-500 to-orange-600",
                bgGlow: "group-hover:shadow-orange-500/50",
                events: [
                  "AI/ML Challenge",
                  "Quantum Computing",
                  "Research Symposium",
                  "Tech Talks",
                  "Innovation Expo",
                ],
              },
            ].map((category, i) => (
              <div
                key={i}
                className="relative group perspective-1000"
              >
                {/* Card */}
                <div
                  className={`relative bg-gradient-to-br from-gray-900 via-black to-gray-900 border-2 border-cyan-500/30 rounded-2xl p-8 transition-all duration-500 ease-out group-hover:-translate-y-8 group-hover:border-cyan-500/60 shadow-2xl ${category.bgGlow} group-hover:shadow-2xl`}
                >
                  {/* Icon */}
                  <div
                    className={`w-20 h-20 bg-gradient-to-r ${category.gradient} rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg`}
                  >
                    <category.icon className="w-10 h-10 text-white" />
                  </div>

                  {/* Title */}
                  <h3 className="text-4xl text-white mb-4 font-bold tracking-wider">
                    {category.title}
                  </h3>

                  {/* Subtitle */}
                  <p className="text-white/60 text-sm mb-6">
                    Explore events
                  </p>

                  {/* Events List - Initially Hidden */}
                  <div className="space-y-3 opacity-0 max-h-0 overflow-hidden group-hover:opacity-100 group-hover:max-h-96 transition-all duration-500 ease-out">
                    {category.events.map((event, j) => (
                      <div
                        key={j}
                        className="flex items-center gap-3 text-white/80 hover:text-white transition-colors"
                      >
                        <ChevronRight className="w-4 h-4 text-cyan-400" />
                        <span className="text-sm">{event}</span>
                      </div>
                    ))}
                  </div>

                  {/* Button */}
                  <button
                    className={`mt-6 w-full py-3 rounded-lg bg-gradient-to-r ${category.gradient} text-white font-semibold opacity-0 group-hover:opacity-100 transition-all duration-500 hover:scale-105`}
                  >
                    View All Events
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Section with Slider */}
      <section
        id="gallery"
        className="py-24 relative overflow-hidden bg-gradient-to-b from-black via-purple-950/10 to-black border-b border-cyan-500/20"
      >
        <div className="absolute top-0 left-1/3 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-5xl mb-6 text-white font-bold tracking-wide">
              GALLERY
            </h2>
            <p className="text-xl text-white/70">
              Moments from previous editions
            </p>
          </div>

          <Slider ref={gallerySliderRef} {...gallerySettings}>
            {[1, 2, 3, 4, 5, 6].map((i) => (
              <div key={i} className="px-4">
                <div className="bg-gradient-to-br from-gray-900 to-black border-2 border-cyan-500/30 rounded-xl overflow-hidden hover:border-cyan-500/60 transition-all hover:scale-105 duration-300">
                  <div className="aspect-video bg-gradient-to-br from-cyan-500/20 via-purple-500/20 to-orange-500/20 flex items-center justify-center">
                    <span className="text-white/50 text-4xl">
                      📷
                    </span>
                  </div>
                  <div className="p-4">
                    <p className="text-white/80 text-sm">
                      INNERVE 2025 - Event {i}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </section>

      {/* Sponsors Section with Slider */}
      <section
        className="py-24 relative overflow-hidden bg-gradient-to-b from-black via-blue-950/10 to-black"
        id="sponsors"
      >
        <div className="absolute bottom-0 right-1/3 w-96 h-96 bg-orange-500/10 rounded-full blur-3xl"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-5xl mb-6 text-white font-bold tracking-wide">
              OUR SPONSORS
            </h2>
            <p className="text-xl text-white/70">
              Powered by industry leaders
            </p>
          </div>

          <div className="space-y-16">
            {/* Title Sponsor */}
            <div>
              <h3 className="text-center text-cyan-400 mb-8 text-xl font-semibold">
                TITLE SPONSOR
              </h3>
              <div className="flex justify-center">
                <div className="w-72 h-36 bg-gradient-to-br from-gray-900 to-black rounded-xl flex items-center justify-center border-2 border-cyan-500/30 hover:border-cyan-500/60 transition-colors shadow-lg">
                  <span className="text-2xl text-white/50">
                    Company Logo
                  </span>
                </div>
              </div>
            </div>

            {/* Gold Sponsors Slider */}
            <div>
              <h3 className="text-center text-purple-400 mb-8 text-xl font-semibold">
                GOLD SPONSORS
              </h3>
              <Slider
                ref={sponsorSliderRef}
                {...sponsorSettings}
              >
                {[1, 2, 3, 4, 5, 6, 7, 8].map((i) => (
                  <div key={i} className="px-3">
                    <div className="h-28 bg-gradient-to-br from-gray-900 to-black rounded-xl flex items-center justify-center border-2 border-purple-500/30 hover:border-purple-500/60 transition-colors shadow-lg">
                      <span className="text-sm text-white/50">
                        Logo {i}
                      </span>
                    </div>
                  </div>
                ))}
              </Slider>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-16 border-t border-cyan-500/20 bg-gradient-to-b from-black to-gray-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <Cpu className="w-8 h-8 text-cyan-400" />
                <span className="text-xl font-semibold bg-gradient-to-r from-cyan-400 to-orange-500 bg-clip-text text-transparent">
                  INNERVE 2026
                </span>
              </div>
              <p className="text-sm text-white/70 leading-relaxed">
                Where Code Meets Circuit Meets Cosmos
              </p>
            </div>

            <div>
              <h4 className="mb-4 text-white font-semibold text-lg">
                QUICK LINKS
              </h4>
              <div className="space-y-3 text-sm text-white/70">
                <div className="hover:text-cyan-400 cursor-pointer transition-colors">
                  Home
                </div>
                <div className="hover:text-cyan-400 cursor-pointer transition-colors">
                  About
                </div>
                <div className="hover:text-cyan-400 cursor-pointer transition-colors">
                  Events
                </div>
                <div className="hover:text-cyan-400 cursor-pointer transition-colors">
                  Gallery
                </div>
              </div>
            </div>

            <div>
              <h4 className="mb-4 text-white font-semibold text-lg">
                DOMAINS
              </h4>
              <div className="space-y-3 text-sm text-white/70">
                <div className="hover:text-cyan-400 cursor-pointer transition-colors">
                  Hackathon
                </div>
                <div className="hover:text-cyan-400 cursor-pointer transition-colors">
                  Ideathon
                </div>
                <div className="hover:text-cyan-400 cursor-pointer transition-colors">
                  Mock Stocks
                </div>
              </div>
            </div>

            <div>
              <h4 className="mb-4 text-white font-semibold text-lg">
                CONTACT
              </h4>
              <div className="space-y-3 text-sm text-white/70">
                <div>info@innerve2026.com</div>
                <div>+91 1234567890</div>
                <div>IGDTUW, New Delhi</div>
              </div>
            </div>
          </div>

          <div className="border-t border-cyan-500/20 pt-8 flex flex-col sm:flex-row justify-between items-center gap-4 text-sm text-white/60">
            <div>© 2026 INNERVE. All rights reserved.</div>
            <div className="flex gap-8">
              <a
                href="#"
                className="hover:text-cyan-400 transition-colors"
              >
                Privacy Policy
              </a>
              <a
                href="#"
                className="hover:text-cyan-400 transition-colors"
              >
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}