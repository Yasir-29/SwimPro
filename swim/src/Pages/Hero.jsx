import { ArrowRight, Play } from "lucide-react";
import backgroundImage from "../assets/react.svg";


export default function Hero() {
  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex flex-col justify-center items-center text-center px-4 py-16 bg-[#0B1B30] text-white overflow-hidden"
    >
      {/* Background overlay */}
      <div
        className="absolute inset-0 bg-cover bg-center opacity-20"
        style={{ backgroundImage: `url(${backgroundImage})` }}
      ></div>
      <div className="absolute inset-0 bg-[#0B1B30]/80"></div>

      {/* Content */}
      <div className="relative z-10 max-w-4xl animate-fade-up duration-1000">
        <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
          India's Leading <br className="hidden md:block" />
          <span className="text-[#00BFFF]">Swimming Pool</span> Designers & Contractors
        </h1>

        <p className="text-lg md:text-xl text-gray-200 mb-10">
          Welcome to Veni Enterprises — delivering safe, affordable, and
          high-quality diving and swimming experiences since 2013. We specialize
          in pool construction, accessories, and waterproofing services trusted
          across India.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
          <button
            onClick={() => scrollToSection("contact")}
            className="bg-[#00BFFF] hover:bg-[#0099CC] text-white rounded-xl px-8 py-4 text-lg font-semibold transition duration-300 flex items-center shadow-md hover:scale-105"
          >
            Get Free Quote
            <ArrowRight className="ml-2 w-5 h-5" />
          </button>

          <button
            onClick={() => scrollToSection("projects")}
            className="border-2 border-white text-white hover:bg-white hover:text-[#0B1B30] rounded-xl px-8 py-4 text-lg font-semibold transition duration-300 flex items-center shadow-md hover:scale-105"
          >
            <Play className="mr-2 w-5 h-5" />
            Explore Projects
          </button>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 border-t border-white/20 pt-8">
          <div className="text-center">
            <div className="text-3xl font-bold text-[#00BFFF]">500+</div>
            <div className="text-gray-200">Projects Completed</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-[#00BFFF]">10+</div>
            <div className="text-gray-200">Years Experience</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-[#00BFFF]">25+</div>
            <div className="text-gray-200">Cities Served</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-[#00BFFF]">100%</div>
            <div className="text-gray-200">Client Satisfaction</div>
          </div>
        </div>
      </div>
    </section>
  );
}
