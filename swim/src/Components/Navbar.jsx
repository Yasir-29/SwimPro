import React from "react";
import Button from "./Button";

const Navbar = () => {
  return (
    <nav className="bg-white/80 backdrop-blur sticky top-0 z-50 shadow-md">
      <div className="max-w-7xl mx-auto px-4 flex items-center justify-between h-20">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <span className="text-2xl font-bold text-[#0B1B30] tracking-tight">SwimDesigners</span>
        </div>
        {/* Nav Links */}
        <div className="hidden md:flex gap-8 text-[#0B1B30] font-medium">
          <a href="#home" className="hover:text-[#00BFFF] transition">Home</a>
          <a href="#about" className="hover:text-[#00BFFF] transition">About</a>
          <a href="#services" className="hover:text-[#00BFFF] transition">Services</a>
          <a href="#projects" className="hover:text-[#00BFFF] transition">Projects</a>
          <a href="#why" className="hover:text-[#00BFFF] transition">Why Us</a>
          <a href="#testimonials" className="hover:text-[#00BFFF] transition">Testimonials</a>
          <a href="#contact" className="hover:text-[#00BFFF] transition">Contact</a>
        </div>
        {/* CTA Button */}
        <div className="hidden md:block">
          <Button>Request Quote</Button>
        </div>
        {/* Mobile Menu Icon */}
        <div className="md:hidden flex items-center">
          <button className="text-[#0B1B30] focus:outline-none">
            <svg width="28" height="28" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar; 