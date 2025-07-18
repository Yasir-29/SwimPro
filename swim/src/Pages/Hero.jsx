import { ArrowRight, Play } from "lucide-react";
import { motion } from "framer-motion";

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
      className="relative min-h-screen flex flex-col justify-center items-center text-center px-4 py-16 bg-[#E0F7FA] text-[#003B73] overflow-hidden"
    >
      {/* Light aqua overlay */}
      <div className="absolute inset-0 bg-[#E0F7FA]/90"></div>

      {/* Content */}
      <motion.div 
        className="relative z-10 max-w-4xl animate-fade-up duration-1000"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
          Veni Enterprises<br className="hidden md:block" />
          <span className="text-[#00BFFF]">Swimming Pool</span> Designers & Contractors
        </h1>

        <p className="text-lg md:text-xl text-[#045D75] mb-10">
          Welcome to Veni Enterprises — delivering safe, affordable, and
          high-quality diving and swimming experiences since 2013. We specialize
          in pool construction, accessories, and waterproofing services trusted
          across India.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
          <button
            onClick={() => scrollToSection("contact")}
            className="bg-[#00BFFF] hover:bg-[#009ACD] text-white rounded-xl px-8 py-4 text-lg font-semibold transition duration-300 flex items-center shadow-md hover:scale-105"
          >
            Get Free Quote
            <ArrowRight className="ml-2 w-5 h-5" />
          </button>

          <button
            onClick={() => scrollToSection("projects")}
            className="border-2 border-[#003B73] text-[#003B73] hover:bg-[#003B73] hover:text-white rounded-xl px-8 py-4 text-lg font-semibold transition duration-300 flex items-center shadow-md hover:scale-105"
          >
            <Play className="mr-2 w-5 h-5" />
            Explore Projects
          </button>
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-2 gap-6 md:gap-0 md:grid-cols-2 border-t-4 border-[#045D75]/40 pt-8 mt-4">
          <div className="text-center">
            <div className="text-4xl font-bold text-[#00BFFF]">10+</div>
            <div className="text-[#045D75] text-lg font-medium">Years Experience</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-[#00BFFF]">100%</div>
            <div className="text-[#045D75] text-lg font-medium">Client Satisfaction</div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
