import React from "react";
import { Link } from "react-router-dom";
import Button from "./Button";

const Hero = () => {
  return (
    <div className="relative bg-[#0B1B30] min-h-[80vh] flex items-center justify-center overflow-hidden">
      {/* Background Image Overlay */}
      <img
        src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1200&q=80"
        alt="Pool Design Hero"
        className="absolute inset-0 w-full h-full object-cover opacity-40"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-[#0B1B30]/80 to-[#00BFFF]/30" />
      <div className="relative z-10 max-w-3xl mx-auto text-center px-4 py-24">
        <h1 className="text-4xl md:text-6xl font-extrabold text-white mb-6 drop-shadow-lg">
          Transform Your Pool Dreams Into Reality
        </h1>
        <p className="text-lg md:text-2xl text-white/90 mb-8 max-w-2xl mx-auto">
          Custom pool design, construction, and renovation for luxury homes and resorts. Experience the art of aquatic living with SwimDesigners.
        </p>

        {/* Buttons with Routing */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link to="/contact">
            <Button className="text-lg px-8 py-3">Get Started</Button>
          </Link>
          <Link to="/projects">
            <Button className="bg-white text-[#0B1B30] hover:bg-[#F3F4F6] shadow-md text-lg px-8 py-3">
              View Projects
            </Button>
          </Link>
        </div>
      </div>

      {/* Decorative SVG Wave */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none rotate-180">
        <svg viewBox="0 0 1440 100" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path fill="#F3F4F6" d="M0,0 C480,100 960,0 1440,100 L1440,100 L0,100 Z" />
        </svg>
      </div>
    </div>
  );
};

export default Hero;
